---
slug: manage-http-remote-cloud-sync-rcloneview
title: "HTTP-Remote-Speicher verwalten — Dateien mit RcloneView durchsuchen und synchronisieren"
authors:
  - alex
description: "Verbinden Sie einen schreibgeschützten HTTP-Dateiindex mit RcloneView und synchronisieren Sie dessen Inhalt mit Google Drive, S3, Backblaze B2 und 90+ Cloud-Speicheranbietern."
keywords:
  - HTTP Remote RcloneView
  - HTTP-Dateiserver-Synchronisation
  - schreibgeschützter HTTP-Speicher
  - HTTP zu Cloud synchronisieren
  - HTTP-Verzeichnisliste rclone
  - HTTP zu Google Drive
  - HTTP zu Amazon S3
  - HTTP-Dateien archivieren
  - RcloneView HTTP-Verbindung
  - HTTP-Remote durchsuchen
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HTTP-Remote-Speicher verwalten — Dateien mit RcloneView durchsuchen und synchronisieren

> RcloneView verwandelt jeden öffentlichen HTTP-Dateiindex in ein durchsuchbares Remote, sodass Sie dessen Inhalt ohne einen einzigen wget-Befehl in Google Drive, S3 oder 90+ weitere Cloud-Anbieter übertragen können.

Zahlreiche Datensätze, Firmware-Archive, Forschungsspiegel und interne Build-Artefakte liegen noch immer hinter einer einfachen HTTP-Verzeichnisliste — keine API, kein Login, nur Ordner und Dateien, die über eine URL bereitgestellt werden. Der Download aus solchen Quellen bedeutet meist, curl- oder wget-Schleifen zu skripten und zu hoffen, dass sich die Verzeichnisstruktur während des Laufs nicht ändert. RcloneView verbindet sich mit jedem HTTP-Endpunkt als schreibgeschütztes Remote und lässt Sie es im selben Explorer-Panel durchsuchen, das Sie auch für Cloud-Speicher nutzen — anschließend kopieren Sie, was Sie benötigen, an ein passendes Backup-Ziel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ein HTTP-Remote in RcloneView verbinden

Öffnen Sie den **Remote**-Tab, klicken Sie auf **New Remote** und wählen Sie HTTP aus der Anbieterliste. Geben Sie die Basis-URL des Dateiindex ein, den Sie durchsuchen möchten — RcloneView liest die Verzeichnisliste des Servers und stellt sie als normalen Ordnerbaum dar. Es gibt keinen OAuth-Ablauf und keine zu verwaltenden Zugangsdaten, da HTTP-Remotes per Design schreibgeschützt sind: Sie können Dateien auflisten, durchsuchen und herunterladen, aber auf dem Quellserver nichts hochladen, umbenennen oder löschen.

Dieser Unterschied ist entscheidend dafür, wie Sie diesen Remote-Typ einsetzen. Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz —, sodass sich ein HTTP-Remote am besten als Quelle eignet, aus der Sie Daten ziehen, mit einem beschreibbaren Cloud- oder lokalen Ziel auf der anderen Seite.

<img src="/support/images/en/blog/new-remote.png" alt="Ein neues HTTP-Remote in RcloneView hinzufügen" class="img-large img-center" />

## HTTP-Index durchsuchen und herunterladen

Nach der Verbindung verhält sich das HTTP-Remote wie jedes andere Panel im Multi-Pane-Explorer von RcloneView. Erweitern Sie den Ordnerbaum, prüfen Sie Dateigrößen und Änderungsdaten, sofern der Server sie meldet, und nutzen Sie Strg+Klick oder Umschalt+Klick, um mehrere Dateien oder Unterordner vor dem Download auszuwählen. Öffnen Sie ein Cloud-Ziel — etwa einen Backblaze-B2-Bucket oder einen Google-Drive-Ordner — im benachbarten Panel und ziehen Sie Dateien hinüber, um eine Übertragung zu starten.

Das ist ein gängiges Muster für Teams, die öffentliche Datensatz-Archive spiegeln, Firmware-Images von der HTTP-Distributionsstelle eines Anbieters abrufen oder Snapshots eines internen Build-Servers archivieren, der nur eine Verzeichnisliste offenlegt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dateien von einem HTTP-Remote in den Cloud-Speicher kopieren in RcloneView" class="img-large img-center" />

## Wiederkehrende Abrufe aus einer HTTP-Quelle planen

Wenn sich der HTTP-Index periodisch aktualisiert — nächtliche Builds, wöchentliche Datensatz-Updates —, richten Sie einen Job-Manager-Eintrag mit dem HTTP-Remote als Quelle und Ihrem Cloud-Speicher als Ziel ein. Führen Sie zunächst einen **Dry Run** aus, um genau zu sehen, welche Dateien kopiert werden, da HTTP-Verzeichnislisten unterschiedlich viele Metadaten offenlegen können und Sie vor einer echten Übertragung prüfen sollten, ob der Dateiabgleich wie erwartet funktioniert.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einen wiederkehrenden Auftrag zum Abrufen von Dateien aus einem HTTP-Remote in RcloneView planen" class="img-large img-center" />

Mit einer **PLUS-Lizenz** können Sie dem Auftrag einen Zeitplan im Crontab-Stil zuweisen, sodass neu auf dem HTTP-Server veröffentlichte Dateien nach diesem Zeitplan in Ihr Cloud-Archiv gelangen. Prüfen Sie anschließend den **Job History**-Tab, um Übertragungszahlen zu bestätigen und Dateien zu erkennen, die der Quellserver nicht mehr bereitstellt.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote** > **New Remote** und wählen Sie HTTP aus der Anbieterliste.
3. Geben Sie die Basis-URL der Verzeichnisliste ein und speichern Sie das Remote.
4. Öffnen Sie das HTTP-Remote in einem Panel und Ihr Cloud-Ziel im anderen.
5. Nutzen Sie den **Job Manager**, um einen Sync-Auftrag einzurichten, und führen Sie vor dem ersten echten Abruf einen Dry Run aus.

Sobald eine HTTP-Quelle verbunden ist, wird das Übertragen von Dateien in Ihr Cloud-Archiv zu einem wiederholbaren, nachvollziehbaren Auftrag statt zu einem Einmalskript, an dessen erneute Ausführung Sie sich jedes Mal erinnern müssen.

---

**Weitere Anleitungen:**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
