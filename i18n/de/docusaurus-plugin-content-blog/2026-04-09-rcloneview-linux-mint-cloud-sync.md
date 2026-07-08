---
slug: rcloneview-linux-mint-cloud-sync
title: "RcloneView unter Linux Mint installieren und für Cloud-Synchronisation nutzen"
authors:
  - tayson
description: "Installieren Sie RcloneView unter Linux Mint und richten Sie Cloud-Synchronisation, Backup und Dateiverwaltung ein. Schritt-für-Schritt-Anleitung für Cinnamon-, MATE- und Xfce-Editionen."
keywords:
  - rcloneview
  - linux mint cloud sync
  - rcloneview linux mint
  - linux mint cloud storage
  - linux mint google drive
  - linux mint onedrive
  - linux mint cloud backup
  - linux mint file manager cloud
  - mint rclone gui
  - linux mint dropbox alternative
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter Linux Mint installieren und für Cloud-Synchronisation nutzen

> Linux Mint ist eine der beliebtesten Desktop-Linux-Distributionen, verfügt jedoch über keine integrierte Cloud-Speicher-Anbindung, die über einfache Nemo-Dateimanager-Plugins hinausgeht — **RcloneView** schließt diese Lücke mit vollständiger Multi-Cloud-Unterstützung.

Linux Mint bringt hervorragende Desktop-Tools mit — den Nemo-Dateimanager, Timeshift für Systemsicherungen und einen ausgereiften Cinnamon- (oder MATE-/Xfce-) Desktop. Die Cloud-Speicher-Anbindung ist jedoch minimal. Es gibt keinen nativen Google-Drive-, OneDrive- oder Dropbox-Client des Systems. Zwar existieren Drittanbieter-Lösungen (Insync, rclone CLI, GNOME Online Accounts unter MATE), aber keine bietet eine umfassende Multi-Cloud-GUI. RcloneView läuft nativ auf Linux Mint über alle Editionen hinweg und verbindet sich mit über 70 Cloud-Anbietern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installation unter Linux Mint

Linux Mint basiert auf Ubuntu LTS, daher folgt die Installation demselben Ablauf wie bei Ubuntu-/Debian-Systemen.

### Methode 1: AppImage (Empfohlen)

Das AppImage ist die einfachste Installationsmethode und funktioniert auf allen Linux-Mint-Editionen (Cinnamon, MATE, Xfce):

1. Laden Sie das RcloneView-AppImage von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Machen Sie es ausführbar: Rechtsklick auf die Datei in Nemo, Eigenschaften > Berechtigungen auswählen und "Ausführen der Datei als Programm erlauben" aktivieren. Alternativ führen Sie `chmod +x RcloneView-*.AppImage` im Terminal aus.
3. Doppelklicken Sie, um es zu starten.

Das AppImage enthält alles, was RcloneView benötigt, einschließlich einer eingebetteten rclone-Binärdatei. Es werden keine Systempakete benötigt.

### Methode 2: .deb-Paket

Laden Sie das `.deb`-Paket von der RcloneView-Website herunter. Installieren Sie es per Doppelklick (öffnet die Paketverwaltung) oder über das Terminal:

