---
slug: manage-smb-cifs-network-shares-rcloneview
title: "SMB/CIFS-Netzwerkfreigaben verwalten — Büro-Dateiserver mit RcloneView in die Cloud synchronisieren"
authors:
  - tayson
description: "SMB-Netzwerkfreigaben bilden das Rückgrat von Büro-Dateiservern. Erfahren Sie, wie Sie sie mit RcloneView verbinden und mit Google Drive, S3 oder einem beliebigen Cloud-Speicher für Backup und Fernzugriff synchronisieren."
keywords:
  - smb cloud sync
  - cifs cloud backup
  - network share to cloud
  - smb to google drive
  - file server cloud sync
  - smb to s3 backup
  - windows share cloud
  - network drive cloud backup
  - smb rclone
  - office file server cloud
tags:
  - RcloneView
  - smb
  - nas
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SMB/CIFS-Netzwerkfreigaben verwalten — Büro-Dateiserver mit RcloneView in die Cloud synchronisieren

> Der Dateiserver Ihres Unternehmens läuft schon seit Jahren. Alle greifen über zugeordnete Netzlaufwerke darauf zu. Aber es gibt kein Offsite-Backup, und Remote-Mitarbeiter können von zu Hause aus nicht darauf zugreifen. Cloud-Synchronisation löst beide Probleme.

SMB/CIFS (Server Message Block / Common Internet File System) ist das Protokoll hinter jedem freigegebenen Windows-Ordner, jeder NAS-Dateifreigabe und jedem Büro-Dateiserver. Es ist zuverlässig und schnell in lokalen Netzwerken, wurde aber nicht für Cloud-Integration oder Fernzugriff entwickelt. RcloneView schließt diese Lücke — verbinden Sie Ihre SMB-Freigaben und synchronisieren Sie sie mit einem beliebigen Cloud-Anbieter für Backup, Fernzugriff und Notfallwiederherstellung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SMB-Freigaben mit RcloneView verbinden

<img src="/support/images/en/blog/new-remote.png" alt="Add SMB remote" class="img-large img-center" />

Fügen Sie Ihre SMB-Freigabe als Remote mit Serveradresse, Freigabename und Zugangsdaten hinzu. Ihre Netzwerkfreigaben erscheinen im zweispaltigen Explorer.

## Wichtige Arbeitsabläufe

### Dateiserver in die Cloud sichern

Schützen Sie Ihren Büro-Dateiserver mit Cloud-Backups auf S3, B2 oder Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="File server to cloud backup" class="img-large img-center" />

### Fernzugriff aktivieren

Synchronisieren Sie die Inhalte des Dateiservers mit Google Drive oder OneDrive, damit Remote-Mitarbeiter ohne VPN von überall auf Dateien zugreifen können.

### Nächtliche Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule file server backup" class="img-large img-center" />

Führen Sie Backups über Nacht aus, wenn das Büronetzwerk ruhig ist.

### Backup-Integrität überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify file server backup" class="img-large img-center" />

Vergleichen Sie die SMB-Freigabe mit der Cloud-Kopie, um sicherzustellen, dass nichts fehlt.

### In die Cloud migrieren

Planen Sie, den Dateiserver stillzulegen? Übertragen Sie alles schrittweise, Abteilung für Abteilung, in den Cloud-Speicher.

## Tipps zur Performance

- **Backups außerhalb der Geschäftszeiten ausführen**, um Netzwerküberlastung zu vermeiden
- **Inkrementelle Synchronisation verwenden** — bei jedem Durchlauf werden nur geänderte Dateien übertragen
- **Angemessene Parallelität einstellen** — 2-4 Übertragungen für gemeinsam genutzte Server
- **Temporäre Dateien ausschließen** — filtern Sie `~$*`, `.tmp`, `Thumbs.db` heraus

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihre SMB-Freigabe** als Remote hinzu.
3. **Fügen Sie ein Cloud-Ziel** für das Backup hinzu.
4. **Erstellen Sie Sync-Jobs** und planen Sie sie.
5. **Überprüfen Sie regelmäßig** mit dem Ordnervergleich.

Ihr Dateiserver verdient ein Cloud-Sicherheitsnetz.

---

**Verwandte Anleitungen:**

- [SFTP/SMB als lokales Laufwerk einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Remote-Dateisysteme einbinden und synchronisieren](https://rcloneview.com/support/blog/mount-sync-remote-file-systems-rcloneview)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
