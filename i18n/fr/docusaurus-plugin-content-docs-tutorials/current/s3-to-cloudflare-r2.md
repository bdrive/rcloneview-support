---
sidebar_position: 10
description: "Découvrez comment migrer vos données d'Amazon S3 vers Cloudflare R2 avec RcloneView."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';


# Migration d'AWS S3 vers Cloudflare R2 avec RcloneView

Dans le paysage actuel dominé par le cloud, les organisations et les développeurs cherchent souvent à optimiser les coûts de stockage, à éviter la dépendance à un fournisseur (vendor lock-in) et à améliorer l'accessibilité des données. **Amazon S3** est depuis longtemps la référence du secteur pour le stockage d'objets, offrant une durabilité élevée et une intégration transparente avec les services AWS. Cependant, à mesure que les volumes de transfert de données augmentent, les frais de sortie (egress) de S3 et la complexité de la facturation peuvent devenir un fardeau important.

**Cloudflare R2** apparaît comme une alternative séduisante : il propose un stockage compatible S3 sans frais de sortie, un modèle de tarification transparent et des performances mondiales grâce au vaste réseau périphérique (edge) de Cloudflare. Migrer de S3 vers R2 vous permet de :

- **Éliminer les frais de sortie** et réduire les coûts globaux de stockage cloud
- **Éviter la dépendance à un fournisseur** grâce à la compatibilité avec l'API S3 et des configurations multi-cloud flexibles
- **Tirer parti du réseau périphérique mondial de Cloudflare** pour un accès aux données plus rapide et plus fiable
- **Simplifier la facturation** et la gestion grâce à un tableau de bord convivial

La migration manuelle entre plateformes cloud est fastidieuse et source d'erreurs. C'est là que **RcloneView** fait la différence.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## Pourquoi utiliser RcloneView pour la migration de S3 vers R2 ?

RcloneView est un gestionnaire de stockage cloud doté d'une interface graphique, construit sur Rclone. Il prend en charge nativement les **points de terminaison compatibles S3** comme AWS S3 et Cloudflare R2, avec :

- Une prise en charge complète de l'**authentification par clé d'accès / clé secrète**
- La possibilité de définir des points de terminaison personnalisés (pour R2)
- Un explorateur à deux volets pour la migration de fichiers par glisser-déposer
- Des outils de comparaison et de synchronisation de dossiers
- Des tâches planifiées pour des migrations massives ou incrémentielles
- Des journaux de progression détaillés et une gestion des erreurs

Que vous déplaciez des téraoctets de données ou seulement quelques dossiers, RcloneView vous permet de migrer en toute confiance, sans aucune compétence en ligne de commande.

## 🔄 Transférer des fichiers d'AWS S3 vers Cloudflare R2

### Étape 1 : Ajouter un distant AWS S3

1. Lancez **RcloneView**, allez dans l'onglet **`Remote`**, puis cliquez sur **`+ New Remote`**.
2. Dans l'onglet **`Provider`**, choisissez **Amazon S3**.
3. Dans l'onglet **`Options`** :
   - Définissez `provider` sur `AWS`
   - Saisissez votre **Access Key ID** et votre **Secret Access Key**
   - La région et le point de terminaison peuvent rester par défaut, sauf personnalisation
4. Cliquez sur **Save** pour terminer la configuration.

