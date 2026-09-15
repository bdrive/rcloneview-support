---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "Migrer de OpenDrive vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Déplacez les fichiers d'un compte OpenDrive vers Microsoft OneDrive grâce au transfert cloud à cloud de RcloneView, à l'aperçu Dry Run et au suivi de l'historique des tâches."
keywords:
  - migrer opendrive vers onedrive
  - transfert opendrive onedrive
  - migration rcloneview opendrive
  - synchronisation opendrive onedrive
  - migration cloud à cloud
  - alternative à opendrive
  - outil de migration onedrive
  - transférer des fichiers opendrive
  - transfert de fichiers multi-cloud
  - gui de migration de stockage cloud
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de OpenDrive vers OneDrive — Transférer des fichiers avec RcloneView

> Déplacez les fichiers d'un compte OpenDrive directement vers Microsoft OneDrive avec RcloneView, sans passer par une étape locale de téléchargement puis de renvoi.

Consolider le stockage sur moins de fournisseurs est une raison courante de quitter OpenDrive, en particulier pour les équipes déjà standardisées sur Microsoft 365 pour la collaboration. RcloneView se connecte aux deux services dans la même fenêtre et transfère les données directement entre eux, de sorte que la migration ne dépend pas du remplissage de l'espace disque local avec une copie temporaire de tout le contenu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants

Ajoutez OpenDrive comme distant via l'assistant New Remote, en saisissant les informations de compte demandées, puis ajoutez OneDrive comme second distant via sa connexion OAuth dans le navigateur. Les deux distants apparaissent dans des onglets séparés du panneau Explorer, et RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte qu'aucun outil séparé n'est nécessaire une fois les deux comptes connectés.

Les deux distants étant visibles côte à côte, le glisser-déposer entre eux déclenche une copie directe — glisser entre différents distants copie toujours plutôt que déplace, de sorte que les fichiers OpenDrive d'origine restent intacts jusqu'à ce que vous ayez vérifié le transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Exécuter la migration en tant que tâche Sync

Pour une migration complète du compte plutôt qu'une simple copie ponctuelle de dossier, l'assistant Sync en 4 étapes est la voie la plus fiable. Sélectionnez le distant et le dossier OpenDrive comme source, OneDrive comme destination, et choisissez la synchronisation unidirectionnelle afin que la destination soit construite pour correspondre à la source, sans aucun risque que les changements remontent. Les réglages avancés permettent d'ajuster le nombre de transferts de fichiers simultanés et d'activer la comparaison par somme de contrôle, qui confirme que chaque fichier correspond par hachage et par taille plutôt que de se fier uniquement à la taille — un réglage qu'il vaut la peine d'activer pour une migration où l'intégrité des données compte plus que la vitesse brute.

Avant de valider l'exécution complète, Dry Run prévisualise exactement les fichiers qui seront copiés, ce qui permet de repérer quelque chose d'inattendu — comme un dossier partagé obsolète — avant qu'il n'atterrisse dans OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## Vérifier que le transfert s'est bien déroulé

Une fois la synchronisation terminée, la fonction Compare vérifie la source OpenDrive par rapport à la destination OneDrive côte à côte, en signalant les fichiers présents seulement à gauche, seulement à droite, et ceux dont la taille diffère. Cela permet de repérer les transferts partiels ou les fichiers ignorés avant de considérer le compte OpenDrive comme prêt à être fermé, et tout écart repéré peut être copié directement depuis la vue de comparaison.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## Suivre la migration dans Job History

Chaque exécution de la tâche de migration — qu'il s'agisse d'une nouvelle exécution manuelle pour récupérer des fichiers restants ou d'une nouvelle tentative après un incident réseau — est consignée dans Job History avec l'heure de début, la durée, le statut, la taille totale et le nombre de fichiers. Cet historique est utile pour confirmer précisément ce qui a été déplacé et quand, ce qui compte si vous devez rendre compte de la migration plus tard.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez à la fois OpenDrive et OneDrive comme distants.
3. Configurez une tâche Sync unidirectionnelle d'OpenDrive vers OneDrive, exécutez d'abord un Dry Run, puis lancez le transfert.
4. Utilisez Compare pour vérifier que chaque fichier est bien arrivé avant de mettre fin au compte OpenDrive.

Une migration directe de cloud à cloud garde le processus rapide et évite la saturation du stockage local liée au téléchargement préalable de tout le contenu.

---

**Guides connexes :**

- [Gérer le stockage OneDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Synchroniser OpenDrive vers Google Drive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [Sauvegarder OpenDrive vers AWS S3 — Stockage externe avec RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />
