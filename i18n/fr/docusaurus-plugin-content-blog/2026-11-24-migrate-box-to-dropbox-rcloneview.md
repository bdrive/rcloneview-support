---
slug: migrate-box-to-dropbox-rcloneview
title: "Migrer de Box vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez de Box vers Dropbox avec RcloneView. Connectez les deux distants via OAuth, prévisualisez avec Dry Run, copiez les dossiers de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer Box vers Dropbox
  - migration de Box vers Dropbox
  - transférer des fichiers de Box vers Dropbox
  - transfert cloud à cloud Box Dropbox
  - déplacer des dossiers Box vers Dropbox
  - migration Dropbox for Business
  - RcloneView Box Dropbox
  - GUI rclone Box vers Dropbox
  - outil de migration cloud
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers Dropbox — Transférer des fichiers avec RcloneView

> Déplacez une arborescence Box vers Dropbox de cloud à cloud, prévisualisez le périmètre avant toute modification et confirmez le résultat côte à côte.

Les équipes passent de Box à Dropbox pour de nombreuses raisons : une fusion, une nouvelle exigence d'un client ou un service créatif qui travaille déjà dans Dropbox. Le plus difficile est de déplacer des années de dossiers partagés sans rien perdre en route. RcloneView se connecte aux deux services en tant que distants et exécute la copie via rclone, ce qui vous permet de planifier, lancer et vérifier la migration depuis une seule fenêtre, au lieu de tout télécharger d'abord sur un ordinateur portable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Dropbox en tant que distants

Les deux fournisseurs utilisent OAuth, il n'y a donc aucune clé d'API à copier. Ouvrez **Remote tab > New Remote**, choisissez Box et connectez-vous lorsque le navigateur s'ouvre. Répétez l'opération pour Dropbox. Si l'un des deux est un compte professionnel, définissez l'option correspondante lors de la configuration : `box_sub_type = enterprise` pour Box for Business et `dropbox_business = true` pour Dropbox for Business.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

Ouvrez Box dans le panneau Explorer de gauche et Dropbox dans celui de droite. Parcourir les deux côte à côte permet de vérifier, avant de créer une tâche, que vous voyez les dossiers attendus et que le dossier de destination existe. Faites un clic droit sur un dossier Box et choisissez **Get Size** pour estimer le volume de données à déplacer.

## Créer une tâche Copy et la prévisualiser

Pour une migration, une tâche **Copy** est le choix prudent : elle ajoute des fichiers dans Dropbox et ne supprime jamais rien à la destination. Créez-la depuis **Home tab > Sync** ou le Job Manager, choisissez le dossier Box comme source et un dossier Dropbox comme destination, puis donnez-lui un nom clair comme `box-marketing-to-dropbox`.

Dans Advanced Settings, laissez la somme de contrôle désactivée pour ce couple. Box et Dropbox utilisent des types de hachage différents, donc rclone compare plutôt les fichiers par taille et date de modification. Si Dropbox commence à limiter le débit des requêtes, réduisez le nombre de transferts de fichiers plutôt que de l'augmenter. À l'étape Filtering, le filtre prédéfini **Box Docs** vous permet de traiter séparément les documents natifs Box, et des règles personnalisées peuvent ignorer les dossiers que vous avez décidé d'abandonner.

Lancez d'abord un **Dry Run**. Il liste chaque fichier qui serait copié sans rien transférer — pratique lorsqu'une agence déplace 60 000 ressources clients et veut valider le périmètre avec les parties prenantes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## Exécuter, surveiller et garder une trace d'audit

Démarrez la tâche et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet **Transferring**. Découper une grande migration en une tâche par dossier de premier niveau évite qu'une seule erreur bloque tout le reste. Chaque exécution apparaît dans **Job History** avec son statut, sa taille totale et son nombre de fichiers, ce qui sert aussi de trace pour la personne qui valide la migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois les tâches terminées, ouvrez **Folder Compare** sur la source Box et la destination Dropbox. Filtrez sur les fichiers présents uniquement à gauche pour repérer ce qui n'est pas arrivé, puis utilisez Copy right pour combler les manques. Pendant une période de transition où certaines personnes enregistrent encore dans Box, relancez la même tâche Copy pour récupérer les nouveaux fichiers avant la bascule finale.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## Pour commencer

Contrairement aux outils qui se limitent au montage, RcloneView synchronise et compare aussi les dossiers — avec la FREE License.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Box et Dropbox comme distants via OAuth, en activant les options professionnelles si nécessaire.
3. Créez une tâche Copy de Box vers Dropbox et vérifiez-la avec Dry Run.
4. Lancez la tâche, puis confirmez le résultat dans Folder Compare et Job History.

Une migration prévisualisée et vérifiée permet à votre équipe de passer à Dropbox sans se demander quel dossier a été oublié.

---

**Guides associés :**

- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gérer le stockage Dropbox — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Synchroniser Dropbox vers Box avec RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
