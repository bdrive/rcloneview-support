---
slug: sync-dropbox-to-box-rcloneview
title: "Dropbox mit Box synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - casey
description: "Dropbox mit RcloneView zu Box synchronisieren: beide OAuth-Remotes verbinden, per Dry Run in der Vorschau ansehen, Jobs planen und Ergebnisse mit Folder Compare überprüfen."
keywords:
  - Dropbox mit Box synchronisieren
  - Dropbox-zu-Box-Backup
  - Dropbox Box Synchronisation
  - Cloud-zu-Cloud-Synchronisation
  - RcloneView
  - Dropbox-Backup
  - Box Cloud-Speicher
  - Multi-Cloud-Backup
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox mit Box synchronisieren — Cloud-Backup mit RcloneView

> Halten Sie eine zweite Kopie Ihrer Dropbox-Dateien in Box, verwaltet in einem einzigen Desktop-Fenster.

Teams arbeiten oft in Dropbox, während Kunden oder Partner auf Box bestehen. Beide von Hand abzugleichen bedeutet ständiges Herunter- und Hochladen. RcloneView verbindet die beiden Konten als Remotes und synchronisiert Ordner direkt zwischen ihnen, mit Vorschau und Verlauf, damit Sie immer wissen, was sich geändert hat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox und Box als Remotes hinzufügen

Beide Anbieter verwenden die OAuth-Anmeldung im Browser, daher sind keine API-Schlüssel nötig. Klicken Sie auf New Remote, wählen Sie Dropbox und genehmigen Sie den Zugriff im Browser; wiederholen Sie dies für Box. Bei Business-Konten verwenden Sie die Einstellung Dropbox for Business (`dropbox_business = true`) oder die Einstellung Box for Business (`box_sub_type = enterprise`); wählen Sie diese Varianten also bei Bedarf.

<img src="/support/images/en/blog/new-remote.png" alt="Dropbox- und Box-Remotes in RcloneView erstellen" class="img-large img-center" />

## Einen Einweg-Sync-Job konfigurieren

Öffnen Sie den Sync-Assistenten, wählen Sie den Dropbox-Ordner als Quelle und den Box-Ordner als Ziel und benennen Sie den Job mit Buchstaben, Ziffern, Bindestrichen oder Unterstrichen. Der Einweg-Modus ändert nur das Ziel, was zu einer Backup-Rolle passt. Da die Synchronisation das Ziel an die Quelle angleicht, führen Sie immer zuerst einen Dry Run aus, um zu sehen, welche Dateien kopiert oder gelöscht würden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Sync-Jobs von Dropbox zu Box" class="img-large img-center" />

Stellen Sie sich eine Designagentur mit 150 GB Kundenlieferungen vor. Ein Filter nach Dateigröße oder Alter hält große Arbeitsdateien aus der Box-Kopie heraus, während vordefinierte Filter Kategorien wie Video überspringen können.

## Planen und überwachen

Mit einer PLUS-Lizenz akzeptiert Schritt 4 des Assistenten Zeitpläne im Crontab-Stil, und die Simulationsoption zeigt die nächsten Ausführungszeiten in der Vorschau. Ein nächtlicher Lauf hält Box ohne manuellen Aufwand aktuell. Der Tab Transferring zeigt Live-Geschwindigkeit und Fortschritt, und der Job History erfasst Status, Dauer, Größe und Dateien jeder Ausführung.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einen Sync-Job von Dropbox zu Box planen" class="img-large img-center" />

## Mit Folder Compare überprüfen

Öffnen Sie nach einem Lauf Folder Compare für die beiden Ordner. Nur links vorhandene und unterschiedliche Dateien werden aufgelistet, und fehlende Elemente können Sie aus der Vergleichsansicht kopieren. Der Job History hilft, fehlerhafte Läufe zu erkennen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf der Synchronisation von Dropbox zu Box" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** [rcloneview.com](https://rcloneview.com/src/download.html) von dieser Seite.
2. Fügen Sie Dropbox- und Box-Remotes per OAuth-Anmeldung hinzu.
3. Erstellen Sie einen Einweg-Sync-Job und führen Sie einen Dry Run aus.
4. Führen Sie ihn aus und planen Sie ihn anschließend, falls Sie eine PLUS-Lizenz haben.

Eine zweite Kopie bei einem anderen Anbieter macht aus einem Single Point of Failure ein Sicherheitsnetz.

---

**Verwandte Anleitungen:**

- [Ausfallfrei von Box zu Dropbox](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Box mit Google Drive synchronisieren](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Dropbox-Speicher verwalten](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
