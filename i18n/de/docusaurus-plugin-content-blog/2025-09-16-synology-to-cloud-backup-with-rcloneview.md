---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → Cloud, ganz einfach: Off-Site-Backups & Synchronisation mit RcloneView"
authors:
  - jay
description: Schützen Sie Ihr Synology NAS mit Off-Site-Backups auf Backblaze, Google Drive, Amazon S3, pCloud, Wasabi und mehr—planen, überprüfen und automatisieren Sie alles in der GUI von RcloneView.
keywords:
  - rcloneview
  - synology nas backup
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - cloud backup
  - scheduled sync
  - rclone GUI
tags:
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → Cloud, ganz einfach: Off-Site-Backups & Synchronisation mit RcloneView

> Bewahren Sie eine zweite Kopie off-site auf—ohne Skripte oder Terminals. Sichern Sie Ihr **Synology NAS** auf **Backblaze, Google Drive, Amazon S3, pCloud, Wasabi** und mehr—visuell, zuverlässig und nach Zeitplan.

## Einführung — Warum sollten Sie Ihre Synology-Backups off-site auslagern?

Ein NAS ist hervorragend für schnellen, lokalen Zugriff geeignet—Familienfotos, Kreativprojekte und Team-Freigaben sind nur ein LAN entfernt. Doch **ausschließlich lokal** birgt Risiken: Diebstahl, Feuer, versehentliches Löschen oder Mehrfachausfälle von Laufwerken. Eine **Off-Site-Cloud-Kopie** bietet Ihnen:

<!-- truncate -->

- **Widerstandsfähigkeit**: Überstehen Sie lokale Katastrophen dank einer entfernten, wiederherstellbaren Kopie.  
- **Flexibilität**: Stellen Sie Daten überall wieder her, auch wenn Sie nicht im Büro oder zu Hause sind.  
- **Governance**: Kombinieren Sie NAS-Aufbewahrungsrichtlinien mit Cloud-Bucket-Versionierung und -Richtlinien.

**Synology NAS im Überblick**  
- Zentraler Speicher, erreichbar über **SMB/NFS** (als lokaler Ordner einbinden) oder Netzwerk-Endpunkte wie **WebDAV** und **SFTP**.  
- Ideal für dauerhafte Backups, Medien-Hosting und Team-Datei-Hubs.

**Cloud-Ziele im Überblick**  
- **Google Drive**: Zusammenarbeit und Freigabe in Google Workspace.  
- **Amazon S3 / Wasabi / Backblaze B2**: Objektspeicher mit Buckets, Regionen und Lifecycle-Regeln.  
- **pCloud**: benutzerfreundlicher Speicher mit großzügiger Dateihandhabung.  

**Warum jetzt NAS → Cloud?**  
- Schaffen Sie ein **Off-Site-Sicherheitsnetz**.  
- **Standardisieren** Sie Backups auf ein einziges Ziel (oder Multi-Cloud).  
- Nutzen Sie **Richtlinien & Versionierung**, die viele Cloud-Plattformen bieten.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Schritt 1 — Vorbereitung

Bevor Sie beginnen:

1. **Wählen Sie den Umfang** — welche freigegebenen Ordner auf Synology (z. B. `/photo`, `/projects`, `/backup`) sollen in die Cloud übertragen werden?  
2. **Prüfen Sie die Cloud-Kapazität** — stellen Sie sicher, dass das Zielkonto oder der Bucket genug Platz hat (plus Puffer für Versionen).  
3. **Wählen Sie eine NAS-Verbindungsmethode**  
   - **Lokaler Pfad**: Binden Sie die NAS-Freigabe über **SMB/NFS** in Ihrem Betriebssystem ein und nutzen Sie sie als **Local** in RcloneView.  
   - **WebDAV**: Aktivieren Sie den **WebDAV Server** von Synology und verbinden Sie sich über WebDAV in RcloneView.  
   - **SFTP**: Aktivieren Sie SSH/SFTP auf Synology und verbinden Sie sich über **SFTP**.  
4. **Wählen Sie Ihre Cloud** — Google Drive, Amazon S3/Wasabi, Backblaze B2, pCloud usw.  
5. **Legen Sie den Rhythmus fest** — einmaliges Archiv, periodische Synchronisation oder **nächtlich geplante Jobs**.  
6. **Testen Sie zuerst** — führen Sie einen kleinen Test durch, um Pfade, Berechtigungen und Durchsatz zu prüfen.

🔍 Hilfreicher Überblick:
- [Cloud ↔ Synology Tutorial](/tutorials/synology-nas-cloud-transfer)


## 3) Schritt 2 — Verbindungen in RcloneView einrichten

RcloneView verpackt die Konfiguration von rclone in einen geführten Klick-Ablauf.

