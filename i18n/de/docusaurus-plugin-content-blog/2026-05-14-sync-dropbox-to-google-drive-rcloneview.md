---
slug: sync-dropbox-to-google-drive-rcloneview
title: "Dropbox mit Google Drive synchronisieren — Cloud-Backups automatisieren mit RcloneView"
authors:
  - casey
description: "Erfahren Sie, wie Sie Dropbox automatisch mit Google Drive synchronisieren – mit RcloneView. Richten Sie wiederkehrende Cloud-zu-Cloud-Backup-Jobs mit Zeitplanung, Filterung und Live-Übertragungsüberwachung ein."
keywords:
  - Dropbox mit Google Drive synchronisieren
  - Dropbox Google Drive Synchronisation
  - Dropbox zu Google Drive Backup
  - Cloud-zu-Cloud-Synchronisation RcloneView
  - Dropbox Google Drive Übertragung automatisieren
  - rclone Dropbox Google Drive GUI
  - Dropbox Cloud-Backup-Lösung
  - wiederkehrender Cloud-Sync-Job
  - Cloud-übergreifende Backup-Automatisierung
  - RcloneView Cloud-Sync-Tool
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox mit Google Drive synchronisieren — Cloud-Backups automatisieren mit RcloneView

> Halten Sie Ihre Dropbox und Ihr Google Drive automatisch synchron — ohne Skripte, Terminals oder teure Drittanbieter-Sync-Dienste.

Viele Teams verlassen sich für die tägliche Dateifreigabe auf Dropbox, aber eine kluge Cloud-Strategie bedeutet, eine redundante Kopie bei einem zweiten Anbieter wie Google Drive vorzuhalten. Ob Sie sich gegen versehentliches Löschen absichern, eine Workspace-Migration vorbereiten oder eine Zwei-Cloud-Backup-Richtlinie erfüllen möchten — RcloneView bietet Ihnen eine geplante, GUI-gesteuerte Pipeline, um Dropbox zuverlässig mit Google Drive zu synchronisieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und Google Drive als Remotes verbinden

Bevor Sie einen Sync-Job planen, benötigt RcloneView autorisierte Verbindungen zu beiden Anbietern. Öffnen Sie die App, gehen Sie zum **Remote-Tab** und klicken Sie auf **New Remote**. Wählen Sie **Dropbox** aus der Anbieterliste und schließen Sie den OAuth-Browser-Login ab — kein API-Schlüssel erforderlich. Wiederholen Sie den Vorgang für **Google Drive** und melden Sie sich mit Ihrem Google-Konto an.

Beide Remotes erscheinen nun im Remote Manager und sind von jedem Explorer-Panel aus zugänglich. Sie können Ihre Dropbox-Ordner im linken Panel und Ihr Google-Drive-Ziel im rechten Panel durchsuchen, sodass Sie Quelle und Ziel vor dem Erstellen eines Jobs leicht identifizieren können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

Für Teams, die **Dropbox for Business** nutzen, setzen Sie den Parameter `dropbox_business = true` bei der Remote-Einrichtung. Für **Google Shared Drives** aktivieren Sie die Option für geteilte Laufwerke, damit Team-Ordner im Remote-Explorer zugänglich sind.

## Einen Sync-Job mit Zeitplanung erstellen

Nachdem beide Remotes verbunden sind, gehen Sie zum **Home-Tab** und klicken Sie auf **Sync**, um den Job-Assistenten zu öffnen. In Schritt 1 wählen Sie Ihren Dropbox-Ordner als Quelle und einen Google-Drive-Ordner als Ziel. Geben Sie dem Job einen aussagekräftigen Namen wie `dropbox-to-gdrive-backup`.

In Schritt 2 passen Sie die Anzahl gleichzeitiger Übertragungen an Ihre Verbindungsgeschwindigkeit an. Das Aktivieren der **Checksummenprüfung** stellt sicher, dass die Dateiintegrität Byte für Byte überprüft wird, nicht nur anhand der Größe. In Schritt 3 können Sie nach Dateityp filtern — zum Beispiel `.tmp`- oder `.lnk`-Dateien ausschließen, die Dropbox manchmal in synchronisierten Team-Ordnern hinterlässt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

In Schritt 4 findet die Automatisierung statt. Mit einer **PLUS-Lizenz** legen Sie einen Zeitplan im Cron-Format fest — zum Beispiel jede Nacht um 2:00 Uhr —, sodass neue Dropbox-Inhalte automatisch auf Google Drive gespiegelt werden. Verwenden Sie den Cron-Ausdruck `0 2 * * *` für die tägliche Ausführung oder `0 2 * * 0`, um wöchentlich sonntags zu synchronisieren. Die Schaltfläche **Simulate schedule** zeigt eine Vorschau der nächsten mehreren Ausführungszeiten, bevor Sie speichern.

## Live-Übertragungen überwachen und Verlauf einsehen

Sobald Ihr Job läuft, zeigt der **Transferring-Tab** am unteren Rand der App den Live-Fortschritt der Übertragung: Dateianzahl, Übertragungsgeschwindigkeit, insgesamt übertragene Datenmenge und eine Abbrechen-Schaltfläche, falls Sie den Lauf vorzeitig stoppen müssen. Für eine Kreativagentur, die 80 GB Projektarchive von Dropbox zu Google Drive synchronisiert, können Sie den Status jeder Datei verfolgen, während die Übertragungen abgeschlossen werden.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

Nach jedem Lauf erfasst die Ansicht **Job History** den Ausführungstyp (manuell oder geplant), die Dauer, die insgesamt übertragenen Bytes, die Geschwindigkeit und den finalen Status — Completed, Errored oder Canceled. Wenn ein Lauf auf ein vorübergehendes API-Ratenlimit von Dropbox oder Google Drive stößt, behebt der integrierte Wiederholungsmechanismus (Standard: 3 Versuche) vorübergehende Fehler ohne manuellen Eingriff.

## Sync-Ergebnisse mit Folder Compare überprüfen

Verwenden Sie nach der ersten vollständigen Synchronisation das **Folder Compare**-Tool von RcloneView, um zu überprüfen, dass beide Seiten übereinstimmen. Starten Sie es über den Home-Tab, wählen Sie Ihre Dropbox-Quelle und Ihr Google-Drive-Ziel aus und klicken Sie auf Compare. Die Ergebnisse zeigen nur links vorhandene Dateien (noch nicht synchronisiert), nur rechts vorhandene Dateien (manuell zu Drive hinzugefügt), identische Dateien und Dateien mit abweichender Größe.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

Führen Sie vor der ersten Live-Synchronisation einen **Dry Run** aus, um genau zu sehen, welche Dateien kopiert oder gelöscht werden. Dies ist besonders wichtig, wenn Sie einen aktiven Dropbox-Team-Ordner synchronisieren — Sie möchten den Umfang bestätigen, bevor Änderungen das Google-Drive-Ziel betreffen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Dropbox-Remote per OAuth-Login hinzu (Remote-Tab > New Remote).
3. Fügen Sie Ihr Google-Drive-Remote auf die gleiche Weise hinzu.
4. Erstellen Sie einen Sync-Job von Dropbox zu Google Drive mit Ihrem bevorzugten Zeitplan.

Mit einer geeigneten Dropbox-zu-Google-Drive-Pipeline liegen Ihre Daten in zwei Clouds — geschützt vor Ausfällen einzelner Anbieter, versehentlichem Löschen und Abrechnungsüberraschungen.

---

**Verwandte Anleitungen:**

- [Dropbox mit RcloneView zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Dropbox verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Google Drive mit Dropbox synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
