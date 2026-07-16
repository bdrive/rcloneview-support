---
slug: rcloneview-nixos-linux-cloud-sync
title: "RcloneView unter NixOS für Cloud-Synchronisation und Backup ausführen"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Installation und Ausführung von RcloneView unter NixOS für Cloud-Synchronisation und Backup, einschließlich AppImage-Einrichtung, FUSE-Mounts und NixOS-spezifischer Konfigurationstipps."
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
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

# RcloneView unter NixOS für Cloud-Synchronisation und Backup ausführen

> NixOS bietet einen einzigartigen deklarativen Ansatz zur Systemkonfiguration, aber das Ausführen von GUI-Anwendungen von Drittanbietern erfordert einige zusätzliche Schritte. **RcloneView** läuft reibungslos unter NixOS, sobald AppImage-Unterstützung und FUSE eingerichtet sind, und bietet damit einen leistungsstarken visuellen Cloud-Manager auf einer der reproduzierbarsten Linux-Distributionen.

NixOS ist eine Linux-Distribution, die auf dem Nix-Paketmanager und einem vollständig deklarativen Konfigurationsmodell basiert. Anstatt Pakete imperativ zu installieren, definierst du den gesamten Systemzustand in einer Konfigurationsdatei und baust ihn neu auf. Dieser Ansatz macht Systeme reproduzierbar, rollback-freundlich und ideal für Entwickler und Poweruser, die volle Kontrolle über ihre Umgebung wünschen.

Das unkonventionelle Dateisystemlayout von NixOS (kein `/lib`, kein `/usr/lib`, kein traditionelles FHS) bedeutet jedoch, dass standardmäßige Linux-Binärdateien, einschließlich AppImages, nicht ohne Weiteres laufen. RcloneView wird für Linux als AppImage verteilt, daher musst du die AppImage-Kompatibilität unter NixOS aktivieren, bevor du es startest.

Diese Anleitung führt durch den gesamten Prozess: Installation von rclone, Aktivierung der AppImage-Unterstützung, Ausführen von RcloneView, Konfiguration von FUSE für Cloud-Mounts und Einrichtung einer automatisierten Synchronisation als systemd-Dienst.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NixOS-Überblick und warum es für Cloud-Speicher wichtig ist

NixOS behandelt die Systemkonfiguration als Code. Deine Datei `/etc/nixos/configuration.nix` definiert jedes installierte Paket, jeden aktivierten Dienst und jede Systemeinstellung. Wenn du `nixos-rebuild switch` ausführst, wechselt das System atomar in den neuen Zustand. Falls etwas kaputtgeht, kannst du in Sekundenschnelle zu einer vorherigen Generation zurückkehren.

Für Cloud-Speicher-Workflows bedeutet das, dass du deine gesamte Synchronisations- und Backup-Einrichtung versionieren kannst. Deine rclone-Installation, FUSE-Konfiguration und systemd-Dienste sind alle in einer Datei definiert und können auf jeder NixOS-Maschine reproduziert werden.

## Installation von Rclone über Nixpkgs

Rclone ist im offiziellen Nixpkgs-Repository verfügbar. Füge es zu deiner Systemkonfiguration hinzu:

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

Baue dann dein System neu auf:

```bash
sudo nixos-rebuild switch
```

Überprüfe die Installation, indem du `rclone version` ausführst. Dies liefert dir das rclone-Backend, das von der GUI von RcloneView verwaltet wird.

## Ausführen des RcloneView-AppImage unter NixOS

AppImages bündeln alle Abhängigkeiten in einer einzigen ausführbaren Datei, verlassen sich jedoch auf FHS-Pfade, die NixOS nicht bereitstellt. NixOS bietet zwei Hauptlösungen: `appimage-run` und `nix-ld`.

### Option A: Verwendung von appimage-run

Füge `appimage-run` zu deinen Systempaketen hinzu:

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

