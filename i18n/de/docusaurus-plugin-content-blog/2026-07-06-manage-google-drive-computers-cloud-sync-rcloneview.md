---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "Google Drive Computers verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - jay
description: "Verbinden und sichern Sie Google Drive Computers-Ordner in RcloneView und synchronisieren Sie Desktop-Backup-Daten zu über 90 Cloud-Anbietern aus einer einzigen GUI."
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive Computers verwalten — Dateien synchronisieren und sichern mit RcloneView

> Die Desktop-Ordner, die Googles Backup-and-Sync-App in Drive überträgt, liegen außerhalb Ihres normalen Drive-Baums — RcloneView verbindet sich direkt mit ihnen, sodass sie wie jeder andere Remote durchsucht, kopiert und gesichert werden können.

Wenn auf einem Arbeitsplatzrechner der Desktop-Client von Google Drive mit aktivierten "Meinen Computer sichern"-Ordnern läuft, landen diese Dateien in einem Bereich von Drive, den Standard-Remotes standardmäßig nicht sehen können — er wird über eine Computer-ID angesprochen, nicht über einen regulären Ordnerpfad. Das macht den Zugriff über eine GUI umständlich und erschwert die Einbindung in eine umfassendere Backup- oder Archivierungsstrategie. RcloneView macht dies als konfigurierbare Remote-Einstellung zugänglich, sodass ein Computers-Backup einfach zu einer weiteren Quelle wird, die Sie neben Ihrem regulären Cloud-Speicher durchsuchen, filtern und kopieren können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verbindung zu einem Computers-Backup herstellen

Die reguläre Remote-Konfiguration von Google Drive zeigt nur Ihr eigenes Drive-Root und die dort von Ihnen erstellten Ordner an. Um ein Computers-Backup zu erreichen, akzeptiert der Neuer-Remote-Assistent von RcloneView einen `root_folder_id`-Wert, der auf die Backup-ID des jeweiligen Computers verweist — ist dieser einmal gesetzt, erscheinen die gesicherten Ordner dieses Rechners (Desktop, Dokumente oder was auch immer im Desktop-Client ausgewählt wurde) im Explorer-Panel genau wie ein normaler Ordnerbaum. Das ist nützlich für IT-Teams, die mehrere Mitarbeiter-Laptops verwalten, oder für jeden, der prüfen möchte, was der Backup-and-Sync-Client eines bestimmten Rechners tatsächlich erfasst hat, ohne sich über einen Browser einzuloggen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

Nach der Verbindung unterstützt der Remote dieselben Dateioperationen wie jede andere Google-Drive-Verbindung: Thumbnail-Vorschauen, Navigation im Ordnerbaum, Kopieren/Herunterladen per Rechtsklick sowie "Größe ermitteln" zur Auswertung, wie viel ein bestimmter Rechner bereits zu Drive übertragen hat. RcloneView bindet ein (mount) und synchronisiert über mehr als 90 Anbieter aus demselben Fenster, sodass ein Computers-Backup in einem Panel liegen kann, während sich ein Zielarchiv in einem anderen befindet.

## Mehrere Rechner in einem Archiv konsolidieren

Organisationen, die mehrere Arbeitsplatzrechner sichern, erhalten am Ende einen Computers-Ordner pro Rechner, jeweils mit eigener ID adressiert, was es schwer macht, eine einheitliche Sicht auf "alles, was von Firmenlaptops gesichert wurde" zu bekommen. Das Einrichten eines separaten Remotes pro Rechner und das Ausführen geplanter Einweg-Synchronisationsjobs in ein gemeinsames Ziel — ein lokales NAS, ein S3-Bucket oder ein zweites Drive-Konto — konsolidiert diese verstreuten Backup-Daten an einem Ort, den Sie tatsächlich kontrollieren, statt sie in der Drive-Ansicht jedes einzelnen Mitarbeiters eingeschlossen zu lassen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

Filtereinstellungen in Schritt 3 des Synchronisationsassistenten helfen dabei, diese Jobs effizient zu halten — das Ausschließen von temporären Dateien, Systemcaches oder nicht wesentlichen Erweiterungen sorgt dafür, dass das konsolidierte Archiv nur das enthält, was tatsächlich erhaltenswert ist, statt eines vollständigen Spiegels jeder Datei, die der Desktop-Client zufällig erfasst hat.

## Wiederkehrende Prüfungen planen

Ein Computers-Backup ist nicht statisch — es wächst jedes Mal, wenn der Desktop-Client seinen eigenen Synchronisationszyklus ausführt, sodass eine einmalige Kopie in Ihr Archiv schnell veraltet. PLUS-Lizenznutzer können dem Synchronisationsjob einen crontab-artigen Zeitplan zuweisen, sodass neu gesicherte Dateien automatisch und wiederkehrend erfasst werden. Der Job-Verlauf zeigt dann genau, wann der Computers-Ordner jedes Rechners zuletzt erfasst wurde, die übertragene Größe sowie, ob der Lauf sauber abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen neuen Google-Drive-Remote und setzen Sie `root_folder_id` auf die Backup-ID des Zielrechners.
3. Durchsuchen Sie das Explorer-Panel, um zu bestätigen, dass die erwarteten Desktop-Ordner erscheinen.
4. Richten Sie einen Einweg-Synchronisationsjob zu einem konsolidierten Archivziel ein und planen Sie ihn, wenn Sie eine PLUS-Lizenz besitzen.

Desktop-Backup-Daten sollten nicht hinter einer Computer-ID gefangen sein, die Sie nur in einem Browser sehen können — die Einbindung in RcloneView verschafft ihnen dieselbe Sichtbarkeit und denselben Schutz wie dem Rest Ihres Cloud-Speichers.

---

**Verwandte Anleitungen:**

- [Google Drive-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google Drive "Für mich freigegeben" verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [Google Drive als lokales Laufwerk einbinden mit RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
