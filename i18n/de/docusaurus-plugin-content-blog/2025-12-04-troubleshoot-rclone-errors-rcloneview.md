---
slug: troubleshoot-rclone-errors-rcloneview
title: "Fehlerbehebung bei rclone-Fehlern mit RcloneView: API-Limits, Berechtigungen, Timeouts und mehr beheben"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie häufige rclone-Fehler mit dem RcloneView Terminal, Job-Logs und dem Verlauf, um API-Limits, Berechtigungsprobleme, Timeouts und Warnungen zur Datenintegrität zu lösen."
keywords:
  - rclone Fehlerbehebung
  - rclone Troubleshooting
  - rclone API-Ratenlimit
  - rclone Zugriff verweigert
  - rclone Timeout
  - rclone Kontingent überschritten
  - rclone Debugging
  - rcloneview Fehler
  - rclone cli gui
  - Cloud-Automatisierung
  - rcloneview
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - file-management
unlisted: true

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehlerbehebung bei rclone-Fehlern mit RcloneView: API-Limits, Berechtigungen, Timeouts und mehr beheben

> rclone ist leistungsstark, aber Fehler wie 403-Ratenlimits, Timeouts oder „Zugriff verweigert“ können eine Migration zum Stillstand bringen. RcloneView kombiniert CLI-Transparenz mit GUI-Kontext, damit Sie die Ursache schneller erkennen und sicher beheben können.

Wenn Sie schon einmal auf eine Wand von rclone-Ausgaben gestarrt haben und sich fragten, warum ein Job fehlgeschlagen ist, kann RcloneView diesen Kreislauf verkürzen. Das integrierte Terminal, ausführliche Logs und der Job-Verlauf helfen Ihnen, Probleme zu reproduzieren, fehlerhafte Dateien zu isolieren und Leistungs- oder Authentifizierungseinstellungen anzupassen, ohne die App zu verlassen.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Warum rclone-Fehler auftreten

- API-Limits und Kontingente: 403- oder 429-Antworten von Google Drive, OneDrive, Dropbox usw.
- Probleme mit dem Authentifizierungsumfang: abgelaufene Token oder fehlende Berechtigungen.
- Pfad- und Berechtigungsdiskrepanzen: freigegebene Laufwerke, externe Ordner oder falsche Root-Pfade.
- Netzwerkbedingungen: Timeouts, Drosselung oder instabile Verbindungen.
- Integritätsprüfungen: Checksummen-Abweichungen, wenn Provider Uploads verändern.

## Häufige Fehler und ihre Bedeutung

| Fehler | Was er in der Regel bedeutet | Nächster Schritt |
| --- | --- | --- |
| 403: Rate Limit Exceeded / 429 Too Many Requests | Provider hat Anfragen gedrosselt | `--transfers` verringern, `--tpslimit` hinzufügen, mit Backoff erneut versuchen |
| Failed to copy: permission denied | Fehlender Zugriff auf Ordner oder Datei | Pfad prüfen, Berechtigungen für freigegebene Laufwerke kontrollieren, mit korrektem Scope erneut authentifizieren |
| Failed to refresh token | OAuth-Token abgelaufen oder ungültig | Remote über den RcloneView-OAuth-Ablauf erneut verbinden |
| Directory not found | Tippfehler im Pfad oder falscher Root | Pfad mit `rclone lsf remote:` bestätigen |
| Timeout waiting for connection | Netzwerkinstabilität oder Firewall | Parallelität reduzieren, mit `--retries` und `--low-level-retries` erneut versuchen |
| Upload failed: corrupted on transfer | Integritätsprüfung fehlgeschlagen | Erneut mit `--checksum` oder `rclone check` ausführen |

## Das RcloneView Terminal nutzen, um Fehler zu reproduzieren und zu untersuchen

Führen Sie den fehlgeschlagenen Befehl im integrierten Terminal erneut aus, um Variablen wie falsche Arbeitsverzeichnisse oder Konfigurationen auszuschließen.

- Öffnen Sie den Tab **Terminal** und geben Sie `rclone ` ein, um alle Befehle anzuzeigen (Autovervollständigung). [Anleitung](/howto/rcloneview-basic/using-terminal-in-rcloneview)
- Fügen Sie `-vv` hinzu, um ausführliche Ausgaben zu erfassen, die Sie kopieren oder teilen können.

Beispiele:

