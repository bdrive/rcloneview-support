---
slug: rcloneview-windows-11-cloud-sync
title: "RcloneView unter Windows 11 — Cloud-Speicher-Synchronisation und Backup"
authors:
  - morgan
description: "Installieren und betreiben Sie RcloneView unter Windows 11, um 90+ Cloud-Speicher-Anbieter aus einer einzigen Desktop-Anwendung heraus zu mounten, zu synchronisieren und zu sichern."
keywords:
  - rcloneview windows 11
  - windows 11 cloud-speicher synchronisation
  - cloud-laufwerk mounten windows 11
  - cloud-backup windows 11
  - rclone gui windows 11
  - windows 11 explorer cloud
  - multi-cloud windows desktop
  - cloud-sync-software windows
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter Windows 11 — Cloud-Speicher-Synchronisation und Backup

> Windows 11 hat den Explorer und das Berechtigungsmodell im Vergleich zu früheren Versionen verschärft — so lässt sich RcloneView darauf reibungslos für das Mounten, Synchronisieren und Sichern von Cloud-Speicher betreiben.

Die überarbeitete Shell von Windows 11 und die strengere Standard-Sicherheitsrichtlinie bringen einige Änderungen für Desktop-Anwendungen mit sich, die mit Speicher und Laufwerksbuchstaben arbeiten. **RcloneView** läuft unter Windows 11 nativ als gewöhnliche Desktop-Anwendung und bietet eine einzige Oberfläche zum Durchsuchen, Synchronisieren und Mounten von über 90 Cloud-Speicher-Anbietern, statt für Google Drive, OneDrive, Dropbox und S3-kompatiblen Speicher jeweils separate Herstelleranwendungen zu nutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView unter Windows 11 installieren

RcloneView wird als Inno-Setup-Installer (`setup_rclone_view-{version}.exe`) für x86-64-Systeme bereitgestellt — es gibt keinen Windows-ARM64-Build, daher gilt diese Anleitung für gewöhnliche Windows-11-PCs und -Notebooks. Laden Sie den Installer von [rcloneview.com](https://rcloneview.com/src/download.html) herunter, führen Sie ihn aus und schließen Sie den Einrichtungsassistenten ab.

Windows 11 benötigt das VC++ 2015-2022 Redistributable, auf das der Installer hinweist, falls es fehlt. RcloneView enthält ein eingebettetes rclone-Binary, sodass kein separater rclone-Installationsschritt nötig ist — die App kommuniziert standardmäßig über `http://127.0.0.1:5582` mit ihrer eingebetteten rclone-Instanz.

<img src="/support/images/en/blog/new-remote.png" alt="Einen neuen Cloud-Remote in RcloneView hinzufügen" class="img-large img-center" />

## Cloud-Speicher als Laufwerksbuchstabe mounten

Eine der nützlichsten Funktionen von RcloneView unter Windows 11 ist das Mounten eines Cloud-Remotes als lokales Laufwerk. Wählen Sie im Remote-Explorer-Panel den zu mountenden Remote aus, klicken Sie auf das Mount-Symbol in der Panel-Symbolleiste, wählen Sie einen automatisch zugewiesenen oder manuellen Laufwerksbuchstaben und klicken Sie auf Save and mount. Der Remote erscheint anschließend im Explorer wie ein physisches Laufwerk.

Windows 11 verwendet standardmäßig den Mount-Typ `cmount`. Sie können den Mount auch so konfigurieren, dass er als Netzlaufwerk statt als lokale Festplatte erscheint, und den VFS-Cache-Modus (off, minimal, writes, full) anpassen, je nachdem, ob Ihnen Reaktionsfähigkeit oder Offline-Zugriff auf zuletzt verwendete Dateien wichtiger ist.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Einen Remote über den Mount Manager in RcloneView mounten" class="img-large img-center" />

## Dateien synchronisieren und sichern

Über das Mounten hinaus können Sie mit dem Sync-Assistenten von RcloneView einseitige Synchronisationsaufträge zwischen zwei verbundenen Remotes oder zwischen einem lokalen Windows-11-Ordner und einem Cloud-Anbieter einrichten. Verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese-/Schreibzugriff in der FREE-Lizenz und richten Sie dann einen geplanten Backup-Auftrag ein, damit Ihre Dokumente- oder Projektordner automatisch in den Cloud-Speicher gespiegelt werden.

Der vierstufige Sync-Assistent umfasst die Auswahl von Quelle und Ziel, die Übertragungs-Parallelität, Filterregeln (Dateigröße, Alter, Ordnertiefe) und — in der PLUS-Lizenz — eine Crontab-artige Planung. Eine Dry-Run-Option zeigt vorab genau an, was kopiert oder gelöscht wird, bevor tatsächlich etwas geändert wird.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Einen Cloud-zu-Cloud-Übertragungsauftrag in RcloneView konfigurieren" class="img-large img-center" />

## Aufträge über das Systemtray überwachen

RcloneView minimiert sich in das Systemtray von Windows 11, wo Sie gemountete Laufwerke einsehen, Mounts ein- und ausschalten und neue Mounts starten können, ohne das gesamte Fenster erneut zu öffnen. Aktive Übertragungen erscheinen im Tab Transferring am unteren Rand des Hauptfensters und zeigen Fortschritt, Geschwindigkeit und Dateianzahl live an.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) und führen Sie den Windows-Installer aus.
2. Fügen Sie Ihren ersten Cloud-Remote über Remote-Tab > New Remote hinzu.
3. Mounten Sie ihn als Laufwerksbuchstabe oder richten Sie einen Sync-Auftrag zu einem lokalen Windows-11-Ordner ein.
4. Prüfen Sie im Job-History-Panel, ob Ihre erste Übertragung erfolgreich abgeschlossen wurde.

Mit installiertem RcloneView erhält Windows 11 eine einzige, einheitliche Möglichkeit, Dutzende Cloud-Anbieter zu erreichen, ohne für jeden davon einen eigenen Sync-Client installieren zu müssen.

---

**Weiterführende Anleitungen:**

- [RcloneView unter Windows 10 — Cloud-Speicher-Synchronisation](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [RcloneView unter Windows Server — Cloud-Backup](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Konflikte bei Mount-Laufwerksbuchstaben unter Windows beheben](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
