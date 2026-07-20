---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "OpenDrive Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - jay
description: "Verbinden Sie OpenDrive mit RcloneView und verwalten Sie Ihre Dateien, automatisieren Sie Backups und synchronisieren Sie Daten über mehrere Clouds hinweg — mit einer GUI, die keine Kommandozeilen-Kenntnisse erfordert."
keywords:
  - OpenDrive cloud storage RcloneView
  - OpenDrive sync GUI
  - manage OpenDrive files
  - OpenDrive backup tool
  - rclone OpenDrive GUI
  - OpenDrive file transfer
  - cloud storage management
  - OpenDrive desktop app
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie OpenDrive mit RcloneView für Drag-and-Drop-Dateiverwaltung, geplante Backups und cloudübergreifende Übertragungen — ganz ohne Kommandozeile.

OpenDrive ist eine Cloud-Speicher-Plattform mit privaten und geschäftlichen Tarifen, die sich auf Dateifreigabe und Zusammenarbeit konzentriert. Während die Weboberfläche für den gelegentlichen Gebrauch ausreicht, benötigen Power-User, die große Datenmengen verschieben, Backups automatisieren oder mit anderen Clouds synchronisieren möchten, ein leistungsfähigeres Werkzeug. RcloneView, angetrieben von rclones OpenDrive-Backend, bringt eine voll ausgestattete GUI für Ihr OpenDrive-Konto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OpenDrive mit RcloneView verbinden

Navigieren Sie zu **Remote-Tab → Neuer Remote** und wählen Sie OpenDrive aus der Anbieterliste. Sie müssen sich über OAuth authentifizieren — RcloneView öffnet ein Browserfenster, in dem Sie sich mit Ihren OpenDrive-Zugangsdaten anmelden und den Zugriff gewähren. Nach der Autorisierung wird der Remote gespeichert und ist sofort in Ihren Explorer-Panels verfügbar.

Der Explorer zeigt Ihre OpenDrive-Ordner und -Dateien mit vollständigen Metadaten: Name, Größe, letztes Änderungsdatum und Typ. Der Ordnerbaum links ermöglicht die Navigation durch Ihre gesamte Speicherhierarchie, während die Dateiliste rechts den Inhalt des ausgewählten Ordners mit sortierbaren Spalten anzeigt. Für bildlastige Ordner steht eine Miniaturansicht zur Verfügung, mit der Sie in einer Foto- oder Asset-Bibliothek schnell finden, wonach Sie suchen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## OpenDrive-Dateien auf externen Laufwerken oder anderen Clouds sichern

Für eine kleine Designagentur, die Kundenprojektdateien auf OpenDrive speichert, ist eine zweite Kopie an anderer Stelle entscheidend. Mit RcloneView lässt sich problemlos ein Backup-Job von OpenDrive zu Amazon S3, Backblaze B2 oder sogar einem lokalen externen Laufwerk einrichten. Öffnen Sie die Quelle (OpenDrive) in einem Panel und das Ziel im anderen, und konfigurieren Sie dann über den Job-Manager einen Synchronisationsjob.

Der 4-Schritte-Job-Assistent lässt Sie Quell- und Zielpfade festlegen, die Übertragungsparallelität konfigurieren, die Prüfsummenverifizierung aktivieren und Dateifilter setzen (temporäre Dateien ausschließen oder nach Alter begrenzen). Mit einer PLUS-Lizenz können Sie den Job so planen, dass er nächtlich oder nach einem beliebigen Crontab-Zeitplan läuft, sodass Ihre OpenDrive-Daten ohne manuelle Schritte immer gesichert sind.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## Testlauf vor der Synchronisation

Bevor Sie einen großen Synchronisationsvorgang starten, nutzen Sie den **Dry-Run**-Modus von RcloneView. Dieser simuliert die Synchronisation und zeigt genau, welche Dateien kopiert, aktualisiert oder gelöscht würden — ohne tatsächliche Änderungen vorzunehmen. Für Teams, die eine große OpenDrive-Bibliothek zu einem neuen Anbieter migrieren, ist der Dry Run unverzichtbar, um unerwartete Dateilöschungen zu erkennen, bevor sie passieren.

Die Ausgabe des Testlaufs wird im Tab „Transferring“ und im Tab „Log“ angezeigt und gibt Ihnen ein vollständiges Bild des geplanten Vorgangs. Sobald Sie zufrieden sind, starten Sie die eigentliche Synchronisation mit einem einzigen Klick.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zu **Remote-Tab → Neuer Remote**, wählen Sie OpenDrive und schließen Sie die OAuth-Anmeldung ab.
3. Durchsuchen und verwalten Sie Ihre OpenDrive-Dateien im Zwei-Panel-Explorer.
4. Nutzen Sie den Job-Manager, um ein geplantes Backup an Ihr bevorzugtes Ziel zu erstellen.

RcloneView macht OpenDrive zu einem vollwertigen Bestandteil Ihres Cloud-Workflows — neben Google Drive, S3 und allen anderen genutzten Anbietern.

---

**Weiterführende Anleitungen:**

- [OpenDrive-Dateien mit RcloneView auf AWS S3 sichern](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Mehrere Cloud-Konten mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
