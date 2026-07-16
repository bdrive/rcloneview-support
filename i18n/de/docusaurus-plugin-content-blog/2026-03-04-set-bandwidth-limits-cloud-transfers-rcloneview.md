---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "So legen Sie Bandbreitenlimits für Cloud-Übertragungen in RcloneView fest"
authors:
  - tayson
description: "Steuern Sie, wie viel Bandbreite Cloud-Synchronisations- und Backup-Jobs nutzen — verhindern Sie Netzwerkverlangsamungen während der Arbeitszeit und maximieren Sie die Geschwindigkeit über Nacht mit den Drosselungseinstellungen von RcloneView."
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - RcloneView
  - cloud-storage
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So legen Sie Bandbreitenlimits für Cloud-Übertragungen in RcloneView fest

> Läuft während der Arbeitszeit eine riesige Cloud-Synchronisation? Ihr Team wird es bemerken. So drosseln Sie die Bandbreite, damit Backups laufen, ohne das Internet für alle lahmzulegen.

Cloud-Synchronisations- und Backup-Jobs können Ihre Netzwerkverbindung auslasten — und dabei Videoanrufe, Websurfen und andere wichtige Arbeiten verlangsamen. Das ist besonders problematisch in Büroumgebungen, Homeoffices mit gemeinsam genutzten Verbindungen oder beim Synchronisieren von Terabytes an Daten. Mit RcloneView können Sie präzise Bandbreitenlimits festlegen, damit Ihre Cloud-Übertragungen im Hintergrund laufen, ohne Ihr Netzwerk zu stören.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Bandbreitenlimits wichtig sind

### Gemeinsam genutzte Netzwerke

In einem Büro mit einer 100-Mbit/s-Verbindung kann ein einziger ungedrosselter Cloud-Synchronisationsjob 80+ Mbit/s verbrauchen — sodass für den Rest des Teams fast nichts übrig bleibt.

### Homeoffice

Videoanrufe benötigen ~5–10 Mbit/s. Wenn Ihr Backup-Job die gesamte verfügbare Bandbreite beansprucht, sinkt Ihr Zoom-Anruf auf Kartoffelqualität.

### Fair-Use-Richtlinien der Internetanbieter

Manche Internetanbieter drosseln oder berechnen zusätzliche Kosten bei anhaltend hoher Bandbreitennutzung. Die Begrenzung von Cloud-Übertragungen verhindert unerwartete Rechnungen oder Verlangsamungen.

### Ratenlimits der Cloud-Anbieter

Manche Anbieter (insbesondere Google Drive) drosseln oder geben Fehler zurück, wenn Übertragungen zu schnell sind. Die Bandbreitenbegrenzung hält Sie innerhalb sicherer Grenzen.

## So legen Sie Bandbreitenlimits fest

### Methode 1: Bandbreitenlimit pro Job

Fügen Sie beim Erstellen oder Bearbeiten eines Jobs in RcloneView das Bandbreitenlimit-Flag in den rclone-Optionen hinzu:

- **`--bwlimit 10M`** — Begrenzt auf 10 MB/s (Megabyte pro Sekunde)
- **`--bwlimit 50M`** — Begrenzt auf 50 MB/s
- **`--bwlimit 1M`** — Begrenzt auf 1 MB/s (gut für Hintergrund-Trickle-Sync)

### Methode 2: Zeitbasierte Bandbreitenplanung

rclone unterstützt zeitbasierte Bandbreitenlimits — nutzen Sie unterschiedliche Geschwindigkeiten zu verschiedenen Tageszeiten:

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

Das bedeutet:
- **8:00 – 18:00 Uhr**: Begrenzt auf 5 MB/s (Arbeitszeit, minimale Auswirkung)
- **18:00 – 23:00 Uhr**: Begrenzt auf 50 MB/s (abends, mehr verfügbar)
- **23:00 – 8:00 Uhr**: Unbegrenzt (nachts, volle Geschwindigkeit)

