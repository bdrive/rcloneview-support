---
slug: optimize-rcloneview-mount-s3-r2-performance
title: "Mount-Performance von RcloneView für S3 und Cloudflare R2 optimieren"
authors:
  - tayson
description: Optimieren Sie RcloneView-Mounts für Amazon S3 und Cloudflare R2 mit dem richtigen Cache-Modus, den passenden Chunk-Größen und der richtigen Nebenläufigkeit, damit Medienserver und Analyse-Jobs schnell und stabil bleiben.
keywords:
  - rcloneview
  - rclone mount
  - s3 mount performance
  - cloudflare r2 mount
  - vfs cache
  - rclone tuning
  - multi-thread streams
  - s3 chunk size
tags:
  - RcloneView
  - mount
  - cloudflare-r2
  - aws-s3
  - performance
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mount-Performance von RcloneView für S3 und Cloudflare R2 optimieren

> Sorgen Sie für flüssigere Wiedergabe und schnellere Lesezugriffe, indem Sie die RcloneView-Mount-Einstellungen für S3-kompatiblen Speicher optimieren, ohne auch nur ein CLI-Flag zu bearbeiten.

Das Einbinden (mount) von S3-Buckets oder Cloudflare R2 auf Ihrer Workstation, NAS oder Ihrem Medienserver ermöglicht sofortigen Zugriff, aber die Standardeinstellungen können den Durchsatz drosseln. Mit ein paar gezielten Anpassungen in RcloneView können Sie die Latenz reduzieren, Pufferung verringern und die Kosten bei AWS und R2 planbar halten.

<!-- truncate -->

**Primäre Keywords:** *rclone mount*, *S3 mount performance*, *Cloudflare R2*, *VFS cache*, *multi-thread streams*.

---

## Warum die Optimierung von Mounts wichtig ist

- Streaming ohne Ruckeln: Medienserver und BI-Tools benötigen konsistentes Read-Ahead und Caching, um Pufferung zu vermeiden.  
- APIs vor Überlastung schützen: kontrollierte Nebenläufigkeit verhindert 429/503-Drosselung bei S3-kompatiblen Endpunkten.  
- Egress und wiederholte Lesevorgänge sparen: intelligenteres Caching reduziert doppelte GETs und Netzwerk-Overhead.  
- Schreibvorgänge absichern: der richtige Cache-Modus verhindert beschädigte Datenbanken oder unvollständige Uploads bei Verbindungsabbrüchen.

---

## Voraussetzungen und schnelle Prüfungen

1. Platzierung und Latenz: wählen Sie die nächstgelegene AWS-Region zu Ihren Nutzern; bei R2 wählen Sie den nächstgelegenen Cloudflare-Standort, um die RTT zu minimieren.  
2. Netzwerkpfad: stellen Sie sicher, dass VPN-/Firewall-Regeln dauerhaften HTTPS-Traffic (443) ohne aggressive IDS-Drosselung zulassen.  
3. Zugangsdaten in RcloneView: fügen Sie Remotes für Amazon S3 und Cloudflare R2 hinzu (S3-kompatibler Endpunkt wie `https://<account>.r2.cloudflarestorage.com`).  
   - Brauchen Sie eine Auffrischung? Siehe [Wie man einen S3-Remote hinzufügt](/howto/remote-storage-connection-settings/s3) und [Wie man Cloudflare-R2-API-Zugangsdaten erhält](/howto/cloud-storage-setting/cloudflare-r2-credential).  
4. Workload verstehen: Medien-Streaming bevorzugt Read-Ahead; Analysen bevorzugen parallele Lesevorgänge; Backup-Ziele benötigen möglicherweise sichereres Schreib-Caching.

---

## Schritt 1 - Den Mount in RcloneView erstellen

1. Öffnen Sie **RcloneView** -> **Mounts** -> **New Mount**.  
2. Wählen Sie Ihren Remote (S3 oder R2) und einen lokalen Mount-Pfad.  
3. Aktivieren Sie **Auto-start on launch**, wenn Sie Dienste (Plex/Jellyfin, BI-Tools) beim Neustart ausführen.  
4. Speichern Sie und starten Sie den Mount einmal, um zu bestätigen, dass er im Datei-Explorer Ihres Betriebssystems erscheint.

