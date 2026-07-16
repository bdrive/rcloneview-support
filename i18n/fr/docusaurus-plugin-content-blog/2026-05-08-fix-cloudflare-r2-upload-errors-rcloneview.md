---
slug: fix-cloudflare-r2-upload-errors-rcloneview
title: "Corriger les erreurs de téléversement Cloudflare R2 — Comment résoudre avec RcloneView"
authors:
  - jay
description: "Diagnostiquez et corrigez les erreurs de téléversement et de synchronisation Cloudflare R2 dans RcloneView — permissions du jeton API, configuration du point de terminaison, échecs de téléversement multipart et problèmes de limite de débit."
keywords:
  - Cloudflare R2 upload errors RcloneView
  - fix R2 sync errors
  - Cloudflare R2 API token error
  - R2 multipart upload failure
  - RcloneView Cloudflare R2 troubleshoot
  - fix R2 403 permission error
  - Cloudflare R2 connection issues
  - rclone R2 upload fix
tags:
  - cloudflare-r2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de téléversement Cloudflare R2 — Comment résoudre avec RcloneView

> Cloudflare R2 impose des exigences spécifiques en matière d'identifiants et de point de terminaison, ce qui provoque des erreurs en cas de mauvaise configuration. Voici comment diagnostiquer et corriger les échecs de téléversement et de synchronisation R2 les plus courants dans RcloneView.

Cloudflare R2 est un service de stockage d'objets compatible S3 qui élimine les frais de sortie, ce qui le rend attrayant pour la distribution de contenu et les charges de travail de sauvegarde. Cependant, le modèle d'authentification de R2 diffère légèrement du S3 standard d'AWS — il utilise un ID de compte associé à des jetons API plutôt que les paires de clés de style IAM auxquelles la plupart des utilisateurs de S3 sont habitués. Bien configurer ces détails dans RcloneView est la clé pour résoudre la plupart des erreurs R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Erreur : 403 Forbidden ou identifiants invalides

L'erreur R2 la plus courante est une réponse `403 Forbidden`, généralement causée par une configuration incorrecte du jeton API. Lors de l'ajout de Cloudflare R2 dans **Onglet Distant → Nouveau distant**, vous avez besoin de trois informations : le **jeton API R2** (avec des permissions de lecture/écriture d'objets pour le bucket spécifique), l'**ID de compte** (trouvé dans le tableau de bord Cloudflare), et l'URL du point de terminaison R2 au format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

Une erreur courante consiste à utiliser la clé API globale au lieu d'un jeton API spécifique à R2. Générez un jeton API dédié dans la section R2 de Cloudflare sous **Manage API Tokens**, et assurez-vous qu'il dispose au moins des permissions « Object Read & Write » pour le bucket cible. Si vous obtenez des erreurs `403` lors du listage du bucket mais pas lors de l'accès à des fichiers individuels, le jeton manque peut-être de permissions de listage au niveau du bucket — régénérez-le avec la portée « Account → R2 → Read/Write ».

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Cloudflare R2 credentials in RcloneView" class="img-large img-center" />

## Erreur : échec du téléversement multipart ou téléversements incomplets

R2 prend en charge les téléversements multipart (requis pour les fichiers de plus de 100 Mo), mais des téléversements multipart incomplets peuvent laisser des parties orphelines dans votre bucket et provoquer l'échec des téléversements ultérieurs du même nom de fichier. Dans l'**onglet Journal** de RcloneView, recherchez des messages comme `upload multipart failed` ou `NoSuchUpload`.

La solution consiste d'abord à nettoyer les téléversements multipart orphelins de votre bucket R2 à l'aide du tableau de bord Cloudflare ou du terminal rclone intégré à RcloneView. Réessayez ensuite le téléversement avec un nombre inférieur de flux multipart simultanés dans les Paramètres avancés de la tâche. Définir `--s3-upload-concurrency 4` via l'option **Global Rclone Flags** dans les Paramètres peut stabiliser les téléversements volumineux vers R2.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Retrying a failed R2 upload job in RcloneView" class="img-large img-center" />

## Erreurs de point de terminaison et de région

Cloudflare R2 n'utilise pas les codes de région AWS standard. Si vous voyez des erreurs `NoSuchBucket` ou `InvalidLocationConstraint`, vérifiez l'URL du point de terminaison dans la configuration de votre distant. Le format correct est `https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com` — l'ID de compte doit correspondre exactement à votre compte Cloudflare. Le champ région doit être laissé vide ou défini sur `auto` pour R2.

Si vous avez copié le point de terminaison depuis un autre service S3, vérifiez qu'il commence par le préfixe de votre ID de compte et non par une URL de région AWS comme `s3.us-east-1.amazonaws.com`.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring R2 upload after fixing configuration errors" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez que votre jeton API R2 dispose des permissions de lecture/écriture d'objets sur le bucket cible.
3. Confirmez que l'URL du point de terminaison utilise le format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.
4. Pour les fichiers volumineux, réduisez la concurrence des téléversements multipart et nettoyez les téléversements orphelins.

Correctement configuré, Cloudflare R2 avec RcloneView offre d'excellentes performances pour la sauvegarde et l'archivage à un coût prévisible.

---

**Guides associés :**

- [Gérer le stockage cloud Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Corriger les erreurs d'accès refusé S3 avec RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Corriger les échecs de téléversement multipart S3 avec RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
