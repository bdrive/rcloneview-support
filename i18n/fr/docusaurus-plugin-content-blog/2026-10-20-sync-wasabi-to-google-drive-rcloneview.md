---
slug: sync-wasabi-to-google-drive-rcloneview
title: "Synchroniser Wasabi vers Google Drive — sauvegarde cloud avec RcloneView"
authors:
  - morgan
description: "Synchronisez Wasabi vers Google Drive avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, lancez une synchronisation unidirectionnelle et vérifiez le résultat avec Folder Compare."
keywords:
  - synchroniser wasabi vers google drive
  - sauvegarde wasabi vers google drive
  - transfert wasabi google drive
  - RcloneView wasabi
  - RcloneView google drive
  - synchronisation cloud à cloud
  - s3 vers google drive
  - sauvegarde de bucket wasabi
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Wasabi vers Google Drive — sauvegarde cloud avec RcloneView

> Conservez dans Google Drive une seconde copie de votre bucket Wasabi, propice à la collaboration, grâce à une synchronisation unidirectionnelle prévisualisable.

Wasabi est un lieu courant pour les archives et les livrables de projet, mais les personnes qui ont besoin de ces fichiers travaillent souvent dans Google Drive. Synchroniser les deux services garde une copie lisible là où vos collègues travaillent déjà, et offre un second emplacement si l'un des comptes rencontre un problème. RcloneView connecte les deux services dans une seule fenêtre, prévisualise la tâche et vérifie le résultat. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture sur la licence FREE, parmi plus de 90 autres fournisseurs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Wasabi est accessible via le protocole S3 de rclone : saisissez une Access Key, une Secret Key et le point de terminaison de votre région Wasabi. Google Drive utilise OAuth dans le navigateur ; RcloneView ouvre donc une page de connexion Google et se connecte une fois l'accès approuvé.

Ouvrez chaque remote dans son propre panneau Explorer. Parcourez le bucket et l'arborescence de dossiers Drive côte à côte afin de savoir précisément quel préfixe correspond à quel dossier.

<img src="/support/images/en/blog/new-remote.png" alt="Ajouter les remotes Wasabi et Google Drive dans RcloneView" class="img-large img-center" />

## Configurer la tâche de synchronisation

Imaginez un studio vidéo dont le bucket contient des montages terminés que les producteurs veulent retrouver dans un dossier Drive partagé. Créez une tâche depuis le bouton Sync : choisissez le préfixe Wasabi comme source et le dossier Drive comme destination, puis donnez à la tâche un nom composé de lettres, de chiffres, de tirets ou de tirets bas.

La synchronisation unidirectionnelle ("Modifying destination only") fait correspondre la destination à la source ; les fichiers qui n'existent que dans le dossier Drive seront donc supprimés. Si le dossier Drive contient des fichiers à conserver, utilisez plutôt une tâche Copy. Dans Advanced Settings, vous pouvez définir le nombre de fichiers transférés simultanément et activer la comparaison par somme de contrôle. N'oubliez pas que Google Docs, Sheets et Slides ne sont pas des fichiers ordinaires ; le filtre Google Docs prédéfini est donc utile pour les exclure.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud entre Wasabi et Google Drive dans RcloneView" class="img-large img-center" />

## Prévisualiser avec Dry Run

Avant la première exécution réelle, utilisez Dry Run. Il liste les fichiers qui seraient copiés et supprimés sans rien modifier, ce qui est le moyen le plus économique de repérer un préfixe source erroné ou une suppression inattendue. Lancez la tâche lorsque la liste vous convient et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécuter une tâche de synchronisation dans RcloneView" class="img-large img-center" />

## Vérifier et répéter

Après la synchronisation, ouvrez Folder Compare sur les deux emplacements pour confirmer qu'aucun fichier n'est présent d'un seul côté ou différent. Job History enregistre le statut, la durée, la taille et le nombre de fichiers de chaque exécution, ce qui permet de consulter les exécutions passées. Avec une licence PLUS, vous pouvez ajouter une planification de type crontab afin que la copie soit actualisée automatiquement.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vue Folder Compare dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Wasabi avec Access Key, Secret Key et point de terminaison de région, puis ajoutez Google Drive via la connexion dans le navigateur.
3. Créez une tâche Sync du préfixe Wasabi vers un dossier Drive et lancez d'abord Dry Run.
4. Exécutez la tâche, puis confirmez le résultat avec Folder Compare.

Une copie Drive de votre bucket transforme une archive en un contenu que toute votre équipe peut ouvrir.

---

**Guides associés :**

- [Migrer Wasabi vers OneDrive](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Workflow « comparer d'abord »](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
