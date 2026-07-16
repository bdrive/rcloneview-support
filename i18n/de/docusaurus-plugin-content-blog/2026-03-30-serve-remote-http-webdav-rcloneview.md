---
slug: serve-remote-http-webdav-rcloneview
title: "Remote über HTTP und WebDAV freigeben — Cloud-Dateien mit RcloneView teilen"
authors:
  - tayson
description: "Nutzen Sie RcloneView, um Cloud-Speicher-Remotes über HTTP und WebDAV freizugeben und so den Dateizugriff aus Browsern, Dateimanagern und anderen Geräten zu ermöglichen."
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - RcloneView
  - feature
  - webdav
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote über HTTP und WebDAV freigeben — Cloud-Dateien mit RcloneView teilen

> Verwandeln Sie jeden Cloud-Speicher-Remote in einen lokalen HTTP- oder WebDAV-Server und greifen Sie über Browser, Dateimanager und Medienplayer auf Ihre Dateien zu.

Die Serve-Funktion von rclone ermöglicht es, einen Cloud-Speicher-Remote als lokalen Netzwerkdienst bereitzustellen. RcloneView macht diese Funktion über seine grafische Oberfläche zugänglich und erlaubt es, mit wenigen Klicks einen HTTP- oder WebDAV-Server für jeden konfigurierten Remote zu starten. Das eröffnet leistungsstarke Workflows: S3-Buckets im Webbrowser durchsuchen, Google Drive auf Geräten einbinden, die keine native Unterstützung bieten, oder Mediendateien von Wasabi direkt an einen Videoplayer streamen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloud-Speicher über HTTP bereitstellen

Der HTTP-Serve-Modus von RcloneView startet einen leichtgewichtigen Webserver, der Ihre Cloud-Speicher-Dateien über eine browserfreundliche Verzeichnisansicht präsentiert. Richten Sie ihn auf einen beliebigen Remote — Google Drive, Dropbox, ein S3-Bucket oder sogar einen verschlüsselten Crypt-Remote — und er erzeugt eine navigierbare HTML-Oberfläche unter einer lokalen Adresse wie `http://localhost:8080`.

Das ist besonders nützlich, um Dateien mit Kollegen im selben Netzwerk zu teilen, ohne ihnen direkten Zugriff auf Ihre Cloud-Speicher-Zugangsdaten zu gewähren. Starten Sie den HTTP-Server, teilen Sie die lokale URL, und sie können Dateien über ihren Webbrowser durchsuchen und herunterladen. Der Server läuft nur, solange RcloneView geöffnet ist, und Sie bestimmen, welcher Remote oder Unterordner freigegeben wird.

Für Teams, die in abgeschotteten oder eingeschränkten Netzwerkumgebungen arbeiten, bietet HTTP-Serve eine Möglichkeit, auf in der Cloud gespeicherte Referenzmaterialien, Dokumentationen oder Datensätze zuzugreifen, ohne auf jeder Workstation Cloud-Anbieter-Clients installieren zu müssen. Ein einzelner Rechner mit RcloneView dient als Zugangspunkt.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## Cloud-Speicher über WebDAV bereitstellen

WebDAV (Web Distributed Authoring and Versioning) erweitert HTTP um Dateiverwaltungsfunktionen — Lesen, Schreiben, Umbenennen und Löschen von Dateien über das Netzwerk. Wenn Sie einen Remote über WebDAV in RcloneView freigeben, wird der Cloud-Speicher als Netzwerklaufwerk auf jedem Gerät zugänglich, das WebDAV unterstützt, einschließlich Windows, macOS, Linux, iOS und Android.

Unter Windows können Sie eine WebDAV-Freigabe über den Explorer als Netzlaufwerk einbinden. Unter macOS nutzen Sie den Finder-Dialog „Mit Server verbinden“. Unter Linux unterstützen Dateimanager wie Nautilus und Dolphin WebDAV nativ. Das bedeutet, Ihr Google Drive, OneDrive oder S3-Speicher erscheint als gewöhnlicher Ordner auf Geräten, die möglicherweise keine dedizierten Cloud-Client-Apps besitzen.

