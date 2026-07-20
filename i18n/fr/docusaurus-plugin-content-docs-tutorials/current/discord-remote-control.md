---
sidebar_position: 11
description: Utilisez le contrôle à distance Discord dans RcloneView pour recevoir des notifications de tâches et lister, démarrer, arrêter et vérifier l'état des tâches à distance depuis Discord.
keywords:
  - rcloneview
  - contrôle à distance discord
  - bot discord
  - notifications de tâches
  - contrôle de tâches à distance
  - gestionnaire de tâches rclone
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# Contrôle à distance Discord de RcloneView

Le contrôle à distance Discord vous permet de recevoir des notifications de tâches RcloneView et de contrôler les tâches directement depuis Discord — sans être assis devant votre PC.

Ce tutoriel couvre :

- La création d'une application et d'un bot Discord
- La définition du contexte d'installation sur **Guild Install**
- L'obtention des identifiants requis (Bot Token, Application ID, Discord User ID)
- L'activation du contrôle à distance Discord dans RcloneView
- L'utilisation des commandes Discord pour lister/démarrer/arrêter des tâches et vérifier leur état

---

## Qu'est-ce que le contrôle à distance Discord ?

Le contrôle à distance Discord est une fonctionnalité intégrée de RcloneView qui vous permet de :

- Recevoir des notifications en temps réel pour le démarrage, l'achèvement et les erreurs des tâches
- Lister les tâches enregistrées
- Démarrer une tâche à distance
- Arrêter une tâche en cours d'exécution
- Vérifier la progression et l'état d'une tâche à la demande

Tant que RcloneView est en cours d'exécution, vous pouvez gérer vos tâches cloud depuis votre client Discord.

---

## Prérequis

- RcloneView installé et en cours d'exécution (Desktop ou Headless)
- Un compte Discord
- La permission de créer et d'installer un bot Discord dans un serveur (Guild Install)
- Une connexion Internet

---

## Étape 1 : Créer une application et un bot Discord

### Étape 1-1 Ouvrir le Discord Developer Portal

