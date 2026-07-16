---
slug: recover-interrupted-failed-transfers-rcloneview
title: "Cómo recuperar transferencias en la nube interrumpidas o fallidas con RcloneView"
authors:
  - tayson
description: "Reanude transferencias en la nube interrumpidas, recupere subidas parciales y solucione trabajos de sincronización fallidos en RcloneView. Técnicas prácticas para transferencias de archivos grandes que no se completan."
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo recuperar transferencias en la nube interrumpidas o fallidas con RcloneView

> Las caídas de red, los tiempos de espera de la API, la suspensión del portátil y los cortes de energía interrumpen las transferencias en la nube. RcloneView y rclone cuentan con mecanismos integrados para reanudar de forma segura sin tener que volver a subir todo desde cero.

Transferir terabytes a la nube no es una operación de cinco minutos. Durante trabajos de larga duración, las interrupciones de conectividad son casi inevitables. La buena noticia es que el motor de transferencia inteligente de rclone —que RcloneView utiliza internamente— está diseñado exactamente para este escenario. Las operaciones de copia y sincronización son inherentemente idempotentes: al volver a ejecutarlas se omiten los archivos ya transferidos y se reanuda desde donde se interrumpió el proceso.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo maneja rclone las transferencias interrumpidas

Rclone compara el origen y el destino antes de transferir cada archivo. Cuando vuelve a ejecutar un trabajo de copia o sincronización después de una interrupción:

- **Los archivos ya transferidos** se omiten (por tamaño y fecha de modificación, o por suma de comprobación si está habilitada).
- **Los archivos transferidos parcialmente** se limpian y se vuelven a transferir desde el principio.
- **Los archivos aún no iniciados** se ponen en cola y se transfieren en la ejecución reanudada.

Esto significa que en la mayoría de los casos no existe un botón especial de "reanudar": basta con volver a ejecutar el mismo trabajo.

## Paso 1: vuelva a ejecutar el mismo trabajo

Después de una interrupción, abra **Jobs** en RcloneView y haga clic en **Run** en el mismo trabajo nuevamente:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneView hará lo siguiente:
1. Listar el origen y el destino.
2. Comparar los archivos ya presentes en el destino.
3. Omitir los archivos transferidos correctamente.
4. Transferir solo los archivos faltantes o modificados.

Para un trabajo de 10.000 archivos en el que 8.000 se completaron con éxito, volver a ejecutarlo lleva solo una fracción del tiempo original.

## Paso 2: revise el historial de trabajos para ver los archivos fallidos

Antes de volver a ejecutar, revise el **Job History** en RcloneView para entender qué falló:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

El registro muestra:
- Qué archivos específicos fallaron
- El mensaje de error de cada fallo
- Si los fallos fueron transitorios (error de red) o persistentes (permisos, ruta demasiado larga)

Los errores persistentes necesitan una solución antes de volver a ejecutar el trabajo; los errores transitorios se resolverán al reintentar.

## Paso 3: gestione archivos grandes subidos parcialmente

Para archivos muy grandes (varios GB), una interrupción a mitad de la subida deja un archivo parcial en el destino. El comportamiento de rclone depende del proveedor:

| Proveedor | Comportamiento con archivos parciales |
|----------|-----------------------|
| Amazon S3 / compatible con S3 | Subidas multiparte: las partes incompletas quedan huérfanas, rclone reintenta desde cero |
| Google Drive | Subidas reanudables: rclone puede reanudar a mitad de archivo si la sesión sigue siendo válida |
| OneDrive | Subidas reanudables: similar a Google Drive |
| Backblaze B2 | Partes de archivos grandes: las subidas incompletas son visibles en la consola de B2 |

**Para subidas multiparte huérfanas en S3:** estas se acumulan y generan costos. Límpielas usando:
- Terminal de RcloneView: `rclone cleanup s3-remote:bucket-name`
- O a través de la consola de AWS en S3 → Your Bucket → Multipart uploads

## Paso 4: use `--retries` y `--low-level-retries`

Para trabajos que fallan por errores transitorios, configure el trabajo de RcloneView para que reintente automáticamente:

Agregue lo siguiente al campo **Custom flags**:
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — reintenta todo el trabajo hasta 5 veces si ocurren errores
- `--retries-sleep 10s` — espera 10 segundos entre reintentos
- `--low-level-retries 20` — reintenta operaciones individuales de bajo nivel (llamadas a la API) hasta 20 veces

## Paso 5: gestione discrepancias de suma de comprobación

Después de una transferencia interrumpida, volver a ejecutarla con verificación de suma de comprobación garantiza la integridad de los datos:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

En RcloneView, habilite **Checksum verification** en la configuración del trabajo. Esto obliga a rclone a comparar el contenido de los archivos (no solo el tamaño y la fecha de modificación) —más lento, pero garantiza que los archivos escritos parcialmente se detecten y se vuelvan a transferir.

## Paso 6: recupérese de una sincronización que eliminó archivos

Si un trabajo de sincronización se ejecutó en la dirección incorrecta —copiando el destino sobre el origen en lugar de al revés—, necesita recuperarse mediante el control de versiones del proveedor de la nube:

- **Google Drive**: restaure desde la Papelera o el historial de versiones (disponible durante 30 a 180 días).
- **OneDrive**: restaure desde la Papelera de reciclaje o el historial de versiones.
- **S3 con versionado**: restaure una versión anterior desde la consola de S3.
- **Backblaze B2**: restaure desde el historial de versiones si está habilitado.

Por eso se recomienda encarecidamente usar el modo **Copy** (no destructivo) para las transferencias iniciales grandes, en lugar de Sync.

## Prevención: configure las transferencias para mayor resiliencia

Incorpore resiliencia en sus trabajos de transferencia desde el principio:

| Configuración | Recomendación |
|---------|----------------|
| Modo de trabajo | Use **Copy** para migraciones iniciales; Sync para mantenimiento continuo |
| Reintentos | Configure `--retries 5 --retries-sleep 10s` |
| Suma de comprobación | Habilítela para datos críticos |
| Transferencias | Reduzca el número de transferencias simultáneas en conexiones inestables |
| Programación | Ejecute durante ventanas de red estable (de noche, fuera de VPN) |
| Ancho de banda | Establezca límites para evitar tiempos de espera causados por la saturación de la red |

## Cómo empezar

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Revise el Job History** para identificar qué falló y por qué.
3. **Vuelva a ejecutar el trabajo** — rclone omite automáticamente los archivos completados.
4. **Configure reintentos y verificación de suma de comprobación** para una mayor resiliencia en el futuro.

La mayoría de las transferencias interrumpidas no requieren más que volver a hacer clic en Run. Rclone se encarga del resto.

---

**Guías relacionadas:**

- [Evite la pérdida de datos por una dirección de sincronización incorrecta](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [Migraciones a la nube verificadas por suma de comprobación](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Acelere transferencias grandes en la nube](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
