---
slug: cloud-storage-civil-engineering-rcloneview
title: "Cloud-Speicher für Tiefbau-Ingenieurbüros — Projektdateien, Vermessungsdaten und Backups mit RcloneView"
authors:
  - tayson
description: "Cloud-Speicher für Tiefbau-Ingenieurbüros: Projektzeichnungen, Vermessungsdaten und Backups mit RcloneView, einer plattformübergreifenden GUI, über mehrere Clouds hinweg organisieren."
keywords:
  - Cloud-Speicher für Tiefbau
  - Backup von Tiefbau-Dateien
  - Synchronisation von Ingenieurprojekt-Dateien
  - Cloud-Backup von Vermessungsdaten
  - Multi-Cloud-Backup für Ingenieure
  - RcloneView
  - Cloud-Synchronisation GUI
  - große Zeichnungsdateien in der Cloud
  - Projektarchiv Cloud-Speicher
  - rclone GUI
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Tiefbau-Ingenieurbüros — Projektdateien, Vermessungsdaten und Backups mit RcloneView

> Sichern Sie Zeichnungen, Vermessungsdaten und abgeschlossene Projekte über mehrere Clouds hinweg, ohne einen einzigen Befehl zu skripten.

Ein mittelgroßes Tiefbau-Ingenieurbüro verwaltet vielleicht laufende Straßenplanungsprojekte in Google Drive, Kundenlieferungen in Box oder OneDrive und jahrelange Archive abgeschlossener Projekte auf einem NAS. Jeder Speicherort hat seine eigene Oberfläche, was konsistente Backups erschwert. RcloneView bringt alle in einem Fenster zusammen, sodass Sie Übertragungen visuell kopieren, vergleichen und planen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Ingenieurdaten einen Multi-Cloud-Ansatz brauchen

Ingenieurprojekte erzeugen große, gemischte Dateisätze: CAD-Zeichnungen, GIS-Exporte, Punktwolken-Scans, Berechnungstabellen und signierte PDF-Pakete. Kunden schreiben oft vor, wo Lieferungen liegen müssen, sodass ein einzelner Anbieter selten alles abdeckt. RcloneView verbindet sich mit über 90 Anbietern, sodass Google Drive, Box, OneDrive, Amazon S3 und Ihr lokales NAS nebeneinander im Explorer erscheinen.

<img src="/support/images/en/blog/new-remote.png" alt="Cloud-Remotes in RcloneView für ein Ingenieurbüro hinzufügen" class="img-large img-center" />

RcloneView bindet über 90 Anbieter aus einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux – so teilen sich Laptops im Außendienst und Arbeitsplätze im Büro denselben Workflow.

## Abgeschlossene Projekte in kostengünstigem Objektspeicher archivieren

Nach Projektabschluss ändern sich die Dateien kaum noch, müssen aber jahrelang aufbewahrt werden. Kopieren Sie den fertigen Projektordner aus Ihrem aktiven Arbeitsbereich mit dem Zwei-Fenster-Explorer oder per Drag & Drop zwischen Remotes in einen S3-kompatiblen Bucket wie Backblaze B2 oder Wasabi. Das Verschieben zwischen verschiedenen Remotes führt eine Kopie aus, sodass das Original erhalten bleibt, bis Sie das Ergebnis geprüft haben.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung eines Projektarchivs" class="img-large img-center" />

## Lieferungen mit Folder Compare überprüfen

Bevor Sie etwas von einem Arbeitslaufwerk löschen, führen Sie Folder Compare zwischen Quelle und Archiv aus. Filter zeigen Dateien, die nur links, nur rechts oder unterschiedlich vorhanden sind, sodass Sie bestätigen können, dass jeder Zeichnungssatz angekommen ist. Führen Sie bei jedem Sync-Job zuerst einen Dry Run aus, um genau zu sehen, welche Dateien kopiert oder gelöscht würden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zeigt Unterschiede zwischen Projektordnern" class="img-large img-center" />

## Nächtliche Backups aktiver Projekte planen

Erstellen Sie einen Sync-Job von Ihrer Projektfreigabe in eine zweite Cloud und fügen Sie einen Zeitplan im Crontab-Stil hinzu, damit Backups außerhalb der Arbeitszeit laufen. Für die Zeitplanung ist die PLUS-Lizenz erforderlich; manuelle Jobs, der Verlauf (Job History) und 1:N-Synchronisation mit mehreren Zielen funktionieren mit der FREE-Lizenz. Der Job-Verlauf erfasst Status, Größe und Dateianzahl jedes Laufs und liefert so einen Prüfpfad.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Nächtlichen Backup-Job in RcloneView planen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Remotes für Ihren aktiven Arbeitsbereich, Ihr NAS und einen Archiv-Bucket hinzu.
3. Erstellen Sie einen Sync-Job von den aktiven Projekten ins Archiv und führen Sie zuerst einen Dry Run aus.
4. Fügen Sie einen Zeitplan (PLUS) hinzu und prüfen Sie nach den ersten Läufen den Job-Verlauf.

Der Schutz jahrelanger Ingenieurunterlagen braucht kein eigenes Skript mehr.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für Architekturbüros](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — Cloud-Synchronisation in der Vorschau](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Job-Verlauf und Übertragungsprotokolle](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
