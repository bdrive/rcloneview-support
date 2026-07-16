---
slug: filter-rules-selective-sync-rcloneview
title: "RcloneView Filterregeln: Ordner und Dateitypen ausschließen für schnellere, sauberere Synchronisationen"
authors:
  - tayson
description: "Erstellen Sie selektive Synchronisations-Workflows mit RcloneView Filterregeln, um Rauschen zu vermeiden, Cloud-Traffic zu reduzieren und Backups sauber zu halten. GUI-first, keine CLI-Flags."
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView Filterregeln: Ordner und Dateitypen ausschließen für schnellere, sauberere Synchronisationen

> Die schnellste Synchronisation ist die, die Rauschen ignoriert. RcloneView Filterregeln helfen Ihnen, Cache-Ordner, temporäre Dateien und Build-Artefakte zu überspringen, sodass jede Übertragung gezielt erfolgt.

Selektive Synchronisation ist eines der meistgesuchten rclone-Themen, weil sie direkt Zeit, Bandbreite und Cloud-Kosten spart. Die meisten Anleitungen listen CLI-Flags auf und lassen es dabei bewenden. Dieser Beitrag zeigt, wie Sie **filter-first Workflows** in RcloneView mit einer visuellen UI aufbauen, die Ergebnisse vorhersehbar macht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Filterregeln wichtiger sind als je zuvor

Kosten und Verzögerungen bei der Cloud-Synchronisation entstehen durch das Scannen und Übertragen von Dateien, die Sie nie benötigt haben:

- Cache-Ordner (`.cache`, `node_modules`, `.gradle`)
- Temporäre oder Vorschau-Dateien (`*.tmp`, `*_preview.*`)
- Automatisch generierte Build-Artefakte
- Wiederholte Metadatenprüfungen an unveränderten Dateien

Filter reduzieren Rauschen und machen jeden Sync- oder Copy-Job kleiner, schneller und sicherer.

## Was Filterregeln in RcloneView bewirken

Filter legen fest, **was vor jeder Übertragung ein- oder ausgeschlossen wird**. In RcloneView wenden Sie sie über die Sync/Job-UI an, sodass Sie sich keine CLI-Syntax merken müssen.

Verwenden Sie Filterregeln, um:

- Ganze Ordner auszuschließen
- Nur bestimmte Projektpfade einzuschließen
- Dateitypen zu überspringen, die Sie nie sichern möchten
- Sensible oder irrelevante Daten zu schützen

## Wo Sie Filter in der GUI konfigurieren

Sie können Filter beim Ausführen von Sync oder beim Erstellen eines Jobs hinzufügen:

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

Fügen Sie in Sekundenschnelle eine benutzerdefinierte Regel hinzu:

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

Bearbeiten und verfeinern Sie Regeln nach Bedarf:

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## Praktische Filterregeln (sofort einsatzbereite Beispiele)

### Häufiges Rauschen ausschließen

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### Nur Ihre Arbeitsordner synchronisieren

- Einschließen: `**/Projects/**`
- Ausschließen: `**/Downloads/**`

### Regeln für Medienprojekte

- Einschließen: `**/*.mp4`, `**/*.mov`, `**/*.wav`
- Ausschließen: `**/*_proxy.*`, `**/*_preview.*`

### Design-/Kreativ-Workflows

- Einschließen: `**/*.psd`, `**/*.ai`, `**/*.blend`
- Ausschließen: `**/renders/**`, `**/cache/**`

## Erst vergleichen, dann filtern, dann synchronisieren

Filter sind am sichersten, wenn Sie sie visuell validieren:

1. Führen Sie **Compare** aus, um zu sehen, was sich ändern wird.
2. Passen Sie die Filter an, falls etwas Wichtiges verschwindet.
3. Synchronisieren Sie mit Zuversicht.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

Anleitung: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## Filter-first Workflow (von Grund auf sicher)

### Schritt 1: Quelle und Ziel bestätigen

Verwenden Sie den Schritt "Configure Storage", um Pfade vor dem Filtern zu validieren.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### Schritt 2: Filter anwenden

Fügen Sie Ausschlüsse und Einschlüsse basierend auf Ihrem Workflow hinzu.

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### Schritt 3: Dry Run zur Überprüfung

Führen Sie Dry Run aus, um das gefilterte Ergebnis zu bestätigen, bevor Sie Daten verschieben.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## Gefilterte Workflows als Jobs speichern

Sobald die Filter korrekt sind, speichern Sie die Synchronisation als Job:

- Konsistentes Verhalten bei jedem Durchlauf
- Weniger menschliche Fehler
- Einfache Planung für automatisierte Backups

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Anleitung: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## Gefilterte Synchronisationen planen

Verwenden Sie Job Scheduling, um selektive Backups zu automatisieren:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

Anleitung: [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Praxiserfolge durch Filterregeln

- **Schnellere Synchronisationen**: weniger gescannte und übertragene Dateien
- **Geringere Kosten**: weniger API-Traffic und weniger wiederholte Uploads
- **Sauberere Backups**: nur relevante Dateien werden aufbewahrt
- **Stabilere Abläufe**: kleinere Job-Logs und einfachere Fehlersuche

## Häufige Fehler, die es zu vermeiden gilt

- Übermäßiges Filtern kritischer Ordner (zuerst mit Compare testen)
- Vermischen von Einschlüssen/Ausschlüssen ohne klare Reihenfolge
- Dry Run bei großen Migrationen überspringen
- Annahme, dass Filter rückwirkend auf alte Daten angewendet werden

## Zusammenfassung der Best Practices

- Machen Sie Filter zu einem festen Bestandteil jedes Sync- oder Copy-Jobs.  
- Verwenden Sie Compare, um zu validieren, was die Filter entfernen werden.  
- Beginnen Sie mit einem kleinen Testordner, bevor Sie Filter auf den gesamten Datensatz anwenden.  
- Speichern Sie gefilterte Jobs für Wiederholbarkeit und Nachvollziehbarkeit.  

## Fazit

Selektive Synchronisation ist der schnellste Weg, Cloud-Operationen schneller und günstiger zu machen. RcloneView verwandelt komplexe rclone-Filterregeln in einen visuellen Workflow, den Sie verstehen, testen und automatisieren können. Beginnen Sie damit, einen störenden Ordner auszuschließen, und beobachten Sie, wie Ihre Synchronisationszeit beim nächsten Durchlauf sinkt.
