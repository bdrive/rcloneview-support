---
slug: migrate-google-workspace-to-microsoft-365-rcloneview
title: "Google Workspace zu Microsoft 365 migrieren — Drive-Dateien mit RcloneView zu OneDrive und SharePoint übertragen"
authors:
  - tayson
description: "Wechsel von Google Workspace zu Microsoft 365? Erfahren Sie, wie Sie Google-Drive-Dateien ohne Datenverlust zu OneDrive und SharePoint migrieren – mit den visuellen Übertragungstools von RcloneView."
keywords:
  - google workspace to microsoft 365
  - migrate google drive to onedrive
  - google workspace migration
  - switch google to microsoft
  - google drive to sharepoint
  - workspace to office 365 migration
  - google to microsoft file transfer
  - enterprise cloud migration
  - google workspace exit
  - business cloud migration tool
tags:
  - RcloneView
  - google-drive
  - onedrive
  - sharepoint
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Workspace zu Microsoft 365 migrieren — Drive-Dateien mit RcloneView zu OneDrive und SharePoint übertragen

> Ihr Unternehmen wechselt das Ökosystem. Tausende Dateien in Google Drive müssen unversehrt, organisiert und geprüft in OneDrive und SharePoint landen. So gelingt es ohne Chaos.

Der Wechsel von Google Workspace zu Microsoft 365 gehört zu den häufigsten Migrationen in Unternehmen. Die Herausforderung liegt nicht in der Entscheidung, sondern in den Daten. Jahrelang angesammelte Dokumente, freigegebene Ordner und Team-Drives in Google Drive müssen sauber zu OneDrive-Personenspeicher und SharePoint-Team-Sites übertragen werden. RcloneView macht diese Migration visuell, überprüfbar und beherrschbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migrationsplanung

### Struktur zuerst abbilden

Bevor Sie etwas übertragen, planen Sie, wie sich die Struktur von Google Drive auf Microsoft 365 abbildet:

| Google Workspace | Microsoft 365 |
|-----------------|---------------|
| My Drive (persönlich) | OneDrive (persönlich) |
| Shared Drives | SharePoint-Dokumentbibliotheken |
| Für mich freigegeben | Freigegeben über OneDrive/SharePoint |

### Konten vorbereiten

Verbinden Sie sowohl das Google-Workspace- als auch das Microsoft-365-Konto in RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Connect both cloud accounts" class="img-large img-center" />

## Schritt-für-Schritt-Migration

### 1) Persönliche Dateien übertragen

Öffnen Sie Google Drive in einem Bereich und OneDrive im anderen. Wählen Sie Ordner aus und übertragen Sie sie:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to OneDrive transfer" class="img-large img-center" />

### 2) Shared Drives zu SharePoint migrieren

Ordnen Sie jedes Google Shared Drive der entsprechenden SharePoint-Dokumentbibliothek zu. Übertragen Sie jeweils eines nach dem anderen für eine saubere Organisation.

### 3) Jede Übertragung verifizieren

Das ist entscheidend. Nutzen Sie den Ordnervergleich, um zu bestätigen, dass alle Dateien korrekt übertragen wurden:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

### 4) Große Migrationen in Batches abwickeln

Für Organisationen mit Terabytes an Daten erstellen Sie separate Synchronisationsaufträge für jede Abteilung oder jedes Shared Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Batch migration jobs" class="img-large img-center" />

### 5) Übertragungen außerhalb der Spitzenzeiten planen

Große Migrationen können Tage dauern. Planen Sie Übertragungen für Nächte und Wochenenden, um die tägliche Arbeit nicht zu stören:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule off-peak migration" class="img-large img-center" />

## Checkliste nach der Migration

Prüfen Sie nach Abschluss der Übertragung mit dem Ordnervergleich und halten Sie Google Workspace für eine Übergangszeit weiter aktiv. Nutzer können während der Umstellung auf beide Plattformen zugreifen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Google Workspace** und **Microsoft 365** als Remotes hinzufügen.
3. **Ordnerstruktur abbilden** von Drive zu OneDrive/SharePoint.
4. **In Batches übertragen** mit Synchronisationsaufträgen.
5. **Alles verifizieren** mit dem Ordnervergleich.

Eine saubere Migration beginnt mit den richtigen Tools.

---

**Weitere Anleitungen:**

- [Google Drive zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [OneDrive zu Google Drive migrieren](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Cloud-Migration ohne Ausfallzeit](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)

<CloudSupportGrid />
