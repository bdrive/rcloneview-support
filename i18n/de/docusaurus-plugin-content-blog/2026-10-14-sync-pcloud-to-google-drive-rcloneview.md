---
slug: sync-pcloud-to-google-drive-rcloneview
title: "pCloud mit Google Drive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - jay
description: "pCloud mit Google Drive in RcloneView synchronisieren: beide Remotes verbinden, per Dry Run vorab prüfen und Cloud-zu-Cloud-Backups in einem Fenster planen."
keywords:
  - pcloud mit google drive synchronisieren
  - pcloud zu google drive Backup
  - RcloneView pcloud
  - Cloud-zu-Cloud-Synchronisation
  - pcloud google drive Übertragung
  - pcloud Dateien sichern
  - zweite Kopie Cloud-Backup
  - Cloud-Synchronisation planen
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud mit Google Drive synchronisieren — Cloud-Backup mit RcloneView

> Bewahren Sie eine zweite Kopie Ihrer pCloud-Dateien in Google Drive auf — mit einem Cloud-zu-Cloud-Sync-Job, den Sie in einem Fenster vorab prüfen, ausführen und planen können.

Wer sich bei wichtigen Dateien auf eine einzige Cloud verlässt, riskiert Kontosperrungen, versehentliches Löschen und Synchronisationsfehler. Ein Mirror von pCloud nach Google Drive schafft eine unabhängige Kopie bei einem anderen Anbieter. RcloneView verbindet beide Dienste per OAuth und synchronisiert die Daten anschließend als Job zwischen ihnen. RcloneView bindet 90+ Anbieter ein (Mount) UND synchronisiert sie, in einem Fenster, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud und Google Drive verbinden

Beide Anbieter nutzen eine browserbasierte OAuth-Anmeldung. Öffnen Sie in RcloneView den Dialog für ein neues Remote, wählen Sie pCloud und melden Sie sich an, sobald sich Ihr Browser öffnet. Wiederholen Sie das für Google Drive. Nach der Autorisierung erscheint jedes Remote im Remote Manager und im Explorer, wo Sie Ordner in einem Zwei-Fenster-Layout nebeneinander durchsuchen können.

<img src="/support/images/en/blog/new-remote.png" alt="pCloud- und Google-Drive-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Vor dem Sync prüfen

Stellen Sie sich eine freiberufliche Designerin mit einem 300 GB großen pCloud-Projektarchiv vor, die einen Drive-Mirror möchte. Verwenden Sie, bevor etwas angefasst wird, Folder Compare für die beiden Ordner. Es zeigt, welche Dateien nur auf einer Seite vorhanden sind, welche sich unterscheiden und welche übereinstimmen – so wissen Sie genau, was der erste Sync tun wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud- und Google-Drive-Ordner in RcloneView vergleichen" class="img-large img-center" />

## Sync-Job erstellen

Der Sync-Assistent besteht aus vier Schritten: Quelle und Ziel wählen, erweiterte Einstellungen anpassen, Filter festlegen und optional einen Zeitplan setzen. Wählen Sie pCloud als Quelle und Google Drive als Ziel mit der unidirektionalen Option, die nur das Ziel verändert. Nutzen Sie Filter, um temporäre Dateien zu überspringen oder die Dateigröße zu begrenzen, und führen Sie einen Dry Run aus, um die Liste der Dateien zu sehen, die kopiert oder gelöscht würden. Da ein unidirektionaler Sync das Ziel an die Quelle angleicht, prüfen Sie die Dry-Run-Ausgabe stets auf unerwartete Löschungen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von pCloud zu Google Drive in RcloneView" class="img-large img-center" />

## Überwachen und planen

Führen Sie den Job aus, verfolgen Sie den Übertragungsfortschritt live und prüfen Sie die Ergebnisse anschließend im Job History. Mit einer PLUS-Lizenz können Sie einen Zeitplan im crontab-Stil hinzufügen, damit der Mirror regelmäßig aktualisiert wird (RcloneView läuft dafür weiter im System Tray).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Sync-Job von pCloud zu Google Drive in RcloneView planen" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen**: Laden Sie es von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie pCloud und Google Drive per OAuth-Anmeldung als Remotes hinzu.
3. Vergleichen Sie Quell- und Zielordner und erstellen Sie dann einen unidirektionalen Sync-Job.
4. Führen Sie einen Dry Run aus, starten Sie den Job und prüfen Sie ihn im Job History.

Eine geprüfte zweite Kopie bei einem anderen Anbieter macht aus einem Single Point of Failure ein echtes Backup.

---

**Weiterführende Anleitungen:**

- [pCloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Google Drive zu pCloud migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Dropbox mit pCloud synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
