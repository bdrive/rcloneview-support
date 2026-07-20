---
slug: mount-cloud-storage-local-drive-guide-rcloneview
title: "Cloud-Speicher als lokales Laufwerk einbinden — Der vollständige Leitfaden zur Nutzung von Google Drive, S3 und OneDrive wie lokale Ordner"
authors:
  - tayson
description: "Greifen Sie auf Google Drive, AWS S3, OneDrive und über 70 Cloud-Anbieter wie auf lokale Laufwerke auf Ihrem Computer zu. Der vollständige Leitfaden zum Einbinden von Cloud-Speicher mit RcloneView."
keywords:
  - Cloud-Speicher lokales Laufwerk einbinden
  - Google Drive lokal einbinden
  - S3 lokales Laufwerk einbinden
  - OneDrive lokalen Ordner einbinden
  - Cloud-Speicher als lokales Laufwerk
  - rclone Mount-Leitfaden
  - Cloud-Laufwerksbuchstaben zuweisen
  - Cloud-Speicher als Netzlaufwerk
  - Dropbox lokal einbinden
  - virtuelles Laufwerk Cloud-Speicher
tags:
  - RcloneView
  - mount
  - cloud-storage
  - feature
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher als lokales Laufwerk einbinden — Der vollständige Leitfaden zur Nutzung von Google Drive, S3 und OneDrive wie lokale Ordner

> Was wäre, wenn Ihr Google Drive, Ihr S3-Bucket oder Ihr OneDrive als gewöhnlicher Ordner auf Ihrem Computer erscheinen würde? Öffnen Sie Dateien in beliebigen Anwendungen, speichern Sie direkt in die Cloud und durchsuchen Sie alles in Ihrem Dateimanager — ganz ohne Browser.

Das Einbinden von Cloud-Speicher als lokales Laufwerk verwandelt jeden Cloud-Anbieter in etwas, das aussieht und sich anfühlt wie ein USB-Laufwerk oder eine Netzwerkfreigabe auf Ihrem Computer. Öffnen Sie Google-Drive-Dateien in Photoshop. Speichern Sie Excel-Berichte direkt auf S3. Durchsuchen Sie Ihre Dropbox im Finder. RcloneView macht das mit über 70 Cloud-Anbietern möglich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was bedeutet Cloud-Mounting?

Wenn Sie Cloud-Speicher „einbinden" (mounten), erstellt Ihr Betriebssystem ein virtuelles Laufwerk, das Ihr Cloud-Konto abbildet. Die Dateien erscheinen in Ihrem Dateimanager (Finder, Explorer, Nautilus) wie jedes andere Laufwerk. Im Hintergrund übernimmt rclone die API-Aufrufe zum Lesen und Schreiben von Dateien.

### So funktioniert es

```
Ihre App → Lokaler Mount-Punkt → rclone → Cloud-API → Cloud-Speicher
```

Wenn Sie eine Datei öffnen, lädt rclone sie bei Bedarf herunter. Wenn Sie speichern, lädt rclone die Änderungen hoch. Für Ihre Anwendungen ist das vollkommen transparent.

## Einbinden mit RcloneView

### Über den Remote Explorer

Klicken Sie mit der rechten Maustaste auf einen Remote und wählen Sie Mount:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from remote explorer" class="img-large img-center" />

### Über den Mount Manager

Nutzen Sie den Mount Manager für mehr Kontrolle über die Mount-Einstellungen:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager interface" class="img-large img-center" />

## Plattformspezifische Einrichtung

### Windows

Unter Windows erscheint eingebundener Cloud-Speicher als Laufwerksbuchstabe (z. B. `G:` für Google Drive, `S:` für S3).

**Voraussetzungen:**
- WinFsp (Windows File System Proxy) — RcloneView kann dies für Sie installieren.

Nach dem Einbinden erscheint das Cloud-Laufwerk im Explorer neben Ihren lokalen Laufwerken. Jede Windows-Anwendung kann davon lesen und darauf schreiben.

### macOS

Unter macOS erscheint eingebundener Speicher unter `/Volumes/` und in der Finder-Seitenleiste.

**Voraussetzungen:**
- macFUSE — Download unter macfuse.io.

Nach dem Einbinden erscheint Ihr Cloud-Speicher als Volume im Finder.

### Linux

Unter Linux erscheint eingebundener Speicher an dem von Ihnen gewählten Mount-Punkt (z. B. `/mnt/gdrive`).

**Voraussetzungen:**
- FUSE 3 — `sudo apt install fuse3` unter Ubuntu/Debian.

## Was Sie mit eingebundenen Clouds tun können

### Cloud-Dateien in beliebigen Anwendungen öffnen

