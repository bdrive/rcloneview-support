---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Gérer le stockage Cubbit DS3 — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - alex
description: "Découvrez comment connecter Cubbit DS3 à RcloneView pour synchroniser, sauvegarder ou gérer votre stockage cloud européen géo-distribué depuis une simple interface graphique de bureau."
keywords:
  - Cubbit DS3 sync
  - Cubbit DS3 backup
  - Cubbit S3-compatible storage
  - RcloneView Cubbit
  - European cloud storage backup
  - geo-distributed object storage
  - Cubbit DS3 setup guide
  - private cloud backup RcloneView
  - S3 compatible storage management
  - Cubbit DS3 file manager
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Cubbit DS3 — Synchroniser et sauvegarder vos fichiers avec RcloneView

> RcloneView se connecte à Cubbit DS3 via le protocole S3, vous permettant de parcourir, synchroniser et sauvegarder votre stockage cloud européen géo-distribué sans écrire la moindre commande CLI.

Cubbit DS3 est un service de stockage d'objets géo-distribué, compatible S3, construit à travers un réseau de nœuds européens. Contrairement aux fournisseurs centralisés, Cubbit fragmente et chiffre vos données à travers un réseau de cellules distribuées, ce qui en fait un choix intéressant pour les équipes soumises aux exigences du RGPD ou celles qui recherchent un stockage privé par conception. Cubbit DS3 étant entièrement compatible S3, RcloneView s'y connecte en utilisant le même flux d'identifiants que pour les autres fournisseurs S3 — aucun plugin ni configuration spéciale n'est nécessaire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Cubbit DS3 à RcloneView

Ouvrez RcloneView et allez dans **Onglet Distant > Nouveau distant**. Sélectionnez **Amazon S3** comme type de distant, puis choisissez **Cubbit DS3** dans la liste des fournisseurs S3. Saisissez votre identifiant de clé d'accès Cubbit, votre clé secrète, ainsi que l'URL du point de terminaison S3 copiée depuis le tableau de bord de la console Cubbit. Laissez la région vide ou utilisez la valeur recommandée dans la documentation Cubbit. Cliquez sur **Enregistrer**, et votre distant Cubbit DS3 apparaît comme un nouvel onglet dans l'explorateur de fichiers.

La connexion prend effet immédiatement. Vous pouvez développer votre bucket dans l'arborescence de dossiers à gauche, parcourir les objets en vue liste détaillée, ou basculer en vue miniatures pour prévisualiser les images stockées dans le bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Téléverser et gérer les fichiers dans Cubbit DS3

La mise en page à double volet de RcloneView simplifie le téléversement de fichiers vers Cubbit DS3. Ouvrez un dossier local dans un panneau et votre bucket Cubbit DS3 dans l'autre. Faites glisser un dossier — par exemple, une collection de dessins CAO d'un cabinet d'architecture — depuis le panneau de gauche vers le panneau Cubbit à droite. RcloneView gère automatiquement les téléversements multithreads concurrents, et le moniteur de transfert en bas affiche la vitesse de transfert en direct, le nombre de fichiers et la progression.

Un clic droit sur n'importe quel objet dans le panneau Cubbit affiche le menu contextuel complet : Copier, Couper, Supprimer, Renommer, Obtenir la taille et Obtenir le lien public. L'option **Obtenir la taille** est particulièrement utile pour calculer la consommation de stockage sur de grands dossiers de bucket avant de décider d'une stratégie de synchronisation.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Configurer des tâches de synchronisation planifiées vers Cubbit DS3

Pour des sauvegardes automatisées, utilisez le bouton **Synchroniser** dans l'onglet Accueil pour lancer l'assistant de tâche en 4 étapes. Sélectionnez votre dossier local ou un autre distant cloud comme source, et votre bucket Cubbit DS3 comme destination. À l'étape 2, augmentez le nombre de transferts de fichiers simultanés pour tirer pleinement parti de la bande passante distribuée de Cubbit. À l'étape 3, appliquez des filtres par type de fichier — par exemple, excluez les fichiers `.tmp` et `.log` pour garder la sauvegarde propre.

Les utilisateurs de la licence PLUS débloquent l'étape 4 : la planification de type cron. Configurez une tâche pour s'exécuter chaque nuit à 3 h, ajoutez un filtre d'âge maximal des fichiers pour ne synchroniser que les fichiers récemment modifiés, et configurez des notifications par e-mail pour confirmer chaque exécution. C'est idéal pour une équipe de recherche qui a besoin de captures instantanées nocturnes automatiques de ses archives de données vers un backend de stockage européen conforme.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## Suivre les transferts avec l'historique des tâches

Après chaque exécution de synchronisation, la vue **Historique des tâches** de RcloneView enregistre l'heure d'exécution, la durée, le nombre total d'octets transférés, la vitesse de transfert et le statut final. Pour Cubbit DS3, ce journal d'audit est précieux lorsque vous devez confirmer qu'une sauvegarde critique s'est terminée avec succès, ou lors de l'investigation d'une exécution échouée pour identifier les fichiers ayant provoqué des erreurs.

Utilisez la fonction **Simulation (Dry Run)** avant toute opération destructive — elle simule la synchronisation et liste chaque fichier qui serait copié ou supprimé, afin que vous puissiez vérifier la portée sans toucher au bucket.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans **Onglet Distant > Nouveau distant**, sélectionnez Amazon S3, puis choisissez Cubbit DS3 comme fournisseur.
3. Saisissez votre clé d'accès Cubbit, votre clé secrète et le point de terminaison S3 depuis la console Cubbit.
4. Parcourez votre bucket dans l'explorateur de fichiers et faites glisser des fichiers pour démarrer le téléversement immédiatement.

Avec Cubbit DS3 connecté à RcloneView, vous bénéficiez d'un flux de travail entièrement visuel pour votre stockage cloud européen géo-distribué — aucun terminal requis.

---

**Guides associés :**

- [Gérer le stockage cloud Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gérer DigitalOcean Spaces — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Centraliser le stockage S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
