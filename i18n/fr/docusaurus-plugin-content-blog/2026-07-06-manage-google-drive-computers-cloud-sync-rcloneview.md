---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "Gérer les dossiers Ordinateurs de Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - jay
description: "Connectez et sauvegardez les dossiers Ordinateurs de Google Drive dans RcloneView, en synchronisant les données de sauvegarde du bureau vers plus de 90 fournisseurs cloud depuis une seule interface."
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer les dossiers Ordinateurs de Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView

> Les dossiers de bureau que l'application Backup and Sync de Google pousse vers Drive vivent en dehors de votre arborescence Drive habituelle — RcloneView s'y connecte directement afin qu'ils puissent être parcourus, copiés et sauvegardés comme n'importe quel autre distant.

Lorsqu'un poste de travail exécute le client bureau de Google Drive avec les dossiers « Sauvegarder mon ordinateur » activés, ces fichiers atterrissent dans une section de Drive que les distants standards ne peuvent pas voir par défaut — elle est adressée par un identifiant d'ordinateur, et non par un chemin de dossier classique. Cela la rend difficile à atteindre depuis une interface graphique, et difficile à intégrer dans une stratégie de sauvegarde ou d'archivage plus large. RcloneView expose cela comme un paramètre de distant configurable, de sorte qu'une sauvegarde Ordinateurs devient simplement une autre source que vous pouvez parcourir, filtrer et copier aux côtés de votre stockage cloud habituel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Se connecter à une sauvegarde Ordinateurs

La configuration classique d'un distant Google Drive n'affiche que la racine de votre propre Drive et les dossiers que vous y avez créés. Pour atteindre une sauvegarde Ordinateurs, l'assistant Nouveau distant de RcloneView accepte une valeur `root_folder_id` pointant vers l'identifiant de sauvegarde de l'ordinateur concerné — une fois défini, les dossiers sauvegardés de cette machine (Bureau, Documents, ou tout ce qui a été sélectionné dans le client bureau) apparaissent dans le panneau Explorateur exactement comme une arborescence de dossiers normale. C'est utile pour les équipes IT gérant plusieurs ordinateurs portables d'employés, ou pour quiconque souhaite vérifier ce que le client Backup and Sync d'une machine donnée a réellement capturé sans se connecter via un navigateur.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration d'un distant Google Drive avec root_folder_id pour accéder à une sauvegarde Ordinateurs dans RcloneView" class="img-large img-center" />

Une fois connecté, le distant prend en charge les mêmes opérations de fichiers que toute autre connexion Google Drive : aperçus en vignettes, navigation dans l'arborescence des dossiers, copie/téléchargement par clic droit, et Obtenir la taille pour auditer la quantité de données qu'une machine donnée a poussée vers Drive. RcloneView monte et synchronise sur plus de 90 fournisseurs depuis la même fenêtre, de sorte qu'une sauvegarde Ordinateurs peut se trouver dans un panneau pendant qu'une archive de destination se trouve dans un autre.

## Consolider plusieurs machines en une seule archive

Les organisations qui sauvegardent plusieurs postes de travail se retrouvent avec un dossier Ordinateurs par machine, chacun adressé par son propre identifiant, ce qui rend difficile d'obtenir une vue unique de « tout ce qui a été sauvegardé depuis les ordinateurs portables de l'entreprise ». Configurer un distant distinct par machine et exécuter des tâches de synchronisation unidirectionnelle planifiées vers une destination partagée — un NAS local, un bucket S3, ou un second compte Drive — consolide ces données de sauvegarde éparpillées en un seul endroit que vous contrôlez réellement, plutôt que de les laisser enfermées dans la vue Drive de chaque employé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Synchronisation d'une sauvegarde Ordinateurs Google Drive vers une destination d'archive consolidée dans RcloneView" class="img-large img-center" />

Les paramètres de filtrage à l'étape 3 de l'assistant de synchronisation aident à garder ces tâches efficaces — exclure les fichiers temporaires, les caches système ou les extensions non essentielles signifie que l'archive consolidée ne contient que ce qui vaut réellement la peine d'être conservé, plutôt qu'un miroir complet de chaque fichier que le client bureau a pu capturer.

## Planifier des vérifications récurrentes

Une sauvegarde Ordinateurs n'est pas statique — elle grossit à chaque fois que le client bureau exécute son propre cycle de synchronisation, si bien qu'une copie ponctuelle vers votre archive devient rapidement obsolète. Les utilisateurs de la licence PLUS peuvent attacher une planification de type crontab à la tâche de synchronisation afin que les fichiers nouvellement sauvegardés soient récupérés automatiquement de manière récurrente. L'historique des tâches affiche alors exactement quand le dossier Ordinateurs de chaque machine a été capturé pour la dernière fois, la taille transférée, et si l'exécution s'est terminée proprement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation récurrente pour un distant Google Drive Ordinateurs dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un nouveau distant Google Drive et définissez `root_folder_id` sur l'identifiant de sauvegarde de l'ordinateur cible.
3. Parcourez le panneau Explorateur pour confirmer que les dossiers de bureau attendus apparaissent.
4. Configurez une tâche de synchronisation unidirectionnelle vers une destination d'archive consolidée, en la planifiant si vous disposez d'une licence PLUS.

Les données de sauvegarde du bureau ne devraient pas rester enfermées derrière un identifiant d'ordinateur que vous ne pouvez voir que dans un navigateur — les intégrer dans RcloneView leur confère la même visibilité et la même protection que le reste de votre stockage cloud.

---

**Guides connexes :**

- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gérer les éléments partagés avec moi de Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [Monter Google Drive comme un disque local avec RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
