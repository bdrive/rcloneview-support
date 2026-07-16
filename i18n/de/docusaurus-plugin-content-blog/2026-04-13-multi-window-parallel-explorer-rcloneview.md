---
slug: multi-window-parallel-explorer-rcloneview
title: "Multi-Fenster-Unterstützung — Mehrere Cloud-Speicher nebeneinander verwalten in RcloneView"
authors:
  - tayson
description: "Nutzen Sie die Multi-Fenster-Funktion von RcloneView, um unabhängige Fenster für verschiedene Cloud-Speicher-Aufgaben zu öffnen. Verwalten Sie Google Drive, S3 und OneDrive parallel in separaten Fenstern."
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Multi-Fenster-Unterstützung — Mehrere Cloud-Speicher nebeneinander verwalten in RcloneView

> Die Multi-Fenster-Funktion von RcloneView (PLUS-Lizenz) öffnet unabhängige Anwendungsfenster, sodass Sie verschiedene Cloud-Speicher-Aufgaben gleichzeitig verwalten können, ohne den Kontext wechseln zu müssen.

Das Explorer-Panel von RcloneView unterstützt bereits 1 bis 4 Panels in einem einzigen Fenster — nützlich zum Nebeneinander-Durchsuchen und für Drag-and-Drop-Übertragungen. Aber für komplexe Workflows mit mehreren unterschiedlichen Aufgaben — etwa das Überwachen einer laufenden Migration in einer Ansicht, während in einer anderen ein separater Cloud-Speicher durchsucht wird, oder das Ausführen eines Ordnervergleichs bei gleichzeitiger Einrichtung eines neuen Synchronisationsjobs — öffnet Multi-Window vollständig unabhängige RcloneView-Fenster, die sich nicht gegenseitig beeinflussen. Diese Funktion ist mit einer PLUS-Lizenz verfügbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Multi-Window funktioniert

Jedes über Multi-Window geöffnete neue Fenster ist eine vollständig unabhängige RcloneView-Instanz mit eigenen Explorer-Panels, eigenem Tab „Übertragungen“ und eigenem Zustand. Änderungen in einem Fenster wirken sich nicht auf die anderen aus. Die Fenster kommunizieren über den internen IPC-Mechanismus von RcloneView, aber ihr Datei-Browsing-Zustand und ihre aktiven Vorgänge sind voneinander isoliert.

Um ein neues Fenster zu öffnen, klicken Sie im Tab „Home“ auf die Schaltfläche **Neues Fenster**. Das neue Fenster öffnet sich im gleichen Standardzustand wie das Hauptfenster — Sie können es dann unabhängig zu einem anderen Remote navigieren oder einen anderen Job starten. Fensterpositionen und -größen werden automatisch zwischen den Sitzungen gespeichert, sodass Ihr Multi-Fenster-Layout beim nächsten Öffnen von RcloneView erhalten bleibt.

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## Praktische Multi-Fenster-Workflows

**Paralleles Durchsuchen über Cloud-Anbieter hinweg:** Öffnen Sie Fenster 1, um Ihre Amazon-S3-Buckets zu durchsuchen, während Fenster 2 Ihr Google Drive anzeigt. Ziehen Sie Dateien zwischen den Fenstern, um anbieterübergreifende Kopien auszulösen, oder überwachen Sie die Inhalte beider Anbieter gleichzeitig während einer Migration.

**Job-Überwachung parallel zum Durchsuchen von Dateien:** Behalten Sie in Fenster 1 den Tab „Übertragungen“ mit dem Fortschritt eines aktiven Jobs im Blick, während Sie in Fenster 2 einen anderen Cloud-Speicher durchsuchen oder den nächsten Job einrichten können — ohne den Tab wechseln oder Ihre Überwachungsansicht unterbrechen zu müssen.

**Ordnervergleich in einem eigenen Fenster:** Führen Sie einen großen Ordnervergleich in Fenster 1 aus (was bei großen Cloud-Ordnern einige Zeit dauern kann), während Sie in Fenster 2 weiter mit Dateien arbeiten. Der Vergleich läuft unabhängig, ohne Ihre anderen Aktivitäten zu blockieren.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**Workflows für mehrere Benutzer oder Projekte:** Fachleute, die Cloud-Speicher für mehrere Kunden oder Projekte verwalten, können jedem ein eigenes Fenster widmen und so kontextspezifische Ansichten gleichzeitig offen halten, anstatt ständig zwischen Remotes hin- und herzuwechseln.

## Multi-Window mit Panel-Layout kombinieren

Innerhalb jedes Fensters ist das Panel-Layout (1 bis 4 Panels, horizontale oder vertikale Aufteilung) unabhängig über Tab „Einstellungen“ > Layout / Ansichtsanzahl konfigurierbar. Ein Multi-Fenster-Setup mit 2 Fenstern zu je 2 Panels ergibt effektiv vier gleichzeitige Explorer-Panels über zwei organisierte Arbeitsbereiche hinweg.

Diese Kombination ist besonders nützlich für Synchronisationsworkflows: Fenster 1 zeigt Quell- und Zielpanels mit einem laufenden Synchronisationsjob; Fenster 2 zeigt ein zweites Quelle-Ziel-Paar für einen anderen Synchronisationsjob. Beide Jobs laufen parallel, ohne sich den Anzeigezustand zu teilen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) und aktivieren Sie eine PLUS-Lizenz.
2. Klicken Sie im Tab „Home“ auf die Schaltfläche **Neues Fenster**, um ein unabhängiges zweites Fenster zu öffnen.
3. Navigieren Sie jedes Fenster zu einem anderen Remote oder einer anderen Aufgabe, um parallel zu arbeiten.
4. Passen Sie die Panel-Anzahl pro Fenster unter Einstellungen > Layout an das für Ihren Workflow effizienteste Layout an.

Multi-Window verwandelt RcloneView von einem Einzelaufgaben-Dateimanager in einen parallelen Arbeitsbereich für Cloud-Speicher-Profis, die mehrere Anbieter, Projekte oder laufende Vorgänge gleichzeitig verwalten.

---

**Verwandte Anleitungen:**

- [Tipps für die Produktivität mit dem Zwei-Panel-Explorer in RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [Mehrere Cloud-Konten mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Alle Clouds vereinen — Google Drive, Dropbox und OneDrive verwalten](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
