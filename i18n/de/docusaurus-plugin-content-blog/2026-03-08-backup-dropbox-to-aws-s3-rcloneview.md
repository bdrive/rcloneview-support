---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "Dropbox auf AWS S3 sichern — Automatisiertes Cloud-zu-Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Schützen Sie Ihre Dropbox-Dateien, indem Sie sie auf AWS S3 sichern. Richten Sie ein automatisiertes Cloud-zu-Cloud-Backup mit Zeitplanung und Verifizierung mit RcloneView ein."
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - RcloneView
  - dropbox
  - aws-s3
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox auf AWS S3 sichern — Automatisiertes Cloud-zu-Cloud-Backup mit RcloneView

> Dropbox ist großartig für die Zusammenarbeit. Aber was passiert, wenn Dateien versehentlich gelöscht werden, Ransomware Ihre freigegebenen Ordner verschlüsselt oder Dropbox selbst einen Ausfall hat? Ein Cloud-zu-Cloud-Backup auf AWS S3 schützt Sie vor all diesen Szenarien.

Sich auf einen einzigen Cloud-Anbieter für wichtige Dateien zu verlassen, ist riskant. Der Versionsverlauf von Dropbox hilft bei versehentlichen Änderungen, schützt aber nicht vor kompromittierten Konten, endgültigen Löschungen nach Ablauf des Aufbewahrungsfensters oder Dienstausfällen. Ein Backup auf AWS S3 gibt Ihnen eine unabhängige, dauerhafte Kopie all Ihrer Daten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Dropbox auf S3 sichern?

- **Unabhängige Kopie** — Wenn Dropbox ausfällt oder Ihr Konto kompromittiert wird, hat S3 weiterhin Ihre Dateien.
- **99,999999999 % Haltbarkeit** — Die elf Neunen an Haltbarkeit von S3 bedeuten, dass Ihre Daten extrem sicher sind.
- **Kosteneffizientes Archivieren** — S3 Glacier beginnt bei 4 $/TB/Monat für Dateien, auf die Sie selten zugreifen.
- **Compliance** — Manche Branchen verlangen Backups auf separater Infrastruktur.
- **Ransomware-Schutz** — S3-Versionierung und Object Lock verhindern das Überschreiben von Dateien.

## Einrichtung

### 1) Dropbox und AWS S3 verbinden

Fügen Sie beide als Remotes in RcloneView hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

Für S3 benötigen Sie Ihre Access Key ID, Ihren Secret Access Key und die bevorzugte Region.

### 2) Beide Seiten durchsuchen

Öffnen Sie Dropbox links und S3 rechts im Zwei-Fenster-Explorer:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) Einen Kopierjob erstellen

Verwenden Sie **Kopieren**, um Dropbox auf einen S3-Bucket zu sichern. Kopieren fügt Dateien hinzu, ohne etwas zu löschen — sicher für Backups:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) Nächtliche Backups planen

Legen Sie fest, dass der Job jede Nacht ausgeführt wird, damit Ihr S3-Backup stets aktuell bleibt:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) Vollständigkeit prüfen

Verwenden Sie den Ordnervergleich, um zu bestätigen, dass alle Dateien gesichert wurden:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## Die richtige S3-Speicherklasse wählen

AWS S3 bietet mehrere Speicherklassen zu unterschiedlichen Preispunkten:

| Speicherklasse | Am besten geeignet für | Preis (TB/Monat) |
|---------------|----------|------------------|
| S3 Standard | Häufig abgerufene Backups | 23 $ |
| S3 Standard-IA | Monatlich abgerufene Backups | 12,50 $ |
| S3 Glacier Instant | Seltener Zugriff, sofortiger Abruf | 4 $ |
| S3 Glacier Deep Archive | Compliance, jährlicher Zugriff | 1 $ |

Für die meisten Dropbox-Backups ist **S3 Standard-IA** (Infrequent Access) der Sweet Spot — Sie greifen nicht täglich auf das Backup zu, möchten aber bei Bedarf schnell wiederherstellen können.

## Selektives Backup mit Filtern

Möglicherweise müssen Sie nicht alles sichern. Verwenden Sie rclone-Filterregeln:

- **Nur Dokumente einschließen**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **Temporäre Dateien ausschließen**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **Große Mediendateien überspringen**: `--max-size 500M`

Weitere Details finden Sie unter [Rclone-Filterregeln erklärt](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview).

## Batch-Jobs für einen vollständigen Backup-Workflow

Mit den Batch-Jobs von v1.3 können Sie mehrere Vorgänge verketten:

1. Kopieren von Dropbox → S3.
2. Vergleich von Dropbox mit S3.
3. Slack-Benachrichtigung senden, wenn abgeschlossen.

Alles in einer automatisierten Abfolge.

## Wiederherstellung aus dem Backup

Wenn Sie Dateien von S3 zurück auf Dropbox wiederherstellen müssen:

1. Öffnen Sie S3 links, Dropbox rechts.
2. Wählen Sie die wiederherzustellenden Dateien oder Ordner aus.
3. Führen Sie einen Kopierjob von S3 → Dropbox aus.

Es ist derselbe Prozess in umgekehrter Richtung.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Dropbox und AWS S3** als Remotes hinzufügen.
3. **Einen Kopierjob** von Dropbox zu S3 ausführen.
4. **Nächtliche Backups planen**.
5. **Mit dem Ordnervergleich verifizieren**.

Ihre Dropbox-Dateien verdienen mehr als ein Zuhause.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone-Filterregeln](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
