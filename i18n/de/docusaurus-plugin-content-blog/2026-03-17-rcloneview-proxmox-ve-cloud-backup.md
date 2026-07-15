---
slug: rcloneview-proxmox-ve-cloud-backup
title: "RcloneView auf Proxmox VE ausführen — Cloud-Backup für Ihre virtuellen Maschinen und Container"
authors:
  - tayson
description: "Proxmox VE hostet Ihre VMs und Container. Fügen Sie RcloneView hinzu, um VM-Daten, ISO-Bibliotheken und Konfigurationen für die Offsite-Notfallwiederherstellung in Cloud-Speicher zu sichern."
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Proxmox VE ausführen — Cloud-Backup für Ihre virtuellen Maschinen und Container

> Proxmox VE sichert VMs lokal. Aber lokale Backups überstehen keinen Hardwareausfall, Brand oder Diebstahl. Fügen Sie RcloneView hinzu, um Ihre VM-Backups für eine vollständige Notfallwiederherstellung in Cloud-Speicher zu übertragen.

Proxmox VE ist einer der beliebtesten Open-Source-Hypervisoren und betreibt virtuelle Maschinen und LXC-Container für Homelabs und Produktionsumgebungen. Der integrierte Proxmox Backup Server verwaltet lokale Backups hervorragend, aber ein rein lokales Backup ist unvollständig. RcloneView fügt die Cloud-Ebene hinzu — es überträgt VM-Backups, ISO-Bibliotheken und Konfigurationsexporte zu S3, B2, Google Drive oder jedem anderen Cloud-Anbieter.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Cloud-Backup für Proxmox?

Die lokalen Backups von Proxmox schützen vor VM-Beschädigung und versehentlichem Löschen. Cloud-Backups schützen vor:

- **Hardwareausfall** — der gesamte Server fällt aus
- **Ransomware** — lokale Backups werden zusammen mit den VMs verschlüsselt
- **Physische Katastrophen** — Brand, Überflutung, Diebstahl
- **Standortausfall** — Rechenzentrum oder Homelab ist nicht mehr erreichbar

## Bereitstellungsoptionen

### Docker-Container auf Proxmox

Führen Sie RcloneView als Docker-Container innerhalb eines schlanken LXC-Containers auf Ihrem Proxmox-Host aus.

### Dedizierter LXC-Container

Erstellen Sie einen minimalen LXC-Container speziell für RcloneView mit Zugriff auf Ihren Backup-Speicher.

## Wichtige Workflows

### VM-Backups mit der Cloud synchronisieren

Richten Sie RcloneView auf Ihren Proxmox-Backup-Speicher aus und synchronisieren Sie mit der Cloud:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### Nächtliches Offsite-Backup planen

Nachdem Proxmox lokale Backups erstellt hat, überträgt RcloneView sie in die Cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### ISO-Bibliothek sichern

Ihre ISO-Sammlung und Container-Vorlagen lassen sich nur schwer neu erstellen. Sichern Sie sie in Cloud-Speicher.

### Backup-Integrität prüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### Sensible VM-Daten verschlüsseln

VM-Backups können sensible Daten enthalten. Verwenden Sie Crypt-Remotes, um sie vor dem Hochladen zu verschlüsseln.

## Empfohlene Strategie

| Datentyp | Cloud-Tier | Aufbewahrung |
|-----------|-----------|-----------|
| VM-Backups (aktuell) | S3 / B2 | Letzte 7 Tage |
| VM-Backups (Archiv) | S3 Glacier | Letzte 90 Tage |
| ISO-Bibliothek | B2 | Dauerhaft |
| Proxmox-Konfiguration | Google Drive | Letzte 30 Tage |

## Erste Schritte

1. **RcloneView bereitstellen** als Container auf Proxmox.
2. **Cloud-Konten hinzufügen** für die Backup-Ziele.
3. **Synchronisationsjobs erstellen**, die auf Ihren Backup-Speicher zeigen.
4. **Nach den lokalen Backups planen**, sodass sie danach abgeschlossen sind.
5. **Regelmäßig überprüfen** mit dem Ordnervergleich.

Lokale Backups bewahren Sie vor Fehlern. Cloud-Backups bewahren Sie vor Katastrophen.

---

**Verwandte Anleitungen:**

- [RcloneView in Docker ausführen](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Schutz vor Ransomware](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
