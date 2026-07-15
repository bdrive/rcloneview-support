---
sidebar_position: 7
description: Découvrez comment ajouter Azure File Storage dans RcloneView.
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - stockage cloud
  - stockage distant
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

## Comment ajouter Azure File Storage avec RcloneView

Azure File Storage utilise SMB et nécessite trois éléments pour se connecter :

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

Vous pouvez copier ces trois éléments depuis le **Azure Portal** (Storage account > **Access keys** pour la clé partagée, et **File shares** pour le nom du partage).

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### Étape 1 : Ouvrir la fenêtre New Remote

- Cliquez sur **`+ New Remote`** dans le menu supérieur sous **`Remote`**.
- Ou cliquez sur le bouton **`+`** dans le panneau Explorer et choisissez **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### Étape 2 : Sélectionner Azure File Storage comme fournisseur de stockage

1. Dans la barre **Search Provider**, saisissez `Azure File Storage`.
2. Cliquez sur l'option **Azure File Storage** dans la liste.

Vous serez alors dirigé vers l'écran de configuration d'Azure File Storage.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### Étape 3 : Configurer votre distant Azure File Storage

Renseignez les informations requises dans le formulaire :

- **Remote name** : un nom convivial pour votre distant (par exemple, `MyAzureFileStorage`)
- **account** : Azure Storage **Account Name**. Définissez-le avec le nom du compte de stockage Azure utilisé.
- **key** : **Storage Account Shared Key**
- **share_name** : **Azure Files Share Name**. Ce champ est obligatoire et correspond au nom du partage à utiliser.

Une fois toutes les valeurs saisies, cliquez sur **`Add Remote`** pour terminer la configuration.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### Étape 4 : Confirmer l'ajout du distant

Une fois ajouté, votre nouveau distant Azure File Storage (par exemple, `MyAzure`) apparaîtra dans la liste du **Remote Manager**.

Vous pouvez désormais :

- Cliquer sur **`Open`** pour parcourir vos fichiers.
- L'utiliser dans des tâches de synchronisation, de copie ou de montage.
- Gérer ou supprimer le distant à tout moment.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **Terminé !** Vous avez connecté avec succès votre stockage **Azure File Storage** à **RcloneView**.

**Terminé !** Vous pouvez désormais parcourir et transférer des fichiers dans votre partage Azure File directement depuis RcloneView.
