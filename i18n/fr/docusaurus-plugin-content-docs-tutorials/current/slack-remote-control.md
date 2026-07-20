---

sidebar_position: 10
description: "Utilisez le contrôle à distance Slack dans RcloneView pour recevoir des notifications de tâches et lister, démarrer, arrêter et vérifier l'état des tâches à distance depuis Slack."
keywords:
  - rcloneview
  - contrôle à distance slack
  - bot slack
  - notifications de tâches
  - contrôle de tâches à distance
  - gestionnaire de tâches rclone
tags:
  - RcloneView
  - Tutorial
  - Slack
  - Remote-Control
  - Job-Management
date: 2026-01-19
author: steve

---

# Contrôle à distance Slack de RcloneView

Le contrôle à distance Slack vous permet de recevoir des notifications de tâches RcloneView et de contrôler vos tâches directement depuis Slack — sans être devant votre PC.

Ce tutoriel couvre :

* La création d'une application Slack (via un App Manifest)
* L'émission des jetons requis (App Token et Bot Token)
* La recherche de votre identifiant de membre Slack
* L'activation du contrôle à distance Slack dans RcloneView
* L'utilisation des commandes Slack pour lister, démarrer, arrêter les tâches et vérifier leur statut

---

## Qu'est-ce que le contrôle à distance Slack ?

Le contrôle à distance Slack est une fonctionnalité intégrée à RcloneView qui vous permet de :

* Recevoir des notifications en temps réel pour le démarrage, l'achèvement et les erreurs des tâches
* Lister les tâches enregistrées
* Démarrer une tâche à distance
* Arrêter une tâche en cours d'exécution
* Vérifier la progression et le statut des tâches à la demande

Tant que RcloneView est en cours d'exécution, vous pouvez gérer vos tâches cloud simplement avec l'application mobile Slack.

---

## Prérequis

* RcloneView installé et en cours d'exécution (Desktop ou Headless)
* Un compte et un espace de travail Slack
* Une connexion Internet

---

## Étape 1 : Créer une application Slack (App Manifest)

Pour une configuration rapide et fiable, nous utilisons la méthode « App Manifest » pour créer votre bot.

### 1-1 Ouvrir le tableau de bord de l'API Slack

1. Rendez-vous sur le [tableau de bord de l'API Slack](https://api.slack.com/apps).
2. Cliquez sur le bouton **Create New App**.

### 1-2 Créer à partir d'un manifest

1. Sélectionnez l'option **From an app manifest**.
2. Sélectionnez le **Workspace** dans lequel vous souhaitez installer l'application.
3. Sélectionnez l'onglet **JSON** et collez le code de configuration suivant :

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
                "description": "Starts a job (Enter number or name)",
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

4. Cliquez sur **Next**, puis sur **Create** pour terminer.

---

## Étape 2 : Émettre et enregistrer les jetons

RcloneView nécessite deux types de jetons. **Traitez-les comme des mots de passe.**

### 2-1 Émettre l'App Token (pour le Socket Mode)

1. Cliquez sur **Basic Information** dans le menu de gauche.
2. Dans la section **App-Level Tokens**, cliquez sur **Generate Token and Scopes**.
3. Nommez le jeton `RcloneView`, ajoutez le scope `connections:write`, puis générez-le.
4. Enregistrez le jeton commençant par **`xapp-`**.

### 2-2 Obtenir le Bot Token

1. Cliquez sur **Install App** dans le menu de gauche.
2. Cliquez sur **Install to Workspace**, puis sur **Allow**.
3. Copiez le **Bot User OAuth Token** commençant par **`xoxb-`**.

---

### Étape 3 : Activer l'onglet Messages

1. Cliquez sur **App Home** dans le menu de gauche.
2. Activez `Messages Tab`.
3. Cochez `Allow users to send Slash commands and messages from the messages tab`.

Cela vous permettra d'envoyer des commandes slash directement à votre bot.

---

## Étape 4 : Trouver votre identifiant de membre Slack

Le bot a besoin de votre identifiant unique pour savoir quel utilisateur doit recevoir les notifications.

1. Ouvrez Slack, cliquez sur votre **photo de profil**, puis sélectionnez **Profile**.
2. Cliquez sur le bouton **More(···)** et sélectionnez **Copy member ID**.
3. Enregistrez l'identifiant (par exemple, `U1234567890`).
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />

---

## Étape 5 : Activer le contrôle à distance Slack dans RcloneView

### 5-1 Ouvrir les paramètres

1. Lancez RcloneView.
2. Allez dans **Settings** -> **Interfaces & Notifications**.

### 5-2 Saisir les identifiants

1. Activez **Slack Remote Control**.
2. Saisissez vos jetons et votre identifiant :
* **Slack App Token** : `xapp-...`
* **Slack Bot Token** : `xoxb-...`
* **My Member ID** : `U...`

### 5-3 Envoyer un message de test

Cliquez sur **Send Test Message**. En cas de succès, vous recevrez un message sur votre téléphone.

---

## Étape 6 : Commandes Slack (contrôle des tâches)

Saisissez ces commandes dans n'importe quel chat où le bot est installé.

### `/help`

Affiche toutes les commandes disponibles.

### `/joblist`

Liste les tâches de la connexion actuellement sélectionnée.

### `/start <jobName>`

Démarre une tâche spécifique par son nom.

### `/start #<number>` (Recommandé)

Démarre une tâche en utilisant l'index issu du dernier résultat de `/joblist` (par exemple, `/start #1`).

### `/stop <JobId>`

Arrête une tâche en cours d'exécution.

### `/jobstatus <JobId>`

Vérifie la progression et les statistiques en temps réel d'une tâche spécifique.

---

## Notifications automatiques de tâches

Une fois activé, RcloneView envoie automatiquement des notifications pour :

* Le démarrage d'une tâche
* La réussite d'une tâche
* L'échec d'une tâche avec une erreur

---

## Remarques de sécurité

* Les commandes ne sont traitées que si elles proviennent du **Member ID** configuré.
* Gardez votre **App Token** et votre **Bot Token** privés.
* Si vous devez suspendre le contrôle à distance, désactivez simplement l'interrupteur dans les paramètres.

---

## Résumé

Le contrôle à distance Slack rend la gestion des tâches cloud longues bien plus efficace :

* Gestion des tâches à distance, quel que soit l'endroit où vous vous trouvez
* Mises à jour de statut en temps réel via les notifications
* Contrôle instantané depuis mobile, sans PC

Configurez-le une fois et profitez dès aujourd'hui d'un environnement d'automatisation cloud plus intelligent !
