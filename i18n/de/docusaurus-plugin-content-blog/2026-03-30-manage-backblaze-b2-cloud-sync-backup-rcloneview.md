---
slug: manage-backblaze-b2-cloud-sync-backup-rcloneview
title: "Backblaze B2 Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Backblaze B2 Cloud-Speicher mit RcloneView verwalten. Synchronisieren, sichern und übertragen Sie Dateien mühelos zwischen B2-Buckets und anderen Cloud-Anbietern."
keywords:
  - backblaze b2 sync
  - backblaze b2 backup
  - rcloneview backblaze
  - b2 cloud storage manager
  - backblaze b2 file transfer
  - b2 bucket management
  - s3 compatible backup
  - backblaze b2 rclone gui
  - cloud to cloud sync b2
  - b2 lifecycle rules
tags:
  - backblaze-b2
  - Backblaze
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Backblaze B2 bietet Objektspeicher auf Unternehmensniveau zu einem Bruchteil der Kosten von AWS S3, und RcloneView macht die Verwaltung mühelos.

Backblaze B2 hat sich zur bevorzugten Wahl für Teams und Einzelpersonen entwickelt, die erschwinglichen, zuverlässigen Cloud-Speicher ohne die Komplexität traditioneller S3-Anbieter benötigen. Bei 0,006 $ pro GB/Monat für Speicher und 0,01 $ pro GB für Egress (mit den ersten 10 GB täglich kostenlos im Rahmen der Cloudflare-Bandwidth-Alliance) unterbietet B2 die meisten Wettbewerber deutlich. RcloneView bietet Ihnen eine vollständige grafische Oberfläche zur Verwaltung Ihrer B2-Buckets — Dateien durchsuchen, Backups planen, Synchronisationen ausführen und Daten zu oder von anderen Clouds übertragen, ohne die Kommandozeile zu berühren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2 in RcloneView verbinden

Die Einrichtung von Backblaze B2 in RcloneView dauert weniger als eine Minute. Öffnen Sie den Remote-Manager, wählen Sie **Backblaze B2** als Anbieter und geben Sie Ihre Application Key ID und Ihren Application Key ein. Sie können entweder einen Master Key oder einen anwendungsspezifischen Key verwenden, der auf einen einzelnen Bucket beschränkt ist. Anwendungsspezifische Keys werden für Produktions-Workflows dringend empfohlen, da sie dem Prinzip der geringsten Rechtevergabe folgen — wird ein Key kompromittiert, ist nur ein Bucket betroffen.

Nach der Verbindung listet RcloneView alle zugänglichen Buckets im Zwei-Fenster-Explorer auf. Sie können Verzeichnisse durchsuchen, Dateien in der Vorschau ansehen und Metadaten wie Dateigröße, Änderungszeit und SHA-1-Prüfsummen einsehen, die B2 serverseitig berechnet.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote in RcloneView Remote Manager" class="img-large img-center" />

## Dateien mit B2 synchronisieren und übertragen

RcloneView unterstützt **Synchronisation**, **Kopieren** und **Verschieben** zwischen Backblaze B2 und jedem anderen konfigurierten Remote — einschließlich lokaler Laufwerke, Google Drive, Dropbox, AWS S3 und Wasabi. Der Zwei-Fenster-Explorer ermöglicht direktes Drag-and-Drop, während das Job-System Warteschlangen und Wiederholungslogik automatisch verwaltet.

Bei großen Migrationen bedeutet der kostenlose Egress von B2 über die Cloudflare- oder Fastly-CDN-Partnerschaften, dass Sie Daten aus B2 herausziehen können, ohne dass die Bandbreitenkosten explodieren. Die integrierte Bandbreitendrosselung und die mehrfädigen Übertragungen von RcloneView ermöglichen es Ihnen, Ihre Verbindung auszulasten, wenn Geschwindigkeit wichtig ist, oder die Nutzung während der Geschäftszeiten zu drosseln.

Beim Synchronisieren von Ordnern vergleicht RcloneView standardmäßig Prüfsummen. B2 speichert SHA-1-Hashes für jede Datei, und RcloneView nutzt sie, um unveränderte Dateien zu überspringen — das spart sowohl Zeit als auch API-Aufrufe. Dies ist besonders wertvoll, da B2 0,004 $ pro 10.000 Class-B-Transaktionen (Download) berechnet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Backblaze B2 and another cloud in RcloneView" class="img-large img-center" />

## Automatisierte Backups zu B2 planen

Einer der stärksten Anwendungsfälle von B2 ist die Nutzung als Backup-Ziel. Der Job-Scheduler von RcloneView ermöglicht es Ihnen, wiederkehrende Backup-Jobs zu definieren — täglich, wöchentlich oder nach einem benutzerdefinierten Cron-Zeitplan. Legen Sie einen lokalen Ordner oder ein anderes Cloud-Remote als Quelle und B2 als Ziel fest, und lassen Sie den Scheduler den Rest erledigen.

Die Lifecycle-Regeln von B2 ergänzen diesen Workflow. Sie können Buckets so konfigurieren, dass Dateien nach einem festgelegten Zeitraum automatisch ausgeblendet oder alte Versionen dauerhaft gelöscht werden, wodurch die Speicherkosten planbar bleiben. Das Job-Verlaufsfenster von RcloneView bietet Ihnen einen klaren Prüfpfad für jede Übertragung, einschließlich Dateianzahl, übertragener Bytes, Fehler und verstrichener Zeit.

Für Teams, die Compliance-Anforderungen unterliegen, bietet die Kombination aus geplanter Synchronisation in RcloneView und der Object-Lock-Funktion von B2 unveränderliche Backups, die während der Aufbewahrungsfrist weder geändert noch gelöscht werden können.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup job to Backblaze B2" class="img-large img-center" />

## B2 als lokales Laufwerk einbinden

Mit der Mount-Funktion von RcloneView können Sie einen B2-Bucket als lokalen Laufwerksbuchstaben unter Windows oder als Mount-Punkt unter macOS und Linux einbinden. Dies ist nützlich für Anwendungen, die lokalen Dateizugriff erwarten — Media-Player, Fotobearbeitungsprogramme oder Skripte, die Dateien aus einem Verzeichnis verarbeiten. Die VFS-Cache-Schicht übernimmt das Read-Ahead-Buffering, sodass sequenzielle Lesevorgänge auch bei moderaten Internetverbindungen gut funktionieren.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Backblaze B2 bucket as a local drive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen Application Key in Ihrem Backblaze-B2-Dashboard und fügen Sie ihn als neues Remote in RcloneView hinzu.
3. Durchsuchen Sie Ihre Buckets im Zwei-Fenster-Explorer und ziehen Sie Dateien per Drag-and-Drop, um sie zu synchronisieren oder zu übertragen.
4. Erstellen Sie einen geplanten Job, um nächtliche Backups zu B2 zu automatisieren.

Backblaze B2 bietet die Speicherökonomie, die Cloud-Backup im großen Maßstab praktikabel macht, und RcloneView beseitigt die CLI-Hürde, sodass Ihr gesamtes Team es verwalten kann.

---

**Verwandte Anleitungen:**

- [Backblaze B2 mit RcloneView zu AWS S3 migrieren](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Google Drive mit RcloneView zu Backblaze B2 synchronisieren](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Dropbox zu Backblaze B2 sichern — erschwinglicher Speicher mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
