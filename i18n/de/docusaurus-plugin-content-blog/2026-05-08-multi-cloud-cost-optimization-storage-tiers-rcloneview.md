---
slug: multi-cloud-cost-optimization-storage-tiers-rcloneview
title: "Multi-Cloud-Kostenoptimierung — Speicherstufen und Archivierung mit RcloneView"
authors:
  - jay
description: "Reduzieren Sie Cloud-Speicherkosten, indem Sie Daten mit RcloneView auf Hot-, Warm- und Cold-Storage verteilen. Verschieben Sie ältere Dateien automatisch von Premium-Cloud zu S3, B2 oder Glacier."
keywords:
  - multi-cloud cost optimization RcloneView
  - cloud storage tiering guide
  - reduce cloud storage costs
  - hot warm cold cloud storage
  - archive old files cloud storage
  - cloud storage cost management
  - tiered cloud backup RcloneView
  - move files cloud archive automatically
tags:
  - multi-cloud
  - cost-optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Multi-Cloud-Kostenoptimierung — Speicherstufen und Archivierung mit RcloneView

> Die meisten Organisationen zahlen zu viel für Cloud-Speicher, weil sie alles in Hot-Tier-Anbietern vorhalten. RcloneView macht es praktikabel, Daten automatisch auf verschiedene Anbieter zu verteilen und so Kosten zu senken, ohne den Zugriff zu verlieren.

Die Kosten für Cloud-Speicher summieren sich schnell, wenn schnell zugänglicher "Hot"-Speicher — Google Drive, Dropbox, OneDrive — jahrelang selten genutzte Dateien vorhält. Eine pragmatische Tiering-Strategie hält aktuelle, aktive Dateien in Premium-Speicher und verschiebt ältere Daten zu kosteneffizienten Archivanbietern wie Backblaze B2, Wasabi oder Amazon S3 Glacier. Die filterbasierten Jobs und die Zeitplanung von RcloneView machen dieses Tiering automatisch.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Die drei Speicherstufen verstehen

**Hot-Tier** (Google Drive, Dropbox, OneDrive): Optimiert für sofortigen Zugriff, Echtzeit-Zusammenarbeit und mobile Synchronisation. Am besten für Dateien geeignet, auf die täglich oder wöchentlich zugegriffen wird. Am teuersten pro GB.

**Warm-Tier** (Wasabi, Backblaze B2, Amazon S3 Standard): S3-kompatibler Objektspeicher mit schnellem Abruf, aber geringeren Kosten als Hot-Tier-Anbieter. Keine Egress-Gebühren bei Wasabi und B2 (mit Cloudflare). Ideal für Dateien, auf die monatlich zugegriffen wird — Projektarchive, Kundenlieferungen aus dem vergangenen Jahr und Referenzbibliotheken.

**Cold-Tier** (Amazon S3 Glacier, Cloudflare R2 + Lifecycle-Regeln): Optimiert für langfristige Aufbewahrung mit seltenem Zugriff. Am günstigsten pro GB. Geeignet für Compliance-Archive, Rohmaterial, das nicht mehr in Produktion ist, und mehrjährige Backup-Aufbewahrung.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files across storage tiers in RcloneView" class="img-large img-center" />

## Übergänge zwischen Speicherstufen mit RcloneView automatisieren

Der Filter **Max file age** im Job-Assistenten von RcloneView ist das zentrale Werkzeug für automatisiertes Tiering. Setzen Sie in Schritt 3 des Synchronisationsjob-Assistenten **Max file age** auf `90d`, um nur Dateien anzusprechen, die in den letzten 90 Tagen nicht verändert wurden. Konfigurieren Sie als Quelle Ihren Dropbox- oder Google-Drive-Arbeitsordner und als Ziel Wasabi oder Backblaze B2.

Mit einer PLUS-Lizenz können Sie diesen Job so planen, dass er monatlich läuft. Jeder Durchlauf identifiziert Dateien, die den Schwellenwert überschritten haben, und kopiert sie in das Warm-Tier-Archiv. Für Cold-Tier-Übergänge (Verschieben von Warm zu Glacier-Storage) erstellen Sie einen zweiten Job mit derselben Filterlogik, der von B2 zu S3 zeigt, mit einer passenden Storage-Class-Einstellung in den Global Rclone Flags.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated cloud storage tier transitions in RcloneView" class="img-large img-center" />

## Übergänge zwischen Speicherstufen überprüfen und sicher löschen

Löschen Sie niemals Dateien aus dem Hot-Tier, bevor Sie bestätigt haben, dass sie im Warm- oder Cold-Tier vorhanden sind. Der **Folder Compare** von RcloneView ist hierfür das richtige Werkzeug: Vergleichen Sie den Dropbox-Ordner, den Sie leeren möchten, mit dem Backblaze-B2-Ziel. Filtern Sie so, dass nur Dateien angezeigt werden, die unterschiedlich sind oder im Ziel fehlen. Zeigt der Vergleich keine Abweichungen, ist das Archiv vollständig und die Originale können sicher gelöscht werden.

Für Branchen mit Compliance-Anforderungen sollten Sie das Job-History-Protokoll als Prüfnachweis dafür aufbewahren, wann jede Charge archiviert wurde. Das Protokoll erfasst für jeden Durchlauf die Anzahl der übertragenen Dateien, die Gesamtgröße und den Zeitstempel.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a tier transition job from Dropbox to Backblaze B2" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Identifizieren Sie Ihre Hot-Tier-Anbieter (Google Drive, Dropbox) und den Ziel-Warm-Tier (B2, Wasabi).
3. Erstellen Sie einen Copy-Job mit einem **Max file age**-Filter von 90 Tagen und planen Sie ihn monatlich.
4. Verwenden Sie Folder Compare, um archivierte Dateien zu überprüfen, bevor Sie sie aus dem Hot-Tier löschen.

Eine gut umgesetzte Tiering-Strategie mit RcloneView kann die Ausgaben für Cloud-Speicher erheblich senken, ohne die Verfügbarkeit der Daten zu beeinträchtigen.

---

**Weiterführende Anleitungen:**

- [Multi-Cloud-Kosten und Geisterdateien mit RcloneView reduzieren](https://rcloneview.com/support/blog/reduce-multi-cloud-costs-ghost-files-rcloneview)
- [Cold-Archivierung nach Glacier mit RcloneView](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Multi-Cloud-Backup-Strategie mit RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
