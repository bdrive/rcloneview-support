---
slug: cloud-storage-permissions-audit-rcloneview
title: "Prüfen Sie Ihren Cloud-Speicher — Finden Sie falsch abgelegte Dateien, falsche Berechtigungen und Datenwildwuchs mit RcloneView"
authors:
  - tayson
description: "Wann haben Sie zuletzt überprüft, was sich tatsächlich in Ihren Cloud-Konten befindet? Erfahren Sie, wie Sie Ihren Cloud-Speicher mit RcloneView auf falsch abgelegte Dateien, verwaiste Daten und Wildwuchs prüfen."
keywords:
  - Cloud-Speicher-Audit
  - Cloud-Berechtigungsprüfung
  - Cloud-Datenwildwuchs
  - falsch abgelegte Cloud-Dateien finden
  - Cloud-Speicher-Bereinigung
  - Cloud-Audit-Tool
  - Cloud-Dateiinventar
  - Data Governance Cloud
  - Cloud-Speicher-Überprüfung
  - Multi-Cloud-Audit
tags:
  - RcloneView
  - organization
  - best-practices
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Prüfen Sie Ihren Cloud-Speicher — Finden Sie falsch abgelegte Dateien, falsche Berechtigungen und Datenwildwuchs mit RcloneView

> Sie haben Dateien in Google Drive, OneDrive, Dropbox, S3 und dem Backblaze-Konto, das Sie vor zwei Jahren eingerichtet haben. Wissen Sie wirklich, was in jedem davon liegt? Ein Cloud-Speicher-Audit bringt Überraschungen ans Licht — und spart in der Regel Geld.

Cloud-Speicher wächst still und leise an. Kostenlose Tarife füllen sich, Testkonten geraten in Vergessenheit, freigegebene Ordner vermehren sich, und ehe man sich versieht, zahlt man für Speicherplatz bei fünf Anbietern, ohne zu wissen, was wo liegt. Ein regelmäßiges Audit — jedes Konto durchsuchen, Inhalte vergleichen, Duplikate bereinigen — hält Ihre Cloud organisiert und Ihre Kosten unter Kontrolle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Worauf Sie achten sollten

### Verwaiste Daten

Dateien, die bei einem Backup-Anbieter existieren, aber beim primären Anbieter gelöscht wurden. Sind das beabsichtigte Archive oder vergessene Überbleibsel?

### Doppelte Kopien

Dieselben Dateien, die unbeabsichtigt bei mehreren Anbietern gespeichert sind. Der Ordnervergleich deckt das auf:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

### Vergessene Konten

Das Wasabi-Testkonto mit 200 GB Testdaten? Das Dropbox-Konto vom vorherigen Job? Verbinden Sie alle mit RcloneView und sehen Sie, was dort liegt:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse all accounts" class="img-large img-center" />

### Veraltete Backups

Backup-Jobs, die seit Monaten nicht mehr laufen, ohne dass es jemandem aufgefallen ist. Prüfen Sie die Job-Historie auf Lücken:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup history" class="img-large img-center" />

### Unnötige Speicherkosten

Dateien auf teurem Hot-Storage (S3 Standard), die eigentlich auf Cold-Storage (Glacier) gehören. Große Dateien bei Premium-Anbietern, die zu günstigeren verschoben werden könnten.

## So führen Sie ein Audit durch

### Schritt 1: Alles verbinden

Fügen Sie jedes Cloud-Konto, das Sie besitzen, zu RcloneView hinzu. Jedes einzelne — auch die, die Sie vergessen haben.

### Schritt 2: Jedes Konto durchsuchen

Nutzen Sie den Zwei-Fenster-Explorer, um die Inhalte zu überprüfen. Notieren Sie, was sich in jedem Konto befindet und ob es dort noch benötigt wird.

### Schritt 3: Konten vergleichen

Verwenden Sie den Ordnervergleich zwischen Ihrem primären Speicher und jedem Backup-Speicherort. Identifizieren Sie Duplikate, fehlende Dateien und veraltete Daten.

### Schritt 4: Aufräumen

- Verschieben Sie falsch abgelegte Dateien an den richtigen Ort
- Löschen Sie echte Duplikate (nachdem Sie die primäre Kopie verifiziert haben)
- Archivieren Sie alte Daten auf Cold-Storage
- Kündigen Sie ungenutzte Konten

### Schritt 5: Dokumentieren und planen

Legen Sie eine vierteljährliche Erinnerung fest, um das Audit zu wiederholen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie alle Ihre Cloud-Konten hinzu** — jedes einzelne.
3. **Durchsuchen und vergleichen** Sie systematisch.
4. **Bereinigen Sie** Duplikate und veraltete Daten.
5. **Wiederholen Sie das Ganze vierteljährlich**.

Man kann nicht verwalten, was man nicht sieht.

---

**Weiterführende Anleitungen:**

- [Cloud-Wildwuchs verwalten](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [Doppelte Dateien finden und entfernen](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-storage-rcloneview)
- [Versteckte Cloud-Speicherkosten](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
