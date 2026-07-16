---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "Alibaba Cloud OSS verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Alibaba Cloud OSS mit RcloneView verbinden, Buckets durchsuchen und Synchronisations- und Backup-Jobs für Workloads im asiatisch-pazifischen Raum und in China ausführen."
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - S3-kompatibler Speicher
  - Cloud-Synchronisation
  - Cloud-Backup
  - Objektspeicher
  - Asien-Pazifik-Cloud
  - rclone OSS
tags:
  - alibaba-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Alibaba Cloud OSS verwalten — Dateien synchronisieren und sichern mit RcloneView

> Alibaba Cloud OSS ist eine führende Objektspeicher-Plattform für Workloads im asiatisch-pazifischen Raum — und mit RcloneView können Sie Ihre Buckets ganz einfach durchsuchen, synchronisieren und sichern, ohne die Kommandozeile zu benutzen.

Alibaba Cloud Object Storage Service (OSS) ist die bevorzugte Speicherplattform für Teams mit Anforderungen an die Datenresidenz in China oder im gesamten asiatisch-pazifischen Raum. Ob Sie große Mediendateien archivieren, Anwendungsdaten sichern oder Datensätze zwischen Regionen synchronisieren — RcloneView bietet eine übersichtliche grafische Oberfläche auf Basis der bewährten OSS-Unterstützung von rclone. Eine separate rclone-Installation ist nicht erforderlich — RcloneView wird mit einer integrierten rclone-Binärdatei ausgeliefert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Alibaba Cloud OSS als Remote hinzufügen

Öffnen Sie RcloneView und klicken Sie in der Seitenleiste auf die Schaltfläche **New Remote**. Wählen Sie aus der Anbieterliste **S3 Compatible Storage** und anschließend **Alibaba OSS** als Anbieter aus (alternativ können Sie, falls angezeigt, den dedizierten Typ **Alibaba Cloud Object Storage** wählen). Sie benötigen Ihre **Access Key ID**, Ihr **Access Key Secret** sowie den passenden OSS-Endpunkt für Ihre Region — zum Beispiel `oss-cn-hangzhou.aliyuncs.com` für Ostchina oder `oss-ap-southeast-1.aliyuncs.com` für Singapur.

Sobald die Zugangsdaten eingegeben sind, prüft RcloneView die Verbindung und listet Ihre Buckets sofort auf. Wenn sich Ihr Bucket in einer bestimmten Region befindet, achten Sie darauf, dass der Endpunkt übereinstimmt — eine falsche Zuordnung ist die häufigste Ursache für Verbindungsfehler bei OSS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## Buckets durchsuchen und Dateien übertragen

Nachdem der Remote hinzugefügt wurde, erscheint der Alibaba-OSS-Remote im Zwei-Fenster-Dateiexplorer. Sie können Ordner und Objekte wie in einem lokalen Dateisystem durchsuchen. Ziehen Sie Dateien von Ihrem lokalen Laufwerk per Drag-and-Drop in einen OSS-Bucket, oder verschieben Sie Objekte direkt zwischen OSS-Prefixes. RcloneView zeigt den Übertragungsfortschritt in Echtzeit an, sodass Sie den Status großer Uploads jederzeit im Blick haben.

Für Teams mit mehreren OSS-Buckets in verschiedenen Regionen können Sie jeden Regions-Endpunkt als separaten Remote hinzufügen und alle zusammen in einem RcloneView-Fenster verwalten. So wird die regionsübergreifende Datenbewegung einfach, ohne mehrere Kommandozeilen-Sitzungen jonglieren zu müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## Synchronisations- und Backup-Jobs ausführen

Die eigentliche Stärke von RcloneView für OSS-Workflows liegt im Job-System für Synchronisation. Nutzen Sie den **Job Wizard**, um in vier geführten Schritten einen Synchronisationsjob von einem beliebigen lokalen Ordner oder Cloud-Remote zu Ihrem OSS-Bucket zu erstellen. Mit der Option **Dry Run** können Sie vorab prüfen, welche Dateien übertragen würden, bevor Sie den Job tatsächlich ausführen — unverzichtbar bei der Arbeit mit großen OSS-Buckets.

Mit der **1:N-Synchronisation** von RcloneView können Sie eine Quelle gleichzeitig mit mehreren OSS-Buckets synchronisieren, was nützlich ist, um redundante Kopien über mehrere OSS-Regionen hinweg zu pflegen. Der **Job Manager** verfolgt alle laufenden Jobs, während die **Job History** ein vollständiges Protokoll vergangener Übertragungen für Auditzwecke liefert. Inhaber einer PLUS-Lizenz können diese Jobs auf einem wiederkehrenden Zeitplan planen, sodass Backups automatisch ohne manuellen Eingriff ausgeführt werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klicken Sie auf **New Remote**, wählen Sie **S3 Compatible Storage** und dann **Alibaba OSS** als Anbieter.
3. Geben Sie Ihre **Access Key ID**, Ihr **Access Key Secret** und den regionalen OSS-Endpunkt ein.
4. Durchsuchen Sie Ihre Buckets im Zwei-Fenster-Explorer und ziehen Sie Dateien per Drag-and-Drop zur Übertragung.
5. Öffnen Sie den **Job Manager**, erstellen Sie mit dem Assistenten einen Synchronisationsjob und führen Sie vor der ersten Live-Synchronisation einen Dry Run durch.

Alibaba Cloud OSS fügt sich nahtlos in jeden Datenworkflow im asiatisch-pazifischen Raum ein, und RcloneView beseitigt die Hürde der Kommandozeile, damit Ihr gesamtes Team den Speicher souverän verwalten kann.

---

**Weiterführende Anleitungen:**

- [Amazon S3 verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare R2 verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
