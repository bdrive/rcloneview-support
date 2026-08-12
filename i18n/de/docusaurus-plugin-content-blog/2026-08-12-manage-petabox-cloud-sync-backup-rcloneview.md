---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Petabox Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - kai
description: "Verbinden Sie den S3-kompatiblen Objektspeicher Petabox mit RcloneView für plattformübergreifendes Durchsuchen, Synchronisieren, Sichern und Einbinden in einer GUI."
keywords:
  - Petabox RcloneView
  - Petabox Cloud-Speicher
  - S3-kompatibler Objektspeicher
  - Petabox Backup
  - Petabox Synchronisation
  - Petabox einbinden
  - Objektspeicher GUI
  - Petabox Dateiverwaltung
  - Cloud-Speicher-Manager
  - Petabox Bucket-Synchronisation
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

# Petabox Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Durchsuchen, synchronisieren und sichern Sie Petabox-Buckets zusammen mit jeder anderen Cloud, die Sie nutzen — aus einem einzigen Desktop-Fenster heraus.

Petabox ist ein S3-kompatibler Objektspeicherdienst, was bedeutet, dass sich RcloneView auf dieselbe Weise damit verbinden kann wie mit Amazon S3, Wasabi oder jedem anderen S3-Protokoll-Anbieter: mit einer Access Key ID, einem Secret Access Key und einem Endpunkt. Nach der Verbindung erscheinen Petabox-Buckets als regulärer Remote im Datei-Explorer, bereit zum Durchsuchen, Übertragen und Planen wie jeder lokale Ordner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Petabox als neuen Remote verbinden

Öffnen Sie den Remote Manager über den Remote-Tab und wählen Sie New Remote. Da auf Petabox über das S3-Protokoll von rclone zugegriffen wird, wählen Sie die S3-kompatible Option und geben Sie Ihre Access Key ID, den Secret Access Key sowie die von Ihrem Konto bereitgestellte Petabox-Endpunkt-URL ein. Es ist kein OAuth-Browser-Ablauf abzuschließen — die Zugangsdaten allein authentifizieren die Verbindung, und der Remote erscheint in Ihrer Tab-Leiste, sobald die Testverbindung erfolgreich ist.

<img src="/support/images/en/blog/new-remote.png" alt="Hinzufügen eines neuen S3-kompatiblen Remotes in RcloneView" class="img-large img-center" />

Anders als reine Mount-Tools bietet RcloneView auch Synchronisation und Ordnervergleich mit der FREE-Lizenz — Petabox-Buckets erhalten dieselben Synchronisations-, Vergleichs- und Job-History-Funktionen wie jeder andere unterstützte Anbieter, ohne dass ein Upgrade zum Einstieg nötig ist.

## Buckets durchsuchen, übertragen und synchronisieren

Nach dem Hinzufügen von Petabox teilen Sie Ihren Explorer in zwei Panels — eines zeigt lokale Ordner oder eine andere Cloud, das andere Ihren Petabox-Bucket — und ziehen Dateien zwischen ihnen. Das Verschieben von Dateien innerhalb desselben Remotes führt eine Verschiebung aus; das Ziehen zwischen verschiedenen Remotes führt eine Kopie aus, sodass Sie eine Petabox-Sicherung vorbereiten können, ohne die Quelldateien zu berühren.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Übertragen von Dateien zwischen einem lokalen Ordner und einem Petabox-Bucket" class="img-large img-center" />

Für wiederkehrende Übertragungen verwenden Sie den 4-Schritte-Synchronisationsassistenten: Wählen Sie Quelle und Ziel, legen Sie die Anzahl gleichzeitiger Übertragungen und Gleichheitsprüfer unter Advanced Settings fest und wenden Sie dann Filter nach Dateityp, Größe oder Alter an, bevor Sie den Job speichern. Führen Sie zunächst einen Dry Run aus, um genau zu sehen, was kopiert oder gelöscht wird, bevor Sie eine echte Übertragung starten.

## Backups planen und Jobs überwachen

Sobald ein Synchronisationsjob im Job Manager gespeichert ist, können Nutzer mit PLUS-Lizenz einen Zeitplan im Crontab-Stil hinzufügen, damit Petabox-Backups automatisch nach ihrem eigenen Rhythmus ablaufen, mit einer Vorschau der bevorstehenden Ausführungszeiten vor dem Speichern.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Einrichten eines wiederkehrenden Backup-Zeitplans für einen Petabox-Synchronisationsjob" class="img-large img-center" />

Jeder Durchlauf — geplant oder manuell — wird in Job History mit Status, Übertragungsgeschwindigkeit, Dateianzahl und Gesamtgröße protokolliert, sodass Sie bestätigen können, dass ein Petabox-Backup sauber abgeschlossen wurde, oder einen fehlgeschlagenen Durchlauf zur Wiederholung erkennen können.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erzeugen Sie eine Access Key ID und einen Secret Access Key in Ihrem Petabox-Konto und notieren Sie sich die Endpunkt-URL.
3. Fügen Sie Petabox als neuen S3-kompatiblen Remote im Remote Manager hinzu und testen Sie die Verbindung.
4. Führen Sie eine Dry-Run-Synchronisation aus, bevor Sie wiederkehrende Backups zu Ihrem Petabox-Bucket planen.

Mit angebundenem Petabox sitzt Ihr Objektspeicher direkt neben jeder anderen Cloud, die Sie verwalten — kein separater Client, kein Fensterwechsel.

---

**Verwandte Anleitungen:**

- [Storj-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [IDrive E2-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Wasabi-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
