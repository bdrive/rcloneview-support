---
slug: fix-google-drive-quota-rate-limit-api-errors
title: "Google Drive Kontingent-, Rate-Limit- und API-Fehler mit RcloneView beheben"
authors:
  - tayson
description: Umgehen Sie Google Drives 750-GB/Tag-Kontingent, userRateLimitExceeded und zufällige API-Fehler mit dem visuellen Job-Tuning, dem Scheduler und der Diagnose von RcloneView, aufbauend auf der rclone-Engine.
keywords:
  - rcloneview
  - google drive quota error
  - google drive rate limit
  - userRateLimitExceeded
  - rclone drive api
  - fix google drive 403
  - drive api automation
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - automation
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive Kontingent-, Rate-Limit- und API-Fehler mit RcloneView beheben

> Genervt von `userRateLimitExceeded`, `quotaExceeded` oder zufälligen 429-Antworten? RcloneView gibt Google-Drive-Power-Usern ein GUI-Toolkit an die Hand, um API-Drosselung vorherzusehen, zu umgehen und sich davon zu erholen, ohne Skripte überwachen zu müssen.

Ob Sie Medienarchive sichern, Shared Drives konsolidieren oder MEGA in Google Workspace synchronisieren – irgendwann stoßen Sie an Drives Grenzen:
- **750 GB/Tag** Upload- und Kopierkontingent pro Nutzer
- **5 TB** maximale Dateigröße (nicht-Google-Docs-Formate)
- API-Aufrufe mit Burst-Limit (`userRateLimitExceeded`, `rateLimitExceeded`, 429)
- Gelegentliche Backend-Aussetzer (5xx, Verbindungsabbrüche)

Statt CLI-Läufe per Trial-and-Error zeigt diese Anleitung, wie Sie Jobs über den Explorer, Scheduler und die Diagnose von RcloneView am Laufen halten, sodass jede Übertragung genau dort fortgesetzt wird, wo sie aufgehört hat.

<!-- truncate -->

## Drive-Fehler verstehen, bevor Sie reagieren

| Fehlertext | Ursache | Lösung in RcloneView |
| --- | --- | --- |
| `userRateLimitExceeded`, `rateLimitExceeded` | Zu viele Anfragen pro Sekunde von einem Nutzer/Projekt | **Checkers/Transfers** verringern, `--tpslimit` aktivieren, Scheduler-Fenster versetzen |
| `quotaExceeded`, `403: insufficient storage` | Upload- + Kopier-Bytes haben 750 GB/Tag überschritten ODER Ziel-Drive ist voll | Jobs nach Ordnern aufteilen, Pausen zwischen Batches einfügen, anderes Konto wählen oder auf Reset warten |
| `403: The user does not have sufficient permissions for file` | Falsches Shared Drive oder falscher Dateibesitz | **Compare** nutzen, um Pfade zu prüfen und Shared-Drive-Mitgliedschaft zu verifizieren |
| `5xx backendError` / `Internal Error` | Vorübergehender Ausfall bei Google | Retries und exponentielles Backoff aktivieren, den Scheduler fortsetzen lassen |
| `drive: rateLimitExceeded: Too many requests for this file` | Schnell aufeinanderfolgende Updates einer einzelnen Datei | Chunked Transfers aktivieren, Nebenläufigkeit drosseln |

RcloneView zeigt diese Meldungen im Job-Verlauf und in den Logs an, sodass Sie den genauen Zeitstempel und das fehlgeschlagene Objekt bestimmen können.

## Schritt 1 — Ihre Drive-Nutzung als Basis ermitteln

1. **Verbleibendes Kontingent prüfen**: Bestätigen Sie im Google Workspace Admin oder in den Drive-Einstellungen den verfügbaren Speicherplatz für den Zielnutzer oder das Shared Drive.
2. **Datensatz segmentieren**: Nutzen Sie den Explorer von RcloneView, um die Migration in logische Ordner zu unterteilen (`Finance FY24`, `Video RAW` usw.). Ziehen Sie Dateien per Drag-and-drop in Staging-Ordner, um die Größe abzuschätzen.
3. **Compare ausführen**: Der [Leitfaden Ordner vergleichen](/howto/rcloneview-basic/compare-folder-contents) hilft Ihnen, Unterschiede vorab zu erkennen und das Kopieren von Duplikaten zu vermeiden, die das Kontingent belasten.

