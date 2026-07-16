---
slug: from-nas-to-cloud-automate-synology-qnap-backups
title: "Von NAS zur Cloud: Synology- & QNAP-Backups mit RcloneView automatisieren"
authors:
  - steve
description: Sichern Sie Ihr Synology- oder QNAP-NAS mit RcloneView auf Google Drive, OneDrive, S3 oder jedem unterstützten Cloud-Speicher. Richten Sie geplante Synchronisationen ein, überwachen Sie Jobs und behalten Sie mühelos Offsite-Kopien—keine Kommandozeile erforderlich.
keywords:
  - Synology cloud backup
  - QNAP cloud sync
  - NAS off-site backup
  - WebDAV
  - Rclone NAS setup
  - rcloneview
  - cloud backup automation
tags:
  - RcloneView
  - nas
  - synology
  - qnap
  - cloud-backup
  - webdav
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von NAS zur Cloud: Synology- & QNAP-Backups mit RcloneView automatisieren

> Schützen Sie Ihre NAS-Daten ganz ohne Scripting. Verbinden Sie mit **RcloneView** Ihre **Synology**- oder **QNAP**-Geräte direkt mit Ihrem bevorzugten Cloud-Speicher—**Google Drive**, **OneDrive**, **Amazon S3** oder **WebDAV**—und planen Sie automatische Offsite-Backups.

## Warum Sie Ihr NAS in der Cloud sichern sollten

NAS-Systeme wie Synology und QNAP eignen sich hervorragend für lokalen Speicher, Medienbibliotheken und Dateifreigabe—sind aber weiterhin anfällig für Diebstahl, Feuer oder Hardwareausfälle. Offsite-Cloud-Backups bieten eine entscheidende zusätzliche Schutzebene, indem sie sicherstellen, dass Ihre Daten selbst dann erhalten bleiben, wenn Ihr NAS ausfällt.

**RcloneView** bietet NAS-Besitzern eine einfache Möglichkeit, diesen Prozess zu automatisieren, mit:
- **Keiner Einrichtung über die Kommandozeile**
- **Drag-and-Drop-Übertragungen**
- **Visuellen Sync-Vorschauen**
- **Geplanten Backups**
- **Unterstützung für über 40 Cloud-Anbieter**

<!-- truncate -->

### Gängige NAS-zu-Cloud-Workflows

| NAS-Typ | Empfohlene Cloud | Protokoll | Idealer Anwendungsfall |
|---|---|---|---|
| **Synology** | Google Drive, OneDrive, S3 | WebDAV / S3 | Backup für Privatpersonen oder kleine Unternehmen |
| **QNAP** | Amazon S3, Backblaze B2, Dropbox | S3 / WebDAV | Medien- und Projektarchiv |
| **Beide** | Cloudflare R2, Wasabi, pCloud | S3-kompatibel | Kostengünstiger Langzeitspeicher |

> Kombinieren Sie lokale Geschwindigkeit mit der Ausfallsicherheit der Cloud—**RcloneView** verbindet Ihr NAS und die Cloud in einer einzigen grafischen Oberfläche.

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Schritt 1 — Vorbereitung

Bevor Sie mit der Backup-Einrichtung beginnen:

1. **Netzwerkzugriff auf Ihrem NAS aktivieren**  
   - Aktivieren Sie bei **Synology** den **WebDAV-Server** oder den **S3-kompatiblen Dienst** in DSM.  
   - Nutzen Sie bei **QNAP** **Hybrid Backup Sync (HBS3)** oder aktivieren Sie **WebDAV/S3** im App Center.  

2. **Ihre Backup-Ziele planen**  
   - `/homes/` oder `/photo/` für persönliche Daten  
   - `/projects/` oder `/shared/` für Team-Ordner  

3. **Verfügbaren Speicherplatz** bei Ihrem gewählten Cloud-Anbieter prüfen.  

4. **Zeitplan festlegen** — tägliche Synchronisationen, wöchentliche Archive oder kontinuierliche Spiegelung.  

🔍 Hilfreiche Anleitungen:  
- [NAS über WebDAV in RcloneView verbinden](/howto/remote-storage-connection-settings/webdav)  
- [S3-kompatiblen Remote hinzufügen (Wasabi, Cloudflare R2 usw.)](/howto/remote-storage-connection-settings/s3)  

---

## Schritt 2 — NAS und Cloud-Speicher in RcloneView verbinden

Der Einrichtungsassistent von RcloneView macht das Verbinden von NAS- und Cloud-Konten unkompliziert.

