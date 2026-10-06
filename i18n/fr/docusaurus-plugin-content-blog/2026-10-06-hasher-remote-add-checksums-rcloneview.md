---
slug: hasher-remote-add-checksums-rcloneview
title: "Remote Hasher — Ajouter des sommes de contrôle au stockage qui n'en fournit pas dans RcloneView"
authors:
  - steve
description: "Utilisez le remote virtuel Hasher dans RcloneView pour ajouter des contrôles d'intégrité basés sur des hachages aux remotes qui ne fournissent pas de sommes de contrôle."
keywords:
  - remote Hasher rclone
  - ajouter des sommes de contrôle au stockage cloud
  - contrôle d'intégrité des fichiers cloud
  - vérifier les hachages de fichiers cloud
  - remote virtuel Hasher
  - remotes virtuels RcloneView
  - synchronisation par somme de contrôle
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Hasher — Ajouter des sommes de contrôle au stockage qui n'en fournit pas dans RcloneView

> Le remote virtuel Hasher ajoute le hachage par-dessus un remote existant, de sorte que les contrôles d'intégrité fonctionnent même lorsque le stockage n'a pas de sommes de contrôle.

Certains backends de stockage ne peuvent pas fournir de hachages de fichiers, ce qui affaiblit les comparaisons et la vérification après un transfert. RcloneView prend en charge le remote virtuel Hasher de rclone, une enveloppe qui superpose le hachage à un remote que vous possédez déjà. Ce guide explique quand il est utile et comment l'utiliser.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait le remote Hasher

Les remotes virtuels enveloppent un remote existant pour ajouter un comportement. Alias raccourcit les chemins, Crypt chiffre, et Hasher ajoute le hachage pour les contrôles d'intégrité. Si un backend n'expose pas de sommes de contrôle, les comparaisons se rabattent sur la taille et la date de modification, ce qui peut laisser passer un contenu modifié sans changer ni l'une ni l'autre.

En enveloppant ce backend dans un remote Hasher, vous lui donnez une capacité de hachage afin que la comparaison par somme de contrôle ait de quoi travailler. C'est un bon choix pour les archives et les sauvegardes où l'exactitude prime sur la vitesse.

<img src="/support/images/en/blog/new-remote.png" alt="Création d'un nouveau remote virtuel dans RcloneView" class="img-large img-center" />

## Créer un remote Hasher

Ouvrez l'onglet Remote et choisissez New Remote, puis sélectionnez le type Hasher. Indiquez le remote sous-jacent et le dossier à envelopper, et donnez-lui un nom reconnaissable, par exemple `archive-hashed`. Une fois enregistré, il apparaît dans l'explorateur comme n'importe quel autre remote.

Utilisez le remote enveloppé partout où vous utiliseriez l'original : navigation, copie, ou comme source ou destination d'une synchronisation. N'oubliez pas que les hachages sont liés à l'enveloppe ; utilisez donc systématiquement le remote Hasher pour les données que vous voulez vérifier.

## L'utiliser avec la synchronisation et la comparaison

Dans les Advanced Settings d'une tâche de synchronisation, activez **Enable checksum** afin que les fichiers soient comparés par hachage et par taille. Combiné à un remote Hasher, cela donne des résultats plus fiables que la taille et la date seules.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vue Folder Compare montrant les différences entre deux dossiers" class="img-large img-center" />

Lancez d'abord un Dry Run pour prévisualiser ce qui sera copié ou supprimé, puis exécutez. RcloneView prend en charge le montage et la synchronisation de plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux ; la même approche de vérification s'applique donc à tous vos clouds.

## Consulter les résultats dans Job History

Après une exécution, ouvrez Job History pour confirmer l'état, les fichiers transférés et la taille totale. Si une tâche signale des erreurs, l'onglet Log en affiche les détails.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches montrant des exécutions de synchronisation terminées" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez le remote dépourvu de sommes de contrôle, si ce n'est pas déjà fait.
3. Créez un remote Hasher qui l'enveloppe depuis Remote > New Remote.
4. Créez une tâche de synchronisation avec **Enable checksum** activé et lancez d'abord un Dry Run.

Une vérification plus solide signifie que vous détectez les différences silencieuses avant qu'elles ne posent problème.

---

**Guides associés :**

- [Remotes virtuels — Combine, Union et Alias avec RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Corriger les incohérences de somme de contrôle lors de la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Corriger les échecs de vérification des sauvegardes cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
