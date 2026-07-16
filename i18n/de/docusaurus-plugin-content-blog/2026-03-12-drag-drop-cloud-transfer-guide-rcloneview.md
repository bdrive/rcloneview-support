---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "Drag & Drop zwischen Clouds — Die schnellste Art, Dateien mit RcloneView zu übertragen"
authors:
  - tayson
description: "Übertragen Sie Dateien zwischen Google Drive, OneDrive, S3 und über 70 Clouds per Drag & Drop im Zwei-Fenster-Explorer von RcloneView. Keine Befehle, keine Skripte."
keywords:
  - drag drop cloud transfer
  - drag and drop cloud files
  - easy cloud file transfer
  - visual cloud transfer
  - cloud file manager drag drop
  - transfer files between clouds
  - simple cloud migration
  - no code cloud transfer
  - cloud explorer drag drop
  - easy multi cloud transfer
tags:
  - drag-and-drop
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Drag & Drop zwischen Clouds — Die schnellste Art, Dateien mit RcloneView zu übertragen

> Wählen Sie Dateien auf Google Drive aus. Ziehen Sie sie in Ihren S3-Bucket. Fertig. Keine Kommandozeile, keine Skripte, kein fünfstufiger Upload-Prozess. Einfach per Drag & Drop zwischen zwei beliebigen Clouds.

Die Übertragung von Cloud-Dateien sollte kein Informatikstudium erfordern. Der Zwei-Fenster-Explorer von RcloneView zeigt zwei beliebige Cloud-Speicherorte nebeneinander an — Google Drive und S3, OneDrive und Dropbox, NAS und Backblaze B2 — und ermöglicht die Dateiübertragung durch einfaches Ziehen von einer Seite zur anderen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie es funktioniert

### Der Zwei-Fenster-Explorer

RcloneView zeigt zwei Speicherorte nebeneinander an — wie ein Dual-Pane-Dateimanager:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **Linkes Fenster**: Eine beliebige Cloud, NAS oder lokales Laufwerk.
- **Rechtes Fenster**: Eine weitere Cloud, NAS oder lokales Laufwerk.

### Übertragen per Drag & Drop

1. Navigieren Sie auf einer Seite zum Quellordner.
2. Navigieren Sie auf der anderen Seite zum Zielordner.
3. Wählen Sie Dateien oder Ordner aus.
4. Ziehen Sie sie von einer Seite zur anderen.
5. Die Übertragung beginnt.

### Fortschritt in Echtzeit überwachen

Verfolgen Sie den Übertragungsfortschritt, während die Dateien verschoben werden:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## Zwischen welchen Diensten Sie ziehen können

Jede Kombination funktioniert:

| Von | Nach | Beispiel |
|------|-----|---------|
| Google Drive | AWS S3 | Dokumente auf S3 sichern |
| OneDrive | Dropbox | Mit einem Dropbox-Kunden teilen |
| Lokales Laufwerk | Backblaze B2 | Lokales Backup in die Cloud hochladen |
| NAS | Google Drive | NAS-Dateien remote zugänglich machen |
| S3 | Azure Blob | Cloud-übergreifende Migration |
| Dropbox | NAS | Cloud-Dateien auf lokalen Speicher herunterladen |

## Mehr als einfaches Drag & Drop

### Für wiederkehrende Übertragungen → Einen Job erstellen

Wenn Sie regelmäßig dieselben Dateien ziehen, speichern Sie diese als benannten Job. Planen Sie ihn anschließend so, dass er automatisch ausgeführt wird:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### Zur Überprüfung → Ordnervergleich verwenden

Vergleichen Sie nach der Übertragung beide Seiten, um sicherzustellen, dass alles angekommen ist:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### Bei großen Übertragungen → Fortschritt überwachen

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## Tipps

- **Ordner ziehen**, um ganze Verzeichnisbäume zu übertragen.
- **Mehrere Dateien auswählen**, bevor Sie sie für Stapelübertragungen ziehen.
- **Rechtsklick** für zusätzliche Optionen (kopieren, verschieben, synchronisieren).
- **Adressleiste verwenden**, um schnell zu bestimmten Pfaden zu navigieren.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ihre Cloud-Konten hinzufügen** — beliebige zwei (oder mehr) Anbieter.
3. **Nebeneinander öffnen** im Zwei-Fenster-Explorer.
4. **Per Drag & Drop** übertragen.

Cloud-Übertragungen, ganz einfach.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Cloud-Speicher einbinden](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
