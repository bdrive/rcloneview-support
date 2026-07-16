---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "Lister et analyser les fichiers distants avec RcloneView Explorer"
authors:
  - tayson
description: "Utilisez RcloneView Explorer pour lister, trier et analyser visuellement les fichiers distants sur le cloud. Remplacez les commandes rclone lsf et lsjson par une interface graphique intuitive de gestion de fichiers."
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - remote file listing
  - cloud storage analysis
  - file size analysis
  - cloud file management
  - storage usage
  - directory comparison
  - cloud file explorer
tags:
  - feature
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Lister et analyser les fichiers distants avec RcloneView Explorer

> Comprendre ce qui est stocké sur vos comptes cloud est la première étape pour les gérer efficacement. **RcloneView** Explorer offre une expérience de listage de fichiers visuelle qui remplace les commandes CLI complexes par une navigation, un tri et une analyse intuitifs.

Le CLI rclone propose de puissantes commandes de listage de fichiers comme `lsf` et `lsjson`, qui affichent les détails des fichiers dans différents formats. Ces commandes sont utiles pour l'écriture de scripts, mais elles ne sont pas idéales pour l'exploration quotidienne des fichiers. Parcourir des milliers de lignes de sortie terminal pour trouver un fichier précis ou identifier les gros consommateurs d'espace est fastidieux et propice aux erreurs.

L'Explorer de RcloneView transforme cette expérience en quelque chose de visuel et d'interactif. Vous obtenez les mêmes données sous-jacentes, mais présentées dans une interface de gestionnaire de fichiers familière, avec tri, filtrage et affichage multi-colonnes. Vous pouvez voir la taille des fichiers, les dates de modification et les types en un coup d'œil, et explorer les structures de répertoires en un seul clic.

Pour les utilisateurs qui ont encore besoin de la sortie brute du CLI, le terminal intégré de RcloneView met les commandes `rclone lsf` et `lsjson` à portée de main, offrant le meilleur des deux mondes dans une seule application.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Listage visuel des fichiers dans l'Explorer

Le panneau Explorer de RcloneView affiche le contenu de tout distant configuré dans une disposition standard de gestionnaire de fichiers. Lorsque vous sélectionnez un distant et naviguez vers un répertoire, vous voyez :

- **Les noms de fichiers et de dossiers** avec des icônes reconnaissables pour les types de fichiers courants.
- **Les tailles de fichiers** affichées dans un format lisible (Ko, Mo, Go).
- **Les dates de modification** indiquant la dernière mise à jour de chaque fichier.
- **Le nombre de fichiers** pour les répertoires, afin de voir combien d'éléments contient chaque dossier.

C'est l'équivalent visuel de l'exécution de `rclone lsf --format "pst" remote:path`, mais avec la possibilité d'interagir directement avec chaque élément. Cliquez sur un dossier pour l'ouvrir. Faites un clic droit sur un fichier pour des actions comme copier, déplacer ou supprimer. Sélectionnez plusieurs fichiers pour des opérations groupées.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Trier par taille, date et nom

L'une des raisons les plus courantes de lister les fichiers distants est de trouver des éléments spécifiques ou d'identifier des tendances. Le tri par colonne de l'Explorer de RcloneView rend cela trivial :

- **Trier par taille** pour trouver rapidement les fichiers les plus volumineux consommant votre quota de stockage. Cela est particulièrement utile pour les fournisseurs cloud avec des limites de stockage, où quelques fichiers volumineux peuvent représenter l'essentiel de votre utilisation.
- **Trier par date** pour identifier les fichiers récemment modifiés, trouver du contenu obsolète qui n'a pas été touché depuis des mois, ou vérifier qu'une opération de synchronisation récente a bien mis à jour les fichiers attendus.
- **Trier par nom** pour une navigation alphabétique lorsque vous savez approximativement ce que vous cherchez.

Cliquez sur l'en-tête de n'importe quelle colonne pour trier selon celle-ci. Cliquez à nouveau pour inverser l'ordre de tri. Cette interaction simple remplace le fait de rediriger la sortie de `rclone lsf` vers des commandes `sort` en ligne de commande.

## Trouver les fichiers volumineux et analyser l'utilisation du stockage

Les coûts de stockage s'accumulent, et savoir où va votre espace est essentiel pour la maîtrise des coûts. RcloneView vous aide à analyser l'utilisation du stockage sans exécuter de scripts d'audit séparés :

1. Naviguez vers la racine d'un distant dans l'Explorer.
2. Triez par taille en ordre décroissant pour faire apparaître immédiatement les fichiers les plus volumineux.
3. Explorez les grands répertoires pour voir quels sous-répertoires contribuent le plus à l'utilisation totale.

Ce flux de travail remplace le schéma CLI courant consistant à exécuter `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` et à essayer d'analyser visuellement la sortie JSON. Dans l'Explorer, la même information est présentée dans une interface triable et cliquable.

