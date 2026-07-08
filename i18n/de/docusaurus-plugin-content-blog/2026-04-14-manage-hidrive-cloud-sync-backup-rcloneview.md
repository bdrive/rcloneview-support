---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "HiDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Erfahren Sie, wie Sie HiDrive-Cloud-Speicher mit RcloneView verbinden, synchronisieren und sichern. Verwalten Sie alle Ihre HiDrive-Dateien über eine GUI, ganz ohne CLI-Befehle."
keywords:
  - HiDrive RcloneView
  - HiDrive Cloud-Synchronisation
  - HiDrive Backup
  - STRATO HiDrive Verwaltung
  - HiDrive Dateiübertragung
  - rclone HiDrive GUI
  - HiDrive Synchronisationstool
  - Cloud-Speicherverwaltung HiDrive
tags:
  - RcloneView
  - hidrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> RcloneView bringt volle GUI-Kontrolle für HiDrive: Durchsuchen, synchronisieren, sichern und Übertragungen planen, ohne jemals eine Kommandozeile zu öffnen.

HiDrive, angeboten von STRATO und über europäische Rechenzentren betrieben, ist eine beliebte Wahl für datenschutzbewusste Nutzer und Unternehmen, die der DSGVO unterliegen. HiDrive programmatisch mit rclone zu verwalten war schon immer möglich, aber RcloneView verpackt diese Leistungsfähigkeit in eine übersichtliche Oberfläche — und macht Dateiübertragungen, geplante Backups und Cloud-übergreifende Synchronisationen für jeden unter Windows, macOS oder Linux zugänglich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive mit RcloneView verbinden

Das Hinzufügen von HiDrive als Remote in RcloneView ist unkompliziert. Klicken Sie auf **Remote-Tab → Neues Remote**, scrollen Sie in der Anbieterliste zu HiDrive und folgen Sie dem OAuth-Browser-Login. RcloneView öffnet Ihren Standardbrowser, Sie authentifizieren sich mit Ihren STRATO-Zugangsdaten, und das Remote wird automatisch gespeichert — kein Kopieren von Tokens erforderlich.

Nach der Verbindung erscheinen Ihre HiDrive-Ordner sofort im Explorer-Bereich. Sie können mehrere Tabs öffnen, um einen lokalen Ordner mit Ihrem HiDrive-Backup zu vergleichen, oder die Ansicht teilen, um HiDrive neben einer anderen Cloud wie Amazon S3 anzuzeigen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive unterstützt über RcloneView Standard-Dateioperationen: Hochladen, Herunterladen, Umbenennen, Löschen, neuen Ordner erstellen und öffentliche Links generieren. Ziehen Sie Dateien per Drag-and-drop direkt aus dem Windows Explorer in den HiDrive-Explorer-Bereich, um sie hochzuladen, oder ziehen Sie zwischen Bereichen, um eine Cloud-zu-Cloud-Kopie auszulösen.

## Automatisierte HiDrive-Backups planen

Für Unternehmen, die Projektarchive oder Kundenlieferungen auf HiDrive speichern, sind automatisierte Backups unverzichtbar. Der Job Manager von RcloneView (PLUS-Lizenz) ermöglicht die Konfiguration von Crontab-artigen Zeitplänen — zum Beispiel eine nächtliche Synchronisation eines lokalen `D:\Projects`-Ordners nach `hidrive:Backups/Projects` jeden Tag um 2:00 Uhr.

Der 4-stufige Synchronisationsassistent führt Sie durch die Auswahl von Quelle und Ziel, Einstellungen zur Übertragungsparallelität, Dateifilter und den Zeitplan. Aktivieren Sie in Schritt 2 die Prüfsummenverifizierung, um die Dateiintegrität byte-genau zu bestätigen, statt sich allein auf Änderungszeitstempel zu verlassen — wichtig bei der Synchronisation mit einem europäischen Server, bei dem Zeitzonenunterschiede zu falschen Abweichungen führen können.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

Nutzen Sie die Dry-Run-Option vor der ersten echten Synchronisation, um genau vorherzusehen, welche Dateien kopiert oder gelöscht werden. Dies ist besonders wertvoll beim Einrichten einer Einweg-Synchronisation, bei der Zieldateien überschrieben werden können.

## Übertragungen und Jobverlauf überwachen

Der untere **Übertragung**-Tab von RcloneView bietet Echtzeit-Einblick in aktive HiDrive-Übertragungen: Dateianzahl, Übertragungsgeschwindigkeit, übertragene Bytes und verstrichene Zeit. Schlägt ein Job aufgrund einer Netzwerkstörung fehl, wiederholt RcloneView den Vorgang automatisch (Standard: 3 Wiederholungen).

Der Tab **Jobverlauf** speichert ein vollständiges Protokoll vergangener Läufe — Ausführungsart (manuell oder geplant), Startzeit, Dauer, Status und Gesamtgröße der Übertragung. Für Compliance-Teams, die regelmäßige Datenschutzaktivitäten nachweisen müssen, ist dieser Prüfpfad sofort nützlich.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie RcloneView und klicken Sie auf **Remote-Tab → Neues Remote**, wählen Sie HiDrive aus und schließen Sie den OAuth-Login ab.
3. Nutzen Sie den Explorer-Bereich, um Ihre HiDrive-Ordner zu durchsuchen und die Verbindung zu überprüfen.
4. Öffnen Sie den **Job Manager**, erstellen Sie einen neuen Synchronisationsjob von Ihrem lokalen Laufwerk zu HiDrive und legen Sie einen Zeitplan fest.

Mit RcloneView wird HiDrive zu einem vollständig verwalteten Bestandteil Ihrer Backup-Strategie — geplant, überwacht und automatisch verifiziert.

---

**Verwandte Anleitungen:**

- [OneDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Jottacloud verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