> Tipp: Legen Sie für R2 den korrekten Endpunkt in den erweiterten Einstellungen fest, damit die regionale Latenz niedrig bleibt.

---

## Schritt 2 - Den richtigen VFS-Cache-Modus festlegen

| Anwendungsfall | Empfohlener `--vfs-cache-mode` | Warum |
| --- | --- | --- |
| Medienwiedergabe / BI-Dashboards | `writes` | Puffert Downloads und temporäre Schreibvorgänge; sicherer bei partiellen Updates |
| Foto-/Videobearbeitung | `full` | Stellt sicher, dass wahlfreie Lese-/Schreibzugriffe zuerst den lokalen Cache treffen, bevor hochgeladen wird |
| Einfaches, schreibgeschütztes Durchsuchen | `off` (Standard) | Geringster Overhead, wenn Sie Dateien selten ändern |

Weitere Cache-Einstellungen im Mount-Dialog:

- Maximale Cache-Größe: beginnen Sie mit 10-50 GB auf SSD; erhöhen Sie den Wert, wenn Sie große Bibliotheken streamen.  
- `--vfs-read-ahead`: 32M-128M festlegen, damit Player ohne Pause vorpuffern.  
- `--buffer-size`: 8M-32M pro Datei hält die TCP-Fenster bei Verbindungen mit hoher Latenz gefüllt.  
- `--dir-cache-time`: 5m-30m, um LIST-Aufrufe bei tiefen Buckets zu reduzieren; kombinieren Sie dies mit `--poll-interval` (z. B. 30s), damit Updates trotzdem weitergegeben werden.

---

## Schritt 3 - Durchsatz mit Nebenläufigkeit und Multipart-Tuning freischalten

Auch bei Mounts berücksichtigt rclone Backend-Tuning-Flags:

- `--multi-thread-streams`: verbessert Lesevorgänge einzelner Dateien bei Pfaden mit hoher Latenz (versuchen Sie 4-8).  
- `--transfers`: steuert gleichzeitige Uploads aus dem Cache; beginnen Sie mit 4-8, um Drosselung durch den Anbieter zu vermeiden.  
- S3-Chunk-Größe: setzen Sie `--s3-chunk-size 64M` (128M bei 1 Gbit/s+), um Roundtrips bei großen Dateien zu reduzieren.  
- S3-Upload-Nebenläufigkeit: `--s3-upload-concurrency 4` ist eine sichere Baseline; erhöhen Sie den Wert, wenn CPU und Netzwerk es zulassen.  
- Prüfsummen: belassen Sie `--s3-disable-checksum=false` zur Integritätssicherung, außer Sie optimieren rein auf Geschwindigkeit bei unkritischen Daten.  
- R2-Multipart: verwenden Sie `--chunk-size 64M` und `--upload-cutoff 64M`, um Multipart-Uploads für größere Objekte zu erzwingen.

Achten Sie auf Rate-Limits; wenn Sie 429/503-Antworten sehen, reduzieren Sie `transfers` um 25 % und fügen Sie `--retries-sleep 10s` hinzu.

---

## Schritt 4 - Mounts über lange Sitzungen hinweg stabil halten

- Wiederholungen und Backoff: setzen Sie `--retries 10` und `--low-level-retries 20`; kombinieren Sie dies mit `--retries-sleep 5s`.  
- Timeout-Sicherheit: fügen Sie bei instabilem WLAN `--contimeout 15s` und `--timeout 5m` hinzu, damit lange Lesevorgänge nicht abbrechen.  
- Schreibsicherheit: aktivieren Sie bei gemeinsam genutzten Bearbeitungs-Workloads `--immutable` nur für Archive, die sich niemals ändern sollten.  
- Logging: aktivieren Sie ausführliche Logs bei RcloneView-Mounts; verfolgen Sie diese beim Anpassen der Nebenläufigkeit, um Drosselung zu erkennen.  
- Health-Checks: planen Sie einen nächtlichen `--size-only`- oder `--checksum`-Job zwischen S3 und R2 zur Integritätsprüfung.

