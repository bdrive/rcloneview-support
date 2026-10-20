---
slug: sync-wasabi-to-google-drive-rcloneview
title: "Wasabi mit Google Drive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - morgan
description: "Wasabi mit Google Drive in RcloneView synchronisieren: beide Remotes verbinden, mit Dry Run eine Vorschau erstellen, eine unidirektionale Synchronisation ausführen und das Ergebnis mit Folder Compare prüfen."
keywords:
  - wasabi mit google drive synchronisieren
  - wasabi google drive backup
  - wasabi google drive übertragung
  - RcloneView wasabi
  - RcloneView google drive
  - Cloud-zu-Cloud-Synchronisation
  - s3 zu google drive
  - wasabi-bucket-backup
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabi mit Google Drive synchronisieren — Cloud-Backup mit RcloneView

> Halten Sie mit einer vorab prüfbaren unidirektionalen Synchronisation eine zweite, für die Zusammenarbeit geeignete Kopie Ihres Wasabi-Buckets in Google Drive vor.

Wasabi ist ein verbreiteter Ort für Archive und Projektergebnisse, doch die Menschen, die diese Dateien brauchen, arbeiten oft in Google Drive. Die Synchronisation beider Dienste hält eine lesbare Kopie dort bereit, wo Kolleginnen und Kollegen ohnehin arbeiten, und schafft einen zweiten Speicherort für den Fall, dass ein Konto Probleme macht. RcloneView verbindet beide Dienste in einem Fenster, zeigt den Auftrag vorab in der Vorschau und prüft das Ergebnis. S3, Azure oder Backblaze B2 lassen sich mit der FREE-Lizenz mit vollem Lese- und Schreibzugriff verbinden, dazu über 90 weitere Anbieter.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes verbinden

Wasabi wird über das S3-Protokoll von rclone angebunden: Geben Sie Access Key, Secret Key und den Endpunkt Ihrer Wasabi-Region ein. Google Drive nutzt OAuth im Browser, daher öffnet RcloneView eine Google-Anmeldeseite und verbindet sich, sobald Sie den Zugriff genehmigen.

Öffnen Sie jeden Remote in einem eigenen Explorer-Panel. Durchsuchen Sie den Bucket und die Drive-Ordnerstruktur nebeneinander, damit Sie genau wissen, welches Präfix welchem Ordner entspricht.

<img src="/support/images/en/blog/new-remote.png" alt="Wasabi- und Google-Drive-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Den Synchronisationsauftrag konfigurieren

Stellen Sie sich ein Videostudio vor, dessen Bucket fertige Schnitte enthält, die Produzentinnen und Produzenten in einem freigegebenen Drive-Ordner sehen möchten. Erstellen Sie über die Schaltfläche Sync einen Auftrag: Wählen Sie das Wasabi-Präfix als Quelle und den Drive-Ordner als Ziel und geben Sie dem Auftrag einen Namen aus Buchstaben, Zahlen, Bindestrichen oder Unterstrichen.

Die unidirektionale Synchronisation ("Modifying destination only") gleicht das Ziel an die Quelle an, sodass Dateien, die nur im Drive-Ordner liegen, entfernt werden. Wenn der Drive-Ordner Dateien enthält, die Sie behalten möchten, verwenden Sie stattdessen einen Copy-Auftrag. Unter Advanced Settings legen Sie fest, wie viele Dateien gleichzeitig übertragen werden, und können den Prüfsummenvergleich aktivieren. Beachten Sie, dass Google Docs, Sheets und Slides keine gewöhnlichen Dateien sind; der vordefinierte Google-Docs-Filter ist daher nützlich, um sie auszuschließen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung zwischen Wasabi und Google Drive in RcloneView" class="img-large img-center" />

## Vorschau mit Dry Run

Nutzen Sie vor dem ersten echten Lauf Dry Run. Er listet die Dateien auf, die kopiert und gelöscht würden, ohne etwas zu ändern. Das ist der günstigste Weg, ein falsches Quellpräfix oder eine unerwartete Löschung zu entdecken. Führen Sie den Auftrag aus, sobald die Liste stimmt, und verfolgen Sie Fortschritt, Geschwindigkeit und Dateianzahl im Tab Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Einen Synchronisationsauftrag in RcloneView ausführen" class="img-large img-center" />

## Prüfen und wiederholen

Öffnen Sie nach der Synchronisation Folder Compare für beide Speicherorte, um sicherzustellen, dass nichts nur auf einer Seite vorhanden ist oder abweicht. Job History protokolliert Status, Dauer, Größe und Dateianzahl jedes Laufs, sodass Sie frühere Läufe nachvollziehen können. Mit einer PLUS-Lizenz können Sie einen Zeitplan im Crontab-Stil hinzufügen, damit die Kopie automatisch aktualisiert wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder-Compare-Ansicht in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Ihren Wasabi-Remote mit Access Key, Secret Key und Regions-Endpunkt hinzu und danach Google Drive per Browser-Anmeldung.
3. Erstellen Sie einen Sync-Auftrag vom Wasabi-Präfix zu einem Drive-Ordner und starten Sie zuerst Dry Run.
4. Führen Sie den Auftrag aus und bestätigen Sie das Ergebnis mit Folder Compare.

Eine Drive-Kopie Ihres Buckets macht aus einem Archiv etwas, das Ihr ganzes Team öffnen kann.

---

**Weiterführende Anleitungen:**

- [Wasabi zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — Synchronisation vor der Übertragung prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Workflow „Erst vergleichen“](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
