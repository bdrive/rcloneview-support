---
slug: find-remove-duplicate-files-cloud-storage-rcloneview
title: "Duplikate in Cloud-Speichern finden und entfernen — Speicherplatz sparen mit RcloneView"
authors:
  - tayson
description: "Doppelte Dateien verschwenden Cloud-Speicherplatz und Geld. Erfahren Sie, wie Sie Duplikate über Google Drive, OneDrive, S3 und andere Clouds hinweg mit dem Ordnervergleich von RcloneView identifizieren."
keywords:
  - find duplicate files cloud storage
  - remove duplicate files google drive
  - cloud storage duplicate finder
  - free up cloud storage space
  - duplicate files onedrive
  - cloud storage cleanup
  - find duplicates across clouds
  - reduce cloud storage cost
  - cloud deduplication tool
  - clean up google drive
tags:
  - duplicates
  - cleanup
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Duplikate in Cloud-Speichern finden und entfernen — Speicherplatz sparen mit RcloneView

> Sie nutzen Cloud-Speicher schon seit Jahren. Dateien wurden kopiert, synchronisiert, verschoben und über mehrere Konten hinweg geteilt. Jetzt bezahlen Sie für dieselben Dateien, die an drei verschiedenen Orten gespeichert sind. Kommt Ihnen das bekannt vor?

Duplikate sind die versteckten Kosten von Multi-Cloud-Workflows. Eine Datei wird zum Teilen auf Google Drive kopiert, per IT-Richtlinie auf OneDrive gesichert und von einem längst vergessenen Sync-Skript auf S3 archiviert. Jede Kopie kostet Geld. Der Ordnervergleich von RcloneView hilft Ihnen, diese Duplikate zu identifizieren und zu entscheiden, welche Kopien Sie behalten möchten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Das Duplikat-Problem

### Wie Duplikate entstehen

- **Manuelle Kopien** — „Ich kopiere das einfach zur Sicherheit auf mein anderes Drive."
- **Mehrere Sync-Tools** — Verschiedene Backup-Tools kopieren dieselben Dateien in unterschiedliche Clouds.
- **Team-Zusammenarbeit** — Freigegebene Ordner, die Dateien über die Drives mehrerer Teammitglieder hinweg duplizieren.
- **Migrationsreste** — Dateien bleiben nach einer Migration auf der alten Cloud zurück.
- **Herunterladen und erneutes Hochladen** — Aus einer Cloud herunterladen und in eine andere hochladen, wobei das Original vergessen wird.

### Reale Kostenauswirkung

Wenn Sie 500 GB an echten Daten, aber 200 GB an Duplikaten über Ihre Clouds verteilt haben:

| Szenario | Genutzter Speicher | Monatliche Kosten |
|----------|-------------|-------------|
| Mit Duplikaten | 700 GB × 3 Clouds | $30–70/Monat |
| Nach Bereinigung | 500 GB × 1 primär + 1 Backup | $10–25/Monat |

Das sind mehrere hundert Dollar Ersparnis pro Jahr.

## Duplikate mit dem Ordnervergleich finden

Der Ordnervergleich von RcloneView zeigt genau, welche Dateien an beiden Orten existieren, welche nur auf einer Seite vorhanden sind und welche unterschiedliche Versionen haben:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders to find duplicates" class="img-large img-center" />

### Schritt 1: Zwei Cloud-Konten vergleichen

Öffnen Sie Ihr Google Drive links und OneDrive rechts. Navigieren Sie zu ähnlichen Ordnern und führen Sie einen Vergleich durch:

- **Dateien in beiden** — Das sind Ihre Duplikate. Vergleichen Sie Größe und Datum, um zu prüfen, ob sie identisch sind.
- **Nur links** — Dateien, die nur in Google Drive vorhanden sind.
- **Nur rechts** — Dateien, die nur in OneDrive vorhanden sind.

### Schritt 2: Mehrere Paare vergleichen

Wiederholen Sie den Vergleich für jedes Cloud-Paar:

- Google Drive vs. OneDrive
- Google Drive vs. S3
- OneDrive vs. Dropbox
- Jede beliebige Kombination

### Schritt 3: Entscheiden, was behalten wird

Legen Sie für jeden Satz von Duplikaten eine einzige verbindliche Quelle fest:

- **Aktive Dateien** → Auf Google Drive oder OneDrive behalten (je nachdem, was Ihr Team täglich nutzt).
- **Archivkopien** → Auf günstigerem Speicher behalten (Backblaze B2, S3 Glacier).
- **Echte Duplikate** → Aus allen Speicherorten bis auf einen entfernen.

## Künftige Duplikate vermeiden

### Synchronisation statt Kopieren verwenden

**Kopieren** fügt Dateien hinzu, ohne zu prüfen, was bereits vorhanden ist. **Synchronisation** stellt sicher, dass das Ziel die Quelle spiegelt — es sammeln sich keine zusätzlichen Dateien an.

### Auf ein Backup-Ziel konsolidieren

Statt mehrere Tools zu verwenden, die auf unterschiedliche Clouds sichern, richten Sie mit RcloneView einen einzigen, geplanten Backup-Workflow ein:

```
Primary (Google Drive) → Backup (Backblaze B2)
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Set up consolidated backup schedule" class="img-large img-center" />

### Regelmäßige Vergleichsprüfungen

Planen Sie eine monatliche Vergleichsprüfung zwischen Ihren Clouds. Schon 5 Minuten Überprüfung können die Ansammlung von Duplikaten frühzeitig erkennen.

## Bereinigungs-Workflow

1. **Vergleichen** Sie Ihre Cloud-Konten mit dem Ordnervergleich.
2. **Identifizieren** Sie Dateien, die an mehreren Orten existieren.
3. **Überprüfen** Sie, ob sie wirklich identisch sind (gleiche Größe, gleicher Inhalt).
4. **Wählen** Sie aus, welcher Speicherort die Datei behält.
5. **Entfernen** Sie Duplikate von den anderen Speicherorten.
6. **Richten Sie Sync-Jobs ein**, um erneute Ansammlung zu verhindern.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Alle Ihre Cloud-Konten hinzufügen** als Remotes.
3. **Ordnervergleiche durchführen** zwischen Cloud-Paaren.
4. **Duplikate bereinigen**, um Speicherplatz freizugeben und Kosten zu senken.
5. **Richtige Sync-Jobs einrichten**, um künftige Duplizierung zu verhindern.

Hören Sie auf, dieselbe Datei dreimal zu bezahlen.

---

**Weitere Anleitungen:**

- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Cloud-Speicher voll? Speicherplatz freigeben](https://rcloneview.com/support/blog/cloud-storage-full-free-up-space-multiple-clouds-rcloneview)

<CloudSupportGrid />
