---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "RackCorp Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - morgan
description: "Verbinden Sie RackCorp Object Storage mit RcloneView für plattformübergreifende Synchronisation, Backup und Mount neben 90+ weiteren Cloud-Anbietern."
keywords:
  - RackCorp Speicher
  - RackCorp Cloud-Backup
  - RackCorp RcloneView
  - S3-kompatible Object Storage GUI
  - RackCorp Speicher synchronisieren
  - RackCorp sichern
  - Object Storage als lokales Laufwerk einbinden
  - Multi-Cloud-Dateimanager
  - Cloud-Speicher Synchronisationstool
  - Object-Storage-Backup-Software
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

# RackCorp Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Bringen Sie RackCorps S3-kompatiblen Object Storage in dasselbe Fenster wie Ihre anderen Clouds, lokalen Laufwerke und NAS-Freigaben.

Teams, die bereits Infrastruktur auf RackCorp betreiben, jonglieren oft zusätzlich mit einem separaten S3-Client, nur um Dateien in und aus einem Bucket zu verschieben. RcloneView erspart diesen zusätzlichen Schritt, indem es RackCorp wie jedes andere Remote behandelt — durchsuchen, synchronisieren, einbinden und sichern Sie es direkt neben Google Drive, S3 oder einer lokalen Festplatte im selben Explorer. Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich (Folder Compare) — bereits mit der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RackCorp als Remote hinzufügen

RackCorp wird über das S3-Protokoll von rclone angesprochen, daher folgt die Einrichtung demselben Muster der Anmeldedateneingabe wie bei anderen S3-kompatiblen Diensten: eine Access Key ID, ein Secret Access Key und der korrekte regionale Endpunkt. Öffnen Sie den Remote-Tab > New Remote, wählen Sie die S3-kompatible Option und fügen Sie die Anmeldedaten Ihres RackCorp-Kontos ein.

Nach dem Speichern erscheint RackCorp als eigener Tab im Explorer-Panel, direkt neben allen anderen konfigurierten Remotes. Sie müssen sich keine Bucket-Pfade merken — der Ordnerbaum und die Breadcrumb-Leiste ermöglichen visuelle Navigation, und Rechtsklick > Copy Full Path liefert bei Bedarf den String im Format `remote:bucket/path` für das integrierte rclone-Terminal.

<img src="/support/images/en/blog/new-remote.png" alt="Ein neues S3-kompatibles Remote in RcloneView hinzufügen" class="img-large img-center" />

## Synchronisieren und Sichern auf RackCorp

Sobald das Remote verbunden ist, erstellen Sie mit dem Sync-Assistenten einen wiederholbaren Backup-Job. Schritt 1 legt die lokale oder Cloud-Quelle und den RackCorp-Zielordner fest; Schritt 2 erlaubt die Anpassung der Anzahl gleichzeitiger Dateiübertragungen und Multithread-Übertragungen für große Datensätze; Schritt 3 wendet Filter nach Dateityp, Größe oder Alter an, damit keine temporären Dateien oder Caches in den Bucket gelangen.

Führen Sie zunächst einen Dry Run aus, um genau zu sehen, welche Dateien kopiert oder gelöscht werden, bevor Sie die Übertragung tatsächlich starten — so werden Fehler bei der Ordnerzuordnung erkannt, bevor sie Produktionsdaten betreffen. Speichern Sie wiederkehrende Aufgaben im Job Manager, damit sie anschließend mit vollständigen Übertragungsprotokollen in der Job History erscheinen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einen geplanten Backup-Job für RackCorp-Speicher konfigurieren" class="img-large img-center" />

## RackCorp als lokales Laufwerk einbinden

Wenn Sie lieber mit RackCorp-Objekten wie mit gewöhnlichen Dateien arbeiten möchten, binden Sie den Bucket als virtuelles Laufwerk ein (mount). Wählen Sie den Remote-Ordner im Explorer aus, klicken Sie auf das Mount-Symbol in der Panel-Symbolleiste und wählen Sie einen VFS-Cache-Modus — der Writes-Modus ist eine solide Standardeinstellung, da Änderungen zunächst lokal gepuffert werden, bevor sie hochgeladen werden.

Eingebundene Buckets erscheinen im Mount Manager, wo Sie sie aushängen, im nativen Datei-Browser erneut öffnen oder das Mount direkt über das System-Tray umschalten können, ohne das Hauptfenster in den Vordergrund zu holen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einen RackCorp-Bucket über den Remote Explorer als lokales Laufwerk einbinden" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erzeugen Sie eine Access Key ID und einen Secret Access Key in Ihrem RackCorp-Konto.
3. Fügen Sie RackCorp über den Remote-Tab > New Remote als neues S3-kompatibles Remote hinzu.
4. Erstellen Sie einen Sync-Job oder binden Sie den Bucket direkt ein — je nach Ihrem Workflow.

Sobald RackCorp mit RcloneView verbunden ist, ist es kein separates Tool mehr, in das man den Kontext wechseln muss, sondern einfach ein weiteres Ziel in Ihrer regulären Backup-Routine.

---

**Weiterführende Anleitungen:**

- [Linode Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [Hetzner Object Storage verwalten — Synchronisieren und Sichern mit RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [Amazon S3 mit RcloneView zu Cloudflare R2 migrieren](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
