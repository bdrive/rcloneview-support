---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "FTP-Server-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - robin
description: "Verbinden und verwalten Sie Ihren FTP-Server mit RcloneView. Synchronisieren und sichern Sie FTP-Dateien in Google Drive, S3, Backblaze B2 und über 90 weitere Cloud-Speicher-Anbieter."
keywords:
  - FTP-Server-Verwaltung
  - FTP-Cloud-Synchronisation
  - FTP-Backup in die Cloud
  - RcloneView FTP
  - FTP-Dateiübertragung
  - FTP mit Google Drive synchronisieren
  - FTP zu Amazon S3
  - FTP-Cloud-Backup-Tool
  - FTP-Speicher verwalten
  - FTP rclone GUI
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FTP-Server-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> RcloneView macht Ihren FTP-Server zu einem vollwertigen Remote — durchsuchen, synchronisieren und sichern Sie dessen Dateien visuell, genau wie bei Google Drive, S3 und über 90 weiteren Cloud-Anbietern.

FTP bildet nach wie vor das Rückgrat unzähliger Webhosting-Umgebungen, älterer Medienarchive und interner Dateiverteilungsserver. Die Verwaltung von FTP-Dateien bedeutet meist einen Wechsel zwischen Terminalsitzungen, manuellen Verzeichnislisten und selbst geschriebenen Skripten. RcloneView behandelt Ihren FTP-Server genau wie jedes andere Cloud-Speicherkonto — Sie erhalten eine einheitliche visuelle Oberfläche zum Durchsuchen, Übertragen und Sichern von Dateien, ohne die Kommandozeile zu benutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihren FTP-Server in RcloneView verbinden

Öffnen Sie den Tab **Remote** und klicken Sie auf **New Remote**. Wählen Sie in der Anbieterliste FTP aus und geben Sie Hostname oder IP-Adresse, Port, Benutzername und Passwort Ihres Servers ein. Falls Ihr Server FTPS (FTP über TLS) unterstützt, können Sie dies in den erweiterten Optionen für eine verschlüsselte Verbindung aktivieren.

Nach dem Speichern erscheint der FTP-Remote im Explorer-Panel neben Ihren Cloud-Konten. Sie können die Ordnerstruktur aufklappen, Unterverzeichnisse durchsuchen und Dateinamen, Größen sowie Änderungszeitstempel einsehen — dieselbe Erfahrung wie bei Amazon S3 oder Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## FTP-Dateien visuell durchsuchen und übertragen

Der Multi-Pane-Explorer von RcloneView macht die FTP-Verwaltung besonders effizient. Öffnen Sie Ihren FTP-Remote in einem Panel und ein Cloud-Ziel — einen Backblaze-B2-Bucket, einen Google-Drive-Ordner oder ein Amazon-S3-Präfix — im anderen. Ziehen Sie Dateien per Drag-and-Drop zwischen den Panels, um eine Kopie zu starten. Verwenden Sie Strg+Klick oder Umschalt+Klick für die Mehrfachauswahl beim Verschieben ganzer Dateigruppen. Per Rechtsklick können Sie umbenennen, löschen, Ordner erstellen oder Ordnergrößen abrufen.

Für Webagenturen, die Kundendateien auf einem FTP-Server pflegen und diese in einen Objektspeicher archivieren müssen, oder für Medienteams, die Assets von einem FTP-Host an mehrere Cloud-CDN-Anbieter verteilen, ersetzt diese Seite-an-Seite-Ansicht fehleranfällige manuelle Arbeitsabläufe.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## Synchronisationsjobs zwischen FTP und Cloud-Speicher erstellen

Für wiederkehrende Arbeitsabläufe können Sie im **Job Manager** von RcloneView Synchronisations- oder Kopierjobs zwischen Ihrem FTP-Server und jedem beliebigen Cloud-Ziel konfigurieren. Der 4-stufige Assistent deckt die Auswahl von Quelle und Ziel, erweiterte Einstellungen (parallele Übertragungen, Prüfsummenverifizierung) sowie Filterregeln (Dateityp, Größenlimit, Alterslimit) ab.

Führen Sie zunächst einen **Dry Run** aus — er zeigt eine Vorschau aller Dateien, die kopiert oder gelöscht würden, ohne dass Änderungen vorgenommen werden. Das ist besonders bei FTP-Quellen nützlich, deren Verzeichnisstrukturen komplex sind oder bei denen ungewollte Überschreibungen Probleme verursachen könnten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

Nach jedem Lauf zeigt der Tab **Job History** Ausführungszeit, Übertragungsgeschwindigkeit, Dateianzahl und Endstatus an — für einen klaren Nachweis, was wann übertragen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

Mit einer **PLUS-Lizenz** können Sie FTP-Synchronisationsjobs mit Cron-artigen Zeitplänen versehen — sichern Sie neue Uploads jede Nacht oder synchronisieren Sie wöchentlich mit dem Cloud-Speicher, ganz ohne eine offene Sitzung.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote** > **New Remote** und wählen Sie FTP aus der Anbieterliste.
3. Geben Sie Host, Port, Benutzername und Passwort Ihres Servers ein und speichern Sie den Remote.
4. Öffnen Sie Ihren FTP-Remote in einem Panel und ein Cloud-Ziel im anderen.
5. Verwenden Sie den **Job Manager**, um einen Synchronisationsjob zu konfigurieren, und führen Sie vor der ersten Live-Übertragung einen Dry Run aus.

Wenn Sie Ihren FTP-Server mit RcloneView verbinden, müssen Sie nie wieder ein Synchronisationsskript schreiben — jede Übertragung wird von einer einzigen Oberfläche aus nachverfolgt, ist wiederholbar und überprüfbar.

---

**Verwandte Anleitungen:**

- [SFTP-Server-Speicher verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [FTP-Server in Cloud-Speicher migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [WebDAV-Server verbinden und mit RcloneView synchronisieren](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
