---
slug: migrate-koofr-to-onedrive-rcloneview
title: "Migrer de Koofr vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Déplacez vos fichiers de Koofr vers Microsoft OneDrive avec RcloneView. Un guide visuel, étape par étape, pour une migration cloud à cloud sécurisée et précise."
keywords:
  - Koofr to OneDrive migration
  - migrate Koofr to OneDrive
  - Koofr OneDrive transfer
  - cloud to cloud migration
  - RcloneView Koofr
  - RcloneView OneDrive
  - rclone Koofr OneDrive GUI
  - cloud file migration tool
  - OneDrive migration software
  - Koofr cloud transfer
tags:
  - koofr
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Koofr vers OneDrive — Transférer des fichiers avec RcloneView

> RcloneView simplifie et fiabilise la migration de Koofr vers Microsoft OneDrive — avec comparaison de dossiers, aperçu en mode simulation (dry-run) et suivi du transfert en temps réel intégrés.

Koofr est un fournisseur de stockage cloud européen axé sur la confidentialité, apprécié des utilisateurs qui privilégient la souveraineté des données et une interface épurée. OneDrive, étroitement intégré à Microsoft 365, est souvent la destination choisie lorsque les équipes standardisent leur usage autour de Word, Excel et de la collaboration via Teams. Passer de l'un à l'autre ne se résume pas à copier des fichiers — le défi consiste à le faire de manière fiable : préserver les structures de dossiers imbriquées, gérer les cas particuliers de noms de fichiers, et confirmer que chaque fichier est arrivé intact. RcloneView gère l'intégralité de la migration de façon visuelle, en se connectant directement aux deux fournisseurs sans faire transiter les données par votre disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Koofr et OneDrive dans RcloneView

Les deux remotes sont configurés via l'assistant **Nouveau Remote** dans l'onglet **Remote** de RcloneView. Ajoutez d'abord Koofr en le sélectionnant dans la liste des fournisseurs et en saisissant les identifiants de votre compte. Ajoutez ensuite OneDrive — il utilise l'authentification OAuth : une fenêtre de navigateur s'ouvre, vous vous connectez avec votre compte Microsoft, et la connexion s'établit automatiquement sans que vous ayez à gérer de jetons manuellement.

Une fois les deux remotes enregistrés, ils apparaissent comme des onglets indépendants dans l'explorateur de fichiers à double volet. Ouvrez Koofr dans le panneau de gauche et OneDrive dans le panneau de droite pour voir les deux arborescences de dossiers côte à côte. Cette disposition est immédiatement utile pour une équipe qui migre la hiérarchie d'un projet partagé : vous pouvez vérifier que la structure de dossiers de destination sur OneDrive correspond à vos attentes avant de déplacer le moindre fichier.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and OneDrive remotes in RcloneView" class="img-large img-center" />

## Auditer le contenu avant la migration

L'outil **Comparaison de dossiers** de RcloneView, accessible depuis l'onglet **Accueil**, est un moyen efficace de préparer une migration cloud. Pointez-le vers le dossier source Koofr à gauche et le dossier de destination OneDrive correspondant à droite. La vue de comparaison classe chaque fichier : présent uniquement à gauche (pas encore sur OneDrive), présent uniquement à droite (déjà présent ou issu d'une exécution partielle précédente), identique (correspondance par taille), ou différent (taille non concordante indiquant un conflit potentiel).

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Koofr and OneDrive folder contents before migration in RcloneView" class="img-large img-center" />

Pour une équipe migrant plusieurs milliers de documents et de fichiers de conception, cette étape de comparaison permet de détecter les cas qui, normalement, ne remontent que des semaines plus tard sous forme de tickets de support — un dossier ayant échoué silencieusement à cause d'un caractère spécial dans le chemin, ou des fichiers déjà partiellement migrés lors d'une tentative précédente. Une fois la comparaison confirmant que la source et la destination sont dans l'état attendu, passez à la tâche de synchronisation.

## Exécuter le transfert cloud à cloud

Créez une nouvelle tâche dans le **Gestionnaire de tâches**, définissez le dossier Koofr comme source et le dossier OneDrive cible comme destination, puis choisissez **Synchronisation** comme type de tâche. RcloneView transfère les fichiers directement entre les deux fournisseurs : les données circulent de Koofr vers OneDrive sans étape intermédiaire locale, ce qui limite l'utilisation de votre bande passante Internet au seul trajet cloud à cloud, au lieu de tout télécharger deux fois.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Koofr to OneDrive in RcloneView" class="img-large img-center" />

Dans l'étape des paramètres avancés, activez la **vérification par somme de contrôle (checksum)** pour détecter toute corruption survenue pendant le transfert. Exécutez d'abord un **Dry Run** (simulation) — cela affiche un aperçu de la liste complète des fichiers à copier ou à supprimer avant tout déplacement réel, vous donnant une dernière occasion de repérer des suppressions inattendues ou des incohérences de chemin avant de valider.

## Suivre la progression et confirmer l'achèvement

L'onglet **Transferring** affiche la vitesse de transfert en direct, le nombre de fichiers traités et le volume total transféré pendant l'exécution de la tâche. Une fois terminé, le journal **Historique des tâches** enregistre chaque exécution avec l'heure de début, la durée écoulée, la taille transférée et le statut final.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Koofr to OneDrive migration progress in RcloneView" class="img-large img-center" />

Exécutez une seconde **Comparaison de dossiers** une fois la migration terminée et filtrez sur les fichiers « présents uniquement à gauche ». Si le nombre est nul, la migration est complète. S'il reste des fichiers, la vue de comparaison indique exactement lesquels, ce qui vous permet de relancer la tâche pour des sous-dossiers spécifiques plutôt que de migrer à nouveau l'ensemble des données.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Koofr via **onglet Remote > Nouveau Remote** et saisissez les identifiants de votre compte.
3. Ajoutez votre remote OneDrive via la connexion OAuth par navigateur — aucune gestion manuelle de jetons n'est nécessaire.
4. Utilisez la **Comparaison de dossiers** pour auditer la source et la destination, puis exécutez une synchronisation en Dry Run avant de valider la migration complète.

Migrer de Koofr vers OneDrive avec RcloneView vous offre une traçabilité complète — de la comparaison préalable à la migration jusqu'au journal d'historique des tâches — afin que vous puissiez confirmer avec certitude que chaque fichier est bien arrivé à destination.

---

**Guides connexes :**

- [Migrer de Koofr vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Migrer de Koofr vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)
- [Migrer de Box vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
