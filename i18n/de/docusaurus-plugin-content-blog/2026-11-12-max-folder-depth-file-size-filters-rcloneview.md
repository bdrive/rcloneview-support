---
slug: max-folder-depth-file-size-filters-rcloneview
title: "Filter für maximale Ordnertiefe und maximale Dateigröße — Steuern, was in RcloneView synchronisiert wird"
authors:
  - kai
description: "Nutzen Sie die Filter Max folder depth und Max file size in RcloneView, um tiefe Unterordner und übergroße Dateien zu überspringen und Cloud-Synchronisationsjobs schnell und fokussiert zu halten."
keywords:
  - maximale Ordnertiefe Synchronisation
  - Filter maximale Dateigröße
  - rclone max depth GUI
  - große Dateien bei Cloud-Synchronisation überspringen
  - Ordnerebenen der Synchronisation begrenzen
  - RcloneView Synchronisationsfilter
  - große Dateien vom Backup ausschließen
  - selektive Cloud-Synchronisation
  - flache Ordnersynchronisation
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filter für maximale Ordnertiefe und maximale Dateigröße — Steuern, was in RcloneView synchronisiert wird

> Zwei Zahlenfelder im Synchronisationsassistenten entscheiden, wie tief ein Job reicht und wie groß eine Datei sein darf, bevor sie zurückbleibt.

Nicht jeder Synchronisationsjob braucht den ganzen Baum. Ein Designteam möchte vielleicht nur die obersten Lieferordner aus der Dropbox eines Kunden, nicht jeden verschachtelten Arbeitsordner. Ein Heimanwender, der Documents auf OneDrive sichert, möchte vielleicht ein paar 30 GB große Disk-Images auslassen. RcloneView deckt beide Fälle in Schritt 3 des Synchronisationsassistenten mit **Max folder depth** und **Max file size** ab, und beide sind mit der FREE License verfügbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth: Begrenzen, wie tief ein Job reicht

Max folder depth legt fest, wie viele Ordnerebenen unterhalb der Quelle der Job verarbeitet. Alles Tiefere wird übersprungen. Ein niedriger Wert macht aus einer großen, weit verzweigten Quelle eine flache Synchronisation der obersten Ebenen.

Das hilft, wenn die wichtigen Dateien weit oben liegen. Der Ordner `Clients/` einer Agentur enthält zum Beispiel einen Ordner pro Kunde mit den finalen Lieferungen sowie verschachtelte `working/`- und `cache/`-Bäume, die zehn Ebenen tief reichen. Eine Tiefenbegrenzung behält die Lieferungen und überspringt den Ballast, ganz ohne lange Liste von Ausschlussregeln.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

Tiefenbegrenzungen greifen stillschweigend. Eine von einem Testlauf übrig gebliebene Tiefenbegrenzung lässt tiefere Unterordner bei späteren Synchronisationen ohne Fehlermeldung verschwinden. Wenn am Ziel Dateien fehlen, prüfen Sie zuerst dieses Feld.

## Max File Size: Übergroße Dateien fernhalten

Max file size wird in MB angegeben, und jede Datei, die größer als der Wert ist, wird ausgeschlossen. Typische Anwendungen:

- ISO-Images, VM-Festplatten und Rohvideos beim Sichern eines Arbeitsordners auslassen.
- Eine Synchronisation zu einem kleineren Konto im Gratistarif innerhalb seiner Grenzen halten.
- Einen nächtlichen Job für Bürodateien schnell halten, indem gelegentliche riesige Exporte übersprungen werden.

Das Feld legt nur eine Obergrenze fest. Um einen bekannten Dateityp unabhängig von seiner Größe auszuschließen, fügen Sie im selben Schritt eine benutzerdefinierte Regel wie `.iso` hinzu.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## Mit anderen Filtern kombinieren

Beide Felder arbeiten mit den übrigen Optionen aus Schritt 3 zusammen: Max file age (Einheiten `y`, `d`, `h`, `m`, `s`), die vordefinierten Filter Music, Video, Image, Document, Google Docs und Box Docs sowie benutzerdefinierte Regeln. Ein Job kann zum Beispiel nur Dokumente unter 50 MB synchronisieren, die in den letzten 30 Tagen geändert wurden und innerhalb der obersten drei Ordnerebenen liegen.

Filter verändern, was eine einseitige Synchronisation als Teil der Quelle betrachtet, führen Sie daher zuerst einen **Dry Run** aus. Er listet die Dateien auf, die kopiert und gelöscht werden, sodass Sie eine zu enge Begrenzung erkennen, bevor sich etwas ändert.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

Nach dem Ausführen des Jobs zeigt Job History die Dateianzahl und Gesamtgröße jedes Laufs. Ein plötzlicher Rückgang bedeutet meist, dass ein Filter falsch gesetzt ist.

## Erste Schritte

RcloneView bindet 90+ Anbieter aus einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie Sync, wählen Sie Quelle und Ziel und benennen Sie den Job.
3. Legen Sie in Schritt 3 Max folder depth und Max file size in MB fest.
4. Führen Sie einen Dry Run aus, prüfen Sie die Dateiliste und speichern Sie den Job anschließend im Job Manager.

Kleinere, fokussierte Jobs sind schneller fertig, belegen weniger Speicherplatz und lassen sich leichter überprüfen.

---

**Verwandte Anleitungen:**

- [Vordefinierte Filter zum Synchronisieren von Dateitypen](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Zeitbasierte Filter Min Age und Max Age](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [Synchronisationsfilter, die keine Dateien ausschließen, beheben](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
