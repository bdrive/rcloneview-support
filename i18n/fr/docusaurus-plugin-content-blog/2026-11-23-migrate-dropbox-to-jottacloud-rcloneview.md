---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Migrer de Dropbox vers Jottacloud — Transférer vos fichiers avec RcloneView"
authors:
  - jay
description: "Déplacez vos fichiers de Dropbox vers Jottacloud avec RcloneView. Connectez les deux clouds, prévisualisez avec Dry Run, copiez de cloud à cloud et vérifiez le résultat avec Folder Compare."
keywords:
  - migrer dropbox vers jottacloud
  - transfert dropbox vers jottacloud
  - déplacer fichiers de dropbox vers jottacloud
  - outil de migration jottacloud
  - alternative dropbox europe
  - migration cloud à cloud gui
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - migration stockage cloud européen
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Dropbox vers Jottacloud — Transférer vos fichiers avec RcloneView

> Déplacez vos dossiers Dropbox vers Jottacloud de cloud à cloud, puis vérifiez chaque fichier avant de fermer l'ancien compte.

Les équipes et les foyers qui passent à un fournisseur norvégien se heurtent souvent au même obstacle : télécharger des années de données Dropbox sur un ordinateur portable pour les renvoyer ensuite est lent et risqué. RcloneView connecte les deux comptes dans une seule fenêtre et exécute le transfert via rclone, de sorte que les fichiers passent de Dropbox à Jottacloud sans que vous ayez à les faire transiter à la main par un dossier local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Dropbox et Jottacloud comme distants

Ouvrez l'onglet **Remote** et cliquez sur **New Remote**. Dropbox utilise OAuth : votre navigateur s'ouvre, vous vous connectez et RcloneView enregistre la connexion. Si vos fichiers se trouvent dans un compte d'équipe Dropbox, définissez l'option `dropbox_business` pour que rclone communique avec l'espace de noms professionnel.

Ajoutez Jottacloud de la même manière, en choisissant Jottacloud dans la liste des fournisseurs et en suivant les instructions de connexion. Une fois les deux distants affichés, ouvrez-les côte à côte dans deux panneaux Explorer pour voir la source et la destination en même temps.

<img src="/support/images/en/blog/new-remote.png" alt="Ajouter les distants Dropbox et Jottacloud dans RcloneView" class="img-large img-center" />

## Planifier l'organisation des dossiers avant de copier

Une agence de design disposant de 600 Go répartis entre `Clients`, `Archive` et `Shared Assets` doit d'abord décider où atterrira chaque dossier de premier niveau. Créez les dossiers de destination dans Jottacloud depuis le menu contextuel, puis utilisez **Get Size** sur chaque dossier Dropbox pour voir la quantité de données déplacée à chaque étape.

Pour une opération ponctuelle rapide, faites glisser un dossier du panneau Dropbox vers le panneau Jottacloud. Un glisser-déposer entre deux distants différents effectue toujours une copie : rien n'est supprimé de Dropbox. Pour un volume plus important, une tâche enregistrée est préférable, car vous pouvez la relancer et consulter son historique.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de Dropbox vers Jottacloud dans RcloneView" class="img-large img-center" />

## Créer une tâche de migration réutilisable

Cliquez sur **Sync** dans l'onglet Home et choisissez Dropbox comme source et Jottacloud comme destination. Laissez la direction en sens unique (« Modifying destination only »). Dans Advanced Settings, conservez le réglage multithread par défaut et laissez la comparaison par somme de contrôle désactivée (Dropbox et Jottacloud utilisent des types de hachage différents, rclone compare donc les fichiers par taille et date de modification), puis utilisez Filtering pour ignorer tout ce que vous ne voulez pas emporter.

Lancez d'abord un **Dry Run**. Il liste chaque fichier qui serait copié ou supprimé à la destination, ce qui permet de repérer un mauvais choix de dossier avant qu'il ne vous coûte des heures. Lancez ensuite l'exécution réelle et suivez la vitesse et le nombre de fichiers dans l'onglet **Transferring**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécuter la tâche de migration de Dropbox vers Jottacloud dans RcloneView" class="img-large img-center" />

Si des personnes continuent de travailler dans Dropbox pendant le déménagement, relancez la même tâche juste avant la bascule. Seuls les fichiers nouveaux ou modifiés sont transférés. Avec une licence PLUS, vous pouvez planifier la tâche chaque nuit jusqu'au jour de la bascule.

## Vérifier avec Folder Compare

Avant de résilier Dropbox, cliquez sur **Compare** et ouvrez les deux dossiers de premier niveau. Activez les filtres « uniquement à gauche » et « taille différente » : tout ce qui reste affiché n'est pas arrivé ou ne correspond pas. Sélectionnez ces éléments et utilisez **Copy right** pour combler les manques. Lorsque la vue n'affiche plus que des fichiers identiques, la migration est terminée. **Job History** conserve la taille, la vitesse et le statut de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparer les dossiers Dropbox et Jottacloud après la migration dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Dropbox (OAuth) et Jottacloud comme distants depuis **Remote > New Remote**.
3. Créez une tâche Sync à sens unique de Dropbox vers Jottacloud et prévisualisez-la avec **Dry Run**.
4. Exécutez la tâche, puis confirmez le résultat avec **Compare** avant de fermer le compte Dropbox.

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux ; après le déménagement, vous pouvez donc monter Jottacloud comme lecteur local avec la même application.

---

**Guides associés :**

- [Gérer le stockage Jottacloud avec RcloneView : synchroniser, sauvegarder et organiser vos fichiers](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrer de Dropbox vers Koofr — Transférer vos fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Corriger les erreurs de synchronisation Jottacloud — Diagnostiquer et résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
