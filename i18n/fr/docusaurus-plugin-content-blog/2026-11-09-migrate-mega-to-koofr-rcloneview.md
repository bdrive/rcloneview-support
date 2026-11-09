---
slug: migrate-mega-to-koofr-rcloneview
title: "Migrer de MEGA vers Koofr — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Migrez de MEGA vers Koofr avec RcloneView : connectez les deux remotes, prévisualisez avec un Dry Run, copiez de cloud à cloud et vérifiez les résultats avec Folder Compare."
keywords:
  - migrer de MEGA vers Koofr
  - transfert MEGA vers Koofr
  - migration MEGA Koofr
  - déplacer des fichiers de MEGA vers Koofr
  - RcloneView MEGA
  - RcloneView Koofr
  - transfert de cloud à cloud
  - alternative à MEGA stockage européen
tags:
  - RcloneView
  - mega
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de MEGA vers Koofr — Transférer des fichiers avec RcloneView

> Déplacez les fichiers d'un compte MEGA vers Koofr grâce à un job de cloud à cloud prévisualisé et vérifiable, plutôt qu'un téléchargement suivi d'un nouvel envoi manuel.

Sortir des années de fichiers de MEGA implique généralement de les télécharger sur un ordinateur portable puis de les renvoyer, ce qui double le travail et échoue au moindre accroc réseau. RcloneView vous permet de connecter MEGA et Koofr côte à côte et d'exécuter le transfert comme un seul job. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Ouvrez l'onglet Remote et cliquez sur New Remote. MEGA utilise la saisie d'identifiants : entrez l'adresse e-mail et le mot de passe de votre compte. Koofr s'ajoute de la même façon depuis la liste des fournisseurs. Une fois les deux affichés dans Remote Manager, ouvrez-les dans deux panneaux Explorer pour voir la source et la destination ensemble.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes MEGA et Koofr dans RcloneView" class="img-large img-center" />

Parcourez d'abord l'arborescence MEGA. Décidez si vous déplacez tout ou seulement certains dossiers, car un périmètre plus étroit rend la première exécution rapide et facile à vérifier.

## Prévisualiser, puis transférer

Vous pouvez faire glisser des dossiers du panneau MEGA vers le panneau Koofr ; le glisser-déposer entre remotes différents effectue une copie, de sorte que les fichiers MEGA d'origine restent intacts. Pour un déplacement plus important, créez plutôt un job Sync ou Copy. Lancez d'abord un Dry Run : il liste les fichiers qui seraient copiés, ce qui vous permet de repérer un mauvais chemin de destination avant que quoi que ce soit ne soit écrit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de MEGA vers Koofr" class="img-large img-center" />

Dans les Advanced Settings du job, vous pouvez régler le nombre de transferts de fichiers simultanés. Si l'un des services ralentit ou renvoie des erreurs, réduisez le nombre d'equality checkers et de transferts, et laissez le paramètre de nouvelles tentatives gérer les échecs transitoires.

## Surveiller et vérifier

Suivez la progression dans l'onglet Transferring, qui affiche la vitesse, le nombre de fichiers et la taille. Une fois le job terminé, ouvrez Job History pour confirmer l'état et le total transféré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History affichant un transfert MEGA vers Koofr terminé" class="img-large img-center" />

Enfin, utilisez Folder Compare avec MEGA à gauche et Koofr à droite. Filtrez les fichiers présents uniquement à gauche et les fichiers différents pour trouver ce qui n'est pas arrivé, puis copiez-les directement depuis la vue de comparaison.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre MEGA et Koofr" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos remotes MEGA et Koofr depuis l'onglet Remote.
3. Créez un job Copy ou Sync et lancez un Dry Run pour le prévisualiser.
4. Exécutez le job, puis vérifiez le résultat avec Folder Compare avant de retirer quoi que ce soit sur MEGA.

Conservez la copie MEGA jusqu'à ce que la comparaison soit propre, afin que les données d'origine restent disponibles pendant la vérification.

---

**Guides connexes :**

- [Migrer de Koofr vers MEGA](https://rcloneview.com/support/blog/migrate-koofr-to-mega-rcloneview)
- [Migrer de MEGA vers pCloud](https://rcloneview.com/support/blog/migrate-mega-to-pcloud-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud de Koofr](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
