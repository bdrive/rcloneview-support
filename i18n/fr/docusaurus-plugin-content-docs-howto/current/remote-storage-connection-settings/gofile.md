---
sidebar_position: 6
description: "Découvrez comment ajouter le stockage Gofile dans RcloneView."
keywords:
  - rcloneview
  - rclone
  - gofile
  - stockage distant
  - stockage cloud
  - Connexion distante
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## Comment ajouter Gofile avec RcloneView (Windows)


### Étape 1 : Ouverture de la fenêtre de configuration d'un nouveau distant

- Cliquez sur **`+ New Remote`** dans le menu supérieur sous **`Remote`**.
- Vous pouvez aussi cliquer sur le bouton **`+`** dans le volet Explorateur et sélectionner **`New Remote`** pour démarrer la configuration du distant.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### Étape 2 : Ajout du distant Gofile

#### Dans l'onglet **`Provider`** :

1. Recherchez **`gofile`**.
2. Sélectionnez **`Gofile`** dans la liste.

#### Dans l'onglet **`Options`** :

3. Entrez votre **Access Token**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info Comment obtenir un jeton d'accès (Access Token)
 - Visitez [https://gofile.io/myprofile](https://gofile.io/myprofile)
 - Connectez-vous à votre compte Gofile.
- Faites défiler vers le bas pour trouver **`Account API Token`** et copiez-le.
:::

#### Dans l'onglet **`Name`** :

4. Attribuez un **`Remote name`** à ce distant (par exemple, `myGofile`).

#### Dans l'onglet **`Save`** :

5. Cliquez sur **`Save`** pour terminer l'ajout du distant.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### Étape 3 : Vérifier le distant Gofile ajouté dans RcloneView

Lancez **RcloneView**.

1. Dans la barre de menu, cliquez sur **`Remote Manager`** sous l'onglet **`Remote`**.
2. Confirmez que votre distant **`Gofile`** apparaît dans la fenêtre **`Remote Manager`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **Terminé !** Votre distant **`Gofile`** est maintenant correctement configuré et prêt à être utilisé dans **RcloneView**.


## 🔗 Ressources supplémentaires

- 🔐 Obtenez votre jeton : [https://gofile.io/myprofile](https://gofile.io/myprofile)
