---
slug: rcloneview-telegram-remote-control
title: "Contrôle à distance RcloneView via Telegram : gérez vos tâches cloud depuis votre téléphone"
authors:
  - tayson
description: "Recevez des alertes instantanées sur vos tâches et démarrez, arrêtez ou vérifiez les tâches RcloneView directement depuis Telegram grâce à un bot sécurisé et quelques commandes simples."
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Contrôle à distance RcloneView via Telegram : gérez vos tâches cloud depuis votre téléphone

> Transformez RcloneView en console chatops : recevez des alertes de tâches, listez-les, démarrez-les ou arrêtez-les depuis Telegram, même lorsque vous êtes loin de votre PC.

Avec le contrôle à distance Telegram, RcloneView envoie sur votre téléphone des alertes de démarrage, de complétion et d'erreur des tâches, et accepte de simples commandes de chat pour exécuter ou arrêter des tâches. C'est parfait pour les sauvegardes longues, les synchronisations nocturnes ou les serveurs headless où vous souhaitez tout de même garder un contrôle rapide.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Ce que vous pouvez faire depuis Telegram

- Recevoir des notifications : tâche démarrée, tâche terminée, erreur de tâche.
- Lister les tâches disponibles.
- Démarrer des tâches par nom ou par index.
- Arrêter des tâches en cours d'exécution.
- Vérifier la progression et le statut d'une tâche à la demande.

RcloneView doit être en cours d'exécution (bureau ou headless) pour traiter les commandes Telegram.

## Prérequis

- RcloneView installé et en cours d'exécution.
- Un compte Telegram.
- Une connexion Internet.
- L'autorisation de créer un bot Telegram (via BotFather).

## Créer votre bot Telegram (BotFather)

1. Ouvrez Telegram, recherchez **BotFather**, puis ouvrez la discussion.  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. Créez le bot : définissez un **Bot Name** (nom du bot) et un **Bot Username** (nom d'utilisateur du bot) se terminant par `bot`.  
   Exemple : `RcloneView_test_bot` / `rcloneview_test_bot`.  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. Copiez le **Bot Token** affiché par BotFather. Gardez-le secret : RcloneView en a besoin pour la configuration.  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## Démarrez votre bot (important)

Vous devez démarrer le bot une fois pour que Telegram puisse renvoyer les mises à jour de votre discussion.

1. Recherchez votre bot par son nom ou son nom d'utilisateur et ouvrez la discussion.  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. Appuyez sur **Start** (ou envoyez `/start`), puis envoyez un message supplémentaire (par exemple, `hi`).  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## Trouver votre Chat ID Telegram

1. Dans un navigateur, ouvrez :  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. Dans la réponse JSON, notez le nombre dans `chat.id` (exemple : `987654321`). C'est votre Chat ID.  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution Gardez vos jetons privés
Traitez le Bot Token et le Chat ID comme des mots de passe. Seul le Chat ID configuré est autorisé à contrôler les tâches.
:::

## Activer le contrôle à distance Telegram dans RcloneView

1. Ouvrez **Settings -> Interfaces & Notifications**.
2. Activez **Telegram Remote Control**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. Saisissez votre **Bot Token** et votre **Chat ID**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. Cliquez sur **Send Test Message**. Vous devriez recevoir : `RcloneView Telegram Test Message`.  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## Guide des commandes (chatops pour les tâches)

Utilisez celles-ci dans la discussion avec le bot :

- `/help` - Afficher toutes les commandes.  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - Lister les tâches de la connexion actuelle.  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - Démarrer une tâche par son nom exact.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>` (recommandé) - Démarrer par index de liste à partir du dernier `/listjobs`.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - Arrêter une tâche en cours d'exécution.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - Vérifier la progression et la taille transférée.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## Pourquoi c'est important pour l'automatisation

- Transferts nocturnes ou longs : soyez alerté et redémarrez ou arrêtez sans avoir à vous connecter en VPN à la machine.
- Sauvegardes planifiées : confirmez immédiatement le succès ou l'échec et relancez depuis votre téléphone.
- Tâches multi-cloud : gardez une tour de contrôle unifiée même lorsque vous n'êtes pas devant la console.
- Réponse aux incidents plus rapide : arrêtez les tâches incontrôlées, replanifiez, ou basculez rapidement vers un autre préréglage.

## Conseils de sécurité

- Seul le Chat ID configuré peut exécuter des commandes.
- Faites tourner votre Bot Token s'il est un jour exposé.
- Désactivez le contrôle à distance Telegram dans les paramètres si vous n'avez temporairement pas besoin de commandes à distance.

## Ressources associées

- [Comment utiliser le contrôle à distance Telegram (tutoriel)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [Créer et gérer des tâches](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Suivi des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Utiliser le terminal intégré](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## Conclusion

Telegram transforme RcloneView en un centre de commande mobile : vous restez informé, vous pouvez démarrer ou arrêter des tâches instantanément, et vous réagissez plus vite en cas d'échec. Configurez-le une fois, gardez le jeton en sécurité, et exécutez vos automatisations cloud en toute confiance, même loin de votre bureau.

<CloudSupportGrid />
