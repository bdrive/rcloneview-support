---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Google Drive zu Wasabi migrieren — Dateien mit RcloneView übertragen"
authors:
  - alex
description: "Migrieren Sie Google Drive mit RcloneView zu Wasabi. Dateien von Cloud zu Cloud kopieren, mit Dry Run und Folder Compare prüfen und ein S3-kompatibles Archiv behalten."
keywords:
  - Google Drive zu Wasabi migrieren
  - google drive to wasabi
  - Google Drive Wasabi Übertragung
  - Google Drive Archiv S3
  - Wasabi Migration GUI
  - Cloud-zu-Cloud-Übertragung
  - rcloneview google drive wasabi
  - Google Drive in Objektspeicher verschieben
  - Google Drive Backup Wasabi
  - Wasabi Bucket Synchronisation
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive zu Wasabi migrieren — Dateien mit RcloneView übertragen

> Verschieben oder archivieren Sie ein Google Drive in einen Wasabi-Bucket, ohne zuvor etwas auf den eigenen Datenträger herunterzuladen.

Ein Designstudio mit 2 TB fertiger Projekte möchte diese eventuell aus Google Drive in einen S3-kompatiblen Objektspeicher verlagern. RcloneView überträgt direkt von Drive zu Wasabi – vorab mit einem Dry Run, danach mit einem Folder Compare, damit Sie bestätigen können, dass nichts fehlt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Google Drive nutzt OAuth: Wählen Sie es unter **New Remote** aus und melden Sie sich im Browser an. Wasabi ist ein S3-kompatibler Anbieter, daher geben Sie einen Access Key, einen Secret Key und den Endpunkt Ihrer Wasabi-Region ein. Erstellen Sie den Bucket zuerst in der Wasabi-Konsole, damit Sie ein Ziel haben.

<img src="/support/images/en/blog/new-remote.png" alt="Google Drive- und Wasabi-Remotes in RcloneView hinzufügen" class="img-large img-center" />

S3, Azure oder Backblaze B2 lassen sich mit der FREE-Lizenz vollständig lesend und schreibend verbinden – Wasabi und andere S3-kompatible Dienste funktionieren genauso.

## Die Übertragung mit einem Dry Run planen

Öffnen Sie Google Drive in einem Explorer-Panel und Ihren Wasabi-Bucket im anderen. Für eine einmalige Verschiebung ziehen Sie Ordner zwischen den Panels; zwischen verschiedenen Remotes wird kopiert. Für eine große Bibliothek erstellen Sie stattdessen einen Job. In Step 1 legen Sie Quelle und Ziel fest, in Step 2 stellen Sie die gleichzeitigen Übertragungen ein, und in Step 3 können Sie nach Dateigröße, Alter oder Typ filtern. Führen Sie **Dry Run** aus, um alle Dateien, die kopiert werden, vorab anzuzeigen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Google Drive zu Wasabi" class="img-large img-center" />

Wählen Sie während der Migration den Job-Typ **Copy** statt Sync. Copy löscht nichts am Ziel – die sicherere Wahl, bis Sie das Ergebnis geprüft haben.

## Die Übertragung beobachten

Starten Sie den Job und verfolgen Sie den Fortschritt im Tab Transferring am unteren Fensterrand: Prozent, Geschwindigkeit und Dateianzahl. Wenn Rate-Limits von Google Drive die Übertragung bremsen, verringern Sie in den erweiterten Einstellungen des Jobs die Anzahl gleichzeitiger Dateiübertragungen und starten Sie erneut; bereits kopierte Dateien werden übersprungen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Übertragung zu Wasabi in RcloneView überwachen" class="img-large img-center" />

## Vor dem Aufräumen prüfen

Verwenden Sie **Compare**, um beide Speicherorte nebeneinander anzuzeigen. Filter zeigen Dateien, die nur links, nur rechts, identisch oder unterschiedlich sind, sodass jede Lücke sofort auffällt. Erst wenn der Vergleich sauber ist, sollten Sie erwägen, Daten aus Google Drive zu entfernen. Der Job History protokolliert jeden Lauf.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Migration von Google Drive zu Wasabi mit Folder Compare prüfen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Google Drive (OAuth) und Wasabi (Access Key, Secret Key, Endpunkt) als Remotes hinzu.
3. Erstellen Sie einen Copy-Job von Drive zu Ihrem Bucket und führen Sie einen Dry Run aus.
4. Starten Sie den Job und bestätigen Sie das Ergebnis anschließend mit Compare.

Eine geprüfte Kopie in einem Bucket, den Sie kontrollieren, macht den Rest der Aufräumarbeiten risikoarm.

---

**Weiterführende Anleitungen:**

- [Wasabi-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [OneDrive zu Wasabi migrieren](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Dropbox zu Wasabi migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
