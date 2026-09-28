---
slug: rcloneview-void-linux-cloud-sync
title: "RcloneView unter Void Linux — Cloud-Speicher synchronisieren und sichern"
authors:
  - steve
description: "Installieren und betreiben Sie RcloneView unter Void Linux für Multi-Cloud-Dateiverwaltung, Mounting und Synchronisation mit dem AppImage-Build."
keywords:
  - RcloneView Void Linux
  - void linux cloud-speicher
  - void linux appimage
  - rclone gui void linux
  - cloud-speicher unter void linux einbinden
  - void linux backup-tool
  - xbps rclone gui
  - void linux runit cloud-synchronisation
  - void linux dateimanager cloud
  - plattformübergreifende cloud-gui linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter Void Linux — Cloud-Speicher synchronisieren und sichern

> Betreiben Sie einen vollwertigen grafischen Multi-Cloud-Manager unter Void Linux, ohne auf ein XBPS-Paket warten zu müssen.

Die Rolling-Release- und unabhängige Paketbasis von Void Linux (XBPS, runit) bedeutet, dass viele GUI-Anwendungen spät oder gar nicht paketiert werden. RcloneView ist nicht in den XBPS-Repositories, aber da es als Linux-.AppImage, .deb und .rpm über seine eigene Download-Seite bereitgestellt wird, können Void-Nutzer es direkt ausführen, ohne einen distributionsspezifischen Build zu benötigen. Eine Desktopumgebung mit X11 oder Wayland ist erforderlich, da RcloneView eine native GUI-Anwendung und kein Headless-Dienst ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView unter Void installieren

Der zuverlässigste Weg unter Void ist das .AppImage, da es seine eigene Laufzeitumgebung mitbringt und XBPS-Paketbenennung oder Abhängigkeitskonflikte vollständig umgeht. Laden Sie die Datei `RcloneView-{version}-{arch}.AppImage` für x86_64 oder aarch64 herunter, machen Sie sie ausführbar und starten Sie sie direkt aus Ihrem Dateimanager oder Terminal. Void pflegt kein APT- oder RPM-Repository, wenn Sie also stattdessen den .deb- oder .rpm-Build bevorzugen, müssen Sie ihn manuell entpacken, statt ihn über `xbps-install` zu installieren. RcloneView wird ausschließlich über rcloneview.com vertrieben — es gibt kein AUR-, Flatpak- oder Snap-Paket als Alternative.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

Stellen Sie vor dem Start sicher, dass GTK+3 sowie entweder `libayatana-appindicator3-1` oder `libappindicator3-1` für die Unterstützung des System-Trays vorhanden sind — die minimale Basis von Void installiert diese nicht standardmäßig, wie es manche desktoporientierten Distributionen tun.

## Remotes und Mounts einrichten

Sobald RcloneView läuft, fügen Sie Ihre Cloud-Remotes genauso hinzu wie auf jeder anderen Plattform: OAuth-Login für Dienste wie Google Drive oder Dropbox, Eingabe von Zugangsdaten für S3-kompatible oder SFTP-Endpunkte. Das Mounten erfolgt über die nfsmount-Methode des eingebetteten rclone unter Linux, was FUSE erfordert — installieren Sie `fuse3` über XBPS, falls es noch nicht vorhanden ist, da minimale Void-Installationen es häufig auslassen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView verbindet sich mit über 90 Anbietern und bindet sowie synchronisiert sie alle aus demselben Fenster heraus, unter Windows, macOS und Linux gleichermaßen — nützlich, wenn Sie Ihre Arbeit zwischen einer Void-Linux-Workstation und anderen Rechnern aufteilen.

## Backups mit Blick auf runit planen

RcloneView kann nicht als systemd-Dienst laufen, und Void verwendet überhaupt kein systemd — es läuft mit runit. Das spielt hier keine Rolle, da der eigene Job Manager von RcloneView die Planung intern übernimmt, statt sich auf das Init-System zu verlassen. Richten Sie über den Crontab-artigen Scheduler (eine PLUS-Funktion) einen geplanten Synchronisierungsjob ein, damit Backups nach einem Zeitplan laufen, während die App im System-Tray geöffnet bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

Wenn Sie unter Void einen echten Hintergrunddienst ganz ohne GUI wünschen, ist das eine Aufgabe für `rclone rcd` direkt, nicht für RcloneView — die App selbst benötigt zum Ausführen immer einen Display-Server.

## Erste Schritte

1. **Laden Sie das AppImage herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) und machen Sie es ausführbar.
2. Installieren Sie `fuse3` und die AppIndicator-Bibliothek über XBPS, falls Mount- oder Tray-Funktionen nicht sofort funktionieren.
3. Fügen Sie Ihre Cloud-Remotes hinzu und bestätigen Sie den Zugriff im Explorer-Panel.
4. Erstellen Sie einen Synchronisierungs- oder Backup-Job und planen Sie ihn bei Bedarf für die automatische Ausführung.

Der Minimalismus von Void muss nicht bedeuten, dass Sie Cloud-Speicher manuell verwalten müssen — RcloneView bringt denselben GUI-Workflow auch hierher, wie überall sonst.

---

**Verwandte Anleitungen:**

- [RcloneView unter Gentoo Linux — Cloud-Speicher synchronisieren und sichern](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [RcloneView unter Arch Linux — Cloud-Speicher synchronisieren und sichern](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [RcloneView unter Ubuntu und Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
