---
sidebar_position: 5
description: "Erfahren Sie, wie Sie Google Drive und AWS S3 direkt in der Cloud synchronisieren, indem Sie RcloneView mit einer externen Rclone-Instanz auf AWS EC2 verbinden."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# AWS S3 und Google Drive über externes Rclone auf EC2 synchronisieren

Das Synchronisieren von Daten zwischen Cloud-Speicherdiensten (z. B. Google Drive ↔ AWS S3) mit **RcloneView** ist dank des integrierten **Embedded Rclone** ganz einfach. Wenn Sie RcloneView installieren, wird diese eingebettete Engine automatisch mitgeliefert und normalerweise für die Verwaltung von Dateiübertragungen von Ihrem **lokalen PC** aus verwendet.

Die Verwendung des Embedded Rclone bedeutet jedoch, dass **der gesamte Übertragungsverkehr über Ihren lokalen Computer läuft**. Dies kann den Vorgang erheblich verlangsamen – insbesondere beim Synchronisieren großer Datensätze oder bei Nutzung eines langsameren Netzwerks.

Wenn Sie beispielsweise Dateien mit dem Embedded Rclone von **Google Drive zu AWS S3** synchronisieren, werden die Dateien zunächst auf Ihren lokalen Rechner heruntergeladen und anschließend zu S3 hochgeladen. Diese doppelte Übertragung erhöht nicht nur die Latenz, sondern verbraucht auch Ihre lokale Bandbreite.

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
Eine bessere Lösung besteht in diesem Fall darin, **Rclone direkt auf einer Cloud-Instanz auszuführen** – zum Beispiel auf einem **AWS EC2-Server**. Indem Sie RcloneView mit diesem **externen Rclone auf EC2** verbinden, können Sie:

- den Datenverkehr über Ihren lokalen PC vermeiden  
- Cloud-zu-Cloud-Übertragungen direkt innerhalb der Cloud durchführen (Google → EC2 → S3)  
- von der schnelleren Cloud-Netzwerkinfrastruktur profitieren    

Diese Architektur verbessert die Leistung erheblich und reduziert die Belastung Ihres lokalen Geräts.

In diesem Tutorial zeigen wir Ihnen Schritt für Schritt, wie Sie mit der **New-Window-Funktion von RcloneView** eine Verbindung zu einem **externen Rclone auf EC2** herstellen und anschließend Dateien zwischen **Google Drive** und **AWS S3** vollständig über die Cloud synchronisieren.

:::caution AWS EC2- und Netzwerkübertragungsgebühren können anfallen  

Das Ausführen von Rclone auf einer EC2-Instanz kann zu schnelleren Übertragungen führen, beachten Sie jedoch, dass **AWS Gebühren für die Rechenleistung und ausgehende Datenübertragungen zu anderen Diensten berechnen kann**.  

