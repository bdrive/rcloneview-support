---
slug: cloud-storage-museums-archives-rcloneview
title: "Cloud-Speicher für Museen und Archive — Digitale Bewahrung mit RcloneView"
authors:
  - morgan
description: "Verwalten Sie digitalisierte Sammlungen, Archivmaster und Bewahrungskopien über mehrere Cloud-Anbieter hinweg mit der prüfsummenverifizierten Synchronisation von RcloneView."
keywords:
  - Cloud-Speicher für Museen
  - digitaler Archivspeicher
  - Software zur digitalen Bewahrung
  - Verwaltung von Archivsammlungen
  - RcloneView Museen
  - Digitalisierung des Kulturerbes
  - Backup von Bewahrungskopien
  - Prüfsummenverifikation für Archive
  - Multi-Cloud-Archivspeicher
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Museen und Archive — Digitale Bewahrung mit RcloneView

> Digitalisierte Sammlungen verdienen mehr als ein einziges Backup — RcloneView hält Archivmaster verifiziert und gespiegelt über unabhängige Cloud-Anbieter hinweg.

Ein Digitalisierungsprojekt eines Museums endet nicht, sobald ein Scan auf einer Festplatte landet. Hochauflösende TIFFs von Gemälden, Aufnahmen mündlicher Überlieferungen und gescannte Manuskriptseiten müssen Jahrzehnte überdauern — das bedeutet mindestens eine geografisch getrennte Kopie und eine Möglichkeit, später zu belegen, dass die Dateien nicht unbemerkt beschädigt wurden. Archive und IT-Teams kleiner Museen haben selten Budget für eine dedizierte Plattform zur Verwaltung digitaler Assets, weshalb RcloneView diese Rolle übernimmt — eine Desktop-GUI, mit der Bewahrungsmaster in den Cloud-Speicher übertragen, die Integrität geprüft und Arbeitskopien ohne selbstgeschriebene Skripte synchron gehalten werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Archivmaster über unabhängige Anbieter hinweg speichern

Gängige Praxis in der Bewahrung ist es, mindestens zwei Kopien einer Masterdatei auf unterschiedlichen Speichersystemen vorzuhalten — idealerweise bei unterschiedlichen Anbietern, damit ein Ausfall bei einem einzelnen Anbieter oder ein Kontoproblem nicht beide Kopien gleichzeitig gefährdet. RcloneView macht das für ein kleines Archivteam praktikabel: Amazon S3 oder Backblaze B2 als Cold-Storage-Ziel für Master anbinden, einen zweiten Anbieter wie Google Drive oder Wasabi als unabhängigen Spiegel hinzufügen und dann einen 1:N-Sync-Job ausführen, der neue Digitalisierungschargen aus einem Quellordner an beide Ziele überträgt. Amazon S3, Azure und Backblaze B2 lassen sich bereits mit der FREE-Lizenz voll lesend und schreibend nutzen, sodass eine Zwei-Anbieter-Bewahrungsstrategie über die reinen Speicherkosten hinaus nichts zusätzlich kostet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing digitized archive files to two cloud providers with RcloneView" class="img-large img-center" />

Wird der Prüfsummenvergleich in den erweiterten Einstellungen des Sync-Jobs aktiviert, werden Dateien anhand von Hash und Größe statt nur anhand eines Zeitstempelabgleichs verifiziert — wichtig, wenn die Uhr einer Scan-Workstation abweicht oder eine Datei mit demselben Änderungsdatum, aber anderem Inhalt erneut gespeichert wird.

## Integrität ohne Kommandozeile prüfen

Bitrot und stille Beschädigung sind die unauffällige Bedrohung für jedes langfristige Archiv. Mit dem Folder-Compare-Werkzeug von RcloneView kann ein Archivar zwei Panels auf dieselbe Sammlung auf unterschiedlichen Remotes richten — etwa den primären S3-Bucket und den Backblaze-Spiegel — und dateibasierte Unterschiede nach Größe und Hash erkennen. Der Filter „Show different files" zeigt genau, welche Objekte aus der Synchronisation gedriftet sind, sodass eine vierteljährliche Integritätsprüfung zu einer fünfminütigen visuellen Durchsicht wird statt zum Auswerten von Prüfsummenprotokollen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing archival collection integrity between two cloud storage remotes" class="img-large img-center" />

Für den ersten Durchgang bei einer neuen Digitalisierungscharge zeigt Dry Run genau, welche Dateien kopiert oder markiert würden, bevor überhaupt etwas übertragen wird — nützlich, wenn ein einzelner Manuskriptordner Hunderte Gigabyte umfassen kann und ein Fehler teuer zu korrigieren wäre.

## Erfassung von Scan-Workstations zeitlich planen

Digitalisierungsarbeit erfolgt in Schüben — eine Charge Dias in einer Woche gescannt, eine Audiospule in der nächsten übertragen. Statt sich zu merken, nach jeder Sitzung manuell hochzuladen, kann ein Archivteam mit PLUS-Lizenz einen crontab-artigen Zeitplan einrichten, sodass neue Dateien in einem lokalen Erfassungsordner nachts automatisch mit dem Cloud-Speicher synchronisiert werden — die Job History hält dabei für Zugangsprotokolle genau fest, was wann übertragen wurde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated archive ingest sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Ihr primäres Archivspeicher-Remote (S3, Backblaze B2 o. ä.) sowie einen zweiten Anbieter zur Redundanz.
3. Richten Sie einen 1:N-Sync-Job mit aktivierter Prüfsummenverifikation für Ihren Digitalisierungs-Erfassungsordner ein.
4. Nutzen Sie Folder Compare regelmäßig, um Abweichungen zwischen Primär- und Spiegelkopie zu erkennen.

Ein Digitalisierungsbudget, das für das Scannen ausgegeben wird, ist nur die halbe Arbeit — RcloneView übernimmt die stillere andere Hälfte: dafür zu sorgen, dass diese Dateien auch in zehn Jahren noch lesbar sind.

---

**Weiterführende Anleitungen:**

- [Prüfsummenverifizierte Cloud-Migrationen mit RcloneView (Drive, Dropbox, S3, R2)](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [So laden Sie Internet-Archive-Sammlungen mit RcloneView hoch und verwalten sie](https://rcloneview.com/support/blog/sync-internet-archive-cloud-backup-rcloneview)
- [Cloud-Speicher für Forschende — Datensätze, Publikationen und Labordaten mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
