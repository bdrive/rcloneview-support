---
slug: migrate-backblaze-b2-to-aws-s3-rcloneview
title: "Backblaze B2 zu AWS S3 migrieren — Schritt für Schritt mit RcloneView"
authors:
  - tayson
description: "Müssen Sie Daten von Backblaze B2 zu AWS S3 verschieben, um AWS-Ökosystem-Integration zu nutzen? Erfahren Sie, wie Sie mit RcloneView mit minimalen Kosten und ohne Datenverlust migrieren."
keywords:
  - backblaze b2 to aws s3
  - migrate b2 to s3
  - backblaze to amazon s3
  - b2 s3 migration tool
  - switch cloud storage provider
  - backblaze b2 migration
  - b2 to s3 transfer
  - cloud storage migration
  - backblaze to aws
  - s3 migration tool
tags:
  - backblaze-b2
  - aws-s3
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 zu AWS S3 migrieren — Schritt für Schritt mit RcloneView

> Backblaze B2 eignet sich hervorragend für kostengünstigen Speicher. Doch wenn Sie AWS-Ökosystem-Integration benötigen — Lambda-Trigger, CloudFront-CDN, Athena-Abfragen — brauchen Sie S3. So migrieren Sie ohne Datenverlust.

Backblaze B2 und AWS S3 sind beide S3-kompatibel, was die Migration mit dem richtigen Tool unkompliziert macht. Die wichtigsten Überlegungen sind Egress-Kosten, Übertragungszeit und Verifizierung. RcloneView übernimmt die Übertragung und bietet gleichzeitig visuelle Überwachung und Verifizierung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Migrationsplanung

### Kostenschätzung

B2-Egress: 10 $/TB (oder kostenlos über die Cloudflare Bandwidth Alliance).

| Datenvolumen | B2-Egress-Kosten | S3-Speicher (erster Monat) |
|-------------|---------------|-------------------------|
| 100 GB | 1 $ | 2,30 $ |
| 1 TB | 10 $ | 23 $ |
| 10 TB | 100 $ | 230 $ |

### Zeitplan

Die Übertragungsgeschwindigkeit hängt von Ihrer Verbindung sowie vom B2/S3-Durchsatz ab. Beide Dienste bewältigen hohe Parallelität gut.

## Schritt für Schritt

### 1) Beide Remotes hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add B2 and S3 remotes" class="img-large img-center" />

### 2) Durchsuchen und vergleichen

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse B2 and S3 side by side" class="img-large img-center" />

### 3) Kopierjob ausführen

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Migrate B2 to S3" class="img-large img-center" />

Nutzen Sie hohe Parallelität (16–32 Übertragungen) — sowohl B2 als auch S3 kommen damit gut zurecht.

### 4) Fortschritt überwachen

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor B2 to S3 migration" class="img-large img-center" />

### 5) Vollständigkeit verifizieren

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify B2 to S3 migration" class="img-large img-center" />

## Nach der Migration

1. **Anwendungskonfigurationen aktualisieren** — Apps auf S3-Endpunkte verweisen.
2. **Gründlich testen** — Überprüfen, ob Lese- und Schreibvorgänge korrekt funktionieren.
3. **B2 für 30 Tage behalten** — Als Fallback bei Problemen.
4. **B2-Daten löschen** — Nachdem bestätigt wurde, dass alles auf S3 funktioniert.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **B2 und S3** als Remotes hinzufügen.
3. **Kopierjob ausführen** mit hoher Parallelität.
4. **Mit Ordnervergleich verifizieren**.

Gleiche API, größeres Ökosystem.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migration zwischen S3-kompatiblen Anbietern](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-s3-rcloneview)

<CloudSupportGrid />
