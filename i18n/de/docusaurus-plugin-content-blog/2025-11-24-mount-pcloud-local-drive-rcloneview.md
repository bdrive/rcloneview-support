---
slug: mount-pcloud-local-drive-rcloneview
title: "pCloud unter Windows & macOS mit RcloneView als lokales Laufwerk einbinden — Auf Ihre Dateien zugreifen, ohne zu synchronisieren"
authors:
  - tayson
description: "Binden Sie pCloud als Laufwerksbuchstaben oder Volume ein, durchsuchen Sie Dateien sofort ohne vollständige Synchronisation, und optimieren Sie die Cache-Einstellungen für schnellen, zuverlässigen Zugriff mit RcloneView."
keywords:
  - rcloneview
  - pcloud mount
  - cloud drive
  - vfs cache
  - windows
  - macos
  - cloud storage
  - rclone
  - multi cloud
  - drive letter
  - volume mount
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - cache settings
  - offline access
  - read ahead
  - compare
  - sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - pcloud
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud unter Windows & macOS mit RcloneView als lokales Laufwerk einbinden — Auf Ihre Dateien zugreifen, ohne zu synchronisieren

> Überspringen Sie vollständige Synchronisationen. Binden Sie pCloud mit RcloneView als lokales Laufwerk ein, durchsuchen Sie es im Explorer oder Finder, und streamen Sie Dateien bei Bedarf mit optimierten Cache-Einstellungen.

pCloud bietet Ihnen flexiblen Cloud-Speicher, aber alles auf jedes Gerät zu kopieren, kostet Zeit und Speicherplatz. Mit RcloneView können Sie pCloud wie einen lokalen Laufwerksbuchstaben oder ein Volume einbinden, Dateien bei Bedarf abrufen und die Bandbreite unter Kontrolle halten. Keine CLI-Flags zum Auswendiglernen; einfach verbinden, einbinden und loslegen.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum Einbinden statt Synchronisieren?

- Platz sparen: durchsuchen und öffnen Sie nur, was Sie benötigen, kein vollständiges lokales Abbild.
- Schnellerer Start: binden Sie Ihr Laufwerk einmal ein und überspringen Sie lange Erst-Synchronisationen.
- Sichere Bearbeitung: der Cache schreibt lokal, RcloneView übernimmt Wiederholungsversuche und Fortsetzungen.

## Schritt 1 — pCloud in RcloneView verbinden

- Fügen Sie pCloud über `+ New Remote` hinzu (WebDAV oder OAuth-Ablauf). Anleitung: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Bestätigen Sie, dass das Remote funktioniert, indem Sie Ordner im **Remote Explorer** auflisten.

## Schritt 2 — Ein Mount erstellen (Windows oder macOS)

- Öffnen Sie den **Mount Manager** und wählen Sie Ihr pCloud-Remote. Anleitung: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Wählen Sie ein Ziel:
  - Windows: wählen Sie einen Laufwerksbuchstaben (z. B. `P:`) mit `cmount`.
  - macOS: wählen Sie einen Mount-Pfad (z. B. `/Volumes/pcloud`).
- Speichern und einbinden. Das Laufwerk sollte sofort im Explorer oder Finder erscheinen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## Schritt 3 — (Optional) Mit Compare vor größeren Änderungen prüfen

- Nutzen Sie **Compare**, um Unterschiede vor umfangreichen Verschiebungen oder Bereinigungen zu überprüfen: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Erkennen Sie neuere, fehlende oder nicht übereinstimmende Dateien, ohne eine destruktive Synchronisation auszuführen.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## Schritt 4 — (Optional) Sync-Jobs für wichtige Ordner

- Halten Sie kritische Ordner (z. B. `Projects/` oder `Photos/`) gespiegelt in einer anderen Cloud oder auf einem NAS: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Beginnen Sie zur Sicherheit mit **copy**; wechseln Sie zu **sync**, sobald Sie dem Ziel vertrauen.
- Planen Sie Läufe außerhalb der Arbeitszeiten, damit die Mounts während der Arbeit reaktionsfreudig bleiben.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


Binden Sie pCloud einmal ein, optimieren Sie den Cache, und halten Sie Ihren Speicher schlank. RcloneView lässt Cloud-Laufwerke lokal wirken, ohne den riskanten Overhead vollständiger Synchronisationen.

<CloudSupportGrid />
