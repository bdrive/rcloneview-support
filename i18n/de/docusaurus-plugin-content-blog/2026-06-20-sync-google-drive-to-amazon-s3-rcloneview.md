---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Google Drive mit Amazon S3 synchronisieren — Automatisiertes Cloud-Backup mit RcloneView"
authors:
  - jay
description: "Synchronisieren Sie Google Drive mit Amazon S3 mit RcloneView. Richten Sie automatisierte Cloud-zu-Cloud-Backup-Jobs ein, planen Sie Übertragungen und verfolgen Sie den Fortschritt in einer einzigen GUI."
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Amazon S3 synchronisieren — Automatisiertes Cloud-Backup mit RcloneView

> Ein Backup von Google Drive auf Amazon S3 erstellt eine unabhängige Kopie Ihrer Daten auf separater Cloud-Infrastruktur — RcloneView macht daraus einen Workflow, den Sie einmal einrichten und dann vergessen können.

Google Drive eignet sich hervorragend für die Zusammenarbeit, aber sich allein darauf als einzige Kopie kritischer Dateien zu verlassen, ist ein Risiko, das die meisten Teams nicht eingehen sollten. Amazon S3 bietet dauerhaften, kostengünstigen Objektspeicher, der Google Drive als unabhängiges Backup-Ziel ergänzt. Mit dem GUI-gesteuerten Job-System von RcloneView kann ein Content-Team, das 200 GB gemeinsam genutzter Projektdateien verwaltet, in wenigen Minuten automatisierte Cloud-zu-Cloud-Backups einrichten — ohne rclone-Befehle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive und Amazon S3 in RcloneView einrichten

Beide Remotes müssen konfiguriert werden, bevor der Sync-Job erstellt wird. Klicken Sie in RcloneView auf **Remote-Tab > Neuer Remote**. Wählen Sie für Google Drive den Anbieter aus der Liste aus — ein Browserfenster öffnet sich zur OAuth-Authentifizierung. Melden Sie sich an und erteilen Sie den Zugriff; der Remote wird automatisch gespeichert, ohne dass API-Schlüssel manuell verwaltet werden müssen.

Wählen Sie für Amazon S3 **Amazon S3** als Anbieter aus und geben Sie dann Ihre **Access Key ID**, den **Secret Access Key** und die **Region** Ihres S3-Buckets ein (z. B. `us-east-1`). RcloneView speichert alle Anmeldedaten sicher in verschlüsseltem lokalem Speicher. Sobald beide Remotes gespeichert sind, erscheint jeder als Tab in den Explorer-Bereichen und ist bereit zum Durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Konfigurieren des Cloud-zu-Cloud-Sync-Jobs

Klicken Sie auf **Home-Tab > Sync**, um den Job-Assistenten zu öffnen. Legen Sie Google Drive — oder einen bestimmten Unterordner wie `My Drive/Projects` — als Quelle fest und ein S3-Bucket-Präfix (z. B. `my-backup-bucket/google-drive/`) als Ziel. Geben Sie dem Job einen aussagekräftigen Namen, etwa `gdrive-to-s3-daily`.

Aktivieren Sie unter **Erweiterte Einstellungen** die **Checksummenprüfung**, um Dateien anhand ihres Hash-Werts statt nur nach Größe zu vergleichen — dies erkennt Dateien, die zwar dieselbe Größe, aber aufgrund teilweiser Überschreibungen unterschiedlichen Inhalt haben. Stellen Sie die Anzahl gleichzeitiger Übertragungen entsprechend Ihrer Netzwerkkapazität ein; 4–8 Übertragungen eignen sich für die meisten Breitbandverbindungen, ohne die Ratenbegrenzungen von Google Drive auszulösen.

Der Schritt **Filterung** bietet präzise Kontrolle darüber, was synchronisiert wird: Schließen Sie große Videodateien aus, wenn Sie nur ein Dokumenten-Backup benötigen, oder beschränken Sie sich mit dem Feld „Max File Age“ auf Dateien, die in den letzten 90 Tagen geändert wurden.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## Übertragung ausführen und überwachen

Verwenden Sie vor der ersten vollständigen Synchronisation den integrierten **Dry Run**, um genau in der Vorschau zu sehen, welche Dateien am Ziel kopiert oder gelöscht werden. Dies ist besonders bei der Ersteinrichtung wertvoll, wenn der S3-Bucket leer ist und Sie die Job-Konfiguration bestätigen möchten, bevor Sie Gigabytes an Daten übertragen.

Klicken Sie auf **Run**, wenn Sie bereit sind. Der Tab **Transferring** unten in RcloneView zeigt den Live-Fortschritt: Geschwindigkeit, Dateianzahl und Prozentsatz der Fertigstellung. Bei großen Google-Drive-Bibliotheken mit Zehntausenden von Dateien kann die erste Synchronisation mehrere Stunden dauern — nachfolgende Durchläufe übertragen nur geänderte Dateien und sind deutlich schneller abgeschlossen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## Tägliche automatisierte Backups planen

Öffnen Sie mit einer **PLUS-Lizenz** den Job im **Job Manager** und fügen Sie über die Cron-ähnliche Oberfläche einen Zeitplan hinzu — zum Beispiel täglich um 1 Uhr morgens. Das Tool **Simulate Schedule** zeigt eine Vorschau der nächsten zehn Ausführungszeitpunkte, sodass Sie bestätigen können, dass das Backup zum richtigen Zeitpunkt ausgelöst wird. Nach dem Speichern läuft das Backup automatisch, unabhängig davon, ob das RcloneView-Fenster geöffnet ist.

Nach jedem Durchlauf erfasst der **Job-Verlauf** Dauer, Übertragungsgeschwindigkeit, Dateianzahl und Abschlussstatus und liefert Ihnen so einen klaren Prüfpfad für jedes Google-Drive-Backup, das nach S3 übertragen wird.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie über **Remote-Tab > Neuer Remote** einen Google-Drive-Remote per OAuth-Anmeldung hinzu.
3. Fügen Sie einen Amazon-S3-Remote mit Ihrer AWS Access Key ID, Ihrem Secret Key und der Bucket-Region hinzu.
4. Erstellen Sie einen Sync-Job: Quelle = Google-Drive-Ordner, Ziel = S3-Bucket-Präfix, und führen Sie ihn dann aus oder planen Sie ihn.

Ihre Google-Drive-Daten sind nun unabhängig auf AWS-Infrastruktur gesichert — geschützt vor versehentlichem Löschen, Kontosperrung oder Serviceausfällen auf einer der beiden Plattformen.

---

**Weiterführende Anleitungen:**

- [Inkrementelles Backup: Google Drive auf Amazon S3 mit RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Amazon-S3-Buckets als lokale Laufwerke einbinden mit RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
