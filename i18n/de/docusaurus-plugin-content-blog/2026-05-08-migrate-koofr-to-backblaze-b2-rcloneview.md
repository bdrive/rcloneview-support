---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "Koofr zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Dateien von Koofr Cloud-Speicher zu Backblaze B2 Object Storage mit RcloneView migrieren — mit Prüfsummenverifizierung und automatischer Wiederholung bei großen Übertragungen."
keywords:
  - Koofr zu Backblaze B2 Migration
  - Koofr B2 RcloneView migrieren
  - Koofr Backblaze B2 Übertragung
  - Wechsel von Koofr zu B2 Speicher
  - Cloud-Migration Koofr
  - Koofr Backup Backblaze B2
  - Koofr zu S3 Migrationsanleitung
  - rclone Koofr B2 GUI
tags:
  - RcloneView
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie Ihre Koofr-Cloud-Speicher-Bibliothek in einem einzigen RcloneView-Job zu Backblaze B2 Object Storage — verifiziert, überwacht und bei Unterbrechung fortsetzbar.

Koofr ist ein auf Datenschutz ausgerichteter europäischer Cloud-Speicherdienst, der auch als Drehscheibe für die Verbindung anderer Cloud-Konten dient. Wenn Sie aus Archivierungs- oder Kostengründen zu Backblaze B2 konsolidieren, übernimmt RcloneView die Migration direkt zwischen den beiden Anbietern — ohne lokalen Download. Dateien werden vom WebDAV-basierten Backend von Koofr über die Übertragungs-Engine von rclone direkt in Ihren B2-Bucket gestreamt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr- und Backblaze-B2-Remotes einrichten

Gehen Sie für Koofr zu **Remote-Tab → Neuer Remote** und wählen Sie Koofr aus der Anbieterliste. Koofr unterstützt OAuth-Anmeldung — RcloneView öffnet ein Browserfenster, in dem Sie sich mit Ihrem Koofr-Konto authentifizieren können. Wenn Sie stattdessen einen passwortbasierten Zugriff bevorzugen, können Sie in den Kontoeinstellungen von Koofr ein App-Passwort generieren und dieses zusammen mit Ihrer Koofr-E-Mail-Adresse verwenden.

Geben Sie für Backblaze B2 Ihre Application Key ID und den Application Key ein, die Sie in der B2-Konsole generiert haben. Geben Sie den Bucket-Namen in der Konfiguration an. Sobald beide Remotes gespeichert sind, platzieren Sie Koofr im linken Explorer-Bereich und B2 im rechten, um zu bestätigen, dass beide durchsuchbar sind.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## Die Migration ausführen

Klicken Sie im Home-Tab auf **Sync** und konfigurieren Sie den Job: Koofr-Ordner als Quelle, B2-Bucket als Ziel. Aktivieren Sie in den erweiterten Einstellungen **Checksum** zur Integritätsprüfung. Koofr verwendet intern WebDAV, weshalb Dateilisten etwas langsamer sein können als bei nativem S3. Setzen Sie daher die Anzahl der Checker auf 4, um die Koofr-API nicht zu überlasten.

Führen Sie zunächst einen **Dry Run** aus, um die vollständige Liste der zu übertragenden Dateien zu sehen. Dies ist besonders nützlich für große Koofr-Bibliotheken, in denen Koofr auch Dateien von anderen verbundenen Konten (Google Drive, Dropbox usw.) aggregiert — der Dry Run hilft Ihnen zu bestätigen, dass Sie nur Ihren tatsächlichen Koofr-Speicher migrieren und nicht die gespiegelten Ansichten anderer Anbieter.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## Umgang mit unterbrochenen Übertragungen

Wenn die Migration unterbrochen wird (Netzwerkausfall, Computer-Ruhezustand usw.), ist der Sync-Modus von RcloneView von Natur aus fortsetzbar. Wenn Sie denselben Sync-Job erneut ausführen, vergleicht rclone Quelle und Ziel und überträgt nur Dateien, die auf der B2-Seite noch nicht vorhanden oder unterschiedlich sind. Bereits übertragene Dateien müssen nicht erneut gesendet werden.

Verwenden Sie nach Abschluss der Migration **Ordnervergleich (Folder Compare)**, um zu überprüfen, ob Koofr-Quelle und B2-Ziel übereinstimmen. Die Vergleichsansicht hebt alle Dateien hervor, die auf Koofr vorhanden, aber auf B2 nicht vorhanden sind, und gibt Ihnen so eine klare Checkliste für alles, was einen erneuten Versuch erfordert.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Koofr (OAuth) und Backblaze B2 (Application Key) als Remotes hinzu.
3. Führen Sie einen Dry Run aus, um den Umfang zu bestätigen, und führen Sie dann die Migration mit aktivierter Checksumme durch.
4. Verwenden Sie nach Abschluss den Ordnervergleich, um zu überprüfen, dass die Migration vollständig erfolgreich war.

Die Migration von Koofr zu Backblaze B2 mit RcloneView ist ein zuverlässiger, fortsetzbarer Prozess, der die Integrität Ihrer Daten durchgängig schützt.

---

**Weiterführende Anleitungen:**

- [Koofr Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr zu Google Drive mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Backblaze B2 Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
