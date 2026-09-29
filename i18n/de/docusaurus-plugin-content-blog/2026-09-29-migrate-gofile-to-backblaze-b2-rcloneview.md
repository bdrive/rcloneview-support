---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "Gofile zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Gofile mit RcloneView zu Backblaze B2 migrieren: beide Remotes verbinden, Kopie per Dry Run testen, mit Folder Compare prüfen und ein dauerhaftes Backup behalten."
keywords:
  - gofile zu backblaze b2 migrieren
  - gofile zu b2
  - gofile Backup
  - backblaze b2 Migration
  - RcloneView gofile
  - Cloud-zu-Cloud-Übertragung
  - gofile Dateiübertragung Tool
  - Dateien von gofile verschieben
  - rclone gofile backblaze
  - Cloud-Migration GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie über Gofile geteilte Dateien in den Backblaze-B2-Objektspeicher und prüfen Sie, dass jede Datei angekommen ist, ohne einen einzigen Befehl zu schreiben.

Gofile eignet sich gut, um Dateien an andere weiterzugeben, ist aber ein schlechter Ort für die einzige Kopie wichtiger Daten. Backblaze B2 ist ein Objektspeicher für die langfristige Aufbewahrung, bei dem Sie auf Bucket-Ebene steuern, was Sie behalten. RcloneView verbindet beide Dienste in einem Fenster und kopiert über eine einzige Oberfläche, sodass Sie nicht jede Datei von Hand herunterladen und wieder hochladen müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gofile und Backblaze B2 verbinden

Gofile authentifiziert sich mit einem Access Token. Kopieren Sie ihn aus dem API-Token-Feld auf Ihrer Gofile-Profilseite, wählen Sie dann in **New Remote** Gofile und fügen Sie ihn ein. Backblaze B2 benötigt eine Application Key ID und einen Application Key, die Sie auf der Schlüsselverwaltungsseite von Backblaze erzeugen. Erstellen Sie einen auf den Ziel-Bucket beschränkten Schlüssel statt eines Master-Schlüssels, damit die Migrationszugangsdaten nur auf das Nötige zugreifen können.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen von Gofile- und Backblaze-B2-Remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes existieren, öffnen Sie Gofile in einem Explorer-Panel und Ihren B2-Bucket in einem anderen. RcloneView zeigt bis zu vier Panels gleichzeitig an, sodass Sie zusätzlich einen lokalen Ordner für Stichproben offen halten können. Die Verbindung zu S3, Azure oder Backblaze B2 ist mit der FREE-Lizenz vollständig lesend und schreibend möglich.

## Layout vor dem Kopieren planen

Legen Sie fest, wie die Gofile-Inhalte auf den Bucket abgebildet werden. Ein Fotostudio mit Kundenlieferungen in einem Dutzend Gofile-Ordnern könnte beispielsweise einen B2-Bucket anlegen und jeden Ordner als Präfix der obersten Ebene spiegeln, damit die Pfade später lesbar bleiben. Legen Sie die Zielordner zuerst mit **New Folder** im B2-Panel an.

Ziehen Sie Ordner aus dem Gofile-Panel in das B2-Panel. Zwischen verschiedenen Remotes führt Drag-and-drop eine Kopie aus, Ihre Gofile-Originale bleiben also unangetastet, bis Sie etwas anderes entscheiden. Für eine wiederholbare, größere Migration verwenden Sie stattdessen den Sync-Assistenten: Wählen Sie Gofile als Quelle, den Bucket-Pfad als Ziel und vergeben Sie dem Job einen Namen aus Buchstaben, Ziffern, Bindestrichen oder Unterstrichen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Gofile zu Backblaze B2 in RcloneView" class="img-large img-center" />

## Dry Run, Übertragung und Überwachung

Nutzen Sie vor dem eigentlichen Lauf **Dry Run**. Er listet die Dateien auf, die kopiert würden, und solche, die gelöscht würden, sodass eine falsche Quelle oder ein falsches Ziel erkannt wird, bevor es Sie etwas kostet. Wählen Sie eine unidirektionale Synchronisation, denken Sie daran, dass sie das Ziel an die Quelle angleicht; ein Dry Run ist die eine Minute wert.

In den Advanced Settings können Sie die Anzahl paralleler Dateiübertragungen einstellen und den Prüfsummenvergleich aktivieren. Beginnen Sie beim ersten Lauf vorsichtig und erhöhen Sie die Parallelität, wenn die Übertragung stabil ist. Fortschritt, Geschwindigkeit und Dateianzahl beobachten Sie im Tab **Transferring** am unteren Fensterrand.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Überwachung des Übertragungsfortschritts im Tab Transferring" class="img-large img-center" />

## Mit Folder Compare prüfen

Öffnen Sie nach Abschluss der Übertragung **Compare** im Tab Home, mit Gofile links und B2 rechts. Filtern Sie auf Left-only-Dateien, um alles zu sehen, was nicht angekommen ist, und auf abweichende Dateien, um Größenunterschiede zu erkennen. Copy right füllt die Lücken, ohne bereits übereinstimmende Dateien erneut zu senden. Job History protokolliert jeden Lauf mit Status, Größe und Dauer und liefert so einen Nachweis der Migration.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt Unterschiede zwischen Gofile und B2" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Gofile-Remote mit dem Access Token und Ihr Backblaze-B2-Remote mit einem auf den Bucket beschränkten Application Key hinzu.
3. Öffnen Sie beide Remotes nebeneinander, führen Sie einen **Dry Run** aus und kopieren oder synchronisieren Sie dann die Ordner.
4. Bestätigen Sie mit **Compare**, dass nichts fehlt, bevor Sie die Gofile-Seite aufräumen.

Eine geprüfte Kopie in B2 macht aus temporären Freigabelinks ein Backup, das Sie selbst kontrollieren.

---

**Verwandte Anleitungen:**

- [Gofile zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [Gofile-Speicher verwalten](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [IDrive e2 zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
