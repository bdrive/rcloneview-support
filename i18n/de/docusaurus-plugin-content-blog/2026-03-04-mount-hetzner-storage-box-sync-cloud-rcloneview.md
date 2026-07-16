---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Hetzner Storage Box als lokales Laufwerk einbinden und mit jeder Cloud synchronisieren mit RcloneView"
authors:
  - tayson
description: "Greifen Sie auf Ihre Hetzner Storage Box wie auf einen lokalen Ordner zu — binden Sie sie über SFTP ein, durchsuchen Sie Dateien visuell und synchronisieren oder sichern Sie sie mit AWS S3, Google Drive oder jeder anderen Cloud mit RcloneView."
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - hetzner
  - sftp
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage Box als lokales Laufwerk einbinden und mit jeder Cloud synchronisieren mit RcloneView

> Hetzner Storage Box bietet ein unschlagbares Preis-pro-Terabyte-Verhältnis in Europa, aber die Dateiverwaltung über FTP oder SCP ist umständlich. RcloneView bindet sie als lokales Laufwerk ein und synchronisiert sie visuell mit jeder Cloud.

Hetzner Storage Boxes gehören zu den preislich attraktivsten Speicherlösungen in Europa — zuverlässig, erschwinglich und zugänglich über SFTP, FTP, SMB und WebDAV. Ohne nativen Desktop-Client bedeutet die Dateiverwaltung jedoch, Kommandozeilen-Tools oder einfache FTP-Clients zu verwenden. RcloneView ändert das, indem es sich über SFTP verbindet, die Storage Box als lokales Laufwerk einbindet (mount), Dateien in einem Zwei-Fenster-Explorer durchsucht und mit AWS S3, Google Drive oder jeder anderen Cloud synchronisiert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView mit Hetzner Storage Box verwenden?

- **Kein nativer Desktop-Client** — Hetzner bietet rohe Protokolle (SFTP, FTP, SMB), aber keine Sync-App.
- **Als lokales Laufwerk einbinden** — Greifen Sie auf Ihre Storage Box wie auf einen normalen Ordner auf Ihrem Desktop zu.
- **Cloud-übergreifende Synchronisation** — Replizieren Sie Storage-Box-Daten automatisch zu S3, Google Drive oder OneDrive.
- **Visuelle Dateiverwaltung** — Durchsuchen, per Drag-and-Drop verschieben, vergleichen und organisieren ohne CLI.

## Verbindung zur Hetzner Storage Box über SFTP

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **SFTP** aus der Anbieterliste.
3. Geben Sie Ihre Hetzner-Zugangsdaten ein:
   - **Host**: `uXXXXXX.your-storagebox.de` (aus Ihrem Hetzner Robot Panel)
   - **Port**: `23` (Hetzner verwendet einen nicht standardmäßigen SFTP-Port)
   - **Username**: Ihr Storage-Box-Benutzername (z. B. `u123456`)
   - **Password**: Ihr Storage-Box-Passwort
4. Speichern — Ihre Storage-Box-Verzeichnisse sind nun durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## Als lokales Laufwerk einbinden

Sobald die Verbindung besteht, binden Sie Ihre Storage Box als lokalen Ordner ein:

1. Navigieren Sie im Explorer zu Ihrem SFTP-Remote.
2. Rechtsklick auf den gewünschten Ordner → **Mount** auswählen.
3. Wählen Sie einen lokalen Mount-Punkt (Laufwerksbuchstabe unter Windows, Pfad unter Mac/Linux).
4. Ihr Hetzner-Speicher erscheint als nativer Ordner.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

Jetzt können Sie Dateien öffnen, per Drag-and-Drop verschieben und mit jeder Desktop-Anwendung mit Ihren Storage-Box-Daten arbeiten — als wären sie lokaler Speicher.

## Dateien durchsuchen und verwalten

Der Zwei-Fenster-Explorer ermöglicht die Verwaltung von Hetzner-Speicher neben jedem anderen Remote:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- Ordnerhierarchien navigieren
- Dateien per Drag-and-Drop zwischen Hetzner und Clouds verschieben
- Dateien und Ordner erstellen, umbenennen und löschen
- Dateigrößen und -daten überprüfen

## Synchronisation mit Cloud-Anbietern

### Hetzner → AWS S3 (Offsite-Backup)

Fügen Sie Ihrem bereits zuverlässigen Hetzner-Speicher eine zusätzliche Cloud-Redundanzebene hinzu:

1. Erstellen Sie einen Sync-Job: Hetzner SFTP → S3-Bucket.
2. Planen Sie diesen nächtlich mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Verwenden Sie S3 Glacier für kosteneffiziente Kaltarchivierung.

### Hetzner → Google Drive (Team-Sharing)

Machen Sie Hetzner-Daten für Google-Workspace-Nutzer zugänglich:

1. Erstellen Sie einen Copy-Job: Hetzner → Google-Drive-Ordner.
2. Verwenden Sie [Filterregeln](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview), um nur bestimmte Ordner zu synchronisieren.

### Cloud → Hetzner (Offsite-Backup-Ziel)

Nutzen Sie Hetzner als kostengünstiges Offsite-Backup-Ziel:

1. Erstellen Sie einen Sync-Job: Google Drive → Hetzner Storage Box.
2. Planen Sie diesen täglich — der Preis pro TB von Hetzner macht dies äußerst kosteneffektiv.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## Überprüfen und Überwachen

### Ordnervergleich

Überprüfen Sie die Vollständigkeit der Synchronisation zwischen Hetzner und Ihrem Cloud-Backup:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### Geplante Automatisierung

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hetzner Storage Box hinzufügen** über SFTP (Port 23).
3. **Einbinden (mount)** als lokales Laufwerk oder im Explorer durchsuchen.
4. **Synchronisieren** mit S3, Google Drive oder jeder anderen Cloud.
5. **Planen** für automatisiertes tägliches Backup.

Die Hetzner Storage Box ist eines der bestgehüteten Speichergeheimnisse Europas. RcloneView verschafft ihr den Desktop-Client, den sie verdient — plus Multi-Cloud-Synchronisation obendrauf.

---

**Weiterführende Anleitungen:**

- [SFTP und SMB als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Filterregeln für selektive Synchronisation](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