```bash
rclone about myremote: -vv
rclone lsf myremote:path -vv --dirs-only --recursive
rclone sync src: dst: -vv --transfers=8
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="RcloneView Terminal autocomplete" class="img-medium img-center" />

## Job-Logs und -Verlauf prüfen, um Muster zu erkennen

Der Job-Monitor und die Verlaufsansicht zeigen, welche Dateien fehlgeschlagen sind und wie oft.

- **Job-Monitor**: Live-Transfer-Tab für aktive Jobs sowie Completed-/API-Logs für abgeschlossene Läufe. [Schritte ansehen](/howto/rcloneview-basic/real-time-transfer-monitoring)
- **Verlauf**: Öffnen Sie den Verlauf eines bestimmten Jobs aus dem Job-Manager, um die Ergebnisse pro Datei zu überprüfen. [Schritte ansehen](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="Job Monitor transfer log" class="img-medium img-center" />

## API-Ratenlimit- und Kontingentfehler beheben

- Parallelität verringern: `--transfers` und `--checkers` in den Job-Optionen oder Befehls-Flags reduzieren.
- Vorsichtige Drosselung hinzufügen: `--tpslimit` und `--tpslimit-burst` bei Providern mit strengen APIs verwenden.
- Große Jobs aufteilen: Ordner für Ordner ausführen oder über den Job-Manager in verkehrsarmen Zeiten planen.
- Inkrementelle Läufe nutzen: Compare + Sync kombinieren, um nur geänderte Dateien zu übertragen und Aufrufe zu reduzieren.

## Authentifizierungs- und OAuth-Probleme beheben

- Den Remote mit dem richtigen Scope über die OAuth-Eingabeaufforderungen von RcloneView erneut authentifizieren.
- Wenn ein Token abgelaufen oder widerrufen ist, den Remote neu anlegen oder ihn über das Terminal mit `rclone config reconnect remote:` aktualisieren.
- Bei freigegebenen Laufwerken oder delegierten Konten sicherstellen, dass der Remote mit den richtigen Laufwerks- oder Mandanten-IDs eingerichtet ist.

## Fehler „Zugriff verweigert“ beheben

- Bestätigen, dass der Pfad existiert und Sie Zugriff haben: `rclone lsf remote:folder` im Terminal.
- Bei Google-freigegebenen Laufwerken oder Dropbox-Freigabeordnern sicherstellen, dass der Remote die richtige Root- oder Laufwerks-ID verwendet.
- Beim Kopieren in ein freigegebenes Laufwerk die Schreibberechtigung prüfen; andernfalls ein Ziel wählen, das Ihnen gehört.

## Timeouts und instabile Verbindungen beheben

- Parallelität bei instabilen Verbindungen reduzieren: `--transfers=2 --checkers=2`.
- Wiederholungsverhalten erhöhen: `--retries=10 --retries-sleep=5s --low-level-retries=20`.
- Für große Dateien Multi-Thread-Streaming aktivieren: `--multi-thread-streams=4 --multi-thread-cutoff=64M`.
- Die Erreichbarkeit vor großen Synchronisationen mit einem einfachen Befehl im Terminal testen:

```bash
rclone lsf remote: --max-depth 1 --fast-list -vv
```

## Fehler bei Datenintegrität und Checksummen beheben

- Quellen und Ziele mit einem Testlauf überprüfen: `--dry-run` bei Sync- oder Copy-Jobs.
- `rclone check` verwenden, um Checksummen zwischen zwei Remotes zu vergleichen:

```bash
rclone check source:folder dest:folder --one-way --size-only
```

- Checksummenvergleich bei unterstützten Providern aktivieren, um stille Beschädigungen zu erkennen.

## Wann GUI und wann Terminal verwenden

- **GUI**: Jobs erstellen, wiederkehrende Backups planen, vor der Synchronisation vergleichen (Compare), Drag-and-Drop zwischen Clouds.
- **Terminal**: Fehler schnell diagnostizieren, Backend-Flags testen oder Ad-hoc-Befehle mit vollständigen `-vv`-Logs ausführen.
- Beides nutzen: Im Terminal prototypisieren, dann stabile Befehle als wiederverwendbare Jobs speichern.

## Kurze Checkliste zur Fehlerbehebung

1. Den Fehler im Terminal mit `-vv` reproduzieren und Logs kopieren.
2. Job-Monitor und -Verlauf auf fehlgeschlagene Dateien und deren Häufigkeit prüfen.
3. Die passende Fehlerkategorie anwenden: Ratenlimits (Parallelität verringern), Authentifizierung (erneut authentifizieren), Berechtigungen (Pfad/Root prüfen), Netzwerk (Threads reduzieren, Wiederholungen erhöhen), Integrität (`check` ausführen).
4. Vor Änderungen erneut mit `--dry-run` ausführen.

## Fazit

RcloneView macht das Debugging von rclone zu einem geführten Workflow: Autovervollständigung zur Vermeidung von Syntaxfehlern, In-App-Logs, um zu sehen, was fehlgeschlagen ist, und GUI-Steuerelemente zur Anpassung von Parallelität oder Zeitplänen. Nutzen Sie Terminal und Job-Verlauf gemeinsam, um Fehler schneller zu beheben und Übertragungen am Laufen zu halten.

<CloudSupportGrid />
