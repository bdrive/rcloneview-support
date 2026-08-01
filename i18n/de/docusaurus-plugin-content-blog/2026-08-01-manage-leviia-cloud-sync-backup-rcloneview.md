---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Leviia-Objektspeicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - casey
description: "Verbinden Sie den S3-kompatiblen Objektspeicher von Leviia mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplante Backups und Cloud-übergreifende Synchronisation."
keywords:
  - Leviia Objektspeicher
  - Leviia S3
  - RcloneView Leviia
  - Leviia Dateien verwalten
  - Leviia Cloud-Backup
  - Leviia Synchronisation
  - S3-kompatible Speicher-GUI
  - europäischer Objektspeicher
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

# Leviia-Objektspeicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie den S3-kompatiblen Objektspeicher von Leviia im selben Fenster, das Sie für jede andere Cloud nutzen.

Leviia bietet S3-kompatiblen Objektspeicher mit Hosting in Europa und ist damit eine naheliegende Wahl für Teams, die Garantien zur Datenresidenz möchten, ohne auf das bereits mit S3 funktionierende Tooling zu verzichten. Der Nachteil: S3-kompatible Anbieter liefern nur selten einen eigenen, ausgereiften Desktop-Client mit, sodass Nutzer Uploads scripten oder mit einer nackten Kommandozeile hantieren müssen. RcloneView beseitigt diese Reibung, indem Leviia wie jedes andere Remote behandelt wird — vollständiges Datei-Browsing, Drag-and-Drop-Übertragungen und geplante Sync-Jobs, ganz ohne Befehle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen Leviia-Bucket verbinden

Da Leviia das S3-Protokoll spricht, fügen Sie es in RcloneView genauso hinzu wie Amazon S3 oder Wasabi: ein neues Remote anlegen, die Option für S3-kompatible Anbieter auswählen und Access Key, Secret Key sowie die Leviia-Endpunkt-URL für Ihre Kontoregion eingeben. Nach dem Speichern erscheint der Bucket als normaler Tab im Explorer-Panel und ist sofort zum Durchsuchen und Übertragen bereit.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView mountet und synchronisiert 90+ Anbieter aus einem Fenster heraus, unter Windows, macOS und Linux, sodass ein Leviia-Bucket neben jedem anderen Cloud-Konto steht, das Sie verwalten, ohne das Werkzeug zu wechseln.

## Leviia-Speicher durchsuchen und organisieren

Nach der Verbindung verhält sich ein Leviia-Bucket im Explorer genau wie ein lokaler Ordner. Sortieren Sie nach Name, Typ, Änderungsdatum oder Größe, wechseln Sie bei einem Bucket voller Bilder in die Miniaturansicht, und nutzen Sie Get Size, um zu prüfen, wie viel Speicherplatz ein bestimmter Ordner belegt, bevor Sie entscheiden, ob er anderswo archiviert werden soll. Mehrfachauswahl mit Strg+Klick oder Umschalt+Klick deckt Massen-Downloads und -Löschungen ab, ganz ohne gescripteten Loop.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Sichern von und zu Leviia

Für wiederkehrende Backups richten Sie einen Sync-Job mit Leviia als Quelle oder Ziel ein. Der 4-Schritte-Assistent deckt die Anzahl gleichzeitiger Übertragungen, die Prüfsummenverifikation (Dateien werden anhand von Hash und Größe statt nur anhand des Zeitstempels verglichen) sowie Filterregeln zum Ausschließen unerwünschter Dateitypen ab. Es lohnt sich, vor einem Sync-Job auf einen Bucket mit Produktionsdaten zunächst einen Dry Run auszuführen, um genau zu sehen, was kopiert oder gelöscht würde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Legen Sie ein neues Remote an und wählen Sie den S3-kompatiblen Anbietertyp.
3. Geben Sie Ihren Leviia Access Key, Secret Key und die Endpunkt-URL ein.
4. Richten Sie einen Sync- oder Copy-Job ein, um Dateien zwischen Leviia und Ihren anderen Cloud-Remotes zu verschieben.

Sobald Leviia in RcloneView eingebunden ist, hört die Verwaltung Ihres Objektspeichers auf, eine Scripting-Aufgabe zu sein, und wird Teil Ihres normalen Datei-Workflows.

---

**Weiterführende Anleitungen:**

- [Ceph-Objektspeicher mit RcloneView verwalten — S3-kompatible GUI für Ihren Ceph-Cluster](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Scaleway-Objektspeicher verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [IONOS-Objektspeicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