WebDAV-Serve ermöglicht zudem die Integration mit Anwendungen, die WebDAV als Speicher-Backend unterstützen. Dokumenteneditoren, Medienplayer und Backup-Tools können über den WebDAV-Endpunkt von Ihrem Cloud-Speicher lesen und dorthin schreiben, ohne jegliche cloud-spezifische Konfiguration.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## Authentifizierung und Sicherheit

Standardmäßig laufen HTTP- und WebDAV-Serve ohne Authentifizierung, was sie nur für vertrauenswürdige Netzwerke geeignet macht. Für jedes Szenario mit sensiblen Daten oder Netzwerkexposition unterstützt RcloneView die Konfiguration von HTTP-Basic-Authentifizierung mit Benutzername und Passwort. So wird sichergestellt, dass nur autorisierte Benutzer auf die freigegebenen Dateien zugreifen können.

Für zusätzliche Sicherheit binden Sie den Server an `127.0.0.1` (nur lokal), um Zugriffe von anderen Rechnern im Netzwerk zu verhindern. Falls Sie Fernzugriff benötigen, kombinieren Sie den Serve-Endpunkt mit einem SSH-Tunnel oder VPN, statt ihn direkt dem Internet auszusetzen. Im Serve-Konfigurationspanel von RcloneView können Sie Bind-Adresse, Port und Authentifizierungsdaten festlegen, bevor Sie den Server starten.

Beim Bereitstellen eines verschlüsselten Crypt-Remotes werden Dateien beim Zugriff on-the-fly entschlüsselt. Das bedeutet, Sie können verschlüsselte Daten in der Cloud speichern und lokal in entschlüsselter Form freigeben — nützlich für den Zugriff auf sensible Archive, ohne sie dauerhaft auf der Festplatte zu entschlüsseln.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## Praktische Workflows

**Medien-Streaming:** Geben Sie einen Cloud-Remote mit Video- oder Audiodateien über HTTP frei und öffnen Sie dann die Datei-URLs in VLC oder einem anderen Medienplayer. So vermeiden Sie das Herunterladen ganzer Medienbibliotheken auf den lokalen Speicher.

**Geräteübergreifender Dateizugriff:** Betreiben Sie RcloneView auf einem Heimserver oder einer dauerhaft laufenden Workstation und geben Sie Ihren Cloud-Speicher über WebDAV frei. Verbinden Sie sich von Tablets, Smartphones oder anderen Computern im selben Netzwerk.

**Entwicklung und Tests:** Geben Sie während der Entwicklung ein S3-Bucket lokal frei, um Anwendungen zu testen, die Dateien über eine Web-URL konsumieren, ohne in eine Staging-Umgebung zu deployen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurieren Sie den Cloud-Speicher-Remote, den Sie freigeben möchten (S3, Google Drive, Dropbox usw.).
3. Öffnen Sie das Serve-Panel, wählen Sie den HTTP- oder WebDAV-Modus, legen Sie Port und optionale Authentifizierung fest.
4. Starten Sie den Server und greifen Sie über einen Browser oder Dateimanager unter der lokalen Adresse auf Ihre Cloud-Dateien zu.

Die Serve-Funktion von RcloneView verwandelt Cloud-Speicher in eine sofort zugängliche lokale Ressource für jedes Gerät in Ihrem Netzwerk.

---

**Verwandte Anleitungen:**

- [Bisync Bidirektionale Synchronisation — Zweiwege-Cloud-Synchronisation in RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [WebDAV-Server für Cloud-Synchronisation mit RcloneView verbinden](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [SFTP und SMB als lokales Laufwerk mit RcloneView einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
