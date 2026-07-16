---
slug: rclone-rc-api-remote-control-rcloneview
title: "Controla RcloneView de forma remota con la API RC de Rclone"
authors: [tayson]
description: "Aprende a usar la API RC (Control Remoto) de rclone para automatizar operaciones de almacenamiento en la nube, monitorizar transferencias e integrar RcloneView en tus flujos de trabajo."
keywords:
  - rclone rc api
  - rclone remote control
  - rcloneview api
  - rclone automation
  - rclone api endpoints
  - rclone rest api
  - rclone programmatic control
  - cloud storage automation
  - rclone webhook
  - rclone monitoring api
tags: [feature, api, automation, cli, tips, monitoring]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Controla RcloneView de forma remota con la API RC de Rclone

> Desbloquea el control programático de tus operaciones de almacenamiento en la nube usando la API RC integrada de rclone, integrada de forma perfecta con RcloneView.

Rclone incluye una potente API REST llamada interfaz RC (Remote Control, Control Remoto). Esta API expone casi todas las operaciones de rclone como un endpoint HTTP, permitiéndote iniciar transferencias, monitorizar el progreso, gestionar montajes y consultar estadísticas desde cualquier lenguaje de programación o herramienta de automatización. RcloneView utiliza esta misma API RC internamente para sus operaciones de GUI, lo que significa que todo lo que puedes hacer en la interfaz también se puede hacer de forma programática. Esta guía cubre la API RC desde los principios básicos hasta la automatización avanzada, dándote el conocimiento para construir integraciones personalizadas, paneles de monitorización y flujos de trabajo automatizados en torno a tus operaciones de almacenamiento en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Entendiendo la arquitectura RC de Rclone

La API RC de rclone es una API REST basada en JSON que se ejecuta como un servidor HTTP integrado dentro del proceso de rclone. Cuando inicias rclone con el flag `--rc` o usas el comando `rclone rcd`, se abre un puerto (por defecto 5572) y escucha solicitudes HTTP.

**Cómo usa RcloneView la API RC:**

RcloneView se comunica con rclone exclusivamente a través de esta interfaz RC. Cuando haces clic en un botón de la GUI para iniciar una sincronización, explorar un directorio o comprobar el progreso de una transferencia, RcloneView envía solicitudes HTTP a la API RC de rclone tras bambalinas. Esta arquitectura significa que:

- RcloneView puede controlar instancias de rclone que se ejecutan en máquinas remotas
- Varios clientes pueden conectarse a la misma instancia de rclone
- Todas las operaciones son sin estado y pueden automatizarse
- La GUI y el acceso programático usan el mismo mecanismo subyacente

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**Rclone integrado vs. externo:**

En el modo integrado, RcloneView inicia su propio proceso de rclone y gestiona automáticamente la conexión RC. En el modo externo, inicias rclone por separado y apuntas RcloneView hacia él. El modo externo es esencial para escenarios de gestión remota, como controlar una instancia de rclone que se ejecuta en un NAS o un servidor en la nube.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## Iniciando el demonio RC

Para usar la API RC, necesitas una instancia de rclone ejecutándose con la interfaz RC habilitada.

**Inicio básico:**

```bash
rclone rcd --rc-addr :5572
```

Esto inicia el demonio RC escuchando en todas las interfaces en el puerto 5572 sin autenticación. Esto es adecuado solo para desarrollo local.

**Inicio autenticado (recomendado):**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**Con cifrado TLS:**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**Con la GUI web habilitada:**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**Flags de inicio comunes:**

| Flag | Propósito |
|------|---------|
| `--rc-addr` | Dirección y puerto en el que escuchar |
| `--rc-user` / `--rc-pass` | Credenciales de autenticación básica |
| `--rc-allow-origin` | Origen CORS para acceso desde navegador |
| `--rc-serve` | Servir objetos remotos a través de la API RC |
| `--rc-no-auth` | Deshabilitar la autenticación (solo uso local) |
| `--rc-cert` / `--rc-key` | Certificado TLS y clave privada |

**Verificando que el demonio está en ejecución:**

```bash
curl http://localhost:5572/rc/noop
# Respuesta esperada: {}
```

Si la autenticación está habilitada:

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## Endpoints esenciales de la API

La API RC proporciona docenas de endpoints organizados por categoría. Aquí están los más importantes para el uso diario.

**Operaciones principales:**

