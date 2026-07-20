---
sidebar_position: 2
description: "Erfahren Sie, wie Sie RcloneView mit Wasabi verwenden, um Daten zwischen lokalem Speicher und anderen Clouds zu durchsuchen, zu sichern, zu synchronisieren und zu migrieren."
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - Cloud-Backup
  - Cloud-Synchronisation
  - Cloud-Migration
  - Dateisynchronisation
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# Wasabi mit RcloneView verwenden (S3-kompatibel)

RcloneView ist eine Desktop-Anwendung, die Ihnen einen visuellen Zwei‑Fenster‑Explorer für **rclone** bietet. Damit können Sie Dateien zwischen **Wasabi** und anderen Cloud- oder lokalen Speichern kopieren, synchronisieren und migrieren, ohne die Kommandozeile zu verwenden.

Mit RcloneView können Sie:

- Ihre Wasabi-Buckets wie lokale Ordner durchsuchen  
- Dateien per Drag & Drop zwischen **lokalem Laufwerk ↔ Wasabi** oder **Wasabi ↔ anderen Clouds** verschieben  
- Einmalige Übertragungen ausführen oder wiederkehrende Synchronisationsjobs planen  

Wenn Sie es zunächst in Aktion sehen möchten, können Sie sich eine kurze Demo ansehen:

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> Weitere Informationen zu RcloneView finden Sie auf der offiziellen Website: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. RcloneView herunterladen und installieren

RcloneView ist für **Windows, macOS und Linux** verfügbar.

