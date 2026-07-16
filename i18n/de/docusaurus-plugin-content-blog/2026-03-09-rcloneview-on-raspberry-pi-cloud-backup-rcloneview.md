---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "RcloneView auf dem Raspberry Pi ausführen — Ein stromsparendes Cloud-Backup-Gerät bauen"
authors:
  - tayson
description: "Verwandeln Sie Ihren Raspberry Pi in ein 24/7-Cloud-Backup-Gerät. Richten Sie RcloneView auf dem Raspberry Pi für automatisierte Synchronisation zwischen lokalem Speicher und Cloud-Anbietern ein."
keywords:
  - rcloneview raspberry pi
  - raspberry pi cloud backup
  - rclone raspberry pi
  - raspberry pi nas cloud sync
  - raspberry pi cloud storage
  - diy cloud backup appliance
  - raspberry pi s3 backup
  - low power cloud sync
  - raspberry pi google drive sync
  - raspberry pi automated backup
tags:
  - RcloneView
  - raspberry-pi
  - backup
  - cloud-storage
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf dem Raspberry Pi ausführen — Ein stromsparendes Cloud-Backup-Gerät bauen

> Ein Raspberry Pi verbraucht 5–15 Watt. Das ist weniger als eine Glühbirne. Lassen Sie ihn rund um die Uhr laufen, und er wird zu einem leisen, immer aktiven Cloud-Backup-Gerät, das Ihre Daten synchronisiert, während Sie schlafen.

Der Raspberry Pi ist ein überraschend leistungsfähiger Computer für Cloud-Speicher-Aufgaben. Kombinieren Sie ihn mit einer externen USB-Festplatte und RcloneView, und Sie erhalten eine dedizierte Backup-Maschine, die lokale Dateien rund um die Uhr mit Cloud-Speicher synchronisiert (oder umgekehrt) — zu einem Bruchteil der Stromkosten eines vollständigen PCs oder NAS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Raspberry Pi für Cloud-Backup?

### Immer aktiv, geringer Stromverbrauch

| Gerät | Stromverbrauch | Jährliche Kosten (24/7) |
|--------|-----------|-------------------|
| Raspberry Pi 4 | 5–7W | ~8 $ |
| Raspberry Pi 5 | 8–15W | ~14 $ |
| Desktop-PC | 100–300W | ~150–400 $ |
| NAS (2-Bay) | 20–40W | ~30–60 $ |

Ein Raspberry Pi kostet im 24/7-Betrieb praktisch nichts.

### Leise und kompakt

Kein Lüfter (Pi 4), kein Geräusch. Stellen Sie ihn auf ein Regal und vergessen Sie ihn.

### Leistungsfähig genug

Der Raspberry Pi 4 und 5 können Folgendes bewältigen:

- Synchronisation Tausender Dateien mit Cloud-Speicher.
- Ausführung geplanter Backup-Jobs.
- Einbinden (mount) von Cloud-Speicher für lokalen Zugriff.
- Verwaltung mehrerer Cloud-Konten gleichzeitig.

## Hardware-Einrichtung

### Empfohlene Hardware

- **Raspberry Pi 4** (4 GB) oder **Raspberry Pi 5** (4–8 GB).
- **USB-3.0-Festplatte** oder SSD für lokalen Speicher.
- **MicroSD-Karte** (32 GB) für das Betriebssystem.
- **Ethernet-Verbindung** (für große Übertragungen gegenüber WLAN empfohlen).
- **Netzteil** (offizielles Pi-Netzteil empfohlen).

### Speicherarchitektur

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

Die externe Festplatte enthält Ihre lokalen Dateien. RcloneView auf dem Pi synchronisiert sie nach einem Zeitplan mit dem Cloud-Speicher.

## Installation

### 1) Raspberry Pi OS installieren

Verwenden Sie den Raspberry Pi Imager, um Raspberry Pi OS (64-Bit) auf Ihre microSD-Karte zu flashen. Die Desktop-Edition wird für die GUI von RcloneView benötigt.

### 2) RcloneView installieren

Laden Sie das ARM64-`.deb`-Paket von [rcloneview.com](https://rcloneview.com/src/download.html) herunter:

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) FUSE installieren (zum Einbinden)

```bash
sudo apt-get install fuse3
```

### 4) Externe Festplatte einbinden

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

Fügen Sie einen Eintrag in `/etc/fstab` hinzu, damit sie beim Booten automatisch eingebunden wird.

