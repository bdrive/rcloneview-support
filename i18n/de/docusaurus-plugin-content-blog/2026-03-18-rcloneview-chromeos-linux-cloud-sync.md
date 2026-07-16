---
slug: rcloneview-chromeos-linux-cloud-sync
title: "RcloneView unter ChromeOS ausführen — Cloud-Synchronisation auf Ihrem Chromebook via Linux"
authors:
  - tayson
description: "ChromeOS unterstützt Linux-Apps. Führen Sie RcloneView auf Ihrem Chromebook aus, um Cloud-Speicher über Google Drive hinaus zu verwalten — Synchronisation mit S3, OneDrive, Dropbox und über 70 Anbietern."
keywords:
  - chromeos cloud sync
  - chromebook cloud storage
  - rcloneview chromebook
  - chromeos rclone
  - chromebook file manager
  - chromeos linux apps
  - chromebook multi cloud
  - chromeos s3 sync
  - chromebook onedrive
  - chromeos cloud management
tags:
  - linux
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter ChromeOS ausführen — Cloud-Synchronisation auf Ihrem Chromebook via Linux

> Chromebooks sind großartig für Google Drive. Aber wie sieht es mit OneDrive, S3, Dropbox oder Ihrem NAS aus? Die Linux-Unterstützung von ChromeOS ermöglicht es Ihnen, RcloneView für vollständiges Multi-Cloud-Management auf Ihrem Chromebook auszuführen.

Chromebooks sind auf Google Drive ausgerichtet, aber viele Nutzer benötigen Zugriff auf andere Cloud-Anbieter. Studierende haben möglicherweise OneDrive von ihrer Schule, Berufstätige benötigen S3-Zugriff, und wer von einer anderen Plattform wechselt, hat Dateien an anderen Orten. Die Linux-Umgebung (Crostini) von ChromeOS ermöglicht es Ihnen, RcloneView zu installieren und alle Ihre Cloud-Konten von Ihrem Chromebook aus zu verwalten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linux unter ChromeOS aktivieren

ChromeOS enthält eine integrierte Linux-Umgebung (Crostini). Aktivieren Sie sie unter Einstellungen → Erweitert → Für Entwickler → Linux-Entwicklungsumgebung.

Sobald diese aktiviert ist, verfügen Sie über eine vollständige Debian-basierte Linux-Umgebung, in der RcloneView nativ läuft.

## RcloneView installieren

Installieren Sie RcloneView mit der Standard-Linux-Installationsmethode. Der Linux-Container Ihres Chromebooks verfügt über ein eigenes Dateisystem mit Zugriff auf den ChromeOS-Downloads-Ordner.

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView on ChromeOS" class="img-large img-center" />

## Was Sie tun können

### Alle Clouds an einem Ort verwalten

Durchsuchen Sie Google Drive, OneDrive, S3, Dropbox und über 70 Anbieter in einer einzigen Oberfläche:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-cloud on Chromebook" class="img-large img-center" />

### Übertragung zwischen Anbietern

Verschieben Sie Dateien zwischen zwei beliebigen Cloud-Konten, ohne sie lokal herunterzuladen — auf Chromebooks mit begrenztem lokalem Speicher unverzichtbar.

### Nicht-Google-Clouds sichern

Planen Sie Backups von OneDrive oder Dropbox zu Google Drive oder S3:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule backup on Chromebook" class="img-large img-center" />

### Cloud-Speicher einbinden

Binden Sie einen Remote-Speicher als lokales Laufwerk ein, das über den ChromeOS-Dateimanager zugänglich ist.

## ChromeOS-spezifische Tipps

- **Speicherplatz ist begrenzt** — Chromebooks haben kleine SSDs; nutzen Sie Cloud-zu-Cloud-Übertragungen, um den lokalen Speicher nicht zu füllen
- **Linux-Container teilt sich Downloads** — Dateien im ChromeOS-Downloads-Ordner sind von Linux aus zugänglich
- **Ausreichend Speicherplatz zuweisen** dem Linux-Container für das Caching
- **Linux aktuell halten** — führen Sie regelmäßig `sudo apt update && sudo apt upgrade` aus

## Erste Schritte

1. **Linux aktivieren** in den ChromeOS-Einstellungen.
2. **RcloneView installieren** mit der Linux-Installationsanleitung.
3. **Ihre Cloud-Konten hinzufügen**.
4. **Verwalten, synchronisieren und übertragen** — alles von Ihrem Chromebook aus.

Ihr Chromebook ist gerade zu einer Multi-Cloud-Workstation geworden.

---

**Weiterführende Anleitungen:**

- [RcloneView unter Ubuntu/Debian installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView unter ARM Linux](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [RcloneView unter WSL](https://rcloneview.com/support/blog/rcloneview-wsl-windows-subsystem-linux)

<CloudSupportGrid />
