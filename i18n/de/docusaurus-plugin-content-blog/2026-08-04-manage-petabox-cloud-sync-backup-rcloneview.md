---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - kai
description: "Verbinden Sie S3-kompatiblen Petabox-Speicher mit RcloneView für plattformübergreifendes Durchsuchen, Synchronisieren, Sichern und Einbinden neben 90+ weiteren Cloud-Anbietern."
keywords:
  - Petabox
  - Petabox RcloneView
  - Petabox Synchronisation
  - Petabox Backup
  - S3-kompatiber Speicher
  - Petabox verwalten
  - Objektspeicher GUI
  - Petabox Cloud-Speicher
  - S3-kompatibler Cloud-Manager
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Petabox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie Petabox-Objektspeicher im selben Fenster wie jede andere Cloud, die Sie nutzen — ohne separaten S3-Client.

Petabox ist ein S3-kompatibler Objektspeicherdienst, was bedeutet, dass er sich genauso in RcloneView einbinden lässt wie Amazon S3 oder Wasabi: über einen Access Key, einen Secret Key und einen benutzerdefinierten Endpunkt. Einmal verbunden, verhält sich Petabox im Datei-Explorer von RcloneView wie jeder andere Remote — durchsuchbar, synchronisierbar und einbindbar neben Ihren anderen Anbietern. Das ist wichtig für Teams, die sich wegen der Objektspeicher-Ökonomie für Petabox entschieden haben, aber trotzdem eine normale Dateimanager-Erfahrung statt der AWS CLI oder einer reinen Bucket-Weboberfläche benötigen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Petabox als S3-kompatiblen Remote verbinden

Das Hinzufügen von Petabox folgt dem Standardablauf von RcloneView für S3-kompatible Remotes: Öffnen Sie „New Remote“, wählen Sie den S3-kompatiblen Typ und geben Sie Ihre Petabox Access Key ID, den Secret Access Key sowie die Bucket-Endpunkt-URL aus Ihrem Petabox-Dashboard ein. RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, sodass kein separater Installationsschritt nötig ist — die Zugangsdaten allein genügen, um den Bucket in den Datei-Explorer zu holen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

Nach dem Hinzufügen erscheint Petabox als Tab im Explorer-Panel, genau wie Google Drive oder OneDrive. Anders als reine Mount-only-S3-Browser synchronisiert und vergleicht RcloneView Ordner auch für Petabox — mit der FREE-Lizenz, ohne separaten Kauf für die grundlegende Synchronisation.

## Petabox mit anderen Cloud-Anbietern synchronisieren

Ein häufiger Anwendungsfall für Petabox ist das Archivieren von Daten, die derzeit bei einem teureren Anbieter liegen, oder das Spiegeln eines aktiven Buckets zur Redundanz. Der Sync-Assistent von RcloneView lässt Sie Petabox als Quelle oder Ziel festlegen, mit Filtern nach Dateityp, Alter und Größe, sodass nur die gewünschten Daten verschoben werden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

Der Dry-Run-Modus zeigt genau im Voraus, was kopiert oder gelöscht wird, bevor irgendetwas passiert — nützlich, wenn eine einseitige Synchronisation auf einen Bucket zeigt, der nicht versehentlich überschrieben werden soll. Die Compare-Ansicht geht noch weiter und zeigt links-only-, rechts-only- und größenabweichende Dateien zwischen Petabox und einem zweiten Remote, bevor Sie sich für eine Kopie entscheiden.

## Wiederkehrende Petabox-Backups planen

Für kontinuierlichen Schutz speichern Sie Ihre Petabox-Synchronisation als Job im Job Manager, statt sie manuell erneut auszuführen. PLUS-Lizenznutzer können einen crontab-artigen Zeitplan anhängen, sodass Backups zu und von Petabox automatisch laufen, wobei die Job History bei jedem Lauf Status, Übertragungsgeschwindigkeit und Dateianzahl protokolliert.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie „New Remote“ und wählen Sie den S3-kompatiblen Speichertyp für Petabox.
3. Geben Sie Ihren Access Key, Secret Key und den Petabox-Endpunkt ein und durchsuchen Sie dann den Bucket.
4. Richten Sie einen Sync- oder Backup-Job ein und hängen Sie bei Bedarf einen Zeitplan im Job Manager an.

Die Objektspeicher-Preisgestaltung von Petabox passt gut zur Fähigkeit von RcloneView, Daten frei zwischen Petabox und jeder anderen Cloud zu verschieben, die Sie bereits verwalten.

---

**Weitere Anleitungen:**

- [Cloudflare R2 verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Amazon-S3-Buckets mit RcloneView als lokale Laufwerke einbinden](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
