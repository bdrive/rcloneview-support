---
slug: make-s3-files-accessible-google-drive-rcloneview
title: "So machen Sie AWS-S3-Dateien über Google Drive zugänglich – S3-Buckets für die Teamzusammenarbeit synchronisieren"
authors:
  - tayson
description: "AWS S3 eignet sich hervorragend zur Speicherung, ist für nicht-technische Teams aber schwer zugänglich. Erfahren Sie, wie Sie den Inhalt eines S3-Buckets mit RcloneView zu Google Drive synchronisieren, um die Freigabe zu vereinfachen."
keywords:
  - s3 to google drive sync
  - aws s3 google drive
  - share s3 files team
  - s3 bucket google drive
  - make s3 accessible
  - s3 collaboration tool
  - sync s3 google drive
  - s3 files non technical users
  - aws s3 file sharing
  - s3 to gdrive transfer
tags:
  - RcloneView
  - aws-s3
  - google-drive
  - collaboration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So machen Sie AWS-S3-Dateien über Google Drive zugänglich – S3-Buckets für die Teamzusammenarbeit synchronisieren

> Ihre Entwickler speichern alles in S3-Buckets. Ihr Marketingteam nutzt Google Drive. Wenn das Marketing eine Datei aus S3 benötigt, bittet es einen Entwickler, sie herunterzuladen und zu teilen. Es geht auch besser.

AWS S3 ist leistungsstark und kosteneffizient, aber für Entwickler konzipiert. Die AWS-Konsole ist für nicht-technische Teammitglieder nicht benutzerfreundlich, und das Teilen einzelner S3-Objekte erfordert das Erstellen von presigned URLs. Durch die Synchronisation ausgewählter S3-Ordner mit Google Drive erhält jeder Zugriff auf die benötigten Dateien – ohne AWS-Zugangsdaten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Das Problem

- **Entwickler** speichern Assets, Berichte und Exporte in S3.
- **Nicht-technische Teams** (Marketing, Vertrieb, Management) können nicht einfach auf S3 zugreifen.
- **Aktuelle Behelfslösung**: Jemand lädt Dateien aus S3 herunter und lädt sie manuell zu Google Drive hoch.
- **Ergebnis**: Veraltete Dateien, zusätzlicher Aufwand und frustrierte Teams.

## Die Lösung

Nutzen Sie RcloneView, um bestimmte S3-Ordner automatisch mit Google Drive zu synchronisieren:

```
S3: reports/monthly/ → Google Drive: Shared/Monthly Reports/
S3: assets/marketing/ → Google Drive: Shared/Marketing Assets/
S3: exports/data/ → Google Drive: Shared/Data Exports/
```

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync S3 to Google Drive" class="img-large img-center" />

## Einrichtung

### 1) Beide Konten verbinden

Fügen Sie AWS S3 und Google Drive als Remotes hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add S3 and Google Drive remotes" class="img-large img-center" />

### 2) Selektive Synchronisationsjobs erstellen

Synchronisieren Sie nicht den gesamten S3-Bucket – synchronisieren Sie nur die Ordner, die nicht-technische Teams benötigen. Verwenden Sie Filterregeln, um bestimmte Pfade oder Dateitypen einzuschließen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create S3 to Google Drive sync job" class="img-large img-center" />

### 3) Automatische Aktualisierungen planen

Synchronisieren Sie stündlich oder täglich, damit Google Drive stets die aktuellsten Dateien enthält:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule S3 to Google Drive sync" class="img-large img-center" />

### 4) Vollständigkeit der Synchronisation überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify S3 and Google Drive are in sync" class="img-large img-center" />

## Einseitig vs. beidseitig

### Einseitig (S3 → Google Drive)

Verwenden Sie **Copy** oder **Sync** von S3 zu Google Drive. Google Drive ist dabei schreibgeschützt (ein Spiegel). Änderungen müssen in S3 vorgenommen werden.

Am besten geeignet für: Berichte, Exporte, generierte Assets.

### Beidseitig

Synchronisation in beide Richtungen. Änderungen in Google Drive werden zu S3 zurücksynchronisiert und umgekehrt.

Am besten geeignet für: Gemeinsam genutzte Arbeitsordner, zu denen beide Teams beitragen.

## Nach Relevanz filtern

Überfluten Sie Google Drive nicht mit allem aus S3. Verwenden Sie Filter:

- Nur `*.pdf`, `*.xlsx`, `*.pptx` einschließen – Geschäftsdokumente.
- Rohdaten, Protokolle und temporäre Dateien ausschließen.
- Mit `--max-age 90d` nur aktuelle Dateien synchronisieren.

## Kostenbewusstsein

Der S3-Egress kostet Geld (90 $/TB für die ersten 10 TB). Bei häufiger Synchronisation großer Datenmengen sollten Sie Folgendes in Betracht ziehen:

- Synchronisation außerhalb der Stoßzeiten.
- Filter verwenden, um das Datenvolumen zu begrenzen.
- Backblaze B2 oder Wasabi als Zwischenstation nutzen (kostenloser/günstiger Egress).

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **S3 und Google Drive** als Remotes hinzufügen.
3. **Gezielte Synchronisationsjobs** für bestimmte Ordner erstellen.
4. **Stündliche oder tägliche Aktualisierungen** planen.
5. **Google-Drive-Ordner** mit Ihrem Team teilen.

Schließen Sie die Lücke zwischen Entwickler-Infrastruktur und Teamzusammenarbeit.

---

**Weiterführende Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Rclone-Filterregeln](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
