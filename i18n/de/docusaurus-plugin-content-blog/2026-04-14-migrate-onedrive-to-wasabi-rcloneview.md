---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "OneDrive zu Wasabi migrieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Dateien von Microsoft OneDrive zu Wasabi Hot Cloud-Speicher mit RcloneView verschieben. Eine Schritt-für-Schritt-Anleitung zur OneDrive-zu-Wasabi-Migration ohne CLI-Befehle."
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Wasabi migrieren — Cloud-Backup mit RcloneView

> Nutzen Sie RcloneView, um Dateien von Microsoft OneDrive zum S3-kompatiblen Hot Cloud-Speicher von Wasabi zu übertragen — direkt von Cloud zu Cloud, ohne zwischenzeitliche Downloads.

Organisationen starten häufig mit dem in Microsoft 365 gebündelten OneDrive und stellen dann fest, dass sie mit wachsendem Datenvolumen eine dedizierte, kosteneffiziente Backup-Ebene benötigen. Der S3-kompatible Hot Cloud-Speicher von Wasabi ist ein beliebtes Ziel: vorhersehbare Pauschalpreise ohne Egress-Gebühren. RcloneView verbindet beide Dienste über die Backends von rclone und ermöglicht es Ihnen, OneDrive-Inhalte über eine visuelle Oberfläche zu Wasabi-Buckets zu migrieren — ganz ohne Skripting.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive und Wasabi verbinden

Fügen Sie zunächst OneDrive hinzu: **Remote-Tab → Neuer Remote → Microsoft OneDrive**, authentifizieren Sie sich über den OAuth-Browser-Login und bestätigen Sie, dass der Remote gespeichert wurde. Bei privatem OneDrive erfolgt dieser Vorgang sofort. Bei OneDrive for Business müssen Sie während der Authentifizierung möglicherweise den richtigen Mandanten auswählen.

Fügen Sie anschließend Wasabi hinzu: **Neuer Remote → Amazon S3 Compatible → Wasabi**. Geben Sie Ihren Wasabi Access Key und Secret Key ein und wählen Sie den passenden Endpunkt für die Region Ihres Buckets (z. B. `s3.us-east-1.wasabisys.com`). Die S3-API von Wasabi ist ohne besondere Konfiguration mit dem S3-Backend von rclone kompatibel.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Umfang der Migration planen

Öffnen Sie den Explorer in einer Zweispalten-Ansicht — OneDrive links, Wasabi rechts. Durchsuchen Sie den OneDrive-Baum, um die Ordner zu identifizieren, die Sie migrieren möchten. Eine Rechtsabteilung verschiebt vielleicht ein Archiv `Contracts/2020-2024/`, eine Designagentur migriert eventuell einen Ordner `Client-Assets/` mit 500 GB an geschichteten Dateien.

Verwenden Sie die Option **Get Size** per Rechtsklick auf den Quellordner in RcloneView, um das gesamte Datenvolumen vor der Übertragung zu berechnen. Bei großen Migrationen sollten Sie den Job über Nacht laufen lassen, wenn die Bandbreite mit anderen Nutzern oder Diensten geteilt wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## Den Sync-Job mit Verifizierung ausführen

Erstellen Sie einen Sync-Job im Job Manager: Quelle ist Ihr OneDrive-Pfad, Ziel ist Ihr Wasabi-Bucket-Pfad. Aktivieren Sie in Schritt 2 die **Checksum-Verifizierung**, um den Hash jeder Datei nach der Übertragung zu validieren — unerlässlich für compliance-sensitive Archive. Setzen Sie die gleichzeitigen Übertragungen auf 6–8, um Geschwindigkeit und API-Stabilität auszubalancieren.

Führen Sie zunächst den Dry Run aus, um die Liste der geplanten Operationen zu prüfen. OneDrive-Elemente mit Sonderzeichen in Dateinamen (häufig bei nutzergenerierten Inhalten) werden für Encoding-Anpassungen markiert. Überprüfen Sie den Log-Tab nach dem Dry Run, um eventuelle Probleme vor der eigentlichen Übertragung zu erkennen.

Nutzen Sie nach der Migration die Funktion **Folder Compare** von RcloneView, um die OneDrive-Quelle visuell mit dem Wasabi-Ziel zu vergleichen — so bestätigen Sie, dass Dateianzahl und -größen übereinstimmen, bevor Sie die OneDrive-Kopie außer Betrieb nehmen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie OneDrive per OAuth-Login und Wasabi per S3-Zugangsdaten im New-Remote-Assistenten hinzu.
3. Nutzen Sie Folder Compare, um den Migrationsumfang zu bewerten, und erstellen Sie dann einen Sync-Job im Job Manager.
4. Aktivieren Sie die Checksum-Verifizierung, führen Sie einen Dry Run aus und starten Sie anschließend die vollständige Migration.

Der Wechsel von OneDrive zu Wasabi mit RcloneView bietet Ihnen einen verifizierten, nachvollziehbaren Migrationspfad — mit automatisch gespeichertem Job-Verlauf und Übertragungsprotokollen.

---

**Verwandte Anleitungen:**

- [OneDrive zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [OneDrive zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [OneDrive Cloud-Synchronisation und Backup verwalten mit RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
