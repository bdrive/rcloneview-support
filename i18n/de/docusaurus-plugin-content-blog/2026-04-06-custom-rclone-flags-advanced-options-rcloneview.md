---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "Benutzerdefinierte Rclone-Flags und erweiterte Optionen in RcloneView-Jobs verwenden"
authors:
  - tayson
description: "Erfahren Sie, wie Sie in RcloneView benutzerdefinierte rclone-Flags für Performance-Tuning, Debugging und erweiterte Job-Konfiguration hinzufügen. Behandelt Transfers, Checkers, Fast-List und mehr."
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - RcloneView
  - feature
  - rclone
  - guide
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Benutzerdefinierte Rclone-Flags und erweiterte Optionen in RcloneView-Jobs verwenden

> RcloneView übernimmt die üblichen Fälle automatisch, aber die wahre Stärke von rclone liegt in seinen Flags. Zu wissen, welche man hinzufügt -- und wo -- kann Übertragungszeiten halbieren oder hartnäckige Randfälle lösen.

Rclone verfügt über Hunderte von Kommandozeilen-Flags, die alles steuern, von der Parallelität der Übertragung über das Checksummen-Verhalten bis hin zur Wiederholungslogik. RcloneView bietet eine übersichtliche Oberfläche für die häufigsten Vorgänge, ermöglicht aber auch das Einfügen benutzerdefinierter Flags in jeden Job für Situationen, in denen die Standardeinstellungen nicht ausreichen. Dieser Leitfaden behandelt die nützlichsten Flags, wann man sie verwendet und wie man sie in RcloneView konfiguriert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wo man in RcloneView benutzerdefinierte Flags hinzufügt

RcloneView unterstützt benutzerdefinierte Flags an zwei Stellen:

1. **Job-Konfiguration** -- beim Erstellen oder Bearbeiten eines Jobs (Kopieren, Synchronisation, Verschieben) gibt es ein Feld für zusätzliche Flags. Geben Sie sie genau so ein, wie Sie es auf der Kommandozeile tun würden.
2. **Terminal** -- für einmalige Befehle öffnen Sie das Terminal-Panel und geben den vollständigen rclone-Befehl mit allen benötigten Flags ein.

Flags, die zu einem gespeicherten Job hinzugefügt wurden, bleiben über alle Läufe hinweg erhalten, sodass Sie sie einmal konfigurieren und sie bei jeder Ausführung des Jobs angewendet werden -- einschließlich geplanter Läufe.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## Performance-Tuning-Flags

Diese Flags wirken sich direkt auf die Übertragungsgeschwindigkeit und den Ressourcenverbrauch aus.

### --transfers N

Steuert, wie viele Dateien parallel übertragen werden. Standard ist 4.

```bash
--transfers 16
```

Erhöhen Sie diesen Wert bei vielen kleinen Dateien oder wenn der Anbieter hohe Parallelität unterstützt. S3, B2 und Wasabi verkraften 16-32 parallele Übertragungen gut. Google Drive kann oberhalb von 8-10 drosseln.

### --checkers N

Steuert, wie viele Dateien parallel geprüft (verglichen) werden. Standard ist 8.

```bash
--checkers 32
```

Erhöhen Sie diesen Wert, wenn Sie Sync- oder Check-Vorgänge auf Verzeichnissen mit vielen Dateien ausführen. Die Prüfphase ist oft der Engpass, nicht die Übertragung.

### --fast-list

Verwendet weniger API-Aufrufe zum Auflisten von Verzeichnissen, indem alle Objekte in einer einzigen Anfrage angefordert werden. Deutlich schneller bei S3-kompatiblen Anbietern mit großen Buckets.

```bash
--fast-list
```

Kompromiss: verbraucht mehr Speicher, da die gesamte Auflistung im Speicher gehalten wird. Bei Buckets mit Millionen von Objekten kann dies mehrere Gigabyte RAM belegen.

### --no-traverse

Überspringt das Auflisten des Ziels vollständig. Nützlich, wenn wenige Dateien in ein Ziel mit Millionen vorhandener Dateien kopiert werden.

```bash
--no-traverse
```

Ohne dieses Flag listet rclone das gesamte Ziel auf, um vorhandene Dateien zu prüfen. Wenn Sie wissen, dass das Ziel größtenteils irrelevant ist (z. B. das Kopieren von 10 neuen Dateien in einen Bucket mit 5 Millionen Objekten), spart `--no-traverse` mehrere Minuten Auflistungszeit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

Steuert den In-Memory-Puffer pro Dateiübertragung. Standard ist 16 MiB.

```bash
--buffer-size 64M
```

Erhöhen Sie diesen Wert bei großen Dateien auf Verbindungen mit hoher Bandbreite, um E/A-Stockungen zu reduzieren. Verringern Sie ihn, wenn der Speicher begrenzt ist.

### --multi-thread-streams N

Anzahl der Streams für Multi-Thread-Downloads einer einzelnen Datei. Standard ist 4.

```bash
--multi-thread-streams 8
```

Hilfreich beim Herunterladen großer einzelner Dateien von Anbietern, die Byte-Range-Anfragen unterstützen.

## Vergleichs- und Verhaltens-Flags

Diese Flags ändern, wie rclone entscheidet, was übertragen wird.

### --size-only

Vergleicht Dateien nur anhand der Größe, ignoriert Änderungsdatum und Checksummen.

```bash
--size-only
```

Verwenden Sie dies, wenn Zeitstempel unzuverlässig sind (häufig bei manchen SFTP-Servern) oder wenn Sie den schnellstmöglichen Vergleich wünschen, auf Kosten des Übersehens von Änderungen bei gleicher Größe.

