---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "Nextcloud mit Wasabi synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - jay
description: "Synchronisieren Sie Ihre Nextcloud-Instanz mit Wasabi S3 mithilfe von RcloneView — verbinden Sie WebDAV- und S3-Remotes, automatisieren Sie Backup-Jobs und schützen Sie selbst gehostete Daten außerhalb des Standorts."
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - nextcloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud mit Wasabi synchronisieren — Cloud-Backup mit RcloneView

> Eine selbst gehostete Nextcloud-Instanz braucht ein Backup außerhalb des Standorts — RcloneView macht die Synchronisation Ihrer Nextcloud-Ordner mit Wasabi S3-Speicher unkompliziert und vollständig automatisierbar.

Ein selbst gehosteter Nextcloud-Server gibt Ihnen die Kontrolle über Ihre Dateien, aber diese Kontrolle bringt auch Verantwortung mit sich: Wenn der Server ausfällt, von Ransomware betroffen ist oder die Festplatte degradiert, gehen Ihre Daten mit ihm verloren. Die Synchronisation mit Wasabi verschafft Ihnen eine dauerhafte Kopie außerhalb des Standorts, ohne Überraschungen bei den Übertragungskosten. RcloneView verbindet sich über WebDAV mit Nextcloud und über das S3-Protokoll mit Wasabi, sodass Sie zuverlässige Synchronisationsjobs zwischen beiden aufbauen können — ganz ohne CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihre Nextcloud-Instanz als Remote verbinden

Öffnen Sie RcloneView und gehen Sie zu **Remote tab > New Remote**. Wählen Sie **WebDAV** als Remote-Typ und **Nextcloud** als Anbieter. Geben Sie die URL Ihres Nextcloud-Servers im Format `https://cloud.yourdomain.com/remote.php/dav/files/username/` ein, zusammen mit Ihrem Nextcloud-Benutzernamen und entweder Ihrem Kontopasswort oder einem app-spezifischen Passwort, das Sie in den Sicherheitseinstellungen von Nextcloud generieren können. Speichern Sie das Remote, und es erscheint als durchsuchbare Quelle im Dateiexplorer.

Im Gegensatz zu reinen Mount-Tools synchronisiert RcloneView WebDAV-Quellen wie Nextcloud direkt mit S3-kompatiblen Zielen wie Wasabi — vollständig mit der KOSTENLOSEN Lizenz.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

Nach dem Verbinden durchsuchen Sie Ihre Nextcloud-Verzeichnisse, um zu bestätigen, dass die Verbindung funktioniert. Sie können Dateinamen, Größen und Änderungsdaten einsehen — nützlich, um zu entscheiden, welche Ordner in einen Backup-Job aufgenommen und welche internen Nextcloud-Verzeichnisse (wie `trashbin`) ausgeschlossen werden sollen.

## Wasabi als S3-kompatibles Remote hinzufügen

Gehen Sie erneut zu **Remote tab > New Remote**, wählen Sie **Amazon S3** und dann **Wasabi** als Anbieter. Geben Sie Ihre Wasabi Access Key ID und Ihren Secret Access Key ein, wählen Sie den passenden Region-Endpunkt (zum Beispiel `s3.us-east-1.wasabisys.com`) und geben Sie den Ziel-Bucket an. Nach dem Speichern kann RcloneView Ihren Wasabi-Bucket in einem zweiten Explorer-Fenster neben Nextcloud öffnen — Sie können einzelne Dateien zwischen beiden per Drag-and-drop verschieben, um die Verbindung zu überprüfen, bevor Sie eine vollständige Synchronisation ausführen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

Da Wasabis API S3-kompatibel ist, behandelt RcloneView sie identisch zu Amazon S3, sodass alle Synchronisations-, Kopier-, Verschiebe- und Filteroperationen ohne zusätzliche Konfiguration funktionieren.

## Den Synchronisationsjob konfigurieren

Klicken Sie im Home-Tab auf **Sync**, um den 4-Schritte-Job-Assistenten zu öffnen. Legen Sie in Schritt 1 Ihren Nextcloud-Ordner als Quelle und Ihren Wasabi-Bucket (oder einen Unterordner wie `nextcloud-backup/`) als Ziel fest. Geben Sie dem Job einen aussagekräftigen Namen, zum Beispiel `nextcloud-to-wasabi-daily`.

Erhöhen Sie in Schritt 2 die Anzahl der parallelen Übertragungen, wenn Ihre Verbindung das zulässt — das beschleunigt die Synchronisation der vielen kleinen Dateien, die für Nextcloud typisch sind. Aktivieren Sie die **Checksummenprüfung**, um Dateihashes statt nur Größen zu vergleichen, wodurch jede Beschädigung erkannt wird, die bei einem vorherigen, unvollständigen Upload aufgetreten sein könnte. Fügen Sie in Schritt 3 Filterregeln hinzu, um den `trashbin`-Ordner von Nextcloud sowie temporäre Dateien aus fragmentierten Uploads auszuschließen, damit das Backup sauber bleibt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

Mit einer PLUS-Lizenz können Sie in Schritt 4 einen Zeitplan im Crontab-Stil hinzufügen — zum Beispiel jede Nacht um 2 Uhr —, sodass das Backup ohne manuellen Auslöser läuft. Der Scheduler unterstützt bestimmte Wochentage, monatliche Intervalle und schrittbasierte Bereiche.

## Übertragungsverlauf überprüfen

Nach jedem Durchlauf zeichnet der Tab **Job History** jede Ausführung auf: Startzeit, Dauer, Status (Completed / Errored / Canceled), insgesamt übertragene Bytes und Übertragungsgeschwindigkeit. Dieses Protokoll ist die erste Anlaufstelle, wenn ein Backup ins Stocken geraten zu sein scheint oder Dateien fehlen, und macht es einfach zu überprüfen, ob die Nextcloud-Daten wie erwartet in Wasabi ankommen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

Für Umgebungen mit mehreren Nextcloud-Instanzen oder Backups in Wasabi-Buckets verschiedener Regionen zur geografischen Redundanz ermöglicht die 1:N-Synchronisation von RcloneView, eine Quelle mit mehreren Zielen zu verbinden und diese gemeinsam in einem einzigen Job auszuführen.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Nextcloud-Server als WebDAV-Remote hinzu (Remote tab > New Remote > WebDAV > Nextcloud vendor).
3. Fügen Sie Wasabi als S3-kompatibles Remote mit Ihrem Access Key, Secret Key, Region-Endpunkt und Bucket-Namen hinzu.
4. Erstellen Sie einen Synchronisationsjob mit Nextcloud als Quelle und Ihrem Wasabi-Bucket als Ziel — aktivieren Sie die Checksummenprüfung in Schritt 2 für integritätsgesicherte Backups.

Ihre selbst gehosteten Nextcloud-Daten erhalten so eine zuverlässige Kopie außerhalb des Standorts in Wasabi, die automatisch läuft, ganz ohne Kommandozeilen-Skripte.

---

**Weiterführende Anleitungen:**

- [Nextcloud Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Wasabi Cloud-Synchronisation und Backup mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Nextcloud mit Backblaze B2 synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
