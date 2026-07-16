---
slug: sync-two-google-drive-accounts-rcloneview
title: "Zwei Google-Drive-Konten synchronisieren — Privates und berufliches Drive mit RcloneView synchronisieren"
authors:
  - tayson
description: "Viele Menschen haben mehrere Google-Drive-Konten — privat, beruflich, schulisch. Erfahren Sie, wie Sie Dateien zwischen ihnen synchronisieren, ohne etwas lokal herunterzuladen, mit RcloneView."
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - RcloneView
  - google-drive
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zwei Google-Drive-Konten synchronisieren — Privates und berufliches Drive mit RcloneView synchronisieren

> Ihr privates Google Drive enthält Familienfotos. Ihr berufliches Drive enthält Projektdateien. Ihr Universitäts-Drive läuft bald ab. Google lässt Sie nicht nativ zwischen Konten synchronisieren — aber RcloneView schon.

Fast jeder landet irgendwann bei mehreren Google-Drive-Konten. Ein privates Gmail-Konto, ein Workspace-Konto von der Arbeit, vielleicht ein Schulkonto, das bald abläuft. Google macht es einfach, jedes Konto einzeln zu nutzen, bietet aber keine Möglichkeit, Dateien zwischen ihnen zu synchronisieren oder zu übertragen. Am Ende laden Sie von einem Konto herunter und wieder in ein anderes hoch — manuell, langsam, und es belegt Ihren lokalen Speicher. RcloneView verbindet mehrere Google-Drive-Konten gleichzeitig und überträgt Dateien direkt zwischen ihnen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mehrere Google-Drive-Konten hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

Fügen Sie jedes Google-Drive-Konto als separaten Remote in RcloneView hinzu. Benennen Sie sie eindeutig — „GDrive-Privat", „GDrive-Arbeit", „GDrive-Schule" —, damit Sie sie auseinanderhalten können.

## Zwischen Konten übertragen

Öffnen Sie ein Konto im linken Bereich, ein anderes im rechten. Ziehen Sie Dateien und Ordner zwischen ihnen:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

Die Dateien werden direkt über die Server von Google übertragen — nichts wird auf Ihren Computer heruntergeladen, und die Übertragung ist schnell.

## Häufige Anwendungsfälle

### Dateien von einem ablaufenden Schulkonto sichern

Google-Workspace-Konten von Universitäten werden nach dem Abschluss oft gelöscht. Übertragen Sie alles auf Ihr privates Drive, bevor Sie den Zugriff verlieren.

### Private und berufliche Dateien trennen

Versehentlich private Dateien in Ihrem beruflichen Drive gespeichert? Verschieben Sie sie in Ihr privates Konto, ohne die IT-Abteilung einzubeziehen.

### Alte Konten konsolidieren

Führen Sie Dateien aus einem alten Gmail-Konto mit Ihrem aktuellen zusammen. RcloneView macht daraus einen einfachen Drag-and-Drop-Vorgang.

### Wichtige Ordner spiegeln

Halten Sie einen bestimmten Ordner zwischen beiden Konten synchron. Erstellen Sie einen Synchronisationsjob, der automatisch ausgeführt wird:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## Laufende Synchronisation planen

Für Ordner, die kontinuierlich zwischen Konten synchronisiert werden sollen, planen Sie eine automatische Synchronisation:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## Übertragungen überprüfen

Verwenden Sie den Ordnervergleich, um zu bestätigen, dass die Dateien korrekt zwischen den Konten übertragen wurden:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Fügen Sie beide Google-Drive-Konten** als separate Remotes hinzu.
3. **Öffnen Sie beide Konten** im Zwei-Bereich-Explorer.
4. **Übertragen Sie direkt** — kein lokaler Download nötig.

Ihre Google-Konten, endlich verbunden.

---

**Verwandte Anleitungen:**

- [Google Drive zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Google Drive mit Dropbox synchronisieren](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [Große Dateien zu Google Drive hochladen](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
