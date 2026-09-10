---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Gérer Box for Business — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - robin
description: "Connectez Box for Business dans RcloneView pour parcourir, synchroniser et sauvegarder des fichiers d'entreprise avec une seule interface graphique multiplateforme."
keywords:
  - box for business
  - stockage cloud entreprise box
  - RcloneView box business
  - box_sub_type enterprise
  - synchroniser fichiers box business
  - sauvegarde box for business
  - gérer compte entreprise box
  - interface stockage cloud box
  - gestion de fichiers box business
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Box for Business — Synchroniser et sauvegarder des fichiers avec RcloneView

> Les comptes Box for Business nécessitent un réglage supplémentaire lors de la connexion — RcloneView s'en charge, puis vous offre un gestionnaire de fichiers complet en plus.

Box for Business fonctionne avec un type de compte différent d'un compte Box personnel, et le connecter correctement nécessite d'activer un indicateur entreprise lors de la configuration du distant. Une agence de design avec des dossiers d'entreprise partagés sur une douzaine de postes ne peut pas se permettre un distant défectueux qui parcourt silencieusement le mauvais espace de travail. RcloneView ajoute le bon réglage lors de la configuration, puis traite Box for Business comme n'importe quel autre distant — consultable, synchronisable et montable depuis une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter un compte Box for Business

Box for Business utilise la même connexion OAuth par navigateur qu'un compte Box personnel, mais nécessite de définir `box_sub_type = enterprise` lors de la création du distant afin que RcloneView pointe vers le bon espace de travail d'entreprise plutôt que vers une arborescence de dossiers personnelle. Ouvrez l'onglet Remote > New Remote, choisissez Box, terminez la connexion via le navigateur, et définissez le sous-type avant d'enregistrer. Contrairement aux outils de montage uniquement, RcloneView synchronise également et compare les dossiers sur le distant Box for Business — avec la licence FREE.

Une fois connecté, le distant apparaît dans la barre d'onglets de l'Explorer comme n'importe quel autre stockage cloud. Vous pouvez parcourir les dossiers d'entreprise, vérifier le nombre de fichiers et leur taille dans le résumé en bas de page, et basculer entre plusieurs espaces de travail Box sans avoir à vous réauthentifier à chaque fois.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Sauvegarder les dossiers d'entreprise

Un job de synchronisation protège le contenu de Box for Business de la même manière qu'il protège n'importe quel autre distant : configurez la source et la destination à l'étape 1 de l'assistant de synchronisation, choisissez l'option unidirectionnelle « Modifier uniquement la destination » pour une direction de sauvegarde stable, et ajoutez des filtres à l'étape 3 pour exclure les fichiers temporaires ou les pièces jointes trop volumineuses. Pour les équipes qui gèrent des contrats ou des livrables clients, une synchronisation unidirectionnelle nocturne vers un stockage local ou un second compte cloud conserve une copie de récupération en dehors de l'espace de travail partagé.

Job History suit ensuite chaque exécution — statut, nombre de fichiers, taille transférée et durée — afin qu'un administrateur puisse confirmer que les sauvegardes se sont bien terminées, plutôt que de supposer qu'une planification s'est exécutée silencieusement en arrière-plan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Monter Box for Business comme lecteur local

Le montage transforme le compte entreprise en une lettre de lecteur ou un point de montage que n'importe quelle application de bureau peut ouvrir directement, sans télécharger les fichiers au préalable. Cela compte pour les équipes utilisant des logiciels de conception ou de documents qui attendent des chemins de fichiers locaux plutôt qu'une boîte de dialogue de téléversement web. Configurez le mode de cache sur « writes » pour un équilibre entre réactivité et fiabilité, et activez Read only pour les relecteurs qui ne doivent pas modifier le contenu partagé.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau distant Box et activez le sous-type entreprise lors de la configuration.
3. Configurez un job de synchronisation unidirectionnelle pour sauvegarder les dossiers d'entreprise critiques.
4. Montez le distant pour les équipes qui ont besoin d'un accès direct aux fichiers locaux.

Les comptes entreprise méritent la même couverture fiable de synchronisation et de sauvegarde que n'importe quel autre stockage cloud — RcloneView s'assure simplement que la connexion est correctement configurée dès le départ.

---

**Guides connexes :**

- [Gérer le stockage Box — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gérer le stockage Dropbox for Business — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Monter le stockage Box comme lecteur réseau avec RcloneView pour un accès d'équipe fluide](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
