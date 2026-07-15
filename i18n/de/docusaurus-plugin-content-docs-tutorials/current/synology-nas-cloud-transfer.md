---
sidebar_position: 3
description: "Erfahren Sie, wie Sie Synology NAS automatisch in Ihrem lokalen Netzwerk erkennen und über WebDAV, SMB oder SFTP mit RcloneView verbinden."
keywords:
  - rcloneview
  - Synology NAS
  - Auto-Erkennung
  - NAS-zu-Cloud-Übertragung
  - SMB
  - WebDAV
  - SFTP
  - Synology-Integration
  - Cloud-Speicher-Synchronisation
  - Cloud-Backup
  - google drive
  - onedrive
  - Drag-and-Drop
  - Job-Planer
  - Multi-Cloud-Verwaltung
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Mühelose Synology-NAS-Integration mit RcloneView: Auto-Erkennung, Einrichtung & Dateiübertragung

Verbinden Sie Ihr Synology NAS ganz einfach mit Cloud-Diensten wie Google Drive, OneDrive oder iCloud mithilfe von **RcloneView**. Mit Auto-Erkennung, integrierter Unterstützung für SMB, WebDAV und SFTP sowie ohne komplizierte Einrichtung können Sie Übertragungen, Synchronisationen oder geplante Jobs zwischen Ihrem NAS und Cloud-Speichern ausführen – alles über eine benutzerfreundliche Oberfläche.

## **✅ Warum RcloneView für NAS-zu-Cloud-Übertragungen nutzen?**

Wenn Sie ein Synology NAS als Heimserver, Büro-Backup oder Mediendepot nutzen, haben Sie wahrscheinlich auch Cloud-Speicherkonten. Mit RcloneView müssen Sie sich nicht auf manuelles Herunterladen von Dateien oder das Erlernen von Kommandozeilen-Tools verlassen.

Stattdessen erhalten Sie:

- 🚀 Auto-Erkennung von NAS-Geräten in Ihrem lokalen Netzwerk

- 🔄 Synchronisations- und Übertragungsjobs zwischen NAS und Cloud-Speicher

- 👨‍💻 GUI-basierte Einrichtung für WebDAV, SMB, FTP und SFTP

- 📅 Planung automatisierter Backup-Jobs vom NAS in die Cloud

- ✅ Vergleich von Ordnerinhalten vor der Synchronisation

- 🧠 Keine Kommandozeilenkenntnisse erforderlich


Egal ob Anfänger oder Systemadministrator – **RcloneView macht die NAS-zu-Cloud-Verwaltung einfach**.

## **🧰 Schritt 1: NAS im lokalen Netzwerk erkennen**


RcloneView durchsucht automatisch Ihr lokales Netzwerk nach Synology-NAS-Geräten.

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- Stellen Sie sicher, dass sich NAS und Computer im **gleichen lokalen Netzwerk** befinden.

- Erkannte NAS-Geräte erscheinen in einer Liste mit:

    - Gerätename, IP, MAC-Adresse, DSM-Port

    - Link zum Öffnen von **DSM (DiskStation Manager)**


:::info NAS-Auto-Erkennung funktioniert nicht in VLANs
Wenn Sie ein VLAN (Virtual Local Area Network) verwenden, kann RcloneView Ihr Synology NAS möglicherweise nicht automatisch erkennen.

Das liegt daran, dass die Auto-Erkennung auf Multicast- oder Broadcast-Protokollen basiert, die zwischen VLANs aus Sicherheits- und Netzwerksegmentierungsgründen häufig eingeschränkt oder blockiert sind.
:::


### Verbindungsmethode auswählen

Wählen Sie im Dropdown-Menü, wie Sie sich verbinden möchten:

- **WebDAV** (Standard und empfohlen)
- **SMB**
- **FTP**
- **SFTP**

**🔗 Müssen Sie dies zuerst auf Synology konfigurieren?**

Konsultieren Sie die offiziellen DSM-Einrichtungsanleitungen:

