---
slug: cloud-storage-surveying-firms-rcloneview
title: "Cloud-Speicher für Vermessungsunternehmen — Große Felddatendateien mit RcloneView verwalten"
authors:
  - tayson
description: "Vermessungsunternehmen verarbeiten riesige LiDAR-, Punktwolken- und GPS-Datensätze. Erfahren Sie, wie RcloneView Felddaten über Cloud-Speicher hinweg synchronisiert, sichert und einbindet."
keywords:
  - Cloud-Speicher für Vermesser
  - LiDAR-Punktwolken-Backup
  - Verwaltung von Vermessungsdaten
  - GPS-Felddatensynchronisation
  - Cloud-Speicher für Vermessungsunternehmen
  - Cloud-Sync-Tool für große Dateien
  - RcloneView für Vermessung
  - Cloud-Backup für Geodaten
  - Speicherung von Drohnen-Vermessungsdaten
  - Multi-Cloud-Backup für Ingenieurbüros
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

# Cloud-Speicher für Vermessungsunternehmen — Große Felddatendateien mit RcloneView verwalten

> Punktwolken, LiDAR-Scans und GPS-Vermessungsdaten häufen sich schnell an — RcloneView sorgt dafür, dass Feldteams und das Büro mit demselben synchronisierten Datensatz arbeiten.

Vermessungs-, Geodaten- und Tiefbauunternehmen erzeugen einige der schwersten Dateilasten in jeder Branche: Roh-LiDAR-Scans, Drohnen-Photogrammetrie-Sets und Totalstations-Punktwolken, die pro Baustelle leicht mehrere Dutzend Gigabyte erreichen. Feldlaptops füllen sich schnell, und diese Daten sicher und ohne einen langsamen, manuellen Upload jeden Abend in ein zentrales Archiv zu bringen, ist ein echter operativer Engpass. RcloneView gibt Vermessungsteams ein einziges Fenster, um diese Daten zwischen Feldspeicher, Cloud-Archiven und dem Büro zu bewegen — über alle Anbieter hinweg, die ein Unternehmen bereits nutzt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Daten von mehreren Baustellen zentralisieren

Vermessungsteams kehren oft mit Daten auf lokalen Laufwerken, NAS-Geräten oder FTP/SFTP-Servern zurück, die im Baustellenwagen eingerichtet wurden. RcloneView verbindet sich mit all diesen Quellen sowie mit über 90 Cloud-Anbietern — einschließlich S3-kompatiblem Objektspeicher, den viele Unternehmen für die Langzeitarchivierung von Roh-Scandaten nutzen. Mit zwei oder mehr nebeneinander geöffneten Explorer-Panels kann ein Projektleiter den Rohordner eines Feldlaptops direkt neben dem Cloud-Archiv des Unternehmens durchsuchen und genau bestätigen, was angekommen ist, bevor der lokale Speicher geleert wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragung von Vermessungsdaten zwischen lokalem Speicher und Cloud-Archiv in RcloneView" class="img-large img-center" />

Die Funktion **Get Size** ist hier besonders nützlich — Rechtsklick auf einen Projektordner berechnet dessen Gesamtgröße vor Beginn einer Übertragung, sodass Teams die Bandbreitengrenzen an entfernten Standorten einplanen können, statt einen Upload zu starten, der auf halbem Weg stecken bleibt.

## Nächtliche Uploads aus dem Feldspeicher automatisieren

Statt sich darauf zu verlassen, dass jemand sich erinnert, am Ende jedes Tages Dateien zu kopieren, richten Sie einen Sync-Job vom Projektordner der Feldworkstation zu einem Cloud-Archiv-Remote ein. Filterregeln können temporäre Scanner-Cache-Dateien oder Miniaturansichten-Vorschauen ausschließen, sodass nur der fertige Datensatz hochgeladen wird. RcloneView bindet ein und synchronisiert über 90 Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux — dieselbe Job-Konfiguration funktioniert also unabhängig davon, ob der Feldrechner ein Windows-Laptop oder eine Linux-Workstation mit der Scansoftware ist.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines geplanten Sync-Jobs zum Hochladen von Vermessungsdaten in den Cloud-Speicher" class="img-large img-center" />

## Uploads vor dem Leeren des lokalen Speichers verifizieren

Den LiDAR-Scan eines ganzen Tages durch einen fehlgeschlagenen Upload zu verlieren, ist teuer, um es erneut zu erfassen. Führen Sie vor jeder Synchronisation einen **Dry Run** aus, um genau zu sehen, was übertragen wird, und nutzen Sie anschließend **Folder Compare**, um zu bestätigen, dass die Cloud-Kopie Datei für Datei mit den Felddaten übereinstimmt — inklusive Größenprüfung — bevor jemand lokale Originale löscht, um Speicherplatz für die nächste Baustelle freizugeben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vergleich eines lokalen Vermessungsdatenordners mit dem Cloud-Archiv zur Verifizierung" class="img-large img-center" />

## Das Büroarchiv organisiert halten

Sobald Daten in der Cloud angekommen sind, können geplante Sync-Jobs abgeschlossene Projekte zur Redundanz in ein sekundäres Archiv-Remote spiegeln, wobei die Job History einen zeitgestempelten Nachweis liefert, was wann übertragen wurde — nützlich für die Nachverfolgung von Kundenlieferungen und interne Qualitätssicherung.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen wiederkehrender Vermessungsdaten-Backup-Jobs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Ihren Feldspeicher (SFTP, lokales Laufwerk oder NAS) und Ihr Cloud-Archiv-Remote.
3. Erstellen Sie einen Sync-Job mit Filtern zum Ausschluss temporärer Scanner-Dateien und führen Sie dann einen Dry Run aus.
4. Planen Sie den Job so, dass er nach jedem Feldarbeitstag läuft, und prüfen Sie die Job History, um den Abschluss zu bestätigen.

Da Felddaten jede Nacht zuverlässig in die Cloud gelangen, verbringen Vermessungsteams weniger Zeit mit der Überwachung von Uploads und mehr Zeit auf der nächsten Baustelle.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für das Baustellenprojektmanagement](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Cloud-Speicher für Architektur, Ingenieurwesen & CAD](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [Multi-Cloud-Backup-Strategie mit RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
