---
slug: manage-oracle-cloud-object-storage-sync-rcloneview
title: "Oracle Cloud Object Storage verwalten — Synchronisation mit S3, Google Drive und NAS mit RcloneView"
authors:
  - tayson
description: "Oracle Cloud Infrastructure bietet wettbewerbsfähige Preise für Object Storage. Erfahren Sie, wie Sie Oracle Cloud Object Storage neben anderen Clouds mit RcloneView verwalten, synchronisieren und sichern können."
keywords:
  - oracle cloud object storage
  - oracle cloud storage sync
  - oracle oci rclone
  - oracle cloud s3 compatible
  - oracle cloud backup tool
  - oracle object storage gui
  - oracle cloud file manager
  - oracle oci storage transfer
  - sync oracle cloud google drive
  - oracle cloud storage migration
tags:
  - RcloneView
  - oracle-cloud
  - s3-compatible
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Oracle Cloud Object Storage verwalten — Synchronisation mit S3, Google Drive und NAS mit RcloneView

> Oracle Cloud Infrastructure (OCI) bietet 10 GB kostenlosen Object Storage und darüber hinaus wettbewerbsfähige Preise. Doch die Verwaltung von OCI-Speicher neben Ihren anderen Clouds erfordert die richtigen Werkzeuge.

Oracle Cloud Object Storage ist S3-kompatibel, langlebig und kosteneffizient — besonders dank Oracles großzügiger Free-Tier- und Always-Free-Ressourcen. Viele Organisationen nutzen OCI neben AWS, Google Cloud oder Azure. RcloneView verbindet sie alle und bietet Ihnen eine visuelle Oberfläche zur Verwaltung von Oracle Cloud Object Storage neben mehr als 70 weiteren Anbietern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Oracle Cloud Object Storage?

### Wettbewerbsfähige Preise

| Feature | Oracle Cloud | AWS S3 | Google Cloud |
|---------|-------------|--------|-------------|
| Speicher (TB/Monat) | $26 | $23 | $20 |
| Egress (erste 10 TB) | Kostenlos | $90 | $120 |
| Free Tier | 10 GB + Always Free | 5 GB (12 Monate) | 5 GB |

Oracles größter Vorteil: **kostenloser Egress** für die ersten 10 TB/Monat. Wenn Sie häufig Daten herunterladen, spart allein das Hunderte von Dollar.

### S3-Kompatibilität

OCI Object Storage bietet eine S3-kompatible API, was bedeutet, dass jedes Tool, das mit S3 funktioniert — einschließlich rclone und RcloneView — auch mit Oracle Cloud funktioniert.

### Enterprise-Funktionen

- **Speicher-Tiers**: Standard, Infrequent Access und Archive.
- **Objektversionierung**: Schutz vor versehentlichem Löschen.
- **Lifecycle-Richtlinien**: Automatische Verschiebung von Daten zwischen Tiers.
- **Replikation**: Cross-Region-Replikation für Disaster Recovery.

## Oracle Cloud in RcloneView einrichten

### Zugangsdaten abrufen

1. Melden Sie sich in der OCI Console an.
2. Navigieren Sie zu Identity → Users → Ihr Benutzer → Customer Secret Keys.
3. Generieren Sie einen Access Key und Secret Key.
4. Notieren Sie sich Ihren Namespace und Ihre Region (z. B. `us-phoenix-1`).

### Oracle Cloud als Remote hinzufügen

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **S3 Compatible** als Typ.
3. Wählen Sie **Oracle** (oder Other S3) als Anbieter.
4. Geben Sie Ihren Access Key, Secret Key, Ihre Region und den Endpoint ein.

<img src="/support/images/en/blog/new-remote.png" alt="Add Oracle Cloud Object Storage remote" class="img-large img-center" />

Das Endpoint-Format lautet: `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`

## Praktische Workflows

### 1) Oracle Cloud visuell durchsuchen

Keine OCI Console mehr für die Dateiverwaltung nötig. Durchsuchen Sie Ihre Buckets und Objekte im Zwei-Fenster-Explorer von RcloneView:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Oracle Cloud in RcloneView" class="img-large img-center" />

### 2) Migration von AWS S3 zu Oracle Cloud

Nutzen Sie Oracles kostenlosen Egress, um Daten von S3 zu verschieben:

1. Fügen Sie sowohl S3 als auch Oracle Cloud als Remotes hinzu.
2. Erstellen Sie einen Copy-Job von S3 → Oracle Cloud.
3. Überwachen Sie die Übertragung und verifizieren Sie sie mit Folder Comparison.

### 3) Oracle Cloud mit Google Drive synchronisieren

Behalten Sie eine kollaborationsfreundliche Kopie auf Google Drive, während Sie auf Oracle Cloud archivieren:

- Planen Sie tägliche Synchronisationen von Google Drive → Oracle Cloud.
- Oracle Cloud dient als Ihr langlebiges, kosteneffizientes Archiv.

### 4) Multi-Cloud-Backup-Strategie

Nutzen Sie Oracle Cloud als einen Baustein eines Multi-Cloud-Backups:

```
Primary (Google Drive) → Oracle Cloud (archive with free egress)
Primary (Google Drive) → Backblaze B2 (second archive)
```

### 5) NAS-zu-Oracle-Cloud-Backup

Sichern Sie Ihr Synology- oder QNAP-NAS auf Oracle Cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS to Oracle Cloud backup" class="img-large img-center" />

## Übertragungen verifizieren

Vergleichen Sie Ihre Quelle mit dem Oracle Cloud-Ziel:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Oracle Cloud transfer" class="img-large img-center" />

## Große Übertragungen überwachen

Verfolgen Sie den Upload-Fortschritt zu Oracle Cloud:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Oracle Cloud upload" class="img-large img-center" />

## Oracle Cloud-Speicher-Tiers

Verwenden Sie den passenden Tier für jeden Anwendungsfall:

| Tier | Am besten geeignet für | Preis |
|------|----------|-------|
| Standard | Häufig genutzte Daten | $26/TB/Monat |
| Infrequent Access | Monatlicher Zugriff | $10/TB/Monat |
| Archive | Jährlicher Zugriff | $3/TB/Monat |

Lifecycle-Richtlinien können Daten automatisch je nach Alter zwischen den Tiers verschieben.

## Erste Schritte

1. **Erstellen Sie ein Oracle Cloud-Konto** (10 GB kostenloser Speicher inklusive).
2. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
3. **Fügen Sie Oracle Cloud** als S3-kompatiblen Remote hinzu.
4. **Durchsuchen, übertragen, synchronisieren** Sie neben Ihren anderen Clouds.
5. **Planen Sie automatisierte Backups** für den hands-off Betrieb.

Oracles kostenloser Egress macht es zu einer besonders attraktiven Option für Daten, auf die Sie regelmäßig zugreifen.

---

**Weitere Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