```bash
# Obtener la versión de rclone e información de compilación
curl -X POST http://localhost:5572/core/version

# Obtener estadísticas de transferencia actuales
curl -X POST http://localhost:5572/core/stats

# Obtener estadísticas de memoria
curl -X POST http://localhost:5572/core/memstats

# Activar la recolección de basura
curl -X POST http://localhost:5572/core/gc

# Apagar rclone de forma segura
curl -X POST http://localhost:5572/core/quit
```

**Operaciones de sincronización y copia:**

```bash
# Copiar archivos desde el origen al destino
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# Sincronizar (reflejar) el origen en el destino
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# Mover archivos desde el origen al destino
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**Operaciones de archivos:**

```bash
# Listar archivos en un directorio
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# Obtener información sobre un archivo específico
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# Eliminar un archivo
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# Crear un directorio
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# Obtener información de uso de disco
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**Operaciones de montaje:**

```bash
# Montar un remoto como unidad local
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# Listar montajes activos
curl -X POST http://localhost:5572/mount/listmounts

# Desmontar
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## Monitorización de transferencias de forma programática

Uno de los usos más valiosos de la API RC es la monitorización de transferencias en tiempo real.

**Consultando estadísticas de transferencia:**

```bash
curl -X POST http://localhost:5572/core/stats
```

Esto devuelve un objeto JSON que contiene:

```json
{
  "bytes": 1234567890,
  "checks": 150,
  "deletedDirs": 0,
  "deletes": 0,
  "elapsedTime": 45.2,
  "errors": 0,
  "eta": 120,
  "fatalError": false,
  "renames": 0,
  "speed": 27434842,
  "totalBytes": 9876543210,
  "totalChecks": 500,
  "totalTransfers": 200,
  "transferTime": 42.1,
  "transfers": 85,
  "transferring": [
    {
      "bytes": 52428800,
      "eta": 30,
      "group": "sync/copy",
      "name": "Photos/vacation-2025/IMG_4521.jpg",
      "percentage": 65,
      "size": 80530636,
      "speed": 1048576,
      "speedAvg": 983040
    }
  ]
}
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Gestión de trabajos:**

Cada operación asíncrona (sincronización, copia, movimiento) crea un trabajo (job) que puedes rastrear:

```bash
# Listar todos los trabajos en ejecución
curl -X POST http://localhost:5572/job/list

# Obtener el estado de un trabajo específico
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# Detener un trabajo en ejecución
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**Construyendo un script de monitorización simple:**

```python
import requests
import time
import json

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

def get_stats():
    resp = requests.post(f"{RC_URL}/core/stats", auth=AUTH)
    return resp.json()

def monitor_transfers(interval=5):
    while True:
        stats = get_stats()
        speed_mb = stats.get("speed", 0) / 1024 / 1024
        transferred = stats.get("transfers", 0)
        total = stats.get("totalTransfers", 0)
        errors = stats.get("errors", 0)

        print(f"Speed: {speed_mb:.1f} MB/s | "
              f"Progress: {transferred}/{total} | "
              f"Errors: {errors}")

        if transferred >= total and total > 0:
            print("Transfer complete!")
            break

        time.sleep(interval)

