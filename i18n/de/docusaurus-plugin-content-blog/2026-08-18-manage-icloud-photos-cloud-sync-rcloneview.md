---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "iCloud Photos verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - robin
description: "Verwalten Sie iCloud Photos mit RcloneView — durchsuchen, synchronisieren und sichern Sie Ihre Apple-Fotobibliothek in andere Clouds über eine plattformübergreifende GUI."
keywords:
  - iCloud Photos Verwaltung
  - iCloud Photos Backup
  - iCloud Photos Synchronisation
  - RcloneView iCloud Photos
  - Apple Photos Cloud-Backup
  - iCloud Photos to Google Drive
  - iCloud Photos Migration
  - Apple Fotobibliothek Backup-Tool
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Photos verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie Ihre iCloud Photos-Bibliothek in RcloneView und sichern Sie sie in eine andere Cloud, ohne Alben von Hand exportieren zu müssen.

Apples Photos-Ökosystem hält jahrelange Bilder und Videos in iCloud eingeschlossen, und eine zweite Kopie an anderer Stelle zu erstellen bedeutet meist, Alben einzeln über die Photos-App zu exportieren. RcloneView verbindet sich mit iCloud Photos als eigenständiges, dediziertes Remote — ein separates Paket gegenüber iCloud Drive — sodass Sie die Bibliothek direkt durchsuchen und ohne den manuellen Export-Schritt nach Google Drive, Amazon S3 oder auf ein lokales Backup-Laufwerk kopieren können. S3, Azure File Storage oder Backblaze B2 lassen sich mit vollem Lese-/Schreibzugriff in der FREE-Lizenz verbinden, sodass die Zielseite eines Foto-Backups keine zusätzlichen Kosten für die Einrichtung verursacht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Photos als Remote verbinden

iCloud Photos wird über Remote-Tab > New Remote in RcloneView hinzugefügt und als eigener, dedizierter Remote-Typ eingerichtet, getrennt von iCloud Drive — beide verhalten sich als separate Remotes, obwohl sie vom selben Apple-Konto stammen. Nach der Authentifizierung erscheint die Bibliothek im Explorer-Panel wie jeder andere Cloud-Speicher, mit Ordnern, Vorschaubildern und Dateimetadaten, die Sie durchsuchen und auswählen können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

Da die Bibliothek bei langjährigen iCloud-Nutzern in die Zehntausende von Dateien gehen kann, lohnt es sich, vor einer Massenkopie zur Thumbnail View von RcloneView zu wechseln — so können Sie Bildvorschauen durchblättern, um vor dem Start einer Übertragung zu bestätigen, dass Sie auf das richtige Album oder den richtigen Zeitraum zeigen.

## Backup in eine zweite Cloud

Sobald iCloud Photos verbunden ist, richten Sie über den 4-Schritte-Assistenten einen Sync-Job ein: wählen Sie iCloud Photos als Quelle, wählen Sie ein Ziel-Remote — Google Drive, einen S3-kompatiblen Bucket oder ein lokales externes Laufwerk — und führen Sie zunächst einen Dry Run aus, um genau zu sehen, was kopiert wird, bevor tatsächlich etwas übertragen wird. Speziell für eine Fotobibliothek ist der Prüfsummenvergleich in Schritt 2 nützlich, da sich Fotodateien selten in der Größe ändern, Sie aber dennoch sicher sein möchten, dass die Kopie byte-genau mit dem Original übereinstimmt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

Die Filtering Settings in Schritt 3 helfen ebenfalls dabei, große Bibliotheken einzugrenzen — ein Filter für das maximale Dateialter beschränkt einen Backup-Job auf kürzlich hinzugefügte Inhalte, was wiederholte Läufe schnell hält, sobald die anfängliche vollständige Kopie abgeschlossen ist.

## Wiederkehrende Backups automatisieren

Ein einmaliger Export schützt keine Fotos, die nächsten Monat aufgenommen werden, daher richten die meisten iCloud Photos-Nutzer statt eines manuellen Einzellaufs einen wiederkehrenden Sync-Job ein. In einer PLUS-Lizenz können Sie dem Job einen Zeitplan im crontab-Format hinzufügen, sodass er automatisch in dem gewünschten Rhythmus läuft — täglich, wöchentlich oder nach einer bestimmten Uhrzeit jede Nacht — und anschließend in der Job History prüfen, ob der Lauf abgeschlossen wurde und wie viele Dateien übertragen wurden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ein iCloud Photos-Remote über Remote-Tab > New Remote hinzufügen.
3. Einen Sync-Job zu Ihrem gewählten Backup-Ziel konfigurieren und zuerst einen Dry Run ausführen.
4. Wiederkehrende Backups planen, damit neue Fotos automatisch geschützt bleiben.

Eine zweite Kopie Ihrer Fotobibliothek außerhalb von Apples Ökosystem bedeutet einen Single Point of Failure weniger, falls ein Konto gesperrt wird oder ein Gerät verloren geht.

---

**Weiterführende Anleitungen:**

- [iCloud Drive mit RcloneView](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [iCloud Drive Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [iCloud Drive Synchronisationsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
