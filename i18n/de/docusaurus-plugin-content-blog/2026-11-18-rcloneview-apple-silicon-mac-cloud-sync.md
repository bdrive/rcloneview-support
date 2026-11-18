---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "RcloneView auf Apple-Silicon-Macs — Cloud-Speicher synchronisieren und sichern"
authors:
  - robin
description: "Führen Sie RcloneView mit der Universal-.dmg nativ auf Apple-Silicon-Macs aus. Binden Sie 90+ Cloud-Anbieter in einer macOS-App ein, synchronisieren und sichern Sie sie."
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - Cloud-Synchronisation Apple-Silicon-Mac
  - Cloud-Speicher auf dem MacBook einbinden
  - rclone universal binary macos
  - Cloud-Backup Mac mini
  - macOS Cloud-Laufwerk einbinden
  - rcloneview macOS Installation
  - Google Drive OneDrive auf dem Mac synchronisieren
  - arm64 Mac Cloud-Speicher-Manager
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Apple-Silicon-Macs — Cloud-Speicher synchronisieren und sichern

> Ein einziger Universal-Download läuft nativ auf Apple-Silicon- und Intel-Macs, mit integrierter rclone-Engine.

Viele Besitzer von Apple-Silicon-Macs jonglieren mit mehr als einem Cloud-Konto. RcloneView bietet ihnen eine einzige native macOS-App, um Google Drive, OneDrive, Dropbox, S3-Buckets, NAS-Freigaben und Dutzende weiterer Remotes zu durchsuchen, einzubinden (mount), zu vergleichen und zu synchronisieren. Diese Anleitung zeigt, was Sie vor der Installation auf einem Apple-Silicon-Rechner wissen sollten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Eine Universal-.dmg für Apple Silicon und Intel

RcloneView für macOS wird als einzelnes `.dmg`-Disk-Image mit einem Universal-Binary ausgeliefert: Es enthält sowohl ARM64-Code für Apple Silicon als auch x86-64-Code für Intel-Macs. Auf Apple Silicon läuft die App nativ. Der Build ist vom Entwickler notarisiert und codesigniert, sodass Gatekeeper ihn ohne Umwege öffnet.

Die minimal unterstützte Version ist macOS 12.7 (Monterey); Ventura, Sonoma und Sequoia funktionieren nachweislich. Beziehen Sie das Installationsprogramm ausschließlich von der offiziellen [Download-Seite](https://rcloneview.com/src/download.html), denn es gibt kein Homebrew-Cask und keinen anderen Paketmanager-Kanal. Danach aktualisiert sich der macOS-Build innerhalb der App selbst.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView bringt sein eigenes rclone-Binary mit, Sie müssen also nichts weiter installieren. Öffnen Sie den Remote-Tab, klicken Sie auf **New Remote** und melden Sie sich an. Google Drive, Dropbox, OneDrive und Box verwenden eine OAuth-Anmeldung im Browser. S3-kompatible Dienste wie Wasabi oder Cloudflare R2 fragen stattdessen nach Zugriffsschlüsseln.

## Cloud-Laufwerke im Finder einbinden

Unter macOS bindet RcloneView standardmäßig mit `nfsmount` ein und lässt Sie einen eigenen Mount-Pfad wählen. Wählen Sie im Explorer einen Ordner, klicken Sie auf das Mount-Symbol, und das Remote erscheint im Finder wie ein lokales Volume. Der Standard-VFS-Cache-Modus `writes` eignet sich für die meisten Bearbeitungs-Workflows. Eine Fotografin, die auf einem MacBook Air mit 16 GB ein 2-TB-Archiv durchsucht, kann zusätzlich eine maximale Cache-Größe festlegen, damit der Cache die interne SSD nicht füllt.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

Sie können Mounts im Mount Manager oder über das Tray-Symbol in der Menüleiste verwalten. Mit einer PLUS-Lizenz verbindet Auto mount Ihre Laufwerke bei jeder Anmeldung erneut.

## Zwei macOS-Einstellungen, die Sie vorab anpassen sollten

Die Datenschutzkontrollen von macOS können dazu führen, dass Schreibtisch, Dokumente oder Downloads in RcloneView leer erscheinen. Erteilen Sie den Zugriff unter **System Settings > Privacy & Security > Files & Folders** oder fügen Sie RcloneView zu **Full Disk Access** hinzu, und starten Sie die App anschließend neu.

Große Synchronisationsjobs können außerdem an das standardmäßige macOS-Limit für offene Dateien (256–1024) stoßen. Wenn Fehler wie „too many open files“ auftreten, erstellen Sie unter `/Library/LaunchDaemons/limit.maxfiles.plist` eine LaunchDaemon-plist, die Soft- und Hard-Limit auf 524288 anhebt, und starten Sie den Mac neu.

## Geplante Backups vom Mac

Richten Sie mit dem Sync-Assistenten einen einseitigen Job ein, zum Beispiel `~/Projects` in einen Backblaze B2-Bucket, und beginnen Sie mit einem Dry Run, um genau zu sehen, was sich ändern würde. RcloneView bindet 90+ Anbieter aus einem Fenster ein und synchronisiert sie, unter Windows, macOS und Linux. Mit einer PLUS-Lizenz kann der Planungsschritt den Job nach einem Zeitplan im Cron-Stil ausführen, während die App in der Menüleiste liegt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter und ziehen Sie es aus der Universal-`.dmg` in den Ordner Applications.
2. Erteilen Sie in System Settings die Berechtigung Files & Folders oder Full Disk Access und starten Sie die App neu.
3. Fügen Sie Ihre Cloud-Remotes mit **New Remote** hinzu und binden Sie diejenigen ein, die Sie im Finder sehen möchten.
4. Erstellen Sie einen Synchronisationsjob, prüfen Sie ihn mit einem Dry Run und verfolgen Sie den Fortschritt im Transferring-Tab.

Mit eingerichtetem RcloneView kann Ihr Mac die von Ihnen genutzten Cloud-Konten an einem Ort einbinden, synchronisieren und sichern.

---

**Verwandte Anleitungen:**

- [RcloneView unter macOS Sequoia — Cloud-Speicher synchronisieren](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [macOS-Fehler „Too Many Open Files“ beheben](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [Leere Ordner und Berechtigungen unter macOS beheben](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
