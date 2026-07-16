---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Scaleway Object Storage verwalten — Cloud-Synchronisation und Backup mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie Scaleway Object Storage mit RcloneView über S3-kompatible Zugangsdaten und synchronisieren Sie Ihre europäischen Cloud-Buckets schnell mit jedem anderen Anbieter."
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Scaleway Object Storage verwalten — Cloud-Synchronisation und Backup mit RcloneView

> Scaleway Object Storage ist ein S3-kompatibler europäischer Cloud-Dienst — verbinden Sie ihn in wenigen Minuten mit RcloneView über einen Access Key, Secret Key und eine Endpoint-URL.

Scaleway ist ein französischer Cloud-Anbieter, der S3-kompatiblen Object Storage in mehreren europäischen Regionen anbietet. Es ist eine solide Wahl für Teams, die DSGVO-konformen Speicher zu wettbewerbsfähigen Preisen benötigen. RcloneView unterstützt jeden S3-kompatiblen Anbieter, sodass Sie Scaleway verbinden, Ihre Buckets durchsuchen und Synchronisationsjobs zusammen mit all Ihren anderen Cloud-Remotes einrichten können — ohne CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihre Scaleway-Zugangsdaten abrufen

Bevor Sie sich in RcloneView verbinden, benötigen Sie einen **Access Key** und **Secret Key** aus der Scaleway-Konsole. Melden Sie sich bei console.scaleway.com an, navigieren Sie zu **Credentials** unter Ihrem Projekt oder Ihrer Organisation, und generieren Sie einen neuen API-Schlüssel. Notieren Sie sich den Secret Key — er wird nur einmal angezeigt. Notieren Sie sich außerdem den Endpoint für Ihre Region, der dem Format `s3.{region}.scw.cloud` folgt (zum Beispiel `s3.nl-ams.scw.cloud` für Amsterdam oder `s3.fr-par.scw.cloud` für Paris).

Diese drei Werte — Access Key, Secret Key und Endpoint — sind alles, was Sie benötigen, um Scaleway in RcloneView zu konfigurieren.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## Scaleway mit RcloneView verbinden

Öffnen Sie RcloneView und gehen Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und wählen Sie **S3 Compatible** aus der Anbieterliste. Geben Sie im Konfigurationsformular Folgendes ein:

- **Provider**: Other (S3-compatible)
- **Access Key ID**: Ihr Scaleway Access Key
- **Secret Access Key**: Ihr Scaleway Secret Key
- **Endpoint**: Ihr Region-Endpoint (z. B. `s3.nl-ams.scw.cloud`)

Lassen Sie das Regionsfeld leer oder geben Sie den Scaleway-Regionscode ein, falls danach gefragt wird. Speichern Sie den Remote, und er erscheint in Ihrem Remote Manager. Klicken Sie auf **Open**, um Ihre Scaleway-Buckets im File Explorer zu durchsuchen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## Buckets durchsuchen und Dateien übertragen

Der File Explorer zeigt Ihre Scaleway-Buckets auf oberster Ebene an. Navigieren Sie in einen beliebigen Bucket, um dessen Objekte und Ordner-Präfixe zu sehen. Sie können Dateien und Verzeichnisse auswählen und sie dann zu einem anderen Remote kopieren oder verschieben, das im zweiten Panel geöffnet ist — sei es AWS S3, Backblaze B2 oder ein lokales Verzeichnis.

Bei großen Datenmengen klicken Sie mit der rechten Maustaste auf einen Ordner und verwenden **Copy to** oder **Move to**, um eine Massenübertragung zu starten. RcloneView zeigt den Fortschritt in Echtzeit mit Übertragungsgeschwindigkeit und geschätzter Fertigstellungszeit an.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## Geplante Synchronisationsjobs einrichten

Für automatisierte Backups oder regelmäßige Datenpipelines zwischen Scaleway und anderen Anbietern übernimmt das **Job**-System diese Aufgabe zuverlässig. Gehen Sie zu **Jobs**, klicken Sie auf **New Job** und konfigurieren Sie Scaleway als Quelle oder Ziel. In den erweiterten Optionen des Jobs können Sie Bandbreitenlimits festlegen, die Übertragungsparallelität steuern und die Prüfsummenverifizierung aktivieren, um die Datenintegrität zu bestätigen.

Mit einer PLUS-Lizenz können Sie Jobs mit Cron-ähnlicher Syntax planen — zum Beispiel eine Synchronisation von einer anderen Cloud zu Scaleway jede Nacht um 2 Uhr. Die Jobergebnisse werden in der **Job History** aufgezeichnet, was Ihnen einen klaren Überblick über Übertragungsanzahlen und eventuelle Fehler pro Durchlauf gibt.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Besorgen Sie sich Ihren Scaleway Access Key, Secret Key und regionalen Endpoint aus der Scaleway-Konsole.
3. Öffnen Sie **Remote Manager**, klicken Sie auf **New Remote**, wählen Sie **S3 Compatible** und geben Sie Ihre Zugangsdaten ein.
4. Durchsuchen Sie Ihre Buckets und erstellen Sie einen Synchronisationsjob, um Backups zu oder von Scaleway zu automatisieren.

Scaleways europäische Infrastruktur passt gut zum Multi-Cloud-Job-System von RcloneView für DSGVO-bewusste Workflows.

---

**Verwandte Anleitungen:**

- [Google Cloud Storage mit Wasabi über RcloneView synchronisieren](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [IDrive E2 Cloud-Synchronisation und Backup verwalten](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Prüfsummenverifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
