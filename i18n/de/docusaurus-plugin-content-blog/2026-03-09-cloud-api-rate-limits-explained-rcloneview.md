---
slug: cloud-api-rate-limits-explained-rcloneview
title: "Cloud-API-Ratenbegrenzungen erklärt — Warum Ihre Übertragungen fehlschlagen und wie Sie es beheben"
authors:
  - tayson
description: "Google Drive 403-Fehler? OneDrive-Drosselung? Erfahren Sie, was Cloud-API-Ratenbegrenzungen sind, warum sie Ihre Übertragungen unterbrechen und wie Sie RcloneView konfigurieren, um sie zu vermeiden."
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-API-Ratenbegrenzungen erklärt — Warum Ihre Übertragungen fehlschlagen und wie Sie es beheben

> Ihre Cloud-Synchronisation startet stark, verlangsamt sich dann aber plötzlich bis zum Stillstand. Fehlermeldungen erscheinen: „Rate limit exceeded", „403 Forbidden", „Too many requests." Ihre Übertragung stoppt bei 60%. Was passiert hier?

Jeder Cloud-Speicher-Anbieter begrenzt, wie schnell Sie mit seiner API interagieren können. Diese Ratenbegrenzungen schützen die Infrastruktur vor Missbrauch, betreffen aber auch legitime Nutzer, die große Datenmengen verschieben. Diese Grenzen zu verstehen — und Ihre Tools so zu konfigurieren, dass sie diese einhalten — macht den Unterschied zwischen Übertragungen, die zuverlässig abgeschlossen werden, und Übertragungen, die auf halbem Weg fehlschlagen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was sind API-Ratenbegrenzungen?

Wenn Sie Dateien in einem Cloud-Speicher hochladen, herunterladen, auflisten oder ändern, macht Ihr Tool API-Aufrufe. Jede Operation ist eine oder mehrere API-Anfragen. Ratenbegrenzungen setzen ein Limit, wie viele Anfragen Sie in einem bestimmten Zeitraum stellen können.

### Arten von Limits

- **Anfragen pro Sekunde** — Wie viele API-Aufrufe pro Sekunde (z. B. S3: 3.500 PUT-Anfragen/Sekunde pro Präfix).
- **Anfragen pro Tag** — Gesamte tägliche API-Aufrufe (z. B. Google Drive: ~10 Milliarden Abfragen/Tag für Apps, aber deutlich weniger pro Nutzer).
- **Bandbreite pro Tag** — Gesamtes Datenvolumen (z. B. Google Drive: ~750 GB Upload/Tag).
- **Gleichzeitige Verbindungen** — Wie viele simultane Verbindungen erlaubt sind.
- **Burst-Limits** — Kurzfristige Spitzen, die erlaubt sind, bevor die Drosselung einsetzt.

## Ratenbegrenzungen nach Anbieter

### Google Drive

| Limit | Wert |
|-------|-------|
| Upload pro Tag | ~750 GB |
| Download pro Tag | ~10 TB |
| API-Abfragen pro 100 Sekunden | 1.000 pro Nutzer |
| Dateioperationen pro Sekunde | ~10 |
| Fehlercode | 403 (userRateLimitExceeded), 429 |

Google Drive ist einer der Anbieter mit den aggressivsten Ratenbegrenzungen. Wenn Sie `403` oder `userRateLimitExceeded` sehen, stoßen Sie an diese Grenze.

### OneDrive / SharePoint

| Limit | Wert |
|-------|-------|
| API-Aufrufe | Dynamische Drosselung |
| Gleichzeitige Uploads | ~4 empfohlen |
| Fehlercode | 429 (Too Many Requests), 503 |

Microsoft verwendet dynamische Drosselung — die Limits werden innerhalb einer Sitzung enger, je mehr Sie das System nutzen.

### AWS S3

| Limit | Wert |
|-------|-------|
| PUT/COPY/POST/DELETE | 3.500 pro Sekunde pro Präfix |
| GET/HEAD | 5.500 pro Sekunde pro Präfix |
| Kein tägliches Bandbreitenlimit | Unbegrenzt |
| Fehlercode | 503 (Slow Down) |

S3 ist am großzügigsten. Die meisten Nutzer stoßen nie an Ratenbegrenzungen, außer wenn sie Tausende kleiner Dateioperationen durchführen.

### Dropbox

