---
slug: mount-sftp-smb-local-drive-rcloneview
title: "SFTP- oder SMB-Speicher mit RcloneView als lokale Laufwerke einbinden — Self-Hosted-Cloud-Integration"
authors:
  - tayson
description: Verwandeln Sie jeden SFTP- oder SMB-Server mit den GUI-Mounts, dem VFS-Cache und dem einheitlichen Multi-Cloud-Dashboard von RcloneView in ein vollwertiges lokales Laufwerk – unter Windows, macOS und Linux.
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP- oder SMB-Speicher mit RcloneView als lokale Laufwerke einbinden — Self-Hosted-Cloud-Integration

> Lassen Sie Ihr NAS, Ihren Heimserver oder Ihren Büro-Dateiserver sich wie Google Drive verhalten: SFTP oder SMB als echten Laufwerksbuchstaben oder `/Volumes`-Pfad einbinden – mit Caching, Pufferung und einer GUI.

SFTP und SMB sind das Rückgrat von selbst gehostetem Speicher – Synology/QNAP-NAS, Heimserver, VPS und Firmen-Dateiserver setzen alle darauf. Sie zuverlässig unter Windows, macOS und Linux einzubinden, bedeutet jedoch oft OS-spezifische Eigenheiten, fragile Authentifizierung, fehlende Caching-Kontrollen und keine einheitliche Ansicht zusammen mit Ihren Clouds.

RcloneView löst das. Es verpackt `rclone mount` in eine benutzerfreundliche Desktop-App, sodass sich Ihre SFTP-/SMB-Freigaben wie moderne Cloud-Laufwerke verhalten – inklusive VFS-Cache, Thumbnail-Streaming, Pufferungs-Feintuning und Automatisierung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP vs. SMB verstehen

| Merkmal          | SFTP                                  | SMB                                          |
| ----------------- | -------------------------------------- | --------------------------------------------- |
| Protokoll          | SSH-basiert                            | Windows-Netzwerkfreigabe                      |
| Beste Verwendung  | Remote-Server, sicher über WAN         | LAN-Dateifreigabe, lokales Netzwerk           |
| Geschwindigkeit    | Moderat (verschlüsselt)                | Sehr schnell im LAN                           |
| Sicherheit        | Standardmäßig stark                    | Abhängig von Version/Richtlinie               |
| Betriebssystem-Unterstützung | Universell                  | Am besten unter Windows/macOS, solide unter Linux |

Wann welches wählen?

- **SFTP**: VPS über das Internet, Zero-Trust-Zugriff, portweitergeleitetes Home-Lab, Entwickler, die Konfigurationen abrufen.
- **SMB**: Büro-LAN, durchsatzstarkes NAS, gemeinsame Laufwerke für Teams, latenzarme Medienbearbeitung innerhalb des Netzwerks.

RcloneView unterstützt beide, zusammen mit Google Drive, S3, Dropbox, OneDrive und mehr – verwaltet über dasselbe Dashboard.

## Warum RcloneView für das Einbinden von SFTP/SMB verwenden

- **Keine CLI erforderlich**: Alle `rclone mount`-Flags werden in der GUI generiert; siehe [Remote Manager](/howto/rcloneview-basic/remote-manager) für Remotes und [Cloud-Speicher als lokales Laufwerk einbinden](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) für geführte Mounts.
- **Plattformübergreifend**: Windows (WinFsp), macOS (macFUSE), Linux (FUSE) mit einheitlicher Benutzeroberfläche.
- **Echte lokale Mounts**: Laufwerksbuchstaben unter Windows oder `/Volumes/Server` unter macOS; Standard-Mountpunkte unter Linux.
- **Performance-bereit**: VFS-Cache, Thumbnail-Streaming, Pufferungskontrollen und Read-Ahead-Tuning im Mount-Dialog verfügbar.
- **Einheitliche Steuerung**: Verwalten Sie SFTP/SMB zusammen mit Cloud-Speicher, planen Sie erneute Mounts und überwachen Sie den Durchsatz an einem Ort (siehe [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution) und [Echtzeit-Übertragungsüberwachung](/howto/rcloneview-basic/real-time-transfer-monitoring)).

## Schritt für Schritt — SFTP oder SMB mit RcloneView einbinden

### 1) Remote hinzufügen (SFTP oder SMB)

