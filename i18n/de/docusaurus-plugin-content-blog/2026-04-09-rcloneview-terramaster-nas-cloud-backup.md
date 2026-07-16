---
slug: rcloneview-terramaster-nas-cloud-backup
title: "RcloneView mit TerraMaster NAS für Cloud-Backup und Synchronisation nutzen"
authors:
  - tayson
description: "Richten Sie RcloneView mit einem TerraMaster NAS ein, um NAS-Daten mit Cloud-Speicher zu synchronisieren und zu sichern. Verbinden Sie sich über SFTP oder SMB und automatisieren Sie Backups zu S3, B2 oder Google Drive."
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - RcloneView
  - nas
  - platform
  - cloud-backup
  - backup
  - guide
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView mit TerraMaster NAS für Cloud-Backup und Synchronisation nutzen

> TerraMaster-NAS-Geräte bieten günstigen Netzwerkspeicher, aber ihre integrierten Cloud-Backup-Optionen sind begrenzt — **RcloneView** erweitert Ihr TerraMaster um Multi-Cloud-Backup, Synchronisation und Dateiverwaltung über eine visuelle Benutzeroberfläche.

TerraMaster stellt beliebte NAS-Geräte her, die mit TOS (TerraMaster Operating System) laufen. Während TOS grundlegende Cloud-Synchronisationsfunktionen für einige Anbieter bietet, unterstützt es nicht die vollständige Bandbreite an Cloud-Speicherdiensten, die Unternehmen und Power-User benötigen. RcloneView verbindet sich über SFTP oder SMB mit Ihrem TerraMaster NAS und stellt eine Brücke zu über 70 Cloud-Anbietern her — dies ermöglicht automatisierte Backups, Cloud-zu-NAS-Synchronisation und cloudübergreifende Dateiverwaltung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Ihrem TerraMaster ein Cloud-Backup hinzufügen

Ein NAS bietet schnellen lokalen Speicher und RAID-Redundanz, schützt jedoch nicht vor:

- **Standortweiten Katastrophen**: Feuer, Überschwemmung, Diebstahl oder Stromstöße können das NAS und alle seine Laufwerke gleichzeitig zerstören. RAID schützt vor Laufwerksausfall, nicht vor Standortverlust.
- **Ransomware**: Erreicht Ransomware Ihr Netzwerk, kann sie NAS-Freigaben verschlüsseln. Cloud-Backups (insbesondere zu unveränderlichem Speicher) bieten einen Wiederherstellungspunkt.
- **Hardwarefehlern jenseits von RAID**: Ausfälle der Controller-Platine, Schäden am Netzteil oder Firmware-Korruption können das gesamte NAS unabhängig vom RAID-Level unzugänglich machen.

Cloud-Backup bietet geografische Redundanz, die ein lokales NAS nicht bieten kann. RcloneView automatisiert dieses Backup, während Ihr primärer Arbeitsablauf weiterhin auf dem schnellen lokalen NAS läuft.

## RcloneView mit Ihrem TerraMaster verbinden

RcloneView läuft auf Ihrem Desktop oder einem separaten Rechner (nicht auf dem TerraMaster selbst) und verbindet sich über das Netzwerk mit dem NAS. Zwei Verbindungsmethoden stehen zur Verfügung:

### SFTP-Verbindung

Aktivieren Sie SSH auf Ihrem TerraMaster (TOS Control Panel > Services > SSH). Fügen Sie dann im Remote-Manager von RcloneView einen SFTP-Remote hinzu:

- Host: Die IP-Adresse Ihres TerraMaster (z. B. `192.168.1.100`)
- Port: 22 (Standard-SSH-Port)
- Benutzername: Ihr TOS-Admin-Benutzername
- Passwort oder SSH-Schlüssel: Ihre TOS-Anmeldedaten

SFTP bietet verschlüsselte Dateiübertragungen und ist die empfohlene Methode für den Zugriff auf NAS-Daten von RcloneView aus.

### SMB-Verbindung

Wenn Ihre TerraMaster-Freigaben über SMB (Windows-Dateifreigabe) zugänglich sind, fügen Sie in RcloneView einen SMB-Remote hinzu. Dies nutzt das Standard-Windows-Netzwerkpfadformat und ist praktisch, wenn Sie bereits SMB-Freigaben konfiguriert haben.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## NAS-Daten in Cloud-Speicher sichern

Sobald die Verbindung besteht, richten Sie einen Backup-Job von Ihrem TerraMaster zu einem Cloud-Ziel ein:

1. Öffnen Sie den TerraMaster-SFTP-Remote im linken Bereich.
2. Öffnen Sie Ihr Cloud-Ziel (AWS S3, Backblaze B2, Google Drive, Wasabi) im rechten Bereich.
3. Navigieren Sie zu den Ordnern auf dem NAS, die Sie sichern möchten.
4. Erstellen Sie einen Sync-Job, der NAS-Daten in die Cloud kopiert.

