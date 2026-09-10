---
slug: telegram-bot-notifications-rcloneview
title: "Notifications par bot Telegram — Alertes de synchronisation cloud en direct dans RcloneView"
authors:
  - casey
description: "Configurez des alertes par bot Telegram dans RcloneView pour recevoir instantanément des notifications de statut des tâches de synchronisation, sauvegarde et transfert cloud sur votre téléphone."
keywords:
  - rcloneview telegram
  - notifications par bot telegram
  - alertes de synchronisation cloud
  - intégration rclone telegram
  - notification de fin de tâche
  - alertes mobiles de synchronisation cloud
  - configuration du chat id telegram
  - notifications de synchronisation en arrière-plan
  - surveillance des tâches distantes
  - alertes de sauvegarde cloud
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Notifications par bot Telegram — Alertes de synchronisation cloud en direct dans RcloneView

> Arrêtez de revenir sur le bureau pour vérifier un transfert — laissez un message Telegram vous prévenir dès qu'une tâche de synchronisation cloud se termine, échoue ou nécessite votre attention.

Les tâches cloud de longue durée se terminent rarement pendant que vous êtes assis devant l'écran. Une sauvegarde de plusieurs centaines de gigaoctets vers Backblaze B2 peut tourner toute la nuit ; une synchronisation planifiée entre deux distants peut se déclencher pendant votre trajet. **RcloneView** intègre une connexion à un bot Telegram dans ses paramètres Notification & Remote Control, afin que les mises à jour de statut des tâches arrivent sur votre téléphone à l'instant même où quelque chose se produit, au lieu que vous ayez à aller vérifier.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Telegram vaut mieux qu'une vérification manuelle

Les notifications de bureau sont utiles quand vous êtes devant votre machine, mais elles disparaissent dès que vous vous éloignez. Les notifications Telegram résolvent un autre problème : elles vous suivent. Que vous soyez loin de votre bureau, en déplacement, ou simplement en train d'utiliser une autre application sur un autre appareil, un message Telegram arrive de la même façon qu'un SMS.

C'est particulièrement important pour les flux de travail sans surveillance — sauvegardes nocturnes, synchronisations planifiées entre un NAS et un stockage cloud, ou grandes migrations ponctuelles lancées avant de quitter le bureau. Contrairement aux outils de montage seul, RcloneView synchronise et compare également les dossiers avec la licence FREE, et combiner cela avec un canal d'alerte mobile signifie que vous pouvez faire confiance aux tâches en arrière-plan sans avoir à les surveiller en permanence.

<img src="/support/images/en/blog/new-remote.png" alt="Écran de configuration des distants et des tâches dans RcloneView" class="img-large img-center" />

## Configurer le bot Telegram dans RcloneView

Pour que les alertes fonctionnent, deux informations sont nécessaires : un jeton de bot et un identifiant de discussion.

1. **Créer un bot.** Sur Telegram, envoyez un message à `@BotFather`, exécutez `/newbot` et suivez les instructions. BotFather vous renvoie un jeton de bot — copiez-le.
2. **Obtenir votre identifiant de discussion.** Envoyez n'importe quel message à votre nouveau bot, puis consultez le flux de mises à jour du bot (ou utilisez un petit bot d'assistance comme `@getidsbot`) pour trouver votre identifiant de discussion numérique.
3. **Saisir les deux valeurs dans RcloneView.** Ouvrez l'onglet Settings > Notification & Remote Control, sélectionnez Telegram, puis collez le jeton de bot et l'identifiant de discussion.
4. **Enregistrer et tester.** Déclenchez une tâche manuellement pour confirmer que le message arrive bien.

Une fois configuré, RcloneView publie les mises à jour de statut des tâches — réussite, échec, ou les deux selon la façon dont vous configurez le déclencheur — directement dans cette discussion.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Création d'une tâche planifiée dans RcloneView" class="img-large img-center" />

## Associer les alertes Telegram aux tâches planifiées

Les notifications Telegram prennent toute leur valeur lorsqu'elles sont associées à la planification des tâches de RcloneView. Configurez une tâche de synchronisation ou de sauvegarde selon un planning de type crontab, activez le déclencheur Telegram, et la tâche devient totalement autonome : elle s'exécute à l'heure prévue, et vous n'avez qu'à jeter un œil à votre téléphone pour confirmer le résultat.

Pour les tâches que vous exécutez manuellement, la même alerte se déclenche au moment même où le transfert se termine — pratique pour les grandes migrations ponctuelles où vous ne voulez pas laisser un onglet de navigateur ou une fenêtre de terminal ouverts juste pour surveiller une barre de progression.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Panneau Job History de RcloneView montrant les exécutions passées" class="img-large img-center" />

Si une alerte Telegram signale un échec, le panneau Job History vous donne une vue d'ensemble complète — détails de l'erreur, durée du transfert et nombre de fichiers terminés avant l'arrêt de la tâche.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez un bot Telegram via `@BotFather` et notez le jeton de bot.
3. Ouvrez Settings > Notification & Remote Control et saisissez votre jeton de bot et votre identifiant de discussion.
4. Associez la notification à une tâche — planifiée ou ponctuelle — et lancez un test pour confirmer la livraison.

Une fois Telegram connecté, la synchronisation cloud sans surveillance cesse d'être un acte de foi et devient quelque chose que vous pouvez vérifier de n'importe où.

---

**Guides associés :**

- [Configurer les notifications et alertes pour la synchronisation cloud dans RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Automatiser la synchronisation cloud avec les notifications Slack](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)
- [Notifications de tâches par e-mail SMTP](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
