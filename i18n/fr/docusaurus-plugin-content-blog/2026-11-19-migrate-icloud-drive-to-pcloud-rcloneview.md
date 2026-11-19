---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrer iCloud Drive vers pCloud — Transférez vos fichiers avec RcloneView"
authors:
  - jay
description: "Déplacez vos fichiers d'iCloud Drive vers pCloud avec RcloneView. Connectez les deux clouds, prévisualisez la copie avec Dry Run, transférez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer iCloud Drive vers pCloud
  - transfert iCloud Drive vers pCloud
  - déplacer des fichiers depuis iCloud Drive
  - outil de migration iCloud Drive
  - migration pCloud
  - transfert de cloud à cloud
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer iCloud Drive vers pCloud — Transférez vos fichiers avec RcloneView

> Déplacez vos dossiers iCloud Drive vers pCloud avec une tâche de copie que vous pouvez prévisualiser, suivre et vérifier, sans tout stocker d'abord sur un disque local.

On quitte iCloud Drive pour pCloud pour des raisons pratiques : un foyer qui mélange des machines Windows, Linux et Mac, ou un indépendant qui veut un seul compte de stockage fonctionnant de la même façon sur tous ses ordinateurs. iCloud Drive ne propose pas d'export intégré vers un autre service cloud, si bien que la plupart des migrations se résument à « tout télécharger sur un Mac, puis tout renvoyer ». RcloneView se connecte aux deux services à la fois et copie les fichiers entre eux via rclone, de sorte que le transfert se fait de cloud à cloud depuis une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter iCloud Drive et pCloud comme distants

La prise en charge d'iCloud Drive nécessite rclone v1.69 ou une version ultérieure. RcloneView est livré avec un binaire rclone intégré qui remplit cette condition : il n'y a donc rien de plus à installer. Ouvrez l'onglet Remote, cliquez sur **New Remote**, choisissez iCloud Drive et saisissez les identifiants de votre compte Apple. Ajoutez ensuite pCloud. La connexion se fait via une authentification OAuth dans le navigateur, vous n'avez donc aucune clé API à générer.

Une fois les deux distants connectés, ouvrez deux panneaux Explorer côte à côte. Faites un clic droit sur un dossier de premier niveau d'iCloud Drive et choisissez **Get Size** pour voir la quantité de données à déplacer. Ce chiffre vous indique si votre forfait pCloud a assez de place avant même que le premier fichier soit copié.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## Créer une tâche de copie et la prévisualiser avec Dry Run

Pour une migration, une tâche **Copy** est le choix prudent : elle ajoute des fichiers à pCloud et n'y supprime jamais rien. Choisissez **Sync** uniquement si pCloud doit refléter exactement iCloud Drive, suppressions comprises.

Dans Job Manager, créez la tâche avec un dossier iCloud Drive comme source et un dossier pCloud comme destination. Dans Step 2, laissez le réglage de nouvelles tentatives à sa valeur par défaut de 3 pour qu'une coupure de connexion n'interrompe pas l'exécution. Step 3 vous permet d'écarter les données dont vous n'avez plus besoin. Des filtres personnalisés peuvent exclure les images `.iso` ou les dossiers `.git/`, et un âge maximal de fichier laisse de côté les vieux fichiers encombrants.

Lancez un **Dry Run** avant le vrai transfert. Prenez une graphiste qui déplace 300 Go de projets clients : le Dry Run liste chaque fichier qui serait copié, ce qui lui permet de confirmer l'arborescence avant de consacrer des heures au transfert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## Lancer le transfert et suivre la progression

Démarrez la tâche et surveillez l'onglet Transferring, qui affiche la progression, la vitesse et le nombre de fichiers. Pour une grande bibliothèque, créez une tâche par dossier de premier niveau (Documents, Desktop, dossiers de projets). Si un lot échoue, vous ne relancez que ce lot. Chaque exécution est consignée dans Job History avec son statut, sa taille totale et son nombre de fichiers, ce qui vous laisse une trace de ce qui a été déplacé et quand.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Vérifier le résultat avec Folder Compare

Cliquez sur **Compare** et ouvrez le dossier iCloud Drive à gauche et le dossier pCloud à droite. Filtrez les fichiers présents uniquement à gauche et les fichiers différents pour repérer ce qui a été ignoré, puis utilisez **Copy right** pour envoyer les fichiers manquants. Une fois les deux côtés affichés comme identiques, vous pouvez abandonner l'ancien stockage en toute confiance.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## Pour commencer

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez iCloud Drive (le rclone v1.69+ intégré est inclus) et pCloud via sa connexion OAuth.
3. Créez une tâche Copy d'iCloud Drive vers pCloud et vérifiez-la avec Dry Run.
4. Lancez la tâche, puis confirmez le résultat avec Folder Compare avant de réduire votre forfait iCloud.

Une migration vérifiée dossier par dossier amène vos fichiers dans pCloud sans qu'aucun dossier ne manque à l'appel.

---

**Guides associés :**

- [Gérer le stockage iCloud Drive — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Gérer le stockage pCloud — Synchronisez et sauvegardez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrer iCloud Drive vers Dropbox — Transférez vos fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
