---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "Bunny CDN Storage verwalten — Inhalte mit RcloneView synchronisieren und bereitstellen"
authors:
  - tayson
description: "Bunny.net bietet schnellen, erschwinglichen CDN-Speicher. Nutzen Sie RcloneView, um Bunny Storage Zones zu verwalten, Inhalte von anderen Clouds zu synchronisieren und CDN-Bereitstellungen zu automatisieren."
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bunny CDN Storage verwalten — Inhalte mit RcloneView synchronisieren und bereitstellen

> Bunny.net Storage ist schnell und günstig für CDN-Inhalte. Aber die Verwaltung von Storage Zones über das Web-Dashboard ist umständlich für Massenoperationen. RcloneView bietet Ihnen einen vollwertigen Dateimanager für Ihre CDN-Assets.

Bunny.net hat sich wegen seiner Performance und Preisgestaltung zu einer beliebten CDN-Wahl entwickelt. Der Edge Storage bietet S3-kompatible Storage Zones, die Inhalte über das CDN-Netzwerk ausliefern. Die Verwaltung von Dateien über die Weboberfläche von Bunny ist jedoch langsam bei Massen-Uploads, es fehlen Synchronisationsfunktionen und es gibt keine Planungsmöglichkeit. RcloneView verbindet sich mit Bunny Storage über dessen FTP- oder HTTP-Endpunkt und bietet vollständige Dateiverwaltung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bunny Storage mit RcloneView verbinden

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

Fügen Sie Ihre Bunny Storage Zone als FTP-Remote hinzu, indem Sie die Zugangsdaten aus Ihrem Bunny.net-Dashboard verwenden.

## Wichtige Workflows

### Inhalte auf das CDN bereitstellen

Laden Sie Website-Assets, Bilder oder Medien von Ihrem primären Cloud-Speicher zum Bunny CDN hoch:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### Mit Produktionsspeicher synchronisieren

Halten Sie Ihre CDN-Storage-Zone mit Ihrem Produktions-Asset-Speicher auf S3 oder Google Drive synchron:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### Automatisierte Bereitstellungen planen

Aktualisieren Sie CDN-Inhalte automatisch nach einem Zeitplan:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### CDN-Inhalte überprüfen

Vergleichen Sie Ihren Quellspeicher mit dem Bunny CDN, um sicherzustellen, dass die bereitgestellten Inhalte aktuell sind:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Bunny Storage hinzufügen** als FTP-Remote.
3. **Inhalte synchronisieren** von Ihrem primären Speicher.
4. **Bereitstellungen planen** für automatisierte Updates.

Schnelles CDN verdient schnelle Verwaltungstools.

---

**Weitere Anleitungen:**

- [Vultr Object Storage synchronisieren](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
