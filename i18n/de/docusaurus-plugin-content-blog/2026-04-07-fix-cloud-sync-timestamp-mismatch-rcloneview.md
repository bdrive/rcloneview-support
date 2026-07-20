---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "Zeitstempel-Fehler bei der Cloud-Synchronisation in RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie Zeitstempel-Fehler bei der Cloud-Synchronisation in RcloneView. Behandelt Uhrenabweichungen, Zeitzonenunterschiede, Einschränkungen der Provider-Metadaten, Checksummenvergleich und Flags wie --use-server-modtime und --no-update-modtime."
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - guide
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zeitstempel-Fehler bei der Cloud-Synchronisation in RcloneView beheben

> Zeitstempel-Abweichungen führen dazu, dass rclone Dateien erneut überträgt, die sich gar nicht geändert haben – das verschwendet Bandbreite und Zeit. Dieser Leitfaden erklärt, warum das passiert und wie Sie RcloneView so konfigurieren, dass es korrekt damit umgeht.

Wenn rclone Dateien zwischen zwei Orten synchronisiert, vergleicht es die Änderungszeitstempel, um zu entscheiden, welche Dateien aktualisiert werden müssen. Wenn Quelle und Ziel für dieselbe Datei unterschiedliche Zeitstempel melden – selbst nur um eine Sekunde –, behandelt rclone die Datei als geändert und überträgt sie erneut. Das führt zu unnötigen Übertragungen, aufgeblähten Bandbreitenkosten und Synchronisationsjobs, die nie sauber abzuschließen scheinen. Das Problem tritt besonders häufig auf, wenn zwischen verschiedenen Cloud-Anbietern oder zwischen lokalem Speicher und Cloud-Remotes synchronisiert wird, die Zeitstempel unterschiedlich handhaben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Zeitstempel-Abweichungen auftreten

Zeitstempel wirken simpel – eine Datei wurde zu einem bestimmten Zeitpunkt geändert –, aber die Realität bei Cloud-Anbietern ist weit komplexer. Mehrere Faktoren können dazu führen, dass dieselbe Datei auf Quelle und Ziel unterschiedliche Änderungszeiten meldet.

### Uhrenabweichung zwischen Anbietern

Jeder Cloud-Anbieter betreibt eigene interne Uhren. Zwar sind die meisten per NTP auf Millisekunden genau synchronisiert, doch der für eine Datei gespeicherte Zeitstempel kann an unterschiedlichen Punkten des Uploadvorgangs gesetzt werden. Ein Anbieter erfasst möglicherweise den Zeitpunkt des Upload-Starts, ein anderer den des Abschlusses. Bei großen Dateien kann dieser Unterschied mehrere Sekunden oder mehr betragen.

### Zeitzonen- und Präzisionsunterschiede

Manche Anbieter speichern Zeitstempel in UTC, andere in der lokalen Zeitzone des Nutzers, und manche runden die Präzision. Zum Beispiel:

- **Google Drive** speichert Änderungszeiten mit Millisekundengenauigkeit und erlaubt das Setzen benutzerdefinierter Änderungszeiten.
- **OneDrive** unterstützt Änderungszeiten mit Sekundengenauigkeit.
- **Amazon S3** unterstützt Änderungszeiten in den Objekt-Metadaten nicht nativ – stattdessen wird die Upload-Zeit als Last-Modified-Header erfasst.
- **Dropbox** bewahrt vom Client gesetzte Änderungszeiten, jedoch nur sekundengenau.
- **SFTP** verlässt sich auf das Remote-Dateisystem, das eine Sekunden- oder Mikrosekundengenauigkeit haben kann.

Wenn Sie von einem Anbieter mit Millisekundengenauigkeit zu einem mit Sekundengenauigkeit synchronisieren, führt die Rundung zu einer konsistenten Abweichung von 1 Sekunde (oder Sekundenbruchteilen).

### Änderungszeit wird nicht unterstützt

Manche Cloud-Speicher-Backends unterstützen das Erhalten von Änderungszeiten schlicht nicht:

