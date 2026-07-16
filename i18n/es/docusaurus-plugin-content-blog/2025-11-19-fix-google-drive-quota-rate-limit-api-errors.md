---
slug: fix-google-drive-quota-rate-limit-api-errors
title: "Soluciona los errores de cuota, límite de velocidad y API de Google Drive con RcloneView"
authors:
  - tayson
description: Supera la cuota de 750 GB/día de Google Drive, el error userRateLimitExceeded y los errores aleatorios de la API usando el ajuste visual de tareas, el Programador y los diagnósticos de RcloneView, integrados sobre el motor rclone.
keywords:
  - rcloneview
  - google drive quota error
  - google drive rate limit
  - userRateLimitExceeded
  - rclone drive api
  - fix google drive 403
  - drive api automation
tags:
  - google-drive
  - troubleshooting
  - automation
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona los errores de cuota, límite de velocidad y API de Google Drive con RcloneView

> ¿Cansado de `userRateLimitExceeded`, `quotaExceeded` o respuestas 429 aleatorias? RcloneView ofrece a los usuarios avanzados de Google Drive un conjunto de herramientas gráficas para predecir, sortear y recuperarse de la limitación de la API sin tener que vigilar scripts constantemente.

Ya sea que estés archivando bibliotecas multimedia, consolidando Shared Drives o sincronizando MEGA con Google Workspace, tarde o temprano alcanzarás los límites de Drive:
- Cuota de **750 GB/día** de carga y copia por usuario
- **5 TB** de tamaño máximo de archivo (formatos que no son de Google Docs)
- Llamadas a la API limitadas por ráfagas (`userRateLimitExceeded`, `rateLimitExceeded`, 429)
- Fallos ocasionales del backend (5xx, reinicios de conexión)

En lugar de ejecuciones de CLI por prueba y error, esta guía muestra cómo mantener las tareas funcionando a través del Explorador, el Programador y los diagnósticos de RcloneView para que cada transferencia se reanude exactamente donde se quedó.

<!-- truncate -->

## Comprende los errores de Drive antes de reaccionar

| Texto del error | Causa raíz | Solución en RcloneView |
| --- | --- | --- |
| `userRateLimitExceeded`, `rateLimitExceeded` | Demasiadas solicitudes por segundo de un mismo usuario/proyecto | Reduce **Checkers/Transfers**, activa `--tpslimit`, escalona las ventanas del Programador |
| `quotaExceeded`, `403: insufficient storage` | Los bytes de carga y copia superaron los 750 GB/día O el Drive de destino está lleno | Divide las tareas por carpeta, agrega pausas entre lotes, elige otra cuenta o espera al reinicio |
| `403: The user does not have sufficient permissions for file` | Shared Drive o propiedad de archivo incorrectos | Usa **Comparar** para inspeccionar rutas, verifica la membresía del Shared Drive |
| `5xx backendError` / `Internal Error` | Interrupción transitoria de Google | Activa los reintentos, el retroceso exponencial y deja que el Programador reanude |
| `drive: rateLimitExceeded: Too many requests for this file` | Actualización rápida de un solo archivo | Activa las transferencias fragmentadas, limita la concurrencia |

RcloneView muestra estos mensajes en el Historial de tareas y en los registros para que puedas identificar la marca de tiempo exacta y el objeto que falló.

## Paso 1 — Establece una línea base de tu uso de Drive

1. **Comprueba la cuota restante**: En la administración de Google Workspace o la configuración de Drive, confirma el almacenamiento disponible para el usuario o Shared Drive de destino.
2. **Segmenta el conjunto de datos**: Usa el Explorador de RcloneView para agrupar la migración en carpetas lógicas (`Finance FY24`, `Video RAW`, etc.). Arrastra y suelta en carpetas de preparación para calcular el tamaño.
3. **Ejecuta Comparar**: La [guía de comparación de carpetas](/howto/rcloneview-basic/compare-folder-contents) te ayuda a previsualizar las diferencias y evitar copiar duplicados que consumen la cuota.

<CloudSupportGrid />

## Paso 2 — Ajusta las transferencias antes de programar

Abre **Administrador de tareas → Agregar tarea** (consulta [Crear tareas de sincronización](/howto/rcloneview-basic/create-sync-jobs)) y presta atención a estos ajustes:

- **Transfers vs. Checkers**: Configura las transferencias en `4-8` para redes de 1 Gbps; baja a `2` cuando aumenten los errores. Los checkers en `4` mantienen la verificación saludable sin saturar la API.
- **Tamaño de fragmento**: Deja los valores predeterminados salvo que Google limite las cargas de videos enormes; en ese caso, reduce el tamaño de fragmento para disminuir la carga en ráfagas.
- **`--drive-stop-on-upload-limit`**: Activa esta opción (casilla en Opciones avanzadas) para que RcloneView se pause con elegancia en cuanto se consuman los 750 GB, en lugar de generar errores 403 repetidos.
- **Límites de ancho de banda**: En **Configuración → Transfers**, establece por ejemplo `200 Mbps` para mantener tranquilas las redes locales.

Guarda la tarea con un nombre descriptivo como `Drive-Master-Library-Sync`.

## Paso 3 — Programa en función de las cuotas

Usa el Programador (Paso 4 del asistente de tareas) para minimizar colisiones:

