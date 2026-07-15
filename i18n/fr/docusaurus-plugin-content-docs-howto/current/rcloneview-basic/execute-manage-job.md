---
sidebar_position: 7
description: "Découvrez comment exécuter, surveiller et gérer des jobs de synchronisation avec le Gestionnaire de jobs de RcloneView, y compris le dry run, l'historique des jobs et les notifications."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# Exécuter et gérer un job

Cliquez sur la barre d'outils `Job Manager` dans le menu principal pour ouvrir le Gestionnaire de jobs.  

Sélectionnez le job que vous souhaitez exécuter, puis cliquez sur le bouton **`Run`** pour le lancer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>Description des champs </summary>

- `Job Name` : Nom du job. -> L'icône représente visuellement le sens de la synchronisation, de la source vers la destination. Lorsque le job comporte plusieurs destinations, une icône distincte est affichée pour chaque remote cible.  
- `Source` : Le dossier du stockage cloud distant qui sert de source.  
- `Destination` : Le dossier du stockage cloud distant qui sert de destination.   
- `Upcoming Schedule` : Affiche la prochaine heure programmée d'exécution de ce job. Si aucune planification n'est définie, il affiche **Unscheduled**.    
  ⚠️ _Cette fonctionnalité est disponible uniquement avec une licence PLUS._ Voir : [Comment configurer la planification des jobs](/howto/rcloneview-advanced/job-scheduling-and-execution). 
- `Last execution` : La dernière fois que ce job a été exécuté automatiquement via la planification.   
- `Created At` : La date et l'heure de création du job.  
- `History` : Ouvre l'historique d'exécution de ce job. Cliquer dessus ouvrira la fenêtre complète de l'historique.  

</details>

<details>
<summary>Barres d'outils pour gérer les jobs</summary>

Barres d'outils pour gérer les jobs

Après avoir sélectionné un job, vous pouvez le gérer à l'aide des options de la barre d'outils ci-dessous :

- **`Add Job`** : Crée et ajoute un nouveau job. [Voir : Comment créer un job](/howto/rcloneview-basic/create-sync-jobs)  
- **`Edit Job`** : Modifie le job sélectionné.
- **`Duplicate`** : Crée une copie du job sélectionné. 
  Le job dupliqué est automatiquement nommé avec un suffixe tel que (1), (2), …, (n).
  Vous pouvez ensuite utiliser Edit Job pour le personnaliser rapidement en tant que nouveau job basé sur l'original.  
- **`Delete`** : Supprime le job sélectionné.

</details>


:::tip 💡 Exporter et importer des jobs
Cliquez sur l'**icône des paramètres** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" /> en haut à droite du **Job Manager** pour exporter vos jobs actuels ou importer des jobs précédemment sauvegardés. Les jobs sont exportés et stockés dans un fichier nommé `rclone_jobs_~.json`    

:::
### Simuler : exécuter un dry run (optionnel)

Vous pouvez exécuter un **Dry run** pour simuler l'opération de synchronisation sans effectuer de modifications réelles.

Cliquez sur le bouton **`Dry run`** pour simuler la synchronisation sans effectuer de changements.

- Cet aperçu indique quels fichiers seront copiés vers la **Destination** et lesquels seront supprimés.
- Cliquez sur **`See details`** pour afficher la liste complète des opérations qui seraient effectuées (par ex. copie, création, suppression) dans la destination.
- Pour les jobs comportant plusieurs destinations, les résultats sont regroupés par destination, avec un bouton **`See details`** distinct pour chacune.

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## Surveiller les résultats d'exécution des jobs

Vous pouvez suivre en temps réel la progression et les résultats des opérations de synchronisation.

### Statut du transfert (en cours)

- Pendant la synchronisation, ouvrez l'onglet **`Transfer`** pour voir la progression en temps réel de chaque fichier.
- Cliquez sur l'icône **+** pour développer et suivre les transferts de fichiers individuels.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Jobs terminés (après exécution du job)

- Une fois la synchronisation terminée, allez dans l'onglet **`Completed`** pour consulter les résultats.
- Cliquez sur l'icône **+** pour voir le détail au niveau des fichiers de chaque job terminé.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Ouvrir rapidement les remotes synchronisés
Dans l'onglet **`Completed`**, vous pouvez double-cliquer sur n'importe quel job terminé pour ouvrir à la fois les dossiers source et destination dans le panneau Explorer.  
Cela facilite la vérification immédiate des dossiers synchronisés.
:::

### Alarme de notification de fin (Windows)

Une fois la synchronisation terminée, une notification s'affiche dans la barre d'état système de Windows, présentant un résumé de l'opération de synchronisation.

  - Vous pouvez cliquer sur **`See details`** pour afficher le détail complet des résultats.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Consulter les messages d'alarme sur la notification Windows
Si vous manquez la notification, vous pouvez toujours consulter l'alerte de synchronisation en cliquant sur l'**icône de notification** dans la **barre d'état système Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## Consulter l'historique des jobs


Depuis le **`Job Manager`**, cliquez sur l'icône **`History`** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> à côté d'un job pour consulter son journal d'exécution.

Si un job a été exécuté avec plusieurs destinations, chaque destination sera affichée dans un onglet distinct de l'historique.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>Description des champs</summary>

Description des champs


- `Execution Type` : 
	- Manual : Exécuté manuellement par l'utilisateur
	- Scheduled : Exécuté automatiquement par RcloneView 
- `Start Time` : Heure de démarrage du job   
- `Time Spent` : Durée totale de la synchronisation  
- `Status` : Résultat de l'exécution du job  
	- Completed : Réussi   
	- Errored : Échoué, avec messages d'erreur disponibles. 
- `Total Size` : Taille totale des données transférées
- `Speed` : Vitesse moyenne de transfert. 
- `Files` : Nombre de fichiers transférés. 
- `Job Type` : Actuellement Sync ; de futures mises à jour pourraient inclure Copy, Purge ou Batch jobs   
- `Delete` : Supprime l'entrée d'historique sélectionnée. 

</details>


<details>
<summary>Barres d'outils de filtrage et de suppression de l'historique</summary>

Barres d'outils de filtrage et de suppression de l'historique

Lorsqu'un grand nombre d'entrées d'historique s'accumulent, vous pouvez les filtrer ou les supprimer à l'aide des options de la barre d'outils.

- `From ~ To` : Sélectionnez une plage de dates personnalisée à l'aide du calendrier pour afficher l'historique sur cette période.  
- `Today` : Affiche uniquement les entrées d'historique du jour.  
- `Yesterday` : Affiche les entrées d'historique datant d'exactement un jour.  
- `Last week` : Affiche l'historique des 7 derniers jours.
- `Last month` : Affiche l'historique des 30 derniers jours.
- `Delete all` : - Supprime définitivement toutes les entrées d'historique.   ⚠️ _Cette action est irréversible. Veuillez procéder avec prudence._

</details>