```
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

Das `.deb`-Paket integriert sich in das System — es fügt RcloneView dem Anwendungsmenü hinzu und übernimmt die Zuordnung von Desktop-Dateien.

## FUSE-Einrichtung für das Einbinden (Mount)

Um Cloud-Speicher unter Linux Mint als lokale Verzeichnisse einzubinden, muss FUSE verfügbar sein. Die meisten Mint-Installationen enthalten FUSE standardmäßig. Prüfen Sie dies mit:

```
fusermount --version
```

Falls FUSE nicht installiert ist, fügen Sie es hinzu:

```
sudo apt install fuse3
```

Stellen Sie sicher, dass Ihr Benutzer Mitglied der Gruppe `fuse` ist:

```
sudo usermod -a -G fuse $USER
```

Melden Sie sich ab und wieder an, damit die Gruppenänderung wirksam wird. Danach kann RcloneView jeden Cloud-Anbieter als lokales Verzeichnis einbinden, das neben Ihren lokalen Ordnern in Nemo erscheint.

## Cloud-Speicher-Remotes hinzufügen

Starten Sie RcloneView und öffnen Sie den Remote-Manager. Fügen Sie Ihre Cloud-Konten hinzu:

- **Google Drive**: Wählen Sie Google Drive und autorisieren Sie sich über OAuth in Ihrem Standardbrowser (Firefox oder Chromium unter Mint).
- **OneDrive**: Wählen Sie Microsoft OneDrive und autorisieren Sie sich über OAuth.
- **Dropbox**: Wählen Sie Dropbox und autorisieren Sie sich über OAuth.
- **S3-kompatibel**: Geben Sie Ihren Access Key, Secret Key und Endpunkt für AWS S3, Wasabi, Backblaze B2 S3 usw. ein.

Jeder Remote erscheint im Explorer-Dropdown. Der Standardbrowser von Linux Mint verarbeitet OAuth-Abläufe reibungslos — es ist keine besondere Konfiguration erforderlich.

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes on Linux Mint in RcloneView" class="img-large img-center" />

## Cloud-Dateien durchsuchen und verwalten

Der Zweispalten-Explorer von RcloneView ergänzt Nemo bei Cloud-Vorgängen. Während Nemo lokale Dateien hervorragend verwaltet, erweitert RcloneView diese Fähigkeit auf den Cloud-Speicher. Durchsuchen Sie Google Drive in einem Bereich und Ihr lokales Home-Verzeichnis im anderen. Ziehen Sie Dateien per Drag & Drop zwischen ihnen oder zwischen zwei verschiedenen Cloud-Anbietern.

Für Benutzer, die mit dem Dual-Pane-Modus von Nemo vertraut sind (verfügbar über eine Nemo-Erweiterung), wird sich das Layout von RcloneView vertraut anfühlen. Der Unterschied besteht darin, dass die Bereiche von RcloneView jeden Cloud-Anbieter öffnen können, nicht nur lokale und Netzwerkpfade.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing cloud storage on Linux Mint with RcloneView" class="img-large img-center" />

## Cloud-Speicher in Nemo einbinden

Nach dem Einbinden erscheinen Cloud-Speicher-Verzeichnisse in Nemo wie jeder andere Ordner. Sie können Dateien direkt aus dem eingebundenen Cloud-Speicher in Ihren Linux-Mint-Anwendungen öffnen — LibreOffice, GIMP, VLC oder jede andere App.

Binden Sie Ihr Google Drive unter `~/GoogleDrive` ein, und es erscheint in der Nemo-Seitenleiste. Aktivieren Sie das VFS-Caching für flüssige Leistung — kürzlich aufgerufene Dateien werden lokal zwischengespeichert, sodass wiederholter Zugriff sofort erfolgt. Konfigurieren Sie die Cache-Größe basierend auf Ihrem verfügbaren Speicherplatz.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting cloud storage as local drive on Linux Mint" class="img-large img-center" />

## Backups mit Systemintegration planen

Der integrierte Scheduler von RcloneView übernimmt wiederkehrende Backup-Aufträge. Konfigurieren Sie eine nächtliche Synchronisation von Ihrem Home-Verzeichnis (oder bestimmten Ordnern) zu Google Drive, Backblaze B2 oder einem anderen Cloud-Anbieter. RcloneView führt die geplanten Aufträge automatisch aus.

Für Linux-Mint-Benutzer, die eine Planung auf Systemebene bevorzugen, können Sie rclone-Befehle auch über cron oder systemd-Timer mithilfe des externen rclone-Verbindungsmodus von RcloneView auslösen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup on Linux Mint in RcloneView" class="img-large img-center" />

## Autostart beim Anmelden

So starten Sie RcloneView automatisch, wenn Sie sich bei Linux Mint anmelden:

1. Öffnen Sie **Startprogramme** über das Systemmenü.
2. Klicken Sie auf Hinzufügen und geben Sie den Pfad zum RcloneView-AppImage oder der installierten Binärdatei ein.
3. RcloneView wird mit Ihrer Desktop-Sitzung gestartet, bereit für geplante Aufträge und eingebundene Laufwerke.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) — AppImage oder .deb.
2. Installieren Sie FUSE, wenn Sie Cloud-Speicher einbinden möchten.
3. Fügen Sie Ihre Cloud-Konten im Remote-Manager hinzu.
4. Durchsuchen, synchronisieren und sichern Sie Ihre Dateien vom Linux-Mint-Desktop aus.

Linux Mint bietet eine ausgereifte Desktop-Erfahrung, und RcloneView fügt die Multi-Cloud-Dateiverwaltung hinzu, die dem System nativ fehlt. Zusammen geben sie Ihnen die vollständige Kontrolle über lokalen und Cloud-Speicher.

---

**Verwandte Anleitungen:**

- [Google Drive hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Auftragsplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
