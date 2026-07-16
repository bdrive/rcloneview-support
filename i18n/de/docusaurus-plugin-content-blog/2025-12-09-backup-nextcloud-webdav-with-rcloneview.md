---
slug: backup-nextcloud-webdav-with-rcloneview
title: "Nextcloud- und WebDAV-Laufwerke mit RcloneView sichern: Visuelle Synchronisation, Zeitpläne und Integritätsprüfungen"
authors:
  - tayson
description: "Schützen Sie Ihr Nextcloud- oder beliebiges WebDAV-Laufwerk mit RcloneView - fügen Sie Remotes hinzu, sehen Sie sich Unterschiede in der Vorschau an, planen Sie versionierte Backups und überprüfen Sie die Integrität, ohne sich CLI-Flags merken zu müssen."
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - RcloneView
  - backup
  - webdav
  - nextcloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud- und WebDAV-Laufwerke mit RcloneView sichern: Visuelle Synchronisation, Zeitpläne und Integritätsprüfungen

> Halten Sie Ihr Nextcloud- oder beliebiges WebDAV-Laufwerk sicher, indem Sie es auf Google Drive, S3/Wasabi oder einen anderen Cloud-Speicher spiegeln - ganz ohne Kommandozeile. RcloneView zeigt Änderungen in der Vorschau, plant Jobs und überprüft die Integrität, damit Backups zuverlässig bleiben.

Nextcloud und andere WebDAV-Dienste sind das Rückgrat von Team-Freigaben und selbst gehosteten Speicherlösungen, benötigen aber dennoch externe Backups. RcloneView verpackt die rclone-Engine in einer grafischen Oberfläche, sodass Sie WebDAV einmal hinzufügen, mit Ihrem Ziel-Cloud-Speicher koppeln und verifizierte Backups mit Job Scheduler und Compare automatisieren können.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum WebDAV/Nextcloud mit RcloneView sichern

- Unterschiede vor der Synchronisation mit **Compare** visualisieren, um Überschreibungen zu vermeiden.
- Denselben WebDAV-Remote wiederverwenden, um auf mehrere Ziele zu sichern (Drive, S3, Wasabi).
- Wiederkehrende Backups planen und Protokolle in der Job History aufbewahren.
- Prüfsummen-Optionen in Kopier-/Sync-Abläufen aktivieren, um die Datenintegrität zu bestätigen (sofern unterstützt).

## Ihren WebDAV-/Nextcloud-Remote verbinden

1. Klicken Sie auf **`+ New Remote`** -> wählen Sie **WebDAV**.
2. Geben Sie Ihre **URL**, Ihren **Benutzernamen**, Ihr **Passwort/App-Passwort** ein und wählen Sie die passende Anbietervoreinstellung (z. B. Nextcloud).
3. Benennen Sie ihn eindeutig, z. B. `Nextcloud_Main`.  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

Benötigen Sie eine Referenz? Siehe den WebDAV-Guide: [WebDAV-/Nextcloud-Remote hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

## Ein Backup-Ziel auswählen

- **Google Drive / Workspace** für einfache Freigabe und Verlauf.
- **S3-kompatible** Clouds (Amazon S3, Wasabi, R2) für kalkulierbare Kosten und Lifecycle-Regeln.
- **Ein weiteres WebDAV** für einfache Spiegelkopien.

Fügen Sie den Ziel-Remote mit `+ New Remote` hinzu und öffnen Sie dann beide nebeneinander in **Explorer -> Browse**.  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## Vorschau vor dem Kopieren

- Wählen Sie Quell- (WebDAV) und Zielordner im Explorer aus.
- Klicken Sie auf **Compare**, um fehlende, neuere oder identische Elemente hervorzuheben.
- Verwenden Sie **`Copy ->`** oder **`<- Copy`**, um nur das zu übertragen, was Sie benötigen, oder löschen Sie verwaiste Dateien sicher.

## Ein einmaliges Backup mit Sync ausführen

1. Wählen Sie Quell-/Zielordner aus.
2. Klicken Sie auf **Sync** und aktivieren Sie zunächst **Dry run**, um geplante Änderungen zu sehen.
3. Halten Sie die Nebenläufigkeit in den Sync-Optionen moderat, falls Ihr Server drosselt; Sie können Transfers/Checker nach dem Testen in den Einstellungen erhöhen.
4. Beobachten Sie den Fortschritt in den Tabs **Transfer** und **Completed**; prüfen Sie die Protokolle auf etwaige API-Limits.

## Wiederkehrende Backups planen (einrichten und vergessen)

1. Klicken Sie im Sync-Dialog auf **Save to Jobs** (oder öffnen Sie **Job Manager -> Add Job**).
2. Wählen Sie einen Zeitplan (täglich oder bestimmte Tage) und lassen Sie das Ziel auf einen datierten Ordner zeigen, wenn Sie einfache Zeitpunkt-Kopien wünschen.
3. Aktivieren Sie Benachrichtigungen und behalten Sie die **Job History** für Erfolgs-/Fehlerdetails im Blick.  

- Guides: [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Jobs ausführen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## Kurz-FAQ

**Funktioniert das für jedes WebDAV, nicht nur für Nextcloud?**  
Ja - wählen Sie WebDAV und die passende Anbieter-/Voreinstellung oder „other“, um Ihren Dienst abzubilden.

**Kann ich auf mehrere Ziele sichern?**  
Ja - verwenden Sie denselben WebDAV-Quell-Remote in mehreren Jobs (z. B. Nextcloud -> Drive und Nextcloud -> Wasabi).

**Laufen geplante Jobs, wenn die App gesperrt ist?**  
Jobs laufen wie konfiguriert; App Lock schützt lediglich den UI-Zugriff (siehe [App Lock aktivieren](/tutorials/enable-app-lock)).

## Fazit

RcloneView macht WebDAV-/Nextcloud-Backups visuell und vorhersehbar: Fügen Sie den Remote einmal hinzu, sehen Sie sich Änderungen in der Vorschau an, optimieren Sie die Leistung und planen Sie verifizierte Jobs. Schützen Sie die Dateien Ihres Teams mit externen Kopien, denen Sie vertrauen können - ganz ohne CLI-Kenntnisse.

<CloudSupportGrid />
