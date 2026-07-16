---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "Google Cloud Storage mit Wasabi synchronisieren — kosteneffizientes Backup mit RcloneView"
authors:
  - tayson
description: "Verschieben Sie Daten von Google Cloud Storage zu Wasabi S3-kompatiblem Speicher für erhebliche Kosteneinsparungen. RcloneView unterstützt beide Anbieter und automatisiert den Synchronisationsjob."
keywords:
  - Google Cloud Storage zu Wasabi Synchronisation
  - GCS Wasabi Migration RcloneView
  - Wasabi kosteneffizientes Cloud-Backup
  - Google Cloud Storage Backup-Alternative
  - S3-kompatible Cloud-Migration
  - Cloud-Speicher Kostenoptimierung
  - GCS Wasabi Übertragung
  - RcloneView Google Cloud Wasabi
tags:
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Cloud Storage mit Wasabi synchronisieren — kosteneffizientes Backup mit RcloneView

> Wasabi bietet Hot-Cloud-Speicher zu einem Bruchteil der Kosten pro GB von Google Cloud Storage — RcloneView verbindet beide und automatisiert die Migration oder laufende Synchronisation.

Google Cloud Storage ist tief in GCP-Workflows integriert, aber die Speicherkosten summieren sich bei großen Datenmengen schnell. Wasabi bietet S3-kompatiblen Hot-Speicher mit einem Flatrate-Preismodell pro TB und ohne Egress-Gebühren, was es als sekundäres Backup-Ziel oder als kostensparendes Migrationsziel attraktiv macht. RcloneView unterstützt beide Anbieter und übernimmt den Synchronisationsjob über eine einzige GUI-Oberfläche.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Cloud Storage verbinden

Google Cloud Storage (GCS) kann in RcloneView auf zwei Arten verbunden werden: über den nativen GCS-Anbieter oder die S3-kompatible Schnittstelle. Für die meisten Einrichtungen ist der native GCS-Anbieter unkompliziert. Öffnen Sie den **Remote Manager**, klicken Sie auf **New Remote** und wählen Sie **Google Cloud Storage**.

Sie müssen Ihre **Project Number** angeben (zu finden in der GCP Console unter Project Info). Die Authentifizierung erfolgt über einen Service-Account-JSON-Schlüssel oder OAuth. Für den Service-Account-Zugriff laden Sie den JSON-Schlüssel aus der GCP Console → IAM & Admin → Service Accounts herunter und geben den Pfad in der Remote-Konfiguration an. Für OAuth öffnet RcloneView Ihren Browser zur Autorisierung des Google-Kontos.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## Wasabi verbinden

Klicken Sie im **Remote Manager** auf **New Remote** und wählen Sie **S3 Compatible** (Wasabi ist S3-kompatibel). Füllen Sie aus:

- **Access Key ID**: aus der Wasabi-Konsole unter Access Keys
- **Secret Access Key**: der zugehörige Secret Key
- **Endpoint**: der Wasabi-Endpunkt für Ihre Region (z. B. `s3.us-east-1.wasabisys.com` oder `s3.eu-central-1.wasabisys.com`)

Speichern Sie den Remote. Bestätigen Sie, dass Ihre Wasabi-Buckets im File Explorer angezeigt werden, bevor Sie fortfahren.

## Den Synchronisationsjob einrichten

Gehen Sie zu **Jobs** und klicken Sie auf **New Job**. Legen Sie Google Cloud Storage als Quelle fest — wählen Sie den spezifischen Bucket oder Ordnerpfad aus. Legen Sie Wasabi als Ziel mit dem Zielbucket und -pfad fest.

Konfigurieren Sie in Schritt 2 des Job-Assistenten für eine zuverlässige, umfangreiche Synchronisation:

- **Transfers**: 8–16 (sowohl GCS als auch Wasabi handhaben hohe Nebenläufigkeit gut)
- **Checkers**: 8–16 (steuert, wie viele Gleichheitsprüfungen parallel laufen)
- **Checksum-Verifizierung**: für die Bestätigung der Datenintegrität aktivieren
- **Dry Run**: zunächst aktivieren, um den Umfang zu überprüfen

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## Laufende Synchronisation planen

Wenn GCS Ihr primärer Speicher bleibt und Wasabi als kosteneffiziente Backup-Ebene dient, planen Sie einen wiederkehrenden Synchronisationsjob. Öffnen Sie mit einer PLUS-Lizenz die Job-Einstellungen und fügen Sie in Schritt 3 einen Cron-Zeitplan hinzu — zum Beispiel `0 2 * * *` für nächtliche Backups um 2 Uhr.

Die inkrementelle Synchronisation von RcloneView bedeutet, dass jeder Lauf nach der ersten Migration nur geänderte oder neue Dateien überträgt. Der Tab **Job History** zeichnet jeden Lauf mit Dateianzahl, übertragenen Daten, Geschwindigkeit und Fehlern auf — das ergibt einen klaren Prüfpfad.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## Kostenüberlegungen

Das Preismodell von Wasabi hat keine Gebühren pro Anfrage und keine Egress-Gebühren (innerhalb der Nutzungsgrenzen), was es für große Datenmengen vorhersehbar macht. Die Migration von GCS zu Wasabi verursacht GCS-Egress-Kosten, doch bei Migrationen handelt es sich dabei um eine einmalige Ausgabe. Bei laufenden Backups stammen die Daten von Ihren Servern oder Anwendungs-Pipelines, sodass die Auswirkung des Egress von Ihrer Konfiguration abhängt.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Google Cloud Storage im **Remote Manager** mit Ihrer Project Number und dem Service-Account-JSON oder OAuth.
3. Verbinden Sie Wasabi mit Access Key, Secret Key und regionalem Endpoint.
4. Erstellen Sie einen Synchronisationsjob, führen Sie einen Dry Run aus, um den Umfang zu bestätigen, und planen Sie dann laufende automatisierte Backups.

Das Verschieben von GCS-Backups zu Wasabi führt typischerweise zu einer spürbaren Reduzierung der Speicherkosten, ohne Kompromisse bei der Zugänglichkeit.

---

**Verwandte Anleitungen:**

- [Scaleway Object Storage mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi zu Cloudflare R2 mit RcloneView migrieren](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
