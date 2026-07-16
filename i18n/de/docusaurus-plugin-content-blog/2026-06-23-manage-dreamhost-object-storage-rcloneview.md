---
slug: manage-dreamhost-object-storage-rcloneview
title: "DreamHost DreamObjects verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - robin
description: "Verbinden Sie DreamHost DreamObjects mit RcloneView für visuelle S3-kompatible Bucket-Verwaltung, Dateisynchronisation und automatisierte Backups, ohne einen einzigen CLI-Befehl zu schreiben."
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DreamHost DreamObjects verwalten — Dateien mit RcloneView synchronisieren und sichern

> DreamHost DreamObjects ist ein kostengünstiger S3-kompatibler Object Store—RcloneView bietet Ihnen eine visuelle Möglichkeit, Buckets zu durchsuchen, Dateien zu synchronisieren und Backups zu planen, ohne die Kommandozeile zu berühren.

DreamHost DreamObjects passt natürlich zu DreamHost-gehosteten Websites: Es speichert Backups, Medien-Assets und statische Dateien auf redundanter Hardware hinter einer S3-kompatiblen API. Teams, die bereits bei DreamHost hosten, können diese Investition durch die Verbindung von DreamObjects mit RcloneView um strukturierte Cloud-Backups erweitern und alles über einen zweigeteilten Datei-Explorer verwalten. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff in der KOSTENLOSEN Lizenz, und DreamObjects bildet da keine Ausnahme.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum DreamObjects einen eigenen Workflow verdient

Webagenturen, die Dutzende Kundenprojekte betreuen, sammeln Gigabytes an hochgeladenen Medien, Datenbank-Exporten und Build-Artefakten an, die regelmäßige Offsite-Kopien benötigen. DreamObjects bietet dieses Offsite-Ziel ohne ein separates Cloud-Konto bei einem Anbieter, der nichts über Hosting weiß. Wenn nächtliche Exporte zusammen mit der Live-Site auf DreamObjects gespeichert werden, bedeutet eine Migration oder versehentliche Löschung, dass die Wiederherstellung einfach aus derselben Anbieterbeziehung erfolgt, statt zwischen mehreren Anbietern hin- und herwechseln zu müssen.

Da DreamObjects S3-kompatibel ist, verbindet sich RcloneView damit über denselben S3-Remote-Typ, den es auch für Amazon S3, Cloudflare R2, Wasabi und Dutzende weitere Object Stores verwendet. Wenn Sie zuvor bereits einen S3-artigen Remote konfiguriert haben, wird Ihnen die Einrichtung von DreamObjects sofort vertraut vorkommen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## DreamObjects mit RcloneView verbinden

Öffnen Sie RcloneView und gehen Sie zum Tab **Remote**, dann klicken Sie auf **New Remote**. Wählen Sie den Remote-Typ **S3** und geben Sie Ihre DreamObjects Access Key ID, den Secret Access Key und die Bucket-Endpoint-URL aus dem DreamHost-Panel ein. Nach dem Speichern erscheint der neue Remote im Remote Manager und ist sofort als Panel im Explorer verfügbar.

Das Durchsuchen von DreamObjects im Explorer fühlt sich an wie die Navigation auf einem lokalen Laufwerk: Dateinamen, Größen und Änderungsdaten sind alle sichtbar. Sie können Ordner erstellen, Dateien per Drag-and-Drop aus Ihrem lokalen Panel hochladen, Objekte per Rechtsklick löschen und öffentliche Links für Objekte generieren, die geteilt werden müssen. Es ist nicht nötig, sich jedes Mal im DreamHost-Webpanel anzumelden, wenn Sie Dateien überprüfen oder verschieben möchten.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## Synchronisieren und Sichern mit DreamObjects

Für wiederkehrende Backups erstellen Sie einen Sync-Job über den Assistenten im Tab **Home**. Wählen Sie einen lokalen Projektordner oder einen anderen Cloud-Remote als Quelle und Ihren DreamObjects-Bucket-Pfad als Ziel. Aktivieren Sie vor der Ausführung **Dry Run**, um jede zu übertragende Datei zu prüfen—besonders nützlich, wenn Sie eine große Mediathek zum ersten Mal synchronisieren, da die Vorschau übergroße Dateien oder Namenskonflikte erkennt, ohne dass Daten bewegt werden.

Sobald alles passt, speichern Sie den Job im Job Manager und führen ihn bei Bedarf aus. Nutzer der PLUS-Lizenz können einen Cron-artigen Zeitplan anhängen, sodass DreamObjects-Backups jede Nacht automatisch laufen. Der Tab **Job History** erfasst jede Ausführung mit Dateianzahl, Übertragungsgeschwindigkeit, Gesamtgröße und Endstatus und liefert damit ein Prüfprotokoll, das für Kundenberichte oder Compliance-Prüfungen nützlich ist.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zu **Remote** > **New Remote**, wählen Sie **S3** und geben Sie Ihren DreamObjects Access Key, Secret Key und Endpoint aus dem DreamHost-Panel ein.
3. Öffnen Sie den neuen Remote in einem Explorer-Panel und ziehen Sie Dateien hinein, um sie direkt hochzuladen.
4. Erstellen Sie einen Sync-Job im Tab **Home**, führen Sie zuerst einen Dry Run aus und überprüfen Sie dann die Ergebnisse in **Job History**.

Konsistente DreamObjects-Backups schützen Webprojekte vor versehentlicher Löschung, Hosting-Migrationen und Datenverlust—ohne CLI-Kenntnisse oder ein separates Monitoring-Setup zu erfordern.

---

**Verwandte Anleitungen:**

- [Cloudflare R2 Cloud-Sync mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Amazon S3 verwalten — Cloud-Sync & Backup mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Wasabi Cloud-Sync & Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
