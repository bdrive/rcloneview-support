---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "Cloud-Speicher für Theater — Skripte, Cues und Probenvideos mit RcloneView schützen"
authors:
  - tayson
description: "Erfahren Sie, wie Theaterensembles mit RcloneView Skripte, Licht- und Ton-Cue-Dateien sowie Probenvideos zwischen Clouds und NAS synchronisieren und geplante Backups ausführen."
keywords:
  - Cloud-Speicher für Theater
  - Backup von Theaterproduktionsdateien
  - Cloud-Speicher für darstellende Künste
  - Licht- und Ton-Cue-Dateien sichern
  - Cloud-Backup für Probenvideos
  - Synchronisation von Bühnenbilddateien
  - Theaterarchiv vom NAS in die Cloud
  - RcloneView für Theaterensembles
  - Multi-Cloud-Backup für Kulturorganisationen
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Theater — Skripte, Cues und Probenvideos mit RcloneView schützen

> Die Premiere hängt von Dateien ab: der richtigen Skriptfassung, den finalen Ton-Cues und dem Lichtplan, den die Designerin freigegeben hat.

Ein Regionaltheater jongliert mit überraschend vielen Daten. Die Regie teilt Skriptfassungen in Google Drive, der Sounddesigner liefert Cue-Listen über Dropbox, Probenvideos stapeln sich auf einem Synology NAS in der Regiekabine, und das Archiv vergangener Spielzeiten liegt auf alternden externen Laufwerken. RcloneView bringt all das in ein einziges Fenster, sodass das Produktionsteam jeden Produktionsordner synchronisieren, vergleichen und sichern kann, ohne zwischen verschiedenen Apps zu wechseln.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Alle Speicherorte der Produktion verbinden

Jede Abteilung wählt gern ihr eigenes Werkzeug, daher besteht der erste Schritt darin, alles sichtbar zu machen. Fügen Sie in RcloneView Google Drive und Dropbox per Browser-Anmeldung hinzu, verbinden Sie das NAS der Regiekabine über die Synology-Autoerkennung und ergänzen Sie einen Object-Storage-Bucket wie Backblaze B2 oder Wasabi für das Langzeitarchiv. Freigegebene Ordner, die externe Designer über Google Drive senden, lassen sich als Google Drive Shared with Me Remote hinzufügen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

Mit bis zu vier nebeneinander geöffneten Explorer-Bereichen kann die Inspizienz das aktuelle Regiebuch aus Drive in den Produktionsordner auf dem NAS ziehen oder die Renderings einer Designerin aus Dropbox in den Archiv-Bucket holen. Beim Ziehen zwischen verschiedenen Remotes werden Dateien kopiert, sodass das Original dort bleibt, wo die Designerin es abgelegt hat.

## Cue-Dateien und Skripte vor der Technikwoche konsistent halten

Der klassische Fehler in der Technikwoche: die Vorstellung mit einer veralteten Cue-Datei fahren. Folder Compare in RcloneView stellt den Lieferordner des Sounddesigners neben die Kopie in der Regiekabine und hebt Dateien hervor, die nur auf einer Seite existieren oder sich in der Größe unterscheiden. Kopieren Sie die geänderten Cue-Dateien mit einem Klick hinüber, und sie werden in der Vergleichsansicht als gleich markiert.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

Für den gesamten Produktionsordner zeigt ein Sync-Job mit vorherigem Dry Run genau, was kopiert oder gelöscht wird – wichtig, wenn die Regie den Skriptordner stillschweigend umorganisiert hat.

## Probenvideos gleichzeitig an zwei Ziele sichern

Proben- und Archivaufnahmen sind groß und unersetzlich. Die 1:N-Synchronisation von RcloneView spiegelt einen Quellordner in einem einzigen Job an mehrere Ziele, sodass der Videoordner auf dem NAS sowohl in einen B2-Bucket als auch in eine zweite Cloud gehen kann. Anders als reine Mount-Tools kann RcloneView auch synchronisieren und Ordner vergleichen – mit der FREE License.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

Schauspielverträge und Lohnexporte verdienen besondere Sorgfalt. Umhüllen Sie einen Cloud-Ordner mit einem Crypt-Remote, damit Dateinamen und Inhalte verschlüsselt werden, bevor sie das Büro verlassen.

## Nächtliche Backups während der Spielzeit automatisieren

Mit einer PLUS License führt der crontab-artige Planer im Job-Assistenten Backups nach jeder Abendvorstellung aus, zum Beispiel um 1:00 Uhr, und Simulate schedule zeigt die nächsten Ausführungszeiten vorab. Job History protokolliert jeden Lauf mit Status, Größe und Dateianzahl und gibt der Produktionsleitung eine klare Aufzeichnung, falls mitten in der Spielzeit Fragen aufkommen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie die Remotes hinzu, die Ihre Abteilungen bereits nutzen: Google Drive, Dropbox, Ihr NAS und einen Archiv-Bucket.
3. Prüfen Sie mit Folder Compare, ob die Cue-Dateien in der Regiekabine der neuesten Lieferung des Designers entsprechen.
4. Erstellen Sie einen 1:N-Sync-Job für Probenvideos und planen Sie ihn mit PLUS für jede Nacht ein.

Wenn die Dateien geschützt sind, kann sich das Team ganz auf die Vorstellung konzentrieren.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher-Workflow für Videoproduktionsteams — Dailies, Proxys und Finals mit RcloneView synchronisieren](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [Cloud-Speicher für Musikproduktion — Sessions, Stems und Backups mit RcloneView verwalten](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [1:N-Synchronisation — Eine Quelle mit mehreren Zielen in RcloneView synchronisieren](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
