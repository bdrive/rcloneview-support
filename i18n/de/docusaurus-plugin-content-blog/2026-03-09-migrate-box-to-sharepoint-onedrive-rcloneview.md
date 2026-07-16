---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "Migration von Box zu SharePoint oder OneDrive – Enterprise-Cloud-Migration mit RcloneView"
authors:
  - tayson
description: "Umstieg von Box auf Microsoft 365? Erfahren Sie, wie Sie Dateien von Box zu SharePoint Online oder OneDrive for Business migrieren und dabei die Ordnerstruktur mit RcloneView erhalten."
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migration von Box zu SharePoint oder OneDrive – Enterprise-Cloud-Migration mit RcloneView

> Ihr Unternehmen hat beschlossen, auf Microsoft 365 zu konsolidieren. Schritt eins: alle Dateien von Box zu SharePoint und OneDrive migrieren. Schritt zwei: dabei nichts verlieren.

Box war lange Zeit ein fester Bestandteil des Enterprise-Dateiaustauschs, doch viele Organisationen konsolidieren ihre Cloud-Ökosysteme zunehmend rund um Microsoft 365. Die Migration von Box zu SharePoint Online oder OneDrive for Business ist ein umfangreiches Projekt – besonders wenn es um jahrelang angesammelte Daten, komplexe Ordnerstrukturen und gemeinsam genutzte Arbeitsbereiche geht. RcloneView macht dieses Vorhaben handhabbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migrationsplanung

### Bestandsaufnahme Ihrer Box-Umgebung

Bevor Sie migrieren, sollten Sie den vorhandenen Bestand erfassen:

- **Persönliche Ordner** → Migration zu individuellen OneDrive-Konten.
- **Gemeinsame Ordner/Arbeitsbereiche** → Migration zu SharePoint-Dokumentbibliotheken.
- **Archivierte Daten** → Erwägen Sie den Umzug zu günstigerem Speicher (S3, B2) statt SharePoint.
- **Gesamtdatenvolumen** — Bestimmt Zeitplan und Vorgehensweise.

### Zielzuordnung

| Box-Quelle | Microsoft-365-Ziel |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Shared Folders | SharePoint Team Sites |
| Department Folders | SharePoint Document Libraries |
| Archive/Cold Data | OneDrive oder Azure Blob Storage |

## Schritt-für-Schritt-Migration

### 1) Box- und Microsoft-Remotes hinzufügen

Verbinden Sie beide Dienste in RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

Fügen Sie SharePoint als OneDrive-Business-Remote hinzu und geben Sie die SharePoint-Site-URL an.

### 2) Durchsuchen und vergleichen

Öffnen Sie Box links und SharePoint/OneDrive rechts:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) Übertragung in Phasen

Versuchen Sie nicht, alles auf einmal zu migrieren. Priorisieren Sie:

**Phase 1: Aktive Projekte** — Dateien, die täglich benötigt werden.
**Phase 2: Gemeinsame Arbeitsbereiche** — Team-Ordner und Kollaborationsbereiche.
**Phase 3: Archiv** — Alte Projekte und historische Daten.

### 4) Copy-Jobs ausführen

Erstellen Sie für jede Phase Copy-Jobs:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) Jede Phase überprüfen

Vergleichen Sie nach jeder Phase Quelle und Ziel:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## Umgang mit Einschränkungen

### Einschränkungen bei Dateinamen

SharePoint/OneDrive hat strengere Namensregeln als Box:

- Nicht erlaubte Zeichen: `" * : < > ? / \ |`
- Dateinamen dürfen nicht mit Leerzeichen beginnen oder enden.
- Maximale Pfadlänge: 400 Zeichen.

Rclone übernimmt viele dieser Umwandlungen automatisch während der Übertragung.

### Box Notes

Box Notes sind proprietär und haben in Microsoft 365 keine direkte Entsprechung. Sie müssen als PDF exportiert oder manuell nach OneNote/Word kopiert werden.

### Berechtigungen und Freigaben

RcloneView überträgt Dateien, aber keine Freigabeberechtigungen. Nach der Migration müssen Sie die Freigaben in SharePoint/OneDrive neu einrichten. Planen Sie dies als separaten Schritt.

### Rate-Limits

Sowohl Box als auch SharePoint haben API-Rate-Limits:

- **Box**: Variiert je nach Plan (typischerweise 10–20 Anfragen/Sekunde).
- **SharePoint**: Microsoft drosselt basierend auf dem Nutzungsverhalten.

RcloneView berücksichtigt diese Limits. Planen Sie bei großen Migrationen Übertragungen außerhalb der Geschäftszeiten und nutzen Sie die Retry-Funktion (v1.3).

## Box und SharePoint während der Übergangsphase synchron halten

Nicht alle wechseln am selben Tag. Planen Sie Synchronisationen, um beide Plattformen aktuell zu halten:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

So hat Ihr Team Zeit, schrittweise umzusteigen, ohne dass Datenlücken entstehen.

## Große Übertragungen überwachen

Enterprise-Migrationen umfassen Terabytes an Daten. Behalten Sie den Fortschritt im Blick:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## Batch-Jobs für den Migrationsworkflow

Nutzen Sie die v1.3-Batch-Jobs, um die gesamte Migrationssequenz zu automatisieren:

1. Kopieren Box → SharePoint (aktive Projekte).
2. Kopieren Box → OneDrive (persönliche Dateien).
3. Vergleich Box vs. SharePoint zur Überprüfung.
4. Slack-Benachrichtigung senden, sobald abgeschlossen.

## Nach der Migration

1. **Alle Dateien überprüfen** — Führen Sie einen finalen Ordnervergleich durch.
2. **SharePoint-Berechtigungen einrichten** — Freigabestrukturen wiederherstellen.
3. **Team schulen** — Helfen Sie Nutzern, ihre Dateien am neuen Ort zu finden.
4. **30 Tage überwachen** — Halten Sie Box als Fallback aktiv.
5. **Box stilllegen** — Kündigen Sie erst, nachdem alles als stabil bestätigt wurde.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Box und SharePoint/OneDrive hinzufügen** als Remotes.
3. **Migrationsphasen planen**.
4. **Copy-Jobs ausführen** für jede Phase.
5. **Mit Ordnervergleich überprüfen** nach jeder Phase.
6. **Synchronisationen planen** während der Übergangsphase.

Enterprise-Migration muss nicht Enterprise-Komplexität bedeuten.

---

**Weiterführende Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
