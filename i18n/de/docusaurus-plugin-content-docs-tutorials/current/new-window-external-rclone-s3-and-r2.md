---
sidebar_position: 11
description: "Erfahren Sie, wie Sie große Dateien mit hoher Geschwindigkeit von AWS S3 zu Cloudflare R2 übertragen – mithilfe eines externen Rclone-Daemons auf EC2, vollständig verwaltet mit RcloneView."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Hochleistungs-Dateiübertragungen zwischen AWS S3 und Cloudflare R2 über externes Rclone auf EC2

Moderne Teams jonglieren oft mit mehreren Object-Storage-Plattformen und stellen schnell fest, dass Bandbreite, Latenz und Egress-Gebühren zu kritischen Hindernissen werden, wenn große Datensätze über einen lokalen Desktop übertragen werden. Wenn **Rclone** direkt auf einer Cloud-Instanz läuft – und dann über **RcloneView** gesteuert wird –, wird der starke Datenverkehr in das schnelle Backbone der Cloud verlagert, und Ihr Laptop bleibt außerhalb des Datenpfads.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

Die folgende Anleitung übernimmt den Aufbau des Guides „Sync AWS S3 and Google Drive via EC2“ und erweitert ihn auf das S3 ↔ R2-Szenario. Sie werden:

1. Rclone als Remote-Control-Daemon (**rcd**) auf einem AWS-EC2-Server starten.
2. Ein separates RcloneView-Fenster öffnen und sich mit diesem externen Rclone verbinden.
3. AWS-S3- und Cloudflare-R2-Remotes innerhalb des auf EC2 gehosteten Rclone hinzufügen.
4. Übertragungen, Synchronisationen oder geplante Jobs durchführen – vollständig Cloud-zu-Cloud – ohne lokale Bandbreitenbeschränkungen.