<CloudSupportGrid />

## Schritt 2 — Übertragungen vor der Planung optimieren

Öffnen Sie **Job Manager → Add Job** (siehe [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)) und konzentrieren Sie sich auf folgende Einstellungen:

- **Transfers vs. Checkers**: Setzen Sie Transfers auf `4-8` für 1-Gbps-Netzwerke; reduzieren Sie auf `2`, wenn Fehler zunehmen. Checkers auf `4` halten die Verifizierung gesund, ohne die API zu überlasten.
- **Chunk-Größe**: Belassen Sie die Standardwerte, außer Google drosselt Uploads großer Videos; verringern Sie dann die Chunk-Größe, um die Burst-Last zu reduzieren.
- **`--drive-stop-on-upload-limit`**: Aktivieren Sie dieses Flag (Checkbox in den erweiterten Optionen), damit RcloneView sanft pausiert, sobald 750 GB verbraucht sind, statt wiederholt 403-Fehler zu werfen.
- **Bandbreitenbegrenzung**: Legen Sie unter **Settings → Transfers** z. B. `200 Mbps` fest, damit lokale Netzwerke ruhig bleiben.

Speichern Sie den Job mit einem aussagekräftigen Namen wie `Drive-Master-Library-Sync`.

## Schritt 3 — Um Kontingente herum planen

Nutzen Sie den Scheduler (Schritt 4 des Job-Assistenten), um Kollisionen zu minimieren:

1. Aktivieren Sie **Enable Scheduler** und wählen Sie **Daily**- oder **Hourly**-Fenster.
2. Führen Sie große Uploads *nachts nach Ortszeit* aus, damit sie mit den ruhigsten Stunden von Drive zusammenfallen.
3. Verketten Sie mehrere Jobs mit gestaffelten Startzeiten (z. B. `01:00`, `03:30`, `06:00`), damit sich die Kontingente über das Reset-Fenster verteilen.
4. Aktivieren Sie **Retries** (3-5) mit exponentiellem Backoff. RcloneView setzt automatisch genau dort fort, wo abgebrochen wurde, da rclone Datei-Prüfsummen und Teilübertragungen speichert.
5. Aktivieren Sie **Notifications**, damit Sie E-Mail-/Webhook-Warnungen erhalten, sobald Google eine Kontingentwarnung ausgibt.

**Beispielbefehl aus den Job-Details**

```bash
rclone copy gdrive-main:Video gdrive-archive:Video ^
  --transfers=4 ^
  --checkers=4 ^
  --drive-stop-on-upload-limit ^
  --tpslimit=8 ^
  --retries=5 --low-level-retries=10
```

Sie müssen dies nie manuell ausführen, aber es dokumentiert die Maßnahme für Audits.

## Schritt 4 — Reagieren, wenn Fehler auftreten

- **750 GB/Tag erreicht**: Der Job pausiert mit einem klaren Log-Eintrag. Duplizieren Sie den Job, ändern Sie den Quell-Unterordner oder warten Sie auf den nächsten Reset um Mitternacht UTC. Der Scheduler setzt automatisch fort.
- **userRateLimitExceeded**: Verringern Sie Transfers/Checkers, fügen Sie `--tpslimit` hinzu (Tab „Advanced“), und erwägen Sie, die API-Anmeldedaten in ein dediziertes Google-Cloud-Projekt zu verschieben, um ein größeres Pro-Projekt-Kontingent zu erhalten.
- **429 Too Many Requests**: Stellen Sie den Scheduler auf stündliche Läufe mit kleineren Batches (nutzen Sie den **Include/Exclude**-Filter, um Verzeichnisse aufzuteilen). Aktivieren Sie `--drive-chunk-size=64M`, um Bursts zu glätten.
- **Shared-Drive-Berechtigungen**: Öffnen Sie das Ziel mindestens einmal über den Explorer; wirft Drive Berechtigungsfehler, wechseln Sie zu einem Nutzer, der Manager/Content Manager dieses Shared Drives ist.
- **5xx**: Lassen Sie die Retries greifen. Schlägt dasselbe Objekt wiederholt fehl, markieren Sie es über Compare als übersprungen, damit der Rest weiterläuft, während Sie die Ursache untersuchen.

