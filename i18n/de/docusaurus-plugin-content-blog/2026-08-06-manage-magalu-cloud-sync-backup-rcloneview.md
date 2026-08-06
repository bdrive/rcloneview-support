---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloud Storage verwalten — Synchronisieren und Sichern von Dateien mit RcloneView"
authors:
  - robin
description: "Verbinden Sie den S3-kompatiblen Objektspeicher von Magalu Cloud mit RcloneView für Drag-and-Drop-Browsing, geplante Backups und Cloud-übergreifende Synchronisation."
keywords:
  - Magalu Cloud Storage
  - Magalu S3
  - RcloneView Magalu
  - Magalu Dateien verwalten
  - Magalu Cloud-Backup
  - Magalu Synchronisation
  - S3-kompatible Speicher-GUI
  - Brasilianischer Cloud-Speicher
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Magalu Cloud Storage verwalten — Synchronisieren und Sichern von Dateien mit RcloneView

> Durchsuchen, synchronisieren und sichern Sie den S3-kompatiblen Objektspeicher von Magalu Cloud aus demselben Fenster, das Sie für jede andere Cloud verwenden.

Magalu Cloud ist ein S3-kompatibler Objektspeicherdienst und wird, wie die meisten S3-kompatiblen Anbieter, ohne dedizierten Desktop-Dateimanager ausgeliefert — man ist gezwungen, `curl`-Aufrufe zu skripten oder eine CLI einzurichten, nur um Dateien zu verschieben. RcloneView schließt diese Lücke, indem es einen Magalu-Bucket genau wie jede andere Remote-Verbindung behandelt: vollständiges Datei-Browsing, Drag-and-Drop-Übertragungen und geplante Synchronisationsaufträge, ganz ohne Terminal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen Magalu-Bucket verbinden

Da Magalu Cloud das S3-Protokoll verwendet, fügen Sie es in RcloneView genauso hinzu wie Amazon S3 oder Backblaze B2: Erstellen Sie eine neue Remote-Verbindung, wählen Sie die S3-kompatible Anbieteroption und geben Sie Ihren Access Key, Secret Key und die Magalu-Endpunkt-URL für Ihre Kontoregion ein. Nach dem Speichern erscheint der Bucket als normaler Tab im Explorer-Panel, bereit zum sofortigen Durchsuchen und Übertragen.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen einer S3-kompatiblen Magalu-Cloud-Remote-Verbindung in RcloneView" class="img-large img-center" />

S3, Azure und Backblaze B2 können mit voller Lese-/Schreibberechtigung bereits mit der FREE-Lizenz verbunden werden, sodass auch Magalu ohne Bezahlschranke zu Ihrer bestehenden Cloud-Auswahl hinzukommt.

## Magalu-Speicher durchsuchen und organisieren

Nach dem Verbinden verhält sich ein Magalu-Bucket im Explorer wie jeder lokale Ordner. Sortieren Sie nach Name, Typ, Änderungsdatum oder Größe, wechseln Sie zur Thumbnail-Ansicht, wenn ein Bucket voller Bilder ist, und nutzen Sie „Größe ermitteln“, um zu prüfen, wie viel Speicherplatz ein Ordner belegt, bevor Sie entscheiden, ob Sie ihn andernorts archivieren. Mehrfachauswahl per Strg+Klick oder Umschalt+Klick ermöglicht Massendownloads und -löschungen ohne skriptgesteuerte Schleifen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Durchsuchen des Inhalts eines Magalu-Cloud-Buckets in RcloneView" class="img-large img-center" />

## Backups zu und von Magalu

Richten Sie für wiederkehrende Backups einen Synchronisationsauftrag mit Magalu als Quelle oder Ziel ein. Der 4-Schritte-Assistent deckt die Anzahl gleichzeitiger Übertragungen, eine Prüfsummenverifizierung (bei der Dateien anhand von Hash und Größe statt nur Zeitstempel verglichen werden) sowie Filterregeln zum Ausschließen unerwünschter Dateitypen ab. Führen Sie zunächst einen Dry Run aus, um genau zu sehen, was kopiert oder gelöscht würde — das lohnt sich, bevor man einen Synchronisationsauftrag auf einen Bucket mit Produktionsdaten richtet.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines Magalu-Cloud-Backup-Auftrags in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Eine neue Remote-Verbindung erstellen und den S3-kompatiblen Anbietertyp auswählen.
3. Ihren Magalu Access Key, Secret Key und die Endpunkt-URL eingeben.
4. Einen Synchronisations- oder Kopierauftrag einrichten, um Dateien zwischen Magalu und Ihren anderen Cloud-Remote-Verbindungen zu verschieben.

Sobald Magalu in RcloneView eingebunden ist, wird die Verwaltung Ihres Objektspeichers vom Skript-Aufwand zu einem Teil Ihres gewohnten Datei-Workflows.

---

**Weitere Anleitungen:**

- [Scaleway Object Storage verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IONOS Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Leviia Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
