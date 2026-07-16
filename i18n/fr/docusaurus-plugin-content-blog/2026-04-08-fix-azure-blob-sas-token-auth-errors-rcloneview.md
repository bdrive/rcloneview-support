---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "Résoudre les erreurs de jeton SAS et d'authentification Azure Blob Storage avec RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de jeton SAS et d'authentification Azure Blob Storage dans rclone. Apprenez à corriger les problèmes de code 401, 403 et de jeton expiré grâce aux outils de configuration de RcloneView."
keywords:
  - rcloneview
  - azure blob storage
  - erreur de jeton sas
  - erreur d'authentification azure
  - azure 403 forbidden
  - azure 401 unauthorized
  - configuration rclone azure
  - jeton sas azure blob
  - connexion azure storage
  - corriger azure rclone
tags:
  - troubleshooting
  - azure
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de jeton SAS et d'authentification Azure Blob Storage avec RcloneView

> L'authentification Azure Blob Storage peut être délicate, avec plusieurs méthodes et des pièges de configuration subtils. **RcloneView** simplifie le processus de configuration et vous aide à diagnostiquer rapidement les erreurs 401/403.

Azure Blob Storage est un service de stockage d'objets puissant et largement utilisé, mais s'y connecter depuis rclone exige une authentification parfaitement configurée. Que vous utilisiez des clés d'accès, des jetons SAS ou des principaux de service, un seul paramètre mal configuré peut entraîner des messages d'erreur obscurs qui bloquent entièrement votre flux de travail.

Ce guide couvre les erreurs d'authentification Azure Blob Storage les plus courantes rencontrées avec rclone, explique les différentes méthodes d'authentification disponibles, et vous guide dans la résolution de chaque problème à l'aide de la configuration visuelle des remotes de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Aperçu des méthodes d'authentification Azure

Azure Blob Storage prend en charge plusieurs méthodes d'authentification via rclone. Comprendre laquelle vous utilisez est la première étape du dépannage :

- **Clé d'accès du compte de stockage** : Une clé partagée qui accorde un accès complet à l'ensemble du compte de stockage. Simple mais puissante -- traitez-la comme un mot de passe root.
- **Jeton SAS (Shared Access Signature)** : Un jeton limité qui accorde un accès restreint avec des permissions spécifiques, des bornes temporelles et des restrictions IP optionnelles. Plus sûr que les clés d'accès pour le partage externe.
- **Principal de service (Azure AD)** : Authentification basée sur OAuth utilisant une application Azure AD. Idéal pour les environnements d'entreprise avec contrôle d'accès basé sur les rôles.
- **Identité managée** : Disponible lors d'une exécution depuis Azure (par exemple, une VM Azure). Utilise automatiquement le service d'identité d'Azure.

Chaque méthode possède ses propres paramètres de configuration et modes de défaillance. Les sections ci-dessous traitent des erreurs les plus courantes pour chacune.

## Jeton SAS expiré (401 Unauthorized)

L'erreur de jeton SAS la plus courante est l'expiration. Les jetons SAS ont une heure de début et une heure d'expiration. Une fois le jeton expiré, chaque requête renvoie une erreur `401 Unauthorized` ou `403 AuthenticationFailed`.

**Symptômes :**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**Comment corriger :**

1. Ouvrez le portail Azure et accédez à votre compte de stockage.
2. Allez dans **Shared access signature** sous la section Security + networking.
3. Définissez une nouvelle date d'expiration avec une marge généreuse (par exemple, 1 an pour un usage personnel, plus court pour un accès partagé).
4. Générez un nouveau jeton SAS.
5. Dans RcloneView, modifiez votre remote Azure Blob et remplacez l'ancien jeton SAS par le nouveau.
6. Testez la connexion pour confirmer que l'accès est rétabli.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Permissions du jeton SAS incorrectes (403 Forbidden)

Un jeton SAS peut être valide mais manquer des permissions nécessaires à votre opération. Par exemple, un jeton avec seulement la permission de lecture échouera lorsque rclone tentera de téléverser, supprimer ou lister des conteneurs.

**Symptômes :**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**Permissions requises pour les opérations rclone :**

| Opération | Permissions SAS requises |
|---|---|
| Lister les conteneurs | List |
| Parcourir les fichiers | Read, List |
| Téléverser des fichiers | Write, Create |
| Supprimer des fichiers | Delete |
| Synchronisation complète | Read, Write, Delete, List, Create |

**Comment corriger :** Générez un nouveau jeton SAS dans le portail Azure avec toutes les permissions requises. Pour les opérations de synchronisation rclone, vous avez généralement besoin de Read, Write, Delete, List, Add et Create. En cas de doute, activez toutes les permissions pour votre compte de stockage personnel.

## Restriction IP bloquant l'accès (403 Forbidden)

Les jetons SAS peuvent être restreints à des adresses IP ou plages spécifiques. Si vous avez généré le jeton depuis votre réseau de bureau mais essayez de l'utiliser depuis chez vous, la restriction IP vous bloquera.

