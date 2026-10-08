---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "HiDrive zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Verschieben Sie Dateien von HiDrive zu Wasabi Object Storage mit RcloneView: beide Remotes verbinden, Dry Run, Übertragung ausführen und mit Folder Compare prüfen."
keywords:
  - HiDrive zu Wasabi migrieren
  - HiDrive zu Wasabi Übertragung
  - HiDrive Wasabi Synchronisation
  - RcloneView HiDrive
  - Wasabi S3 Migration
  - Cloud-zu-Cloud-Übertragung
  - HiDrive Backup zu S3
  - rclone HiDrive Wasabi
  - HiDrive Migrationstool
  - Wasabi GUI
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Ein HiDrive-Archiv mit einem visuellen Workflow in Wasabi Object Storage verschieben: verbinden, Vorschau, übertragen, prüfen.

HiDrive eignet sich gut als persönlicher oder Team-Dateispeicher, doch Langzeitarchive gehören oft in S3-artigen Object Storage mit berechenbarem API-Zugriff. RcloneView verbindet beide Dienste in einem Fenster, sodass Sie Ordner von Cloud zu Cloud kopieren können, ohne zuvor alles auf Ihre eigene Festplatte herunterzuladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive und Wasabi als Remotes verbinden

HiDrive verwendet OAuth: RcloneView öffnet Ihren Browser, Sie melden sich an, und der Remote verbindet sich ohne separaten API-Schlüssel. Wasabi ist S3-kompatibel, daher geben Sie Access Key, Secret Key und den Endpunkt für die Region Ihres Buckets ein.

Fügen Sie beide im Tab Remote über New Remote hinzu. Öffnen Sie anschließend jeden in einem Explorer-Panel, einen links und einen rechts, und prüfen Sie, ob Sie die HiDrive-Ordner und den Ziel-Wasabi-Bucket durchsuchen können.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von HiDrive- und Wasabi-Remotes in RcloneView" class="img-large img-center" />

## Übertragung mit einem Dry Run planen

Stellen Sie sich ein Designstudio vor, das 800 GB fertige Projektordner aus HiDrive verschiebt. Legen Sie die Übertragung als Job an, bevor Sie etwas anfassen. Wählen Sie HiDrive als Quelle und einen Wasabi-Bucket-Pfad als Ziel und verwenden Sie dann den Modus One-way "Modifying destination only".

Führen Sie zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert oder gelöscht würden, ohne Änderungen vorzunehmen – ein zuverlässiger Weg, einen falschen Zielordner zu erkennen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von HiDrive zu Wasabi in RcloneView" class="img-large img-center" />

## Einstellungen anpassen und Job ausführen

Legen Sie in Step 2 des Assistenten die Anzahl der Dateiübertragungen fest und aktivieren Sie den Prüfsummenvergleich, wenn Sie eine Verifizierung per Hash und Größe wünschen. Belassen Sie die Wiederholungen beim Standardwert 3, damit ein kurzer Netzwerkausfall nicht den gesamten Lauf abbricht. Mit den Filtern in Step 3 überspringen Sie z. B. temporäre Dateien oder einen `.git/`-Ordner.

Wenn die Vorschau passt, führen Sie den Job aus und beobachten Sie Geschwindigkeit, Fortschritt und Dateianzahl im Tab Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Übertragung von HiDrive zu Wasabi im Tab Transferring" class="img-large img-center" />

## Mit Folder Compare prüfen

Öffnen Sie nach Abschluss des Jobs Compare mit HiDrive auf der einen und Wasabi auf der anderen Seite. Filtern Sie nach Dateien, die nur links vorhanden sind, um zu sehen, was nicht angekommen ist, und kopieren Sie nur die fehlenden Elemente. Job History speichert Status, Dauer, Größe und Dateianzahl für Ihr Migrationsprotokoll.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare bestätigt, dass HiDrive- und Wasabi-Inhalte übereinstimmen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie HiDrive (Browser-Login) und Wasabi (Access Key, Secret Key, Endpunkt) als Remotes hinzu.
3. Erstellen Sie einen One-way-Job von HiDrive zu Ihrem Wasabi-Bucket und führen Sie einen Dry Run aus.
4. Führen Sie die Übertragung aus und prüfen Sie anschließend mit Folder Compare.

Eine geprüfte und verifizierte Migration lässt Ihre HiDrive-Dateien unangetastet, bis Sie sicher sind, dass alles in Wasabi angekommen ist.

---

**Verwandte Anleitungen:**

- [HiDrive mit RcloneView in Amazon S3 synchronisieren](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [HiDrive mit RcloneView zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Wasabi-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
