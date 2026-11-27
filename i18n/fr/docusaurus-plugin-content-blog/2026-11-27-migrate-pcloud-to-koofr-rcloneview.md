---
slug: migrate-pcloud-to-koofr-rcloneview
title: "Migrer de pCloud vers Koofr — Transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Migrez de pCloud vers Koofr avec RcloneView. Copiez des dossiers de cloud à cloud, prévisualisez avec Dry Run, vérifiez avec Folder Compare et évitez la boucle téléchargement-renvoi."
keywords:
  - migrer pcloud vers koofr
  - transfert pcloud vers koofr
  - migration pcloud koofr
  - déplacer des fichiers de pcloud vers koofr
  - migration de cloud à cloud
  - migration de stockage cloud européen
  - rcloneview pcloud
  - rcloneview koofr
  - outil de transfert de fichiers koofr
  - migration cloud rclone gui
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de pCloud vers Koofr — Transférer des fichiers avec RcloneView

> Déplacez votre bibliothèque pCloud vers Koofr dossier par dossier, prévisualisez chaque modification et vérifiez que rien n'a été oublié.

Équipes et particuliers passent de pCloud à Koofr pour de nombreuses raisons : regrouper des comptes, adopter Koofr comme point central ou conserver une seconde copie chez un autre fournisseur. Tout télécharger sur un ordinateur portable puis tout renvoyer gaspille de l'espace disque et des jours de travail. RcloneView connecte les deux services dans une seule fenêtre et copie les données de l'un à l'autre via rclone, de sorte que la migration s'exécute comme une tâche gérée que vous pouvez surveiller, relancer et vérifier.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter pCloud et Koofr comme distants

Ouvrez l'onglet **Remote** et cliquez sur **New Remote**. pCloud utilise OAuth : choisissez pCloud, et votre navigateur s'ouvre pour que vous vous connectiez et autorisiez l'accès. Aucune clé API n'est nécessaire. Ajoutez ensuite un second distant pour Koofr et saisissez les identifiants de compte demandés par le formulaire de configuration.

Une fois les deux distants créés, ouvrez-les côte à côte dans deux panneaux Explorer. Vous pouvez passer à une disposition horizontale ou verticale dans **Settings > Layout**, et parcourir chaque compte avec l'arborescence des dossiers, la vue en liste ou la vue en miniatures pour les dossiers de photos.

<img src="/support/images/en/blog/new-remote.png" alt="Ajouter les distants pCloud et Koofr dans RcloneView" class="img-large img-center" />

Avant de déplacer quoi que ce soit, faites un clic droit sur vos dossiers pCloud de premier niveau et utilisez **Get Size**. Connaître le total vous aide à vérifier que le compte Koofr dispose d'assez d'espace.

## Copier des dossiers de cloud à cloud

Pour quelques dossiers, faites-les glisser du panneau pCloud vers le panneau Koofr. Un glisser entre deux distants différents effectue une **Copy**, vos originaux pCloud restent donc intacts.

Pour une migration complète, créez plutôt une tâche. Cliquez sur **Sync** dans l'onglet Home, choisissez le dossier pCloud comme source et un dossier Koofr comme destination, puis donnez à la tâche un nom tel que `pcloud-to-koofr`. Dans Advanced Settings, activez **checksum** si vous voulez comparer les fichiers par hachage et taille, et laissez **Retry entire sync if fails** à sa valeur par défaut de 3 pour qu'une connexion interrompue n'arrête pas l'exécution.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de cloud à cloud de pCloud vers Koofr dans RcloneView" class="img-large img-center" />

Lancez d'abord un **Dry Run**. Il liste chaque fichier qui serait copié ou supprimé, ce qui est un moyen fiable de repérer un mauvais chemin de destination avant que de vraies données ne bougent. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, si bien que le même déroulé de tâche s'applique à toute paire que vous migrerez plus tard.

## Surveiller le transfert et consulter l'historique

Pendant l'exécution, l'onglet **Transferring** affiche la progression, la vitesse et le nombre de fichiers, et vous pouvez annuler à tout moment. Une photographe qui déplace 400 Go de séances exportées peut réduire l'application dans la zone de notification ; la tâche continue en arrière-plan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveiller la progression du transfert de pCloud vers Koofr dans RcloneView" class="img-large img-center" />

Une fois terminé, ouvrez **Job History** pour vérifier le statut (Completed, Errored ou Canceled), la taille totale, la vitesse et le nombre de fichiers. Si vous ajoutez de nouveaux fichiers à pCloud pendant la bascule, relancez la même tâche. Seuls les fichiers nouveaux ou modifiés sont transférés.

## Vérifier avec Folder Compare

Cliquez sur **Compare** et chargez le dossier pCloud à gauche et le dossier Koofr à droite. Filtrez sur **left-only files** pour repérer ce qui manque sur Koofr, et utilisez **Copy right** pour combler les manques. Lorsque les deux côtés apparaissent identiques, la migration est terminée et vous pouvez décider quand retirer la copie pCloud.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparer les dossiers pCloud et Koofr après la migration dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud (connexion OAuth dans le navigateur) et Koofr comme distants via **New Remote**.
3. Créez une tâche Sync de pCloud vers Koofr et prévisualisez-la avec **Dry Run**.
4. Lancez la tâche, consultez **Job History** et confirmez avec **Folder Compare**.

Une migration planifiée et vérifiée vous permet de changer de fournisseur selon votre calendrier, et non quand une copie manuelle finit enfin.

---

**Guides associés :**

- [Gérer le stockage pCloud — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gérer le stockage Koofr — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation Koofr avec RcloneView](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
