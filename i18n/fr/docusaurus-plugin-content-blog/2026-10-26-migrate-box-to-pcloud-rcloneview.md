---
slug: migrate-box-to-pcloud-rcloneview
title: "Migrer Box vers pCloud — Transférez vos fichiers avec RcloneView"
authors:
  - jay
description: "Migrez Box vers pCloud avec RcloneView : connectez les deux remotes, lancez un Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer Box vers pCloud
  - transfert de Box vers pCloud
  - déplacer des fichiers Box vers pCloud
  - migration Box pCloud
  - RcloneView de cloud à cloud
  - synchronisation de Box vers pCloud
  - rclone GUI
  - outil de migration cloud
  - vérifier un transfert cloud
  - stockage alternatif à Box
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Box vers pCloud — Transférez vos fichiers avec RcloneView

> Déplacez vos dossiers Box vers pCloud en un seul passage maîtrisé, avec un aperçu avant toute copie et une comparaison ensuite.

Les équipes qui ont dépassé leur espace de travail Box, ou les indépendants qui souhaitent garder la maîtrise de leur stockage personnel, se heurtent à la même corvée : des milliers de fichiers dans des dossiers de projet imbriqués qui doivent arriver intacts dans un nouveau compte. Télécharger puis renvoyer les fichiers via un navigateur est lent et fragile. RcloneView connecte Box et pCloud côte à côte et transfère directement de l'un à l'autre, sans rien mettre en attente sur votre disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et pCloud comme remotes

Les deux services utilisent la connexion OAuth via le navigateur dans RcloneView. Ouvrez **Remote > New Remote**, choisissez Box et autorisez l'accès dans la fenêtre du navigateur qui s'ouvre. Répétez l'opération pour pCloud. Si vos fichiers se trouvent dans un compte Box Business, le paramètre de sous-type entreprise (`box_sub_type = enterprise`) est nécessaire ; les comptes personnels n'en ont pas besoin.

RcloneView peut monter et synchroniser plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux ; les deux remotes apparaissent donc comme des onglets dans le même Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de Box et pCloud comme nouveaux remotes dans RcloneView" class="img-large img-center" />

## Parcourir les deux côtés avant de copier

Ouvrez Box dans un panneau Explorer et pCloud dans l'autre. Utilisez le Folder Tree et Get Size pour estimer le volume de données à déplacer, puis décidez de migrer l'ensemble ou seulement une partie. Glisser des éléments entre deux remotes différents effectue une **copie**, ce qui laisse vos originaux Box intacts jusqu'à ce que vous soyez prêt à les retirer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box et pCloud ouverts côte à côte pour un transfert de cloud à cloud" class="img-large img-center" />

## Créer un job Copy avec Dry Run

Au-delà de quelques fichiers, créez un job plutôt que de glisser-déposer. Dans l'assistant Sync, définissez Box comme source et un dossier pCloud comme destination, puis choisissez le type de job **Copy** afin que rien ne soit supprimé à destination. Dans les paramètres avancés, activez la comparaison par somme de contrôle et gardez un faible nombre d'equality checkers si Box commence à limiter le débit. Dans le filtrage, utilisez Max file size ou des règles d'exclusion comme `.git/` pour ignorer les fichiers inutiles.

Lancez d'abord un **Dry Run**. Il liste les fichiers qui seraient copiés et supprimés, ce qui permet de repérer un mauvais choix de dossier avant tout déplacement de données. Le filtre prédéfini **Box Docs** peut exclure les documents natifs du cloud de Box si vous ne souhaitez pas les inclure dans la copie.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'un job Copy de Box vers pCloud dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Une fois le job terminé, ouvrez **Compare** avec Box à gauche et pCloud à droite. Filtrez les fichiers présents uniquement à gauche et les fichiers différents ; tout ce qui reste listé nécessite un nouveau passage. Job History enregistre l'état, la taille, la vitesse et le nombre de fichiers de chaque exécution, ce qui constitue une preuve utile que la migration est terminée.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare montrant les différences entre Box et pCloud" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Box et pCloud via **Remote > New Remote** et connectez-vous avec OAuth.
3. Créez un job Copy de Box vers pCloud et lancez un Dry Run.
4. Exécutez le job, puis confirmez le résultat avec Folder Compare avant de nettoyer Box.

Une migration par étapes, qui copie d'abord puis vérifie, garde vos données Box en sécurité tant que pCloud ne contient pas tout ce dont vous avez besoin.

---

**Guides associés :**

- [Migrer Box vers Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [Migrer Box vers Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Gérer le stockage pCloud](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