### --ignore-existing

Überspringt Dateien, die bereits auf dem Ziel vorhanden sind, unabhängig von Größe oder Datum.

```bash
--ignore-existing
```

Ideal für inkrementelle Uploads, bei denen Sie vorhandene Dateien nie ändern -- nur neue hinzufügen. Deutlich schneller als der Vergleich jeder Datei.

### --ignore-size

Vergleicht Dateien nur anhand des Änderungsdatums, ignoriert die Größe.

```bash
--ignore-size
```

Selten benötigt, aber nützlich bei Anbietern, die für bestimmte Dateitypen falsche Größen melden.

### --update

Überspringt Dateien, die auf dem Ziel neuer sind.

```bash
--update
```

Nützlich für bidirektionale Workflows, bei denen Sie nur Dateien kopieren möchten, die auf dem Ziel älter sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## Wiederholungs- und Zuverlässigkeits-Flags

### --retries N

Anzahl der Wiederholungen für fehlgeschlagene Vorgänge. Standard ist 3.

```bash
--retries 10
```

Erhöhen Sie diesen Wert bei unzuverlässigen Netzwerken oder Anbietern mit intermittierenden Fehlern.

### --retries-sleep DAUER

Wartezeit zwischen Wiederholungen. Standard ist 0.

```bash
--retries-sleep 5s
```

Fügt eine Verzögerung zwischen Wiederholungen hinzu, nützlich bei Rate-Limiting durch den Anbieter.

### --low-level-retries N

Anzahl der Wiederholungen für Low-Level-Vorgänge (HTTP-Anfragen). Standard ist 10.

```bash
--low-level-retries 20
```

### --timeout DAUER

IO-Leerlauf-Timeout. Standard ist 5m0s.

```bash
--timeout 10m
```

Erhöhen Sie diesen Wert bei sehr langsamen Verbindungen oder Anbietern mit hoher Latenz.

## Debugging- und Logging-Flags

Wenn ein Job fehlschlägt oder sich unerwartet verhält, helfen diese Flags bei der Diagnose des Problems.

### -v / -vv

Ausführliche und sehr ausführliche Ausgabe.

```bash
-v
```

Zeigt jede Datei während der Übertragung sowie grundlegende Fortschrittsinformationen. Verwenden Sie `-vv` für detaillierte Debug-Ausgaben einschließlich HTTP-Anfragen.

### --log-file PFAD

Schreibt Logs in eine Datei anstelle der Konsole.

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

Legt die Log-Ebene explizit fest.

```bash
--log-level DEBUG
```

Erzeugt die detaillierteste Ausgabe. Verwenden Sie dies beim Melden von Problemen oder beim Untersuchen unerwarteten Verhaltens.

### --dry-run

Simuliert den Vorgang, ohne Änderungen vorzunehmen.

```bash
--dry-run
```

Führen Sie dies immer zuerst aus, wenn Sie eine neue Flag-Kombination testen, um zu bestätigen, dass sie das tut, was Sie erwarten.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## Job-spezifische Flag-Konfiguration

RcloneView ermöglicht es Ihnen, unterschiedliche Flag-Sets für unterschiedliche Jobs zu speichern. Einige praktische Kombinationen:

**Sync großer Dateien zu S3:**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**Inkrementelles Backup kleiner Dateien:**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**Vorsichtige Synchronisation mit vorherigem Dry-Run:**
```
--dry-run -v
```
Entfernen Sie dann `--dry-run` für den eigentlichen Lauf.

**Fehlgeschlagene Übertragung debuggen:**
```
-vv --log-file /tmp/debug.log --retries 1
```

## Flags, die Sie meiden sollten, wenn Sie nicht wissen, was Sie tun

| Flag | Risiko |
|------|--------|
| `--delete-before` | Löscht Zieldateien vor der Übertragung -- gefährlich, wenn die Übertragung auf halbem Weg fehlschlägt |
| `--max-delete N` ohne Test | Kann die Bereinigung verhindern, wenn zu niedrig eingestellt |
| `--no-check-certificate` | Deaktiviert die TLS-Überprüfung -- Sicherheitsrisiko |
| `--ignore-checksum` | Überspringt die Integritätsprüfung -- untergräbt den Sinn von Checksummen |

## Best Practices

- **Mit Standardeinstellungen beginnen** -- die Standardeinstellungen von rclone sind für die meisten Workloads sinnvoll. Fügen Sie Flags nur hinzu, wenn Sie ein konkretes Problem oder einen messbaren Engpass haben.
- **Mit --dry-run testen**, bevor Sie neue Flags auf Produktions-Jobs anwenden.
- **Ihre Flags dokumentieren** -- notieren Sie beim Speichern eines Jobs mit benutzerdefinierten Flags, warum jedes Flag dort ist, damit Sie (oder Teammitglieder) die Absicht später nachvollziehen können.
- **Vorher und nachher benchmarken** -- messen Sie Übertragungszeiten mit und ohne Performance-Flags, um zu bestätigen, dass sie für Ihren Workload tatsächlich helfen.
- **-v für Produktions-Jobs verwenden** -- der geringe Mehraufwand lohnt sich für die Einsicht in das, was während jedes Laufs passiert ist.

---

**Verwandte Anleitungen:**

- [Integrität von Cloud-Dateien mit Check und Compare überprüfen](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Unterbrochene und fehlgeschlagene Übertragungen wiederherstellen](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Cloud-zu-Cloud-Übertragungen und Synchronisation](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
