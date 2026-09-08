---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "HiDrive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen"
authors:
  - steve
description: "Verschieben Sie Dateien von HiDrive zu Backblaze B2 mit RcloneView – mit prüfsummenverifizierter Synchronisation, Dry-Run-Vorschau und Job-Verlaufsverfolgung."
keywords:
  - HiDrive zu Backblaze B2 migrieren
  - HiDrive Backblaze B2 Übertragung
  - HiDrive Cloud-Migration
  - Backblaze B2 Backup-Tool
  - RcloneView HiDrive
  - Cloud-zu-Cloud-Übertragung
  - prüfsummenverifizierte Migration
  - HiDrive zu Objektspeicher
  - Europäische Cloud zu Backblaze B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen

> Verschieben Sie ein wachsendes HiDrive-Konto mit prüfsummenverifizierten Übertragungen und einem vorherigen Dry Run auf Backblaze B2 Objektspeicher.

HiDrive eignet sich gut für den täglichen Dateizugriff, aber Teams, die eine günstigere Langzeitaufbewahrung oder eine externe Objektspeicher-Kopie benötigen, wenden sich oft Backblaze B2 zu, sobald der Datenbestand über das hinauswächst, wofür ein privater oder geschäftlicher Cloud-Tarif gedacht ist. RcloneView verbindet beide Dienste im selben Fenster — HiDrive über OAuth und Backblaze B2 mit einem Application Key —, sodass die Migration als ein einziger konfigurierter Job läuft, anstatt zuerst alles lokal herunterzuladen. RcloneView bindet ein UND synchronisiert 90+ Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive und Backblaze B2 verbinden

HiDrive wird über den browserbasierten OAuth-Login von RcloneView hinzugefügt — eine separate API-Schlüsseleingabe ist nicht erforderlich. Backblaze B2 benötigt eine Application Key ID und einen Application Key, die in der Backblaze-Kontokonsole generiert und direkt in das Remote-Einrichtungsformular eingegeben werden. Sobald beide Remotes im Remote Manager erscheinen, werden sie als separate Tabs im Explorer angezeigt, sodass Sie die HiDrive-Quelle und das B2-Ziel nebeneinander durchsehen können, bevor Sie eine Übertragung starten.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Den Migrationsjob konfigurieren

Verwenden Sie die Schaltfläche Sync im Home-Tab, um den 4-Schritte-Assistenten zu öffnen. In Schritt 1 wählen Sie den HiDrive-Quellordner und den Backblaze B2 Bucket als Ziel aus und wählen die einseitige Synchronisation, damit die Migration nur nach B2 schreibt, ohne HiDrive zu verändern. Schritt 2 ermöglicht es Ihnen, den Prüfsummenvergleich zu aktivieren, sodass Dateien anhand von Hash und Größe statt nur anhand des Änderungsdatums abgeglichen werden — wichtig beim Wechsel zwischen zwei sehr unterschiedlichen Storage-Backends. Schritt 3 unterstützt das Filtern nach Dateityp, maximaler Größe oder Alter, falls Sie zunächst nur eine Teilmenge migrieren möchten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

Führen Sie vor der eigentlichen Übertragung einen Dry Run aus — er listet genau auf, was kopiert wird, ohne auch nur ein Byte zu verschieben, und ist damit die sicherste Methode, einen falsch konfigurierten Ordnerpfad zu erkennen, bevor daraus eine große, ungewollte Übertragung wird.

## Die Migration überprüfen

Öffnen Sie nach Abschluss der Synchronisation Folder Compare zwischen der HiDrive-Quelle und dem B2-Ziel, um zu bestätigen, dass Dateianzahl und -größe auf beiden Seiten übereinstimmen. Job History erfasst für jeden Lauf die insgesamt übertragene Größe, die Übertragungsgeschwindigkeit und die Dateianzahl, sodass Sie einen Nachweis haben, wenn etwas nicht stimmt.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Ihr HiDrive-Konto über OAuth und fügen Sie Backblaze B2 mit Ihrer Application Key ID und Ihrem Key hinzu.
3. Konfigurieren Sie einen einseitigen Sync-Job mit aktiviertem Prüfsummenvergleich und führen Sie zunächst einen Dry Run aus.
4. Bestätigen Sie das Ergebnis mit Folder Compare und Job History, bevor Sie die HiDrive-Kopie stilllegen.

Der Wechsel zu Backblaze B2 bedeutet nicht, die bereits auf HiDrive aufgebaute Ordnerstruktur und Dateiorganisation aufzugeben — RcloneView behält diese während der gesamten Übertragung bei.

---

**Verwandte Anleitungen:**

- [HiDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Backblaze B2-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [HiDrive-Synchronisationsfehler beheben — zuverlässige Cloud-Sicherung mit RcloneView](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
