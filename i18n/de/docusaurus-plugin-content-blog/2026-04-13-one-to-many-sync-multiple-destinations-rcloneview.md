---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "1:N-Synchronisation — Eine Quelle mit mehreren Zielen in RcloneView synchronisieren"
authors:
  - tayson
description: "Nutzen Sie die 1:N-Sync-Funktion von RcloneView, um einen Quellordner gleichzeitig mit mehreren Cloud-Zielen zu spiegeln. Backup zu S3, Google Drive und Backblaze B2 in einem einzigen Job."
keywords:
  - 1:N sync RcloneView
  - sync one source multiple destinations
  - multi-destination backup
  - cloud backup multiple clouds
  - RcloneView 1 to N sync
  - cloud replication multiple providers
  - mirror to multiple clouds
  - RcloneView sync feature
  - multi-cloud backup job
  - one to many cloud sync
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N-Synchronisation — Eine Quelle mit mehreren Zielen in RcloneView synchronisieren

> Mit der 1:N-Synchronisation von RcloneView können Sie einen einzelnen Quellordner in einem Job mit mehreren Cloud-Zielen spiegeln — sichern Sie gleichzeitig auf Google Drive, Amazon S3 und Backblaze B2.

Ein Kernprinzip der Datenresilienz ist die 3-2-1-Backup-Regel: drei Kopien der Daten, auf zwei verschiedenen Medien, mit einer Kopie außer Haus. Cloud-Speicher macht dies ohne physische Laufwerke möglich — aber das manuelle Ausführen separater Synchronisationsjobs für jeden Anbieter ist repetitiv und fehleranfällig. Mit der 1:N-Synchronisationsfunktion von RcloneView können Sie einen einzigen Quellordner so konfigurieren, dass er gleichzeitig mit mehreren Cloud-Zielen synchronisiert wird, sodass ein Job-Lauf alle Ihre Backup-Ziele auf einmal abdeckt. Diese Funktion ist mit der FREE-Lizenz verfügbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist 1:N-Synchronisation?

1:N-Sync (Eins-zu-viele-Synchronisation) bedeutet, dass eine Quelle in einer einzigen Job-Ausführung auf N Ziel-Remotes gespiegelt wird. Wenn Sie den Job ausführen, synchronisiert RcloneView die Quelle mit jedem konfigurierten Ziel — fehlende Dateien werden hinzugefügt, geänderte Dateien werden aktualisiert und optional werden Dateien entfernt, die aus der Quelle gelöscht wurden.

Dies unterscheidet sich vom sequenziellen Ausführen separater Synchronisationsjobs. Bei der 1:N-Synchronisation wird in dasselbe Ausführungsfenster auf alle Ziele geschrieben, und der Fortschritt für jedes Ziel wird im Tab „Transferring“ verfolgt. Der Job-Verlauf zeichnet das Ergebnis für jedes Ziel in der Zusammenfassung des Laufs auf.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## Einen 1:N-Synchronisationsjob konfigurieren

Das Einrichten eines Synchronisationsjobs mit mehreren Zielen verwendet denselben 4-stufigen Sync-Assistenten wie ein regulärer Job. Der Unterschied liegt in Schritt 1: Nachdem Sie Ihr Quell-Remote und den Ordner ausgewählt haben, klicken Sie auf die Schaltfläche „Add Destination“, um weitere Ziel-Remotes hinzuzufügen. Sie können so viele Ziele hinzufügen, wie benötigt werden — zum Beispiel Google Drive, Amazon S3 und Backblaze B2.

**Beispiel-Workflow für eine produktive Backup-Strategie:**

1. **Quelle:** Lokaler NAS-Ordner `/data/projects`
2. **Ziel 1:** Google Drive `/Backups/Projects`
3. **Ziel 2:** Amazon S3 Bucket `my-company-backup/projects`
4. **Ziel 3:** Backblaze B2 Bucket `projects-archive`

Jedes Ziel erhält eine identische Kopie des Quellinhalts. Der Name des Synchronisationsjobs, die Filterregeln und die erweiterten Einstellungen gelten einheitlich für alle Ziele im Job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## Praktische Anwendungsfälle

**Umsetzung der 3-2-1-Backup-Regel:** Konfigurieren Sie lokale Quelle → Google Drive + Amazon S3 + Backblaze B2. Ein Job-Lauf, drei Kopien bei verschiedenen Cloud-Anbietern.

**Content-Distribution:** Ein Videoproduktionsteam synchronisiert finale Exporte von seinem Bearbeitungsserver gleichzeitig mit Dropbox (für die Kundenprüfung), Google Drive (für das interne Archiv) und einem CDN-Origin-Bucket.

**Regionale Replikation:** Eine Organisation synchronisiert ein zentrales Dokumentenrepository aus Latenz- und Verfügbarkeitsgründen mit regionalen Cloud-Buckets in verschiedenen geografischen Zonen.

**Anbieterübergreifende Redundanz:** Synchronisieren Sie einen primären OneDrive-Ordner sowohl mit Backblaze B2 als auch mit Cloudflare R2, sodass bei einem Ausfall eines Anbieters der andere weiterhin aktuelle Kopien besitzt.

## Zeitplanung von 1:N-Synchronisationsjobs

Für 1:N-Jobs, die regelmäßig ausgeführt werden müssen, gilt die geplante Synchronisation (PLUS-Lizenz) für Jobs mit mehreren Zielen genauso wie für Jobs mit einem einzigen Ziel. Konfigurieren Sie in Schritt 4 des Assistenten einen Zeitplan im Crontab-Stil, und RcloneView führt die vollständige Multi-Ziel-Synchronisation in jedem geplanten Intervall aus. Der Job-Verlauf zeichnet das Ergebnis für jeden Lauf auf und zeigt Ihnen, ob alle Ziele die Aktualisierungen erfolgreich erhalten haben.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie alle Ziel-Cloud-Anbieter als Remotes im Tab „Remote“ hinzu.
3. Öffnen Sie den Sync-Assistenten und verwenden Sie „Add Destination“ in Schritt 1, um mehrere Ziele für Ihre Quelle zu konfigurieren.
4. Fügen Sie optional einen Zeitplan hinzu (PLUS-Lizenz), um die Multi-Ziel-Synchronisation automatisch auszuführen.

Die 1:N-Synchronisation ist eine der zeitsparendsten Funktionen von RcloneView für Backup-Strategien — einmal konfigurieren, überall schützen, bei jedem Job-Lauf.

---

**Verwandte Anleitungen:**

- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Multi-Cloud-Backup-Strategie mit RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [NAS mit RcloneView auf mehrere Clouds sichern](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
