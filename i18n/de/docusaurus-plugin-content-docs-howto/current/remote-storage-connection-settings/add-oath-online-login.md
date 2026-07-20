---
sidebar_position: 2
description: "Erfahren Sie, wie Sie Cloud-Remotes in RcloneView mit OAuth oder browserbasierter Anmeldung konfigurieren."
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - Remote-Verbindung
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# Automatische Anmeldung (OneDrive, Box ...)

RcloneView macht es einfach, sich mit einer einfachen browserbasierten Anmeldung (OAuth) mit den wichtigsten Cloud-Anbietern wie **Google Drive, OneDrive, Dropbox, Box** zu verbinden.

:::important Keine Optionen erforderlich
**✅ Bei den meisten Anbietern müssen Sie nur einen Remote-Namen eingeben.**  
**✅ Sie können den Tab „Optionen“ überspringen und direkt zur Browser-Anmeldung übergehen.**
:::

Wenn Sie auf **Speichern** klicken, öffnet RcloneView ein Browserfenster, in dem Sie sich bei Ihrem Cloud-Konto anmelden können. Nach Abschluss der Anmeldung wird Ihr Remote automatisch hinzugefügt und ist einsatzbereit – keine manuelle Einrichtung erforderlich.

## Kurzanleitung zur Einrichtung

1. Starten Sie **RcloneView** und klicken Sie im oberen Menü oder im Explorer-Panel auf **`+ Neues Remote`**.
2. Wählen Sie im Tab **Anbieter** Ihren Cloud-Dienst aus (z. B. Google Drive, OneDrive).
3. Überspringen Sie den Tab **Optionen** (sofern keine zusätzlichen Angaben angefordert werden). Eine Orientierung finden Sie in der Tabelle unten.
4. Gehen Sie zum Schritt **Speichern** und klicken Sie auf **Speichern**.
5. Ein Browserfenster wird geöffnet – melden Sie sich bei Ihrem Cloud-Konto an.
6. Nach der Anmeldung wird das Remote automatisch hinzugefügt.

👉 Möchten Sie ein detailliertes Beispiel sehen? Siehe: [So verbinden Sie Google Drive](../#step-2-adding-remote-storage-google-drive-example)
## Unterstützte Cloud-Anbieter & Einrichtungsanforderungen

| Cloud-Anbieter               | Erforderliche Option(en)                                          |
| ----------------------------- | ------------------------------------------------------------------ |
| Google Drive                  | Keine                                                              |
| Google Drive Shared with Me   | **Erweiterte Optionen:**<br />`shared_with_me` = **true**          |
| Google Drive Computers        | **Erweiterte Optionen:**<br />`root_folder_id` = `<Ihre Ordner-ID>` |
| Dropbox                       | Keine                                                              |
| Dropbox for Business          | **Erweiterte Optionen:**<br />`dropbox_business` = **true**        |
| Microsoft OneDrive            | Keine                                                              |
| Box                           | Keine                                                              |
| Box for Business              | `box_sub_type = enterprise`                                        |
| pCloud                        | Keine                                                              |
| Yandex Disk                   | Keine                                                              |
| premiumize.me                 | Keine                                                              |
| put.io                        | Keine                                                              |
| Zoho WorkDrive                | `Region` erforderlich                                              |
| Google Cloud Storage          | `Project Number` erforderlich                                      |
| Citrix ShareFile              | `Root Folder ID` erforderlich                                      |
| HiDrive                       | Keine                                                              |

## Beispiel: Google Drive Shared with Me (erfordert erweiterte Optionen)

**Google Drive Shared with Me** ermöglicht Benutzern den Zugriff auf Dateien und Ordner, die andere Benutzer explizit mit ihnen geteilt haben, ohne sie zum eigenen Drive hinzuzufügen. Dies ist nützlich bei der Zusammenarbeit über Organisationen oder Teams hinweg, ohne Speicherplatz zu duplizieren.

RcloneView unterstützt diese Funktion über eine erweiterte Option während der Remote-Konfiguration.

Im Tab **Optionen**:

1. Scrollen Sie nach unten und klicken Sie am unteren Bildschirmrand auf **`Show advanced options`**.
2. Suchen Sie das Feld `shared_with_me` und setzen Sie es im Dropdown-Menü auf **`true`**.
3. Belassen Sie die übrigen Optionen bei den Standardwerten, sofern keine benutzerdefinierte Konfiguration erforderlich ist.
4. Klicken Sie auf **Next** und schließen Sie die Anmeldung anschließend im Browser ab, wenn Sie dazu aufgefordert werden.

:::tip
Die Einstellung `shared_with_me = true` weist Rclone an, nur Dateien und Ordner anzuzeigen, die mit Ihrem Google-Konto geteilt wurden.
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## Beispiel: Google Drive Computers (erfordert erweiterte Optionen)

**Google Drive „Computers“** ist eine Funktion, die lokale Dateien von Ihren Geräten (z. B. Laptops oder Desktops) unter einem speziellen Bereich „Computers“ in Google Drive mit der Cloud synchronisiert. Jeder Computer erscheint als separater Ordner und benötigt eine eindeutige `root_folder_id`, um über Rclone darauf zugreifen zu können.

🔗 Erfahren Sie mehr über diese Funktion: [Auf synchronisierte Computer in Google Drive zugreifen](https://support.google.com/drive/answer/3096479)

### So verbinden Sie Google Drive Computers in RcloneView

1. Öffnen Sie [drive.google.com](https://drive.google.com/) und klicken Sie im Bereich **Computers** auf Ihren gewünschten Computer (z. B. **My Laptop**).
2. Kopieren Sie die **Computer-ID** aus der URL.  
   Zum Beispiel gilt in  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`,  
   dass die ID die Zeichenfolge nach `folders/` ist:  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. Öffnen Sie **RcloneView**, klicken Sie im Menü **Remote** auf **`+ Neues Remote`**, wählen Sie **Google Drive** aus und wechseln Sie zum Tab **Optionen**.
4. Scrollen Sie nach unten und klicken Sie auf **`Show advanced options`**.
5. Fügen Sie die kopierte Computer-ID in das Feld `root_folder_id` ein.
6. Klicken Sie auf **Next** und folgen Sie der OAuth-Anmeldung, um die Einrichtung abzuschließen.

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ Nach Abschluss der Einrichtung können Sie Ihre geräteseitig synchronisierten Google-Drive-Ordner direkt in RcloneView durchsuchen und darauf zugreifen.

## Beispiel: Box for Business verbinden

Im Tab **Optionen**:
- Wählen Sie **enterprise** für `box_sub_type`
- Fahren Sie mit den Standardeinstellungen fort  
- Melden Sie sich bei Aufforderung über das SSO-Portal Ihrer Organisation im Browser an

✅ Nach der Anmeldung erscheint das Remote in RcloneView und ist einsatzbereit.
