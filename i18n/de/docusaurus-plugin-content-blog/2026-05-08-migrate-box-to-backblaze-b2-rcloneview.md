---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "Box zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView"
authors:
  - steve
description: "Verschieben Sie Ihren Box-Cloud-Speicher mit RcloneView zu Backblaze B2 Object Storage. Eine vollständige Anleitung zum Migrieren von Dateien, Überprüfen von Übertragungen und Automatisieren zukünftiger Backups."
keywords:
  - Box zu Backblaze B2 Migration
  - Box Backblaze B2 RcloneView migrieren
  - Box Backblaze B2 Dateiübertragung
  - Wechsel von Box zu B2 Speicher
  - Cloud-Speicher-Migration Box
  - Box Backup Backblaze B2
  - Box zu S3 Migration
  - rclone Box B2 GUI
tags:
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu Backblaze B2 migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie Ihren gesamten Box-Arbeitsbereich zu Backblaze B2 Object Storage — oder erstellen Sie eine zweite Backup-Kopie — mit dem GUI-gesteuerten Migrationsworkflow von RcloneView.

Box ist eine weit verbreitete Plattform für Unternehmenszusammenarbeit, doch für Archivierungs- und Backup-Zwecke können die Speicherkosten im Vergleich zu spezialisiertem Object Storage wie Backblaze B2 erheblich sein. Teams, die archivierte Daten aus Box auslagern oder eine Backup-Kopie von Box-Inhalten in einer kostengünstigeren Stufe erstellen möchten, können RcloneView nutzen, um direkt zu migrieren — ohne zuvor etwas lokal herunterzuladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Backblaze B2 verbinden

Navigieren Sie für Box zu **Remote-Tab → New Remote**, wählen Sie Box aus und führen Sie die OAuth-Authentifizierung mit Ihrem Box-Konto durch. Box-for-Business-Nutzer sollten in der Remote-Konfiguration zusätzlich `box_sub_type = enterprise` setzen, um vollen Zugriff auf den Arbeitsbereich zu erhalten. Geben Sie für Backblaze B2 während der Remote-Einrichtung Ihre Application Key ID und Ihren Application Key ein.

Sobald beide Remotes konfiguriert sind, platzieren Sie Box im linken Explorer-Bereich und B2 im rechten. Navigieren Sie zu den spezifischen Box-Ordnern, die Sie migrieren möchten, und überprüfen Sie, ob der Ziel-B2-Bucket korrekt benannt und zugänglich ist, bevor Sie eine Übertragung starten.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Den Migrationsjob konfigurieren

Verwenden Sie die Schaltfläche **Sync** im Home-Tab, um den Migrationsjob zu erstellen. Legen Sie den Box-Ordner als Quelle und den B2-Bucket (oder einen Unterordner darin) als Ziel fest. Aktivieren Sie in Schritt 2 die Option **Checksum**, um die Integrität jeder Datei während der Übertragung zu überprüfen. Setzen Sie die Anzahl der Wiederholungsversuche auf 5 oder höher — die API von B2 kann bei großen Massenübertragungen gelegentlich Anfragen drosseln, und automatische Wiederholungen stellen sicher, dass die Migration ohne manuelles Eingreifen abgeschlossen wird.

Führen Sie vor der eigentlichen Migration einen **Dry Run** aus, um die vollständige Liste der zu übertragenden Dateien zu sehen. Dies ist besonders wichtig bei Box-Migrationen, bei denen freigegebene Dateien oder Box Notes (`.boxnote`-Format) möglicherweise nicht wie erwartet übertragen werden — die Dry-Run-Ausgabe hebt alle fehlerhaften Dateien hervor, bevor sie sich auf Ihre Produktionsdaten auswirken.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Umgang mit Box Notes und speziellen Dateitypen

Box Notes sind ein proprietäres Format (`.boxnote`), das außerhalb von Box möglicherweise nicht korrekt dargestellt wird. Exportieren Sie vor der Migration alle Box Notes, die Sie behalten möchten, aus der Box-Weboberfläche in ein Standardformat (wie `.docx` oder `.pdf`). RcloneView migriert die `.boxnote`-Dateien als Binärdaten, aber sie sind in B2 oder einem anderen Nicht-Box-Client nicht bearbeitbar.

Überprüfen Sie bei freigegebenen Ordnern und Inhalten externer Mitarbeiter, ob Ihr Box-Konto Zugriff auf alle Inhalte hat, die Sie migrieren möchten. Der **Log-Tab** in RcloneView zeigt Berechtigungsfehler für alle Dateien an, auf die Ihr Konto keinen Zugriff hat.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Box (OAuth) und Backblaze B2 (Application Key) als Remotes hinzufügen.
3. Einen Dry Run ausführen, um die Migration vorab zu prüfen.
4. Die eigentliche Migration mit aktivierter Checksum-Überprüfung ausführen.

Die Migration von Box zu Backblaze B2 mit RcloneView ist ein sauberer, überprüfbarer Prozess, der Ihnen kosteneffizienten, langlebigen Speicher für Ihre archivierten Inhalte bietet.

---

**Verwandte Anleitungen:**

- [Box zu AWS S3 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Backblaze B2 Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Box zu S3 Glacier Archiv mit RcloneView](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