| Limit | Wert |
|-------|-------|
| API-Aufrufe | ~300 pro Minute für Apps |
| Upload pro Sitzung | Progressive Drosselung |
| Fehlercode | 429 |

### Backblaze B2

| Limit | Wert |
|-------|-------|
| API-Aufrufe | Abhängig vom Tarif |
| Gleichzeitige Uploads | Kein festes Limit |
| Bandbreite | Pay-per-Use, keine Obergrenze |

B2 ist sehr großzügig — Ratenbegrenzungen sind selten ein Problem.

## Wie RcloneView mit Ratenbegrenzungen umgeht

### Automatische Wiederholung

Wenn rclone einen Ratenbegrenzungsfehler erhält (429, 403, 503), geschieht Folgendes automatisch:

1. Die betroffene Übertragung wird pausiert.
2. Es wird die vom Server angegebene Zeit gewartet (oder ein exponentielles Backoff verwendet).
3. Die Operation wird wiederholt.

Sie sehen dies im Übertragungsprotokoll als „rate limited, waiting X seconds."

### Konfigurierbare parallele Übertragungen

Reduzieren Sie parallele Übertragungen, um Ihre API-Anfragerate zu senken:

| Anbieter | Empfohlene parallele Übertragungen |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### Bandbreitenbegrenzung

Verwenden Sie [Bandbreitenlimits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview), um die Datenrate zu kontrollieren und indirekt die Anzahl der API-Aufrufe zu reduzieren.

### v1.3 Fehlgeschlagene Übertragungen wiederholen

Wenn Übertragungen trotz Ratenbegrenzungsbehandlung fehlschlagen, kann die Wiederholungsfunktion von v1.3 fehlgeschlagene Dateien nach Abschluss des Jobs erneut ausführen.

## Strategien zur Vermeidung von Ratenbegrenzungen

### 1) Übertragung außerhalb der Stoßzeiten

Planen Sie große Übertragungen für Nächte und Wochenenden, wenn andere Nutzer (und Ihre eigenen Apps) keine API-Aufrufe tätigen:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) Auf mehrere Tage verteilen

Für Migrationen, die Google Drives tägliches Upload-Limit von 750 GB überschreiten:

- Tag 1: Ordner A übertragen (500 GB).
- Tag 2: Ordner B übertragen (500 GB).
- Tag 3: Ordner C übertragen + alles verifizieren.

### 3) Eigene API-Anmeldedaten verwenden

Google Drive und einige andere Anbieter erlauben höhere Ratenbegrenzungen, wenn Sie Ihre eigenen OAuth-App-Anmeldedaten anstelle von gemeinsam genutzten verwenden. Konfigurieren Sie Ihr eigenes Google-API-Projekt für höhere Kontingente.

### 4) Dateiprüfung reduzieren

Überspringen Sie bei anfänglichen Massen-Uploads die Zielprüfung. Dies eliminiert die Hälfte Ihrer API-Aufrufe (diejenigen, die prüfen, ob eine Datei bereits existiert).

### 5) Kleine Dateien bündeln

Wenn Sie Tausende kleiner Dateien haben, sollten Sie diese vor der Übertragung in ZIP-Archive packen. Eine 1-GB-ZIP-Datei macht 1 API-Aufruf, statt dass 10.000 einzelne Datei-Uploads 10.000 Aufrufe erzeugen.

## Auf Ratenbegrenzungsprobleme achten

Beobachten Sie Ihren Übertragungsfortschritt auf Anzeichen von Drosselung:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

Warnsignale:

- Die Übertragungsgeschwindigkeit sinkt plötzlich, nachdem sie stark begonnen hat.
- Periodische Pausen bei der Übertragung.
- Fehlermeldungen im Protokoll mit den Codes 429 oder 403.
- Die Übertragungsgeschwindigkeit schwankt (schnell → langsam → schnell).

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Stellen Sie geeignete parallele Übertragungen** für Ihren Cloud-Anbieter ein.
3. **Planen Sie große Übertragungen** außerhalb der Stoßzeiten.
4. **Überwachen Sie den Fortschritt** und achten Sie auf Drosselungsanzeichen.
5. **Nutzen Sie die Wiederholung** (v1.3) für Zuverlässigkeit.

Ratenbegrenzungen werden nicht verschwinden — aber mit den richtigen Einstellungen können Sie zuverlässig innerhalb dieser Grenzen arbeiten.

---

**Verwandte Anleitungen:**

- [Google Drive 403-Ratenbegrenzungsfehler beheben](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
