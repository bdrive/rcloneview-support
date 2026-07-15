---
sidebar_position: 2
description: "Découvrez comment exécuter automatiquement des tâches de synchronisation dans RcloneView grâce à des options de planification flexibles. Nécessite une licence Plus."
keywords:
  - rcloneview
  - planification de tâches
  - automatisation de synchronisation
  - synchronisation planifiée
  - rclone
  - gestionnaire de tâches
  - synchronisation cloud
  - planificateur de tâches
  - automatisation rclone
  - crontab
  - licence plus
  - synchronisation récurrente
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# Planification des tâches et exécution automatisée

La planification des tâches vous permet d'exécuter automatiquement des tâches de synchronisation à des heures et intervalles spécifiques.


:::important VOUS AVEZ BESOIN D'UNE LICENCE PLUS POUR PLANIFIER DES TÂCHES
Vous devrez acheter une [**licence PLUS**](https://rcloneview.com/src/pricing.html) pour activer cette fonctionnalité.
:::


## Configurer la planification des tâches

Vous pouvez configurer la planification lors de :

- La création d'une nouvelle tâche ([Étape 4 : Planification](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license))
- La modification d'une tâche existante pour ajouter une planification

## Ajouter ou modifier une tâche pour configurer la planification


Pour ouvrir le **`Gestionnaire de tâches`**, cliquez sur l'icône de la barre d'outils dans le menu Accueil.  
Ensuite, cliquez sur **`Ajouter une tâche`** ou **`Modifier la tâche`**, puis accédez à **l'Étape 4 : Planification**.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **Comment planifier une tâche**

1. Cochez la case intitulée **`Exécuter à chaque unité de temps ~`** pour activer la planification.
2. Définissez le calendrier de répétition souhaité à l'aide des champs Heure et Date.
3. Cliquez sur **`Simuler`** pour prévisualiser le moment où la tâche s'exécutera.
4. Après avoir confirmé que la planification est correcte, cliquez sur **`Enregistrer`**.

  Une fois enregistré, cliquez sur l'icône du calendrier <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> ou sur la **date planifiée** sous **`Planification à venir`** pour visualiser les horaires d'exécution configurés.

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>Comprendre les champs Heure et Date</summary>

Comprendre les champs Heure et Date

**La configuration de planification prend en charge les valeurs de type Crontab**, permettant une planification précise et flexible répondant à un large éventail de besoins des utilisateurs.

| Nom du champ    | Valeurs autorisées | Description                              |
| ---------------- | ------------------- | ---------------------------------------- |
| Minute            | 0-59                 | Minute de l'heure                         |
| Heure             | 0-23                 | Heure de la journée                       |
| Jour de la semaine | 0-6                | 0 = Dimanche, 1 = Lundi, …, 6 = Samedi   |
| Jour du mois      | 1-31                | Jour du mois                              |
| Mois               | 1-12                | 1 pour janvier, 2 pour février, etc.     |

**Formats acceptés :**

- **Valeur vide** : Correspond à chaque unité (par exemple, chaque minute si le champ Minute est vide).
- **n1, n2, ...** : Liste de valeurs (par exemple, 1,3,5 pour lundi, mercredi, vendredi).
- **n1-n2** : Plage de valeurs (par exemple, 0-2 signifie 0, 1, 2).
- **n1-n2/n3** : Plage avec pas (par exemple, 6-12/3 signifie 6, 9, 12).

Les champs — **Minute**, **Heure**, **Jour de la semaine**, **Jour du mois** et **Mois** — fonctionnent ensemble selon une logique **ET**. Cela signifie que la tâche ne s'exécutera que lorsque **toutes** les conditions sont remplies.

📌 Exemple : **Exécuter une tâche de synchronisation à 1h30 le premier dimanche de chaque mois**. 
Pour obtenir cette planification, configurez les champs suivants :

- **Heure (1h30) :**
    - **Minute :** 30
    - **Heure :** 1
    
- **Date (premier dimanche de chaque mois) :**
    - **Jour du mois :** 1-7 — correspond aux sept premiers jours du mois
    - **Jour de la semaine :** 0 — où 0 représente dimanche
    - **Mois :** _Laisser vide_ — s'applique à tous les mois

✅ Cette combinaison garantit que la tâche s'exécute **uniquement lorsque la date se situe dans la première semaine** et **tombe un dimanche**, ce qui la planifie effectivement pour le premier dimanche de chaque mois à 1h30.

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution RcloneView doit être en cours d'exécution pour les tâches planifiées
Pour que les tâches planifiées s'exécutent correctement, **RcloneView doit être en cours d'exécution** en arrière-plan.  
Si votre tâche est configurée pour utiliser un moteur `rclone` externe, assurez-vous que l'instance `rclone` externe est également active et en cours d'exécution à l'heure planifiée.  
:::

## Vérifier les résultats de la planification des tâches


### **Afficher l'historique d'exécution dans le Gestionnaire de tâches**

  
Vous pouvez vérifier à la fois l'heure de la dernière exécution (`Dernière exécution`) et la prochaine exécution planifiée (`Planification à venir`) dans la fenêtre **Gestionnaire de tâches**.

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
Pour afficher les détails de l'historique d'exécution de la tâche :

- Ouvrez le **Gestionnaire de tâches**.
- Cliquez sur l'**icône d'historique** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> pour ouvrir l'historique d'exécution de la tâche sélectionnée.
  

Dans la colonne **`Type d'exécution`**, les entrées marquées comme `Planifiée` indiquent que la tâche a été déclenchée automatiquement par le planificateur.

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info Vérifier les journaux pour plusieurs destinations  
Si votre tâche comprend plusieurs distants de destination, cliquez individuellement sur chaque onglet de destination dans la vue Historique pour consulter les détails des journaux de chaque cible.
:::


### Alarme de notification de fin (Windows)

Une fois la tâche terminée, une **fenêtre contextuelle de notification** apparaîtra dans la barre d'état système de Windows, affichant un résumé de l'opération de synchronisation.

  - Vous pouvez cliquer sur **`Voir les détails`** pour afficher un aperçu complet des résultats.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Voir les messages d'alarme dans les notifications Windows
Si vous manquez la fenêtre contextuelle, vous pouvez toujours consulter l'alerte de synchronisation en cliquant sur l'**icône de notification** dans la **barre d'état système de Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::
