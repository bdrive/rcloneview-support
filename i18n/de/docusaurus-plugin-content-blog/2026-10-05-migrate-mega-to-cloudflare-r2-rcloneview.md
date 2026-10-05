---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "Mega zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "Migrieren Sie Mega zu Cloudflare R2 mit RcloneView: beide Remotes verbinden, einen Dry Run ausführen, Cloud-zu-Cloud übertragen und mit Folder Compare überprüfen."
keywords:
  - Mega zu Cloudflare R2 migrieren
  - Mega-zu-R2-Übertragung
  - Mega-Backup nach R2
  - Cloud-zu-Cloud-Migration
  - Cloudflare R2 Objektspeicher
  - Mega Cloud-Speicher
  - RcloneView
  - rclone GUI
  - Dateien von Mega verschieben
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mega zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie eine Mega-Bibliothek mit RcloneView in Cloudflare-R2-Buckets und sehen Sie sich den Job vor der Ausführung in der Vorschau an.

Mega eignet sich für persönlichen Speicher, doch Projekte, die bucketbasierten Zugriff, eine S3-kompatible API oder eine klare Trennung von Speicherung und Freigabe benötigen, landen oft bei Objektspeicher. RcloneView verbindet Mega und Cloudflare R2 als Remotes und überträgt zwischen beiden in einem einzigen Job, mit Vorschau, Überwachung und einem Verlauf jedes Laufs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mega und Cloudflare R2 verbinden

Öffnen Sie New Remote und wählen Sie Mega. Es verwendet Kontozugangsdaten: Ihre E-Mail-Adresse und Ihr Passwort. Erstellen Sie als Nächstes das R2-Remote. Erstellen Sie im Cloudflare-Dashboard einen Bucket und generieren Sie ein API-Token mit Admin-Read-&-Write-Berechtigungen. RcloneView fragt die Token-Zugangsdaten, Ihre Account ID und den Endpunkt ab, der die Form `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` hat.

<img src="/support/images/en/blog/new-remote.png" alt="Mega- und Cloudflare-R2-Remotes in RcloneView hinzufügen" class="img-large img-center" />

RcloneView unterstützt 90+ Cloud-Speicherdienste unter Windows, macOS und Linux, und beide Remotes erscheinen nach dem Speichern nebeneinander im Explorer.

## Vor der Übertragung in der Vorschau prüfen

Öffnen Sie zwei Explorer-Panels, links Mega und rechts Ihren R2-Bucket. Ziehen Sie Ordner für eine schnelle Kopie hinüber, denn das Ziehen zwischen verschiedenen Remotes kopiert, statt zu verschieben. Verwenden Sie für eine ganze Bibliothek stattdessen den Sync-Assistenten: Wählen Sie den Mega-Ordner als Quelle und den Bucket als Ziel und führen Sie dann einen Dry Run aus, um zu sehen, welche Dateien kopiert oder gelöscht würden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Einrichtung des Übertragungsjobs von Mega zu Cloudflare R2" class="img-large img-center" />

Stellen Sie sich einen Videoeditor mit 800 GB an Projektarchiven auf Mega vor. In Step 2 können Sie die Anzahl der Dateiübertragungen für viele kleine Dateien erhöhen und den Prüfsummenvergleich aktivieren, wenn Sie Hash- und Größenprüfungen wünschen. Mit den Filtern in Step 3 lassen sich Ordner ausschließen oder die Dateigröße begrenzen.

## Überwachen und überprüfen

Sobald der Job gestartet ist, zeigt der Tab Transferring Fortschritt, Geschwindigkeit und Dateianzahl an, und Sie können einen Lauf bei Bedarf abbrechen. Behalten Sie Fehler im Auge und führen Sie den Job erneut aus, wenn eine Sitzung vorzeitig endet. Job History speichert Status, Dauer, Größe und Dateianzahl.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Übertragung von Mega zu R2 in RcloneView überwachen" class="img-large img-center" />

Öffnen Sie nach Abschluss Folder Compare mit Mega auf der einen und R2 auf der anderen Seite. Left-only-Dateien zeigen alles, was im Bucket fehlt, und Sie können sie direkt in der Vergleichsansicht hinüberkopieren.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare zwischen Mega und Cloudflare R2" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Mega mit E-Mail-Adresse und Passwort hinzu sowie Cloudflare R2 mit API-Token, Account ID und Endpunkt.
3. Erstellen Sie einen Sync-Job von Mega zum R2-Bucket und führen Sie einen Dry Run aus.
4. Starten Sie die Übertragung und bestätigen Sie das Ergebnis anschließend mit Folder Compare.

Eine Migration mit Vorschau und abschließender Folder-Compare-Prüfung lässt Sie bestätigen, was in R2 angekommen ist.

---

**Verwandte Anleitungen:**

- [Mega-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Cloudflare R2 verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Sync vor der Übertragung in RcloneView in der Vorschau prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
