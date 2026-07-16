---
slug: sync-http-remote-download-organize-rcloneview
title: "HTTP/HTTPS-Remotes in RcloneView nutzen — Dateien von Webservern herunterladen und organisieren"
authors:
  - tayson
description: "RcloneView kann sich mit jedem HTTP/HTTPS-Dateiserver als schreibgeschütztes Remote verbinden. Laden Sie öffentlich gehostete Dateien herunter, organisieren Sie sie und synchronisieren Sie sie automatisch mit Ihrem Cloud-Speicher."
keywords:
  - rclone http remote
  - http file download sync
  - web server file sync
  - http to cloud transfer
  - download files to cloud
  - http remote rcloneview
  - web directory sync
  - http ftp file manager
  - download organize cloud
  - web hosted files sync
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - sync
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HTTP/HTTPS-Remotes in RcloneView nutzen — Dateien von Webservern herunterladen und organisieren

> Es gibt einen Webserver mit Dateien, die Sie benötigen — Datensätze, Firmware, Archive, Medien. Statt sie manuell herunterzuladen und wieder in Ihre Cloud hochzuladen, verwenden Sie das HTTP-Remote von RcloneView, um sie direkt zu übertragen.

Viele Organisationen, Forschungseinrichtungen und Open-Source-Projekte hosten Dateien auf HTTP/HTTPS-Webservern. Diese Dateien manuell herunterzuladen und anschließend in Ihren Cloud-Speicher hochzuladen, ist mühsam und verschwendet lokale Bandbreite. RcloneView kann sich mit jedem HTTP-Verzeichnislisting als schreibgeschütztes Remote verbinden, sodass Sie die Inhalte durchsuchen und direkt zu einem beliebigen Cloud-Anbieter übertragen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie HTTP-Remotes funktionieren

Ein HTTP-Remote verbindet sich mit einem Webserver, der Verzeichnislistings bereitstellt. RcloneView analysiert die Verzeichnisstruktur und stellt sie als durchsuchbaren Dateibaum dar — genau wie jedes andere Remote. Dateien können dann in jedes andere Remote kopiert werden (Google Drive, S3, lokaler Speicher usw.).

**Wichtig**: HTTP-Remotes sind schreibgeschützt. Sie können von ihnen herunterladen/kopieren, aber nicht auf sie hochladen.

## Ein HTTP-Remote hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add HTTP remote" class="img-large img-center" />

Richten Sie das Remote auf eine beliebige Webserver-URL, die Verzeichnislistings bereitstellt.

## Anwendungsfälle

### Offene Datensätze spiegeln

Forschungseinrichtungen hosten häufig große Datensätze über HTTP. Spiegeln Sie diese für zuverlässigen Zugriff in Ihr S3 oder Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mirror web dataset to cloud" class="img-large img-center" />

### Webgehostete Dateien archivieren

Falls Dateien vom Server entfernt werden könnten, erstellen Sie zur Aufbewahrung eine Cloud-Kopie.

### Heruntergeladene Inhalte organisieren

Durchsuchen Sie die Struktur des HTTP-Servers, wählen Sie das Benötigte aus und übertragen Sie es in einen organisierten Cloud-Ordner.

### Regelmäßige Downloads planen

Für Server, die sich periodisch aktualisieren (Firmware, Pakete, Datenveröffentlichungen), planen Sie regelmäßige Synchronisationsjobs:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule HTTP sync" class="img-large img-center" />

### Downloads überprüfen

Vergleichen Sie die HTTP-Quelle mit Ihrer Cloud-Kopie:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify HTTP downloads" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie ein HTTP-Remote hinzu**, das auf den Webserver verweist.
3. **Durchsuchen Sie das Verzeichnis** im Datei-Explorer.
4. **Kopieren Sie in Ihre Cloud** — zu einem von über 70 Anbietern.

Webserver werden so zu einem weiteren Remote in Ihrem Cloud-Toolkit.

---

**Verwandte Anleitungen:**

- [WebDAV-Server verbinden](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [FTP-Server in die Cloud migrieren](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
