---
slug: manage-mailru-cloud-sync-rcloneview
title: "Gérer le stockage cloud Mail.ru — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment connecter et gérer le stockage cloud Mail.ru avec RcloneView. Synchronisez, sauvegardez et transférez vos fichiers Mail.ru grâce à une interface graphique claire, sans aucune commande CLI."
keywords:
  - Mail.ru cloud storage RcloneView
  - Mail.ru cloud sync GUI
  - manage Mail.ru files
  - Mail.ru backup tool
  - rclone Mail.ru GUI
  - Mail.ru file transfer
  - cloud storage management
  - Mail.ru sync desktop app
tags:
  - RcloneView
  - mailru
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage cloud Mail.ru — Synchroniser et sauvegarder des fichiers avec RcloneView

> Connectez Mail.ru Cloud à RcloneView pour gérer vos fichiers, exécuter des sauvegardes automatisées et synchroniser vos données entre plusieurs fournisseurs — le tout depuis une seule interface graphique de bureau.

Mail.ru Cloud offre un espace de stockage gratuit généreux et est largement utilisé en Russie et dans les pays voisins. Le gérer efficacement peut s'avérer difficile sans le bon outil. RcloneView comble cette lacune en se connectant à Mail.ru Cloud via le backend Mail.ru éprouvé de rclone, et en présentant vos fichiers dans un explorateur à deux panneaux familier. Aucune connaissance de la ligne de commande n'est requise.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Mail.ru Cloud comme distant dans RcloneView

Configurer Mail.ru dans RcloneView prend moins de deux minutes. Ouvrez l'onglet **Remote** dans la barre de menu et cliquez sur **New Remote**. Faites défiler la liste des fournisseurs pour trouver Mail.ru Cloud (ou tapez « mail » dans le champ de recherche), puis saisissez les identifiants de votre compte Mail.ru — nom d'utilisateur et mot de passe. RcloneView les transmet à l'instance rclone intégrée, qui gère l'authentification auprès de l'API Mail.ru.

Une fois enregistré, le distant apparaît immédiatement dans vos panneaux d'exploration. Vous pouvez parcourir les dossiers, prévisualiser les vignettes, consulter les métadonnées des fichiers et naviguer dans l'arborescence comme sur un disque local. La barre de fil d'Ariane offre une hiérarchie cliquable, ce qui permet d'accéder rapidement aux répertoires imbriqués en profondeur.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## Synchroniser les fichiers Mail.ru vers un autre cloud ou un disque local

L'une des fonctionnalités les plus puissantes de RcloneView est le transfert fluide de cloud à cloud. Si vous devez copier des fichiers de Mail.ru Cloud vers Google Drive, Backblaze B2 ou un dossier local, ouvrez les deux emplacements côte à côte dans l'explorateur à double panneau. Faites glisser les fichiers d'un panneau à l'autre, ou effectuez un clic droit et sélectionnez **Copy**, puis **Paste** dans le panneau cible.

Pour les sauvegardes récurrentes, utilisez le gestionnaire de tâches intégré. Définissez une tâche de synchronisation ou de copie avec Mail.ru comme source et la destination de votre choix. Configurez la concurrence des transferts et activez la vérification par somme de contrôle pour détecter tout fichier corrompu pendant le transfert. Avec une licence PLUS, vous pouvez planifier ces tâches selon un minuteur de type crontab afin que les sauvegardes s'exécutent automatiquement, sans intervention manuelle.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## Suivre les transferts et consulter l'historique

L'onglet **Transferring**, en bas de la fenêtre RcloneView, affiche la progression en temps réel de toute tâche active — nombre de fichiers, octets transférés et vitesse actuelle. Vous pouvez annuler une tâche en cours à tout moment si vous devez la mettre en pause ou ajuster des paramètres.

Une fois chaque tâche terminée, l'onglet **Job History** conserve un enregistrement complet : heure de début, durée, taille totale transférée et statut final (Completed, Errored ou Canceled). Pour une entreprise de photographie qui stocke les livrables clients sur Mail.ru, cet historique constitue une piste d'audit fiable et permet de repérer facilement si une sauvegarde a échoué pendant la nuit.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Remote tab → New Remote**, sélectionnez Mail.ru Cloud et saisissez vos identifiants.
3. Parcourez vos fichiers Mail.ru dans le panneau de l'explorateur et faites glisser les éléments vers n'importe quelle destination.
4. Créez une tâche de synchronisation dans le **Job Manager** pour des sauvegardes récurrentes automatisées.

Avec RcloneView, Mail.ru Cloud s'intègre parfaitement à votre flux de travail multi-cloud — aucun terminal requis.

---

**Guides connexes :**

- [Gérer le stockage cloud Yandex Disk avec RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Transférer Mail.ru Cloud vers Google Drive et S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Gérer plusieurs comptes cloud avec RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
