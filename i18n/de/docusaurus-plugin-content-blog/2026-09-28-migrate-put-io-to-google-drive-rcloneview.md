---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Put.io zu Google Drive migrieren — Dateien übertragen mit RcloneView"
authors:
  - jay
description: "Migrieren Sie Dateien von Put.io zu Google Drive mit RcloneView, einer plattformübergreifenden GUI, die Cloud-Inhalte überträgt, überprüft und organisiert."
keywords:
  - put.io zu google drive
  - put.io dateien migrieren
  - putio migration
  - RcloneView put.io
  - cloud-zu-cloud-übertragung
  - google drive migration
  - heruntergeladene torrents in die cloud verschieben
  - rclone put.io
  - put.io zu drive übertragen
  - cloud-speicher-migrationstool
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io zu Google Drive migrieren — Dateien übertragen mit RcloneView

> Verschieben Sie alles, was Sie auf Put.io gespeichert haben, mit einem visuellen Drag-and-Drop-Workflow zu Google Drive, statt zwischen zwei separaten Weboberflächen hin- und herzuwechseln.

Put.io eignet sich hervorragend als Landeplatz für heruntergeladene Torrents und Remote-Dateien, ist aber nicht für die langfristige Archivierung oder Team-Freigabe gedacht wie Google Drive. Sobald ein Download auf Put.io abgeschlossen ist, müssen viele Nutzer die Datei weiterhin manuell herunterladen und an anderer Stelle erneut hochladen. RcloneView verbindet sich mit beiden Diensten gleichzeitig und lässt Sie Inhalte direkt zwischen ihnen kopieren oder verschieben, Cloud zu Cloud, ohne den Umweg über Ihre lokale Festplatte.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.io und Google Drive nebeneinander verbinden

Der Explorer von RcloneView unterstützt bis zu vier Panels gleichzeitig, sodass Sie Ihr Put.io-Konto in einem Panel und Ihr Google Drive in einem anderen nebeneinander öffnen können. Put.io und Google Drive werden auf dieselbe Weise hinzugefügt — browserbasierter OAuth-Login, ohne separaten API-Schlüssel oder Zugriffstoken, den Sie manuell kopieren müssten. Sobald beide Remotes eingerichtet sind, erscheint jedes als eigener Tab, und das Umschalten erfolgt sofort.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

Mit beiden geöffneten Panels können Sie Ihren Put.io-Download-Ordner Ordner für Ordner durchsuchen und genau entscheiden, was übertragen wird, statt blind alles zu migrieren. Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich — bereits mit der FREE-Lizenz, sodass eine einmalige Übertragung keine Kosten verursacht außer der Zeit, die die Ausführung benötigt.

## Übertragung als Job ausführen

Statt Dateien einzeln zu ziehen, richten Sie über den 4-Schritte-Synchronisierungsassistenten einen Copy- oder Move-Job ein. Wählen Sie Put.io als Quelle und Ihren Google-Drive-Ordner als Ziel, und passen Sie dann im Schritt Advanced Settings die Anzahl gleichzeitiger Dateiübertragungen an Ihre Verbindung an. Wenn Sie sich nicht sicher sind, ob der Job korrekt abgegrenzt ist, führen Sie zuerst einen Dry Run aus — er listet jede Datei auf, die kopiert würde, ohne etwas zu verändern, was sich vor einer großen Medienmigration lohnt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

Verwenden Sie für eine einmalige Migration den One-time-Ausführungsmodus, damit nichts als wiederkehrender Job gespeichert wird. Falls Sie vorhaben, Put.io weiterhin mit Dateien zu befüllen, bevor der Umzug abgeschlossen ist, speichern Sie ihn stattdessen als Job, damit Sie ihn später erneut ausführen und nur neue Inhalte übernehmen können.

## Den Umzug mit Folder Compare überprüfen

Öffnen Sie nach Abschluss der Übertragung Folder Compare, um beide Speicherorte nebeneinander zu prüfen. Es markiert Dateien, die nur auf einer Seite existieren, sowie Dateien mit abweichender Größe, sodass Sie bestätigen können, dass die Migration vollständig war, bevor Sie etwas auf Put.io löschen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History führt außerdem ein Protokoll der Übertragung — Dateianzahl, Gesamtgröße und Dauer — was hilfreich ist, wenn Sie eine große Bibliothek über mehrere Sitzungen hinweg in Chargen migrieren.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Put.io-Remote über den browserbasierten OAuth-Login-Ablauf hinzu.
3. Fügen Sie Ihren Google-Drive-Remote auf dieselbe Weise über browserbasierten OAuth-Login hinzu.
4. Erstellen Sie einen Copy- oder Move-Job von Put.io zu Ihrem Zielordner, führen Sie einen Dry Run aus und starten Sie ihn anschließend.

Wenn Sie den Put.io-Speicher leeren und in ein dauerhaftes Google-Drive-Zuhause überführen, bleiben Ihre Downloads organisiert, ohne einen zweiten manuellen Upload-Schritt.

---

**Verwandte Anleitungen:**

- [OneDrive zu Google Drive migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Put.io-Speicher verwalten — Synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Put.io-Medien auf NAS oder Cloud streamen und synchronisieren mit RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
