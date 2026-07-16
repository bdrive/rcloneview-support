---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "Pixeldrain Cloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verbinden Sie Pixeldrain mit RcloneView, um Ihre gehosteten Dateien zu durchsuchen und sie zu anderen Cloud-Anbietern zu synchronisieren – für Backups oder die langfristige Archivierung."
keywords:
  - Pixeldrain RcloneView
  - Pixeldrain Cloud-Synchronisation
  - Pixeldrain Backup
  - Pixeldrain Dateien verwalten
  - Pixeldrain rclone GUI
  - Pixeldrain Dateiübertragung
  - Cloud-Backup Pixeldrain
  - Pixeldrain Synchronisation einrichten
tags:
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pixeldrain Cloud-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Pixeldrain ist ein Filehosting-Dienst mit persönlichen Cloud-Speicherfunktionen — RcloneView verbindet ihn mit Ihrem gesamten Cloud-Ökosystem für Backup und organisierte Dateiverwaltung.

Pixeldrain ist eine Plattform zum Teilen und Hosten von Dateien, die auch als persönlicher Cloud-Speicher fungiert und es Nutzern ermöglicht, Dateien hochzuladen, zu organisieren und zu teilen. Während die Weboberfläche grundlegende Vorgänge abdeckt, profitieren Nutzer, die ihre Pixeldrain-Inhalte mit einer anderen Cloud synchronisieren oder Dateien für ein lokales Archiv herunterladen möchten, von einem dedizierten Tool. RcloneView führt Pixeldrain als unterstützten Anbieter, sodass Sie es neben all Ihren anderen Remotes verbinden und Übertragungen von einer einzigen Oberfläche aus verwalten können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pixeldrain mit RcloneView verbinden

Öffnen Sie RcloneView und navigieren Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und blättern Sie durch die Anbieterliste, um **Pixeldrain** zu finden. Die Verbindung nutzt Ihren Pixeldrain-API-Schlüssel, den Sie in Ihren Kontoeinstellungen auf der Pixeldrain-Website generieren können. Geben Sie den API-Schlüssel im Konfigurationsformular ein und speichern Sie.

Nach dem Speichern öffnen Sie das Remote im File Explorer. Ihre Pixeldrain-Dateien und -Verzeichnisse werden im Panel geladen und stehen zum Durchsuchen und für Übertragungen bereit.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## Dateien durchsuchen und organisieren

Der RcloneView File Explorer zeigt Ihren Pixeldrain-Speicher mit derselben Baum- und Listenansicht, die für jeden anderen Anbieter verwendet wird. Navigieren Sie durch Verzeichnisse, wählen Sie Dateien aus und nutzen Sie die Rechtsklick-Optionen zum Kopieren, Verschieben oder Löschen. Für umfangreiche Bildersammlungen wechseln Sie zur **Thumbnail View**, um Vorschauen in einem Raster zu sehen — nützlich, wenn Sie Fotos oder Screenshots auf Pixeldrain hosten und Inhalte identifizieren möchten, bevor Sie sie übertragen.

Öffnen Sie ein zweites Panel mit einem anderen Remote — Google Drive, Backblaze B2 oder einem lokalen Ordner —, um Dateien direkt zwischen Pixeldrain und Ihrem Ziel per Drag-and-Drop zu verschieben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## Einen Backup-Job erstellen

Für systematische Backups Ihrer Pixeldrain-Inhalte verwenden Sie die **Job**-Funktion. Gehen Sie zu **Jobs**, klicken Sie auf **New Job** und legen Sie Pixeldrain als Quelle fest. Wählen Sie ein beliebiges konfiguriertes Remote als Ziel. In Schritt 2 des Job-Assistenten konfigurieren Sie die Übertragungsoptionen:

- **Number of transfers**: wie viele Dateien gleichzeitig übertragen werden
- **Dry Run**: Vorschau, was kopiert wird, ohne tatsächlich etwas zu verschieben
- **Checksum verification**: aktivieren, um die Datenintegrität nach der Übertragung zu bestätigen

Starten Sie den Job, und RcloneView zeigt in Echtzeit den Fortschritt mit Übertragungsgeschwindigkeit und Dateianzahl an. Nach Abschluss des Jobs wird das Ergebnis in der **Job History** protokolliert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## Ordnervergleich zur Überprüfung

Nach der Migration von Inhalten von Pixeldrain zu einer anderen Cloud gibt Ihnen das **Folder Compare**-Tool die Sicherheit, dass die Übertragung vollständig war. Öffnen Sie sowohl den Pixeldrain-Quellordner als auch den Zielordner nebeneinander, und RcloneView hebt Dateien hervor, die nur auf einer Seite existieren oder sich in der Größe unterscheiden. Dies ist besonders nützlich, wenn Sie die Migration über mehrere Sitzungen durchgeführt haben und sicherstellen möchten, dass nichts übersehen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Generieren Sie Ihren Pixeldrain-API-Schlüssel in Ihren Kontoeinstellungen auf pixeldrain.com.
3. Öffnen Sie den **Remote Manager**, klicken Sie auf **New Remote**, wählen Sie **Pixeldrain** aus und geben Sie Ihren API-Schlüssel ein.
4. Durchsuchen Sie Ihre Dateien und konfigurieren Sie einen Backup-Job zu Ihrer bevorzugten Ziel-Cloud.

RcloneView macht es einfach, Pixeldrain-Inhalte in eine strukturiertere Langzeitspeicherung zu überführen.

---

**Verwandte Anleitungen:**

- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Fehlende Dateien nach Cloud-Synchronisation beheben](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Job History und Überwachung von Übertragungsprotokollen](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
