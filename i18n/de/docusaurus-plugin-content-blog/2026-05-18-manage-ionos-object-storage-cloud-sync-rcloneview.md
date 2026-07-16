---
slug: manage-ionos-object-storage-cloud-sync-rcloneview
title: "IONOS Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - jay
description: "Erfahren Sie, wie Sie IONOS Object Storage mit RcloneView verbinden und Dateien über eine vollständig visuelle, S3-kompatible Oberfläche synchronisieren, sichern oder übertragen. Keine CLI erforderlich."
keywords:
  - IONOS Object Storage
  - IONOS cloud sync
  - IONOS backup files
  - RcloneView IONOS
  - S3-compatible cloud storage Europe
  - European cloud storage GDPR
  - IONOS rclone GUI
  - sync IONOS to Google Drive
  - cloud backup IONOS
  - manage IONOS files RcloneView
tags:
  - s3-compatible
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IONOS Object Storage verwalten — Dateien mit RcloneView synchronisieren und sichern

> Verbinden Sie IONOS Object Storage mit RcloneView und verwalten Sie Ihre europäischen Cloud-Dateien visuell — synchronisieren, sichern und übertragen, ohne die Kommandozeile zu berühren.

IONOS Object Storage ist ein S3-kompatibler Cloud-Speicherdienst von IONOS SE, einem der größten europäischen Cloud-Infrastrukturanbieter. Teams mit DSGVO-sensiblen Workflows oder dem Bedarf an europäischer Datenresidenz setzen zunehmend auf IONOS als zuverlässigen, kosteneffizienten Object Store. Mit RcloneView können Sie sich mit IONOS verbinden, Dateien durchsuchen, synchronisieren und Backups automatisieren — direkt über eine übersichtliche Desktop-GUI, ganz ohne rclone-Befehle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## IONOS Object Storage mit RcloneView verbinden

IONOS Object Storage nutzt die S3-kompatible API und akzeptiert somit dieselbe Konfiguration aus Access Key, Secret Key und Endpoint wie Amazon S3. Jedes Tool, das S3 unterstützt — einschließlich rclone — kann ohne anbieterspezifische Adapter auf IONOS-Buckets lesend und schreibend zugreifen.

Um IONOS als Remote hinzuzufügen, öffnen Sie den **Remote-Tab** und klicken Sie auf **New Remote**. Wählen Sie **Amazon S3** als Anbietertyp und geben Sie anschließend Ihre IONOS Access Key ID, den Secret Access Key sowie die regionale Endpoint-URL aus dem IONOS-Kontrollpanel ein. Nach dem Speichern erscheinen Ihre Buckets sofort im zweigeteilten Datei-Explorer. Sie können Ordner durchsuchen, Bilder in der Miniaturansicht anzeigen und per Rechtsklick auf jede Datei kopieren, verschieben, umbenennen oder einen öffentlichen Link erzeugen — alles in einer vertrauten Desktop-Oberfläche.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IONOS Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

## IONOS mit anderen Cloud-Anbietern synchronisieren

Die Cloud-zu-Cloud-Übertragungs-Engine von RcloneView ermöglicht es, Daten zwischen IONOS und jedem anderen Remote zu verschieben, ohne sie zuvor auf die lokale Festplatte herunterzuladen. Ein Rechtsteam, das DSGVO-regulierte Dokumente auf IONOS archiviert, kann dieses Archiv gleichzeitig auf ein verschlüsseltes Crypt-Remote bei Backblaze B2 als zusätzliches Offsite-Backup synchronisieren — einmal konfiguriert und im selben Job-Manager-Fenster ausgeführt.

RcloneView unterstützt außerdem 1:N-Synchronisation: Eine IONOS-Quelle kann gleichzeitig auf mehrere Ziele verteilt werden. Eine Medienagentur mit 500 GB an Kampagnen-Assets kann ihren IONOS-Bucket in einem einzigen geplanten Job sowohl auf Wasabi als auch auf ein lokales NAS spiegeln. Die Checksummen-Option des Sync-Assistenten sorgt für byteidentische Kopien zwischen IONOS und jedem Ziel und erkennt Beschädigungen, die ein reiner Dateigrößenvergleich übersehen würde.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from IONOS Object Storage to another provider in RcloneView" class="img-large img-center" />

## Geplante Backups zu IONOS automatisieren

Mit einer **RcloneView PLUS**-Lizenz können Sie jedem Sync-Job einen Zeitplan im Crontab-Stil zuweisen. Ein nächtliches Backup von einem lokalen Ordner zu einem IONOS-Bucket wird so zu einer vollständig automatisierten Routine — einmal konfiguriert, führt RcloneView den Job zur festgelegten Zeit im Hintergrund aus, selbst wenn das Hauptfenster geschlossen ist.

Der Zeitplan-Assistent akzeptiert Felder für Minute, Stunde, Wochentag und Monat und unterstützt Listen (1,3,5), Bereiche (9-17) und Schrittintervalle (*/2). Nutzen Sie die integrierte Schaltfläche **Simulate schedule**, um die nächsten Ausführungszeiten vor dem Speichern zu überprüfen. Nach jedem Lauf zeichnet der Tab **Job History** Startzeit, Dauer, Dateianzahl, Übertragungsgröße und Status auf — für eine übersichtliche Nachverfolgung ohne zusätzliches Monitoring-Tool.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated IONOS cloud backup jobs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote tab > New Remote**, wählen Sie **Amazon S3** als Anbietertyp und geben Sie Ihre IONOS Access Key ID, den Secret Access Key sowie den Endpoint aus dem IONOS-Kontrollpanel ein.
3. Durchsuchen Sie Ihre IONOS-Buckets im Datei-Explorer und überprüfen Sie den Zugriff.
4. Erstellen Sie einen Sync- oder Backup-Job im **Job Manager** — aktivieren Sie optional die Zeitplanung (PLUS) für automatisierte nächtliche Läufe.

IONOS Object Storage in Kombination mit RcloneView bietet europäischen Teams ein DSGVO-freundliches, S3-kompatibles Speicher-Backend mit der Benutzerfreundlichkeit eines nativen Desktop-Dateimanagers.

---

**Weiterführende Anleitungen:**

- [Wasabi Object Storage mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [IDrive E2 Cloud Storage mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Amazon S3, Wasabi und Cloudflare R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
