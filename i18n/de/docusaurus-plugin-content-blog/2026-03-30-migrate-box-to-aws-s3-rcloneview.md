---
slug: migrate-box-to-aws-s3-rcloneview
title: "Box zu AWS S3 migrieren — Dateien übertragen mit RcloneView"
authors:
  - tayson
description: "Migrieren Sie Dateien von Box zu AWS S3 mit RcloneView. Übertragen Sie Unternehmensinhalte in skalierbaren S3-Speicher mit Prüfsummenverifizierung und geplanten Jobs."
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box zu AWS S3 migrieren — Dateien übertragen mit RcloneView

> Wenn Sie die Inhalte Ihres Unternehmens von Box zu AWS S3 verschieben, erschließen Sie sich programmierbaren Speicher in großem Maßstab — und RcloneView übernimmt die eigentliche Arbeit.

Box zeichnet sich im Enterprise-Content-Management durch Metadaten, Workflows und Governance-Funktionen aus. Doch wenn sich Ihre Architektur in Richtung AWS-nativer Dienste verschiebt — Lambda-Funktionen, die Uploads verarbeiten, Athena-Abfragen auf Data Lakes oder CloudFront zur Auslieferung von Assets —, entfällt durch die Speicherung von Dateien in S3 die Middleware, die sonst zwischen Box und Ihrem AWS-Stack vermitteln müsste. RcloneView migriert Dateien von Box in S3-Buckets über eine visuelle Oberfläche, wobei Ordnerstrukturen erhalten bleiben und jede Übertragung verifiziert wird.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von Box zu AWS S3 wechseln

AWS S3 bietet praktisch unbegrenzten Speicherplatz mit granularer Preisgestaltung über sechs Speicherklassen — von S3 Standard für häufig genutzte Daten bis hin zu S3 Glacier Deep Archive für 0,00099 $ pro GB und Monat für die Langzeitarchivierung. Box berechnet nutzerbasierte Lizenzgebühren, die bei Enterprise-Plänen 20 $ pro Nutzer und Monat übersteigen können, und der Speicherplatz wird gepoolt statt individuell zugewiesen.

Für Entwicklungsteams ist das S3-Ökosystem konkurrenzlos. Ereignisbenachrichtigungen lösen Lambda-Funktionen aus, S3 Select fragt Daten direkt vor Ort ab, Versionierungs- und Replikationsregeln schützen vor Datenverlust, und IAM-Richtlinien ermöglichen eine feingranulare Zugriffskontrolle. Die API von Box ist leistungsfähig, aber auf Content-Zusammenarbeit ausgelegt, nicht auf Speicheroperationen auf Infrastrukturebene. Eine Migration zu S3 richtet Ihre Dateispeicherung an der übrigen AWS-Infrastruktur aus.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Box- und S3-Remotes konfigurieren

Fügen Sie in RcloneView ein Box-Remote hinzu, indem Sie "Box" als Anbietertyp auswählen. Der OAuth-Ablauf öffnet Ihren Browser zur Box-Authentifizierung. Melden Sie sich mit Ihren Box-Kontodaten an und autorisieren Sie RcloneView. Das Remote verbindet sich mit Ihrem Box-Stammordner, einschließlich aller mit Ihnen geteilten Ordner, deren Eigentümer Sie sind.

Für AWS S3 erstellen Sie ein neues Remote und wählen "Amazon S3". Geben Sie Ihre AWS Access Key ID und den Secret Access Key ein, oder verwenden Sie eine IAM-Rolle, falls RcloneView auf einer EC2-Instanz läuft. Wählen Sie Ihre Zielregion und geben Sie den Bucket-Namen an. RcloneView validiert die Anmeldedaten und bestätigt den Zugriff auf den Bucket. Falls Sie einen neuen Bucket erstellen müssen, tun Sie dies zunächst in der AWS-Konsole mit Ihrer bevorzugten Region sowie den gewünschten Verschlüsselungs- und Versionierungseinstellungen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Die Migration durchführen

Nutzen Sie den zweigeteilten Explorer, um Box auf der einen und S3 auf der anderen Seite zu durchsuchen. Wählen Sie die Box-Ordner aus, die Sie migrieren möchten — ganze Abteilungsverzeichnisse, Projektarchive oder bestimmte Inhaltsbäume. Navigieren Sie auf der anderen Seite zum Ziel-S3-Präfix.

Erstellen Sie für eine gesteuerte Migration einen Copy-Job im Job Manager. Legen Sie Box als Quelle und S3 als Ziel fest. Verwenden Sie den Modus "Copy", um Dateien zu übertragen, ohne sie aus Box zu entfernen — das gibt Ihnen einen Rollback-Pfad. Die API von Box verwendet SHA-1-Prüfsummen, während S3 MD5- und ETag-Hashes speichert — RcloneView führt den Vergleich standardmäßig anhand von Dateigröße und Änderungszeit durch, mit optional verfügbarer Prüfsummenverifizierung.

Box erzwingt API-Ratenbegrenzungen (etwa 10 API-Aufrufe pro Sekunde bei Enterprise-Konten). RcloneView respektiert diese Grenzen mit automatischen Wiederholungsversuchen und exponentiellem Backoff. Für große Migrationen mit Hunderttausenden von Dateien führen Sie den Job über mehrere Tage hinweg in geplanten Zeitfenstern aus.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## Validierung und Umstellung nach der Migration

Nach Abschluss der Übertragung validieren Sie die Migration mit der Vergleichsfunktion von RcloneView. Öffnen Sie beide Remotes nebeneinander und führen Sie einen Ordnervergleich durch, um Dateianzahl, Größen und Struktur zu prüfen. Überprüfen Sie den Job-Verlauf auf übersprungene oder fehlerhafte Dateien und führen Sie den Job erneut aus, um diese zu erfassen.

Legen Sie die Speicherklasse des S3-Buckets basierend auf den Zugriffsmustern fest. Häufig genutzte Projektdateien gehören in S3 Standard, während archivierte Inhalte über Lifecycle-Richtlinien in S3 Intelligent-Tiering oder Glacier verschoben werden können. Halten Sie das Box-Remote in RcloneView während der Übergangsphase aktiv und führen Sie inkrementelle Synchronisationsjobs aus, bis alle Nutzer ihre Workflows auf S3 umgestellt haben.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authentifizieren Sie Ihr Box-Konto per OAuth beim Erstellen des Box-Remotes.
3. Fügen Sie Ihr AWS-S3-Remote mit IAM-Anmeldedaten hinzu und wählen Sie den Ziel-Bucket sowie die Region.
4. Erstellen Sie einen Copy-Job von Box zu S3, konfigurieren Sie die Behandlung von Ratenbegrenzungen und planen Sie ihn bei großen Datenmengen über mehrere Tage.

Sobald alle Inhalte in S3 verifiziert sind, stellen Sie Ihre Anwendungen um und deaktivieren Sie den Box-Speicher, sobald Ihr Team die Umstellung abgeschlossen hat.

---

**Verwandte Anleitungen:**

- [Box zu SharePoint und OneDrive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Box zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Box-Speicher als Netzlaufwerk einbinden mit RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
