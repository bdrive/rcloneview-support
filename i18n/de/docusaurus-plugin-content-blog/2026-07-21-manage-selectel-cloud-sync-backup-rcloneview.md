---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Selectel-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - alex
description: "Verbinden Sie Selectel Object Storage mit RcloneView für S3-kompatible Dateiverwaltung, Synchronisation, Mounting und Backup unter Windows, macOS und Linux."
keywords:
  - Selectel-Speicher
  - Selectel Object Storage
  - S3-kompatible Speicher-GUI
  - RcloneView Selectel
  - Cloud-Backup-Software
  - Selectel mit der Cloud synchronisieren
  - Cloud-Speicher-GUI verwalten
  - Objektspeicher-Synchronisationstool
  - Multi-Cloud-Dateimanager
  - S3-Zugangsdaten einrichten
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Selectel-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie Selectel-Object-Storage-Buckets über eine grafische Oberfläche, statt S3-Zugangsdaten von Hand in einer Konfigurationsdatei zu bearbeiten.

Selectel Object Storage wird über das S3-kompatible Protokoll von rclone angesprochen, das heißt, für die Verbindung müssen Access Key, Secret Key und Endpunkt gleich beim ersten Versuch korrekt eingegeben werden. RcloneView verwandelt diese Einrichtung in ein geführtes Formular und kombiniert sie mit einem vollständigen Datei-Explorer, einer Sync-Engine und einem Job-Planer, sodass Teams, die bereits Daten bei Selectel speichern, diese genauso verwalten können wie jeden anderen Remote in einem einzigen Fenster.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Selectel als S3-kompatiblen Remote verbinden

Das Hinzufügen von Selectel in RcloneView folgt demselben Ablauf zur Eingabe von Zugangsdaten wie bei anderen S3-kompatiblen Diensten: Öffnen Sie den Reiter Remote > New Remote, wählen Sie die S3-kompatible Option und geben Sie Access Key ID, Secret Access Key sowie den Selectel-Endpunkt ein. Der Connect Manager erlaubt es außerdem, RcloneView auf eine externe rclone-Instanz zeigen zu lassen, falls Ihre Selectel-Integration bereits über einen gemeinsam genutzten rclone-Daemon auf einem Server läuft, statt über das eingebettete rclone.

Nach dem Speichern erscheint der Remote als eigener Tab im Explorer-Panel, direkt neben jedem anderen bereits konfigurierten Cloud- oder lokalen Speicher. Ein Alias-Remote kann tief verschachtelte Bucket-Pfade auf einen kurzen, im Alltag leichter navigierbaren Namen verkürzen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Selectel-Daten durchsuchen, synchronisieren und sichern

Sobald der Remote verbunden ist, lässt sich über das Zwei-Fenster-Layout des File Explorers vergleichen, was auf Selectel liegt, gegenüber einem lokalen Ordner oder einem anderen Cloud-Remote — Seite an Seite. Das Ziehen von Dateien zwischen zwei verschiedenen Remotes löst eine Kopie aus, und das Kontextmenü deckt Umbenennen, Löschen, Größe ermitteln sowie Download/Upload für die alltägliche Dateiverwaltung ab.

Für wiederkehrende Backups führt der Sync-Assistent in vier Schritten durch Quelle und Ziel, Übertragungsparallelität und Filterregeln, mit Optionen wie maximalem Dateialter und vordefinierten Filtern für Medien- oder Dokumenttypen. S3-kompatible Dienste wie Selectel lassen sich mit vollem Lese-/Schreibzugriff in der FREE-Lizenz verbinden — es ist kein Upgrade nötig, um Daten in den Bucket zurückzuschreiben. 1:N-Synchronisation kann denselben Selectel-Bucket in einem einzigen Job auf mehrere Ziele spiegeln, nützlich, wenn ein Backup sowohl auf einem lokalen Laufwerk als auch auf einem zweiten Cloud-Remote landen soll.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Wiederkehrende Selectel-Backups automatisieren

Der Job Manager führt jeden Sync-, Kopier- oder Verschiebejob in einer Liste, und jeder Lauf wird mit Status, übertragener Größe und Dateianzahl in der Job History protokolliert. Dry Run zeigt vorab genau, welche Dateien kopiert oder gelöscht würden, bevor eine echte Übertragung läuft — sinnvoll zu prüfen, bevor der erste große Sync in einen neuen Selectel-Bucket startet.

PLUS-Lizenznutzer können einem Job einen Zeitplan im Crontab-Stil zuweisen, sodass Selectel-Backups automatisch in wiederkehrenden Intervallen laufen, mit einer Simulationsoption, um kommende Ausführungszeiten vor dem Speichern des Zeitplans zu prüfen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Selectel als lokales Laufwerk einbinden

Selectel-Speicher lässt sich auch als virtuelles Laufwerk einbinden (mount), sodass andere Desktop-Anwendungen Bucket-Inhalte lesen und schreiben können, als wären es lokale Dateien. Die Mount-Konfiguration umfasst den VFS-Cache-Modus (Standard: writes), Cache-Größenlimits und den schreibgeschützten Modus; Mounts lassen sich über die Panel-Symbolleiste des Remotes oder über den dedizierten Mount Manager starten.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie Remote > New Remote, wählen Sie die S3-kompatible Option und geben Sie Ihre Selectel-Zugangsdaten sowie den Endpunkt ein.
3. Übertragen Sie vorhandene Daten mit Folder Compare oder per Drag & Drop nach Selectel und richten Sie anschließend einen Sync-Job für laufende Backups ein.
4. Fügen Sie den Job dem Job Manager hinzu und hängen Sie unter PLUS einen Zeitplan an, damit Backups ohne manuelles Eingreifen laufen.

Sobald der Remote eingerichtet ist, verhält sich Selectel-Speicher wie jede andere Verbindung in RcloneView — durchsuchbar, synchronisierbar, einbindbar und bereit, nach Zeitplan gesichert zu werden.

---

**Weiterführende Anleitungen:**

- [IONOS Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Vultr Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Linode Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
