---
sidebar_position: 12
description: "Verschieben Sie Dateien mit hoher Geschwindigkeit von OneDrive zu Wasabi, indem Sie einen externen Rclone-Daemon ausführen und diesen mit RcloneView steuern."
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# OneDrive zu Wasabi über externes Rclone verschieben

Wenn Microsoft-365-Datensätze groß sind, kann das Verschieben über einen Laptop langsam und unzuverlässig sein. Wenn Sie **Rclone** auf einer Cloud-VM (EC2, GCE oder einem beliebigen Linux-Host) ausführen und es von **RcloneView** aus steuern, bleibt der Datenverkehr im Rechenzentrum, Engpässe im Heimnetzwerk werden vermieden und eine browserlose Authentifizierung wird möglich.

Sie werden:

1. **rclone rcd** auf einem entfernten Server als externe Engine ausführen.
2. Ein **neues RcloneView-Fenster** öffnen, das sich mit diesem externen Rclone verbindet.
3. **OneDrive**- und **Wasabi**-Remotes hinzufügen (einschließlich headless/CLI-only Auth-Wege).
4. Kopier-, Synchronisations- oder geplante Jobs von OneDrive zu Wasabi ausführen, ohne die lokale Bandbreite zu belasten.

## Teil 1. Rclone auf einem Server bereitstellen (externes Rclone)

1. Starten Sie eine kleine Linux-VM (zum Beispiel `t3.medium` auf AWS oder ein gleichwertiges Angebot).  
2. Öffnen Sie TCP **5572** für Ihre IP oder tunneln Sie über SSH.  
3. Installieren Sie Rclone:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. Starten Sie den Remote-Control-Daemon mit Authentifizierung:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. Bestätigen Sie von Ihrem Laptop aus, dass er erreichbar ist:
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   Eine `{}`-Antwort bedeutet, dass der Daemon bereit für RcloneView ist.

👉 Benötigen Sie eine Auffrischung? Siehe [Rclone auf AWS EC2 ausführen](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).

## Teil 2. Ein neues RcloneView-Fenster öffnen

Jedes RcloneView-Fenster kann mit einer anderen Rclone-Instanz gekoppelt werden.

1. Starten Sie **RcloneView**.  
2. Klicken Sie im **Home**-Menü auf **`New Window`**.  
3. Ein zweites Fenster öffnet sich; dieses verbindet sich mit dem externen Rclone, das Sie gerade gestartet haben.

👉 Mehr erfahren: [Mehrere Rclone-Verbindungen mit New Window nutzen](/howto/rcloneview-advanced/multi-window).

## Teil 3. RcloneView mit dem externen Rclone verbinden

Im neuen Fenster:

1. Öffnen Sie **Settings -> Connection Manager** -> **New Connection**.  
2. Füllen Sie aus:

| Feld           | Wert                                |
| -------------- | ------------------------------------ |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. Klicken Sie auf **Test Connection** -> **Save** -> **Connect**. Die Statusleiste sollte anzeigen, dass Sie mit dem externen Daemon verbunden sind.

## Teil 4. Wasabi- und OneDrive-Remotes hinzufügen (innerhalb des externen Rclone)

Alle Remotes, die Sie jetzt erstellen, befinden sich im externen Rclone-Prozess und werden vom verbundenen RcloneView-Fenster gemeinsam genutzt.

### ➕ Wasabi hinzufügen (S3-kompatibel)

1. Gehen Sie zum **Remote**-Tab -> **`+ New Remote`**.  
2. Wählen Sie **S3 / Wasabi**.  
3. Geben Sie **Access Key**, **Secret Key** und den **Endpoint** für Ihre Region ein (zum Beispiel `s3.ap-northeast-2.wasabisys.com`).  
4. Speichern Sie das Remote (z. B. mit dem Namen `wasabi-prod`).

👉 Details: [Wasabi-Remote hinzufügen](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview).

### ➕ OneDrive hinzufügen (funktioniert ohne lokalen Browser)

1. Klicken Sie erneut auf **`+ New Remote`** und wählen Sie **OneDrive**.  
2. Wenn der Server über einen Browser verfügt, führen Sie den Standard-OAuth-Ablauf in RcloneView durch.  
3. Wenn der Server headless ist oder keinen Browser öffnen kann, folgen Sie der Headless-/CLI-Methode: Erzeugen Sie das Token auf einem Gerät mit Browser und fügen Sie es in die serverseitige Konfiguration ein.  

👉 Schritt-für-Schritt-Headless-Ablauf: [Microsoft-Remotes von EC2/headless hinzufügen](/howto/remote-storage-connection-settings/ec2-onedrive-headless).
Nach dem Speichern sollten im Explorer zwei Remotes angezeigt werden: **OneDrive** und **Wasabi**.

## Teil 5. Übertragung oder Synchronisation zu Wasabi

### Methode A: Einmaliges Kopieren/Synchronisieren

1. Öffnen Sie im Explorer **OneDrive** auf der einen Seite und **Wasabi** auf der anderen.  
2. Wählen Sie den Quellordner auf OneDrive und den Ziel-Bucket/-Ordner auf Wasabi.  
3. Klicken Sie auf **`Sync`** (gleicht das Ziel an die Quelle an) oder verwenden Sie **Copy ->** für ein einfaches Kopieren.  
4. Führen Sie optional zunächst **Dry Run** aus und starten Sie dann mit **Run**. Der Fortschritt wird im **Transfer**-Tab angezeigt.

### Methode B: Jobs speichern oder planen

1. Konfigurieren Sie ein Kopier-/Sync-Vorgang wie oben, und wählen Sie dann im Dialog **Save to Jobs**.  
2. Öffnen Sie den **Job Manager**, um den gespeicherten Job jederzeit erneut auszuführen.  
3. Um dies zu automatisieren, aktivieren Sie **Schedule** im Job Manager (PLUS-Funktion) und legen Sie den gewünschten Rhythmus fest.  
4. Prüfen Sie **Job History** für Protokolle und Ergebnisse.

👉 Mehr zu Jobs und Zeitplanung:  
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)  
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)  
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Schnelle Tipps für schnellere Wasabi-Uploads

- Halten Sie die externe VM nach Möglichkeit in derselben Region wie Wasabi, um die Latenz zu reduzieren.  
- Bei großen Objekten können höhere Werte für `--transfers` und `--s3-upload-concurrency` den Durchsatz verbessern; passen Sie diese schrittweise basierend auf CPU und Netzwerk an.  
- Verwenden Sie **Dry Run** vor destruktiven Synchronisationen, um zu prüfen, was sich ändern wird.

## ✅ Zusammenfassung

Indem Sie Rclone als Remote-Daemon hosten und ihn von einem dedizierten RcloneView-Fenster aus steuern, erhalten Sie zuverlässige OneDrive -> Wasabi-Migrationen ohne lokale Engpässe. Headless-Auth-Abläufe helfen Ihnen weiter, wenn kein Browser verfügbar ist, und Jobs/Zeitpläne machen wiederholte Ausführungen mühelos.

## 🔗 Verwandte Anleitungen

- **Authentifizierung & Remotes**  
  - [Microsoft-Remotes von EC2/headless hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [S3-kompatibles Remote hinzufügen](/howto/remote-storage-connection-settings/s3)  
- **Externes Rclone & Fenster**  
  - [Mehrere Rclone-Verbindungen mit New Window nutzen](/howto/rcloneview-advanced/multi-window)  
  - [Rclone auf AWS EC2 ausführen](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **Übertragungen & Automatisierung**  
  - [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)  
  - [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
