---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "Tencent COS zu Amazon S3 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Tencent Cloud COS-Daten mit RcloneView zu Amazon S3 synchronisieren, um globale Verfügbarkeit, regionsübergreifende Redundanz und automatisierte Cloud-Backup-Jobs zu erreichen."
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - RcloneView
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Tencent COS zu Amazon S3 synchronisieren — Cloud-Backup mit RcloneView

> Unternehmen, die Tencent Cloud COS für Daten in der China-Region nutzen, können mit RcloneView diese Daten zu Amazon S3 synchronisieren, um globale Verfügbarkeit und regionsübergreifende Redundanz zu erreichen.

Tencent Cloud Object Storage (COS) wird häufig von Unternehmen mit Nutzern oder Betrieben in Festlandchina eingesetzt, wo es niedrige Latenz und die Einhaltung lokaler Datenvorschriften bietet. Für globale Verfügbarkeit oder Disaster Recovery müssen Organisationen diese Daten jedoch oft zu Amazon S3 replizieren, das eine breitere internationale Reichweite hat. RcloneView macht diese Cloud-übergreifende Synchronisation dank der S3-kompatiblen Remote-Unterstützung für beide Anbieter unkompliziert — alles zentral über eine grafische Oberfläche verwaltet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einrichten des Tencent COS Remote

Sowohl Tencent COS als auch Amazon S3 sind S3-kompatibel, sodass RcloneView beide über dasselbe S3-Provider-Framework verwaltet. Klicken Sie in RcloneView auf **New Remote** und wählen Sie **S3 Compatible Storage**. Wählen Sie im Anbieter-Dropdown **Tencent Cloud COS**. Geben Sie Ihre Tencent Cloud **SecretId** und **SecretKey** aus der Tencent Cloud Console sowie den passenden **Endpoint** für Ihre COS-Region ein — zum Beispiel `cos.ap-guangzhou.myqcloud.com` für Guangzhou.

Nach dem Speichern erscheint der Tencent COS Remote im Zwei-Fenster-Explorer. Sie können Ihre COS-Buckets und -Objekte durchsuchen, prüfen, ob der Inhalt zugänglich ist, und sich vor dem Einrichten des Synchronisationsjobs vergewissern, dass die Ordnerstruktur wie erwartet aussieht.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Amazon S3 als Ziel hinzufügen

Klicken Sie erneut auf **New Remote** und wählen Sie **Amazon S3**. Geben Sie Ihre AWS **Access Key ID** und **Secret Access Key** ein und legen Sie die AWS-Region fest, in der sich Ihr Ziel-Bucket befindet. Falls Ihr Ziel-Bucket noch nicht existiert, erstellen Sie ihn zunächst in der AWS S3 Console — RcloneView stellt während der Konfiguration eine Verbindung dazu her.

Sobald beide Remotes konfiguriert sind, öffnen Sie diese nebeneinander im Zwei-Fenster-Explorer, um Inhalte zu vergleichen und die Konnektivität zu überprüfen. Sie können eine Stichprobenprüfung durchführen, indem Sie vor dem Ausführen eines vollständigen Synchronisationsjobs einige Ordner auf beiden Seiten durchsuchen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## Erstellen und Planen des Synchronisationsjobs

Öffnen Sie den **Job Manager** und starten Sie den **Job Wizard**. Legen Sie den Tencent COS Bucket (oder ein bestimmtes Präfix) als Quelle und Ihren Amazon S3 Bucket als Ziel fest. Bevor Sie die eigentliche Synchronisation ausführen, nutzen Sie die **Dry-Run**-Option, um eine Vorschau der zu übertragenden Daten zu erhalten. Bei der anfänglichen Massenmigration eines bestehenden COS Buckets hilft der Dry Run dabei, die Übertragungsgröße abzuschätzen und mögliche Pfad- oder Kodierungsprobleme frühzeitig zu erkennen.

Sobald der Job erfolgreich ausgeführt wurde, sollten Sie erwägen, ihn nach einem wiederkehrenden Zeitplan einzurichten. Nutzer mit PLUS-Lizenz können automatische Synchronisationsjobs konfigurieren, die täglich oder wöchentlich laufen, sodass die S3-Kopie stets aktuell bleibt, sobald neue Daten in Tencent COS eintreffen. Das **Job History**-Panel protokolliert jeden Durchlauf und gibt Ihnen Einblick in Übertragungsvolumen und eventuelle Fehler.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen **Tencent Cloud COS** Remote über **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS** hinzu.
3. Fügen Sie einen **Amazon S3** Remote mit Ihren AWS-Zugangsdaten hinzu.
4. Verwenden Sie den **Job Wizard**, um einen Synchronisationsjob von COS zu S3 zu erstellen, und führen Sie zunächst einen Dry Run aus.
5. Planen Sie wiederkehrende Synchronisationsjobs mit einer PLUS-Lizenz für kontinuierliche, Cloud-übergreifende Replikation.

Die Synchronisation von Tencent COS zu Amazon S3 mit RcloneView ist eine der saubersten Möglichkeiten, globale Datenverfügbarkeit ausgehend von einem primären Speicher in der China-Region zu erreichen.

---

**Weiterführende Anleitungen:**

- [Tencent COS verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Amazon S3 verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
