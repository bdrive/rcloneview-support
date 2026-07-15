---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "So sichern und archivieren Sie CCTV/NVR-Aufnahmen automatisch in Cloud-Speicher mit RcloneView"
authors:
  - tayson
description: "Übertragen Sie CCTV/NVR-Videos von NAS-, SMB- oder SFTP-Pfaden zu Wasabi, S3 oder Google Drive mit RcloneView. Nutzen Sie Compare, prüfsummenbasierte Sync Jobs und geplante Ausführungen, um Beweismaterial ohne manuelle Uploads zu schützen."
keywords:
  - rcloneview
  - cctv backup
  - nvr cloud archive
  - wasabi s3
  - google drive backup
  - smb sftp
  - surveillance storage
  - checksum verification
  - scheduled backup
  - disaster recovery
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So sichern und archivieren Sie CCTV/NVR-Aufnahmen automatisch in Cloud-Speicher mit RcloneView

> Schützen Sie Überwachungsvideos vor Diebstahl, Feuer oder Gerätedefekten. RcloneView verbindet NAS-/SFTP-/SMB-NVR-Ordner mit Wasabi, S3 oder Google Drive und automatisiert Compare + Sync Jobs, sodass nur neues Filmmaterial übertragen wird und Beweise intakt bleiben.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. Warum Cloud-Backups für CCTV-Aufnahmen wichtig sind

- NVR-/NAS-Festplatten füllen sich bei 24/7-Aufzeichnung schnell.  
- Diebstahl, Feuer oder Vandalismus können die einzige Kopie vernichten.  
- Compliance und Audits erfordern längere Aufbewahrungsfristen.  
- Für Remote-Prüfung und Beweismittelfreigabe ist ein externer Zugriff nötig.  
- Das manuelle Kopieren mehrerer GB großer H.264/H.265-Dateien ist fehleranfällig.

## 2. Was Überwachungsdateien besonders macht

- Kontinuierliches Schreiben erzeugt Tausende datumsbasierte Clips.  
- Hohe Bitraten (1080p/4K) belasten die Bandbreite beim Backup.  
- Ordnerstrukturen variieren je nach Hersteller (JJJJ/MM/TT, Kamera-IDs).  
- Geplante Übertragungen (stündlich/täglich) ohne manuelle Aufsicht sind erforderlich.  
- Integrität ist entscheidend: beschädigte Frames mindern den Beweiswert.

## 3. Wie RcloneView hilft

- Verbinden Sie **NAS/SMB/SFTP/WebDAV**-Quellen und **Wasabi/S3/Google Drive**-Ziele in einer Oberfläche.  
- Der zweigeteilte Explorer macht Cloud-zu-Cloud- oder LAN-zu-Cloud-Übertragungen anschaulich und direkt.  
- **Compare** markiert neue/geänderte Clips, sodass Sie nur Deltas übertragen.  
- **Prüfsummen**-Unterstützung (S3/Wasabi) validiert Uploads.  
- **Sync Jobs + Zeitplanung** führen Backups automatisch aus, ganz ohne Skripte.

<!-- Image verified: exists -->


## 4. Schritt-für-Schritt-Einrichtung für CCTV-/NVR-Backups

### Schritt 1) NVR-Speicher verbinden (SMB oder SFTP)

1. Klicken Sie auf **Remote → + Neuer Remote**.  
2. Wählen Sie **SMB** (für NAS-/Windows-Freigaben) oder **SFTP** (für Linux-NVR-Exporte).  
3. Geben Sie Serveradresse, Freigabe/Pfad und Anmeldedaten ein (bei Bedarf Domäne hinzufügen).  
4. Speichern und die Anzeige im Remote-Manager bestätigen.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### Schritt 2) Cloud-Ziel hinzufügen (Wasabi/S3/Google Drive)

- **Wasabi/S3**: Zugriffs-/Geheimschlüssel, Region und Bucket eingeben.  
- **Google Drive**: Auf **Connect** klicken und OAuth im Browser abschließen.  
- Beide Remotes für die parallele Arbeit sichtbar lassen.

### Schritt 3) Quelle und Ziel öffnen

1. Gehen Sie zu **Browse**.  
2. Linkes Fenster: Öffnen Sie den NVR-Ordner (z. B. `/recordings/2025/12/08`).  
3. Rechtes Fenster: Öffnen Sie den Bucket oder Drive-Ordner für Backups.  
4. Erweitern Sie einige Datumsordner, um die Pfade zu prüfen.

### Schritt 4) Deltas mit Compare in der Vorschau anzeigen

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- Klicken Sie auf **Compare**, um fehlende oder größenveränderte Videodateien hervorzuheben.  
- Lösen Sie Namenskonflikte (doppelte Kamera-IDs) vor dem Kopieren auf.  
- So wird verhindert, dass neuere Clips im Ziel überschrieben werden.

