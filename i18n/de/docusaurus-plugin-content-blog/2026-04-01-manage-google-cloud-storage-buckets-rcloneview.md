---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "Google Cloud Storage Buckets mit RcloneView verwalten"
authors:
  - tayson
description: "Nutzen Sie RcloneView, um Google Cloud Storage (GCS) Buckets visuell zu durchsuchen, hochzuladen, zu synchronisieren und zu verwalten. Keine CLI erforderlich — vollständige GCS-Verwaltung über eine GUI."
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - RcloneView
  - google-cloud-storage
  - cloud-storage
  - guide
  - object-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Cloud Storage Buckets mit RcloneView verwalten

> Google Cloud Storage ist das Objektspeicher-Rückgrat von GCP — langlebig, schnell und eng in Googles Cloud-Plattform integriert. RcloneView bietet Ihnen einen visuellen Dateimanager für Ihre GCS-Buckets, ohne dass Sie `gsutil` oder die GCP-Konsole benötigen.

Google Cloud Storage (GCS) ist der bevorzugte Objektspeicher für Teams, die bereits die Google Cloud Platform nutzen — sei es für App-Daten, ML-Datensätze, BigQuery-Staging oder Medienauslieferung. Während `gsutil` und die GCP-Konsole funktionieren, sind sie für Massenoperationen mit Dateien und die tägliche Dateiverwaltung langsam. RcloneView bietet einen Zweifenster-Dateimanager für GCS-Buckets, mit dem Sie Dateien so durchsuchen, übertragen und synchronisieren können, wie Sie es von einem Desktop-Dateiexplorer gewohnt sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was RcloneView der GCS-Verwaltung hinzufügt

| Aufgabe | GCP-Konsole | gsutil CLI | RcloneView |
|------|------------|------------|------------|
| Buckets visuell durchsuchen | ✓ | ✗ | ✓ |
| Drag-and-Drop-Upload | Eingeschränkt | ✗ | ✓ |
| Synchronisation zu anderen Clouds | ✗ | ✗ | ✓ |
| Übertragung auf lokale Festplatte | Langsam | ✓ | ✓ |
| Synchronisationsjobs planen | ✗ | Manuell | ✓ |
| Echtzeit-Übertragungsüberwachung | ✗ | ✓ | ✓ |

## Google Cloud Storage mit RcloneView verbinden

### Schritt 1 — Ein Dienstkonto erstellen

In der GCP-Konsole:

1. Gehen Sie zu **IAM & Verwaltung → Dienstkonten**.
2. Erstellen Sie ein neues Dienstkonto mit der Rolle **Storage Admin** (oder **Storage Object Admin** für Lese-/Schreibzugriff ohne Bucket-Verwaltung).
3. Generieren Sie eine JSON-Schlüsseldatei und laden Sie diese herunter.

### Schritt 2 — Den GCS-Remote in RcloneView hinzufügen

Öffnen Sie RcloneView und klicken Sie auf **New Remote**:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. Wählen Sie **Google Cloud Storage** aus der Liste der Remote-Typen.
2. Verweisen Sie auf Ihre heruntergeladene **JSON-Dienstkonto-Schlüsseldatei**.
3. Geben Sie Ihre **GCP-Projekt-ID** ein.
4. Benennen Sie den Remote (z. B. `gcs-prod`) und speichern Sie.

Nach dem Verbinden erscheinen Ihre GCS-Buckets als Ordner oberster Ebene im Dateibrowser von RcloneView.

## GCS-Buckets durchsuchen und verwalten

Navigieren Sie in einen Bucket, um dessen Inhalt anzuzeigen. RcloneView stellt die Objektschlüssel-Hierarchie als Ordner dar, passend zu dem, was Sie in der GCP-Konsole sehen würden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

Über die Zweifenster-Oberfläche können Sie:
- **Dateien kopieren** zwischen GCS-Pfaden oder von/zu lokaler Festplatte
- **Objekte verschieben** innerhalb eines Buckets oder über Buckets hinweg
- **Objekte löschen** mit Bestätigung
- **Umbenennen**, indem Sie mit einem neuen Schlüssel kopieren und den alten löschen

