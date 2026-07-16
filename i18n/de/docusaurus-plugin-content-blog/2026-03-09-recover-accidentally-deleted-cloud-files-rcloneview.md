---
slug: recover-accidentally-deleted-cloud-files-rcloneview
title: "Versehentlich Cloud-Dateien gelöscht? So verhindern Sie Datenverlust mit RcloneView-Backups"
authors:
  - tayson
description: "Versehentlich Dateien aus Google Drive oder OneDrive gelöscht? Erfahren Sie, wie Sie mit RcloneView Cloud-zu-Cloud-Backups einrichten, damit Sie immer eine Wiederherstellungskopie haben."
keywords:
  - gelöschte Cloud-Dateien wiederherstellen
  - versehentlich Google Drive gelöscht
  - Cloud-Dateiwiederherstellung
  - Cloud-Datenverlust verhindern
  - gelöschte Dateien OneDrive Wiederherstellung
  - Cloud-Backup Löschung verhindern
  - gelöschte Cloud-Dateien wiederherstellen
  - Cloud-Datenverlustprävention
  - versehentliches Löschen Cloud-Speicher
  - Cloud-Datei-Backup-Strategie
tags:
  - RcloneView
  - data-recovery
  - backup
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Versehentlich Cloud-Dateien gelöscht? So verhindern Sie Datenverlust mit RcloneView-Backups

> Sie haben einen Ordner aus Google Drive gelöscht. Dann den Papierkorb geleert. Drei Tage später stellen Sie fest, dass diese Dateien wichtig waren. Der Papierkorb ist leer. Google kann nicht helfen. Was nun?

Versehentliches Löschen ist die häufigste Form von Cloud-Datenverlust. Der Papierkorb der Cloud-Dienste hilft, hat aber zeitliche Grenzen (Google Drive: 30 Tage, OneDrive: 93 Tage, Dropbox: 30–180 Tage). Sobald Dateien dieses Zeitfenster überschreiten – oder wenn Sie den Papierkorb leeren – sind sie unwiederbringlich verloren. Der einzig zuverlässige Schutz ist ein unabhängiges Backup.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie es zum Löschen kommt

### Häufige Szenarien

- **Manueller Fehler** — Falschen Ordner ausgewählt, Löschen gedrückt.
- **Fehlgeschlagene Synchronisation** — Ein Sync-Tool löscht Dateien auf einer Seite, wenn sie auf der anderen entfernt wurden.
- **Chaos bei geteilten Ordnern** — Ein Mitarbeiter löscht Dateien aus einem freigegebenen Ordner, was alle betrifft.
- **Ransomware** — Malware verschlüsselt oder löscht Dateien, und die Synchronisation verbreitet den Schaden.
- **Kompromittiertes Konto** — Jemand erlangt Zugriff und löscht oder ändert Dateien.
- **Fehler bei App-Integration** — Eine mit Ihrem Cloud-Speicher verbundene Drittanbieter-App entfernt unerwartet Dateien.

### Warum der Cloud-Papierkorb nicht ausreicht

| Anbieter | Aufbewahrung im Papierkorb | Danach |
|----------|:---:|------------|
| Google Drive | 30 Tage | Endgültig gelöscht |
| OneDrive | 93 Tage | Endgültig gelöscht |
| Dropbox | 30 Tage (Basic), 180 Tage (Pro) | Endgültig gelöscht |
| Box | 30 Tage | Endgültig gelöscht |
| S3 | Kein Papierkorb (Versionierung optional) | Sofort gelöscht |

Bemerken Sie die Löschung innerhalb des Aufbewahrungszeitraums, können Sie wiederherstellen. Andernfalls – oder wenn Sie den Papierkorb geleert haben – sind die Daten verloren, es sei denn, Sie haben ein Backup.

## Die Lösung: Cloud-zu-Cloud-Backup

Richten Sie ein unabhängiges Backup bei einem separaten Cloud-Anbieter ein. Werden Dateien aus Ihrer primären Cloud gelöscht, bleibt das Backup unberührt.

### Empfohlene Architektur

```
Primary: Google Drive (daily use)
Backup: Backblaze B2 (independent copy)
```