### Schritt 5) Sicher kopieren oder synchronisieren

- Beginnen Sie mit einer **einseitigen Kopie** von NVR → Cloud (keine Löschungen).  
- Aktivieren Sie **Prüfsummen** für S3/Wasabi, um Uploads zu validieren.  
- Nutzen Sie während der Geschäftszeiten **Bandbreitenlimits**; heben Sie die Beschränkungen nachts auf.  
- Reduzieren Sie bei sehr umfangreichen Tagen die Nebenläufigkeit, um Drosselungen zu vermeiden, und erhöhen Sie diese später wieder.

### Schritt 6) Workflow als Job speichern

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. Klicken Sie im Sync-/Kopier-Dialog auf **Save to Jobs**.  
2. Benennen Sie ihn (z. B. `cctv-daily-wasabi`).  
3. Wählen Sie einseitige Synchronisation, falls Sie später alte Clips bereinigen möchten.

### Schritt 7) Automatische Ausführungen planen

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- Öffnen Sie **Job Manager → Add Job**.  
- Wählen Sie Ihren gespeicherten Job und legen Sie den Rhythmus fest: stündlich, alle 3 Stunden oder nächtlich um 02:00 Uhr.  
- Staffeln Sie Jobs nach Kameragruppe, wenn die Bandbreite begrenzt ist.  
- Prüfen Sie nach den ersten Durchläufen den **Job History**-Bereich.

## 5. Beispielhafte Backup-Richtlinien

- **Kurzfristiger (Hot-)Speicher:** Behalten Sie die letzten 7 Tage auf NAS/NVR für die schnelle Überprüfung.  
- **Langfristiges Archiv:** Übertragen Sie wöchentlich alle Aufnahmen zu Wasabi/S3; aktivieren Sie die Versionierung.  
- **Audit/Überprüfung:** Kopieren Sie ausgewählte Tage zu Google Drive für Ermittler und Verantwortliche.  
- **Franchise oder mehrere Standorte:** Separate Buckets/Präfixe pro Filiale, um den Zugriff zu isolieren.


## 6. Kostenoptimierung für Videoarchive

- Speichern Sie selten benötigtes Filmmaterial in **Wasabi** oder S3-Infrequent-Access-Tarifstufen.  
- Behalten Sie nur aktuelle Tage auf Google Drive für die schnelle Freigabe.  
- Nutzen Sie Lifecycle-Regeln auf S3/Wasabi, um ältere Objekte in günstigere Tarifstufen zu überführen.  
- Schließen Sie Kamera-Testclips und bewegungslose Segmente aus, sofern Ihre Richtlinie dies erlaubt.

## 7. Filmmaterial bei Bedarf wiederherstellen

- Durchsuchen Sie den Cloud-Remote im Explorer; filtern Sie nach Datumsordner.  
- Kopieren Sie nur die relevante Stunde/den relevanten Tag zur lokalen Überprüfung.  
- Nutzen Sie **Compare**, um zu bestätigen, dass wiederhergestellte Dateien mit den Originalen übereinstimmen (Größe/Zeit oder Prüfsumme).  
- Bei rechtlichen Aufbewahrungspflichten duplizieren Sie die Daten in ein separates, schreibgeschütztes Präfix/Bucket.

## 8. Praxisbeispiele für Bereitstellungen

- **Kleiner Einzelhandel:** NVR → Wasabi stündlich; 30 Tage in der Cloud, 7 Tage lokal aufbewahren.  
- **Fabrik:** CCTV → NAS → nächtliche Wasabi-Kopie; monatliches S3-Kaltarchiv.  
- **Franchise-Netzwerk:** Standortbezogene Präfixe in einem Bucket; Drive-Kopien für Audits der Zentrale.  
- **Sicherheitsdienstleister:** Kundenbezogene Buckets, geplante Jobs und verschlüsselte Remotes für regulierte Standorte. 

## 9. Fazit

RcloneView macht aus CCTV-/NVR-Backups einen verlässlichen Workflow ganz ohne Kommandozeile. Verbinden Sie Ihr NAS oder Ihren Rekorder über SMB/SFTP, koppeln Sie es mit Wasabi/S3/Google Drive, sehen Sie Deltas mit Compare in der Vorschau ein und planen Sie prüfsummenbasierte Sync Jobs. Mit Automatisierung, Protokollierung und Verschlüsselungsoptionen erfüllen Sie Anforderungen an Aufbewahrung, Audits und Notfallwiederherstellung, ohne nächtliche Uploads manuell überwachen zu müssen.

<CloudSupportGrid />
