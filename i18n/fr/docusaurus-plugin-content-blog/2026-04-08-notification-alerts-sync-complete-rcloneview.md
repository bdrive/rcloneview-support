---
slug: notification-alerts-sync-complete-rcloneview
title: "Configurer les notifications et alertes pour la synchronisation cloud dans RcloneView"
authors:
  - tayson
description: "Configurez les notifications de bureau et les alertes distantes pour les tâches de synchronisation cloud dans RcloneView. Soyez averti à la fin, en cas d'échec ou d'erreur via Slack et Discord."
keywords:
  - rcloneview
  - sync notifications
  - cloud sync alerts
  - job completion notification
  - rclone desktop notification
  - slack cloud sync alert
  - discord sync notification
  - unattended transfer alerts
  - sync failure notification
  - cloud job monitoring
tags:
  - feature
  - automation
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Configurer les notifications et alertes pour la synchronisation cloud dans RcloneView

> Les transferts cloud volumineux peuvent durer des heures, et vous ne devriez pas avoir à les surveiller en permanence. **RcloneView** offre des fonctionnalités de notification et d'alerte pour que vous sachiez immédiatement quand une synchronisation se termine, échoue ou nécessite votre attention.

Les opérations de synchronisation cloud impliquent souvent des gigaoctets, voire des téraoctets de données. Une migration de Google Drive vers S3 peut prendre toute une après-midi. Une tâche de sauvegarde nocturne s'exécute pendant que vous dormez. Une synchronisation planifiée entre deux distants se déclenche pendant que vous êtes en réunion. Dans toutes ces situations, vous avez besoin d'un moyen fiable de savoir quand la tâche se termine et si elle a réussi.

Vérifier manuellement l'état des transferts est inefficace et source d'erreurs. Vous pourriez oublier de vérifier, ou vérifier trop tôt et penser que la tâche est toujours en cours alors qu'elle a en réalité échoué une heure plus tôt. Les notifications résolvent ce problème en vous envoyant les mises à jour de statut, plutôt que de vous obliger à les récupérer vous-même.

RcloneView prend en charge plusieurs canaux de notification, des alertes de bureau pour la surveillance locale aux intégrations distantes avec Slack et Discord pour les équipes et les alertes adaptées au mobile. Ce guide passe en revue chaque option et vous aide à construire un flux de notification adapté à vos besoins.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les notifications sont importantes pour la synchronisation cloud

Les transferts non surveillés sont l'un des principaux cas d'usage des outils de synchronisation cloud. Vous configurez une tâche, la démarrez, puis passez à autre chose. Mais sans notifications, vous n'avez aucun moyen de savoir :

- **Quand la tâche s'est terminée**, afin de pouvoir passer à l'étape suivante de votre flux de travail.
- **Si la tâche a réussi** ou a rencontré des erreurs nécessitant une intervention.
- **Combien de temps la tâche a pris**, ce qui vous aide à planifier les futurs transferts et fenêtres d'exécution.
- **Si la tâche a stagné** en raison de problèmes réseau, de limites de débit d'API ou d'expiration d'authentification.

Les notifications transforment la synchronisation cloud d'une tâche exigeant votre attention en un processus en arrière-plan qui ne vous interrompt qu'en cas de nécessité.

## Notifications de bureau à la fin d'une tâche

RcloneView peut afficher des notifications de bureau natives lorsqu'une tâche de synchronisation se termine. Ces notifications utilisent le système de notification intégré de votre système d'exploitation, elles apparaissent donc aux côtés de vos autres alertes :

- Sur **Windows**, les notifications apparaissent dans le Centre de notifications et sous forme de pop-up toast.
- Sur **macOS**, elles s'affichent dans le Centre de notifications.
- Sur **Linux**, elles utilisent le démon de notification de votre environnement de bureau.

Les notifications de bureau sont idéales pour les tâches que vous démarrez manuellement et que vous souhaitez surveiller localement. Vous pouvez continuer à travailler dans d'autres applications, et la notification apparaît lorsque la tâche est terminée.

La notification comprend des détails clés : le nom de la tâche, si elle s'est terminée avec succès, et un résumé des fichiers transférés. Si la tâche a échoué, la notification indique une erreur afin que vous puissiez enquêter immédiatement.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Intégration avec Slack pour les alertes distantes

Pour les équipes ou pour les utilisateurs souhaitant des notifications mobiles, RcloneView peut envoyer des alertes vers des canaux Slack. Ceci est particulièrement utile lorsque :

- Vous démarrez un transfert volumineux au bureau et souhaitez savoir quand il se termine après votre départ.
- Plusieurs membres de l'équipe ont besoin de visibilité sur des tâches de synchronisation partagées.
- Vous souhaitez un journal consultable de toutes les synchronisations terminées et échouées dans un canal dédié.

L'intégration Slack de RcloneView utilise des webhooks ou les fonctionnalités de contrôle à distance intégrées. Vous configurez une URL de webhook entrant Slack, et RcloneView publie un message dans le canal de votre choix chaque fois qu'une tâche se termine ou échoue.

