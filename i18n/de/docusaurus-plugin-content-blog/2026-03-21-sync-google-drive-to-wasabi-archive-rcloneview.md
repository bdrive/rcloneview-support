---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "Google Drive mit Wasabi synchronisieren — Erschwingliches Archiv und Backup mit RcloneView"
authors:
  - tayson
description: "Archivieren Sie Ihr Google Drive auf Wasabi Hot-Cloud-Speicher für zuverlässige Backups zu einem Bruchteil der AWS-S3-Kosten mit RcloneView."
keywords:
  - Google Drive Backup
  - Wasabi Cloud-Speicher
  - erschwingliches Cloud-Archiv
  - Backup auf Wasabi
  - RcloneView
  - Cloud-zu-Cloud-Synchronisation
  - Datenarchivierung
  - kosteneffizientes Backup
  - Google Drive Archiv
  - Hot Storage
tags:
  - google-drive
  - wasabi
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Wasabi synchronisieren — Erschwingliches Archiv und Backup mit RcloneView

> Google Drive ist praktisch für aktive Zusammenarbeit, aber die Kosten für die Langzeitspeicherung summieren sich. Wasabi bietet S3-kompatiblen Hot Storage zum halben Preis — perfekt, um Ihr Google Drive mit RcloneView zu archivieren.

Google Drive eignet sich hervorragend für die Teamzusammenarbeit, aber unbegrenzter Speicherplatz bringt Komplexität bei der Aufbewahrung mit sich. Wasabi bietet Hot-Cloud-Speicher mit vorhersehbaren Preisen und ohne Egress-Gebühren. RcloneView automatisiert das Archivieren abgeschlossener Projekte, älterer Dateien und kalter Daten auf Wasabi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive und Wasabi verbinden

Das Einrichten beider Remotes in RcloneView ist schnell und sicher.

**Google Drive:**
1. Klicken Sie auf **Add Remote** → Wählen Sie **Google Drive**
2. Autorisieren Sie RcloneView über OAuth
3. Gewähren Sie Zugriffsrechte für Ordner/Dateien
4. Überprüfen Sie die Verbindung

**Wasabi:**
1. Klicken Sie auf **Add Remote** → Wählen Sie **Wasabi**
2. Geben Sie Ihren Wasabi Access Key und Secret Key ein
3. Wählen Sie Ihren Bucket und Ihre Region
4. Testen Sie die Konnektivität

![New Remote Setup](/images/en/blog/new-remote.png)

## Google Drive auf Wasabi Hot Storage archivieren

Erstellen Sie einen einmaligen oder wiederkehrenden Sync-Job, um Ihre Dateien zu verschieben. Wasabis Hot Storage ist sofort zugänglich — keine Wiederherstellungsverzögerungen wie bei Glacier.

**Archivierungsszenarien:**
- **Projektabschluss**: Archivieren Sie Kundenlieferungen nach Projektende
- **Speicheroptimierung**: Verschieben Sie Dateien, die älter als 90 Tage sind, auf Wasabi
- **Compliance-Backup**: Bewahren Sie durchsuchbare Kopien von Geschäftsunterlagen auf

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## Übertragungsleistung in Echtzeit überwachen

RcloneView zeigt Live-Metriken für Ihren Archivierungsjob an — Übertragungsgeschwindigkeit, verarbeitete Dateien und verbleibende Dauer.

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie ein Wasabi-Konto unter [wasabi.com](https://wasabi.com/).
3. Fügen Sie Google Drive als Remote mit OAuth-Authentifizierung hinzu.
4. Konfigurieren Sie Ihren Wasabi-Bucket als Remote.
5. Erstellen Sie einen Sync- oder Kopierjob und beginnen Sie mit der Archivierung.
6. Planen Sie regelmäßige Backups, um Archive aktuell zu halten.

Erschwinglich archivieren, sofort abrufen — Wasabi und RcloneView machen es einfach.

---

**Verwandte Anleitungen:**

- [Google Drive mit Backblaze B2 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Google Drive auf S3 Glacier archivieren mit RcloneView](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [Cloud-Speicher-Egress-Gebühren — Wie man sie mit RcloneView vermeidet](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
