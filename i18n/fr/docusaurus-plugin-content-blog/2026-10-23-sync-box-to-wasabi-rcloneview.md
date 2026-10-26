---
slug: sync-box-to-wasabi-rcloneview
title: "Synchroniser Box vers Wasabi — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez Box vers Wasabi avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, lancez une sauvegarde unidirectionnelle et vérifiez les résultats avec Folder Compare."
keywords:
  - synchroniser Box vers Wasabi
  - sauvegarde de Box vers Wasabi
  - transfert Box Wasabi
  - RcloneView box
  - RcloneView wasabi
  - synchronisation de cloud à cloud
  - sauvegarde Box sur stockage objet
  - sauvegarde S3 Wasabi
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Box vers Wasabi — Sauvegarde cloud avec RcloneView

> Conservez une copie indépendante de votre contenu Box dans le stockage objet Wasabi grâce à une synchronisation unidirectionnelle reproductible.

Box est un endroit pratique pour collaborer, mais une seconde copie en dehors de la plateforme vous protège des suppressions accidentelles, des blocages de compte et des lacunes de conservation. Wasabi est un stockage objet compatible S3, ce qui en fait une cible naturelle pour cette copie. RcloneView connecte les deux services dans une seule fenêtre, et la synchronisation de base ainsi que Dry Run sont disponibles avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Wasabi comme remotes

Box utilise OAuth via le navigateur. Dans RcloneView, ajoutez un nouveau remote, choisissez Box et connectez-vous lorsque le navigateur s'ouvre. Si votre organisation utilise Box for Business, le remote nécessite `box_sub_type = enterprise`. Wasabi s'ajoute comme remote compatible S3 : saisissez votre Access Key, votre Secret Key et le point de terminaison de votre région Wasabi.

Une fois les deux remotes visibles dans le gestionnaire de remotes (Remote Manager), ouvrez-les côte à côte dans deux panneaux Explorer. Vous pouvez ainsi parcourir l'arborescence Box à gauche et un bucket Wasabi à droite avant de configurer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Ajouter des remotes Box et Wasabi dans RcloneView" class="img-large img-center" />

## Prévisualiser avec Dry Run avant de synchroniser

Imaginez une agence de design avec 800 Go de dossiers de projets clients dans Box. Avant la première synchronisation, lancez un Dry Run. Il liste les fichiers qui seraient copiés et ceux qui seraient supprimés, sans rien modifier. Cela vous aide à éviter de diriger une synchronisation vers le mauvais chemin de bucket.

Pour une sauvegarde, la synchronisation unidirectionnelle (« Modifying destination only ») est la bonne direction : Box reste la source de référence et Wasabi en est le miroir. N'oubliez pas qu'une synchronisation supprime aussi les fichiers de destination qui n'existent plus dans la source ; utilisez donc un bucket ou un préfixe dédié pour le miroir.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud entre Box et Wasabi" class="img-large img-center" />

## Configurer la tâche de synchronisation

L'assistant de tâche comporte quatre étapes : stockage, paramètres avancés, filtres et planification. Augmentez le nombre de transferts de fichiers si vous avez beaucoup de petits documents, et activez la comparaison par somme de contrôle lorsque vous souhaitez une vérification basée sur le hachage. Les filtres prédéfinis incluent une option Box Docs, utile car Box Notes et les autres éléments uniquement en ligne ne se comportent pas comme des fichiers ordinaires.

Nommez la tâche avec des lettres, des chiffres, des tirets ou des tirets bas, enregistrez-la puis exécutez-la. La progression, la vitesse et le nombre de fichiers apparaissent dans l'onglet Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécuter une tâche de synchronisation Box vers Wasabi enregistrée" class="img-large img-center" />

## Planifier et vérifier

La synchronisation planifiée est une fonctionnalité PLUS, avec des champs de style crontab et un simulateur qui affiche les prochaines exécutions. Une exécution nocturne maintient la copie Wasabi à jour. Après chaque exécution, ouvrez l'historique des tâches (Job History) pour vérifier le statut, la taille et le nombre de fichiers, ou utilisez Folder Compare pour confirmer que les deux côtés correspondent.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planifier une tâche de synchronisation récurrente dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Box via OAuth et votre remote Wasabi avec ses clés et son point de terminaison.
3. Créez une tâche de synchronisation de Box vers un bucket Wasabi dédié, et lancez d'abord un Dry Run.
4. Exécutez la tâche, puis vérifiez avec Folder Compare et l'historique des tâches.

Un miroir testé et planifié transforme Box d'un point de défaillance unique en l'une des deux moitiés d'une véritable sauvegarde.

---

**Guides associés :**

- [Migrer Box vers Wasabi](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Synchroniser Google Drive vers Box](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Corriger les erreurs de synchronisation Wasabi](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
