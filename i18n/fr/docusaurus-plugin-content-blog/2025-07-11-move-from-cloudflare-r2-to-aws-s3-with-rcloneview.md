---
slug: move-from-cloudflare-r2-to-aws-s3-with-rcloneview
title: Synchronisation sans effort de Cloudflare R2 vers AWS S3 avec RcloneView
authors:
  - jay
description: Découvrez comment synchroniser ou migrer facilement des fichiers de Cloudflare R2 vers AWS S3 grâce à l'interface graphique intuitive de RcloneView, sans terminal nécessaire.
keywords:
  - rcloneview
  - cloudflare r2 to aws s3
  - object storage sync
  - cloud migration GUI
  - rclone GUI
  - multi-cloud workflow
  - file transfer cloudflare R2
tags:
  - cloudflare
  - aws-s3
  - RcloneView
  - cloud-sync
  - cloud-migration
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchronisation sans effort de Cloudflare R2 vers AWS S3 avec RcloneView

> Découvrez comment sauvegarder ou répliquer vos données Cloudflare R2 vers AWS S3 de manière conviviale, sans toucher à la ligne de commande.


## Pourquoi synchroniser R2 et S3

Bien que **Cloudflare R2** se démarque par ses **frais de sortie nuls**, ce qui en fait un choix de stockage économique, **AWS S3** reste dominant grâce à un écosystème mature—incluant des règles de cycle de vie, le chiffrement et la disponibilité régionale. Synchroniser les données de R2 vers S3 offre le meilleur des deux mondes—des économies de coûts avec une résilience stratégique.

<!-- truncate -->
### Cloudflare R2 en un coup d'œil
- Aucuns frais de sortie de données—idéal pour un usage intensif  
- Tarification simple à l'usage avec une API compatible S3 

### Pourquoi conserver des données dans AWS S3 ?
- Fonctionnalités avancées : versioning, contrôles IAM, niveaux de stockage  
- Large intégration avec les outils et services AWS

**Synchroniser de R2 vers S3 permet de :**
- Protéger les données grâce à une infrastructure AWS fiable  
- Maintenir la compatibilité pour les workflows liés aux services AWS  
- Combiner l'accessibilité de R2 avec les fonctionnalités de S3


<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Étape par étape : le workflow RcloneView pour R2 → S3

### Étape 1 – Préparer l'accès

Assurez-vous d'avoir :
- Les identifiants Cloudflare R2 (clé d'accès, clé secrète)  
- La clé d'accès/secrète AWS S3 et les informations de région  
- Décidé entre une sauvegarde ponctuelle ou une synchronisation récurrente

🔍 Guides utiles :
- [Comment récupérer les identifiants d'accès AWS S3](/howto/cloud-storage-setting/aws-account-info)
- [Comment obtenir les identifiants API et le endpoint Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
### Étape 2 – Ajouter des remotes dans RcloneView

1. Ouvrez **RcloneView**, cliquez sur **`+ New Remote`**
2. Pour R2 :
   - Sélectionnez le fournisseur **S3-compatible**, choisissez **Cloudflare**  
   - Saisissez vos clés R2 et le endpoint (par ex. `https://<account>.r2.cloudflarestorage.com`)  
3. Pour AWS S3 :
   - Choisissez **Amazon S3**, ajoutez les identifiants, nommez-le clairement (par ex. `MyS3`)  
4. Vérifiez que les deux apparaissent côte à côte dans la vue Explorer

👉 Pour en savoir plus : [Comment ajouter un remote S3](/howto/remote-storage-connection-settings/s3)
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

### Étape 3 – Exécuter la synchronisation

**Méthode A – Glisser-déposer**  
Rapide et visuel—glissez les fichiers du panneau R2 vers votre panneau S3.

👉 Pour en savoir plus : [Copier des fichiers par glisser-déposer](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

**Méthode B – Comparer et copier**
Utilisez la fonction **Compare** pour mettre en évidence les fichiers nouveaux ou modifiés et sélectionner ceux à synchroniser.

👉 Pour en savoir plus : [Comparer et gérer les fichiers](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />

**Méthode C – Synchronisation et tâches planifiées**  
Configurez des tâches récurrentes :
1. Choisissez le dossier R2 comme source, S3 comme destination  
2. Cliquez sur **Sync**, prévisualisez (dry-run), puis enregistrez comme job  
3. Planifiez éventuellement et laissez RcloneView s'en charger automatiquement

👉 Pour en savoir plus :
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />

## Réflexions finales et conseils

### Un récapitulatif rapide
- **R2** : Économique avec des frais de sortie nuls ; **S3** : Riche en fonctionnalités et hautement intégré  
- **RcloneView** : Une interface graphique simple qui relie les deux sans nécessiter de compétences en ligne de commande

### Astuces supplémentaires
- Utilisez R2 pour les ressources destinées au public ; synchronisez vers S3 pour l'archivage à long terme ou l'auditabilité  
- Appliquez des règles de cycle de vie sur S3 pour un stockage à plusieurs niveaux—réduisez les coûts même dans les workflows de synchronisation  
- Surveillez les résultats des tâches via les journaux et le retour visuel rapide dans RcloneView


## FAQ

| Question                                            | Réponse                                                          |
|-----------------------------------------------------|------------------------------------------------------------------|
| Ai-je besoin de compétences techniques pour cela ?  | Pas du tout—RcloneView offre une interface visuelle claire.       |
| La synchronisation entraîne-t-elle des frais de sortie ? | Les transferts depuis R2 n'ont aucuns frais de sortie. AWS peut facturer les opérations de stockage entrantes, selon le niveau. |
| La planification de synchronisations récurrentes est-elle utile ? | Absolument—elle maintient votre sauvegarde AWS à jour sans effort manuel.  |


**Prêt à relier vos environnements Cloudflare R2 et AWS S3 sans effort ?**  

<CloudSupportGrid />
