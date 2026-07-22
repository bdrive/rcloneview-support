---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "Get Size — Calculez instantanément l'utilisation du stockage cloud dans RcloneView"
authors:
  - jay
description: "Utilisez la fonction Get Size de RcloneView pour calculer la taille totale de n'importe quel dossier ou sélection sur plus de 90 fournisseurs de stockage cloud avant de synchroniser ou de migrer."
keywords:
  - fonction get size
  - calculer la taille du stockage cloud
  - taille de dossier stockage cloud
  - RcloneView get size
  - vérifier l'utilisation du stockage cloud
  - vérifier la taille du dossier avant transfert
  - audit de stockage multi-cloud
  - commande rclone about GUI
  - outils de gestionnaire de fichiers cloud
  - analyse de l'utilisation du stockage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Get Size — Calculez instantanément l'utilisation du stockage cloud dans RcloneView

> Faites un clic droit sur n'importe quel dossier ou sélection dans RcloneView et obtenez instantanément la taille totale, sans attendre un transfert complet pour savoir combien de données vous déplacez.

Les fournisseurs de stockage cloud indiquent rarement clairement la taille réelle d'un dossier avant que vous n'essayiez de le déplacer. Un dossier « Media » contenant des milliers de sous-dossiers imbriqués peut cacher des gigaoctets de données qui ne deviennent visibles que lorsqu'une tâche de synchronisation se bloque à mi-chemin, ou qu'un avertissement de quota apparaît en pleine transfert. La commande Get Size de RcloneView, dans le menu contextuel de l'explorateur de fichiers, résout ce problème en calculant à la demande la taille totale des fichiers ou dossiers sélectionnés avant de vous engager dans une synchronisation, un montage ou une migration.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier la taille d'un dossier avant de déplacer quoi que ce soit

Sélectionnez un ou plusieurs fichiers ou dossiers dans un panneau de l'explorateur, faites un clic droit et choisissez Get Size. RcloneView parcourt la sélection et renvoie la taille totale, ce qui est particulièrement utile pour les dossiers avec des arborescences de sous-répertoires profondes, où le résumé en bas de la liste de fichiers ne reflète pas à lui seul le contenu imbriqué. Cela fonctionne de la même manière, que la sélection se trouve sur Google Drive, Amazon S3, une instance Nextcloud auto-hébergée ou un disque local — RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, donc le même menu contextuel s'applique quel que soit le remote parcouru.

Get Size est surtout utile comme vérification préalable. Avant de lancer une tâche de Sync importante ou une migration ponctuelle entre deux clouds, vérifier la taille réelle du dossier source aide à estimer le temps de transfert, à confirmer que la destination dispose de suffisamment de quota disponible, et à décider si des règles de filtrage sont nécessaires pour réduire la tâche.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## Auditer l'utilisation du stockage sur plusieurs remotes

Comme chaque remote connecté — cloud ou local — se trouve dans le même explorateur, Get Size sert également de moyen rapide d'auditer où le stockage est consommé dans une configuration multi-cloud. L'exécuter tour à tour sur les dossiers de premier niveau de chaque remote donne un aperçu approximatif des comptes qui approchent de leurs limites, ce qui est plus rapide que de se connecter à la console web distincte de chaque fournisseur pour vérifier l'utilisation.

Pour obtenir un chiffre d'utilisation plus précis au niveau du remote plutôt que d'un dossier spécifique, le Rclone Terminal intégré prend en charge `rclone about "remote:"`, qui indique le stockage total utilisé et disponible directement depuis l'API du fournisseur. Get Size et la commande `about` du terminal se complètent : l'un se concentre sur une sélection spécifique, l'autre indique les totaux au niveau du compte.

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## Utiliser les vérifications de taille pour planifier les règles de synchronisation et de filtrage

Une fois la taille réelle d'un dossier connue, l'assistant Sync de RcloneView fournit les outils pour agir sur cette information. L'étape 3 de la configuration de la tâche comprend un filtrage par taille de fichier maximale, âge de fichier maximal, ainsi que des filtres prédéfinis pour les types médias, vidéo, image et document, de sorte qu'un dossier trop volumineux puisse être réduit aux seuls fichiers qui doivent réellement être transférés. Exécuter ensuite un Dry Run prévisualise exactement quels fichiers seraient copiés ou supprimés selon les paramètres de filtrage actuels, confirmant que la tâche correspond aux attentes avant que la moindre donnée ne bouge réellement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez les remotes que vous souhaitez auditer via l'onglet Remote > New Remote.
3. Sélectionnez un dossier dans l'explorateur, faites un clic droit et choisissez Get Size pour voir son empreinte totale.
4. Utilisez ce chiffre pour planifier des filtres ou une programmation dans l'assistant Sync avant d'exécuter un transfert complet.

Savoir exactement avec combien de données vous travaillez transforme les suppositions en un plan, et Get Size fait de cette vérification une habitude en deux clics plutôt qu'un futur ticket de support.

---

**Guides associés :**

- [Job History et journaux de transfert — Surveillez chaque synchronisation dans RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Aperçu Dry Run — Simulez la synchronisation cloud avant de vous engager dans RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Trouver et supprimer les fichiers en double dans le stockage cloud avec RcloneView](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