Alle Ereignisse werden im **Job-Verlauf** mit herunterladbaren Logs erfasst, sodass Belege für Support-Tickets oder Compliance-Berichte nur einen Klick entfernt sind.

## Schritt 5 — Proaktiv überwachen

- **Transfer-Panel**: Behalten Sie Bandbreiten-Diagramme und den Status pro Datei im Blick, um Drosselung sofort zu erkennen.
- **Compare nach der Automatisierung**: Führen Sie Compare erneut aus (Dry Run), um zu bestätigen, dass keine ausstehenden Unterschiede mehr bestehen, sobald die Kontingente zurückgesetzt wurden.
- **Aktivitäts-Timeline**: Die Scheduler-Ansicht listet „Last run / Next run / Status“ auf, sodass Sie genau wissen, wann die Pipeline wegen Kontingenten pausiert.
- **Notifications**: Verbinden Sie Jobs mit Slack/E-Mail, damit Rate-Limit-Warnungen das richtige Team erreichen, bevor Nutzer fehlende Dateien bemerken.
- **Beim Login starten**: Aktivieren Sie dies in den Einstellungen, damit RcloneView und der Scheduler Workstation-Neustarts überstehen.

## Best Practices für Drive-intensive Teams

1. **Service-Konten rotieren**: Weisen Sie als Workspace-Administrator jedem Fachbereich ein eigenes Service-Konto zu, damit sich die Kontingente verteilen.
2. **Große Medien lokal zwischenlagern**: Synchronisieren Sie zunächst auf ein On-Prem-NAS und lassen Sie RcloneView dieses NAS anschließend nachts nach Drive spiegeln, um die API-Nutzung aufzuteilen.
3. **Jobs nach Priorität kennzeichnen**: Geschäftskritische Daten erhalten nächtliche Zeitfenster; nicht dringende Archive laufen wöchentlich.
4. **Presets dokumentieren**: Exportieren Sie Job-Definitionen, damit Teammitglieder abgestimmte Einstellungen wiederverwenden, statt neue zu erfinden, die an Rate-Limits stoßen.
5. **Logs aufbewahren**: Speichern Sie RcloneView-Logs (JSON/CSV) in einem Audit-Bucket, um zu belegen, dass jedes Kontingentereignis behandelt wurde.

## FAQ

**Wie erfahre ich, welche Datei das Limit ausgelöst hat?**  
Öffnen Sie Job-Verlauf → View Log. Der genaue Dateipfad steht über der Fehlermeldung, sodass Sie nur dieses Verzeichnis erneut ausführen können.

**Kann ich das 750-GB/Tag-Limit umgehen?**  
Nicht direkt. Verteilen Sie Daten auf mehrere Google-Konten (jedes mit eigenem Kontingent) oder warten Sie auf den Reset. Die Filter von RcloneView helfen, Ordner zu segmentieren, ohne sie manuell zu verschieben.

**Verlangsamt eine Reduzierung der Transfers alles?**  
Möglicherweise, aber das ist besser, als Jobs abstürzen zu lassen. Kombinieren Sie weniger Transfers mit häufigeren Scheduler-Läufen, damit der Netto-Durchsatz weiterhin die SLAs erfüllt.

**Was, wenn Drive meinen API-Schlüssel sperrt?**  
Erstellen Sie ein Google-Cloud-Projekt ausschließlich für RcloneView/rclone, fügen Sie OAuth-Anmeldedaten hinzu und beschränken Sie den Zugriff auf vertrauenswürdige Bediener. Rotieren Sie den Schlüssel, wenn Missbrauch festgestellt wird.

## Drive-Migrationen dauerhaft gesund halten

Drive-Kontingente und Rate-Limits sind dauerhaft, aber mit RcloneView können Sie sie einplanen, frühzeitig Warnungen erhalten und automatisch fortsetzen, sobald Google grünes Licht gibt. Stimmen Sie Jobs einmal ab, planen Sie sie und lassen Sie die GUI Best Practices durchsetzen, sodass Sie nie manuelle Wiederholungen überwachen müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
