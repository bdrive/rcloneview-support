---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Premiumize.me-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern"
authors:
  - tayson
description: "Verbinden Sie Premiumize.me über OAuth-Browser-Login mit RcloneView und synchronisieren Sie Ihre gespeicherten Dateien mit jedem anderen Cloud-Anbieter für Backup und langfristige Verwaltung."
keywords:
  - premiumize.me RcloneView
  - premiumize cloud sync
  - premiumize backup
  - manage premiumize files
  - premiumize rclone GUI
  - premiumize media storage
  - cloud transfer premiumize
  - premiumize file management
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Premiumize.me-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern

> Premiumize.me kombiniert Premium-Datei-Hosting mit persönlichem Cloud-Speicher — mit RcloneView können Sie diese Inhalte über eine übersichtliche Oberfläche verwalten und sichern.

Premiumize.me ist vor allem als Premium-Link-Generator und Cloud-Download-Dienst bekannt, bietet aber auch persönlichen Cloud-Speicher, in dem Ihre abgerufenen Inhalte liegen. Wenn Sie es zum Speichern von Medien, Downloads oder Projektdateien nutzen, benötigen Sie irgendwann eine Möglichkeit, diese Dateien zu verschieben — zu einer anderen Cloud zur Archivierung oder auf lokalen Speicher für den Offline-Zugriff. RcloneView verbindet sich über OAuth-Browser-Login mit Premiumize.me, sodass die Einrichtung weniger als eine Minute dauert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Premiumize.me per OAuth verbinden

Starten Sie RcloneView und öffnen Sie den **Remote Manager**. Klicken Sie auf **New Remote** und suchen Sie **Premiumize** in der Anbieterliste. Wenn Sie ihn auswählen, öffnet RcloneView Ihren Standardbrowser und leitet Sie zur OAuth-Autorisierungsseite von Premiumize.me weiter. Melden Sie sich an und erteilen Sie den Zugriff — RcloneView speichert das Token lokal, sodass Sie sich nicht erneut autorisieren müssen, es sei denn, Sie widerrufen den Zugriff.

Nach der Autorisierung erscheint der Remote in Ihrer Remote-Manager-Liste. Doppelklicken Sie darauf, um ihn im File Explorer zu öffnen. Ihr Premiumize.me-Dateibaum wird mit allen Ordnern und Dateien geladen, die Sie über den Dienst angesammelt haben.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Ihre Premiumize.me-Bibliothek durchsuchen

Der File Explorer in RcloneView bietet ein vertrautes Zwei-Panel-Layout. Navigieren Sie auf einer Seite durch Ihren Premiumize.me-Speicher und auf der anderen durch einen beliebigen anderen konfigurierten Remote — Google Drive, Backblaze B2 oder einen lokalen Ordner. Sie können mehrere Dateien auswählen, per Rechtsklick kopieren oder verschieben und den Fortschritt im Übertragungspanel verfolgen.

Für medienlastige Bibliotheken zeigt der **Thumbnail View**-Modus Bildvorschauen in einem Raster an, was hilfreich ist, wenn Ihr Premiumize.me-Speicher Fotos oder Video-Thumbnails enthält, die Sie vor der Übertragung visuell identifizieren möchten.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Premiumize.me mit einer anderen Cloud synchronisieren

Manuelles Durchsuchen von Dateien eignet sich für gelegentliche Verschiebungen, aber für regelmäßige Backups ist das **Job**-System das richtige Werkzeug. Gehen Sie zu **Jobs**, klicken Sie auf **New Job** und legen Sie Premiumize.me als Quelle fest. Wählen Sie einen beliebigen Ziel-Remote — Backblaze B2 ist eine kostengünstige Option für die langfristige Medienarchivierung, während Google Drive gut funktioniert, wenn Sie von unterwegs auf Dateien zugreifen möchten.

Im zweiten Schritt des Job-Assistenten können Sie **Übertragungsoptionen** konfigurieren: die Anzahl gleichzeitiger Übertragungen festlegen, Prüfsummen aktivieren oder deaktivieren und **Dry Run** einschalten, um vorab zu sehen, was kopiert wird, bevor sich etwas bewegt. Dies ist besonders nützlich, wenn Ihr Premiumize.me-Speicher im Laufe der Zeit organisch gewachsen ist und Sie sich der genauen Struktur nicht sicher sind.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## Überwachung und Job-Verlauf

Sobald ein Job ausgeführt wurde, zeichnet RcloneView das Ergebnis im **Job History** auf. Jeder Eintrag zeigt die Startzeit, die Dauer, die Anzahl der übertragenen Dateien, die insgesamt verschobene Datenmenge und eventuelle Fehler. Dies gibt Ihnen ein Prüfprotokoll jeder Synchronisationsoperation, was wichtig ist, wenn Sie eine große Premiumize.me-Bibliothek systematisch über mehrere Sitzungen hinweg migrieren.

Wenn eine Übertragung mittendrin fehlschlägt — aufgrund eines Netzwerkproblems oder eines Rate-Limits der Premiumize.me-API — können Sie denselben Job aus dem Job History erneut ausführen, ohne ihn neu zu konfigurieren. RcloneView überspringt Dateien, die bereits erfolgreich übertragen wurden, sodass unterbrochene Synchronisationen dort fortgesetzt werden, wo sie aufgehört haben.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den **Remote Manager**, klicken Sie auf **New Remote** und wählen Sie **Premiumize**.
3. Schließen Sie den OAuth-Browser-Login ab, um Ihr Konto zu autorisieren.
4. Erstellen Sie einen Synchronisationsjob mit Premiumize.me als Quelle und Ihrer gewählten Cloud als Ziel.

Mit RcloneView sind Ihre Premiumize.me-Dateien nicht mehr auf einen einzigen Dienst beschränkt — sichern, archivieren oder migrieren Sie sie nach Ihrem eigenen Zeitplan.

---

**Verwandte Anleitungen:**

- [Put.io-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Überwachung von Job-Verlauf und Übertragungsprotokollen](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