Die Delta-Erkennung von RcloneView stellt sicher, dass nur Dateien übertragen werden, die sich seit dem letzten Backup geändert haben. Bei einem NAS mit Terabytes an Daten kann das erste Backup Tage dauern, aber nachfolgende tägliche Backups übertragen nur die Änderungen des Tages — typischerweise in wenigen Minuten abgeschlossen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## Ein Cloud-Backup-Ziel auswählen

Für NAS-Backups ist kostengünstiger Speicher ohne Egress-Gebühren ideal:

- **Backblaze B2**: 6 $/TB/Monat, kostenloser Egress durch die Cloudflare-Partnerschaft. Einfache Preisgestaltung, gut für unkomplizierte Backups.
- **Wasabi**: 6,99 $/TB/Monat, keine Egress-Gebühren. Es gilt eine Mindestspeicherdauer von 90 Tagen.
- **AWS S3 Glacier Deep Archive**: 0,99 $/TB/Monat für Archivdaten. Der Abruf dauert Stunden und verursacht Abrufgebühren pro GB, aber die Speicherkosten sind die niedrigsten verfügbaren.
- **Google Drive**: Praktisch, wenn Ihr Team bereits Google Workspace nutzt. Die Speicherkosten sind höher, aber die Integration ist nahtlos.

Für die meisten TerraMaster-Nutzer bietet Backblaze B2 die beste Balance aus Kosten, Einfachheit und Abrufgeschwindigkeit.

## Automatisierte Backups planen

Konfigurieren Sie den Scheduler von RcloneView, um NAS-Backups automatisch auszuführen:

- **Tägliches inkrementelles Backup**: Synchronisiert geänderte Dateien jede Nacht vom NAS in die Cloud. Minimaler Bandbreitenverbrauch nach der ersten Erstbefüllung.
- **Wöchentliche vollständige Verifizierung**: Führen Sie wöchentlich einen Vergleichsvorgang durch, um zu überprüfen, dass alle NAS-Dateien mit dem Cloud-Backup übereinstimmen. So werden Abweichungen durch unterbrochene Übertragungen oder stille Datenkorruption erkannt.

Legen Sie Bandbreitenbegrenzungen fest, damit der Backup-Datenverkehr Ihr Netzwerk nicht während der Geschäftszeiten belastet. Planen Sie Backups für die Nacht oder verkehrsarme Zeiten.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## Cloud-Daten mit Ihrem TerraMaster synchronisieren

Der umgekehrte Arbeitsablauf ist ebenfalls nützlich: Cloud-Daten auf Ihr NAS für lokalen Zugriff herunterziehen. Wenn Ihr Team auf Google Drive zusammenarbeitet, aber schnellen lokalen Zugriff auf Projektdateien benötigt, synchronisieren Sie die relevanten Drive-Ordner mit Ihrem TerraMaster. Bearbeiten Sie Dateien lokal mit NAS-Geschwindigkeit, und RcloneView synchronisiert Änderungen planmäßig zurück in die Cloud.

Dieser hybride Ansatz bietet Ihnen die Kollaborationsvorteile von Cloud-Speicher bei der Leistung des lokalen NAS-Zugriffs.

## NAS-Backups verschlüsseln

Für sensible Daten verwenden Sie den Crypt-Remote von RcloneView, um Dateien zu verschlüsseln, bevor sie Ihr Netzwerk verlassen. Die Verschlüsselung erfolgt auf Ihrem Desktop-Rechner (auf dem RcloneView läuft), bevor der Upload in die Cloud erfolgt. Selbst wenn der Cloud-Anbieter kompromittiert wird, bleiben Ihre NAS-Backup-Daten unlesbar.

## Überwachung und Verifizierung

Der Job-Verlauf von RcloneView protokolliert jeden Backup-Lauf mit Statistiken: übertragene Dateien, übersprungene Dateien, Gesamtbytes, verstrichene Zeit und etwaige Fehler. Überprüfen Sie den Verlauf regelmäßig, um sicherzustellen, dass Backups erfolgreich abgeschlossen werden. Nutzen Sie die Vergleichsfunktion regelmäßig, um zu überprüfen, dass das Cloud-Backup mit dem NAS-Inhalt übereinstimmt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktivieren Sie SSH auf Ihrem TerraMaster und fügen Sie es als SFTP-Remote in RcloneView hinzu.
3. Fügen Sie ein Cloud-Ziel hinzu (B2, S3, Google Drive oder Wasabi).
4. Erstellen und planen Sie einen täglichen Backup-Job vom NAS in die Cloud.
5. Überprüfen Sie Backups regelmäßig mit der Vergleichsfunktion.

Ihr TerraMaster NAS übernimmt den lokalen Speicher und die Freigabe. RcloneView fügt die Cloud-Backup-Ebene hinzu, die Ihre Daten vor standortweiten Katastrophen, Ransomware und Hardwareausfällen jenseits von RAID schützt.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Job-Verlauf](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
