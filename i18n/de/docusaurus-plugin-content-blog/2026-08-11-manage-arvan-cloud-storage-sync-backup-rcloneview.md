---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "Arvan Cloud Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - jay
description: "Verbinden Sie Arvan Cloud Object Storage mit RcloneView für S3-kompatibles Datei-Browsing, Synchronisation, Backup und Cloud-übergreifende Übertragungen."
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - S3-kompatibler Speicher
  - Object-Storage-GUI
  - Arvan Cloud Synchronisation
  - Arvan Cloud Backup
  - Cloud-Speicher-Manager
  - Arvan Cloud Dateiübertragung
  - Multi-Cloud-GUI
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

# Arvan Cloud Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Durchsuchen, synchronisieren und sichern Sie Arvan Cloud Object-Storage-Buckets zusammen mit allen anderen Remotes, die Sie verwalten — alles aus einem einzigen Desktop-Fenster heraus.

Der Object Storage von Arvan Cloud spricht das S3-Protokoll, wodurch er sich problemlos in jedes Tool einfügt, das auf Access Key + Secret Key + Endpoint-Zugangsdaten aufbaut — einschließlich RcloneView. Statt für diesen einen regional fokussierten Anbieter einen separaten S3-Client zu jonglieren, können Sie ihn als Remote hinzufügen und genau wie Amazon S3, Wasabi oder jeden anderen Bucket-basierten Speicher in Ihrem bestehenden Workflow behandeln.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Arvan Cloud als S3-kompatibles Remote verbinden

Arvan Cloud wird über das S3-Backend von rclone angesprochen, daher folgt die Einrichtung demselben Muster für die Eingabe von Zugangsdaten wie bei jedem anderen S3-kompatiblen Dienst, den RcloneView unterstützt: Access Key, Secret Key und ein benutzerdefinierter Endpoint, der auf den Object-Storage-Dienst von Arvan verweist. Ein OAuth-Browser-Flow gibt es hier nicht — Sie generieren das Schlüsselpaar in Ihrer Arvan-Cloud-Konsole und fügen es direkt in den Assistenten für neue Remotes ein.

Sobald das Remote hinzugefügt ist, verhält es sich wie jedes andere Panel im Explorer: Navigation über den Ordnerbaum, Miniaturansichten für bildlastige Buckets und dieselben Rechtsklick-Dateioperationen (Kopieren, Verschieben, Umbenennen, Größe ermitteln), die Sie auch auf der lokalen Festplatte verwenden. RcloneView mountet UND synchronisiert 90+ Anbieter aus einem einzigen Fenster heraus, unter Windows, macOS und Linux — so reiht sich Arvan Cloud neben Ihre anderen Clouds ein, statt in einer eigenen isolierten App zu leben.

<img src="/support/images/en/blog/new-remote.png" alt="Arvan Cloud als neues S3-kompatibles Remote in RcloneView hinzufügen" class="img-large img-center" />

Für Teams, die bereits auf S3-Tools standardisiert sind, bedeutet das: Bucket-Richtlinien, Präfixe und Ordnerstrukturen lassen sich direkt übertragen — am Object-Storage-Modell selbst ändert sich nichts, nur weil sich der Anbieter ändert.

## Arvan-Cloud-Buckets synchronisieren und sichern

Sobald das Remote verbunden ist, verwenden Sie den Synchronisationsassistenten, um einen einseitigen Job zu konfigurieren, der einen lokalen Ordner — oder ein anderes Cloud-Remote — in einen Arvan-Cloud-Bucket spiegelt. Legen Sie die Anzahl gleichzeitiger Übertragungen und der Gleichheitsprüfer im Schritt „Erweiterte Einstellungen" fest, und nutzen Sie Filter, um Dateitypen oder Ordner auszuschließen, die nicht zum Übertragungsvolumen zählen sollen, etwa `.iso`-Images oder verschachtelte `.git`-Verzeichnisse.

Mit Dry Run können Sie vor dem Ausführen des Jobs genau einsehen, welche Dateien kopiert oder gelöscht werden — besonders wichtig bei der ersten Synchronisation mit einem bestehenden Bucket, bei dem Sie nicht sicher sind, was dort bereits vorhanden ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfiguration eines Synchronisationsjobs in einen Arvan-Cloud-Storage-Bucket in RcloneView" class="img-large img-center" />

## Wiederkehrende Backups planen

Sobald ein Synchronisationsjob validiert ist, speichern Sie ihn im Job Manager und hängen bei einer PLUS-Lizenz einen Zeitplan im Crontab-Stil an, sodass Backups zu Arvan Cloud automatisch laufen, ohne dass Sie sie manuell auslösen müssen. Job History protokolliert danach Dauer, Übertragungsgeschwindigkeit, Dateianzahl und Abschlussstatus jedes Laufs — ein Nachweis, den Sie prüfen können, um sicherzustellen, dass geplante Backups tatsächlich abgeschlossen wurden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden Backup-Jobs zu Arvan Cloud Storage" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generieren Sie einen Access Key und Secret Key in Ihrer Arvan-Cloud-Object-Storage-Konsole.
3. Erstellen Sie in RcloneView mit diesen Zugangsdaten und dem Endpoint von Arvan Cloud ein neues S3-kompatibles Remote.
4. Führen Sie zunächst einen Dry Run aus und speichern Sie anschließend einen geplanten Synchronisationsjob für laufende Backups.

Arvan Cloud einfach als weiteren S3-Endpoint zu behandeln bedeutet ein spezialisiertes Tool weniger, das Sie in Ihrem Cloud-Speicher-Stack pflegen müssen.

---

**Verwandte Anleitungen:**

- [Wasabi Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Selectel Storage verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [S3 Access Denied beheben — Berechtigungsfehler mit RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
