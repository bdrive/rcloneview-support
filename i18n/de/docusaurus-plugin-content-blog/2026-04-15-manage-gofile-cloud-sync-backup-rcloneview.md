---
slug: manage-gofile-cloud-sync-backup-rcloneview
title: "Gofile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verwalten Sie Gofile-Cloud-Speicher mit RcloneView — laden Sie Gofile-Inhalte hoch, organisieren und synchronisieren Sie sie über eine GUI, die auf dem Gofile-Backend von rclone basiert."
keywords:
  - Gofile-Verwaltung
  - Gofile-Sync-Tool
  - Gofile-Upload-GUI
  - RcloneView Gofile
  - Gofile-Cloud-Backup
  - Gofile-Dateiübertragung
  - Content-Delivery-Speicher
  - Multi-Cloud-Dateiverwaltung
  - Gofile rclone
  - Upload-Dienst für große Dateien
tags:
  - gofile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Gofile ist ein beliebter Datei-Hosting- und Sharing-Dienst für große Uploads — RcloneView verbindet sich mit Gofile über ein Access Token und integriert es in Ihren Cloud-Management-Workflow.

Gofile ist ein Datei-Hosting- und Sharing-Dienst, mit dem Sie große Dateien hochladen und teilbare Links ohne restriktive Größenbeschränkungen erzeugen können. Für Nutzer, die regelmäßig Inhalte über Gofile verteilen, wird die Verwaltung von Uploads allein über das Webportal mühsam. RcloneView verbindet sich mit Gofile über ein Access Token und bringt Ihren Gofile-Speicher in einen einheitlichen Datei-Management-Workflow, zusammen mit all Ihren anderen Cloud-Remotes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gofile in RcloneView einrichten

Um Gofile in RcloneView zu verbinden, gehen Sie zu **Remote tab > New Remote** und wählen Sie **Gofile** aus der Anbieterliste. Sie benötigen ein **Access Token** aus Ihrem Gofile-Konto-Dashboard. Geben Sie das Token ein, benennen Sie den Remote und speichern Sie. Ihr Gofile-Konto erscheint im Explorer als durchsuchbarer Remote und zeigt Ordner und Dateien wie jeder andere Cloud-Speicher.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile as a new remote in RcloneView" class="img-large img-center" />

Gofile organisiert Inhalte in einer ordnerbasierten Struktur, die RcloneView sowohl in der Listenansicht als auch in der Miniaturansicht übersichtlich darstellt. Sie können verschachtelte Ordner durchsuchen, Dateinamen und -größen prüfen und mehrere Dateien für Massenoperationen auswählen — Batches herunterladen, Sätze alter Uploads löschen oder Inhalte zwischen Gofile-Ordnern verschieben.

## Gofile-Inhalte hochladen und organisieren

RcloneView unterstützt Drag-and-Drop-Uploads direkt aus Ihrem lokalen Dateimanager in das Gofile-Explorer-Panel. Das Ziehen eines Stapels von Videodateien aus einem lokalen Ordner lädt diese ohne das Öffnen eines Browsers an das ausgewählte Gofile-Ziel hoch — besonders nützlich für Content-Ersteller, die regelmäßig große Video-Pakete oder Software-Archive über Gofile verteilen.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Gofile in RcloneView" class="img-large img-center" />

Das Erstellen eines Sync-Jobs im **Job Manager** ermöglicht es Ihnen, Inhalte regelmäßig von einem lokalen Ordner zu Gofile zu übertragen. Ein Podcast-Produzent, der bearbeitete Episoden-Audiodateien zur Verteilung an Hörer auf Gofile hochlädt, kann dies so automatisieren, dass es wöchentlich nach den Aufnahmesitzungen läuft — wobei jedes Mal nur neue oder geänderte Dateien synchronisiert werden.

## Gofile-Inhalte in dauerhaftem Speicher sichern

Gofile-Inhalte können eine begrenzte Aufbewahrungsdauer haben oder vom Kontostatus abhängen. Für Nutzer, die Gofile als Verteilkanal verwenden, aber dauerhafte Backups wünschen, ermöglicht RcloneView die direkte Übertragung von Gofile zu Amazon S3, Backblaze B2 oder jedem anderen Cloud-Remote. Konfigurieren Sie einen Kopierjob, um Inhalte von Gofile abzurufen und in einem Langzeitspeicher zu archivieren — so behalten Sie eine dauerhafte Kopie von allem, was Sie geteilt haben.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Gofile backup transfers in RcloneView" class="img-large img-center" />

Der Tab **Job History** verfolgt jede Übertragung mit Details zu übertragenen Bytes, übertragenen Dateien, Dauer und Status — so wissen Sie immer, ob Ihre Gofile-Inhalte erfolgreich archiviert wurden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zu **Remote tab > New Remote**, wählen Sie **Gofile** und geben Sie Ihr Access Token ein.
3. Durchsuchen Sie Ihre Gofile-Inhalte im Explorer-Panel.
4. Nutzen Sie den **Job Manager**, um lokale Inhalte mit Gofile zu synchronisieren oder Gofile-Inhalte in einen Backup-Speicher zu kopieren.

Gofile über RcloneView bietet Content-Verteilern eine echte Datei-Management-Ebene auf der schnellen Upload- und Sharing-Infrastruktur von Gofile — und verwandelt einmalige Uploads in organisierte, automatisierte Workflows.

---

**Verwandte Anleitungen:**

- [Backblaze-B2-Cloud-Speicher verwalten — Synchronisieren und Sichern mit RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Große Dateien mit RcloneView zu Google Drive hochladen](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Copy URL — Dateien mit RcloneView direkt in die Cloud herunterladen](https://rcloneview.com/support/blog/copyurl-download-url-to-cloud-rcloneview)

<CloudSupportGrid />
