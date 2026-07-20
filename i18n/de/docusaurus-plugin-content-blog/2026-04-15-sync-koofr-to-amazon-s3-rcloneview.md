---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "Koofr mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Koofr mit Amazon S3 synchronisieren mit RcloneView — Dateien zwischen europäischem Cloud-Speicher und AWS S3 übertragen mit einer zuverlässigen GUI auf Basis von rclone."
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - RcloneView
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr mit Amazon S3 synchronisieren — Cloud-Backup mit RcloneView

> Koofrs europäisch gehosteter Speicher und die globale Ausfallsicherheit von Amazon S3 ergänzen sich gegenseitig — RcloneView synchronisiert direkt zwischen beiden und schafft so eine anbieterübergreifende Backup-Strategie ohne lokalen Festplatten-Overhead.

Koofrs europäische Rechenzentren und die DSGVO-konforme Infrastruktur machen es zu einer starken Plattform für aktive Speicherung, während Amazon S3 erstklassige Ausfallsicherheit und CDN-Integration für Archivierung und Verteilung bietet. Die Synchronisation zwischen beiden schafft eine robuste Zwei-Stufen-Strategie: Arbeitsdaten bleiben in Koofrs europäischen Rechenzentren, während für langfristige Kostenoptimierung nach S3 archiviert wird. RcloneView übernimmt die Synchronisation direkt zwischen beiden Remotes, ohne die lokale Festplatte zu berühren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beide Remotes einrichten

Fügen Sie in RcloneView Koofr über **Remote-Tab > Neues Remote > Koofr** hinzu und geben Sie Ihre Zugangsdaten ein. Fügen Sie dann **Amazon S3** hinzu: Wählen Sie es aus der Anbieterliste aus und geben Sie Ihre Access Key ID, Ihren Secret Access Key und die AWS-Region ein. Sobald beide Remotes aktiv sind, öffnen Sie den Dual-Panel-Explorer — Koofr auf der einen Seite, Ihr S3-Bucket auf der anderen — für eine Ansicht Ihres Speichers im direkten Vergleich.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Dieser direkte Vergleich ist hilfreich bei der Planung: prüfen Sie, was sich in Koofr befindet, bestätigen Sie die gewünschte S3-Bucket-Struktur und verifizieren Sie die Ordnernamen, bevor Sie den Synchronisationsjob starten.

## Den Synchronisationsjob konfigurieren

Erstellen Sie im **Job Manager** einen Synchronisationsjob von Ihrem Koofr-Ordner zum Ziel-S3-Bucket-Pfad. Für ein Compliance-Team, das sensible Dokumente von Koofr nach S3 Standard-IA für eine kosteneffiziente Aufbewahrung sichert, läuft der Synchronisationsjob wöchentlich über die Planungsfunktion (PLUS-Lizenz).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Mit den Filteroptionen von RcloneView können Sie die Synchronisation auf bestimmte Dateitypen beschränken — zum Beispiel nur `.pdf`- und `.docx`-Dateien synchronisieren und dabei temporäre Dateien und Miniaturansichten ausschließen. Die Filterung nach **Max File Age** schränkt Synchronisationen zusätzlich auf kürzlich geänderte Dateien ein, wodurch inkrementelle Läufe schnell und fokussiert bleiben.

## Überwachung und Verifizierung

Nach der ersten Synchronisation übertragen nachfolgende Läufe nur noch Änderungen — RcloneView vergleicht Dateigrößen und Änderungsdaten, um Unterschiede zu erkennen. Der Tab **Job History** zeigt für jede Synchronisation das Ergebnis mit übertragenen Bytes, Dateianzahl, Dauer und Status.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

Für Organisationen, die Koofr als DSGVO-konformen primären Speicher und S3 als Archivierungsebene nutzen, schafft dieses Synchronisationsmuster einen klaren Daten-Lebenszyklus: aktiv in Koofr, nach Zeitplan archiviert nach S3. Die Funktion **Folder Compare** bietet bei Bedarf eine Verifizierung zu einem bestimmten Zeitpunkt, ob beide Plattformen synchron sind.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie das Remote **Koofr** (Zugangsdaten) und das Remote **Amazon S3** (Access Key) hinzu.
3. Erstellen Sie im **Job Manager** einen Synchronisationsjob von Koofr nach S3.
4. Aktivieren Sie die Planung (PLUS), um regelmäßige Backups zu automatisieren.

RcloneView macht aus einer Zwei-Cloud-Architektur einen verwalteten, automatisierten Workflow — Koofr für Compliance, S3 für Archivierung, wobei Synchronisationen beide auf dem aktuellen Stand halten.

---

**Related Guides:**

- [Koofr-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr als Multi-Cloud-Hub — Google Drive, OneDrive, Dropbox mit RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Dropbox auf AWS S3 sichern mit RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
