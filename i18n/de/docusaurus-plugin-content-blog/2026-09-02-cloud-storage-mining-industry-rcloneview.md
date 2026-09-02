---
slug: cloud-storage-mining-industry-rcloneview
title: "Cloud-Speicher für Bergbauunternehmen — Vermessungsdaten mit RcloneView verwalten"
authors:
  - morgan
description: "Zentralisieren Sie Drohnenvermessungs-, LiDAR- und GIS-Daten von entlegenen Minenstandorten mit RcloneView — Cloud-Speicher für den Bergbaubetrieb."
keywords:
  - Cloud-Speicher für Bergbauunternehmen
  - Cloud-Backup für die Bergbauindustrie
  - Speicherung geologischer Vermessungsdaten
  - LiDAR-Daten Cloud-Synchronisation
  - Backup für entlegene Minenstandorte
  - RcloneView Bergbau
  - Bergbau GIS Cloud-Speicher
  - Drohnenvermessung Cloud-Backup
  - Verwaltung von Explorationsdaten im Bergbau
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

# Cloud-Speicher für Bergbauunternehmen — Vermessungsdaten mit RcloneView verwalten

> Holen Sie Drohnenaufnahmen, LiDAR-Scans und geologische Vermessungsdateien von Laptops an entlegenen Standorten und bringen Sie sie ohne eigenes IT-Team vor Ort in einen zentralen Cloud-Speicher.

Bergbaubetriebe erzeugen enorme Mengen an Geodaten — Drohnenüberflüge, LiDAR-Punktwolken, Bohrlochprotokolle und CAD-Modelle — oft aufgenommen an Standorten mit eingeschränkter Konnektivität und ohne lokalen Serverraum. Feldteams brauchen einen zuverlässigen Weg, diese Daten in den zentralen Speicher zu bringen, sobald eine Verbindung verfügbar ist, und Ingenieure in der Zentrale müssen die Daten durchsuchen und prüfen können, ohne Terabytes herunterzuladen, nur um eine Dateianzahl zu kontrollieren. RcloneView gibt beiden Gruppen eine einzige Desktop-Anwendung, die lokale Laufwerke, Cloud-Speicher und Objektspeicher der Archivstufe in einem Fenster verbindet. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff bereits mit der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vermessungsdaten von entlegenen Standorten zentralisieren

Standort-Laptops speichern rohe Drohnenaufnahmen und LiDAR-Exporte in der Regel als lokale Dateien, bis eine Verbindung verfügbar ist. In RcloneView erscheint ein lokales Laufwerk oder ein externes Laufwerk in einem eigenen Explorer-Panel direkt neben Ihren Cloud-Remotes, sodass ein Techniker vor Ort die Vermessungsdateien des Tages durchsuchen und in einen S3-kompatiblen Bucket kopieren kann — Wasabi, AWS S3 oder Backblaze B2 sind gängige, kostengünstige Optionen für die langfristige Archivierung von Bildmaterial, auf das selten erneut zugegriffen wird, das aber aus Compliance-Gründen aufbewahrt werden muss.

<img src="/support/images/en/blog/new-remote.png" alt="Verbindung lokaler Vermessungslaufwerke und Cloud-Speicher-Remotes in RcloneView" class="img-large img-center" />

## Standortdaten mit Filtern synchronisieren, die Unnötiges überspringen

Nicht jede Datei von einem Vermessungslaufwerk muss in die Cloud. Der Synchronisierungsfilterschritt von RcloneView ermöglicht es Ihnen, temporäre Verarbeitungsdateien nach Dateiendung auszuschließen, die maximale Dateigröße zu begrenzen oder festzulegen, wie tief die Synchronisierung in eine verschachtelte Projektordnerstruktur eindringt — nützlich, wenn neben den Rohaufnahmeordnern gigabytegroße Zwischenrenderausgaben liegen, die den Standort nie verlassen müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisierung gefilterter Vermessungsdaten von einem Standortlaufwerk in den Cloud-Speicher" class="img-large img-center" />

Bei Standorten mit schmaler Satelliten- oder Mobilfunk-Uplink-Bandbreite sorgt eine nächtliche Ausführung der Synchronisierung als geplanter Job (PLUS-Lizenz) dafür, dass der Großteil der Übertragung automatisch erfolgt, ohne die Verbindung während der Arbeitszeit zu blockieren.

## Datenintegrität vor der Archivierung prüfen

Vermessungs- und Compliance-Aufzeichnungen müssen nachweislich unversehrt bleiben, sobald sie den zentralen Speicher erreichen. Folder Compare stellt den lokalen Standortordner und das Cloud-Archiv nebeneinander dar, markiert Dateien mit abweichender Größe und ermöglicht mittels prüfsummenbasiertem Vergleich, dass der Inhalt tatsächlich übereinstimmt, statt sich allein auf Dateinamen und Zeitstempel zu verlassen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vergleich eines lokalen Vermessungsordners mit der archivierten Cloud-Kopie in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie das lokale Laufwerk des Standorts sowie ein Cloud- oder S3-kompatibles Remote für das Archiv hinzu.
3. Konfigurieren Sie Synchronisierungsfilter, um temporäre und Zwischendateien auszuschließen.
4. Führen Sie einen Dry Run aus, speichern Sie den Job und prüfen Sie nach jeder Synchronisierung die Job History.

Zuverlässige Daten von entlegenen Standorten bedeuten weniger Überraschungen, wenn Engineering- und Compliance-Teams sie brauchen.

---

**Ähnliche Anleitungen:**

- [Cloud-Speicher für Bau- und Projektmanagement — RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Cloud-Speicher für Energie und Versorgungsunternehmen — RcloneView](https://rcloneview.com/support/blog/cloud-storage-energy-utilities-rcloneview)
- [Cloud-Speicher für Architektur, Ingenieurwesen und CAD — RcloneView](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)

<CloudSupportGrid />