Das ist für die meisten Nutzer der optimale Punkt — Übertragungen laufen rund um die Uhr, erreichen aber nur dann volle Geschwindigkeit, wenn das Netzwerk im Leerlauf ist.

### Methode 3: Upload- vs. Download-Limits

Legen Sie unterschiedliche Limits für Upload und Download fest:

```
--bwlimit "10M:5M"
```

Dies begrenzt Uploads auf 10 MB/s und Downloads auf 5 MB/s. Nützlich, wenn Ihr Internetanbieter asymmetrische Geschwindigkeiten bietet (üblich bei Kabel- und DSL-Verbindungen).

## Praktische Beispiele

### Homeoffice mit 100-Mbit/s-Verbindung

```
--bwlimit "09:00,2M 17:00,off"
```
- Während der Arbeitszeit: 2 MB/s (kaum spürbar neben Videoanrufen)
- Nach Feierabend: Unbegrenzt

### Kleines Büro mit gemeinsam genutzter 50-Mbit/s-Verbindung

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- Geschäftszeiten: 3 MB/s (lässt 47 Mbit/s für Mitarbeiter übrig)
- Abends: 25 MB/s (halbe Kapazität)
- Nachts: Volle Geschwindigkeit

### Große Migration über ein Wochenende

```
--bwlimit off
```
- Keine Limits — maximale Übertragungsgeschwindigkeit während Wartungsfenstern.

## Kombination mit Job-Planung

Der wirkungsvollste Ansatz: **umfangreiche Jobs nachts ohne Bandbreitenlimit** und **leichte Jobs tagsüber mit strikten Limits** planen.

1. Erstellen Sie zwei Versionen Ihres Synchronisationsjobs:
   - **Tagjob**: `--bwlimit 5M` — läuft mittags für schnelle inkrementelle Synchronisation
   - **Nachtjob**: kein Bandbreitenlimit — läuft um 2 Uhr nachts für umfangreiche Übertragungen
2. Planen Sie beide mit [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## Überwachung der tatsächlichen Geschwindigkeit

Nutzen Sie die Echtzeit-Übertragungsüberwachung, um zu prüfen, ob Ihre Bandbreitenlimits funktionieren:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

Die Anzeige der Übertragungsgeschwindigkeit sollte Werte an oder unter Ihrem konfigurierten Limit zeigen. Wenn Sie niedrigere Geschwindigkeiten als Ihr Limit sehen, liegt der Engpass woanders (Netzwerk, Anbieter-API, Festplattengeschwindigkeit).

## Kurzübersicht

| Szenario | Einstellung | Effekt |
|----------|---------|--------|
| Leichte Hintergrundsynchronisation | `--bwlimit 2M` | Kaum spürbar |
| Moderate Übertragungen | `--bwlimit 10M` | Spürbar, aber handhabbar |
| Nur Arbeitszeit | `--bwlimit "09:00,5M 17:00,off"` | Gedrosselt während der Arbeit |
| Upload-intensiv | `--bwlimit "20M:5M"` | 20M hoch, 5M runter |
| Kein Limit | `--bwlimit off` oder weglassen | Maximale Geschwindigkeit |

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihre Remotes hinzu** und erstellen Sie einen Sync-/Kopierjob.
3. **Fügen Sie `--bwlimit`** zu den rclone-Flags des Jobs hinzu.
4. **Testen und überwachen Sie**, um die richtige Balance zu finden.
5. **Kombinieren Sie es mit Planung** für das Beste aus beiden Welten.

Schnelle Übertragungen sind gut. Aber Übertragungen, die die Videoanrufe Ihres Teams nicht zum Absturz bringen, sind besser.

---

**Verwandte Anleitungen:**

- [Große Cloud-Übertragungen beschleunigen](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Google Drive Ratenlimit-Fehler beheben](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