---

## Schritt 5 - Profile für gängige Szenarien

### Medien-Streaming von R2/S3 zu Plex oder Jellyfin
- `--vfs-cache-mode writes`  
- `--vfs-read-ahead 96M`, `--buffer-size 16M`  
- `--multi-thread-streams 6`  
- `--transfers 4` begrenzen, um R2/S3 nicht zu überlasten; `--bwlimit 80M` zur Primetime aktivieren.

### BI-Dashboards oder Data-Science-Notebooks auf eingebundenen Parquet-/CSV-Dateien
- `--vfs-cache-mode full` für wahlfreie Lesezugriffe  
- `--multi-thread-streams 8`, `--transfers 6`  
- Größeres `--s3-chunk-size 128M` und `--s3-upload-concurrency 6` für schnelle Spill-Writes aus dem Cache.

### Backup-Ziel (NAS zu S3/R2)
- `--vfs-cache-mode writes`, `--dir-cache-time 30m`  
- Konservatives `--transfers 4`, `--checkers 8`  
- Serverseitige Verschlüsselung aktivieren, falls Ihre Bucket-Richtlinie dies erfordert; Prüfsummen aktiviert lassen.

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Checkliste zur Fehlerbehebung

1. Langsames Durchsuchen großer Ordner? Fügen Sie `--fast-list` hinzu, wenn Ihr Anbieter dies zulässt, und verlängern Sie `--dir-cache-time`.  
2. Pufferung hält an? Erhöhen Sie `--vfs-read-ahead` und prüfen Sie den SSD-Cache-Speicherplatz; beobachten Sie die Festplatten-Warteschlange des Betriebssystems.  
3. Drosselungsfehler? Verringern Sie `--transfers` und `--multi-thread-streams`; fügen Sie `--bwlimit` für Geschäftszeiten hinzu.  
4. Uploads stocken bei 99 %? Erhöhen Sie `--timeout`, prüfen Sie, ob die Multipart-Chunk-Größen die Mindestanforderungen des Anbieters erfüllen (5 MB für S3, 5-50 MB für R2).  
5. Apps sehen veraltete Metadaten? Reduzieren Sie `--poll-interval` und starten Sie den Mount neu, um den Verzeichnis-Cache zu aktualisieren.

---

## FAQs

**Q. Benötige ich unterschiedliche Mounts für S3 und R2?**  
**A.** Erstellen Sie separate Mounts für jeden Remote; Sie können beide gleichzeitig aktiv halten und innerhalb von RcloneView zwischen ihnen per Drag & Drop verschieben.

**Q. Wirkt sich die Cache-Größe auf die Kosten aus?**  
**A.** Ja - größere Caches senken die Anzahl wiederholter GETs, was Egress- und Anfragekosten reduzieren kann, besonders bei R2s Pro-Anfrage-Modell.

**Q. Kann ich schreibgeschützte und Lese-/Schreib-Workloads mischen?**  
**A.** Verwenden Sie zwei Mounts: einen schreibgeschützten (`--read-only`) für die Medienwiedergabe und einen weiteren mit Lese-/Schreibzugriff für Editoren, damit Berechtigungen und Caching vorhersehbar bleiben.

**Q. Wie überwache ich die Performance über die Zeit?**  
**A.** Exportieren Sie wöchentlich die Mount-Logs und die Job History, kennzeichnen Sie Konfigurationen (z. B. `[MountTest] R2 64M/6threads`) und führen Sie ein kurzes Runbook mit den erfolgreichsten Einstellungen für Ihr Team.

---

Gut abgestimmte Mounts fühlen sich lokal an. Mit den GUI-Steuerungen von RcloneView für Cache, Nebenläufigkeit und Logging können Sie die Performance von S3 und R2 auf dem Niveau von On-Premises-Speicher halten - ganz ohne Shell-Skripte.

<CloudSupportGrid />
