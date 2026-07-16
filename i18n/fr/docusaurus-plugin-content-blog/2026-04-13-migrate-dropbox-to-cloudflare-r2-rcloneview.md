---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "Migrer de Dropbox vers Cloudflare R2 — Transférez vos fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez vos fichiers de Dropbox vers Cloudflare R2 avec RcloneView. Connectez-vous via OAuth et jeton API, gérez les fichiers volumineux et profitez de frais de sortie nuls sur R2."
keywords:
  - migrer Dropbox vers Cloudflare R2
  - transfert Dropbox R2 RcloneView
  - migration de Dropbox vers R2
  - synchronisation cloud Cloudflare R2
  - stockage cloud sans frais de sortie
  - outil de migration cloud à cloud
  - alternative à Dropbox R2
  - guide de migration RcloneView
tags:
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Dropbox vers Cloudflare R2 — Transférez vos fichiers avec RcloneView

> Cloudflare R2 propose un stockage d'objets compatible S3 sans frais de sortie — RcloneView simplifie la migration depuis Dropbox grâce à une tâche de synchronisation cloud à cloud.

Cloudflare R2 est devenu une alternative attrayante pour les équipes qui quittent Dropbox. Sans frais de sortie et avec une API compatible S3, R2 s'intègre naturellement aux workflows de développement, aux pipelines d'actifs statiques et aux stratégies d'archivage soucieuses des coûts. Déplacer vos fichiers Dropbox existants vers R2 est une migration cloud à cloud ponctuelle que RcloneView gère sans faire transiter les données par votre machine locale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Étape 1 — Connecter Dropbox

Ouvrez RcloneView et allez dans **Remote Manager**. Cliquez sur **New Remote** et sélectionnez **Dropbox**. Comme la plupart des fournisseurs OAuth, Dropbox ouvre votre navigateur pour l'autorisation — connectez-vous et cliquez sur Allow. RcloneView enregistre le jeton et le remote apparaît immédiatement. Ouvrez-le dans le File Explorer pour confirmer que vos fichiers et dossiers Dropbox sont visibles.

Si vous disposez d'un compte Dropbox Business, assurez-vous d'être connecté avec le compte propriétaire du contenu que vous souhaitez migrer. Les dossiers partagés appartenant à d'autres personnes peuvent avoir des restrictions d'accès.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## Étape 2 — Connecter Cloudflare R2

Dans **Remote Manager**, cliquez sur **New Remote** et sélectionnez **S3 Compatible**. Cloudflare R2 utilise des identifiants compatibles S3 :

- **Access Key ID** : depuis votre jeton API Cloudflare R2 (créez-en un dans le tableau de bord Cloudflare sous R2 > Manage API Tokens)
- **Secret Access Key** : le secret correspondant
- **Endpoint** : `https://{account-id}.r2.cloudflarestorage.com`

Votre Account ID apparaît dans la barre latérale du tableau de bord Cloudflare. Enregistrez le remote et ouvrez-le pour confirmer que vos buckets R2 sont visibles. Créez le bucket de destination s'il n'existe pas.

## Étape 3 — Configurer la tâche de migration

Accédez à **Jobs** et cliquez sur **New Job**. Définissez Dropbox comme source. Vous pouvez choisir la racine pour tout migrer, ou sélectionner un dossier spécifique. Définissez Cloudflare R2 comme destination et pointez vers votre bucket cible.

À l'étape 2 de l'assistant de tâche, configurez les options de migration :

- Commencez avec **Dry Run** activé pour prévisualiser la liste des fichiers
- Réglez **transfers** sur 4 à 6 pour les migrations Dropbox (des valeurs plus élevées peuvent déclencher les limites de taux de Dropbox)
- Activez la **vérification par somme de contrôle** pour confirmer que les fichiers volumineux ont été transférés sans corruption

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## Gestion des fichiers volumineux

Cloudflare R2 prend en charge des objets jusqu'à 5 To, et RcloneView utilise automatiquement le téléversement multipart pour les fichiers volumineux. Dropbox impose une taille maximale de 2 To par fichier. En pratique, pour la plupart des migrations Dropbox, les fichiers resteront largement dans les limites. Si vous avez des fichiers exceptionnellement volumineux et que le transfert échoue, consultez l'onglet Log pour des messages d'erreur spécifiques et envisagez de réduire le nombre de transferts simultanés.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## Étape 4 — Vérifier et terminer

Une fois la tâche de migration principale terminée, utilisez **Folder Compare** pour vérifier. Ouvrez la source Dropbox et la destination R2 côte à côte et laissez RcloneView identifier les éventuelles divergences. Relancez la tâche pour les fichiers manquants. Une fois que vous êtes satisfait que la migration est complète, vous pouvez mettre à jour vos applications pour qu'elles pointent vers R2 et réduire progressivement l'accès à Dropbox.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Dropbox via OAuth dans **Remote Manager**.
3. Connectez Cloudflare R2 à l'aide de votre jeton API, du secret et du endpoint de votre Account ID.
4. Créez une tâche de migration, exécutez Dry Run pour prévisualiser, puis lancez le transfert complet.

Passer à Cloudflare R2 élimine le modèle de tarification par utilisateur de Dropbox et supprime les coûts de sortie pour le contenu consulté depuis le réseau de Cloudflare.

---

**Guides connexes :**

- [Migrer de Wasabi vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Migrer d'Azure Blob vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [Corriger les erreurs d'API de limite de taux Dropbox avec RcloneView](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