- [WebDAV auf Synology einrichten](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [SMB auf Synology aktivieren](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [FTP auf Synology einrichten](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting)
- [SFTP auf Synology einrichten](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp)

:::important Port-Weiterleitung & DDNS-Konfiguration

Wenn sich Ihr NAS hinter einem Router oder in einer NAT-Umgebung (Network Address Translation) befindet, müssen Sie nach der Aktivierung von WebDAV, SMB, FTP oder SFTP in DSM eine **Port-Weiterleitung** auf Ihrem Router **konfigurieren**.

📘 Weitere Informationen: [Synology-Anleitung zur Port-Weiterleitung](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

Um zusätzlich über das Internet mit **domainbasiertem Zugriff statt IP-Adresse** auf Ihr NAS zuzugreifen, können Sie den **DDNS-Dienst (Dynamic DNS)** von Synology konfigurieren.

🌐 Weitere Informationen: [Synology-Anleitung zur DDNS-Einrichtung](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 Schritt 2: Synology NAS als Remote hinzufügen**

Nachdem Sie Ihr NAS und die Verbindungsmethode ausgewählt haben, führt Sie RcloneView automatisch durch den Assistenten **`+ New Remote`**:

- Der **Provider** wird automatisch basierend auf der gewählten Verbindungsmethode ausgewählt (z. B. WebDAV, SMB, SFTP).
- Der **Remote-Name** wird automatisch ausgefüllt (z. B. `Synology-28`) – Sie können ihn jedoch nach Belieben ändern.
- **URL & Port**:
  - Geben Sie für **WebDAV** die vollständige URL ein (z. B. `https://abc.synology.me:5006`)
  - Geben Sie für **SMB / FTP / SFTP** den **Host** (z. B. `192.168.1.100`) und den passenden **Port** ein:
    - `445` für SMB
    - `21` für FTP
    - `22` für SFTP
- **Benutzername und Passwort**: Geben Sie die NAS-Kontodaten ein, mit denen Sie auf freigegebene Ordner zugreifen.

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **Benötigen Sie weitere Hilfe zu den einzelnen Methoden?**
Hier sind detaillierte Einrichtungsanleitungen:

- 👉 [So fügen Sie ein SFTP-Remote hinzu](/howto/remote-storage-connection-settings/sftp)
- 👉 [So fügen Sie ein WebDAV-Remote hinzu](/howto/remote-storage-connection-settings/webdav)



✅ Nach dem Hinzufügen erscheint Ihr NAS-Remote in der Remote-Liste.
Sie können es dann im **Explorer**-Panel öffnen, um Dateien zu durchsuchen oder Übertragungen zu starten.

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 Schritt 2.5: NAS als lokales Laufwerk einbinden (Explorer/Finder)**

Binden Sie jeden NAS-Ordner als lokales Laufwerk unter Windows (z. B. `W:`) oder als Speicherort im macOS Finder ein. Verwenden Sie dazu die Mount-Schaltfläche in der Explorer-Symbolleiste.

### So binden Sie ein

1. Öffnen Sie in RcloneView **Browse/Explorer** Ihr NAS-Remote und navigieren Sie zum Ordner, den Sie einbinden möchten.
2. Klicken Sie auf das Symbol **Mount (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)** in der oberen Symbolleiste.
3. Konfigurieren Sie die Optionen:
   - Windows: Wählen Sie einen Laufwerksbuchstaben (Auto oder manuell)
   - macOS: Bestätigen Sie den Namen des Mount-Ordners (Standard wie `~/homefolder/<Remote name>`),
4. Klicken Sie auf **Save and mount**. Der Ordner erscheint als lokales Laufwerk:
   - Windows: unter „Dieser PC“, z. B. `synology-28-webdav … (W:)`
   - macOS: unter Finder „Orte“

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />

:::tip Trennen (Unmount)
Um die Verbindung zu trennen, klicken Sie in RcloneView auf **Unmount** oder werfen Sie das Laufwerk über das Betriebssystem aus.
:::

:::note Voraussetzungen
Das Einbinden über `rclone mount` kann einen Dateisystemtreiber des Betriebssystems erfordern. Falls dieser nicht installiert ist, folgen Sie den untenstehenden Links:
- Windows: [WinFsp](https://winfsp.dev/)
- macOS: [macFUSE](https://osxfuse.github.io/)

Zur Leistungssteigerung aktiviert RcloneView während intensiver Operationen einen **VFS-Cache**. Das anfängliche Laden der Metadaten kann je nach Netzwerkbedingungen einen Moment dauern.
:::

Weitere Details und zusätzliche Methoden finden Sie hier:

- [Methode 1: Einbinden über den Remote-Explorer](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [Methode 2: Einbinden über den Mount-Manager](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [Eingebundene Laufwerke anzeigen und verwalten](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [Schnelles Einbinden über die Systemablage](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 Schritt 3: Dateien übertragen oder synchronisieren**


Sobald Ihr NAS als Remote verbunden ist, bietet Ihnen RcloneView **4 leistungsstarke Möglichkeiten**, Dateien zwischen ihm und Ihrem Cloud-Speicher zu verwalten.


### **🖱️ Methode 1: Drag & Drop**

1. Öffnen Sie den Tab **Browse**.

2. Laden Sie Ihr **NAS**-Remote in einem Bereich und Ihr Cloud-Remote (z. B. Google Drive) im anderen.

3. Ziehen Sie einfach Dateien aus einem Bereich und legen Sie sie im anderen ab.

4. Die Übertragung startet sofort. Sie können sie im Tab **Transfer Logs** überwachen.

<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 Weitere Informationen: [Remote-Speicher durchsuchen](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 Methode 2: Ordnerinhalte vergleichen**

1. Öffnen Sie sowohl NAS- als auch Cloud-Ordner in den Explorer-Bereichen.

2. Klicken Sie im oberen Menü im Tab **Home** auf **Compare**.

3. RcloneView markiert:

    - Dateien, die nur auf einer Seite vorhanden sind

    - Dateien mit Größen- oder Prüfsummenkonflikten

    - Identische Dateien


4. Verwenden Sie **Copy →**, **← Copy** oder **Delete**, um Aktionen auf Dateien anzuwenden.

<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 Weitere Informationen: [Ordner vergleichen](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 Methode 3: Synchronisation oder einmaliger Job**

1. Wählen Sie Quelle (NAS) und Ziel (Cloud) aus.

2. Klicken Sie auf **Sync**, um die Synchronisationsoptionen zu öffnen.

3. Wählen Sie Richtung, Dry-Run, Filter usw.

4. Führen Sie die Synchronisation sofort aus oder klicken Sie auf **Save to Jobs**.


  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />


👉 Weitere Informationen:

- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)

- [Synchronisationsjobs erstellen](/howto/rcloneview-basic/create-sync-jobs)


### **⏰ Methode 4: Wiederkehrenden Job planen**

1. Gehen Sie zum **Job Manager** → klicken Sie auf **Add Job**.

2. Wählen Sie Ihre NAS- und Cloud-Ordner aus.

3. Legen Sie den Zeitplan fest (täglich, wöchentlich, Cron).

4. Speichern und aktivieren Sie den Job.


  ✅ Jobs werden zur geplanten Zeit automatisch im Hintergrund ausgeführt.


👉 Weitere Informationen: [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 Zusammenfassung**



Mit der Synology-NAS-Integration von RcloneView können Sie:

- NAS ohne technischen Aufwand erkennen und verbinden

- SMB, SFTP, FTP oder WebDAV einfach nutzen

- Übertragungen, Synchronisationen oder geplante Backup-Jobs zu jeder Cloud durchführen

Keine Kommandozeile. Keine Skripte. Nur schnelle, leistungsstarke und flexible Cloud-Dateiverwaltung.


## **🔗 Verwandte Anleitungen**

- [So fügen Sie ein SFTP-Remote hinzu](/howto/remote-storage-connection-settings/sftp)
- [So fügen Sie ein WebDAV-Remote hinzu](/howto/remote-storage-connection-settings/webdav)
- [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)
- [Remote-Speicher durchsuchen & verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Synchronisationsjobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen & verwalten](/howto/rcloneview-basic/execute-manage-job)
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **Verbinden Sie Ihr NAS noch heute mit der Cloud – mit RcloneView.**

<CloudSupportGrid />
