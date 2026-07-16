---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "OneDrive zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - tayson
description: "Verschieben Sie OneDrive-Dateien für Entwickler-Workflows und CDN-Integration mit RcloneView zu Cloudflare R2. Verbinden Sie sich über OAuth und API-Token, wenden Sie Filter an und synchronisieren Sie."
keywords:
  - migrate OneDrive to Cloudflare R2
  - OneDrive R2 transfer RcloneView
  - OneDrive to Cloudflare R2 sync
  - cloud storage migration developer
  - Cloudflare R2 object storage
  - OneDrive alternative R2
  - S3 compatible storage migration
  - RcloneView OneDrive migration
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen

> Cloudflare R2 lässt sich nativ in CDN- und Workers-Pipelines integrieren — RcloneView übernimmt die Migration von OneDrive zu R2, ohne Ihren lokalen Rechner zu belasten.

Entwickler und Teams, die Workloads in das Cloudflare-Ökosystem verlagern, müssen häufig Assets, die in OneDrive gespeichert sind, nach Cloudflare R2 verschieben. R2 bietet S3-kompatiblen Objektspeicher ohne Egress-Kosten, der sich direkt in Cloudflare Workers, Pages und CDN integrieren lässt — ideal für statische Assets, Mediendateien und Build-Artefakte. RcloneView verbindet OneDrive über OAuth und Cloudflare R2 über ein API-Token und führt die Migration als Cloud-zu-Cloud-Synchronisationsjob mit optionalen Filterregeln aus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive verbinden

Öffnen Sie RcloneView und navigieren Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und wählen Sie **OneDrive** aus der Anbieterliste. RcloneView öffnet Ihren Browser für die OAuth-Authentifizierung — melden Sie sich mit Ihrem Microsoft-Konto an und autorisieren Sie den Zugriff. Persönliches OneDrive, OneDrive for Business und SharePoint-Dokumentbibliotheken sind auf diese Weise alle zugänglich.

Öffnen Sie nach der Autorisierung den Remote im File Explorer. Navigieren Sie zu den Ordnern, die Sie migrieren möchten, und notieren Sie sich deren Pfade.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Cloudflare R2 verbinden

Klicken Sie zurück im **Remote Manager** auf **New Remote** und wählen Sie **S3 Compatible**. Geben Sie Ihre Cloudflare-R2-Zugangsdaten ein:

- **Access Key ID**: aus dem Cloudflare-Dashboard → R2 → Manage API Tokens (erstellen Sie ein API-Token mit den Berechtigungen Object Read & Write)
- **Secret Access Key**: das Token-Secret
- **Endpoint**: `https://{your-account-id}.r2.cloudflarestorage.com`

Speichern Sie den Remote. Navigieren Sie im File Explorer zum Ziel-Bucket (oder erstellen Sie einen). Überprüfen Sie den Zugriff, indem Sie bestätigen, dass die Bucket-Inhalte angezeigt werden.

## Migrationsjob mit Filtern konfigurieren

Gehen Sie zu **Jobs** und klicken Sie auf **New Job**. Legen Sie OneDrive als Quelle und den zu migrierenden Ordner fest. Legen Sie Cloudflare R2 als Ziel und Ihren Ziel-Bucket-Pfad fest.

In Schritt 2 des Job-Assistenten können Sie **Filterregeln** anwenden, um die Migration einzugrenzen:

- Nur bestimmte Dateitypen migrieren (z. B. `--include "*.jpg"`, `--include "*.pdf"`)
- Systemordner oder temporäre Dateien ausschließen (z. B. `--exclude ".DS_Store"`)
- Mit **Dry Run** das gefilterte Ergebnis vorab prüfen, bevor der Job wirklich ausgeführt wird

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## Migration ausführen

Deaktivieren Sie Dry Run und führen Sie den Job aus. RcloneView zeigt den Fortschritt in Echtzeit im Übertragungsbereich an — Dateien pro Sekunde, aktuelle Geschwindigkeit und insgesamt übertragene Datenmenge. Die Übertragung von OneDrive zu R2 erfolgt Server-zu-Server; Ihr lokaler Rechner fungiert als Orchestrator, nicht als Datenkanal.

Große Dateien nutzen automatisch Multipart-Uploads. Falls einzelne Dateien während der Übertragung fehlschlagen, zeigt der Log-Tab den jeweiligen Fehler an. Ein erneutes Ausführen des Jobs ist unbedenklich — bereits übertragene Dateien werden übersprungen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## Überprüfung nach der Migration

Verwenden Sie **Folder Compare**, um beide Seiten nach der Migration zu prüfen. Öffnen Sie die OneDrive-Quelle und das R2-Ziel in der Vergleichsansicht — RcloneView hebt Dateien hervor, die nur auf einer Seite vorhanden sind. Aktivieren Sie für kritische Migrationen die Checksummenprüfung in den Job-Einstellungen, um Genauigkeit auf Byte-Ebene sicherzustellen.

Nach der Überprüfung können Sie Cloudflare-Worker-Bindings, CDN-Regeln oder Anwendungskonfigurationen aktualisieren, damit sie auf den R2-Bucket statt auf OneDrive verweisen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie OneDrive über OAuth im **Remote Manager**.
3. Verbinden Sie Cloudflare R2 mit Ihrem API-Token und dem Account-ID-Endpoint.
4. Erstellen Sie einen Migrationsjob mit optionalen Filtern, prüfen Sie ihn mit Dry Run vorab und führen Sie ihn dann aus.

Die enge CDN-Integration von Cloudflare R2 und die Abrechnung ohne Egress-Kosten machen es zu einem attraktiven Ziel für Inhalte, die zuvor in OneDrive lagen.

---

**Verwandte Anleitungen:**

- [Dropbox zu Cloudflare R2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [Google Drive zu Cloudflare R2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Azure Blob zu Cloudflare R2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
