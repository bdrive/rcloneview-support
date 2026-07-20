---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "Distants virtuels RcloneView : Combine, Union et Alias pour créer un espace de travail multi-cloud unifié"
authors:
  - tayson
description: "Utilisez les distants virtuels de RcloneView pour unifier vos dossiers multi-cloud sans copier les données. Découvrez quand choisir Alias, Combine ou Union et comment créer des workflows plus clairs."
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - RcloneView
  - cloud-storage
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# Distants virtuels RcloneView : Combine, Union et Alias pour créer un espace de travail multi-cloud unifié

> La dispersion des données sur plusieurs clouds complique la recherche de dossiers. Les distants virtuels de RcloneView vous permettent d'unifier vos vues sans déplacer ni dupliquer le moindre fichier.

Les distants virtuels sont l'un des moyens les plus rapides de simplifier votre workflow multi-cloud. Au lieu de passer d'un onglet à l'autre ou de reconfigurer des tâches, vous pouvez créer une vue virtuelle qui pointe vers des distants et des dossiers existants. Vos données d'origine restent exactement là où elles sont, mais votre espace de travail devient plus facile à parcourir et à automatiser.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les distants virtuels sont importants

- Arrêtez de fouiller dans des chemins profonds à chaque tâche ou comparaison de dossiers.
- Présentez plusieurs clouds comme un seul espace de travail, sans copier de données.
- Gardez une organisation cohérente dans Explorer, Compare, Sync et Jobs.

## Que sont les distants virtuels dans RcloneView ?

Les distants virtuels se superposent aux distants et dossiers existants. Ils ne stockent pas de données eux-mêmes. Ils pointent plutôt vers des emplacements que vous possédez déjà et les présentent sous la forme d'une vue nouvelle et plus claire.

Créez-les depuis **New Remote → Virtual** :

- **Alias** : un raccourci vers un dossier profond.
- **Combine** : une vue unique qui liste plusieurs dossiers côte à côte.
- **Union** : une vue unique fusionnée qui mélange plusieurs dossiers ensemble.

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Distant Alias : accès instantané aux dossiers profonds

**Idéal pour** : les dossiers que vous ouvrez tous les jours.

Alias est un signet. Il ouvre instantanément un dossier spécifique, ce qui est parfait pour les tâches récurrentes ou les chemins partagés par une équipe.

Exemple : créez un signet vers un dossier d'équipe partagé comme `Drive:Team/Projects/Client-A` et ouvrez-le sous le nom `Alias_ClientA`.

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

Guide : [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Distant Combine : une vue, plusieurs dossiers

**Idéal pour** : les tableaux de bord et les collections de projets.

Combine affiche des dossiers côte à côte dans un seul distant. Chaque dossier conserve sa structure d'origine, mais vous les parcourez tous depuis un seul endroit.

Exemple : créez un distant Combine `Marketing_Assets` qui contient :

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

Guide : [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Distant Union : un dossier fusionné à travers les clouds

**Idéal pour** : les archives regroupées ou l'ingestion multi-sources.

Union fusionne plusieurs dossiers en une seule vue mélangée. C'est idéal lorsque vous voulez que tout ressemble à un seul dossier, même si les fichiers résident sur des clouds différents.

Exemple : combinez les images brutes mensuelles de deux distants en une seule vue `Raw_Footage`.

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

Guide : [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## Guide de décision rapide : Alias vs Combine vs Union

| Besoin | Choisir | Pourquoi |
| --- | --- | --- |
| Accéder rapidement à un dossier profond | **Alias** | Raccourci unique vers un chemin spécifique |
| Voir plusieurs dossiers côte à côte | **Combine** | Préserve une structure de dossiers distincte |
| Traiter plusieurs dossiers comme un seul | **Union** | Vue fusionnée pour des données regroupées |

## Workflows pratiques avec les distants virtuels

- **Comparer avant de synchroniser** : exécutez Compare sur une vue Combine ou Union pour repérer les différences en premier.  
  Guide : [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **Synchroniser plusieurs sources** : synchronisez un distant Union vers une destination de sauvegarde pour refléter une archive mélangée.  
  Guide : [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **Enregistrer les tâches une fois pour toutes** : utilisez Job Manager pour planifier une synchronisation de distant virtuel et la laisser s'exécuter automatiquement.  
  Guide : [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **Montages optionnels** : montez un distant virtuel et parcourez-le comme un lecteur local.  
  Guide : [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## Bonnes pratiques et conventions de nommage

- Utilisez des préfixes clairs : `Alias_ProjectX`, `Combine_Marketing`, `Union_Archive`.
- Conservez les notes sur les sources dans les noms de tâches ou les descriptions du Job Manager.
- Évitez de mélanger des dossiers sans rapport dans un même Union pour réduire la confusion.
- Utilisez Combine lorsque vous voulez de la clarté, Union lorsque vous voulez de la simplicité.

## Conclusion

Les distants virtuels réduisent les frictions dans les workflows multi-cloud. Alias, Combine et Union vous permettent de créer un espace de travail clair sans copier de données, afin que les équipes puissent avancer plus vite tout en préservant leur structure. Essayez-en un dès aujourd'hui et découvrez à quel point votre navigation quotidienne devient plus simple.
