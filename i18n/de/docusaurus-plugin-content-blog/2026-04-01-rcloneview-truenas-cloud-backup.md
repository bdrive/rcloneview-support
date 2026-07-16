---
slug: rcloneview-truenas-cloud-backup
title: "RcloneView mit TrueNAS für Cloud-Backup und Synchronisation nutzen"
authors:
  - tayson
description: "Verbinde RcloneView mit TrueNAS (CORE oder SCALE) für Cloud-Backup, Synchronisation und Multi-Cloud-Management. Ersetze oder erweitere TrueNAS Cloud-Sync-Aufgaben mit dem vollen Funktionsumfang von rclone."
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - nas
  - cloud-backup
  - platform
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView mit TrueNAS für Cloud-Backup und Synchronisation nutzen

> TrueNAS verfügt über integrierte Cloud-Sync-Aufgaben, die auf rclone basieren – aber die integrierte Oberfläche ist eingeschränkt. Wenn RcloneView parallel zu TrueNAS läuft, erhältst du Zugriff auf den vollen Funktionsumfang von rclone: Multi-Cloud-Management, Crypt-Remotes, Bisync, Filterregeln, Ordnervergleich und mehr.

TrueNAS CORE und SCALE nutzen beide intern rclone für ihre Cloud-Sync-Funktion. Doch die Web-Oberfläche stellt nur einen Bruchteil der Möglichkeiten von rclone bereit – eingeschränkte Anbieterauswahl, keine Verschlüsselungsebene, kein Bisync und keine Cross-Cloud-Jobs. Indem du RcloneView auf TrueNAS betreibst (über Docker, eine VM oder eine entfernte Workstation), erhältst du Zugriff auf den vollständigen Funktionsumfang von rclone, während TrueNAS weiterhin deine primäre Speicherplattform bleibt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView: Zwei Integrationsansätze

### Ansatz 1 — RcloneView in einem TrueNAS-SCALE-Container (Docker)

TrueNAS SCALE unterstützt Docker-Container nativ über seine Apps-Oberfläche. Du kannst RcloneView als dauerhaften Container betreiben:

1. Navigiere in TrueNAS SCALE zu **Apps → Available Applications** oder nutze die Option **Custom App**.
2. Stelle das Docker-Image von RcloneView bereit, mit einem Volume-Mount, der auf deine TrueNAS-Dataset-Pfade verweist.
3. Rufe die Weboberfläche von RcloneView über deinen Browser auf.

So bleibt RcloneView direkt auf dem NAS, sodass Backup-Jobs ohne separaten Rechner laufen.

### Ansatz 2 — RcloneView auf einer Workstation, NAS als Remote

Betreibe RcloneView auf deinem Desktop und füge deine TrueNAS-Datasets als Remote hinzu:

- **SMB**: Füge eine Windows-Freigabe als lokales oder SMB-Remote in RcloneView hinzu.
- **SFTP**: Aktiviere SFTP auf TrueNAS und füge es als SFTP-Remote in RcloneView hinzu.
- **NFS**: Binde deine NAS-NFS-Freigabe lokal ein (mount) und behandle sie in RcloneView als lokalen Pfad.

Dieser Ansatz ist einfacher einzurichten und funktioniert ohne Docker-Kenntnisse.

## SFTP von TrueNAS einrichten

Die zuverlässigste Methode für den Remote-Zugriff:

### Schritt 1 — SSH auf TrueNAS aktivieren

In TrueNAS: **System → Services → SSH → Enable**. Erstelle einen dedizierten Benutzer mit auf deine Backup-Datasets beschränktem Zugriff.

### Schritt 2 — TrueNAS als SFTP-Remote in RcloneView hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. Klicke in RcloneView auf **New Remote**.
2. Wähle **SFTP**.
3. Gib deine TrueNAS-IP, den SSH-Port (Standard 22), den Benutzernamen sowie SSH-Schlüssel oder Passwort ein.
4. Setze den Root-Pfad auf dein Dataset (z. B. `/mnt/tank/Backups`).
5. Speichern.

RcloneView zeigt deine TrueNAS-Datasets nun als navigierbares Remote an.

## Cloud-Backup-Jobs für TrueNAS

Sobald TrueNAS als SFTP-Remote zugänglich ist, kannst du umfassende Backup-Jobs erstellen:

### TrueNAS-Datasets nach S3 sichern

1. Erstelle einen neuen **Sync**-Job in RcloneView.
2. Quelle: `truenas-sftp:/mnt/tank/Photos/`
3. Ziel: `s3-backup:truenas-photos-backup/`
4. Aktiviere die Prüfsummenverifizierung für die Datenintegrität.
5. Plane eine nächtliche Ausführung.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### Verschlüsseltes Backup in die Cloud

Für sensible Datasets fügst du eine Crypt-Remote-Ebene hinzu:

1. Erstelle ein Crypt-Remote, das dein S3-Remote umschließt.
2. Setze das Crypt-Remote statt des reinen S3-Remotes als Ziel.
3. Dateien werden clientseitig verschlüsselt, bevor sie dein TrueNAS verlassen.

### Multi-Cloud-Backup

Nutze RcloneView, um dasselbe TrueNAS-Dataset gleichzeitig auf zwei Cloud-Anbieter zu sichern:

- Job 1: `truenas-sftp:/mnt/tank/` → `s3-primary:` (täglich)
- Job 2: `truenas-sftp:/mnt/tank/` → `b2-secondary:` (wöchentlich)

## Vorteile gegenüber dem integrierten TrueNAS Cloud Sync

| Funktion | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| Anbieterunterstützung | ~20 Anbieter | 70+ Anbieter |
| Crypt-/Verschlüsselungsebene | ✗ | ✓ |
| Bisync (bidirektional) | ✗ | ✓ |
| Filterregeln | Eingeschränkt | Vollständige rclone-Filterunterstützung |
| Ordnervergleich | ✗ | ✓ |
| Cross-Cloud (Cloud A → Cloud B) | ✗ | ✓ |
| Job-Planung | ✓ | ✓ |
| Echtzeitüberwachung | Eingeschränkt | ✓ |

## Überwachung und Verifizierung

Nutze die **Ordnervergleich**-Funktion von RcloneView, um regelmäßig zu prüfen, dass dein TrueNAS-Backup mit dem Cloud-Speicher übereinstimmt:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

Vergleiche die TrueNAS-Quelle mit dem Cloud-Ziel – fehlende oder geänderte Dateien werden sofort angezeigt. Plane einen monatlichen Verifizierungslauf als Prüfung der Datenintegrität ein.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **SSH auf TrueNAS aktivieren** und es als SFTP-Remote in RcloneView hinzufügen.
3. **Backup-Jobs erstellen** von TrueNAS-Datasets zu deinem Cloud-Anbieter/deinen Cloud-Anbietern.
4. **Planen und verschlüsseln** – richte nächtliche Backup-Jobs ein und füge für sensible Datasets ein Crypt-Remote hinzu.

TrueNAS ist hervorragende NAS-Software. Kombiniere sie mit RcloneView, und du erhältst eine vollständige, flexible Cloud-Backup-Strategie, die weit über das hinausgeht, was die integrierten Tools von TrueNAS bieten.

---

**Weiterführende Anleitungen:**

- [RcloneView auf Synology NAS ausführen](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [RcloneView in Docker ausführen](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [NAS auf mehrere Clouds sichern](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
