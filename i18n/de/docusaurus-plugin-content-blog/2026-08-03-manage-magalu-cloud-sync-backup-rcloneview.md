---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloud Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - jay
description: "Verbinden Sie Magalu Cloud Object Storage mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplante Synchronisation und Cloud-übergreifende Backup-Workflows."
keywords:
  - magalu cloud speicher
  - magalu object storage
  - s3-kompatible speicher gui
  - rcloneview magalu
  - object storage backup
  - cloud synchronisation gui
  - multi-cloud dateimanager
  - s3-kompatibler manager
  - magalu backup
  - brasilien cloud speicher
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Magalu Cloud Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie Magalu Cloud Object Storage aus demselben Fenster, in dem Sie jede andere Cloud bereits verwalten.

Magalu Cloud ist ein S3-kompatibler Object-Storage-Dienst, das heißt, er funktioniert mit jedem Tool, das auf dem S3-Protokoll aufbaut — einschließlich rclone. RcloneView verpackt diese Protokollunterstützung in einen visuellen Datei-Explorer, sodass Teams, die Magalu-Buckets bereits für Anwendungsdaten oder Backups nutzen, sich keine `s3cmd`-Flags merken oder zwischen separaten Konsolen-Tabs wechseln müssen, nur um Dateien zu verschieben. Einmal verbunden, verhält sich ein Bucket wie jedes andere Remote in der App.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magalu Cloud als Remote verbinden

Da Magalu Cloud das S3-Protokoll spricht, verbindet sich RcloneView damit auf dieselbe Weise wie mit Amazon S3, Wasabi oder Backblaze B2: über den S3-kompatiblen Remote-Typ. Öffnen Sie **New Remote**, wählen Sie die S3-kompatible Option und geben Sie Ihren Access Key, Secret Key sowie die Magalu Cloud Endpoint-URL Ihrer Region ein. RcloneView bindet ein und synchronisiert über 90 Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux, sodass ein Magalu-Bucket direkt neben Ihren bestehenden Google Drive-, OneDrive- oder On-Premise-NAS-Verbindungen steht.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen Magalu Cloud S3-kompatiblen Remotes in RcloneView" class="img-large img-center" />

Sobald das Remote gespeichert ist, erscheint es als Tab im Explorer-Panel mit vollständiger Ordnerbaum-Navigation, Thumbnail-Vorschauen für bildlastige Buckets und denselben Rechtsklick-Operationen (Kopieren, Ausschneiden, Umbenennen, Löschen) wie bei lokalen Dateien.

## Magalu-Buckets mit anderem Speicher synchronisieren

Object Storage existiert selten isoliert — die meisten Teams kombinieren ihn zur Redundanz mit einer weiteren Cloud oder zum Staging mit lokaler Infrastruktur. Der Sync-Assistent von RcloneView lässt Sie einen Magalu-Bucket als Quelle oder Ziel festlegen, zwischen einseitiger Synchronisation oder bidirektionaler Synchronisation (Beta) wählen und vor der Übertragung Filter wie maximale Dateigröße oder Dateialter anwenden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Synchronisationsjobs zwischen einem Magalu Cloud Bucket und einem anderen Remote" class="img-large img-center" />

Führen Sie zuerst einen **Dry Run** aus, um genau zu sehen, welche Objekte kopiert oder entfernt werden — eine nützliche Prüfung, bevor Sie einen Produktions-Bucket erstmals auf ein Backup-Ziel spiegeln.

## Wiederkehrende Backups automatisieren

Bei Buckets, die sich täglich ändern, skalieren manuelle Übertragungen nicht. Speichern Sie Ihre Magalu-Synchronisationskonfiguration als Job und nutzen Sie dann den Planungsschritt (PLUS-Lizenz), um eine crontab-artige Wiederholung zu definieren — nächtlich, wöchentlich oder in einem benutzerdefinierten Intervall.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines wiederkehrenden Backup-Jobs für einen Magalu Cloud Bucket" class="img-large img-center" />

Jeder Lauf wird mit Status, Übertragungsgeschwindigkeit und Dateianzahl in der Job History protokolliert, sodass Sie bestätigen können, dass ein geplantes Backup tatsächlich abgeschlossen wurde, statt es nur anzunehmen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erzeugen Sie einen Access Key und Secret Key für Ihr Magalu Cloud-Konto und notieren Sie den Endpoint Ihrer Region.
3. Fügen Sie Magalu Cloud als neues S3-kompatibles Remote in RcloneView hinzu.
4. Richten Sie einen Synchronisationsjob ein — zunächst mit einem Dry Run —, um ihn mit Ihrem Backup- oder Sekundärspeicherziel zu verbinden.

Einen S3-kompatiblen Bucket wie einen ganz normalen Ordner in Ihrem Dateimanager zu behandeln, beseitigt die Reibung, die Object Storage sonst vom Rest Ihres Workflows isoliert.

---

**Weiterführende Anleitungen:**

- [Wasabi Cloud Storage mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Cloudflare R2 Storage mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [IDrive e2 Cloud Storage mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
