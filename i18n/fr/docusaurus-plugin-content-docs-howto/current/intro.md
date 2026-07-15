---
sidebar_position: 1
description: "Apprenez à installer RcloneView et à connecter Google Drive comme distant grâce à un guide étape par étape simple."
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# Guide de démarrage rapide

Ce guide vous accompagnera étape par étape dans l'installation de **RcloneView** et l'ajout d'un **stockage distant (Google Drive)**.

## **Étape 1 : Installation de RcloneView**

1. Téléchargez le fichier d'installation depuis la [**page de téléchargement de RcloneView**](https://rcloneview.com/src/download.html).
2. Exécutez le programme d'installation téléchargé et suivez les instructions à l'écran pour terminer l'installation.
3. Une fois l'installation réussie, vous verrez l'écran de confirmation suivant :
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **Étape 2 : Ajout d'un stockage distant (exemple avec Google Drive)**

### **Ouverture de la fenêtre de configuration d'un nouveau distant**

- Cliquez sur **`+ New Remote`** dans le menu supérieur sous **`Remote`**.
- Vous pouvez également cliquer sur le bouton **`+`** dans le panneau Explorateur et sélectionner **`New Remote`** pour démarrer la configuration du distant.
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### Ajout d'un distant Google Drive

1. Saisissez **`google`** dans la barre de recherche.
2. Sélectionnez **`Google Drive`** dans les résultats.
3. Saisissez un **`Remote name`** facilement identifiable (par ex. MyGoogleDrive).
4. Cliquez sur **`Add Remote`** pour terminer l'ajout du distant.

:::tip
Les champs marqués d'un astérisque (*) sont obligatoires. Assurez-vous que tous les champs requis sont remplis avant d'enregistrer.
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip Distants cloud basés sur OAuth

La plupart des fournisseurs de stockage cloud prenant en charge OAuth (connexion via navigateur web), tels que **Google Drive**, **Dropbox**, **Google Photos**, **OneDrive**, **Box**, **pCloud**, **Yandex Disk**, **premiumize.me**, **put.io** et **HiDrive**, vous permettent de sauter l'étape `Options` — nommez simplement votre distant et connectez-vous via le navigateur.

Cependant, **certains fournisseurs nécessitent une configuration supplémentaire** dans l'onglet `Options` avant la connexion OAuth :
- **Zoho WorkDrive** – Sélection de la région
- **Google Cloud Storage** – Saisie du numéro de projet
- **Citrix ShareFile** – Saisie de l'ID du dossier racine
- **Google Drive Shared with Me** – Activer `shared_with_me`
- **Box for Business** – Sélectionner `enterprise` pour box_sub_type

👉 Voir le guide : [Connexion via navigateur web](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **Étape 3 : Connexion de votre stockage distant (authentification unique GoogleDrive)**
### Authentification du compte

- Vous serez redirigé vers la page de connexion SSO de Google.
- Sélectionnez votre compte Google ou choisissez **« Utiliser un autre compte »** pour vous connecter avec un compte différent.

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
Si vous utilisez une méthode de connexion autre que la connexion par mot de passe présentée ci-dessus, veuillez consulter [ce guide](https://support.google.com/accounts/answer/12849458) pour terminer le processus de connexion.
:::

### Autoriser l'accès à RcloneView

- Cliquez sur « Continuer » pour terminer la connexion à votre Google Drive.

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- Vous devriez voir une page de confirmation affichant **« Success! »**
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **Terminé !** Votre distant Google Drive est maintenant connecté avec succès et prêt à l'emploi dans RcloneView.

