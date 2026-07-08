---
slug: min-age-max-age-time-based-filters-rcloneview
title: "Min-Age- und Max-Age-Zeitfilter in RcloneView verwenden"
authors:
  - tayson
description: "Verwenden Sie die zeitbasierten Filter min-age und max-age in RcloneView, um nur Dateien zu synchronisieren, zu kopieren oder zu sichern, die innerhalb eines bestimmten Zeitfensters geändert wurden. Übertragen Sie aktuelle Änderungen oder überspringen Sie alte Dateien."
keywords:
  - rcloneview
  - min-age filter
  - max-age filter
  - zeitbasierte Synchronisation
  - rclone min-age
  - rclone max-age
  - nur aktuelle Dateien synchronisieren
  - nach Datum filtern
  - inkrementelle Synchronisationszeit
  - Cloud-Sync-Datumsfilter
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Min-Age- und Max-Age-Zeitfilter in RcloneView verwenden

> Nicht jeder Synchronisationsjob muss alle Dateien übertragen. Mit den zeitbasierten Filtern von RcloneView können Sie gezielt nur Dateien auswählen, die innerhalb eines bestimmten Zeitfensters geändert wurden — synchronisieren Sie die heutigen Änderungen, überspringen Sie Dateien, die älter als 30 Tage sind, oder sichern Sie nur kürzlich hochgeladene Dateien.

Die Flags `--min-age` und `--max-age` von rclone sind leistungsstarke Werkzeuge, um zu steuern, welche Dateien basierend auf ihrem Änderungsdatum an einer Synchronisation, einem Kopier- oder Verschiebevorgang teilnehmen. RcloneView macht diese Optionen über seine benutzerdefinierte Flags-Oberfläche zugänglich und ermöglicht eine präzise zeitbasierte Dateiauswahl, ohne die Kommandozeile zu verwenden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Min-Age und Max-Age verstehen

Die beiden Flags fungieren als zeitbasierte Filter auf Grundlage des Änderungsdatums der Dateien:

- **`--max-age`**: Berücksichtigt nur Dateien, die innerhalb des angegebenen Zeitfensters geändert wurden. Eine Datei, die vor 2 Stunden geändert wurde, besteht `--max-age 24h`. Eine Datei, die vor 3 Tagen geändert wurde, besteht `--max-age 24h` nicht und wird übersprungen.
- **`--min-age`**: Berücksichtigt nur Dateien, die *vor* dem angegebenen Zeitfenster geändert wurden. Eine Datei, die vor 30 Tagen geändert wurde, besteht `--min-age 7d`. Eine Datei, die gestern geändert wurde, besteht `--min-age 7d` nicht und wird übersprungen.

Man kann es sich so vorstellen:
- `--max-age 24h` = "Dateien, die neuer als 24 Stunden sind" (kürzlich geändert)
- `--min-age 7d` = "Dateien, die älter als 7 Tage sind" (nicht kürzlich geändert)

## Zeitformat

Beide Flags akzeptieren flexible Zeitformate:

| Format | Beispiel | Bedeutung |
|---|---|---|
| Dauer | `30s`, `5m`, `2h`, `7d`, `4w` | Sekunden, Minuten, Stunden, Tage, Wochen |
| Kombiniert | `1d2h30m` | 1 Tag, 2 Stunden, 30 Minuten |
| Absolutes Datum | `2026-04-01` | Dateien vor/nach dem 1. April 2026 |
| Datum und Uhrzeit | `2026-04-01T15:00:00` | Dateien vor/nach dem 1. April um 15 Uhr |

Dauerwerte beziehen sich auf die aktuelle Uhrzeit, zu der der Job ausgeführt wird.

## Anwendungsfall 1: Nur die heutigen Änderungen synchronisieren

Wenn Sie einen großen Cloud-Speicher mit Terabytes an Daten haben, aber nur Dateien synchronisieren möchten, die sich heute geändert haben:

```
--max-age 24h
```

Fügen Sie dies in das Feld für benutzerdefinierte Flags in der Job-Konfiguration von RcloneView ein. Der Synchronisationsjob berücksichtigt dann nur Dateien, die in den letzten 24 Stunden geändert wurden, wodurch der Zeitaufwand für das Auflisten und Vergleichen von Dateien drastisch reduziert wird. Dies ist nützlich für tägliche inkrementelle Backups, bei denen bekannt ist, dass sich täglich nur ein kleiner Prozentsatz der Dateien ändert.

## Anwendungsfall 2: Alte Dateien archivieren

Verschieben Sie Dateien, die älter als 90 Tage sind, vom aktiven Speicher in einen Kaltspeicher (Cold Storage):

```
--min-age 90d
```

Verwenden Sie dies zusammen mit einer **Verschiebe**-Operation (nicht Synchronisation), um Dateien, die älter als 90 Tage sind, von Google Drive zu S3 Glacier zu übertragen. Die Dateien werden nach erfolgreicher Übertragung von Google Drive entfernt, wodurch Speicherplatz auf dem aktiven Speicher freigegeben wird, während sie im Archiv erhalten bleiben.

## Anwendungsfall 3: Zeitfenster-Synchronisation

Kombinieren Sie beide Flags, um ein bestimmtes Zeitfenster anzusteuern. Synchronisieren Sie beispielsweise Dateien, die zwischen 7 und 30 Tagen zuvor geändert wurden:

```
--min-age 7d --max-age 30d
```

