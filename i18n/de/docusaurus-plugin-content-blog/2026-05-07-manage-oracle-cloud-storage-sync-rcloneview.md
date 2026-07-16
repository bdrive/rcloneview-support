---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Oracle Cloud Object Storage verwalten — Synchronisation und Backup mit RcloneView"
authors:
  - tayson
description: "Verbinden Sie Oracle Cloud Object Storage mit RcloneView über S3-kompatible Zugriffsschlüssel, durchsuchen Sie Buckets und führen Sie automatisierte Synchronisations- und Backup-Jobs ganz einfach aus."
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-kompatibel
  - Cloud-Synchronisation
  - Cloud-Backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - oracle-cloud
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Oracle Cloud Object Storage verwalten — Synchronisation und Backup mit RcloneView

> Oracle Cloud Object Storage bietet wettbewerbsfähige Preise und starke Enterprise-SLAs — RcloneView bietet Ihnen eine einfache grafische Oberfläche zur Verwaltung, Synchronisation und Sicherung Ihrer OCI-Buckets.

Oracle Cloud Infrastructure (OCI) Object Storage ist ein vollständig S3-kompatibler Objektspeicher mit einer großzügigen Always-Free-Stufe und Haltbarkeitsgarantien auf Enterprise-Niveau. Teams, die Workloads auf OCI betreiben oder eine kostengünstige Alternative zu AWS S3 suchen, werden Oracle Cloud Object Storage als attraktive Option empfinden. RcloneView verbindet sich damit über die S3-kompatible API und bietet Ihnen eine voll funktionsfähige GUI für Bucket-Verwaltung, Dateiübertragungen und automatisierte Synchronisationsjobs — ganz ohne CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten von Oracle Cloud Object Storage in RcloneView

Um RcloneView mit Oracle Cloud Object Storage zu verbinden, benötigen Sie drei Dinge: einen **Customer Access Key** (nicht Ihren OCI-API-Schlüssel), den **Namespace** und den **regionalen Endpunkt**. Erstellen Sie den Zugriffsschlüssel in der OCI-Konsole unter Ihrem Benutzerprofil > Customer Secret Keys. Das Endpunktformat lautet `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com` — zum Beispiel `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`.

Klicken Sie in RcloneView auf **New Remote**, wählen Sie **S3 Compatible Storage** und wählen Sie **Oracle Cloud Infrastructure Object Storage** aus dem Anbieter-Dropdown. Fügen Sie Ihre Access Key ID, den Secret Key und den regionalen Endpunkt ein. Setzen Sie das Region-Feld entsprechend Ihrem OCI-Regionscode. Klicken Sie auf **Save**, und RcloneView verbindet sich sofort und listet Ihre Buckets auf.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## Buckets durchsuchen und Dateien verwalten

Sobald die Verbindung hergestellt ist, verhält sich Oracle Cloud Object Storage wie jeder andere Remote im Dual-Pane-Explorer von RcloneView. Navigieren Sie durch Bucket-Namespaces und Objekt-Präfixe, laden Sie Dateien per Drag & Drop hoch und laden Sie Objekte auf Ihren lokalen Rechner herunter. RcloneView zeigt Live-Übertragungsmetriken an, sodass Sie große Uploads während des Fortschritts überwachen können.

Wenn Sie mehrere OCI-Regionen für geografische Redundanz nutzen, fügen Sie jeden regionalen Endpunkt als separaten benannten Remote hinzu. Sie können diese dann nebeneinander im Explorer öffnen und Objekte direkt zwischen den Regionen per Cloud-zu-Cloud-Übertragung kopieren — kein lokaler Download erforderlich.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## Synchronisationsjobs für Backups erstellen

Der **Job Wizard** von RcloneView führt Sie in vier Schritten durch das Erstellen eines Synchronisationsjobs zu oder von Oracle Cloud Object Storage: Quelle wählen, Ziel wählen, Optionen konfigurieren und vor dem Ausführen überprüfen. Nutzen Sie zuerst den **Dry-Run**-Modus, um genau zu sehen, welche Dateien übertragen oder gelöscht würden — dies ist besonders wichtig bei der Synchronisation mit OCI, da Synchronisationsvorgänge Dateien im Ziel entfernen können, die an der Quelle nicht mehr existieren.

Das **Job History**-Panel protokolliert jeden Job-Lauf mit Zeitstempeln und Übertragungsstatistiken und bietet Ihnen so einen Audit-Trail für Compliance-Zwecke. Nutzer mit PLUS-Lizenz können jedem Job einen **Zeitplan** hinzufügen, sodass Backups automatisch ausgeführt werden — zum Beispiel jede Nacht um 2 Uhr — ganz ohne manuellen Eingriff.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen **Customer Secret Key** in der OCI-Konsole und notieren Sie sich Ihren Namespace und Ihre Region.
3. Klicken Sie in RcloneView auf **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**.
4. Geben Sie Ihre Access Key ID, den Secret Key und die regionale Endpunkt-URL ein.
5. Durchsuchen Sie Ihre Buckets und verwenden Sie den **Job Wizard**, um Ihren ersten Synchronisations- oder Backup-Job zu erstellen.

Die S3-Kompatibilität von Oracle Cloud Object Storage macht es zu einer nahtlosen Ergänzung jeder über RcloneView verwalteten Multi-Cloud-Strategie.

---

**Verwandte Anleitungen:**

- [Amazon S3 verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [IDrive e2 verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
