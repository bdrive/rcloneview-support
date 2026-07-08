---
slug: vfs-cache-mount-performance-rcloneview
title: "VFS-Cache — Mount-Performance für Cloud-Laufwerke in RcloneView steigern"
authors:
  - tayson
description: "Konfigurieren Sie VFS-Cache-Modi in RcloneView, um die Performance eingebundener Cloud-Laufwerke zu verbessern. Lernen Sie die Cache-Strategien Minimal, Writes und Full für Ihren Workflow kennen."
keywords:
  - VFS-Cache
  - Mount-Performance
  - Cloud-Laufwerk-Geschwindigkeit
  - rclone-Cache
  - VFS-Modi
  - Cache-Optimierung
  - eingebundener Cloud-Speicher
  - Disk-Cache-Strategie
  - Performance-Tuning
  - Dateizugriffsoptimierung
tags:
  - RcloneView
  - vfs
  - mount
  - performance
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# VFS-Cache — Mount-Performance für Cloud-Laufwerke in RcloneView steigern

> Eingebundene Cloud-Laufwerke fühlen sich standardmäßig langsam an – VFS-Caching in RcloneView tauscht Festplattenspeicher gegen Geschwindigkeit und ermöglicht Ihnen, mit lokaler Laufwerksgeschwindigkeit zu arbeiten.

Wenn Sie ein Cloud-Laufwerk (Google Drive, Dropbox, AWS S3) über RcloneView einbinden (mount), läuft jeder Dateizugriff über das Netzwerk. Das funktioniert, fühlt sich aber träge an – das Öffnen eines Dokuments dauert ein bis zwei Sekunden, das Auflisten von Ordnern stockt, und das Lesen von Dateien wirkt ausgebremst. Der VFS-Cache löst dieses Problem, indem häufig genutzte Dateien lokal zwischengespeichert werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist der VFS-Cache?

Der VFS-Cache (Virtual File System) speichert kürzlich aufgerufene Dateien und Ordner-Metadaten auf Ihrer lokalen Festplatte. Wenn Sie eine Datei von einem eingebundenen Cloud-Laufwerk öffnen, prüft RcloneView zunächst den Cache – sofortiger Zugriff, wenn sie dort vorhanden ist, sonst ein Netzwerkabruf. Während Sie arbeiten, wächst der Cache; ältere Einträge werden verdrängt, um Platz zu schaffen.

Diese einfache Strategie eliminiert die Netzwerklatenz bei gängigen Vorgängen.

## VFS-Cache-Modi

RcloneView unterstützt drei Cache-Modi, die jeweils Geschwindigkeit und Festplattennutzung gegeneinander abwägen:

### Modus 1: Aus (Kein Cache)
Jeder Zugriff läuft über das Netzwerk. Am sichersten für dynamische Dateien, am langsamsten bei wiederholtem Zugriff. Verwenden Sie diesen Modus nur, wenn Festplattenspeicher knapp ist oder Cache-Konflikte relevant sind.

### Modus 2: Minimal-Cache
Speichert Datei-Metadaten (Namen, Größen) und kürzlich geöffnete Dateien zwischen. Schnell für Ordnernavigation und wiederholte Lesevorgänge. Benötigt minimalen Festplattenspeicher – typischerweise unter 1 GB für die meisten Workflows.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView remote explorer and mount interface" width="600" />

**Am besten geeignet für**: Dokumentenbearbeitung, Foto-Browsing, regelmäßigen Dateizugriff auf Rechnern mit begrenztem Speicherplatz.

### Modus 3: Writes-Cache
Wie Minimal, speichert aber zusätzlich Schreibvorgänge zwischen. Gerade geänderte Dateien bleiben lokal, bevor die Hintergrund-Synchronisation erfolgt. Beschleunigt Workflows mit häufigen Schreibvorgängen erheblich.

**Am besten geeignet für**: Content-Erstellung, Videobearbeitung, umfangreiche Dateioperationen – hohes Änderungsvolumen vor der Cloud-Synchronisation.

### Modus 4: Full-Cache
Aggressives Caching – alle aufgerufenen Dateien werden dauerhaft zwischengespeichert, bis sie manuell gelöscht werden. Am schnellsten bei wiederholtem Zugriff, größter Festplatten-Fußabdruck. Erfordert manuelle Cache-Verwaltung.

**Am besten geeignet für**: Archivierte Daten, lesehastige Workflows, Rechner mit reichlich Festplattenspeicher.

## VFS-Cache in RcloneView konfigurieren

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView cloud-to-cloud transfer configuration" width="600" />

Öffnen Sie RcloneView und navigieren Sie zu einer Mount-Konfiguration:

1. Wählen Sie Ihr Cloud-Remote aus (z. B. Google Drive)
2. Gehen Sie zu **Erweiterte Einstellungen** → **VFS-Cache**
3. Wählen Sie den Cache-Modus: Minimal, Writes oder Full
4. Legen Sie das Cache-Verzeichnis fest (Standard: `/tmp/rcloneview-cache` unter Linux, `%TEMP%\rcloneview-cache` unter Windows)
5. Konfigurieren Sie das Cache-Größenlimit (z. B. 10 GB) – RcloneView entfernt bei Überschreitung automatisch alte Dateien
6. Aktivieren Sie das Cache-Backend, wenn Sie für zusätzliche Geschwindigkeit eine lokale SSD nutzen

Übernehmen und neu einbinden – die Performance verbessert sich sofort.

## Best Practices für das Cache-Verzeichnis

- **Cache auf schnellem Speicher platzieren**: SSD gegenüber HDD bevorzugen
- **Vom System trennen**: Eine dedizierte Partition verwenden, um ein Vollaufen des OS-Laufwerks zu vermeiden
- **Festplattennutzung überwachen**: Cache-Größe regelmäßig prüfen; Limit erhöhen, wenn häufig Einträge verdrängt werden
- **Regelmäßig bereinigen**: Alte Caches löschen, wenn ein Remote nicht mehr genutzt wird (sicher – der Cache baut sich neu auf)

## Reale Performance-Gewinne

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView monitoring and performance tracking" width="600" />

Ohne Cache dauert das Auflisten eines 50-MB-Ordners 2–3 Sekunden. Mit Minimal-Cache ist der zweite Zugriff sofort erledigt. Schreiben auf ein eingebundenes Laufwerk? Mit aktiviertem Writes-Cache erreichen Sie lokale Festplattengeschwindigkeit (Millisekunden) statt Netzwerklatenz (Sekunden).

Kompromiss: Je nach Workflow werden 5–50 GB Festplattenspeicher benötigt. Für die meisten Nutzer lohnt sich das.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen neuen Mount für Ihren Cloud-Speicher.
3. Aktivieren Sie in den Erweiterten Einstellungen den Minimal-Cache (konservativ starten).
4. Neu einbinden und testen – Dateien öffnen, Ordner durchsuchen, Geschwindigkeitsgewinn einschätzen.
5. Bei Workflows mit vielen Schreibvorgängen auf den Writes-Cache-Modus upgraden.
6. Cache-Trefferrate im Statistik-Panel überwachen; Größenlimits bei Bedarf anpassen.

Der VFS-Cache ist eines der versteckten Power-Features von RcloneView – kleine Anpassung, massiver Geschwindigkeitsgewinn.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher als lokales Laufwerk einbinden — Komplettanleitung in RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Langsame Cloud-Übertragungen beheben — Synchronisation in RcloneView beschleunigen](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Alias-Remote — Verknüpfungen und benutzerdefinierte Pfade in RcloneView erstellen](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
