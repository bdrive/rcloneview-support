---
slug: backup-google-drive-to-amazon-s3
title: Sauvegarder Google Drive vers Amazon S3 avec RcloneView
authors:
  - jay
description: Copiez vos dossiers Google Drive vers Amazon S3 grâce aux outils cliquables de RcloneView — connectez-vous une fois, lancez une sauvegarde, et conservez des copies supplémentaires pour plus de tranquillité d'esprit.
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sauvegarder Google Drive vers Amazon S3 avec RcloneView

> Gardez votre travail d'équipe fluide dans Google Drive et conservez une copie de sécurité sur Amazon S3. Avec RcloneView, vous effectuez toute la sauvegarde en quelques clics — sans script, sans ligne de commande.

## Pourquoi cette combinaison est-elle utile ?

- **Google Drive** est l'endroit où vivent vos documents, feuilles de calcul et dossiers partagés au quotidien.  
- **Amazon S3** conserve des copies pendant des années grâce au versioning, aux politiques de cycle de vie et aux niveaux d'archivage à faible coût.  
- **RcloneView** les relie avec un explorateur à double panneau, des aperçus de comparaison et des tâches planifiées, afin que vous sachiez toujours ce qui est en train de se déplacer.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Avant de commencer

1. **Choisissez les dossiers qui comptent** – examinez les espaces de projet, les Drive partagés et tout dossier de transfert. Ignorez les dossiers de cache ou temporaires dont vous n'avez pas besoin.  
2. **Créez ou choisissez un bucket S3** – décidez de la région, du nom du bucket et du chiffrement par défaut (SSE-S3 ou SSE-KMS). [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)  
3. **Vérifiez les limites du fournisseur** – Google plafonne les transferts via l'API Drive à **750 Go par utilisateur et par jour** et les fichiers à **5 To**. Planifiez les gros transferts sur plusieurs jours. [Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google Help](https://support.google.com/drive/answer/37603)  
4. **Cartographiez la structure de vos dossiers** – des préfixes S3 comme `drive-backup/marketing/2025/` facilitent la navigation dans les snapshots par la suite.  
5. **Découvrez l'application en un coup d'œil** – parcourez les captures d'écran de l'explorateur dans [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage) pour vous familiariser avec l'interface.

## Étape 1 — Connecter les deux services dans RcloneView

1. Ouvrez **RcloneView** → appuyez sur **`+ New Remote`**.  
2. Choisissez **Google Drive**, connectez-vous, et donnez au distant un nom clair comme `Drive-Main`. Si vous sauvegardez des Drive partagés, activez-les lors de la configuration.  
3. Ajoutez un autre distant pour **Amazon S3**. Collez votre clé d'accès/secret (ou assumez un rôle IAM), choisissez le bucket cible, et nommez-le `S3-Backup`.  
4. Confirmez que les deux distants apparaissent côte à côte dans l'explorateur. Le [guide du gestionnaire de distants](/howto/rcloneview-basic/remote-manager) contient des captures d'écran supplémentaires si vous avez besoin d'un rappel.

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## Étape 2 — Planifier la tâche de sauvegarde

- **Test à blanc d'un dossier** : ouvrez `Drive-Main` à gauche et `S3-Backup` à droite. Glissez un petit dossier de test pour voir la boîte de dialogue de transfert.  
- **Utilisez Compare** : l'outil Compare met en évidence les fichiers nouveaux et modifiés avant que vous ne les copiiez. C'est la même vue que celle présentée dans [Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents).  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## Étape 3 — Lancer la première sauvegarde

1. Dans la barre d'outils, choisissez **Copy** (une seule fois) ou **Sync (copy direction)** si vous voulez que la destination reflète Drive sans supprimer les données sur Drive.  
2. Ajoutez des règles de filtrage si vous voulez ignorer des dossiers comme `/Personal/`.  
3. Lancez d'abord un **Dry Run**. Vous verrez un résumé clair des transferts en attente.  
4. Cliquez sur **Start**. Suivez la progression dans le Job Monitor — octets transférés, nombre de fichiers et avertissements apparaissent tous ici.

## Étape 4 — Planifier les copies de suivi

Une fois que la première exécution semble correcte :

1. Enregistrez-la comme **Job** directement depuis la boîte de dialogue de fin.  
2. Ouvrez **Job Manager** → définissez une planification quotidienne ou hebdomadaire. Cela suit le même modèle que le [guide de planification des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution).  
3. Vérifiez l'aperçu du calendrier pour confirmer les horaires, puis laissez RcloneView prendre le relais.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## Garder la copie S3 bien organisée

- **Politiques de cycle de vie** : déplacez les sauvegardes de plus de 90 jours vers Glacier Instant Retrieval ou Deep Archive pour réduire les coûts. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)  
- **Versioning du bucket** : activez-le si vous voulez que chaque écrasement soit conservé. Chaque exécution RcloneView devient alors un point de restauration.  
- **Tags** : ajoutez des tags comme `Team=Finance` ou `Compliance=SOC2` aux objets pour simplifier la facturation et les audits.

Notre article de blog sur [les transferts cloud-to-cloud avec RcloneView](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) présente d'autres idées pour filtrer et organiser vos copies cloud.

## Surveiller et restaurer en toute confiance

- **Historique des tâches** : chaque exécution enregistre les octets, la durée et les messages d'erreur. Exportez un journal directement depuis l'interface lorsque les auditeurs le demandent.  
- **Tableaux de bord cloud** : utilisez S3 Storage Lens ou CloudWatch pour surveiller la croissance du bucket. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)  
- **Étapes de restauration** : choisissez le snapshot nécessaire dans S3, puis recopiez-le vers Drive ou vers un autre bucket en utilisant le même modèle de tâche RcloneView.  

## Guides et ressources associés

- [Configuration rapide d'OAuth Google dans RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Configuration du distant Amazon S3](/howto/remote-storage-connection-settings/s3) — captures d'écran étape par étape pour les identifiants.  
- [Suivi des transferts en temps réel](/howto/rcloneview-basic/real-time-transfer-monitoring) — découvrez comment lire les graphiques de progression des tâches.

## FAQ

**Les Google Docs, Sheets et Slides sont-ils inclus ?**  
Oui. RcloneView les exporte dans les formats de votre choix (DOCX, XLSX, etc.) lors de la sauvegarde.

**Que se passe-t-il si j'atteins la limite quotidienne de 750 Go ?**  
RcloneView se met en pause avec un message clair. Attendez 24 heures ou passez à un autre compte de service Google, puis redémarrez la tâche — elle reprend là où elle s'était arrêtée.

**Puis-je utiliser Wasabi ou Cloudflare R2 au lieu d'AWS S3 ?**  
Absolument. Configurez un distant compatible S3 dans RcloneView et pointez-le vers le point de terminaison du fournisseur.

**Prêt à garder vos fichiers Google Drive en sécurité et consultables sur le long terme ?**

<CloudSupportGrid />
