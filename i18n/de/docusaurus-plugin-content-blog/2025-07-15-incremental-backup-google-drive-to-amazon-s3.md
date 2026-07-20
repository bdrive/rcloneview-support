---
slug: backup-google-drive-to-amazon-s3
title: Google Drive mit RcloneView auf Amazon S3 sichern
authors:
  - jay
description: Kopieren Sie Google Drive-Ordner mit den Klick-und-fertig-Tools von RcloneView auf Amazon S3 – einmal verbinden, ein Backup ausführen und zusätzliche Kopien für mehr Sicherheit behalten.
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit RcloneView auf Amazon S3 sichern

> Halten Sie die Zusammenarbeit in Google Drive am Laufen und legen Sie eine Sicherheitskopie in Amazon S3 an. Mit RcloneView klicken Sie sich durch das komplette Backup – keine Skripte, keine Kommandozeile.

## Was macht diese Kombination sinnvoll?

- **Google Drive** ist der Ort, an dem Ihre Dokumente, Tabellen und freigegebenen Ordner täglich leben.  
- **Amazon S3** bewahrt Kopien über Jahre hinweg mit Versionierung, Lifecycle-Regeln und günstigen Archiv-Stufen auf.  
- **RcloneView** verbindet beide über einen Zwei-Fenster-Explorer, Vergleichsvorschauen und geplante Jobs, sodass Sie immer wissen, was gerade übertragen wird.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Bevor Sie beginnen

