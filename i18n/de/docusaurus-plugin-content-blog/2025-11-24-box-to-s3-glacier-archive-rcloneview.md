---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box zu S3 + Glacier: Gestufte Archive mit RcloneView"
authors:
  - tayson
description: "Migrieren Sie Box-Bibliotheken in Amazon S3 Hot Storage und Glacier Deep Archive für die Langzeitaufbewahrung, mit Compare, Prüfsummenverifizierung und geplanten Synchronisationen in RcloneView."
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu S3 + Glacier: Gestufte Archive mit RcloneView

> Verschieben Sie Box-Bibliotheken für den aktiven Zugriff nach Amazon S3 und für die Langzeitaufbewahrung nach Glacier – mit visuellen Vergleichen, prüfsummenverifizierten Synchronisationen und geplanten Jobs, ganz ohne CLI-Flags.

Box eignet sich hervorragend für die Zusammenarbeit, aber die Langzeitaufbewahrung und große Medienbibliotheken können teuer werden. Mit RcloneView spiegeln Sie Box-Ordner für den Hot-Zugriff in S3-Buckets und verschieben veraltete Daten anschließend nach einem Zeitplan in Glacier-Klassen. Sie erhalten Vergleiche nebeneinander, protokollierte Jobs und automatische Wiederholungsversuche, ohne Skripte manuell überwachen zu müssen.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Was wir lösen

- Reduzieren Sie die Box-Speicherkosten, indem Sie kalte Daten in Glacier verschieben.
- Behalten Sie eine stets verfügbare S3-Kopie für aktive Teams, während Glacier den Verlauf aufbewahrt.
- Bewahren Sie die Integrität durch prüfsummenverifizierte Jobs und einen Audit-Trail.

## Box- und S3-Remotes schnell verbinden

- Fügen Sie Box- und S3-Remotes über `+ New Remote` hinzu. OAuth- und Schlüsseleinrichtung: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login), [s3](/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Nutzen Sie den **Remote Explorer**, um Ordnertiefe und Benennung vor der ersten Synchronisation zu überprüfen.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- Optional: Binden Sie eines der Remotes lokal ein, um schnelle Stichprobenprüfungen durchzuführen: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Vergleichen, bevor Sie verschieben

- Führen Sie **Compare** zwischen Box und dem Ziel-S3-Präfix aus, um fehlende oder neuere Dateien zu erkennen, bevor Sie sich festlegen: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filtern Sie nach Dateierweiterungen (z. B. PDFs, CAD, Medien), um die Überprüfung einzugrenzen.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## Eine zweistufige Pipeline aufbauen (S3 Hot, Glacier Cold)

- Schritt 1: Erstellen Sie einen **Copy**-Job von Box nach S3 für die aktive Stufe: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs). Beginnen Sie aus Sicherheitsgründen mit Copy; wechseln Sie erst nach der Validierung der Ergebnisse zu Sync.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- Schritt 2: Wenden Sie S3-Lifecycle-Richtlinien auf den Bucket an, um Objekte nach N Tagen in Glacier-Klassen zu überführen. Behalten Sie den RcloneView-Job für das Hot-Präfix bei (z. B. `s3:box-archive/hot/`).
- Schritt 3: Für Tiefarchive planen Sie einen zweiten Job, der selten genutzte Ordner direkt in ein Glacier-fokussiertes Präfix verschiebt (z. B. `s3:box-archive/cold/`).  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView bietet Ihnen eine visuelle, wiederholbare Möglichkeit, Box zu verlassen, Speicherkosten zu senken und konforme Archive in AWS zu führen. Erst vergleichen, dann sicher kopieren, den Rest planen – und beruhigt schlafen.


<CloudSupportGrid />