monitor_transfers()
```

## Construyendo scripts de automatización

La API RC permite escenarios de automatización potentes que van más allá de lo que una GUI por sí sola puede ofrecer.

**Copia de seguridad automatizada con manejo de errores:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# Iniciar copia de seguridad
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# Monitorizar hasta completarse
while true; do
  STATUS=$(curl -s -u "$AUTH" -X POST "$RC_URL/job/status" \
    -H "Content-Type: application/json" \
    -d "{\"jobid\": $JOBID}")

  FINISHED=$(echo "$STATUS" | jq -r '.finished')
  SUCCESS=$(echo "$STATUS" | jq -r '.success')

  if [ "$FINISHED" = "true" ]; then
    if [ "$SUCCESS" = "true" ]; then
      echo "Backup completed successfully"
    else
      ERROR=$(echo "$STATUS" | jq -r '.error')
      echo "Backup failed: $ERROR"
      # Enviar notificación de alerta
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**Orquestación de sincronización multi-remoto:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

SYNC_JOBS = [
    {"srcFs": "gdrive:/Documents", "dstFs": "s3:backup/documents"},
    {"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-archive"},
    {"srcFs": "onedrive:/Work", "dstFs": "s3:backup/work"},
]

def start_sync(src, dst):
    resp = requests.post(f"{RC_URL}/sync/sync", auth=AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    return resp.json().get("jobid")

def wait_for_job(jobid):
    while True:
        resp = requests.post(f"{RC_URL}/job/status", auth=AUTH,
                            json={"jobid": jobid})
        status = resp.json()
        if status.get("finished"):
            return status.get("success", False)
        time.sleep(5)

# Ejecutar todas las sincronizaciones de forma secuencial
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**Automatización de informes de uso de almacenamiento:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

REMOTES=("gdrive:" "s3:my-bucket" "b2:my-bucket" "onedrive:")

echo "Storage Usage Report - $(date)"
echo "================================"

for REMOTE in "${REMOTES[@]}"; do
  RESULT=$(curl -s -u "$AUTH" -X POST "$RC_URL/operations/about" \
    -H "Content-Type: application/json" \
    -d "{\"fs\": \"$REMOTE\"}")

  TOTAL=$(echo "$RESULT" | jq -r '.total // "unlimited"')
  USED=$(echo "$RESULT" | jq -r '.used // "unknown"')
  FREE=$(echo "$RESULT" | jq -r '.free // "unknown"')

  echo "$REMOTE: Used=$USED, Free=$FREE, Total=$TOTAL"
done
```

## Integraciones de webhooks y notificaciones

Combina la API RC con webhooks para crear flujos de trabajo basados en eventos.

**Notificaciones de Slack al completar una transferencia:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # Iniciar sincronización
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # Esperar a que finalice
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # Obtener estadísticas finales
            stats = requests.post(f"{RC_URL}/core/stats", auth=RC_AUTH).json()

            if status.get("success"):
                notify_slack(
                    f"Completed: {label}\n"
                    f"Files: {stats.get('transfers', 0)} | "
                    f"Size: {stats.get('bytes', 0) / 1024 / 1024:.1f} MB | "
                    f"Errors: {stats.get('errors', 0)}"
                )
            else:
                notify_slack(f"FAILED: {label}\nError: {status.get('error')}")
            break
        time.sleep(10)

run_sync_with_notification(
    "gdrive:/Backups", "b2:disaster-recovery",
    "Nightly Google Drive Backup"
)
```

**Endpoint de comprobación de estado para monitorización de disponibilidad:**

Puedes usar la API RC como un endpoint de comprobación de estado para herramientas de monitorización como Uptime Kuma o Healthchecks.io:

```bash
# Comprobación de estado simple: devuelve 200 si rclone está en ejecución
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

Integra esto en tu stack de monitorización para recibir alertas si el demonio de rclone deja de funcionar.

## Buenas prácticas de seguridad

Al exponer la API RC, especialmente a través de una red, la seguridad es fundamental.

**Autenticación:** Usa siempre `--rc-user` y `--rc-pass` en producción. Nunca ejecutes con `--rc-no-auth` en una interfaz accesible desde la red.

**Cifrado TLS:** Usa `--rc-cert` y `--rc-key` para cifrar el tráfico de la API. Los certificados autofirmados funcionan para uso interno; usa Let's Encrypt para instancias de cara al público.

**Restricciones de red:** Vincula a localhost cuando solo se necesite acceso local:

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

Para el acceso remoto, usa un proxy inverso (nginx, Caddy) con la terminación TLS adecuada y limitación de velocidad, en lugar de exponer rclone directamente.

**Reglas de firewall:** Restringe el acceso al puerto RC:

```bash
# Permitir solo IPs específicas
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**Alternativa de autenticación basada en tokens:** Para scripts, considera colocar las credenciales en variables de entorno en lugar de codificarlas directamente:

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## Primeros pasos

La API RC de rclone transforma RcloneView de una aplicación independiente en una plataforma para construir automatización de almacenamiento en la nube. Ya sea que necesites una monitorización de transferencias simple, una orquestación compleja multi-remoto, o integración con tu cadena de herramientas DevOps existente, la API RC proporciona la base. Comienza habilitando el demonio RC, experimenta con `core/stats` y `operations/list` para entender el formato de respuesta, y luego construye gradualmente flujos de trabajo automatizados que manejen tus tareas rutinarias de almacenamiento en la nube sin intervención manual.

---

**Guías relacionadas:**
- [Ejecutar y gestionar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Monitorización de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Usando RcloneView con Rclone externo](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
