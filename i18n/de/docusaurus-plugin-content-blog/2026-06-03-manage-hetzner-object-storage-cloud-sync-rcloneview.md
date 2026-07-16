---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Hetzner Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - kai
description: "Erfahren Sie, wie Sie Hetzner Object Storage mit RcloneView verbinden, um automatisierte Synchronisation und Backups durchzuführen. Verwalten Sie S3-kompatible Buckets mit einer einfachen GUI — ohne CLI."
keywords:
  - Hetzner Object Storage
  - Hetzner Cloud-Backup
  - RcloneView Hetzner
  - S3-kompatibler Cloud-Speicher
  - Hetzner Dateien synchronisieren
  - Cloud-Backup GUI
  - Hetzner rclone
  - Object-Storage-Backup
  - Europäischer Cloud-Speicher
  - Hetzner Bucket-Verwaltung
tags:
  - hetzner
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Object Storage verwalten — Dateien synchronisieren und sichern mit RcloneView

> Verbinden Sie Hetzner Object Storage mit RcloneView und automatisieren Sie Ihre Backup-Jobs, ohne einen einzigen CLI-Befehl zu schreiben.

Hetzner Object Storage ist ein S3-kompatibler Cloud-Speicherdienst, der attraktive Preise für Teams bietet, die zuverlässigen, europäischen Datenspeicher benötigen. Egal ob Sie Projektdateien archivieren, Server-Snapshots sichern oder Daten von einer anderen Cloud replizieren — RcloneView bietet Ihnen eine visuelle Oberfläche, um all das zu verwalten. Sie konfigurieren Hetzner genauso wie jeden anderen S3-kompatiblen Anbieter — mit einem Access Key, einem Secret Key und Ihrem Bucket-Endpoint — und verwalten anschließend alles über denselben Dual-Panel-Dateiexplorer, den Sie für jedes andere Remote verwenden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hetzner Object Storage mit RcloneView verbinden

Hetzner Object Storage verwendet das S3-Protokoll, daher folgt die Einrichtung in RcloneView dem gleichen Muster wie bei Amazon S3 oder Wasabi. Öffnen Sie den **Remote-Tab** und klicken Sie auf **New Remote**. Wählen Sie in der Anbieterliste **S3** aus und dann **Hetzner** als Provider. Sie benötigen drei Informationen aus der Hetzner Cloud Console: Ihre **Access Key ID**, den **Secret Access Key** und die **Endpoint-URL** für Ihre gewählte Region — zum Beispiel `fsn1.your-objectstorage.com` für die Region Falkenstein.

Nachdem Sie Ihre Zugangsdaten und den Region-Endpoint eingegeben haben, klicken Sie auf **Save**. RcloneView stellt die Verbindung her, und Ihre Hetzner-Buckets erscheinen sofort als durchsuchbare Ordner im Dateiexplorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

Nach der Verbindung können Sie Buckets durchsuchen, Dateien per Drag & Drop hochladen, Objekte herunterladen, Elemente umbenennen, Dateien löschen und neue Ordner erstellen — alles ohne ein Terminal zu berühren. Die Breadcrumb-Leiste zeigt Ihre aktuelle Position in der Bucket-Hierarchie, und die Fußzeile fasst die Gesamtanzahl der Dateien und die Größe für jedes ausgewählte Verzeichnis zusammen.

## Dateien hochladen und organisieren

Der Dual-Panel-Explorer von RcloneView macht es praktisch, Daten zwischen Hetzner Object Storage und Ihrem lokalen Rechner oder einer anderen Cloud zu verschieben. Öffnen Sie Ihre lokale Festplatte im linken Panel und Ihr Hetzner-Remote im rechten Panel, und ziehen Sie dann Dateien hinüber. Für Uploads aus dem Windows Explorer können Sie Dateien direkt in das Panel von RcloneView ziehen, und sie landen in einem einzigen Schritt in Ihrem Hetzner-Bucket.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Für große Datensätze — zum Beispiel ein Medienproduktionsunternehmen, das 500 GB Render-Output sichert — ermöglichen die Einstellungen für **Multi-Thread-Übertragung** im Sync-Assistenten, mehr Daten parallel zu übertragen. Der Standardwert von 4 gleichzeitigen Streams funktioniert für die meisten Verbindungen gut, aber eine Erhöhung dieses Werts für große Dateien bei Verbindungen mit hoher Bandbreite kann die Übertragungszeit erheblich verkürzen.

