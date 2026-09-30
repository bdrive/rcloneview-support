---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "Yandex Disk zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - morgan
description: "Yandex Disk zu Backblaze B2 migrieren mit RcloneView: beide Remotes verbinden, den Kopiervorgang per Dry Run testen, mit Folder Compare prüfen und ein dauerhaftes Backup behalten."
keywords:
  - Yandex Disk zu Backblaze B2 migrieren
  - yandex disk to b2
  - Yandex Disk Backup
  - Backblaze B2 Migration
  - RcloneView Yandex Disk
  - Cloud-zu-Cloud-Übertragung
  - Dateien von Yandex Disk verschieben
  - rclone yandex backblaze
  - Cloud-Migration GUI
  - Yandex Disk Dateien exportieren
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie alles von Yandex Disk in einen Backblaze-B2-Bucket und bestätigen Sie, dass jede Datei angekommen ist — ohne die Kommandozeile zu berühren.

Wenn Ihre Dateien auf Yandex Disk liegen, Sie aber eine unabhängige, Bucket-basierte Kopie in Backblaze B2 wünschen, führt der übliche Weg über einen manuellen Download und erneuten Upload über den eigenen Rechner. RcloneView verbindet beide Dienste in einem Fenster und führt die Übertragung zwischen ihnen aus, mit einem Dry Run vorab und einem Ordnervergleich danach.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yandex Disk und Backblaze B2 verbinden

Yandex Disk verwendet OAuth: Wählen Sie es unter **New Remote** aus, und RcloneView öffnet Ihren Browser, damit Sie sich anmelden und den Zugriff autorisieren können. Ein API-Schlüssel ist nicht erforderlich. Backblaze B2 verwendet eine Application Key ID und einen Application Key von der Schlüsselverwaltungsseite von Backblaze. Erstellen Sie einen auf den Ziel-Bucket beschränkten Schlüssel, damit die Migrationszugangsdaten nichts anderes erreichen können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Öffnen Sie Yandex Disk in einem Explorer-Panel und den B2-Bucket in einem anderen. RcloneView bindet mehr als 90 Anbieter aus einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux, sodass beide Seiten während der Arbeit sichtbar bleiben.

## Struktur planen und kopieren

Legen Sie fest, wie die Ordner auf den Bucket abgebildet werden. Ein kleines Designstudio mit einem Jahrzehnt an Projektordnern könnte jeden Ordner der obersten Ebene von Yandex Disk als Präfix in einem Bucket abbilden, sodass die Pfade später lesbar bleiben. Erstellen Sie die Zielordner zuerst mit **New Folder**.

Ziehen Sie einen Ordner vom Yandex-Disk-Panel in das B2-Panel; zwischen verschiedenen Remotes kopiert Drag & Drop, sodass die Originale erhalten bleiben. Für eine größere oder wiederholbare Migration verwenden Sie stattdessen den Sync-Assistenten: Legen Sie Yandex Disk als Quelle und den Bucket-Pfad als Ziel fest und benennen Sie den Job mit Buchstaben, Ziffern, Bindestrichen oder Unterstrichen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run und Übertragung überwachen

Führen Sie zuerst **Dry Run** aus. Es listet auf, welche Dateien kopiert und welche gelöscht würden, sodass eine falsche Quelle oder ein falsches Ziel erkannt wird, bevor Schaden entsteht. Das ist besonders wichtig bei der unidirektionalen Synchronisation, die das Ziel an die Quelle angleicht.

Passen Sie unter Advanced Settings die Anzahl gleichzeitiger Dateiübertragungen an und aktivieren Sie den Prüfsummenvergleich, wenn Sie eine Verifizierung per Hash und Größe wünschen. Beginnen Sie vorsichtig und erhöhen Sie die Parallelität, sobald die Übertragung stabil läuft. Verfolgen Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## Mit Folder Compare prüfen

Öffnen Sie nach Abschluss des Jobs im Tab Home **Compare** mit Yandex Disk links und B2 rechts. Filtern Sie nach Dateien, die nur links vorhanden sind oder sich unterscheiden, um Fehlendes zu finden, und füllen Sie Lücken mit Copy right. Job History erfasst Status, Größe, Geschwindigkeit und Dateianzahl jedes Laufs, was als Migrationsprotokoll nützlich ist.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Yandex Disk über OAuth und Backblaze B2 mit einem auf den Bucket beschränkten Application Key hinzu.
3. Führen Sie einen Dry Run aus und starten Sie dann den Kopier- oder Synchronisations-Job.
4. Bestätigen Sie mit Folder Compare, dass der Bucket mit der Quelle übereinstimmt.

Eine geprüfte zweite Kopie im Objektspeicher bedeutet, dass Yandex Disk nicht mehr der einzige Ort ist, an dem Ihre Dateien liegen.

---

**Weiterführende Anleitungen:**

- [HiDrive zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Yandex Disk zu Dropbox migrieren](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run: Synchronisation vor der Übertragung in der Vorschau ansehen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
