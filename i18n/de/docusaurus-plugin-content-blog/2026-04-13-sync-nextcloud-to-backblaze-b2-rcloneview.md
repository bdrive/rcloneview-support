---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "Nextcloud mit Backblaze B2 synchronisieren — Offsite-Backup mit RcloneView"
authors:
  - tayson
description: "Sichern Sie Ihre selbst gehosteten Nextcloud-Daten mit RcloneView auf Backblaze B2. Verbinden Sie sich über WebDAV und App Key und planen Sie automatisierte Offsite-Backups."
keywords:
  - Nextcloud Backblaze B2 Backup
  - Nextcloud Offsite-Backup RcloneView
  - Nextcloud WebDAV Sync B2
  - Selbst gehostetes Nextcloud-Backup
  - Backblaze B2 Nextcloud Cloud-Backup
  - Automatisiertes Nextcloud-Backup
  - Nextcloud Disaster Recovery
  - RcloneView WebDAV-Backup
tags:
  - RcloneView
  - nextcloud
  - backblaze-b2
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud mit Backblaze B2 synchronisieren — Offsite-Backup mit RcloneView

> Nextcloud eignet sich hervorragend für selbst gehostete Zusammenarbeit, aber ohne Offsite-Backup kann ein einzelner Serverausfall zu dauerhaftem Datenverlust führen — RcloneView synchronisiert es automatisch mit Backblaze B2.

Das selbstständige Hosten von Nextcloud gibt Ihnen die volle Kontrolle über Ihre Daten, aber Kontrolle bedeutet auch Verantwortung. Wenn Ihr Server beschädigt, mit Ransomware angegriffen oder ohne ordnungsgemäßes Backup außer Betrieb genommen wird, gibt es kein Sicherheitsnetz. Backblaze B2 bietet erschwinglichen, langlebigen Offsite-Objektspeicher, der perfekt zu Nextcloud passt. RcloneView verbindet Nextcloud über WebDAV und B2 über einen Application Key und bietet Ihnen eine GUI zum Einrichten und Planen wiederkehrender Backups.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Nextcloud über WebDAV verbinden

Öffnen Sie RcloneView und gehen Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und wählen Sie **WebDAV**. Nextcloud stellt seine Dateien über WebDAV unter einem Standardpfad bereit. Füllen Sie Folgendes aus:

- **URL**: `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**: Nextcloud
- **User**: Ihr Nextcloud-Benutzername
- **Password**: Ihr Nextcloud-Kontopasswort (oder ein App-Passwort, falls 2FA aktiviert ist)

Speichern Sie den Remote und öffnen Sie ihn im File Explorer, um zu bestätigen, dass Ihre Nextcloud-Dateien angezeigt werden. Navigieren Sie durch einige Ordner, um den Zugriff zu überprüfen.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Backblaze B2 verbinden

Klicken Sie im **Remote Manager** erneut auf **New Remote** und wählen Sie **Backblaze B2**. Gehen Sie in der Backblaze-Konsole zu **App Keys** und erstellen Sie einen Schlüssel mit Lese-/Schreibzugriff auf Ihren Backup-Bucket. Geben Sie die **Application Key ID** und den **Application Key** in RcloneView ein. Speichern Sie den Remote und öffnen Sie ihn, um zu überprüfen, ob Ihre B2-Buckets zugänglich sind.

Erstellen Sie den Ziel-Bucket, falls noch nicht geschehen — für Nextcloud-Backups sorgt ein dedizierter Bucket (z. B. `nextcloud-backup`) für Übersichtlichkeit.

## Den Backup-Job einrichten

Gehen Sie zu **Jobs** und klicken Sie auf **New Job**. Konfigurieren Sie:

- **Source**: Ihr Nextcloud-WebDAV-Remote, verweisend auf das Root-Verzeichnis oder ein bestimmtes Verzeichnis
- **Destination**: Ihr Backblaze-B2-Remote und der Backup-Bucket

In Schritt 2 des Job-Assistenten empfohlene Optionen für Nextcloud-Backups:

- Setzen Sie **transfers** auf 4 (WebDAV hat einen Overhead pro Verbindung, daher ist eine geringere Nebenläufigkeit stabiler)
- Aktivieren Sie die **Checksum-Verifizierung** zur Sicherstellung der Integrität
- Aktivieren Sie **Dry Run** beim ersten Durchlauf, um den Umfang vor der endgültigen Ausführung zu überprüfen

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## Automatisierte Backups planen

Mit einer PLUS-Lizenz können Sie in Schritt 3 des Job-Assistenten mit Cron-Syntax einen Zeitplan hinzufügen. Für tägliche Backups um 1 Uhr: `0 1 * * *`. Für wöchentliche Backups: `0 1 * * 0`. RcloneView führt den Job zur geplanten Zeit im Hintergrund aus und protokolliert das Ergebnis im **Job History**.

Jeder Eintrag im Job History zeigt: geprüfte Dateien, übertragene Dateien (nur geänderte Dateien werden erneut gesendet), Datenvolumen, Dauer und eventuelle Fehler. So können Sie schnell bestätigen, dass das nächtliche Backup erfolgreich ausgeführt wurde, ohne die Anwendung manuell zu öffnen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Hinweise zur Backup-Strategie

- Der Synchronisationsjob von RcloneView ist standardmäßig inkrementell — nach dem ersten Durchlauf werden nur neue oder geänderte Dateien übertragen
- Erwägen Sie eine Versionierung im Stil von **--backup-dir**, wenn Sie gelöschte Dateien in B2 aufbewahren möchten
- Nextcloud-Datenbank-Backups müssen separat behandelt werden (mysqldump oder Ähnliches), aber alle Dateidaten im Datenverzeichnis von Nextcloud werden sauber über WebDAV synchronisiert

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Nextcloud über WebDAV im **Remote Manager** mit Ihrer Server-URL und Ihren Zugangsdaten.
3. Verbinden Sie Backblaze B2 mit Ihrer Application Key ID und Ihrem Application Key.
4. Erstellen und planen Sie einen Synchronisationsjob von Nextcloud zu B2 für automatisierte nächtliche Offsite-Backups.

Ein automatisiertes Nextcloud-→-Backblaze-B2-Backup, das nächtlich läuft, bedeutet, dass Ihre selbst gehosteten Daten mit minimalen Kosten eine Redundanz auf Enterprise-Niveau erhalten.

---

**Weiterführende Anleitungen:**

- [Nextcloud mit Google Drive und S3 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [Nextcloud WebDAV mit RcloneView sichern](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
