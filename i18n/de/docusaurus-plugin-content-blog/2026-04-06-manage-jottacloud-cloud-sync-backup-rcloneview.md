---
slug: manage-jottacloud-cloud-sync-backup-rcloneview
title: "Jottacloud-Speicher mit RcloneView verwalten: Synchronisation, Backup und Dateiorganisation"
authors:
  - tayson
description: Richten Sie Jottacloud in RcloneView ein, um Dateien zu durchsuchen, mit Google Drive oder S3 zu synchronisieren, Backups zu planen und unbegrenzten Speicherplatz über eine visuelle Oberfläche zu verwalten.
keywords:
  - rcloneview
  - jottacloud
  - jottacloud backup
  - cloud sync
  - jottacloud google drive
  - jottacloud s3
  - rclone GUI
  - unlimited cloud storage
  - scheduled backup
  - multi-cloud management
tags:
  - jottacloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud-Speicher mit RcloneView verwalten: Synchronisation, Backup und Dateiorganisation

> Jottacloud bietet unbegrenzten Speicherplatz zu einem Festpreis — doch die Verwaltung über mehrere Clouds hinweg erfordert das richtige Werkzeug. **RcloneView** bietet Ihnen eine visuelle Oberfläche, um Ihre Jottacloud-Dateien neben jeder anderen Cloud zu durchsuchen, zu synchronisieren, zu sichern und zu organisieren.

Jottacloud ist ein norwegischer Cloud-Speicher-Anbieter, bekannt für seine großzügigen Tarife mit unbegrenztem Speicherplatz und strenge europäische Datenschutzstandards. Er ist eine beliebte Wahl für persönliche Backups, Fotoarchive und Unternehmen, die großen Speicherplatz ohne Überraschungen bei der Preisgestaltung pro Gigabyte benötigen.

Die Herausforderung bei Jottacloud besteht darin, dass es in seinem eigenen Ökosystem existiert. Wenn Sie zusätzlich Google Drive für die Zusammenarbeit, Amazon S3 für Archive oder OneDrive für die Arbeit nutzen, wird die Organisation der Daten über all diese Dienste hinweg schnell zur manuellen Fleißarbeit. RcloneView schließt diese Lücke, indem es Ihnen ermöglicht, Jottacloud zusammen mit über 70 weiteren Cloud-Anbietern in einer einzigen, zweigeteilten Oberfläche zu verwalten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Jottacloud mit RcloneView verwalten

Die eigenen Apps von Jottacloud funktionieren gut für einfache Uploads und Downloads, ihnen fehlen jedoch cloudübergreifende Funktionen. Mit RcloneView können Sie:

- **Jottacloud-Speicher durchsuchen** in einem vertrauten Dateimanager-Layout — Ordner navigieren, Größen prüfen und Dateien visuell verwalten.
- **Jottacloud mit Google Drive, OneDrive oder S3 synchronisieren** — Arbeitskopien in Kollaborationstools behalten, während in Jottacloud archiviert wird.
- **Automatisierte Backups planen** von jeder Cloud zum unbegrenzten Speicherplatz von Jottacloud.
- **Ordnerinhalte vergleichen** über Anbieter hinweg, um Abweichungen oder fehlende Dateien zu erkennen.
- **Vendor-Lock-in vermeiden**, indem Sie Kopien wichtiger Daten auf mehreren Diensten pflegen.

## Einrichten des Jottacloud-Remotes

Das Hinzufügen von Jottacloud zu RcloneView ist unkompliziert:

1. Öffnen Sie RcloneView und klicken Sie auf **+ New Remote**.
2. Wählen Sie **Jottacloud** aus der Anbieterliste.
3. Folgen Sie dem OAuth-Anmeldevorgang — Sie werden zur Website von Jottacloud weitergeleitet, um den Zugriff zu autorisieren.
4. Benennen Sie den Remote (z. B. `MyJottacloud`) und speichern Sie.

Ihr Jottacloud-Speicher, einschließlich aller Geräte und Mount-Punkte, erscheint im Explorer-Bereich.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Jottacloud remote in RcloneView" class="img-large img-center" />

## Speicher durchsuchen und organisieren

RcloneView zeigt Ihre Jottacloud-Inhalte im zweigeteilten Explorer an. Sie sehen Ihre konfigurierten Geräte und deren Mount-Punkte — typischerweise ein **Archive**-Gerät für unbegrenzten Speicherplatz sowie Ihre benannten Geräte für synchronisierte Ordner.

Vom Explorer aus können Sie:

- **Navigieren** durch Ordner und Unterordner innerhalb jedes Geräts oder Mount-Punkts.
- **Neue Ordner erstellen**, um Ihre Archivstruktur vor dem Hochladen zu organisieren.
- **Alte Dateien löschen**, die Sie nicht mehr benötigen, um Ihre Ansicht aufzuräumen (und bei begrenzten Tarifen Kontingent zurückzugewinnen).
- **Eine zweite Cloud öffnen** im gegenüberliegenden Bereich für direkten Vergleich oder Übertragung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Jottacloud and Google Drive side by side in RcloneView" class="img-large img-center" />

