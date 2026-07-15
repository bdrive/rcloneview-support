---
sidebar_position: 4
description: "Découvrez comment comparer des dossiers locaux et distants, filtrer les résultats, et copier ou supprimer des fichiers directement grâce à la fonctionnalité avancée de comparaison de RcloneView."
keywords:
  - rcloneview
  - rclone
  - comparaison de dossiers
  - copie de dossier
  - différences de fichiers
  - synchronisation cloud
  - gestion de fichiers
  - transfert de fichiers
  - explorateur de fichiers
  - gestion du stockage distant
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comparer le contenu des dossiers

RcloneView vous aide à identifier les différences entre deux dossiers — que ce soit sur le disque local ou entre distants cloud — et à copier ou gérer les fichiers efficacement grâce à sa fonctionnalité intégrée de comparaison.

## Sélectionner les dossiers à comparer

Pour commencer à comparer des dossiers :
- Ouvrez deux onglets dans le panneau Explorateur.
- Sélectionnez les dossiers que vous souhaitez comparer depuis l'arborescence des dossiers, ou saisissez manuellement le chemin complet à l'aide de la barre de chemin.
- Cliquez sur le bouton **`Compare`** dans le menu **`Home`** en haut pour lancer la comparaison.

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
Une fois la comparaison terminée, une fenêtre récapitulative apparaît.
Pour désactiver ce message à l'avenir, cochez **« Don't show this message again »**.
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
Pour plus de détails sur la disposition de l'écran de comparaison de dossiers et la signification de chaque icône, veuillez consulter le guide de la comparaison de dossiers.

## Résultats de la comparaison et gestion des fichiers

La comparaison de dossiers vous permet de comparer directement les fichiers et de les sélectionner pour les gérer.

Cependant, si vous devez synchroniser de grands dossiers ou gérer plusieurs dossiers distants efficacement, l'utilisation de **`Sync`** est une méthode plus pratique.

### Affichage par type de résultat sélectionné

Vous pouvez filtrer les résultats de la comparaison pour n'afficher que les fichiers pertinents pour votre opération.  
Cela vous aide à vous concentrer sur ce qui doit être copié ou vérifié.

Par exemple, si vous souhaitez copier des fichiers du dossier distant de gauche vers celui de droite :

- Cliquez sur l'icône **`Show left-only files`** <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> pour afficher uniquement les fichiers présents dans le dossier de gauche mais absents à droite.
- Cliquez sur l'icône **`Show different files`** <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" /> pour afficher les fichiers présents dans les deux dossiers mais dont la taille diffère.
- Ainsi, vous pouvez vous concentrer uniquement sur les fichiers cibles à copier vers la droite, sans être distrait par les fichiers déjà synchronisés.

> ✅ Cela facilite grandement la sélection et la copie des seuls fichiers nécessaires dans une direction.
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>Plus de détails sur les icônes</summary>

#### Comprendre les icônes dans la fenêtre de comparaison
<Tabs>
<TabItem value="Display Icons" label="Icônes d'affichage">
Lorsque vous cliquez sur chaque icône avec la souris, le comportement de filtrage suivant est appliqué.  
Cliquer à nouveau active ou désactive le filtre.

Lorsque plusieurs icônes sont sélectionnées, les fichiers correspondant à **l'une ou l'autre** des conditions sélectionnées sont affichés (logique **OR**).

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Affiche uniquement les fichiers présents dans le dossier de gauche mais absents à droite.

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Affiche uniquement les fichiers présents dans le dossier de droite mais absents à gauche.

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" /> : Affiche uniquement les fichiers présents dans les deux dossiers et identiques.

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />  : Affiche les fichiers présents dans les deux dossiers mais dont la taille diffère.

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" /> : Affiche les erreurs ou conflits éventuels

</TabItem>

<TabItem value="Navigate Icons" label="Icônes de navigation">
Ces icônes sont utilisées dans la vue **Compare** pour se déplacer vers le haut ou le bas dans la hiérarchie des dossiers, selon la structure de liste de dossiers à plat actuelle.

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" /> : Naviguer vers le **dossier supérieur** dans la liste actuelle.

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" /> : Naviguer vers le **dossier inférieur** dans la liste actuelle.

</TabItem>

<TabItem value="Operation Icons" label="Icônes d'opération">
Ces icônes permettent d'effectuer des opérations sur les fichiers dans les dossiers — comme supprimer des fichiers ou les copier vers la gauche ou la droite.

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" /> : Copier les fichiers sélectionnés vers le dossier de droite.

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" /> : Copier les fichiers sélectionnés vers le dossier de gauche.

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> : Supprimer les fichiers sélectionnés d'un côté ou de l'autre.

</TabItem>

