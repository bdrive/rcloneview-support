---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "Cloud-Synchronisation bei 99% hängengeblieben oder eingefroren beheben — Fehlerbehebung bei stockenden Übertragungen in RcloneView"
authors:
  - tayson
description: "Ihre Cloud-Synchronisation läuft schon seit Stunden, scheint aber festzuhängen. Der Fortschritt zeigt 99% an und wird nicht abgeschlossen. Hier erfahren Sie, was stockende Übertragungen verursacht und wie Sie sie beheben."
keywords:
  - Cloud-Synchronisation hängt
  - Cloud-Übertragung eingefroren
  - Synchronisation bei 99 Prozent hängengeblieben
  - Cloud-Upload eingefroren
  - rclone-Übertragung hängt
  - Cloud-Synchronisation wird nicht abgeschlossen
  - stockende Cloud-Übertragung beheben
  - Cloud-Synchronisation Timeout
  - Cloud-Upload hängt
  - rclone-Synchronisation eingefroren
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Synchronisation bei 99% hängengeblieben oder eingefroren beheben — Fehlerbehebung bei stockenden Übertragungen in RcloneView

> Die Fortschrittsanzeige zeigt 99% an. Und das schon seit 45 Minuten. Läuft sie noch? Hängt sie fest? Sollten Sie abbrechen? So diagnostizieren und beheben Sie stockende Cloud-Übertragungen.

Stockende Cloud-Übertragungen gehören zu den frustrierendsten Problemen bei der Cloud-Synchronisation. Der Job scheint zu laufen, die Fortschrittsanzeige bewegt sich kaum, und Sie wissen nicht, ob Sie warten oder neu starten sollten. Die gute Nachricht: Stockende Übertragungen haben fast immer eine konkrete, behebbare Ursache.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Ursachen

### 1) Große Datei kurz vor dem Abschluss

Der häufigste „Fehlalarm". Eine 50-GB-Datei bei 98% hat noch 1 GB übrig. Bei 10 MB/s sind das weitere 100 Sekunden — aber die Fortschrittsanzeige bewegt sich kaum, weil sie die Dateianzahl misst, nicht die Bytes.

**Lösung**: Beobachten Sie die Anzeige der Übertragungsgeschwindigkeit. Wenn noch Bytes fließen, funktioniert die Übertragung — sie ist nur bei der letzten großen Datei langsam.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) API-Ratenbegrenzung (Throttling)

Google Drive, OneDrive und andere Anbieter drosseln Übertragungen, wenn Sie API-Limits erreichen. Die Übertragung wird extrem langsam, schlägt aber nicht fehl.

**Lösung**: Reduzieren Sie gleichzeitige Übertragungen. Fügen Sie `--tpslimit` über das integrierte Terminal hinzu.

### 3) Netzwerk-Timeout bei großen Dateien

Manche Anbieter trennen lang laufende Uploads stillschweigend. Die Übertragung wirkt aktiv, aber es werden keine Daten mehr übertragen.

**Lösung**: Konfigurieren Sie Timeouts in Ihren Remote-Einstellungen. Verwenden Sie `--timeout`, um Stockungen früher zu erkennen.

### 4) Datei durch einen anderen Prozess gesperrt

Die Quelldatei ist in einer anderen Anwendung geöffnet. Die Übertragung wartet auf Zugriff.

**Lösung**: Schließen Sie Anwendungen, die die Datei möglicherweise nutzen, oder schließen Sie aktiv verwendete Dateien mit Filtern aus.

### 5) Verarbeitung auf Anbieterseite

Manche Anbieter verarbeiten hochgeladene Dateien (Virenscan, Indizierung), bevor sie den Abschluss bestätigen. Dadurch entsteht eine Lücke zwischen Upload-Abschluss und Bestätigung.

**Lösung**: Warten Sie. Das löst sich in der Regel nach 1-5 Minuten von selbst.

### 6) Speichererschöpfung

Sehr große Übertragungslisten (Millionen von Dateien) können den verfügbaren Speicher erschöpfen, was den Prozess drastisch verlangsamt.

**Lösung**: Teilen Sie die Übertragung nach Ordnern in kleinere Batches auf.

## Diagnoseschritte

### Job-Verlauf prüfen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### Terminal für ausführliche Ausgabe nutzen

Führen Sie denselben Vorgang über das Terminal von RcloneView mit dem Flag `-vv` aus, um detaillierte Diagnoseausgaben zu erhalten.

### Abbrechen und erneut ausführen

Wenn die Übertragung wirklich feststeckt, brechen Sie den Job ab und führen Sie ihn erneut aus. RcloneView überspringt bereits übertragene Dateien und setzt an der Stelle fort, an der es gestockt hat.

## Vorbeugung

- **Angemessene Timeouts festlegen** in der Remote-Konfiguration
- **Moderate Parallelität nutzen** (4-8 Übertragungen), um Ratenbegrenzungen zu vermeiden
- **Große Jobs aufteilen** in kleinere Batches
- **Wiederholungen einplanen** — wenn ein nächtlicher Job stockt, holt ein zweiter geplanter Lauf den Rückstand auf

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Übertragungsgeschwindigkeit prüfen** — wenn Bytes fließen, funktioniert es.
3. **Parallelität reduzieren**, falls die Rate begrenzt wird.
4. **Abbrechen und erneut ausführen**, falls es wirklich feststeckt.

99% abgeschlossen und dann hängengeblieben ist fast immer die letzte große Datei, die langsam fertig wird.

---

**Weiterführende Anleitungen:**

- [Langsame Cloud-Uploads beheben](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Fehlgeschlagene Übertragungen fortsetzen](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [Cloud-API-Ratenbegrenzungen erklärt](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