- Eine Google-Drive-Tabelle in LibreOffice bearbeiten.
- S3-Bilder in Photoshop öffnen.
- Mediendateien von OneDrive in VLC abspielen.
- Skripte gegen Dateien auf Dropbox ausführen.

### Direkt in die Cloud speichern

Jeder „Speichern unter"-Dialog in jeder Anwendung kann auf Ihr eingebundenes Cloud-Laufwerk speichern. Kein separater Upload-Schritt nötig.

### Automatisierung mit Skripten

Eingebundener Cloud-Speicher funktioniert mit jedem Kommandozeilen-Tool:

```bash
# Copy local backups to mounted S3
cp /backups/database.sql /mnt/s3-backup/

# Process files from mounted Google Drive
python analyze.py /mnt/gdrive/reports/*.csv
```

### Im Dateimanager durchsuchen

Erkunden Sie Ihren Cloud-Speicher genauso, wie Sie lokale Dateien durchsuchen — mit Ordnern, Suche und Vorschau.

## Performance-Tipps

### Caching

Aktivieren Sie VFS-Caching (Virtual File System) für bessere Performance:

- **Nur-Lese-Workloads**: Minimales Caching reicht aus.
- **Lese-Schreib-Workloads**: Aktivieren Sie vollständiges Caching für einen flüssigeren Ablauf.
- **Medien-Streaming**: Nutzen Sie Read-Ahead-Caching.

### Puffergröße

Erhöhen Sie den Puffer für schnelleres Streaming großer Dateien. Der Standardwert funktioniert für die meisten Dateien, aber die Videowiedergabe profitiert von größeren Puffern.

### Verzeichnis-Caching

Bei Verzeichnissen mit Tausenden von Dateien aktivieren Sie das Verzeichnis-Caching, um wiederholte API-Aufrufe zu vermeiden. Das lässt das Durchsuchen schneller wirken.

## Mehrere Clouds gleichzeitig einbinden

Binden Sie alle Ihre Clouds auf einmal ein:

| Cloud | Mount-Punkt (Windows) | Mount-Punkt (Linux) |
|-------|----------------------|-------------------|
| Google Drive | `G:` | `/mnt/gdrive` |
| OneDrive | `O:` | `/mnt/onedrive` |
| AWS S3 | `S:` | `/mnt/s3` |
| Dropbox | `D:` | `/mnt/dropbox` |
| Backblaze B2 | `B:` | `/mnt/b2` |

Mit allen eingebundenen Clouds wird Ihr Dateimanager zu einer einheitlichen Ansicht Ihres gesamten Speichers.

## Mount vs. Synchronisation: Wann Sie was verwenden sollten

| Szenario | Mount verwenden | Synchronisation verwenden |
|----------|:---------:|:--------:|
| Gelegentliches Öffnen von Dateien | ✅ | ❌ |
| Offline arbeiten | ❌ | ✅ |
| Streaming großer Mediendateien | ✅ (mit Cache) | ❌ |
| Vollständige lokale Kopie benötigt | ❌ | ✅ |
| App-Integration | ✅ | ❌ |
| Backup/Archivierung | ❌ | ✅ |

**Mount** eignet sich am besten, wenn Sie On-Demand-Zugriff wünschen, ohne alles herunterzuladen. **Synchronisation** eignet sich am besten, wenn Sie eine vollständige lokale Kopie für Offline-Arbeit oder Backup benötigen.

## Häufige Probleme

### „Mount point not found"

Erstellen Sie zunächst das Mount-Punkt-Verzeichnis (Linux/macOS):

```bash
sudo mkdir -p /mnt/gdrive
```

Wählen Sie unter Windows einen unbenutzten Laufwerksbuchstaben.

### Langsame Dateiauflistung

Große Verzeichnisse (10.000+ Dateien) können beim ersten Zugriff etwas Zeit benötigen. Aktivieren Sie das Verzeichnis-Caching, um nachfolgende Auflistungen zu beschleunigen.

### Anwendungskompatibilität

Die meisten Anwendungen funktionieren mit eingebundenen Laufwerken. Einige Anwendungen, die schnellen Direktzugriff benötigen (Datenbanken, Videoeditoren mit großen Projekten), performen jedoch möglicherweise besser mit synchronisierten lokalen Kopien.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **FUSE installieren** (macFUSE unter macOS, WinFsp unter Windows, fuse3 unter Linux).
3. **Ihre Cloud-Remotes hinzufügen**.
4. **Einbinden** über den Remote Explorer oder den Mount Manager.
5. **Auf Ihre Clouds zugreifen** in Finder, Explorer oder Nautilus wie auf jedes andere Laufwerk.

Ihr Cloud-Speicher, Ihr Dateimanager. Kein Browser-Tab erforderlich.

---

**Verwandte Leitfäden:**

- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