Siehe: [AWS-Preise – Datenübertragung](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
Diese Anleitung führt Sie durch die folgenden Schritte:

1. **Rclone** auf einer AWS EC2-Instanz starten und konfigurieren  
2. Ein neues RcloneView-Fenster öffnen  
3. Eine Verbindung zum **externen Rclone** auf EC2 herstellen  
4. **Google Drive**- und **AWS S3**-Remotes hinzufügen  
5. Dateien mit verbesserter Leistung direkt zwischen ihnen synchronisieren

---

## Teil 1: Rclone auf EC2 bereitstellen (externes Rclone)

Folgen Sie der AWS-EC2-Anleitung, um Ubuntu zu starten, Port 5572 zu öffnen, Rclone zu installieren und den `rcd`-Daemon auszuführen  

👉 Siehe: [Wie man Rclone auf einem AWS-EC2-Server ausführt](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**Wichtige Punkte**:

- `rclone rcd` läuft mit `--rc-addr=0.0.0.0:5572`  
- Öffnen Sie Port `5572` in Ihrer EC2-Sicherheitsgruppe
- HTTP-Basic-Auth ist eingerichtet (`--rc-user`, `--rc-pass`)  
- Starten Sie den Daemon mit:

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- Sie überprüfen den Zugriff mit:

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## Teil 2: Ein neues RcloneView-Fenster öffnen

Um Verbindungen übersichtlich zu halten, ermöglicht RcloneView jedem Fenster, mit einer eigenen Rclone-Engine zu arbeiten.

1. Starten Sie **RcloneView**
    
2. Klicken Sie im `Home`-Menü auf die Schaltfläche **`New Window`**
    
3. Ein neues Anwendungsfenster wird geöffnet. Diese Instanz ist unabhängig vom Hauptfenster und behält ihren eigenen Verbindungskontext bei.
    

  📌 _Im nächsten Schritt verbinden Sie dieses Fenster mit Ihrem externen Rclone (EC2)._

  
👉 Mehr erfahren: [Mehrere Rclone-Verbindungen mit New Window verwenden](/howto/rcloneview-advanced/multi-window)

---

## Teil 3: Auf EC2 gehostetes externes Rclone verbinden

Führen Sie im **neu geöffneten Fenster** die folgenden Schritte aus, um eine Verbindung zu Ihrem auf EC2 gehosteten externen Rclone herzustellen:

1. Öffnen Sie den **`Connection Manager`** im `Settings`-Menü.

2. Klicken Sie auf **`New Connection`**, um ein neues Rclone-Verbindungsprofil zu erstellen.

3. Füllen Sie die erforderlichen Felder aus:

    - **Anzeigename**: `ec2-rclone` (oder ein beliebiger anderer Name)

    - **Remote-Adresse**: `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Benutzername / Passwort**: Verwenden Sie die Werte, die Sie in Teil 1 beim Starten des Rclone-Daemons festgelegt haben  
      (z. B. `--rc-user=admin`, `--rc-pass=admin`)

4. Klicken Sie auf **`Test Connection`**, um die Einrichtung zu überprüfen.  
   Sie sollten eine erfolgreiche Verbindungsantwort sehen.

5. Wenn der Test erfolgreich ist, klicken Sie auf **`Save`** und dann auf **`Connect`**.

6. Sie sind jetzt mit Ihrer **auf EC2 laufenden externen Rclone-Instanz** verbunden, und der Verbindungsstatus wird oben im Fenster angezeigt.

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 Mehr erfahren: [Neues externes Rclone hinzufügen](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## Teil 4: AWS-S3- und Google-Drive-Remotes hinzufügen (über externes Rclone)

  
Weiterhin im mit EC2 verbundenen RcloneView-Fenster:

### ➕ AWS-S3-Remote hinzufügen

1. Klicken Sie im `Remote`-Menü auf **`+ New Remote`**
    
2. Suchen und wählen Sie im Tab **Provider** S3 aus
    
3. Im Tab **`Options`**:
    
    - Setzen Sie **`Provider`** auf AWS
        
    - Geben Sie Ihre AWS-**`Access Key ID`** und Ihren **`Secret Access Key`** ein
        
    - Legen Sie **`Region`** fest und optional den **Endpoint** für S3-kompatible Dienste
        
    
4. Klicken Sie auf **Save** und vergeben Sie einen Namen (z. B. ec2-s3)
    
👉 Mehr erfahren: [AWS-S3-Remote hinzufügen](/howto/remote-storage-connection-settings/s3)

### ➕ Google-Drive-Remote hinzufügen (mit OAuth-Access-Token)

Anstatt einen neuen browserbasierten Anmeldevorgang durchzuführen, können Sie die Schritte in der folgenden Anleitung befolgen, um das zuvor erhaltene **OAuth-Access-Token** zu verwenden:

👉 Siehe: [Google Drive auf externem Rclone ohne Browser einrichten](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. Gehen Sie im `Remote`-Menü zu **`+ New Remote`**
2. Wählen Sie **Google Drive** als Anbieter
3. Scrollen Sie im Tab **Options** nach unten und klicken Sie auf **Show advanced options**
4. Fügen Sie das zuvor kopierte Token in das Feld **`token`** ein
5. Benennen Sie den Remote (z. B. `ec2-gdrive`) und speichern Sie ihn

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## Teil 5: Dateien zwischen AWS S3 und Google Drive synchronisieren

 Sie können nun Dateien zwischen Google Drive und S3 über Ihre EC2-Rclone-Instanz übertragen.

  ### **📁 Methode A: Vergleichen und bei Bedarf synchronisieren**

1. Gehen Sie zum Tab **Browse**
    
2. Laden Sie den **Google-Drive-Remote** im linken Bereich (ec2-gdrive:)
    
3. Laden Sie den **AWS-S3-Remote** im rechten Bereich (ec2-s3:)
    
4. Klicken Sie im oberen Menü auf **Compare**
    
5. Überprüfen Sie die Unterschiede:
    
    - Dateien, die nur auf einer Seite vorhanden sind
        
    - Unterschiedliche Größen
        
    - Identische Übereinstimmungen
        
    
6. Verwenden Sie **Copy →**, **← Copy** oder **Delete** zum Synchronisieren
    

💡 Der Fortschritt wird in der Statusleiste und im Tab für das Übertragungsprotokoll angezeigt.

  👉 Mehr erfahren: [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 Methode B: Einen geplanten Sync-Job einrichten**

1. Gehen Sie zu **Home → Job Manager** und klicken Sie dann auf **Add Job**
    
2. Wählen Sie **Sync**
    
    - Quelle: ec2-gdrive:folder
        
    - Ziel: ec2-s3:folder
        
    
3. Konfigurieren Sie:
    
    - Synchronisationsrichtung
        
    - Filterregeln (optional)
        
    
4. (Optional) Aktivieren Sie **Scheduling**
    
    - Zeitmuster festlegen
        
    - Zeitplan mit dem integrierten Simulator in der Vorschau anzeigen
        
    
5. Klicken Sie auf **Save & Enable**
    

  Sobald geplant, führt RcloneView Synchronisationen automatisch über Ihr auf EC2 gehostetes Rclone-Backend aus.

👉 Mehr erfahren:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## Abschließende Prüfung

- Bestätigen Sie über den Bereich **Transfer Log** oder **Job History**, dass Ihre Synchronisation erfolgreich abgeschlossen wurde
    
- Führen Sie regelmäßige Überprüfungen auf EC2 durch, um sicherzustellen, dass die Instanz weiterhin verbunden und reaktionsfähig ist
    

---

## 🔗 Verwandte Anleitungen

- [Wie man Rclone auf einem AWS-EC2-Server ausführt](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Mehrere Rclone-Verbindungen mit New Window verwenden](/howto/rcloneview-advanced/multi-window)
- [Neues externes Rclone hinzufügen](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [AWS-S3-Remote hinzufügen](/howto/remote-storage-connection-settings/s3)
- [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)
-  [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
