---
sidebar_position: 10
description: "Erfahren Sie, wie Sie Ihre Daten mit RcloneView von Amazon S3 zu Cloudflare R2 migrieren."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';


# Migration von AWS S3 zu Cloudflare R2 mit RcloneView

In der heutigen cloudgetriebenen Landschaft möchten Organisationen und Entwickler häufig Speicherkosten optimieren, einen Vendor-Lock-in vermeiden und die Zugänglichkeit ihrer Daten verbessern. **Amazon S3** ist seit Langem der Industriestandard für Objektspeicher und bietet hohe Ausfallsicherheit sowie eine nahtlose Integration mit AWS-Diensten. Mit wachsendem Datenübertragungsvolumen können jedoch die Egress-Gebühren und die komplexe Abrechnung von S3 zu einer erheblichen Belastung werden.

**Cloudflare R2** erweist sich als überzeugende Alternative – es bietet S3-kompatiblen Speicher ohne Egress-Gebühren, ein transparentes Preismodell und globale Leistung durch Cloudflares großes Edge-Netzwerk. Die Migration von S3 zu R2 ermöglicht Ihnen:

- **Egress-Gebühren zu eliminieren** und die Gesamtkosten für Cloud-Speicher zu senken
- **Vendor-Lock-in zu vermeiden** dank S3-API-Kompatibilität und flexibler Multi-Cloud-Setups
- **Cloudflares globales Edge-Netzwerk zu nutzen** für schnelleren, zuverlässigeren Datenzugriff
- **Abrechnung und Verwaltung zu vereinfachen** mit einem benutzerfreundlichen Dashboard

Eine manuelle Migration zwischen Cloud-Plattformen ist mühsam und fehleranfällig. Genau hier macht **RcloneView** den Unterschied.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## Warum RcloneView für die Migration von S3 zu R2 verwenden?

RcloneView ist ein grafischer Cloud-Speicher-Manager, der auf Rclone aufbaut. Es unterstützt **S3-kompatible Endpunkte** wie AWS S3 und Cloudflare R2 von Haus aus, mit:

- Vollständiger Unterstützung für **Access-Key-/Secret-Key-Authentifizierung**
- Möglichkeit, benutzerdefinierte Endpunkte festzulegen (für R2)
- Zweispaltigem Explorer für die Migration von Dateien per Drag & Drop
- Werkzeugen zum Vergleichen und Synchronisieren von Ordnern
- Geplanten Jobs für Massen- oder inkrementelle Migrationen
- Detaillierten Fortschrittsprotokollen und Fehlerbehandlung

Egal ob Sie Terabytes an Daten oder nur ein paar Ordner verschieben – mit RcloneView migrieren Sie sicher, ganz ohne Kommandozeilen-Kenntnisse.

## 🔄 Dateien von AWS S3 zu Cloudflare R2 übertragen

### Schritt 1: AWS-S3-Remote hinzufügen

1. Starten Sie **RcloneView**, wechseln Sie zum Tab **`Remote`** und klicken Sie auf **`+ New Remote`**.
2. Wählen Sie im Tab **`Provider`** **Amazon S3** aus.
3. Im Tab **`Options`**:
   - Setzen Sie `provider` auf `AWS`
   - Geben Sie Ihre **Access Key ID** und Ihren **Secret Access Key** ein
   - Region und Endpunkt können auf den Standardwerten belassen werden, sofern nicht angepasst
4. Klicken Sie auf **Save**, um die Einrichtung abzuschließen.

👉 Mehr erfahren:   
- [Wie man einen S3-Remote hinzufügt](/howto/remote-storage-connection-settings/s3)
- [Wie man AWS-S3-Zugangsdaten erhält](/howto/cloud-storage-setting/aws-account-info)
### Schritt 2: Cloudflare-R2-Remote hinzufügen

1. Klicken Sie erneut im Tab `Remote` auf **`+ New Remote`**.
2. Wählen Sie im Tab **`Provider`** **S3** aus (ja, wieder – R2 verwendet das S3-Protokoll).
3. Im Tab **`Options`**:
   - Setzen Sie `provider` auf `Cloudflare`
   - Geben Sie Ihren **Cloudflare R2 Access Key** und **Secret Key** ein
   - Setzen Sie `endpoint` auf `https://<accountid>.r2.cloudflarestorage.com`
1. Klicken Sie auf **Save**, um die Einrichtung des R2-Remotes abzuschließen.

👉 Mehr erfahren:   
- [Wie man einen S3-Remote hinzufügt](/howto/remote-storage-connection-settings/s3)
- [Wie man Cloudflare-R2-Zugangsdaten erhält](/howto/cloud-storage-setting/cloudflare-r2-credential)

