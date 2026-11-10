---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "Box zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - robin
description: "Box mit RcloneView zu Cloudflare R2 migrieren: beide Remotes verbinden, die Kopie per Dry Run prüfen, eine Cloud-zu-Cloud-Übertragung starten und das Ergebnis verifizieren."
keywords:
  - Box zu Cloudflare R2 migrieren
  - Box zu R2 Übertragung
  - Box Cloud-Migration
  - Cloudflare R2 Backup
  - RcloneView
  - Cloud-zu-Cloud-Übertragung
  - Box zu S3-kompatiblem Speicher
  - Box-Archiv in Objektspeicher
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu Cloudflare R2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie jahrelang gewachsene Box-Inhalte in den Objektspeicher Cloudflare R2, ohne etwas auf Ihre eigene Festplatte herunterzuladen.

Ein Finanzteam, dem der Box-Tarif zu eng geworden ist, oder eine Abteilung, die alte Projekte abschließt, wünscht sich oft stattdessen ein Archiv im Objektspeicher. RcloneView verbindet Box und Cloudflare R2 nebeneinander und kopiert direkt zwischen beiden. S3, Azure oder Backblaze B2 lassen sich mit der FREE-Lizenz mit vollem Lese-/Schreibzugriff verbinden, und das gilt auch für R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Cloudflare R2 verbinden

Box ist ein OAuth-Remote: RcloneView öffnet Ihren Browser, Sie melden sich an, und das Remote wird ohne API-Schlüssel erstellt. Nutzt Ihr Unternehmen Box for Business, benötigt das Remote `box_sub_type = enterprise`. Prüfen Sie das zuerst, denn ein Remote vom Typ „persönlich“ sieht keine Unternehmensinhalte.

Cloudflare R2 verwendet Zugangsdaten. Erstellen Sie im Cloudflare-Dashboard einen R2-Bucket, erzeugen Sie ein API-Token mit der Berechtigung Admin Read & Write und geben Sie die Token-Daten sowie Ihren Konto-Endpunkt `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` im Dialog New Remote ein.

<img src="/support/images/en/blog/new-remote.png" alt="Box- und Cloudflare-R2-Remotes in RcloneView hinzufügen" class="img-large img-center" />

## Ordnerstruktur planen

Öffnen Sie Box in einem Explorer-Panel und R2 im anderen. R2 ist ein flacher Objektspeicher, legen Sie daher vor dem Kopieren eine Präfixstruktur fest: zum Beispiel ein Ordner auf oberster Ebene pro Box-Abteilung, darunter die ursprünglichen Unterordner. Mit Get Size schätzen Sie bei großen Box-Ordnern das zu verschiebende Volumen ab.

Box Docs wie Box Notes sind keine gewöhnlichen Dateien. Die vordefinierten Filter im Sync-Assistenten enthalten eine Option Box Docs, mit der Sie diese ausschließen können, wenn sie nicht im Archiv landen sollen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box und Cloudflare R2 nebeneinander in den Explorer-Panels von RcloneView" class="img-large img-center" />

## Erst Dry Run, dann kopieren

Legen Sie für den ersten Durchlauf einen Copy-Job statt eines Sync-Jobs an, damit auf keiner Seite etwas entfernt wird. Führen Sie ihn zunächst als Dry Run aus: RcloneView listet die Dateien auf, die es kopieren würde, ohne sie zu übertragen – so fällt ein falscher Quellordner auf.

Erhöhen Sie im Schritt Advanced Settings die Zahl der Datei-Transfers, wenn Sie viele kleine Dateien haben, und aktivieren Sie den Prüfsummenvergleich, wenn Sie nach Hash und Größe abgleichen möchten. Starten Sie dann den Job und verfolgen Sie den Fortschritt im Tab Transferring: Prozentwert, Geschwindigkeit und Dateianzahl werden live aktualisiert.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Der Box-zu-R2-Copy-Job läuft in RcloneView" class="img-large img-center" />

## Die Migration verifizieren

Öffnen Sie nach Abschluss des Jobs Folder Compare mit Box links und R2 rechts. Mit dem Filter left-only sehen Sie, was nicht angekommen ist, und mit dem Filter different-files erkennen Sie Größenabweichungen. Job History speichert Status, Dauer, Gesamtgröße und Dateianzahl jedes Laufs – nützlich als Nachweis für ein Audit.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare prüft die Migration von Box zu R2" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen**: Laden Sie es von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Fügen Sie Ihr Box-Remote (OAuth) und Ihr Cloudflare-R2-Remote (API-Token und Endpunkt) hinzu.
3. Erstellen Sie einen Copy-Job von einem Box-Ordner zu einem R2-Bucket-Präfix und führen Sie einen Dry Run aus.
4. Starten Sie den Job und bestätigen Sie das Ergebnis mit Folder Compare.

Sobald beide Remotes verbunden sind, genügen wenige Klicks, um Box-Inhalte nach R2 zu verschieben.

---

**Weiterführende Anleitungen:**

- [Box zu AWS S3 migrieren](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Box-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run: Sync vor der Übertragung prüfen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
