---
slug: fix-s3-access-denied-permission-errors-rcloneview
title: "Corriger les erreurs S3 Access Denied et les erreurs de permissions avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs S3 'Access Denied', 403 Forbidden et les erreurs d'identifiants dans rclone et RcloneView. Couvre les politiques IAM, les politiques de bucket, les ACL et la configuration des identifiants."
keywords:
  - fix s3 access denied rclone
  - s3 403 forbidden rclone
  - rclone s3 permission error
  - aws s3 access denied rcloneview
  - iam policy s3 rclone
  - s3 bucket policy error
  - rclone aws credentials error
  - s3 acl permission denied
  - troubleshoot s3 rclone
  - fix s3 errors rcloneview
tags:
  - amazon-s3
  - aws-s3
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs S3 Access Denied et les erreurs de permissions avec RcloneView

> Une erreur "Access Denied" provenant d'un fournisseur de stockage compatible S3 signifie presque toujours une mauvaise configuration des permissions — pas un bug. Ce guide passe en revue chaque cause courante et sa solution, des politiques IAM aux ACL de bucket en passant par les erreurs de frappe dans les identifiants.

Les erreurs de permission S3 sont frustrantes car elles sont souvent opaques : l'API renvoie `403 Access Denied` sans préciser quelle permission spécifique manque. Le problème peut venir de la politique IAM, de la politique du bucket, de l'ACL du bucket, de l'ACL de l'objet, des paramètres de chiffrement, ou simplement d'identifiants incorrects. RcloneView affiche clairement ces erreurs dans l'historique des tâches — ce guide vous aide à en retrouver la source.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnostiquer l'erreur

La première étape consiste à lire le message d'erreur exact dans l'historique des tâches de RcloneView ou dans la sortie du terminal :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View S3 errors in RcloneView job history" class="img-large img-center" />

Modèles d'erreurs courants et ce qu'ils indiquent :

| Message d'erreur | Cause probable |
|--------------|-------------|
| `AccessDenied: Access Denied` | Politique IAM/bucket ; identifiants incorrects |
| `403 Forbidden` | Blocage par la politique du bucket ou par une ACL |
| `NoCredentialProviders: no valid credentials` | Identifiants non configurés |
| `InvalidAccessKeyId` | Clé d'accès incorrecte ou faute de frappe |
| `SignatureDoesNotMatch` | Clé secrète incorrecte |
| `AllAccessDisabled: All access to this object has been disabled` | Paramètres S3 Block Public Access |
| `AccountProblem` | Problème de compte AWS (facturation, suspension) |

## Solution 1 : Identifiants incorrects ou manquants

La cause la plus courante d'`AccessDenied` est simplement des identifiants incorrects dans la configuration du distant RcloneView.

**Vérifiez vos identifiants :**
1. Ouvrez **Remotes** dans RcloneView.
2. Sélectionnez le distant S3 et cliquez sur **Edit**.
3. Vérifiez que l'**Access Key ID** et la **Secret Access Key** correspondent exactement à ce qui figure dans votre console AWS IAM (ou la console équivalente du fournisseur).
4. Recollez les clés en cas de doute — les espaces invisibles sont une source fréquente d'erreur.

Pour Wasabi, IDrive e2 et les autres fournisseurs compatibles S3, vérifiez également que l'**Endpoint URL** correspond à l'endpoint actuel du fournisseur pour votre région.

## Solution 2 : Permissions IAM insuffisantes

Si les identifiants sont corrects, l'utilisateur ou le rôle IAM manque probablement des permissions S3 nécessaires.

**Permissions minimales pour que RcloneView fonctionne :**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

Attachez cette politique à l'utilisateur ou au rôle IAM utilisé par RcloneView. Pour lister tous les buckets, ajoutez également `s3:ListAllMyBuckets` sur `Resource: "*"`.

<img src="/support/images/en/blog/new-remote.png" alt="Verify S3 credentials in RcloneView remote settings" class="img-large img-center" />

## Solution 3 : Politique de bucket bloquant l'accès

Une politique de bucket peut outrepasser les permissions IAM. Vérifiez la politique du bucket dans la console AWS :

