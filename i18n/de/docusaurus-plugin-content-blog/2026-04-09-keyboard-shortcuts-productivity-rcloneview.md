---
slug: keyboard-shortcuts-productivity-rcloneview
title: "RcloneView Tastenkürzel und Produktivitätstipps"
authors:
  - tayson
description: "Beherrschen Sie RcloneView Tastenkürzel und Produktivitätstipps, um schneller durch Cloud-Speicher zu navigieren, Übertragungen effizient zu verwalten und tägliche Dateivorgänge zu optimieren."
keywords:
  - rcloneview
  - tastenkürzel
  - rcloneview hotkeys
  - produktivitätstipps
  - dateimanager tastenkürzel
  - rcloneview workflow
  - cloud-dateimanager tipps
  - rcloneview navigation
  - power-user-tipps
  - rcloneview effizienz
tags:
  - feature
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Tastenkürzel und Produktivitätstipps

> Power-User wissen, dass Tastenkürzel die Zeit für die Dateiverwaltung halbieren können. Das Tastenkürzel-System von RcloneView bietet Ihnen schnellen Zugriff auf Navigation, Auswahl, Übertragungen und Job-Verwaltung, ohne zur Maus greifen zu müssen.

Der Zwei-Fenster-Explorer von RcloneView ist auf effiziente Dateivorgänge über Cloud-Anbieter hinweg ausgelegt. Während die Oberfläche vollständig mit Mausklicks bedienbar ist, verändert das Erlernen der Tastenkürzel Ihren Workflow grundlegend — besonders bei der Verwaltung tausender Dateien über mehrere Remotes hinweg. Dieser Leitfaden behandelt die wichtigsten Tastenkürzel und Workflow-Tipps, auf die sich erfahrene RcloneView-Nutzer täglich verlassen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Navigations-Tastenkürzel

Effiziente Navigation ist die Grundlage schneller Dateiverwaltung. Mit diesen Tastenkürzeln wechseln Sie zwischen Fenstern, wechseln Remotes und navigieren durch Ordnerbäume, ohne zu klicken:

### Fensterverwaltung

- **Tab**: Wechselt den Fokus zwischen dem linken und rechten Fenster. Dies ist das am häufigsten verwendete Tastenkürzel in RcloneView — es ermöglicht Ihnen, zwischen Quelle und Ziel zu wechseln, ohne die Hände von der Tastatur zu nehmen.
- **Enter**: Öffnet den ausgewählten Ordner oder die ausgewählte Datei. Bei Ordnern navigiert dies hinein. Bei Dateien wird die Standardaktion ausgelöst.
- **Rücktaste / Alt+Nach oben**: Navigiert im aktuellen Fenster eine Verzeichnisebene nach oben.

### Dateiauswahl

- **Strg+A**: Wählt alle Dateien im aktuellen Fenster aus. Nützlich für Massenoperationen wie das Kopieren des gesamten Inhalts eines Ordners.
- **Umschalt+Klick**: Wählt einen Bereich von Dateien zwischen der zuletzt ausgewählten Datei und der angeklickten Datei aus.
- **Strg+Klick**: Schaltet die Auswahl einzelner Dateien um, ohne andere abzuwählen. Erstellen Sie eine Mehrfachauswahl über nicht zusammenhängende Elemente hinweg.

## Tastenkürzel für Dateivorgänge

Sobald Dateien ausgewählt sind, führen diese Tastenkürzel Operationen schnell aus:

- **Strg+C**: Kopiert ausgewählte Dateien in die Zwischenablage (zum Einfügen im anderen Fenster).
- **Strg+X**: Schneidet ausgewählte Dateien aus (Verschiebevorgang).
- **Strg+V**: Fügt Dateien aus der Zwischenablage am Ort des aktuellen Fensters ein.
- **Entf / Del**: Löscht ausgewählte Dateien auf dem Remote. RcloneView fragt vor dem Löschen nach einer Bestätigung.
- **F2**: Benennt die ausgewählte Datei oder den ausgewählten Ordner um.
- **Strg+Umschalt+N**: Erstellt einen neuen Ordner am Ort des aktuellen Fensters.

## Vergleichs- und Synchronisations-Tastenkürzel

Die Vergleichs- und Synchronisationsfunktionen von RcloneView haben eigene Tastenkürzel:

- **Vergleichen-Schaltfläche / Tastenkürzel**: Startet einen Ordnervergleich zwischen dem linken und rechten Fenster. Der Vergleich hebt Dateien hervor, die nur auf einer Seite vorhanden sind, Dateien, die sich unterscheiden, sowie identische Dateien.
- **Synchronisations-Tastenkürzel**: Startet die Synchronisation von links nach rechts oder von rechts nach links direkt über die Symbolleiste oder die Tastatur.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Keyboard-driven folder comparison in RcloneView" class="img-large img-center" />

## Suche und Filter

- **Strg+F**: Öffnet die Such-/Filterleiste im aktuellen Fenster. Geben Sie ein Dateinamenmuster ein, um die sichtbaren Dateien zu filtern. Dies ist in Ordnern mit Hunderten von Dateien von unschätzbarem Wert — geben Sie ein paar Zeichen ein, um die Liste sofort einzugrenzen.
- **Esc**: Schließt die Such-/Filterleiste und stellt die vollständige Dateiliste wieder her.

