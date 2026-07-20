---
sidebar_position: 4
description: "Erfahren Sie, wie Sie lokale und Remote-Ordner vergleichen, Ergebnisse filtern und Dateien direkt mit der erweiterten Vergleichsfunktion von RcloneView kopieren oder löschen."
keywords:
  - rcloneview
  - rclone
  - Ordner vergleichen
  - Ordner kopieren
  - Dateiunterschiede
  - Cloud-Synchronisation
  - Dateiverwaltung
  - Dateiübertragung
  - Datei-Explorer
  - Remote-Speicherverwaltung
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ordnerinhalte vergleichen

RcloneView hilft Ihnen, Unterschiede zwischen zwei Ordnern zu erkennen – egal ob auf der lokalen Festplatte oder zwischen Cloud-Remotes – und Dateien mithilfe der integrierten Vergleichsfunktion effizient zu kopieren oder zu verwalten.

## Ordner zum Vergleichen auswählen

So beginnen Sie mit dem Vergleichen von Ordnern:
- Öffnen Sie zwei Tabs im Explorer-Bereich.
- Wählen Sie die zu vergleichenden Ordner aus der Ordnerstruktur aus oder geben Sie den vollständigen Pfad manuell über die Pfadleiste ein.
- Klicken Sie im oberen Menü **`Home`** auf die Schaltfläche **`Compare`**, um den Vergleich zu starten.

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
Sobald der Vergleich abgeschlossen ist, wird ein Popup mit einer Zusammenfassung angezeigt.
Um diese Meldung künftig zu deaktivieren, aktivieren Sie **„Don't show this message again.“**
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
Details zum Aufbau des Bildschirms für den Ordnervergleich und zur Bedeutung der einzelnen Symbole finden Sie im Leitfaden zum Ordnervergleich.

## Vergleichsergebnisse und Dateiverwaltung

Der Ordnervergleich ermöglicht es Ihnen, Dateien direkt zu vergleichen und für die Verwaltung auszuwählen.

Wenn Sie jedoch große Ordner synchronisieren oder mehrere Remote-Ordner effizient verwalten müssen, ist die Verwendung von **`Sync`** die praktischere Methode.

### Anzeige nach ausgewähltem Ergebnistyp

Sie können die Vergleichsergebnisse filtern, sodass nur die für Ihren Vorgang relevanten Dateien angezeigt werden.
So können Sie sich auf das konzentrieren, was kopiert oder überprüft werden muss.

Wenn Sie beispielsweise Dateien aus dem Ordner des linken Remotes in den des rechten kopieren möchten:

- Klicken Sie auf das Symbol **`Show left-only files`** <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" />, um nur Dateien anzuzeigen, die im linken Ordner, aber nicht im rechten vorhanden sind.
- Klicken Sie auf das Symbol **`Show different files`** <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />, um Dateien anzuzeigen, die in beiden Ordnern vorhanden sind, sich aber in der Größe unterscheiden.
- So können Sie sich ausschließlich auf die Zieldateien für das Kopieren nach rechts konzentrieren, ohne von bereits synchronisierten Dateien abgelenkt zu werden.

> ✅ Dadurch lässt sich viel einfacher nur die notwendigen Dateien in eine Richtung auswählen und kopieren.
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>Weitere Details zu den Symbolen</summary>

#### Die Symbole im Vergleichsfenster verstehen
<Tabs>
<TabItem value="Display Icons" label="Anzeigesymbole">
Wenn Sie mit der Maus auf ein Symbol klicken, wird das folgende Filterverhalten angewendet.
Erneutes Klicken schaltet den Filter ein oder aus.

Wenn mehrere Symbole ausgewählt sind, werden Dateien angezeigt, die **einer beliebigen** der ausgewählten Bedingungen entsprechen (logisches **ODER**).

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Zeigt nur Dateien an, die im linken Ordner, aber nicht im rechten vorhanden sind.

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Zeigt nur Dateien an, die im rechten Ordner, aber nicht im linken vorhanden sind.

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" /> : Zeigt nur Dateien an, die in beiden Ordnern vorhanden und identisch sind.

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />  : Zeigt Dateien an, die in beiden Ordnern vorhanden sind, sich aber in der Größe unterscheiden.

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" /> : Zeigt alle Fehler oder Konflikte an

</TabItem>

<TabItem value="Navigate Icons" label="Navigationssymbole">
Diese Symbole werden in der **Compare**-Ansicht verwendet, um in der aktuellen flachen Ordnerlistenstruktur nach oben oder unten durch die Ordnerhierarchie zu navigieren.

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" /> : Zum **übergeordneten Ordner** in der aktuellen Liste navigieren.

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" /> : Zum **untergeordneten Ordner** in der aktuellen Liste navigieren.

</TabItem>

<TabItem value="Operation Icons" label="Aktionssymbole">
Diese Symbole dienen zum Ausführen von Dateioperationen innerhalb von Ordnern – etwa zum Löschen von Dateien oder zum Kopieren nach links oder rechts.

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" /> : Ausgewählte Dateien in den rechten Ordner kopieren.

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" /> : Ausgewählte Dateien in den linken Ordner kopieren.

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> : Ausgewählte Dateien auf einer der beiden Seiten löschen.

</TabItem>

