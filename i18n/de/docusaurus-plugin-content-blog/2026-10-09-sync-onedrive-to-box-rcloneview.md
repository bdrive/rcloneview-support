---
slug: sync-onedrive-to-box-rcloneview
title: "OneDrive mit Box synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - alex
description: "OneDrive mit Box synchronisieren per RcloneView: beide per OAuth verbinden, mit Dry Run prüfen, Cloud-zu-Cloud-Sync ausführen und mit Folder Compare verifizieren."
keywords:
  - OneDrive mit Box synchronisieren
  - OneDrive zu Box Backup
  - OneDrive Box Sync-Tool
  - OneDrive nach Box kopieren
  - Cloud-zu-Cloud-Synchronisation
  - OneDrive Box Migration
  - RcloneView
  - rclone GUI
  - Ordnervergleich
  - geplante Cloud-Synchronisation
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive mit Box synchronisieren — Cloud-Backup mit RcloneView

> Halten Sie eine zweite Kopie Ihrer OneDrive-Dateien in Box, direkt zwischen den beiden Clouds übertragen.

Teams arbeiten intern oft mit OneDrive, während ein Kunde, Partner oder ein Compliance-Prozess die Dateien in Box erwartet. Alles herunterzuladen und erneut hochzuladen ist langsam und erfordert lokalen Speicherplatz, den Sie womöglich nicht haben. RcloneView verbindet beide Dienste und synchronisiert Cloud-zu-Cloud – vorher mit einem Dry Run, nachher mit einem visuellen Vergleich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive und Box verbinden

Beide Dienste nutzen die OAuth-Anmeldung im Browser. Klicken Sie im Tab Remote auf **New Remote**, wählen Sie Microsoft OneDrive und melden Sie sich an. Wiederholen Sie das für Box. Setzen Sie bei einem Box-Business- oder Enterprise-Konto während der Konfiguration `box_sub_type = enterprise`.

RcloneView kann über 90 Anbieter in einem Fenster einbinden (mount) und synchronisieren, unter Windows, macOS und Linux. Sobald beide Remotes existieren, öffnen Sie sie nebeneinander in zwei Explorer-Panels.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive- und Box-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Copy oder Sync wählen, dann Dry Run

Öffnen Sie den Sync-Assistenten und wählen Sie OneDrive als Quelle und einen Box-Ordner als Ziel. Eine unidirektionale Synchronisation ändert nur das Ziel, sodass aus OneDrive gelöschte Dateien auch aus Box entfernt werden. Wenn Sie ein Sicherheitsnetz statt eines Spiegels möchten, verwenden Sie stattdessen einen Copy-Job.

Führen Sie zuerst einen **Dry Run** aus. Er listet auf, welche Dateien kopiert und welche gelöscht werden, ohne etwas zu verändern. Ein Buchhaltungsteam, das beispielsweise einen 150 GB großen Ordner „Clients“ synchronisiert, kann so die Ordnerstruktur prüfen und überflüssige temporäre Dateien erkennen, bevor der echte Lauf startet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Sync von OneDrive nach Box" class="img-large img-center" />

## Den Job filtern und anpassen

In Schritt 2 des Assistenten legen Sie die Anzahl der Dateiübertragungen, Multi-Thread-Übertragungen und Equality Checker fest. Aktivieren Sie den Prüfsummenvergleich, wenn Sie Hash plus Größe statt nur Größe und Zeit verwenden möchten. In Schritt 3 können Sie Dateien nach maximaler Größe, Alter oder benutzerdefinierten Regeln ausschließen oder vordefinierte Filter für Dokumente oder Bilder nutzen. Box hat eigene Upload-Größenbeschränkungen, die von Ihrem Tarif abhängen. Prüfen Sie daher Ihr Konto, bevor Sie sehr große Dateien synchronisieren.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Den OneDrive-zu-Box-Sync-Job starten" class="img-large img-center" />

## Überwachen, vergleichen und planen

Verfolgen Sie den Fortschritt im Tab Transferring, der Geschwindigkeit, Dateianzahl und Größe anzeigt. Öffnen Sie anschließend **Compare** mit OneDrive links und Box rechts und filtern Sie nach Dateien, die nur links vorhanden sind oder sich unterscheiden. Job History speichert Status, Dauer und Größe jedes Laufs.

Mit einer PLUS-Lizenz können Sie in Schritt 4 einen Zeitplan im crontab-Stil hinzufügen, sodass die Synchronisation jede Nacht wiederholt wird, während RcloneView im Infobereich der Taskleiste läuft.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen OneDrive und Box" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie im Tab Remote OneDrive- und Box-Remotes hinzu.
3. Erstellen Sie einen Sync- oder Copy-Job von OneDrive nach Box und führen Sie einen Dry Run aus.
4. Führen Sie den Job aus und verifizieren Sie ihn mit Folder Compare und Job History.

Eine verifizierte zweite Kopie in Box gibt Ihnen eine verlässliche Rückfallebene, welche Plattform Ihr Team als Nächstes nutzt.

---

**Weiterführende Anleitungen:**

- [OneDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Box-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box zu OneDrive migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
