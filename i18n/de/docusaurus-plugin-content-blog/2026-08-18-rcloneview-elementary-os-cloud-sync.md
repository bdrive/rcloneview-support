---
slug: rcloneview-elementary-os-cloud-sync
title: "RcloneView unter Elementary OS — Cloud-Speicher synchronisieren und sichern"
authors:
  - alex
description: "Installieren Sie RcloneView unter Elementary OS und verwalten Sie 90+ Cloud-Anbieter mit Drag-and-Drop-Synchronisation, Mount und geplanten Backups aus einer GUI."
keywords:
  - RcloneView Elementary OS
  - Elementary OS Cloud-Speicher
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - Elementary OS Cloud-Synchronisation
  - Elementary OS Cloud-Backup
  - Pantheon Cloud-Speicher-Client
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter Elementary OS — Cloud-Speicher synchronisieren und sichern

> Führen Sie RcloneView unter Elementary OS aus, um 90+ Cloud-Anbieter über eine native GUI zu durchsuchen, zu synchronisieren, einzubinden und zu sichern, die zum Pantheon-Desktop passt.

Elementary OS basiert auf Ubuntu LTS, bringt aber seinen eigenen Pantheon-Desktop mit, und Nutzer, die es wegen eines klaren, macOS-ähnlichen Workflows gewählt haben, möchten oft, dass auch ihre Cloud-Speicher-Tools dieselbe Politur bieten, statt auf ein nacktes Terminal zurückzugreifen. RcloneView wird unter Elementary OS als natives .deb-Paket installiert und bietet eine vollständige, dateimanagerähnliche Oberfläche für jedes von rclone unterstützte Remote — von Google Drive über Amazon S3 bis zu SFTP-Servern. Anders als reine Mount-Tools synchronisiert RcloneView auch und vergleicht Ordner — bereits mit der FREE-Lizenz —, sodass das Einbinden eines Laufwerks und das Ausführen eines geplanten Backups aus derselben App kommen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView unter Elementary OS installieren

Da Elementary OS auf Debian/Ubuntu basiert, wird RcloneView aus dem .deb-Paket installiert, das auf der offiziellen [Download-Seite](https://rcloneview.com/src/download.html) verfügbar ist — holen Sie sich den x86_64-Build (oder aarch64, wenn Sie Elementary auf ARM64-Hardware betreiben) und installieren Sie ihn im Terminal mit `sudo dpkg -i rclone_view-*-linux-{arch}.deb`. Hier gibt es kein Flathub- oder Snap-Store-Paket — der direkte .deb-Download ist der einzige unterstützte Installationsweg, und AppImage steht ebenfalls zur Verfügung, falls Sie die Paketverwaltung ganz umgehen möchten.

Elementary OS bringt über Pantheon standardmäßig GTK+ und eine Wayland/X11-Sitzung mit, was RcloneViews Anforderungen an Display und Toolkit von Haus aus abdeckt. Eine Sache, die sich nach der Installation zu prüfen lohnt, ist `libayatana-appindicator3-1`, da das Systemtray-Symbol von RcloneView davon abhängt und manche minimalen Elementary-Installationen Indikator-Bibliotheken entfernen, um den Desktop schlank zu halten.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## Cloud-Remotes verbinden

Nach der Installation von RcloneView funktioniert das Hinzufügen eines Remotes genauso wie auf jeder anderen Plattform: Remote-Tab > New Remote, Anbieter auswählen, dann entweder über ein Browser-Popup authentifizieren (Google Drive, Dropbox, OneDrive, Box) oder Zugangsdaten direkt eingeben (Amazon S3, Backblaze B2, SFTP). Die eingebettete rclone-Binärdatei erledigt alles über `http://127.0.0.1:5582`, sodass unter Elementary OS nichts zusätzlich installiert oder konfiguriert werden muss — es sei denn, Sie möchten RcloneView stattdessen mit einer separat laufenden externen rclone-Instanz verbinden.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

Das Einbinden nutzt unter Linux `nfsmount` — wählen Sie im Explorer einen Remote-Ordner aus, klicken Sie auf das Mount-Symbol in der Panel-Symbolleiste, und der Cloud-Ordner erscheint als lokaler Pfad, den jede Pantheon-App direkt öffnen kann. FUSE (fuse3 empfohlen) muss installiert sein, damit das Einbinden funktioniert.

## Sync-Jobs planen

Bei einem Elementary-OS-Rechner, der tagsüber durchgehend eingeschaltet bleibt, macht ein geplanter Sync-Job aus RcloneView ein Backup-Tool, das ohne manuelles Eingreifen läuft, statt etwas, das man manuell auslöst. Erstellen Sie den Job über den 4-Schritte-Sync-Assistenten, fügen Sie Filter hinzu, um temporäre oder übergroße Dateien zu überspringen, und hängen Sie — mit einer PLUS-Lizenz — einen Zeitplan im crontab-Format an, damit er in der gewünschten Taktung automatisch ausgelöst wird.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History protokolliert jeden Lauf mit Status, Dauer und Übertragungsgeschwindigkeit, sodass Sie leicht bestätigen können, dass ein nächtliches Backup tatsächlich abgeschlossen wurde, statt unbemerkt fehlzuschlagen, während Sie nicht hinsehen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html) — holen Sie sich das x86_64- oder aarch64-.deb für Elementary OS.
2. Mit `sudo dpkg -i rclone_view-*-linux-{arch}.deb` installieren.
3. Ihr erstes Cloud-Remote über Remote-Tab > New Remote hinzufügen.
4. Eine Synchronisation oder Einbindung einrichten, um die Cloud-Speicherverwaltung direkt vom Pantheon-Desktop aus zu starten.

Mit installiertem .deb erhält Elementary OS dieselbe Drag-and-Drop-Cloud-Verwaltungserfahrung wie Windows- und macOS-Nutzer, ohne das klare, konsistente Gefühl des Desktops einzutauschen.

---

**Weiterführende Anleitungen:**

- [RcloneView unter Ubuntu und Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView unter Linux Mint — Cloud-Speicher synchronisieren und sichern](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [RcloneView unter Zorin OS — Cloud-Speicher synchronisieren und sichern](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
