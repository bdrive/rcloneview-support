---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "Sync-Filter schließen Dateien nicht aus — korrekte Ausschlussregeln mit RcloneView"
authors:
  - jay
description: "Sync-Filter schließen Dateien nicht aus? Erfahren Sie, warum Ausschlussregeln in RcloneView Ordner verfehlen, wie Sie korrekte Muster schreiben und sie per Dry Run prüfen."
keywords:
  - Sync-Filter funktioniert nicht
  - Ordner von Cloud-Synchronisation ausschließen
  - rclone Filter schließt Dateien nicht aus
  - RcloneView Filterregeln
  - .git-Ordner von Synchronisation ausschließen
  - Ausschlussregeln für Cloud-Synchronisation
  - Filter für maximale Dateigröße
  - Filter mit Dry Run testen
  - Fehlerbehebung bei selektiver Cloud-Synchronisation
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sync-Filter schließen Dateien nicht aus — korrekte Ausschlussregeln mit RcloneView

> Wenn Dateien, die Sie ausschließen wollten, trotzdem am Ziel auftauchen, liegt das meist an der Verankerung des Musters und nicht an einem defekten Filter.

Ein Entwickler synchronisiert einen Projektordner mit Backblaze B2 und fügt einen Ausschluss für `.git` hinzu. Am nächsten Morgen enthält der Bucket trotzdem Tausende Git-Objekte. Filterregeln folgen der Abgleichslogik von rclone, daher ändert schon ein fehlender Schrägstrich, worauf eine Regel zutrifft. RcloneView platziert diese Regeln in Step 3 des Sync-Assistenten und bietet einen Dry Run, mit dem Sie sie testen können, bevor irgendetwas übertragen wird.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum eine Ausschlussregel Dateien verfehlt

Die meisten Filterprobleme gehen auf die Verankerung zurück. Ein Muster, das mit `/` beginnt, trifft nur ab dem Stammverzeichnis der Sync-Quelle zu. Ein Muster ohne `/` trifft in jeder Tiefe zu. Die Beispiele in den Filtereinstellungen von RcloneView zeigen den Unterschied:

- `.iso` schließt Dateien mit dieser Endung überall im Verzeichnisbaum aus.
- `/.git/*` schließt nur die Dateien aus, die direkt im `.git`-Ordner im Stammverzeichnis der Quelle liegen.
- `.git/` schließt jeden `.git`-Ordner in jeder Tiefe aus — genau das, was die meisten Entwickler wollen.

Wenn Sie nur `/.git/*` geschrieben haben, werden verschachtelte Repositorys wie `client-a/app/.git` weiterhin synchronisiert. Ihre Unterordner ebenfalls, weil `*` an der Ordnergrenze stoppt. Wechseln Sie zur nicht verankerten Ordnerregel, und die verschachtelten Repositorys fallen heraus.

<img src="/support/images/en/blog/new-remote.png" alt="Remote in RcloneView hinzufügen, bevor Sync-Filter konfiguriert werden" class="img-large img-center" />

Der zweithäufigste Fehler ist die Wahl des falschen Quellordners. Im Stamm verankerte Muster beziehen sich auf den in Step 1 gewählten Ordner. Verschieben Sie die Quelle eine Ebene nach oben, ändert sich, worauf sie zutreffen.

## Die anderen Filtereinstellungen prüfen

Benutzerdefinierte Regeln sind nicht die einzigen Filter im Assistenten. Step 3 bietet außerdem **Max file size** (in MB), **Max file age** (mit den Einheiten `y`, `d`, `h`, `m`, `s`), **Max folder depth** sowie vordefinierte Filter für Music, Video, Image, Document, Google Docs und Box Docs. Diese Einstellungen wirken zusammen, sodass sich ein früher kopierter Job unerwartet verhalten kann.

Ein vergessenes Limit für die Ordnertiefe aus einem Test führt zum Beispiel dazu, dass tiefere Unterordner stillschweigend übersprungen werden. Bevor Sie benutzerdefinierte Regeln neu schreiben, öffnen Sie den Job im Job Manager und entfernen jedes Limit, das Sie nicht brauchen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragungsansicht in RcloneView mit gefilterten Sync-Ergebnissen" class="img-large img-center" />

## Die Korrektur mit Dry Run und Vergleich nachweisen

Testen Sie eine Filteränderung nie mit Live-Daten. Führen Sie den Job zuerst im Dry-Run-Modus aus. Er listet die Dateien auf, die kopiert, und die Dateien, die gelöscht würden. Tauchen ausgeschlossene Pfade noch in der Kopierliste auf, ist das Muster weiterhin falsch.

Denken Sie daran, dass ausgeschlossene Dateien auch am Ziel nicht angetastet werden. Sind unerwünschte Dateien bereits im Bucket gelandet, lässt eine einseitige Synchronisation mit dem neuen Filter sie dort liegen. Finden Sie sie mit Folder Compare, markieren Sie die überzähligen `.git`-Ordner auf der Zielseite und löschen Sie sie dort. Mit der PLUS-Lizenz wendet Folder Compare with Filter dieselben Regeln auf den Vergleich an, sodass die Ansicht nur zeigt, was der Job tatsächlich verwaltet.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView zeigt Dateien, die nur auf einer Seite existieren" class="img-large img-center" />

Sobald der Dry Run stimmt, führen Sie den Job aus und vergleichen die Dateianzahl in der Job History mit der Dry-Run-Vorschau.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History zeigt übertragene Dateien nach der Filterkorrektur" class="img-large img-center" />

## Erste Schritte

Sync-Jobs, Filter, Dry Run und Folder Compare sind alle in der FREE-Lizenz enthalten.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie den Job Manager, bearbeiten Sie den Job und prüfen Sie den Quellordner in Step 1 sowie die Filtereinstellungen in Step 3.
3. Ersetzen Sie im Stamm verankerte Muster wie `/.git/*` durch `.git/`, wenn der Ordner in beliebiger Tiefe vorkommen kann.
4. Führen Sie einen Dry Run aus, bestätigen Sie, dass ausgeschlossene Pfade verschwunden sind, und räumen Sie Reste mit Folder Compare auf.

Exakte Filterregeln halten Ihre Backups schlank und Build-Artefakte sowie Repository-Daten aus Ihrer Cloud-Rechnung heraus.

---

**Verwandte Anleitungen:**

- [Rclone-Filterregeln erklärt — Einschließen und Ausschließen](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Dry Run — Synchronisation vor der Übertragung prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Folder Compare mit Filter](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
