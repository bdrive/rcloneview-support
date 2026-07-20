---
sidebar_position: 8
description: Découvrez comment ajouter un stockage Backblaze B2 dans RcloneView.
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## Comment ajouter Backblaze B2 avec RcloneView (Windows)

### Étape 1 : Ouvrir le gestionnaire de distants

- Cliquez sur **`+ New Remote`** dans le menu du haut, sous **`Remote`**.
- Vous pouvez également cliquer sur le bouton **`+`** dans le volet Explorer, puis sélectionner **`New Remote`** pour démarrer la configuration du distant.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Étape 2 : Sélectionner Backblaze B2 comme fournisseur de stockage

1. Dans la barre **Search Provider**, saisissez `b2`.
2. Cliquez sur l'option **Backblaze B2** qui apparaît.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

Vous serez alors dirigé vers l'écran de configuration de Backblaze B2.

### Étape 3 : Configurer votre distant Backblaze B2

Dans le formulaire de configuration, renseignez les informations requises suivantes :

- **Remote name** : un nom convivial pour votre distant (par ex. `MyB2Master`).
- **account** : votre **Application Key ID** Backblaze.
- **key** : votre **Application Key** Backblaze.

Après avoir saisi les valeurs requises, cliquez sur **`Add Remote`** pour enregistrer la connexion.
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info Où trouver ces identifiants ?

- Connectez-vous à votre [compte Backblaze B2](https://secure.backblaze.com/b2_buckets.htm).
- Accédez à **App Keys**.
- Créez ou copiez une paire de clés existante :
  - Utilisez le **Key ID** comme `account`
  - Utilisez l'**Application Key** comme `key`
:::


### Étape 4 : Confirmer l'ajout du distant

Une fois ajouté, votre nouveau distant Backblaze B2 (par ex. `MyB2Master`) apparaîtra dans la liste du **Remote Manager**.

Vous pouvez désormais :
- Cliquer sur **`Open`** pour parcourir le distant.
- L'utiliser dans des opérations de copie/synchronisation/montage.
- Le gérer ou le supprimer à tout moment.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **Terminé !** Vous avez connecté avec succès votre stockage **Backblaze B2** à **RcloneView**.


## 🔗 Ressources supplémentaires

- 🔐 Gérer vos clés : [https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 Documentation des clés d'application : [https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)
