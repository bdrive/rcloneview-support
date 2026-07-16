---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "DigitalOcean Spaces als lokales Laufwerk einbinden für einfachen Dateizugriff mit RcloneView"
authors:
  - tayson
description: "Greifen Sie auf Ihren DigitalOcean Spaces Object Storage wie auf einen normalen Ordner zu — binden Sie ihn als lokales Laufwerk ein, ziehen Sie Dateien per Drag-and-Drop und synchronisieren Sie mit anderen Clouds mithilfe von RcloneView."
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - digitalocean-spaces
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DigitalOcean Spaces als lokales Laufwerk einbinden für einfachen Dateizugriff mit RcloneView

> DigitalOcean Spaces eignet sich hervorragend zum Speichern von Assets, aber der Zugriff auf Dateien über die Web-Konsole ist langsam und mühsam. Was wäre, wenn Sie Ihren Spaces-Bucket wie einen normalen Ordner auf Ihrem Desktop durchsuchen könnten?

DigitalOcean Spaces bietet erschwinglichen, S3-kompatiblen Object Storage, aber das Web-Dashboard ist nicht für die tägliche Dateiverwaltung gemacht. Das Hochladen von Ordnern, das Organisieren von Dateien oder die schnelle Vorschau von Inhalten bedeutet ständigen Wechsel zwischen Browser-Tabs. Mit RcloneView können Sie jeden Spaces-Bucket als lokales Laufwerk einbinden (mounten) — durchsuchen, per Drag-and-Drop verschieben und Dateien so natürlich synchronisieren wie mit Ihrem lokalen Dateisystem.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum DigitalOcean Spaces lokal einbinden?

Spaces funktioniert gut als Backend-Speicher für Anwendungen, aber wenn Menschen direkt damit interagieren müssen:

- **Die Web-Konsole ist langsam** — Das Navigieren durch große Buckets mit Tausenden von Dateien ist mühsam. Es gibt kein Massen-Umbenennen, keine Schnellvorschau, kein Drag-and-Drop.
- **CLI-Tools erfordern das Auswendiglernen von Befehlen** — `s3cmd` und `aws s3` funktionieren, aber nicht jeder möchte Befehle für einfache Dateioperationen eintippen.
- **Keine native Desktop-Integration** — Anders als Dropbox oder Google Drive hat Spaces keinen Desktop-Sync-Client.

Das Einbinden von Spaces als lokales Laufwerk löst alle drei Probleme. Ihr Bucket erscheint als Ordner in Ihrem Dateimanager — öffnen Sie Dateien, kopieren Sie Ordner, löschen Sie Elemente, alles mit vertrauten Werkzeugen.

## DigitalOcean Spaces als Remote einrichten

Da Spaces S3-kompatibel ist, verwendet die Einrichtung in RcloneView den S3-Provider-Typ:

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Amazon S3** als Provider-Typ (Spaces nutzt die S3-API).
3. Wählen Sie **DigitalOcean Spaces** aus dem S3-Provider-Dropdown.
4. Geben Sie Ihre Zugangsdaten ein:
   - **Access Key** und **Secret Key** aus Ihren DigitalOcean-API-Einstellungen.
   - **Region**: Ihre Spaces-Region (z. B. `nyc3`, `sfo3`, `ams3`, `sgp1`).
   - **Endpoint**: `https://{region}.digitaloceanspaces.com`
5. Speichern Sie den Remote — Ihre Spaces-Buckets sind jetzt durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Spaces als lokales Laufwerk einbinden

Sobald die Verbindung hergestellt ist, dauert das Einbinden Ihres Spaces-Buckets als lokales Laufwerk nur wenige Klicks:

1. Navigieren Sie im Explorer zu Ihrem Spaces-Remote.
2. Klicken Sie mit der rechten Maustaste auf den Bucket oder Ordner, den Sie einbinden möchten.
3. Wählen Sie **Mount** aus dem Kontextmenü.
4. Wählen Sie einen lokalen Mount-Punkt (Laufwerksbuchstabe unter Windows, Mount-Pfad unter Mac/Linux).
5. Klicken Sie auf **Mount** — Ihr Spaces-Bucket erscheint jetzt als lokales Laufwerk.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

