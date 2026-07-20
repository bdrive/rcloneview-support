---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "Jeden SFTP-Server mit RcloneView verbinden — Remote-Server mit Cloud-Speicher synchronisieren"
authors:
  - tayson
description: "SFTP ist der Standard für sicheren Dateizugriff auf Linux-Servern, VPS und Hosting. Verbinde jeden SFTP-Server mit RcloneView und synchronisiere mit Google Drive, S3 oder über 70 Clouds."
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - RcloneView
  - sftp
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jeden SFTP-Server mit RcloneView verbinden — Remote-Server mit Cloud-Speicher synchronisieren

> Jeder Linux-Server, VPS und Webhost spricht SFTP. RcloneView verwandelt jeden SFTP-Endpunkt in einen verwaltbaren Remote, den du durchsuchen, mit Cloud-Speicher synchronisieren und nach Zeitplan sichern kannst.

SFTP (SSH File Transfer Protocol) ist das universelle Protokoll für sicheren Dateizugriff auf Remote-Servern. Egal ob Webserver, Entwicklungsrechner, VPS oder dedizierter Server — SFTP ist fast immer verfügbar. RcloneView verbindet sich mit jedem SFTP-Server und stellt ihn neben deine Cloud-Konten — durchsuche Serverdateien visuell, synchronisiere zu S3 oder Google Drive und plane automatisierte Backups.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen SFTP-Remote hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

Konfiguriere mit dem Hostnamen deines Servers, dem Port (Standard 22), dem Benutzernamen und entweder Passwort- oder SSH-Key-Authentifizierung. Das Dateisystem deines Servers erscheint sofort im Explorer.

## Wichtige Workflows

### Webserver in die Cloud sichern

Synchronisiere die Verzeichnisse `/var/www` oder `/home` deines Webservers mit S3 oder Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### Server-Backups planen

Automatisiere nächtliche Server-Backups in den Cloud-Speicher:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### Zwischen Servern migrieren

Umzug auf einen neuen Server? Öffne den alten Server-SFTP in einem Bereich und den neuen im anderen. Übertrage direkt.

### Entwicklungsdateien synchronisieren

Halte deine lokale Entwicklungsumgebung über Cloud-Speicher als Vermittler mit deinem Remote-Server synchron.

### Backups überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## SSH-Key-Authentifizierung

Für automatisierte Backups wird SSH-Key-Authentifizierung anstelle von Passwörtern empfohlen. Konfiguriere deinen Key in den Remote-Einstellungen für passwortlose, sichere Verbindungen.

## Performance-Tipps

- **Kompression verwenden** für textlastige Übertragungen über langsame Verbindungen
- **Gleichzeitige Übertragungen begrenzen** auf 2-4 bei Shared Hosting
- **Temporäre Dateien ausschließen** — filtere `.cache`, `node_modules`, `__pycache__` heraus
- **Außerhalb der Spitzenzeiten planen**, um die Serverleistung nicht zu beeinträchtigen

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Deinen SFTP-Server hinzufügen** als Remote.
3. **Serverdateien durchsuchen** im Zwei-Bereich-Explorer.
4. **Mit der Cloud synchronisieren** und Backups planen.

Wenn es SSH hat, kann RcloneView es verwalten.

---

**Verwandte Anleitungen:**

- [SFTP/SMB als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [WebDAV-Server verbinden](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [FTP-Server in die Cloud migrieren](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