## Dateien zu und von GCS synchronisieren

### Einen lokalen Datensatz zu GCS hochladen

1. Öffnen Sie einen **Job** in RcloneView.
2. Setzen Sie die Quelle auf Ihren lokalen Ordner (z. B. `D:\ml-dataset\`).
3. Setzen Sie das Ziel auf einen GCS-Pfad (z. B. `gcs-prod:my-ml-bucket/training-data/`).
4. Wählen Sie **Copy** (nur neue Dateien hinzufügen) oder **Sync** (exakt spiegeln).
5. Führen Sie den Job aus und überwachen Sie den Fortschritt live.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### Cloud-übergreifend: GCS zu einem anderen Anbieter

RcloneView überträgt direkt zwischen Clouds. Gängige GCS-Workflows:

- **GCS → AWS S3** — Buckets über Clouds hinweg für Redundanz replizieren
- **GCS → Backblaze B2** — Kalte Daten in günstigeren Speicher archivieren
- **GCS → Google Drive** — Verarbeitete Ausgaben mit nicht-technischen Stakeholdern teilen
- **GCS → lokales NAS** — Daten für die On-Premises-Verarbeitung abrufen

## GCS-Speicherklassen-Bewusstsein

GCS bietet mehrere Speicherklassen: Standard, Nearline, Coldline und Archive. Beim Einrichten eines Synchronisationsjobs in RcloneView können Sie rclone-Flags übergeben, um für neue Objekte eine bestimmte Speicherklasse festzulegen:

| Speicherklasse | Anwendungsfall | Mindestspeicherdauer |
|--------------|----------|--------------------------|
| Standard | Häufig abgerufene Daten | Keine |
| Nearline | Monatlicher Zugriff | 30 Tage |
| Coldline | Vierteljährlicher Zugriff | 90 Tage |
| Archive | Jährlicher Zugriff | 365 Tage |

Verwenden Sie das Feld **Custom flags** im Job-Editor von RcloneView, um `--gcs-storage-class COLDLINE` für Archivdaten zu übergeben.

## Regelmäßige GCS-Synchronisationen planen

Für wiederkehrende Backup-Jobs — nächtliche Uploads, tägliche Staging-Synchronisationen oder wöchentliche Archivierungsläufe:

1. Erstellen Sie einen Job mit Ihrer Quelle und dem GCS-Ziel.
2. Öffnen Sie die **Schedule**-Einstellungen.
3. Legen Sie die Häufigkeit fest (täglich, wöchentlich, benutzerdefinierter Cron).
4. Aktivieren Sie E-Mail- oder Benachrichtigungswarnungen bei Abschluss.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## Ordnervergleich zur Verifizierung

Nach großen Übertragungen können Sie mit dem **Folder Comparison** von RcloneView überprüfen, ob Ihre lokalen Dateien mit dem übereinstimmen, was in GCS liegt — durch Prüfung von Dateianzahl, Größen und Prüfsummen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

Fehlende oder nicht übereinstimmende Objekte werden hervorgehoben, sodass Sie nur die betroffenen Dateien erneut ausführen können.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Erstellen Sie ein Dienstkonto** in der GCP-Konsole mit Storage Object Admin-Berechtigungen.
3. **Laden Sie den JSON-Schlüssel herunter** und fügen Sie den GCS-Remote in RcloneView hinzu.
4. **Durchsuchen Sie Ihre Buckets** und beginnen Sie, Dateien visuell zu übertragen.

GCS ist eine leistungsstarke Infrastruktur — RcloneView macht die tägliche Dateiverwaltung so einfach wie ein lokales Laufwerk.

---

**Verwandte Anleitungen:**

- [Google Cloud Storage zu AWS S3 übertragen](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [Amazon S3 Buckets als lokale Laufwerke einbinden](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [S3, Wasabi und R2 mit RcloneView zentralisieren](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
