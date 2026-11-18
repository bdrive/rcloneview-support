---
slug: create-empty-directories-sync-option-rcloneview
title: "Leere Verzeichnisse erstellen — Die vollständige Ordnerstruktur bei der Synchronisation in RcloneView erhalten"
authors:
  - alex
description: "Nutzen Sie die Synchronisationsoption „Create empty directories“ in RcloneView, um komplette Ordnerbäume einschließlich leerer Projektordner zwischen Cloud-Speicher und lokalen Laufwerken zu kopieren."
keywords:
  - leere Verzeichnisse synchronisieren
  - rclone create empty src dirs
  - Ordnerstruktur bei Cloud-Synchronisation erhalten
  - leere Ordner in die Cloud kopieren
  - leere Ordner Google Drive synchronisieren
  - Ordnervorlagen Backup
  - RcloneView Synchronisationsoptionen
  - rclone leere Ordner werden nicht kopiert
  - Verzeichnisbaum in der Cloud spiegeln
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leere Verzeichnisse erstellen — Die vollständige Ordnerstruktur bei der Synchronisation in RcloneView erhalten

> Wenn Ihnen die Ordnerstruktur genauso wichtig ist wie Ihre Dateien, aktivieren Sie ein einziges Kontrollkästchen, damit auch leere Ordner am Ziel ankommen.

Standardmäßig kopiert rclone Dateien, keine Ordner. Ein leeres Verzeichnis in der Quelle taucht daher am Ziel nie auf. Das ist meist unproblematisch, bis Sie ein Backup wiederherstellen und feststellen, dass die Ordner `/Invoices/2027`, `/Raw` und `/Exports`, auf die sich Ihr Team verlässt, fehlen. RcloneView bietet dieses Verhalten als einzelne Option im Sync-Assistenten an, sodass Sie den gesamten Baum erhalten, ohne rclone-Flags eingeben zu müssen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum leere Ordner verschwinden

rclone verschiebt Objekte. Ein Synchronisationsjob durchläuft die Quelle, findet Dateien und legt den Pfad jeder Datei am Ziel neu an. Ein Ordner ohne Dateien erzeugt nichts, was übertragen werden müsste, also überspringt der Job ihn. Viele Cloud-Dienste, insbesondere Objektspeicher im S3-Stil, speichern Ordner gar nicht als eigene Objekte. Ein „Ordner“ ist dort nur ein gemeinsames Präfix in Dateinamen.

Das trifft vor allem Nutzer, die mit Ordnervorlagen arbeiten. Eine Videoproduktionsfirma beginnt vielleicht jedes Projekt mit einem Gerüst aus `01_Footage`, `02_Audio`, `03_Graphics` und `04_Deliverables`. Eine Steuerkanzlei legt womöglich pro Mandant und Jahr einen Ordner an, bevor überhaupt Dokumente eintreffen. Werden diese leeren Gerüste nicht synchronisiert, sehen Mitarbeitende auf der Zielseite eine unvollständige Struktur.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## Create empty directories aktivieren

Die Option befindet sich in **Step 1: Configure Storage** des Sync-Assistenten, neben den Einstellungen für Quelle, Ziel und Synchronisationsrichtung. Wählen Sie Quelle und Ziel und setzen Sie dann das Häkchen bei **Create empty directories**. Beim Ausführen des Jobs weist RcloneView rclone an, leere Quellordner am Ziel neu anzulegen. Das ist das GUI-Gegenstück zum rclone-Flag `--create-empty-src-dirs`.

Da die Einstellung mit dem Job gespeichert wird, gilt sie bei jedem Lauf, egal ob Sie den Job manuell im Job Manager starten oder ein PLUS-Zeitplan ihn auslöst. Sie funktioniert auch mit der 1:N-Synchronisation, sodass dasselbe Ordnergerüst jedes hinzugefügte Ziel erreicht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## Kombination mit Filtern und Dry Run

Das Erstellen leerer Ordner funktioniert zusammen mit den Filtern in Step 3. Wenn Sie `.git/` ausschließen oder den Job mit **Max folder depth** begrenzen, werden nur die Ordner erstellt, die diese Regeln passieren. Führen Sie zuerst einen **Dry Run** aus, um die Vorgänge vorab anzuzeigen, bevor etwas geschrieben wird. Das ist vor allem bei der einseitigen Synchronisation wichtig, die auch Elemente am Ziel entfernt, die in der Quelle nicht mehr existieren.

Bei Bucket-basiertem Speicher wie Amazon S3, Wasabi oder Backblaze B2 sollten Sie realistische Erwartungen haben. Diese Backends kennen keine echten Verzeichnisse, daher bleiben leere Ordner dort möglicherweise nicht so erhalten wie auf Google Drive, OneDrive, Dropbox, SFTP oder einer lokalen Festplatte.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

Öffnen Sie nach Abschluss des Jobs **Folder Compare** für dieselben zwei Speicherorte, um das Ergebnis nebeneinander zu prüfen. Synchronisation und Folder Compare sind beide mit der FREE-Lizenz verfügbar.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie **Sync** im Home-Tab und wählen Sie Quell- und Zielordner.
3. Setzen Sie in Step 1 das Häkchen bei **Create empty directories** und legen Sie in Step 3 die benötigten Filter fest.
4. Führen Sie einen Dry Run aus, speichern Sie dann den Job und starten Sie ihn im Job Manager.

Wenn leere Ordner erhalten bleiben, kommt eine Wiederherstellung oder Migration mit genau der Struktur zurück, die Ihr Team eingerichtet hat.

---

**Verwandte Anleitungen:**

- [Max Folder Depth- und Max File Size-Filter](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — Cloud-Synchronisation vor der Übertragung prüfen](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Sync-Filter schließen Dateien nicht aus — Lösung](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
