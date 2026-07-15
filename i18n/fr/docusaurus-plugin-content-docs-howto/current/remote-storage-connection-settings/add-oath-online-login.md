---
sidebar_position: 2
description: "Découvrez comment configurer des remotes cloud dans RcloneView à l'aide d'OAuth ou d'une connexion via navigateur."
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
  - Remote Connection
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
# Connexion automatique (OneDrive, Box ...)

RcloneView facilite la connexion aux principaux fournisseurs cloud comme **Google Drive, OneDrive, Dropbox, Box** grâce à une simple connexion via navigateur (OAuth).

:::important Aucune option requise
**✅ Pour la plupart des fournisseurs, il vous suffit de saisir un nom de distant.**  
**✅ Vous pouvez ignorer l'onglet Options et passer directement à la connexion via navigateur.**
:::

Lorsque vous cliquez sur **Enregistrer**, RcloneView ouvre une fenêtre de navigateur dans laquelle vous pouvez vous connecter à votre compte cloud. Une fois la connexion terminée, votre distant est automatiquement ajouté et prêt à l'emploi, sans configuration manuelle.

## Guide de configuration rapide

1. Lancez **RcloneView** et cliquez sur **`+ New Remote`** dans le menu supérieur ou le panneau Explorer.
2. Dans l'onglet **Provider**, sélectionnez votre service cloud (par exemple, Google Drive, OneDrive).
3. Ignorez l'onglet **Options** (sauf si des informations supplémentaires vous sont demandées). Consultez le tableau ci-dessous pour plus de détails.
4. Passez à l'étape **Save** et cliquez sur **Save**.
5. Une fenêtre de navigateur s'ouvre — connectez-vous à votre compte cloud.
6. Après la connexion, le distant est ajouté automatiquement.

👉 Vous voulez un exemple détaillé ? Consultez : [Comment connecter Google Drive](../#step-2-adding-remote-storage-google-drive-example)
## Fournisseurs cloud pris en charge et exigences de configuration

| Fournisseur cloud           | Option(s) requise(s)                                              |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | Aucune                                                            |
| Google Drive Shared with Me | **Options avancées :**<br />`shared_with_me` = **true**          |
| Google Drive Computers      | **Options avancées :**<br />`root_folder_id` = `<votre ID de dossier>` |
| Dropbox                     | Aucune                                                            |
| Dropbox for Business        | **Options avancées :**<br />`dropbox_business` = **true**        |
| Microsoft OneDrive          | Aucune                                                            |
| Box                         | Aucune                                                            |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | Aucune                                                            |
| Yandex Disk                 | Aucune                                                            |
| premiumize.me               | Aucune                                                            |
| put.io                      | Aucune                                                            |
| Zoho WorkDrive              | `Region` requis                                                  |
| Google Cloud Storage        | `Project Number` requis                                          |
| Citrix ShareFile            | `Root Folder ID` requis                                          |
| HiDrive                     | Aucune                                                            |

## Exemple : Google Drive Shared with Me (nécessite les options avancées)

**Google Drive Shared with Me** permet aux utilisateurs d'accéder à des fichiers et dossiers que d'autres utilisateurs ont explicitement partagés avec eux, sans les ajouter à leur propre drive. Ceci est utile pour collaborer entre organisations ou équipes sans dupliquer le stockage.

RcloneView prend en charge cette fonctionnalité via un paramètre d'option avancée lors de la configuration du distant.

Dans l'onglet **Options** :

1. Faites défiler vers le bas et cliquez sur **`Show advanced options`** en bas de l'écran.
2. Repérez le champ `shared_with_me` et définissez-le sur **`true`** dans le menu déroulant.
3. Laissez les autres options par défaut, sauf si une configuration personnalisée est nécessaire.
4. Cliquez sur **Next**, puis terminez la connexion dans votre navigateur lorsque vous y êtes invité.

:::tip
Le paramètre `shared_with_me = true` indique à Rclone de n'afficher que les fichiers et dossiers partagés avec votre compte Google.
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## Exemple : Google Drive Computers (nécessite les options avancées)

**Google Drive « Computers »** est une fonctionnalité qui synchronise les fichiers locaux de vos appareils (ordinateurs portables ou de bureau) vers le cloud, dans une section spéciale « Computers » de Google Drive. Chaque ordinateur apparaît comme un dossier distinct et nécessite un `root_folder_id` unique pour y accéder via Rclone.

🔗 En savoir plus sur cette fonctionnalité : [Accéder aux ordinateurs synchronisés dans Google Drive](https://support.google.com/drive/answer/3096479)

### Comment connecter Google Drive Computers dans RcloneView

1. Ouvrez [drive.google.com](https://drive.google.com/) et cliquez sur l'ordinateur cible (par exemple, **My Laptop**) dans la section **Computers**.
2. Copiez le **Computer ID** depuis l'URL.  
   Par exemple, dans  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`,  
   l'ID est la chaîne après `folders/` :  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. Ouvrez **RcloneView**, cliquez sur **`+ New Remote`** dans le menu **Remote**, sélectionnez **Google Drive**, puis passez à l'onglet **Options**.
4. Faites défiler vers le bas et cliquez sur **`Show advanced options`**.
5. Collez l'ID de l'ordinateur copié dans le champ `root_folder_id`.
6. Cliquez sur **Next** et suivez la connexion OAuth pour terminer la configuration.

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ Une fois la configuration terminée, vous pouvez parcourir et accéder directement dans RcloneView à vos dossiers Google Drive synchronisés depuis vos appareils.

## Exemple : Connexion de Box for Business

Dans l'onglet **Options** :
- Sélectionnez **enterprise** pour `box_sub_type`
- Poursuivez avec les paramètres par défaut  
- Lorsque vous y êtes invité, connectez-vous via le portail SSO de votre organisation dans le navigateur


✅ Une fois connecté, le distant apparaît dans RcloneView et est prêt à l'emploi.