<TabItem value="Find Icons" label="Icônes de recherche">
Les icônes **Find** sont utilisées dans la **vue Compare** pour localiser les dossiers où les changements du nombre ou de la taille des fichiers sont les plus importants.

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" /> : Rechercher des dossiers en fonction du nombre de fichiers modifiés lors de la comparaison.

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" /> : Rechercher des dossiers en fonction de la taille totale des fichiers modifiés lors de la comparaison.

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" /> : Rechercher et se déplacer vers le dossier présentant le changement le plus important en nombre ou en taille de fichiers.

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" /> : Se déplacer vers le dossier suivant présentant une différence de nombre ou de taille de fichiers plus importante.

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" /> : Rechercher et se déplacer vers le dossier présentant le moins de changements.

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" /> : Se déplacer vers le dossier suivant présentant un changement de nombre ou de taille de fichiers plus faible.

</TabItem>

</Tabs>


</details>


### Copier des fichiers entre dossiers distants

#### Sélectionner les fichiers à copier

- Utilisez `Ctrl + Click` pour sélectionner des fichiers individuels
- Utilisez `Shift + Click` pour sélectionner une plage
- Ou utilisez simplement le glisser-déposer entre les panneaux

#### Effectuer l'opération de copie

Une fois les fichiers sélectionnés :
- Cliquez sur le bouton **`Copy →`** pour copier les fichiers sélectionnés de gauche à droite.
- Cliquez sur le bouton **`← Copy`** pour copier de droite à gauche.

💡 La copie ne s'effectue que si :
- Le fichier n'existe pas du côté cible
- Le fichier existe des deux côtés mais a une taille différente

Une fois la copie terminée :
- Les fichiers copiés seront marqués de l'icône **`equal`** <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" />dans la vue de comparaison
- La barre d'état en bas sera mise à jour avec les détails de fin d'opération
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important Somme de contrôle (bientôt disponible)
Par défaut, RcloneView compare les fichiers par nom et par taille.  
Cependant, cela peut ne pas suffire pour détecter des différences de contenu lorsque le nom et la taille des fichiers sont identiques.
✅ La comparaison par somme de contrôle permettra une vérification du contenu des fichiers au niveau des octets.  
Cette fonctionnalité est prévue pour une future mise à jour et permettra d'assurer une précision de synchronisation encore plus grande.
:::
#### Supprimer des fichiers

Vous pouvez également supprimer les fichiers sélectionnés depuis l'un ou l'autre des dossiers :
- Cliquez sur le bouton **`Delete`** à gauche pour supprimer des fichiers du dossier de gauche
- Cliquez sur le bouton **`Delete`** à droite pour supprimer des fichiers du dossier de droite

⚠️ La suppression est définitive. Vérifiez bien les fichiers sélectionnés avant de continuer.
 
## Utiliser des filtres pour affiner la comparaison

La fonctionnalité de filtre vous permet d'exécuter des comparaisons de dossiers plus efficacement en excluant certains fichiers ou dossiers du résultat.

 :::important Licence Plus requise
Le filtrage est disponible dans la version sous licence **Plus** de RcloneView.
:::

### Pourquoi utiliser des filtres ?

Vous pouvez souhaiter exclure certains dossiers ou types de fichiers qui ne sont pas pertinents pour votre tâche de comparaison.  
Avec l'outil de filtre, vous pouvez facilement définir quels fichiers ou dossiers doivent être ignorés lors de la comparaison.

### Comment exclure un dossier spécifique :

Par exemple, pour exclure tous les dossiers nommés `folder2` de la comparaison :
1. Cliquez sur l'icône **`Filter`** <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" /> dans l'écran de comparaison.
2. Dans le champ de saisie du filtre, tapez `folder2/` et cliquez sur **`Add`**.
3. Le dossier apparaîtra dans la catégorie **`Others`**.
4. Cochez la case à côté de `folder2/` et cliquez sur **`OK`** pour appliquer le filtre.
5. Relancez la comparaison.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 Le filtrage est particulièrement utile lorsque des dossiers comme `cache`, `temp`, ou des répertoires de configuration personnels n'existent qu'à titre de référence et n'ont pas besoin d'être comparés ou copiés.



<details>
<summary>Règles de filtre fréquemment utilisées</summary>

#### Exemples de filtres courants

**`.iso`** : Exclure tous les fichiers .iso

**`/.git/*`** : Exclure uniquement les fichiers à l'intérieur du dossier .git à la racine, pas les sous-dossiers

**`/.git/`** :  Exclure l'ensemble du dossier .git à la racine, y compris tout ce qu'il contient

**`.git/`** :Exclure tous les dossiers .git et tout ce qu'ils contiennent, quel que soit leur emplacement

</details>
