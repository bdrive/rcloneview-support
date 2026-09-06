---
slug: fix-google-cloud-storage-auth-errors-rcloneview
title: "Corriger les erreurs d'authentification Google Cloud Storage — Résolution avec RcloneView"
authors:
  - morgan
description: "Dépannez les échecs d'authentification Google Cloud Storage dans RcloneView, des Project Numbers manquants aux jetons OAuth expirés."
keywords:
  - erreur d'authentification Google Cloud Storage
  - corriger les erreurs d'authentification GCS
  - Google Cloud Storage Project Number
  - jeton OAuth GCS expiré
  - RcloneView Google Cloud Storage
  - Google Cloud Storage accès refusé
  - dépannage de connexion GCS
  - réparer l'authentification du stockage cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-cloud-storage
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs d'authentification Google Cloud Storage — Résolution avec RcloneView

> La plupart des échecs d'authentification Google Cloud Storage dans RcloneView proviennent d'un champ manquant ou d'un jeton expiré — voici comment isoler et corriger les deux.

Google Cloud Storage se distingue d'une connexion Google Drive personnelle : il nécessite un Project Number lors de la configuration du distant, et son modèle de permissions est régi par des rôles IAM plutôt qu'un simple partage de compte. Lorsque l'un des deux est mal configuré, RcloneView déclenche une erreur d'authentification ou de permission dès que vous essayez de parcourir le bucket. Ce guide passe en revue les causes les plus courantes et explique comment résoudre chacune d'elles directement dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnostiquer la cause racine

Les erreurs d'authentification sur un distant Google Cloud Storage se répartissent généralement en trois catégories : un Project Number manquant ou incorrect saisi lors de la création du distant, un jeton OAuth qui a expiré ou a été révoqué du côté du compte Google, ou un rôle IAM sur le compte de service qui n'accorde pas d'accès en lecture/écriture au bucket cible. Ouvrez d'abord le Remote Manager et vérifiez la configuration du distant — si le champ Project Number est vide ou ne correspond pas au projet propriétaire du bucket, c'est presque toujours la cause.

<img src="/support/images/en/blog/new-remote.png" alt="Vérification des paramètres du distant Google Cloud Storage dans Remote Manager" class="img-large img-center" />

Si le Project Number semble correct, le suspect suivant est la session OAuth elle-même. Les jetons peuvent être invalidés par un changement de mot de passe, une autorisation d'application révoquée dans les paramètres de sécurité de votre compte Google, ou simplement par expiration après une longue période d'inactivité.

## Réauthentification et correction de la configuration du projet

Pour corriger un jeton périmé, modifiez le distant et relancez le flux de connexion OAuth basé sur le navigateur — cela actualise les identifiants sans avoir à reconstruire le distant depuis zéro. En cas de non-correspondance du Project Number, mettez à jour le champ avec l'ID de projet correct affiché dans votre Google Cloud Console, puis enregistrez et reconnectez-vous.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Réauthentification d'un distant Google Cloud Storage après une erreur de jeton" class="img-large img-center" />

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, donc dès que le distant se reconnecte, vous pouvez immédiatement reprendre la tâche de synchronisation ou de montage interrompue sans avoir à reconfigurer quoi que ce soit d'autre. Avant de reconstruire une tâche de synchronisation volumineuse, utilisez le Rclone Terminal intégré pour exécuter `rclone about "yourremote:"` — un moyen rapide de confirmer que la correction a fonctionné avant de lui confier un vrai transfert.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test d'une connexion Google Cloud Storage avant de reprendre une tâche de synchronisation" class="img-large img-center" />

## Prévenir les échecs récurrents

Si l'erreur revient selon une certaine périodicité, vérifiez si le rôle IAM Google Cloud sous-jacent a été défini avec une portée trop restreinte — un rôle qui n'accorde qu'un accès en lecture s'authentifiera avec succès mais échouera lors de toute opération de téléversement ou de suppression, ce qui peut ressembler à une erreur d'authentification intermittente plutôt qu'à un problème de permissions. Pour les cas persistants ou peu clairs, activez Enable rclone Logging dans Settings avec le niveau de journalisation réglé sur DEBUG, reproduisez l'échec, puis examinez les entrées détaillées du journal dans l'onglet Log pour identifier précisément quel appel API est rejeté.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le Remote Manager et vérifiez le Project Number de votre distant Google Cloud Storage.
3. Relancez la connexion OAuth si le jeton a expiré, ou corrigez le Project Number en cas de non-correspondance.
4. Confirmez la correction avec `rclone about` dans l'onglet Terminal avant de reprendre les tâches de synchronisation ou de sauvegarde.

Une vérification de cinq minutes de ces deux paramètres résout l'immense majorité des problèmes d'authentification Google Cloud Storage.

---

**Guides connexes :**

- [Gérer les buckets Google Cloud Storage — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)
- [Corriger un jeton OAuth expiré — Résoudre les erreurs de synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)
- [Synchroniser Amazon S3 vers Google Cloud Storage avec RcloneView](https://rcloneview.com/support/blog/sync-s3-to-google-cloud-storage-rcloneview)

<CloudSupportGrid />
