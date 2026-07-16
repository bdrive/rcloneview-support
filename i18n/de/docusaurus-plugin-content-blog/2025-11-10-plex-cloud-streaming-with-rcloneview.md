---
slug: plex-cloud-mount-rcloneview
title: "Cloud-Filme mit Plex & RcloneView streamen — Google Drive, Dropbox oder S3 als Ihre Bibliothek einbinden"
authors:
  - tayson
description: Nutzen Sie RcloneView, um Google Drive, Dropbox, Wasabi oder S3 als lokales Laufwerk einzubinden, das Plex indizieren kann. Streamen Sie Ihre in der Cloud gespeicherten Filme ohne Download — keine Kommandozeile erforderlich.
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Filme mit Plex & RcloneView streamen — Google Drive, Dropbox oder S3 als Ihre Bibliothek einbinden

> Speicherplatz alle? Binden Sie Ihre Cloud mit RcloneView als lokales Laufwerk ein und lassen Sie Plex direkt davon streamen — reibungslos, zuverlässig und ohne Kommandozeilen-Setup.

Plex ist hervorragend darin, Ihre Medien zu organisieren und zu streamen, aber der lokale Speicher füllt sich schnell. Cloud-Speicher wie Google Drive, Dropbox, Wasabi, Cloudflare R2 oder S3 bieten dagegen günstigen, praktisch unbegrenzten Platz. Was fehlt, ist ein einfacher Weg, damit Plex diese Cloud-Ordner wie einen lokalen Pfad „sieht". Der `mount`-Befehl von rclone löst genau das, und RcloneView verpackt diese Funktion in eine einfache Oberfläche: Cloud-Ordner auswählen, Laufwerksbuchstaben oder Mount-Pfad festlegen, Caching aktivieren, fertig. Kein Terminal, keine Flags zum Auswendiglernen.

<!-- truncate -->

RcloneView nutzt im Hintergrund die bewährte rclone-Engine. Sie können alle wichtigen Anbieter verbinden, sie als lokale Ordner oder Laufwerksbuchstaben einbinden (mount) und Plex auf diese Pfade verweisen lassen. Mit den richtigen VFS-Cache-Einstellungen kann Plex Cloud-Speicher mit minimaler Pufferung scannen, durchsuchen und davon streamen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## So passen Plex und RcloneView zusammen

Plex scannt einen lokalen Pfad (zum Beispiel `X:\Movies` unter Windows oder `/Volumes/Cloud/Movies` unter macOS). RcloneView bindet Ihren Cloud-Ordner in diesen Pfad ein, sodass Plex ihn wie jedes andere lokale Verzeichnis behandelt.

Text-Diagramm
[Google Drive Movies] ⇄ [RcloneView Mount (X:/ oder /Volumes/Cloud)] ⇄ [Plex Media Library]

Hilfreiche Dokumentation