1. Activa **Habilitar Programador** y selecciona ventanas **Diarias** u **Horarias**.
2. Ejecuta las cargas grandes *durante la noche en hora local* para que coincidan con las horas más tranquilas de Drive.
3. Encadena varias tareas con horas de inicio escalonadas (por ejemplo, `01:00`, `03:30`, `06:00`) para repartir las cuotas a lo largo de la ventana de reinicio.
4. Activa los **Reintentos** (3-5) con retroceso exponencial. RcloneView reanuda automáticamente exactamente donde se detuvo, porque rclone almacena las sumas de verificación de archivos y las transferencias parciales.
5. Activa las **Notificaciones** para recibir alertas por correo electrónico/webhook cada vez que Google emita una advertencia de cuota.

**Comando de ejemplo mostrado en Detalles de la tarea**

```bash
rclone copy gdrive-main:Video gdrive-archive:Video ^
  --transfers=4 ^
  --checkers=4 ^
  --drive-stop-on-upload-limit ^
  --tpslimit=8 ^
  --retries=5 --low-level-retries=10
```

Nunca necesitas ejecutar esto manualmente, pero documenta la mitigación para auditorías.

## Paso 4 — Reacciona cuando ocurran errores

- **Se alcanzan los 750 GB/día**: La tarea se pausa con una entrada de registro clara. Duplica la tarea, cambia la subcarpeta de origen o espera al siguiente reinicio a medianoche UTC. El Programador se reanuda automáticamente.
- **userRateLimitExceeded**: Reduce transfers/checkers, agrega `--tpslimit` (pestaña Avanzado) y considera mover las credenciales de la API a un proyecto de Google Cloud dedicado para obtener una cuota mayor por proyecto.
- **429 Too Many Requests**: Configura el Programador para ejecutarse cada hora con lotes más pequeños (usa el filtro **Incluir/Excluir** para dividir directorios). Activa `--drive-chunk-size=64M` para suavizar las ráfagas.
- **Permisos de Shared Drive**: Usa el Explorador para abrir el destino al menos una vez; si Drive genera errores de permisos, cambia a un usuario que sea Administrador/Administrador de contenido en ese Shared Drive.
- **5xx**: Deja que se activen los reintentos. Si el mismo objeto falla repetidamente, márcalo como omitido mediante Comparar para poder seguir avanzando con el resto mientras investigas.

Todos los eventos se registran en el **Historial de tareas** con registros descargables, de modo que la evidencia para tickets de soporte o informes de cumplimiento está a un clic de distancia.

## Paso 5 — Supervisa de forma proactiva

- **Panel de transferencia**: Observa los gráficos de ancho de banda y el estado por archivo para detectar la limitación al instante.
- **Comparar después de la automatización**: Vuelve a ejecutar Comparar (Simulación) para confirmar que no quedan diferencias pendientes una vez que se reinician las cuotas.
- **Línea de tiempo de actividad**: La vista del Programador muestra "Última ejecución / Próxima ejecución / Estado" para que sepas exactamente cuándo se pausa el flujo por las cuotas.
- **Notificaciones**: Conecta las tareas a Slack/correo electrónico para que las alertas de límite de velocidad lleguen al equipo correcto antes de que los usuarios noten archivos faltantes.
- **Iniciar al arrancar sesión**: Actívalo en Configuración para que RcloneView + Programador sobrevivan a los reinicios de la estación de trabajo.

## Buenas prácticas para equipos que usan mucho Drive

1. **Rota las cuentas de servicio**: Para los administradores de Workspace, asigna cuentas de servicio separadas por departamento para distribuir las cuotas.
2. **Prepara los archivos multimedia grandes localmente**: Sincroniza primero con un NAS local y luego deja que RcloneView refleje ese NAS en Drive durante la noche, dividiendo el uso de la API.
3. **Etiqueta las tareas por prioridad**: Los datos críticos obtienen ventanas nocturnas; los archivos no urgentes se ejecutan semanalmente.
4. **Documenta los preajustes**: Exporta las definiciones de las tareas para que los compañeros reutilicen configuraciones ya ajustadas en lugar de inventar otras que choquen con los límites de velocidad.
5. **Conserva los registros**: Almacena los registros de RcloneView (JSON/CSV) en un depósito de auditoría para demostrar que cada evento de cuota fue gestionado.

## Preguntas frecuentes

**¿Cómo sé qué archivo alcanzó el límite?**  
Abre Historial de tareas → Ver registro. La ruta exacta del archivo aparece justo encima del mensaje de error, para que puedas volver a ejecutar solo ese directorio.

**¿Puedo sortear el límite de 750 GB/día?**  
No directamente. Divide los datos entre varias cuentas de Google (cada una con su propia cuota) o espera al reinicio. Los filtros de RcloneView ayudan a segmentar carpetas sin moverlas manualmente.

**¿Reducir las transferencias ralentiza todo?**  
Puede que sí, pero es mejor que hacer que las tareas fallen. Combina menos transferencias con ejecuciones más frecuentes del Programador para que el rendimiento neto siga cumpliendo los SLA.

**¿Qué pasa si Drive bloquea mi clave de API?**  
Crea un proyecto de Google Cloud exclusivo para RcloneView/rclone, agrega credenciales OAuth y limita el acceso a operadores de confianza. Rota la clave si se detecta abuso.

## Mantén saludables las migraciones a Drive

Las cuotas y los límites de velocidad de Drive son permanentes, pero con RcloneView puedes planificarlos, recibir alertas tempranas y reanudar automáticamente cuando Google vuelva a dar luz verde. Ajusta las tareas una vez, prográmalas y deja que la GUI aplique las buenas prácticas para que nunca tengas que vigilar reintentos manuales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
