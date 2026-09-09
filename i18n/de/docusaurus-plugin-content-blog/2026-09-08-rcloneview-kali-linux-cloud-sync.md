---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView auf Kali Linux — Cloud-Speicher synchronisieren und sichern"
authors:
  - jay
description: "Installieren Sie RcloneView auf Kali Linux, um Cloud-Speicher für Einsatznachweise, Berichte und erfasste Daten einzubinden, zu synchronisieren und zu verschlüsseln."
keywords:
  - RcloneView Kali Linux
  - Kali Linux Cloud-Speicher
  - Cloud-Synchronisation Kali Linux
  - Cloud-Laufwerk einbinden Kali Linux
  - Debian-basiertes Cloud-Backup
  - Cloud-Backup verschlüsseln Pentest
  - RcloneView Installation Linux
  - Kali Linux Backup-Tool
  - GTK Cloud-Sync-App
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Kali Linux — Cloud-Speicher synchronisieren und sichern

> Cloud-Speicher unter Kali Linux einbinden, synchronisieren und verschlüsseln, ohne den bestehenden XFCE-Desktop-Workflow zu verlassen.

Kali Linux ist eine Debian-basierte Distribution, die meist für Sicherheitstests eingesetzt wird, und Einsätze erzeugen einen stetigen Strom an Screenshots, Paketmitschnitten und Berichten, die schnell von der lokalen Festplatte verschoben werden müssen. RcloneView bietet Kali-Nutzern eine grafische Möglichkeit, 90+ Cloud-Anbieter zu verbinden, sie als lokale Laufwerke einzubinden und geplante Sync-Jobs auszuführen, ohne rclone-Befehle im Terminal von Hand zu schreiben. Da Kali standardmäßig mit einem vollständigen X11/Wayland-Desktop ausgeliefert wird, läuft die grafische Oberfläche von RcloneView genauso wie auf jeder anderen Debian-Distribution.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView auf Kali Linux installieren

Da Kali auf Debian basiert, lässt sich das offizielle `.deb`-Paket von [rcloneview.com](https://rcloneview.com/src/download.html) sauber mit `dpkg -i` installieren, gefolgt von `apt-get install -f` zur Auflösung der Abhängigkeiten. RcloneView benötigt GTK+ 3.0 sowie entweder `libayatana-appindicator3-1` oder `libappindicator3-1` für das System-Tray-Symbol, außerdem `fuse3`, falls Sie Remotes als lokale Laufwerke einbinden möchten. Es gibt kein AUR-, Snap-, Flatpak- oder APT-Repository für RcloneView — die `.deb`-Datei ist der einzige unterstützte Installationsweg unter Kali. Ignorieren Sie daher jede Drittanbieter-Paketliste, die etwas anderes behauptet.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, sodass beim ersten Start nichts zusätzlich konfiguriert werden muss — die App kommuniziert automatisch über `127.0.0.1:5582` mit ihr.

## Cloud-Speicher für den Außeneinsatz einbinden

Sobald ein Remote verbunden ist, wählen Sie es im Explorer-Panel aus und klicken auf das Mount-Symbol in der Panel-Symbolleiste, um es unter Linux als lokales Laufwerk über `nfsmount` bereitzustellen. Das ist nützlich, um Beweismaterial aus einem gemeinsam genutzten Google-Drive- oder Box-Ordner direkt mit lokalen Tools zu prüfen, ohne zuerst den gesamten Datensatz herunterzuladen. Für Einsätze, bei denen ohne jedes Risiko einer Veränderung der Quelldateien durchsucht werden muss, steht in der Mount-Konfiguration ein Nur-Lese-Modus zur Verfügung.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a remote folder from the RcloneView Explorer panel" class="img-large img-center" />

## Backups verschlüsseln und automatisieren

Sensible Einsatzdaten sollten verschlüsselt werden, bevor sie das Gerät verlassen. Der virtuelle Crypt-Remote von RcloneView umschließt jeden bestehenden Remote, sodass Dateinamen und -inhalte vor dem Hochladen verschlüsselt werden, und derselbe 4-Schritte-Sync-Assistent, der für einfache Übertragungen verwendet wird, funktioniert auch für die verschlüsselte Ebene. S3, Azure oder Backblaze B2 lassen sich mit voller Lese-/Schreibfähigkeit bereits in der FREE-Lizenz verbinden, sodass für eine verschlüsselte externe Kopie kein kostenpflichtiger Tarif erforderlich ist. Crontab-artige Zeitplanung für unbeaufsichtigte Backups ist eine PLUS-Lizenzfunktion.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring encrypted sync job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html) — laden Sie die `.deb` für x86_64 oder aarch64 herunter.
2. Installieren Sie mit `dpkg -i rclone_view-*.deb && apt-get install -f`, um GTK+3-, appindicator- und FUSE-Abhängigkeiten einzubinden.
3. Fügen Sie Ihre Cloud-Remotes hinzu und umhüllen Sie sensible Daten vor dem ersten Sync mit einem Crypt-Remote.
4. Prüfen Sie nach jedem Lauf die Job History, um Übertragungszahlen zu bestätigen und Fehler frühzeitig zu erkennen.

Eine Kali-Installation mit RcloneView bedeutet, dass Einsatzmaterial schnell, verschlüsselt und ohne den bereits genutzten Desktop zu verlassen, von der lokalen Festplatte entfernt werden kann.

---

**Verwandte Anleitungen:**

- [RcloneView auf Debian Linux — Cloud-Speicher synchronisieren und sichern](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Beliebigen SFTP-Server mit RcloneView verbinden — Remote-Server mit Cloud-Speicher synchronisieren](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Firewall und Antivirus, die die Cloud-Synchronisation blockieren, beheben — Verbindungsfehler mit RcloneView lösen](https://rcloneview.com/support/blog/fix-firewall-antivirus-blocking-cloud-sync-rcloneview)

<CloudSupportGrid />