<TabItem value="Find Icons" label="Suchsymbole">
Die **Find**-Symbole werden in der **Compare**-Ansicht verwendet, um Ordner zu finden, bei denen sich die Dateianzahl oder Dateigröße am stärksten geändert hat.

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" /> : Ordner anhand der Anzahl der beim Vergleich geänderten Dateien finden.

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" /> : Ordner anhand der Gesamtgröße der beim Vergleich geänderten Dateien finden.

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" /> : Den Ordner mit der größten Änderung der Dateianzahl oder -größe finden und zu ihm wechseln.

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" /> : Zum nächsten Ordner mit einer größeren Differenz bei Dateianzahl oder -größe wechseln.

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" /> : Den Ordner mit der geringsten Änderung finden und zu ihm wechseln.

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" /> : Zum nächsten Ordner mit einer kleineren Differenz bei Dateianzahl oder -größe wechseln.

</TabItem>

</Tabs>


</details>


### Dateien zwischen Remote-Ordnern kopieren

#### Dateien zum Kopieren auswählen

- Verwenden Sie `Strg + Klick`, um einzelne Dateien auszuwählen
- Verwenden Sie `Umschalt + Klick`, um einen Bereich auszuwählen
- Oder nutzen Sie einfach Drag & Drop zwischen den Bereichen

#### Kopiervorgang durchführen

Sobald Dateien ausgewählt sind:
- Klicken Sie auf die Schaltfläche **`Copy →`**, um die ausgewählten Dateien von links nach rechts zu kopieren.
- Klicken Sie auf die Schaltfläche **`← Copy`**, um von rechts nach links zu kopieren.

💡 Eine Kopie erfolgt nur, wenn:
- Die Datei auf der Zielseite nicht existiert
- Die Datei auf beiden Seiten existiert, aber eine unterschiedliche Größe hat

Nach Abschluss des Kopiervorgangs:
- Kopierte Dateien werden in der Vergleichsansicht mit dem Symbol **`equal`** <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" /> markiert
- Die Statusleiste am unteren Rand wird mit Details zum Abschluss aktualisiert
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important Prüfsumme (demnächst verfügbar)
Standardmäßig vergleicht RcloneView Dateien anhand von Name und Größe.
Das reicht jedoch möglicherweise nicht aus, um inhaltliche Unterschiede zu erkennen, wenn Dateiname und Größe identisch sind.
✅ Der Prüfsummenvergleich ermöglicht eine Verifizierung der Dateiinhalte auf Byte-Ebene.
Diese Funktion ist für ein zukünftiges Update geplant und wird eine noch höhere Synchronisationsgenauigkeit gewährleisten.
:::
#### Dateien löschen

Sie können auch ausgewählte Dateien aus einem der beiden Ordner löschen:
- Klicken Sie auf die Schaltfläche **`Delete`** links, um Dateien aus dem linken Ordner zu entfernen
- Klicken Sie auf die Schaltfläche **`Delete`** rechts, um Dateien aus dem rechten Ordner zu entfernen

⚠️ Das Löschen ist endgültig. Überprüfen Sie die ausgewählten Dateien sorgfältig, bevor Sie fortfahren.
 
## Filter zur Verfeinerung des Vergleichs verwenden

Mit der Filterfunktion können Sie Ordnervergleiche effizienter durchführen, indem Sie bestimmte Dateien oder Ordner vom Ergebnis ausschließen.

 :::important Plus-Lizenz erforderlich
Das Filtern ist in der **Plus**-Lizenzversion von RcloneView verfügbar.
:::

### Warum Filter verwenden?

Möglicherweise möchten Sie bestimmte Ordner oder Dateitypen ausschließen, die für Ihre Vergleichsaufgabe nicht relevant sind.
Mit dem Filter-Tool können Sie ganz einfach festlegen, welche Dateien oder Ordner beim Vergleich ignoriert werden sollen.

### So schließen Sie einen bestimmten Ordner aus:

Um beispielsweise alle Ordner mit dem Namen `folder2` vom Vergleich auszuschließen:
1. Klicken Sie im Vergleichsbildschirm auf das Symbol **`Filter`** <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" />.
2. Geben Sie im Filtereingabefeld `folder2/` ein und klicken Sie auf **`Add`**.
3. Der Ordner wird in der Kategorie **`Others`** angezeigt.
4. Aktivieren Sie das Kontrollkästchen neben `folder2/` und klicken Sie auf **`OK`**, um den Filter anzuwenden.
5. Führen Sie den Vergleich erneut aus.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 Das Filtern ist besonders hilfreich, wenn Ordner wie `cache`, `temp` oder persönliche Konfigurationsverzeichnisse nur zu Referenzzwecken existieren und nicht verglichen oder kopiert werden müssen.



<details>
<summary>Häufig verwendete Filterregeln</summary>

#### Häufig verwendete Filterbeispiele

**`.iso`** : Alle .iso-Dateien ausschließen

**`/.git/*`** : Nur Dateien innerhalb des .git-Ordners im Stammverzeichnis ausschließen, nicht Unterordner

**`/.git/`** :  Den gesamten .git-Ordner im Stammverzeichnis ausschließen, einschließlich allem darin

**`.git/`** : Alle .git-Ordner und deren Inhalt ausschließen, unabhängig vom Speicherort

</details>
