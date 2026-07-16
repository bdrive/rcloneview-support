---
slug: sync-linode-object-storage-s3-google-drive-rcloneview
title: "Linode Object Storage mit AWS S3 oder Google Drive synchronisieren – mit RcloneView"
authors:
  - tayson
description: "Verwalten Sie Linode Object Storage visuell — durchsuchen Sie Buckets, synchronisieren Sie mit AWS S3 oder Google Drive und planen Sie automatisierte Backups mit der GUI von RcloneView."
keywords:
  - linode object storage sync
  - linode object storage backup
  - linode object storage gui
  - linode to aws s3
  - linode object storage mount
  - linode s3 compatible
  - akamai object storage sync
  - linode object storage file manager
  - linode object storage rclone
  - linode cloud backup tool
tags:
  - linode
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linode Object Storage mit AWS S3 oder Google Drive synchronisieren – mit RcloneView

> Linode (jetzt Akamai) Object Storage bietet günstige, S3-kompatible Buckets, aber keinen Desktop-Client. RcloneView schließt diese Lücke — durchsuchen, synchronisieren und automatisieren Sie Backups visuell.

Linode Object Storage (jetzt Teil von Akamai Connected Cloud) ist ein beliebter S3-kompatibler Speicherdienst, der von Entwicklern und kleinen Unternehmen wegen seiner Einfachheit und wettbewerbsfähigen Preise genutzt wird. Doch wie bei den meisten Object-Storage-Diensten ist das Web-Dashboard nicht für die alltägliche Dateiverwaltung ausgelegt, und es gibt keinen nativen Desktop-Sync-Client. RcloneView verbindet sich über die S3-API mit Linode und bietet eine vollständige GUI zum Durchsuchen, Synchronisieren und Automatisieren von Datenübertragungen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView mit Linode Object Storage verwenden?

- **Kein Desktop-Client** — Linode bietet eine Web-Konsole und eine API, aber keine Sync-App.
- **Visuelle Bucket-Verwaltung** — Dateien durchsuchen, per Drag-and-Drop organisieren, ohne CLI.
- **Cloud-übergreifende Synchronisation** — Replizieren Sie Linode-Daten zu AWS S3, Google Drive oder jedem anderen Anbieter.
- **Automatisierte Backups** — Planen Sie nächtliche Synchronisationen zu einer zweiten Cloud für Redundanz.

## Linode Object Storage verbinden

Da Linode S3-kompatibel ist, erfolgt die Einrichtung über den S3-Provider:

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Amazon S3** als Providertyp.
3. Wählen Sie **Other** aus dem S3-Provider-Dropdown.
4. Geben Sie Ihre Linode-Zugangsdaten ein:
   - **Access Key** und **Secret Key** aus dem Linode Cloud Manager.
   - **Endpoint**: `https://{cluster-id}.linodeobjects.com` (z. B. `https://us-east-1.linodeobjects.com`).
   - **Region**: Ihre Cluster-Region.
5. Speichern — Ihre Linode-Buckets sind nun durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add Linode Object Storage as S3-compatible remote" class="img-large img-center" />

## Ihre Buckets durchsuchen

Zeigen Sie Linode-Buckets neben jeder anderen Cloud oder lokalen Festplatte an:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Linode Object Storage" class="img-large img-center" />

## Sync-Szenarien

### Linode → AWS S3 (Cloud-übergreifende Redundanz)

1. Erstellen Sie einen Sync-Job: Linode → S3-Bucket.
2. Planen Sie ihn täglich mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Beide sind S3-kompatibel, daher sind Übertragungen schnell und effizient.

### Linode → Google Drive (Team-Zugriff)

1. Erstellen Sie einen Copy-Job: Linode → Google-Drive-Ordner.
2. Macht Entwickler-Assets für nicht-technische Teammitglieder zugänglich.

### Lokal/NAS → Linode (Offsite-Backup)

1. Erstellen Sie einen Sync-Job vom lokalen Speicher → Linode-Bucket.
2. Die Preisgestaltung von Linode macht es kosteneffizient für Offsite-Backups.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Linode sync job" class="img-large img-center" />

## Als lokales Laufwerk einbinden (mounten)

Greifen Sie auf Linode-Buckets wie auf einen normalen Ordner zu:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Linode Object Storage as local drive" class="img-large img-center" />

## Automatisieren und überwachen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Linode backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Linode transfers" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Linode Object Storage hinzufügen** als S3-kompatiblen Remote.
3. **Durchsuchen**, **einbinden (mounten)** oder **synchronisieren** Sie zu jedem Ziel.
4. **Planen** Sie für automatisierte Backups.

Linode Object Storage hat mehr verdient als eine Web-Konsole. RcloneView bietet dafür ein echtes Desktop-Erlebnis mit integrierter Multi-Cloud-Synchronisation.

---

**Weiterführende Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
