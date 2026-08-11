---
slug: predefined-filters-sync-file-types-rcloneview
title: "Vordefinierte Filter — In RcloneView nur die benötigten Dateien synchronisieren"
authors:
  - steve
description: "Nutzen Sie die vordefinierten Filter von RcloneView, um nur Bilder, Videos, Musik oder Dokumente zu synchronisieren, statt ganze Ordner zu übertragen."
keywords:
  - RcloneView Filter
  - vordefinierte Filter
  - Dateitypen synchronisieren
  - Cloud-Synchronisationsfilter
  - selektive Synchronisation
  - nur Bilder synchronisieren
  - Videosynchronisationsfilter
  - Dokumentsynchronisationsfilter
  - Google Docs Filter
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vordefinierte Filter — In RcloneView nur die benötigten Dateien synchronisieren

> Überspringen Sie die Dateitypen, die Sie nicht brauchen, und synchronisieren Sie nur die gewünschten — ohne Ausschlussregeln von Hand zu schreiben.

Nicht jeder Synchronisationsjob sollte jede Datei in einem Ordner verschieben. Ein Fotostudio, das ein gemeinsam genutztes Laufwerk voller RAW-Dateien, PSDs und vereinzelter PDFs sichert, interessiert sich in der Regel nur für die Bilder — nicht für die daneben liegenden Rechnungen. Der Schritt „Filtereinstellungen" im Synchronisationsassistenten von RcloneView bietet vordefinierte Ein-Klick-Filter für gängige Dateikategorien, sodass Sie einen Synchronisationsjob genau auf den relevanten Inhalt eingrenzen können, ohne ein eigenes Regelwerk von Grund auf zu erstellen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was vordefinierte Filter abdecken

Schritt 3 des Synchronisationsassistenten, die Filtereinstellungen, bietet Ein-Klick-vordefinierte Filter für Musik, Video, Bild, Dokument, Google Docs und Box Docs. Wählen Sie einen aus, beschränkt sich der Job auf passende Dateitypen — wählen Sie beispielsweise Bild, ignoriert der Synchronisationsjob alles andere im Quellordner, unabhängig davon, wie tief es verschachtelt ist oder was sonst noch daneben liegt.

Das ist wichtig für gemischte Inhaltsordner, die sich mit der Zeit ansammeln: Das gemeinsame Laufwerk eines Marketingteams voller exportierter Videos, Markendokumente und Tabellen muss nicht komplett auf ein Video-Archiv-Remote gespiegelt werden. Ein einziger vordefinierter Filter hält das Ziel sauber, ohne dass danach manuell aufgeräumt werden muss.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Auswahl eines vordefinierten Dateitypfilters im Synchronisationsassistenten von RcloneView" class="img-large img-center" />

Die Optionen Google Docs und Box Docs richten sich gezielt an anbieterspezifische, native Dokumentformate, die sich bei einer Übertragung nicht wie gewöhnliche Dateien verhalten — nützlich, wenn Sie aus Google Drive oder Box synchronisieren und native Dokumente von hochgeladenen Binärdateien trennen möchten.

## Vordefinierte und benutzerdefinierte Filter kombinieren

Vordefinierte Filter schließen benutzerdefinierte Regeln nicht aus. Sie können einen vordefinierten Bildfilter mit zusätzlichen benutzerdefinierten Ausschlüssen kombinieren — zum Beispiel einer Pfadregel `/thumbnails/*` —, um generierte Vorschaudateien auszuschließen, die sonst eine ansonsten saubere Nur-Bild-Synchronisation verunreinigen würden. Benutzerdefinierte Filter unterstützen zudem Beschränkungen für maximale Dateigröße und maximales Dateialter, sodass ein Fotostudio mit 2 TB an RAW-Dateien den Bildfilter mit einer Alterseinschränkung kombinieren könnte, um nur aktuelle Shootings statt des gesamten historischen Archivs zu synchronisieren.

Anders als reine Mount-Tools bietet RcloneView Synchronisation und Ordnervergleich bereits mit der FREE-Lizenz, sodass diese Filterung unabhängig davon gilt, ob Sie eine einmalige Übertragung oder einen gespeicherten, wiederholbaren Job ausführen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Gefilterter Synchronisationsjob, der nur Bilddateien zwischen zwei Remotes überträgt" class="img-large img-center" />

## Gefilterte Ergebnisse mit Dry Run überprüfen

Bevor Sie eine gefilterte Synchronisation auf einen großen oder unbekannten Ordner anwenden, führen Sie sie zunächst im Dry-Run-Modus aus. Dry Run zeigt die genaue Liste der Dateien, die unter den aktuellen Filtereinstellungen kopiert und gelöscht würden — der schnellste Weg zu bestätigen, dass ein vordefinierter Filter genau das erfasst, was Sie erwarten, und nicht stillschweigend Dateien ausschließt, die Sie eigentlich übertragen wollten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines Dry Run zur Vorschau eines gefilterten Synchronisationsjobs vor der Ausführung" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Starten Sie einen neuen Synchronisationsjob und wählen Sie Ihr Quell- und Ziel-Remote.
3. Wählen Sie in Schritt 3, Filtereinstellungen, einen vordefinierten Filter passend zu dem Inhaltstyp, den Sie synchronisieren möchten.
4. Führen Sie Dry Run aus, um die Ergebnisse zu bestätigen, und speichern Sie den Job, um denselben Filter bei künftigen Synchronisationen wiederzuverwenden.

Statt Dateien vorab manuell zu sortieren, hält das Filtern auf Synchronisationsebene Zielordner auf den Inhalt fokussiert, den Sie tatsächlich dort benötigen.

---

**Verwandte Anleitungen:**

- [Dry Run — Cloud-Synchronisation vor der Übertragung in RcloneView vorschauen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Ordnervergleich mit Filter — Vergleiche in RcloneView einschränken](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — Bidirektionale Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
