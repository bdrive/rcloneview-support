---
slug: rcloneview-macos-sonoma-cloud-sync
title: "RcloneView unter macOS Sonoma — Cloud-Speicher-Synchronisation und Backup"
authors:
  - tayson
description: "RcloneView unter macOS Sonoma ausführen — Cloud-Synchronisation einrichten, Remote-Laufwerke einbinden und über 90 Cloud-Speicherdienste auf Ihrem Mac mit nativer Leistung verwalten."
keywords:
  - RcloneView macOS Sonoma
  - macOS Cloud-Synchronisation
  - Mac Cloud-Backup-Tool
  - RcloneView Mac Installation
  - Cloud-Speicher macOS
  - macOS Sonoma Cloud-Verwaltung
  - rclone GUI Mac
  - Apple Silicon Cloud-Synchronisation
  - Mac Cloud-Backup 2026
  - macOS Cloud-Mount
tags:
  - macos
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView unter macOS Sonoma — Cloud-Speicher-Synchronisation und Backup

> Die Universal-Binary von RcloneView läuft nativ unter macOS Sonoma — mit Unterstützung für Intel- und Apple-Silicon-Macs — und bietet vollständige Cloud-Synchronisations-, Mount- und Planungsfunktionen direkt out of the box.

macOS Sonoma bringt Verbesserungen bei der Dateiverwaltung, den Datenschutzeinstellungen und den Sicherheitsberechtigungen mit sich, die sich auf die Interaktion von Cloud-Speicher-Anwendungen mit dem Dateisystem auswirken. RcloneView, das als Universal-Binary (.dmg) für Intel- und Apple-Silicon-Macs bereitgestellt wird, läuft nativ unter macOS Sonoma mit vollständigen Mount-, Synchronisations- und Backup-Funktionen. Hier finden Sie alles, was Sie wissen müssen, um es optimal zum Laufen zu bringen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Installation unter macOS Sonoma

Laden Sie die `.dmg`-Datei von RcloneView von [rcloneview.com](https://rcloneview.com/src/download.html) herunter. Die Universal-Binary unterstützt sowohl x86-64 (Intel)- als auch ARM64 (Apple Silicon M1/M2/M3/M4)-Macs in einem einzigen Installationspaket. Öffnen Sie die `.dmg`-Datei, ziehen Sie RcloneView in den Ordner „Programme" und starten Sie die Anwendung.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud remotes in RcloneView on macOS Sonoma" class="img-large img-center" />

Beim ersten Start zeigt macOS Sonoma möglicherweise eine Gatekeeper-Sicherheitsabfrage an. Da RcloneView **von Apple notariell beglaubigt und code-signiert** ist, können Sie bei Bedarf über **Systemeinstellungen > Datenschutz & Sicherheit** fortfahren. Die App wird mit einer eingebetteten rclone-Binary ausgeliefert — eine separate rclone-Installation ist nicht erforderlich, und die App stellt sofort nach dem Start eine Verbindung her.

## macOS-spezifische Konfiguration

macOS Sonoma erzwingt strenge Dateisystem-Datenschutzberechtigungen. Wenn RcloneView für Synchronisationsjobs auf die Ordner Schreibtisch, Dokumente oder Downloads zugreifen muss, gewähren Sie den Zugriff unter **Systemeinstellungen > Datenschutz & Sicherheit > Dateien & Ordner > RcloneView**. Ohne diese Berechtigung erscheinen diese Verzeichnisse im Datei-Explorer leer, obwohl Dateien vorhanden sind — eine häufige Quelle von Verwirrung bei Neuinstallationen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager in RcloneView on macOS Sonoma for cloud drive mounting" class="img-large img-center" />

Für externe SSD- und USB-Laufwerke, die nicht im lokalen Explorer von RcloneView erscheinen, navigieren Sie in der Pfadleiste zu `/Volumes`, um sie zu finden. Das Erstellen eines **Alias**-Remotes, der auf den `/Volumes`-Pfad des Laufwerks verweist, bietet dauerhaften, bequemen Zugriff über das Explorer-Panel.

Der Mount-Typ **nfsmount** wird unter macOS verwendet, um Cloud-Speicher als lokale Laufwerke einzubinden. Eingebundene Remotes erscheinen im Finder als Netzwerklaufwerke — zugänglich von allen Anwendungen, nicht nur von RcloneView. Der VFS-Cache-Modus ist standardmäßig auf „writes" eingestellt, was für allgemeine Nutzung Reaktionsfähigkeit und Datensicherheit ausbalanciert.

## Leistung für Mounts maximieren

Das standardmäßige Limit für Dateihandles unter macOS (256–1024) verursacht Probleme beim Durchsuchen großer Cloud-Verzeichnisse über ein eingebundenes Laufwerk. Um das Limit zu erhöhen, erstellen Sie eine LaunchDaemon-plist unter `/Library/LaunchDaemons/limit.maxfiles.plist`, die sowohl das Soft- als auch das Hard-Limit auf 524288 setzt, und starten Sie anschließend neu. Dies ist besonders wichtig beim Einbinden großer Google-Drive- oder OneDrive-Remotes — ohne diese Anpassung kann der Finder beim Navigieren durch tief verschachtelte Ordner Fehler melden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud sync jobs in RcloneView on macOS Sonoma" class="img-large img-center" />

Die Planungsfunktionen (PLUS-Lizenz) funktionieren unter macOS vollständig — geplante Jobs laufen im Hintergrund, auch wenn RcloneView im Dock oder in der Menüleiste minimiert ist. Das Symbol in der Systemleiste bietet schnellen Zugriff auf den Mount-Status und die Überwachung aktiver Jobs, ohne das Hauptfenster zu öffnen.

## Erste Schritte

1. **RcloneView herunterladen**: `.dmg`-Datei von [rcloneview.com](https://rcloneview.com/src/download.html) und im Ordner „Programme" installieren.
2. Erforderliche Dateisystemberechtigungen unter **Systemeinstellungen > Datenschutz & Sicherheit** erteilen.
3. Ihre Cloud-Remotes (Google Drive, Dropbox, S3) über **Remote-Tab > Neues Remote** hinzufügen.
4. Dateihandle-Limits für optimale Mount-Leistung konfigurieren, wenn große Cloud-Laufwerke eingebunden werden.

RcloneView unter macOS Sonoma bietet den vollen Funktionsumfang — Cloud-Synchronisation, Mount, Planung und Multi-Panel-Verwaltung — mit nativer Apple-Silicon-Leistung und bestätigter Sonoma-Kompatibilität.

---

**Verwandte Anleitungen:**

- [Bestes Cloud-Sync- und Mount-Tool für macOS mit RcloneView](https://rcloneview.com/support/blog/best-cloud-sync-mount-tool-macos-rcloneview)
- [Google Drive mit RcloneView als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [macOS-Fehler „Too Many Open Files" mit RcloneView beheben](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)

<CloudSupportGrid />