**Symptômes :**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**Comment corriger :**

- Générez un nouveau jeton SAS sans restrictions IP, ou
- Ajoutez votre adresse IP actuelle à la plage autorisée dans la configuration du jeton SAS, ou
- Utilisez une clé d'accès de compte de stockage à la place, qui n'est pas soumise aux restrictions IP.

Si vous disposez d'une IP dynamique (la plupart des connexions domestiques), évitez d'utiliser des jetons SAS restreints par IP à moins de pouvoir les mettre à jour régulièrement.

## Erreurs de clé d'accès (401 Unauthorized)

Si vous utilisez une clé d'accès de compte de stockage, les erreurs signifient généralement que la clé est incorrecte ou que le nom du compte est erroné.

**Causes courantes :**

- Copier la clé avec des espaces ou des caractères de nouvelle ligne en trop.
- Utiliser Key1 alors qu'elle a été renouvelée et que Key2 est désormais active.
- Faire une faute de frappe dans le nom du compte de stockage.
- Utiliser la chaîne de connexion au lieu de simplement la clé.

**Comment corriger dans RcloneView :**

1. Allez dans le portail Azure, accédez à votre compte de stockage, et ouvrez **Access keys**.
2. Cliquez sur **Show** à côté de Key1 ou Key2, puis copiez la clé avec soin.
3. Modifiez votre remote Azure Blob dans RcloneView et collez la clé dans le champ `key`.
4. Vérifiez que le champ `account` correspond exactement au nom de votre compte de stockage (sensible à la casse).
5. Testez la connexion.

## Erreurs de configuration du principal de service

L'authentification par principal de service nécessite trois valeurs : l'ID du tenant, l'ID client, et le secret client. Des valeurs manquantes ou incorrectes pour l'une d'elles entraîneront des échecs d'authentification.

**Symptômes :**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**Comment corriger :**

1. Dans le portail Azure, allez dans **Azure Active Directory > App registrations**.
2. Trouvez votre application et vérifiez l'**Application (client) ID**.
3. Vérifiez le **Directory (tenant) ID** sur la page de présentation.
4. Sous **Certificates & secrets**, créez un nouveau secret client si l'ancien a expiré.
5. Dans RcloneView, mettez à jour la configuration du remote avec les valeurs correctes de tenant, client_id et client_secret.
6. Assurez-vous que le principal de service dispose du rôle **Storage Blob Data Contributor** attribué sur le compte de stockage.

## Générer un jeton SAS correct étape par étape

Pour éviter entièrement les problèmes de jeton SAS, suivez ce processus :

1. Ouvrez le portail Azure et accédez à votre compte de stockage.
2. Cliquez sur **Shared access signature** dans le menu de gauche.
3. Sous **Allowed services**, sélectionnez **Blob**.
4. Sous **Allowed resource types**, sélectionnez **Container** et **Object**.
5. Sous **Allowed permissions**, sélectionnez toutes les permissions dont vous avez besoin (Read, Write, Delete, List, Add, Create).
6. Réglez **Start date** sur aujourd'hui et **Expiry date** sur une date future raisonnable.
7. Laissez **Allowed IP addresses** vide sauf si vous avez besoin de restrictions IP.
8. Réglez **Allowed protocols** sur **HTTPS only**.
9. Cliquez sur **Generate SAS and connection string**.
10. Copiez le **SAS token** (commence par `?sv=`). Retirez le `?` initial lors du collage dans la configuration rclone.

## Tester votre connexion dans RcloneView

Après avoir configuré ou mis à jour votre remote Azure Blob, testez immédiatement la connexion :

1. Ouvrez le remote dans le panneau explorateur de RcloneView.
2. Vérifiez que vos conteneurs sont bien listés.
3. Naviguez dans un conteneur et confirmez que vous pouvez voir les fichiers.
4. Essayez de téléverser un petit fichier de test pour vérifier les permissions d'écriture.
5. Supprimez le fichier de test pour confirmer les permissions de suppression.

Si une étape échoue, le message d'erreur vous indiquera la permission ou le problème de configuration spécifique. Corrigez-le dans la configuration du remote et testez à nouveau.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote Azure Blob Storage en utilisant votre méthode d'authentification préférée (clé d'accès ou jeton SAS).
3. Testez la connexion en parcourant vos conteneurs dans le panneau explorateur.
4. Si vous rencontrez des erreurs 401 ou 403, reportez-vous à la section correspondante ci-dessus pour diagnostiquer et résoudre le problème.

Les erreurs d'authentification Azure sont presque toujours causées par des jetons expirés, des permissions manquantes, ou des identifiants mal copiés. Un dépannage systématique à l'aide des outils visuels de RcloneView permet d'identifier et de résoudre facilement le problème.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ajouter AWS S3 et les services compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Synchroniser instantanément les stockages distants](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
