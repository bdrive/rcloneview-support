---
slug: manage-multiple-cloud-accounts-rcloneview
title: "Mehrere Cloud-Konten in einer Ansicht verwalten mit RcloneView (Google, OneDrive, Dropbox, S3)"
authors:
  - tayson
description: Jonglieren Sie mit Google Drive, OneDrive, Dropbox und S3, ohne die CLI zu berühren. RcloneView vereint mehrere Cloud-Konten, sodass Sie Daten in einer einzigen, intuitiven Oberfläche durchsuchen, übertragen und synchronisieren können.
keywords:
  - rcloneview
  - mehrere cloud-konten
  - google drive
  - onedrive
  - dropbox
  - s3
  - cloud sync
  - rclone gui
  - dateien migrieren
tags:
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mehrere Cloud-Konten in einer Ansicht verwalten mit RcloneView (Google, OneDrive, Dropbox, S3)

> Ein übersichtliches Dashboard für alle Ihre Clouds – durchsuchen, vergleichen, übertragen und automatisieren, ganz ohne Kommandozeile.

Die Cloud-Speicher-Zersplitterung ist real. Ein persönliches Gmail-Konto plus ein berufliches Google-Konto, ein OneDrive, das an Microsoft 365 gebunden ist, ein altes Dropbox, das Sie noch mit einem Anbieter teilen, und ein S3-Bucket für Archive. Sich ständig in unterschiedlichen Portalen an- und abzumelden, kostet Zeit und macht es leicht, den Überblick zu verlieren, wo was liegt. RcloneView löst dieses Problem, indem alle Konten in einem einzigen, visuellen Explorer zusammengeführt werden, angetrieben von rclone – so können Sie mit Vorschauen, Testläufen und geplanten Jobs sicher zwischen Anbietern wechseln.

<!-- truncate -->

Mit RcloneView müssen Sie weder `rclone config` erlernen noch sich Flags merken. Die App führt Sie durch die einmalige Verbindung jedes Kontos, das Sie anschließend in Kopier-, Vergleichs- und Synchronisations-Workflows wiederverwenden können. Es ist ideal für:

- Alltagsnutzer, die einfach Dateien zwischen Konten per Drag & Drop verschieben möchten
- Entwickler, die über mehrere Clouds verstreute Projektdaten konsolidieren
- IT-Administratoren, die Backups und Migrationen über mehrere Konten hinweg standardisieren

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### Die Herausforderung verstehen

- Fragmentierte Oberflächen: Jeder Anbieter hat seine eigene Web-Konsole und eigene Beschränkungen für Massenoperationen.
- Unterschiedliche APIs und Kontingente: Google, Microsoft, Dropbox und S3 verhalten sich bei großen Verschiebungen alle unterschiedlich.
- Nachvollziehbarkeit und Wiederholbarkeit: Sie brauchen Vorschauen, Protokolle und geplante Läufe – nicht einmalige manuelle Drag-and-Drops im Browser.

### Was eine einheitliche Oberfläche verändert

- Ein Explorer: Mehrere Konten nebeneinander öffnen – keine wiederholten Anmeldeschleifen
- Compare-first: Unterschiede vor dem Kopieren sehen; Duplikate und Überraschungen vermeiden
- Jobs und Verlauf: Synchronisationen speichern, Läufe außerhalb der Geschäftszeiten planen und eine Nachvollziehbarkeit bewahren

| Ansatz                        | Wo Sie arbeiten          | Unterschiede in der Vorschau | Planen & wiederholen | Mehrere Anbieter    |
| ------------------------------ | ------------------------- | ----------------------------- | ---------------------- | -------------------- |
| Native Cloud-Weboberflächen    | Separate Browser-Tabs     | Eingeschränkt                 | Manuell                 | Nur ein Anbieter     |
| RcloneView Multi-Konten-GUI    | Eine Desktop-App          | Ja (Compare)                  | Ja (Jobs)               | Jedes rclone-Backend |



## Vorbereitung

1. Konten und Ziele festlegen: Listen Sie auf, welche Konten Sie nutzen (z. B. persönliches Google Drive, berufliches OneDrive, Dropbox, S3/Wasabi/R2) und was Sie erreichen möchten: konsolidieren, sichern oder neu organisieren.
2. Zugriff bestätigen: Sie benötigen ggf. Login-Zugriff oder API-Schlüssel.
3. Klein anfangen: Testen Sie mit einem kleinen Ordner; validieren Sie Vorschauen und Ergebnisse, bevor Sie skalieren.

Hilfreiche Links

