---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "Migrer Wasabi vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Migrez Wasabi vers OneDrive avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, copiez les données du bucket de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer Wasabi vers OneDrive
  - transfert Wasabi vers OneDrive
  - déplacer un bucket Wasabi vers OneDrive
  - RcloneView Wasabi
  - RcloneView OneDrive
  - migration de cloud à cloud
  - synchronisation Wasabi OneDrive
  - S3 vers OneDrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Wasabi vers OneDrive — Transférer des fichiers avec RcloneView

> Déplacez les données d’un bucket Wasabi vers OneDrive grâce à une copie de cloud à cloud prévisualisable et vérifiable, plutôt qu’un détour par le téléchargement et le rechargement.

Les équipes qui ont stocké leurs archives de projets dans Wasabi ont parfois besoin de ces données dans OneDrive, où leurs collègues travaillent déjà dans Microsoft 365. Le stockage objet et un service de synchronisation de fichiers se comportent différemment : une copie à l’aveugle peut donc réserver des surprises. RcloneView connecte les deux services côte à côte, prévisualise le job avec Dry Run et vérifie le résultat ensuite. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture sous la licence FREE, en plus de plus de 90 autres fournisseurs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Wasabi et OneDrive

Wasabi est accessible via le protocole S3 de rclone ; vous saisissez donc une Access Key, une Secret Key et le point de terminaison de votre région Wasabi. OneDrive utilise l’OAuth via le navigateur : RcloneView ouvre une page de connexion Microsoft, vous approuvez l’accès et le remote se connecte sans aucune clé à copier.

Ouvrez les deux remotes dans deux panneaux Explorer. Parcourez le bucket et l’arborescence OneDrive afin de savoir où se trouvent les données et où elles doivent arriver.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Wasabi et OneDrive dans RcloneView" class="img-large img-center" />

## Planifier la copie

Imaginez un studio de design avec plusieurs buckets de dossiers de projets terminés. Plutôt que de tout déplacer d’un coup, copiez un bucket ou un préfixe par job. Les jobs courts sont plus faciles à relancer et à vérifier.

Choisissez Copy plutôt que Sync si OneDrive contient déjà des fichiers à conserver, car une synchronisation à sens unique fait correspondre la destination à la source. L’étape de filtrage permet de limiter la taille ou l’ancienneté des fichiers et d’utiliser des groupes prédéfinis tels que Document, Image ou Video. Examinez aussi les noms de fichiers au préalable : les clés d’objet peuvent contenir des caractères ou des chemins très longs que OneDrive risque de refuser ; un Dry Run vaut donc bien la minute qu’il demande.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Wasabi et OneDrive avant la migration" class="img-large img-center" />

## Lancer le transfert

Pour une copie ponctuelle rapide, faites glisser un dossier du panneau Wasabi vers le panneau OneDrive. Le glisser-déposer entre des remotes différents copie au lieu de déplacer ; le bucket reste donc intact jusqu’à ce que vous soyez satisfait. Pour des exécutions répétables, enregistrez un job via l’assistant en quatre étapes : stockage, paramètres avancés, filtres et planification (la planification nécessite PLUS).

Surveillez l’onglet Transferring pour la vitesse, le nombre de fichiers et la progression. Si OneDrive ralentit lors d’une grosse exécution, réduisez le nombre de transferts de fichiers simultanés dans Advanced Settings. Les jobs de synchronisation relancent l’exécution entière en cas d’échec (par défaut : 3 fois).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Wasabi vers OneDrive" class="img-large img-center" />

## Vérifier et garder une trace

Une fois la copie terminée, ouvrez Folder Compare sur les deux racines. Les filtres affichent les fichiers présents uniquement à gauche, uniquement à droite, identiques et différents, et vous pouvez copier les éléments manquants en un clic. Job History enregistre l’heure de début, la durée, l’état et les fichiers transférés, ce qui sert aussi de journal de migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des jobs de la migration de Wasabi vers OneDrive" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote Wasabi (access key, secret key, point de terminaison de la région) et un remote OneDrive (connexion via le navigateur).
3. Lancez un Dry Run sur un préfixe, puis exécutez le job de copie.
4. Vérifiez avec Folder Compare et répétez l’opération pour les buckets restants.

Une migration par étapes et vérifiée garantit que chaque fichier est pris en compte avant de mettre le bucket hors service.

---

**Guides associés :**

- [Migrer OneDrive vers Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Gérer le stockage Wasabi](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run : prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