:::danger AWS-Datenübertragungsgebühren
Der Datenverkehr innerhalb derselben Availability Zone ist kostenlos, aber Datenverkehr über AZ-Grenzen hinweg und ins Internet verursacht Kosten (typischerweise $0,02/GB AZ-zu-AZ; $0,09/GB ins Internet).
Siehe: [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **Warum ein externes Rclone verwenden?**

| Lokal eingebettetes Rclone                                                              | Externes Rclone auf EC2                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Datenpfad: **S3 → lokaler PC → R2** — doppelter Hop, gedrosselt durch die Upload-Geschwindigkeit zu Hause. | Datenpfad: **S3 → EC2 → R2** — einzelner Hop im Backbone der Cloud, oft 10–25 Gbit/s. |
| ISP-Beschränkungen zu Hause oder asymmetrische Bandbreite verlangsamen große Migrationen. | Deutlich höherer Durchsatz; keine lokalen Beschränkungen.                                  |
| Lokale CPU und lokaler RAM müssen jedes Byte hashen.                                    | Verlagert die CPU-Last auf eine Cloud-VM; Sie können bei Bedarf größere Instanzgrößen wählen. |
| Mögliche NAT-/Firewall-Probleme.                                                        | Öffentliche IP mit offenem Port 5572 (oder Tunnel via SSH).                                |

## Teil 1. Rclone auf EC2 bereitstellen (externes Rclone)

1. **Starten Sie eine Ubuntu-EC2-Instanz** (t3.medium oder größer für mehrfädige Uploads).
2. **Öffnen Sie TCP 5572** in der Security Group (oder verwenden Sie einen SSH-Tunnel).
3. **Rclone installieren**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **Führen Sie den rcd-Daemon** mit Basic Auth aus:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    Das Flag `--rc-addr` stellt HTTP-Endpunkte bereit, die RcloneView aufrufen kann.
    
5. **Health-Check** von Ihrem Laptop aus:
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    Eine JSON-Antwort `{}` bestätigt, dass der Daemon lauscht.

👉 Mehr erfahren:  [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## Teil 2. Ein neues RcloneView-Fenster öffnen

Um Verbindungen organisiert zu halten, ermöglicht RcloneView jedem Fenster den Betrieb mit einer eigenen Rclone-Engine.

1. Starten Sie **RcloneView**  
2. Klicken Sie auf die Schaltfläche **`New Window`** im Menü `Home`. 
3. Ein neues Anwendungsfenster wird geöffnet. Diese Instanz ist unabhängig vom Hauptfenster und behält einen eigenen Verbindungskontext bei.  

  📌 _Sie werden dieses Fenster im nächsten Schritt mit Ihrem externen Rclone (EC2) verbinden..  

👉 Mehr erfahren: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window).

## Teil 3. Mit dem auf EC2 gehosteten Rclone verbinden

Folgen Sie im **neu geöffneten Fenster** diesen Schritten, um sich mit Ihrem auf EC2 gehosteten externen Rclone zu verbinden:

1. Öffnen Sie im neuen Fenster **Settings → Connection Manager**.
2. Klicken Sie auf **New Connection** und füllen Sie das Formular aus:

| Feld           | Wert                                |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. Klicken Sie auf **`Test Connection`**, um die Einrichtung zu überprüfen.  
   Sie sollten eine erfolgreiche Verbindungsantwort sehen.  
5. Wenn der Test erfolgreich ist, klicken Sie auf **`Save`** und dann auf **`Connect`.  
6. Sie sind nun mit Ihrer **externen Rclone-Instanz auf EC2** verbunden, und der Verbindungsstatus sollte oben im Fenster angezeigt werden.   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## Teil 4. AWS-S3- und Cloudflare-R2-Remotes hinzufügen (über externes Rclone)


### ➕ AWS-S3-Remote hinzufügen

1. Gehen Sie zum Tab **`Remote`** und klicken Sie auf **`+ New Remote`**.
2. Wählen Sie im Tab **`Provider`** **Amazon S3**.
3. Im Tab **`Options`**:
   - Setzen Sie `provider` auf `AWS`
   - Geben Sie Ihre **Access Key ID** und **Secret Access Key** ein
   - Region und Endpoint können auf dem Standardwert belassen werden, sofern keine Anpassung nötig ist
4. Klicken Sie auf **Save**, um die Einrichtung abzuschließen.

👉 Mehr erfahren:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get AWS S3 Access credential](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Cloudflare-R2-Remote hinzufügen

1. Klicken Sie erneut auf **`+ New Remote`** im Tab `Remote`.
2. Wählen Sie im Tab **`Provider`** **S3** (ja, erneut — R2 verwendet das S3-Protokoll).
3. Im Tab **`Options`**:
   - Setzen Sie `provider` auf `Cloudflare`
   - Geben Sie Ihren **Cloudflare R2 Access Key** und **Secret Key** ein
   - Setzen Sie `endpoint` auf `https://<accountid>.r2.cloudflarestorage.com`
1. Klicken Sie auf **Save**, um die Einrichtung des R2-Remotes abzuschließen.

👉 Mehr erfahren:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get cloudflare R2 Access credential](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## Teil 5. Dateien zwischen AWS S3 und Cloudflare R2 synchronisieren

### 🔁 Methode A: Sync oder Job verwenden

1. Wählen Sie im Explorer-Bereich den **Cloudflare-R2**-Ordner und den **AWS-S3**-Ordner aus, die Sie synchronisieren möchten.
2. Klicken Sie auf die Schaltfläche **`Sync`** im Menü `home`.
3. Wählen Sie Sync-Optionen (einseitig oder zweiseitig), sehen Sie sich die Aktionen in der Vorschau an und bestätigen Sie.
4. RcloneView führt die Synchronisation aus und zeigt den Fortschritt im Log-Tab **`transfer`** an.

- Für wiederholte oder geplante Übertragungen:
  1. Klicken Sie im Sync-Modal auf **`Save to Jobs`**, oder öffnen Sie **`Job Manager`** → **`Add Job`**.
  2. Konfigurieren Sie Quelle, Ziel und Optionen.
  3. Speichern und manuell ausführen oder einen Zeitplan festlegen.

👉 Mehr erfahren:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Methode B: Einen wiederkehrenden Sync-Job planen

1. Wählen Sie im Explorer-Bereich die Ordner **Cloudflare R2** und **AWS S3** aus, die Sie synchron halten möchten.
2. Öffnen Sie **`Job Manager`** über das Menü **`Home`** oder **`Remote`** und klicken Sie dann auf **`Add Job`**.
3. Bestätigen Sie Ihre Quelle und Ihr Ziel.
4. Verwenden Sie den Zeitplan-Editor, um festzulegen, wann der Job ausgeführt werden soll. Sehen Sie sich Ihren Zeitplan vor dem Speichern in der Vorschau an.
5. Speichern und den geplanten Job aktivieren.

RcloneView führt die Synchronisation zu den von Ihnen festgelegten Zeiten aus. Prüfen Sie Ausführungsdetails und Protokolle in **`Job History`** und erhalten Sie Benachrichtigungen nach Abschluss.

👉 Mehr erfahren: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ Performance-Tuning-Spickzettel

| Parameter                 | Empfohlener Wert                                    | Wirkungsgrad | Begründung                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | Größere Teile reduzieren Class-A-Operationen auf R2 und verbessern die Geschwindigkeit[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | Erhöht die Multipart-Threads für R2.                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | Parallele Objekt-Uploads steigern den Durchsatz bei 10-Gbit-Verbindungen[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311). |
| `--s3-disable-checksum`   | Nur hinzufügen, wenn Prüfsummen <br />extern abgeglichen werden | ****         | Überspringt den Flaschenhals des Hashings pro Teil — mit Vorsicht verwenden[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).        |
## 📈 Ergebnisse aus der Praxis

Um die Leistung bei Cloud-zu-Cloud-Übertragungen zu maximieren, haben wir die Konfiguration des **Cloudflare-R2-Remotes** wie unten beschrieben optimiert.

:::caution Nur experimentelle Ergebnisse

RcloneView ist ein GUI-Frontend für Rclone. Die hier geteilten Performance-Tuning-Tipps und Benchmarks basieren auf experimentellen Tests, die von Community-Beiträgen inspiriert wurden ( [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)), und können je nach Ihrer spezifischen Cloud-Umgebung, Region, Netzwerkbedingungen und Ihrem Anwendungsfall variieren.

Diese Ergebnisse sind **nicht garantiert** und sollten nur als Referenz dienen.
:::

### 🔧 So aktualisieren Sie die R2-Remote-Einstellungen

So ändern Sie die Konfiguration des Ziel-R2-Remotes:

1. Klicken Sie im **Explorer**-Bereich auf das Zahnradsymbol neben Ihrem Cloudflare-R2-Remote, oder gehen Sie zu **Remote Manager → Edit**.
2. Klicken Sie im Tab **`Options`** auf **`Show advanced options`**.
3. Setzen Sie die folgenden Werte:
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. Speichern Sie Ihre Änderungen.

Die Option `disable_checksum` kann ebenfalls einen erheblichen Einfluss auf die Übertragungsgeschwindigkeit haben. Für diesen Test haben wir sie jedoch auf dem Standardwert (`false`) belassen, um die Integritätsprüfungen während der Dateiübertragung zu erhalten.
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 Baseline: Standardleistung

Bei Verwendung der **Standardeinstellungen**:

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

beobachteten wir Übertragungsgeschwindigkeiten von etwa **114 MB/s** beim Verschieben großer Dateien von **AWS S3** zu **Cloudflare R2** über **auf EC2 gehostetes Rclone**.
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 Nach dem Tuning: 4-fache Leistungssteigerung

Durch Aktualisierung des Cloudflare-R2-Remotes mit optimierten Einstellungen:

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

und bei `disable_checksum = false` erzielten wir Geschwindigkeiten von rund **440 MB/s** — eine **4-fache Verbesserung** gegenüber dem Standard.

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ Zusammenfassung

Cloud-zu-Cloud-Übertragungen müssen nicht länger im Schneckentempo über Ihren Laptop laufen. Indem Sie die aufwendige Arbeit an einen externen Rclone-Daemon auf EC2 auslagern, erschließen Sie Migrationsgeschwindigkeiten nahe der Leitungsrate, vermeiden unerwartete AWS-Egress-Kosten und behalten Ihren Workflow vollständig visuell innerhalb von RcloneView. Starten Sie Ihren nächsten S3-↔-R2-Umzug mit Zuversicht — und verabschieden Sie sich von lokalen Engpässen.

---

## 🔗 Verwandte Anleitungen

- **Speicher-Einrichtung**
	- [How to Add S3-Compatible Remotes](/howto/remote-storage-connection-settings/s3)
	- [How to Get AWS S3 Access Credentials](/howto/cloud-storage-setting/aws-account-info)
	- [How to Get Cloudflare R2 Access Credentials](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 & Remote Rclone**
	- [How to Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **Fenster- und Verbindungsverwaltung**
	- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
	- [Manage Multiple RcloneView Windows](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **Synchronisation und Job-Steuerung**
	- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
	- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
	- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
	- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **Kostenüberlegungen**
	- [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **Leistungsoptimierung**
	- [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
