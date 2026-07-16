---
slug: manage-quatrix-enterprise-file-sync-rcloneview
title: "Quatrix Enterprise File Sharing verwalten — Synchronisation mit Google Drive, S3 und mehr mit RcloneView"
authors:
  - tayson
description: "Quatrix von Maytech ist eine Enterprise-Plattform für File Sharing. Erfahren Sie, wie Sie Quatrix zusammen mit Google Drive, S3 und anderen Clouds mit RcloneView synchronisieren und sichern."
keywords:
  - quatrix file sharing
  - quatrix rclone
  - quatrix sync
  - quatrix backup
  - quatrix enterprise cloud
  - maytech quatrix
  - quatrix file transfer
  - quatrix google drive
  - quatrix s3 backup
  - enterprise file sharing sync
tags:
  - RcloneView
  - quatrix
  - enterprise
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Quatrix Enterprise File Sharing verwalten — Synchronisation mit Google Drive, S3 und mehr mit RcloneView

> Quatrix von Maytech bietet sicheres Enterprise File Sharing mit Compliance-Funktionen. Doch die Integration mit Ihren anderen Cloud-Plattformen erfordert das richtige Tool. RcloneView verbindet Quatrix mit über 70 Anbietern.

Quatrix ist eine Enterprise-Plattform für File Sharing und Dateiübertragung mit Fokus auf Sicherheit und Compliance. Viele Organisationen nutzen sie für den sicheren externen Dateiaustausch, während sie für die interne Zusammenarbeit auf Google Drive oder OneDrive setzen. RcloneView verbindet Quatrix mit Ihrem gesamten Cloud-Ökosystem.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Quatrix in RcloneView einrichten

Auf Quatrix kann über die API oder die WebDAV-Schnittstelle zugegriffen werden:

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie den passenden Verbindungstyp für Ihr Quatrix-Setup.
3. Geben Sie Ihre Quatrix-Zugangsdaten ein.

<img src="/support/images/en/blog/new-remote.png" alt="Add Quatrix remote" class="img-large img-center" />

## Wichtige Workflows

### Quatrix → S3 (Offsite-Backup)

Sichern Sie sensible Quatrix-Daten verschlüsselt auf AWS S3:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Quatrix backup" class="img-large img-center" />

### Google Drive → Quatrix (sichere externe Freigabe)

Verschieben Sie Dateien vom internen Google Drive nach Quatrix, um sie sicher mit externen Parteien zu teilen.

### Quatrix → NAS (lokales Archiv)

Behalten Sie eine lokale Kopie der Quatrix-Inhalte auf Ihrem NAS für die Compliance-Archivierung.

## Überprüfen und Überwachen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Quatrix sync" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Quatrix hinzufügen**, zusammen mit Ihren anderen Clouds.
3. **Backup- und Sync-Jobs erstellen**.
4. **Planen und überprüfen**.

Enterprise File Sharing, mit allem verbunden.

---

**Verwandte Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