- [Google OAuth Schnelleinrichtung](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Microsoft/SharePoint-Anmeldung](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [S3/Wasabi/R2-Einrichtung](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2-Zugangsdaten](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Dropbox OAuth-Einrichtung](/howto/remote-storage-connection-settings/add-oath-online-login)

## Ihre Konten in RcloneView verbinden

RcloneView verpackt die Konfiguration von rclone in einen benutzerfreundlichen Assistenten. Fügen Sie jede Cloud einmal hinzu; sie erscheint im linken Explorer zur Wiederverwendung.

1. Öffnen Sie RcloneView → klicken Sie auf `+ New Remote`.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. Wählen Sie einen Anbieter aus und folgen Sie den Anweisungen:
   - Google Drive: Melden Sie sich per OAuth an und benennen Sie das Remote eindeutig (z. B. `Drive-Personal`, `Drive-Work`). Siehe: [OAuth-Anmeldeanleitung](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint: Melden Sie sich mit Ihrem Microsoft-Konto an. Siehe: [Microsoft/SharePoint-Einrichtung](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox: Verwenden Sie den RcloneView Dropbox-OAuth-Assistenten zur Verbindung. Siehe: [OAuth-Anmeldeanleitung](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2: Endpunkt/Region und Schlüssel festlegen. → [S3-Verbindungseinstellungen](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2-Zugangsdaten](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. Wiederholen Sie dies für jedes Konto. Sie können mehrere Remotes gleichzeitig öffnen und nebeneinander durchsuchen.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Verschieben und Synchronisieren ohne Überraschungen

RcloneView unterstützt dieselben drei Muster über alle von Ihnen verbundenen Konten hinweg. Beginnen Sie mit einem kleinen Pilotordner und skalieren Sie dann.

### Drag & Drop

Öffnen Sie die Quelle links und das Ziel rechts; ziehen Sie Dateien oder Ordner hinüber.

Siehe: [Dateien mit Drag & Drop kopieren](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Vor dem Kopieren vergleichen

Führen Sie Compare aus, um aufzulisten, was zwischen zwei Ordnern neu, geändert oder fehlend ist – sogar über verschiedene Anbieter hinweg. Wählen Sie alles ab, was Sie überspringen möchten, und kopieren Sie dann.

Siehe: [Vergleichsergebnisse und Dateiverwaltung](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### Synchronisieren und planen

Spiegeln Sie ausgewählte Ordner zwischen Konten mit Sync. Führen Sie immer zuerst einen Testlauf durch, speichern Sie dann den Job und planen Sie Läufe außerhalb der Geschäftszeiten. Überwachen Sie Fortschritt und Verlauf im Job Manager.

Siehe: [Remote Storages synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages), [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs), [Job-Planung und Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## Praktische Anwendungsfälle

- Persönliches + berufliches Google Drive: Behalten Sie einen schreibgeschützten Spiegel ausgewählter persönlicher Ordner in einem beruflichen Konto oder umgekehrt, mit geplanten Synchronisationen und klaren Protokollen.
- OneDrive ↔ Google Drive Team-Übergabe: Nutzen Sie Compare, um eine Umstellung vorzubereiten, und synchronisieren Sie dann nächtlich, bis das Ziel zur maßgeblichen Quelle wird.
- Dropbox-Bereinigung und Archivierung: Ziehen Sie selten genutzte Freigaben per Drag & Drop in einen S3/Wasabi-Bucket für günstigeren Speicher, während Sie eine Online-Kopie für Mitarbeiter behalten.
- Multi-Cloud-Backup: Pflegen Sie verschlüsselte Archive in einem S3-kompatiblen Bucket, während die tägliche Zusammenarbeit in Drive/OneDrive stattfindet. Kombinieren Sie dies mit `crypt` von rclone, wenn Sie clientseitige Verschlüsselung benötigen. Siehe: /blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## Tipps für einen reibungslosen Betrieb

- Remotes eindeutig benennen: `Drive-Personal`, `Drive-Work`, `OneDrive-DeptA`, `Dropbox-Shared`, `S3-Archive`.
- Erst pilotieren: Vergleichen und kopieren Sie eine kleine Stichprobe, bevor Sie Massen-Jobs ausführen.
- Kontingente beachten: Upload-/Kopierlimits und API-Drosselung bei Google Drive können große Läufe beeinträchtigen; planen Sie diese nach Möglichkeit über Nacht.
- Nachvollziehbarkeit bewahren: Exportieren Sie Protokolle aus dem Job-Verlauf zur Änderungsverfolgung.

## Fazit

RcloneView verwandelt ein Durcheinander aus Logins und Browser-Tabs in einen einzigen, zuverlässigen Arbeitsbereich. Verbinden Sie alle Ihre Konten einmal, sehen Sie jede Änderung in der Vorschau und automatisieren Sie die wiederkehrenden Teile – ohne einen einzigen Befehl zu schreiben. Egal ob Sie persönliche Daten konsolidieren, Team-Übergaben orchestrieren oder IT-Migrationen durchführen – eine einheitliche Multi-Konten-GUI macht die Cloud-Arbeit schneller und sicherer.

Benötigen Sie Hilfe bei der Einrichtung eines bestimmten Anbieters? Schauen Sie sich als Nächstes das hier an:

- Remote Manager im Überblick: [Remote Manager](/howto/rcloneview-basic/remote-manager)
- Echtzeit-Übertragungsüberwachung: [Echtzeit-Übertragungsüberwachung](/howto/rcloneview-basic/real-time-transfer-monitoring)
- Clouds als lokale Laufwerke einbinden: [Cloud-Speicher als lokales Laufwerk einbinden](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
