---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "Migrer de Citrix ShareFile vers Box — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Migrez de Citrix ShareFile vers Box avec RcloneView. Connectez les deux distants, prévisualisez avec Dry Run, copiez les dossiers de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer Citrix ShareFile vers Box
  - migration ShareFile vers Box
  - transfert Citrix ShareFile Box
  - outil de migration cloud à cloud
  - RcloneView ShareFile
  - migration Box for Business
  - GUI de migration de fichiers en entreprise
  - déplacer des dossiers ShareFile vers Box
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Citrix ShareFile vers Box — Transférer des fichiers avec RcloneView

> Déplacez une arborescence ShareFile vers Box de cloud à cloud, prévisualisez chaque changement d'abord et vérifiez le résultat côte à côte — le tout depuis une seule GUI.

Lorsqu'une organisation se regroupe sur Box, l'archive ShareFile de contrats, de livrables clients et de dossiers de projets doit suivre. Tout télécharger sur un portable puis tout renvoyer est lent et source d'erreurs. RcloneView connecte les deux services comme distants et exécute le transfert via rclone, de sorte que les fichiers passent directement d'un cloud à l'autre pendant que vous suivez la progression dans une seule fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Citrix ShareFile et Box

Ouvrez **Remote tab > New Remote** et choisissez Citrix ShareFile. En plus de la connexion, ShareFile a besoin d'un **Root Folder ID**, qui indique à rclone quel dossier traiter comme le sommet du distant. Si vous prévoyez de migrer service par service, un distant distinct par dossier racine garde chaque tâche petite et facile à auditer.

Ajoutez ensuite Box. Box utilise OAuth : RcloneView ouvre votre navigateur, vous vous connectez et la connexion est enregistrée sans clé d'API à copier. Si votre organisation utilise Box for Business, définissez `box_sub_type = enterprise` pendant la configuration afin que le distant cible le compte entreprise.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

Ouvrez ShareFile dans le panneau de gauche et Box dans celui de droite. Parcourir les deux côte à côte permet de vérifier rapidement que vous voyez les dossiers attendus avant que quoi que ce soit ne bouge.

## Planifier le transfert et le prévisualiser

Pour une migration ponctuelle, une tâche **Copy** est le choix prudent : elle ajoute des fichiers dans Box sans rien supprimer de ce qui s'y trouve déjà. Créez-la depuis **Home tab > Sync** ou le Job Manager, choisissez le dossier ShareFile comme source et un dossier Box comme destination, et nommez la tâche, par exemple `sharefile-legal-to-box`.

À l'étape Advanced Settings, laissez la somme de contrôle désactivée pour cette paire : la comparaison par somme de contrôle exige un type de hachage commun aux deux côtés, or ShareFile (MD5) et Box (SHA-1) en utilisent des différents, donc rclone compare plutôt par taille et date de modification. Gardez un nombre d'equality checkers modéré si le listage semble lent. À l'étape Filtering, vous pouvez exclure les gros installateurs (`.iso`) ou les anciens dossiers que vous avez décidé de ne pas conserver.

Avant l'exécution, utilisez **Dry Run**. Il liste les fichiers qui seraient copiés sans rien transférer, si bien qu'un cabinet d'avocats qui déplace 40 000 documents clients peut d'abord confirmer le périmètre.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## Exécuter, surveiller et vérifier

Lancez la tâche et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet **Transferring**. Les grandes migrations peuvent être découpées en plusieurs tâches, une par dossier de premier niveau, afin qu'un échec ne bloque pas tout le reste. Chaque exécution est enregistrée dans le **Job History** avec son statut, sa taille totale et son nombre de fichiers, ce qui vous fournit une piste d'audit de la migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

Une fois les tâches terminées, ouvrez **Folder Compare** sur la source et la destination. Filtrez les fichiers left-only pour repérer ce qui n'est pas arrivé, puis utilisez Copy right pour combler les manques.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## Pour commencer

RcloneView fonctionne sous Windows, macOS et Linux, et peut monter et synchroniser plus de 90 fournisseurs depuis une seule fenêtre.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Citrix ShareFile (avec son Root Folder ID) et Box comme distants.
3. Créez une tâche Copy de ShareFile vers Box et lancez d'abord un Dry Run.
4. Exécutez la tâche, puis confirmez le résultat avec Folder Compare et le Job History.

Une migration planifiée et vérifiée permet à votre équipe de passer à Box sans se demander si un dossier a été oublié.

---

**Guides associés :**

- [Gérer le stockage Citrix ShareFile — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrer de Citrix ShareFile vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />
