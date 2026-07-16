---
slug: chunker-remote-split-large-files-rcloneview
title: "Chunker-Remote — Große Dateien für Cloud-Anbieter mit Größenbeschränkungen aufteilen mit RcloneView"
authors:
  - tayson
description: "Manche Cloud-Anbieter lehnen Dateien über einer bestimmten Größe ab. Rclones Chunker-Remote teilt große Dateien beim Upload automatisch in Teile auf und setzt sie beim Download wieder zusammen."
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - RcloneView
  - feature
  - performance
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Chunker-Remote — Große Dateien für Cloud-Anbieter mit Größenbeschränkungen aufteilen mit RcloneView

> Ihre Videodatei ist 15 GB groß. Das Upload-Limit Ihres Cloud-Anbieters liegt bei 5 GB. Statt das Video neu zu encodieren oder einen anderen Anbieter zu suchen, teilt die Chunker-Remote sie automatisch auf.

Manche Cloud-Speicher-Anbieter setzen maximale Dateigrößen fest. Google Drive begrenzt bei 5 TB (selten ein Problem), aber andere Anbieter — besonders Free-Tarife, WebDAV-Endpunkte und manche S3-kompatible Dienste — haben deutlich niedrigere Limits. Rclones Chunker-Remote löst dieses Problem, indem sie große Dateien beim Upload transparent in Teile (Chunks) aufteilt und sie beim Download wieder zusammensetzt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie Chunker funktioniert

Eine Chunker-Remote umschließt eine andere Remote und:

1. **Teilt Dateien** oberhalb einer konfigurierbaren Größe in nummerierte Chunks auf
2. **Lädt die Chunks** einzeln zum Cloud-Anbieter hoch
3. **Setzt die Chunks beim Download** wieder zur ursprünglichen Datei zusammen
4. **Transparent** — im Explorer sehen Sie die Originaldatei, nicht die Chunks

Zum Beispiel wird eine 15-GB-Datei bei einer Chunk-Größe von 5 GB beim Anbieter zu drei 5-GB-Chunks. Beim Durchsuchen oder Herunterladen erscheint sie als einzelne 15-GB-Datei.

## Wann Sie Chunker brauchen

| Szenario | Lösung |
|----------|----------|
| Anbieter hat eine Dateigrößenbeschränkung | Chunker teilt oberhalb des Limits |
| WebDAV-Server lehnt große Uploads ab | In kleinere Teile aufteilen |
| Free-Tarif mit Limits pro Datei | Aufteilen, um innerhalb der Limits zu bleiben |
| Netzwerkabbrüche bei großen Uploads | Kleinere Chunks = einfachere Wiederholungsversuche |

## Eine Chunker-Remote einrichten

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

Erstellen Sie eine Chunker-Remote, die Ihre Ziel-Speicher-Remote umschließt. Konfigurieren Sie die Chunk-Größe basierend auf den Limits Ihres Anbieters.

## Kombination mit anderen Remotes

Chunker lässt sich mit anderen speziellen Remotes verbinden:

- **Chunker + Crypt**: Große Dateien aufteilen UND verschlüsseln
- **Chunker + Compress**: Große Dateien aufteilen UND komprimieren
- **Chunker + beliebiger Anbieter**: Funktioniert mit allen 70+ Anbietern

## Wichtige Hinweise

- **Chunks sind anbieterspezifisch**: Dateien, die für einen Anbieter aufgeteilt wurden, müssen über dieselbe Chunker-Konfiguration abgerufen werden
- **Chunks nicht direkt verändern**: Greifen Sie immer über die Chunker-Remote zu, um die Integrität zu wahren
- **Chunk-Größe sinnvoll wählen**: zu klein erzeugt viele Dateien (langsameres Auflisten); zu groß macht den Zweck zunichte

## Anwendungsfälle

### VM-Images sichern

Virtuelle Maschinen-Disk-Images sind oft 50-200 GB groß. Chunker teilt sie für Anbieter mit Upload-Limits auf.

### Große Mediendateien archivieren

4K-Videodateien, unkomprimierte Audio-Masters und große Datensätze, die die Einzeldatei-Limits überschreiten.

### Upload-Zuverlässigkeit verbessern

Kleinere Chunks lassen sich bei unzuverlässigen Netzwerkverbindungen leichter erneut übertragen. Schlägt ein 1-GB-Chunk fehl, wiederholen Sie 1 GB statt der gesamten 50-GB-Datei.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ihre Speicher-Remote hinzufügen** wie gewohnt.
3. **Eine Chunker-Remote erstellen**, die diese umschließt.
4. **Große Dateien** über den Chunker hochladen.

Keine Datei zu groß, kein Anbieterlimit zu klein.

---

**Weitere Anleitungen:**

- [Compress-Remote](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [Virtuelle Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
