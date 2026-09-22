---
slug: rcloneview-mx-linux-cloud-sync
title: "RcloneView auf MX Linux — Cloud-Speicher-Synchronisation und Backup"
authors:
  - casey
description: "Führen Sie RcloneView auf MX Linux über .deb oder AppImage aus und verwalten Sie 90+ Cloud-Anbieter mit Drag-and-Drop-Synchronisation, Mount und geplantem Backup in einer GUI."
keywords:
  - RcloneView MX Linux
  - MX Linux Cloud-Speicher
  - MX Linux rclone GUI
  - RcloneView deb installieren
  - MX Linux Cloud-Synchronisation
  - MX Linux Cloud-Backup
  - Debian-basierter Cloud-Client
  - plattformübergreifender Cloud-Manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf MX Linux — Cloud-Speicher-Synchronisation und Backup

> Führen Sie RcloneView auf MX Linux über das offizielle .deb-Paket oder das AppImage aus und verwalten Sie jeden von rclone unterstützten Cloud-Remote über eine native GUI.

MX Linux hat sich seinen Ruf als schlank und Debian-basiert erarbeitet, ohne die eher konservativen Paketversionen von Debian zu übernehmen, was es zu einer beliebten Wahl für ältere Hardware und minimalistische Desktops macht. Genau diese Kombination braucht ein Cloud-Dateimanager, um nicht im Weg zu stehen: ein kleiner Speicherbedarf, eine echte Desktop-Umgebung und .deb-Kompatibilität, die direkt von Debian geerbt wird. RcloneView mountet und synchronisiert 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux, sodass ein MX-Linux-Rechner denselben Funktionsumfang erhält wie jede andere unterstützte Plattform — keine abgespeckte Version.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView auf MX Linux installieren

Da MX Linux auf Debian basiert, wird das `.deb`-Paket von der [offiziellen Download-Seite](https://rcloneview.com/src/download.html) genauso installiert wie unter Debian oder Ubuntu — laden Sie den x86_64- oder aarch64-Build herunter und installieren Sie ihn über den Paketmanager Ihrer Wahl (MX Package Installer, GDebi oder `dpkg -i` im Terminal). Wenn Sie den Paketmanager lieber ganz umgehen möchten, funktioniert auch der `.AppImage`-Build: als ausführbar markieren und direkt starten, ohne Installationsschritt.

Es gibt weder ein MX-Linux-spezifisches Repository oder PPA für RcloneView noch ein AUR-ähnliches Community-Paket — die Download-Seite ist der einzige offizielle Vertriebskanal. Prüfen Sie vor der Installation, ob GTK+ 3.0 sowie entweder `libayatana-appindicator3-1` oder `libappindicator3-1` für das Symbol im System-Tray vorhanden sind, und ob FUSE (fuse3 empfohlen) installiert ist, falls Sie Remotes als lokale Laufwerke mounten möchten.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView-Hauptfenster unter MX Linux mit geöffnetem Dialog für einen neuen Remote" class="img-large img-center" />

## Cloud-Remotes verbinden

Die Remote-Einrichtung unter MX Linux funktioniert genauso wie bei jeder anderen von RcloneView unterstützten Linux-Distribution. Öffnen Sie Remote-Tab > New Remote, wählen Sie einen Anbieter aus und authentifizieren Sie sich entweder über ein Browser-Popup (Google Drive, Dropbox, OneDrive, Box, pCloud) oder geben Sie die Zugangsdaten direkt ein (Amazon S3, Backblaze B2, SFTP). Die eingebettete rclone-Binärdatei kommuniziert standardmäßig mit `http://127.0.0.1:5582`, sodass keine separate rclone-Installation verwaltet werden muss — es sei denn, Sie möchten sich gezielt mit einer extern laufenden rclone-Instanz im Netzwerk verbinden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einen Cloud-Remote als lokales Laufwerk unter MX Linux mit RcloneView mounten" class="img-large img-center" />

Nach der Verbindung mounten Sie einen Remote über `nfsmount`, und er verhält sich wie jeder andere lokale Pfad — jeder Dateimanager oder jede Anwendung auf dem System kann ihn durchsuchen, ohne zu wissen, dass er von der Cloud unterstützt wird.

## Backups planen

Für einen MX-Linux-Rechner, der den größten Teil des Tages läuft, verwandelt ein geplanter Sync-Auftrag die App in ein Backup-Tool nach dem Prinzip "einrichten und vergessen". Durchlaufen Sie den 4-Schritte-Sync-Assistenten, wenden Sie Filter an, um Cache-Verzeichnisse oder übergroße Dateien zu überspringen, und hängen Sie mit einer PLUS-Lizenz einen Zeitplan im Crontab-Stil an, damit der Auftrag läuft, ohne dass Sie ihn manuell starten müssen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einen geplanten Cloud-Sync-Auftrag unter MX Linux in RcloneView erstellen" class="img-large img-center" />

Job History erfasst Dauer, Übertragungsgeschwindigkeit und Dateianzahl jedes Laufs, wodurch Sie leicht bestätigen können, dass ein geplantes Backup tatsächlich abgeschlossen wurde, statt nachts stillschweigend fehlzuschlagen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) — holen Sie sich das .deb für Ihre Architektur oder das .AppImage, wenn Sie die Installation überspringen möchten.
2. Installieren Sie das Paket (oder markieren Sie das AppImage als ausführbar) und stellen Sie sicher, dass GTK+3 und FUSE vorhanden sind.
3. Fügen Sie über Remote-Tab > New Remote Ihren ersten Cloud-Remote hinzu.
4. Richten Sie eine Synchronisation oder ein Mount ein, um die Cloud-Speicherverwaltung von MX Linux aus zu starten.

Mit beiden Paketen erhält MX Linux dieselbe vollständige Cloud-Sync- und Mount-Erfahrung wie jeder andere unterstützte Linux-Desktop.

---

**Verwandte Anleitungen:**

- [RcloneView auf Debian Linux — Cloud-Synchronisation](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [RcloneView auf Ubuntu und Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView auf Linux Mint — Cloud-Synchronisation](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
