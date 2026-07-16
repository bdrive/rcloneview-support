---
slug: mount-google-drive-local-drive-rcloneview
title: "Google Drive unter Windows & macOS mit RcloneView als lokales Laufwerk einbinden"
authors:
  - tayson
description: Verwandeln Sie die 40.000+ monatlichen Suchanfragen zum Einbinden von Google Drive in eine Point-and-Click-Realität, indem Sie mit RcloneView komplexe CLI-Schritte durch geführte Mounts, Caching und Automatisierung unter Windows und macOS ersetzen.
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive unter Windows & macOS mit RcloneView als lokales Laufwerk einbinden

> Über 40.000 Menschen pro Monat suchen nach „Google Drive mounten". RcloneView verwandelt diese CLI-lastige Antwort in einen Workflow mit zwei Klicks – inklusive Caching, Autostart und GUI-Überwachung.

`rclone mount` ist legendär, aber einschüchternd: OAuth-Tokens, Konfigurationspasswörter, WinFsp/macFUSE-Installationen, lange Flag-Ketten und Skripte, die nach einem Neustart erneut ausgeführt werden müssen. RcloneView bündelt all diese Bestandteile in einer Desktop-App, sodass Sie Google Drive (und jeden anderen Cloud-Speicher) als echten Laufwerksbuchstaben unter Windows oder als Finder-Volume unter macOS einbinden(mount) können – ganz ohne Terminal.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum RcloneView statt selbstgebauter CLI-Mounts

- **Geführtes OAuth**: Der Remote Manager öffnet einen sicheren Browser und speichert Refresh-Tokens (siehe [Remote Manager](/howto/rcloneview-basic/remote-manager)).
- **Treiber-Hilfen**: WinFsp- und macFUSE-Aufforderungen sind in den Installer integriert, und RcloneView prüft sie, bevor Sie auf Mount klicken.
- **Wiederverwendbare Vorlagen**: Der Mount Manager merkt sich jeden Google Drive-Remote, jedes Shared Drive oder jeden anderen Remote, sodass Sie nach einem Neustart mit einem einzigen Schalter erneut einbinden(mount) können.
- **Multi-Cloud-Steuerung**: Während Sie Google Drive einbinden(mount), können Sie gleichzeitig mit Dropbox synchronisieren, S3-Buckets vergleichen oder Jobs aus derselben Oberfläche planen.
- **Überwachung & Planer**: Der integrierte Scheduler und die Übertragungsüberwachung zeigen den Durchsatz an und starten Mounts bei Bedarf automatisch neu.

## Schritt 1 -- Desktop vorbereiten

1. **RcloneView installieren** (rclone ist bereits enthalten). Bestätigen Sie unter Windows die WinFsp-Aufforderung, unter macOS installieren Sie macFUSE.
2. **Legen Sie Laufwerksbuchstaben oder Finder-Volumes fest**, unter denen Google Drive erscheinen soll (zum Beispiel `G:` oder `/Volumes/GDrive`).
3. **Cache-Speicherplatz festlegen**: Wählen Sie einen SSD-Ordner mit mindestens einigen GB freiem Speicher; darauf verweisen Sie später Ihre Mounts für schnellere Vorschauen.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## Schritt 2 -- Google Drive (und weitere) verbinden

- Öffnen Sie den Remote Manager und klicken Sie auf **Remote hinzufügen** -> **Google Drive**. Folgen Sie den OAuth-Anweisungen unter [Add OAuth Online Login](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide).
- Benennen Sie den Remote `gdrive-main` (und fügen Sie optional Shared Drives oder andere Cloud-Speicher wie Dropbox, OneDrive oder S3 hinzu, um sie später zu vergleichen oder zu synchronisieren).
- Nutzen Sie [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage), um Ordner-Voreinstellungen für häufig eingebundene Bereiche zu erstellen (Design, Finanzen, Shared Drives usw.).  

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## Schritt 3 -- Google Drive über den Explorer oder den Mount Manager einbinden

