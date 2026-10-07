---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Zoho WorkDrive zu Google Drive migrieren — Dateien mit RcloneView übertragen"
authors:
  - kai
description: "Zoho WorkDrive zu Google Drive migrieren mit RcloneView: Region wählen, beide Remotes verbinden, per Dry Run prüfen, Cloud-zu-Cloud kopieren und Ergebnisse verifizieren."
keywords:
  - Zoho WorkDrive zu Google Drive migrieren
  - Zoho-WorkDrive-Übertragung
  - Zoho-WorkDrive-Export
  - Zoho-Dateien zu Google Drive verschieben
  - Cloud-zu-Cloud-Migration
  - RcloneView
  - rclone GUI
  - Zoho-WorkDrive-Backup
  - Google-Drive-Synchronisation
  - Ordnervergleich
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive zu Google Drive migrieren — Dateien mit RcloneView übertragen

> Kopieren Sie Teamordner von Zoho WorkDrive direkt zwischen den Clouds nach Google Drive, mit Vorschau und Verifizierung.

Wenn ein Unternehmen von der Zoho-Suite zu Google Workspace wechselt, müssen auch die WorkDrive-Teamordner umziehen. Alles herunterzuladen und erneut hochzuladen ist langsam und schwer nachvollziehbar. RcloneView verbindet beide Dienste und überträgt Dateien Cloud-zu-Cloud, sodass Sie die Migration in einem einzigen Fenster in der Vorschau prüfen, ausführen und verifizieren können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive und Google Drive verbinden

Zoho WorkDrive erfordert eine zusätzliche Einstellung: Beim Erstellen des Remotes müssen Sie die **Region** wählen, und sie muss dem Rechenzentrum Ihres Zoho-Kontos entsprechen. Google Drive nutzt die OAuth-Anmeldung im Browser. Öffnen Sie den Tab Remote, klicken Sie auf **New Remote** und fügen Sie die Dienste nacheinander hinzu.

Grundlegende Synchronisation und der Ordnervergleich sind mit der FREE-Lizenz verfügbar.

<img src="/support/images/en/blog/new-remote.png" alt="Remotes für Zoho WorkDrive und Google Drive erstellen" class="img-large img-center" />

## Ordnerzuordnung planen

Öffnen Sie zwei Explorer-Panels, links WorkDrive und rechts Google Drive. Durchsuchen Sie die Teamordner und legen Sie fest, wohin jeder Ordner soll. Ein Finanzteam mit 150 GB an Quartalsberichten könnte beispielsweise einem eigenen Ordner in einem geteilten Ablagebereich zugeordnet werden, während persönliche Dateien in Meine Ablage landen.

Verwenden Sie Get Size bei großen Ordnern, um die Übertragungsdauer abzuschätzen. Im Filterschritt des Sync-Assistenten können Sie nicht benötigte Ordner oder Dateitypen, etwa alte Archive, über das maximale Dateialter oder benutzerdefinierte Filter ausschließen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive und Google Drive nebeneinander" class="img-large img-center" />

## Erst Dry Run, dann Übertragung

Erstellen Sie einen Copy-Job von WorkDrive zu Google Drive und führen Sie zuerst einen **Dry Run** aus. Er listet die Dateien auf, die kopiert würden, ohne etwas zu verändern. Wenn die Vorschau passt, führen Sie den Job aus und verfolgen den Fortschritt im Tab Transferring.

Treten Fehler auf, wiederholt der Job den Vorgang bis zur konfigurierten Anzahl, und die Job History protokolliert für jeden Lauf Status, Größe und Dateianzahl. Ein erneuter Lauf kopiert nur, was fehlt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrationsjob in RcloneView ausführen" class="img-large img-center" />

## Verifizieren und Nachweis aufbewahren

Öffnen Sie **Compare** im Tab Home, um WorkDrive mit Google Drive abzugleichen. Filtern Sie nach Dateien, die nur links vorhanden sind, um nicht übertragene Inhalte zu finden, und kopieren Sie diese hinüber. Die Job History liefert einen mit Zeitstempel versehenen Nachweis, den Sie für die Abnahme der Migration aufbewahren können.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History für die Zoho-WorkDrive-Migration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Zoho WorkDrive (mit der richtigen Region) und Google Drive als Remotes hinzu.
3. Erstellen Sie einen Copy-Job und führen Sie einen Dry Run aus, um die Übertragung in der Vorschau zu prüfen.
4. Führen Sie den Job aus und verifizieren Sie mit Folder Compare, bevor Sie WorkDrive außer Betrieb nehmen.

Wenn die Quelle unverändert bleibt, bis der Vergleich sauber ist, bleibt die Umstellung risikoarm.

---

**Weiterführende Anleitungen:**

- [Zoho-WorkDrive-Cloud-Synchronisation verwalten](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Zoho WorkDrive mit OneDrive synchronisieren](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Synchronisationsfehler bei Zoho WorkDrive beheben](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
