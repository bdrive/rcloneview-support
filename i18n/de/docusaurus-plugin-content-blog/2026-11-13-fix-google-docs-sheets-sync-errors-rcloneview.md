---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "Sync-Probleme mit Google Docs und Sheets beheben — native Dateien mit RcloneView handhaben"
authors:
  - casey
description: "Google Docs, Sheets und Slides werden immer wieder kopiert oder als abweichend angezeigt? Erfahren Sie, warum sich native Dateien anders verhalten und wie Sie sie in RcloneView-Sync-Jobs behandeln."
keywords:
  - google docs synchronisationsfehler
  - google sheets backup probleme
  - google drive native dateien synchronisieren
  - google docs export rclone
  - google docs filter rcloneview
  - google drive backup docx xlsx
  - rclone drive exportformate
  - google drive synchronisation reparieren rcloneview
  - google workspace dateien sichern
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sync-Probleme mit Google Docs und Sheets beheben — native Dateien mit RcloneView handhaben

> Google Docs, Sheets und Slides sind keine gewöhnlichen Dateien — und ein Backup-Job, der diesen Unterschied ignoriert, wird Sie immer wieder überraschen.

Sie sichern Google Drive auf ein NAS oder in eine andere Cloud, und der Job wird abgeschlossen — doch Docs und Sheets erscheinen als Word- und Excel-Dateien, Folder Compare markiert sie jedes Mal als abweichend, oder sie tauchen beim nächsten Lauf wieder in der Kopierliste auf. Nichts davon bedeutet, dass die Übertragung defekt ist. RcloneView führt diese Jobs über rclone aus, und wer versteht, wie rclone Google-native Dokumente behandelt, kann das gewünschte Verhalten gezielt wählen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum sich native Google-Dateien anders verhalten

Ein Google Doc existiert nur in den Editoren von Google; dahinter liegt keine gespeicherte Binärdatei. Wenn rclone ein solches Dokument aus Google Drive an ein Nicht-Google-Ziel kopiert, exportiert es das Dokument in ein herunterladbares Format — standardmäßig Office-Formate wie `.docx`, `.xlsx` und `.pptx`.

Diese Konvertierung hat Nebenwirkungen. Drive meldet für native Dokumente keine feste Größe, daher können größenbasierte Vergleiche sie nicht der exportierten Kopie zuordnen. Drive speichert für sie auch keinen MD5-Hash, sodass auch eine aktivierte Prüfsumme im Sync-Job sie nicht verifizieren kann. Das Ergebnis sind Dateien, die bei jeder Prüfung „abweichend" wirken.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## Option 1: Native Docs aus Datei-Backups ausschließen

Wenn Ihr Team nur hochgeladene Dateien — PDFs, Bilder, Videos — sichern muss, ist es am saubersten, native Dokumente auszulassen. Aktivieren Sie in Step 3 des Sync-Assistenten den vordefinierten **Google Docs**-Filter. Der Job konzentriert sich dann auf reguläre Dateien und listet Dokumente, die er nicht vergleichen kann, nicht erneut auf.

Kombinieren Sie das vor dem ersten echten Lauf mit **Dry Run**. Die Vorschau listet genau auf, welche Dateien kopiert werden, sodass Sie bestätigen können, dass Docs und Sheets nicht mehr in der Warteschlange stehen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## Option 2: Exportierte Kopien bewusst behalten

Manchmal sind die exportierten Kopien genau das Ziel — eine Buchhaltungskanzlei möchte vielleicht jede Tabelle als `.xlsx` auf einem NAS archivieren, damit sie sich ohne Google-Konto öffnen lässt. In diesem Fall behalten Sie native Dateien im Job und behandeln die konvertierten Kopien als Archiv.

Das Exportformat können Sie über rclone-Flags ändern. In Settings akzeptiert das Feld **Global Rclone Flags** zusätzliche Flags wie `--drive-export-formats` (zum Beispiel `pdf` für schreibgeschützte Archive). Testen Sie das Flag zuerst mit Dry Run an einem kleinen Ordner, denn es gilt für jeden Job, der Google Drive betrifft.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## Ergebnisse in Job History prüfen

Öffnen Sie nach jedem Lauf Job History und prüfen Sie Status, Dateianzahl und Gesamtgröße. Wenn die Zahlen zwischen den Läufen unerwartet schwanken, überprüfen Sie die Filterregeln aus Step 3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## Erste Schritte

Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner — mit der FREE License.

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Verbinden Sie Google Drive über den OAuth-Browser-Login.
3. Entscheiden Sie, ob native Docs mit dem Google Docs-Filter ausgeschlossen oder als Office-Dateien exportiert werden sollen.
4. Prüfen Sie den Job vorab mit Dry Run, führen Sie ihn aus und bestätigen Sie das Ergebnis in Job History.

Sobald native Dateien bewusst behandelt werden, erzeugen Ihre Google Drive-Backups keine Fehlalarme mehr.

---

**Verwandte Anleitungen:**

- [Google Drive-Sync-Fehler beheben — fehlende Ordner, fehlgeschlagene Jobs und leere Listen mit RcloneView lösen](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [RcloneView-Filterregeln: Ordner und Dateitypen ausschließen für schnellere, sauberere Synchronisationen](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run-Vorschau — Cloud-Synchronisation in RcloneView testen, bevor Änderungen übernommen werden](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