1. Öffnen Sie **RcloneView** → klicken Sie auf **`+ New Remote`**  
2. **Synology (Quelle) hinzufügen** über eine der folgenden Optionen:  
   - **Local**: Wählen Sie Ihren eingebundenen NAS-Ordner (z. B. `Z:\NAS\Projects` oder `/Volumes/NAS/Projects`)  
   - **WebDAV**: Verwenden Sie den WebDAV-Endpunkt/die Zugangsdaten von Synology → benennen Sie ihn (z. B. `NAS-WebDAV`)  
   - **SFTP**: Host/IP, Port und Konto → benennen Sie ihn (z. B. `NAS-SFTP`)  
3. **Cloud (Ziel) hinzufügen**, zum Beispiel:  
   - **Google Drive**: OAuth-Anmeldung → benennen Sie es `MyGoogleDrive`  
   - **Amazon S3 / Wasabi**: **S3**-Provider → Access Key/Secret, Region, Bucket → benennen Sie es `MyS3` / `MyWasabi`  
   - **Backblaze B2**: **B2**-Provider (oder S3-kompatibler Endpunkt, falls zutreffend) → benennen Sie es `MyB2`  
   - **pCloud**: Anmelde-/Token-Ablauf → benennen Sie es `MyPcloud`  
4. Bestätigen Sie, dass beide nebeneinander im Explorer-Bereich erscheinen.

🔍 Hilfreiche Anleitungen:  
- [Schnelles OAuth-Setup (Google Drive usw.)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [S3-Remote hinzufügen (Amazon S3/Wasabi)](/howto/remote-storage-connection-settings/s3)
- [Cloud ↔ Synology Tutorial](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) Schritt 3 — Backup/Synchronisation ausführen (drei praktische Methoden)

RcloneView bietet drei unkomplizierte Ansätze. Beginnen Sie klein und skalieren Sie mit Zuversicht.

### A) Drag & Drop (manuelles Kopieren)
- Öffnen Sie **Synology (Local/WebDAV/SFTP)** auf einer Seite und Ihre **Cloud** auf der anderen, dann **ziehen Sie Ordner/Dateien hinüber**.  
- Ideal für selektive Verschiebungen und schnelle Erfolge.  

👉 Mehr dazu: [Dateien mit Drag and Drop kopieren](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Compare & Copy (Änderungen vorab prüfen)
- Führen Sie **Compare** aus, um zu sehen, was auf dem NAS im Vergleich zu Ihrem Cloud-Bucket/-Drive neu oder geändert ist.  
- Kopieren Sie nur die Unterschiede—weniger Überraschungen, schnellere Durchläufe.  

👉 Mehr dazu: [Vergleichsergebnisse und Dateien verwalten](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Sync & geplante Jobs (automatisieren)
- Verwenden Sie **Sync**, um ausgewählte NAS-Ordner in Ihr Cloud-Ziel zu spiegeln.  
- Führen Sie zuerst einen **Dry-Run** durch, speichern Sie ihn dann als wiederverwendbaren **Job** und fügen Sie einen Zeitplan hinzu (nächtlich/wöchentlich).  

👉 Mehr dazu:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**Profi-Tipps**
- Für **S3-artige Clouds** (S3/Wasabi/B2 S3-kompatibel) erstellen Sie Buckets im Voraus und wählen Sie die richtige Region.  
- Aktivieren Sie **Versionierung** bei unterstützten Buckets für sicherere Rollbacks.  
- Halten Sie NAS-Quellen während der Umstellung **schreibgeschützt**, um Abweichungen zu vermeiden.  
- Nutzen Sie Filter, um Cache-/Temp-Ordner von Backups auszuschließen.


## 5) Fazit — Wichtigste Erkenntnisse & zusätzliche Tipps

- **Warum das Ganze**: ein dauerhaftes Off-Site-Sicherheitsnetz, schnellere Optionen zur Notfallwiederherstellung und einheitliche Aufbewahrung.  
- **So funktioniert es**: RcloneView verbindet Ihr Synology NAS mit Cloud-Zielen und ermöglicht **Drag & Drop**, **Compare** oder **Sync**—mit **Zeitplanung** für automatisierte Backups.  
- **Sicher skalieren**: Testen Sie zuerst, beachten Sie die Kontingente der Anbieter und überwachen Sie Job-Protokolle für eine saubere Nachvollziehbarkeit.


## FAQs

**F. Kann ich auf mehrere Clouds sichern?**  
**A.** Ja—fügen Sie mehrere Ziele hinzu (z. B. S3 und Google Drive) und erstellen Sie separate Jobs oder Zeitpläne für jedes.

**F. Brauche ich die Kommandozeile?**  
**A.** Nein. RcloneView ist eine vollständige GUI—konfigurieren Sie Remotes, prüfen Sie Änderungen vorab, führen Sie Synchronisationen aus und planen Sie Jobs ohne CLI.


**Bereit, Ihre Synology-Backups auf Autopilot zu stellen—off-site und unter Kontrolle?**  

<CloudSupportGrid />
