---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "Cloud-Übertragungen beschleunigen — Multi-Threaded-Uploads und parallele Streams in RcloneView"
authors:
  - tayson
description: "Cloud-Übertragungen müssen nicht langsam sein. Erfahren Sie, wie Sie Multi-Threaded-Uploads, parallele Dateiübertragungen und Übertragungsoptimierungseinstellungen in RcloneView nutzen, um den Durchsatz zu maximieren."
keywords:
  - multi threaded cloud upload
  - parallel cloud transfer
  - speed up cloud sync
  - rclone parallel transfers
  - fast cloud upload
  - cloud transfer optimization
  - rcloneview transfer speed
  - concurrent cloud uploads
  - multi stream upload
  - maximize cloud transfer speed
tags:
  - RcloneView
  - performance
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Übertragungen beschleunigen — Multi-Threaded-Uploads und parallele Streams in RcloneView

> Das Hochladen von 500 GB zu S3, eine Datei nach der anderen, dauert Tage. Mit parallelen Übertragungen und Multi-Threaded-Uploads dauert es Stunden. So konfigurieren Sie RcloneView für maximale Geschwindigkeit.

Standardmäßig verarbeiten Cloud-Übertragungstools Dateien sequenziell und laden jede Datei in einem einzigen Stream hoch. Damit wird kaum ausgeschöpft, was Ihr Netzwerk und der Cloud-Anbieter leisten können. RcloneView, angetrieben von rclone, unterstützt sowohl parallele Dateiübertragungen (mehrere Dateien gleichzeitig) als auch Multi-Threaded-Uploads (Aufteilung großer Dateien in gleichzeitige Streams). Die richtige Konfiguration kann die Übertragungszeiten drastisch verkürzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zwei Arten von Parallelität

### Parallele Dateiübertragungen

Übertragen Sie mehrere Dateien gleichzeitig. Statt Datei 1, dann Datei 2, dann Datei 3 hochzuladen — laden Sie alle drei gleichzeitig hoch. Dies wird über die Einstellung `--transfers` gesteuert (Standard: 4).

### Multi-Threaded-Uploads einzelner Dateien

Teilen Sie eine große Datei in mehrere Teile auf und laden Sie diese gleichzeitig hoch. Eine 10-GB-Videodatei wird in Teile zerlegt, die parallel hochgeladen und am Zielort wieder zusammengesetzt werden. Dies wird über `--multi-thread-streams` gesteuert (Standard: 4).

## Konfiguration in RcloneView

### Parallele Übertragungen anpassen

Legen Sie in Ihren Job-Einstellungen oder über das Terminal von RcloneView die Anzahl der gleichzeitigen Dateiübertragungen fest:

- **4 Übertragungen** (Standard) — sicher für die meisten Situationen
- **8-16 Übertragungen** — gut für schnelle Verbindungen mit vielen kleinen Dateien
- **2-4 Übertragungen** — besser für langsame Verbindungen oder Anbieter mit strikten Ratenbegrenzungen

### Multi-Thread-Streams anpassen

Erhöhen Sie für den Upload großer Dateien die Anzahl der Streams:

- **4 Streams** (Standard) — ausgewogene Leistung
- **8-16 Streams** — optimal für große Dateien bei schnellen Verbindungen
- **1 Stream** — für Anbieter, die keine mehrteiligen Uploads unterstützen

## Die Auswirkung überwachen

Beobachten Sie die Übertragungsgeschwindigkeit in Echtzeit, um den Effekt Ihrer Änderungen zu sehen:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## Optimale Einstellungen nach Szenario

| Szenario | Übertragungen | Streams | Warum |
|----------|-----------|---------|-----|
| Viele kleine Dateien (Fotos, Dokumente) | 16 | 1 | Der Datei-Overhead dominiert; mehr parallele Dateien helfen |
| Wenige große Dateien (Videos, Backups) | 2-4 | 8-16 | Die Geschwindigkeit einzelner Dateien zählt; mehr Streams helfen |
| Gemischte Dateigrößen | 8 | 4 | Ausgewogener Ansatz |
| Langsames Netzwerk (< 50 Mbps) | 2-4 | 2-4 | Überlastung der Verbindung vermeiden |
| Schnelles Netzwerk (> 500 Mbps) | 16+ | 8-16 | Die gesamte verfügbare Bandbreite nutzen |
| Anbieter mit Ratenbegrenzung | 2-4 | 4 | Unter den API-Limits bleiben |

## Anbieterspezifische Tipps

### Google Drive
Google setzt tägliche Upload-Limits (750 GB) und API-Limits pro Sekunde. Halten Sie die Übertragungen moderat (4-8) und nutzen Sie `--tpslimit`, um unter den Ratenbegrenzungen zu bleiben.

### S3 / S3-kompatibel
S3 verträgt hohe Parallelität gut. Erhöhen Sie die Übertragungen auf 16+ und die Streams auf 8-16 für maximalen Durchsatz.

### OneDrive
OneDrive kann empfindlich auf hohe Gleichzeitigkeit reagieren. Beginnen Sie mit 4 Übertragungen und erhöhen Sie schrittweise.

### Backblaze B2
B2 verarbeitet mehrteilige Uploads gut. Verwenden Sie 4-8 Übertragungen mit 4-8 Streams.

## Das Terminal von RcloneView für die Feinabstimmung nutzen

Für fortgeschrittene Anpassungen verwenden Sie das integrierte Terminal, um rclone-Befehle mit spezifischen Flags auszuführen. Testen Sie verschiedene Konfigurationen und messen Sie die Ergebnisse mit der Echtzeitüberwachung.

## Job-Verlauf für Ergebnisse prüfen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

Vergleichen Sie die Job-Dauer vor und nach der Optimierung. Der Job-Verlauf zeigt die Gesamtzeit, die übertragenen Dateien und die durchschnittliche Geschwindigkeit.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Mit den Standardwerten beginnen** (4 Übertragungen, 4 Streams).
3. **Geschwindigkeit überwachen** während der Übertragungen.
4. **Schrittweise erhöhen**, basierend auf Ihrem Netzwerk und Anbieter.
5. **Job-Verlauf vergleichen**, um die Verbesserung zu messen.

Mehr Parallelität bedeutet schnellere Übertragungen — bis zu den Grenzen Ihres Netzwerks und Anbieters.

---

**Verwandte Anleitungen:**

- [Langsame Cloud-Uploads beheben](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Job-Verlauf und Protokolle](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
