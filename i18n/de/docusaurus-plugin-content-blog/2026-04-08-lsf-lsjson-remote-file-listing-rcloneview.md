---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "Remote-Dateien mit dem RcloneView Explorer auflisten und analysieren"
authors:
  - tayson
description: "Nutzen Sie den RcloneView Explorer, um Remote-Cloud-Dateien visuell aufzulisten, zu sortieren und zu analysieren. Ersetzen Sie die rclone Befehle lsf und lsjson durch eine intuitive GUI für die Dateiverwaltung."
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - remote file listing
  - cloud storage analysis
  - file size analysis
  - cloud file management
  - storage usage
  - directory comparison
  - cloud file explorer
tags:
  - RcloneView
  - feature
  - file-management
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote-Dateien mit dem RcloneView Explorer auflisten und analysieren

> Zu verstehen, was in Ihren Cloud-Konten gespeichert ist, ist der erste Schritt zu einer effektiven Verwaltung. Der **RcloneView** Explorer bietet ein visuelles Datei-Listing-Erlebnis, das komplexe CLI-Befehle durch intuitives Browsen, Sortieren und Analysieren ersetzt.

Die rclone CLI bietet leistungsstarke Befehle zum Auflisten von Dateien wie `lsf` und `lsjson`, die Dateidetails in verschiedenen Formaten ausgeben. Diese Befehle sind nützlich für Skripting, aber für den täglichen Umgang mit Dateien nicht ideal. Tausende Zeilen Terminal-Ausgabe zu durchsuchen, um eine bestimmte Datei zu finden oder Speicherfresser zu identifizieren, ist mühsam und fehleranfällig.

Der Explorer von RcloneView verwandelt dieses Erlebnis in etwas Visuelles und Interaktives. Sie erhalten dieselben zugrunde liegenden Daten, jedoch dargestellt in einer vertrauten Dateimanager-Oberfläche mit Sortierung, Filterung und mehrspaltigen Ansichten. Sie sehen Dateigrößen, Änderungsdaten und Dateitypen auf einen Blick und können mit einem einzigen Klick in Verzeichnisstrukturen eintauchen.

Für Nutzer, die weiterhin die rohe CLI-Ausgabe benötigen, ist das integrierte Terminal von RcloneView nur einen Tastendruck entfernt und stellt `rclone lsf`- und `lsjson`-Befehle bereit – so erhalten Sie das Beste aus beiden Welten in einer einzigen Anwendung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Visuelles Datei-Listing im Explorer

Das Explorer-Panel von RcloneView zeigt den Inhalt eines beliebigen konfigurierten Remotes in einem standardmäßigen Dateimanager-Layout an. Wenn Sie ein Remote auswählen und zu einem Verzeichnis navigieren, sehen Sie:

- **Datei- und Ordnernamen** mit erkennbaren Symbolen für gängige Dateitypen.
- **Dateigrößen** in einem menschenlesbaren Format (KB, MB, GB).
- **Änderungsdaten**, die zeigen, wann jede Datei zuletzt aktualisiert wurde.
- **Dateianzahlen** für Verzeichnisse, damit Sie sehen können, wie viele Elemente jeder Ordner enthält.

Dies ist das visuelle Äquivalent zur Ausführung von `rclone lsf --format "pst" remote:path`, jedoch mit der Möglichkeit, direkt mit jedem Element zu interagieren. Klicken Sie auf einen Ordner, um ihn zu öffnen. Rechtsklicken Sie auf eine Datei für Aktionen wie Kopieren, Verschieben oder Löschen. Wählen Sie mehrere Dateien für Stapeloperationen aus.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Sortieren nach Größe, Datum und Name

Einer der häufigsten Gründe, Remote-Dateien aufzulisten, ist die Suche nach bestimmten Elementen oder das Erkennen von Mustern. Der Explorer von RcloneView unterstützt spaltenbasierte Sortierung, die dies mühelos macht:

- **Nach Größe sortieren**, um schnell die größten Dateien zu finden, die Ihr Speicherkontingent belegen. Dies ist besonders nützlich bei Cloud-Anbietern mit Speicherlimits, bei denen wenige große Dateien den Großteil der Nutzung ausmachen können.
- **Nach Datum sortieren**, um kürzlich geänderte Dateien zu identifizieren, veraltete Inhalte zu finden, die seit Monaten nicht angerührt wurden, oder zu überprüfen, ob eine kürzliche Synchronisation die erwarteten Dateien aktualisiert hat.
- **Nach Name sortieren** für alphabetisches Browsen, wenn Sie ungefähr wissen, wonach Sie suchen.

Klicken Sie auf eine Spaltenüberschrift, um nach dieser Spalte zu sortieren. Klicken Sie erneut, um die Sortierreihenfolge umzukehren. Diese einfache Interaktion ersetzt das Weiterleiten der `rclone lsf`-Ausgabe an `sort`-Befehle auf der CLI.

## Große Dateien finden und Speichernutzung analysieren

Speicherkosten summieren sich, und zu wissen, wofür Ihr Speicherplatz verwendet wird, ist für das Kostenmanagement unerlässlich. RcloneView hilft Ihnen, die Speichernutzung zu analysieren, ohne separate Auditskripte auszuführen:

1. Navigieren Sie im Explorer zum Stammverzeichnis eines Remotes.
2. Sortieren Sie nach Größe in absteigender Reihenfolge, um sofort die größten Dateien sichtbar zu machen.
3. Tauchen Sie in große Verzeichnisse ein, um zu sehen, welche Unterverzeichnisse am meisten zur Gesamtnutzung beitragen.

Dieser Workflow ersetzt das gängige CLI-Muster, `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` auszuführen und zu versuchen, die JSON-Ausgabe visuell zu interpretieren. Im Explorer werden dieselben Informationen in einer sortierbaren, anklickbaren Oberfläche dargestellt.

