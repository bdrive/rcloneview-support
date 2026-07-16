---
slug: rcloneview-on-windows-server-cloud-backup-rcloneview
title: "So verwenden Sie RcloneView unter Windows Server für automatisierte Cloud-Backups"
authors:
  - tayson
description: "Richten Sie RcloneView unter Windows Server 2019/2022 für automatisierte Cloud-Backups ein. Planen Sie Server-Datensicherungen zu S3, Google Drive oder Backblaze B2 mit einer grafischen Oberfläche."
keywords:
  - rcloneview windows server
  - windows server cloud backup
  - windows server s3 backup
  - cloud backup windows server
  - automated server backup cloud
  - windows server google drive sync
  - server data backup tool
  - rclone windows server gui
  - cloud backup gui windows
  - windows server backup solution
tags:
  - RcloneView
  - windows-server
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So verwenden Sie RcloneView unter Windows Server für automatisierte Cloud-Backups

> Windows Server erzeugt geschäftskritische Daten — Datenbanken, Datei-Freigaben, Anwendungsdaten. Diese in einen Cloud-Speicher zu sichern, bedeutete früher, PowerShell-Skripte zu schreiben. RcloneView bietet Ihnen eine visuelle Oberfläche für dieselbe Aufgabe.

Systemadministratoren, die Windows-Server-Umgebungen verwalten, benötigen zuverlässige Cloud-Backups. Während die rclone-CLI in Skripten hervorragend funktioniert, bietet RcloneView visuelles Monitoring, einfache Job-Erstellung und einen Zwei-Fenster-Explorer zur Überprüfung von Backups — ohne dabei auf die Leistungsfähigkeit von rclone im Hintergrund zu verzichten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Cloud-Backups für Windows Server?

### Die 3-2-1-Backup-Regel

- **3 Kopien** Ihrer Daten.
- **2 verschiedene Medientypen**.
- **1 externe (Offsite-)Kopie**.

Cloud-Speicher erfüllt die Offsite-Anforderung. In Kombination mit lokalen Backups (Band, NAS, externe Laufwerke) ermöglicht das Cloud-Backup eine Notfallwiederherstellung, selbst wenn Ihr gesamtes Rechenzentrum nicht verfügbar ist.

### Übliche Backup-Ziele

| Datentyp | Quelle | Bestes Cloud-Ziel |
|-----------|--------|------------------|
| Datei-Freigaben | Netzlaufwerke | S3, Backblaze B2 |
| SQL-Server-Backups | .bak-Dateien | S3 Standard-IA |
| IIS-Protokolle | Protokollverzeichnisse | S3 Glacier |
| Anwendungsdaten | Verschiedene | Google Drive, OneDrive |
| VM-Snapshots | Hyper-V-Exporte | Wasabi, B2 |

## Installation unter Windows Server

### Voraussetzungen

- Windows Server 2019 oder 2022.
- .NET 6 Runtime oder höher.
- Netzwerkzugriff auf die APIs der Cloud-Anbieter (ausgehendes HTTPS).

### RcloneView installieren

