---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "SugarSync zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Verschieben Sie Dateien mit RcloneView von SugarSync zu Backblaze B2: beide Remotes verbinden, die Übertragung per Dry Run prüfen und die Ergebnisse mit Folder Compare verifizieren."
keywords:
  - SugarSync zu Backblaze B2 migrieren
  - SugarSync zu B2 Übertragung
  - SugarSync Migration
  - Backblaze B2 Backup
  - Cloud-zu-Cloud-Migration
  - RcloneView SugarSync
  - SugarSync Alternative Speicher
  - rclone SugarSync B2
  - Cloud-Migration GUI
  - Objektspeicher Backup
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie jahrelang gewachsene SugarSync-Ordner in Backblaze-B2-Buckets, ohne sie von Hand herunterzuladen und erneut hochzuladen.

Teams, die SugarSync lange nutzen, möchten ihre Archive oft in einen Objektspeicher verlagern, dessen Buckets und Application Keys sich gut für die Automatisierung eignen. RcloneView verbindet sich in einem Fenster mit beiden Diensten, sodass Sie Ordner direkt von SugarSync nach Backblaze B2 kopieren und das Ergebnis prüfen können, bevor Sie das alte Konto auflösen. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff in der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Öffnen Sie den Tab Remote und klicken Sie auf New Remote. Fügen Sie SugarSync mit Ihren Kontodaten hinzu und anschließend Backblaze B2 mit einer Application Key ID und einem Application Key von der Schlüsselverwaltungsseite von Backblaze. Erstellen Sie zuerst den Ziel-Bucket in Backblaze, damit Sie ein klares Ziel haben.

Platzieren Sie SugarSync in einem Explorer-Bereich und den B2-Bucket in einem anderen. Durchsuchen Sie beide, um den Zugriff zu bestätigen, bevor Sie etwas konfigurieren.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von SugarSync- und Backblaze-B2-Remotes in RcloneView" class="img-large img-center" />

## Kopieren per Drag-and-drop oder Sync-Job

Ziehen Sie einen kleinen Ordner aus dem SugarSync-Bereich in den B2-Bereich. Das Ziehen zwischen verschiedenen Remotes führt eine Kopie aus, sodass das Original erhalten bleibt. Für eine vollständige Migration verwenden Sie den 4-stufigen Synchronisationsassistenten: Quelle und Ziel wählen, Übertragungsanzahl festlegen, Filter hinzufügen und optional mit einer PLUS-Lizenz planen.

Verwenden Sie für den ersten Durchlauf einen Copy-Job statt eines Sync-Jobs, damit nichts am Ziel gelöscht wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von SugarSync zu Backblaze B2 in RcloneView" class="img-large img-center" />

## Vorschau, Überwachung und Überprüfung

Führen Sie zuerst einen Dry Run aus. Er listet die Dateien auf, die kopiert würden, sodass Sie einen falschen Pfad erkennen, bevor Daten bewegt werden. Während der Job läuft, zeigt der Tab Transferring Fortschritt, Geschwindigkeit und Dateianzahl.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung einer Übertragung von SugarSync zu B2 im Tab Transferring" class="img-large img-center" />

Öffnen Sie nach Abschluss Compare, um SugarSync und B2 nebeneinander zu sehen. Dateien, die nur links vorhanden sind, sind noch nicht angekommen, und Sie können sie direkt aus der Vergleichsansicht kopieren. Job History hält jeden Durchlauf fest.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare bestätigt, dass SugarSync- und Backblaze-B2-Inhalte übereinstimmen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie SugarSync und Backblaze B2 als Remotes hinzu und erstellen Sie Ihren Ziel-Bucket.
3. Erstellen Sie einen Copy-Job, führen Sie einen Dry Run aus und starten Sie dann die Übertragung.
4. Überprüfen Sie mit Folder Compare, bevor Sie das SugarSync-Konto schließen.

Eine verifizierte Kopie in B2 erlaubt es Ihnen, den alten Dienst beruhigt abzulösen.

---

**Verwandte Anleitungen:**

- [SugarSync mit RcloneView zu Google Drive und OneDrive migrieren](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [SugarSync-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Backblaze-B2-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
