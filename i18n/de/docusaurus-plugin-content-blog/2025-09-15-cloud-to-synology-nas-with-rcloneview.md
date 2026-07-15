---
slug: cloud-to-synology-nas-with-rcloneview
title: "Cloud-zu-NAS-Brücke: Sichern Sie Google Drive & OneDrive mit RcloneView auf Synology"
authors:
  - jay
description: Verschieben und synchronisieren Sie Dateien von Cloud-Laufwerken (z. B. Google Drive, OneDrive) auf Ihre Synology NAS mit dem klickbasierten Workflow von RcloneView – Drag-and-Drop-Übertragungen, visueller Vergleich und geplante Synchronisationen ganz ohne CLI.
keywords:
  - rcloneview
  - synology nas
  - google drive backup
  - onedrive backup
  - cloud to nas
  - webdav
  - sftp
  - rclone GUI
  - scheduled sync
tags:
  - RcloneView
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
  - backup
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-zu-NAS-Brücke: Sichern Sie Google Drive & OneDrive mit RcloneView auf Synology

> Behalten Sie eine lokale Sicherheitskopie und übernehmen Sie die Kontrolle über Ihre Daten. Spiegeln Sie Ihre **Cloud-Laufwerke** auf eine **Synology NAS** mit einem übersichtlichen Point-and-Click-Workflow – keine Kommandozeile erforderlich.

## Cloud zu NAS, der smarte Weg – warum das wichtig ist

Cloud-Speicher ist praktisch für Zusammenarbeit und Zugriff von überall. Aber eine **zweite, lokale Kopie** auf einer Synology NAS zu führen, verschafft Ihnen versionierte Backups, LAN-schnelle Wiederherstellungen und Unabhängigkeit von einem einzelnen Anbieter. Mit **RcloneView** können Sie beliebte Cloud-Dienste (z. B. **Google Drive**, **OneDrive** und weitere von rclone unterstützte Dienste) sowie Ihre NAS verbinden und Aufgaben dann von einem Bildschirm aus **vorschauen, kopieren und planen**.

<!-- truncate -->

**Cloud-Laufwerke im Überblick**  
- Ideal für Echtzeit-Zusammenarbeit und Freigabe.  
- Anbieterseitige Limits/Kontingente können große Migrationen beeinflussen (in Batches planen).  

**Synology NAS im Überblick**  
- Ihr rund um die Uhr verfügbarer Speicher-Hub zuhause oder im Büro.  
- Zugänglich über **SMB/NFS** (als lokale Ordner eingebunden) oder Netzwerkprotokolle wie **WebDAV** und **SFTP**.  
- Ideal für zentrales Backup, Medien-Hosting und Langzeitarchivierung.

**Warum Cloud → NAS?**  
- **Ausfallsicherheit**: eine offline nutzbare Kopie unter Ihrer Kontrolle.  
- **Geschwindigkeit**: große Ordner über LAN wiederherstellen, ohne auf die Internetbandbreite warten zu müssen.  
- **Governance**: Aufbewahrung, Zugriff und Auditierung lokal vereinheitlichen.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Schritt 1 – Vorbereitung

Bevor Sie beginnen:

1. **Umfang festlegen** — welche Google Drive-/OneDrive-Ordner soll die NAS behalten?  
2. **NAS-Kapazität prüfen** — genügend freien Speicherplatz sicherstellen und Ziel-Share/-Ordner vorbereiten.  
3. **Verbindungsmethode für Ihre NAS wählen**  

   - **WebDAV**: aktivieren Sie den Synology **WebDAV Server** und verbinden Sie sich dann per WebDAV in RcloneView.  
   - **SMB**: aktivieren Sie **SMB** auf Synology und verbinden Sie sich dann per SMB in RcloneView.  
   - **SFTP**: aktivieren Sie SSH/SFTP auf Synology und verbinden Sie sich per **SFTP**.  
4. **Rhythmus planen** — einmalige Migration, periodische Synchronisation oder nächtliche geplante Aufgaben.  
5. **Anbieter-Limits beachten** — größere Übertragungen sollten eventuell in Batches aufgeteilt werden; ein Testlauf empfiehlt sich vorab.

🔍 Hilfreiches Tutorial: 

- [Synology NAS Integration with RcloneView](/tutorials/synology-nas-cloud-transfer)

