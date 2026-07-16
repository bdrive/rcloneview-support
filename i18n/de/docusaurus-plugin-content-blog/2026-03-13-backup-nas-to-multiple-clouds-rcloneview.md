---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "So sichern Sie Ihr NAS in mehreren Clouds — 3-2-1-Backup-Strategie mit RcloneView"
authors:
  - tayson
description: "Schützen Sie Ihre NAS-Daten, indem Sie sie gleichzeitig bei mehreren Cloud-Anbietern sichern. Setzen Sie eine echte 3-2-1-Backup-Strategie mit den Batch-Jobs von RcloneView um."
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So sichern Sie Ihr NAS in mehreren Clouds — 3-2-1-Backup-Strategie mit RcloneView

> Ein Cloud-Backup ist gut. Zwei Cloud-Backups sind besser. Die 3-2-1-Regel besagt: 3 Kopien, 2 verschiedene Medien, 1 Off-Site. Ihr NAS ist Kopie eins. Cloud A ist Kopie zwei. Cloud B ist Kopie drei. RcloneView automatisiert das alles.

Ein NAS ist eine großartige zentrale Speicherlösung, aber es bleibt ein einzelnes Gerät an einem einzelnen Standort. Hardwareausfälle, Feuer, Diebstahl oder Naturkatastrophen können es zusammen mit allem darauf zerstören. Ein Backup bei mehreren Cloud-Anbietern — auf unterschiedlicher Infrastruktur, in unterschiedlichen Regionen — sorgt für echte Disaster Recovery.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Die 3-2-1-Strategie

| Kopie | Speicherort | Anbieter |
|------|----------|----------|
| 1 (primär) | NAS (lokal) | Synology/QNAP |
| 2 (Cloud-Backup) | Cloud A | Backblaze B2 ($6/TB) |
| 3 (Cloud-Backup) | Cloud B | AWS S3 oder Wasabi |

Drei Kopien. Zwei verschiedene Speicherarten (lokales NAS + Cloud). Eine Off-Site-Kopie (Cloud ist per Definition off-site).

## Einrichtung mit RcloneView

### 1) NAS und Clouds verbinden

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) Backup-Jobs für jede Cloud erstellen

**Job 1**: NAS → Backblaze B2 (primäres Cloud-Backup).
**Job 2**: NAS → AWS S3 (sekundäres Cloud-Backup).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) Nächtliche Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

Zeitpläne versetzt anlegen:
- 2:00 Uhr → NAS → Backblaze B2.
- 4:00 Uhr → NAS → AWS S3.

### 4) Batch-Jobs für die Automatisierung nutzen

v1.3 Batch-Jobs verketten alles:

1. Kopieren NAS → B2.
2. Kopieren NAS → S3.
3. Vergleich NAS vs. B2.
4. Vergleich NAS vs. S3.
5. Benachrichtigung über Slack.

### 5) Beide Backups überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## Kostenoptimierung

| Datenmenge | B2 monatlich | S3 Standard-IA monatlich | Gesamt |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12,50 | $18,50 |
| 5 TB | $30 | $62,50 | $92,50 |
| 10 TB | $60 | $125 | $185 |

Für das sekundäre Backup empfehlen sich günstigere Tarife: S3 Glacier ($4/TB) oder Wasabi ($7/TB mit kostenlosem Egress).

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **NAS + zwei Cloud-Anbieter verbinden**.
3. **Kopier-Jobs erstellen** für jede Cloud.
4. **Planen und automatisieren** mit Batch-Jobs.
5. **Beide Backups wöchentlich überprüfen**.

Zwei Clouds, ein NAS, kein Datenverlustrisiko.

---

**Weiterführende Anleitungen:**

- [RcloneView auf Synology NAS](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [RcloneView auf QNAP NAS](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [Warum Cloud-zu-Cloud-Backup wichtig ist](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
