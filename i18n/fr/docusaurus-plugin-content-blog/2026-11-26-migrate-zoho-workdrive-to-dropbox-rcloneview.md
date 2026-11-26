---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "Migrer Zoho WorkDrive vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - robin
description: "Déplacez vos fichiers de Zoho WorkDrive vers Dropbox avec RcloneView. Connectez les deux clouds, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - migrer zoho workdrive vers dropbox
  - transfert zoho workdrive vers dropbox
  - déplacer des fichiers depuis zoho workdrive
  - outil de migration zoho workdrive
  - migration dropbox
  - transfert de cloud à cloud
  - rcloneview zoho workdrive
  - rcloneview dropbox
  - rclone gui zoho workdrive
tags:
  - RcloneView
  - zoho
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Zoho WorkDrive vers Dropbox — Transférer des fichiers avec RcloneView

> Déplacez un espace de travail Zoho WorkDrive vers Dropbox de cloud à cloud, avec un aperçu avant toute modification et une vérification côte à côte ensuite.

Les équipes quittent Zoho WorkDrive pour de nombreuses raisons — une fusion avec une entreprise utilisant Dropbox, un client qui standardise sur Dropbox ou une simple consolidation d'outils. Tout télécharger sur un ordinateur portable puis tout renvoyer est lent et source d'erreurs. RcloneView connecte les deux services dans une seule fenêtre et copie les fichiers directement de l'un à l'autre, avec Dry Run, l'historique des tâches et Folder Compare pour confirmer que rien n'a été oublié.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Zoho WorkDrive et Dropbox

Ouvrez **Remote > New Remote** et ajoutez d'abord Zoho WorkDrive. Zoho WorkDrive nécessite une étape de plus que la plupart des fournisseurs : vous devez choisir la **région** où se trouve votre compte Zoho (par exemple, le centre de données des États-Unis ou de l'UE). Une mauvaise région est la cause habituelle d'un échec de connexion ; vérifiez donc le domaine avec lequel vous vous connectez à Zoho avant de commencer.

Ajoutez ensuite Dropbox. Il utilise OAuth : une fenêtre de navigateur s'ouvre, vous vous connectez et approuvez l'accès, puis RcloneView termine la configuration automatiquement — aucune clé API n'est requise. Si votre équipe utilise Dropbox Business, activez le paramètre `dropbox_business` lors de la configuration pour accéder aux dossiers d'équipe.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des distants Zoho WorkDrive et Dropbox dans RcloneView" class="img-large img-center" />

## Prévisualiser la copie avec Dry Run

Ouvrez les deux distants côte à côte dans les panneaux de l'Explorer et accédez au dossier WorkDrive à déplacer. Vous pouvez faire glisser un petit dossier pour un test rapide — un glisser-déposer entre deux distants différents copie toujours et ne déplace jamais, la source reste donc intacte.

Pour la migration complète, ouvrez le **Job Manager** et ajoutez une nouvelle tâche. Définissez Zoho WorkDrive comme source et un nouveau dossier Dropbox (par exemple `/WorkDrive-Archive`) comme destination. Utilisez une tâche **Copy** plutôt qu'une synchronisation unidirectionnelle pour le premier passage : Copy ne supprime rien sur la destination. Lancez ensuite **Dry Run** pour voir la liste exacte des fichiers qui seront transférés avant que la moindre donnée ne bouge.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Zoho WorkDrive vers Dropbox dans RcloneView" class="img-large img-center" />

## Ajuster le transfert et suivre la progression

Dropbox applique des limites de débit à son API ; un nombre modéré de transferts de fichiers simultanés est donc plus fiable qu'un réglage élevé. Laissez **Retry entire sync if fails** à sa valeur par défaut de 3 afin que les erreurs temporaires se résolvent d'elles-mêmes. Si l'espace de travail contient de gros fichiers vidéo ou de conception, le réglage des transferts multi-thread (par défaut 4) aide pour les gros fichiers individuels.

Pendant l'exécution de la tâche, l'onglet **Transferring** affiche la progression, la vitesse et le nombre de fichiers. À la fin, **Job History** enregistre le statut, la taille totale et le nombre de fichiers — une preuve utile si un responsable demande la confirmation que la migration est terminée.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi d'un transfert de Zoho WorkDrive vers Dropbox dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Ouvrez **Home > Compare** avec WorkDrive à gauche et Dropbox à droite. Filtrez sur **left-only files** pour repérer ce qui n'est pas arrivé et sur **different files** pour détecter les écarts de taille. Sélectionnez les éléments manquants et utilisez **Copy right** pour les compléter. Contrairement aux outils de montage seul, RcloneView synchronise aussi et compare les dossiers — avec la FREE License.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Zoho WorkDrive et Dropbox après la migration" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Zoho WorkDrive (choisissez la bonne région) et Dropbox (connexion OAuth) comme distants.
3. Créez une tâche Copy de WorkDrive vers un nouveau dossier Dropbox et lancez d'abord Dry Run.
4. Exécutez la tâche, puis confirmez le résultat avec Folder Compare et Job History.

Une migration planifiée et vérifiée permet à votre équipe de passer à Dropbox dès le premier jour sans chercher de fichiers manquants.

---

**Guides associés :**

- [Gérer Zoho WorkDrive — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Migrer Zoho WorkDrive vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-google-drive-rcloneview)
- [Corriger les erreurs de synchronisation Dropbox avec RcloneView](https://rcloneview.com/support/blog/fix-dropbox-sync-errors-rcloneview)

<CloudSupportGrid />
