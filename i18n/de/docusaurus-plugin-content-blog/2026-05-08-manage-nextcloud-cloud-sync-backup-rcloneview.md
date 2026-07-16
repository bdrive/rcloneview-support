---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "Nextcloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - jay
description: "Verbinden Sie Ihre selbst gehostete oder verwaltete Nextcloud-Instanz über WebDAV mit RcloneView für GUI-basierte Dateiverwaltung, Cloud-übergreifende Synchronisation und automatisierte Backups."
keywords:
  - Nextcloud RcloneView sync
  - manage Nextcloud files GUI
  - Nextcloud WebDAV RcloneView
  - Nextcloud backup cloud storage
  - sync Nextcloud to Google Drive
  - Nextcloud to S3 backup
  - self-hosted cloud sync RcloneView
  - Nextcloud file management desktop
tags:
  - nextcloud
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie RcloneView über WebDAV mit Ihrer Nextcloud-Instanz und verwalten Sie Dateien, automatisieren Sie Cloud-übergreifende Backups und synchronisieren Sie Daten mit S3 oder Google Drive — alles über eine übersichtliche Desktop-GUI.

Der integrierte Sync-Client von Nextcloud eignet sich hervorragend, um einen lokalen Ordner synchron zu halten, hilft aber nicht weiter, wenn Sie Daten in eine andere Cloud migrieren, Anbieter-übergreifende Backups automatisieren oder Ihre Nextcloud-Dateien zusammen mit anderen Speichersystemen durchsuchen möchten. RcloneView verbindet sich über WebDAV — das von Nextcloud bereitgestellte Standardprotokoll — mit Nextcloud und behandelt es wie jeden anderen Cloud-Remote im Zweispalten-Datei-Explorer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Nextcloud über WebDAV mit RcloneView verbinden

Nextcloud stellt WebDAV unter einem Standard-URL-Pfad auf Ihrem Server bereit. Gehen Sie in RcloneView zu **Remote-Tab → New Remote** und wählen Sie **WebDAV** als Anbietertyp aus. Geben Sie Ihre Nextcloud-WebDAV-URL ein (typischerweise `https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`), Ihren Nextcloud-Benutzernamen und Ihr Passwort. Setzen Sie die Option **Vendor** auf Nextcloud, um Nextcloud-spezifische Optimierungen im rclone-WebDAV-Backend zu aktivieren.

Nach dem Speichern erscheinen Ihre Nextcloud-Dateien im Explorer-Bereich mit derselben Oberfläche wie bei jedem anderen Anbieter — Ordnerbaum, sortierbare Dateiliste und Breadcrumb-Navigation. Sie können Dateien durchsuchen, umbenennen, kopieren, löschen und per Drag & Drop zu und von Nextcloud verschieben, genau wie bei Google Drive oder Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## Nextcloud auf S3 oder Backblaze B2 sichern

Selbst gehostete Nextcloud-Server benötigen eine externe Backup-Strategie. Mit dem Job Manager von RcloneView können Sie einen Sync-Job von Ihrem Nextcloud-Remote zu Amazon S3, Backblaze B2 oder jedem anderen Cloud-Anbieter erstellen. So erhalten Sie eine redundante, extern gespeicherte Kopie aller Nextcloud-Daten, die vor Serverausfällen oder Problemen beim Hosting-Anbieter schützt.

Konfigurieren Sie den Job mit **Enable Checksum** zur Sicherstellung der Datenintegrität und nutzen Sie den Filter **Max file age**, wenn Sie nur kürzlich geänderte Dateien sichern müssen. Mit einer PLUS-Lizenz können Sie diesen Job nächtlich planen, sodass das Backup stets den aktuellen Stand Ihrer Nextcloud-Daten widerspiegelt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## Nextcloud-Dateien mit Google Drive oder OneDrive synchronisieren

Viele Organisationen betreiben Nextcloud intern aus Datenschutzgründen, müssen jedoch bestimmte Dateien extern über Google Drive oder OneDrive zur Zusammenarbeit freigeben. RcloneView macht daraus einen definierten, wiederholbaren Prozess: Erstellen Sie einen Copy- oder Sync-Job von einem bestimmten Nextcloud-Ordner zu einem Google Drive Shared Drive oder OneDrive-Ordner und planen Sie ihn so, dass er ausgeführt wird, sobald Sie ein Update veröffentlichen möchten.

Dieses Muster ist bei Teams verbreitet, die Nextcloud als internes Dokumentenmanagementsystem und Google Drive als nach außen gerichtete Kollaborationsebene nutzen. Mit der Funktion Folder Compare können Sie vor und nach jeder Synchronisation überprüfen, ob die Nextcloud- und Google-Drive-Kopien übereinstimmen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre Nextcloud-WebDAV-URL als neuen Remote im **Remote-Tab** hinzu.
3. Durchsuchen Sie Nextcloud-Dateien im Zweispalten-Explorer zusammen mit anderen Cloud-Anbietern.
4. Erstellen Sie einen geplanten Backup-Job zu S3 oder Backblaze B2 für externen Schutz.

RcloneView bringt umfassende Desktop-Verwaltungsfunktionen zu Ihrer Nextcloud-Instanz — egal ob es sich um einen privaten Server, einen gehosteten Tarif oder eine Unternehmensbereitstellung handelt.

---

**Weiterführende Anleitungen:**

- [Nextcloud über WebDAV mit RcloneView sichern](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Nextcloud mit Backblaze B2 über RcloneView synchronisieren](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Nextcloud mit RcloneView zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