1. Laden Sie das Windows-Installationsprogramm von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Führen Sie das Installationsprogramm aus. RcloneView wird unter `C:\Program Files\RcloneView\` installiert.
3. RcloneView lädt rclone beim ersten Start automatisch herunter.

### Cloud-Remotes konfigurieren

Fügen Sie Ihre Backup-Ziele hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Windows Server" class="img-large img-center" />

Bei Servern ohne grafische Oberfläche (kein Browser für OAuth) können Sie die Remotes auf einer Arbeitsstation konfigurieren und die rclone-Konfigurationsdatei auf den Server kopieren.

## Automatisierte Backups einrichten

### Schritt 1: Backup-Jobs erstellen

Erstellen Sie für jede Backup-Quelle einen Copy-Job:

- **Datei-Freigaben** → S3-Bucket.
- **SQL-Backups** → Backblaze B2.
- **Protokolldateien** → S3 Glacier.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create server backup job" class="img-large img-center" />

### Schritt 2: Backups planen

Planen Sie jeden Job so, dass er in der passenden Häufigkeit ausgeführt wird:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Windows Server backups" class="img-large img-center" />

Empfohlener Zeitplan:

| Datentyp | Häufigkeit | Uhrzeit |
|-----------|-----------|------|
| Datei-Freigaben | Nächtlich | 2:00 Uhr |
| SQL-Backups | Nächtlich | 3:00 Uhr (nach dem SQL-Backup-Job) |
| Protokolldateien | Wöchentlich | Sonntag 1:00 Uhr |
| Vollständiger Server | Wöchentlich | Samstag 23:00 Uhr |

### Schritt 3: Benachrichtigungen einrichten

Lassen Sie sich per Slack, Discord oder Telegram (v1.3) benachrichtigen, wenn Backups abgeschlossen sind oder fehlschlagen:

Dies ist bei Server-Backups entscheidend — Sie müssen sofort erfahren, wenn ein Backup fehlschlägt.

### Schritt 4: Stapel-Jobs für mehrstufige Abläufe nutzen

Verketten Sie Vorgänge mit Stapel-Jobs (Batch Jobs):

1. SQL-Backups zu S3 kopieren.
2. Datei-Freigaben zu Backblaze B2 kopieren.
3. Quelle und Ziel zur Überprüfung vergleichen.
4. Benachrichtigung senden.

Alles automatisiert, alles der Reihe nach.

## Backup-Fortschritt überwachen

Verfolgen Sie große Backup-Übertragungen in Echtzeit:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor server backup progress" class="img-large img-center" />

## Backup-Integrität überprüfen

Überprüfen Sie nach jedem Backup mit dem Ordnervergleich:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Windows Server backup" class="img-large img-center" />

So werden Probleme wie diese erkannt:

- Dateien, die stillschweigend nicht übertragen wurden.
- Berechtigungsfehler bei gesperrten Dateien.
- Dateien, die während des Backup-Fensters geändert wurden.

## Sicherheitsaspekte

### Backups verschlüsseln

Verwenden Sie das crypt-Remote von rclone, um alle Serverdaten vor dem Hochladen zu verschlüsseln. Der Cloud-Anbieter speichert nur verschlüsselte Datenblöcke — selbst wenn das Cloud-Konto kompromittiert wird, sind Ihre Serverdaten sicher.

### Zugriff einschränken

- Führen Sie RcloneView unter einem dedizierten Dienstkonto mit minimalen Berechtigungen aus.
- Speichern Sie die rclone-Konfiguration verschlüsselt (rclone unterstützt die Verschlüsselung der Konfigurationsdatei).
- Verwenden Sie IAM-Richtlinien für S3, um das Backup-Konto auf bestimmte Buckets zu beschränken.

### Aufbewahrungsrichtlinien

Richten Sie Lifecycle-Regeln für Ihren Cloud-Speicher ein:

- **S3**: Übergang zu Glacier nach 30 Tagen, Löschung nach 365 Tagen.
- **B2**: Lifecycle-Regeln für die automatische Bereinigung verwenden.
- Bewahren Sie mindestens 30 Tage an Backups auf, um sich bei verzögert erkannten Problemen wiederherstellen zu können.

## Bandbreitenverwaltung

Server-Backups können Ihr Netzwerk auslasten. Nutzen Sie die [Bandbreitenbegrenzung](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview), um Auswirkungen auf den Produktivverkehr zu vermeiden:

- Begrenzung auf 50 % der verfügbaren Bandbreite während der Geschäftszeiten.
- Unbegrenzt während des nächtlichen Backup-Fensters.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Auf Ihrem Windows Server installieren**.
3. **Cloud-Speicher-Remotes hinzufügen** (S3, B2 usw.).
4. **Backup-Jobs erstellen und planen**.
5. **Benachrichtigungen einrichten** für Fehlerwarnungen.
6. **Backups überprüfen** mit dem Ordnervergleich.

Ihre Serverdaten sind Ihr Geschäft. Automatisieren Sie das Backup und schlafen Sie ruhiger.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Bandbreitenbegrenzungen festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