- **S3-kompatibler Speicher** (AWS S3, Wasabi, Backblaze B2 im S3-Modus, Cloudflare R2) speichert die Upload-Zeit, nicht die ursprüngliche Datei-Änderungszeit. Rclone umgeht dies, indem die ursprüngliche Änderungszeit in den Objekt-Metadaten (X-Amz-Meta-Mtime) gespeichert wird – das funktioniert jedoch nur, wenn die Metadaten beim initialen Upload durch rclone gesetzt wurden.
- Dateien, die über die Weboberfläche des Anbieters oder andere Tools hochgeladen wurden, besitzen diese Metadaten nicht, was bei nachfolgenden Synchronisationen zu Abweichungen führt.

### Metadaten werden bei der Übertragung nicht erhalten

Wenn Dateien ursprünglich von einem anderen Tool als rclone auf das Ziel hochgeladen wurden oder Metadaten-Header von einem Proxy oder CDN entfernt wurden, kann rclone die erwarteten Metadaten zur Änderungszeit nicht finden. Es greift dann auf die Last-Modified-Zeit des Anbieters zurück, die von der Quelle abweicht.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## Das Problem diagnostizieren

Bevor Sie Lösungen anwenden, sollten Sie bestätigen, dass Zeitstempel tatsächlich die Ursache sind. Führen Sie eine Trockenlauf-Synchronisation (Dry-Run) in RcloneView oder im Terminal aus:

```bash
rclone sync source: dest: --dry-run -v
```

Achten Sie auf die Ausgabe. Wenn Sie Zeilen wie diese sehen:

```
NOTICE: file.txt: Skipped copy (src older)
```

oder Dateien trotz identischen Inhalts zur Übertragung markiert werden, sind Zeitstempel wahrscheinlich die Ursache. Sie können auch einzelne Dateien vergleichen:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

Der Befehl `lsl` zeigt Dateigröße, Änderungszeit und Pfad. Vergleichen Sie die Zeitstempel – wenn die Größen übereinstimmen, die Zeiten aber um ein paar Sekunden abweichen oder unterschiedliche Zeitzonen anzeigen, liegt eine Zeitstempel-Abweichung vor.

Nutzen Sie in RcloneView die Funktion **Ordner vergleichen**, um Unterschiede visuell zu prüfen. Die Vergleichsansicht hebt Dateien hervor, die sich in Größe, Zeitstempel oder Prüfsumme unterscheiden, sodass sich reine Zeitstempel-Abweichungen leicht erkennen lassen.

## --use-server-modtime verwenden

Das Flag `--use-server-modtime` weist rclone an, die vom Server gemeldete Änderungszeit zu verwenden, anstatt eine in den Metadaten gespeicherte Zeit. Das ist nützlich, wenn:

- Sie ein konsistentes Verhalten wünschen, unabhängig davon, wie Dateien ursprünglich hochgeladen wurden.
- Änderungszeiten in den Metadaten unzuverlässig oder nicht vorhanden sind.
- Sie zwischen zwei Orten synchronisieren, an denen Dateien von unterschiedlichen Tools hochgeladen wurden.

```bash
rclone sync source: dest: --use-server-modtime
```

In RcloneView können Sie dieses Flag in der Job-Konfiguration unter den erweiterten Optionen oder benutzerdefinierten Flags hinzufügen.

**Wann verwenden:** Wenn Sie von einem S3-kompatiblen Backend synchronisieren, auf dem Dateien von anderen Tools als rclone hochgeladen wurden, oder wenn Metadaten-Header inkonsistent sind.

**Kompromiss:** Server-Änderungszeiten spiegeln die Upload-Zeit wider, nicht die ursprüngliche Datei-Änderungszeit. Das bedeutet, rclone kann nicht erkennen, ob eine Datei vor dem erneuten Hochladen geändert wurde – es sieht nur den Upload-Zeitstempel.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## --no-update-modtime verwenden

