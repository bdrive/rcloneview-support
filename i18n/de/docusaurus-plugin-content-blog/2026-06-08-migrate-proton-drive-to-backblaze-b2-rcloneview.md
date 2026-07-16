---
slug: migrate-proton-drive-to-backblaze-b2-rcloneview
title: "Proton Drive zu Backblaze B2 migrieren — Sichere Cloud-Übertragung mit RcloneView"
authors:
  - jay
description: "Dateien mit RcloneView von Proton Drive zu Backblaze B2 verschieben. Schritt-für-Schritt-Anleitung zur Migration verschlüsselter Cloud-Speicher-Daten in kostengünstigen Objektspeicher."
keywords:
  - Proton Drive to Backblaze B2
  - migrate Proton Drive Backblaze
  - Proton Drive cloud migration
  - Backblaze B2 cloud backup
  - RcloneView cloud transfer
  - cloud-to-cloud file migration
  - move files from Proton Drive
  - Backblaze B2 object storage backup
  - Proton Drive export backup
tags:
  - proton-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive zu Backblaze B2 migrieren — Sichere Cloud-Übertragung mit RcloneView

> Verschieben Sie Ihre Proton Drive-Dateien mit RcloneView in den kostengünstigen Objektspeicher von Backblaze B2 — ohne manuelles Herunterladen.

Proton Drive bietet eine starke Ende-zu-Ende-Verschlüsselung und einen datenschutzorientierten Speicher, was es zu einer beliebten Wahl für sensible private und geschäftliche Daten macht. Wenn der Speicherbedarf wächst — oder wenn Sie ein kostengünstiges sekundäres Backup-Ziel benötigen — wird die Migration von Dateien zu Backblaze B2 zu einer praktischen Option. Ein Fotostudio, das Terabytes an RAW-Dateien archiviert, oder ein Entwicklerteam, das Cloud-Assets konsolidiert, kann von B2s skalierbarem Objektspeicher neben Protons datenschutzorientiertem primärem Speicher profitieren. RcloneView macht diese Cloud-zu-Cloud-Migration unkompliziert und überträgt Daten direkt zwischen den Anbietern, ohne die Dateien vorher auf den lokalen Rechner herunterzuladen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proton Drive und Backblaze B2 verbinden

Bevor Sie migrieren, konfigurieren Sie beide Cloud-Remotes in RcloneView. Beginnen Sie mit dem Hinzufügen Ihres Proton Drive-Kontos: Navigieren Sie zum Tab Remote in der Menüleiste und klicken Sie auf New Remote. Wählen Sie Proton Drive aus der Anbieterliste und geben Sie Ihre Proton-Konto-E-Mail-Adresse und Ihr Passwort ein. Wenn Sie die Zwei-Faktor-Authentifizierung aktiviert haben, fragt RcloneView während der Einrichtung nach Ihrem 2FA-Code. Die Unterstützung für Proton Drive erfordert rclone v1.69 oder höher — der in RcloneView eingebettete rclone übernimmt dies automatisch.

Fügen Sie als Nächstes Ihr Backblaze B2-Remote hinzu. Klicken Sie erneut auf New Remote und wählen Sie Backblaze B2. Sie benötigen Ihre Application Key ID und Ihren Application Key, die Sie in der Backblaze B2-Konsole unter App Keys generieren. Beschränken Sie den Schlüssel auf den spezifischen Bucket, den Sie als Migrationsziel verwenden möchten, oder gewähren Sie kontoweiten Zugriff, falls Sie während der Einrichtung einen neuen Bucket erstellen möchten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes konfiguriert sind, durchsuchen Sie sie im Dual-Panel-Explorer von RcloneView nebeneinander. Navigieren Sie auf der einen Seite zu Ihrem Proton Drive-Ordner und auf der anderen zu Ihrem B2-Bucket, um zu bestätigen, dass beide Verbindungen funktionieren, bevor Sie die Migration starten.

## Den Migrationsjob konfigurieren

Nachdem beide Remotes verbunden sind, öffnen Sie den Job Manager im Tab Home und erstellen Sie einen neuen Synchronisations- oder Kopierjob. Legen Sie Ihren Proton Drive-Ordner als Quelle und Ihren Backblaze B2-Bucket als Ziel fest. Geben Sie dem Job einen aussagekräftigen Namen wie `proton-to-b2-archive`, um ihn von anderen Übertragungsjobs zu unterscheiden.

