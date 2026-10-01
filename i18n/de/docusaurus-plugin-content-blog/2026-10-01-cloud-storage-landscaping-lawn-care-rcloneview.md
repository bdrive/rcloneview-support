---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "Cloud-Speicher für Landschaftsbaubetriebe — Projektdateien mit RcloneView schützen"
authors:
  - alex
description: "Cloud-Speicher für Garten- und Landschaftsbau sowie Rasenpflege: Baustellenfotos, Entwürfe und Kostenvoranschläge mit der geplanten Synchronisation und Verschlüsselung von RcloneView sichern."
keywords:
  - Cloud-Speicher für Landschaftsbaubetriebe
  - Backup von Landschaftsplanungsdateien
  - Backup für Rasenpflegebetriebe
  - Backup von Baustellenfotos
  - Landschaftsbau Cloud-Synchronisation
  - verschlüsseltes Cloud-Backup
  - RcloneView Backup
  - Cloud-Backup für kleine Unternehmen
  - geplantes Cloud-Backup
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

# Cloud-Speicher für Landschaftsbaubetriebe — Projektdateien mit RcloneView schützen

> Sichern Sie Baustellenfotos, Entwurfszeichnungen und Kostenvoranschläge extern, ohne dass Ihre Teams ihre Arbeitsweise ändern müssen.

In einem Landschaftsbaubetrieb sammeln sich Dateien an vielen verschiedenen Orten: Vorher-Nachher-Fotos auf Smartphones, CAD- oder Entwurfsexporte auf dem Büro-PC, unterschriebene Kostenvoranschläge in einem freigegebenen Ordner. Fällt mitten in der Saison ein Laptop aus, geht damit auch die Historie dessen verloren, was jedem Kunden zugesagt wurde. RcloneView bietet kleinen Unternehmen eine visuelle Möglichkeit, diese Arbeit in den Cloud-Speicher zu kopieren und zu bestätigen, dass sie angekommen ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Projektdateien vor dem Backup ordnen

Beginnen Sie mit einer klaren Ordnerstruktur auf dem Büro-Rechner: ein Ordner pro Kunde, mit Unterordnern für Fotos, Entwürfe, Kostenvoranschläge und Rechnungen. Fotos der Teams können am Ende jedes Tages in den Kundenordner gelegt werden.

Öffnen Sie den lokalen Ordner in einem RcloneView-Explorer-Bereich und Ihren Cloud-Remote in einem anderen. Im File Explorer können Sie prüfen, ob die Baustellenfotos vor dem Hochladen im richtigen Projektordner gelandet sind.

<img src="/support/images/en/blog/new-remote.png" alt="Einen Cloud-Remote für Landschaftsbau-Projektdateien in RcloneView hinzufügen" class="img-large img-center" />

## Den passenden Speicher wählen

RcloneView unterstützt Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, Amazon S3 und über 90 weitere Anbieter. So können Sie ein bereits vorhandenes Konto nutzen oder Objektspeicher für große Fotoarchive wählen.

Wenn Kundenadressen und Verträge betroffen sind, fügen Sie über dem Ziel einen Crypt-Remote hinzu. Dateinamen und Inhalte werden vor dem Hochladen über rclone Crypt verschlüsselt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Projektordner mit RcloneView in den Cloud-Speicher kopieren" class="img-large img-center" />

## Die nächtliche Kopie automatisieren

Erstellen Sie einen Sync- oder Copy-Job vom Projektordner zum Cloud-Ziel. Nutzen Sie zuerst Dry Run, um eine Vorschau zu sehen, was kopiert oder gelöscht wird. Die einseitige Synchronisation ändert nur das Ziel, was für ein Backup geeignet ist. Mit einer PLUS-Lizenz können Sie einen Zeitplan im crontab-Stil hinzufügen, sodass der Job jede Nacht läuft, nachdem die Teams ihre Fotos hochgeladen haben.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einen nächtlichen Backup-Job in RcloneView planen" class="img-large img-center" />

## Prüfen, ob die Backups wirklich funktioniert haben

Job History zeigt für jeden Lauf Startzeit, Dauer, Status, Größe und Dateianzahl. Verwenden Sie Folder Compare zwischen dem lokalen Ordner und der Cloud-Kopie, um fehlende Dateien aufzuspüren, besonders nach einer arbeitsreichen Woche mit vielen Einsätzen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf für Backup-Läufe in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Cloud-Speicher über New Remote hinzu und optional einen Crypt-Remote für sensible Dateien.
3. Erstellen Sie einen Sync-Job vom Projektordner in die Cloud und führen Sie einen Dry Run aus.
4. Planen Sie ihn (PLUS) oder führen Sie ihn manuell aus und prüfen Sie dann wöchentlich Job History.

Zuverlässige Backups bedeuten: Ein defekter Laptop ist eine Unannehmlichkeit, kein verlorener Saison-Datenbestand an Kundenunterlagen.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher für Heizungs- und Sanitärbetriebe](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [Cloud-Speicher für Innenarchitekturbüros](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [Cloud-Speicher für Vermessungsbüros](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />
