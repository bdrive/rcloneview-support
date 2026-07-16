---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "Zoho WorkDrive automatisch mit RcloneView auf Google Drive oder S3 sichern"
authors:
  - tayson
description: "Schützen Sie Ihre Zoho WorkDrive-Daten, indem Sie sie automatisch und nach Zeitplan mit der WebDAV-Verbindung von RcloneView auf Google Drive, AWS S3 oder externen Speicher sichern."
keywords:
  - zoho workdrive backup
  - zoho zu google drive
  - zoho workdrive synchronisation
  - zoho workdrive export
  - zoho dateien sichern
  - zoho workdrive zu s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho dateisicherung automatisierung
tags:
  - RcloneView
  - zoho
  - cloud-storage
  - backup
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive automatisch mit RcloneView auf Google Drive oder S3 sichern

> Zoho WorkDrive ist ein solides Kollaborationstool — aber wie sieht Ihr Backup-Plan aus? Wenn Ihr Zoho-Abonnement ausläuft oder Daten versehentlich gelöscht werden, sorgt ein unabhängiges Backup auf Google Drive oder S3 dafür, dass nichts verloren geht.

Zoho WorkDrive ist bei Unternehmen beliebt, die das Zoho-Ökosystem nutzen — CRM, Mail, Projekte und gemeinsamer Dateispeicher in einer Plattform. Zoho bietet jedoch keine native Möglichkeit, WorkDrive-Daten in einer anderen Cloud zu sichern. Wenn Sie eine unabhängige Kopie für Disaster Recovery, Compliance oder Migrationszwecke benötigen, schließt RcloneView diese Lücke, indem es sich per WebDAV mit WorkDrive verbindet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Zoho WorkDrive sichern?

- **Kein natives Cross-Cloud-Backup** — Zoho bietet keine integrierte Export-Funktion zu S3 oder Google Drive.
- **Risiko versehentlichen Löschens** — Teammitglieder können freigegebene Dateien löschen. Ohne externes Backup ist eine Wiederherstellung möglicherweise unmöglich.
- **Abhängigkeit vom Abonnement** — Läuft Ihr Zoho-Plan ab oder wird er herabgestuft, kann der Dateizugriff eingeschränkt werden.
- **Compliance-Anforderungen** — Manche Vorschriften verlangen, dass Daten an mehreren unabhängigen Orten gespeichert werden.
- **Flexibilität bei Migrationen** — Wenn Sie irgendwann von Zoho zu Google Workspace oder Microsoft 365 wechseln möchten, macht ein Backup den Übergang nahtlos.

## Zoho WorkDrive per WebDAV verbinden

Zoho WorkDrive unterstützt WebDAV-Zugriff, mit dem sich RcloneView nativ verbindet:

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **WebDAV** aus der Anbieterliste.
3. Geben Sie Ihre Zoho WorkDrive WebDAV-Daten ein:
   - **URL**: Ihr Zoho WorkDrive WebDAV-Endpunkt.
   - **Username**: Ihre Zoho-E-Mail-Adresse.
   - **Password**: Ein anwendungsspezifisches Passwort aus den Zoho-Sicherheitseinstellungen.
4. Speichern — Ihre WorkDrive-Dateien und -Ordner sind nun durchsuchbar.

Details zur WebDAV-Einrichtung finden Sie im [WebDAV-Verbindungsleitfaden](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## Ihre WorkDrive-Dateien durchsuchen

Sobald die Verbindung besteht, durchsuchen Sie Ihr gesamtes WorkDrive im zweigeteilten Explorer:

- Team-Ordner, persönliche Dateien und freigegebene Bereiche anzeigen.
- Dateigrößen prüfen, um den Speicherbedarf für das Backup abzuschätzen.
- Kritische Ordner identifizieren, die vorrangig gesichert werden müssen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## Backup auf Google Drive

1. **Google Drive hinzufügen** als zweites Remote (über [OAuth-Anmeldung](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)).
2. **Copy-Job erstellen**: Zoho WorkDrive → Google Drive-Ordner.
3. **Erstes Backup ausführen** — alle Dateien werden mit erhaltener Ordnerstruktur übertragen.
4. **Täglich planen** mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) für automatische inkrementelle Updates.

## Backup auf AWS S3

1. **S3 hinzufügen** als Remote ([S3-Einrichtungsleitfaden](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)).
2. **Copy-Job erstellen**: Zoho WorkDrive → S3-Bucket.
3. **Zeitplan** für nächtliche Läufe festlegen.
4. Nutzen Sie S3-Lifecycle-Richtlinien, um alte Backups zur Kosteneinsparung nach Glacier zu verschieben.

## Backup überprüfen

Nutzen Sie nach jedem Backup-Lauf den [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um die Vollständigkeit zu bestätigen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## Automatisieren und überwachen

1. **Backups planen**, damit sie täglich zu verkehrsarmen Zeiten laufen.
2. **Benachrichtigungen erhalten** über [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) oder [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).
3. **Job History überprüfen**, um alle Backup-Läufe nachzuverfolgen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Zoho WorkDrive hinzufügen** per WebDAV.
3. **Backup-Ziel hinzufügen** (Google Drive, S3, externes Laufwerk).
4. **Copy-Job erstellen** und planen.
5. **Überprüfen** mit dem Ordnervergleich.

Lassen Sie Ihre Zoho WorkDrive-Daten nicht ohne Backup-Plan bestehen. RcloneView bietet Ihnen automatisierte, verifizierte Backups in jede Cloud — für die Sicherheit, die Zoho von Haus aus nicht bietet.

---

**Weiterführende Anleitungen:**

- [WebDAV hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Remote per browserbasiertem Login hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
