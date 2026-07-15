---
sidebar_position: 9
description: Utilisez le contrôle à distance Telegram dans RcloneView pour recevoir des notifications de tâches et lister, démarrer, arrêter et vérifier l'état des tâches à distance depuis Telegram.
keywords:
  - rcloneview
  - contrôle à distance telegram
  - bot telegram
  - notifications de tâches
  - contrôle de tâches à distance
  - gestionnaire de tâches rclone
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# Contrôle à distance Telegram RcloneView

Le contrôle à distance Telegram vous permet de recevoir les notifications de tâches RcloneView et de contrôler les tâches directement depuis Telegram — sans être assis devant votre PC.

Ce tutoriel couvre :

- La création d'un bot Telegram (BotFather)
- La recherche de votre identifiant de discussion (Chat ID) Telegram
- L'activation du contrôle à distance Telegram dans RcloneView
- L'utilisation des commandes Telegram pour lister/démarrer/arrêter des tâches et vérifier leur état
- Des exemples pratiques et des notes de sécurité

---

## Qu'est-ce que le contrôle à distance Telegram ?

Le contrôle à distance Telegram est une fonctionnalité intégrée de RcloneView qui vous permet de :

- Recevoir des notifications de démarrage/achèvement/erreur de tâche
- Lister les tâches
- Démarrer une tâche à distance
- Arrêter une tâche en cours
- Vérifier la progression/l'état d'une tâche

Si RcloneView est en cours d'exécution, vous pouvez gérer vos tâches avec simplement votre téléphone.

---

## Prérequis

- RcloneView installé et en cours d'exécution
- Un compte Telegram
- Une connexion Internet
- L'autorisation de créer un bot Telegram (via BotFather)

---

## Étape 1 Créer un bot Telegram (BotFather)

### Étape 1-1 Ouvrir BotFather

1. Ouvrez Telegram.
2. Recherchez **BotFather**.
3. Ouvrez la discussion avec BotFather.

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### Étape 1-2 Créer un nouveau bot

Utilisez BotFather pour créer un nouveau bot et définir :

- **Nom du bot** (nom d'affichage)
- **Nom d'utilisateur du bot** (doit se terminer par `bot`)

Exemple :

- Nom du bot : `RcloneView_test_bot`
- Nom d'utilisateur du bot : `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### Étape 1-3 Enregistrer votre jeton de bot (Important)

Une fois le bot créé, BotFather vous fournit un jeton de ce type :

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution Gardez le jeton secret
Ce jeton est requis dans les paramètres de RcloneView. Ne le partagez pas publiquement.
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## Étape 2 Démarrer votre bot dans Telegram (Important)

Vous devez démarrer une discussion avec votre bot avant de pouvoir récupérer votre Chat ID via `getUpdates`.

### Étape 2-1 Rechercher votre bot

1. Recherchez votre bot par son nom ou son nom d'utilisateur.
2. Ouvrez la discussion avec le bot.

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### Étape 2-2 Appuyer sur Démarrer et envoyer un message

1. Cliquez sur **Démarrer** (ou envoyez `/start`).
2. Envoyez un message supplémentaire (exemple : `hi`).

Cela crée un enregistrement de mise à jour que vous pourrez lire ultérieurement depuis Telegram.

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## Étape 3 Trouver votre Chat ID Telegram

### Étape 3-1 Ouvrir getUpdates dans un navigateur

Ouvrez cette URL (remplacez par votre jeton) :

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### Étape 3-2 Extraire `chat.id`

Dans la réponse JSON, trouvez :

```json
"chat": {
  "id": 987654321
}
```

Votre **Chat ID** est le nombre présent dans `chat.id` (exemple : `987654321`).

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## Étape 4 Activer le contrôle à distance Telegram dans RcloneView

### Étape 4-1 Ouvrir les paramètres

1. Ouvrez RcloneView.
2. Allez dans **Paramètres**.
3. Sélectionnez **Interfaces & Notifications**.
4. Trouvez **Contrôle à distance Telegram**.

### Étape 4-2 L'activer

Activez **Contrôle à distance Telegram** :

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### Étape 4-3 Saisir le jeton et le Chat ID

- **Jeton du bot Telegram** : depuis BotFather
- **Chat ID Telegram** : depuis `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### Étape 4-4 Envoyer un message de test

Cliquez sur **Envoyer un message de test**. Si cela fonctionne, vous recevrez :
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## Étape 5 Commandes Telegram (contrôle des tâches)

Saisissez ces commandes dans votre discussion Telegram avec le bot.

### `/help`

Affiche toutes les commandes disponibles :

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

Liste les tâches de la connexion actuellement sélectionnée :

```
/listjobs
```

Exemple de sortie :

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

Démarre une tâche par son nom :

```
/start Backup_Photos
```

:::note Le nom de la tâche doit correspondre exactement
Utilisez `/listjobs` pour copier le nom exact de la tâche.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>` (Recommandé)

Démarre une tâche par son numéro dans le dernier résultat de `/listjobs` :

```
/start #2
```

:::important Exécutez d'abord `/listjobs`
Le numéro est basé sur la sortie actuelle de la liste des tâches.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

Arrête une tâche en cours :

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

Affiche la progression d'une tâche en cours :

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## Notifications automatiques de tâches

Lorsque le contrôle à distance Telegram est activé, RcloneView peut envoyer automatiquement des notifications pour :

- Tâche démarrée
- Tâche terminée avec succès
- Tâche échouée avec une erreur

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## Notes de sécurité

- Les commandes ne sont traitées qu'à partir du **Chat ID** configuré.
- Gardez votre **jeton de bot** privé. Traitez-le comme un mot de passe.
- Si vous souhaitez suspendre le contrôle à distance, désactivez le commutateur dans les paramètres.

---

## Résumé

Le contrôle à distance Telegram facilite l'exploitation de RcloneView pour les tâches longues :

- Gérez vos tâches à distance
- Restez informé grâce aux notifications en temps réel
- Contrôlez vos tâches depuis mobile sans ouvrir votre PC

Essayez-le lorsque vous exécutez des sauvegardes, des synchronisations ou des transferts volumineux planifiés et que vous souhaitez une visibilité de partout.