- Grundlagen zum Einbinden (Mount) in RcloneView: [Cloud-Speicher als lokales Laufwerk einbinden](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- Erweiterte Flags über Embedded Rclone: [Allgemeine Einstellungen](/howto/rcloneview-basic/general-settings)
- OAuth-Logins hinzufügen (Google/Dropbox/OneDrive): [Anmeldung über den Browser verbinden](/howto/remote-storage-connection-settings/add-oath-online-login)
- S3/Wasabi/R2-Einrichtung: [S3-Speicher konfigurieren](/howto/remote-storage-connection-settings/s3) · [Cloudflare-R2-Zugangsdaten](/howto/cloud-storage-setting/cloudflare-r2-credential)

## In wenigen Klicks einbinden und streamen

Cloud verbinden, Mount erstellen und Plex darauf verweisen. Das war's.

1. Remote verbinden

- Google Drive, OneDrive, Dropbox sowie S3/Wasabi/R2 werden alle unterstützt. Fügen Sie jeden über `+ New Remote` hinzu.
- Anleitungen: [OAuth-basierte Anbieter](/howto/remote-storage-connection-settings/add-oath-online-login) · [S3-kompatibler Speicher](/howto/remote-storage-connection-settings/s3) · [Hinweise zum Dropbox-Backend](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. Mount erstellen

- Methode 1 — Über den Remote Explorer: [Mount über den Remote Explorer](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- Methode 2 — Über den Mount Manager: [Mount über den Mount Manager](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. Mount-Ziel wählen

- Windows: Laufwerksbuchstaben wählen (z. B. `X:`). Im Hintergrund nutzt RcloneView für die Kompatibilität `cmount`.
- macOS: Mount-Pfad unter `/Volumes/Cloud` wählen (oder einen benutzerdefinierten Pfad).
- Linux: Mount-Verzeichnis wählen (z. B. `/mnt/plex-cloud`).

4. Cache für Plex konfigurieren

- Setzen Sie im Mount-Dialog unter Advanced Options den **Cache mode** für beste Plex-Kompatibilität auf `full`.
- Legen Sie optional **Cache max size** (z. B. 10–50 GB) und **Dir cache time** fest.
- Sie können außerdem globale Flags wie `--vfs-read-ahead` unter Embedded Rclone → **Global Rclone Flags** anpassen. Siehe: /support/howto/rcloneview-basic/general-settings

5. Einbinden und überprüfen

- Klicken Sie auf „Save and mount" und öffnen Sie dann den Mount-Ordner in Ihrem Dateimanager, um zu prüfen, ob Sie Filme durchsuchen können.

6. Zu Plex hinzufügen

- Plex → Libraries → Add Library → Add folders → wählen Sie Ihren eingebundenen Pfad (`X:\Movies` oder `/Volumes/Cloud/Movies`). Lassen Sie Plex scannen und indizieren.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## Leistungsoptimierung für flüssige Wiedergabe

Diese Einstellungen reduzieren Pufferung und verbessern das Springen (Seeking) beim Streamen hochauflösender Dateien aus dem Cloud-Speicher.

- VFS-Cache-Modus: Verwenden Sie `full` für Scannen und Seeking (Transcodes und Thumbnails funktionieren zuverlässiger).
- Cache-Größe: Reservieren Sie 10–50 GB, wenn SSD-Speicher verfügbar ist.
- Read-Ahead: Erhöhen Sie `--vfs-read-ahead` (z. B. 64M–256M) über Global Rclone Flags.
- Bandbreitenlimits: Setzen Sie bei ausgelastetem Netzwerk ein sinnvolles Limit, damit Plex auch zu Stoßzeiten flüssig bleibt.
- Plex-Metadaten lokal halten: Speichern Sie Metadaten und Thumbnails auf der lokalen SSD; belassen Sie nur die Medien in der Cloud.

Hinweis: Cache-Größe und Read-Ahead hängen von der Arbeitslast ab. Beginnen Sie vorsichtig und passen Sie die Werte an, während Sie Wiedergabe und Laufwerksaktivität beobachten.

## Wer den größten Nutzen hat

- Heimkino-Sammler: Bewahren Sie ein 10-TB-Filmarchiv in Google Drive oder Dropbox auf und streamen Sie über Plex, ohne den lokalen Speicher zu erweitern.
- Hybride NAS-Setups: Nutzen Sie das NAS als SSD-Cache-Ebene, während die Hauptbibliothek über einen Mount in S3/Wasabi/R2 liegt.
- Entwickler und Homelabber: Binden Sie RcloneView-Mounts in dockerisiertes Plex ein; nutzen Sie gespeicherte Mounts und Auto-Mount beim Login für Zuverlässigkeit.

## Wichtige Fehlerbehebung

- Bibliothekspfad in Plex nicht sichtbar: Prüfen Sie, ob der Mount aktiv ist und der Betriebssystembenutzer, unter dem Plex läuft, auf den Mount-Pfad zugreifen kann.
- Mount verschwindet nach einem Neustart: Aktivieren Sie **Auto mount** im Mount-Dialog und erwägen Sie „Launch at login" in den Einstellungen. → [Cloud-Speicher als lokales Laufwerk einbinden](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [Allgemeine Einstellungen](/howto/rcloneview-basic/general-settings)
- Langsame Scans oder Ruckeln: Verwenden Sie `Cache mode: full`, erhöhen Sie Cache-Größe und `--vfs-read-ahead`, halten Sie Metadaten lokal.
- API-Limits oder Drosselung: Planen Sie Scans außerhalb der Stoßzeiten; nutzen Sie Compare & Sync, um bei sehr großen Bibliotheken zu steuern, was Plex scannt. → [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents) · [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)

## Cloud-Filme, lokales Erlebnis

Das Einbinden mit RcloneView lässt Plex Ihre Cloud wie ein schnelles lokales Laufwerk behandeln. Sie behalten die Flexibilität und Skalierbarkeit von Google Drive, Dropbox, Wasabi oder S3, und Plex liefert dieselbe ausgereifte Erfahrung — nur ohne die Kopfschmerzen wegen Speicherplatz. Richten Sie einen Mount ein, verweisen Sie Plex darauf, stimmen Sie den Cache ab und drücken Sie Play.

Bereit, es auszuprobieren? Laden Sie RcloneView herunter und bauen Sie noch heute Ihre cloudgestützte Plex-Bibliothek auf.


<CloudSupportGrid />
