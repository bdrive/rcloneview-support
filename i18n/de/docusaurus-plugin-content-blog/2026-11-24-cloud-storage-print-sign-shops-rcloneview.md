---
slug: cloud-storage-print-sign-shops-rcloneview
title: "Cloud-Speicher für Druckereien und Werbetechnik — Druckdaten mit RcloneView organisieren und sichern"
authors:
  - kai
description: "Cloud-Speicher für Druckereien und Werbetechnik-Betriebe mit RcloneView. Kunden-Druckdaten sammeln, Produktionsdateien in mehreren Clouds sichern und Auftragsarchive geordnet halten."
keywords:
  - Cloud-Speicher für Druckereien
  - Werbetechnik Datei-Backup
  - Druckdaten speichern Druckerei
  - Dateiverwaltung Großformatdruck
  - Druckproduktionsdateien sichern
  - Kunden-Druckdaten Cloud-Backup
  - RcloneView Druckerei
  - Multi-Cloud-Backup Kleinunternehmen
  - Dateiarchiv Werbetechnik
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

# Cloud-Speicher für Druckereien und Werbetechnik — Druckdaten mit RcloneView organisieren und sichern

> Holen Sie Kunden-Druckdaten aus jeder Cloud, in der sie ankommen, halten Sie Produktionsdateien gesichert und öffnen Sie das Banner vom letzten Jahr aus einem geordneten Archiv.

Druckereien und Werbetechnik-Betriebe arbeiten mit Dateien, die groß, vielfältig und oft unersetzlich sind: Vektorlogos, PSDs mit Ebenen, druckfertige PDFs, Vorlagen für Fahrzeugbeschriftungen und RIP-fertige Ausgabedateien. Kunden schicken Druckdaten über Links von Google Drive, Dropbox, OneDrive oder Box, während sich fertige Aufträge auf einer Workstation oder einem Synology NAS stapeln. RcloneView bündelt all das in einer GUI, sodass der Betrieb Druckdaten sammeln, archivieren und sichern kann, ohne zwischen Browser-Tabs zu jonglieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kunden-Druckdaten aus jeder Cloud sammeln

Fügen Sie jeden Dienst, den Ihr Betrieb nutzt, über **Remote tab > New Remote** als Remote hinzu. Google Drive, Dropbox, OneDrive und Box werden per Browser-Anmeldung verbunden. Wenn Kunden regelmäßig Ordner in Google Drive mit Ihnen teilen, können Sie diese Ordner über ein Google Drive Shared with Me Remote (`shared_with_me = true`) direkt durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding client cloud remotes for a print shop in RcloneView" class="img-large img-center" />

Da bis zu vier Explorer-Panels geöffnet sein können, lässt sich der Kundenordner direkt neben Ihren Eingangsordner auf dem NAS legen. Ziehen Sie Dateien zwischen Remotes, um sie zu kopieren, und nutzen Sie **Get Size**, bevor Sie ein 20-GB-Fahrzeugbeschriftungsprojekt herunterladen, damit Sie wissen, welche Datenmenge anfällt.

## Produktionsdateien an mehr als einem Ort sichern

Das eigentliche Kapital eines Betriebs ist sein Archiv: das Logo, das ein Stammkunde für neue Beschilderung braucht, oder die Vorlage für eine ganze Lkw-Flotte. Erstellen Sie einen Sync- oder Copy-Job von Ihrem Produktionsordner zu einem externen Ziel wie Backblaze B2, Wasabi oder Amazon S3. Mit **1:N sync** kann ein einziger Job denselben Ordner gleichzeitig an mehrere Ziele senden — zum Beispiel an das NAS und einen S3-kompatiblen Bucket — und das mit der FREE License.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging print production files to an S3-compatible bucket in RcloneView" class="img-large img-center" />

Halten Sie Backups mit Filtern schlank. Schließen Sie Arbeitsordner und Cache-Dateien mit eigenen Regeln aus, oder sichern Sie an einem hektischen Wochentag mit **Max file age** nur aktuelle Aufträge. Führen Sie vor der ersten Synchronisation einen **Dry Run** aus, um sicherzustellen, dass am Ziel nichts Unerwartetes gelöscht würde.

## Nächtliche Archivierung planen

Mit einer PLUS License fügen Sie im letzten Schritt des Jobs einen Zeitplan im crontab-Stil hinzu, sodass die Archivierung nach Geschäftsschluss läuft, etwa montags bis samstags um 23 Uhr. Die Schaltfläche **Simulate schedule** zeigt die nächsten Ausführungszeiten an, bevor Sie speichern.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly print shop archive job in RcloneView" class="img-large img-center" />

Prüfen Sie jeden Morgen die **Job History**, um zu bestätigen, dass der Lauf abgeschlossen ist, und um zu sehen, wie viele Dateien übertragen wurden. Ist ein Job fehlgeschlagen, erleichtern Status und Zeitpunkt einen erneuten Start.

## Alte Aufträge öffnen, ohne alles herunterzuladen

Wenn ein Kunde einen Nachdruck anfragt, binden Sie den Archiv-Bucket über den Mount Manager als Laufwerk ein. Ihre Designsoftware kann die Datei dann direkt vom eingebundenen Laufwerk öffnen, während der VFS-Cache (standardmäßig im Modus writes) das lokale Caching übernimmt.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a print archive bucket as a drive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie die Clouds Ihrer Kunden sowie Ihr NAS und einen externen Bucket als Remotes hinzu.
3. Erstellen Sie einen Copy- oder Sync-Job von Ihrem Produktionsordner zu einem oder mehreren Backup-Zielen und prüfen Sie ihn mit Dry Run.
4. Binden Sie den Archiv-Bucket ein, damit frühere Aufträge von jeder Workstation aus geöffnet werden können.

Wenn Druckdaten gesammelt, gesichert und an einem Ort archiviert sind, verbringt Ihr Team weniger Zeit mit der Dateisuche und mehr Zeit mit dem Drucken.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher für Verlage und Printmedien mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-publishing-print-media-rcloneview)
- [Cloud-Speicher für Grafikdesigner mit RcloneView](https://rcloneview.com/support/blog/cloud-storage-graphic-designers-rcloneview)
- [Eine Quelle mit mehreren Cloud-Zielen synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-one-source-multiple-cloud-destinations-rcloneview)

<CloudSupportGrid />