## Jottacloud mit Google Drive oder Amazon S3 synchronisieren

Der häufigste Anwendungsfall besteht darin, Jottacloud mit einer Kollaborations-Cloud oder einem Objektspeicherdienst synchron zu halten.

### Jottacloud zu Google Drive

Wenn Ihr Team in Google Drive arbeitet, Sie aber eine kostengünstige Off-Site-Kopie wünschen, richten Sie eine Synchronisation von Google Drive zu Jottacloud ein. Neue und geänderte Dateien fließen automatisch nach Ihrem Zeitplan.

### Jottacloud zu Amazon S3

Für ein dauerhaftes, geografisch redundantes Backup synchronisieren Sie Jottacloud-Daten mit einem S3-Bucket (oder einem beliebigen S3-kompatiblen Dienst wie Wasabi oder Backblaze B2). So erhalten Sie bei Bedarf eine zweite Kopie außerhalb Europas.

### So übertragen Sie

- **Drag & Drop**: Wählen Sie Dateien in einem Bereich aus und ziehen Sie sie in den anderen. Ideal für einmalige Übertragungen oder kleine Stapel.
- **Vergleichen und Kopieren**: Führen Sie einen Ordnervergleich durch, um Unterschiede zu sehen, und kopieren Sie dann nur das, was fehlt oder geändert wurde.
- **Synchronisation**: Spiegeln Sie eine gesamte Ordnerstruktur. Verwenden Sie zunächst Dry Run, um Änderungen zu überprüfen.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Jottacloud to another cloud" class="img-large img-center" />

## Automatisierte Backups planen

Der unbegrenzte Speicherplatz von Jottacloud macht ihn zu einem ausgezeichneten Backup-Ziel. In RcloneView:

1. Erstellen Sie einen **Copy**- oder **Sync**-Job von Ihrer Quell-Cloud zu Jottacloud.
2. Öffnen Sie das Panel **Job Scheduling**.
3. Legen Sie einen Zeitplan fest — nächtlich für aktive Projekte, wöchentlich für Archive.
4. Speichern und aktivieren Sie den Zeitplan.

RcloneView führt den Job automatisch aus und protokolliert jede Ausführung im Panel **Job History**. Sie können jederzeit Übertragungszahlen, Fehler und Dauern überprüfen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule a backup job to Jottacloud" class="img-large img-center" />

## Unbegrenzten Speicherplatz effektiv verwalten

Unbegrenzt bedeutet nicht unorganisiert. Halten Sie Ihr Jottacloud-Archiv mit diesen Praktiken nützlich:

- **Verwenden Sie eine konsistente Ordnerstruktur** — spiegeln Sie Ihr Quell-Layout oder verwenden Sie datumsbasierte Verzeichnisse (z. B. `Backups/2026/04/`).
- **Richten Sie Filter ein**, um temporäre Dateien, Caches und Systemverzeichnisse auszuschließen, die Speicherplatz verschwenden und Übertragungen verlangsamen.
- **Führen Sie regelmäßige Vergleiche** zwischen Quelle und Backup durch, um etwaige Synchronisationslücken zu erkennen.
- **Überwachen Sie den Job-Verlauf** auf fehlgeschlagene Übertragungen — ein einzelnes Timeout oder ein Berechtigungsfehler kann Lücken in Ihrem Backup hinterlassen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed backup runs" class="img-large img-center" />

## Tipps für Jottacloud-Nutzer

- **Jottacloud drosselt große Uploads** — wenn Sie zum ersten Mal Terabytes migrieren, kann die anfängliche Synchronisation einige Zeit in Anspruch nehmen. Nachfolgende inkrementelle Läufe werden schnell sein.
- **Verwenden Sie das Archive-Gerät** für unbegrenzten Speicherplatz. Andere Geräte können je nach Ihrem Tarif unterschiedlichen Kontingentregeln unterliegen.
- **Kombinieren Sie mit Verschlüsselung** — wenn Sie zusätzlich zum serverseitigen Schutz von Jottacloud eine clientseitige Verschlüsselung wünschen, fügen Sie in RcloneView einen rclone-crypt-Remote über Ihrem Jottacloud-Remote hinzu.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Jottacloud verbinden** über OAuth im New-Remote-Assistenten.
3. **Ihre weiteren Clouds hinzufügen** — Google Drive, S3, OneDrive oder jeden anderen unterstützten Anbieter.
4. **Durchsuchen, synchronisieren und planen** — unbegrenzter Speicherplatz, visuell verwaltet.

Jottacloud gibt Ihnen den Platz. RcloneView gibt Ihnen die Kontrolle.

---

**Verwandte Anleitungen:**

- [Cloud-zu-Cloud-Übertragungen und Synchronisation mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [Inkrementelles Backup von Google Drive zu Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Proton Drive Multi-Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
