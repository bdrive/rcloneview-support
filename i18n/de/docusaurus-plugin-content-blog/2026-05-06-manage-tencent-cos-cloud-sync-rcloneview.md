---
slug: manage-tencent-cos-cloud-sync-rcloneview
title: "Tencent-COS-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie Tencent Cloud Object Storage (COS) mit RcloneView und verwalten Sie Dateien über eine grafische Oberfläche. Synchronisieren, sichern und übertragen Sie Tencent-COS-Daten über eine S3-kompatible Schnittstelle."
keywords:
  - Tencent COS Verwaltung
  - RcloneView Tencent COS Synchronisation
  - Tencent Cloud Object Storage Backup
  - Tencent COS Datei-Übertragung GUI
  - Tencent COS rclone
  - Tencent COS mit RcloneView verwalten
  - Tencent Cloud-Speicher GUI
  - S3-kompatible Speicherverwaltung
  - Tencent COS Backup-Tool
  - China Cloud-Speicherverwaltung
tags:
  - RcloneView
  - tencent-cos
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Tencent-COS-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView verbindet sich über S3-kompatible Anmeldedaten mit Tencent Cloud Object Storage und ermöglicht das Durchsuchen, Synchronisieren und Sichern von COS-Buckets über eine visuelle Desktop-GUI.

Tencent Cloud Object Storage (COS) ist eine der größten Object-Storage-Plattformen Chinas und wird von Unternehmen genutzt, die Anwendungen auf der Tencent-Cloud-Infrastruktur betreiben. Engineering-Teams, Medienunternehmen und Betreiber von Datenpipelines, die COS-Buckets neben anderen globalen Clouds verwalten müssen, profitieren von der einheitlichen Oberfläche von RcloneView — kein Wechsel zwischen Dashboards oder Erlernen plattformspezifischer CLIs mehr nötig.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tencent COS mit RcloneView verbinden

Tencent COS unterstützt die S3-kompatible API, daher erfolgt die Verbindung mit RcloneView über den Amazon-S3-Providertyp mit COS-spezifischen Einstellungen. Gehen Sie in RcloneView zum Reiter Remote > New Remote, wählen Sie Amazon S3 und geben Sie Folgendes ein:

- **Access Key ID** und **Secret Access Key** aus Ihrer Tencent-Cloud-Konsole (CAM-Anmeldedaten)
- **Region**, passend zur Region Ihres COS-Buckets (z. B. `ap-guangzhou`)
- **Endpoint**, gesetzt auf Ihren COS-Endpunkt (z. B. `cos.ap-guangzhou.myqcloud.com`)
- **Provider**, im S3-Provider-Dropdown auf Tencent COS gesetzt

Nach dem Speichern erscheinen Ihre COS-Buckets im Datei-Explorer. Sie können Dateien durchsuchen, hochladen, herunterladen, umbenennen, löschen und organisieren — genau wie bei jedem anderen S3-kompatiblen Remote.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Daten zwischen Tencent COS und globalen Clouds synchronisieren

Ein leistungsstarker Anwendungsfall ist die Synchronisation von Daten zwischen Tencent COS (zur Bereitstellung von Inhalten in China) und einem globalen Anbieter wie Amazon S3 oder Cloudflare R2 (für die internationale Auslieferung). Die Cloud-zu-Cloud-Synchronisations-Engine von RcloneView verschiebt Daten direkt, ohne sie auf Ihren lokalen Rechner herunterzuladen, wodurch diese regionsübergreifende Spiegelung selbst bei großen Datensätzen praktikabel bleibt.

Konfigurieren Sie in RcloneView einen Synchronisationsjob mit COS als Quelle und S3 als Ziel. Aktivieren Sie die Prüfsummenverifizierung, um die Datenintegrität während der Übertragung sicherzustellen — unerlässlich bei der Replikation von Produktionsdaten zwischen Regionen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Tencent COS buckets to another cloud provider in RcloneView" class="img-large img-center" />

## COS-Backup-Jobs automatisieren (PLUS)

Mit einer PLUS-Lizenz können Sie wiederkehrende Tencent-COS-Synchronisationsjobs für beliebige Cron-Intervalle planen. Ein Medienunternehmen, das Videos auf Tencent Cloud kodiert, könnte beispielsweise einen nächtlichen Job planen, um verarbeitete Dateien von COS zu Backblaze B2 oder Wasabi zu archivieren — für kosteneffiziente Langzeitspeicherung. Der Filter **Max file age** ermöglicht es, gezielt nur kürzlich geänderte Objekte zu erfassen, wodurch die Jobdauer überschaubar bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Tencent COS backup jobs in RcloneView" class="img-large img-center" />

## COS-Übertragungen überwachen und auditieren

Der Transfer-Reiter von RcloneView zeigt den Live-Fortschritt der COS-Synchronisation mit Geschwindigkeit und Prozentanzeige pro Datei. Nach jedem Job erfasst die Job History vollständige Übertragungsstatistiken — übertragene Bytes, Dauer, Dateianzahl und Fehlerdetails — und liefert damit den Prüfpfad, den Cloud-Operations-Teams für die Kostenzuordnung und das Compliance-Reporting benötigen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Tencent COS sync operations in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zum Reiter Remote > New Remote, wählen Sie Amazon S3 und wählen Sie Tencent COS als S3-Provider.
3. Geben Sie Ihren CAM Access Key, Secret Key, Ihre Region und die COS-Endpunkt-URL ein.
4. Durchsuchen Sie Ihre COS-Buckets und konfigurieren Sie Synchronisations- oder Backup-Jobs zu anderen Anbietern.

Die Verwaltung von Tencent COS neben globalen Cloud-Anbietern wird nahtlos, wenn RcloneView all Ihren Speicher unter einer Oberfläche vereint.

---

**Weiterführende Anleitungen:**

- [Amazon-S3-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare-R2-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [S3-, Wasabi- und R2-Buckets mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
