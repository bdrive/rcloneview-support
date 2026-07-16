---
slug: rclone-rc-api-remote-control-rcloneview
title: "RcloneView per Fernsteuerung mit der Rclone RC API steuern"
authors: [tayson]
description: "Erfahren Sie, wie Sie die rclone RC (Remote Control) API nutzen, um Cloud-Speicher-Vorgänge zu automatisieren, Übertragungen zu überwachen und RcloneView in Ihre Workflows zu integrieren."
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
tags: [RcloneView, feature, api, automation, guide, cli, tips, monitoring]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView per Fernsteuerung mit der Rclone RC API steuern

> Erschließen Sie sich die programmatische Steuerung Ihrer Cloud-Speicher-Vorgänge mithilfe der in rclone integrierten RC API, nahtlos verbunden mit RcloneView.

Rclone bringt eine leistungsstarke REST-API namens RC- (Remote Control-) Schnittstelle mit. Diese API stellt nahezu jede rclone-Operation als HTTP-Endpunkt bereit und ermöglicht es, Übertragungen zu starten, den Fortschritt zu überwachen, Mounts zu verwalten und Statistiken aus jeder Programmiersprache oder jedem Automatisierungstool abzufragen. RcloneView nutzt intern dieselbe RC API für seine GUI-Operationen, das heißt, alles, was Sie in der Oberfläche tun können, lässt sich auch programmatisch erledigen. Diese Anleitung behandelt die RC API von den Grundlagen bis hin zur fortgeschrittenen Automatisierung und vermittelt Ihnen das nötige Wissen, um eigene Integrationen, Monitoring-Dashboards und automatisierte Workflows rund um Ihre Cloud-Speicher-Vorgänge zu erstellen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Die Architektur der Rclone RC API verstehen

Die rclone RC API ist eine JSON-basierte REST-API, die als HTTP-Server innerhalb des rclone-Prozesses läuft. Wenn Sie rclone mit dem Flag `--rc` starten oder den Befehl `rclone rcd` verwenden, öffnet es einen Port (standardmäßig 5572) und wartet auf HTTP-Anfragen.

**Wie RcloneView die RC API nutzt:**

RcloneView kommuniziert ausschließlich über diese RC-Schnittstelle mit rclone. Wenn Sie in der GUI auf eine Schaltfläche klicken, um eine Synchronisation zu starten, ein Verzeichnis zu durchsuchen oder den Übertragungsfortschritt zu prüfen, sendet RcloneView im Hintergrund HTTP-Anfragen an die rclone RC API. Diese Architektur bedeutet:

- RcloneView kann rclone-Instanzen steuern, die auf entfernten Rechnern laufen
- Mehrere Clients können sich mit derselben rclone-Instanz verbinden
- Alle Vorgänge sind zustandslos und lassen sich automatisieren
- Die GUI und der programmatische Zugriff verwenden denselben zugrunde liegenden Mechanismus

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**Eingebettetes vs. externes rclone:**

Im eingebetteten Modus startet RcloneView seinen eigenen rclone-Prozess und verwaltet die RC-Verbindung automatisch. Im externen Modus starten Sie rclone separat und richten RcloneView darauf aus. Der externe Modus ist unerlässlich für Fernverwaltungsszenarien, etwa zur Steuerung einer rclone-Instanz, die auf einem NAS oder Cloud-Server läuft.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## Den RC-Daemon starten

Um die RC API zu nutzen, benötigen Sie eine laufende rclone-Instanz mit aktivierter RC-Schnittstelle.

**Grundlegender Start:**

```bash
rclone rcd --rc-addr :5572
```

Dies startet den RC-Daemon, der auf allen Schnittstellen auf Port 5572 ohne Authentifizierung lauscht. Das eignet sich nur für lokale Entwicklung.

**Authentifizierter Start (empfohlen):**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**Mit TLS-Verschlüsselung:**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**Mit aktivierter Web-GUI:**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**Gängige Start-Flags:**

| Flag | Zweck |
|------|---------|
| `--rc-addr` | Adresse und Port, auf denen gelauscht wird |
| `--rc-user` / `--rc-pass` | Basisauthentifizierungs-Anmeldedaten |
| `--rc-allow-origin` | CORS-Origin für browserbasierten Zugriff |
| `--rc-serve` | Remote-Objekte über die RC API bereitstellen |
| `--rc-no-auth` | Authentifizierung deaktivieren (nur für lokale Nutzung) |
| `--rc-cert` / `--rc-key` | TLS-Zertifikat und privater Schlüssel |

**Überprüfen, ob der Daemon läuft:**

```bash
curl http://localhost:5572/rc/noop
# Erwartete Antwort: {}
```

Falls die Authentifizierung aktiviert ist:

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## Wichtige API-Endpunkte

Die RC API bietet Dutzende von Endpunkten, die nach Kategorien geordnet sind. Hier sind die wichtigsten für den täglichen Gebrauch.

**Kernoperationen:**

```bash
# Rclone-Version und Build-Informationen abrufen
curl -X POST http://localhost:5572/core/version

# Aktuelle Übertragungsstatistiken abrufen
curl -X POST http://localhost:5572/core/stats

# Speicherstatistiken abrufen
curl -X POST http://localhost:5572/core/memstats

# Garbage Collection auslösen
curl -X POST http://localhost:5572/core/gc

# Rclone geordnet beenden
curl -X POST http://localhost:5572/core/quit
```

