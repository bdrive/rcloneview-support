---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "Cloud-Medien per DLNA und FTP-Server mit RcloneView streamen"
authors: [tayson]
description: "Richten Sie DLNA-Medienstreaming und FTP-Server-Zugriff auf Ihren Cloud-Speicher mit rclone serve und RcloneView ein, für nahtlose Medienwiedergabe auf jedem Gerät."
keywords:
  - rclone dlna server
  - cloud storage media streaming
  - rclone ftp server
  - stream google drive dlna
  - cloud media server
  - rclone serve dlna
  - rcloneview media streaming
  - ftp cloud storage
  - smart tv cloud streaming
  - rclone media player
tags: [feature, media, tips, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Medien per DLNA und FTP-Server mit RcloneView streamen

> Verwandeln Sie Ihren Cloud-Speicher in einen persönlichen Medienserver, indem Sie Inhalte direkt an Smart-TVs, Media-Player und FTP-Clients über rclone serve streamen.

Ihr Cloud-Speicher enthält Terabytes an Fotos, Videos und Musik, aber der Zugriff auf diese Inhalte über Ihren Wohnzimmer-Fernseher oder herkömmliche Dateiübertragungstools kann frustrierend umständlich sein. Der `serve`-Befehl von rclone löst dieses Problem, indem er jedes Cloud-Remote als DLNA-Medienserver, FTP-Server, HTTP-Server oder WebDAV-Endpunkt bereitstellt. In Kombination mit der intuitiven Oberfläche von RcloneView zur Verwaltung von Remotes und Überwachung von Verbindungen können Sie in wenigen Minuten einen voll funktionsfähigen, cloud-basierten Medienserver einrichten. Diese Anleitung behandelt DLNA-Streaming zu Smart-TVs und Media-Playern, die FTP-Server-Konfiguration für den Zugriff mit älteren Clients, Performance-Tuning für eine flüssige Wiedergabe sowie Zugriffskontrolle für Umgebungen mit mehreren Benutzern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Rclone Serve funktioniert

Der `serve`-Befehl von rclone erstellt einen lokalen Server, der Anfragen von Standardprotokollen (DLNA, FTP, HTTP, WebDAV) in Cloud-Speicher-API-Aufrufe übersetzt. Wenn ein Smart-TV ein Video über DLNA anfordert, ruft rclone die Datei von Ihrem Cloud-Anbieter ab und streamt sie in Echtzeit. Das Client-Gerät merkt nicht, dass es auf Cloud-Speicher zugreift -- es sieht lediglich einen Standard-Medienserver oder Dateiserver.

**Verfügbare serve-Protokolle:**

| Protokoll | Anwendungsfall | Typische Clients |
|----------|----------|----------------|
| DLNA | Medienstreaming zu TVs und Playern | Smart-TVs, VLC, Kodi, Xbox, PlayStation |
| FTP | Dateiübertragung für ältere Anwendungen | FileZilla, WinSCP, Kommandozeilen-FTP-Clients |
| HTTP | Browserbasierter Dateizugriff | Jeder Webbrowser |
| WebDAV | Einbindbares Netzlaufwerk | Windows Explorer, macOS Finder, Linux-Dateimanager |
| SFTP | Sichere Dateiübertragung | SSH-Clients, SFTP-fähige Anwendungen |

**Architekturübersicht:**

Der Datenfluss ist unkompliziert:

1. Ein Client-Gerät entdeckt die rclone-serve-Instanz in Ihrem lokalen Netzwerk oder verbindet sich mit ihr.
2. Der Client fordert eine Dateiliste oder eine bestimmte Datei an.
3. Rclone übersetzt die Anfrage in Cloud-Speicher-API-Aufrufe.
4. Daten werden vom Cloud-Anbieter über rclone zum Client gestreamt.
5. Optionales VFS-Caching speichert häufig genutzte Daten lokal für einen schnelleren erneuten Zugriff.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

Diese Architektur bedeutet, dass Ihre Mediathek vollständig in der Cloud liegen kann, während sie für jedes Gerät in Ihrem Netzwerk über Standardprotokolle zugänglich bleibt.

## DLNA-Medienstreaming einrichten

DLNA (Digital Living Network Alliance) ist der universelle Standard für Medienstreaming in Heimnetzwerken. Nahezu jeder Smart-TV, jede Spielekonsole und jeder Media-Player unterstützt DLNA-Erkennung und -Wiedergabe.

**Einen einfachen DLNA-Server starten:**

Starten Sie über das integrierte Terminal von RcloneView einen DLNA-Server, der auf Ihre Cloud-Mediathek verweist:

```bash
rclone serve dlna gdrive:/Media
```

Dies erstellt sofort einen DLNA-Server, der sich in Ihrem lokalen Netzwerk bekannt macht. Jedes DLNA-fähige Gerät im selben Netzwerk erkennt ihn automatisch.

**Den DLNA-Server anpassen:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**Wichtige DLNA-Flags:**

| Flag | Zweck | Empfohlener Wert |
|------|---------|-------------------|
| `--name` | Für Clients sichtbarer Servername | Aussagekräftiger Name wie „Cloud Movies" |
| `--addr` | Listen-Adresse und Port | `:7879` (Standard) |
| `--vfs-cache-mode` | Caching-Strategie | `full` für flüssiges Streaming |
| `--vfs-cache-max-size` | Maximale lokale Cache-Größe | 5-20 GB je nach verfügbarem Speicherplatz |
| `--vfs-read-ahead` | Daten-Prefetch-Puffer | 128M-256M für Video-Streaming |
| `--vfs-cache-max-age` | Wie lange gecachte Dateien erhalten bleiben | `24h` für Mediatheken |

**Verbindung von einem Smart-TV herstellen:**

1. Starten Sie den DLNA-Server mit dem obigen Befehl.
2. Öffnen Sie auf Ihrem Smart-TV den Medienplayer oder DLNA-Browser (der genaue Name variiert je nach Hersteller -- Samsung nutzt „SmartThings", LG nutzt „Media Player", Sony nutzt „Media Player").
3. Suchen Sie nach dem von Ihnen angegebenen Servernamen (z. B. „Cloud Media Server").
4. Durchsuchen Sie Ordner und wählen Sie Medien zur Wiedergabe aus.

**Verbindung von VLC herstellen:**

1. Öffnen Sie den VLC Media Player.
2. Navigieren Sie zu Ansicht > Wiedergabeliste > Lokales Netzwerk > Universal Plug'n'Play.
3. Ihr rclone-DLNA-Server erscheint in der Liste.
4. Durchsuchen und spielen Sie Medien direkt ab.

**Medien aus S3-kompatiblem Speicher servieren:**

S3 und ähnliche Objektspeicher-Anbieter eignen sich hervorragend für Mediatheken, da die Kosten pro Gigabyte niedrig sind:

```bash
# Von Wasabi servieren (S3-kompatibel, keine Egress-Gebühren)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Einen FTP-Server einrichten

FTP wird nach wie vor häufig für Dateiübertragungen verwendet, insbesondere bei älteren Anwendungen, netzwerkgebundenen Geräten und automatisierten Workflows. Rclone kann jedes Cloud-Remote als voll funktionsfähigen FTP-Server bereitstellen.

**Einen einfachen FTP-Server starten:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

Dies erstellt einen FTP-Server auf Port 2121, der Zugriff auf Ihr gesamtes Google Drive bietet.

**Erweiterte FTP-Konfiguration:**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**Wichtige FTP-Flags:**

| Flag | Zweck |
|------|---------|
| `--addr` | Listen-Adresse und Port |
| `--user` / `--pass` | FTP-Authentifizierungsdaten |
| `--passive-port` | Portbereich für Passiv-Modus-Verbindungen |
| `--vfs-cache-mode` | `writes` für Upload-Unterstützung, `full` für Lese-/Schreib-Caching |
| `--dir-cache-time` | Wie lange Verzeichnislistings zwischengespeichert werden |
| `--read-only` | Uploads und Änderungen verhindern |

**Verbindung von FileZilla oder anderen FTP-Clients herstellen:**

1. Öffnen Sie Ihren FTP-Client.
2. Geben Sie den Host (IP des Rechners, auf dem rclone läuft), Port (2121), Benutzername und Passwort ein.
3. Verbinden Sie sich und durchsuchen Sie Ihren Cloud-Speicher, als wäre es ein herkömmlicher FTP-Server.

**Anwendungsfälle für das FTP-Serving:**

- **Integration älterer Anwendungen:** Ältere Anwendungen, die nur FTP unterstützen, können nun auf Cloud-Speicher zugreifen.
- **Uploads von Netzwerkscannern:** Konfigurieren Sie Dokumentenscanner so, dass gescannte Dateien direkt per FTP in den Cloud-Speicher gesendet werden.
- **Automatisierte Datei-Drops:** Richten Sie einen nur schreibbaren FTP-Endpunkt zum Empfangen von Dateien von externen Parteien ein.
- **Plattformübergreifender Zugriff:** FTP funktioniert auf jedem Betriebssystem, ohne dass zusätzliche Software installiert werden muss.

## Performance-Tuning für Streaming

Flüssiges Medienstreaming erfordert eine sorgfältige Abstimmung des VFS-Caches (Virtual File System) und der Netzwerkeinstellungen von rclone.

**VFS-Cache-Modi verstehen:**

| Modus | Verhalten | Am besten geeignet für |
|------|----------|----------|
| `off` | Kein Caching, direktes Streaming | Kleine Dateien, Hochbandbreiten-Verbindungen |
| `minimal` | Nur geöffnete Dateien cachen | Leichtes Medien-Browsing |
| `writes` | Schreibvorgänge lokal cachen, Lesevorgänge streamen | Upload-intensive FTP-Nutzung |
| `full` | Vollständiges Lese-/Schreib-Caching | Video-Streaming, Medienwiedergabe |

Für Medienstreaming ist der `full`-Cache-Modus fast immer die richtige Wahl. Er sorgt dafür, dass die Videowiedergabe aufgrund von Netzwerklatenz oder API-Drosselung nicht stockt.

**Optimierung für Video-Streaming:**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

Wichtige Parameter erklärt:
- **`--vfs-read-ahead 256M`**: Lädt 256 MB Daten vorab, bevor die aktuelle Wiedergabeposition erreicht wird, und verhindert so Pufferung während der Wiedergabe.
- **`--vfs-read-chunk-size 32M`**: Anfängliche Chunk-Größe für Lesevorgänge. Beginnt bei 32 MB und verdoppelt sich bis zum Limit.
- **`--vfs-read-chunk-size-limit 256M`**: Maximale Chunk-Größe. Größere Chunks bedeuten weniger API-Aufrufe, aber höhere anfängliche Latenz.
- **`--buffer-size 64M`**: Speicherpuffer für jede geöffnete Datei.

**Bandbreitenüberlegungen:**

Die Bandbreitenanforderungen für Video-Streaming variieren je nach Qualität erheblich:

| Videoqualität | Bitrate | Mindestverbindung |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | 10 Mbps empfohlen |
| 1080p | 8-12 Mbps | 25 Mbps empfohlen |
| 4K | 25-40 Mbps | 50 Mbps empfohlen |

Wenn Ihre Internetverbindung oder der Egress Ihres Cloud-Anbieters diese Raten nicht bewältigen kann, sollten Sie erwägen, Ihre Medien vor dem Hochladen auf niedrigere Bitraten zu transkodieren, oder einen Anbieter mit schnellem Egress wie Wasabi oder einen CDN-gestützten S3-Bucket zu verwenden.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Streaming-Performance überwachen:**

Nutzen Sie die Übertragungsüberwachung von RcloneView, um den Durchsatz in Echtzeit zu beobachten und Engpässe zu identifizieren. Wenn Sie häufige Pausen gefolgt von Schüben feststellen, erhöhen Sie den Read-Ahead-Puffer. Wenn Übertragungen durchgehend langsam sind, liegt der Engpass wahrscheinlich an Ihrer Internetverbindung oder der Durchsatzbegrenzung des Cloud-Anbieters.

## Zugriffskontrolle und Mehrbenutzer-Setup

Für gemeinsam genutzte Umgebungen müssen Sie kontrollieren, wer auf welche Inhalte zugreifen kann.

**FTP-Mehrbenutzer-Setup:**

Der FTP-Server von rclone unterstützt direkt nur ein einziges Benutzername-Passwort-Paar. Für Umgebungen mit mehreren Benutzern führen Sie mehrere serve-Instanzen auf unterschiedlichen Ports aus:

```bash
# Familienmedien - nur Lesezugriff
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin-Zugriff - volle Kontrolle
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**Nur-Lese-Zugriff:**

Für Medienserver ist ein Nur-Lese-Zugriff in der Regel angemessen:

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**Beschränkung auf bestimmte Verzeichnisse:**

Servieren Sie nur bestimmte Unterverzeichnisse, um die Angriffsfläche zu begrenzen:

```bash
# Nur den Movies-Ordner servieren, nicht das gesamte Laufwerk
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Ein bestimmtes S3-Präfix servieren
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**Einschränkungen auf Netzwerkebene:**

Binden Sie an bestimmte Schnittstellen, um den Netzwerkzugriff zu steuern:

```bash
# Nur vom lokalen Rechner aus zugänglich
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Nur aus dem lokalen Netzwerk zugänglich
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## Als dauerhaften Dienst ausführen

Für einen dauerhaft laufenden Medienserver konfigurieren Sie rclone serve so, dass er automatisch startet.

**Linux-systemd-Dienst:**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Windows-Dienst-Einrichtung:**

Verwenden Sie unter Windows NSSM (Non-Sucking Service Manager) oder die Aufgabenplanung, um den rclone-serve-Befehl beim Start auszuführen:

```powershell
# Verwendung der Aufgabenplanung (Ausführung bei Anmeldung)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**Mehrere Server gleichzeitig ausführen:**

Sie können DLNA- und FTP-Server gleichzeitig ausführen, um maximale Kompatibilität zu gewährleisten:

```bash
# DLNA für Smart-TVs und Media-Player
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP für den Zugriff über den Dateimanager
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP für Browserzugriff
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Serve vs. Mount im Vergleich

Sowohl `rclone serve` als auch `rclone mount` machen Cloud-Speicher lokal zugänglich, dienen aber unterschiedlichen Zwecken.

| Funktion | Serve (DLNA/FTP) | Mount |
|---------|------------------|-------|
| Protokoll | DLNA, FTP, HTTP, WebDAV | FUSE/WinFSP-Dateisystem |
| Client-Kompatibilität | Jeder protokollkompatible Client | Jede Anwendung über das Dateisystem |
| Netzwerkzugriff | Für alle Geräte im Netzwerk verfügbar | Nur lokaler Rechner (standardmäßig) |
| Einrichtungskomplexität | Einfacher Befehl, keine Treiber erforderlich | Erfordert FUSE (Linux/Mac) oder WinFSP (Windows) |
| Unterstützung für Media-Player | Native DLNA-Erkennung | Erfordert, dass der Player auf den Mount-Pfad zeigt |
| Mehrere gleichzeitige Benutzer | Ja, integriert | Begrenzt durch Dateisystemfreigabe |

**Wann Sie serve verwenden sollten:**
- Streaming von Medien zu Smart-TVs, Spielekonsolen oder Netzwerk-Playern
- Bereitstellung von FTP-Zugriff für ältere Anwendungen oder Geräte
- Freigabe von Cloud-Dateien für mehrere Benutzer in einem Netzwerk
- Vermeidung der Installation von FUSE/WinFSP-Treibern

**Wann Sie mount verwenden sollten:**
- Zugriff auf Cloud-Dateien von Desktop-Anwendungen, die lokale Pfade erwarten
- Direktes Bearbeiten von Cloud-Dateien in Office-Anwendungen
- Ausführen von Skripten, die mit lokalen Dateipfaden arbeiten

In vielen Konfigurationen bietet Ihnen die gleichzeitige Ausführung von serve und mount das Beste aus beiden Welten.

## Erste Schritte

Rclone serve verwandelt Ihren Cloud-Speicher von einem passiven Archiv in einen aktiven Medienserver und eine Dateifreigabe-Plattform. Beginnen Sie mit einem einfachen DLNA-Server, der auf Ihren Cloud-Medienordner verweist, und testen Sie die Wiedergabe auf Ihrem Smart-TV oder VLC-Player. Sobald Sie bestätigt haben, dass das Streaming zuverlässig funktioniert, fügen Sie VFS-Caching für eine flüssigere Wiedergabe hinzu, richten Sie einen FTP-Endpunkt für einen breiteren Dateizugriff ein und konfigurieren Sie den Dienst so, dass er automatisch startet. Mit RcloneView, das Ihre Remotes verwaltet und Verbindungen überwacht, verfügen Sie über einen vollständigen, cloud-basierten Medienserver, der außer Ihrem bestehenden Cloud-Speicher-Abonnement nichts kostet.

---

**Verwandte Anleitungen:**
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Verbindungseinstellungen für S3-Remote-Speicher](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
