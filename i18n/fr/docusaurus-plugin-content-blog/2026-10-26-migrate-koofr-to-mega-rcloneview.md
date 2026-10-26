---
slug: migrate-koofr-to-mega-rcloneview
title: "Migrer Koofr vers Mega — Transférez vos fichiers avec RcloneView"
authors:
  - steve
description: "Migrez Koofr vers Mega avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, copiez les fichiers de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer Koofr vers Mega
  - transfert de Koofr vers Mega
  - déplacer des fichiers Koofr vers Mega
  - migration Koofr Mega
  - RcloneView de cloud à cloud
  - synchronisation de Koofr vers Mega
  - rclone GUI
  - outil de migration cloud
  - transfert de fichiers Mega
  - vérifier un transfert cloud
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Koofr vers Mega — Transférez vos fichiers avec RcloneView

> Copiez votre bibliothèque Koofr vers Mega directement entre les deux clouds, avec un aperçu d'abord et une vérification à la fin.

Koofr et Mega abordent le stockage de manières différentes, et passer de l'un à l'autre à la main revient à tout télécharger puis à tout renvoyer. Pour un photographe avec des années de dossiers de projets ou un petit bureau avec des documents partagés, ce sont des heures de surveillance. RcloneView connecte les deux services dans une seule fenêtre et transfère directement entre eux, avec des jobs que vous pouvez prévisualiser, répéter et consulter dans l'historique.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Koofr et Mega comme remotes

Ouvrez **Remote > New Remote** et ajoutez Koofr avec les identifiants demandés par la boîte de dialogue de configuration. Ajoutez ensuite Mega avec votre adresse e-mail et votre mot de passe. Mega est un remote à saisie d'identifiants plutôt qu'OAuth, il n'y a donc pas d'étape dans le navigateur. Une fois les deux visibles dans Remote Manager, vous pouvez ouvrir chacun dans son propre panneau Explorer.

Koofr et Mega figurent dans la même liste de remotes, aux côtés des autres fournisseurs pris en charge.

<img src="/support/images/en/blog/new-remote.png" alt="Création des remotes Koofr et Mega dans RcloneView" class="img-large img-center" />

## Planifier le transfert

Commencez par parcourir les dossiers Koofr que vous souhaitez déplacer. Utilisez **Get Size** sur les plus volumineux pour savoir à quoi vous attendre et notez ce que vous pouvez laisser de côté. Mega applique des limites de transfert et de stockage au compte qui dépendent de votre offre ; confirmez donc que la destination dispose de la place nécessaire avant de lancer un gros job plutôt que de le découvrir à mi-parcours.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr et Mega parcourus côte à côte dans RcloneView" class="img-large img-center" />

## Créer un job Copy et le tester avec Dry Run

Dans l'assistant Sync, définissez Koofr comme source et un dossier Mega comme destination. Choisissez le type de job **Copy** afin que les fichiers existants de Mega ne soient jamais supprimés. Dans les paramètres avancés, vous pouvez ajuster le nombre de transferts de fichiers et d'equality checkers ; diminuez-les si l'un des services ralentit ou renvoie des erreurs. Utilisez le filtrage pour ignorer les types de fichiers ou dossiers que vous ne souhaitez pas reprendre.

Lancez **Dry Run** avant le vrai job. Il montre exactement quels fichiers seraient copiés, ce qui permet de repérer sans coût un dossier source erroné. Lorsque l'aperçu est correct, exécutez le job et suivez la vitesse et la progression dans l'onglet Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert de cloud à cloud dans l'onglet Transferring" class="img-large img-center" />

## Vérifier et conserver une trace

Après l'exécution, ouvrez **Compare** avec Koofr à gauche et Mega à droite. Filtrez les fichiers présents uniquement à gauche ou différents pour voir ce qui n'est pas arrivé, puis copiez-les avec l'action de copie de la vue de comparaison. Job History conserve l'état, la durée, la taille et le nombre de fichiers de chaque exécution, ce qui vous donne une trace avant de fermer l'ancien compte.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History affichant des transferts Koofr vers Mega terminés" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Koofr et Mega depuis **Remote > New Remote**.
3. Créez un job Copy de Koofr vers Mega et lancez un Dry Run.
4. Exécutez le job et confirmez avec Folder Compare avant de supprimer quoi que ce soit chez Koofr.

Copier d'abord et vérifier ensuite, c'est garder vos fichiers Koofr disponibles tant que Mega ne les a pas tous.

---

**Guides associés :**

- [Migrer Koofr vers Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrer pCloud vers Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Corriger les erreurs de connexion et de quota Mega](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
