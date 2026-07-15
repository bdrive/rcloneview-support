---
sidebar_position: 3
description: "Comment obtenir les identifiants et le point de terminaison Cloudflare R2"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# Comment obtenir les identifiants et le point de terminaison Cloudflare R2

Pour connecter **Cloudflare R2** à Rclone ou **RcloneView**, vous aurez besoin de trois informations essentielles :

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ URL du point de terminaison compatible S3 de R2  

Ce guide vous explique comment récupérer ces informations depuis votre tableau de bord Cloudflare.

---

## 🧰 Prérequis

Avant de commencer :

- Vous devez disposer d'un compte Cloudflare avec **R2 Object Storage** activé.
- Vous devez avoir accès au [tableau de bord Cloudflare](https://dash.cloudflare.com).
- Une compréhension de base des concepts de stockage cloud est utile.

---

## 📦 Étape 1 : Créer un bucket R2 (si ce n'est pas déjà fait)

1. Connectez-vous à votre [tableau de bord Cloudflare](https://dash.cloudflare.com).
2. Dans la barre latérale gauche, allez dans **R2 → Object Storage**.
3. Cliquez sur **Create bucket**.
4. Saisissez un nom unique pour votre bucket.
5. Choisissez un emplacement (par exemple, **Automatic**, ou une région comme `westerneurope`).
6. Cliquez sur **Create Bucket**.

Ce bucket sera votre emplacement de stockage pour les fichiers transférés via RcloneView.

---

## 🔐 Étape 2 : Générer les identifiants API

Pour vous authentifier auprès de R2, vous devez créer des jetons API qui fournissent les permissions d'accès.

### ➕ Comment créer une clé d'accès et une clé secrète :

1. Allez dans **Storage & databases -> R2 Object storage → Overview** dans le tableau de bord Cloudflare.
2. Cliquez sur le bouton **Manage** à côté de **API Tokens** dans la section **Account Details**.

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. Cliquez sur **Create API Token**. Choisissez le type de jeton (pour Account ou User) qui correspond à votre usage.

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. Donnez un nom au jeton (par exemple, `Rclone Access`).
4. Sélectionnez les permissions :
   - `Admin Read & Write` (accès complet)  
	❗les autres permissions peuvent ne pas autoriser l'accès au bucket.
1. Choisissez si vous souhaitez l'appliquer à :
   - Tous les buckets
   - Des buckets spécifiques uniquement
7. Optionnellement, définissez une expiration (ou laissez sur « Forever »).
8. Cliquez sur **Create API Token**.

Une fois le jeton créé, Cloudflare vous affichera :

- **Access Key ID**
- **Secret Access Key**

:::danger Important
Ces identifiants ne seront affichés qu'une seule fois. Assurez-vous de les copier et de les stocker en lieu sûr.
:::

---

## **🌐 Étape 3 : Obtenir l'URL du point de terminaison R2**

1. Allez dans **R2 → Object Storage** dans votre tableau de bord Cloudflare.  
2. Cliquez sur le nom de votre **bucket** pour ouvrir ses détails.  
3. Accédez à l'onglet **Settings**.  
4. Dans la section **S3 API**, vous trouverez le format du point de terminaison et les détails du compte.    
    
Selon la façon dont votre jeton API a été créé, vous devez utiliser l'un des formats de point de terminaison suivants :

 ### 🔐 Si votre jeton API dispose d'un accès de niveau Admin et est autorisé à accéder à tous les buckets :

Utilisez le point de terminaison de base (sans chemin de bucket) :

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 Si votre jeton API est limité à un bucket spécifique — ou si vous souhaitez accéder à un bucket particulier :

Utilisez le point de terminaison spécifique au bucket :

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

Vous pouvez trouver à la fois votre **ACCOUNT_ID** et le nom du bucket dans la section **S3 API** de l'onglet **Settings** du bucket :

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

Utilisez ce point de terminaison lors de la configuration de votre distant Cloudflare R2 dans **RcloneView** ou via la **CLI Rclone**.

---
   
## ✅ Résumé

Vous devriez maintenant disposer des valeurs suivantes pour configurer votre distant Cloudflare R2 :

| Champ             | Description                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Fournie par le jeton API Cloudflare                |
| Secret Access Key | Fournie par le jeton API Cloudflare                |
| Endpoint URL      | Trouvée dans les paramètres du bucket R2 (URL compatible S3) |

Vous pouvez maintenant saisir ces valeurs dans **RcloneView** lors de la configuration d'un nouveau distant compatible S3, ou utiliser la CLI Rclone.

👉 Suivant : [Comment ajouter un distant compatible S3 dans RcloneView](/howto/remote-storage-connection-settings/s3)
