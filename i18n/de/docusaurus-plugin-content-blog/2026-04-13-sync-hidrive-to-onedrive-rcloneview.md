---
slug: sync-hidrive-to-onedrive-rcloneview
title: "HiDrive mit OneDrive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Synchronisieren Sie Dateien von HiDrive zu OneDrive mit RcloneView. Übertragen Sie Strato-HiDrive-Speicher direkt zu Microsoft OneDrive, ohne lokal herunterzuladen."
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive mit OneDrive synchronisieren — Cloud-Backup mit RcloneView

> Übertragen Sie Dateien direkt von Strato HiDrive zu Microsoft OneDrive mit RcloneView — direkte Cloud-zu-Cloud-Synchronisation ohne lokalen Download.

HiDrive von Strato ist ein europäischer Cloud-Speicherdienst, der bei Unternehmen beliebt ist, die eine DSGVO-konforme Datenresidenz benötigen. Da immer mehr Organisationen Microsoft 365 einführen, möchten viele ihre HiDrive-Dateien in OneDrive konsolidieren, um eine nahtlose Zusammenarbeit in Teams und SharePoint zu ermöglichen. RcloneView macht diesen Übergang unkompliziert: Fügen Sie beide Dienste als Remotes hinzu und synchronisieren Sie HiDrive-Ordner direkt mit OneDrive über die grafische Oberfläche von RcloneView, ohne Dateien auf einen zwischengeschalteten lokalen Rechner herunterzuladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive und OneDrive verbinden

HiDrive verwendet in rclone die OAuth-Authentifizierung — wenn Sie HiDrive als Remote in RcloneView hinzufügen, öffnet sich ein Browserfenster, in dem Sie sich mit Ihren Strato-HiDrive-Zugangsdaten anmelden und den Zugriff gewähren. Derselbe OAuth-Ablauf gilt auch für OneDrive: Wählen Sie Microsoft OneDrive aus der Anbieterliste, authentifizieren Sie sich über Ihr Microsoft-Konto, und der Remote ist konfiguriert.

Sobald beide Remotes aktiv sind, öffnen Sie sie nebeneinander im Zwei-Panel-Explorer von RcloneView. Ihre HiDrive-Ordnerstruktur erscheint auf der einen Seite, Ihr OneDrive auf der anderen. Diese visuelle Anordnung hilft Ihnen, Ihre Migration zu planen: Ermitteln Sie, welche HiDrive-Ordner welchen OneDrive-Zielen entsprechen, bevor Sie Synchronisationsaufträge erstellen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Den Synchronisationsauftrag konfigurieren

Verwenden Sie den Sync-Assistenten, um die Übertragung von HiDrive zu OneDrive zu erstellen. Wählen Sie Ihren HiDrive-Quellordner und den OneDrive-Zielordner aus und arbeiten Sie sich durch die Konfigurationsschritte. Die Einweg-Synchronisation (die standardmäßige, stabile Option) spiegelt Ihre HiDrive-Inhalte auf OneDrive — neue und geänderte Dateien werden kopiert, und optional werden auch von HiDrive gelöschte Dateien von OneDrive entfernt.

Für Teams, die Projektarchive konsolidieren, ist der Filterschritt wertvoll: Legen Sie ein maximales Dateialter fest, um nur Dateien zu migrieren, die in den letzten zwei Jahren erstellt oder geändert wurden, oder verwenden Sie Dateityp-Filter, um nur Dokumente, Tabellenkalkulationen und Präsentationen einzuschließen und große Videodateien auszuschließen. Mit benutzerdefinierten Filterregeln wie `.tmp` oder `/.git/` können Sie Arbeitsbereich-Ballast von der Migration ausschließen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

Führen Sie den Dry-Run-Modus vor der eigentlichen Übertragung aus, um zu bestätigen, dass die Dateiliste Ihren Erwartungen entspricht. Die Simulation zeigt genau, welche Dateien kopiert werden, ohne Änderungen vorzunehmen — ein sinnvoller Schritt beim Verschieben geschäftlicher Daten zwischen Anbietern.

## Laufende Synchronisation planen

Für Teams, die HiDrive und OneDrive während einer Übergangsphase parallel betreiben, hält die zeitplanbasierte Synchronisation (PLUS-Lizenz) beide Dienste im Gleichschritt. Definieren Sie einen wiederkehrenden Zeitplan — täglich, zweimal wöchentlich oder in einem benutzerdefinierten Cron-Intervall — und RcloneView übernimmt die Synchronisationsläufe im Hintergrund. Der Auftragsverlauf protokolliert jede Ausführung mit Startzeit, übertragenen Dateien und Abschlussstatus.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

Wenn Sie überprüfen möchten, ob die Synchronisation korrekt abgeschlossen wurde, verwenden Sie den Ordnervergleich, um zu prüfen, ob OneDrive nun die erwarteten Dateien von HiDrive enthält. Die Vergleichsansicht zeigt Dateien, die nur links, nur rechts oder mit unterschiedlicher Größe vorhanden sind, sodass Sie alles erkennen können, was eine erneute Übertragung erfordert.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie HiDrive über den OAuth-Browser-Login-Ablauf im Remote-Tab hinzu.
3. Fügen Sie OneDrive über den OAuth-Browser-Login-Ablauf hinzu.
4. Verwenden Sie den Sync-Assistenten, um HiDrive-Ordner zu OneDrive zu übertragen, mit Dry Run zur Vorschau.

Der Umzug von HiDrive zu OneDrive über RcloneView hält den Prozess GUI-gesteuert und nachvollziehbar, ohne zusätzlichen lokalen Speicherverbrauch durch eine Zwischenablage.

---

**Verwandte Anleitungen:**

- [HiDrive Strato Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [OneDrive Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
