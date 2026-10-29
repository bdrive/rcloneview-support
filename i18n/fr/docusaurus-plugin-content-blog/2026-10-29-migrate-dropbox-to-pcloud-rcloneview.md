---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "Migrer Dropbox vers pCloud — Transférez vos fichiers avec RcloneView"
authors:
  - robin
description: "Déplacez vos fichiers de Dropbox vers pCloud avec RcloneView : connectez les deux remotes, lancez un Dry Run, copiez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer dropbox vers pcloud
  - transfert de dropbox vers pcloud
  - déplacer des fichiers dropbox vers pcloud
  - migration dropbox pcloud
  - transfert de cloud à cloud
  - rcloneview dropbox
  - rcloneview pcloud
  - passer de dropbox à pcloud
  - transférer des données dropbox
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Dropbox vers pCloud — Transférez vos fichiers avec RcloneView

> Déplacez un compte Dropbox vers pCloud en une seule passe maîtrisée et vérifiable, plutôt que de télécharger puis d'envoyer à la main.

Changer de fournisseur implique généralement de télécharger des gigaoctets sur un ordinateur portable, puis de les renvoyer. RcloneView évite cela : il connecte Dropbox et pCloud côte à côte et exécute le transfert de cloud à cloud via rclone. RcloneView permet de monter et de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Dropbox et pCloud

Les deux services utilisent une connexion OAuth via le navigateur dans RcloneView, il n'y a donc aucune clé d'API à coller. Ouvrez l'onglet Remote, cliquez sur **New Remote**, choisissez Dropbox et autorisez l'accès dans la fenêtre du navigateur qui s'ouvre. Répétez l'opération pour pCloud. Si vous migrez un compte d'équipe, Dropbox for Business nécessite le paramètre `dropbox_business = true`.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau remote Dropbox et pCloud dans RcloneView" class="img-large img-center" />

Une fois les deux remotes créés, ouvrez-les dans deux panneaux Explorer. Voir l'arborescence Dropbox à côté de la destination pCloud permet de décider facilement s'il faut tout déplacer ou seulement certains dossiers.

## Planifier la copie avant de l'exécuter

Utilisez une tâche **Copy** pour une première migration, car elle ne supprime jamais rien à la source. Dans l'assistant de tâche en 4 étapes, choisissez Dropbox comme source et un dossier pCloud dédié comme destination. Dans Advanced Settings, vous pouvez augmenter le nombre de transferts de fichiers pour de grandes bibliothèques de photos ou de documents, et activer la comparaison par somme de contrôle si vous souhaitez une vérification par hachage et taille.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Dropbox vers pCloud dans RcloneView" class="img-large img-center" />

Le filtrage aide aussi. Définissez une taille maximale de fichier ou excluez des motifs tels que `.git/` afin que les fichiers temporaires et les dossiers de build ne suivent pas le reste. Lancez d'abord un **Dry Run** : il liste les fichiers qui seraient copiés sans toucher à aucun des deux comptes.

## Exécuter, surveiller et vérifier

Démarrez la tâche et suivez l'onglet Transferring pour la progression, la vitesse et le nombre de fichiers. Dropbox applique des limites de débit à son API, un gros transfert peut donc ralentir par moments ; RcloneView relance la synchronisation (3 tentatives par défaut) au lieu de l'abandonner.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance d'un transfert en cours dans RcloneView" class="img-large img-center" />

Une fois la tâche terminée, ouvrez **Compare** sur les dossiers Dropbox et pCloud. Les fichiers présents uniquement à gauche sont ceux qui ne sont pas arrivés ; les fichiers « different » diffèrent par la taille. Copiez les retardataires en un clic, puis consultez dans Job History l'état, la taille totale et le nombre de fichiers de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare montrant les différences entre Dropbox et pCloud" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Dropbox et pCloud comme remotes avec **New Remote**.
3. Créez une tâche Copy avec Dropbox comme source, puis lancez un Dry Run.
4. Exécutez la tâche, puis vérifiez avec Folder Compare avant de fermer l'ancien compte.

Laissez Dropbox intact jusqu'à ce que Compare n'affiche plus de fichiers présents uniquement à gauche : l'original reste alors disponible comme solution de repli.

---

**Guides associés :**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
