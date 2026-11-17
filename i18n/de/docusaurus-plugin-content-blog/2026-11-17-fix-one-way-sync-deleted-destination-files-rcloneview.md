---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "Einweg-Synchronisation löscht Zieldateien — Backups mit RcloneView schützen"
authors:
  - casey
description: "Hat eine Einweg-Synchronisation Dateien aus Ihrem Backup entfernt? Erfahren Sie, warum das passiert und wie Copy-Jobs, Dry Run und Folder Compare in RcloneView unerwünschte Löschungen verhindern."
keywords:
  - Synchronisation löscht Dateien am Ziel
  - Einweg-Synchronisation löscht Dateien
  - rclone sync vs copy
  - Löschungen bei Synchronisation verhindern
  - Cloud-Backup Dateien verschwunden
  - RcloneView dry run
  - Spiegel-Synchronisation löscht Dateien
  - Dateien nach Synchronisation wiederherstellen
  - RcloneView Fehlerbehebung
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Einweg-Synchronisation löscht Zieldateien — Backups mit RcloneView schützen

> Wenn nach einer Synchronisation Dateien aus Ihrem Backup verschwunden sind, hat der Job höchstwahrscheinlich genau das getan, wofür Synchronisation gedacht ist — so wählen Sie den richtigen Job-Typ und prüfen Änderungen vorab.

Eine häufige Überraschung: Sie synchronisieren einen Laptop-Ordner mit Backblaze B2, und ältere Dateien, die nur im Bucket lagen, sind weg. Das ist kein Fehler. Eine Einweg-Synchronisation gleicht das Ziel an die Quelle an, und dazu gehört auch das Entfernen von Dateien, die in der Quelle nicht vorhanden sind. RcloneView bietet Ihnen die Werkzeuge, um das kommen zu sehen und einen Job-Typ zu wählen, der nie etwas löscht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Einweg-Synchronisation Dateien entfernt

Im Synchronisations-Assistenten heißt die Einweg-Richtung **"Modifying destination only"**. Sie lässt die Quelle unverändert und passt das Ziel an, bis es die Quelle spiegelt. Alles am Ziel, das kein Gegenstück in der Quelle hat, wird gelöscht.

Typische Auslöser:

- **Falscher Quellordner.** Wenn Sie `Projects/2026` statt `Projects` auswählen, wirken alle anderen Jahre am Ziel „überzählig“.
- **Aufgeräumte Quelle.** Sie haben lokal alte Dateien gelöscht, um Platz zu schaffen, und erwartet, dass die Cloud-Kopie sie als Archiv behält.
- **Mehrere Quellen, ein Ziel.** Zwei Rechner, die in denselben Ordner synchronisieren, entfernen jeweils die Dateien des anderen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## Copy verwenden, wenn das Ziel ein Archiv ist

Wenn das Ziel alles behalten soll, was jemals dorthin gesendet wurde, verwenden Sie statt Sync einen **Copy**-Job. Der Job Manager bietet die Job-Typen Sync, Copy, Move, Delete, Download und Upload. Copy überträgt neue und geänderte Dateien, entfernt aber nichts vom Ziel — passend für ein Fotoarchiv oder ein langfristiges Projekt-Backup.

Behalten Sie Sync für echte Spiegel, etwa einen Arbeitsordner, der in einer zweiten Cloud exakt nachgebildet werden soll.

## Löschungen mit Dry Run vorab prüfen

Bevor ein neuer oder bearbeiteter Synchronisations-Job tatsächlich läuft, führen Sie einen **Dry Run** aus. Er listet Dateien auf, die kopiert, und Dateien, die gelöscht würden, ohne etwas zu ändern. Enthält die Löschliste Dateien, die Sie behalten möchten, brechen Sie ab und korrigieren den Quellpfad oder wechseln zu Copy.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## Unterschiede mit Folder Compare prüfen

**Folder Compare** zeigt zwei Ordner nebeneinander. Filtern Sie nach right-only-Dateien, um genau zu sehen, was am Ziel, aber nicht in der Quelle existiert — die Dateien, die eine Synchronisation entfernen würde. Sind einige davon wichtig, holen Sie sie vor der Synchronisation mit **Copy left** in die Quelle zurück oder synchronisieren Sie in einen anderen Ordner, damit sie unberührt bleiben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

Anders als reine Mount-Tools kann RcloneView auch synchronisieren und Ordner vergleichen — mit der FREE License.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie Ihren bestehenden Job im Job Manager und prüfen Sie Quell- und Zielpfad.
3. Stellen Sie archivartige Jobs von Sync auf Copy um und führen Sie für jeden verbleibenden Synchronisations-Job einen Dry Run aus.
4. Prüfen Sie right-only-Dateien mit Folder Compare und kontrollieren Sie nach jedem Lauf die **Job History**.

Sind bereits Dateien verloren, prüfen Sie zuerst den Papierkorb oder den Versionsverlauf Ihres Anbieters und bauen Sie den Job dann so neu auf, dass es nicht wieder passieren kann.

---

**Verwandte Anleitungen:**

- [Dry Run — Synchronisation vor der Übertragung mit RcloneView prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Versehentlich gelöschte Cloud-Dateien mit RcloneView wiederherstellen](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [Fehlende Dateien nach Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
