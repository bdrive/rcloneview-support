---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Hetzner Storage Box verwalten — Synchronisation und Backup mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Hetzner Storage Box sicher mit RcloneView verbinden und Dateien mit den Protokollen SFTP und WebDAV cloudübergreifend synchronisieren – für europäisches Cloud-Backup."
keywords:
  - Hetzner Storage Box
  - SFTP backup
  - WebDAV cloud sync
  - European cloud storage
  - RcloneView
  - secure file sync
  - cloud backup Europe
  - Hetzner SFTP
  - hybrid cloud backup
  - GDPR-compliant cloud storage
tags:
  - RcloneView
  - hetzner
  - european-cloud
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage Box verwalten — Synchronisation und Backup mit RcloneView

> Europäischer Cloud-Speicher trifft auf Multi-Cloud-Flexibilität. Hetzner Storage Box bietet wettbewerbsfähige Preise und DSGVO-Konformität – jetzt mühelos zusammen mit Ihren anderen Cloud-Konten in RcloneView verwaltbar.

Hetzner Storage Box ist eine bewährte Wahl für europäische Unternehmen, die zuverlässiges, erschwingliches Cloud-Backup suchen. Ob Sie SFTP oder WebDAV verwenden – RcloneView verbindet Ihr Hetzner-Konto mit Ihrem gesamten Cloud-Ökosystem und ermöglicht Ihnen Synchronisation, Backup und Archivierung, ohne Ihr Dashboard zu verlassen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hetzner Storage Box per SFTP verbinden

Das Hinzufügen eines Hetzner-Storage-Box-Remotes ist in RcloneView unkompliziert. SFTP bietet Ihnen direkten Serverzugriff mit branchenüblicher Verschlüsselung.

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**
2. Wählen Sie **SFTP** aus der Anbieterliste
3. Geben Sie Ihre Hetzner-Zugangsdaten ein:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: Ihr Hetzner-Login
   - **Password**: Ihr Hetzner-Passwort oder SSH-Schlüssel
4. Setzen Sie den Port auf **22** (Standard-SFTP)
5. Klicken Sie auf **Test Connection**, um die Verbindung zu überprüfen

![New Remote Setup](/images/en/blog/new-remote.png)

## Hetzner mit AWS S3 oder anderen Clouds synchronisieren

Sobald Ihre Hetzner Storage Box verbunden ist, können Sie sofort Cloud-zu-Cloud-Synchronisationsjobs erstellen.

**Anwendungsfälle:**
- **Backup zu S3**: Archivieren Sie selten genutzte Dateien von Hetzner in Amazon S3 Glacier zur Langzeitarchivierung
- **Multi-Cloud-Redundanz**: Spiegeln Sie Daten zwischen Hetzner und Backblaze B2
- **Hybride Workflows**: Synchronisieren Sie Hetzner Storage Box mit Google Drive für den Teamzugriff

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## Echtzeitüberwachung und Zeitplanung

Der Job-Scheduler von RcloneView ermöglicht es Ihnen, Hetzner-Backups nach Ihrem eigenen Zeitplan zu automatisieren. Überwachen Sie Übertragungsgeschwindigkeiten, Fehlerraten und Dateianzahlen in Echtzeit.

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie ein Hetzner-Storage-Box-Konto (falls noch nicht vorhanden) auf [hetzner.com](https://www.hetzner.com/storage/storage-box).
3. Fügen Sie Ihr Hetzner-Remote mit SFTP- oder WebDAV-Zugangsdaten in RcloneView hinzu.
4. Erstellen Sie Ihren ersten Synchronisations- oder Backup-Job zu einem anderen Cloud-Anbieter.
5. Planen Sie wiederkehrende Jobs oder führen Sie bei Bedarf einmalige Übertragungen durch.

Verwalten Sie Ihren europäischen Cloud-Speicher mit Vertrauen — RcloneView übernimmt die Komplexität, damit Sie sich auf Ihre Daten konzentrieren können.

---

**Related Guides:**

- [SFTP-Server verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [WebDAV-Server verbinden — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [OVH Cloud Object Storage verwalten — Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
