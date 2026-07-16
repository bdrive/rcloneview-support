---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "Outscale-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - morgan
description: "Verbinden Sie Outscale Object Storage mit RcloneView für S3-kompatibles Datei-Browsing, Synchronisation und Backup unter Windows, macOS und Linux."
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-kompatible Speicher-GUI
  - RcloneView Outscale
  - Cloud-Backup-Software
  - Outscale mit Cloud synchronisieren
  - Cloud-Speicher-GUI verwalten
  - Object-Storage-Sync-Tool
  - Multi-Cloud-Dateimanager
  - S3-Zugangsdaten einrichten
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Outscale-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Durchsuchen, synchronisieren und sichern Sie Outscale Object Storage Buckets über eine grafische Oberfläche, statt rohe S3-Zugangsdaten auf der Kommandozeile zu jonglieren.

Auf Outscale Object Storage wird über das S3-kompatible Protokoll von rclone zugegriffen, was bedeutet, dass die Einrichtung einen Access Key, einen Secret Key und einen Endpoint erfordert — Details, die sich in einer Konfigurationsdatei leicht vertippen lassen. RcloneView verpackt diese Einrichtung in ein geführtes Formular und ergänzt sie um einen vollständigen Datei-Explorer, eine Sync-Engine und einen Job-Scheduler, sodass Teams, die bereits Daten auf Outscale speichern, diese genauso verwalten können wie jedes andere Remote.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Outscale als S3-kompatibles Remote verbinden

Das Hinzufügen von Outscale in RcloneView folgt demselben Ablauf zur Eingabe der Zugangsdaten wie bei anderen S3-kompatiblen Diensten: Öffnen Sie den Reiter Remote > Neues Remote, wählen Sie den S3-kompatiblen Typ und geben Sie die Access Key ID, den Secret Access Key und den Outscale-Endpoint ein. Der Connect Manager erlaubt es außerdem, RcloneView auf eine externe rclone-Instanz zu verweisen, falls Ihre Outscale-Integration bereits über einen gemeinsam genutzten rclone-Daemon auf einem Server läuft.

Sobald das Remote gespeichert ist, erscheint es als eigener Tab im Explorer-Panel, direkt neben allen anderen bereits konfigurierten Cloud- oder lokalen Speichern. Sie können die Verbindung mit einem Alias-Remote umbenennen, um tief verschachtelte Bucket-Pfade in etwas zu verkürzen, das im Alltag leichter zu navigieren ist.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines Outscale S3-kompatiblen Remotes in RcloneView" class="img-large img-center" />

## Outscale-Daten durchsuchen, synchronisieren und sichern

Sobald das Remote verbunden ist, bietet der Datei-Explorer eine Zwei-Fenster-Ansicht, um den Inhalt auf Outscale mit einem lokalen Ordner oder einem anderen Cloud-Remote zu vergleichen. Drag-and-drop zwischen den Panels löst beim Verschieben zwischen zwei unterschiedlichen Remotes eine Kopie aus, und das Rechtsklickmenü deckt Umbenennen, Löschen, Größe ermitteln sowie Download/Upload für alltägliche Dateioperationen ab.

Für wiederkehrende Backups konfiguriert der Sync-Assistent Quelle und Ziel, Übertragungs-Nebenläufigkeit und Filterregeln in vier Schritten, einschließlich Optionen wie maximales Dateialter und vordefinierte Filter für Medien- oder Dokumenttypen. Verbinden Sie S3-kompatible Dienste wie Outscale mit vollem Lese-/Schreibzugriff bereits in der KOSTENLOSEN Lizenz — ein Upgrade ist nicht nötig, nur um Daten zurück in den Bucket zu schreiben. 1:N-Synchronisation kann denselben Outscale-Bucket in einem einzigen Job auf mehrere Ziele spiegeln, nützlich, wenn ein Backup sowohl auf einem lokalen Laufwerk als auch auf einem zweiten Cloud-Remote landen soll.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Sync-Jobs zwischen Outscale-Speicher und einem anderen Remote" class="img-large img-center" />

## Wiederkehrende Outscale-Backups automatisieren

Der Job Manager verwaltet jeden von Ihnen erstellten Sync-, Kopier- oder Verschiebe-Job in einer einzigen Liste, wobei jeder Lauf im Job-Verlauf zusammen mit Status, Übertragungsgröße und Dateianzahl protokolliert wird. Mit Dry Run können Sie genau einsehen, welche Dateien kopiert oder gelöscht würden, bevor Sie eine echte Übertragung starten — eine nützliche Sicherheitsprüfung vor einer großen ersten Synchronisation zu einem neuen Outscale-Bucket.

PLUS-Lizenznutzer können einem Job einen Zeitplan im Crontab-Stil hinzufügen, sodass Outscale-Backups automatisch in wiederkehrenden Intervallen laufen, mit einer Simulationsoption, um bevorstehende Ausführungszeiten vor dem Speichern zu überprüfen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden Backup-Jobs für Outscale-Speicher" class="img-large img-center" />

## Outscale als lokales Laufwerk einbinden

Outscale-Speicher lässt sich auch als virtuelles Laufwerk einbinden (mount), sodass andere Desktop-Anwendungen den Bucket-Inhalt lesen und schreiben können, als wären es lokale Dateien. Die Mount-Konfiguration umfasst den VFS-Cache-Modus (Standard: writes), Cache-Größenbegrenzungen und den Nur-Lese-Modus, und Mounts können direkt aus der Panel-Toolbar des Remotes oder über den dedizierten Mount Manager gestartet werden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einbinden eines Outscale-Buckets als lokales Laufwerk in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Reiter Remote > Neues Remote und wählen Sie die S3-kompatible Option, um Ihre Outscale-Zugangsdaten und den Endpoint einzugeben.
3. Nutzen Sie den Ordnervergleich oder Drag-and-drop, um vorhandene Daten auf Outscale zu übertragen, und richten Sie dann einen Sync-Job für laufende Backups ein.
4. Fügen Sie den Job dem Job Manager hinzu und hängen Sie bei PLUS einen Zeitplan an, damit Backups ohne manuellen Eingriff laufen.

Sobald das Remote konfiguriert ist, verhält sich Outscale-Speicher wie jede andere Verbindung in RcloneView — durchsuchbar, synchronisierbar und bereit, nach Zeitplan gesichert zu werden.

---

**Verwandte Anleitungen:**

- [Wasabi-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Hetzner Object Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
