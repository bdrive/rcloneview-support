---
slug: backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview
title: "Dropbox mit RcloneView zu Backblaze B2 sichern für preiswerten Langzeitspeicher"
authors:
  - tayson
description: "Schützen Sie Ihre Dropbox-Daten, indem Sie sie zu einem Bruchteil der Kosten auf Backblaze B2 sichern — automatisch, mit Zeitplanung und Verifizierung — mit RcloneView."
keywords:
  - dropbox backup to backblaze
  - dropbox to b2
  - backup dropbox cheap
  - dropbox backblaze b2 sync
  - dropbox long-term backup
  - affordable cloud backup
  - dropbox data protection
  - dropbox to backblaze transfer
  - dropbox rclone backup
  - cheap dropbox backup solution
tags:
  - RcloneView
  - dropbox
  - backblaze-b2
  - cloud-storage
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox mit RcloneView zu Backblaze B2 sichern für preiswerten Langzeitspeicher

> Dropbox eignet sich hervorragend für die tägliche Synchronisation, ist aber für die Langzeitsicherung teuer. Backblaze B2 kostet nur einen Bruchteil des Preises. RcloneView verbindet beide und automatisiert das Backup.

Dropbox glänzt bei Echtzeit-Dateisynchronisation und Zusammenarbeit, aber es ausschließlich als Backup zu nutzen, ist riskant und teuer — besonders bei großen Datenmengen. Backblaze B2 bietet S3-kompatiblen Objektspeicher für 0,006 $/GB/Monat (etwa 1/3 der Kosten der meisten Wettbewerber) und eignet sich damit ideal für die Langzeitarchivierung. RcloneView schlägt die Brücke: Sichern Sie Ihre Dropbox-Daten automatisch nach Zeitplan auf B2, verifizieren Sie mit Prüfsummen und stellen Sie jederzeit wieder her.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Dropbox auf Backblaze B2 sichern?

### Kosteneinsparungen

| Anbieter | Kosten pro TB/Monat | 10 TB/Jahr |
|----------|-------------------|------------|
| Dropbox Business | ~15 $/Nutzer (begrenzt) | Variiert |
| Backblaze B2 | 6 $ | 72 $ |
| AWS S3 Standard | 23 $ | 276 $ |

Die Preisgestaltung von B2 macht es zu einem der günstigsten verfügbaren Cloud-Backup-Ziele.

### Unabhängigkeit von Dropbox

- **Kontoprobleme** — Wenn Ihr Dropbox-Konto gesperrt oder kompromittiert wird, bleibt Ihr B2-Backup davon unberührt.
- **Versehentliches Löschen** — Der Versionsverlauf von Dropbox ist begrenzt. B2 bietet Ihnen ein unabhängiges Sicherheitsnetz.
- **Ransomware-Schutz** — Ein separates B2-Backup mit Lifecycle-Regeln kann als unveränderlicher Wiederherstellungspunkt dienen.

## Einrichtung des Backups

### Schritt 1: Dropbox hinzufügen

1. Klicken Sie auf **Add Remote** → wählen Sie **Dropbox**.
2. Authentifizieren Sie sich per OAuth.
3. Ihre Dropbox-Dateien sind nun durchsuchbar.

### Schritt 2: Backblaze B2 hinzufügen

1. Klicken Sie auf **Add Remote** → wählen Sie **Backblaze B2** (oder S3-kompatibel).
2. Geben Sie Ihre B2 Application Key ID und den Application Key ein.
3. Ihre B2-Buckets sind nun durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and Backblaze B2 remotes" class="img-large img-center" />

### Schritt 3: Backup-Job erstellen

1. Erstellen Sie einen **Copy-Job**: Dropbox → B2-Bucket.
2. Verwenden Sie Copy (nicht Sync), um zu vermeiden, dass B2-Dateien gelöscht werden, wenn Dropbox-Dateien entfernt werden.
3. Führen Sie das erste Backup aus.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to B2 backup job" class="img-large img-center" />

### Schritt 4: Verifizieren

Nutzen Sie den [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um zu bestätigen, dass jede Datei auf B2 angekommen ist:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on B2" class="img-large img-center" />

### Schritt 5: Zeitplan festlegen

Richten Sie tägliche automatische Backups ein:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox to B2 backups" class="img-large img-center" />

## Überwachung

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Dropbox to B2 transfer" class="img-large img-center" />

Fügen Sie [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)- oder [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)-Benachrichtigungen hinzu, um zu erfahren, wenn Backups abgeschlossen sind oder fehlschlagen.

## Wiederherstellung von B2

Falls Sie jemals wiederherstellen müssen:

1. Erstellen Sie einen Copy-Job in umgekehrter Richtung: B2 → Dropbox (oder B2 → lokales Laufwerk).
2. Verwenden Sie den Ordnervergleich, um bestimmte Dateien für die Wiederherstellung auszuwählen.
3. RcloneView übernimmt die Übertragung visuell — keine CLI erforderlich.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Dropbox** und **Backblaze B2** als Remotes hinzu.
3. **Erstellen Sie einen Copy-Job** und führen Sie das erste Backup aus.
4. **Planen Sie** täglichen automatischen Schutz.
5. **Schlafen Sie gut** in dem Wissen, dass Ihre Dropbox-Daten ein preiswertes, unabhängiges Backup haben.

---

**Verwandte Anleitungen:**

- [Remote über browserbasierte Anmeldung hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