## Produktivitätstipps

### Tipp 1: Benennen Sie Remotes aussagekräftig

Benennen Sie Ihre Remotes nach Zweck statt nach Anbieter — „Client-A-Drive" statt „Google-Drive-2". Wenn Sie 10 oder mehr Remotes haben, sparen aussagekräftige Namen Zeit beim Finden des richtigen Eintrags im Dropdown-Menü.

### Tipp 2: Nutzen Sie das Zwei-Fenster-Layout

Behalten Sie Ihren meistgenutzten Remote im linken Fenster und wechseln Sie das rechte Fenster nach Bedarf. Behalten Sie beispielsweise Ihr Backup-Ziel (Backblaze B2, S3) immer im linken Fenster und laden Sie verschiedene Quell-Remotes im rechten Fenster. Dies schafft ein konsistentes räumliches Modell — „links ist Backup, rechts ist Quelle" — das automatisch wird.

### Tipp 3: Häufig genutzte Pfade anheften

Wenn Sie wiederholt zum selben tief verschachtelten Ordner navigieren, erstellen Sie ein Lesezeichen oder einen Alias-Remote, der direkt darauf verweist. Anstatt jedes Mal zu `remote:/projects/2026/client-a/deliverables/` zu navigieren, erstellen Sie einen Alias-Remote namens „Client-A-Deliverables", der direkt zu diesem Pfad öffnet.

### Tipp 4: Testlauf vor der Synchronisation verwenden

Bevor Sie einen Synchronisationsjob für Produktionsdaten ausführen, führen Sie immer eine Vorschau mit einem Testlauf durch. Dies zeigt genau, was übertragen, gelöscht oder übersprungen wird — ohne tatsächlich Änderungen vorzunehmen. So erkennen Sie Fehler, bevor sie auftreten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a job efficiently with keyboard shortcuts in RcloneView" class="img-large img-center" />

### Tipp 5: Stapelverarbeitung mit der Job-Warteschlange

Anstatt Übertragungen einzeln auszuführen, reihen Sie mehrere Jobs in eine Warteschlange ein. Richten Sie ein Kopieren von Remote A nach B ein, dann eine Synchronisation von C nach D, und lassen Sie sie nacheinander ablaufen. Die Job-Warteschlange übernimmt die Ausführungsreihenfolge, während Sie sich anderen Aufgaben widmen.

### Tipp 6: Überwachen, ohne zu unterbrechen

Wechseln Sie zur Übertragungsüberwachung, um den Fortschritt zu prüfen, ohne Ihre Navigation zu stoppen. RcloneView zeigt Übertragungsgeschwindigkeiten in Echtzeit, den Fortschritt pro Datei und die geschätzte Fertigstellungszeit an. Pausieren oder brechen Sie einzelne Übertragungen ab, ohne andere in der Warteschlange zu beeinträchtigen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfers while navigating in RcloneView" class="img-large img-center" />

### Tipp 7: Drag & Drop für schnelle Übertragungen nutzen

Für einmalige Übertragungen ist Drag & Drop die schnellste Methode. Wählen Sie Dateien in einem Fenster aus und ziehen Sie sie in das andere. Dies funktioniert zwischen beliebigen zwei Remotes — Cloud zu Cloud, lokal zu Cloud oder Cloud zu lokal.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop between cloud providers in RcloneView" class="img-large img-center" />

### Tipp 8: Job-Verlauf regelmäßig überprüfen

Das Job-Verlauf-Panel erfasst jede Operation mit Statistiken. Überprüfen Sie es regelmäßig, um zu bestätigen, dass geplante Jobs erfolgreich laufen, Übertragungsgeschwindigkeiten zu prüfen und etwaige Fehler zu identifizieren. Diese Gewohnheit erkennt Probleme frühzeitig — bevor aus einem fehlgeschlagenen Backup ein verpasstes Backup wird.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history for productivity insights in RcloneView" class="img-large img-center" />

## Muskelgedächtnis aufbauen

Der schnellste Weg, Tastenkürzel zu verinnerlichen, besteht darin, sie eine Woche lang bewusst zu verwenden. Jedes Mal, wenn Sie zur Maus greifen, um Fenster zu wechseln, halten Sie inne und drücken Sie stattdessen Tab. Jedes Mal, wenn Sie mit der rechten Maustaste klicken, um zu kopieren, verwenden Sie stattdessen Strg+C. Nach einer Woche werden die Tastenkürzel automatisch, und Ihre Geschwindigkeit bei der Dateiverwaltung nimmt spürbar zu.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Richten Sie Ihre Remotes mit aussagekräftigen Namen ein.
3. Üben Sie die Navigations-Tastenkürzel (Tab, Enter, Rücktaste), bis sie automatisch werden.
4. Verwenden Sie Strg+F, um große Ordner zu filtern, anstatt zu scrollen.
5. Nutzen Sie Testläufe, Job-Warteschlangen und Verlaufsüberprüfungen für zuverlässige Operationen.

Tastenkürzel und Workflow-Gewohnheiten summieren sich über die Zeit. Ein paar gesparte Sekunden pro Vorgang summieren sich zu Stunden, die pro Monat eingespart werden, wenn Sie täglich Dateien über mehrere Cloud-Anbieter hinweg verwalten.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Dateien per Drag & Drop übertragen](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