Bevor Sie die vollständige Migration starten, verwenden Sie die Option Dry Run, um genau zu sehen, welche Dateien übertragen werden. Diese Simulation zeigt die vollständige Liste der zu kopierenden Dateien, ohne Daten zu verschieben — ein wichtiger Schritt bei der Migration großer Bibliotheken, um Probleme bei der Pfadzuordnung frühzeitig zu erkennen. Aktivieren Sie bei großen Proton Drive-Archiven die Prüfsummenverifizierung in den erweiterten Einstellungen, um die Dateiintegrität bei beiden Anbietern sicherzustellen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer job from Proton Drive to Backblaze B2" class="img-large img-center" />

Mit den Einstellungen für gleichzeitige Übertragungen in Schritt 2 des Job-Assistenten können Sie die Leistung anpassen. Ein Start mit 4 gleichzeitigen Übertragungen ist ein vernünftiger Standardwert, den Sie erhöhen können, sobald Sie bestätigt haben, dass die Migration reibungslos läuft.

## Übertragung überwachen und verifizieren

Sobald Sie den Migrationsjob starten, zeigt der Tab Transferring im unteren Bereich von RcloneView den Echtzeit-Fortschritt an: Übertragungsgeschwindigkeit, abgeschlossene Dateien, Gesamtgröße und verbleibende Daten. Minimieren Sie RcloneView bei großen Migrationen im Umfang von zig oder Hunderten von Gigabyte in das System-Tray und lassen Sie die Übertragung im Hintergrund laufen, während die Jobs ununterbrochen weiterlaufen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring showing Proton Drive to Backblaze B2 migration progress" class="img-large img-center" />

Nach Abschluss der Migration prüfen Sie den Tab Job History, um den Übertragungsstatus, die Gesamtzahl der verschobenen Dateien und etwaige Fehler zu bestätigen. Wenn der Job Fehler für bestimmte Dateien meldet, liefert die Log-Ansicht genaue Fehlermeldungen, um festzustellen, ob es sich um ein Berechtigungsproblem, einen Netzwerk-Timeout oder einen Konflikt bei der Dateinamenkodierung handelt.

## Laufende Backups planen

Für Nutzer, die Backblaze B2 als kontinuierliches Backup-Ziel für ihre Proton Drive-Daten verwenden möchten, unterstützt RcloneView PLUS eine Planung im Crontab-Stil. Bearbeiten Sie nach Abschluss der initialen Migration den Job und navigieren Sie zu Schritt 4 (Scheduling), um eine wiederkehrende Synchronisation zu konfigurieren — zum Beispiel nächtlich um 2 Uhr. Der geplante Job wird automatisch ausgeführt und kopiert nur neue oder geänderte Dateien seit dem letzten Lauf, sodass Ihr B2-Archiv ohne manuellen Eingriff aktuell bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automatic Proton Drive to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihr Proton Drive-Remote über Remote-Tab > New Remote hinzu und geben Sie Ihre E-Mail-Adresse und Ihr Passwort ein.
3. Fügen Sie Ihr Backblaze B2-Remote mit Ihrer Application Key ID und Ihrem Application Key aus der B2-Konsole hinzu.
4. Erstellen Sie im Job Manager einen Synchronisations- oder Kopierjob mit Proton Drive als Quelle und Ihrem B2-Bucket als Ziel.
5. Führen Sie einen Dry Run aus, um die Migration zu prüfen, und starten Sie dann die vollständige Übertragung, deren Fortschritt Sie im Tab Transferring überwachen können.

Da RcloneView die Verbindung zwischen Proton Drive und Backblaze B2 übernimmt, können Sie eine zuverlässige Cloud-übergreifende Backup-Strategie aufbauen, die Protons Datenschutz mit B2s kosteneffizienter Speicherkapazität kombiniert.

---

**Related Guides:**

- [Proton Drive zu Google Drive migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dropbox zu Proton Drive migrieren — Cloud-Übertragung mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Google Drive zu Backblaze B2 migrieren — Cloud-Übertragung mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
