---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "Migrer de Jottacloud vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Guide pas à pas pour migrer tous vos fichiers Jottacloud vers Microsoft OneDrive avec RcloneView. Déplacez toute votre bibliothèque sans aucun outil en ligne de commande."
keywords:
  - jottacloud to onedrive migration
  - transfer jottacloud to onedrive
  - migrate jottacloud to onedrive
  - cloud to cloud transfer gui
  - jottacloud migration tool
  - onedrive cloud migration
  - rcloneview jottacloud onedrive
  - cloud storage migration guide
tags:
  - RcloneView
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Jottacloud vers OneDrive — Transférer des fichiers avec RcloneView

> Déplacez toute votre bibliothèque Jottacloud vers Microsoft OneDrive sans toucher à la ligne de commande — RcloneView gère le transfert de cloud à cloud avec un suivi complet de la progression et une vérification de l'intégrité des fichiers.

De nombreuses équipes passent de Jottacloud à OneDrive lors d'une consolidation autour de Microsoft 365, gagnant ainsi une intégration plus étroite avec les applications Office et un outillage d'entreprise plus large. Le défi consiste à transférer des années de fichiers avec précision et à grande échelle. Le moteur de tâches cloud à cloud de RcloneView vous permet de mapper les deux distants, d'exécuter une copie vérifiée et de confirmer l'exhaustivité grâce à une comparaison de dossiers intégrée — le tout depuis une seule interface graphique, sans fichier de configuration rclone à modifier manuellement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Jottacloud et OneDrive en tant que distants

Ouvrez RcloneView et accédez à l'onglet **Remote**, puis cliquez sur **New Remote**. Sélectionnez Jottacloud dans la liste des fournisseurs et suivez les invites de configuration à l'écran pour authentifier votre compte.

Ensuite, ajoutez un second distant pour OneDrive. OneDrive utilise l'OAuth basé sur le navigateur — RcloneView ouvrira automatiquement votre navigateur par défaut pour la connexion au compte. Une fois autorisée, la connexion est enregistrée dans votre configuration rclone et immédiatement accessible dans les panneaux Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

Une fois les deux distants connectés, ouvrez-les côte à côte à l'aide de l'Explorer à double panneau de RcloneView. Faites un clic droit sur votre dossier source et choisissez **Get Size** pour confirmer le volume total de données avant de commencer — cela vous donne une base de référence claire pour la migration et vous aide à repérer les écarts inattendus après le transfert.

## Créer une tâche de copie dans Job Manager

Accédez à **Home → Job Manager**, puis cliquez sur **Add Job**. Définissez votre racine Jottacloud (ou sous-dossier) comme source et le dossier OneDrive cible comme destination. Choisissez **Copy** comme type de tâche pour la migration initiale — cela préserve les fichiers source intacts tout en peuplant OneDrive sans toucher à l'origine.

À l'étape 2 de l'assistant, augmentez **Number of file transfers** pour transférer plusieurs fichiers simultanément ; cela réduit considérablement le temps total de migration pour les grandes bibliothèques. Activez **Enable checksum** afin que chaque fichier transféré soit vérifié par hachage et par taille, et pas seulement par nom de fichier — essentiel pour une migration ponctuelle où toute corruption silencieuse des données doit être détectée avant de désactiver la source.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

Avant l'exécution réelle, cliquez sur **Dry Run** pour prévisualiser les fichiers qui seront copiés. Pour une archive de projet avec des milliers de dossiers imbriqués, cette étape de prévisualisation fait apparaître les problèmes de longueur de chemin et les fichiers trop volumineux avant qu'ils ne causent des échecs en cours de transfert.

## Suivre la progression et la vitesse de transfert

Une fois la tâche lancée, l'onglet **Transferring** dans la vue d'informations en bas affiche la progression en temps réel : noms de fichiers individuels, vitesse de transfert, total d'octets déplacés et compteur de fichiers en cours. Vous pouvez annuler la tâche à tout moment sans corrompre les fichiers déjà transférés — le moteur rclone sous-jacent de RcloneView gère proprement les transferts partiels, et une tâche de copie reprise ignore les fichiers déjà présents à la destination avec la même taille et le même checksum.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

Pour les très grandes migrations exécutées pendant la nuit, utilisez la barre système pour laisser RcloneView fonctionner en arrière-plan. Des notifications de fin de tâche vous alerteront lorsque le transfert sera terminé.

## Vérifier l'exhaustivité avec Folder Compare

Une fois la tâche de copie terminée, ouvrez **Folder Compare** depuis l'onglet Home. Définissez le panneau gauche sur votre source Jottacloud et le panneau droit sur la destination OneDrive. RcloneView analyse les deux côtés et met en évidence les fichiers présents uniquement à gauche qui n'ont pas été transférés, les fichiers de taille différente qui pourraient avoir été corrompus, ainsi que tout fichier présent uniquement à droite.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

Utilisez **Copy Right** pour les fichiers restants présents uniquement à gauche afin de terminer le transfert. Lorsque la comparaison ne montre plus aucune entrée présente uniquement à gauche ou de taille différente, votre contenu Jottacloud est entièrement et fidèlement reflété sur OneDrive — prêt pour les flux de travail Microsoft 365.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre compte Jottacloud via l'onglet Remote → New Remote et suivez les invites.
3. Ajoutez votre compte OneDrive via l'onglet Remote → New Remote (connexion OAuth via navigateur).
4. Créez une tâche de copie dans Job Manager, activez le checksum et lancez d'abord un Dry Run.
5. Après le transfert, ouvrez Folder Compare pour confirmer l'absence de fichiers présents uniquement à gauche ou de fichiers différents.

Une migration propre de Jottacloud vers OneDrive est réalisable en une seule session — sans script, sans surprise, et avec un résultat vérifié auquel vous pouvez faire confiance avant de désactiver la source.

---

**Guides connexes :**

- [Gérer le stockage cloud Jottacloud — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrer de Jottacloud vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Gérer le stockage cloud OneDrive — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