- Öffnen Sie **Remote Manager** → **Add Remote** → wählen Sie **SFTP** oder **SMB**.
- Geben Sie **Host/IP** und **Port** ein.
- Authentifizieren Sie sich mit **Benutzername/Passwort** oder **SSH-Schlüssel** für SFTP. Bei SMB legen Sie bei Bedarf Domain/Benutzer fest.
- Speichern Sie das Remote; erwägen Sie, ein Konfigurationspasswort in den [Allgemeinen Einstellungen](/howto/rcloneview-basic/general-settings) zu aktivieren.
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2) Einen Mount-Job erstellen

- Klicken Sie im **Mount Manager** oder in der Explorer-Symbolleiste auf **Mount**.
- Wählen Sie Ihr SFTP-/SMB-Remote aus und legen Sie das Ziel fest:
  - Windows → `X:` (oder ein beliebiger freier Laufwerksbuchstabe)
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server` oder Ihr bevorzugter Pfad

### 3) VFS-Cache und Puffer konfigurieren

- **Cache-Modus**: `Full` für flüssiges Browsen und Thumbnail-Streaming (ideal für Fotos/Plex).
- **Cache-Verzeichnis**: Auf einen SSD-Ordner verweisen.
- **Read-Ahead**: 4–8 MB für das Durchsuchen von Medien; für 4K-Video erhöhen.
- **Write-Back/Pufferung**: Für große sequenzielle Schreibvorgänge aktivieren; Bandbreite begrenzen, wenn Sie Links teilen.

### 4) Einbinden und testen

- Klicken Sie auf **Mount** und öffnen Sie Finder/Explorer/Dateien.
- Durchsuchen Sie Ordner; überprüfen Sie Bildvorschauen und Video-Streaming, um das Caching zu bestätigen.
- Behalten Sie den Mount-Eintrag gespeichert, damit er nach einem Neustart automatisch wieder verbunden wird (Umschalter **Auto Mount**).

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## Anwendungsfälle

- **NAS-Fernzugriff**: Behandeln Sie Ihr NAS wie ein Cloud-Laufwerk von jedem Betriebssystem aus.
- **Lokal ↔ Cloud ↔ Self-Hosted**: Verschieben Sie Dateien zwischen SFTP/SMB und Google Drive/S3/Dropbox in einer Oberfläche.
- **Integration von Büro-Netzlaufwerken**: Bilden Sie Abteilungsfreigaben mit gecachten Thumbnails für Design-Teams ab.
- **Medienbearbeitung**: Bearbeiten Sie Video/Fotos direkt vom NAS mit VFS-Caching, um erneutes Herunterladen zu vermeiden.
- **Multi-Server-Hub**: Binden Sie mehrere SFTP-/SMB-Server nebeneinander ein und ziehen Sie Dateien per Drag-and-drop zwischen ihnen.

## Performance-Tipps

- Stellen Sie **Cache-Modus: Full** für medienintensive Workloads (Plex/Fotos) ein.
- Verwenden Sie ein **NVMe-/SSD-Cache-Verzeichnis**, um Thumbnails und das Durchsuchen zu beschleunigen.
- Erhöhen Sie **Read-Ahead** und **Buffer-Size** für große sequenzielle Lese-/Schreibvorgänge.
- Bevorzugen Sie **LAN** für SMB, wenn der Durchsatz wichtig ist; für SFTP über WAN verwenden Sie SSH-Schlüssel für Stabilität.
- Überwachen Sie Übertragungen in der [Echtzeit-Übertragungsüberwachung](/howto/rcloneview-basic/real-time-transfer-monitoring) und planen Sie erneute Mounts über [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution).

## Fazit — Self-Hosted trifft Multi-Cloud

SFTP und SMB müssen sich nicht länger wie veraltete Netzlaufwerke anfühlen. Mit RcloneView erhalten Sie Cloud-ähnliche Mounts, intelligentes Caching und ein einheitliches Dashboard, das NAS, VPS und öffentliche Clouds ohne Skripte kombiniert. Fügen Sie Ihren Server einmal hinzu, wählen Sie einen Laufwerksbuchstaben oder einen `/Volumes`-Pfad, und lassen Sie RcloneView den Mount am Leben erhalten, während Sie sich auf Ihre Dateien konzentrieren.

<CloudSupportGrid />
