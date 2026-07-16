---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Remote Combine — Fusionner plusieurs dossiers cloud en une seule arborescence dans RcloneView"
authors:
  - alex
description: "Utilisez le remote Combine de RcloneView pour fusionner des dossiers provenant de différents fournisseurs cloud en une seule arborescence de dossiers virtuelle."
keywords:
  - combine remote rclone
  - merge cloud folders
  - virtual remote RcloneView
  - unify multiple cloud storage
  - rclone combine backend
  - multi-cloud folder structure
  - virtual file tree cloud
  - RcloneView virtual remotes
  - organize cloud storage folders
  - cross-provider folder merge
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Combine — Fusionner plusieurs dossiers cloud en une seule arborescence dans RcloneView

> Arrêtez de jongler entre cinq onglets de remotes — le remote Combine de RcloneView assemble des dossiers provenant de différents fournisseurs cloud en une seule arborescence de dossiers virtuelle.

Imaginez un studio de production vidéo qui stocke ses rushs sur Google Drive, ses fichiers de projet sur Dropbox et ses rendus finaux sur Backblaze B2. Chaque remote fonctionne bien seul, mais « où se trouve le montage final du Projet X » signifie vérifier trois onglets à chaque fois. Le remote Combine de RcloneView — l'un des wrappers de remotes virtuels de rclone — résout ce problème en présentant plusieurs dossiers distants comme des sous-répertoires nommés à l'intérieur d'un seul remote virtuel, de sorte que toute la production se trouve sous une même racine sans déplacer physiquement le moindre fichier.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait réellement le remote Combine

Combine se distingue de Union, qui fusionne plusieurs sources en une seule vue unifiée où les fichiers semblent partager un même répertoire. Combine, lui, assigne chaque remote distant (ou un sous-dossier spécifique de celui-ci) à un sous-répertoire nommé dans l'arborescence virtuelle résultante — ainsi `footage:` et `renders:` apparaissent comme `production/footage` et `production/renders` sous un seul remote, totalement séparés mais consultables ensemble. Rien n'est copié ni dupliqué ; RcloneView achemine les lectures et écritures directement vers le remote d'origine en temps réel.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## Configurer un remote Combine dans RcloneView

Depuis l'onglet Remote, ouvrez le Gestionnaire de remotes et créez un nouveau remote de type Combine. Associez chaque remote distant (ou remote:chemin) au nom de sous-répertoire sous lequel vous souhaitez qu'il apparaisse dans l'arborescence combinée, puis enregistrez. Le résultat apparaît dans le panneau Explorer comme n'importe quel autre remote — développez-le, et chaque source associée apparaît comme son propre dossier de premier niveau, prêt pour les mêmes opérations de copie, déplacement et glisser-déposer que vous utiliseriez sur un remote natif. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux, si bien qu'un remote Combine construit à partir de dossiers Google Drive, Dropbox et B2 se comporte de manière identique quel que soit l'OS utilisé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## Cas d'usage pratiques

Au-delà de la production média, les remotes Combine conviennent à quiconque a accumulé des comptes cloud de manière organique — un studio de photographie dont les fichiers RAW sont répartis entre un ancien plan Dropbox et un bucket S3 plus récent, ou une petite équipe dont les contrats se trouvent sur SharePoint tandis que les factures sont sur Google Drive. Regrouper les deux sous un seul remote Combine signifie qu'une seule tâche de Comparaison de dossiers ou de Synchronisation peut cibler toute la structure logique au lieu d'exécuter des tâches séparées par fournisseur, et l'Historique des tâches affiche une trace consolidée unique au lieu de plusieurs journaux déconnectés.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine vs autres remotes virtuels

Il est facile de choisir le mauvais wrapper. Alias donne simplement un nom court à un chemin profondément imbriqué — sans aucune fusion. Union mélange plusieurs sources pour donner l'apparence d'un seul dossier partagé, utile pour mutualiser des niveaux de stockage gratuits. Crypt chiffre les noms de fichiers et de dossiers par-dessus un remote existant. Combine est celui à privilégier spécifiquement lorsque vous voulez garder des sources distinctes séparées mais navigables depuis une seule racine.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait.
2. Ajoutez les remotes individuels que vous souhaitez combiner (onglet Remote > Nouveau remote) s'ils ne sont pas encore configurés.
3. Créez un nouveau remote Combine dans le Gestionnaire de remotes et associez chaque source distante à un nom de sous-répertoire.
4. Parcourez l'arborescence combinée dans le panneau Explorer et lancez votre première tâche de Comparaison ou de Synchronisation contre celle-ci.

Une fois que vos comptes cloud dispersés se trouvent sous un seul remote Combine, la structure des dossiers cesse d'être une taxe que vous payez à chaque fois que vous devez retrouver un fichier.

---

**Guides connexes :**

- [Remote Union — Combiner le stockage gratuit entre fournisseurs dans RcloneView](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [Remotes virtuels — Combine, Union et Alias expliqués](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Remote Alias — Chemins raccourcis dans RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
