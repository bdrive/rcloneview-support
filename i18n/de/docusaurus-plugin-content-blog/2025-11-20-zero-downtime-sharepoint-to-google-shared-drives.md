---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "Ausfallfreie Migration von SharePoint zu Google Shared Drives mit RcloneView"
authors:
  - tayson
description: Verschieben Sie Microsoft 365 SharePoint Online-Bibliotheken in Google Shared Drives, ohne Nutzer zu unterbrechen – durch die Kombination aus RcloneViews Multi-Cloud-Explorer, Compare-Vorschauen, Sync-Jobs und geplanten Delta-Durchläufen.
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ausfallfreie Migration von SharePoint zu Google Shared Drives mit RcloneView

> Lassen Sie Designer-, Finanz- und Projektteams weiter in SharePoint arbeiten, während Sie Google Shared Drives im Hintergrund befüllen – und schalten Sie dann in einem einzigen Cutover-Fenster um.

SharePoint Online-Bibliotheken sind oft voll von berechtigungsintensiven Ordnern, Dokumentensätzen und regionalen Datenkontrollen. Gleichzeitig versprechen Google Workspace Shared Drives einfachere Zusammenarbeit und Speicherkontingente, aber native Migrationstools berücksichtigen selten Metadaten, Delta-Fenster oder Drosselung. RcloneView bettet die SharePoint- und Google Drive-Backends von rclone in eine GUI ein, sodass Sie Multi-Cloud-Migrationen mit gestaffelten Compare-Läufen, Sync- + Copy-Jobs, mount-basierter QA und geplanten Delta-Durchläufen planen können.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum einen ausfallfreien Cutover von SharePoint zu Google planen

- **Verteilte Teams können nicht pausieren** – Marketingmaterial, PMOs und Verträge benötigen kontinuierlichen Zugriff, während das neue Shared Drive befüllt wird.
- **Granulare Berechtigungen** – SharePoint-Bibliotheken vermischen mit Teams verbundene Ordner und eigenständige Dokumentencenter; Sie brauchen einen wiederholbaren Weg, diese innerhalb von Shared Drives mit klaren Audit-Protokollen neu aufzubauen.

Eine ausfallfreie Strategie bedeutet, mehrphasige Synchronisationen durchzuführen, während beide Plattformen online bleiben, und erst nach dem letzten Delta umzuschalten.

## Migrations-Blueprint: Multi-Cloud-Kontrollzentrum

1. **Beide Seiten verbinden** über den [Remote Manager](/howto/rcloneview-basic/remote-manager) sowie die Anbieteranleitungen für [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) und [Google Shared Drives](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive). RcloneView isoliert OAuth-Tokens pro Mandant und speichert sie mit entsprechendem Schutz.
2. **Explorer-Bereiche organisieren**, sodass jeder Bereich eine passende Bibliothek einem Shared Drive gegenüberstellt.
3. **Vorlagen für Jobs** stammen aus [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs) und [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages). Copy-Jobs befüllen das Ziel; Sync-Jobs übernehmen die einseitige Bereinigung; Compare-Läufe validieren.
4. **Mounts für QA** folgen [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) und ermöglichen Power-Usern, Inhalte vor dem Cutover im Finder oder Explorer zu prüfen.
5. **Scheduler + Monitoring** stützen sich auf [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution) und [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring), um Delta-Läufe planbar zu halten.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## Schritt 1 -- Connectoren & Metadaten härten

- Benennen Sie jeden Remote eindeutig (`sp-marketing`, `sp-pmo`, `gdrive-regional-apac`) und beschränken Sie den Root-Pfad auf die jeweilige Bibliothek. Das hält das Durchsuchen von Remotes schnell, siehe [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Schritt 2 -- Baseline mit Compare-Läufen

1. Öffnen Sie den zweigeteilten Explorer, richten Sie die linke Seite auf SharePoint, die rechte auf das leere Shared Drive.
2. Nutzen Sie [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents), um Größen-, Prüfsummen- und Zeitstempel-Deltas zu erkennen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

Baseline-Compare-Snapshots liefern Ihnen einen forensischen Nachweis des Ausgangszustands und helfen, veraltete Subsites zu identifizieren, die Sie eher archivieren als verschieben sollten.

## Schritt 3 -- Copy- + Sync-Jobs vorbereiten

- Erstellen Sie pro Geschäftsbereich einen **Copy**-Job, um das Shared Drive zu befüllen, ohne etwas in SharePoint zu löschen. Referenz: [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## Schritt 4 -- Delta-Fenster mit dem Scheduler automatisieren

Öffnen Sie den Scheduler, aktivieren Sie ihn global und weisen Sie dann pro Job einen Rhythmus zu:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## Schritt 5 -- Checkliste für den Cutover-Tag

1. **Schreibzugriff einfrieren** auf SharePoint (über Teams/Slack kommunizieren), aber die Site für Lesezugriffe online lassen.
2. Führen Sie den finalen Sync- + Compare-Job-Satz aus. Nutzen Sie den Compare-Diff, um zu bestätigen, dass sich seit dem letzten Delta nur eine Handvoll Dateien geändert haben.
3. Binden Sie das neue Shared Drive mit [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) ein und lassen Sie Fachverantwortliche komplexe Ordnerstrukturen stichprobenartig prüfen.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## QA und Mount-Betrieb nach der Migration

Der Mount Manager ermöglicht es Ingenieuren, dem Finanzteam oder Kreativverantwortlichen, die neuen Shared Drives (oder den bisherigen SharePoint-Remote) für Audits und Schulungen als schreibgeschützte Laufwerke zu öffnen. 

## Projekt-Zeitplan-Leitfaden

| Phase | RcloneView-Aktion | Ergebnis |
| --- | --- | --- |
| Woche 1 | Remotes verbinden, Baseline-Compare, Copy-Jobs erstellen | Inventar jeder Bibliothek + befüllte Shared Drives |
| Woche 2 | Nächtliches Scheduler-Delta + wöchentlicher Compare-Bericht | Kontinuierliche Aktualisierungen mit Drift-Transparenz |
| Woche 3 | Pilot-Mounts, Berechtigungsvalidierung, Nutzerschulung | Stakeholder prüfen Google Shared Drives gefahrlos |
| Cutover-Woche | SharePoint-Freeze, finaler Sync/Compare, Shared-Drive-Go-Live | Minuten an Ausfallzeit mit signierten Validierungsprotokollen |
| 2 Wochen danach | Geplanter Sync auf dem Legacy-Remote + optionales Archiv-Copy zu S3/Wasabi | Nachweis, dass keine Dateien vor der Stilllegung fehlten |


RcloneView macht aus Multi-Cloud-Migrationen einen planbaren Leitfaden: Remotes einrichten, Unterschiede vorab prüfen, Copy- + Sync-Jobs vorbereiten, Deltas automatisieren und für QA mounten. Ihre Teams bleiben in SharePoint produktiv, bis genau der Moment kommt, in dem Sie sie zu Google Shared Drives umleiten.

<CloudSupportGrid />
