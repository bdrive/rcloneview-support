---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "Storj-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie den dezentralen Cloud-Speicher Storj mit RcloneView verwalten. Synchronisieren, sichern und übertragen Sie Dateien auf Storj über eine einfache GUI — keine CLI erforderlich."
keywords:
  - Storj Cloud-Speicher verwalten
  - RcloneView Storj Synchronisation
  - Storj Backup Dateien
  - dezentrale Cloud-Speicher GUI
  - Storj Dateiübertragung
  - Storj rclone GUI
  - Storj Sync Backup Tool
  - Storj mit RcloneView verwalten
  - Storj Desktop-Client
  - Storj S3-kompatible GUI
tags:
  - RcloneView
  - storj
  - cloud-storage
  - cloud-sync
  - backup
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Storj-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> RcloneView bietet Ihnen eine voll ausgestattete GUI, um Ihren dezentralen Cloud-Speicher bei Storj zu synchronisieren, zu sichern und zu verwalten, ohne einen einzigen Befehl zu schreiben.

Storj ist eine dezentrale Objektspeicher-Plattform, die verschlüsselte Dateifragmente über ein globales Netzwerk von Knoten verteilt. Teams, die sensible Daten verwalten — medizinische Unterlagen, Finanzarchive oder kreative Assets — entscheiden sich wegen der integrierten Verschlüsselung und Ausfallsicherheit für Storj. Mit RcloneView können Sie Ihre Storj-Buckets verbinden und sie visuell zusammen mit all Ihren anderen Cloud-Konten verwalten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Storj mit RcloneView verbinden

RcloneView unterstützt Storj über zwei Verbindungsmethoden: das native Storj-Backend und den S3-kompatiblen Endpunkt. Für die meisten Nutzer ist der S3-kompatible Weg am einfachsten — Sie erzeugen S3-Zugangsdaten in der Storj-Konsole (Access Key ID, Secret Access Key und die regionale Endpunkt-URL) und fügen dann in RcloneView einen neuen Remote hinzu, indem Sie Amazon S3 als Anbietertyp auswählen und diese Zugangsdaten eingeben.

Das native Storj-Backend erfordert ein Access-Grant-Token, das Sie in der Storj-Web-UI erstellen können. Fügen Sie einen neuen Remote hinzu, wählen Sie Storj als Anbieter und fügen Sie Ihr Access Grant ein. Beide Varianten dauern unter zwei Minuten, und RcloneView speichert Ihre Zugangsdaten sicher mittels verschlüsseltem lokalem Speicher.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

Nach der Verbindung erscheinen Ihre Storj-Buckets im Datei-Explorer zusammen mit Ihren anderen Remotes. Durchsuchen Sie Ordner, sehen Sie sich Vorschaubilder an und verwalten Sie Dateien genau wie bei jedem anderen Cloud-Anbieter.

## Dateien mit Storj synchronisieren und sichern

Der 4-Schritte-Sync-Assistent von RcloneView macht es einfach, wiederkehrende Backups zu Storj einzurichten. Wählen Sie einen lokalen Ordner oder Cloud-Remote als Quelle, wählen Sie Ihren Storj-Bucket oder Unterordner als Ziel, geben Sie dem Job einen Namen und wählen Sie den Sync- oder Kopiermodus. Für ein Fotostudio, das 2 TB RAW-Dateien archiviert, hält ein nächtlicher Sync-Job den Storj-Bucket ohne manuellen Eingriff aktuell.

Aktivieren Sie die Option **Prüfsumme** in den erweiterten Einstellungen, um die Datenintegrität zu überprüfen — Storjs erasure-codierter Speicher ist ausfallsicher, aber die Verifizierung von Uploads per Hash-Vergleich gibt zusätzliche Sicherheit. Setzen Sie die Anzahl der Wiederholungsversuche auf 3 (Standardwert), um vorübergehende Netzwerkunterbrechungen problemlos zu bewältigen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## Automatisierte Storj-Backups planen (PLUS)

Mit einer PLUS-Lizenz können Sie Storj-Backup-Jobs mithilfe eines Crontab-artigen Schedulers planen. Legen Sie ein tägliches Backup um 2 Uhr morgens fest, wöchentliche Archivierungsläufe oder jeden anderen benutzerdefinierten Rhythmus. Die Funktion **Simulate schedule** von RcloneView zeigt die nächsten Ausführungszeiten in der Vorschau an, bevor Sie sie übernehmen.

Der Job-Verlauf protokolliert jeden Lauf — Startzeit, Dauer, übertragene Bytes und Abschlussstatus —, sodass Sie einen klaren Prüfpfad für jede an Storj gesendete Datei haben.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## Übertragung zwischen Storj und anderen Clouds

Storj eignet sich gut als sekundäre Off-Site-Kopie von Daten, die bereits auf Google Drive oder Dropbox liegen. Der Dual-Panel-Explorer von RcloneView lässt Sie Dateien direkt zwischen Remotes ziehen. Nutzen Sie bei umfangreichen Migrationen einen Sync-Job mit dem Modus **Dry Run**, um vorab zu sehen, was übertragen wird, bevor Sie den Vorgang bestätigen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zum Reiter Remote > Neuer Remote, wählen Sie Storj oder einen S3-kompatiblen Anbieter.
3. Geben Sie Ihr Storj Access Grant oder Ihre S3-kompatiblen Zugangsdaten ein und speichern Sie.
4. Öffnen Sie den Datei-Explorer, um Ihre Storj-Buckets zu durchsuchen und Sync-Jobs zu erstellen.

Die dezentrale Architektur von Storj macht es zu einem hervorragenden Off-Site-Backup-Ziel, und RcloneView macht die Verwaltung so einfach wie bei jedem gängigen Cloud-Anbieter.

---

**Weiterführende Anleitungen:**

- [Amazon S3 Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Dropbox zu Storj migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Übertragung zwischen Storj und Google Drive mit RcloneView](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
