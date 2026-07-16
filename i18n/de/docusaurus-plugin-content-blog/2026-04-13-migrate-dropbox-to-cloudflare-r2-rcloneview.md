---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "Dropbox zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Verschieben Sie Ihre Dateien von Dropbox zu Cloudflare R2 mit RcloneView. Verbinden Sie sich per OAuth und API-Token, verarbeiten Sie große Dateien und profitieren Sie von null Egress-Gebühren bei R2."
keywords:
  - Dropbox zu Cloudflare R2 migrieren
  - Dropbox R2 Übertragung RcloneView
  - Dropbox zu R2 Migration
  - Cloudflare R2 Cloud-Synchronisation
  - Cloud-Speicher ohne Egress-Gebühren
  - Cloud-zu-Cloud-Migrationstool
  - Dropbox-Alternative R2
  - RcloneView Migrationsanleitung
tags:
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen

> Cloudflare R2 bietet S3-kompatiblen Objektspeicher ohne Egress-Gebühren — RcloneView macht den Umzug von Dropbox mit einem Cloud-zu-Cloud-Synchronisationsjob unkompliziert.

Cloudflare R2 hat sich zu einer attraktiven Alternative für Teams entwickelt, die von Dropbox wegwollen. Ohne Egress-Gebühren und mit Unterstützung für die S3-kompatible API fügt sich R2 nahtlos in Entwickler-Workflows, Pipelines für statische Assets und kostenbewusste Archivierungsstrategien ein. Das Verschieben Ihrer vorhandenen Dropbox-Dateien nach R2 ist eine einmalige Cloud-zu-Cloud-Migration, die RcloneView durchführt, ohne die Daten über Ihren lokalen Rechner zu leiten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Schritt 1 — Dropbox verbinden

Öffnen Sie RcloneView und gehen Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und wählen Sie **Dropbox**. Wie bei den meisten OAuth-Anbietern öffnet Dropbox Ihren Browser zur Autorisierung — melden Sie sich an und klicken Sie auf Allow. RcloneView speichert das Token, und der Remote erscheint sofort. Öffnen Sie ihn im File Explorer, um zu bestätigen, dass Ihre Dropbox-Dateien und -Ordner sichtbar sind.

Wenn Sie ein Dropbox-Business-Konto haben, stellen Sie sicher, dass Sie mit dem Konto angemeldet sind, dem die zu migrierenden Inhalte gehören. Für freigegebene Ordner, die anderen gehören, können Zugriffsbeschränkungen gelten.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## Schritt 2 — Cloudflare R2 verbinden

Klicken Sie im **Remote Manager** auf **New Remote** und wählen Sie **S3 Compatible**. Cloudflare R2 verwendet S3-kompatible Anmeldedaten:

- **Access Key ID**: aus Ihrem Cloudflare R2 API-Token (erstellen Sie eines im Cloudflare-Dashboard unter R2 > Manage API Tokens)
- **Secret Access Key**: das zugehörige Secret
- **Endpoint**: `https://{account-id}.r2.cloudflarestorage.com`

Ihre Account ID finden Sie in der Seitenleiste des Cloudflare-Dashboards. Speichern Sie den Remote und öffnen Sie ihn, um zu bestätigen, dass Ihre R2-Buckets sichtbar sind. Erstellen Sie den Ziel-Bucket, falls er noch nicht existiert.

## Schritt 3 — Migrationsjob einrichten

Navigieren Sie zu **Jobs** und klicken Sie auf **New Job**. Legen Sie Dropbox als Quelle fest. Sie können das Root-Verzeichnis wählen, um alles zu migrieren, oder einen bestimmten Ordner auswählen. Legen Sie Cloudflare R2 als Ziel fest und verweisen Sie auf Ihren Ziel-Bucket.

Konfigurieren Sie in Schritt 2 des Job-Assistenten die Optionen für die Migration:

- Beginnen Sie mit aktiviertem **Dry Run**, um die Dateiliste zu prüfen
- Setzen Sie **transfers** für Dropbox-Migrationen auf 4–6 (höhere Werte können Dropbox-Ratenbegrenzungen auslösen)
- Aktivieren Sie die **Checksummenprüfung**, um zu bestätigen, dass große Dateien unbeschädigt übertragen wurden

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## Umgang mit großen Dateien

Cloudflare R2 unterstützt Objekte bis zu 5 TB, und RcloneView verwendet für große Dateien automatisch Multipart-Uploads. Dropbox hat eine maximale Dateigröße von 2 TB pro Datei. In der Praxis liegen die Dateien bei den meisten Dropbox-Migrationen deutlich innerhalb dieser Grenzen. Falls Sie außergewöhnlich große Dateien haben und die Übertragung fehlschlägt, prüfen Sie den Log-Tab auf konkrete Fehlermeldungen und erwägen Sie, die Anzahl gleichzeitiger Übertragungen zu reduzieren.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## Schritt 4 — Überprüfen und abschließen

Nachdem der Hauptmigrationsjob abgeschlossen ist, verwenden Sie **Folder Compare** zur Überprüfung. Öffnen Sie die Dropbox-Quelle und das R2-Ziel nebeneinander und lassen Sie RcloneView etwaige Abweichungen erkennen. Führen Sie den Job für fehlende Dateien erneut aus. Sobald Sie sich sicher sind, dass die Migration abgeschlossen ist, können Sie Ihre Anwendungen auf R2 umstellen und den Dropbox-Zugriff schrittweise beenden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Dropbox per OAuth im **Remote Manager**.
3. Verbinden Sie Cloudflare R2 mit Ihrem API-Token, Secret und dem Account-ID-Endpoint.
4. Erstellen Sie einen Migrationsjob, führen Sie einen Dry Run zur Vorschau aus und starten Sie dann die vollständige Übertragung.

Der Wechsel zu Cloudflare R2 beseitigt Dropboxs Pro-Nutzer-Preismodell und entfällt Egress-Kosten für Inhalte, die aus dem Netzwerk von Cloudflare abgerufen werden.

---

**Verwandte Anleitungen:**

- [Wasabi zu Cloudflare R2 mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Azure Blob zu Cloudflare R2 mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [Dropbox-Ratenbegrenzungsfehler der API mit RcloneView beheben](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
