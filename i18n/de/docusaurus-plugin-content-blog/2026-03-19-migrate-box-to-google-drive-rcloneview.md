---
slug: migrate-box-to-google-drive-rcloneview
title: "Box zu Google Drive migrieren — Dateien und Ordner mit RcloneView übertragen"
authors:
  - tayson
description: "Wechsel von Box zu Google Drive? Übertragen Sie Ihr gesamtes Box-Konto inklusive Ordner, freigegebener Dateien und Archive zu Google Drive mit vollständiger Überprüfung durch RcloneView."
keywords:
  - box to google drive
  - migrate box to gdrive
  - box migration tool
  - box to google workspace
  - switch from box
  - box file transfer
  - box to google shared drive
  - box cloud migration
  - box alternative google
  - transfer box files
tags:
  - box
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu Google Drive migrieren — Dateien und Ordner mit RcloneView übertragen

> Box hat gute Dienste geleistet, aber Google Workspace ergibt jetzt mehr Sinn. Übertragen Sie alles — persönliche Dateien, freigegebene Ordner und Abteilungsarchive — zu Google Drive, ohne eine einzige Datei zu verlieren.

Box ist in Unternehmensumgebungen beliebt, aber viele Organisationen konsolidieren zu Google Workspace für eine engere Integration mit Gmail, Kalender und Docs. Die Migration muss Ordnerstrukturen erhalten, große Datenmengen bewältigen und die Vollständigkeit überprüfen. RcloneView verbindet sich nativ sowohl mit Box als auch mit Google Drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Google Drive verbinden

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and Google Drive" class="img-large img-center" />

## Migrationsprozess

### 1) Ordnerstruktur zuordnen

| Box | Google Drive |
|-----|-------------|
| Persönliche Ordner | Meine Ablage |
| Freigegebene Ordner | Geteilte Ablage |
| Abteilungsarchive | Ordner in geteilter Ablage |

### 2) Ordner für Ordner übertragen

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive" class="img-large img-center" />

### 3) Große Übertragungen außerhalb der Spitzenzeiten planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule migration" class="img-large img-center" />

### 4) Vollständigkeit überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box migration" class="img-large img-center" />

## Box-spezifische Überlegungen

- **Der Box-Dateiversionsverlauf** wird nicht übertragen — nur die aktuelle Version wird migriert
- **Box Notes** sind ein proprietäres Format — exportieren Sie diese vor der Migration
- **Freigegebene Links** werden nicht übernommen — aktualisieren Sie Lesezeichen nach der Migration
- **Große Unternehmen**: Erstellen Sie Batch-Jobs pro Abteilung für überschaubare Abschnitte

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie die Remotes Box** und **Google Drive** hinzu.
3. **Übertragen Sie in Batches** mit Überprüfung.
4. **Halten Sie Box aktiv**, während des Übergangs.

Saubere Migration, vollständige Überprüfung.

---

**Verwandte Anleitungen:**

- [Box zu SharePoint migrieren](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Dropbox Business zu Google migrieren](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
