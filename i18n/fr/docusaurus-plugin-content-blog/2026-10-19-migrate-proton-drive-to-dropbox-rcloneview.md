---
slug: migrate-proton-drive-to-dropbox-rcloneview
title: "Migrer Proton Drive vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Migrez Proton Drive vers Dropbox avec RcloneView : connectez les deux remotes, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer Proton Drive vers Dropbox
  - transfert Proton Drive vers Dropbox
  - déplacer des fichiers de Proton Drive vers Dropbox
  - RcloneView Proton Drive
  - RcloneView Dropbox
  - migration de cloud à cloud
  - synchronisation Proton Drive Dropbox
  - transférer des fichiers Proton Drive
tags:
  - RcloneView
  - proton-drive
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Proton Drive vers Dropbox — Transférer des fichiers avec RcloneView

> Copiez vos fichiers Proton Drive vers Dropbox de cloud à cloud, avec un aperçu avant le transfert et une comparaison après.

Passer de Proton Drive à Dropbox relève souvent de la collaboration : dossiers partagés, collègues et outils déjà installés dans Dropbox. Tout télécharger d’abord sur un ordinateur portable est lent et demande de l’espace disque libre. RcloneView connecte les deux comptes dans une seule fenêtre et copie directement de l’un à l’autre. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Proton Drive et Dropbox

Proton Drive utilise la saisie d’identifiants : ajoutez un nouveau remote, choisissez Proton Drive, puis saisissez votre e-mail et votre mot de passe, ainsi qu’un code 2FA si l’authentification à deux facteurs est activée. La prise en charge de Proton Drive nécessite rclone v1.69 ou plus récent. RcloneView embarque un rclone intégré ; vérifiez donc la version dans le pied de page si la création du remote échoue.

Dropbox utilise l’OAuth via le navigateur. RcloneView ouvre une page de connexion, vous approuvez l’accès et le remote se connecte automatiquement.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Proton Drive et Dropbox dans RcloneView" class="img-large img-center" />

## Choisir ce qu’il faut déplacer

Prenons l’exemple d’un consultant indépendant dont les dossiers clients sont dans Proton Drive et qui partage désormais ses livrables via Dropbox. Copiez un dossier client par job afin que chaque exécution reste courte et facile à relancer.

Utilisez Copy plutôt que Sync lorsque Dropbox contient déjà des fichiers à conserver, car une synchronisation à sens unique fait de la destination le miroir de la source. Les filtres de l’assistant permettent de limiter par taille ou par ancienneté des fichiers, ou de sélectionner des groupes prédéfinis comme Document et Image. Lancez d’abord un Dry Run : il liste ce qui serait copié ou supprimé sans rien modifier.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Proton Drive et Dropbox avant la migration" class="img-large img-center" />

## Transférer et surveiller

Faites glisser un dossier du panneau Proton Drive vers le panneau Dropbox pour une copie rapide. Le glisser-déposer entre des remotes différents copie au lieu de déplacer ; les originaux restent donc dans Proton Drive. Pour des exécutions répétables, enregistrez le transfert sous forme de job.

L’onglet Transferring affiche la vitesse, le nombre de fichiers et la progression. Pour une grosse archive, réduisez le nombre de transferts simultanés dans Advanced Settings afin qu’aucun des deux services n’interrompe l’exécution. Les exécutions échouées sont relancées automatiquement (par défaut : 3 fois).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Proton Drive vers Dropbox" class="img-large img-center" />

## Vérifier le résultat

Après la copie, lancez Folder Compare sur les deux racines. Il affiche les fichiers présents uniquement à gauche, uniquement à droite, identiques et différents, et vous permet de copier les fichiers manquants. Job History conserve l’heure de début, la durée, l’état et le nombre de fichiers de chaque exécution, ce qui vous donne un historique clair de la migration.

N’oubliez pas que les fichiers quittant Proton Drive arrivent dans Dropbox selon le modèle de stockage propre à Dropbox ; vérifiez donc les paramètres de partage de la destination avant d’inviter des collaborateurs.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des jobs de la migration de Proton Drive vers Dropbox" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote Proton Drive (e-mail, mot de passe, 2FA facultatif) et un remote Dropbox (connexion via le navigateur).
3. Lancez un Dry Run sur un dossier, puis exécutez le job de copie.
4. Vérifiez avec Folder Compare, puis répétez l’opération pour les dossiers restants.

Migrer par étapes vérifiées vous permet de passer à Dropbox sans vous demander ce qui a été oublié.

---

**Guides associés :**

- [Migrer Dropbox vers Proton Drive](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Migrer Proton Drive vers Google Drive](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dry Run : prévisualiser la synchronisation avant le transfert](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
