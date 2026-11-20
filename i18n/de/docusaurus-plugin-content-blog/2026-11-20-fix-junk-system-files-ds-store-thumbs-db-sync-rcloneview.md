---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "Überflüssige Systemdateien in der Cloud-Synchronisation beseitigen — .DS_Store und Thumbs.db mit RcloneView ausschließen"
authors:
  - kai
description: "Verhindern Sie, dass .DS_Store, Thumbs.db und desktop.ini Ihre Cloud-Backups überladen. Nutzen Sie Sync-Filter, Dry Run und Folder Compare in RcloneView, um sie fernzuhalten."
keywords:
  - .DS_Store von Cloud-Synchronisation ausschließen
  - Thumbs.db Cloud-Backup
  - desktop.ini Sync-Ballast
  - überflüssige Dateien aus Cloud-Speicher entfernen
  - rclone Systemdateien ausschließen
  - RcloneView benutzerdefinierte Filter
  - saubere Cloud-Synchronisation macOS Windows
  - Sync-Filter für versteckte Dateien
  - Tipps für plattformübergreifende Cloud-Synchronisation
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

# Überflüssige Systemdateien in der Cloud-Synchronisation beseitigen — .DS_Store und Thumbs.db mit RcloneView ausschließen

> Metadaten-Dateien des Betriebssystems überladen Ihre Backups. Ein paar Filterregeln halten sie dauerhaft fern.

Öffnen Sie einen freigegebenen Cloud-Ordner, den sowohl Macs als auch Windows-PCs verwenden, finden Sie meist in jedem Verzeichnis eine `.DS_Store`, neben jeder Bildersammlung eine `Thumbs.db` und überall im Verzeichnisbaum verstreute `desktop.ini`-Dateien. Sie sind klein, blähen aber die Dateianzahl auf, erscheinen bei Vergleichen als „unterschiedlich“ und lösen unnötige erneute Uploads aus. Mit RcloneView schließen Sie sie per Filterregeln von Sync-Jobs aus und prüfen anschließend, ob das Ziel sauber ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum diese Dateien immer wieder auftauchen

Der macOS-Finder schreibt `.DS_Store`, um die Ansichtseinstellungen eines Ordners zu speichern. Der Windows Explorer erstellt `Thumbs.db`, um Miniaturansichten von Bildern zwischenzuspeichern, und `desktop.ini`, um Ordneranpassungen zu speichern. Jedes Mal, wenn jemand einen synchronisierten Ordner oder ein eingebundenes Laufwerk durchsucht, kann das Betriebssystem diese Dateien neu schreiben, sodass die nächste Synchronisation eine „geänderte“ Datei erkennt und sie erneut überträgt.

Stellen Sie sich eine Designagentur mit 40.000 Projektordnern auf einem NAS vor, das jede Nacht in die Cloud synchronisiert wird. Selbst wenn sich die eigentliche Arbeit nur in wenigen Ordnern geändert hat, kann jeder durchsuchte Ordner eine neue Metadaten-Datei erzeugen. Das macht das Job-Protokoll unübersichtlich und verdeckt die Übertragungen, auf die es ankommt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## Ausschlussfilter zum Sync-Job hinzufügen

Öffnen Sie den Job im **Job Manager**, klicken Sie auf **Edit** und wechseln Sie zu **Step 3: Filtering Settings**. Fügen Sie unter den benutzerdefinierten Filtern pro Dateiname eine Ausschlussregel hinzu: `.DS_Store`, `Thumbs.db` und `desktop.ini`. Wenn Ihr Team auch Office nutzt, sollten Sie zusätzlich temporäre Sperrdateien ausschließen, die mit `~$` beginnen. Die Regeln verwenden die Filtersyntax von rclone, also dieselbe Syntax wie die dokumentierten Beispiele `.iso` und `.git/`.

Filter gelten bei jeder Ausführung des Jobs, einschließlich geplanter Ausführungen mit der PLUS-Lizenz, sodass Sie sie nur einmal einrichten müssen. Mit **Export** im Job Manager speichern Sie den Job als JSON-Datei und können ihn auf anderen Rechnern per **Import** laden, damit alle dieselben Regeln verwenden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## Vorschau, Bereinigung und Überprüfung

Führen Sie nach dem Speichern einen **Dry Run** aus. Die Vorschau sollte keine Metadaten-Dateien mehr zur Übertragung auflisten. Tauchen sie dennoch auf, prüfen Sie Schreibweise und Groß-/Kleinschreibung jeder Regel, denn ein Tippfehler ist ein häufiger Grund, warum ein Filter scheinbar ignoriert wird.

Filter verhindern, dass neue Kopien übertragen werden, doch Dateien, die bereits in der Cloud liegen, bleiben dort. Öffnen Sie das Ziel im Explorer-Bereich, suchen Sie die Überbleibsel und löschen Sie sie per Rechtsklick mit **Delete**. Für eine vollständige Prüfung öffnen Sie **Compare** zwischen Quelle und Ziel und nutzen „Show right-only files“, um verwaiste Metadaten-Dateien aus früheren Durchläufen zu finden. Mit der PLUS-Lizenz wendet Folder Compare with Filter dieselben Ausschlüsse auch auf die Vergleichsansicht an.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## Erste Schritte

RcloneView bindet über 90 Anbieter in einem Fenster unter Windows, macOS und Linux ein und synchronisiert sie, sodass dieselben Filterregeln gelten, egal welches Betriebssystem die Dateien erstellt hat.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Bearbeiten Sie Ihren Sync-Job und fügen Sie `.DS_Store`, `Thumbs.db` und `desktop.ini` als benutzerdefinierte Ausschlussfilter hinzu.
3. Führen Sie einen **Dry Run** aus, um zu bestätigen, dass die Metadaten-Dateien nicht mehr zur Übertragung erscheinen.
4. Verwenden Sie **Compare**, um die bereits in der Cloud vorhandenen Überbleibsel zu finden und zu löschen.

Kürzere Job-Protokolle und sauberere Backups machen die wirklich wichtigen Änderungen leichter erkennbar.

---

**Verwandte Anleitungen:**

- [Sync-Filter schließen keine Dateien aus — korrekte Ausschlussregeln mit RcloneView](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Filter für maximale Ordnertiefe und Dateigröße — steuern, was in RcloneView synchronisiert wird](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Leere Schreibtisch- und Dokumente-Ordner unter macOS beheben — Berechtigungen mit RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
