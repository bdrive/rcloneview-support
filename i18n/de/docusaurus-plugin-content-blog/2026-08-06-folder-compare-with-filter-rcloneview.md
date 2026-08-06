---
slug: folder-compare-with-filter-rcloneview
title: "Ordnervergleich mit Filter — Präzise Vergleiche in RcloneView"
authors:
  - alex
description: "Schließen Sie Störfaktoren aus Ordnervergleichen mit den Filterregeln von RcloneView aus — überspringen Sie Build-Artefakte, Caches und unerwünschte Dateitypen vor dem Vergleich."
keywords:
  - Ordnervergleich Filter
  - Dateien vom Vergleich ausschließen
  - RcloneView Filterregeln
  - Ordner vergleichen Ausschlussmuster
  - Cloud-Ordner-Diff-Filter
  - .git-Ordner-Vergleich überspringen
  - selektiver Ordnervergleich
  - Cloud-Backup-Verifizierungsfilter
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ordnervergleich mit Filter — Präzise Vergleiche in RcloneView

> Ein vollständiger Ordnervergleich ist nur dann nützlich, wenn die Ergebnisse nicht unter Dateien begraben werden, die einen von vornherein nicht interessiert haben.

Ein einfacher Ordnervergleich zwischen zwei großen Speicherorten liefert oft eine Flut von Unterschieden, die nichts mit den Daten zu tun haben, die man eigentlich überprüfen möchte — Build-Caches, `.git`-Ordner, temporäre Dateien und ISO-Dateien, die nie gesichert werden sollten. Mit dem Ordnervergleich mit Filter von RcloneView können Sie diese Kategorien vor dem Vergleich ausschließen, sodass die Ergebnisse nur die Dateien widerspiegeln, die wirklich wichtig sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum gefilterte Vergleiche wichtig sind

Ein ungefilterter Vergleich zwischen zwei großen Verzeichnisbäumen behandelt jede Datei als gleich wichtig, was bedeutet, dass ein Quell-Repository mit einer umfangreichen `.git`-Historie oder ein Projektordner voller `.iso`-Images die Unterschiede überdecken kann, die man eigentlich finden will. Wenn man den Vergleichsumfang auf relevante Ordnernamen und Dateitypen eingrenzt, wird aus einem unübersichtlichen, schwer lesbaren Ergebnis eine fokussierte Liste dessen, was sich in den Daten, die einen interessieren, tatsächlich geändert hat.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Gefilterte Ordnervergleichsergebnisse in RcloneView" class="img-large img-center" />

RcloneView bietet Synchronisation und Ordnervergleich bereits mit der FREE-Lizenz, wobei der gefilterte Vergleich als PLUS-Erweiterung für Teams hinzukommt, die ihn benötigen.

## Filterregeln einrichten

Filterregeln folgen demselben Muster, das auch an anderer Stelle in RcloneView verwendet wird: Ausschluss nach Dateiendung, Ordnerpfad oder exaktem Ordnernamen. Eine Regel wie `.iso` entfernt jede ISO-Datei aus dem Vergleich, unabhängig davon, wo sie liegt; `/.git/*` schließt nur die `.git`-Dateien auf oberster Ebene aus; `/.git/` entfernt gezielt den `.git`-Ordner auf oberster Ebene; und `.git/` entfernt jeden `.git`-Ordner, egal wie tief er verschachtelt ist. Kombinieren Sie mehrere Regeln, um den Vergleich genau auf die Dateitypen und Pfade einzugrenzen, die eine Überprüfung wert sind.

<img src="/support/images/en/blog/new-remote.png" alt="Konfigurieren von Filterregeln für den Ordnervergleich in RcloneView" class="img-large img-center" />

Dies ist eine PLUS-Lizenz-Funktion — der ungefilterte Basis-Ordnervergleich (mit Anzeige von nur-links, nur-rechts, gleich und unterschiedlich vorhandenen Dateien) steht in jeder Lizenzstufe zur Verfügung, und die Filterung baut auf derselben Vergleichs-Engine auf.

## Praktische Filterszenarien

Entwicklungsteams, die einen Projektordner mit einem Cloud-Backup vergleichen, schließen typischerweise `node_modules/`, `.git/` und Build-Ausgabeverzeichnisse aus, da diese regenerierbar sind und nicht in die Beurteilung der Vollständigkeit des Backups einfließen sollten. Medienteams, die RAW-Fotobibliotheken archivieren, schließen häufig Sidecar-Cache-Dateien und Thumbnail-Vorschauen aus, damit sich der Vergleich auf die eigentlichen Bilddaten konzentriert. Und wer eine Migration zwischen zwei Cloud-Konten überprüft, kann temporäre oder Scratch-Ordner ausschließen, die den Umzug ohnehin nicht überdauern sollten, wodurch die Listen der nur-links und nur-rechts vorhandenen Dateien auf das beschränkt bleiben, was wirklich Aufmerksamkeit verdient.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Überprüfung der gefilterten Vergleichsausgabe vor dem Handeln bei Unterschieden" class="img-large img-center" />

Sobald der gefilterte Vergleich abgeschlossen ist, gelten dieselben Aktionen wie bei jedem anderen Ordnervergleich: nur-links vorhandene Dateien auf die rechte Seite kopieren, nur-rechts vorhandene Dateien vor dem Löschen prüfen und alles aktualisieren, was als unterschiedlich markiert ist — nur eben ohne die Ablenkung durch absichtlich ausgeschlossene Dateien.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Vergleich** über den Home-Tab starten und die beiden Ordner auswählen.
3. Die Filtereinstellungen öffnen und Ausschlussregeln für die gewünschten Ordnernamen und Dateitypen hinzufügen.
4. Den Vergleich ausführen und eine Ergebnisliste prüfen, die auf das Wesentliche beschränkt ist.

Ein gefilterter Vergleich verwandelt eine Wand aus Störfaktoren in eine kurze, umsetzbare Liste — genau das, was man braucht, bevor man entscheidet, was kopiert, aktualisiert oder unangetastet gelassen wird.

---

**Weitere Anleitungen:**

- [Ordnervergleich im Detail — Jeden Unterschied zwischen Cloud-Speicherorten erkennen](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Rclone-Filterregeln erklärt — Ein- und Ausschlussmuster mit RcloneView](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Filterregeln für selektive Synchronisation — RcloneView-Anleitung](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
