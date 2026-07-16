---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "Synology C2 Storage verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie Synology C2 mit RcloneView und verwalten Sie Ihr Cloud-Backup mit Leichtigkeit. Synchronisieren Sie Dateien, planen Sie Jobs und überwachen Sie Übertragungen über eine moderne Desktop-GUI."
keywords:
  - Synology C2 RcloneView
  - Synology C2 Backup
  - Synology C2 Storage verwalten
  - Synology C2 rclone GUI
  - S3-kompatible Cloud-Synchronisation
  - Synology Cloud-Speicher Backup
  - Synology C2 Synchronisation automatisieren
  - RcloneView S3-Einrichtung
  - Synology C2 Dateiübertragung
  - Synology C2 geplantes Backup
tags:
  - synology
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology C2 Storage verwalten — Dateien synchronisieren und sichern mit RcloneView

> Synology C2 ist der eigens für Synology entwickelte Cloud-Speicher — und mit RcloneView können Sie ihn über eine visuelle Oberfläche verwalten, ohne einen einzigen Befehl zu schreiben.

Synology C2 ist der Cloud-Speicherdienst, der das Ökosystem der Synology-NAS-Besitzer erweitert und S3-kompatiblen Objektspeicher bietet, der sich nahtlos in rclone-basierte Tools integrieren lässt. Egal, ob Sie zu Hause eine DiskStation betreiben, einen kleinen Firmen-Dateiserver verwalten oder eine zusätzliche Off-Site-Backup-Ebene benötigen — RcloneView macht es einfach, Übertragungen zu und von Synology C2 zu durchsuchen, zu synchronisieren und zu automatisieren. Da Synology C2 eine standardmäßige S3-kompatible API bereitstellt, erhalten Sie dieselbe zuverlässige rclone-Leistung, die Sie von jedem großen Objektspeicher-Anbieter erwarten würden — verpackt in einer übersichtlichen Desktop-GUI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Synology C2 als S3-kompatibles Remote verbinden

Synology C2 Object Storage nutzt eine standardmäßige S3-kompatible API. Sie verbinden es daher in RcloneView, indem Sie Amazon S3 als Remote-Typ wählen und auf den Synology-C2-Endpunkt verweisen. Öffnen Sie den Tab Remote, klicken Sie auf New Remote und wählen Sie Amazon S3 als Anbieter. Geben Sie Ihre C2 Access Key ID, den Secret Access Key und den regionalen Endpunkt Ihres C2-Kontos ein — verfügbar im Synology-C2-Portal, nachdem Sie Ihren Speicher erstellt und ein Zugriffsschlüsselpaar generiert haben. Setzen Sie das Feld Region entsprechend Ihrer C2-Region und speichern Sie.

Sobald das Remote erstellt ist, erscheint es in Ihrem Explorer-Panel wie jeder andere Cloud-Speicher. Sie können Buckets und Ordner durchsuchen, Dateigrößen und Änderungsdaten einsehen und verschachtelte Verzeichnisbäume navigieren, ohne die GUI zu verlassen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## Dateien durchsuchen und übertragen

Mit Ihrem geöffneten Synology-C2-Remote in einem Explorer-Panel und einem lokalen Laufwerk oder einer anderen Cloud im benachbarten Panel können Sie Dateien zwischen ihnen ziehen, um eine sofortige Übertragung zu starten. RcloneView bestätigt den Vorgang, bevor irgendetwas verändert wird, und der Tab Transferring am unteren Bildschirmrand zeigt den Live-Fortschritt: Dateianzahl, übertragene Bytes und aktuellen Durchsatz.

Bei großen Datenmengen — zum Beispiel ein Fotostudio, das 2 TB an RAW-Dateien sichert — bewegt die Multithread-Engine von RcloneView mehrere Dateien parallel. Sie können die gleichzeitigen Übertragungsströme in den erweiterten Einstellungen des Jobs konfigurieren, um den Durchsatz zu maximieren, ohne Ihre Netzwerkverbindung zu überlasten.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## Sync-Jobs für laufendes Backup erstellen

Über einmalige Übertragungen hinaus ermöglicht der Job Manager von RcloneView die Definition von Sync-Jobs, die einen Quellordner bei Bedarf oder nach Zeitplan mit einem Synology-C2-Bucket gespiegelt halten. Wählen Sie Sync als Job-Typ, wählen Sie Ihre Quelle — einen lokalen Ordner, ein Synology-NAS-Remote oder eine andere Cloud —, richten Sie das Ziel auf Ihren C2-Bucket aus und konfigurieren Sie Filterpräferenzen: Alterslimits für Dateien, Größenbeschränkungen und Erweiterungsausschlüsse sind alle konfigurierbar, ohne eine Konfigurationsdatei zu bearbeiten.

Führen Sie vor der ersten Live-Synchronisation den integrierten Dry Run aus. Er zeigt genau, welche Dateien kopiert oder entfernt werden, sodass es keine Überraschungen gibt, wenn Tausende von Dateien betroffen sind. Job History protokolliert jede Ausführung mit Zeitstempeln, Dateianzahl, Übertragungsgrößen und Statuscodes für eine vollständige Nachverfolgbarkeit.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## Automatisierte Backups planen (PLUS-Lizenz)

Für einen freihändigen Datenschutz schaltet die PLUS-Lizenz von RcloneView eine Zeitplanung im Crontab-Stil frei. Legen Sie fest, dass ein Synology-C2-Sync-Job nachts, wöchentlich oder in einem beliebigen benutzerdefinierten Intervall ausgeführt wird, indem Sie die Felder Minute, Hour und Day-of-Week im Schritt Schedule des Job-Assistenten ausfüllen. RcloneView führt die Übertragung zur konfigurierten Zeit aus und protokolliert das Ergebnis in Job History — was Ihnen eine vollständige Nachverfolgbarkeit gibt, um zu bestätigen, dass Backups ausgeführt wurden, und genau zu bestätigen, welche Dateien übertragen wurden, auch wenn Sie nicht am Rechner sind.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie im Synology-C2-Portal einen Storage-Bucket und generieren Sie ein Zugriffsschlüsselpaar.
3. Öffnen Sie in RcloneView den Tab Remote > New Remote, wählen Sie Amazon S3 und geben Sie Ihre C2 Access Key ID, den Secret Access Key und den regionalen Endpunkt ein.
4. Öffnen Sie den C2-Bucket in einem Explorer-Panel neben Ihrer Quelle, erstellen Sie einen Sync-Job im Job Manager und führen Sie zuerst einen Dry Run aus.
5. Aktivieren Sie die Zeitplanung (PLUS-Lizenz), um nächtliche oder wöchentliche Backups ohne manuellen Eingriff zu automatisieren.

Synology C2 bietet Ihnen eine eng integrierte Off-Site-Backup-Ebene — RcloneView macht daraus einen geplanten, überwachten Workflow, den Sie in wenigen Minuten einrichten können.

---

**Related Guides:**

- [NAS mit RcloneView auf mehrere Clouds sichern](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Wasabi Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Synology ohne Hyper Backup sichern — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