1. Rendez-vous sur le [Discord Developer Portal](https://discord.com/developers/applications).
2. Cliquez sur **New Application** et nommez-la (par exemple, `RcloneView`).
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### Étape 1-2 Définir le contexte d'installation sur Guild Install

1. Dans le menu de gauche, ouvrez **Installation**.
2. Sous **Installation Contexts**, sélectionnez **Guild Install**. (Désactivez User Install s'il est activé.)
3. Enregistrez vos modifications.
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### Étape 1-3 Ajouter un bot et générer le Bot Token

1. Ouvrez l'onglet **Bot**.
2. Cliquez sur **Add Bot** et confirmez.
3. Cliquez sur **Reset Token** (ou **Copy Token**) pour obtenir votre **Discord Bot Token**. Gardez-le secret.
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### Étape 1-4 Autoriser le bot à lire les messages (recommandé)

Si vous prévoyez d'envoyer des commandes textuelles (au lieu de commandes slash), activez **MESSAGE CONTENT INTENT** dans l'onglet Bot afin que RcloneView puisse lire le texte de vos commandes dans les DM ou les canaux.
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## Étape 2 : Créer un serveur et installer le bot

Pour utiliser le bot, vous avez besoin d'un serveur Discord (aussi appelé « Guild ») où le bot peut résider. Si vous n'avez pas de serveur privé pour vos journaux RcloneView, suivez les étapes ci-dessous.

### Étape 2-1 Créer un nouveau serveur Discord

1. Ouvrez votre **application Discord** (Desktop ou Web).
2. Cliquez sur l'**icône plus (+)** (Add a Server) en bas de votre liste de serveurs à gauche.
3. Sélectionnez **Create My Own**.
4. Choisissez **For me and my friends**.
5. Donnez un nom à votre serveur (par exemple, `RcloneView Control Center`) et cliquez sur **Create**.
   

### Étape 2-2 Installer le bot sur votre serveur

1. Retournez sur le **Discord Developer Portal**.
2. Ouvrez **OAuth2 > URL Generator**.
3. Sélectionnez les scopes : **bot** et **applications.commands**.
4. Dans **Bot Permissions**, sélectionnez **Send Messages**, **Use Slash Commands**, et **Attach Files** (si vous souhaitez recevoir des fichiers journaux).
5. Copiez l'URL générée en bas de page et collez-la dans votre navigateur.
6. Sélectionnez le serveur que vous venez de créer (par exemple, `RcloneView Control Center`) et cliquez sur **Authorize**.

---

## Étape 3 : Récupérer les valeurs dont RcloneView a besoin

- **Discord Bot Token** : Depuis l'onglet **Bot** (Étape 1-3).
- **Discord Application ID** : Depuis **General Information** dans le Developer Portal.
- **My Discord User ID (Snowflake)** : Un long nombre qui vous identifie de manière unique.

### Comment obtenir votre Discord User ID

Pour obtenir votre `Discord User ID`, activez d'abord le mode développeur :

1. Ouvrez Discord (Desktop ou Web).
2. Cliquez sur **User Settings** (⚙️) en bas à gauche.
3. Dans **App Settings**, ouvrez **Advanced**.
4. Activez **Developer Mode** sur **On**.

Puis copiez votre ID :

1. Faites un clic droit sur votre **photo de profil** ou votre **nom d'utilisateur** (en bas à gauche ou dans une liste de discussion/membres).
2. Cliquez sur **Copy User ID**.
3. Enregistrez la longue chaîne numérique (exemple : `123456789012345678`).
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

Pourquoi cet ID est-il nécessaire ?

- Sécurité : seules les commandes provenant de votre compte sont traitées par l'application Flutter.
- Notifications directes : le bot sait exactement à quel utilisateur envoyer des DM lorsqu'une tâche démarre ou échoue.

---

## Étape 4 : Activer le contrôle à distance Discord dans RcloneView

### Étape 4-1 Ouvrir les paramètres

1. Lancez RcloneView.
2. Allez dans **Settings** -> **Interfaces & Notifications**.

### Étape 4-2 Saisir les identifiants

1. Activez **Discord Remote Control**.
2. Entrez :
   - **Discord Bot Token** : `...`
   - **Discord Application ID** : Depuis **General Information**.
   - **My Discord User ID** : `123456789012345678`

### Étape 4-3 Envoyer un message de test

Cliquez sur **Send Test Message**. En cas de succès, vous recevrez un DM du bot sur Discord.
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## Étape 5 : Commandes Discord (contrôle des tâches)

Envoyez des commandes au bot (le DM est recommandé pour la confidentialité, mais vous pouvez aussi utiliser un canal où le bot est présent et où vous avez la permission de l'exécuter).

### `/help`

Affiche toutes les commandes disponibles.

### `/joblist`

Liste les tâches de la connexion actuellement sélectionnée.

### `/start <jobName>`

Démarre une tâche spécifique par son nom.

### `/start #<number>` (Recommandé)

Démarre une tâche en utilisant l'index du dernier résultat `/joblist` (exemple : `/start #1`).

### `/stop <JobId>`

Arrête une tâche en cours d'exécution.

### `/jobstatus <JobId>`

Vérifie la progression en temps réel et les statistiques d'une tâche spécifique.

---

## Notifications automatiques de tâches

Une fois activé, RcloneView envoie automatiquement des notifications pour :

- Tâche démarrée
- Tâche terminée avec succès
- Tâche échouée avec une erreur

---

## Notes de sécurité

- Les commandes ne sont traitées que si elles proviennent du **Discord User ID** configuré.
- Gardez votre **Discord Bot Token** et **Application ID** privés.
- Si vous devez suspendre le contrôle à distance, désactivez simplement l'option dans les paramètres.

---

## Résumé

Le contrôle à distance Discord vous permet d'effectuer des transferts longue durée sans être devant votre PC :

- Gestion des tâches à distance depuis Discord
- Mises à jour d'état en temps réel via des notifications
- Contrôle instantané via Discord mobile ou desktop

Configurez-le une fois et gérez votre automatisation cloud depuis n'importe où.
