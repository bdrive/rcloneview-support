---
slug: troubleshoot-rclone-errors-rcloneview
title: "Solución de errores de rclone con RcloneView: corrige límites de API, permisos, tiempos de espera y más"
authors:
  - tayson
description: "Diagnostica y corrige errores comunes de rclone usando el Terminal de RcloneView, los registros de trabajos y el historial para resolver límites de API, problemas de permisos, tiempos de espera y advertencias de integridad de datos."
keywords:
  - rclone error fix
  - rclone troubleshooting
  - rclone api rate limit
  - rclone permission denied
  - rclone timeout
  - rclone quota exceeded
  - rclone debugging
  - rcloneview errors
  - rclone cli gui
  - cloud automation
  - rcloneview
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - file-management
unlisted: true

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solución de errores de rclone con RcloneView: corrige límites de API, permisos, tiempos de espera y más

> Rclone es potente, pero errores como límites de tasa 403, tiempos de espera o "permission denied" pueden detener una migración. RcloneView combina la visibilidad de la CLI con el contexto de la GUI para que puedas identificar la causa más rápido y corregirla de forma segura.

Si alguna vez te has quedado mirando un muro de salida de rclone preguntándote por qué falló un trabajo, RcloneView puede acortar ese ciclo. El Terminal integrado, los registros detallados y el Historial de trabajos te ayudan a reproducir problemas, aislar archivos que fallan y ajustar la configuración de rendimiento o autenticación sin salir de la aplicación.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Por qué ocurren los errores de rclone

- Límites y cuotas de API: respuestas 403 o 429 de Google Drive, OneDrive, Dropbox, etc.
- Problemas de alcance de autenticación: tokens expirados o permisos faltantes.
- Desajustes de ruta y permisos: unidades compartidas, carpetas externas o rutas raíz incorrectas.
- Condiciones de red: tiempos de espera, limitación de velocidad o enlaces inestables.
- Verificaciones de integridad: discrepancias de checksum cuando los proveedores alteran las subidas.

## Errores comunes y qué significan

| Error | Qué suele significar | Siguiente paso rápido |
| --- | --- | --- |
| 403: Rate Limit Exceeded / 429 Too Many Requests | El proveedor limitó las solicitudes | Reduce `--transfers`, añade `--tpslimit`, reintenta con backoff |
| Failed to copy: permission denied | Falta acceso a la carpeta o archivo | Verifica la ruta, revisa los permisos de la unidad compartida, vuelve a autenticar con el alcance correcto |
| Failed to refresh token | Token OAuth expirado o inválido | Reconecta el remoto mediante el flujo OAuth de RcloneView |
| Directory not found | Error de tipeo en la ruta o raíz incorrecta | Confirma la ruta usando `rclone lsf remote:` |
| Timeout waiting for connection | Inestabilidad de red o firewall | Reduce el paralelismo, reintenta con `--retries` y `--low-level-retries` |
| Upload failed: corrupted on transfer | Falló la verificación de integridad | Vuelve a ejecutar con `--checksum` o `rclone check` |

## Usa el Terminal de RcloneView para reproducir e inspeccionar errores

Vuelve a ejecutar el comando fallido dentro del Terminal integrado para eliminar variables como directorios de trabajo o configuraciones incorrectas.

- Abre la pestaña **Terminal** y escribe `rclone ` para ver todos los comandos (autocompletado). [Guía](/howto/rcloneview-basic/using-terminal-in-rcloneview)
- Añade `-vv` para capturar salida detallada que puedas copiar o compartir.

Ejemplos:

