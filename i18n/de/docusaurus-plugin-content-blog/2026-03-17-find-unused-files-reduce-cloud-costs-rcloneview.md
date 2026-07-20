---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "Ungenutzte Dateien finden, die Cloud-Speicher verschwenden — Kosten senken mit einem Speicher-Audit in RcloneView"
authors:
  - tayson
description: "Cloud-Rechnungen steigen immer weiter, weil niemand alte Dateien löscht. Erfahren Sie, wie Sie vergessene Daten, veraltete Backups und unnötige Duplikate in all Ihren Cloud-Konten mit RcloneView finden."
keywords:
  - Cloud-Speicherkosten senken
  - ungenutzte Cloud-Dateien finden
  - Cloud-Speicher aufräumen
  - Cloud-Kostenoptimierung
  - Cloud-Speicherverschwendung
  - Cloud-Rechnung senken
  - Cloud-Datei-Audit
  - Speicherkosten sparen
  - Cloud-Aufräum-Tool
  - unnötige Cloud-Dateien
tags:
  - RcloneView
  - cost-optimization
  - tips
  - cloud-storage
  - organization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ungenutzte Dateien finden, die Cloud-Speicher verschwenden — Kosten senken mit einem Speicher-Audit in RcloneView

> Sie zahlen für 5 TB bei drei Cloud-Anbietern. Wie viel davon wird tatsächlich benötigt? Bei den meisten Nutzern werden 30-50 % des Cloud-Speichers von Dateien belegt, auf die nie wieder zugegriffen wird.

Cloud-Speicherrechnungen wachsen allmählich. Ein paar zusätzliche Gigabyte hier, ein vergessenes Backup dort, und plötzlich zahlen Sie jährlich Hunderte für Daten, die niemand nutzt. Das Problem ist nicht der Preis pro Gigabyte — es ist die unsichtbare Anhäufung. RcloneView hilft Ihnen, genau zu sehen, was sich in jedem Konto befindet, und fundierte Entscheidungen darüber zu treffen, was bleibt und was gelöscht wird.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Ursachen für Verschwendung

### Alte Backup-Kopien

Backup-Jobs erstellen Kopien. Wenn Sie im Laufe der Jahre die Backup-Ziele geändert haben, liegen alte Kopien beim vorherigen Anbieter und belegen weiterhin bezahlten Speicher.

### Duplikate über mehrere Anbieter hinweg

Dieselben Dateien liegen auf Google Drive, OneDrive UND Dropbox — weil Sie „nur für den Fall der Fälle“ überall synchronisiert haben.

### Veraltete Projektdateien

Projekte aus vor 2 Jahren liegen noch auf S3 Standard zu 23 $/TB, obwohl sie auf Glacier für 1 $/TB liegen könnten.

### Test- und temporäre Daten

Test-Uploads, Testordner, zwischengespeicherte Daten, `.DS_Store`-Dateien, `Thumbs.db` — sie summieren sich über Tausende von Ordnern.

## So finden Sie die Verschwendung

### Jedes Konto durchsuchen

Verbinden Sie alle Ihre Cloud-Konten und durchsuchen Sie sie systematisch:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### Konten auf Duplikate vergleichen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

Der Ordnervergleich zwischen zwei Anbietern hebt identische Dateien hervor — potenzielle Duplikate, für die Sie doppelt bezahlen.

### Aktualität der Backups prüfen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

Der Job-Verlauf zeigt, wann Backups zuletzt ausgeführt wurden. Wenn ein Backup seit 6 Monaten nicht mehr gelaufen ist — wird es überhaupt noch benötigt?

## Aktionsplan

| Befund | Aktion | Einsparung |
|---------|--------|---------|
| Alte Backups auf teurem Speicher | Löschen oder zu Glacier verschieben | 5-20 $/TB/Monat |
| Duplikate über mehrere Anbieter | Eine Kopie behalten, andere löschen | 5-10 $/TB/Monat |
| Veraltete Projekte auf Hot-Speicher | In Cold-Speicher archivieren | 15-20 $/TB/Monat |
| Temporäre Dateien und Datenmüll | Löschen | Variabel |
| Ungenutzte Anbieterkonten | Kündigen | Abo-Kosten |

## Vor dem Löschen archivieren

Löschen Sie nicht zu aggressiv. Verschieben Sie alte Dateien zuerst in Cold-Speicher — er ist günstig genug, um Dateien „nur für den Fall der Fälle“ zu behalten, kostet aber 90 % weniger als Hot-Speicher.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Alle Cloud-Konten verbinden**.
3. **Systematisch durchsuchen und vergleichen**.
4. **Ungenutzte Daten archivieren** in Cold-Speicher.
5. **Echte Verschwendung löschen** nach dem Archivieren.

Der günstigste Speicher ist der Speicher, den Sie nicht brauchen.

---

**Verwandte Anleitungen:**

- [Leitfaden für Cloud-Speicher-Audits](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [Versteckte Cloud-Speicherkosten](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Archivierung zu S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
