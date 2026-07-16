---
slug: migrate-wasabi-to-backblaze-b2-s3-rcloneview
title: "Migration zwischen Wasabi, Backblaze B2 und AWS S3 — S3-kompatible Cloud-Migration mit RcloneView"
authors:
  - tayson
description: "Wechsel zwischen S3-kompatiblen Anbietern? Erfahren Sie, wie Sie Daten zwischen Wasabi, Backblaze B2 und AWS S3 migrieren und dabei die Kosten mit RcloneView minimieren."
keywords:
  - wasabi to backblaze b2
  - migrate s3 compatible storage
  - wasabi migration tool
  - backblaze b2 to s3
  - s3 provider migration
  - wasabi vs backblaze b2
  - switch cloud storage provider
  - s3 compatible transfer
  - wasabi to aws s3
  - cloud storage migration cost
tags:
  - RcloneView
  - wasabi
  - backblaze-b2
  - aws-s3
  - migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migration zwischen Wasabi, Backblaze B2 und AWS S3 — S3-kompatible Cloud-Migration mit RcloneView

> Ein besseres Angebot für S3-kompatiblen Speicher gefunden? Wasabi, Backblaze B2 und AWS S3 sprechen alle dasselbe Protokoll — die Migration zwischen ihnen sollte einfach sein. Mit RcloneView ist sie es.

S3-kompatibler Speicher hat sich zum Standard für Objektspeicher entwickelt. Wenn Sie einen Anbieter mit besseren Preisen, mehr Funktionen oder anderer regionaler Abdeckung finden, sollten Sie nicht daran gebunden sein. Da Wasabi, Backblaze B2 und AWS S3 alle die S3-API verwenden, kann RcloneView Daten nahtlos zwischen ihnen verschieben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Preisvergleich

| Funktion | AWS S3 Standard | Backblaze B2 | Wasabi |
|---------|----------------|-------------|--------|
| Speicher (TB/Monat) | $23 | $6 | $7 |
| Egress (TB) | $90 | $10 | Kostenlos* |
| Mindestspeicherdauer | Keine | 1 Tag | 90 Tage |
| Kostenlose Stufe | 5 GB (12 Monate) | 10 GB | Keine |
| API-Kompatibilität | Native S3 | S3-kompatibel | S3-kompatibel |

*Wasabis „kostenloser Egress" unterliegt einer Fair-Use-Richtlinie — der Egress sollte das Speichervolumen nicht überschreiten.

## Migrationsszenarien

### Wasabi → Backblaze B2

Wasabis Mindestspeicherrichtlinie von 90 Tagen berechnet Ihnen Kosten, selbst wenn Sie Dateien früher löschen. Wenn Ihr Nutzungsmuster einen häufigen Dateiwechsel beinhaltet, ist B2 (ohne Mindestdauer) möglicherweise günstiger.

### Backblaze B2 → Wasabi

Wasabi bietet vorhersehbare Preise ohne Egress-Gebühren. Wenn Sie häufig Daten herunterladen, spart Wasabis Pauschalpreis Geld.

### AWS S3 → Backblaze B2 oder Wasabi

AWS S3 ist die teuerste Option. Das Verschieben von Archiv- oder Backup-Daten zu B2 oder Wasabi kann die Kosten um 70–80 % senken.

### Beliebiger Anbieter → AWS S3

Wenn Sie eine Integration in das AWS-Ökosystem benötigen (Lambda, CloudFront, Athena), ist S3 die einzige Wahl.

## So migrieren Sie

### 1) Beide Anbieter hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Add S3-compatible remotes" class="img-large img-center" />

### 2) Durchsuchen und vergleichen

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse source and destination buckets" class="img-large img-center" />

### 3) Migration ausführen

Verwenden Sie einen **Copy**-Job für eine sichere Migration:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run S3 migration" class="img-large img-center" />

### 4) Überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

### 5) Große Übertragungen überwachen

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## Migrationskosten minimieren

### Egress ist der größte Kostenfaktor

Bei der Migration VON AWS S3 summieren sich die Egress-Gebühren. Für 10 TB: 900 $ Egress-Kosten bei S3. Planen Sie entsprechend:

- **In Phasen migrieren** — Auf mehrere Abrechnungszyklen verteilen.
- **Kalte Daten priorisieren** — Selten genutzte Daten zuerst migrieren.
- **Bandbreitenlimits verwenden**, um das tägliche Egress-Volumen zu steuern.

### Backblaze B2 Egress

B2 bietet kostenlosen Egress über Cloudflare (Bandwidth Alliance). Wenn Ihr Ziel dies unterstützt, nutzen Sie die Cloudflare-Integration.

### Überlegungen zu Wasabi

Wasabi berechnet mindestens 90 Tage. Löschen Sie Daten nicht innerhalb von 90 Tagen nach dem Upload aus Wasabi, sonst zahlen Sie ohnehin die vollen 90-Tage-Kosten.

## Schritte nach der Migration

1. **Alle Objekte überprüfen** — Der Ordnervergleich bestätigt die Vollständigkeit.
2. **Anwendungskonfigurationen aktualisieren** — Verweisen Sie Ihre Apps auf den neuen Endpunkt.
3. **Zugriff testen** — Stellen Sie sicher, dass Anwendungen auf den neuen Anbieter lesend/schreibend zugreifen können.
4. **Quelle aktiv halten** — Behalten Sie den alten Anbieter 30 Tage lang als Fallback bei.
5. **Quelldaten löschen** — Nachdem Sie bestätigt haben, dass alles funktioniert.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Quell- und Ziel-Remotes** (S3-kompatibel) hinzufügen.
3. **Einen Copy-Job ausführen**, um Daten zu migrieren.
4. **Mit dem Ordnervergleich überprüfen**.
5. **Anwendungen aktualisieren** und den alten Anbieter außer Betrieb nehmen.

Gleiche API, anderer Anbieter, besserer Preis.

---

**Verwandte Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
