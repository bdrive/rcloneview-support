---
slug: rcloneview-raspberry-pi-cloud-sync
title: "RcloneView auf dem Raspberry Pi — Cloud-Speicher-Synchronisation und Backup"
authors:
  - tayson
description: "Führen Sie RcloneView auf einem Raspberry Pi mit Desktop-Umgebung für ein dauerhaft aktives Cloud-Backup und Synchronisation aus. Erfahren Sie mehr über Installation, VNC-Zugriff und wichtige Voraussetzungen."
keywords:
  - RcloneView Raspberry Pi
  - Raspberry Pi Cloud-Synchronisation
  - Raspberry Pi Cloud-Backup
  - rclone Raspberry Pi GUI
  - Raspberry Pi Desktop Cloud
  - dauerhaft aktive Backup-Station
  - ARM Linux Cloud-Synchronisation
  - Raspberry Pi Speicher
tags:
  - RcloneView
  - raspberry-pi
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf dem Raspberry Pi — Cloud-Speicher-Synchronisation und Backup

> Ein Raspberry Pi mit Desktop-Umgebung ist eine ideale, dauerhaft aktive Cloud-Backup-Station — und RcloneView macht daraus einen vollwertigen Verwaltungs-Hub für Cloud-Speicher.

Der geringe Stromverbrauch, die kompakte Bauform und die Linux-Kompatibilität machen den Raspberry Pi zu einer beliebten Wahl für Heimserver- und Backup-Station-Projekte. Mit installiertem RcloneView wird ein Pi zu einem leistungsfähigen Cloud-Sync-Gerät, das Ihre Dateien kontinuierlich zu Google Drive, Backblaze B2, Amazon S3 oder einem der über 90 unterstützten Anbieter sichern kann — alles über eine grafische Oberfläche statt über die Kommandozeile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Eine Desktop-Umgebung ist erforderlich

Bevor Sie beginnen, eine wichtige Voraussetzung: **RcloneView benötigt eine GUI-/Display-Umgebung und kann nicht headless ausgeführt werden**. Wenn auf Ihrem Raspberry Pi Raspberry Pi OS Lite (die Server-/Headless-Variante) läuft, startet RcloneView nicht. Sie müssen **Raspberry Pi OS with Desktop** verwenden (oder eine Desktop-Umgebung wie LXDE oder XFCE auf einem minimalen OS installieren).

Dies ist keine Einschränkung, die spezifisch für RcloneView gilt — es ist eine Eigenschaft jeder Desktop-GUI-Anwendung. Die Raspberry Pi Desktop-Umgebung (basierend auf LXDE) funktioniert gut und ist im offiziellen Raspberry Pi OS Image enthalten. Sobald der Desktop läuft, installiert und funktioniert RcloneView genauso wie auf jedem anderen Linux-System.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Raspberry Pi desktop environment" class="img-large img-center" />

## Installation von RcloneView auf dem Raspberry Pi

Laden Sie das passende Linux-Paket von [rcloneview.com](https://rcloneview.com/src/download.html) herunter. RcloneView ist für Linux als **.AppImage**, **.deb** und **.rpm** verfügbar — es gibt kein AUR, Snap, Flatpak, Homebrew oder APT-Repository. Verwenden Sie für den Raspberry Pi den ARM64-Build:

- **.AppImage**: Machen Sie die Datei ausführbar (`chmod +x RcloneView*.AppImage`) und starten Sie sie direkt — keine Installation nötig.
- **.deb**: Installation mit `sudo dpkg -i rcloneview*.deb` auf Raspberry Pi OS (Debian-basiert).

Die eingebettete rclone-Binärdatei ist in beiden Paketen enthalten, sodass Sie rclone nicht separat installieren müssen. Nach dem ersten Start ist RcloneView im Anwendungsmenü Ihres Pi verfügbar.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a cloud sync job on Raspberry Pi with RcloneView" class="img-large img-center" />

## Fernzugriff über VNC oder X11-Forwarding

Eine der praktischsten Konfigurationen besteht darin, den Raspberry Pi in Bezug auf das physische Display headless zu betreiben, aber über **VNC** oder **X11-Forwarding** per SSH auf den Desktop zuzugreifen. Aktivieren Sie den VNC-Server auf dem Pi (über `raspi-config` > Interface Options > VNC), verbinden Sie sich von Ihrem Hauptcomputer aus mit einem VNC-Client, und Sie sehen den vollständigen Pi-Desktop, auf dem RcloneView läuft.

Für X11-Forwarding verbinden Sie sich mit `ssh -X pi@<pi-ip>` und starten RcloneView aus der SSH-Sitzung heraus — das Anwendungsfenster erscheint auf dem Display Ihres Hauptcomputers. Beide Ansätze ermöglichen es Ihnen, Ihre Pi-basierte Backup-Station von überall in Ihrem lokalen Netzwerk zu verwalten, ohne dass ein Monitor an den Pi angeschlossen sein muss.

Mit einer PLUS-Lizenz können Sie Synchronisationsaufträge so planen, dass sie automatisch ausgeführt werden, sodass der Pi seine Backup-Aufgaben unbeaufsichtigt erledigt — Sie müssen sich nur über VNC verbinden, um den Job-Verlauf zu überprüfen oder Einstellungen anzupassen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup jobs on Raspberry Pi in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Installieren Sie Raspberry Pi OS with Desktop** — die vollständige Desktop-Variante, nicht Lite.
2. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter — wählen Sie die ARM64 .deb- oder .AppImage-Datei.
3. Installieren oder starten Sie das Paket und öffnen Sie RcloneView vom Pi-Desktop aus.
4. Fügen Sie Ihre Cloud-Remotes hinzu und konfigurieren Sie Synchronisationsaufträge über den Job-Wizard.
5. Aktivieren Sie VNC für den Fernzugriff und nutzen Sie eine PLUS-Lizenz, um automatisierte Backups zu planen.

Ein Raspberry Pi mit RcloneView ist eine der kostengünstigsten Möglichkeiten, eine dedizierte, dauerhaft aktive Cloud-Backup-Station für Ihr Zuhause oder kleines Büro aufzubauen.

---

**Verwandte Anleitungen:**

- [RcloneView auf Debian Linux — Cloud-Synchronisation](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [RcloneView auf DietPi — Leichtgewichtige Cloud-Synchronisation](https://rcloneview.com/support/blog/rcloneview-dietpi-lightweight-cloud-sync)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