Das Flag `--no-update-modtime` verhindert, dass rclone nach dem Kopieren einer Datei die Änderungszeit am Ziel setzt. Standardmäßig kopiert rclone eine Datei und setzt danach die Änderungszeit des Ziels passend zur Quelle. Wenn das Ziel das Setzen von Änderungszeiten nicht unterstützt (oder rundet), entsteht dadurch eine dauerhafte Abweichung bei der nächsten Synchronisation.

```bash
rclone sync source: dest: --no-update-modtime
```

**Wann verwenden:** Wenn der Ziel-Anbieter das Setzen von Änderungszeiten nicht unterstützt oder wenn das Setzen der Zeit Rundungsfehler verursacht, die unnötige erneute Übertragungen auslösen.

**Kompromiss:** Ohne übereinstimmende Änderungszeiten muss rclone eine andere Methode (z. B. Prüfsummen) verwenden, um Änderungen bei nachfolgenden Synchronisationen zu erkennen.

## Wechsel zum Checksummen-basierten Vergleich

Wenn Zeitstempel zwischen Ihrer Quelle und Ihrem Ziel grundsätzlich unzuverlässig sind, können Sie rclone anweisen, Dateien anhand der Prüfsumme statt der Änderungszeit zu vergleichen. Das ist die zuverlässigste Methode, um festzustellen, ob sich eine Datei tatsächlich geändert hat.

```bash
rclone sync source: dest: --checksum
```

Das Flag `--checksum` veranlasst rclone, Hashes (MD5, SHA-1 oder andere unterstützte Algorithmen) für Dateien auf beiden Seiten zu berechnen oder abzurufen und nur Dateien zu übertragen, bei denen sich der Hash unterscheidet.

**Vorteile:**

- Ignoriert Zeitstempel vollständig – keine falsch positiven Ergebnisse mehr durch Uhrenabweichungen oder Präzisionsunterschiede.
- Erkennt tatsächliche Inhaltsänderungen, nicht nur Metadatenunterschiede.
- Funktioniert zuverlässig bei allen Anbietern.

**Nachteile:**

- Langsamer bei großen Dateibeständen, da rclone für jede Datei Prüfsummen berechnen oder abrufen muss.
- Manche Anbieter liefern nicht für alle Dateien Prüfsummen (z. B. haben mehrteilig hochgeladene S3-Objekte zusammengesetzte ETags, die keine Standard-MD5-Hashes sind).
- Erhöht die Anzahl der API-Aufrufe, was auf Ratenlimits angerechnet werden oder Kosten verursachen kann.

Aktivieren Sie in RcloneView den Prüfsummenvergleich in den Einstellungen des Synchronisationsjobs. Bei großen Datenmengen empfiehlt es sich, Checksummen-Synchronisationen nach einem Zeitplan (z. B. wöchentlich) auszuführen und für tägliche inkrementelle Backups zeitstempelbasierte Synchronisationen zu verwenden.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Wie unterschiedliche Anbieter Zeitstempel handhaben

Das Verständnis des Zeitstempel-Verhaltens jedes Anbieters hilft Ihnen, die richtige Synchronisationsstrategie zu wählen.

| Anbieter | Modtime-Unterstützung | Präzision | Hinweise |
|---|---|---|---|
| Google Drive | Vollständig | Millisekunde | Erlaubt das Setzen benutzerdefinierter Modtime über die API |
| OneDrive | Vollständig | Sekunde | Unterstützt das Setzen der Modtime |
| Dropbox | Vollständig | Sekunde | Vom Client gesetzte Modtime wird erhalten |
| Amazon S3 | Nur Metadaten | Sekunde | Rclone speichert Modtime in X-Amz-Meta-Mtime |
| Backblaze B2 | Nur Metadaten | Millisekunde | Gespeichert in Datei-Info-Headern |
| Wasabi | Nur Metadaten | Sekunde | S3-kompatibel, verwendet X-Amz-Meta-Mtime |
| Cloudflare R2 | Nur Metadaten | Sekunde | S3-kompatibel, metadatenbasiert |
| SFTP | Abhängig vom Dateisystem | Variiert | Abhängig vom Remote-Dateisystem |
| Azure Blob | Nur Metadaten | Sekunde | Rclone verwendet Metadaten-Header |
| Google Cloud Storage | Nur Metadaten | Sekunde | Benutzerdefinierte Metadaten für Modtime |