1. Öffnen Sie **RcloneView** → klicken Sie auf **`+ New Remote`**.  
2. Wählen Sie Ihren **Cloud-Anbieter** (z. B. Google Drive, OneDrive, Amazon S3, Wasabi).  
3. Folgen Sie den Anmelde- oder API-Key-Aufforderungen und geben Sie einen erkennbaren Namen an (z. B. `MyS3Backup` oder `Drive-Archive`).  
4. Navigieren Sie im linken **Local**-Tab zu Ihrem **eingebundenen NAS-Verzeichnis** oder verbinden Sie sich per WebDAV oder einem anderen unterstützten Protokoll mit Ihrem NAS.
5. Bestätigen Sie, dass beide Seiten (lokales NAS und Cloud-Remote) im Explorer-Bereich sichtbar sind.

---

## Schritt 3 — Ihr NAS-→-Cloud-Backup automatisieren

Wählen Sie die Methode, die zu Ihrem Workflow passt:

### A) **Drag & Drop (Einmalige Kopie)**  
Ziehen Sie Ordner von Ihrer NAS-Seite in den Cloud-Remote-Bereich für schnelle Uploads. Perfekt für Ad-hoc-Backups oder kleine Archive.  

👉 Mehr dazu: [Dateien mit Drag and Drop kopieren](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

---

### B) **Vergleichen & Kopieren (Inkrementelle Updates)**  
Zeigen Sie eine Vorschau an, was neu, geändert oder fehlend ist, bevor Sie synchronisieren. Kopieren Sie nur aktualisierte Dateien, um die Bandbreitennutzung zu minimieren.  

👉 Mehr dazu: [Dateien vergleichen und verwalten](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files in RcloneView" class="img-medium img-center" />

---

### C) **Sync & geplante Jobs (Vollständig automatisiertes Backup)**  
Richten Sie einen **Sync-Job** ein, der Ihr NAS automatisch in die Cloud spiegelt.  
Führen Sie zunächst **Testläufe (Dry-Runs)** durch und konfigurieren Sie dann wiederkehrende Zeitpläne (z. B. nächtlich oder wöchentlich).  

👉 Mehr dazu:  
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)  
- [Jobplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a scheduled NAS to Cloud backup job" class="img-medium img-center" />

---

## Profi-Tipps

- **WebDAV für Einfachheit nutzen** — die meisten NAS-Systeme unterstützen es nativ.  
- **Bandbreite überwachen** — Backups in verkehrsarmen Zeiten planen.  
- **Große Datenmengen aufteilen** — zuerst kritische Ordner sichern, Archive später.  
- **Verschlüsselung aktivieren** — eine rclone-`crypt`-Ebene für sensible Daten hinzufügen.  
- **Wiederherstellungen testen** — bestätigen, dass Ihre Cloud-Daten korrekt heruntergeladen und geöffnet werden können.  

---

## Fazit — Sorgenfreie Offsite-Sicherung, leicht gemacht

- **Warum es wichtig ist:** Ihr NAS enthält Ihre wichtigsten Daten—ein Backup in der Cloud schützt sie vor physischen Ausfällen.  
- **Wie es funktioniert:** RcloneView verbindet Ihr NAS über WebDAV oder S3, synchronisiert in die Cloud und automatisiert wiederkehrende Jobs.  
- **Was Sie gewinnen:** eine sichere, skalierbare und weitgehend automatische Backup-Routine mit voller Transparenz.

Keine Skripte oder SSH-Befehle mehr—**RcloneView** verwandelt NAS-zu-Cloud-Backups in einen Ein-Klick-Workflow.

---

## FAQs

**F. Kann ich mit RcloneView sowohl Synology als auch QNAP sichern?**  
**A.** Ja—jedes NAS, das **WebDAV**-, **S3**- oder **SMB**-Integration unterstützt, kann sich mit RcloneView verbinden.

**F. Welche Cloud-Dienste eignen sich am besten für NAS-Backups?**  
**A.** Google Drive und OneDrive für den allgemeinen Gebrauch; S3-kompatibler Speicher (Wasabi, R2, Backblaze) für große oder langfristige Archive.

**F. Benötige ich Kommandozeilen-Erfahrung?**  
**A.** Überhaupt nicht—RcloneView übernimmt alle rclone-Konfigurationen über seine grafische Oberfläche.

**F. Wie oft kann ich Backups planen?**  
**A.** So oft Sie möchten—täglich, stündlich oder sogar kontinuierlich.

**F. Kann ich NAS-Backups verschlüsseln?**  
**A.** Ja—nutzen Sie das rclone-`crypt`-Backend in RcloneView, um Ihre Cloud-Backups zusätzlich zu verschlüsseln.

**Bereit, Ihre NAS-zu-Cloud-Backups zu automatisieren und manuelle Uploads für immer zu vergessen?**

<CloudSupportGrid />
