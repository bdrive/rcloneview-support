---
slug: serve-webdav-http-from-cloud-rcloneview
title: "Cloud-Speicher mit RcloneView als WebDAV oder HTTP bereitstellen"
authors:
  - tayson
description: "Nutzen Sie den serve-Befehl von rclone über RcloneView, um Cloud-Speicher als lokalen WebDAV- oder HTTP-Server bereitzustellen. Greifen Sie in Apps mit WebDAV-Unterstützung auf Dateien zu, ohne ein Laufwerk einzubinden."
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher mit RcloneView als WebDAV oder HTTP bereitstellen

> RcloneView kann jeden Cloud-Speicher-Anbieter als lokalen WebDAV- oder HTTP-Server bereitstellen. Jede App mit WebDAV-Unterstützung — Dateimanager, DAM-Tools, Kreativ-Apps, Mobil-Clients — kann dann Cloud-Dateien direkt lesen und schreiben.

Das Einbinden (Mount) eines Cloud-Laufwerks über die VFS-Schicht von rclone ist die gängigste Methode, um Cloud-Speicher lokal bereitzustellen. Doch manche Szenarien erfordern einen anderen Ansatz: einen WebDAV-Server, mit dem sich Anwendungen über das Netzwerk verbinden können, einen einfachen HTTP-Server zur Bereitstellung von Dateien für einen Browser, oder eine leichtgewichtige Möglichkeit, von einem Gerät aus auf Cloud-Speicher zuzugreifen, das keine FUSE-Laufwerke einbinden kann. Der `serve`-Befehl von rclone deckt all das ab — und RcloneView gibt Ihnen darauf Zugriff über das Terminal und die Job-Oberfläche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was rclone bereitstellen kann

Rclone unterstützt über den Befehl `rclone serve` mehrere Server-Protokolle:

| Protokoll | Anwendungsfall |
|----------|-----------------|
| `webdav` | Dateimanager, DAM-Tools, Apps mit WebDAV-Unterstützung |
| `http` | Schreibgeschützter Browserzugriff auf Cloud-Dateien |
| `ftp` | Kompatibilität mit älteren Apps |
| `sftp` | Sicherer, Shell-basierter Dateizugriff |
| `s3` | Beliebige Cloud als S3-kompatibel bereitstellen (mit S3-Clients nutzen) |
| `dlna` | Medien-Streaming auf DLNA-kompatible Geräte |

Diese Anleitung konzentriert sich auf WebDAV und HTTP, die für Desktop-Workflows am nützlichsten sind.

## Anwendungsfall 1: WebDAV für App-Integration

Viele professionelle Apps unterstützen WebDAV nativ: Cyberduck, Finder (macOS), Adobe Bridge, DAM-Tools, Projektmanagement-Tools und mehr. Wenn Sie Ihren Cloud-Speicher als WebDAV bereitstellen, wird er für diese Apps zugänglich, ohne dass ein Laufwerk eingebunden werden muss.

### WebDAV-Server über RcloneView starten

Öffnen Sie das **Terminal**-Panel in RcloneView und führen Sie aus:

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

Dies startet einen WebDAV-Server unter `http://127.0.0.1:8888`, der den Ordner `/Documents/` Ihres Google Drive bereitstellt.

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### Von einer App aus verbinden

Fügen Sie in jeder WebDAV-fähigen App eine WebDAV-Verbindung hinzu:
- **URL**: `http://127.0.0.1:8888`
- **Benutzername**: `myuser`
- **Passwort**: `mypassword`

Die App sieht Ihren Google-Drive-Ordner Documents dann als WebDAV-Freigabe — durchsuchbar, lesbar und beschreibbar.

## Anwendungsfall 2: HTTP für schreibgeschützten Browserzugriff

Um Dateien mit Kolleginnen und Kollegen zu teilen, ohne ihnen Zugriff auf das Cloud-Konto zu gewähren, stellen Sie einen Ordner als HTTP bereit:

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

Jeder im Netzwerk kann `http://your-machine-ip:8080` in einem Browser öffnen und eine Verzeichnisauflistung mit Download-Links sehen — kein Cloud-Konto erforderlich.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## Anwendungsfall 3: S3 bereitstellen für Kompatibilität mit S3-Clients

Eine leistungsstarke Technik: Stellen Sie eine Nicht-S3-Cloud (wie Google Drive oder die native API von Backblaze B2) als S3-kompatiblen Endpunkt bereit, sodass jeder S3-Client darauf zugreifen kann:

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

S3-Clients (AWS CLI, s3cmd, jedes S3-SDK) können sich dann mit `http://127.0.0.1:9000` verbinden und mit Google Drive interagieren, als wäre es S3.

## Einen dauerhaften Serve-Job erstellen

Um einen serve-Befehl beim Start oder nach Zeitplan auszuführen:

1. Erstellen Sie in RcloneView einen neuen **Job** im Modus **Custom Command**.
2. Geben Sie Ihren `rclone serve webdav`-Befehl mit den gewünschten Flags ein.
3. Legen Sie fest, dass er beim Start von RcloneView automatisch startet, oder planen Sie ihn nach Bedarf.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## Sicherheitsüberlegungen

| Szenario | Empfehlung |
|----------|-----------|
| Nur lokale Nutzung | An `127.0.0.1` binden — nicht von außerhalb Ihres Rechners erreichbar |
| LAN-Freigabe | An die lokale IP Ihres Rechners binden, `--user` und `--pass` hinzufügen |
| Internet-zugänglich | HTTPS verwenden (Flags `--cert` und `--key` hinzufügen) oder hinter einen Reverse-Proxy stellen |
| Öffentlicher HTTP-Server | `rclone serve http` mit schreibgeschütztem VFS verwenden: `--read-only` hinzufügen |

Setzen Sie für jeden Server, der über `127.0.0.1` hinaus erreichbar ist, immer Benutzername/Passwort:

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## Nützliche Serve-Flags

| Flag | Zweck |
|------|-------|
| `--addr host:port` | Bind-Adresse und Port |
| `--user` / `--pass` | HTTP Basic Auth |
| `--read-only` | Schreibvorgänge verhindern |
| `--vfs-cache-mode full` | Dateien lokal zwischenspeichern für bessere Leistung |
| `--no-modtime` | Meldung der Änderungszeit deaktivieren (nützlich für manche Apps) |
| `--htpasswd /path/file` | htpasswd-Datei für mehrere Benutzer verwenden |

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Öffnen Sie das Terminal** in RcloneView.
3. **Führen Sie `rclone serve webdav remote:path --addr 127.0.0.1:8888`** aus, um einen WebDAV-Server zu starten.
4. **Verbinden Sie sich von Ihrer App aus** mit der WebDAV-URL und den Zugangsdaten.

WebDAV erschließt den Zugriff auf Cloud-Speicher für Dutzende Apps, die sonst nicht in der Lage wären, Ihre Cloud-Dateien zu lesen. Kein Mount erforderlich.

---

**Weiterführende Anleitungen:**

- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [SFTP und SMB als lokale Laufwerke einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneView Terminal: CLI innerhalb der GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