👉 En savoir plus :   
- [Comment ajouter un distant S3](/howto/remote-storage-connection-settings/s3)
- [Comment obtenir les identifiants d'accès AWS S3](/howto/cloud-storage-setting/aws-account-info)
### Étape 2 : Ajouter un distant Cloudflare R2

1. Cliquez à nouveau sur **`+ New Remote`** dans l'onglet `Remote`.
2. Dans l'onglet **`Provider`**, sélectionnez **S3** (oui, encore une fois : R2 utilise le protocole S3).
3. Dans l'onglet **`Options`** :
   - Définissez `provider` sur `Cloudflare`
   - Saisissez votre **clé d'accès Cloudflare R2** et votre **clé secrète**
   - Définissez `endpoint` sur `https://<accountid>.r2.cloudflarestorage.com`
1. Cliquez sur **Save** pour terminer la configuration du distant R2.

👉 En savoir plus :   
- [Comment ajouter un distant S3](/howto/remote-storage-connection-settings/s3)
- [Comment obtenir les identifiants d'accès Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)

### Étape 3 : Ouvrir les distants dans l'explorateur à deux volets

1. Allez dans l'onglet **Browse** de RcloneView.
2. Dans le volet de gauche, cliquez sur `+` et sélectionnez votre distant **AWS S3**.
3. Dans le volet de droite, cliquez sur `+` et sélectionnez votre distant **Cloudflare R2**.
4. Vous pourrez désormais afficher et gérer les deux services côte à côte.

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 Méthodes de migration de fichiers

### 🖱️ Méthode 1 : Glisser-déposer des fichiers

- Sélectionnez des fichiers ou des dossiers depuis AWS S3 à gauche.
- Faites-les glisser dans le volet Cloudflare R2 à droite.
- Le transfert démarre automatiquement, avec la progression affichée dans l'onglet **`Transfer`**.

👉 En savoir plus : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 Méthode 2 : Comparer les dossiers et transférer

1. Dans les deux volets, accédez aux dossiers source (S3) et cible (R2) correspondants.
2. Cliquez sur **`Compare`** dans le menu `Home`.
3. RcloneView mettra en évidence :
   - Les fichiers présents uniquement dans S3
   - Les fichiers déjà présents dans R2
   - Les fichiers identiques mais de taille ou d'horodatage différents
4. Cliquez sur **Copy →** pour migrer les fichiers sélectionnés de S3 vers R2.
5. Utilisez **Delete** pour le nettoyage si nécessaire.

👉 En savoir plus : [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 Méthode 3 : Utiliser la synchronisation ou une tâche

1. Dans le volet de l'explorateur, sélectionnez le dossier **Cloudflare R2** et le dossier **AWS S3** que vous souhaitez synchroniser.
2. Cliquez sur le bouton **`Sync`** dans le menu `home`.
3. Choisissez les options de synchronisation (unidirectionnelle ou bidirectionnelle), prévisualisez les actions, puis confirmez.
4. RcloneView exécute la synchronisation et affiche la progression dans l'onglet de journal **`transfer`**.

- Pour des transferts répétés ou planifiés :
  1. Cliquez sur **`Save to Jobs`** dans la fenêtre de synchronisation, ou ouvrez **`Job Manager`** → **`Add Job`**.
  2. Configurez la source, la destination et les options.
  3. Enregistrez et exécutez manuellement, ou définissez une planification.

👉 En savoir plus :
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Méthode 4 : Planifier une tâche de synchronisation récurrente

1. Dans le volet de l'explorateur, sélectionnez les dossiers **Cloudflare R2** et **AWS S3** que vous souhaitez maintenir synchronisés.
2. Ouvrez **`Job Manager`** depuis le menu **`Home`** ou **`Remote`**, puis cliquez sur **`Add Job`**.
3. Confirmez votre source et votre destination.
4. Utilisez l'éditeur de planification pour définir quand la tâche doit s'exécuter. Prévisualisez votre planification avant de l'enregistrer.
5. Enregistrez et activez la tâche planifiée.

RcloneView exécutera la synchronisation aux horaires que vous avez spécifiés. Consultez les détails d'exécution et les journaux dans **`Job History`** et recevez des notifications à la fin.

👉 En savoir plus : [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ Résumé

La migration d'AWS S3 vers Cloudflare R2 permet de réduire les frais de sortie et la dépendance à un fournisseur, sans sacrifier les performances. Avec RcloneView, la transition est rapide, sûre et entièrement visuelle.

Essayez-le dès aujourd'hui et pérennisez votre configuration de stockage cloud avec Cloudflare R2.

---

## 🔗 Guides associés

- [Comment ajouter un distant S3](/howto/remote-storage-connection-settings/s3)
- [Comment obtenir les identifiants d'accès AWS S3](/howto/cloud-storage-setting/aws-account-info)
- [Comment obtenir les identifiants d'accès Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents)
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](/howto/rcloneview-basic/execute-manage-job)
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
