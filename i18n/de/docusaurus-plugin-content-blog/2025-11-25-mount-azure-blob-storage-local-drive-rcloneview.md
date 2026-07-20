---
slug: mount-azure-blob-storage-local-drive-rcloneview
title: "Azure Blob Storage als lokales Laufwerk unter Windows & macOS mit RcloneView einbinden"
authors:
  - tayson
description: Verwandeln Sie Azure-Blob-Container mit der GUI, dem VFS-Cache und dem Scheduler von RcloneView in echte Laufwerksbuchstaben oder /Volumes-Mounts – ganz ohne CLI-Skripte.
keywords:
  - rcloneview
  - azure blob storage mount
  - map azure drive letter
  - mount azure blob mac
  - rclone mount gui
  - azure storage explorer alternative
  - blob to local drive
  - winfsp
  - macfuse
tags:
  - RcloneView
  - azure
  - mount
  - windows
  - macos
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob Storage als lokales Laufwerk unter Windows & macOS mit RcloneView einbinden

> Ersetzen Sie Skripte und den Storage Explorer durch einen Zwei-Klick-Mount: RcloneView macht aus Azure-Blob-Containern echte lokale Laufwerke – mit Caching, Buffering und automatischem Remount unter Windows, macOS und Linux.

Azure Blob eignet sich hervorragend zum Auslagern von Medien, Backups und statischen Assets – aber es als schnelles, zuverlässiges Laufwerk einzubinden (mount), ist knifflig. `rclone mount`-Flags, WinFsp/macFUSE-Installationen, Shared Access Signatures (SAS) und Reconnect-Skripte werden schnell kompliziert.

RcloneView verpackt das alles in einer GUI: Fügen Sie Ihren Azure-Remote einmal hinzu, wählen Sie einen Laufwerksbuchstaben oder einen `/Volumes`-Pfad, aktivieren Sie den VFS-Cache für Thumbnails und Media-Scrubbing, und lassen Sie den Scheduler das Laufwerk bei der Anmeldung erneut einbinden. Keine CLI erforderlich.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum Azure Blob mit RcloneView statt mit Skripten einbinden

- **Keine CLI nötig**: Der Remote Manager erstellt Ihren Azure-Remote und speichert Zugangsdaten sicher (siehe [Remote Manager](/howto/rcloneview-basic/remote-manager)).
- **Plattformübergreifende Konsistenz**: Windows (WinFsp), macOS (macFUSE), Linux (FUSE) mit derselben Oberfläche.
- **Echtes Laufwerks-Mapping**: Laufwerksbuchstaben unter Windows oder `/Volumes/Azure` unter macOS für jeden Container.
- **Performance integriert**: VFS-Cache, Thumbnail-Streaming, Read-Ahead und Buffering direkt im Mount-Dialog (siehe [Cloud-Speicher als lokales Laufwerk einbinden](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)).
- **Automatisierung & Überwachung**: Auto-Mount beim Start, Reconnect bei Fehlern und Live-Durchsatzdiagramme (siehe [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution) und [Echtzeit-Übertragungsüberwachung](/howto/rcloneview-basic/real-time-transfer-monitoring)).

## Schritt für Schritt — Azure Blob als lokales Laufwerk einbinden

### 1) Azure-Zugangsdaten vorbereiten

- Erstellen Sie ein Storage-Konto und einen Blob-Container.
- Generieren Sie entweder einen **Access Key** oder ein **SAS-Token** (für die Produktion wird das Prinzip der geringsten Rechte empfohlen).
- Notieren Sie sich den **Kontonamen** und den **Container**, den Sie einbinden möchten.

### 2) Den Azure-Remote hinzufügen

- Öffnen Sie **Remote Manager** → **Add Remote** → wählen Sie **S3-compatible** (funktioniert mit dem S3-Gateway von Azure Blob) oder **WebDAV**, falls Sie diesen Endpunkt verwenden.
- Für **S3-compatible**:
  - **Provider**: Custom / S3-compatible
  - **Endpoint**: `https://<account>.blob.core.windows.net`
  - **Region**: leer lassen oder Platzhalter `us-east-1`
  - **Access Key / Secret**: Ihr Azure-Key oder das aus dem SAS abgeleitete Schlüsselpaar