Für eine tiefergehende Analyse können Sie das integrierte Terminal von RcloneView nutzen, um `rclone ncdu remote:` auszuführen, was eine interaktive Aufschlüsselung der Speichernutzung direkt innerhalb der Anwendung bietet.

## Verzeichnisbäume vergleichen

Das zweispaltige Explorer-Layout von RcloneView ist für den Vergleich von Verzeichnisinhalten zwischen Remotes konzipiert. Laden Sie ein Remote links und ein anderes rechts und vergleichen Sie dann visuell deren Strukturen:

- Identifizieren Sie Dateien, die auf einem Remote existieren, auf dem anderen jedoch nicht.
- Erkennen Sie Unterschiede in Dateigrößen, die auf unvollständige Übertragungen hinweisen könnten.
- Überprüfen Sie, ob eine Synchronisation die erwarteten Ergebnisse erzeugt hat.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

Die integrierte Vergleichsfunktion geht noch weiter und hebt Unterschiede zwischen zwei Verzeichnissen automatisch hervor. Dies ist das visuelle Äquivalent zur Ausführung von `rclone check source: dest:`, jedoch mit einer interaktiven Anzeige, die es Ihnen ermöglicht, sofort auf Unterschiede zu reagieren.

## Das integrierte Terminal für erweiterte Abfragen nutzen

Für erweiterte Anforderungen beim Auflisten von Dateien, die über das, was der visuelle Explorer bietet, hinausgehen, enthält RcloneView ein integriertes Terminal. Dies gibt Ihnen direkten Zugriff auf alle rclone CLI-Befehle, einschließlich:

**`rclone lsf`** für einfache formatierte Auflistungen:
```
rclone lsf remote:documents --format "pst" --recursive
```
Dies listet alle Dateien mit Pfad, Größe und Zeitstempel in einem flachen Format auf, das sich zum Weiterleiten oder Speichern eignet.

**`rclone lsjson`** für strukturierte Daten:
```
rclone lsjson remote:documents --recursive --no-modtime
```
Dies gibt Datei-Metadaten als JSON aus, was für die programmatische Analyse oder die Weiterverarbeitung in anderen Tools nützlich ist.

**`rclone size`** für Speicherzusammenfassungen:
```
rclone size remote:
```
Dies liefert eine schnelle Gesamtübersicht über Dateien und gespeicherte Bytes auf einem Remote.

Das Terminal läuft innerhalb von RcloneView, sodass Sie keine separate Konsole öffnen oder rclone-Pfade konfigurieren müssen. Ihre bestehenden Remote-Konfigurationen stehen bereits zur Verfügung.

## Mehrere Remotes gleichzeitig durchsuchen

Der Explorer von RcloneView unterstützt das gleichzeitige Öffnen mehrerer Remotes. Dies ist besonders nützlich für Nutzer, die Dateien über mehrere Cloud-Anbieter hinweg verwalten:

- Öffnen Sie Google Drive in einem Bereich und OneDrive im anderen, um Ordnerstrukturen zu vergleichen.
- Durchsuchen Sie einen S3-Bucket, während Sie auf das entsprechende lokale Verzeichnis verweisen.
- Überprüfen Sie Dateien auf Backblaze B2 und Wasabi nebeneinander, um ein anbieterübergreifendes Backup zu verifizieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Jeder Bereich arbeitet unabhängig, sodass Sie in Ihrem eigenen Tempo navigieren, sortieren und durchsuchen können, ohne den anderen Bereich zu beeinflussen. Wenn Sie Dateien finden, die zwischen Remotes verschoben werden müssen, ziehen Sie sie einfach per Drag & Drop.

## Praktische Workflows zur Dateianalyse

Hier sind einige gängige Aufgaben zur Dateianalyse und wie Sie diese in RcloneView erledigen:

**Cloud-Speicher vor einer Migration prüfen:**
Durchsuchen Sie das Quell-Remote, sortieren Sie nach Datum, um aktive von veralteten Dateien zu unterscheiden, und entscheiden Sie, was migriert und was archiviert oder gelöscht werden soll. Dieser Vorbereitungsschritt kann die Migrationszeit und -kosten erheblich reduzieren.

**Vollständigkeit des Backups überprüfen:**
Öffnen Sie das Quell- und das Backup-Remote nebeneinander, navigieren Sie auf beiden zum selben Verzeichnis und nutzen Sie die Vergleichsfunktion, um zu bestätigen, dass alle Dateien korrekt kopiert wurden.

**Doppelte oder veraltete Dateien finden:**
Sortieren Sie nach Name, um Dateien mit ähnlichen Namen zu erkennen, oder nach Datum, um Dateien zu finden, die seit Jahren nicht geändert wurden. Entfernen Sie unnötige Dateien, um Speicherkontingent freizugeben und Kosten zu senken.

**Ein Dateiinventar erstellen:**
Nutzen Sie das integrierte Terminal, um `rclone lsjson --recursive remote:` auszuführen, und speichern Sie die Ausgabe für Dokumentations-, Compliance- oder Auditzwecke.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre Cloud-Speicher-Remotes im Remote-Manager hinzu.
3. Öffnen Sie den Explorer und durchsuchen Sie ein beliebiges Remote, um Dateien mit Größen, Daten und Typen zu sehen.
4. Nutzen Sie Sortierung, Vergleich und das integrierte Terminal für tiefergehende Analysen.

Ob Sie einen schnellen visuellen Überblick oder ein detailliertes Dateiinventar benötigen – der Explorer von RcloneView bringt alle Informationen direkt zu Ihnen, ohne dass Sie sich die CLI-Syntax merken müssen.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Übertragungen in Echtzeit überwachen](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