### 5) RcloneView starten

```bash
rcloneview
```

Wenn Sie headless (über VNC) arbeiten, stellen Sie sicher, dass VNC in `raspi-config` aktiviert ist.

## Cloud-Backup konfigurieren

### Ihre Cloud-Remotes hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

Fügen Sie Ihre Backup-Ziele hinzu — Google Drive, S3, Backblaze B2 oder einen der über 70 unterstützten Anbieter.

### Backup-Jobs erstellen

Richten Sie Kopierjobs von Ihrer externen Festplatte zum Cloud-Speicher ein:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### Automatisierte Backups planen

Planen Sie nächtliche Backups:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## Anwendungsfälle

### 1) Backup des Heim-Dateiservers

Schließen Sie eine USB-Festplatte mit Ihren Familienfotos, Dokumenten und Medien an. Planen Sie nächtliche Backups zu Google Drive oder Backblaze B2.

### 2) NAS-Ergänzung

Wenn Ihr NAS keine gute Cloud-Synchronisationsfunktion hat, verwenden Sie einen Pi als Brücke:

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) Sicherheitskamera-Archiv

Sichern Sie Aufnahmen einer Sicherheitskamera von einem lokalen NVR zum Cloud-Speicher für den Schutz an einem externen Standort.

### 4) Entwickler-Backup

Synchronisieren Sie Ihre Code-Repositories und Projektdateien mit Cloud-Speicher:

- Filtern Sie so, dass nur Quelldateien eingeschlossen werden (schließen Sie `node_modules`, `.git` aus).
- Planen Sie stündliche Backups.

### 5) Medienbibliotheks-Spiegel

Halten Sie einen Cloud-Spiegel Ihrer lokalen Medienbibliothek. Nutzen Sie ihn, um von Google Drive zu streamen, wenn Sie nicht zu Hause sind.

## Leistungserwartungen

Seien Sie realistisch bei der Pi-Leistung:

| Aufgabe | Raspberry Pi 4 | Raspberry Pi 5 |
|------|----------------|----------------|
| Synchronisation kleiner Dateien (Dokumente) | Gut | Sehr gut |
| Übertragung großer Dateien | Durch USB 3/Netzwerk begrenzt | Gut |
| Tausende kleine Dateien | Langsame Prüfphase | Mittelmäßig |
| Verschlüsselte Übertragungen | CPU-begrenzt | Besser (AES-Unterstützung) |
| Netzwerkgeschwindigkeit | ~300 Mbit/s (Gigabit-Ethernet) | ~1 Gbit/s |

Bei großen Übertragungen hilft Geduld. Der Pi ist nicht schnell, aber er läuft rund um die Uhr — irgendwann ist er fertig.

### Optimierungstipps

- **Parallele Übertragungen reduzieren** — 2–4 sind für den Pi 4 optimal. Der Pi 5 verträgt 4–8.
- **Ethernet verwenden** — WLAN erhöht die Latenz und verringert den Durchsatz.
- **Außerhalb der Spitzenzeiten planen** — Führen Sie intensive Jobs nachts aus.
- **SSD statt HDD** — Eine USB-SSD liest deutlich schneller als eine rotierende Festplatte.

## Überwachen und überprüfen

Verfolgen Sie Ihre Backups:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

Überprüfen Sie mit dem Ordnervergleich:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## Headless-Betrieb

Für ein wirklich einrichten-und-vergessen-Setup:

1. Konfigurieren Sie alle Jobs und Zeitpläne über VNC oder direkt.
2. Aktivieren Sie den Autostart von RcloneView (siehe die [Ubuntu/Debian-Anleitung](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)).
3. Trennen Sie Monitor und Tastatur.
4. Der Pi läuft still und führt die geplanten Jobs aus.

## Erste Schritte

1. **Besorgen Sie sich einen Raspberry Pi 4 oder 5** mit einer externen USB-Festplatte.
2. **Installieren Sie Raspberry Pi OS** (64-Bit Desktop).
3. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
4. **Fügen Sie Cloud-Remotes hinzu und erstellen Sie Backup-Jobs**.
5. **Planen und vergessen** — Ihr Pi erledigt den Rest.

Das günstigste, leiseste und effizienteste Cloud-Backup-Gerät, das Sie bauen können.

---

**Weiterführende Anleitungen:**

- [RcloneView auf Ubuntu/Debian installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
