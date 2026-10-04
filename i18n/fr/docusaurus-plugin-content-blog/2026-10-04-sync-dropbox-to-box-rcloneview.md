---
slug: sync-dropbox-to-box-rcloneview
title: "Synchroniser Dropbox vers Box — Sauvegarde cloud avec RcloneView"
authors:
  - casey
description: "Synchronisez Dropbox vers Box avec RcloneView : connectez les deux remotes OAuth, prévisualisez avec une simulation, planifiez les jobs et vérifiez les résultats avec Folder Compare."
keywords:
  - synchroniser Dropbox vers Box
  - sauvegarde de Dropbox vers Box
  - synchronisation Dropbox Box
  - synchronisation cloud à cloud
  - RcloneView
  - sauvegarde Dropbox
  - stockage cloud Box
  - sauvegarde multi-cloud
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Dropbox vers Box — Sauvegarde cloud avec RcloneView

> Conservez une deuxième copie de vos fichiers Dropbox dans Box, gérée depuis une seule fenêtre de bureau.

Les équipes travaillent souvent dans Dropbox tandis que clients ou partenaires exigent Box. Maintenir les deux à jour à la main implique de télécharger et de retéléverser sans cesse. RcloneView relie les deux comptes comme remotes (distants) et synchronise les dossiers directement entre eux, avec aperçus et historique pour toujours savoir ce qui a changé.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Dropbox et Box comme remotes

Les deux fournisseurs utilisent la connexion OAuth dans le navigateur, aucune clé d'API n'est donc nécessaire. Cliquez sur New Remote, choisissez Dropbox et approuvez l'accès dans votre navigateur ; répétez l'opération pour Box. Pour les comptes professionnels, utilisez le paramètre Dropbox for Business (`dropbox_business = true`) ou le paramètre Box for Business (`box_sub_type = enterprise`) : choisissez donc ces variantes le cas échéant.

<img src="/support/images/en/blog/new-remote.png" alt="Création des remotes Dropbox et Box dans RcloneView" class="img-large img-center" />

## Configurer un job de synchronisation unidirectionnelle

Ouvrez l'assistant de synchronisation, sélectionnez le dossier Dropbox comme source et le dossier Box comme destination, puis nommez le job avec des lettres, des chiffres, des tirets ou des tirets bas. Le mode unidirectionnel ne modifie que la destination, ce qui convient à un rôle de sauvegarde. Comme la synchronisation rend la destination identique à la source, lancez toujours d'abord une simulation (Dry Run) pour voir quels fichiers seraient copiés ou supprimés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration du job de synchronisation de Dropbox vers Box" class="img-large img-center" />

Imaginez une agence de design avec 150 Go de livrables clients. Un filtre sur la taille ou l'ancienneté des fichiers garde les fichiers de travail volumineux hors de la copie Box, tandis que des filtres prédéfinis peuvent ignorer des catégories comme la vidéo.

## Planifier et surveiller

Avec une licence PLUS, l'étape 4 de l'assistant accepte des planifications au format crontab, et l'option de simulation prévisualise les prochaines heures d'exécution. Une exécution nocturne maintient Box à jour sans effort manuel. L'onglet Transferring affiche la vitesse et la progression en direct, et Job History enregistre le statut, la durée, la taille et les fichiers de chaque exécution.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'un job de synchronisation de Dropbox vers Box" class="img-large img-center" />

## Vérifier avec Folder Compare

Après une exécution, ouvrez Folder Compare sur les deux dossiers. Les fichiers présents uniquement à gauche et les fichiers différents sont listés, et vous pouvez copier les éléments manquants depuis la vue de comparaison. Job History vous aide à repérer les exécutions en erreur.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des jobs de la synchronisation de Dropbox vers Box" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html) depuis ce lien.
2. Ajoutez les remotes Dropbox et Box via la connexion OAuth.
3. Créez un job de synchronisation unidirectionnelle et lancez une simulation.
4. Exécutez-le, puis planifiez-le si vous avez une licence PLUS.

Une deuxième copie chez un autre fournisseur transforme un point unique de défaillance en filet de sécurité.

---

**Guides associés :**

- [Box vers Dropbox sans interruption](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Synchroniser Box vers Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Gérer le stockage Dropbox](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