**Synchronisations- und Kopieroperationen:**

```bash
# Dateien von Quelle zu Ziel kopieren
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# Quelle mit Ziel synchronisieren (spiegeln)
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# Dateien von Quelle zu Ziel verschieben
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**Dateioperationen:**

```bash
# Dateien in einem Verzeichnis auflisten
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# Informationen zu einer bestimmten Datei abrufen
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# Eine Datei löschen
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# Ein Verzeichnis erstellen
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# Informationen zur Speichernutzung abrufen
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**Mount-Operationen:**

```bash
# Ein Remote als lokales Laufwerk einbinden
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# Aktive Mounts auflisten
curl -X POST http://localhost:5572/mount/listmounts

# Aushängen
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## Übertragungen programmatisch überwachen

Eine der wertvollsten Anwendungen der RC API ist die Echtzeit-Überwachung von Übertragungen.

**Übertragungsstatistiken abfragen:**

```bash
curl -X POST http://localhost:5572/core/stats
```

Dies liefert ein JSON-Objekt mit folgendem Inhalt:

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

**Job-Verwaltung:**

Jede asynchrone Operation (Synchronisation, Kopie, Verschiebung) erzeugt einen Job, den Sie nachverfolgen können:

```bash
# Alle laufenden Jobs auflisten
curl -X POST http://localhost:5572/job/list

# Status eines bestimmten Jobs abrufen
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# Einen laufenden Job stoppen
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**Ein einfaches Monitoring-Skript erstellen:**

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

## Automatisierungsskripte erstellen

Die RC API ermöglicht leistungsstarke Automatisierungsszenarien, die weit über das hinausgehen, was eine GUI allein bieten kann.

**Automatisiertes Backup mit Fehlerbehandlung:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# Backup starten
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# Bis zum Abschluss überwachen
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
      # Benachrichtigung senden
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**Orchestrierung der Synchronisation mehrerer Remotes:**

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

# Alle Synchronisationen nacheinander ausführen
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**Automatisierte Berichterstattung zur Speichernutzung:**

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

## Webhook-Integrationen und Benachrichtigungen

Kombinieren Sie die RC API mit Webhooks, um ereignisgesteuerte Workflows zu erstellen.

**Slack-Benachrichtigungen bei Abschluss einer Übertragung:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # Synchronisation starten
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # Auf Abschluss warten
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # Endgültige Statistiken abrufen
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

**Health-Check-Endpunkt für Uptime-Monitoring:**

Sie können die RC API als Health-Check-Endpunkt für Monitoring-Tools wie Uptime Kuma oder Healthchecks.io verwenden:

```bash
# Einfacher Health-Check - liefert 200 zurück, wenn rclone läuft
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

Integrieren Sie dies in Ihren Monitoring-Stack, um Warnmeldungen zu erhalten, falls der rclone-Daemon ausfällt.

## Best Practices für Sicherheit

Wenn Sie die RC API bereitstellen, insbesondere über ein Netzwerk, ist Sicherheit entscheidend.

**Authentifizierung:** Verwenden Sie in der Produktion immer `--rc-user` und `--rc-pass`. Führen Sie `--rc-no-auth` niemals auf einer netzwerkzugänglichen Schnittstelle aus.

**TLS-Verschlüsselung:** Verwenden Sie `--rc-cert` und `--rc-key`, um den API-Datenverkehr zu verschlüsseln. Selbstsignierte Zertifikate eignen sich für die interne Nutzung; verwenden Sie Let's Encrypt für öffentlich zugängliche Instanzen.

**Netzwerkbeschränkungen:** Binden Sie an localhost, wenn nur lokaler Zugriff benötigt wird:

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

Für den Fernzugriff verwenden Sie einen Reverse-Proxy (nginx, Caddy) mit ordnungsgemäßer TLS-Terminierung und Rate-Limiting, anstatt rclone direkt offenzulegen.

**Firewall-Regeln:** Beschränken Sie den Zugriff auf den RC-Port:

```bash
# Nur bestimmte IPs zulassen
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**Alternative auf Token-Basis:** Für Skripte empfiehlt es sich, Anmeldedaten in Umgebungsvariablen statt fest im Code zu hinterlegen:

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## Erste Schritte

Die rclone RC API verwandelt RcloneView von einer eigenständigen Anwendung in eine Plattform zum Aufbau von Cloud-Speicher-Automatisierung. Ob Sie einfaches Übertragungs-Monitoring, komplexe Orchestrierung mehrerer Remotes oder die Integration in Ihre bestehende DevOps-Toolchain benötigen – die RC API liefert die Grundlage dafür. Beginnen Sie damit, den RC-Daemon zu aktivieren, experimentieren Sie mit `core/stats` und `operations/list`, um das Antwortformat zu verstehen, und bauen Sie dann schrittweise automatisierte Workflows auf, die Ihre routinemäßigen Cloud-Speicher-Aufgaben ohne manuelles Eingreifen erledigen.

---

**Verwandte Anleitungen:**
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [RcloneView mit externem Rclone verwenden](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
