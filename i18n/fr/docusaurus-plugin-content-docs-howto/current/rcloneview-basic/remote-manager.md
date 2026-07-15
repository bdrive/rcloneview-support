---
sidebar_position: 2
description: "Découvrez comment ajouter, modifier et supprimer des distants cloud et locaux avec RcloneView, notamment Google Drive, Dropbox, WebDAV, S3 et plus encore."
keywords:
  - rcloneview
  - gestion du stockage distant
  - ajouter un distant
  - gestionnaire de distants
  - synchronisation cloud
  - stockage cloud
  - ouvrir un distant
  - supprimer un distant
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# Ajouter et gérer des stockages distants dans RcloneView

RcloneView vous permet de connecter et de gérer des services de stockage cloud et locaux.  
Ce guide explique comment **ajouter**, **modifier** et **supprimer** des stockages distants avec RcloneView.

## Ajouter un nouveau distant
  
Vous pouvez ajouter un nouveau stockage distant en ouvrant d'abord la boîte de dialogue **Nouveau distant**, puis en terminant la configuration.

### Ouvrir la boîte de dialogue **Nouveau distant**

Vous pouvez ouvrir la boîte de dialogue de configuration **`Nouveau distant`** en utilisant l'une des méthodes suivantes :

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### Méthode 1 : Utiliser le menu Distant en haut

Cliquez sur **`+ Nouveau distant`** dans l'onglet Distant en haut.

#### Méthode 2 : Utiliser le bouton `+` dans le panneau de l'explorateur

Cliquez sur l'icône **`+`** dans le panneau de l'explorateur de fichiers (gauche ou droite), puis sélectionnez Nouveau distant.

#### Méthode 3 : Utiliser le gestionnaire de distants

Cliquez sur le bouton **`Gestionnaire de distants`** dans l'onglet **`Distant`**, puis cliquez sur le bouton **`+`** sur une carte de distant vide.


### Configurer le nouveau distant

Une fois la boîte de dialogue **Nouveau distant** ouverte, sélectionnez le type de distant (par exemple, Google Drive, Dropbox, S3) et renseignez les paramètres requis.  

Les champs varient selon le fournisseur sélectionné.

Pour des instructions détaillées propres à chaque fournisseur, consultez [**Paramètres de connexion des stockages distants**](/howto/category/remote-storage-connection-settings).  

## Gérer les distants existants dans RcloneView

Une fois que vous avez ajouté des distants à RcloneView, vous pouvez les gérer de différentes façons — les ouvrir, les modifier ou les supprimer. Voici un guide expliquant comment effectuer chaque action.

### Ouvrir un distant dans le panneau de l'explorateur

Vous pouvez ouvrir la vue du dossier d'un distant pour parcourir ou transférer des fichiers entre le stockage local et le cloud.

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### Méthode 1 : Cliquer sur le bouton `Ouvrir` de la carte de distant

Cliquez sur le bouton **`Ouvrir`** sur n'importe quelle carte de distant dans le panneau de droite.

#### Méthode 2 : Ouvrir un distant via le bouton `+` du panneau de l'explorateur

En cliquant sur le bouton **`+`** situé dans le panneau **Explorateur** de gauche ou de droite, vous affichez la liste de tous les distants actuellement configurés.

1. Cliquez sur l'icône `+` dans le panneau de l'explorateur où vous souhaitez ouvrir le distant.
2. Une liste déroulante apparaît, affichant tous les distants disponibles.
3. Sélectionnez le distant souhaité (par exemple, `MyWebDAV`) dans la liste.
4. Le distant sélectionné s'ouvre dans le panneau cliqué. Si un autre distant y est déjà ouvert, un **nouvel onglet** sera ajouté pour le distant sélectionné.

:::note
 Les distants marqués comme **favoris (alias)** apparaissent en **haut de la liste** pour un accès plus rapide.
:::
#### Méthode 3 : Utiliser le bouton `Ouvrir` du gestionnaire de distants

1. Cliquez sur le bouton **Gestionnaire de distants** dans la barre d'outils.
2. Dans la boîte de dialogue du gestionnaire de distants, trouvez le distant souhaité.
3. Cliquez sur **`Ouvrir`** pour l'ouvrir dans un panneau de navigation de fichiers.

:::tip Accès rapide depuis la barre système
Vous pouvez ouvrir rapidement un distant en cliquant sur l'icône RcloneView dans la barre système et en sélectionnant un distant dans la liste.  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### Modifier les paramètres d'un distant


Vous pouvez modifier les paramètres d'un distant existant en utilisant l'une des méthodes suivantes :

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### Méthode 1 : Modifier depuis le panneau de l'explorateur  

Si vous parcourez actuellement un distant dans le **panneau de l'explorateur**, cliquez sur l'**icône d'engrenage (⚙️)** située dans le coin supérieur droit du panneau du distant actif.

Cela ouvre la boîte de dialogue **Modifier le distant**, où vous pouvez mettre à jour les valeurs de **Fournisseur** et d'**Options** du distant sélectionné.  

 ⚠️ **Remarque :** Vous ne pouvez pas renommer le distant ici.


#### Méthode 2 : Modifier depuis le gestionnaire de distants  

1. Cliquez sur le bouton **Gestionnaire de distants** dans la barre d'outils principale, sous le menu **Distant**.  
2. Dans la fenêtre **Gestionnaire de distants**, repérez le distant que vous souhaitez modifier.  
3. Cliquez sur le bouton **Modifier** sur la carte du distant pour ouvrir la boîte de dialogue **Modifier le distant**.

Cette méthode permet également de modifier le **Fournisseur** et les **Options**, mais le **nom du distant** reste fixe.


### Supprimer un distant


Si vous n'avez plus besoin d'un distant configuré, vous pouvez le supprimer en toute sécurité à l'aide du **gestionnaire de distants**.

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. Depuis l'onglet **Distant** dans le menu du haut, cliquez sur le bouton **Gestionnaire de distants** dans la barre d'outils.
2. Dans la fenêtre **Gestionnaire de distants**, repérez le distant que vous souhaitez supprimer.
3. Cliquez sur le bouton **`Supprimer`** sur la carte du distant correspondant.

Cette action va :
- Supprimer définitivement le distant de votre configuration.
- Le fermer automatiquement du panneau de l'explorateur s'il est actuellement ouvert.
