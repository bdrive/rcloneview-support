---
slug: transfer-wasabi-to-google-drive-rcloneview
title: "Dateien zwischen Wasabi und Google Drive übertragen mit RcloneView"
authors:
  - tayson
description: "Daten zwischen Wasabi-Buckets und Google Drive verschieben oder sichern mit RcloneView-Remotes schnell einrichten, S3-Uploads optimieren, vor der Synchronisation vergleichen und laufende Jobs planen."
keywords:
  - Wasabi to Google Drive transfer
  - Wasabi cloud migration
  - cloud-to-cloud backup
  - rcloneview
  - rclone s3
  - google drive migration
  - cloud sync
  - wasabi google drive transfer
  - s3 multipart upload
  - cloud automation
tags:
  - cloud-migration
  - wasabi
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dateien zwischen Wasabi und Google Drive übertragen mit RcloneView

> Verschieben Sie Terabytes von Wasabi zu Google Drive (oder zurück), ohne mit Befehlszeilen zu jonglieren. RcloneView verbindet die Geschwindigkeit von rclone und S3-Tuning mit einer geführten GUI, damit Sie Migrationen zuverlässig vergleichen, synchronisieren und planen können.

RcloneView unterstützt sowohl S3-kompatiblen Speicher wie Wasabi als auch den OAuth-Flow von Google Drive. Öffnen Sie beide Remotes nebeneinander, wählen Sie je nach Workflow Explorer/Vergleich/Synchronisation und wenden Sie S3-freundliches Chunking an, um große Uploads stabil zu halten.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Wasabi vs. Google Drive im Überblick

- **Wasabi**: S3-API, schnelle Aufnahme, niedrige Speicherkosten, Bucket-spezifische Endpunkte (z. B. `s3.us-east-1.wasabisys.com`).
- **Google Drive / Workspace**: Vertraute Freigabe, starke Zusammenarbeit, bei Lastspitzen zu beachtende API-Kontingente.
- **RcloneView**: Eine Oberfläche für beide-vor der Synchronisation vergleichen, per Drag & Drop arbeiten, Testläufe durchführen und wiederkehrende Jobs planen.

## Einen Wasabi-Remote hinzufügen (S3-kompatibel)

1. Klicken Sie auf **`+ New Remote`** -> wählen Sie **S3**.
2. Geben Sie Ihren **Access Key** / **Secret Key**, die Bucket-Region und den Endpunkt ein (z. B. `s3.wasabisys.com` oder eine regionsspezifische URL).
3. Speichern Sie als `Wasabi_Archive` (oder ähnlich) zur besseren Übersicht.  
   <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="New remote wizard" class="img-large img-center" />

Referenz-Einrichtung: [S3-kompatible Einrichtung](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

## Google Drive per OAuth verbinden

1. Wählen Sie unter **`+ New Remote`** die Option **Google Drive**.
2. Melden Sie sich über die OAuth-Aufforderung im Browser an und bestätigen Sie das Konto oder den Workspace, zu dem migriert werden soll.
3. Benennen Sie ihn (z. B. `GDrive_Workspace`).

Weitere Details: [Google Drive per OAuth hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

## Beide Clouds nebeneinander öffnen

1. Öffnen Sie unter **Explorer -> Browse** Ihren **Wasabi**-Remote auf einer Seite und **Google Drive** auf der anderen.
2. Navigieren Sie zum Quell-Bucket/Ordner und zum Ziel-Ordner in Drive.  


## Die beste Übertragungsmethode wählen

- **Drag & Drop (Explorer)**: Schnelle Kopien für ausgewählte Ordner. Der Fortschritt erscheint in den **Transfer**-Protokollen.
- **Vergleich -> Kopieren**: Unterschiede zuerst als Vorschau prüfen; fehlende/neuere Dateien sicher kopieren.
- **Synchronisation**: Einweg-Spiegelung für laufende Backups (Wasabi -> Drive oder umgekehrt). Fügen Sie zuerst **`--dry-run`** hinzu, um die Ausführung zu validieren.
- Benötigen Sie eine Anleitung? Siehe den Multi-Cloud-Tutorial-Ablauf: [Dateien zwischen MEGA und Google Drive übertragen](https://rcloneview.com/support/tutorials/transfer-files-between-mega-and-google-drive)

## Einen geplanten Backup-Job erstellen

1. Klicken Sie nach einer erfolgreichen Synchronisation auf **Save to Jobs**.
2. Öffnen Sie **Job Manager** -> **Add Job** (oder bearbeiten Sie den gespeicherten Job) und legen Sie den Zeitplan fest (z. B. nächtlich).
3. Behalten Sie **Backup Dir** oder versionierte Ordner bei, um geänderte/gelöschte Elemente auf Drive zu erhalten.
4. Überwachen Sie den Vorgang im Tab **Transfer** und in **History** für jobbezogene Ergebnisse.  
- Anleitungen: [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Jobs ausführen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## Checkliste für die Migration (Integrität + Sicherheit)

- Führen Sie zuerst einen **Vergleich** durch, um zu sehen, was verschoben wird; exportieren Sie die Ergebnisse bei Bedarf.
- Starten Sie die Synchronisation mit **`--dry-run`**, um Überraschungen zu vermeiden.
- Validieren Sie kritische Daten mit `rclone check source: dest:` im integrierten Terminal und prüfen Sie die **API-Protokolle**.
- Verwenden Sie eindeutige Zielordner (z. B. `Wasabi_Archive_2025`), bis Sie die Integrität überprüft haben.
- Dokumentieren Sie Jobs mit klaren Namen (`Wasabi->GDrive_Nightly`) und beschränken Sie Endpunkte/Schlüssel auf den benötigten Bucket.

## Fazit

Mit RcloneView vereinen sich die S3-Performance von Wasabi und die Zusammenarbeit von Google Drive in einer Oberfläche. Erstellen Sie beide Remotes, sehen Sie Änderungen in der Vorschau, optimieren Sie S3-Uploads und planen Sie wiederkehrende Jobs-alles ohne das Bearbeiten von Konfigurationen oder CLI-Flags. Starten Sie noch heute Ihre Migration von Wasabi zu Google Drive und halten Sie jeden Lauf überprüfbar.

<CloudSupportGrid />
