---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "So laden Sie Internet-Archive-Sammlungen mit RcloneView hoch und verwalten sie"
authors:
  - tayson
description: "Das Internet Archive bewahrt digitale Inhalte kostenlos auf. Erfahren Sie, wie Sie Sammlungen hochladen, lokale Archive synchronisieren und Ihr Internet-Archive-Konto mit RcloneView verwalten."
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - RcloneView
  - internet-archive
  - digital-preservation
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So laden Sie Internet-Archive-Sammlungen mit RcloneView hoch und verwalten sie

> Das Internet Archive unter archive.org ist die weltweit größte kostenlose digitale Bibliothek. Wenn Sie historische Dokumente, Medien oder Datensätze bewahren, kann RcloneView Ihre Uploads zusammen mit Ihrem übrigen Cloud-Speicher verwalten.

Das Internet Archive bietet kostenlosen, unbegrenzten Speicherplatz für öffentlich zugängliche digitale Inhalte — Bücher, Audio, Video, Software und Datensätze. Viele Forscher, Bibliothekare und Digital-Preservationisten nutzen es zur langfristigen Archivierung. RcloneView unterstützt das Internet Archive als Remote, sodass Sie Uploads zusammen mit Ihren anderen Clouds verwalten können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum das Internet Archive nutzen?

- **Kostenloser Speicher** — Keine Kosten für öffentlich zugängliche Inhalte.
- **Dauerhafte Bewahrung** — Für die langfristige digitale Aufbewahrung konzipiert.
- **Öffentlicher Zugang** — Inhalte stehen jedem frei zur Verfügung.
- **Mehrere Formate** — Unterstützt Audio, Video, Text, Bilder, Software.
- **DOI-Unterstützung** — Zitierbare Referenzen für akademische Inhalte.

## Einrichten des Internet Archive in RcloneView

### API-Zugangsdaten erhalten

1. Erstellen Sie ein Konto unter [archive.org](https://archive.org/).
2. Holen Sie sich Ihre API-Schlüssel unter [archive.org/account/s3.php](https://archive.org/account/s3.php).

### Als Remote hinzufügen

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Internet Archive** als Typ aus.
3. Geben Sie Ihren Access Key und Secret Key ein.

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## Gängige Arbeitsabläufe

### Lokale Sammlungen hochladen

Übertragen Sie digitalisierte Bücher, Audioaufnahmen oder historische Dokumente von Ihrem lokalen Speicher zum Internet Archive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### Backup aus anderen Clouds

Kopieren Sie Inhalte zur digitalen Bewahrung von Google Drive oder S3 zum Internet Archive für dauerhaften öffentlichen Zugang.

### Geplante Uploads

Planen Sie für laufende Digitalisierungsprojekte regelmäßige Uploads:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### Uploads überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Internet Archive hinzu** mit Ihren API-Schlüsseln.
3. **Hochladen, synchronisieren und verwalten** Sie Ihre Sammlungen.
4. **Planen Sie Uploads** für laufende Digitalisierungsprojekte.

Bewahren Sie digitale Geschichte mit einem Tool, das mit allem verbunden ist.

---

**Verwandte Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
