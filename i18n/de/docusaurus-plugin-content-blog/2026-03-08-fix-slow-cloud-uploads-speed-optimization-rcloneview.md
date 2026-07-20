---
slug: fix-slow-cloud-uploads-speed-optimization-rcloneview
title: "Warum sind meine Cloud-Uploads so langsam? Tipps zur Geschwindigkeitsoptimierung mit RcloneView"
authors:
  - tayson
description: "Cloud-Uploads kriechen dahin? Erfahren Sie, warum Cloud-Übertragungen langsam sind und wie Sie die Geschwindigkeit mit parallelen Übertragungen, Chunking, Bandbreitensteuerung und anbieterspezifischer Feinabstimmung in RcloneView optimieren."
keywords:
  - Fix für langsame Cloud-Uploads
  - Cloud-Übertragung beschleunigen
  - langsamer Cloud-Upload
  - Cloud-Synchronisationsgeschwindigkeit optimieren
  - parallele Cloud-Übertragungen
  - rclone Geschwindigkeitsoptimierung
  - Google Drive Upload langsam
  - S3 Upload-Geschwindigkeit
  - Cloud-Übertragungsleistung
  - schnelles Cloud-Synchronisationstool
tags:
  - RcloneView
  - performance
  - cloud-storage
  - optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Warum sind meine Cloud-Uploads so langsam? Tipps zur Geschwindigkeitsoptimierung mit RcloneView

> Sie starten einen Cloud-Upload und erwarten 30 Minuten. Zwei Stunden später steht er bei 40%. Bevor Sie Ihrem Internet die Schuld geben, könnte das Problem an Ihrem Tool liegen — nicht an Ihrer Verbindung.

Langsame Cloud-Übertragungen sind frustrierend, aber sie werden selten durch ein einziges Problem verursacht. Meist handelt es sich um eine Kombination aus nicht optimal eingestellten Standardeinstellungen, anbieterspezifischer Drosselung und ineffizienten Übertragungsmethoden. RcloneView gibt Ihnen die nötigen Kontrollen, um all das zu beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Cloud-Übertragungen langsam sind

### 1) Single-Thread-Übertragungen

Die meisten Cloud-Synchronisationstools laden jeweils eine Datei nach der anderen hoch. Bei 10.000 kleinen Dateien benötigt jede Datei eine eigene HTTP-Verbindung — Aufbau, Übertragung, Verifizierung. Der Overhead pro Datei kann die eigentliche Übertragungszeit übersteigen.

**Lösung**: Erhöhen Sie die Anzahl paralleler Übertragungen. Rclone verwendet standardmäßig 4, aber viele Verbindungen können 8–16 oder mehr verarbeiten.

### 2) Zu kleine Chunk-Größen

Große Dateien werden in Chunks hochgeladen. Ist die Chunk-Größe zu klein, benötigt jeder Chunk eine eigene HTTP-Anfrage, was zusätzlichen Overhead verursacht. Ist sie zu groß, bedeutet ein fehlgeschlagener Chunk das erneute Hochladen von mehr Daten.

**Lösung**: Erhöhen Sie bei stabilen Verbindungen die Chunk-Größe. Für Google Drive versuchen Sie 64M oder 128M. Für S3 versuchen Sie 16M–64M.

### 3) Anbieter-Ratenlimits

Cloud-Anbieter drosseln Uploads, um Missbrauch zu verhindern:

- **Google Drive**: ~750 GB Upload-Limit pro Tag.
- **OneDrive**: Drosselung nach anhaltend hohem Durchsatz.
- **Dropbox**: Progressive Drosselung bei hoher Last.
- **S3**: 3.500 PUT-Anfragen/Sekunde pro Prefix.

**Lösung**: Halten Sie sich an die Ratenlimits, indem Sie die Übertragungsgeschwindigkeit anpassen. Nutzen Sie [Bandbreitenbegrenzung](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview), um unter den Schwellenwerten zu bleiben.

### 4) Keine serverseitige Kopie

Beim Übertragen zwischen zwei Clouds (z. B. S3 zu S3) laden manche Tools zunächst auf Ihren Rechner herunter und dann wieder hoch. Rclone unterstützt bei kompatiblen Anbietern eine serverseitige Kopie — die Daten werden direkt zwischen den Clouds verschoben, ohne Ihren Rechner zu berühren.

**Lösung**: RcloneView nutzt automatisch die serverseitige Kopie, wenn verfügbar.

### 5) Prüfung jeder einzelnen Datei

Vor der Übertragung prüft rclone, ob jede Datei am Ziel bereits existiert. Bei großen Dateimengen kann diese Prüfphase länger dauern als die eigentliche Übertragung.

**Lösung**: Verwenden Sie `--no-check-dest` für anfängliche Massenübertragungen. Nutzen Sie die normale Prüfung für inkrementelle Synchronisationen.

