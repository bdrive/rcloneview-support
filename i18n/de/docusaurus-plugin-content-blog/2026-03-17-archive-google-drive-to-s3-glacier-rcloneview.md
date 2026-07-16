---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Google Drive-Dateien in S3 Glacier archivieren — Langzeitspeicherung zu 90% geringeren Kosten mit RcloneView"
authors:
  - tayson
description: "Google Drive-Speicher ist für Archivdaten teuer. Verschieben Sie alte Dateien zu S3 Glacier für wenige Cent pro GB und behalten Sie dabei die Wiederherstellbarkeit. RcloneView automatisiert den gesamten Prozess."
keywords:
  - google drive zu glacier
  - google drive archiv
  - s3 glacier archiv
  - günstiges cloud-archiv
  - google drive cold storage
  - alte cloud-dateien archivieren
  - google drive zu s3
  - google drive kosten senken
  - langzeit cloud-speicher
  - cloud-archivstrategie
tags:
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive-Dateien in S3 Glacier archivieren — Langzeitspeicherung zu 90% geringeren Kosten mit RcloneView

> Sie zahlen 10 $/Monat für 2 TB Google Drive, aber 80% dieser Dateien wurden seit einem Jahr nicht mehr geöffnet. Verschieben Sie sie zu S3 Glacier für 1 $/TB/Monat und senken Sie Ihre Speicherkosten drastisch.

Die Google Drive-Preisgestaltung ist auf aktive Dateien ausgelegt — Dokumente, die Sie täglich öffnen, Dateien, die Sie mit Kollegen teilen. Aber in den meisten Google Drive-Konten sammeln sich über Jahre Dateien an, auf die nie zugegriffen wird: alte Projektordner, abgeschlossene Arbeiten, archivierte Fotos, veraltete Dokumente. Diese Dateien liegen auf teurem Speicher, obwohl sie zu einem Bruchteil der Kosten auf S3 Glacier liegen könnten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kostenvergleich

| Speicher | Preis pro TB/Monat |
|---------|-------------------|
| Google Drive (One) | ~5 $ |
| Google Workspace Business | ~6 $ |
| S3 Standard | ~23 $ |
| S3 Glacier Instant Retrieval | ~4 $ |
| S3 Glacier Flexible Retrieval | ~3,6 $ |
| S3 Glacier Deep Archive | ~1 $ |

Das Verschieben von 1 TB inaktiver Dateien von Google Drive zu Glacier Deep Archive spart ~48 $/Jahr.

## Was archiviert werden sollte

Gute Kandidaten für Glacier:

- Abgeschlossene Projektordner (älter als 6 Monate)
- Steuerunterlagen und Finanzunterlagen (nach der Einreichung)
- Alte Foto-/Video-Backups
- Daten ehemaliger Mitarbeiter
- Archivierte Teamdateien

Schlechte Kandidaten (auf Google Drive belassen):

- Aktive Dokumente und Tabellen
- Gemeinsam genutzte Kollaborationsdateien
- Dateien, die wöchentlich oder monatlich geöffnet werden

## Archivierungsprozess

### 1) Archivkandidaten identifizieren

Durchsuchen Sie Ihr Google Drive im Explorer und identifizieren Sie Ordner, auf die in letzter Zeit nicht zugegriffen wurde:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) Übertragung zu S3 Glacier

Erstellen Sie einen Kopierjob von Google Drive zu Ihrem S3-Bucket, der mit einer Glacier-Speicherklasse konfiguriert ist:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) Archiv überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Aus Google Drive löschen

Erst nach der Überprüfung. Dies gibt Ihr Google Drive-Speicherkontingent frei.

### 5) Regelmäßige Archivierung planen

Richten Sie monatliche Archivierungsläufe für neue Kandidaten ein:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## Wichtige Hinweise

- **Glacier-Abruf kostet Geld und Zeit** — Glacier Instant Retrieval bietet schnellen Zugriff; Deep Archive kann 12+ Stunden dauern
- **Mindestspeicherdauer** — Glacier berechnet Gebühren für vorzeitiges Löschen (90–180 Tage, je nach Klasse)
- **Vor dem Löschen überprüfen** — bestätigen Sie immer, dass das Archiv vollständig ist, bevor Sie es aus Drive entfernen

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Google Drive** und **S3** Remotes hinzufügen.
3. **Inaktive Dateien** auf Google Drive identifizieren.
4. **Zu Glacier kopieren**, überprüfen, dann Drive bereinigen.

Aktive Dateien auf Drive. Alles andere auf Glacier.

---

**Verwandte Anleitungen:**

- [Versteckte Cloud-Speicherkosten](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Cold Archive mit Glacier](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