Das Schlüsselwort ist **unabhängig** — das Backup sollte kein Sync-Spiegel sein. Verwenden Sie Sync (das Dateien am Ziel löscht, wenn sie an der Quelle gelöscht wurden), pflanzen sich Löschungen bis zu Ihrem Backup fort. Verwenden Sie stattdessen **Copy** für Backups.

## Copy vs. Sync für Backups

| Vorgang | Fügt neue Dateien hinzu | Aktualisiert geänderte Dateien | Löscht fehlende Dateien |
|-----------|:-:|:-:|:-:|
| **Copy** | ✅ | ✅ | ❌ |
| **Sync** | ✅ | ✅ | ✅ |

**Copy** löscht niemals Dateien am Ziel. Selbst wenn Sie eine Datei aus Google Drive löschen, bleibt Ihre Backblaze-B2-Kopie intakt.

**Sync** spiegelt die Quelle exakt — einschließlich Löschungen. Verwenden Sie Sync nur, wenn Sie ausdrücklich möchten, dass das Ziel der Quelle entspricht.

## Backup mit RcloneView einrichten

### 1) Fügen Sie Ihre primäre und Backup-Cloud hinzu

<img src="/support/images/en/blog/new-remote.png" alt="Add primary and backup cloud remotes" class="img-large img-center" />

### 2) Erstellen Sie einen Copy-Job (nicht Sync)

Kopieren Sie von Ihrer primären Cloud zu Ihrer Backup-Cloud:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create Copy backup job" class="img-large img-center" />

### 3) Tägliche Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule daily cloud backup" class="img-large img-center" />

### 4) Mit Ordnervergleich überprüfen

Prüfen Sie regelmäßig, ob Ihr Backup vollständig ist:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup completeness" class="img-large img-center" />

## Erweiterter Schutz: Versionierte Backups

Für noch mehr Schutz verwenden Sie Cloud-Anbieter, die Versionierung unterstützen:

- **AWS S3** — Aktivieren Sie die Versionierung für Ihren Bucket. Jedes Überschreiben erstellt eine neue Version.
- **Backblaze B2** — Unterstützt standardmäßig Dateiversionierung.
- **Wasabi** — Objektversionierung verfügbar.

Mit Versionierung können Sie selbst dann zu einer früheren Version zurückkehren, wenn ein Backup-Copy-Job eine Datei mit einer beschädigten Version überschreibt.

## Verschlüsselte Backups

Verwenden Sie den crypt-Remote von rclone, um Ihre Backups zu verschlüsseln. Dies schützt vor:

- Kompromittierung des Backup-Kontos.
- Unbefugtem Zugriff auf Backup-Daten.
- Insider-Bedrohungen beim Backup-Anbieter.

## Wiederherstellen aus dem Backup

Wenn Sie Dateien wiederherstellen müssen:

1. Öffnen Sie Ihre Backup-Cloud in RcloneView.
2. Navigieren Sie zu den gelöschten Dateien.
3. Erstellen Sie einen Copy-Job vom Backup → Primary.
4. Führen Sie den Job aus, um die Dateien wiederherzustellen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Restore files from backup" class="img-large img-center" />

## Backup-Checkliste

- **Copy statt Sync verwenden** — Schützen Sie Backups vor der Fortpflanzung von Löschungen.
- **Bei einem anderen Anbieter sichern** — Sichern Sie Google Drive nicht in einem anderen Google-Drive-Ordner.
- **Täglich planen** — Minimieren Sie den Abstand zwischen Löschung und letztem Backup.
- **Regelmäßig überprüfen** — Backups sind nutzlos, wenn sie unvollständig oder beschädigt sind.
- **Versionierung aktivieren** — Beim Backup-Speicher für zusätzlichen Schutz.
- **Wiederherstellung testen** — Üben Sie die Wiederherstellung, bevor Sie sie im Ernstfall benötigen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie Ihre primäre und Backup-Cloud hinzu**.
3. **Erstellen Sie einen Copy-Job** (nicht Sync) von primär zu Backup.
4. **Planen Sie tägliche Backups**.
5. **Überprüfen Sie regelmäßig** mit dem Ordnervergleich.

Der beste Zeitpunkt, um Backups einzurichten, ist, bevor Sie sie brauchen.

---

**Weiterführende Anleitungen:**

- [Warum Cloud-zu-Cloud-Backup wichtig ist](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
