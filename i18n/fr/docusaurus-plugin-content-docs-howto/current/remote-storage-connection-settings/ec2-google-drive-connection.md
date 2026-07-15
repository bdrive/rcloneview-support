---
sidebar_position: 11
description: "Découvrez comment ajouter un distant Google Drive à un Rclone externe exécuté sur AWS EC2 sans utiliser de navigateur web, à l'aide de jetons OAuth générés localement."
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# Ajouter Google Drive à un Rclone externe sur AWS EC2 (sans navigateur web)

Ce guide explique comment ajouter un **distant Google Drive** à une **instance Rclone externe** exécutée sur un système où aucun navigateur web n'est disponible, comme un **serveur AWS EC2 Ubuntu**.

Dans de tels environnements, il n'est pas possible de terminer le flux de connexion OAuth standard via un navigateur. Vous pouvez à la place utiliser une installation locale de RcloneView pour obtenir le **jeton OAuth** requis, puis le réutiliser sur le Rclone externe exécuté sur EC2.

:::info Exécuter le démon Rclone sur EC2
Pour savoir comment installer et exécuter Rclone sur une instance EC2, 

voir : 👉 [Comment exécuter le moteur Rclone sur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

Le processus : générer un jeton OAuth Google Drive sur une machine disposant d'un navigateur, puis coller ce jeton dans le Rclone externe exécuté sur EC2 via RcloneView.

---
## ✅ Étape 1 : Générer un jeton Google Drive (choisissez une méthode)

**Méthode A : `rclone authorize "drive"` (la plus rapide)**

1. Sur une machine disposant d'un navigateur et de la même version de rclone, exécutez :
   ```bash
   rclone authorize "drive"
   ```
2. Terminez la connexion/le consentement Google dans le navigateur.
3. Copiez le bloc de jeton JSON affiché (conservez l'intégralité du JSON). Vous le collerez dans EC2 à l'étape 3.

**Méthode B : Utiliser le distant intégré de RcloneView et copier son jeton**

1. Sur votre PC local, ajoutez Google Drive à l'aide du Rclone intégré (OAuth via navigateur normal).  
   👉 [Guide rapide : Ajouter un distant Google Drive](../#step-2-adding-remote-storage-google-drive-example)
2. Ouvrez le **Gestionnaire de distants**, modifiez le distant Google Drive, cliquez sur **Afficher les options avancées**, puis copiez le champ **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 En savoir plus sur la modification des distants : [Modifier les paramètres du distant](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ Étape 2 : Se connecter au Rclone externe (EC2)

Ouvrez une **`nouvelle fenêtre`** ou utilisez votre session actuelle dans RcloneView pour vous connecter à votre Rclone hébergé sur EC2 :

- Ouvrez `Paramètres` -> **`Gestionnaire de connexions`** pour créer une nouvelle connexion vers votre Rclone hébergé sur EC2, ou vous connecter à une connexion existante déjà configurée.

👉 En savoir plus : [Connecter un Rclone externe](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 En savoir plus : [Fonctionnalité Nouvelle fenêtre](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ Étape 3 : Ajouter le distant Google Drive au Rclone externe (collez votre jeton)

1. Dans la fenêtre connectée à EC2, allez dans le menu `Remote` et sélectionnez **`+ New Remote`**.
2. Choisissez **Google Drive** comme fournisseur.
3. Saisissez le **`Remote Name`** et cliquez sur **`Show advanced options`**.
4. Collez l'**OAuth Token** précédemment copié dans le champ **`Token`**.
5. Cliquez sur le bouton **`Add Remote`** pour terminer la configuration comme d'habitude.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **Ignorez cette fenêtre d'erreur**
**Si RcloneView affiche un message d'erreur semblable à celui ci-dessous, vous pouvez l'ignorer sans risque.**
Dans la plupart des cas, la configuration du jeton se termine avec succès malgré ce message.
Après avoir fermé la boîte de dialogue, vous devriez pouvoir accéder normalement à Google Drive.  
Il s'agit d'un problème d'interface connu, et nous améliorerons l'expérience utilisateur dans la prochaine version.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Une fois configuré, votre Rclone basé sur EC2 peut désormais accéder à Google Drive même sans prise en charge de navigateur. Vous pouvez gérer, synchroniser et transférer des fichiers avec RcloneView comme d'habitude.

---

## 🔗 Guides associés

- [Comment exécuter le moteur Rclone sur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Ajouter un distant Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Modifier les paramètres du distant](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [Connecter un Rclone externe](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Utilisation multi-fenêtres](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
