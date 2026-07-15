---
slug: declutter-cloud-photo-library-rcloneview
title: "Cloud-Fotobibliotheken mit RcloneView aufräumen: Vergleichen, bereinigen und jedes Foto schützen"
authors:
  - tayson
description: "Verstreute Foto- und Videoordner über Google Drive, Dropbox, NAS und S3 hinweg vereinheitlichen; Duplikate vergleichen, bereinigen und geschützte Backups mit RcloneView planen."
keywords:
  - rcloneview
  - photo backup
  - cloud photo dedup
  - compare cloud storage
  - multi cloud
  - google drive
  - dropbox
  - s3
  - nas backup
  - checksum
tags:
  - RcloneView
  - cloud-storage
  - backup
  - sync
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Fotobibliotheken mit RcloneView aufräumen: Vergleichen, bereinigen und jedes Foto schützen

> Es reicht mit denselben RAWs und JPEGs verstreut über Google Drive, Dropbox und ein NAS? Mit RcloneView siehst du, was doppelt vorhanden ist, kannst es bereinigen und geschützte Backups einrichten -- alles ohne CLI-Flags zu bemühen.

Wenn deine Foto- und Videohistorie an drei oder mehr Orten liegt, sind Abweichungen unvermeidlich: Duplikate, fehlende Bearbeitungen und Ordner, an die sich niemand mehr erinnert. RcloneView verpackt die Leistungsfähigkeit von rclone in einen visuellen Arbeitsbereich, sodass du Quellen vergleichen, Clouds wie lokale Laufwerke einbinden (mount) und wiederholbare Synchronisationsjobs ausführen kannst, die eine einzige, geschützte Master-Bibliothek pflegen.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum eine einheitliche Bibliothek wichtig ist

- Höre auf, für dasselbe Album doppelt bei verschiedenen Anbietern zu bezahlen.
- Behalte eine einzige verbindliche Quelle für Lightroom, Capture One oder Photos.
- Belege die Integrität deiner Backups mit protokollierten, prüfsummenverifizierten Durchläufen statt Rätselraten.

## Clouds verbinden und einen sauberen Arbeitsbereich einbinden

- Füge jeden Speicherort einmal hinzu: Google Drive, Dropbox, OneDrive, S3/Wasabi/R2 oder NAS über `+ New Remote`. Anleitungen: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login) und [/support/howto/remote-storage-connection-settings/s3](/howto/remote-storage-connection-settings/s3). 

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Binde die wichtigsten Quellen ein (mount), damit sie sich für deine Tools wie lokale Laufwerke anfühlen: [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Verwende konsistente Pfade (z. B. `/Volumes/Photos` oder `X:\Photos`), damit Editoren und Automatisierungen beim Wechsel des Rechners nicht brechen.  

 <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />. 


## Duplikate und Abweichungen mit Compare aufspüren

- Führe **Compare** zwischen zwei beliebigen Speicherorten aus (z. B. Dropbox vs. NAS), um neuere, fehlende oder abweichende Dateien vor der Synchronisation zu erkennen: [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- Filtere nach Dateierweiterungen, um beim Überprüfen von Unterschieden gezielt RAWs, JPEGs oder Sidecar-Dateien zu isolieren.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 

## Eine geschützte Master-Bibliothek mit Sync-Jobs aufbauen

- Wähle deine verbindliche Quelle (oft das NAS oder der vollständigste Cloud-Ordner) und richte eine Einweg-Synchronisation zu deinem Backup-Ziel ein (z. B. S3/Wasabi mit Lifecycle-Richtlinien). Anleitung: [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs) und [Jobs ausführen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job).
- Verwende Job-Vorlagen für Alben oder Jahre (z. B. `2020/`, `2021/`), um Durchläufe klein und vorhersehbar zu halten.
- Bevorzuge **copy** aus Sicherheitsgründen beim Konsolidieren; wechsle erst zu **sync**, wenn du dem Ziel vertraust und eine Historie sauberer Durchläufe hast.
- Führe zuerst einen Trockenlauf (Dry-Run) mit den eingebetteten rclone-Flags aus, um Includes und Excludes zu prüfen.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 


## Planen, überwachen und verifizieren

- Aktiviere die Zeitplanung, damit deine Master-Bibliothek nachts aktualisiert wird, statt nur dann, wenn sich jemand daran erinnert: [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution). 

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 

- Nutze die Job-History-Protokolle als Audit-Trail; schlägt ein Durchlauf fehl, starte ihn ohne erneute Konfiguration einfach neu aus demselben Job.  



## Editoren und Familie schnell bedienen

- Halte eine schnelle Kopie aktueller Projekte lokal eingebunden, während kältere Archive in S3/Wasabi verbleiben.
- Erstelle einen zweiten Job, um leichte JPEG-Exporte in eine Sharing-Cloud (Drive oder Dropbox) zu übertragen, während die RAWs in deinem Master-Tresor bleiben.
- Bei Reisefotos: Binde die Cloud auf einem Laptop ein und lass den Scheduler beim erneuten Verbinden die Nachträge auf das NAS übertragen.

Bereit, das Durcheinander zu beseitigen und nicht mehr für doppelte Pixel zu bezahlen? Binde ein, vergleiche und plane deinen Weg zu einer einzigen, geschützten Bibliothek mit RcloneView.

<CloudSupportGrid />
