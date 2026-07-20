---
sidebar_position: 1
description: "Guide étape par étape pour récupérer en toute sécurité votre Access Key ID AWS, votre Secret Access Key et votre code de région pour connecter RcloneView à AWS S3."
keywords:
  - rcloneview
  - rclone
  - compte aws
  - access key id
  - secret key id
  - code de région
  - configuration s3
  - iam
  - aws s3
  - aws
  - secret access key
tags:
  - RcloneView
  - aws-account
  - secret-key-id
  - access-key-id
  - credentials
  - secret-access-key
  - aws-s3
date: 2025-05-26
author: Jay
---
# Comment obtenir votre clé d'accès AWS et votre région pour Rclone

Avant de pouvoir ajouter AWS S3 comme distant dans RcloneView, vous avez besoin de votre **Access Key ID**, de votre **Secret Access Key** et de votre code de **Région** AWS. Ce guide vous explique comment générer ces informations en toute sécurité depuis votre compte AWS.

## Étape par étape : obtenir votre Access Key ID AWS et votre Secret Access Key

Pour connecter Rclone à AWS S3, vous devez créer une clé d'accès dans votre compte AWS :

1. **Connectez-vous** à la [console de gestion AWS](https://aws.amazon.com/console).
2. Accédez à **IAM (Identity and Access Management)**.  
   Vous pouvez rechercher « IAM » dans la barre de recherche des services AWS.
3. Dans la barre latérale gauche, cliquez sur **Users**, puis sur votre **nom d'utilisateur IAM**.
4. Allez dans l'onglet **Security credentials**.
5. Faites défiler jusqu'à la section **Access keys** et cliquez sur **Create access key**.
6. Choisissez :  
   `✔ Application running outside AWS`
7. Vous pouvez éventuellement saisir une description (par ex. `RcloneView Access`) pour faciliter le suivi de la clé.
8. Cliquez sur **Create access key**.
9. Sur l'écran final, copiez à la fois :
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ Ces clés ne seront affichées qu'**une seule fois**. Assurez-vous de les **stocker en toute sécurité** (par exemple dans un gestionnaire de mots de passe).
:::

## Comment trouver votre région AWS S3

Vous devez également connaître la **Région** AWS où se trouve votre bucket S3. Cette information est requise lors de la configuration du distant Rclone.

### Option 1 : vérifier via la console AWS S3

1. Rendez-vous sur la [console Amazon S3](https://s3.console.aws.amazon.com/s3/home).
2. Trouvez votre bucket dans la liste.
3. La colonne **Region** affichera la région (par ex. `ap-northeast-2` pour Séoul, `us-east-1` pour la Virginie).

### Option 2 : consulter la liste officielle des régions

Consultez cette documentation officielle pour connaître toutes les régions disponibles et leurs codes :

👉 [Codes de région et points de terminaison AWS](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger Conseil de sécurité
🔒 **Ne partagez et n'exposez jamais vos identifiants AWS publiquement.**  
Faites tourner vos clés régulièrement et supprimez les clés inutilisées via la **console IAM**.
:::
