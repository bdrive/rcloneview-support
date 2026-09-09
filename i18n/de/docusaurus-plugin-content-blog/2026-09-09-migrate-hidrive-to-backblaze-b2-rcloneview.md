---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migration von HiDrive zu Backblaze B2 — Dateien mit RcloneView übertragen"
authors:
  - kai
description: "Migrieren Sie Dateien von HiDrive zu Backblaze B2 mit RcloneView — einer plattformübergreifenden GUI, die Daten zwischen den beiden Anbietern verschiebt, ohne Dateien lokal zwischenzuspeichern."
keywords:
  - Migration von HiDrive zu Backblaze B2
  - HiDrive Backblaze B2 Übertragung
  - RcloneView HiDrive Migration
  - HiDrive Cloud-Backup-Tool
  - Backblaze B2 Migration GUI
  - HiDrive-Dateien zu B2 verschieben
  - Cloud-zu-Cloud-Übertragung RcloneView
  - HiDrive B2 Synchronisation
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migration von HiDrive zu Backblaze B2 — Dateien mit RcloneView übertragen

> Verschieben Sie Dateien mit RcloneView direkt von HiDrive zu Backblaze B2, ohne sie zuerst auf ein lokales Laufwerk herunterzuladen.

Teams, die aus einem HiDrive-Konto herauswachsen, wechseln oft wegen des günstigeren Objektspeichers und des Application-Key-Modells zu Backblaze B2, aber die beiden Dienste kommunizieren nicht nativ miteinander. RcloneView verbindet sie in einem einzigen Fenster: Verbinden Sie beide als Remotes, ziehen Sie Dateien über die Panels, und lassen Sie die integrierte rclone-Engine die Übertragung Server-zu-Server abwickeln, soweit die Anbieter dies unterstützen. Für die eigentliche Übertragung ist kein manueller Export und kein lokaler Zwischenspeicherordner erforderlich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive und Backblaze B2 verbinden

Fügen Sie zuerst HiDrive über **Remote tab → New Remote** hinzu. HiDrive verwendet eine OAuth-Browseranmeldung, sodass RcloneView ein Browserfenster öffnet, in dem Sie sich anmelden und den Zugriff autorisieren – ohne API-Schlüssel manuell kopieren zu müssen. Backblaze B2 wird anders eingerichtet: Wählen Sie Backblaze B2 als Remote-Typ und geben Sie Ihre Application Key ID und den Application Key ein, die auf der Backblaze-Schlüsselverwaltungsseite generiert wurden. Sobald beide Remotes im Remote Manager erscheinen, öffnen Sie zwei Explorer-Panels nebeneinander – eines für HiDrive, das andere für Ihren B2-Bucket.

Im Gegensatz zu reinen Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner zwischen solchen Remotes – bereits mit der FREE-Lizenz.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines HiDrive-Remotes in RcloneView" class="img-large img-center" />

## Eine einmalige Übertragung oder eine wiederkehrende Synchronisierung ausführen

Für eine einmalige Migration wählen Sie die Ordner im HiDrive-Panel aus, ziehen sie auf das B2-Panel und bestätigen die Übertragung – RcloneView behandelt das Ziehen zwischen Remotes als Kopiervorgang, sodass die HiDrive-Originale erhalten bleiben, bis Sie sicher sind, dass die Daten korrekt angekommen sind. Bei einer laufenden Migration, bei der HiDrive während des Umstellungszeitraums weiterhin neue Dateien erhält, richten Sie stattdessen einen Sync-Job ein: Wählen Sie im 4-Schritte-Assistenten HiDrive als Quelle und B2 als Ziel, stellen Sie die Richtung auf einseitig „Modifying destination only“ ein und führen Sie den Job manuell aus, sobald Sie die Differenz aufholen möchten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Synchronisierungsjob von HiDrive zu Backblaze B2" class="img-large img-center" />

Führen Sie vor der endgültigen Umstellung die Dry-Run-Option des Jobs aus, um genau anzuzeigen, welche Dateien kopiert und welche (falls vorhanden) auf der Zielseite gelöscht würden – eine nützliche Prüfung, bevor Sie Produktions-Workflows auf den neuen B2-Bucket ausrichten.

## Die Migration überprüfen und automatisieren

Sobald die erste Migration abgeschlossen ist, verwenden Sie Folder Compare, um beide Seiten dateigenau zu überprüfen und zu bestätigen, dass Dateianzahl und -größe übereinstimmen, anstatt sich auf eine einzelne Abschlussmeldung zu verlassen. Wenn die Migration regelmäßig wiederholt werden muss – zum Beispiel um neue HiDrive-Uploads während einer schrittweisen Umstellung fortlaufend in B2 zu spiegeln – schaltet eine PLUS-Lizenz eine Crontab-artige Zeitplanung frei, sodass der Sync-Job unbeaufsichtigt in dem Intervall läuft, das zum Umstellungsplan passt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines wiederkehrenden Synchronisierungsjobs von HiDrive zu Backblaze B2" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie HiDrive per OAuth-Browseranmeldung im Remote Manager hinzu.
3. Fügen Sie Backblaze B2 mit Ihrer Application Key ID und Ihrem Application Key hinzu.
4. Führen Sie einen Dry Run aus und starten Sie anschließend die Übertragung oder den Sync-Job zwischen den beiden Panels.

Sobald beide Remotes eingerichtet sind, ist der Umzug von HiDrive zu B2 nur noch ein weiterer Drag-and-Drop-Vorgang oder geplanter Job in derselben Oberfläche, die Sie bereits für die tägliche Dateiverwaltung nutzen.

---

**Verwandte Anleitungen:**

- [HiDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Backblaze-B2-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [HiDrive zu Amazon S3 synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
