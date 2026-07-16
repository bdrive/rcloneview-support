---
slug: connect-webdav-server-cloud-sync-rcloneview
title: "Jeden WebDAV-Server mit RcloneView verbinden — Synchronisation mit Google Drive, S3 und 70+ Clouds"
authors:
  - tayson
description: "WebDAV wird von NAS-Geräten, selbst gehosteten Apps und vielen Cloud-Diensten unterstützt. Erfahren Sie, wie Sie jeden WebDAV-Server mit RcloneView verbinden und mit Ihren anderen Cloud-Konten synchronisieren."
keywords:
  - webdav sync tool
  - webdav file manager
  - webdav to google drive
  - webdav cloud sync
  - webdav backup tool
  - connect webdav rclone
  - webdav gui client
  - webdav transfer files
  - webdav nas sync
  - webdav multi cloud
tags:
  - webdav
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jeden WebDAV-Server mit RcloneView verbinden — Synchronisation mit Google Drive, S3 und 70+ Clouds

> WebDAV ist überall verbreitet — Synology, QNAP, Nextcloud, ownCloud, Box, pCloud und Dutzende weiterer Dienste unterstützen es. RcloneView verwandelt jeden WebDAV-Endpunkt in einen vollwertigen Cloud-Remote, den Sie durchsuchen, synchronisieren und sichern können.

WebDAV (Web Distributed Authoring and Versioning) ist eines der am weitesten verbreiteten Protokolle für den Dateizugriff. NAS-Geräte stellen es bereit, selbst gehostete Cloud-Apps nutzen es, und viele kommerzielle Dienste bieten es als Zugriffsmethode an. RcloneView verbindet sich mit jedem WebDAV-Endpunkt und stellt ihn im Zwei-Fenster-Explorer neben Google Drive, S3, OneDrive und allen anderen unterstützten Anbietern dar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dienste, die WebDAV unterstützen

WebDAV ist verbreiteter, als die meisten Menschen annehmen:

| Dienst/Gerät | WebDAV-URL-Muster |
|---------------|-------------------|
| Nextcloud | `https://your-server/remote.php/dav/files/username/` |
| ownCloud | `https://your-server/remote.php/webdav/` |
| Synology NAS | `https://your-nas:5006/` |
| QNAP NAS | `https://your-nas:8081/` |
| pCloud | `https://webdav.pcloud.com/` |
| Box | `https://dav.box.com/dav/` |
| 4shared | `https://webdav.4shared.com/` |

## Einen WebDAV-Remote hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add WebDAV remote" class="img-large img-center" />

Erstellen Sie im Remote-Manager von RcloneView einen neuen WebDAV-Remote mit Ihrer Server-URL, Ihrem Benutzernamen und Ihrem Passwort. Sobald die Verbindung besteht, können Sie Ihre Dateien sofort durchsuchen.

## Wichtige Arbeitsabläufe

### NAS über WebDAV mit der Cloud synchronisieren

Viele NAS-Geräte stellen WebDAV für den Fernzugriff bereit. Nutzen Sie es, um NAS-Inhalte mit Google Drive oder S3 zu synchronisieren:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync WebDAV NAS to cloud" class="img-large img-center" />

### Selbst gehostete Cloud sichern

Betreiben Sie Nextcloud oder ownCloud? Sichern Sie Ihre selbst gehosteten Dateien zur Notfallwiederherstellung in einer kommerziellen Cloud:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up Nextcloud via WebDAV" class="img-large img-center" />

### Automatisierte Synchronisation planen

Richten Sie nächtliche Synchronisationen zwischen Ihrem WebDAV-Server und dem Cloud-Speicher ein:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule WebDAV sync" class="img-large img-center" />

### Übertragungen überprüfen

Bestätigen Sie, dass synchronisierte Dateien mit den Originalen übereinstimmen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify WebDAV sync" class="img-large img-center" />

## Leistungstipps

- **HTTPS verwenden** für verschlüsselte Verbindungen über das Internet
- **Chunked-Uploads aktivieren** für große Dateien, sofern Ihr Server dies unterstützt
- **Passende Timeouts festlegen** für langsame Verbindungen
- **Gleichzeitige Übertragungen begrenzen** auf 2–4 bei gemeinsam genutzten Servern

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ihren WebDAV-Server hinzufügen** als Remote.
3. **Neben Ihren anderen Cloud-Konten durchsuchen**.
4. **Synchronisieren und planen** für automatisierte Arbeitsabläufe.

Wenn es WebDAV spricht, kann RcloneView es verwalten.

---

**Weiterführende Anleitungen:**

- [Nextcloud mit Google Drive synchronisieren](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [Nextcloud über WebDAV sichern](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [SFTP/SMB als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
