---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Migrer Mail.ru Cloud vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Déplacez des fichiers de Mail.ru Cloud vers Backblaze B2 avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, transférez et vérifiez avec Folder Compare."
keywords:
  - migrer Mail.ru Cloud vers Backblaze B2
  - sauvegarde Mail.ru Cloud
  - Mail.ru Cloud to B2
  - migration Backblaze B2
  - transfert de cloud à cloud
  - migration RcloneView
  - Mail.ru Cloud rclone
  - déplacer des fichiers vers Backblaze B2
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Mail.ru Cloud vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Copiez une bibliothèque Mail.ru Cloud vers le stockage objet Backblaze B2 depuis une seule fenêtre, avec un aperçu avant tout déplacement et une comparaison ensuite.

Si des années de documents et de photos résident dans Mail.ru Cloud, une seconde copie dans un stockage objet vous offre une archive indépendante. RcloneView connecte les deux services comme remotes et exécute le transfert sous forme de tâche de cloud à cloud, de sorte que les fichiers n'ont pas besoin d'être d'abord téléchargés sur un portable. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture avec la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux remotes

Ouvrez l'onglet Remote et cliquez sur New Remote. Ajoutez d'abord Mail.ru Cloud en suivant les invites de ce fournisseur, puis ajoutez Backblaze B2 avec une Application Key ID et une Application Key issues de la console B2. Créez au préalable le bucket dans B2 afin de disposer d'une destination.

Ouvrez chaque remote dans son propre panneau Explorer. Parcourez les dossiers Mail.ru Cloud à gauche et le bucket B2 à droite pour confirmer que les deux répondent avant de créer une tâche.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Mail.ru Cloud et Backblaze B2 dans RcloneView" class="img-large img-center" />

## Planifier le transfert

Décidez si vous déplacez tout ou seulement une partie. Un studio qui archive 400 Go de dossiers de projets pourrait d'abord copier un dossier de premier niveau à titre pilote. Dans l'assistant de synchronisation, choisissez Mail.ru Cloud comme source et un dossier de bucket B2 comme destination, puis donnez à la tâche un nom composé de lettres, de chiffres, de traits d'union ou de tirets bas.

Pour une migration, une tâche Copy est le choix le plus sûr car elle ne supprime jamais rien de la source. N'utilisez Sync que lorsque vous voulez que la destination reflète exactement la source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Mail.ru Cloud vers Backblaze B2" class="img-large img-center" />

## Prévisualiser, exécuter et surveiller

Lancez d'abord un Dry Run. Il liste les fichiers qui seraient copiés ou supprimés sans rien modifier, ce qui permet de repérer tôt un mauvais chemin de destination. Démarrez ensuite la tâche et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet Transferring.

Le stockage objet gère bien de nombreux envois en parallèle, mais les clouds grand public peuvent être plus stricts. Si vous voyez des erreurs, diminuez le nombre de transferts de fichiers à l'étape 2 de l'assistant et gardez les equality checkers à 4 ou moins.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance d'un transfert de Mail.ru Cloud vers B2 dans RcloneView" class="img-large img-center" />

## Vérifier et garder la copie à jour

Une fois la tâche terminée, ouvrez Folder Compare avec Mail.ru Cloud d'un côté et B2 de l'autre. Filtrez les fichiers présents uniquement à gauche et différents pour trouver ce qui n'est pas arrivé, et ne copiez que ces éléments. Job History enregistre l'état, la durée, la taille et le nombre de fichiers de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre Mail.ru Cloud et Backblaze B2" class="img-large img-center" />

Pour garder la copie B2 à jour, enregistrez la tâche et, avec une licence PLUS, ajoutez une planification de type crontab à l'étape 4.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Mail.ru Cloud et Backblaze B2 comme remotes dans l'onglet Remote.
3. Créez une tâche Copy de Mail.ru Cloud vers votre bucket B2 et lancez un Dry Run.
4. Démarrez le transfert, puis vérifiez avec Folder Compare.

Une seconde copie vérifiée dans B2 transforme une bibliothèque chez un seul fournisseur en bibliothèque sauvegardée.

---

**Guides associés :**

- [Gérer le stockage Mail.ru Cloud avec RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Gérer le stockage Backblaze B2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrer Yandex Disk vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
