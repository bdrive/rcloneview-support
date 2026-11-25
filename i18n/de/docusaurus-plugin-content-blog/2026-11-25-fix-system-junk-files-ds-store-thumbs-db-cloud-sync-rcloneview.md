---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: ".DS_Store- und Thumbs.db-Unordnung in der Cloud-Synchronisation beheben — Systemdateien mit RcloneView ausschließen"
authors:
  - morgan
description: "Verhindern Sie, dass .DS_Store-, Thumbs.db- und desktop.ini-Dateien Ihre Cloud-Backups überladen. Schließen Sie Betriebssystem-Datenmüll mit RcloneView-Filtern von Synchronisationsjobs aus."
keywords:
  - ds_store Dateien Cloud-Synchronisation
  - thumbs.db Cloud-Speicher
  - Systemdateien von Synchronisation ausschließen
  - desktop.ini Cloud-Backup
  - rclone ds_store ausschließen
  - RcloneView benutzerdefinierte Filter
  - Datenmüll in Cloud-Synchronisation bereinigen
  - plattformübergreifende Cloud-Synchronisation Unordnung
  - rclone Filter versteckte Dateien
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# .DS_Store- und Thumbs.db-Unordnung in der Cloud-Synchronisation beheben — Systemdateien mit RcloneView ausschließen

> Halten Sie Datenmüll des Betriebssystems aus Ihren Cloud-Ordnern fern, damit jede Synchronisation nur die Dateien überträgt, die tatsächlich genutzt werden.

Öffnen Sie einen gemeinsam genutzten Cloud-Ordner, den ein gemischtes Mac- und Windows-Team synchronisiert, und Sie finden meist in fast jedem Verzeichnis dieselben ungebetenen Gäste: `.DS_Store` vom macOS-Finder sowie `Thumbs.db` und `desktop.ini` vom Windows-Explorer. Sie machen Dateilisten unübersichtlich, blähen die Dateianzahl auf und erscheinen als „unterschiedliche“ Dateien, sobald zwei Rechner denselben Ordner berühren. Mit RcloneView können Sie sie von Synchronisationsjobs ausschließen und die Kopien bereinigen, die bereits in der Cloud gelandet sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Systemdateien immer wieder in der Cloud auftauchen

Diese Dateien sind Metadaten, keine Inhalte. Der Finder schreibt `.DS_Store`, um Symbolpositionen und Ansichtseinstellungen zu speichern; Windows schreibt `Thumbs.db` als Miniaturansicht-Cache und `desktop.ini` für Ordneranpassungen. Ein Synchronisationstool behandelt sie wie jede andere Datei, sodass eine einseitige Synchronisation von einem MacBook eine `.DS_Store` in jeden besuchten Ordner hochlädt.

Mit wachsender Größe verschärft sich das Problem. Eine Designagentur, die 40.000 Projektordner sichert, kann Zehntausende winziger Metadatendateien in ihrem Bucket ansammeln. Jede davon ist ein eigenes Objekt, das gelistet und verglichen werden muss, was spätere Synchronisationsläufe verlangsamt – und jedes Mal, wenn ein Kollege den Ordner auf seinem eigenen Rechner durchsucht, ändert sich die Datei und wird erneut übertragen.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines Cloud-Remotes in RcloneView vor dem Konfigurieren von Synchronisationsausschlüssen" class="img-large img-center" />

## Datenmüll mit benutzerdefinierten Filtern ausschließen

Die Lösung beginnt im Synchronisationsassistenten. Fügen Sie in **Step 3: Filtering Settings** benutzerdefinierte Ausschlussregeln für `.DS_Store`, `Thumbs.db` und `desktop.ini` hinzu. Benutzerdefinierte Filter akzeptieren Dateitypen, Ordner und Pfadregeln, sodass Sie auch die Ordner `.Trashes` oder `.Spotlight-V100` ausschließen können, die manchmal auftauchen, wenn Sie von einem auf einem Mac formatierten externen Laufwerk synchronisieren.

Bevor Sie den Job tatsächlich ausführen, klicken Sie auf **Dry Run**. Die Simulation listet jede Datei auf, die kopiert oder gelöscht würde, sodass Sie bestätigen können, dass die Metadatendateien aus der Übertragungsliste verschwunden sind. Erscheinen sie weiterhin, prüfen Sie die Schreibweise der Regel – Filterregeln unterscheiden standardmäßig zwischen Groß- und Kleinschreibung, daher passt `Thumbs.db` nicht auf `thumbs.db`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Ausführen eines gefilterten Cloud-Synchronisationsjobs in RcloneView" class="img-large img-center" />

## Bereits in der Cloud vorhandene Dateien bereinigen

Filter verhindern neue Unordnung, entfernen aber nicht, was bereits vorhanden ist. Öffnen Sie den Cloud-Ordner in einem Explorer-Panel und die lokale Quelle in einem anderen, und verwenden Sie dann **Compare**. Metadatendateien, die lokal nicht mehr existieren, erscheinen unter „Show right-only files“; Kopien, die noch auf beiden Seiten existieren, werden als gleiche oder unterschiedliche Dateien angezeigt. In beiden Fällen können Sie die Kopien auf der Cloud-Seite auswählen und direkt in der Vergleichsansicht löschen.

Seien Sie hier bei der einseitigen Synchronisation vorsichtig. Eine Synchronisation, die die Quelle auf das Ziel spiegelt, löscht Zieldateien, die in der Quelle nicht mehr existieren – ausgeschlossene Dateien werden jedoch vollständig übersprungen. Eine Bereinigung über Compare bleibt daher der klarste und bewussteste Weg, sie zu entfernen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView zeigt verbliebene Systemdateien auf der Cloud-Seite" class="img-large img-center" />

## Bei jedem Lauf sauber halten

Speichern Sie die gefilterte Synchronisation als Job im Job Manager, damit die Ausschlüsse jedes Mal gelten. RcloneView führt diese Jobs unter Windows, macOS und Linux mit denselben Filtern aus, was wichtig ist, wenn die hochladenden Personen unterschiedliche Betriebssysteme verwenden. Mit einer PLUS-Lizenz können Sie den Job planen, und die Job History zeigt die Dateianzahl pro Lauf – ein plötzlicher Rückgang nach dem Hinzufügen der Filter ist ein gutes Zeichen, dass der Datenmüll verschwunden ist.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView zeigt die Dateianzahl nach dem Ausschluss von Systemdateien" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Erstellen oder bearbeiten Sie einen Synchronisationsjob und fügen Sie in Step 3 `.DS_Store`, `Thumbs.db` und `desktop.ini` als benutzerdefinierte Ausschlussfilter hinzu.
3. Führen Sie einen Dry Run aus, um zu bestätigen, dass die Metadatendateien nicht mehr in der Übertragungsliste stehen.
4. Verwenden Sie Compare, um die bereits in der Cloud gespeicherten Kopien zu finden und zu löschen.

Ein paar Minuten Filtereinrichtung halten Ihre Cloud-Ordner übersichtlich und Ihre Synchronisationsläufe auf die eigentliche Arbeit fokussiert.

---

**Verwandte Anleitungen:**

- [Synchronisationsfilter, die keine Dateien ausschließen, beheben](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Rclone-Filterregeln — Include und Exclude erklärt](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Ein volles Cloud-Speicherkonto aufräumen](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
