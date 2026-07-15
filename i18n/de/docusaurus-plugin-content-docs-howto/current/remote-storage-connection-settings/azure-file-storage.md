---
sidebar_position: 7
description: Erfahren Sie, wie Sie Azure File Storage in RcloneView hinzufügen.
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - cloud storage
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## So fügen Sie Azure File Storage mit RcloneView hinzu

Azure File Storage verwendet SMB und benötigt drei Angaben für die Verbindung:

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

Sie können alle drei aus dem **Azure Portal** kopieren (Storage account > **Access keys** für den Shared Key, und **File shares** für den Freigabenamen).

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### Schritt 1: Fenster für neuen Remote öffnen

- Klicken Sie im oberen Menü unter **`Remote`** auf **`+ New Remote`**.
- Oder klicken Sie im Explorer-Bereich auf die Schaltfläche **`+`** und wählen Sie **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### Schritt 2: Azure File Storage als Storage Provider auswählen

1. Geben Sie in der **Search Provider**-Leiste `Azure File Storage` ein.
2. Klicken Sie in der Liste auf die Option **Azure File Storage**.

Sie gelangen anschließend zum Konfigurationsbildschirm für Azure File Storage.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### Schritt 3: Ihren Azure File Storage Remote konfigurieren

Füllen Sie die erforderlichen Angaben im Formular aus:

- **Remote name**: Ein aussagekräftiger Name für Ihren Remote (z. B. `MyAzureFileStorage`)
- **account**: Azure Storage **Account Name**. Setzen Sie hier den verwendeten Azure Storage Account Name ein.
- **key**: **Storage Account Shared Key**
- **share_name**: **Azure Files Share Name**. Dies ist erforderlich und ist der Name der Freigabe, auf die zugegriffen werden soll.

Nachdem Sie alle Werte eingegeben haben, klicken Sie auf **`Add Remote`**, um die Einrichtung abzuschließen.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### Schritt 4: Den hinzugefügten Remote bestätigen

Nach dem Hinzufügen erscheint Ihr neuer Azure File Storage Remote (z. B. `MyAzure`) in der **Remote Manager**-Liste.

Sie können nun:

- Auf **`Open`** klicken, um Ihre Dateien zu durchsuchen.
- Ihn in Synchronisations-, Kopier- oder Mount-Aufgaben verwenden.
- Den Remote jederzeit verwalten oder löschen.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **Fertig!** Sie haben Ihren **Azure File Storage**-Speicher erfolgreich mit **RcloneView** verbunden.

**Fertig!** Sie können nun direkt aus RcloneView Dateien in Ihrer Azure File Share durchsuchen und übertragen.