## Synchronisations- und Backup-Jobs ausführen

Für laufende Backup-Workflows bietet Ihnen der **Job Manager** von RcloneView eine dauerhafte Liste konfigurierter Synchronisationsjobs, die Sie auf Anfrage oder nach Zeitplan ausführen können. Öffnen Sie ihn über den **Home-Tab** und klicken Sie auf **Add Job**, um den 4-stufigen Sync-Assistenten zu starten:

1. **Schritt 1:** Legen Sie Quelle (einen lokalen Ordner oder ein anderes Remote) und Ziel (Ihren Hetzner-Bucket oder ein Unterverzeichnis darin) fest und benennen Sie den Job
2. **Schritt 2:** Konfigurieren Sie die Nebenläufigkeitseinstellungen — Anzahl der Dateiübertragungen, Multi-Thread-Anzahl und ob eine Checksummenprüfung zur Integritätskontrolle aktiviert werden soll
3. **Schritt 3:** Fügen Sie Filterregeln hinzu, um Dateitypen oder Pfade auszuschließen, die Sie nicht in Hetzner haben möchten, wie z. B. `.tmp`-Dateien oder `/cache/`-Verzeichnisse
4. **Schritt 4 (PLUS-Lizenz):** Legen Sie einen Zeitplan im Crontab-Stil fest, damit das Backup automatisch in einem definierten Intervall ausgeführt wird

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Bevor Sie einen neuen Job bestätigen, nutzen Sie die Option **Dry Run**, um eine Vorschau anzuzeigen, welche Dateien genau kopiert oder gelöscht würden. Dies ist besonders nützlich, wenn Sie eine Synchronisation zum ersten Mal einrichten oder wann immer Sie Filterregeln ändern, um sicherzustellen, dass nichts Wichtiges ausgeschlossen wird.

## Übertragungsverlauf überprüfen

Sobald Jobs ausgeführt wurden, zeichnet die **Job History**-Ansicht jede Ausführung auf: Startzeit, Dauer, übertragene Gesamtgröße, durchschnittliche Geschwindigkeit, Anzahl der Dateien und Endstatus. Für Teams, die nächtliche Backups zu Hetzner Object Storage durchführen, bietet dieses Protokoll eine übersichtliche Prüfspur, die zeigt, welche Läufe sauber abgeschlossen wurden und welche auf Fehler gestoßen sind — nützlich sowohl zur Fehlerbehebung als auch zum Nachweis der Einhaltung von Datenaufbewahrungsrichtlinien.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

Mit den Verlaufsfiltern können Sie Ergebnisse nach Zeitraum eingrenzen (heute, gestern, letzte Woche, letzter Monat), sodass Sie schnell den Datensatz für ein bestimmtes Backup-Fenster abrufen können, ohne durch das gesamte Protokoll zu scrollen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gehen Sie zu **Remote-Tab > New Remote**, wählen Sie **S3** aus und dann **Hetzner** als Provider.
3. Geben Sie Ihre Hetzner Access Key ID, Ihren Secret Access Key und den Region-Endpoint aus der Hetzner Cloud Console ein.
4. Öffnen Sie den **Job Manager**, erstellen Sie einen Synchronisationsjob mit Ihrem Hetzner-Bucket als Ziel und klicken Sie auf **Run Job**.

Mit angebundenem Hetzner Object Storage erhalten Sie zuverlässigen, europäisch gehosteten Object Storage, vollständig verwaltet über eine übersichtliche GUI — keine rclone-Befehle erforderlich.

---

**Verwandte Anleitungen:**

- [Hetzner Storage Box verwalten — Synchronisieren und Sichern mit RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Wasabi Cloud-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Cloudflare R2 verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