- Speichern Sie den Remote. Verwenden Sie ein starkes **Config Password** in den [General Settings](/howto/rcloneview-basic/general-settings).

### 3) Einen Mount-Job erstellen

- Klicken Sie im **Mount Manager** (oder in der Explorer-Toolbar) auf **Mount**.
- Wählen Sie Ihren Azure-Remote aus und geben Sie den Container-Pfad an (z. B. `azure:media-assets`).
- Wählen Sie das Mount-Ziel:
  - Windows → `Z:` (oder ein beliebiger freier Laufwerksbuchstabe)
  - macOS → `/Volumes/AzureMedia`
  - Linux → `/mnt/azure-media`
- - Aktivieren Sie **Auto Mount on startup**, damit RcloneView nach einem Neustart automatisch wieder verbindet.
   
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### 4) VFS-Cache und Buffer feinjustieren

- **Cache-Modus**: `Full` für Thumbnails, Vorschauen und Media-Scrubbing.
- **Cache-Verzeichnis**: Auf einen SSD-Ordner verweisen.
- **Read-Ahead**: 4–8 MB zum Durchsuchen von Fotos/Videos; für 4K+-Workloads erhöhen.
- **Write-Back/Buffering**: Für große sequenzielle Uploads aktivieren; Bandbreite begrenzen, wenn die Uplink-Verbindung mit anderen geteilt wird.

## Anwendungsfälle

- **Design- & Medienteams**: Große Asset-Bibliotheken in Blob belassen und dank gecachter Lesevorgänge lokal bearbeiten.
- **Dev-/Testumgebungen**: Build-Artefakte oder statische Sites für schnelle Iteration einbinden.
- **Datenerfassung**: IoT- oder Log-Exporte direkt in Blob ablegen, ohne Browser-Uploads.
- **Hybrid-Cloud-Workflows**: Drag & Drop zwischen Azure, S3, Google Drive und NAS aus einem einzigen Dashboard.
- **Backup-Staging**: Blob als günstigen Warmspeicher einbinden, bevor Sie zu Glacier/R2 archivieren.

## Performance-Tipps

- Setzen Sie **Cache-Modus: Full** für umfangreiche Medien-/Fotobibliotheken.
- Verwenden Sie ein **NVMe-/SSD-Cache-Verzeichnis**; halten Sie mehrere GB frei.
- Erhöhen Sie **Read-Ahead** und **Buffer-Size** für sequenzielle Lese-/Schreibvorgänge; senken Sie sie für zufällige kleine Dateien.
- Kombinieren Sie Mounts für verteilte Teams mit dem **Scheduler**, um den Cache täglich zu aktualisieren oder aufzuwärmen.
- Beobachten Sie den Durchsatz in der [Echtzeit-Übertragungsüberwachung](/howto/rcloneview-basic/real-time-transfer-monitoring), um Drosselungen zu erkennen.



## Fehlerbehebung

- **403- oder Authentifizierungsfehler**: SAS/Keys neu ausstellen und den Endpunkt `https://<account>.blob.core.windows.net` überprüfen.
- **Langsame Auflistungen**: VFS-Cache-Größe und Read-Ahead erhöhen; sicherstellen, dass sich der Cache-Pfad auf einer SSD befindet.
- **Mount verschwindet nach dem Ruhezustand**: Auto Mount sowie die Option „Restart failed jobs“ des Schedulers aktivieren.
- **macOS-Berechtigungen**: macFUSE-Eingabeaufforderungen bestätigen; anschließend über den Mount Manager erneut einbinden.

## Fazit — Azure Blob als vollwertiges Laufwerk

Mit RcloneView fühlt sich Azure Blob wie ein natives Laufwerk an: zugewiesene Laufwerksbuchstaben oder `/Volumes`, intelligentes Caching und Automatisierung – alles ohne CLI-Skripte. Fügen Sie Ihren Container einmal hinzu, stimmen Sie den VFS-Cache auf Ihre Anforderungen ab und behalten Sie Ihren selbst gehosteten sowie Multi-Cloud-Speicher in einem einzigen Kontrollzentrum.

<CloudSupportGrid />