Pour une analyse plus approfondie, vous pouvez utiliser le terminal intégré de RcloneView pour exécuter `rclone ncdu remote:`, qui fournit une répartition interactive de l'utilisation du stockage directement dans l'application.

## Comparer des arborescences de répertoires

La disposition à deux volets de l'Explorer de RcloneView est conçue pour comparer le contenu de répertoires entre distants. Chargez un distant à gauche et un autre à droite, puis comparez visuellement leurs structures :

- Identifiez les fichiers présents sur un distant mais pas sur l'autre.
- Repérez les différences de taille de fichiers qui pourraient indiquer des transferts incomplets.
- Vérifiez qu'une opération de synchronisation a produit les résultats attendus.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

La fonctionnalité de comparaison intégrée va plus loin, en mettant automatiquement en évidence les différences entre deux répertoires. C'est l'équivalent visuel de l'exécution de `rclone check source: dest:`, mais avec un affichage interactif qui vous permet d'agir immédiatement sur les différences.

## Utiliser le terminal intégré pour des requêtes avancées

Pour des besoins de listage de fichiers avancés qui dépassent ce que propose l'Explorer visuel, RcloneView inclut un terminal intégré. Cela vous donne un accès direct à toutes les commandes du CLI rclone, notamment :

**`rclone lsf`** pour des listages formatés simples :
```
rclone lsf remote:documents --format "pst" --recursive
```
Cela liste tous les fichiers avec leur chemin, taille et horodatage dans un format plat adapté à la redirection ou à l'enregistrement.

**`rclone lsjson`** pour des données structurées :
```
rclone lsjson remote:documents --recursive --no-modtime
```
Cela produit les métadonnées des fichiers au format JSON, utile pour une analyse programmatique ou pour alimenter d'autres outils.

**`rclone size`** pour des résumés de stockage :
```
rclone size remote:
```
Cela fournit un total rapide des fichiers et des octets stockés sur un distant.

Le terminal s'exécute au sein de RcloneView, vous n'avez donc pas besoin d'ouvrir une console séparée ni de configurer les chemins de rclone. Vos configurations de distants existantes sont déjà disponibles.

## Parcourir plusieurs distants simultanément

L'Explorer de RcloneView permet d'ouvrir plusieurs distants en même temps. Cela est particulièrement utile pour les utilisateurs qui gèrent des fichiers sur plusieurs fournisseurs cloud :

- Ouvrez Google Drive dans un volet et OneDrive dans l'autre pour comparer les structures de dossiers.
- Parcourez un bucket S3 tout en consultant le répertoire local correspondant.
- Vérifiez les fichiers sur Backblaze B2 et Wasabi côte à côte pour valider une sauvegarde entre fournisseurs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Chaque volet fonctionne indépendamment, vous pouvez donc naviguer, trier et parcourir à votre rythme sans affecter l'autre volet. Lorsque vous trouvez des fichiers à déplacer entre distants, il suffit de les glisser-déposer.

## Flux de travail pratiques d'analyse de fichiers

Voici quelques tâches courantes d'analyse de fichiers et comment les accomplir avec RcloneView :

**Auditer le stockage cloud avant une migration :**
Parcourez le distant source, triez par date pour identifier les fichiers actifs par rapport aux fichiers obsolètes, et décidez ce qu'il faut migrer par rapport à ce qu'il faut archiver ou supprimer. Cette étape de préparation peut réduire considérablement le temps et le coût de la migration.

**Vérifier l'exhaustivité d'une sauvegarde :**
Ouvrez le distant source et le distant de sauvegarde côte à côte, naviguez vers le même répertoire sur chacun, et utilisez la fonctionnalité de comparaison pour confirmer que tous les fichiers ont été copiés correctement.

**Trouver des fichiers en double ou obsolètes :**
Triez par nom pour repérer les fichiers aux noms similaires, ou triez par date pour trouver les fichiers qui n'ont pas été modifiés depuis des années. Supprimez les fichiers inutiles pour libérer du quota de stockage et réduire les coûts.

**Générer un inventaire de fichiers :**
Utilisez le terminal intégré pour exécuter `rclone lsjson --recursive remote:` et enregistrer la sortie à des fins de documentation, de conformité ou d'audit.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos distants de stockage cloud dans le Gestionnaire de distants.
3. Ouvrez l'Explorer et parcourez n'importe quel distant pour voir les fichiers avec leurs tailles, dates et types.
4. Utilisez le tri, la comparaison et le terminal intégré pour une analyse plus approfondie.

Que vous ayez besoin d'un rapide aperçu visuel ou d'un inventaire de fichiers détaillé, l'Explorer de RcloneView met toutes les informations à portée de main sans avoir à mémoriser la syntaxe du CLI.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Suivi des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
