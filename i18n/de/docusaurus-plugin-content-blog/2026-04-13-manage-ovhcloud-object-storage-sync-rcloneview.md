---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "OVHcloud Object Storage verwalten — Synchronisation und Backup mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie OVHcloud Object Storage mit RcloneView über S3-kompatible Zugangsdaten und synchronisieren Sie Ihre DSGVO-konformen europäischen Buckets mit jedem Cloud-Anbieter."
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
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

# OVHcloud Object Storage verwalten — Synchronisation und Backup mit RcloneView

> OVHcloud Object Storage ist ein DSGVO-konformer, S3-kompatibler Dienst mit Hosting in Europa — RcloneView verbindet ihn mit Ihrem gesamten Cloud-Ökosystem über Access Key, Secret Key und Endpoint.

OVHcloud ist einer der größten Cloud-Anbieter Europas und bietet Object Storage in mehreren Regionen in Frankreich, Deutschland, Großbritannien und darüber hinaus. Die S3-kompatible Schnittstelle bedeutet, dass RcloneView sich genauso mit OVHcloud verbinden kann wie mit AWS S3 — Sie geben Zugangsdaten und einen Endpoint ein und können sofort durchsuchen, übertragen und Backups automatisieren. Für Organisationen mit Anforderungen an die europäische Datenresidenz ist OVHcloud in Kombination mit RcloneView eine praktische und überprüfbare Lösung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihre OVHcloud-S3-Zugangsdaten abrufen

OVHcloud bietet S3-kompatiblen Zugriff über sein **High Performance Object Storage**-Angebot. Um Zugangsdaten zu erhalten, melden Sie sich im OVHcloud Control Panel an, öffnen Sie Ihr Projekt und navigieren Sie zu **Object Storage**. Erstellen Sie unter **S3 users** einen neuen Benutzer und laden Sie den Access Key und den Secret Key herunter. Notieren Sie sich den Endpoint für Ihre Region — zum Beispiel `s3.rbx.io.cloud.ovh.net` für Roubaix oder `s3.gra.io.cloud.ovh.net` für Gravelines.

Halten Sie die Endpoint-URL griffbereit; sie identifiziert die Region, in der sich Ihre Buckets befinden, und muss mit der Eingabe in RcloneView übereinstimmen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## OVHcloud mit RcloneView verbinden

Öffnen Sie RcloneView, gehen Sie zum **Remote Manager** und klicken Sie auf **New Remote**. Wählen Sie **S3 Compatible** aus der Anbieterliste und füllen Sie folgende Felder aus:

- **Access Key ID**: der Schlüssel von der OVHcloud-S3-Users-Seite
- **Secret Access Key**: der zugehörige Secret
- **Endpoint**: Ihr regionaler Endpoint (z. B. `s3.gra.io.cloud.ovh.net`)

Speichern Sie den Remote und öffnen Sie ihn im File Explorer. Ihre OVHcloud-Buckets erscheinen auf der obersten Ebene. Navigieren Sie in einen beliebigen Bucket, um dessen Inhalte nach Präfix organisiert zu sehen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## OVHcloud mit anderen Cloud-Anbietern synchronisieren

Öffnen Sie ein zweites Panel in RcloneView, das auf einen beliebigen anderen Remote zeigt — Google Drive, Backblaze B2, einen weiteren S3-kompatiblen Anbieter oder einen lokalen Ordner. Ziehen Sie Dateien per Drag-and-drop zwischen den Panels, oder klicken Sie mit der rechten Maustaste, um ganze Verzeichnisse zu kopieren. Für große Bucket-Migrationen ist das **Job**-System zuverlässiger: Konfigurieren Sie Quelle und Ziel, legen Sie in Schritt 2 Parallelität und Bandbreitenlimits fest und aktivieren Sie optional eine Prüfsummenverifizierung.

Die S3-API von OVHcloud unterstützt Multipart-Uploads für große Objekte, und RcloneView nutzt dies automatisch, sobald Dateien einen bestimmten Größenschwellenwert überschreiten. Dadurch werden große Videodateien, Datenbank-Dumps oder Archive zuverlässig übertragen, ohne an Größenlimits für einzelne Anfragen zu stoßen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## Regelmäßige Backups planen

Mit einer PLUS-Lizenz können Sie OVHcloud-Synchronisationsjobs so planen, dass sie automatisch ausgeführt werden. Gehen Sie zu **Jobs**, konfigurieren Sie den Job und legen Sie in Schritt 3 einen Cron-Zeitplan fest — zum Beispiel `0 3 * * *`, um jede Nacht um 3 Uhr zu synchronisieren. Dies ist besonders nützlich für Backup-Pipelines, bei denen Produktionsdaten, die anderswo gespeichert sind, eine zweite Kopie in OVHcloud benötigen, um die Anforderungen an die europäische Datenresidenz zu erfüllen.

Die **Job History** protokolliert jede Ausführung: übertragene Dateien, Datenvolumen, Übertragungsgeschwindigkeit und etwaige Fehler. Wenn ein nächtlicher Job fehlschlägt, zeigt der Log-Eintrag genau, welche Dateien Probleme verursacht haben, sodass Sie schnell nachforschen können.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen S3-Benutzer im OVHcloud Control Panel und notieren Sie sich Access Key, Secret Key und regionalen Endpoint.
3. Öffnen Sie den **Remote Manager** in RcloneView, klicken Sie auf **New Remote**, wählen Sie **S3 Compatible** und geben Sie Ihre Zugangsdaten ein.
4. Durchsuchen Sie Ihre Buckets und konfigurieren Sie Synchronisationsjobs, um OVHcloud in Ihre umfassendere Cloud-Strategie zu integrieren.

Die europäische Infrastruktur von OVHcloud und das flexible Job-System von RcloneView bilden eine zuverlässige Kombination für DSGVO-bewusste Multi-Cloud-Workflows.

---

**Verwandte Anleitungen:**

- [Scaleway Object Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IDrive E2 Cloud-Synchronisation und Backup verwalten](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
