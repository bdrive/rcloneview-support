---
slug: cloud-storage-photographers-raw-backup-rcloneview
title: "Cloud-Speicher für Fotografen — RAW-Dateien sichern, Lightroom-Kataloge synchronisieren und an Kunden liefern"
authors:
  - tayson
description: "Fotografen haben es mit riesigen RAW-Dateien zu tun und brauchen ein zuverlässiges Cloud-Backup. Erfahren Sie, wie Sie Fotos sichern, Lightroom-Kataloge synchronisieren und mit RcloneView an Kunden liefern."
keywords:
  - cloud storage photographers
  - backup raw photos cloud
  - photography cloud backup
  - lightroom cloud sync
  - photographer file management
  - raw file backup
  - photo backup cloud storage
  - photography workflow cloud
  - photographer cloud storage solution
  - backup camera raw files
tags:
  - RcloneView
  - photography
  - backup
  - cloud-storage
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Fotografen — RAW-Dateien sichern, Lightroom-Kataloge synchronisieren und an Kunden liefern

> Sie kommen von einem Hochzeits-Shooting nach Hause mit 2.000 RAW-Dateien, die zusammen 80 GB ergeben. Sie müssen noch heute Nacht gesichert werden, die besten Aufnahmen müssen bearbeitet und bis Freitag an den Kunden geliefert werden, und das Archiv muss über Jahre erhalten bleiben. So automatisieren Sie das alles.

Fotografie ist einer der speicherintensivsten kreativen Berufe. RAW-Dateien moderner Kameras liegen zwischen 25 und 100 MB pro Datei. Ein einziges Event kann Hunderte von Gigabyte erzeugen. Die meisten Fotografen jonglieren mit lokalen Laufwerken, NAS und mehreren Cloud-Konten — ohne ein einheitliches Verwaltungstool. RcloneView ändert das.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Das Speicherproblem in der Fotografie

### Speicher-Lebenszyklus

| Phase | Daten | Größe | Dauer |
|-------|------|------|----------|
| Import | Kamerakarten → lokale SSD | 50–200 GB/Shooting | Stunden |
| Bearbeitung | Lightroom/Capture One + RAW | Gleich | Tage–Wochen |
| Lieferung | JPEGs an Kunden | 2–10 GB | Nach der Bearbeitung |
| Archivierung | RAW + Bearbeitungen + Finals | 50–200 GB | Jahre |

### Was schiefgehen kann

- **Laufwerksausfall** — Ein einzelner Festplattencrash kann eine ganze Hochzeit vernichten.
- **Kein Off-Site-Backup** — Feuer, Diebstahl oder Wasserschaden zerstören lokale Kopien.
- **Kundenlieferung** — Manueller Upload zu Google Drive oder Dropbox nach jedem Auftrag.
- **Archiv-Wildwuchs** — Alte Shootings verstreut über mehrere Laufwerke ohne Organisation.

## RcloneView-Workflow für Fotografen

### 1) Verbinden Sie Ihr Speicher-Ökosystem

Fügen Sie Ihre lokalen Laufwerke, NAS und Cloud-Konten hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add photography storage remotes" class="img-large img-center" />

Typisches Setup:
- Lokale NVMe-SSD (aktive Bearbeitung).
- Synology NAS (zentraler Speicher).
- Backblaze B2 (Off-Site-Archiv).
- Google Drive (Kundenlieferung).

### 2) Sofortiges Backup nach dem Import

Führen Sie nach dem Import von den Kamerakarten einen Copy-Job von Ihrem Arbeitslaufwerk zum NAS aus:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Backup RAW files immediately" class="img-large img-center" />

### 3) Nächtliches Off-Site-Backup planen

Sichern Sie Ihr NAS jede Nacht in den Cloud-Speicher:

```
NAS → Backblaze B2 (encrypted, nightly)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly photo backup" class="img-large img-center" />

Bei 6 $/TB/Monat ist B2 auch für Multi-TB-Archive erschwinglich.

### 4) Kundenlieferung

Wenn die Bearbeitung fertig ist, kopieren Sie die finalen JPEGs in den Google-Drive- oder Dropbox-Ordner des Kunden:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deliver photos to client cloud" class="img-large img-center" />

### 5) Abgeschlossene Aufträge archivieren

Nach der Freigabe durch den Kunden verschieben Sie das gesamte Projekt in den Archivspeicher:

- Verwenden Sie **Move**, um Speicherplatz auf Ihrem Arbeitslaufwerk freizugeben.
- Das Archiv wandert auf NAS + B2 (redundante Kopien).

## Filterregeln für Fotografen

Verwenden Sie rclone-Filter, um verschiedene Dateitypen zu verwalten:

### Nur RAW-Dateien sichern

```
--include "*.cr3"
--include "*.nef"
--include "*.arw"
--include "*.raf"
--include "*.dng"
--exclude "*"
```

### Nur Finals liefern

```
--include "*/Finals/**"
--include "*/Delivery/**"
--exclude "*"
```

### Vorschauen und Cache überspringen

```
--exclude "Lightroom Catalog Previews.lrdata/**"
--exclude ".cache/**"
--exclude "Thumbs.db"
```

## Überprüfen Sie Ihre Backups

Überprüfen Sie, ob Ihr NAS und das Cloud-Archiv übereinstimmen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify photo backup completeness" class="img-large img-center" />

Bei unersetzlichen Fotos ist die Verifizierung keine Option, sondern Pflicht.

## Große Übertragungen überwachen

RAW-Dateiübertragungen sind groß. Überwachen Sie den Fortschritt:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor RAW file upload" class="img-large img-center" />

## Empfohlene Speicherarchitektur

| Speicher | Zweck | Kosten |
|---------|---------|------|
| Lokale NVMe (1–2 TB) | Aktive Bearbeitung | Einmalanschaffung |
| NAS (Synology 4-Bay) | Zentraler Speicher, lokales Archiv | Einmalig + Laufwerke |
| Backblaze B2 | Off-Site-Backup, verschlüsselt | 6 $/TB/Monat |
| Google Drive | Kundenlieferung | 10 $/Monat (2 TB) |

## Batch-Jobs für den gesamten Workflow

Automatisieren Sie den gesamten Workflow nach dem Shooting mit den v1.3 Batch-Jobs:

1. RAW vom Arbeitslaufwerk → NAS kopieren.
2. Finals vom NAS → Google Drive des Kunden kopieren.
3. RAW vom NAS → Backblaze B2 kopieren (verschlüsselt).
4. NAS mit B2 vergleichen zur Verifizierung.
5. Bei Abschluss per Slack benachrichtigen.

Ein Klick nach jedem Shooting.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Verbinden Sie Ihre Laufwerke, NAS und Cloud-Konten**.
3. **Erstellen Sie Backup- und Lieferungs-Jobs**.
4. **Planen Sie nächtliche Archiv-Backups**.
5. **Überprüfen Sie mit dem Ordnervergleich** — Ihre Fotos sind unersetzlich.

Jeder Fotograf braucht einen Backup-Plan. Automatisieren Sie ihn.

---

**Weiterführende Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Rclone-Filterregeln erklärt](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
