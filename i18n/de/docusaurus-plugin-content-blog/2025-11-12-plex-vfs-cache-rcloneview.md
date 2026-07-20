---
slug: plex-vfs-cache-rcloneview
title: "Plex-Performance mit dem VFS-Cache von RcloneView optimieren — flüssige Cloud-Wiedergabe"
authors:
  - tayson
description: Beheben Sie Plex-Pufferprobleme beim Streamen von Google Drive, Dropbox, Wasabi oder S3, indem Sie den rclone VFS-Cache in einer benutzerfreundlichen GUI einstellen. RcloneView macht die richtigen Cache-Modi und Read-Ahead-Einstellungen einfach — ohne Kommandozeile.
keywords:
  - plex pufferproblem beheben
  - rclone vfs cache
  - plex cloud wiedergabe
  - rcloneview plex tuning
  - plex google drive
  - cloud filmserver
  - rclone mount plex
tags:
  - RcloneView
  - plex
  - vfs
  - google-drive
  - dropbox
  - s3
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Plex-Performance mit dem VFS-Cache von RcloneView optimieren — flüssige Cloud-Wiedergabe

> Schluss mit dem Ruckeln. Mit den richtigen VFS-Cache-Einstellungen streamt Plex Cloud-Medien, als wären sie lokal — ganz ohne Kommandozeile.

Cloud-Streaming mit Plex ist leistungsstark, kann aber ruckeln: Pufferung bei 4K-Wiedergabe, träges Springen im Video oder langsame Bibliotheksscans. Die Ursache ist nicht immer Ihr Internet — sondern wie Plex viele kleine Bereiche und Thumbnails liest, während rclone Daten über Cloud-Verbindungen mit höherer Latenz abruft. Der Virtual File System (VFS) Cache von rclone ist die Lösung, und RcloneView bietet Ihnen eine einfache GUI, um die richtigen Einstellungen vorzunehmen.

<!-- truncate -->

RcloneView bindet Ihren Cloud-Speicher (Google Drive, Dropbox, Wasabi/Cloudflare R2/S3 usw.) als lokalen Pfad ein, den Plex indizieren kann. Durch Aktivieren und Anpassen des VFS-Cache glätten Sie zufällige Lesevorgänge, halten Thumbnails und Segmente griffbereit und reduzieren Netzwerk-Round-Trips.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Warum der VFS-Cache für Plex wichtig ist

Plex streamt nicht nur linear — es springt, erzeugt Thumbnails und liest Untertitel, oft parallel. Ohne Caching löst jeder Sprung neue Remote-Lesevorgänge aus, und die Latenz summiert sich. Ein lokaler SSD-Cache fängt diese Lastspitzen ab, sodass Plex reaktionsfähig bleibt, während rclone vorausschauend Daten abruft.

Was VFS schützt

- Flüssiges Springen und Scrubben bei langen Filmen
- Schnellere Bibliotheksscans und Thumbnails
- Stabile Wiedergabe, wenn mehrere Personen gleichzeitig zuschauen

Weiterführende Informationen

- Mount-Grundlagen in RcloneView: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- Globale Flags & Speicherorte: https://rcloneview.com/support/howto/rcloneview-basic/general-settings

## Cache-Modi im Überblick

| Modus              | Was er macht              | Eignung für Plex | Hinweise                                             |
| ------------------ | -------------------------- | ----------------- | ----------------------------------------------------- |
| Off                | Direkte Lesevorgänge aus der Cloud | Nicht empfohlen  | Minimale Latenz, aber schlecht für Zufallszugriffe        |
| Minimal            | Metadaten werden zwischengespeichert | Eingeschränkt      | OK für kleine Dateien; Video-Seeking kann ruckeln     |
| Writes             | Puffert nur Schreibvorgänge      | Eingeschränkt      | Lesevorgänge bleiben remote; nicht ideal für Wiedergabe        |
| Full               | Lese-/Schreibzugriff wird zwischengespeichert        | Empfohlen      | Beste Ergebnisse für Scans, Seeking und mehrere Nutzer |
| WriteBack (Full+) | Verzögert Uploads über den Cache | Empfohlen      | Höhere SSD-Nutzung; hervorragend für gemischtes Lesen/Schreiben |

