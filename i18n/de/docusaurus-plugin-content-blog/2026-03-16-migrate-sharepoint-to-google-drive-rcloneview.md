---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "SharePoint zu Google Drive migrieren — Dokumentbibliotheken mit RcloneView übertragen"
authors:
  - tayson
description: "Wechsel von Microsoft 365 zu Google Workspace? Übertragen Sie SharePoint-Dokumentbibliotheken und OneDrive-Dateien mit RcloneView zu Google Drive und geteilten Ablagen."
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SharePoint zu Google Drive migrieren — Dokumentbibliotheken mit RcloneView übertragen

> Ihr Unternehmen wechselt von Microsoft 365 zu Google Workspace. SharePoint-Bibliotheken, persönliche OneDrive-Dateien und jahrelange Teamdokumente müssen unversehrt in Google Drive landen. So geht's.

Die Migration von SharePoint zu Google Drive ist das Gegenstück zu einer der häufigsten Cloud-Migrationen in Unternehmen. Ob aus Kostengründen, wegen Plattformpräferenzen oder organisatorischer Veränderungen – die Herausforderung bleibt dieselbe: Tausende Dateien in strukturierten Dokumentbibliotheken müssen sauber zu Google Drive und geteilten Ablagen übertragen werden. RcloneView beherrscht beide Seiten nativ.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migration planen

### Struktur-Zuordnung

| SharePoint | Google Workspace |
|-----------|-----------------|
| Dokumentbibliotheken | Geteilte Ablagen |
| OneDrive (persönlich) | Meine Ablage (persönlich) |
| Teamsites | Geteilte Ablage pro Team |
| Freigegebene Dateien | Ordner in geteilter Ablage |

### Beide Plattformen verbinden

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

Fügen Sie Ihre SharePoint-/OneDrive- und Google-Drive-Konten in RcloneView hinzu.

## Migrationsschritte

### 1) Dokumentbibliotheken übertragen

Öffnen Sie SharePoint in einem Bereich und die geteilte Google-Ablage im anderen. Übertragen Sie Bibliothek für Bibliothek:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) Persönliche OneDrive-Dateien migrieren

Die OneDrive-Dateien jedes Benutzers wandern in dessen Google Drive „Meine Ablage".

### 3) Vollständigkeit prüfen

Der Ordnervergleich bestätigt, dass jede Datei übertragen wurde:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) Große Migrationen über Nacht planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) Fortschritt überwachen

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## Wichtige Hinweise

- **Dateiformatkonvertierung**: Google kann Office-Dateien nativ anzeigen; die Umwandlung in das Google-Docs-Format ist optional
- **Berechtigungszuordnung**: Dateiberechtigungen werden nicht automatisch übertragen — planen Sie die Berechtigungen der geteilten Ablage separat
- **Pfadlänge**: SharePoint erlaubt längere Pfade als manche erwarten; prüfen Sie die Kompatibilität
- **Große Bibliotheken**: In Stapel nach Abteilung oder Projekt aufteilen

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **SharePoint** und **Google Drive** als Remotes hinzufügen.
3. **Bibliotheken den geteilten Ablagen zuordnen**.
4. **In Stapeln übertragen und prüfen**.

Sauberer Plattformwechsel, kein Datenverlust.

---

**Verwandte Anleitungen:**

- [Google Workspace zu Microsoft 365 migrieren](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [Cloud-Migration ohne Ausfallzeit](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