1. Starten Sie den Dual-Pane-Explorer, wählen Sie Ihren Google Drive-Remote aus und klicken Sie in der Symbolleiste auf das **Mount-Symbol**.
2. Wählen Sie **Laufwerksbuchstabe/Volume**, legen Sie den Cache-Pfad fest und schalten Sie Lesen/Schreiben, Cache-Modus und Bandbreitenbegrenzungen ein.
3. Klicken Sie auf **Mount** und öffnen Sie dann den Datei-Explorer oder Finder, um das neue Laufwerk zu sehen.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

Der Mount Manager (Extras -> Mount Manager) führt eine Liste aller Mounts mit Schaltern für Autostart, automatisches Wiederverbinden und Start bei Anmeldung. Sie können sogar mehrere Google-Konten gleichzeitig einbinden – ein Kunststück, das normalerweise mehrere Terminal-Fenster erfordert.


## Schritt 4 -- Workflows über das Einbinden hinaus automatisieren

Das Einbinden(Mount) ist erst der Anfang. RcloneView legt Multi-Cloud-Workflows darüber:

- **Vergleichen und aufräumen**: Google Drive im Vergleich zu einer lokalen SSD oder Dropbox mit [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents), während der Mount aktiv bleibt.  

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- **Synchronisieren oder kopieren** Sie ganze Ordner auf externe Laufwerke mit [Create sync jobs](/howto/rcloneview-basic/create-sync-jobs) und [Synchronize remote storages](/howto/rcloneview-basic/synchronize-remote-storages) für Offline-Backups.  

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- **Planen** Sie diese Jobs, sodass Ihr eingebundenes Google Drive jede Nacht automatisch eine Synchronisation zu NAS oder Wasabi einreiht – ganz ohne manuelle Klicks (siehe [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)).  

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- **Andere Cloud-Speicher einbinden** (OneDrive, Dropbox, S3) und Dateien zwischen Finder-Fenstern verschieben, als wären es lokale Laufwerke.

## Anwendungsfälle, die RcloneView ermöglicht

- **Designer & Medienteams**: Assets direkt in Adobe oder DaVinci Resolve streamen, ohne die gesamte Bibliothek lokal zu speichern.
- **Entwickler & DevOps**: Shared Drives für Konfigurationsdateien einbinden und dann Compare- oder Sync-Jobs zu Staging-/Produktions-Buckets skripten.
- **Audit & Compliance**: Google Drive schreibgeschützt für Prüfer einbinden, während der Scheduler dafür sorgt, dass unveränderliche Kopien in S3 oder auf externen Laufwerken landen.
- **Power-User**: Drive for Desktop durch einen leichteren Mount ersetzen, der Ihre eigenen Cache-Pfade, Bandbreitenbegrenzungen und Protokollierung respektiert.

## Fehlerbehebung & FAQ

**Brauche ich noch die CLI?**  
Nein. RcloneView erzeugt alle `rclone mount`-Flags im Hintergrund. Fortgeschrittene Nutzer können die Job-Details öffnen, um den genauen Befehl zu sehen.

**Was ist mit macOS-Berechtigungen?**  
Bestätigen Sie die Aufforderungen für Systemerweiterungen bei macFUSE und schauen Sie dann im Mount Manager nach, falls Finder das Volume nicht anzeigt. Die How-to-Anleitung enthält Screenshots zur Vergabe der Berechtigungen.

**Kann ich mehrere Google-Konten einbinden?**  
Ja. Fügen Sie im Remote Manager pro Konto einen Remote hinzu und erstellen Sie dann für jeden einen Mount-Eintrag. RcloneView hält die Tokens getrennt, sodass Sie `gdrive-marketing` und `gdrive-personal` gleichzeitig anzeigen können.

Das Einbinden von Google Drive ist nach wie vor eine der meistgesuchten Google-Suchanfragen, weil die CLI-Antworten komplex sind. RcloneView bietet diesen über 40.000 Suchenden einen No-Code-Weg: Verbinden Sie Ihr Google-Konto einmal, klicken Sie auf Mount und erhalten Sie einen zuverlässigen Laufwerksbuchstaben oder ein Finder-Volume mit all der Multi-Cloud-Power (Compare, Sync, Scheduler), auf die Sie sich bereits verlassen. Laden Sie die neueste Version herunter und verabschieden Sie sich noch heute von Ihren Mount-Skripten.

<CloudSupportGrid />