Dies ist nützlich für gestaffelte Archivierungsworkflows — Dateien, die weniger als 7 Tage alt sind, verbleiben auf dem aktiven Speicher, Dateien zwischen 7 und 30 Tagen wandern in den Warmspeicher, und Dateien, die älter als 30 Tage sind, wandern in den Kaltspeicher.

## Anwendungsfall 4: Kürzlich geänderte Dateien überspringen

Bei einer Migration möchten Sie möglicherweise Dateien überspringen, die gerade aktiv bearbeitet werden, um die Übertragung unvollständiger Arbeiten zu vermeiden:

```
--min-age 1h
```

Dadurch wird sichergestellt, dass nur Dateien übertragen werden, die seit mindestens einer Stunde unverändert sind. Dateien, die derzeit bearbeitet oder gespeichert werden, bleiben für den nächsten Synchronisationslauf übrig.

## Anwendungsfall 5: Nächtliches Backup der aktuellen Arbeit

Für einen nächtlichen Backup-Job, der nur die Arbeit des Tages erfasst:

```
--max-age 25h
```

Die Verwendung von 25 Stunden (statt 24) bietet eine Stunde Überschneidung mit dem Backup des Vortages, sodass sichergestellt ist, dass aufgrund von Zeitabweichungen zwischen dem Backup-Zeitplan und den Änderungszeiten der Dateien keine Dateien übersehen werden.

## Zeitfilter in RcloneView anwenden

In der Job-Konfiguration von RcloneView:

1. Öffnen Sie die Einstellungen für den Synchronisations- oder Kopierjob.
2. Navigieren Sie zum Bereich für erweiterte Optionen oder benutzerdefinierte Flags.
3. Fügen Sie `--max-age 24h` oder `--min-age 7d` (oder beides) in das Flags-Feld ein.
4. Speichern Sie den Job und führen Sie ihn aus.

Die Flags gelten für jeden Dateivergleich während des Jobs. Dateien, die die Zeitkriterien nicht erfüllen, werden vollständig übersprungen — sie werden nicht aufgelistet, verglichen oder übertragen. Dies kann die Job-Dauer bei großen Remote-Speichern erheblich verkürzen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## Kombination mit anderen Filtern

Zeitbasierte Filter funktionieren zusammen mit anderen rclone-Filteroptionen:

- **Mit Include/Exclude**: `--max-age 24h --include "*.pdf"` synchronisiert nur PDF-Dateien, die in den letzten 24 Stunden geändert wurden.
- **Mit Größenfiltern**: `--max-age 7d --min-size 1M` synchronisiert nur Dateien, die größer als 1 MB sind und in der letzten Woche geändert wurden.
- **Mit Verzeichnisfiltern**: `--max-age 24h --include "/projects/**"` beschränkt den Umfang auf ein bestimmtes Verzeichnis.

Diese Kombinierbarkeit ermöglicht es Ihnen, präzise Übertragungsregeln ohne komplexe Skripte zu erstellen.

## Erst ein Trockenlauf (Dry Run)

Bevor Sie einen zeitgefilterten Job auf Produktionsdaten ausführen, verwenden Sie den Dry-Run-Modus von RcloneView, um vorab zu sehen, welche Dateien betroffen sind. Der Dry Run listet die Dateien auf, die Ihren Filterkriterien entsprechen, ohne sie tatsächlich zu übertragen. So können Sie bestätigen, dass Ihre `--min-age`- und `--max-age`-Werte die richtigen Dateien auswählen, bevor Sie die Operation tatsächlich durchführen.

## Häufige Fallstricke

- **Zeitzonen**: Änderungszeiten werden in UTC verglichen. Wenn Ihre lokale Zeitzone erheblich von UTC abweicht, passen Sie Ihre Dauerwerte entsprechend an oder verwenden Sie absolute Datumsformate.
- **Genauigkeit des Anbieters**: Einige Cloud-Anbieter (insbesondere Google Drive) melden Änderungszeiten mit begrenzter Präzision. Eine Datei, die "heute" auf Google Drive geändert wurde, kann einen Zeitstempel haben, der um mehrere Sekunden von der tatsächlichen Änderungszeit abweicht.
- **Sync vs. Copy mit min-age**: Die Verwendung von `--min-age` mit Sync kann gefährlich sein — Sync löscht Dateien im Ziel, die im Quellverzeichnis nicht (mehr) vorhanden sind. Wenn `--min-age` aktuelle Dateien aus der Quellliste herausfiltert, könnte Sync sie im Ziel löschen. Verwenden Sie Copy (nicht Sync), wenn Sie `--min-age` einsetzen, um unbeabsichtigte Löschungen zu vermeiden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen Synchronisations- oder Kopierjob im Job-Manager.
3. Fügen Sie die Flags `--max-age` oder `--min-age` im Bereich für benutzerdefinierte Flags hinzu.
4. Testen Sie mit einem Dry Run, um die Dateiauswahl zu überprüfen.
5. Planen Sie den Job für automatisierte zeitbasierte Backups.

Zeitbasierte Filter machen RcloneView zu einem präzisen Werkzeug für inkrementelle Backups, gestaffelte Archivierung und gezielte Synchronisationsvorgänge. Nutzen Sie sie, um die Übertragungszeit zu verkürzen, die Bandbreitennutzung zu minimieren und anspruchsvolle Workflows für den Daten-Lebenszyklus umzusetzen.

---

**Weitere Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
