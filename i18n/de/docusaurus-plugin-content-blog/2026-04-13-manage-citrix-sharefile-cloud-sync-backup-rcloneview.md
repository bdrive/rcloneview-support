---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "Citrix ShareFile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Citrix ShareFile-Speicher mit RcloneView verbinden und verwalten. Synchronisieren, sichern und übertragen Sie ShareFile-Daten mit einer einzigen GUI in andere Clouds."
keywords:
  - Citrix ShareFile
  - ShareFile-Synchronisation
  - ShareFile-Backup
  - ShareFile-Cloud-Verwaltung
  - RcloneView ShareFile
  - Enterprise-Dateisynchronisation
  - ShareFile zu Cloud
  - Cloud-Speicherverwaltung
  - ShareFile-Migration
  - RcloneView Cloud-Sync
tags:
  - RcloneView
  - sharefile
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Verbinden Sie Citrix ShareFile mit RcloneView und verwalten Sie Ihre Enterprise-Dateien zusammen mit über 90 weiteren Cloud-Speicherdiensten in einer einzigen GUI.

Citrix ShareFile wird von Unternehmen und professionellen Dienstleistungsteams häufig für die sichere Dateifreigabe und Dokumentenverwaltung eingesetzt. Zwar bietet ShareFile einen eigenen Client, doch Teams, die Dateien über mehrere Cloud-Plattformen hinweg verwalten, benötigen oft ein zentrales Tool. RcloneView, ein auf rclone basierender GUI-Client, ermöglicht es Ihnen, ShareFile zusammen mit anderen Diensten — Google Drive, OneDrive, Amazon S3 und weiteren — von einer einzigen Oberfläche aus zu verbinden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Citrix ShareFile mit RcloneView verbinden

Um Citrix ShareFile zu RcloneView hinzuzufügen, benötigen Sie Ihre ShareFile-Kontodaten sowie Ihre Root Folder ID. Die Root Folder ID gibt an, welcher Ordner in Ihrem ShareFile-Konto von rclone als Stammverzeichnis der Verbindung verwendet wird — diese finden Sie in der Regel in der ShareFile-Weboberfläche unter den Ordnereigenschaften.

Um den Remote einzurichten, öffnen Sie RcloneView, wechseln Sie zur Registerkarte Remote und klicken Sie auf New Remote. Wählen Sie Citrix ShareFile aus der Anbieterliste aus und geben Sie die erforderliche Konfiguration ein, einschließlich Ihrer Root Folder ID. RcloneView wird mit einer integrierten rclone-Binärdatei ausgeliefert, sodass keine separate rclone-Installation erforderlich ist.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

Nach der Verbindung erscheint ShareFile als Remote im File Explorer. Sie können Ordner durchsuchen, Dateimetadaten (Name, Größe, Änderungsdatum) einsehen und Vorgänge wie Kopieren, Ausschneiden, Einfügen, Umbenennen und Löschen durchführen — alles ohne die RcloneView-Oberfläche zu verlassen.

## ShareFile mit anderen Cloud-Diensten synchronisieren

Einer der praktischen Vorteile der Verwaltung von ShareFile über RcloneView ist die Möglichkeit, es direkt mit anderem Cloud-Speicher zu synchronisieren. Eine Anwaltskanzlei kann beispielsweise ShareFile-Kundenordner zur Langzeitarchivierung mit Amazon S3 synchronisieren oder ShareFile-Inhalte für die Microsoft-365-Integration mit OneDrive spiegeln.

Um einen Sync-Job zu erstellen, klicken Sie auf der Registerkarte Home auf die Schaltfläche Sync und folgen Sie dem 4-Schritte-Assistenten: Wählen Sie Ihren ShareFile-Ordner als Quelle (oder Ziel), wählen Sie den Ziel-Remote und -Ordner aus, konfigurieren Sie die Übertragungsoptionen und fügen Sie optional Filterregeln hinzu. Mit der Dry-Run-Funktion können Sie genau vorab prüfen, welche Dateien kopiert oder gelöscht werden, bevor die Synchronisation ausgeführt wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

Für den fortlaufenden Datenschutz ermöglicht die zeitplanbasierte Synchronisation (verfügbar mit PLUS-Lizenz) die Ausführung von ShareFile-Backups nach einem Crontab-ähnlichen Zeitplan — täglich, wöchentlich oder in benutzerdefinierten Intervallen. Die Job History protokolliert jede Ausführung mit Startzeit, Dauer, Dateianzahl und Status.

## ShareFile-Inhalte organisieren und vergleichen

Die Folder-Compare-Funktion von RcloneView ist wertvoll, um ShareFile-Inhalte mit einem Backup-Ziel abzugleichen. Starten Sie sie über die Schaltfläche Compare auf der Registerkarte Home, wählen Sie ShareFile als eine Seite und Ihren Zielspeicher als andere Seite aus. Die Ansicht hebt Dateien hervor, die nur auf einer Seite existieren, sich in der Größe unterscheiden oder identisch sind.

Dieser Compare-First-Workflow ist bei Migrationen praktisch: Führen Sie einen Vergleich durch, bevor Sie synchronisieren, um genau zu verstehen, was sich ändern wird. Für gezieltere Audits ermöglicht Folder Compare with Filter (PLUS-Lizenz), Vergleiche nach Dateityp oder Ordnername einzuschränken — nützlich beim Umgang mit großen ShareFile-Repositorys.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie die Registerkarte Remote, klicken Sie auf **New Remote** und wählen Sie dann Citrix ShareFile.
3. Geben Sie Ihre ShareFile-Zugangsdaten und Root Folder ID ein, um die Einrichtung abzuschließen.
4. Verwenden Sie den Sync-Assistenten, um einen Job zu erstellen, der ShareFile in der gewünschten Ziel-Cloud sichert.

Die Verwaltung von ShareFile zusammen mit Ihren anderen Cloud-Diensten über eine einzige Oberfläche reduziert den Wechsel zwischen Anwendungen und sorgt für einen konsistenten Workflow für Backup, Migration und Dateiorganisation.

---

**Related Guides:**

- [SharePoint-Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Citrix ShareFile zu OneDrive und SharePoint mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