### Schritt 3: Remotes im zweispaltigen Explorer öffnen

1. Wechseln Sie in RcloneView zum Tab **Browse**.
2. Klicken Sie im linken Bereich auf `+` und wählen Sie Ihren **AWS-S3**-Remote aus.
3. Klicken Sie im rechten Bereich auf `+` und wählen Sie Ihren **Cloudflare-R2**-Remote aus.
4. Sie können nun beide Dienste nebeneinander anzeigen und verwalten.

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 Methoden zur Dateimigration

### 🖱️ Methode 1: Dateien per Drag & Drop verschieben

- Wählen Sie links Dateien oder Ordner aus AWS S3 aus.
- Ziehen Sie sie per Drag & Drop in den rechten Cloudflare-R2-Bereich.
- Die Übertragung beginnt automatisch, der Fortschritt wird im Tab **`Transfer`** angezeigt.

👉 Mehr erfahren: [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 Methode 2: Ordner vergleichen und übertragen

1. Navigieren Sie in beiden Bereichen zu den entsprechenden Quell- (S3) und Zielordnern (R2).
2. Klicken Sie im Menü `Home` auf **`Compare`**.
3. RcloneView hebt hervor:
   - Dateien, die nur in S3 vorhanden sind
   - Dateien, die bereits in R2 vorhanden sind
   - Gleiche Dateien mit unterschiedlicher Größe oder unterschiedlichem Zeitstempel
4. Klicken Sie auf **Copy →**, um die ausgewählten Dateien von S3 zu R2 zu migrieren.
5. Verwenden Sie bei Bedarf **Delete** zum Aufräumen.

👉 Mehr erfahren: [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 Methode 3: Synchronisation oder Job verwenden

1. Wählen Sie im Explorer-Bereich den **Cloudflare-R2**-Ordner und den **AWS-S3**-Ordner aus, die Sie synchronisieren möchten.
2. Klicken Sie im Menü `home` auf die Schaltfläche **`Sync`**.
3. Wählen Sie die Synchronisationsoptionen (einseitig oder zweiseitig), prüfen Sie die geplanten Aktionen in der Vorschau und bestätigen Sie.
4. RcloneView führt die Synchronisation aus und zeigt den Fortschritt im Protokoll-Tab **`transfer`** an.

- Für wiederholte oder geplante Übertragungen:
  1. Klicken Sie im Sync-Dialog auf **`Save to Jobs`**, oder öffnen Sie **`Job Manager`** → **`Add Job`**.
  2. Konfigurieren Sie Quelle, Ziel und Optionen.
  3. Speichern Sie und starten Sie manuell oder legen Sie einen Zeitplan fest.

👉 Mehr erfahren:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Methode 4: Wiederkehrenden Sync-Job planen

1. Wählen Sie im Explorer-Bereich die **Cloudflare-R2**- und **AWS-S3**-Ordner aus, die synchron gehalten werden sollen.
2. Öffnen Sie **`Job Manager`** über das Menü **`Home`** oder **`Remote`** und klicken Sie dann auf **`Add Job`**.
3. Bestätigen Sie Ihre Quelle und Ihr Ziel.
4. Verwenden Sie den Zeitplan-Editor, um festzulegen, wann der Job ausgeführt werden soll. Prüfen Sie den Zeitplan in der Vorschau, bevor Sie speichern.
5. Speichern Sie und aktivieren Sie den geplanten Job.

RcloneView führt die Synchronisation zu den von Ihnen festgelegten Zeiten aus. Details zur Ausführung und Protokolle finden Sie unter **`Job History`**, und Sie erhalten nach Abschluss Benachrichtigungen.

👉 Mehr erfahren: [Jobplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ Zusammenfassung

Die Migration von AWS S3 zu Cloudflare R2 hilft, Egress-Kosten und Vendor-Lock-in zu reduzieren – ohne Einbußen bei der Leistung. Mit RcloneView ist der Wechsel schnell, sicher und vollständig visuell.

Probieren Sie es noch heute aus und machen Sie Ihren Cloud-Speicher mit Cloudflare R2 zukunftssicher.

---

## 🔗 Verwandte Anleitungen

- [Wie man einen S3-Remote hinzufügt](/howto/remote-storage-connection-settings/s3)
- [Wie man AWS-S3-Zugangsdaten erhält](/howto/cloud-storage-setting/aws-account-info)
- [Wie man Cloudflare-R2-Zugangsdaten erhält](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)
- [Jobplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
