---
slug: rcloneview-endeavouros-cloud-sync
title: "RcloneView unter EndeavourOS — Cloud-Speicher synchronisieren und sichern"
authors:
  - steve
description: "Betreiben Sie RcloneView unter EndeavourOS mit dem offiziellen AppImage. Mit GTK+3- und FUSE-Anforderungen, dem Einbinden von Cloud-Laufwerken und der Synchronisation von 90+ Cloud-Anbietern."
keywords:
  - RcloneView EndeavourOS
  - EndeavourOS Cloud-Synchronisation
  - EndeavourOS rclone GUI
  - Arch-basiertes Linux Cloud-Backup
  - RcloneView AppImage
  - Cloud-Laufwerk unter EndeavourOS einbinden
  - EndeavourOS Google Drive Synchronisation
  - Linux Multi-Cloud-Dateimanager
  - Rolling-Release Cloud-Backup
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter EndeavourOS — Cloud-Speicher synchronisieren und sichern

> EndeavourOS bietet eine Rolling-Arch-Basis mit fertigem Desktop, und das offizielle RcloneView-AppImage läuft darauf ganz ohne Drittanbieterpaket.

EndeavourOS-Nutzer möchten meist aktuelle Software und wenig manuelle Einrichtung. Cloud-Speicher ist dabei oft die Lücke: Für Google Drive, OneDrive und S3-Buckets gibt es hier keinen nativen Desktop-Client, und das Jonglieren mit mehreren CLI-Konfigurationen wird mühsam. RcloneView bindet 90+ Anbieter aus einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux, und bringt ein eigenes eingebettetes rclone mit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installation mit dem offiziellen AppImage

RcloneView wird ausschließlich über [rcloneview.com](https://rcloneview.com/src/download.html) verteilt. Es gibt kein AUR-Paket, ignorieren Sie also `yay`- oder `paru`-Anleitungen, die Sie anderswo finden. Für ein Arch-basiertes System ist das AppImage die naheliegende Wahl. Laden Sie den Build für Ihre Architektur (x86_64 oder aarch64) herunter, machen Sie ihn ausführbar und starten Sie ihn:

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView ist eine Flutter-Desktop-App, keine Qt-App. Sie benötigt GTK+3, eine laufende X11- oder Wayland-Sitzung und eine AppIndicator-Bibliothek für das Symbol im System Tray. Die Standard-Desktop-Editionen von EndeavourOS (KDE Plasma, Xfce, GNOME und weitere) bringen bereits einen Displayserver und in der Regel GTK+3 mit. Installieren Sie FUSE für das Einbinden (mount); empfohlen wird fuse3 (`sudo pacman -S --needed fuse3`).

<img src="/support/images/en/blog/new-remote.png" alt="Neues Cloud-Remote in RcloneView unter EndeavourOS hinzufügen" class="img-large img-center" />

Da das AppImage in sich geschlossen ist, ersetzt ein rollendes `pacman -Syu` es nicht. Automatische Updates gibt es nur unter macOS; unter Linux laden Sie zum Aktualisieren das neuere AppImage von derselben Seite herunter.

## Remotes verbinden und Laufwerke einbinden

Öffnen Sie **Remote > New Remote**. Google Drive, Dropbox, OneDrive, Box und pCloud melden sich per OAuth im Browser an. S3, Backblaze B2 und Cloudflare R2 erwarten Zugriffsschlüssel. Ihre Remotes erscheinen als Tabs im Explorer, und Sie können bis zu vier Bereiche teilen, um eine NAS-Freigabe neben einem Cloud-Bucket zu durchsuchen.

Um mit Cloud-Dateien in Dolphin oder Thunar zu arbeiten, binden Sie das Remote ein. Klicken Sie auf das Mount-Symbol in der Bereichs-Symbolleiste oder öffnen Sie den Mount Manager und legen Sie ein neues Mount an. Unter Linux wählen Sie einen lokalen Pfad wie `~/cloud/gdrive`, und der Standard-Cache-Modus `writes` deckt die meisten Bearbeitungen ab. Aktivieren Sie **Allow other** nur, wenn andere lokale Benutzer auf das Mount zugreifen müssen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Cloud-Remote aus dem RcloneView-Explorer unter Linux einbinden" class="img-large img-center" />

## Synchronisation und geplante Backups

Stellen Sie sich eine Entwickler-Workstation mit `~/Projects` und `~/Documents` vor. Erstellen Sie einen Sync-Job von der lokalen Festplatte zu Backblaze B2, fügen Sie in Step 3 einen `.git/`-Filter hinzu und führen Sie einen Dry Run aus, um genau zu sehen, was übertragen wird. Die einseitige Synchronisation verändert nur das Ziel. Die bidirektionale Synchronisation (Beta) ist noch experimentell, testen Sie sie daher zuerst mit unkritischen Ordnern.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live-Überwachung der Übertragung in RcloneView während eines Linux-Backup-Jobs" class="img-large img-center" />

Mit einer PLUS-Lizenz kommt in Step 4 eine Planung im crontab-Stil hinzu, sodass der Job jede Nacht läuft, während RcloneView im Tray liegt. RcloneView benötigt Ihre Desktop-Sitzung und kann nicht als systemd-Dienst laufen. Auf einem headless Arch-Server führen Sie dort `rclone rcd` aus und verbinden sich vom Desktop aus über den Connect Manager.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Geplanten Sync-Job in RcloneView erstellen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter und wählen Sie das Linux-AppImage für Ihre Architektur.
2. Machen Sie das AppImage ausführbar, installieren Sie `fuse3`, falls Sie Mounts brauchen, und starten Sie es aus Ihrer Desktop-Sitzung.
3. Fügen Sie Ihre Cloud-Remotes hinzu und binden Sie diejenigen ein, die Sie im Dateimanager nutzen möchten.
4. Erstellen Sie einen Sync-Job, testen Sie ihn mit Dry Run und planen Sie ihn, wenn Sie PLUS haben.

Ein Rolling-Release-Desktop und ein einziges Multi-Cloud-Fenster ergeben ein pflegeleichtes Backup-Setup.

---

**Verwandte Anleitungen:**

- [Mount-Performance mit VFS-Cache](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [FUSE-Fehler beim Rclone-Mount beheben](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — eingebettetes und externes Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
