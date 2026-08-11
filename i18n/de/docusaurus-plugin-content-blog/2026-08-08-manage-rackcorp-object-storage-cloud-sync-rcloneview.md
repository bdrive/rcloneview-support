---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "RackCorp Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verbinden Sie den S3-kompatiblen Object Storage von RackCorp mit RcloneView für Drag-and-Drop-Dateibrowsing, geplante Synchronisation und Cloud-übergreifende Backups."
keywords:
  - RackCorp Object Storage
  - RackCorp S3
  - RcloneView RackCorp
  - RackCorp Dateien verwalten
  - RackCorp Cloud-Backup
  - RackCorp Synchronisation
  - S3-kompatible Storage GUI
  - Object-Storage-GUI-Client
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

> Durchsuchen, synchronisieren und sichern Sie RackCorp-Object-Storage-Buckets mit demselben Drag-and-Drop-Workflow, den Sie bereits für jede andere Cloud in RcloneView verwenden.

Der S3-kompatible Object Storage von RackCorp bietet Teams eine regionale Alternative zu den großen Hyperscalern, aber die Verwaltung von Buckets bedeutet meist einen Wechsel zwischen separaten CLI-Tools oder einem Browser-Konsolen-Tab. RcloneView verbindet sich über das S3-Protokoll von rclone mit RackCorp und zeigt Ihre Buckets im selben Explorer-Fenster wie Google Drive, OneDrive oder jeden anderen Remote, den Sie bereits verwalten. Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RackCorp mit RcloneView verbinden

RackCorp Object Storage wird wie jeder andere S3-kompatible Anbieter hinzugefügt: Öffnen Sie den Remote-Tab > New Remote, wählen Sie die S3-kompatible Option und geben Sie Ihre Access Key ID, Ihren Secret Access Key und die RackCorp-Endpunkt-URL ein. RcloneView leitet diese Zugangsdaten direkt an die rclone-Konfiguration weiter, sodass kein separater Treiber oder Plugin installiert werden muss — die integrierte rclone-Binärdatei übernimmt die Protokollverhandlung.

Sobald der Remote erstellt ist, erscheint er als neuer Tab im Explorer-Panel. Sie können Buckets in der List View mit detaillierten Metadaten durchsuchen oder zur Thumbnail View wechseln, wenn Sie Bilder speichern und einen schnellen visuellen Überblick benötigen. Der Ordnerbaum auf der linken Seite ermöglicht den Wechsel zwischen Präfixen, ohne Pfade erneut eingeben zu müssen.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen S3-kompatiblen Remotes für RackCorp Object Storage in RcloneView" class="img-large img-center" />

Klicken Sie mit der rechten Maustaste auf ein beliebiges Objekt in der Dateiliste, um auf Copy, Cut, Rename, Get Size oder Get Public Link zuzugreifen — dasselbe Kontextmenü, das Sie für lokale Dateien verwenden, direkt angewendet auf Ihren RackCorp-Bucket.

## RackCorp mit anderen Clouds synchronisieren

Object Storage wird selten isoliert genutzt. Ein gängiges Muster ist, eine Arbeitskopie für die tägliche Bearbeitung in Google Drive oder OneDrive zu behalten, während fertige Assets zur günstigeren Langzeitaufbewahrung in RackCorp archiviert werden. Der 4-Schritte-Sync-Assistent von RcloneView erledigt dies, ohne ein Terminal zu berühren: RackCorp als Quelle oder Ziel auswählen, Filter setzen, um temporäre Dateien oder übergroße Assets auszuschließen, und One-Way-Synchronisation wählen, damit das Archiv nur neues Material erhält.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Cloud-zu-Cloud-Sync-Jobs zwischen RackCorp und einem anderen Remote in RcloneView" class="img-large img-center" />

Führen Sie vor einer vollständigen Übertragung einen Dry Run aus, um genau zu sehen, welche Dateien kopiert oder gelöscht werden. Das ist besonders bei Object Storage nützlich, wo ein versehentliches erneutes Hochladen großer Buckets Bandbreite und Zeit verschwenden kann.

## Backups mit geplanten Jobs automatisieren

Für Teams mit einer PLUS-Lizenz können RackCorp-Sync-Jobs nach einem Crontab-ähnlichen Zeitplan statt durch manuelles Auslösen ausgeführt werden. Legen Sie Minute, Stunde und Wochentag einmal fest, und RcloneView hält Ihren RackCorp-Bucket im Hintergrund aktuell — prüfen Sie anschließend im Job-History-Tab den Status, die Übertragungsgeschwindigkeit und die Dateianzahl jedes Laufs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einrichten eines geplanten Sync-Jobs für RackCorp Object Storage in RcloneView" class="img-large img-center" />

Aktivieren Sie die Prüfsummenverifizierung im Advanced-Settings-Schritt, wenn Datenintegrität wichtiger ist als reine Geschwindigkeit — RcloneView vergleicht Datei-Hashes statt nur Größe und Zeitstempel und erkennt so stille Beschädigungen während der Übertragung.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Gehen Sie zum Remote-Tab > New Remote und wählen Sie die S3-kompatible Option für RackCorp.
3. Geben Sie Ihre Access Key ID, Ihren Secret Access Key und den RackCorp-Endpunkt zum Verbinden ein.
4. Richten Sie einen Sync- oder Backup-Job ein, um RackCorp mit Ihren anderen Cloud-Remotes synchron zu halten.

Nach der Verbindung verhält sich RackCorp wie jeder andere Tab in Ihrem RcloneView-Arbeitsbereich — keine separate Konsole, keine CLI-Flags zum Auswendiglernen.

---

**Weitere Anleitungen:**

- [Scaleway Object Storage verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Selectel Cloud Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [VFS-Cache — Schnellere Cloud-Mount-Performance in RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
