---
slug: cloud-storage-museums-archives-rcloneview
title: "Cloud-Speicher für Museen und Archive — digitale Sammlungen mit RcloneView bewahren"
authors:
  - tayson
description: "Verwalten Sie Cloud-Speicher für Museen und Archive mit RcloneView und synchronisieren Sie hochauflösende Scans und Metadaten über mehrere Anbieter hinweg für die langfristige digitale Bewahrung."
keywords:
  - Cloud-Speicher Museen
  - digitaler Archivspeicher
  - Museumssammlung Backup
  - digitale Bewahrung rcloneview
  - Archiv Cloud-Synchronisation
  - Museumsdigitalisierung Speicher
  - rcloneview für Archive
  - Cloud-Speicher für Kulturerbe
  - langfristiges digitales Archiv
  - Cloud-Backup für Institutionen
tags:
  - RcloneView
  - cloud-storage
  - industry
  - digital-preservation
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Museen und Archive — digitale Sammlungen mit RcloneView bewahren

> Ein regionales Geschichtsmuseum, das 40.000 fotografische Platten und Archivdokumente digitalisiert, benötigt einen Speicher, der Jahrzehnte übersteht — nicht nur den aktuellen Budgetzyklus. **RcloneView** hält diese Master-Dateien über mehrere Anbieter hinweg synchron, sodass kein einzelner Ausfallpunkt eine Sammlung gefährdet.

Museen, Archive und Kulturerbe-Institutionen erzeugen große Mengen an hochauflösenden Scans, TIFF-Mastern und Katalogisierungs-Metadaten, die oft weit über den Produktlebenszyklus eines einzelnen Cloud-Anbieters hinaus zugänglich und intakt bleiben müssen. RcloneView bietet dem Sammlungspersonal eine einzige Oberfläche, um dieses Material über 90+ Cloud-Anbieter hinweg zu verschieben und zu spiegeln, ohne dass ein eigenes IT-Team für die Verwaltung von Kommandozeilen-Tools nötig ist. Im Gegensatz zu reinen Mount-Tools bietet RcloneView auch Synchronisation und den Vergleich von Ordnern — bereits mit der FREE License — was wichtig ist, wenn es darum geht zu überprüfen, ob eine Sicherungskopie tatsächlich mit dem Original übereinstimmt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Master-Dateien über mehrere Anbieter hinweg spiegeln

Bewährte Praxis der digitalen Bewahrung verlangt mehrere unabhängige Kopien der Master-Scans, idealerweise auf Speichersystemen mit unterschiedlicher zugrunde liegender Infrastruktur. Mit der 1:N-Synchronisation von RcloneView kann ein Archiv einen einzelnen Quellordner — zum Beispiel eine Reihe neu digitalisierter TIFF-Master — in einem Auftrag an zwei oder drei Ziel-Remotes senden, sodass eine Google-Drive-Kopie, ein Amazon-S3-Bucket und ein lokales NAS ohne separate manuelle Übertragungen aktuell bleiben.

Das ist besonders wichtig für Institutionen ohne großes Budget für digitale Bewahrung: Ein kleiner Geschichtsverein kann Scans parallel auf ein kostenloses Remote und ein günstiges Objektspeicher-Bucket spiegeln, statt sich auf die Roadmap eines einzelnen Anbieters festzulegen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing archival scans across multiple cloud destinations in RcloneView" class="img-large img-center" />

## Fixity ohne Kommandozeilen-Tools überprüfen

Archivare sprechen von „Fixity" — der Bestätigung, dass sich eine Datei seit der Erfassung nicht verändert oder verschlechtert hat. Die Folder-Compare-Ansicht von RcloneView macht dies auch für nicht-technisches Sammlungspersonal zugänglich: Arbeitskopie und Sicherungskopie angeben, und das Tool markiert alles, was sich in der Größe unterscheidet, statt anzunehmen, dass eine erfolgreiche Kopie automatisch identisch ist. Wird die Prüfsummen-Vergleichsoption direkt beim Sync-Job aktiviert, kommt eine Datei-Hash-Verifizierung hinzu, noch bevor die Sicherungskopie überhaupt erstellt wird.

Wird dieser Vergleich regelmäßig manuell durchgeführt oder mit einem geplanten Sync-Job (PLUS License) kombiniert, bei dem der Prüfsummen-Vergleich aktiviert ist, lassen sich Drift oder Beschädigungen in einer gespeicherten Sammlung aufdecken, bevor sie erst Jahre später bei einer Rechercheanfrage entdeckt werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing archival master files between two storage locations in RcloneView" class="img-large img-center" />

## Nach Sammlung, Format oder Charge filtern

Große Digitalisierungsprojekte laufen selten als ein einziger sauberer Stapel ab — neue Zugänge, korrigierte Metadatendateien und erneut gescannte Objekte treffen zu unterschiedlichen Zeitpunkten ein. Mit den Filtereinstellungen in Schritt 3 von RcloneView kann das Personal eine Synchronisation auf eine bestimmte Ordnertiefe, ein Dateialter oder eine Dateiendung beschränken, sodass ein Auftrag nur die neu gescannten TIFF-Dateien dieses Monats erfasst, ohne jedes Mal eine mehrere Terabyte große Sammlung komplett neu zu übertragen.

Die Job History führt anschließend ein datiertes Protokoll darüber, was genau wann verschoben wurde — das dient auch als schlanker Prüfpfad für Förderberichte oder das interne Sammlungsmanagement.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing sync job history for a digitized collection in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie die Cloud- oder S3-kompatiblen Remotes, die Ihre Institution bereits für die Sammlungsspeicherung nutzt.
3. Richten Sie eine 1:N-Synchronisation ein, um neue Digitalisierungschargen auf zwei oder mehr Ziele zu spiegeln.
4. Führen Sie nach jeder Übertragung Folder Compare mit Prüfsummen aus, um die Fixity vor der lokalen Archivierung zu bestätigen.

Eine digitalisierte Sammlung ist nur so sicher wie ihre schwächste Speicherkopie — diese Kopien synchron und verifiziert zu halten, schützt die eigentliche Arbeit.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für Universitäten und Bildungseinrichtungen — Leitfaden mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-for-universities-education-rcloneview)
- [Prüfsummen-verifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Multi-Cloud-Backup-Strategie mit RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