1. Accédez à **S3 → Your Bucket → Permissions → Bucket Policy**.
2. Recherchez toute déclaration `Deny` susceptible de s'appliquer à votre utilisateur IAM.
3. Vérifiez également les paramètres **Block Public Access** — si vous essayez de définir des ACL publiques sur des objets, ces paramètres le bloqueront.

Une erreur courante est une déclaration `Deny` fourre-tout qui bloque accidentellement votre utilisateur IAM :

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Condition": {
    "Bool": { "aws:SecureTransport": "false" }
  }
}
```

Il s'agit en réalité d'une politique valide d'application du HTTPS — rclone utilise HTTPS par défaut, cela ne devrait donc pas poser problème sauf si vous avez explicitement forcé le HTTP.

## Solution 4 : Problèmes d'ACL au niveau des objets

Certaines configurations S3 imposent que les objets téléversés utilisent une ACL spécifique (`bucket-owner-full-control` dans les configurations inter-comptes). Si vous téléversez vers le bucket de quelqu'un d'autre et qu'il obtient `Access Denied` en lisant vos téléversements :

Ajoutez `--s3-acl bucket-owner-full-control` dans le champ **Custom flags** de la tâche dans RcloneView.

## Solution 5 : Exigences de chiffrement côté serveur (SSE)

Certains buckets exigent que les objets soient téléversés avec une clé de chiffrement spécifique (SSE-KMS). Téléverser sans cette clé entraîne une erreur Access Denied.

Dans les indicateurs personnalisés de la tâche RcloneView :
```
--s3-sse aws:kms --s3-sse-kms-key-id arn:aws:kms:us-east-1:123456789:key/your-key-id
```

## Solution 6 : MFA Delete ou Object Lock

Si Object Lock ou MFA Delete est activé sur le bucket, certaines opérations (suppression, écrasement) sont bloquées sans étapes d'authentification supplémentaires. Pour les tâches en lecture seule (Copy, pas Sync), cela n'a pas d'importance. Pour les tâches de synchronisation qui doivent supprimer les fichiers orphelins, vous aurez besoin de :

- Un utilisateur avec des permissions élevées et MFA, ou
- Un mode de tâche qui ne supprime pas (Copy au lieu de Sync).

## Solution 7 : Non-correspondance de région

Se connecter à un bucket S3 situé dans `us-west-2` via l'endpoint `us-east-1` renvoie parfois Access Denied. Assurez-vous que l'endpoint ou la région de votre distant correspond à la région réelle du bucket.

Dans RcloneView, modifiez le distant et définissez la **Region** sur la valeur correcte (par exemple, `us-west-2`).

## Résumé de la checklist

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Debug S3 issues systematically" class="img-large img-center" />

Parcourez cette checklist dans l'ordre :

1. ✅ Les identifiants (clé d'accès et clé secrète) sont copiés correctement, sans faute de frappe
2. ✅ L'utilisateur/rôle IAM dispose des permissions ListBucket, GetObject, PutObject sur le bucket
3. ✅ Aucune déclaration Deny dans la politique du bucket n'affecte cet utilisateur
4. ✅ Les paramètres Block Public Access n'empêchent pas les opérations prévues
5. ✅ La région/l'endpoint correspond à la région réelle du bucket
6. ✅ Les exigences de chiffrement (SSE-KMS) sont respectées si le bucket les impose
7. ✅ Les exigences d'ACL sont respectées pour les téléversements inter-comptes

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Consultez l'historique des tâches** pour obtenir le message d'erreur exact.
3. **Faites correspondre l'erreur** à la solution ci-dessus.
4. **Mettez à jour les identifiants ou les politiques IAM** et relancez la tâche.

Les erreurs de permission S3 sont presque toujours des problèmes de configuration, pas des bugs. Un diagnostic méthodique les élimine rapidement.

---

**Guides associés :**

- [Corriger les erreurs de quota de l'API Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Sauvegarde immuable S3 avec Object Lock](https://rcloneview.com/support/blog/immutable-s3-object-lock-rcloneview)
- [Résoudre les erreurs Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