Le message Slack comprend généralement le nom de la tâche, le statut (succès ou échec), le nombre de fichiers transférés, la taille totale des données et la durée. Les tâches en échec incluent des détails d'erreur pour vous aider à diagnostiquer le problème sans ouvrir RcloneView.

## Intégration avec Discord pour les alertes

L'intégration Discord fonctionne de manière similaire à Slack et est populaire auprès des utilisateurs individuels et des petites équipes. RcloneView peut publier des messages de statut de synchronisation dans un canal Discord via webhook :

1. Créez un webhook dans les paramètres de votre serveur Discord pour le canal cible.
2. Configurez les paramètres de contrôle à distance de RcloneView avec l'URL du webhook Discord.
3. Spécifiez quels événements de tâche doivent déclencher un message Discord (achèvement, échec, ou les deux).

Les notifications Discord sont particulièrement utiles pour les configurations de home lab, les sauvegardes personnelles de NAS vers le cloud, et tout scénario où vous souhaitez des notifications push mobiles sans payer pour un espace de travail Slack.

## Surveiller l'historique des tâches pour détecter les échecs

Même avec des notifications en temps réel, il est important de consulter l'historique des tâches périodiquement. Le panneau d'historique des tâches de RcloneView fournit un enregistrement complet de toutes les exécutions passées :

- **Statut succès/échec** pour chaque exécution, avec horodatage.
- **Statistiques de transfert**, incluant les fichiers transférés, ignorés et en erreur.
- **Détails d'erreur** pour les tâches en échec, avec suffisamment de contexte pour diagnostiquer la cause racine.
- **Tendances de durée**, qui vous aident à identifier une dégradation des performances dans le temps.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

Consulter l'historique des tâches chaque semaine permet de repérer les échecs intermittents qui pourraient ne pas être évidents à partir des notifications individuelles. Une tâche qui réussit 90 % du temps mais échoue silencieusement de temps en temps peut passer inaperçue si vous ne réagissez qu'aux alertes individuelles.

## Mettre en place des flux d'alerte

Un flux de notification robuste combine plusieurs canaux pour différents scénarios :

**Pour une attention immédiate (échecs de tâche) :**
- Activez les notifications de bureau pour tous les échecs de tâche.
- Envoyez les alertes d'échec vers un canal Slack ou Discord dédié.
- Cela garantit que vous voyez les échecs rapidement, que vous soyez ou non devant votre ordinateur.

**Pour une information générale (achèvement des tâches) :**
- Envoyez des résumés d'achèvement vers Slack ou Discord.
- N'utilisez les notifications de bureau que pour les tâches déclenchées manuellement.
- Cela évite la fatigue des notifications due aux synchronisations planifiées routinières.

**Pour un examen hebdomadaire :**
- Consultez le panneau d'historique des tâches pour examiner toutes les exécutions de la semaine passée.
- Recherchez des tendances : tâches plus longues que prévu, tâches avec échecs partiels, ou tâches ignorées.

## Combiner les notifications avec la planification des tâches

Les notifications deviennent particulièrement puissantes lorsqu'elles sont associées à des tâches planifiées. La fonction de planification de tâches de RcloneView vous permet d'exécuter des opérations de synchronisation automatiquement à des intervalles spécifiés :

1. Créez une tâche de synchronisation avec la source, la destination et la configuration souhaitées.
2. Définissez une planification (quotidienne, hebdomadaire, ou expression cron personnalisée).
3. Activez les notifications pour cette tâche.
4. Laissez le système fonctionner sans surveillance, et ne recevez des alertes que lorsque vous devez agir.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Cette combinaison crée un pipeline de synchronisation cloud entièrement automatisé. Les données se déplacent selon un planning, vous êtes averti si quelque chose ne va pas, et vous pouvez consulter l'historique complet à votre convenance. C'est la différence entre gérer le stockage cloud et laisser le stockage cloud se gérer lui-même.

## Résolution des problèmes de notification

Si les notifications n'apparaissent pas comme prévu, vérifiez ces problèmes courants :

- **Notifications de bureau désactivées au niveau du système d'exploitation** : Vérifiez que votre système d'exploitation autorise les notifications de RcloneView.
- **Erreurs d'URL de webhook** : Vérifiez que l'URL de votre webhook Slack ou Discord est correcte et que le webhook n'a pas été révoqué.
- **Pare-feu bloquant les requêtes sortantes** : Assurez-vous que RcloneView peut atteindre les points de terminaison d'API Slack ou Discord.
- **Tâche non configurée pour les notifications** : Vérifiez que la tâche spécifique a les notifications activées dans ses paramètres.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez une tâche de synchronisation et activez les notifications de bureau dans les paramètres de la tâche.
3. Pour les alertes distantes, configurez un webhook Slack ou Discord et connectez-le à RcloneView.
4. Exécutez une tâche de test pour vérifier que les notifications sont correctement délivrées.

Une fois les notifications configurées, vous pouvez démarrer des synchronisations cloud de longue durée en toute confiance, sachant que vous serez averti dès qu'elles se termineront ou si quelque chose ne va pas.

---

**Guides connexes :**

- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
