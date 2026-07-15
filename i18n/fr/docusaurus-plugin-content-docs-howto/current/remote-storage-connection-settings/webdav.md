---
sidebar_position: 4
description: "Découvrez comment configurer WebDAV comme stockage distant dans RcloneView pour la synchronisation et l'accès aux fichiers."
keywords:
  - rcloneview
  - webdav
  - stockage distant
  - stockage cloud
  - synchronisation
  - configuration webdav
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## Comment ajouter WebDAV avec RcloneView

### Étape 1 : Ouverture de la fenêtre de configuration d'un nouveau distant

- Cliquez sur **`+ New Remote`** dans le menu supérieur, sous **`Remote`**.
- Vous pouvez également cliquer sur le bouton **`+`** dans le panneau Explorer et sélectionner **`New Remote`** pour démarrer la configuration du distant.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Étape 2 : Ajout du distant WebDAV

#### Dans l'onglet **`Provider`** :
1. Recherchez **`webdav`**.
2. Sélectionnez **`WebDAV`** dans la liste.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### Dans l'onglet **`Options`** :
3. Saisissez l'URL du distant
4. Saisissez votre nom d'utilisateur de connexion
5. Saisissez votre mot de passe

<details>
<summary>Détails des options</summary>

Détails des options

| Champ          | Description                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | L'URL WebDAV du distant (par ex., https://webdav.example.com/) Vous pouvez également spécifier un numéro de port personnalisé (par ex., https://webdav.example.com:5020)                                                                          |
| `vendor`       | (Facultatif) Laissez vide ou indiquez un fournisseur de service compatible WebDAV (par ex., fastmail, nextcloud, owncloud, sharepoint, sharepoint-ntlm, rclone)  Voir la liste complète : [WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | Votre nom d'utilisateur de connexion                                                                                                                                                                                                     |
| `pass`         | Votre mot de passe de connexion (masqué)                                                                                                                                                                                               |
| `bearer_token` | (Facultatif) Généralement laissé vide                                                                                                                                                                                              |



</details>
#### Dans l'onglet **`Name`** :
6. Saisissez un nom unique et identifiable pour ce distant (par ex., `myWebDAV`).

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### Dans l'onglet **`Save`** :
5. Cliquez sur **`Save`** pour terminer la configuration du distant.

### Étape 3 : Vérifier le distant WebDAV ajouté dans RcloneView

1. Dans le menu supérieur, cliquez sur **`Remote Manager`** sous l'onglet **`Remote`**.
2. Confirmez que votre **distant WebDAV** apparaît dans la fenêtre **Remote Manager**.

✅ **Terminé !** Votre distant WebDAV est maintenant configuré avec succès et prêt à être utilisé dans RcloneView.