1. **Wählen Sie die wichtigen Ordner aus** – prüfen Sie Projektbereiche, geteilte Ablagen (Shared drives) und alle Übergabeordner. Cache- oder Temp-Ordner, die Sie nicht benötigen, können Sie überspringen.  
2. **Erstellen oder wählen Sie einen S3-Bucket** – entscheiden Sie sich für Region, Bucket-Namen und Standardverschlüsselung (SSE-S3 oder SSE-KMS). [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)  
3. **Prüfen Sie die Anbieterlimits** – Google begrenzt Drive-API-Übertragungen auf **750 GB pro Nutzer und Tag** und Dateien auf bis zu **5 TB**. Planen Sie größere Umzüge über mehrere Tage. [Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google-Hilfe](https://support.google.com/drive/answer/37603)  
4. **Planen Sie Ihre Ordnerstruktur** – S3-Präfixe wie `drive-backup/marketing/2025/` halten Snapshots später leicht durchsuchbar.  
5. **Sehen Sie es sich einmal in der App an** – schauen Sie sich die Explorer-Screenshots unter [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage) an, damit Ihnen das Layout vertraut vorkommt.

## Schritt 1 — Beide Dienste in RcloneView verbinden

1. Öffnen Sie **RcloneView** → klicken Sie auf **`+ New Remote`**.  
2. Wählen Sie **Google Drive**, melden Sie sich an und geben Sie dem Remote einen klaren Namen wie `Drive-Main`. Wenn Sie geteilte Ablagen (Shared drives) sichern, aktivieren Sie diese während der Einrichtung.  
3. Fügen Sie ein weiteres Remote für **Amazon S3** hinzu. Geben Sie Ihren Access Key/Secret ein (oder übernehmen Sie eine IAM-Rolle), wählen Sie den Ziel-Bucket aus und nennen Sie ihn `S3-Backup`.  
4. Vergewissern Sie sich, dass beide Remotes nebeneinander im Explorer erscheinen. Der [Leitfaden zum Remote-Manager](/howto/rcloneview-basic/remote-manager) enthält zusätzliche Screenshots, falls Sie eine Auffrischung brauchen.

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## Schritt 2 — Den Backup-Job planen

- **Testlauf mit einem Ordner**: Öffnen Sie `Drive-Main` links und `S3-Backup` rechts. Ziehen Sie einen kleinen Testordner hinüber, um den Übertragungsdialog zu sehen.  
- **Compare nutzen**: Das Compare-Tool markiert neue und geänderte Dateien, bevor Sie kopieren. Es ist dieselbe Ansicht wie unter [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents).  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## Schritt 3 — Das erste Backup ausführen

1. Wählen Sie in der Symbolleiste **Copy** (einmalig) oder **Sync (copy direction)**, wenn das Ziel Drive spiegeln soll, ohne Daten auf Drive zu löschen.  
2. Fügen Sie Filterregeln hinzu, wenn Sie Ordner wie `/Personal/` überspringen möchten.  
3. Führen Sie zuerst einen **Dry Run** aus. Sie erhalten eine übersichtliche Zusammenfassung der anstehenden Übertragungen.  
4. Klicken Sie auf **Start**. Verfolgen Sie den Fortschritt im Job Monitor – übertragene Bytes, Dateianzahl und alle Warnungen laufen hier zusammen.

## Schritt 4 — Folgekopien planen

Sobald der erste Durchlauf gut aussieht:

1. Speichern Sie ihn direkt aus dem Abschlussdialog als **Job**.  
2. Öffnen Sie den **Job Manager** → legen Sie einen täglichen oder wöchentlichen Zeitplan fest. Dies folgt demselben Muster wie im [Leitfaden zur Job-Planung](/howto/rcloneview-advanced/job-scheduling-and-execution).  
3. Prüfen Sie die Kalendervorschau, um die Zeiten zu bestätigen, und lassen Sie RcloneView den Rest übernehmen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## Die S3-Kopie ordentlich halten

- **Lifecycle-Regeln**: Verschieben Sie Backups, die älter als 90 Tage sind, in Glacier Instant Retrieval oder Deep Archive, um Kosten zu senken. [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)  
- **Bucket-Versionierung**: Aktivieren Sie sie, wenn jede Überschreibung erhalten bleiben soll. Jeder RcloneView-Durchlauf wird dann zu einem Wiederherstellungspunkt.  
- **Tags**: Fügen Sie Objekten Tags wie `Team=Finance` oder `Compliance=SOC2` hinzu, damit Abrechnung und Audits einfach bleiben.

Unser Blog zu [Cloud-zu-Cloud-Übertragungen mit RcloneView](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) enthält weitere Ideen zum Filtern und Organisieren von Cloud-Kopien.

## Überwachen und mit Zuversicht wiederherstellen

- **Job History**: Jeder Durchlauf protokolliert Bytes, Dauer und Fehlermeldungen. Exportieren Sie ein Log direkt aus der Benutzeroberfläche, wenn Prüfer danach fragen.  
- **Cloud-Dashboards**: Nutzen Sie S3 Storage Lens oder CloudWatch, um das Wachstum des Buckets zu beobachten. [AWS-Dokumentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)  
- **Wiederherstellungsschritte**: Wählen Sie den benötigten Snapshot in S3 aus und kopieren Sie ihn dann mit derselben RcloneView-Jobvorlage zurück nach Drive oder in einen anderen Bucket.  

## Verwandte Leitfäden & Ressourcen

- [Schnelle Google-OAuth-Einrichtung in RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Amazon S3-Remote einrichten](/howto/remote-storage-connection-settings/s3) — Schritt-für-Schritt-Screenshots zu den Zugangsdaten.  
- [Echtzeit-Übertragungsüberwachung](/howto/rcloneview-basic/real-time-transfer-monitoring) — sehen Sie, wie Sie Job-Fortschrittsdiagramme lesen.

## Häufig gestellte Fragen (FAQ)

**Werden Google Docs, Sheets und Slides mit übertragen?**  
Ja. RcloneView exportiert sie beim Backup in den Formaten, die Sie wählen (DOCX, XLSX usw.).

**Was passiert, wenn ich das Tageslimit von 750 GB erreiche?**  
RcloneView pausiert mit einer klaren Meldung. Warten Sie 24 Stunden oder wechseln Sie zu einem anderen Google-Dienstkonto und starten Sie den Job dann neu – er wird dort fortgesetzt, wo er aufgehört hat.

**Kann ich Wasabi oder Cloudflare R2 statt AWS S3 verwenden?**  
Ja, problemlos. Richten Sie in RcloneView ein S3-kompatibles Remote ein und verweisen Sie es auf den Endpoint des Anbieters.

**Bereit, Ihre Google Drive-Dateien langfristig sicher und durchsuchbar zu halten?**

<CloudSupportGrid />