1. Gehen Sie zur Download-Seite: [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. Wählen Sie den Installer für Ihr Betriebssystem (Windows, macOS oder Linux).  
3. Installieren und starten Sie **RcloneView**.

---

## 2. Wasabi als Remote in RcloneView hinzufügen

RcloneView behandelt Wasabi als **S3-kompatibles** Backend. Sie erstellen einmal einen Remote und verwenden ihn dann erneut zum Durchsuchen, Kopieren, Synchronisieren und für geplante Jobs.

### 2.1 Voraussetzungen – Wasabi-Zugriffsschlüssel und Endpunkt

Um RcloneView mit Wasabi zu verbinden, benötigen Sie:

- **Access Key** / **Secret Key**  
- **Region / Endpoint-URL** (zum Beispiel Region `ap-northeast-2` und Endpunkt `s3.ap-northeast-2.wasabisys.com`)  

Bitte folgen Sie der offiziellen Dokumentation von Wasabi, um einen Zugriffsschlüssel zu erstellen und Ihren Endpunkt zu finden:

- Wasabi-Dokumentation: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- Beispiel: „[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)“ oder „[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)“ (suchen Sie im Wasabi-Dokumentationsportal).

Sobald Sie Ihren **Access Key**, **Secret Key** und **Endpoint** haben, kehren Sie zu RcloneView zurück.

### 2.2 Den Assistenten „Neuer Remote“ öffnen

1. Starten Sie **RcloneView**.  
2. Klicken Sie im oberen Menü auf **`Remote` → `+ New Remote`**.  
   - Oder klicken Sie auf die Registerkarte **`+`** im Explorer-Fenster und wählen Sie **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 Wasabi als S3-kompatiblen Anbieter konfigurieren

1. Suchen Sie im Dialog **New Remote** nach `Wasabi`.  
2. Wählen Sie die Anbieterkachel **Wasabi** aus.  
3. Konfigurieren Sie die Verbindung:
   - **Remote name**: Geben Sie einen aussagekräftigen Namen ein, z. B. `MyWasabi`.  
   - **Access Key ID**: Fügen Sie Ihren Wasabi-Zugriffsschlüssel ein.  
   - **Secret Access Key**: Fügen Sie Ihren Wasabi-Geheimschlüssel ein.  
   - **Endpoint**: Geben Sie den Wasabi-S3-Endpunkt ein (zum Beispiel `s3.ap-northeast-2.wasabisys.com`).  
4. Klicken Sie auf **Add Remote**.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Den Wasabi-Remote überprüfen

1. Öffnen Sie **`Remote → Remote Manager`**.  
2. Bestätigen Sie, dass Ihr Wasabi-Remote (zum Beispiel `MyWasabi`) aufgeführt und erreichbar ist.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

Weitere Details finden Sie im allgemeinen S3-kompatiblen Leitfaden:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Ordner in Wasabi durchsuchen

Sobald der Remote erstellt ist, können Sie Buckets und Objekte im Explorer von RcloneView durchsuchen.

1. Klicken Sie im Explorer-Fenster auf die Registerkarte **`+`**.  
2. Wählen Sie in der Liste „Open Remote“ Ihren **Wasabi**-Remote aus (z. B. `MyWasabi`).  
3. RcloneView öffnet den Remote in einer Registerkarte, in der Buckets wie Ordner der obersten Ebene erscheinen.  
4. Doppelklicken Sie auf einen Bucket, um dessen Inhalt zu erkunden.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

Weitere allgemeine Navigationstipps finden Sie hier:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. Dateien zwischen lokalem Laufwerk und Wasabi verwalten

Dieser Abschnitt zeigt praktische Möglichkeiten, mit RcloneView Daten zwischen Ihrem lokalen Computer und Wasabi zu verschieben.

Sie können öffnen:

- **Linkes Fenster**: lokales Laufwerk (zum Beispiel `C:\` oder ein bestimmter Ordner)  
- **Rechtes Fenster**: Ihr Wasabi-Remote-Bucket  

Verwenden Sie anschließend je nach Arbeitsablauf Drag & Drop, Ordnervergleich oder Synchronisationsjobs.

---

### 4.1 Drag & Drop zwischen lokalem Laufwerk und Wasabi

Drag & Drop ist die einfachste Methode, um Dateien zu kopieren.

1. Öffnen Sie im linken Fenster Ihren **lokalen Ordner** (z. B. `D:\Media`).  
2. Öffnen Sie im rechten Fenster Ihren **Wasabi-Bucket/-Ordner**.  
3. Wählen Sie links Dateien oder Ordner aus.  
4. Ziehen Sie sie in das rechte Fenster und legen Sie sie am gewünschten Ort ab.  
5. RcloneView startet einen Übertragungsjob; der Fortschritt wird in der Registerkarte **Transfer** angezeigt.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
Weitere Informationen zu Mehrfachauswahl, Rechtsklick-Aktionen und mehr finden Sie hier:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 Ordner vergleichen und geänderte Dateien kopieren

Wenn Sie vor dem Kopieren **Unterschiede** sehen möchten, verwenden Sie die Funktion **Compare**.

Typischer Anwendungsfall: Vergleich eines lokalen Backup-Ordners mit einem Wasabi-Backup-Ordner.

1. Öffnen Sie im linken Fenster den **Quellordner** (z. B. lokal oder eine andere Cloud).  
2. Öffnen Sie im rechten Fenster den **Wasabi-Zielordner**.  
3. Klicken Sie im oberen Menü **Home** auf **`Compare`**.  
4. RcloneView markiert:
   - Dateien, die nur links vorhanden sind (nur Quelle)  
   - Dateien, die nur rechts vorhanden sind (nur Ziel)  
   - Geänderte Dateien (Größe, Zeitstempel oder Prüfsumme weichen ab)  
5. Wählen Sie die Elemente aus, die Sie verschieben möchten, und klicken Sie auf **Copy →** (oder **← Copy** für die umgekehrte Richtung).

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
Weitere Informationen:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 Synchronisationsjobs zwischen lokalem Laufwerk und Wasabi

Für wiederholbare Backups oder Spiegelungen verwenden Sie **Sync**. Sync sorgt dafür, dass das Ziel der Quelle entspricht.

Es gibt drei gängige Muster:

- **Instant Sync** (sofort einmalig ausführen)  
- **Saved Sync Job** (bei Bedarf erneut ausführen)  
- **Scheduled Sync Job** (automatisch nach Zeitplan ausführen)  

> ⚠️ Sync aktualisiert das Ziel so, dass es der Quelle entspricht; Dateien, die nur im Ziel vorhanden sind, können gelöscht werden. Überprüfen Sie die Synchronisationseinstellungen sorgfältig, bevor Sie den Vorgang ausführen.

#### 4.3.1 Instant Sync (einmalig)

1. Öffnen Sie im linken Fenster den **Quellordner** (zum Beispiel einen lokalen Ordner).  
2. Öffnen Sie im rechten Fenster den **Wasabi-Zielordner**.  
3. Klicken Sie im Menü **Home** auf **`Sync`**.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

Führen Sie dann im Dialog **Sync** Folgendes aus:

1. Bestätigen Sie in **Configure Storage** die Quelle und das Ziel.  
2. Passen Sie optional die **Advanced Settings** oder **Filtering Settings** an.  
3. Führen Sie zunächst einen **Dry Run** aus, wenn Sie die Änderungen vorab ansehen möchten.  
4. Klicken Sie auf **Run**, um die Synchronisation zu starten.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
Nach dem Start von Sync können Sie den Fortschritt der Dateiübertragung in Echtzeit überwachen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

Referenz:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 Einen Synchronisationsjob zur Wiederverwendung speichern

Wenn Sie regelmäßig dasselbe lokal → Wasabi-Backup ausführen möchten:  
Konfigurieren Sie eine Synchronisation wie oben beschrieben (Quelle links, Wasabi-Ziel rechts).    

1. Wählen Sie im Sync-Dialog **Save to Jobs**, anstatt sofort auszuführen.  
2. Geben Sie dem Job einen aussagekräftigen Namen wie `SyncLocalToWasabi`.  
3. Öffnen Sie später den **Job Manager** und führen Sie den Job manuell aus, wann immer Sie ein aktuelles Backup benötigen.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
Auf unterstützten Plattformen (wie Windows) kann RcloneView eine Systembenachrichtigung anzeigen, wenn der Job abgeschlossen ist.

Referenz:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Automatische Wasabi-Backups planen (Job Scheduling)

Um Backups zu Wasabi vollständig zu automatisieren, planen Sie Ihren Synchronisationsjob.

> 📌 **Job Scheduling ist eine PLUS-Funktion.** Sie benötigen eine [PLUS-Lizenz](https://rcloneview.com/src/pricing.html), um die Planung zu aktivieren.

Öffnen Sie den **Job Manager** über die Symbolleiste.    
1. Wählen Sie Ihren Wasabi-Synchronisationsjob aus (zum Beispiel `LocalToWasabi_DailyBackup`) und klicken Sie auf **Edit Job**, oder erstellen Sie einen neuen Job aus Ihrer aktuellen Explorer-Auswahl.  
2. Gehen Sie zu **Step 4: Scheduling**.  
3. Aktivieren Sie **Run whenever time units ~** und legen Sie den Zeitplan fest (zum Beispiel täglich um 01:00 Uhr).  
4. Verwenden Sie **Simulate**, um die kommenden Ausführungszeiten in der Vorschau zu sehen.  
5. Speichern Sie den Job und lassen Sie RcloneView laufen; der Job wird dann automatisch ausgeführt.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


Weitere Details:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Mount verwenden, um mit Wasabi im Windows-Explorer zu arbeiten

Sie können einen Wasabi-Bucket als **virtuelles Laufwerk oder virtuellen Ordner** in Ihr System einbinden (mount) und anschließend den Windows-Explorer (oder Finder unter macOS) wie gewohnt verwenden.

Typischer Ablauf:

Stellen Sie sicher, dass Ihr Wasabi-Remote konfiguriert ist und funktioniert.  
1. Wählen Sie den Wasabi-Ordner aus, den Sie einbinden möchten.  
2. Klicken Sie oben rechts im Explorer von RcloneView auf das Symbol **Mount**.  
3. Klicken Sie auf die Schaltfläche **Save and mount**, um das Einbinden zu starten.  
4. Nach kurzer Zeit erscheint ein neues Laufwerk oder ein neuer Ordner in Ihrem Betriebssystem. Das Durchsuchen dieses Pfads liest und schreibt Daten direkt über RcloneView/rclone von bzw. zu Wasabi.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
Weitere Informationen:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. Wo Sie Hilfe erhalten

- RcloneView-Dokumentation und Anleitungen: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabi-Dokumentationsportal: [https://docs.wasabi.com](https://docs.wasabi.com)  

Durch die Kombination des S3-kompatiblen Objektspeichers von Wasabi mit der visuellen Job-Verwaltung von RcloneView können Sie zuverlässige Backup-, Synchronisations- und Migrations-Workflows aufbauen, ohne die rclone-Kommandozeilensyntax lernen zu müssen.