Lade nach dem Neuaufbau das RcloneView-AppImage von [rcloneview.com](https://rcloneview.com/src/download.html) herunter, mache es ausführbar und starte es:

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### Option B: Verwendung von nix-ld

Das `nix-ld`-Modul stellt eine Kompatibilitätsschicht bereit, mit der Standard-Linux-Binärdateien ihre dynamischen Bibliotheken finden können. Aktiviere es in deiner Konfiguration:

```nix
programs.nix-ld.enable = true;
```

Nach dem Neuaufbau sollte das AppImage direkt ohne den `appimage-run`-Wrapper laufen:

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

Beide Ansätze funktionieren. Wähle `appimage-run` für Einfachheit oder `nix-ld`, wenn du viele Drittanbieter-Binärdateien ausführst.

## Einrichten von FUSE für Cloud-Mounts

RcloneView kann Cloud-Speicher als lokales Verzeichnis einbinden (mount), dies erfordert jedoch FUSE (Filesystem in Userspace). Aktiviere FUSE unter NixOS in deiner Konfiguration:

```nix
# FUSE aktivieren
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# Regulären Benutzern erlauben, FUSE-Dateisysteme einzubinden
programs.fuse.userAllowOther = true;
```

Baue neu auf und überprüfe, dass `/dev/fuse` existiert. Jetzt kannst du die Mount-Funktion von RcloneView verwenden, um auf Cloud-Speicher zuzugreifen, als wäre er ein lokaler Ordner.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Konfigurieren von Cloud-Remotes in RcloneView

Starte RcloneView und verwende den Remote-Konfigurationsassistenten, um deine Cloud-Anbieter hinzuzufügen. Der Vorgang ist derselbe wie auf jeder anderen Linux-Distribution:

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView unterstützt Google Drive, OneDrive, Dropbox, AWS S3, Wasabi, Backblaze B2, Cloudflare R2 und Dutzende weitere. Die GUI führt dich durch die Authentifizierung für jeden Anbieter, einschließlich OAuth-Abläufen, die sich in deinem Browser öffnen.

Deine rclone-Konfiguration wird standardmäßig unter `~/.config/rclone/rclone.conf` gespeichert. Unter NixOS funktioniert dieser Pfad normal, da er sich in deinem Home-Verzeichnis außerhalb des Nix-Stores befindet.

## Erstellen von Synchronisationsaufträgen und Planen von Übertragungen

Sobald deine Remotes konfiguriert sind, verwende den Zwei-Bereiche-Explorer von RcloneView, um deinen Cloud-Speicher zu durchsuchen und Synchronisationsaufträge zu erstellen. Ziehe Dateien zwischen den Bereichen, um Übertragungen zu starten, oder richte mit dem Auftragsplaner wiederkehrende Aufträge ein.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Für NixOS-Nutzer, die eine Integration in das deklarative Modell des Systems bevorzugen, kannst du auch einen systemd-Dienst definieren, der rclone-sync-Befehle über einen Timer ausführt und damit den integrierten Planer von RcloneView ergänzt.

## Einrichten eines Systemd-Dienstes für automatisierte Synchronisation

NixOS macht es einfach, benutzerdefinierte systemd-Dienste deklarativ zu definieren. Füge deiner Konfiguration einen timer-basierten Synchronisationsdienst hinzu:

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

Dies funktioniert parallel zum GUI-Planer von RcloneView. Verwende den systemd-Ansatz für Headless-Server und den Planer von RcloneView für interaktive Arbeitsstationen.

## NixOS-spezifische Tipps

**Pinne deine rclone-Version.** NixOS macht es einfach, Paketversionen mithilfe von Overlays oder Flakes zu pinnen. Wenn eine neue rclone-Version bahnbrechende Änderungen einführt, kannst du auf einer bekannt guten Version bleiben, bis du bereit für das Upgrade bist.

**Verwende Home Manager für die Konfiguration auf Benutzerebene.** Wenn du Home Manager verwendest, kannst du deine rclone-Konfigurationsdatei, den AppImage-Desktop-Eintrag und die Autostart-Einstellungen deklarativ innerhalb deiner Benutzerumgebung verwalten.

**Desktop-Eintrag für den Anwendungsstarter.** Erstelle eine `.desktop`-Datei, damit RcloneView in deinem Anwendungsmenü erscheint:

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**Rollback-Sicherheit.** Da NixOS atomare Rollbacks unterstützt, kannst du gefahrlos mit rclone-Konfigurationen experimentieren. Wenn ein Synchronisationsauftrag falsch konfiguriert ist, setzt du deine NixOS-Generation zurück, und dein System kehrt zu seinem vorherigen Zustand zurück.

## Erste Schritte

1. **Lade RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Füge `rclone`, `appimage-run` und `fuse3` zu deiner NixOS-Konfiguration hinzu und baue neu auf.
3. Starte RcloneView mit `appimage-run`, füge deine Cloud-Remotes hinzu und beginne mit der Synchronisation.
4. Definiere optional einen systemd-Timer in deiner NixOS-Konfiguration für vollständig deklarative automatisierte Backups.

NixOS und RcloneView bieten dir gemeinsam einen reproduzierbaren, versionierten Cloud-Speicher-Workflow, den du auf jeder Maschine replizieren kannst.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
