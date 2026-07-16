---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "Put.io-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Put.io mit RcloneView über OAuth verbinden, Ihre Cloud-Dateien durchsuchen und Medieninhalte einfach zu oder von anderen Cloud-Anbietern synchronisieren."
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - putio
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Put.io ist ein Cloud-Torrent- und Download-Dienst, der abgerufene Inhalte direkt in der Cloud speichert — RcloneView macht es einfach, diese Dateien zu durchsuchen, zu synchronisieren und zu sichern.

Mit Put.io können Sie Torrents, Direktlinks und Premium-File-Hoster-Inhalte direkt in den Cloud-Speicher laden, was es zu einer beliebten Wahl für Medien-Enthusiasten macht. Sobald Ihre Dateien in Put.io angekommen sind, benötigen Sie eine zuverlässige Möglichkeit, sie zu verschieben — auf ein lokales Laufwerk, in eine andere Cloud oder in ein persönliches Archiv. RcloneView verbindet sich mit Put.io über OAuth-Browser-Login und bietet Ihnen eine vollständige grafische Oberfläche zur Verwaltung von Übertragungen, ohne die Kommandozeile zu benutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.io mit RcloneView verbinden

Öffnen Sie RcloneView und navigieren Sie zum **Remote Manager**. Klicken Sie auf **New Remote**, blättern Sie durch die Anbieterliste und wählen Sie **Put.io**. RcloneView öffnet automatisch Ihren Browser für die OAuth-Authentifizierung — melden Sie sich bei Ihrem Put.io-Konto an und erteilen Sie den Zugriff. Es müssen keine API-Schlüssel manuell kopiert werden; der OAuth-Ablauf erledigt alles.

Nach der Autorisierung erscheint der Remote in Ihrem Remote Manager. Klicken Sie auf **Open**, um den Datei-Explorer zu starten und Ihren Put.io-Speicher zu durchsuchen. Sie sehen Ihre gespeicherten Dateien, nach Torrent oder Download-Auftrag organisierte Ordner sowie alle manuell erstellten Verzeichnisse.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## Put.io-Dateien durchsuchen und verwalten

Der RcloneView Datei-Explorer zeigt Ihre Put.io-Inhalte in der gewohnten Baum- und Listenansicht. Sie können durch Ordner navigieren, mehrere Dateien auswählen und Übertragungen direkt aus dem Panel starten. Wenn Sie über große Medienbibliotheken verfügen — Filme, TV-Serien, Audiodateien —, bietet die Miniaturansicht ein Bilderraster zur schnellen Identifizierung von Inhalten.

Um Dateien zwischen Put.io und einer anderen Cloud (etwa Google Drive oder Backblaze B2) zu kopieren oder zu verschieben, öffnen Sie ein zweites Panel, das auf Ihren Ziel-Remote zeigt. Wählen Sie Dateien im Put.io-Panel aus, klicken Sie mit der rechten Maustaste und wählen Sie **Copy** oder **Move**. RcloneView führt die Übertragung bei Cloud-zu-Cloud-Vorgängen durch, ohne die Dateien zuerst auf Ihren lokalen Rechner herunterzuladen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## Einen Synchronisationsjob für Put.io einrichten

Für regelmäßige Backups oder eine einseitige Synchronisation von Put.io zu Ihrem Langzeitspeicher ist die **Job**-Funktion zuverlässiger als manuelle Übertragungen. Gehen Sie zu **Jobs**, klicken Sie auf **New Job** und wählen Sie Ihren Put.io-Remote als Quelle. Legen Sie als Ziel einen beliebigen anderen konfigurierten Remote fest — Backblaze B2 ist eine gängige Wahl für preisgünstige Medienarchivierung.

Im Konfigurationsschritt des Jobs können Sie **Dry Run** aktivieren, um vorab anzuzeigen, welche Dateien übertragen werden, bevor Sie den Vorgang bestätigen. Das ist nützlich, wenn Ihre Put.io-Bibliothek groß ist und Sie den Umfang der Synchronisation überprüfen möchten. Deaktivieren Sie nach der Überprüfung Dry Run und starten Sie den Job. RcloneView protokolliert jede Übertragung mit Dateianzahl, Geschwindigkeit und Status im Tab **Job History**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## Anwendungsfälle: Medieninhalt-Workflows

Put.io-Nutzer folgen typischerweise einigen wenigen Mustern: Archivierung abgerufener Medien in Cold Storage, Spiegelung von Inhalten auf einen Heimserver oder Synchronisation mit Google Drive zum Streaming über Drittanbieter-Player. RcloneView deckt all das ab. Sie können separate Jobs für verschiedene Put.io-Unterverzeichnisse erstellen — einen Job für Filme, einen weiteren für TV-Serien — und diese mit einer PLUS-Lizenz unabhängig voneinander planen.

Die Funktion **Folder Compare** ist praktisch, wenn Sie nicht sicher sind, was bereits kopiert wurde. Öffnen Sie sowohl den Put.io-Ordner als auch Ihr Ziel nebeneinander, und RcloneView hebt die Unterschiede hervor, sodass Sie nur das übertragen, was fehlt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote Manager**, klicken Sie auf **New Remote** und wählen Sie **Put.io**.
3. Schließen Sie den OAuth-Browser-Login ab, um den Zugriff zu autorisieren.
4. Öffnen Sie den Put.io-Remote im Datei-Explorer und konfigurieren Sie einen Synchronisationsjob zu Ihrem bevorzugten Ziel.

RcloneView macht aus Put.io von einem passiven Download-Speicher einen aktiven Teil Ihres Cloud-Speicher-Workflows.

---

**Verwandte Anleitungen:**

- [pCloud mit RcloneView zu AWS S3 sichern](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Job History und Überwachung der Übertragungsprotokolle](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
