---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "Nextcloud mit Google Drive synchronisieren — Dateien mit RcloneView migrieren und sichern"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Nextcloud mit Google Drive mithilfe von RcloneView synchronisieren. Übertragen Sie Dateien von Ihrem selbst gehosteten Nextcloud-Server zu Google Drive mit vollständiger Automatisierungsunterstützung."
keywords:
  - Nextcloud zu Google Drive Synchronisation
  - Nextcloud Google Drive migrieren
  - RcloneView Nextcloud Google Drive
  - selbst gehosteten Cloud-Speicher mit Google Drive synchronisieren
  - Nextcloud WebDAV Synchronisation RcloneView
  - Nextcloud zu Google Drive sichern
  - Cloud-Migration selbst gehostet RcloneView
  - Nextcloud-Dateien zu Google Drive übertragen
  - Nextcloud Google Drive automatisierte Synchronisation
  - RcloneView WebDAV Cloud-Übertragung
tags:
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud mit Google Drive synchronisieren — Dateien mit RcloneView migrieren und sichern

> Nextcloud gibt Ihnen die volle Kontrolle über Ihre Daten — RcloneView fügt die Brücke zu Google Drive für Redundanz, Migration oder Teamzugriff hinzu.

Nextcloud verschafft Organisationen die Eigentümerschaft über ihre Speicherinfrastruktur, doch selbst gehostete Daten benötigen weiterhin eine externe Kopie. Die Synchronisation von Nextcloud mit Google Drive über RcloneView erstellt eine zweite Kopie auf einer großen Cloud-Plattform, ohne Skripte oder manuelle Dateiübertragungen. Egal, ob Sie sich vollständig von der selbst gehosteten Infrastruktur lösen oder Nextcloud als primären Speicher mit Google Drive als sekundärem Backup beibehalten möchten — RcloneView übernimmt die Übertragung über eine visuelle Synchronisationsoberfläche mit integrierter Zeitplanungsunterstützung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten beider Remotes in RcloneView

Bevor Sie den Synchronisationsjob erstellen, müssen zwei Remotes konfiguriert sein. Für Google Drive wechseln Sie zur Registerkarte **Remote**, klicken auf **New Remote** und wählen Google Drive aus — ein Browserfenster öffnet sich für die OAuth-Authentifizierung, sodass keine API-Schlüssel oder Zugangsdaten manuell verwaltet werden müssen. Für Nextcloud wählen Sie **WebDAV** als Remote-Typ. Geben Sie Ihre Nextcloud-Server-URL im Format `https://your-nextcloud.example.com/remote.php/dav/files/username/` zusammen mit Ihrem Nextcloud-Benutzernamen und -Passwort ein (oder einem App-Passwort, falls die Zwei-Faktor-Authentifizierung für Ihr Konto aktiviert ist).

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

Sobald beide Remotes gespeichert sind, klicken Sie im Explorer-Panel auf jeden einzelnen, um die Verbindung zu überprüfen. Eine erfolgreiche Nextcloud-Verbindung zeigt die Ordnerstruktur Ihres Home-Verzeichnisses an; Google Drive zeigt das Stammverzeichnis Ihres Drives. Wenn Nextcloud einen Authentifizierungsfehler zurückgibt, überprüfen Sie, ob die URL den vollständigen WebDAV-Pfad enthält — das Weglassen von `/remote.php/dav/files/username/` ist der häufigste Einrichtungsfehler.

## Erstellen des Nextcloud-zu-Google-Drive-Synchronisationsjobs

Nachdem beide Remotes überprüft wurden, öffnen Sie den **Job Manager** über die Registerkarte Home und erstellen einen neuen **Sync**-Job. Legen Sie in Schritt 1 Ihren Nextcloud-Pfad als Quelle und Ihren Google-Drive-Ordner als Ziel fest. Stellen Sie sicher, dass die Synchronisationsrichtung auf einseitig eingestellt ist (die Quelle verändert nur das Ziel) — dies spiegelt Nextcloud-Inhalte zu Google Drive, ohne Ihre Nextcloud-Dateien zu verändern.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Konfigurieren Sie in Schritt 2 die gleichzeitigen Übertragungen basierend auf der Upload-Kapazität Ihres Servers. Bei großen Nextcloud-Bibliotheken — zum Beispiel dem gemeinsam genutzten Projektordner eines Designteams mit 200 GB an Assets — beschleunigt eine höhere Anzahl gleichzeitiger Übertragungen die anfängliche Befüllung des Google-Drive-Ziels. Aktivieren Sie die **Prüfsummen**-Verifizierung, wenn die Datenintegrität entscheidend ist; dies bestätigt, dass jede übertragene Datei anhand des Inhalts-Hashes und nicht nur der Dateigröße mit der Quelle übereinstimmt.

## Filtern von Systemordnern und Metadaten

Nextcloud-Server sammeln Systemordner, Thumbnail-Caches und temporäre Dateien an, die in einem Google-Drive-Spiegel nichts zu suchen haben. Fügen Sie in Schritt 3 des Job-Assistenten Filterregeln hinzu, um diese Pfade auszuschließen. Muster wie `.nextcloud/` oder `.thumbs/` überspringen Metadatenverzeichnisse, die Ihrem Ziel Rauschen hinzufügen, ohne einen Mehrwert zu bieten. Die vordefinierten Filter-Presets von RcloneView für Bilder, Dokumente und Videos ermöglichen es Ihnen, die Synchronisation auf genau die Dateitypen zu beschränken, die für Ihr Team relevant sind.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Bevor Sie den Job live ausführen, nutzen Sie die Option **Dry Run** im Job Manager, um alle geplanten Vorgänge vorab zu prüfen. Der Dry Run listet jede zu kopierende Datei auf, ohne dass Änderungen vorgenommen werden — eine nützliche Kontrolle, bevor Sie sich auf eine große Erstübertragung festlegen.

## Automatisieren der Synchronisation nach Zeitplan

Sobald Sie den Dry Run validiert haben, speichern Sie den Job und fügen — mit einer PLUS-Lizenz — in Schritt 4 einen Zeitplan hinzu. Ein nächtlicher, cron-artiger Zeitplan hält Ihre Google-Drive-Kopie mit den täglichen Änderungen auf Nextcloud aktuell, ganz ohne manuellen Eingriff. Benachrichtigungen über den Abschluss der Synchronisation informieren Sie, wenn jeder geplante Durchlauf erfolgreich war.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie über New Remote ein **Google Drive**-Remote (OAuth-Browser-Login) und ein **Nextcloud**-Remote (WebDAV-URL + Zugangsdaten) hinzu.
3. Erstellen Sie einen **Sync**-Job mit Ihrem Nextcloud-Pfad als Quelle und einem Google-Drive-Ordner als Ziel.
4. Führen Sie einen **Dry Run** durch, um den Umfang zu überprüfen, und speichern Sie ihn dann mit einem Zeitplan für eine automatisierte, laufende Synchronisation.

Eine synchronisierte Google-Drive-Kopie Ihrer Nextcloud-Daten stellt sicher, dass ein Serverausfall oder ein versehentliches Löschen niemals zu einem dauerhaften Datenverlust führt.

---

**Verwandte Anleitungen:**

- [Nextcloud mit Backblaze B2 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Nextcloud-Cloud-Synchronisation und -Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Seafile mit Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