## Einstellungen zur Geschwindigkeitsoptimierung

### Parallele Übertragungen

Erhöhen Sie die Anzahl gleichzeitiger Dateiübertragungen:

| Szenario | Empfohlene Einstellung |
|----------|-------------------|
| Standard | 4 Übertragungen |
| Schnelles Internet (100+ Mbps) | 8–16 Übertragungen |
| Viele kleine Dateien | 16–32 Übertragungen |
| Nur große Dateien | 4–8 Übertragungen |

Mehr parallele Übertragungen helfen bei vielen kleinen Dateien. Bei wenigen großen Dateien ist die Chunk-Größe wichtiger.

### Chunk-Größe nach Anbieter

| Anbieter | Standard-Chunk | Empfohlen |
|----------|--------------|-------------|
| Google Drive | 8 MB | 64–128 MB |
| OneDrive | 10 MB | 64 MB |
| S3 | 5 MB | 16–64 MB |
| Dropbox | 48 MB | 48–150 MB |

Größere Chunks bedeuten weniger HTTP-Anfragen und weniger Overhead.

### Puffergröße

Erhöhen Sie den Arbeitsspeicherpuffer für schnelleres Lesen:

- Standard: 16 MB
- Empfohlen: 64–256 MB (sofern genügend RAM vorhanden ist)

Das hilft beim Lesen aus langsamen Quellen (NAS, Festplatten mit rotierenden Scheiben).

## Überwachen und Messen

Verfolgen Sie die Übertragungsgeschwindigkeit in Echtzeit, um den Effekt Ihrer Änderungen zu sehen:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed in real time" class="img-large img-center" />

### Worauf Sie achten sollten

- **Übertragungsgeschwindigkeit** — Sollte einem angemessenen Prozentsatz Ihrer Internet-Upload-Geschwindigkeit entsprechen.
- **Aktive Übertragungen** — Sollte Ihrer Einstellung für parallele Übertragungen entsprechen.
- **Fehler** — Ratenlimit-Fehler (429, 403) bedeuten, dass Sie langsamer machen müssen.
- **Prüfungen vs. Übertragungen** — Wenn die Prüfung zu lange dauert, erwägen Sie, sie bei initialen Uploads zu überspringen.

## Anbieterspezifische Tipps

### Google Drive

- Setzen Sie die Chunk-Größe auf 64M oder höher.
- Halten Sie parallele Übertragungen bei 4–8 (Google drosselt darüber hinaus aggressiv).
- Wenn Sie das tägliche Limit von 750 GB erreichen, verteilen Sie Übertragungen auf mehrere Tage.

### OneDrive / SharePoint

- Verwenden Sie 4–8 parallele Übertragungen.
- Eine Chunk-Größe von 64 MB funktioniert gut.
- OneDrive drosselt basierend auf dem Gesamtvolumen — verteilen Sie große Übertragungen über die Zeit.

### AWS S3

- S3 verkraftet hohe Parallelität gut — versuchen Sie 16–32 Übertragungen.
- Verwenden Sie Multipart-Upload für Dateien über 100 MB.
- Wählen Sie eine S3-Region in Ihrer Nähe für geringere Latenz.

### Backblaze B2

- Unterstützt hohe Parallelität — 16+ Übertragungen funktionieren gut.
- Chunk-Größe ist nicht relevant (B2 nutzt seine eigene Large-File-API).
- Keine täglichen Übertragungslimits.

## Batch-Jobs für optimierte Workflows

Mit v1.3 Batch Jobs können Sie eine optimierte Übertragungssequenz verketten:

1. Massenübertragung mit aggressiven Einstellungen.
2. Verifizierungsvergleich.
3. Benachrichtigung nach Abschluss.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Batch optimized transfer workflow" class="img-large img-center" />

## Kurze Checkliste

- **Parallele Übertragungen erhöhen** — besonders bei vielen kleinen Dateien.
- **Chunk-Größe erhöhen** — besonders bei großen Dateien.
- **Internetgeschwindigkeit prüfen** — `speedtest-cli`, um Ihre Verbindung als Basis zu messen.
- **Ratenlimits überwachen** — auf 429/403-Fehler in den Übertragungsprotokollen achten.
- **Serverseitige Kopie nutzen** — bei Übertragungen zwischen kompatiblen Clouds.
- **Große Übertragungen planen** — außerhalb der Stoßzeiten, um Ihr Netzwerk nicht zu beeinträchtigen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Übertragungseinstellungen anpassen** in der Job-Konfiguration.
3. **Geschwindigkeit in Echtzeit überwachen**.
4. **Anpassen und iterieren** — kleine Änderungen können den Durchsatz dramatisch verbessern.

Die Standardeinstellungen funktionieren für die meisten Situationen. Aber wenn Sie Terabytes bewegen, zahlt sich die Optimierung schnell aus.

---

**Verwandte Anleitungen:**

- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
