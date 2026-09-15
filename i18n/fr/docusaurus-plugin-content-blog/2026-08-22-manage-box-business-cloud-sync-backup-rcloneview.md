---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Gérer le stockage Box for Business — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - robin
description: "Connectez Box for Business à RcloneView pour la navigation de fichiers multiplateforme, la synchronisation cloud à cloud et les sauvegardes planifiées des comptes Box d'entreprise."
keywords:
  - box for business
  - stockage entreprise box
  - rcloneview box business
  - synchronisation box business
  - box_sub_type enterprise
  - gui stockage cloud entreprise
  - sauvegarde compte équipe box
  - gestion stockage cloud entreprise
  - migration box business
  - gestion de fichiers multi-cloud
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Box for Business — Synchroniser et sauvegarder des fichiers avec RcloneView

> Connectez un compte entreprise Box for Business à RcloneView, puis parcourez, synchronisez et sauvegardez les dossiers d'entreprise partagés aux côtés de tous les autres clouds que vous gérez.

Les comptes Box for Business organisent le contenu autour de dossiers gérés au niveau de l'entreprise plutôt qu'autour d'un simple compte personnel, ce qui signifie que la connexion Box standard nécessite un réglage supplémentaire pour fonctionner correctement. RcloneView gère cela directement, offrant aux administrateurs IT une seule fenêtre pour parcourir, transférer et protéger le contenu Box de l'entreprise, sans avoir à basculer entre l'application web Box et un client de synchronisation distinct.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer un distant Box for Business

L'ajout d'un compte Box for Business commence de la même façon qu'une connexion Box personnelle : cliquez sur New Remote, sélectionnez Box, puis terminez la connexion OAuth dans votre navigateur. La différence tient à un seul réglage supplémentaire — `box_sub_type = enterprise` — qui oriente le distant vers la structure du compte entreprise plutôt que vers l'espace d'un utilisateur individuel. Une fois ce réglage appliqué, les dossiers du compte entreprise se chargent dans le panneau Explorer exactement comme n'importe quel autre distant.

Contrairement aux outils qui ne font que du montage, RcloneView synchronise et compare aussi les dossiers — avec la licence FREE — de sorte qu'un administrateur gérant Box aux côtés d'autres clouds de département n'a pas besoin d'une application distincte simplement pour déplacer des fichiers entre eux.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Parcourir les dossiers d'entreprise

Une fois connecté, le panneau File Explorer affiche la structure des dossiers d'entreprise avec les mêmes colonnes Name, Type, Modified date et Size utilisées pour tous les distants, ainsi qu'une arborescence de dossiers repliable pour naviguer dans des hiérarchies de départements profondes. L'option Copy Full Path de la barre de chemin en fil d'Ariane restitue le chemin au format `remote:path`, pratique pour transmettre un emplacement au Terminal rclone intégré afin de faire une vérification rapide du stockage avec `rclone about`.

La sélection multiple avec Ctrl+Clic et Maj+Clic permet d'extraire un dossier de projet précis d'un vaste espace d'entreprise sans avoir à parcourir tout le compte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## Sauvegarder les données d'entreprise vers un second cloud

Conserver les fichiers d'entreprise chez un seul fournisseur est un risque que de nombreuses équipes IT préfèrent éviter, c'est pourquoi mettre en miroir le contenu Box for Business vers Amazon S3, Backblaze B2 ou un autre cloud comme copie secondaire est une pratique courante. L'assistant Sync en 4 étapes de RcloneView couvre ce cas : choisissez le distant Box for Business comme source, sélectionnez un distant de destination, et réglez le sens de synchronisation en unidirectionnel afin que la destination de sauvegarde reflète la source sans rien modifier en amont. Les réglages de Filtering permettent d'exclure les fichiers médias trop volumineux ou de limiter la tâche aux fichiers d'un certain âge, ce qui recentre la sauvegarde sur ce qui compte réellement.

Exécuter un Dry Run avant la première synchronisation complète affiche la liste exacte des fichiers qui seront copiés et supprimés, ce qui vaut la peine d'être fait avant de déplacer les données de tout un compte entreprise.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## Automatiser les sauvegardes récurrentes

Les utilisateurs de la licence PLUS peuvent attacher une planification au format crontab à la tâche de sauvegarde Box for Business, afin qu'elle s'exécute chaque nuit ou chaque semaine sans intervention manuelle. Job History enregistre ensuite, pour chaque exécution, le type d'exécution, la durée, le statut et la taille totale transférée, offrant aux administrateurs un historique à consulter sans avoir à fouiller dans la propre console d'administration de Box.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un nouveau distant Box et définissez `box_sub_type = enterprise` lors de la configuration.
3. Parcourez les dossiers d'entreprise dans le panneau Explorer et vérifiez l'accès aux départements dont vous avez besoin.
4. Créez une tâche Sync pour mettre en miroir les données d'entreprise vers un second cloud, et planifiez-la si vous êtes sous licence PLUS.

Un distant Box for Business correctement configuré fait de RcloneView un filet de sécurité pratique pour des données d'entreprise qui, sinon, ne vivraient qu'à un seul endroit.

---

**Guides connexes :**

- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrer de Box vers OneDrive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Monter le stockage Box comme lecteur réseau avec RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
