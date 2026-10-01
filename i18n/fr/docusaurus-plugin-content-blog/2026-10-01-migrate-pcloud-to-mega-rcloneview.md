---
slug: migrate-pcloud-to-mega-rcloneview
title: "Migrer pCloud vers MEGA — Transférez vos fichiers avec RcloneView"
authors:
  - robin
description: "Migrez pCloud vers MEGA avec RcloneView : connectez les deux remotes, lancez un dry run, copiez de cloud à cloud et vérifiez avec Folder Compare. Guide pas à pas."
keywords:
  - migrer pCloud vers MEGA
  - transfert pCloud vers MEGA
  - déplacer des fichiers pCloud MEGA
  - migration de cloud à cloud
  - RcloneView pCloud
  - RcloneView MEGA
  - synchronisation pCloud MEGA
  - transférer des fichiers pCloud
  - migration avec l'interface rclone
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer pCloud vers MEGA — Transférez vos fichiers avec RcloneView

> Déplacez toute une bibliothèque pCloud vers MEGA avec un job de cloud à cloud prévisualisé et vérifiable, plutôt qu'un téléchargement suivi d'un nouvel envoi manuel.

Passer de pCloud à MEGA implique souvent une grosse archive que personne ne veut d'abord télécharger sur un ordinateur portable. RcloneView connecte les deux services comme remotes : vous pouvez copier dossier par dossier depuis une seule fenêtre et vérifier le résultat avant de fermer l'ancien compte.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connectez pCloud et MEGA comme remotes

pCloud utilise OAuth via le navigateur : RcloneView ouvre une page de connexion, vous autorisez l'accès, et le remote est créé sans clé d'API. MEGA utilise votre e-mail et votre mot de passe. Ouvrez **Remote > New Remote**, choisissez chaque fournisseur et donnez-leur des noms clairs, par exemple `pcloud-old` et `mega-new`.

Une fois les deux affichés dans le Remote Manager, ouvrez-les côte à côte dans deux panneaux Explorer. RcloneView permet de monter et de synchroniser plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux ; la même disposition convient donc à tout futur déménagement de données.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes pCloud et MEGA dans RcloneView" class="img-large img-center" />

## Copiez les fichiers de cloud à cloud

Faire glisser un dossier d'un remote vers un autre le copie, car les transferts entre remotes différents sont des copies et non des déplacements. Pour un petit dossier, cela suffit. Pour une bibliothèque complète, créez un job Copy ou Sync afin de pouvoir l'enregistrer, le relancer et l'examiner dans Job History.

Laissez la source intacte jusqu'à ce que vous ayez vérifié le résultat. Un job Copy laisse pCloud intact, ce qui permet de refaire la migration sans risque en cas d'interruption.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de pCloud vers MEGA dans RcloneView" class="img-large img-center" />

## Prévisualisez avec Dry Run et ajustez les transferts

Lancez d'abord un Dry Run. Il liste les fichiers qui seraient copiés ou supprimés sans rien modifier, ce qui permet de repérer un mauvais dossier de destination avant qu'il ne coûte des heures. À l'étape avancée, vous pouvez ajuster le nombre de transferts de fichiers simultanés et d'equality checkers. En cas d'erreurs, réduire ces valeurs est une première étape raisonnable.

Utilisez l'étape de filtrage pour ignorer les types de fichiers ou dossiers que vous ne souhaitez pas reprendre, comme d'anciens programmes d'installation ou des exports Google Docs.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'un job de migration dans RcloneView" class="img-large img-center" />

## Vérifiez avec Folder Compare

Après le transfert, ouvrez **Compare** avec pCloud à gauche et MEGA à droite. Filtrez sur les fichiers présents uniquement à gauche et sur les fichiers différents pour voir ce qui manque ou diffère, puis copiez le reste directement depuis la vue de comparaison. L'onglet Transferring et Job History enregistrent la taille et le statut de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre pCloud et MEGA" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud (OAuth) et MEGA (e-mail et mot de passe) via New Remote.
3. Créez un job Copy de pCloud vers MEGA et lancez un Dry Run.
4. Exécutez le job, puis vérifiez avec Folder Compare avant de fermer l'ancien compte.

Une copie prévisualisée et vérifiée transforme un changement de compte risqué en tâche de routine.

---

**Guides associés :**

- [Migrer pCloud vers Proton Drive](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [Migrer MEGA vers Dropbox](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [Corriger les erreurs de synchronisation de pCloud](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