```bash
rclone about myremote: -vv
rclone lsf myremote:path -vv --dirs-only --recursive
rclone sync src: dst: -vv --transfers=8
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="RcloneView Terminal autocomplete" class="img-medium img-center" />

## Revisa los registros de trabajos y el historial para encontrar patrones

Las vistas de Monitor de trabajos e Historial muestran qué archivos fallaron y con qué frecuencia.

- **Monitor de trabajos**: pestaña de Transferencia en vivo para trabajos activos, además de registros Completados/API para ejecuciones finalizadas. [Ver pasos](/howto/rcloneview-basic/real-time-transfer-monitoring)
- **Historial**: abre el Historial de un trabajo específico desde el Administrador de trabajos para revisar los resultados por archivo. [Ver pasos](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="Job Monitor transfer log" class="img-medium img-center" />

## Corrige errores de límite de tasa de API y cuota

- Reduce la concurrencia: disminuye `--transfers` y `--checkers` en las opciones del trabajo o en las banderas del comando.
- Añade limitación cortés: usa `--tpslimit` y `--tpslimit-burst` para proveedores con API estrictas.
- Divide trabajos grandes: ejecuta carpeta por carpeta o programa durante horas de menor actividad mediante el Administrador de trabajos.
- Usa ejecuciones incrementales: combina Comparar + Sincronización para mover solo los archivos modificados y reducir las llamadas.

## Corrige problemas de autenticación y OAuth

- Vuelve a autenticar el remoto con el alcance correcto usando las indicaciones OAuth de RcloneView.
- Si un token está expirado o revocado, recrea el remoto o actualízalo mediante el Terminal con `rclone config reconnect remote:`.
- Para unidades compartidas o cuentas delegadas, confirma que el remoto esté configurado con los ID de unidad o inquilino correctos.

## Corrige errores de permiso denegado

- Confirma que la ruta existe y que tienes acceso: `rclone lsf remote:folder` en el Terminal.
- Para unidades compartidas de Google o carpetas compartidas de Dropbox, asegúrate de que el remoto use la raíz o el ID de unidad correctos.
- Si copias hacia una unidad compartida, verifica que tengas permisos de escritura; de lo contrario, elige un destino que sea tuyo.

## Corrige tiempos de espera y conexiones inestables

- Reduce el paralelismo para enlaces frágiles: `--transfers=2 --checkers=2`.
- Aumenta el comportamiento de reintento: `--retries=10 --retries-sleep=5s --low-level-retries=20`.
- Para archivos grandes, habilita la transmisión multihilo: `--multi-thread-streams=4 --multi-thread-cutoff=64M`.
- Prueba la accesibilidad desde el Terminal con un comando ligero antes de sincronizaciones grandes:

```bash
rclone lsf remote: --max-depth 1 --fast-list -vv
```

## Corrige errores de integridad de datos y checksum

- Verifica los orígenes y destinos con una ejecución de prueba: `--dry-run` en trabajos de Sincronización o Copia.
- Usa `rclone check` para comparar checksums entre dos remotos:

```bash
rclone check source:folder dest:folder --one-way --size-only
```

- Habilita la comparación de checksum en proveedores compatibles para detectar corrupción silenciosa.

## Cuándo usar la GUI frente al Terminal

- **GUI**: crea trabajos, programa copias de seguridad recurrentes, compara antes de sincronizar, arrastra y suelta entre nubes.
- **Terminal**: diagnostica errores rápidamente, prueba banderas del backend o ejecuta comandos puntuales con registros completos `-vv`.
- Usa ambos: crea prototipos en el Terminal y luego guarda los comandos estables como trabajos reutilizables.

## Lista de verificación rápida de solución de problemas

1. Reproduce el error en el Terminal con `-vv` y copia los registros.
2. Revisa el Monitor de trabajos y el Historial para ver los archivos que fallan y su frecuencia.
3. Aplica la categoría de corrección: límites de tasa (reducir concurrencia), autenticación (volver a autenticar), permisos (verificar ruta/raíz), red (reducir hilos, aumentar reintentos), integridad (ejecutar `check`).
4. Vuelve a ejecutar con `--dry-run` antes de hacer cambios.

## Conclusión

RcloneView convierte la depuración de rclone en un flujo de trabajo guiado: autocompletado para evitar errores de sintaxis, registros dentro de la aplicación para ver qué falló y controles de GUI para ajustar la concurrencia o los horarios. Usa el Terminal y el Historial de trabajos juntos para resolver errores más rápido y mantener las transferencias en movimiento.

<CloudSupportGrid />
