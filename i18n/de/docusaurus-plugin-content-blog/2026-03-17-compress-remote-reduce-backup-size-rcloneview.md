---
slug: compress-remote-reduce-backup-size-rcloneview
title: "Compress Remote — Cloud-Backup-Größe automatisch reduzieren in RcloneView"
authors:
  - tayson
description: "RcloneView unterstützt rclones Compress Remote, das Dateien vor dem Upload automatisch komprimiert, bevor sie in den Cloud-Speicher hochgeladen werden. Sparen Sie Speicherkosten und Bandbreite bei jedem Backup."
keywords:
  - rclone compress remote
  - komprimiertes Cloud-Backup
  - Cloud-Speichergröße reduzieren
  - komprimierter Cloud-Upload
  - rcloneview compress
  - Cloud-Speicherplatz sparen
  - vor Upload komprimieren
  - Cloud-Backup-Komprimierung
  - Backup-Größe reduzieren
  - rclone Komprimierung
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Compress Remote — Cloud-Backup-Größe automatisch reduzieren in RcloneView

> Ihr 500-GB-Backup könnte mit Komprimierung nur 300 GB groß sein. Der Compress Remote umhüllt jeden Cloud-Anbieter mit automatischer gzip-Komprimierung — kleinere Backups, geringere Kosten, gleiche Daten.

Die Kosten für Cloud-Speicher skalieren mit der Größe. Wenn Sie die Größe Ihrer Backups um 30-60 % reduzieren können, sparen Sie diesen Betrag jeden Monat bei der Speicherrechnung. Rclones Compress Remote bietet transparente Komprimierung — Dateien werden vor dem Upload komprimiert und beim Download dekomprimiert, ganz ohne manuelle Schritte. Mit RcloneView richten Sie dies visuell ein und verwalten komprimierte Backups zusammen mit Ihren anderen Cloud-Konten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Compress Remote funktioniert

Ein Compress Remote umhüllt einen anderen Remote (Google Drive, S3, B2 usw.) und führt automatisch Folgendes aus:

1. **Komprimiert Dateien** mit gzip vor dem Upload
2. **Dekomprimiert Dateien** transparent beim Download
3. **Überspringt bereits komprimierte Formate** (jpg, mp4, zip usw.), um CPU-Ressourcen nicht zu verschwenden

Sie arbeiten mit dem Compress Remote wie mit jedem anderen Remote — durchsuchen, kopieren, synchronisieren — aber die Dateien am Ziel werden komprimiert gespeichert.

## Komprimierungseinsparungen nach Dateityp

| Dateityp | Typische Komprimierung | Beispiel |
|-----------|-------------------|---------|
| Textdateien, CSV, Logs | 60-90 % kleiner | 100 MB → 10-40 MB |
| Office-Dokumente (docx, xlsx) | 5-15 % kleiner | Bereits etwas komprimiert |
| Datenbank-Dumps | 50-80 % kleiner | 1 GB → 200-500 MB |
| Quellcode | 60-80 % kleiner | 500 MB → 100-200 MB |
| Fotos (JPG, PNG) | ~0 % | Bereits komprimiert |
| Video (MP4, MKV) | ~0 % | Bereits komprimiert |
| ZIP/RAR-Archive | ~0 % | Bereits komprimiert |

Am besten geeignet für: textlastige Daten, Logs, Datenbank-Backups, Quellcode, unkomprimierte Datenformate.
Nicht sinnvoll für: Fotos, Videos und bereits komprimierte Archive.

## Einen Compress Remote einrichten

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

Erstellen Sie einen Compress Remote, der Ihren bestehenden Storage-Remote umhüllt. Verwenden Sie anschließend den Compress Remote als Backup-Ziel anstelle des ursprünglichen Remotes.

## Anwendungsfälle

### Log-Backups komprimieren

Serverprotokolle lassen sich extrem gut komprimieren (80-90 %). Ein 50-GB-Log-Archiv wird im Cloud-Speicher zu 5-10 GB.

### Kosten für Datenbank-Backups senken

Tägliche Datenbank-Dumps lassen sich sehr gut komprimieren. Komprimieren Sie sie vor dem Upload, um die Rechnung für den Cloud-Speicher zu senken.

### Quellcode-Archive

Entwicklungsprojekte mit Tausenden von Textdateien profitieren erheblich von der Komprimierung.

### Komprimierte Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## Wichtige Hinweise

- **CPU-Auslastung**: Die Komprimierung beansprucht beim Upload und Download CPU-Leistung. Moderne CPUs bewältigen dies problemlos.
- **Nicht alle Dateien komprimieren sich**: bereits komprimierte Formate (JPG, MP4, ZIP) werden unkomprimiert durchgereicht.
- **Transparenter Zugriff**: Dateien erscheinen beim Durchsuchen über den Compress Remote normal — die Dekomprimierung erfolgt automatisch.
- **Kombiniert mit Verschlüsselung**: Sie können Compress- und Crypt-Remotes übereinanderlegen für komprimierte UND verschlüsselte Backups.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihren Cloud-Speicher** als normalen Remote hinzu.
3. **Erstellen Sie einen Compress Remote**, der ihn umhüllt.
4. **Verwenden Sie den Compress Remote** als Backup-Ziel.
5. **Genießen Sie kleinere Backups** und geringere Kosten.

Kleinere Backups, niedrigere Rechnungen, gleiche Daten.

---

**Verwandte Anleitungen:**

- [Versteckte Cloud-Speicherkosten](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Virtuelle Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