## Schritt 2 – Verbindungen in RcloneView einrichten

RcloneView verpackt die Konfiguration von rclone in einen geführten Klick-Workflow.

1. Öffnen Sie **RcloneView** → klicken Sie auf **`+ New Remote`**  
2. Fügen Sie Ihr **Cloud-Laufwerk** hinzu  
   - **Google Drive**: OAuth-Anmeldung → benennen (z. B. `MyGoogleDrive`)  
   - **OneDrive**: OAuth-Anmeldung → benennen (z. B. `MyOneDrive`)  
   - (Weitere von rclone unterstützte Dienste können ähnlich hinzugefügt werden)  
3. Fügen Sie Ihr **Synology NAS-Ziel** mit **einer** der folgenden Methoden hinzu:  
   - **WebDAV**: Endpunkt vom Synology WebDAV Server, Zugangsdaten → benennen (z. B. `MyNAS-WebDAV`)  
   - **SMB**: NAS-Host-IP, Port, Konto → benennen (z. B. `MyNAS-SMB`)  
   - **SFTP**: NAS-Hostname/IP, Port, Konto → benennen (z. B. `MyNAS-SFTP`)  
4. Bestätigen Sie, dass beide Remotes im Explorer-Bereich nebeneinander erscheinen.

🔍 Hilfreiche Anleitungen:  
- [Synology NAS Integration with RcloneView](/tutorials/synology-nas-cloud-transfer)
- [How to Add Google Drive Remote](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [Quick OAuth Setup (OneDrive/Google)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## Schritt 3 – Backup-/Synchronisationsaufgaben ausführen

RcloneView bietet drei praktische Methoden. Klein anfangen und dann skalieren.

### A) Drag & Drop (manuelles Kopieren)
- Öffnen Sie **Google Drive/OneDrive** auf der einen Seite und Ihr **NAS**-Ziel auf der anderen Seite und **ziehen Sie Ordner/Dateien hinüber**.  
- Ideal für gezielte Übertragungen und schnelle Ergebnisse.  

👉 Mehr dazu: [Copying Files using Drag and Drop](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Vergleichen & Kopieren (Vorschau der Änderungen)
- Führen Sie **Vergleichen** aus, um zu sehen, was in der Cloud neu oder geändert ist im Vergleich zu Ihrer NAS.  
- Kopieren Sie nur das, was sich geändert hat – weniger Überraschungen und Zeitersparnis.  

👉 Mehr dazu: [Compare and Manage Files](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Synchronisation & geplante Aufgaben (Automatisierung)
- Verwenden Sie **Synchronisation**, um ausgewählte Cloud-Ordner in Ihren NAS-Share zu spiegeln.  
- Zuerst einen **Probelauf**, dann als wiederverwendbare **Aufgabe** speichern und einen Zeitplan hinzufügen (nächtlich/wöchentlich).  

👉 Mehr dazu:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## Fazit — Die wichtigsten Erkenntnisse & Extra-Tipps

- **Warum das Ganze**: eine zweite Kopie unter Ihrer Kontrolle, schnellere Wiederherstellungen über LAN und einheitliche Aufbewahrung.  
- **Wie es funktioniert**: Mit RcloneView verbinden Sie Cloud-Laufwerke und Ihre Synology NAS und nutzen dann **Drag & Drop**, **Vergleichen** oder **Synchronisation** – mit **Zeitplanung** für automatisierte Backups.  
- **Sicher skalieren**: zuerst pilotieren, Anbieter-Kontingente beachten und Job-Protokolle für eine saubere Nachvollziehbarkeit überwachen.

## FAQs

**Q. Kann RcloneView wiederkehrende Backups automatisch ausführen?**  
**A.** Ja – speichern Sie Ihre Synchronisation als **Aufgabe** und planen Sie sie (z. B. nächtlich). Verlauf und Status sehen Sie im Job Manager.

**Q. Was ist mit iCloud?**  
**A.** Rclone unterstützt viele Anbieter. Für Dienste ohne direktes Backend empfiehlt es sich, die Daten zunächst lokal zu exportieren und dann RcloneView zu nutzen, um sie auf Ihre NAS zu übertragen.


**Bereit, eine lokale, zuverlässige Kopie Ihres Cloud-Lebens zu behalten?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