Alternativ können Sie den Mount Manager für mehr Kontrolle über die Mount-Optionen verwenden:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### Was Sie mit dem eingebundenen Laufwerk tun können

- **Dateien direkt öffnen** — Doppelklicken Sie auf Bilder, Dokumente oder Videos, um sie in Ihren Standardanwendungen zu öffnen.
- **Kopieren und Einfügen** — Verschieben Sie Dateien zwischen Ihrem lokalen Dateisystem und Spaces mit dem Dateimanager Ihres Betriebssystems.
- **Drag-and-Drop** — Ziehen Sie Dateien von Ihrem Desktop in das eingebundene Laufwerk.
- **In Anwendungen verwenden** — Öffnen Sie Dateien auf dem eingebundenen Laufwerk direkt in Anwendungen wie Photoshop, VS Code oder Videoeditoren.

## Dateien durchsuchen und verwalten

Auch ohne Einbindung bietet Ihnen der zweispaltige Explorer von RcloneView einen leistungsstarken Dateimanager für Spaces:

- **Buckets und Ordner navigieren** mit vertrauter Baumnavigation.
- **Drag-and-Drop** von Dateien zwischen Spaces und jedem anderen Remote (Google Drive, S3, lokale Festplatte).
- **Erstellen, umbenennen und löschen** von Dateien und Ordnern.
- **Dateigrößen und -daten anzeigen** für eine einfache Verwaltung.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Spaces mit anderen Clouds synchronisieren

DigitalOcean Spaces existiert nicht isoliert. Gängige Workflows umfassen:

### Synchronisation Spaces ↔ AWS S3

Behalten Sie eine Sicherungskopie Ihrer Spaces-Daten in AWS S3 (oder umgekehrt):

1. Erstellen Sie einen Sync-Job mit Spaces als Quelle und S3 als Ziel.
2. Planen Sie ihn für die nächtliche Ausführung.
3. Verwenden Sie den [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um sicherzustellen, dass beide Seiten übereinstimmen.

### Synchronisation Spaces ↔ lokaler Entwicklungsordner

Behalten Sie eine lokale Kopie Ihrer Spaces-Assets für die Entwicklung:

1. Erstellen Sie einen Sync-Job von Spaces zu einem lokalen Ordner.
2. Nehmen Sie lokale Änderungen vor und synchronisieren Sie diese zurück zu Spaces.

### Verteilung von Spaces auf mehrere Clouds

Verwenden Sie die v1.3 [Batch-Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview), um Spaces-Inhalte in einer automatisierten Sequenz auf Google Drive, OneDrive und S3 zu kopieren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Spaces-Workflows automatisieren

### Geplante Backups

Richten Sie einen täglichen Copy-Job von Ihrem Spaces-Bucket zu einer anderen Cloud oder einem lokalen Speicher ein:

1. Erstellen Sie den Job im Job Manager.
2. Planen Sie ihn über die [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Lassen Sie sich per [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) oder [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) benachrichtigen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### Performance-Tipps

- **Parallele Übertragungen**: 8–16 (Spaces verarbeitet hohe Nebenläufigkeit gut).
- **Chunk-Größe**: 64 MB für große Dateien.
- **Fast-List**: Für schnelleres Auflisten von Verzeichnissen bei großen Buckets aktivieren.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Spaces hinzufügen** als S3-kompatiblen Remote mit Ihren API-Schlüsseln.
3. **Bucket einbinden** als lokales Laufwerk oder im Explorer durchsuchen.
4. **Synchronisieren oder sichern** Sie mit geplanten Jobs auf andere Clouds.

Hören Sie auf, gegen die Web-Konsole anzukämpfen. Binden Sie Ihre DigitalOcean Spaces als lokales Laufwerk ein und arbeiten Sie mit Ihren Dateien so, wie Sie mit allem anderen arbeiten — von Ihrem Desktop aus.

---

**Weiterführende Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Remotes durchsuchen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
