---
slug: sync-copy-move-difference-explained-rcloneview
title: "Synchronisation vs Copie vs Déplacement — Quelle opération de transfert cloud utiliser ?"
authors:
  - tayson
description: "Vous hésitez entre Synchronisation, Copie ou Déplacement pour vos transferts cloud ? Ce guide explique les différences et le bon choix pour chaque situation dans RcloneView."
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - RcloneView
  - sync
  - copy
  - move
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchronisation vs Copie vs Déplacement — Quelle opération de transfert cloud utiliser ?

> Vous souhaitez transférer des fichiers entre des clouds. RcloneView propose Synchronisation, Copie et Déplacement. Ces opérations semblent similaires, mais choisir la mauvaise peut supprimer des fichiers que vous ne vouliez pas perdre. Voici comment chacune fonctionne et quand l'utiliser.

C'est l'une des décisions les plus importantes en gestion de fichiers cloud. Chaque opération a un comportement différent concernant les fichiers présents à la destination mais absents de la source. Comprendre cela évite les pertes de données accidentelles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Les trois opérations

### Copie

**Ce qu'elle fait** : Copie les fichiers de la source vers la destination. Si un fichier existe déjà à la destination et est identique, il est ignoré. S'il existe mais est différent, il est écrasé.

**Ce qu'elle ne fait pas** : Supprimer quoi que ce soit à la destination. Jamais.

```
Source:      A, B, C
Destination: B, D
Après Copie: B, D, A, C  (D reste intact, A et C sont ajoutés)
```

### Synchronisation

**Ce qu'elle fait** : Rend la destination identique à la source. Copie les fichiers nouveaux et modifiés. **Supprime de la destination les fichiers absents de la source.**

```
Source:            A, B, C
Destination:       B, D
Après Synchronisation: A, B, C  (D est supprimé ! A et C sont ajoutés)
```

### Déplacement

**Ce qu'elle fait** : Comme la Copie, mais **supprime les fichiers de la source** une fois qu'ils ont été transférés avec succès.

```
Source:      A, B, C
Destination: B, D
Après Déplacement:
  Source : (vide)
  Destination : B, D, A, C
```

## Référence rapide

| Comportement | Copie | Synchronisation | Déplacement |
|----------|:----:|:----:|:----:|
| Ajoute de nouveaux fichiers à la destination | ✅ | ✅ | ✅ |
| Met à jour les fichiers modifiés | ✅ | ✅ | ✅ |
| Supprime à la destination | ❌ | ✅ | ❌ |
| Supprime à la source | ❌ | ❌ | ✅ |
| Adapté aux sauvegardes | ✅ | ⚠️ | ❌ |
| Crée un miroir exact | ❌ | ✅ | ❌ |

## Quand utiliser chaque opération

### Utilisez la Copie quand :

- **Vous faites une sauvegarde** — Vous voulez un filet de sécurité. La Copie ne supprime jamais rien à la destination, donc même si vous supprimez un fichier de la source, la sauvegarde le conserve.
- **Migration initiale** — Vous transférez des données vers un nouveau cloud pour la première fois.
- **Ajout de fichiers** — Vous voulez ajouter du nouveau contenu sans affecter les fichiers existants.
- **Vous n'êtes pas sûr** — La Copie est le choix par défaut le plus sûr. Elle ne peut pas faire perdre de données à la destination.

**Exemples :**
- Sauvegarde quotidienne : Google Drive → Backblaze B2.
- Migration initiale : OneDrive → Google Drive.
- Livraison client : copier les fichiers finalisés vers le Dropbox du client.

### Utilisez la Synchronisation quand :

- **Vous faites un mirroring** — La destination doit être une copie exacte de la source à tout moment.
- **Dossiers de travail actifs** — Vous voulez que la destination reflète tous les changements, y compris les suppressions.
- **Nettoyage du stockage** — Les fichiers supprimés de la source doivent aussi être supprimés du miroir.

**Exemples :**
- Maintenir un miroir de NAS sur S3 (réplique exacte).
- Synchroniser un dossier de projet entre deux membres d'une équipe.
- Garder un serveur de staging synchronisé avec un dossier d'assets de production.

**Avertissement** : La Synchronisation supprime des fichiers. Effectuez toujours un **dry run** au préalable pour prévisualiser ce qui sera supprimé.

### Utilisez le Déplacement quand :

- **Vous archivez** — Déplacez d'anciens fichiers vers un stockage économique et supprimez-les de la source coûteuse.
- **Pipeline de traitement** — Les fichiers arrivent dans une boîte de réception, sont traités, puis déplacés vers une archive.
- **Vous libérez de l'espace** — Déplacez des fichiers d'un disque plein vers du stockage cloud, en supprimant les copies locales.

**Exemples :**
- Déplacer les fichiers de plus de 90 jours de Google Drive vers S3 Glacier.
- Déplacer les uploads traités d'un bucket de staging vers un bucket d'archive.
- Déplacer des photos d'une sauvegarde de téléphone pleine vers une archive cloud.

## Le filet de sécurité du dry run

Avant de lancer une opération (surtout une Synchronisation), utilisez le **dry run** pour prévisualiser exactement ce qui va se passer :

- Quels fichiers seront copiés.
- Quels fichiers seront supprimés (Synchronisation uniquement).
- Quels fichiers seront déplacés (Déplacement uniquement).

Cette prévisualisation ne coûte rien et évite les surprises.

## Commencez par la Comparaison de dossiers

Avant tout transfert, utilisez la Comparaison de dossiers pour comprendre l'état actuel :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

Cela affiche :
- Les fichiers présents aux deux emplacements (et s'ils correspondent).
- Les fichiers uniques à la source.
- Les fichiers uniques à la destination.

## Erreurs courantes

### Utiliser la Synchronisation pour les sauvegardes

```
Jour 1 : Synchronisation Google Drive → S3  (tous les fichiers sauvegardés)
Jour 2 : Suppression accidentelle d'un dossier depuis Google Drive
Jour 3 : Synchronisation Google Drive → S3  (le dossier est aussi supprimé de S3 !)
```

Utilisez la **Copie** pour les sauvegardes afin d'éviter cela.

### Utiliser la Copie quand on veut un miroir

```
Jour 1 : Copie Source → Destination  (fichiers transférés)
Jour 2 : Suppression d'anciens fichiers depuis la Source
Jour 3 : Copie Source → Destination  (les anciens fichiers restent sur la Destination, occupant de l'espace)
```

Si vous voulez que la destination reste propre, utilisez la **Synchronisation**.

### Utiliser le Déplacement quand on veut conserver les deux copies

Le Déplacement supprime la source. Si vous avez besoin des fichiers aux deux emplacements, utilisez la **Copie**.

## Arbre de décision

1. **Avez-vous besoin des fichiers aux deux emplacements ?**
   - Oui → Copie ou Synchronisation.
   - Non (suppression de la source) → Déplacement.

2. **La destination doit-elle correspondre exactement à la source ?**
   - Oui (y compris les suppressions) → Synchronisation.
   - Non (juste ajouter de nouveaux fichiers) → Copie.

3. **S'agit-il d'une sauvegarde ?**
   - Oui → Presque toujours Copie.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Comparez les dossiers** pour comprendre l'état actuel.
3. **Choisissez la bonne opération** selon votre objectif.
4. **Faites un dry run d'abord** pour prévisualiser les changements.
5. **Exécutez** en toute confiance.

La bonne opération pour la bonne tâche. Ne devinez pas — comprenez.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Règles de filtrage rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
