---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "Wasabi zu OneDrive migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Wasabi mit RcloneView zu OneDrive migrieren: beide Remotes verbinden, per Dry Run vorab prüfen, Bucket-Daten Cloud-zu-Cloud kopieren und mit Folder Compare verifizieren."
keywords:
  - Wasabi zu OneDrive migrieren
  - Wasabi zu OneDrive Übertragung
  - Wasabi-Bucket nach OneDrive verschieben
  - RcloneView Wasabi
  - RcloneView OneDrive
  - Cloud-zu-Cloud-Migration
  - Wasabi OneDrive Synchronisation
  - S3 zu OneDrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabi zu OneDrive migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Daten aus einem Wasabi-Bucket mit einer Cloud-zu-Cloud-Kopie, die sich vorab prüfen und danach verifizieren lässt – statt Herunterladen und erneutem Hochladen.

Teams, die Projektarchive in Wasabi gespeichert haben, benötigen diese Daten manchmal in OneDrive, wo Kolleginnen und Kollegen bereits in Microsoft 365 arbeiten. Objektspeicher und ein Dateisynchronisationsdienst verhalten sich unterschiedlich, daher kann ein blindes Kopieren überraschen. RcloneView verbindet beide Dienste nebeneinander, prüft den Job vorab per Dry Run und verifiziert das Ergebnis anschließend. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff in der FREE-Lizenz, zusammen mit über 90 weiteren Anbietern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wasabi und OneDrive verbinden

Wasabi wird über das S3-Protokoll von rclone angesprochen; Sie geben daher Access Key, Secret Key und den Endpunkt Ihrer Wasabi-Region ein. OneDrive verwendet Browser-OAuth: RcloneView öffnet eine Microsoft-Anmeldeseite, Sie genehmigen den Zugriff, und der Remote verbindet sich ohne einen Schlüssel, den Sie kopieren müssten.

Öffnen Sie beide Remotes in zwei Explorer-Bereichen. Durchsuchen Sie den Bucket und die OneDrive-Ordnerstruktur, damit Sie wissen, wo die Daten liegen und wohin sie sollen.

<img src="/support/images/en/blog/new-remote.png" alt="Wasabi- und OneDrive-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Die Kopie planen

Stellen Sie sich ein Designstudio mit mehreren Buckets voller fertiger Projektordner vor. Statt alles in einem Durchgang zu verschieben, kopieren Sie pro Job einen Bucket oder ein Präfix. Kurze Jobs lassen sich leichter wiederholen und leichter prüfen.

Wählen Sie Copy statt Sync, wenn OneDrive bereits Dateien enthält, die Sie behalten möchten, denn eine einseitige Synchronisation gleicht das Ziel der Quelle an. Im Filterschritt können Sie Dateigröße oder Alter begrenzen und vordefinierte Gruppen wie Document, Image oder Video verwenden. Prüfen Sie außerdem vorab die Dateinamen: Objektschlüssel können Zeichen oder sehr lange Pfade enthalten, die OneDrive möglicherweise ablehnt – ein Dry Run ist daher die eine Minute wert.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Wasabi- und OneDrive-Ordner vor der Migration vergleichen" class="img-large img-center" />

## Die Übertragung ausführen

Für eine schnelle einmalige Kopie ziehen Sie einen Ordner aus dem Wasabi-Bereich in den OneDrive-Bereich. Das Ziehen zwischen verschiedenen Remotes kopiert, statt zu verschieben, sodass der Bucket unberührt bleibt, bis Sie zufrieden sind. Für wiederholbare Läufe speichern Sie einen Job über den vierstufigen Assistenten: Speicher, erweiterte Einstellungen, Filter und Zeitplan (der Zeitplan erfordert PLUS).

Beobachten Sie im Reiter Transferring Geschwindigkeit, Dateianzahl und Fortschritt. Wird OneDrive bei einem großen Lauf langsamer, verringern Sie in Advanced Settings die Anzahl gleichzeitiger Dateiübertragungen. Sync-Jobs wiederholen den gesamten Lauf, wenn er fehlschlägt (Standard: 3-mal).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-zu-Cloud-Übertragung von Wasabi zu OneDrive" class="img-large img-center" />

## Verifizieren und Protokoll führen

Öffnen Sie nach dem Kopieren Folder Compare auf beiden Wurzelordnern. Filter zeigen Dateien, die nur links, nur rechts vorhanden, identisch oder unterschiedlich sind, und fehlende Elemente können Sie mit einem Klick hinüberkopieren. Job History erfasst Startzeit, Dauer, Status und übertragene Dateien und dient damit zugleich als Migrationsprotokoll.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf der Migration von Wasabi zu OneDrive" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen Wasabi-Remote (Access Key, Secret Key, Regions-Endpunkt) und einen OneDrive-Remote (Browser-Anmeldung) hinzu.
3. Führen Sie einen Dry Run für ein Präfix aus und starten Sie dann den Kopier-Job.
4. Verifizieren Sie mit Folder Compare und wiederholen Sie den Vorgang für die übrigen Buckets.

Eine etappenweise, verifizierte Migration stellt sicher, dass jede Datei erfasst ist, bevor Sie den Bucket außer Betrieb nehmen.

---

**Verwandte Anleitungen:**

- [OneDrive zu Wasabi migrieren](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Wasabi-Speicher verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run: Synchronisation vor der Übertragung in der Vorschau prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
