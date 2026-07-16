---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "RcloneView auf Zorin OS — Cloud-Speicher-Synchronisation und Backup"
authors:
  - tayson
description: "Installieren und nutzen Sie RcloneView auf Zorin OS für die Synchronisation und das Backup von Cloud-Speicher. GUI-basierte Cloud-Verwaltung für Google Drive, OneDrive, S3 und über 90 Dienste auf Zorin OS."
keywords:
  - RcloneView Zorin OS
  - Zorin OS Cloud-Speicher
  - Zorin OS Cloud-Synchronisation
  - Zorin OS Cloud-Backup
  - RcloneView Linux Debian
  - Zorin OS Dateimanager Cloud
  - RcloneView auf Zorin installieren
  - Linux Cloud-Speicher GUI
  - Zorin OS Google Drive
  - Ubuntu-basierte Cloud-Synchronisation
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Zorin OS — Cloud-Speicher-Synchronisation und Backup

> Installieren Sie RcloneView auf Zorin OS und verwalten Sie über 90 Cloud-Speicher-Dienste über eine GUI — synchronisieren Sie Google Drive, OneDrive, Amazon S3 und mehr auf Ihrem Zorin-OS-Desktop.

Zorin OS ist eine auf Ubuntu basierende Linux-Distribution mit einer vertrauten, polierten Desktop-Oberfläche — besonders beliebt bei Nutzern, die von Windows oder macOS wechseln. Seine Ubuntu/Debian-Basis sorgt dafür, dass es nahtlos mit `.deb`-Paketen funktioniert, was die Installation von RcloneView unkompliziert macht. RcloneView ist eine mit Flutter entwickelte GUI-Desktopanwendung, die einen Display-Server (X11 oder Wayland) sowie eine laufende Desktop-Umgebung benötigt — der GNOME-basierte Desktop von Zorin OS erfüllt diese Anforderungen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView auf Zorin OS installieren

RcloneView wird als Direct-Download über [rcloneview.com](https://rcloneview.com/src/download.html) bereitgestellt. Es gibt kein apt-Repository und kein Snap-Paket — versuchen Sie nicht, `apt install rcloneview` oder `snap install rcloneview` auszuführen, da beides nicht existiert. Laden Sie das `.deb`-Paket für Ihre Architektur von der offiziellen Download-Seite herunter.

**Das .deb-Paket installieren:**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

Falls `dpkg` fehlende Abhängigkeiten meldet, beheben Sie dies mit:

```bash
sudo apt install -f
```

Dadurch werden fehlende GTK- oder Systembibliotheken auf Zorin OS (das das apt-Repository von Ubuntu übernimmt) automatisch installiert.

Alternativ können Sie das `.AppImage` für eine portable Installation verwenden, die keine Systemintegration erfordert:

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Erforderliche Bibliotheken auf Zorin OS

Zorin OS wird standardmäßig mit GTK+ 3.0 und X11/Wayland als Teil seiner GNOME-Desktop-Installation ausgeliefert. Für die Unterstützung des System-Trays installieren Sie die AppIndicator-Bibliothek, falls diese noch nicht vorhanden ist:

```bash
sudo apt install libayatana-appindicator3-1
```

Für das Einbinden von Cloud-Laufwerken (Virtual-Drive-Funktion) installieren Sie FUSE3:

```bash
sudo apt install fuse3
```

Starten Sie RcloneView nach der Installation über das Anwendungsmenü oder das Terminal. Die Anwendung integriert sich in den Desktop von Zorin OS, einschließlich Unterstützung für das Symbol im System-Tray und native Desktop-Benachrichtigungen bei abgeschlossenen Aufgaben.

## Cloud-Speicher verbinden

RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert — eine separate rclone-Installation ist nicht erforderlich. Fügen Sie Ihre Cloud-Dienste über den Reiter Remote hinzu: Klicken Sie auf New Remote und wählen Sie Ihren Anbieter aus. Bei OAuth-basierten Diensten wie Google Drive, OneDrive und Dropbox öffnet sich ein Browserfenster zur Kontoauthentifizierung. Bei S3-kompatiblen Diensten geben Sie Access Key, Secret Key und Endpoint-URL ein.

Der GNOME-basierte Desktop von Zorin OS verarbeitet die OAuth-Browser-Weiterleitung reibungslos — das Authentifizierungsfenster öffnet sich in Ihrem Standardbrowser, und die Zugangsdaten werden automatisch an RcloneView zurückgegeben.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## Cloud-Speicher synchronisieren und einbinden

Sobald die Remotes konfiguriert sind, verwenden Sie den Sync-Assistenten, um Backup- oder Migrationsaufgaben zu erstellen. Wählen Sie Quell- und Ziel-Remotes aus, konfigurieren Sie Übertragungsoptionen und Filter, und planen Sie optional wiederkehrende Ausführungen (PLUS-Lizenz). RcloneView läuft auf Zorin OS als GUI-Anwendung — es benötigt eine aktive Desktop-Sitzung und einen Display-Server. Es kann nicht direkt als systemd-Hintergrunddienst konfiguriert werden; für unbeaufsichtigte, geplante Aufgaben ohne Benutzersitzung verwenden Sie rclones eigenes `rclone rcd` mit einem systemd-Dienst und verbinden Sie sich von RcloneView aus damit.

Um Cloud-Speicher als lokales Verzeichnis einzubinden, verwenden Sie den Mount Manager im Reiter Remote. Geben Sie unter Zorin OS einen Mount-Point-Pfad an und klicken Sie auf Save and Mount. Der eingebundene Ordner erscheint in Nautilus (dem Standard-Dateimanager von Zorin OS) und kann wie jedes lokale Verzeichnis genutzt werden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) — wählen Sie das Linux-`.deb`-Paket für x86_64.
2. Installieren Sie es mit `sudo dpkg -i rclone_view-*-linux-x86_64.deb` und führen Sie `sudo apt install -f` aus, falls Abhängigkeiten fehlen.
3. Installieren Sie bei Bedarf `fuse3` und `libayatana-appindicator3-1` für Mount- und Tray-Unterstützung.
4. Fügen Sie Ihre Cloud-Remotes hinzu und starten Sie die Synchronisation aus der vertrauten Zorin-OS-Desktop-Umgebung heraus.

Die Ubuntu-Kompatibilität von Zorin OS macht die Installation von RcloneView unkompliziert und bietet Nutzern ein GUI-gesteuertes Tool zur Cloud-Speicher-Verwaltung, das sich nahtlos in den polierten Desktop-Workflow von Zorin OS einfügt.

---

**Verwandte Anleitungen:**

- [RcloneView auf Ubuntu und Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView auf Pop!_OS Linux — Cloud-Synchronisation](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [RcloneView auf Fedora, RHEL und CentOS Linux](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
