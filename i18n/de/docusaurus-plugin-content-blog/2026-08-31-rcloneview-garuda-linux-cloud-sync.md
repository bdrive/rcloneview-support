---
slug: rcloneview-garuda-linux-cloud-sync
title: "RcloneView unter Garuda Linux — Cloud-Speicher-Synchronisation und Backup"
authors:
  - steve
description: "Führen Sie RcloneView unter Garuda Linux aus, um 90+ Cloud-Anbieter mit einer vollständigen Desktop-GUI einzubinden, zu synchronisieren und zu sichern — ohne AUR-Paket."
keywords:
  - rcloneview garuda linux
  - garuda linux cloud-synchronisation
  - garuda linux cloud-speicher
  - install rcloneview arch based linux
  - garuda linux backup
  - cloud-speicher garuda
  - rcloneview appimage garuda
  - garuda linux dateisynchronisation
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

# RcloneView unter Garuda Linux — Cloud-Speicher-Synchronisation und Backup

> Der leistungsoptimierte Desktop von Garuda Linux passt gut zur leichtgewichtigen Flutter-GUI von RcloneView, um Cloud-Speicher zu verwalten, ohne ein Terminal anzufassen.

Garuda Linux wurde für Menschen entwickelt, die ein Arch-basiertes System wollen, ohne ein ganzes Wochenende mit der Konfiguration zu verbringen — ein vorab abgestimmter Desktop, sinnvolle Standardeinstellungen und der Fokus darauf, schnell loslegen zu können. RcloneView folgt für Cloud-Speicher derselben Philosophie: eine native Desktop-App, die 90+ Cloud-Anbieter aus einem einzigen Fenster einbindet, synchronisiert und sichert, ohne rclone-Befehle von Hand skripten zu müssen. Da Garuda von Haus aus einen vollständigen grafischen Desktop mitbringt, läuft RcloneView genau wie vorgesehen — keine Headless-Workarounds erforderlich.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView unter Garuda Linux installieren

RcloneView wird ausschließlich über [rcloneview.com](https://rcloneview.com/src/download.html) vertrieben — es gibt kein AUR-Paket, das man mit `pacman` oder einem AUR-Helper beziehen könnte. Laden Sie den `.AppImage`-Build für eine portable, installationsfreie Option herunter, oder holen Sie sich das `.rpm`-Paket, wenn Sie es lieber in der Paketdatenbank Ihres Systems registriert haben möchten. Sowohl x86_64- als auch aarch64-Builds sind verfügbar, passend zur Hardware, auf der Ihre Garuda-Installation läuft.

RcloneView ist mit Flutter und Dart gebaut, nicht mit Qt oder Electron, und kommt daher ohne die Abhängigkeitskette eines separaten Toolkits aus. Es setzt für das Tray-Symbol auf GTK+3 und eine Tray-Indikator-Bibliothek (libayatana-appindicator3-1 oder libappindicator3-1), beide sind auf Garudas KDE-, GNOME- und anderen Desktop-Editionen standardmäßig vorhanden. Um Cloud-Speicher als lokales Laufwerk einzubinden, stellen Sie sicher, dass `fuse3` installiert ist.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView-Remote-Einrichtungsbildschirm unter Garuda Linux" class="img-large img-center" />

## Mounts und Remotes einrichten

Garudas Desktop-Editionen laufen unter X11 oder Wayland, und die Mount-Funktion von RcloneView funktioniert mit beiden. Fügen Sie über den Tab „Remote“ einen Remote hinzu, authentifizieren Sie sich per OAuth bei Anbietern wie Google Drive oder Dropbox, oder geben Sie für S3-kompatiblen und protokollbasierten Speicher die Zugangsdaten direkt ein. Binden Sie diesen Remote mit nfsmount, dem Standard-Mount-Typ von RcloneView unter Linux, als lokalen Pfad ein und durchsuchen Sie Ihre Cloud-Dateien über Garudas nativen Dateimanager, als wären sie lokal gespeichert.

Der Cache-Modus ist standardmäßig auf „writes“ eingestellt und balanciert Reaktionsfreudigkeit mit Speicherverbrauch — es lohnt sich, das zu prüfen, wenn Sie einen Remote voller großer Dateien einbinden und die lokale Zwischenspeicherung genauer kontrollieren möchten.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Einbinden eines Cloud-Remotes über den Mount Manager von RcloneView unter Linux" class="img-large img-center" />

## Backups und Synchronisationsjobs automatisieren

Sobald Ihre Remotes verbunden sind, übernimmt der Job Manager die sich wiederholende Arbeit: einen lokalen Ordner in einen Cloud-Speicher sichern, zwei Anbieter gegeneinander synchronisieren oder eine Quelle gleichzeitig auf mehrere Ziele spiegeln. Konfigurieren Sie Filter, um unerwünschte Dateitypen zu überspringen, und führen Sie zuerst einen Dry Run aus, um vorab zu sehen, was ein Job ändern wird.

Der Job-Verlauf protokolliert jeden Lauf — Startzeit, Dauer, Übertragungsgeschwindigkeit und Dateianzahl — sodass geplante Backups eine Prüfspur hinterlassen, die Sie einsehen können, ohne sich durch Log-Dateien zu wühlen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planen eines Cloud-Synchronisationsjobs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **AppImage oder .rpm herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html) — es gibt kein AUR-Paket, installieren Sie also direkt.
2. **fuse3 und GTK+3 prüfen**, ob sie für Mount- und Tray-Unterstützung auf Ihrem System vorhanden sind.
3. **Ersten Cloud-Remote hinzufügen** über den Tab „Remote“ und einbinden oder einen Synchronisationsjob einrichten.
4. **Wiederkehrende Jobs speichern** im Job Manager, damit Backups jedes Mal auf die gleiche Weise ablaufen.

Garudas sofort einsatzbereiter Desktop und die native GUI von RcloneView ergeben eine unkomplizierte Kombination — einmal herunterladen, Ihre Clouds verbinden und alles verwalten, ohne die grafische Umgebung zu verlassen, für die Garuda gebaut wurde.

---

**Verwandte Anleitungen:**

- [RcloneView unter Arch Linux installieren — Anleitung für Cloud-Synchronisation und Backup](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [RcloneView unter Manjaro Linux — Cloud-Speicher-Synchronisation](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [RcloneView unter Fedora und RHEL installieren — Anleitung für Cloud-Synchronisation](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
