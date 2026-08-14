---
slug: manage-liara-object-storage-cloud-sync-rcloneview
title: "Liara Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - robin
description: "Verbinden Sie S3-kompatiblen Liara Object Storage mit RcloneView für plattformübergreifendes Durchsuchen, Synchronisation, Backup und Mount in einer GUI."
keywords:
  - Liara RcloneView
  - Liara Object Storage
  - S3-kompatibler Object Storage
  - Liara Backup
  - Liara Synchronisation
  - Liara Speicher einbinden
  - Object-Storage-GUI
  - Liara Dateiverwaltung
  - Cloud-Speicher-Manager
  - Liara Bucket-Synchronisation
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Liara Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView

> Bringen Sie Liara-Buckets in dasselbe Explorer-Fenster wie jede andere Cloud, die Sie bereits verwalten.

Liara ist ein S3-kompatibler Object-Storage-Dienst, und RcloneView verbindet sich damit auf dieselbe Weise wie mit Amazon S3, Wasabi oder jedem anderen S3-Protokoll-Anbieter — über einen Access Key, einen Secret Key und einen Endpunkt. Sobald das Remote hinzugefügt ist, erscheinen Liara-Buckets als gewöhnlicher Tab im File Explorer, bereit zum Durchsuchen, Übertragen und Planen neben lokalen Laufwerken und anderen Cloud-Konten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Liara als neues Remote verbinden

Öffnen Sie den Remote Manager über den Remote-Tab und klicken Sie auf New Remote. Da Liara über das S3-Protokoll von rclone angesprochen wird, wählen Sie die S3-kompatible Option und geben Sie Access Key, Secret Key und die Endpunkt-URL aus Ihrer Liara-Konsole ein. Es ist kein OAuth-Browser-Schritt nötig — sobald die Testverbindung erfolgreich ist, erscheint der Bucket wie jedes andere Remote in Ihrer Tab-Leiste.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen S3-kompatiblen Remotes in RcloneView" class="img-large img-center" />

RcloneView bindet ein und synchronisiert 90+ Anbieter aus einem einzigen Fenster, unter Windows, macOS und Linux — Liara benötigt keinen separaten Client oder einen anderen Workflow als der Rest Ihrer Cloud-Konten.

## Buckets durchsuchen, übertragen und synchronisieren

Teilen Sie Ihren Explorer in zwei Panels auf — eines zeigt lokale Dateien oder eine andere Cloud, das andere Ihren Liara-Bucket — und ziehen Sie Dateien zwischen ihnen hin und her. Das Verschieben innerhalb desselben Remotes führt ein Move aus, während das Ziehen zwischen verschiedenen Remotes ein Copy ausführt, sodass Sie Backups zu Liara vorbereiten können, ohne den Quellordner zu verändern.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragen von Dateien zwischen einem lokalen Ordner und einem Liara-Bucket" class="img-large img-center" />

Für wiederkehrende Jobs verwenden Sie den 4-stufigen Sync-Assistenten: Wählen Sie Quelle und Ziel, passen Sie die Anzahl gleichzeitiger Übertragungen und Equality Checker unter Advanced Settings an, und wenden Sie dann vor dem Speichern Filter nach Dateityp, Größe oder Alter an. Führen Sie zunächst einen Dry Run aus, um genau zu sehen, was kopiert oder gelöscht wird, bevor Sie eine echte Synchronisation starten.

## Backups planen und Jobs überwachen

Sobald ein Sync-Job im Job Manager gespeichert ist, können PLUS-Lizenznutzer einen Zeitplan im Crontab-Stil anhängen, sodass Liara-Backups automatisch in einem festen Rhythmus laufen, mit einer Vorschau der kommenden Ausführungszeiten vor dem Speichern.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einrichten eines wiederkehrenden Backup-Zeitplans für einen Liara-Sync-Job" class="img-large img-center" />

Jeder Lauf — manuell oder geplant — wird in der Job History mit Status, Übertragungsgeschwindigkeit, Dateianzahl und Gesamtgröße erfasst, sodass Sie bestätigen können, dass ein Liara-Backup sauber abgeschlossen wurde, oder einen fehlgeschlagenen Lauf zum erneuten Versuch finden.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erzeugen Sie einen Access Key und Secret Key in Ihrer Liara-Konsole und notieren Sie die Endpunkt-URL.
3. Fügen Sie Liara als neues S3-kompatibles Remote im Remote Manager hinzu und testen Sie die Verbindung.
4. Führen Sie einen Dry Run durch, bevor Sie wiederkehrende Backups zu Ihrem Liara-Bucket planen.

Sobald Liara verbunden ist, steht Ihr Object Storage direkt neben jeder anderen Cloud, die Sie verwalten — ein Explorer, ein Satz von Sync-Jobs, kein separater Client zu pflegen.

---

**Verwandte Anleitungen:**

- [Petabox Storage verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-petabox-cloud-sync-backup-rcloneview)
- [Scaleway Object Storage verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi Storage verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
