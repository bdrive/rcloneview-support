---
slug: install-rcloneview-ubuntu-debian-linux
title: "So installieren Sie RcloneView unter Ubuntu und Debian Linux — Vollständige Einrichtungsanleitung"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Installation von RcloneView unter Ubuntu 22.04/24.04 und Debian 12. Behandelt Download, Abhängigkeiten, FUSE-Einrichtung zum Einbinden (mount) sowie die Behebung häufiger Probleme."
keywords:
  - install rcloneview linux
  - rcloneview ubuntu
  - rcloneview debian
  - rclone gui linux
  - rcloneview linux setup
  - cloud sync tool linux
  - rclone desktop linux
  - mount cloud storage linux
  - rcloneview installation guide
  - linux cloud file manager
tags:
  - linux
  - ubuntu
  - debian
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So installieren Sie RcloneView unter Ubuntu und Debian Linux — Vollständige Einrichtungsanleitung

> RcloneView läuft nativ unter Linux. Diese Anleitung führt Sie durch die Installation unter Ubuntu und Debian, einschließlich der FUSE-Einrichtung, um Cloud-Speicher als lokale Laufwerke einzubinden (mount).

Linux-Nutzer haben sich lange auf die Kommandozeile von rclone für die Verwaltung von Cloud-Speicher verlassen. RcloneView fügt rclone eine vollständige grafische Oberfläche hinzu — ein Zwei-Fenster-Dateiexplorer, visuelle Synchronisationsjobs, Zeitplanung und Einbinden (mount) mit einem Klick. So bringen Sie es unter Ubuntu und Debian zum Laufen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Systemanforderungen

- **Betriebssystem**: Ubuntu 20.04, 22.04, 24.04 oder Debian 11, 12
- **Architektur**: x86_64 (AMD64)
- **RAM**: mindestens 4 GB (8 GB empfohlen für große Übertragungen)
- **Festplatte**: 200 MB für die Installation
- **Abhängigkeiten**: FUSE 3 (zum Einbinden), Qt 6-Laufzeitbibliotheken

## Schritt 1: RcloneView herunterladen

Laden Sie das `.deb`-Paket von der offiziellen Website herunter:

Besuchen Sie [rcloneview.com/src/download.html](https://rcloneview.com/src/download.html) und laden Sie das Linux-`.deb`-Paket herunter.

## Schritt 2: Das Paket installieren

Installieren Sie es mit `dpkg`:

```bash
sudo dpkg -i rcloneview_*.deb
```

Falls Abhängigkeiten fehlen, beheben Sie diese:

```bash
sudo apt-get install -f
```

Dadurch wird RcloneView installiert und alle erforderlichen Qt-Bibliotheken werden automatisch nachgeladen.

## Schritt 3: FUSE zum Einbinden einrichten

Um Cloud-Speicher als lokale Verzeichnisse einzubinden, benötigen Sie FUSE:

```bash
sudo apt-get install fuse3
```

Überprüfen Sie, ob FUSE funktioniert:

```bash
fusermount3 --version
```

### Einbinden ohne Root-Rechte erlauben

Bearbeiten Sie die FUSE-Konfiguration:

```bash
sudo nano /etc/fuse.conf
```

Kommentieren Sie die Zeile ein:

```
user_allow_other
```

Dies erlaubt RcloneView, mit dem Flag `--allow-other` einzubinden, wodurch eingebundene Laufwerke für Ihren Benutzer zugänglich werden.

## Schritt 4: RcloneView starten

Starten Sie es über Ihr Anwendungsmenü oder das Terminal:

```bash
rcloneview
```

Beim ersten Start erkennt oder lädt RcloneView automatisch die neueste rclone-Binärdatei herunter.

## Schritt 5: Ihren ersten Remote hinzufügen

Klicken Sie auf **Add Remote** und konfigurieren Sie Ihren Cloud-Anbieter:

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Linux" class="img-large img-center" />

## Schritt 6: Cloud-Speicher einbinden

Binden Sie einen beliebigen Remote als lokales Verzeichnis ein. Greifen Sie auf Ihr Google Drive, Ihre S3-Buckets oder OneDrive zu, als wären es lokale Ordner:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud storage on Linux" class="img-large img-center" />

Eingebundene Remotes erscheinen als reguläre Verzeichnisse — durchsuchen Sie sie in Nautilus, Dolphin oder einem beliebigen Dateimanager.

## Fehlerbehebung

### „rclone not found"

RcloneView enthält rclone oder lädt es automatisch herunter. Falls es nicht gefunden wird:

```bash
which rclone
```

Falls rclone nicht installiert ist, fordert RcloneView Sie auf, es herunterzuladen. Alternativ können Sie es manuell installieren:

```bash
sudo apt-get install rclone
```

### Einbinden schlägt mit „Permission denied" fehl

Stellen Sie sicher, dass FUSE installiert ist und `user_allow_other` in `/etc/fuse.conf` aktiviert ist. Starten Sie anschließend RcloneView neu.

### Qt-Bibliotheksfehler

Wenn fehlende Qt-Bibliotheksfehler angezeigt werden:

```bash
sudo apt-get install libqt6widgets6 libqt6gui6 libqt6core6 libqt6network6
```

### AppImage-Alternative

Wenn Sie keine systemweite Installation bevorzugen, bietet RcloneView auch ein AppImage an:

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

Das AppImage bündelt alle Abhängigkeiten und läuft ohne Installation.

## Autostart beim Anmelden

Um RcloneView automatisch bei der Anmeldung zu starten, fügen Sie es dem Autostart Ihrer Desktop-Umgebung hinzu:

**GNOME (Ubuntu):**

Erstellen Sie `~/.config/autostart/rcloneview.desktop`:

```ini
[Desktop Entry]
Type=Application
Name=RcloneView
Exec=rcloneview
Hidden=false
X-GNOME-Autostart-enabled=true
```

Dies stellt sicher, dass Ihre geplanten Synchronisationsjobs und eingebundenen Laufwerke sofort nach der Anmeldung verfügbar sind.

## Was Sie jetzt tun können

Mit RcloneView unter Linux können Sie:

- **Durchsuchen** von über 70 Cloud-Anbietern in einem Zwei-Fenster-Explorer.
- **Einbinden** jeder Cloud als lokales Verzeichnis.
- **Synchronisieren** zwischen Clouds, NAS und lokalem Speicher.
- **Planen** automatisierter Backup-Jobs.
- **Vergleichen** von Ordnern vor der Synchronisation, um Konflikte zu vermeiden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Installieren** mit `dpkg -i` und `apt-get install -f`.
3. **FUSE einrichten** zum Einbinden.
4. **Remotes hinzufügen**, einbinden, synchronisieren und planen.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
