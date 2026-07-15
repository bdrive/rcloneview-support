---
sidebar_position: 12
description: "Installez et exécutez Rclone sur AWS EC2, connectez-vous depuis RcloneView sur votre PC et ajoutez un distant OneDrive sans utiliser de navigateur sur le serveur."
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# Ajouter OneDrive à un Rclone externe sur AWS EC2 (sans interface graphique)

:::info Prérequis associé
Si vous avez besoin d'un guide complet de configuration EC2, consultez 👉 [Comment exécuter le moteur Rclone sur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).
:::

---

Le processus : générez un jeton OAuth OneDrive sur une machine disposant d'un navigateur, puis collez ce jeton dans le Rclone externe exécuté sur EC2 via RcloneView.

---

## Étape 1. Générer un jeton OneDrive (choisissez une méthode)

**Méthode A : `rclone authorize "onedrive"` (la plus rapide)**

1. Sur une machine disposant d'un navigateur et de la même version de rclone, exécutez :
   ```bash
   rclone authorize "onedrive"
   ```  
2. Terminez la connexion/le consentement Microsoft dans le navigateur.  
3. Copiez le bloc JSON du jeton affiché (conservez l'intégralité du JSON). Vous le collerez dans EC2 à l'étape 3.

**Méthode B : utiliser le distant intégré de RcloneView et copier son jeton**

1. Sur votre PC local, ajoutez OneDrive à l'aide du Rclone intégré (OAuth normal via navigateur).  
2. Ouvrez le **Gestionnaire de distants**, modifiez le distant OneDrive, cliquez sur **Afficher les options avancées**, puis copiez le champ **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 Plus d'informations sur la modification des distants : [Modifier les paramètres d'un distant](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## Étape 2. Se connecter au Rclone externe (EC2)

Ouvrez une **nouvelle fenêtre** ou utilisez votre session actuelle dans RcloneView pour vous connecter à votre Rclone hébergé sur EC2 :

- Ouvrez `Settings` -> **`Connection Manager`** pour créer une nouvelle connexion vers votre Rclone hébergé sur EC2, ou vous connecter à une connexion existante déjà configurée.

👉 En savoir plus : [Connecter un Rclone externe](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 En savoir plus : [Fonctionnalité de nouvelle fenêtre](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## Étape 3. Ajouter le distant OneDrive au Rclone externe (collez votre jeton)

1. Dans la fenêtre connectée à EC2, allez dans le menu `Remote` et sélectionnez **`+ New Remote`**.
2. Choisissez **OneDrive** comme fournisseur.
3. Saisissez le **Nom du distant** et cliquez sur **Afficher les options avancées**.
4. Collez le **jeton OAuth** copié précédemment dans le champ **Token**.
5. Cliquez sur **Add Remote** pour terminer la configuration.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **Ignorez cette fenêtre d'erreur**
Si RcloneView affiche un message d'erreur comme celui ci-dessous, vous pouvez l'ignorer en toute sécurité.
Dans la plupart des cas, la configuration du jeton se termine avec succès malgré ce message.
Après avoir fermé la boîte de dialogue, vous devriez pouvoir accéder normalement à OneDrive.  
Il s'agit d'un problème d'interface connu, et nous améliorerons l'expérience utilisateur dans la prochaine version.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Une fois configuré, votre Rclone basé sur EC2 peut désormais accéder à OneDrive même sans prise en charge d'un navigateur. Vous pouvez gérer, synchroniser et transférer des fichiers avec RcloneView comme d'habitude.

---

## Liens associés

- [Comment exécuter le moteur Rclone sur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [Gestionnaire de connexions](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [Utilisation multi-fenêtres](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)  
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)
