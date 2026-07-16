---
slug: rcloneview-slack-remote-control
title: "Contrôle à distance RcloneView via Slack : gérez vos tâches cloud depuis votre téléphone"
authors:
  - steve
description: "Recevez des alertes de tâches instantanées et démarrez, arrêtez ou vérifiez les tâches RcloneView directement depuis Slack grâce à une application sécurisée et de simples commandes slash."
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# Contrôle à distance RcloneView via Slack : gérez vos tâches cloud depuis votre téléphone

> Transformez RcloneView en console chatops : recevez des alertes de tâches, listez vos tâches, démarrez-les ou arrêtez-les depuis Slack, même lorsque vous êtes loin de votre PC.

Avec le contrôle à distance via Slack, RcloneView envoie sur votre téléphone des alertes de démarrage, de fin et d'erreur de tâche, et accepte de simples commandes slash pour exécuter ou arrêter des tâches. C'est idéal pour les sauvegardes longues, les synchronisations nocturnes ou les serveurs distants pour lesquels vous souhaitez tout de même un contrôle rapide depuis votre mobile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que vous pouvez faire depuis Slack

- **Notifications en temps réel** : soyez alerté immédiatement lorsqu'une tâche démarre, se termine ou rencontre une erreur.
- **Liste des tâches** : consultez toutes vos tâches RcloneView enregistrées dans une liste claire.
- **Contrôle des tâches à distance** : démarrez des tâches par nom ou par index (#N), ou arrêtez-les instantanément.
- **Statut à la demande** : vérifiez à tout moment la progression, la vitesse de transfert et le temps restant estimé.

*Remarque : RcloneView doit être en cours d'exécution sur votre PC ou serveur pour traiter les commandes Slack.*

## Prérequis

- RcloneView installé et en cours d'exécution (Desktop ou Headless).
- Un compte Slack et votre propre espace de travail.
- Une connexion Internet.

---

## Étape 1 : créer votre application Slack (via un manifeste)

Pour une sécurité maximale, RcloneView utilise une approche « application privée » où vous créez vous-même votre bot. Cela garantit que vos données ne transitent jamais par des serveurs tiers : elles vont directement de votre PC à Slack.

1. Rendez-vous sur le [tableau de bord de l'API Slack](https://api.slack.com/apps) et cliquez sur **[Create New App]**.
   
2. Sélectionnez **[From a manifest]**.
   
3. Sélectionnez le **Workspace** dans lequel vous souhaitez installer l'application, puis cliquez sur **[Next]**.
4. Sélectionnez l'onglet **[JSON]**, supprimez le contenu existant et collez le code ci-dessous :

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Start a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

5. Cliquez sur **[Next]**, puis sur **[Create]** pour terminer la création de votre application.

---

## Étape 2 : obtenir vos jetons (tokens)

Vous avez besoin de deux types de jetons pour la configuration de RcloneView. **Traitez-les comme des mots de passe et ne les partagez jamais avec personne.**

### ① Obtenir le jeton d'application (pour le Socket Mode)

1. Dans le menu de gauche, allez dans **[Basic Information]**.
2. Faites défiler jusqu'à la section **[App-Level Tokens]** et cliquez sur **[Generate Token and Scopes]**.
3. Nommez-le `RcloneView`, cliquez sur **[Add Scope]**, sélectionnez `connections:write`, puis cliquez sur **[Generate]**.
4. Copiez le jeton commençant par `xapp-...` et enregistrez-le.

### ② Obtenir le jeton du bot (pour la messagerie)

1. Dans le menu de gauche, allez dans **[Install App]**.
2. Cliquez sur le bouton vert **[Install to Workspace]** puis sur **[Allow]**.
3. Copiez le **Bot User OAuth Token** commençant par `xoxb-...` et enregistrez-le.

---

### Étape 3 : activer l'onglet Messages

1. Cliquez sur **App Home** dans le menu de gauche.
2. Activez `Messages Tab`.
3. Cochez `Allow users to send Slash commands and messages from the messages tab`.

Cela permettra d'envoyer des commandes slash directement à votre bot.

---

## Étape 4 : trouver votre Member ID

Le bot a besoin de votre identifiant unique pour savoir à quel utilisateur envoyer les notifications (DM).

1. Ouvrez votre application Slack, cliquez sur votre photo de profil et sélectionnez **[Profile]**.
2. Cliquez sur le bouton **[More (···)]**.
3. Sélectionnez **[Copy member ID]** en bas du menu. (Exemple : `U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## Étape 5 : activer le contrôle à distance Slack dans RcloneView

1. Ouvrez RcloneView et allez dans **Settings -> Interfaces & Notifications**.
2. Activez l'interrupteur **Slack Remote Control**.
3. Renseignez votre **App Token**, votre **Bot Token** et votre **Member ID** dans les champs correspondants.
4. Cliquez sur **[Send Test Message]** pour vérifier que vous recevez bien un message sur votre téléphone.

---

## ⌨️ Guide des commandes (ChatOps)

Saisissez ces commandes dans n'importe quelle conversation où le bot est présent :

* `/help` - Afficher toutes les commandes disponibles.
* `/joblist` - Lister toutes les tâches enregistrées pour la connexion actuelle.
* `/start <jobName>` - Démarrer une tâche par son nom exact.
* `/start #<number>` - Démarrer une tâche en utilisant son index issu de `/joblist` (par exemple, `/start #1`).
* `/stop <JobId>` - Arrêter une tâche en cours à l'aide de son Job ID.
* `/jobstatus <JobId>` - Vérifier la progression en temps réel et les statistiques d'une tâche spécifique.

---

## Conseils de sécurité et de gestion

* **Identification de l'utilisateur** : seul le Member ID configuré est autorisé à exécuter des commandes.
* **Rotation des jetons** : si vos jetons sont un jour exposés, rendez-vous sur la page de l'API Slack et cliquez immédiatement sur `Regenerate`.
* **Statut hors ligne** : si RcloneView n'est pas en cours d'exécution, le bot Slack ne répondra pas aux commandes.

## Ressources associées

* [Guide de base RcloneView](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [Planification et automatisation des tâches](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [Suivi des transferts en temps réel](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Pour conclure

Slack transforme RcloneView en centre de commande mobile : vous restez informé, vous pouvez démarrer ou arrêter des tâches instantanément, et vous réagissez plus vite en cas d'échec. Configurez-le une seule fois, gardez vos jetons en sécurité, et gérez votre automatisation cloud en toute confiance, même loin de votre bureau.

<CloudSupportGrid />
