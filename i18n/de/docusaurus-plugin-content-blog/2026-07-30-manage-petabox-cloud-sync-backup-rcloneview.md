---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - steve
description: "Verbinden Sie den S3-kompatiblen Objektspeicher Petabox mit RcloneView für plattformübergreifendes Datei-Browsing, Synchronisation und automatisierte Backups."
keywords:
  - Petabox-Speicher
  - Petabox-Objektspeicher
  - S3-kompatible Speicher-GUI
  - RcloneView Petabox
  - Cloud-Backup-Software
  - Petabox mit der Cloud synchronisieren
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

# Petabox-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie Petabox-Objektspeicher-Buckets über eine grafische Oberfläche, statt S3-Zugangsdaten manuell in einer Konfigurationsdatei zu bearbeiten.

Petabox wird über das S3-kompatible Protokoll von rclone angebunden. Die Verbindung erfordert die Eingabe von Access Key, Secret Key und Endpunkt-URL — Angaben, bei denen auf der Kommandozeile leicht Fehler passieren. RcloneView verwandelt diesen Vorgang in ein geführtes Formular und kombiniert ihn mit einem vollständigen Zwei-Panel-Datei-Explorer, einer Sync-Engine und einem Auftragsplaner, sodass Teams, die bereits Daten auf Petabox speichern, diese zusammen mit jedem anderen Remote in einem einzigen Fenster verwalten können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Petabox als S3-kompatibles Remote verbinden

Das Hinzufügen von Petabox in RcloneView folgt demselben Ablauf zur Eingabe von Zugangsdaten wie bei jedem anderen S3-kompatiblen Dienst: Öffnen Sie den Reiter Remote > New Remote, wählen Sie den S3-kompatiblen Typ und geben Sie Access Key ID, Secret Access Key und den Petabox-Endpunkt ein. Läuft Ihre Petabox-Integration bereits über einen gemeinsam genutzten rclone-Dienst auf einem Server, kann der Connect Manager RcloneView stattdessen auf diese externe rclone-Instanz verweisen, anstatt die eingebettete zu verwenden.

Nach dem Speichern erscheint das Remote als eigener Tab im Explorer-Panel, neben jedem anderen bereits konfigurierten Cloud- oder lokalen Speicher. Ein Alias-Remote kann einen tief verschachtelten Bucket-Pfad zu einem kurzen Namen verkürzen, der sich im Alltag leichter navigieren lässt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Petabox-Daten durchsuchen, synchronisieren und sichern

Sobald das Remote verbunden ist, macht es das Zwei-Panel-Layout des File Explorers einfach, das bereits auf Petabox Vorhandene mit einem lokalen Ordner oder einem anderen Cloud-Remote zu vergleichen. Drag & Drop zwischen Panels löst eine Kopie aus, wenn Quelle und Ziel unterschiedliche Remotes sind, und das Kontextmenü deckt Umbenennen, Löschen, Größe ermitteln sowie Download/Upload für alltägliche Dateioperationen ab.

Für wiederkehrende Backups übernimmt der vierstufige Sync-Assistent Quelle und Ziel, Übertragungsgleichzeitigkeit sowie Filterregeln, einschließlich Optionen wie maximales Dateialter und vordefinierte Filter für Medien- oder Dokumenttypen. S3-kompatible Dienste wie Petabox lassen sich bereits mit der FREE-Lizenz mit vollem Lese-/Schreibzugriff verbinden — es ist kein Lizenz-Upgrade nötig, nur um Daten zurück in den Bucket zu schreiben. 1:N-Synchronisation kann denselben Petabox-Bucket in einem einzigen Auftrag auf mehrere Ziele spiegeln — nützlich, wenn ein Backup sowohl auf einem lokalen Laufwerk als auch bei einem zweiten Cloud-Anbieter landen soll.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## Wiederkehrende Petabox-Backups automatisieren

Der Job Manager hält jeden Sync-, Kopier- oder Verschiebeauftrag in einer Liste zusammen, wobei jeder Lauf zusammen mit Status, Übertragungsgröße und Dateianzahl in der Job History protokolliert wird. Dry Run zeigt vorab genau an, welche Dateien kopiert oder gelöscht würden, bevor eine tatsächliche Übertragung stattfindet — sinnvoll zu prüfen vor einer großen ersten Synchronisation in einen neuen Petabox-Bucket.

PLUS-Lizenznutzer können einem Auftrag einen Crontab-artigen Zeitplan zuweisen, sodass Petabox-Backups automatisch in wiederkehrenden Intervallen laufen, mit einer Simulationsoption, um kommende Ausführungszeiten vor dem Speichern zu prüfen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Petabox als lokales Laufwerk einbinden

Petabox-Speicher kann auch als virtuelles Laufwerk eingebunden werden, sodass andere Desktop-Anwendungen den Bucket-Inhalt lesen und schreiben können, als wären es lokale Dateien. Die Mount-Konfiguration umfasst den VFS-Cache-Modus (Standard: writes), Cache-Größenlimits und den Nur-Lese-Modus, und die Einbindung kann sowohl über die Panel-Symbolleiste des Remotes als auch über den dedizierten Mount Manager gestartet werden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Reiter Remote > New Remote und wählen Sie die S3-kompatible Option, um Ihre Petabox-Zugangsdaten und den Endpunkt einzugeben.
3. Verschieben Sie vorhandene Daten mit Folder Compare oder Drag & Drop nach Petabox und richten Sie anschließend einen Sync-Auftrag für laufende Backups ein.
4. Fügen Sie den Auftrag dem Job Manager hinzu und hängen Sie mit PLUS einen Zeitplan an, damit Backups ohne manuelles Eingreifen laufen.

Sobald das Remote eingerichtet ist, verhält sich der Petabox-Speicher wie jede andere Verbindung in RcloneView — durchsuchbar, synchronisierbar und bereit für geplante Backups.

---

**Weiterführende Anleitungen:**

- [Outscale-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Selectel-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
