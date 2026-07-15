---
sidebar_position: 10
description: "Découvrez comment ajouter un stockage Proton Drive dans RcloneView."
keywords:
  - rcloneview
  - rclone
  - proton
  - protondrive
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - proton
  - protondrive
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Proton Drive

## Comment ajouter Proton Drive avec RcloneView (Windows)

### Étape 1 : Ouvrir le gestionnaire de distants

- Cliquez sur **`+ New Remote`** dans le coin supérieur droit du **gestionnaire de distants**.
- Vous pouvez aussi cliquer sur le bouton **`+`** dans le panneau Explorer et sélectionner **`New Remote`** pour démarrer la configuration du distant.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
---

### Étape 2 : Sélectionner Proton Drive comme fournisseur de stockage

1. Dans la barre **Search Provider**, tapez `proton`.
2. Sélectionnez **Proton Drive** dans la liste.

Vous serez alors redirigé vers l'écran de configuration de Proton Drive.

<img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select proton drive remote" class="img-medium img-center" />

### Étape 3 : Configurer votre distant Proton Drive

Remplissez les champs requis dans le formulaire de configuration :

- **Remote name** : un nom convivial pour votre distant (par ex., `MyProtonDrive`)
- **username** : votre adresse e-mail Proton
- **password** : le mot de passe de votre compte Proton
- **2fa** (facultatif) : votre code 2FA actuel (uniquement si la 2FA est activée)

Une fois toutes les informations nécessaires saisies, cliquez sur **`Add Remote`** pour terminer la configuration.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote configure proton" class="img-medium img-center" />

### Étape 4 : Confirmer l'ajout du distant

Une fois ajouté, votre distant Proton Drive (par ex., `MyProtonDrive`) apparaîtra dans la liste du **gestionnaire de distants**.

Vous pouvez désormais :
- Cliquer sur **`Open`** pour parcourir le contenu de votre Proton Drive.
- L'utiliser pour des transferts, des montages ou des tâches planifiées.
- Modifier ou supprimer la configuration du distant à tout moment.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote manager proton view" class="img-medium img-center" />


✅ **Terminé !** Votre **Proton Drive** est maintenant connecté avec succès à **RcloneView**.


## 🔗 Ressources supplémentaires

- 🌐 [Connexion à Proton Drive](https://drive.proton.me/)
- 🔐 [Gérer votre compte Proton](https://account.proton.me/)
- 🛡️ [Guide de configuration de la 2FA Proton](https://proton.me/support/two-factor-authentication)