Beim Synchronisieren zwischen zwei Anbietern mit „Vollständiger“ Modtime-Unterstützung (z. B. Google Drive zu OneDrive) funktioniert der zeitstempelbasierte Vergleich zuverlässig. Beim Synchronisieren zwischen einem Anbieter mit „Vollständiger“ und einem mit „Nur Metadaten“-Unterstützung sind Abweichungen häufig, sofern die Dateien nicht ursprünglich von rclone hochgeladen wurden.

## Flags für beste Ergebnisse kombinieren

Für die meisten anbieterübergreifenden Synchronisationsszenarien liefert eine Kombination von Flags die besten Ergebnisse:

**Für S3-zu-S3- oder S3-zu-Cloud-Synchronisationen, bei denen Dateien von anderen Tools hochgeladen wurden:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**Für Google Drive zu OneDrive (beide unterstützen Modtime):**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

Das Flag `--modify-window` fügt dem Zeitstempelvergleich eine Toleranz hinzu. Setzt man es auf `1s`, gelten Dateien mit Zeitstempeln, die innerhalb einer Sekunde voneinander liegen, als identisch. Das gleicht Rundungen durch Präzisionsunterschiede aus.

**Für tägliche inkrementelle Synchronisation mit gelegentlicher vollständiger Verifizierung:**

```bash
# Täglich (schnell, zeitstempelbasiert mit Toleranz)
rclone sync source: dest: --modify-window 2s

# Wöchentlich (gründlich, checksummenbasiert)
rclone sync source: dest: --checksum
```

In RcloneView können Sie zwei separate Synchronisationsjobs erstellen – einen für tägliche Läufe mit `--modify-window` und einen für wöchentliche Läufe mit `--checksum` – und diese unabhängig voneinander planen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Zeitstempel-Probleme bei neuen Setups vermeiden

Wenn Sie einen neuen Synchronisations-Workflow einrichten, können Sie die meisten Zeitstempel-Probleme von Anfang an vermeiden:

1. **Verwenden Sie rclone für alle Übertragungen** — rclone setzt Metadaten konsistent, sodass von rclone hochgeladene Dateien überall über korrekte Änderungszeit-Metadaten verfügen.
2. **Setzen Sie --modify-window passend** für Ihr Anbieterpaar bereits ab der ersten Synchronisation.
3. **Verwenden Sie den Checksummen-Modus für die erste Migration** — wenn Sie einen großen Datenbestand erstmals zu einem neuen Anbieter verschieben, verwenden Sie `--checksum`, um eine saubere Ausgangsbasis sicherzustellen.
4. **Testen Sie zuerst mit einem kleinen Ordner** — synchronisieren Sie eine Handvoll Dateien, prüfen Sie auf Abweichungen und skalieren Sie dann hoch.
5. **Dokumentieren Sie Ihre Flags** — wenn Sie die richtige Kombination für Ihre Anbieter gefunden haben, speichern Sie diese als RcloneView-Job, damit Sie sie nicht später erneut herausfinden müssen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihre Quell- und Ziel-Remotes hinzu** im Remote-Manager.
3. **Nutzen Sie Ordner vergleichen**, um Unterschiede vor der Synchronisation zu prüfen.
4. **Konfigurieren Sie Synchronisations-Flags** (`--checksum`, `--modify-window`, `--no-update-modtime`) passend zu Ihrem Anbieterpaar.
5. **Erstellen Sie einen geplanten Synchronisationsjob** und überwachen Sie die Ergebnisse im Job-Verlauf.

Zeitstempel-Abweichungen sind eine der häufigsten Ursachen für ineffiziente Cloud-Synchronisationen. Mit den richtigen Flags und einem Verständnis dafür, wie jeder Anbieter Änderungszeiten handhabt, können Sie unnötige Übertragungen vermeiden und Ihre Synchronisationsjobs sauber halten.

---

**Verwandte Anleitungen:**

- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Remote-Speicher synchronisieren](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
