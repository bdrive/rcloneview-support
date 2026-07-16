---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Dropbox mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Nutzen Sie RcloneView, um Dropbox-Dateien mit der Hetzner Storage Box zu synchronisieren und zu sichern. Eine Schritt-für-Schritt-Anleitung zum Migrieren oder Pflegen einer Backup-Kopie von Dropbox zu Hetzner."
keywords:
  - Dropbox mit Hetzner Storage Box synchronisieren
  - Dropbox Hetzner Backup
  - Dropbox zu Hetzner migrieren
  - Hetzner Storage Box Cloud-Backup
  - rclone Dropbox Hetzner
  - Dropbox zu SFTP Backup
  - Europäisches Cloud-Backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox mit Hetzner Storage Box synchronisieren — Cloud-Backup mit RcloneView

> RcloneView synchronisiert Dropbox mit der Hetzner Storage Box über SFTP — und bietet europäischen Nutzern damit ein DSGVO-konformes sekundäres Backup-Ziel für ihre Dropbox-Dateien.

Die Hetzner Storage Box ist ein kostengünstiger, in Deutschland gehosteter Speicherdienst, der Zugriff über SFTP, FTP, Samba und WebDAV unterstützt. Europäische Unternehmen und Entwickler, die Dropbox zur Zusammenarbeit nutzen, fügen häufig die Hetzner Storage Box als sekundäres Backup-Ziel hinzu: Sie ist bei großen Datenmengen deutlich günstiger und hält die Daten innerhalb der EU-Rechtsprechung. RcloneView verbindet beide über die Dropbox- und SFTP-Backends von rclone und macht geplante Synchronisationen von Dropbox zu Hetzner zu einer einfachen Aufgabe in der GUI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten von Dropbox und Hetzner Storage Box

Fügen Sie zuerst Dropbox hinzu: **Remote-Tab → Neuer Remote → Dropbox**, authentifizieren Sie sich über den OAuth-Browser-Login. Ihre Dropbox-Ordner erscheinen sofort im Explorer.

Fügen Sie die Hetzner Storage Box als SFTP-Remote hinzu: **Neuer Remote → SFTP**. Konfigurieren Sie mit:
- **Host**: `yourboxid.your-storagebox.de`
- **Benutzer**: Ihr Storage-Box-Benutzername (im Hetzner-Robot-Panel angezeigt)
- **Authentifizierung**: SSH-Schlüssel (empfohlen) oder Passwort
- **Port**: 23 (die Hetzner Storage Box verwendet Port 23, nicht den Standardport 22)

Testen Sie die Verbindung, bevor Sie speichern. Sobald beide Remotes hinzugefügt sind, öffnen Sie einen geteilten Explorer, um Dropbox links und Hetzner rechts zu durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## Erstellen eines geplanten Synchronisationsjobs

Für ein fortlaufendes Backup-Szenario erstellen Sie im Job-Manager einen Sync-Job: Quelle ist Ihr Dropbox-Ordner (z. B. `dropbox:/Team/Projects/`), Ziel ist Ihr Hetzner-Pfad (z. B. `hetzner:/backups/dropbox/`). Setzen Sie in Schritt 2 die gleichzeitigen Übertragungen auf 4–6 — die Hetzner Storage Box verarbeitet SFTP-Verbindungen bei diesem Parallelitätsgrad gut.

Planen Sie den Job so, dass er nachts um 2:00 Uhr läuft (PLUS-Lizenz). Die inkrementelle Synchronisation kopiert nur neue oder geänderte Dateien, wodurch die Übertragungszeiten nach der anfänglichen vollständigen Synchronisation kurz bleiben. Der Job-Verlauf protokolliert für Ihre Unterlagen Status, Übertragungsgröße und Dauer jedes Laufs.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## Einmalige Migration von Dropbox zu Hetzner

Wenn Sie von Dropbox zur Hetzner Storage Box als primärem Speicherort migrieren, verwenden Sie einen Copy-Job anstelle von Sync. Copy überträgt alle Dateien von Dropbox zu Hetzner, ohne etwas an der Quelle zu löschen — Ihre Dropbox-Inhalte bleiben während der Übergangszeit erhalten. Führen Sie zuerst den Dry Run aus, um die Dateianzahl und die gesamte Übertragungsgröße zu überprüfen, bevor Sie fortfahren.

Aktivieren Sie bei großen Dropbox-Konten mit mehreren hundert GB in Schritt 2 die Checksummenprüfung, um die Integrität jeder Datei nach der Übertragung zu bestätigen. Mit der Funktion „Ordner vergleichen“ können Sie nach Abschluss des Jobs überprüfen, ob die Migration korrekt abgeschlossen wurde, indem Sie die Ordnerstrukturen von Dropbox und Hetzner nebeneinander vergleichen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie im Assistenten „Neuer Remote“ Dropbox über OAuth und die Hetzner Storage Box über SFTP (Port 23) hinzu.
3. Erstellen Sie im Job-Manager einen Sync-Job von Ihrem Dropbox-Pfad zu Ihrem Hetzner-Pfad.
4. Planen Sie nächtliche Synchronisationen und überprüfen Sie den Job-Verlauf für Übertragungsprotokolle.

Die Synchronisation von Dropbox mit der Hetzner Storage Box über RcloneView bietet europäischen Teams ein kostengünstiges, DSGVO-konformes sekundäres Backup, das automatisch ohne manuellen Eingriff läuft.

---

**Weiterführende Anleitungen:**

- [Hetzner Storage Box einbinden und mit der Cloud synchronisieren mit RcloneView](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [Dropbox mit Backblaze B2 sichern mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Dropbox mit AWS S3 sichern mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
