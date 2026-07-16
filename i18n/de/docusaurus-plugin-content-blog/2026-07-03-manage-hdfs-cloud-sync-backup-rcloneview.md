---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "HDFS-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView"
authors:
  - kai
description: "Verbinden Sie Hadoop Distributed File System (HDFS)-Cluster mit RcloneView, um Big-Data-Speicher über 90+ Cloud-Anbieter hinweg zu durchsuchen, zu synchronisieren und zu sichern."
keywords:
  - hdfs rcloneview
  - manage hdfs cloud storage
  - hadoop distributed file system gui
  - hdfs to cloud migration
  - hdfs cloud backup
  - sync hdfs to cloud storage
  - hdfs rclone gui
  - hybrid data lake cloud sync
  - on-prem hadoop cloud backup
tags:
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HDFS-Speicher verwalten — Dateien synchronisieren und sichern mit RcloneView

> Hadoop-Cluster speichern Jahre an verarbeiteten Daten, aber das Verschieben dieser Daten zwischen On-Prem-Speicher und der Cloud bedeutet in der Regel den Griff zu Skripten und CLI-Tools — RcloneView gibt HDFS stattdessen ein visuelles Zuhause.

Hadoop Distributed File System (HDFS) ist die Speicherschicht hinter unzähligen On-Premise-Big-Data-Pipelines, bietet aber keine benutzerfreundliche Möglichkeit, diese Daten außerhalb des Hadoop-Ökosystems zu inspizieren, zu übertragen oder zu archivieren. RcloneView verbindet sich mit HDFS als protokollbasiertes Remote neben SFTP, FTP und WebDAV, sodass ein Data Engineer den Cluster-Inhalt in einem vertrauten Datei-Explorer durchsuchen und Datensätze zwischen Cloud-Speicher hin und her verschieben kann, ohne einen distcp-Job oder ein eigenes Skript schreiben zu müssen. Es läuft gleichermaßen unter Windows, macOS und Linux, was wichtig ist, wenn Ihr Datenteam nicht durchgängig auf demselben Betriebssystem arbeitet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Einen HDFS-Cluster als Remote hinzufügen

HDFS fällt unter RcloneViews Kategorie der protokollbasierten Speicher und wird über denselben Assistenten für neue Remotes konfiguriert, der auch für SFTP- und WebDAV-Verbindungen verwendet wird. Sobald der Cluster hinzugefügt wurde, erscheint er als eigener Tab im Explorer-Panel, mit der üblichen Ordnerstruktur, Dateiliste und Miniaturansicht zum Durchsuchen der über die Namenodes des Clusters verteilten Datensätze. Rechtsklick-Operationen — Kopieren, Herunterladen, Umbenennen, Größe ermitteln — funktionieren genau wie bei jedem anderen Remote, sodass Ingenieure, die mit `hadoop fs`-Befehlen nicht vertraut sind, dennoch prüfen können, was tatsächlich in HDFS liegt.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView bindet ein UND synchronisiert 90+ Anbieter aus einem einzigen Fenster, sodass in derselben Sitzung, in der HDFS durchsucht wird, gleichzeitig ein Google-Drive-, S3-Bucket- oder lokaler Datenträger in einem benachbarten Panel zum direkten Vergleich geöffnet sein kann.

## On-Prem-Speicher mit Cloud-Objektspeicher verbinden

Der häufigste Grund, HDFS mit RcloneView zu verbinden, ist das Verschieben von kalten oder verarbeiteten Daten aus einem teuren, kapazitätsbegrenzten Cluster in einen günstigeren Cloud-Speicher zur Langzeitaufbewahrung. Ein Einweg-Synchronisationsjob mit der Richtung „Nur Ziel ändern" kopiert HDFS-Ausgaben — verarbeitete Datensätze, Modelltrainingsartefakte, Log-Archive — in einen S3-, Azure-Blob- oder Backblaze-B2-Bucket, ohne die Quelle zu verändern. Die Filtereinstellungen in Schritt 3 des Synchronisationsassistenten ermöglichen es, den Job auf bestimmte Dateitypen einzugrenzen oder zwischenzeitliche `_SUCCESS`- und temporäre Dateien auszuschließen, die Hadoop-Jobs hinterlassen, sodass der Ziel-Bucket nur das enthält, was tatsächlich aufbewahrenswert ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

Bei großen Datensätzen hilft das Anpassen der Anzahl der Dateiübertragungen und der Multi-Thread-Übertragungsanzahl in den erweiterten Einstellungen, die verfügbare Bandbreite zwischen Cluster und Ziel auszuschöpfen, während eine moderate Anzahl an Gleichheitsprüfern unnötige Leselast auf dem Namenode während der Vergleichsphase vermeidet.

## Wiederkehrende Archivierungsjobs planen

Datenpipelines laufen selten nur einmal. PLUS-Lizenznutzer können einem HDFS-Synchronisationsjob einen crontab-artigen Zeitplan zuweisen, sodass neu eingegangene Ausgaben nach jedem Batch-Lauf automatisch in den Cloud-Speicher gespiegelt werden, anstatt dass jemand daran denken muss, eine manuelle Übertragung zu starten. Der Job-Verlauf verfolgt dann jede Ausführung — Status, übertragene Größe, Dauer — und liefert dem Team einen Prüfpfad, der genau zeigt, wann jeder Datensatz den Cluster verlassen hat und wo er gelandet ist.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren HDFS-Cluster mit der protokollbasierten Speicheroption als neues Remote hinzu.
3. Durchsuchen Sie den Cluster im Explorer-Panel, um zu bestätigen, dass Datensätze und Berechtigungen korrekt aussehen.
4. Richten Sie einen Einweg-Synchronisationsjob zu Ihrem Archivierungs-Cloud-Ziel ein, mit Filtern zum Ausschließen temporärer Dateien.

HDFS in dasselbe Fenster wie Ihre Cloud-Remotes zu bringen, verwandelt einen skriptbasierten, fehleranfälligen Exportprozess in einen wiederholbaren Job, den Sie überwachen und planen können.

---

**Verwandte Anleitungen:**

- [MinIO-Speicher verwalten — Selbst gehostete Cloud-Synchronisation in RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [Cloud-Speicher für Data Scientists — Datensätze mit RcloneView optimieren](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [KI-Trainingsdatensatz-Pipeline — Aufbau und Synchronisation mit RcloneView](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
