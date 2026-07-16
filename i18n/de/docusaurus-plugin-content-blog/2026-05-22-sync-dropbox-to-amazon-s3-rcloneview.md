---
slug: sync-dropbox-to-amazon-s3-rcloneview
title: "Dropbox mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Dropbox-Dateien mit RcloneView zu Amazon S3 synchronisieren und sichern. Richten Sie Cloud-zu-Cloud-Übertragungen mit Zeitplanung, Dry-Run-Vorschau und Übertragungsverlauf ein."
keywords:
  - Dropbox to Amazon S3
  - Dropbox S3 backup
  - sync Dropbox to S3
  - RcloneView cloud-to-cloud
  - Dropbox backup to object storage
  - Amazon S3 backup
  - cloud migration rclone GUI
  - automate Dropbox backup
  - Dropbox S3 sync
  - cloud-to-cloud file transfer
tags:
  - dropbox
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView

> Spiegeln Sie Ihre Dropbox-Dateien auf Amazon S3 für dauerhaften, unabhängig verwalteten Objektspeicher — mit der visuellen Cloud-zu-Cloud-Synchronisation von RcloneView, ganz ohne CLI.

Viele Teams setzen für die tägliche Zusammenarbeit auf Dropbox, möchten aber ein zusätzliches Backup in Amazon S3 für die Langzeitaufbewahrung, Compliance-Archivierung oder eine geringere Anbieterabhängigkeit. RcloneView macht es einfach, Dateien direkt von Dropbox in einen S3-Bucket zu synchronisieren, ohne die Daten über den lokalen Rechner zu leiten oder rclone-Befehle von Hand zu schreiben. Eine Videoproduktionsfirma mit 500 GB an Projektdateien kann in wenigen Minuten einen nächtlichen Dropbox-zu-S3-Backup-Job einrichten und erhält dabei eine vollständige Prüfspur jedes Laufs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und Amazon S3 als Remotes verbinden

Fügen Sie zunächst beide Anbieter in RcloneView hinzu. Gehen Sie zu **Remote tab > New Remote** und wählen Sie **Dropbox** — RcloneView öffnet ein Browserfenster für die OAuth-Authentifizierung. Erteilen Sie den Zugriff, und Ihr Dropbox-Konto erscheint sofort im Explorer-Panel, ohne dass ein API-Schlüssel oder eine manuelle Token-Konfiguration erforderlich ist.

Für Amazon S3 fügen Sie ein zweites Remote hinzu, wählen **Amazon S3** und geben Ihre **Access Key ID**, Ihren **Secret Access Key** und den Ziel-**Regioncode** ein (zum Beispiel `us-east-1`). Beide Remotes erscheinen dann als Tabs im Explorer, sodass Sie beide Seiten durchsuchen und die Ordnerstruktur prüfen können, bevor Sie einen Job erstellen. Ein Rechtsklick auf einen Dropbox-Ordner zeigt dessen Größe an, bevor Sie sich zur Synchronisation entschließen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Den Cloud-zu-Cloud-Sync-Job konfigurieren

Sobald beide Remotes bereit sind, öffnen Sie **Home tab > Sync**, um den 4-Schritte-Sync-Assistenten zu starten:

1. **Configure Storage** — Wählen Sie Ihren Dropbox-Quellordner (zum Beispiel `/Project Files`) und den Amazon-S3-Zielbucket mit einem Schlüsselpräfix (zum Beispiel `my-backup-bucket/dropbox-mirror`). Benennen Sie den Job eindeutig für das Verlaufsprotokoll.
2. **Advanced Settings** — Legen Sie die Anzahl gleichzeitiger Übertragungen fest, um Geschwindigkeit und API-Ratenlimits auszubalancieren, und aktivieren Sie die Prüfsummenverifizierung, wenn Sie eine byte-genaue Datenintegritätsprüfung in S3 benötigen.
3. **Filtering** — Schließen Sie `.dropbox`-Systemmetadatendateien, Cache-Verzeichnisse oder beliebige Dateitypen aus, die Sie in S3 nicht benötigen. Die vordefinierten Filterkategorien (Image, Video, Document) bieten schnelle Abkürzungen für gängige Filterszenarien.
4. **Schedule (PLUS license)** — Konfigurieren Sie einen Zeitplan im Crontab-Stil für automatische nächtliche Läufe. Die Zeitplan-Oberfläche lässt Sie die nächsten Ausführungszeiten simulieren, um die Zeitplanung vor dem Speichern zu überprüfen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Dropbox to Amazon S3 cloud-to-cloud sync job in RcloneView" class="img-large img-center" />

## Vor der ersten Live-Synchronisation einen Dry Run durchführen

Bevor Sie sich auf die erste Live-Übertragung festlegen — besonders wenn Ihr S3-Bucket bereits Daten enthält — nutzen Sie die **Dry Run**-Funktion. Dry Run simuliert die Synchronisation und zeigt genau, welche Dateien kopiert und welche (falls überhaupt) vom Ziel gelöscht würden, ohne dass tatsächliche Änderungen vorgenommen werden. Diese Vorschau erkennt falsch konfigurierte Quellpfade oder unerwartete Löschungen, bevor sie Ihren S3-Bucket erreichen.

Sobald Sie mit der Dry-Run-Ausgabe zufrieden sind, klicken Sie im Job-Manager auf **Run**, um die eigentliche Synchronisation zu starten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to Amazon S3 sync job in RcloneView Job Manager" class="img-large img-center" />

## Übertragungen überwachen und den Job-Verlauf einsehen

Während der Job läuft, zeigt der **Transferring**-Tab am unteren Rand von RcloneView den Live-Fortschritt: Dateiname, Übertragungsgeschwindigkeit und die insgesamt übertragene Datenmenge. Die Dateien wandern direkt zwischen Dropbox und S3, ohne über Ihre lokale Workstation zu laufen, sodass die Geschwindigkeit die Cloud-seitige Bandbreite widerspiegelt und nicht Ihre lokale Verbindung.

Nach jeder abgeschlossenen Synchronisation zeichnet der **Job History**-Tab Startzeit, Dauer, Status (Completed / Errored / Canceled) und die insgesamt übertragene Datenmenge auf. Für Compliance-sensible Workflows liefert dieses Protokoll die Dokumentation, die nötig ist, um zu bestätigen, dass geplante Backups pünktlich und fehlerfrei liefen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Dropbox to Amazon S3 backup runs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Dropbox hinzufügen über **Remote tab > New Remote > Dropbox** und über den Browser-OAuth-Flow authentifizieren.
3. Amazon S3 hinzufügen über **Remote tab > New Remote > Amazon S3** mit Ihrer Access Key ID, Ihrem Secret Access Key und der Region.
4. **Home tab > Sync** öffnen, Dropbox als Quelle und S3 als Ziel wählen, eine Dry-Run-Vorschau ausführen, dann speichern und für automatisierte nächtliche Backups planen.

Ihre Dropbox-Dateien erhalten so ein dauerhaftes, unabhängig verwaltetes Backup auf Amazon S3 — nach Ihrem konfigurierten Zeitplan und mit einem vollständigen Verlauf jeder Übertragung.

---

**Weiterführende Anleitungen:**

- [OneDrive mit RcloneView zu Amazon S3 migrieren](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Amazon S3 verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Inkrementelles Backup von Google Drive zu Amazon S3 mit RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)

<CloudSupportGrid />
