---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "Cloud-Speichernutzung mit Rclone NCDU in RcloneView analysieren"
authors: [tayson]
description: "Nutzen Sie rclone ncdu über RcloneView, um die Cloud-Speichernutzung zu analysieren, große Dateien zu finden und Speicherplatz bei mehreren Cloud-Anbietern zu verwalten."
keywords:
  - rclone ncdu
  - Cloud-Speicheranalyse
  - Festplattennutzung Cloud
  - rcloneview Speicheranalyse
  - große Dateien in der Cloud finden
  - Cloud-Speicherplatz
  - rclone Festplattennutzung
  - Speicherverbrauch Übersicht
  - Cloud-Ordnergröße
  - Remote-Speicher analysieren
tags: [RcloneView, feature, cloud-storage, tips, guide, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speichernutzung mit Rclone NCDU in RcloneView analysieren

> Finden Sie genau heraus, wo Ihr Cloud-Speicherplatz bleibt – mit dem leistungsstarken NCDU-Tool von rclone, direkt zugänglich über das integrierte Terminal von RcloneView.

Die Kosten für Cloud-Speicher können sich unbemerkt anhäufen. Ein vergessener Backup-Ordner hier, ein Stapel unkomprimierter Videodateien dort – und plötzlich zahlen Sie für Terabytes an Speicher, deren Nutzung Ihnen gar nicht bewusst war. Rclone bringt ein integriertes NCDU-Tool (NCurses Disk Usage) mit, das Ihren Remote-Speicher scannt und eine interaktive, navigierbare Übersicht der Verzeichnisgrößen anzeigt. Über das integrierte Terminal und den Datei-Explorer von RcloneView können Sie ncdu-Scans ausführen, speicherfressende Dateien und Ordner identifizieren und sofort Maßnahmen ergreifen, um Speicherplatz zurückzugewinnen. Dieser Leitfaden behandelt alles von einfachen Scans bis hin zu fortgeschrittenen Analyse-Workflows über mehrere Cloud-Anbieter hinweg.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist Rclone NCDU?

Rclone NCDU ist eine für die Cloud angepasste Version des klassischen Linux-Tools `ncdu` (NCurses Disk Usage). Während das Original ncdu lokale Dateisysteme analysiert, funktioniert die rclone-Implementierung mit jedem von rclone unterstützten Remote-Speicher-Backend, darunter Google Drive, Amazon S3, Dropbox, OneDrive, Backblaze B2 und über 70 weitere Anbieter.

Wenn Sie `rclone ncdu` ausführen, wird ein rekursiver Scan des angegebenen Remote-Pfads durchgeführt, bei dem die Größe jeder Datei und jedes Verzeichnisses berechnet wird. Die Ergebnisse werden in einer interaktiven Terminaloberfläche angezeigt, in der Sie:

- **Durch Verzeichnisse navigieren** können, um sich durch verschachtelte Ordnerstrukturen zu bewegen
- **Nach Größe sortieren** können, um sofort die größten Speicherfresser zu sehen
- **Nach Anzahl sortieren** können, um Verzeichnisse mit übermäßig vielen kleinen Dateien zu finden
- **Dateien zur Löschung markieren** können direkt aus der Oberfläche heraus
- **Ergebnisse exportieren** können für die Offline-Analyse oder Berichterstattung

Der entscheidende Vorteil gegenüber dem einfachen Durchsuchen Ihres Cloud-Speichers ist Geschwindigkeit und Vollständigkeit. Eine manuelle Überprüfung von Tausenden von Ordnern ist unpraktisch, aber ncdu scannt alles in einem Durchgang und präsentiert die Ergebnisse in einem priorisierten, umsetzbaren Format.

**Wie es sich von anbieterspezifischen Tools unterscheidet:**

Die meisten Cloud-Anbieter bieten eine Art Anzeige der Speichernutzung, diese sind jedoch oft eingeschränkt:
- Google Drive zeigt die Gesamtnutzung an, schlüsselt sie aber nicht nach Ordnern auf
- S3 erfordert CloudWatch-Metriken oder Tools von Drittanbietern für eine detaillierte Analyse
- Dropbox zeigt die Nutzung pro freigegebenem Ordner an, übersieht aber die verschachtelte Struktur

Rclone ncdu bietet eine konsistente, detaillierte Analyse, unabhängig davon, welchen Anbieter Sie nutzen.

## Ihren ersten NCDU-Scan durchführen

Der Einstieg in ncdu über RcloneView ist unkompliziert. Öffnen Sie das integrierte Terminal von RcloneView oder nutzen Sie den Datei-Explorer für einen visuellen Ansatz.

**Über das Terminal von RcloneView:**

```bash
rclone ncdu remote:
```

Ersetzen Sie `remote:` durch den Namen Ihres konfigurierten Remotes. Zum Beispiel:

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**Ein bestimmtes Unterverzeichnis scannen:**

Wenn Sie nur einen Teil Ihres Speichers analysieren möchten, geben Sie den Pfad an:

```bash
rclone ncdu gdrive:/Projects/2025
```

Dies ist deutlich schneller als das Scannen des gesamten Remotes, insbesondere bei großen Speicherkonten.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**Den Scan-Vorgang verstehen:**

Beim Start von ncdu werden rekursiv alle Dateien und Verzeichnisse auf dem Remote aufgelistet. Wie lange dies dauert, hängt ab von:

| Faktor | Auswirkung |
|--------|--------|
| Gesamtzahl der Dateien | Wichtigster Faktor; 100.000 Dateien können mehrere Minuten dauern |
| API-Ratenbegrenzungen | Google Drive begrenzt auf ~10 Anfragen/Sekunde |
| Netzwerklatenz | Höhere Latenz verlangsamt API-Aufrufe |
| Verzeichnistiefe | Tief verschachtelte Strukturen erfordern mehr API-Aufrufe |

Für ein Google Drive mit 50.000 Dateien ist mit einer Scanzeit von 2-5 Minuten zu rechnen. Bei einem S3-Bucket mit Millionen von Objekten sollten Sie erwägen, bestimmte Präfixe statt des gesamten Buckets zu scannen.

## Die NCDU-Oberfläche navigieren

Sobald der Scan abgeschlossen ist, wird Ihnen eine interaktive Anzeige präsentiert. So navigieren Sie effektiv darin.

**Tastatursteuerung:**

| Taste | Aktion |
|-----|--------|
| Pfeil hoch/runter | Auswahl zwischen Elementen bewegen |
| Enter / Pfeil rechts | Ausgewähltes Verzeichnis öffnen |
| Pfeil links | Zurück zum übergeordneten Verzeichnis |
| d | Ausgewählte Datei oder Verzeichnis löschen |
| s | Sortierung nach Größe umschalten |
| c | Sortierung nach Anzahl (Anzahl der Dateien) umschalten |
| g | Grafikanzeige umschalten |
| n | Nach Name sortieren |
| q | ncdu beenden |

**Die Anzeige lesen:**

Jede Zeile in der ncdu-Ausgabe zeigt:
- Die Größe des Verzeichnisses oder der Datei (in menschenlesbarem Format)
- Ein visuelles Balkendiagramm, das die relative Größe im Vergleich zu den Geschwisterelementen zeigt
- Die Anzahl der enthaltenen Dateien (bei Verzeichnissen)
- Den Namen des Verzeichnisses oder der Datei

Die größten Elemente erscheinen standardmäßig oben, sodass sofort ersichtlich wird, wo Ihr Speicherplatz verbraucht wird.

**Praktischer Navigations-Workflow:**

1. Beginnen Sie auf der Root-Ebene, um zu sehen, welche Top-Level-Ordner am größten sind.
2. Öffnen Sie den größten Ordner, um dessen Inhalt zu sehen.
3. Bohren Sie sich weiter durch, bis Sie die spezifischen Dateien oder Unterverzeichnisse finden, die Speicherplatz belegen.
4. Notieren Sie sich die Pfade der Elemente, die Sie bereinigen möchten.
5. Verwenden Sie den Datei-Explorer von RcloneView, um diese Elemente zu löschen, zu verschieben oder zu archivieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Große Dateien und vergessene Daten finden

Der häufigste Anwendungsfall für ncdu ist das Auffinden unerwartet großer Dateien und vergessener Daten. Hier sind Strategien zur Identifizierung verschiedener Arten von Speicherverschwendung.

**Große Mediendateien identifizieren:**

Videodateien, Disk-Images und unkomprimierte Archive sind häufige Übeltäter. Wenn Sie in ncdu nach Größe sortieren, tauchen diese in der Regel sofort ganz oben auf. Häufige Übeltäter sind:

- Bildschirmaufnahmen und Video-Exporte, die in Arbeitsverzeichnissen zurückgelassen wurden
- Disk-Images virtueller Maschinen, die als Backups hochgeladen wurden
- Unkomprimierte ZIP- oder TAR-Archive, die komprimiert werden könnten
- Duplikate großer Datensätze in verschiedenen Ordnern

**Veraltete Backups finden:**

Viele Nutzer richten automatisierte Backups ein und vergessen sie dann. Achten Sie auf:
- Verzeichnisse mit Namen wie `backup`, `archive`, `old` oder mit Datumsstempeln
- Mehrere zeitgestempelte Kopien derselben Daten
- Datenbank-Dumps, die sich im Laufe der Zeit ohne Bereinigung ansammeln

**Duplizierte Dateien über Anbieter hinweg erkennen:**

Wenn Sie ncdu bei mehreren Remotes einsetzen, könnten Sie feststellen, dass dieselben Daten redundant gespeichert sind:

```bash
# Scan Google Drive
rclone ncdu gdrive:/Backups

# Scan S3
rclone ncdu s3:my-backup-bucket

# Compare the results to find overlapping data
```

**Große Dateitypen nach Anbieter:**

Verschiedene Anbieter ziehen unterschiedliche Arten von Speicherverschwendung an sich:

| Anbieter | Häufige große Dateien |
|----------|--------------------|
| Google Drive | Geteilte Videos, Colab-Notebooks mit Ausgaben, alte Takeout-Exporte |
| S3 | Log-Archive, alte Deployment-Artefakte, unkomprimierte Data Lakes |
| OneDrive | OneNote-Blobs, geteilte Teamdateien, kopierte Outlook-Anhänge |
| Dropbox | Duplikate von Kamera-Uploads, alte geteilte Ordner |

## Ergebnisse exportieren und vergleichen

Für die fortlaufende Speicherverwaltung möchten Sie ncdu-Ergebnisse exportieren und Veränderungen über die Zeit hinweg verfolgen.

**Scanergebnisse in eine Datei exportieren:**

Der `size`-Befehl von rclone ergänzt ncdu, indem er skriptfähige Ausgaben liefert:

```bash
# Get total size of a remote
rclone size gdrive: --json

# List directories with their sizes
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**Einen Speichernutzungsbericht erstellen:**

Kombinieren Sie rclone-Befehle, um einen umfassenden Bericht zu erstellen:

```bash
# Generate a JSON report of all file sizes
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Use rclone size for quick summaries
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**Nutzung über Anbieter hinweg vergleichen:**

Wenn Sie mehrere Cloud-Konten verwalten, führen Sie ncdu- oder size-Befehle für jedes aus, um sie zu vergleichen:

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

Das gibt Ihnen ein klares Bild davon, wie der Speicher verteilt ist und wo Optimierungsmaßnahmen die größte Wirkung erzielen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Fortgeschrittene NCDU-Techniken

Über das einfache Scannen hinaus können mehrere fortgeschrittene Techniken Ihre Speicheranalyse effektiver gestalten.

**Scans filtern:**

Verwenden Sie die Filter-Flags von rclone, um Ihre Analyse zu fokussieren:

```bash
# Only scan files larger than 100 MB
rclone ncdu gdrive: --min-size 100M

# Exclude certain directories from the scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Only scan specific file types
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**Scanergebnisse zwischenspeichern:**

Bei sehr großen Remotes kann das Scannen lange dauern. Aktivieren Sie den Verzeichnis-Cache von rclone, um wiederholte Scans zu beschleunigen:

```bash
rclone ncdu gdrive: --fast-list
```

Das Flag `--fast-list` verwendet weniger API-Aufrufe, indem Verzeichnislisten gebündelt angefordert werden. Dies kann die Scanzeiten bei Anbietern, die dies unterstützen (S3, Google Drive, B2), um 50 % oder mehr reduzieren.

**Freigegebenen Speicher analysieren:**

Bei Google Drive zählt der Speicher, der von mit Ihnen geteilten Dateien belegt wird, nicht gegen Ihr Kontingent, aber Dateien, die Ihnen in geteilten Laufwerken gehören, schon. Verwenden Sie ncdu, um bestimmte geteilte Laufwerke zu scannen:

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**Regelmäßige Scans planen:**

Richten Sie automatisierte Speicherberichte mit cron oder dem Job-Scheduler von RcloneView ein:

```bash
# Weekly storage report
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## Auf Grundlage der Ergebnisse handeln

Nachdem Sie Speicherverschwendung identifiziert haben, nutzen Sie RcloneView, um direkt Maßnahmen zu ergreifen.

**Unnötige Dateien löschen:**

Drücken Sie in der ncdu-Oberfläche `d` auf einer beliebigen Datei oder einem Verzeichnis, um sie zu löschen. Alternativ können Sie den Datei-Explorer von RcloneView verwenden, um zu den identifizierten Pfaden zu navigieren und Dateien über die GUI zu löschen.

**Kalte Daten in günstigeren Speicher verschieben:**

Wenn Sie große Datensätze finden, die Sie behalten müssen, aber selten benötigen, verschieben Sie sie in eine günstigere Speicherstufe:

```bash
# Move old archives from Google Drive to Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

Der Zwei-Fenster-Explorer von RcloneView macht dies per Drag-and-Drop denkbar einfach.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**Vor dem Archivieren komprimieren:**

Bei textlastigen Daten wie Logs und CSVs sollten Sie vor der Übertragung in den Kaltspeicher komprimieren:

```bash
# Compress locally, then upload
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**Lifecycle-Richtlinien einrichten:**

Verhindern Sie nach dem Aufräumen zukünftige Speicherüberladung, indem Sie eine automatisierte Bereinigung konfigurieren. Nutzen Sie die Job-Planung von RcloneView, um periodische Bereinigungsaufgaben auszuführen:

- Dateien löschen, die älter als ein bestimmtes Alter sind: `rclone delete remote: --min-age 365d`
- Leere Verzeichnisse entfernen: `rclone rmdirs remote: --leave-root`
- Dateien auf Google Drive deduplizieren: `rclone dedupe gdrive: --dedupe-mode newest`

## Erste Schritte

Rclone NCDU ist eines der unmittelbar wertvollsten Tools im rclone-Ökosystem. Ein einziger Scan kann Gigabytes an vergessenen Daten, Duplikaten und Speicherverschwendung aufdecken, von denen Sie nichts wussten. Über RcloneView können Sie diese Scans ausführen, die Ergebnisse überprüfen und Maßnahmen ergreifen, ohne die Anwendung jemals zu verlassen. Beginnen Sie damit, Ihr größtes Cloud-Speicherkonto zu scannen, nach Größe zu sortieren und die 10 größten Elemente durchzugehen. Sie werden wahrscheinlich schon bei Ihrer ersten Sitzung erhebliche Einsparungen finden.

---

**Weiterführende Anleitungen:**
- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
