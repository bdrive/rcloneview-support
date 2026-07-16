---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "1:N-Synchronisation — Eine Quelle mit RcloneView an mehrere Cloud-Ziele sichern"
authors:
  - kai
description: "Nutzen Sie RcloneViews 1:N-Synchronisation, um einen Quellordner gleichzeitig an mehrere Cloud-Ziele zu sichern. Schützen Sie Ihre Dateien mit redundanten Multi-Cloud-Backups."
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1:N-Synchronisation — Eine Quelle mit RcloneView an mehrere Cloud-Ziele sichern

> Ein Synchronisationsjob, mehrere Ziele — RcloneView spiegelt eine einzelne Quelle in einem einzigen Durchlauf auf so viele Cloud-Anbieter, wie Sie benötigen.

Die meisten Backup-Strategien scheitern an der Redundanz: Dateien gehen an ein einziges Ziel, wodurch ein einzelner Ausfallpunkt entsteht. RcloneViews 1:N-Synchronisation ermöglicht es Ihnen, einen einzelnen Quellordner innerhalb eines einzigen Jobs an mehrere Cloud-Ziele zu sichern — sodass Ihre Daten gleichzeitig auf Google Drive, Backblaze B2 und einem S3-kompatiblen Anbieter landen, ohne dass Sie für jedes Ziel einen separaten Job ausführen müssen. Diese Funktion ist mit der FREE-Lizenz verfügbar und funktioniert mit jeder beliebigen Kombination von Cloud-Remotes, die Sie konfiguriert haben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie die 1:N-Synchronisation in RcloneView funktioniert

Wenn Sie im Job Manager von RcloneView einen Synchronisationsjob erstellen, können Sie in Schritt 1 des 4-Schritte-Assistenten mehrere Zielordner hinzufügen. Nachdem Sie Ihre Quelle und das erste Ziel ausgewählt haben, klicken Sie auf **Add Destination**, um weitere Ziele hinzuzufügen. Jedes Ziel wird unabhängig synchronisiert, jedoch von derselben Quelle gesteuert — das bedeutet, die Quelle wird einmal gelesen und die Schreibvorgänge erfolgen parallel an alle Ziele. Dies unterscheidet sich deutlich von der Ausführung separater Jobs: Bei separaten Läufen kann sich die Quelle zwischen den Ausführungen ändern, sodass jedes Ziel möglicherweise einen leicht unterschiedlichen Stand erfasst.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

Ein praktisches Beispiel für ein Medienunternehmen könnte so aussehen: Die Quelle ist ein lokaler Produktions-NAS-Ordner mit Master-Videodateien; Ziel 1 ist Google Drive für den Teamzugriff; Ziel 2 ist Backblaze B2 für die Langzeitarchivierung; Ziel 3 ist Wasabi für eine zusätzliche Offsite-Kopie. Alle drei Ziele bleiben durch eine einzige Jobausführung mit demselben Quellzustand synchronisiert.

## Einrichten eines Synchronisationsjobs mit mehreren Zielen

Öffnen Sie den **Job Manager** über den Home-Tab und klicken Sie auf **Add Job**, um einen neuen Sync-Job zu erstellen. Wählen Sie in Schritt 1 Ihre Quelle aus (jedes konfigurierte Remote oder jeden lokalen Ordner). Nachdem Sie den ersten Zielordner ausgewählt haben, klicken Sie auf **Add Destination**, um weitere Ziele einzufügen — jedes davon zeigt auf ein anderes Remote und einen anderen Ordnerpfad. Geben Sie dem Job einen aussagekräftigen Namen, der die Absicht mehrerer Ziele widerspiegelt.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

In Schritt 2 konfigurieren Sie die Übertragungseinstellungen, die für alle Ziele gemeinsam gelten: Anzahl gleichzeitiger Übertragungen, Multi-Thread-Einstellungen und ob die Prüfsummenverifizierung aktiviert werden soll. Bei 1:N-Jobs, die zu Cloud-Anbietern mit unterschiedlichen Ratenlimits synchronisieren, sollten Sie die Anzahl gleichzeitiger Übertragungen moderat halten — aggressive Parallelität über viele Ziele gleichzeitig kann bei strengeren Anbietern eine Drosselung auslösen. In Schritt 3 können Sie Filterregeln hinzufügen, die einheitlich auf alle Ziele angewendet werden, sodass Sie die Ausschlusslogik nicht für jedes Ziel duplizieren müssen.

## Überprüfen des Jobs mit einem Dry Run

Bevor Sie eine umfangreiche 1:N-Synchronisation starten, verwenden Sie die Option **Dry Run** im Job Manager. Der Dry Run zeigt jeden geplanten Vorgang — die Dateien, die an jedes Ziel kopiert werden — ohne tatsächliche Änderungen vorzunehmen. Bei einem Job, der zu drei Anbietern synchronisiert, listet die Vorschau die Vorgänge pro Ziel auf, sodass Sie sicher sein können, dass die Pfade korrekt sind und der Umfang Ihren Erwartungen entspricht.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

Nach der Ausführung erfasst der Tab **Job History** für jeden Jobdurchlauf die Startzeit, die Dauer, die insgesamt übertragenen Bytes und den endgültigen Status (Completed, Errored, Canceled). Für Teams mit Compliance-Anforderungen bezüglich der Backup-Verifizierung bietet dieses Protokoll ein fertiges Audit-Trail ohne zusätzliche Tools.

## Automatisierte Backups mit mehreren Zielen planen

Mit einer PLUS-Lizenz können Sie in Schritt 4 einen zeitgesteuerten Plan im Cron-Stil an Ihren 1:N-Job anhängen, sodass er automatisch in dem von Ihnen gewählten Intervall ausgeführt wird. Die Schaltfläche **Simulate schedule** zeigt eine Vorschau der kommenden Ausführungszeiten, bevor Sie speichern. Sobald aktiv, sorgt die Systray-Integration von RcloneView dafür, dass der Job im Hintergrund weiterläuft, und Benachrichtigungen über den Jobabschluss bestätigen, dass alle Ziele die neuesten Daten erhalten haben.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie zwei oder mehr Cloud-Remotes über **Remote** > **New Remote** hinzu.
3. Erstellen Sie einen **Sync**-Job und verwenden Sie **Add Destination** in Schritt 1, um jeden Zielanbieter und -ordner hinzuzufügen.
4. Führen Sie einen **Dry Run** aus, um den Umfang zu überprüfen, und speichern Sie dann mit einem Zeitplan für automatisierte Multi-Cloud-Redundanz.

Mit der 1:N-Synchronisation wird ein einzelner RcloneView-Job zu einer vollständigen Multi-Cloud-Backup-Strategie — ohne zusätzliche Skripte, ohne zusätzliche Schritte.

---

**Weiterführende Anleitungen:**

- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Multi-Cloud-Backup-Strategie mit RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Job-Export und -Import — Portable Workflows mit RcloneView](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