Tipp: Halten Sie die Plex-Metadaten lokal auf der SSD; nur die Medien liegen in der Cloud.

## VFS-Cache in RcloneView anpassen

1. Cloud-Pfad einbinden (mounten)

- Verwenden Sie den Remote Explorer oder den Mount Manager, um einen Ordner auf ein Laufwerk/einen Pfad zu mappen, den Plex sehen kann.  
  Siehe: /support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer und /support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

2. Erweiterte Optionen öffnen

- Öffnen Sie im Mount-Dialog die erweiterten Optionen und suchen Sie die VFS-Einstellungen (Cache-Modus, Größe, Ages, Dir-Cache-Zeit).

<img src="/support/images/en/blog/mount-advanced.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

3. Cache-Modus wählen

- Wählen Sie `Full` für Plex. Wenn Sie in den Mount hochladen, probieren Sie `WriteBack` für bessere Burst-Performance.

4. Cache-Speicherort und -Größe festlegen

- Legen Sie den Cache auf SSD/NVMe ab (z. B. `C:\rclone_cache` oder `/mnt/ssd/plex-cache`).
- Größenrichtwert: 10–50 GB für 1080p; 30–100 GB für große 4K-Bibliotheken.

5. Prefetch und Read-Ahead anpassen

- Erhöhen Sie `--vfs-read-ahead` (z. B. 64M–256M) und stellen Sie eine angemessene Dir-Cache-Zeit ein.
- Fügen Sie globale Flags unter Embedded Rclone → Global Rclone Flags hinzu. Siehe: /support/howto/rcloneview-basic/general-settings

6. Speichern, mounten und Plex darauf verweisen

- Speichern und mounten Sie, fügen Sie dann in Plex den gemounteten Ordner (z. B. `X:\Movies` oder `/Volumes/Cloud/Movies`) zu Ihrer Bibliothek hinzu. Lassen Sie Plex einen Scan abschließen und testen Sie die Wiedergabe.

## Schnelle Problemlösungen

| Symptom                        | Wahrscheinliche Ursache            | Lösung                                                                                                                                                                   |
| ------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pufferung mitten im Stream          | Cache zu klein oder Read-Ahead zu niedrig | Cache-Größe erhöhen; `--vfs-read-ahead` erhöhen; SSD-Cache sicherstellen                                                                                                        |
| Laufwerk verschwindet nach Neustart | Kein Auto-Mount                     | Auto Mount und Launch at login aktivieren. Siehe: /support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive und /support/howto/rcloneview-basic/general-settings |
| Plex sieht den Ordner nicht        | Berechtigungen oder anderer Nutzer     | So mounten, dass der Plex-Dienstnutzer lesen kann; unter Windows bei Bedarf als Netzlaufwerk markieren                                                                                |
| „Too many open files“         | OS-Handle-Limit                     | Datei-Handle-Limit erhöhen; siehe OS-Dokumentation oder FAQ; geringere Parallelität testen                                                                                  |

## Empfehlungen nach Szenario

| Szenario                | Cache-Modus | Cache-Größe             | Hinweise                                       |
| ------------------------ | ----------- | ------------------------ | -------------------------------------------- |
| 1080p-Filme            | Full       | 10–20 GB               | Flüssiges Scrubben; schnelle Vorschauen            |
| 4K Remux / hohe Bitrate | WriteBack  | 30–100 GB              | Bessere Burst-Toleranz; Metadaten lokal halten |
| Kurze Clips/Trailer    | Minimal    | ≤5 GB                  | Akzeptabel, wenn selten gesucht wird              |
| Multi-User Plex-Server  | Full       | ~10 GB pro aktivem Nutzer | Schnellere SSDs und höheres Read-Ahead in Betracht ziehen  |

## Flüssige Cloud-Wiedergabe ohne Rätselraten

Die meisten Plex-Pufferprobleme bei Cloud-Mounts sind ein Problem der Cache-Konfiguration. RcloneView beseitigt die Komplexität der Kommandozeile und lässt Sie die bewährten VFS-Rezepte mit wenigen Klicks anwenden: Cloud mounten, Cache auf Full (oder WriteBack) setzen, den Cache auf SSD platzieren und das Read-Ahead erhöhen. Das Ergebnis fühlt sich lokal an — selbst bei großen Bibliotheken.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<CloudSupportGrid />
