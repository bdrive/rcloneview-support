---
slug: rcloneview-discord-remote-control
title: "Contrôle à distance RcloneView via Discord : gérez vos tâches cloud depuis Discord"
authors:
  - steve
description: "Recevez des alertes de tâches et exécutez des commandes RcloneView depuis Discord en utilisant votre propre bot sécurisé, votre Application ID et votre Discord User ID."
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
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

# Contrôle à distance RcloneView via Discord : gérez vos tâches cloud depuis Discord

> Transformez RcloneView en une console chatops Discord : recevez des alertes de tâches, listez vos tâches, et démarrez ou arrêtez-les depuis Discord sans ouvrir votre PC.

Avec le contrôle à distance Discord, RcloneView vous envoie des alertes de démarrage, de fin et d'erreur de tâche, et accepte des commandes simples pour exécuter ou arrêter des tâches. C'est parfait pour les longues sauvegardes, les synchronisations nocturnes ou les serveurs distants où vous voulez tout de même un contrôle rapide via Discord sur ordinateur ou mobile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que vous pouvez faire depuis Discord

- **Notifications en temps réel** : soyez alerté immédiatement lorsqu'une tâche démarre, se termine ou rencontre une erreur.
- **Liste des tâches** : consultez toutes vos tâches RcloneView enregistrées dans une liste claire.
- **Contrôle à distance des tâches** : démarrez des tâches par nom ou par index (#N), ou arrêtez-les instantanément.
- **Statut à la demande** : vérifiez à tout moment la progression, la vitesse de transfert et le temps restant estimé.

*Remarque : RcloneView doit être en cours d'exécution sur votre PC ou serveur pour traiter les commandes Discord.*

## Prérequis

- RcloneView installé et en cours d'exécution (Desktop ou Headless).
- Un compte Discord.
- Un serveur Discord sur lequel vous pouvez installer un bot (Guild Install).
- Une connexion Internet.

---

## Étape 1 : Créer votre application Discord et votre bot

Pour une sécurité maximale, RcloneView utilise une approche « apportez votre propre bot ». Vos données transitent directement entre RcloneView et Discord — sans relais tiers.

1. Accédez au [Discord Developer Portal](https://discord.com/developers/applications) et cliquez sur **New Application**. Donnez-lui un nom (par exemple, `RcloneView`).
2. Ouvrez **Installation**, choisissez **Guild Install** comme contexte d'installation (désactivez User Install si activé), puis enregistrez.
3. Allez dans l'onglet **Bot**, cliquez sur **Add Bot**, puis copiez ou réinitialisez pour obtenir votre **Discord Bot Token**. Gardez-le secret.
4. Si vous prévoyez d'envoyer des commandes en texte brut (pas seulement des commandes slash), activez **MESSAGE CONTENT INTENT** dans l'onglet Bot pour que RcloneView puisse lire le texte des commandes.

---

## Étape 2 : Créer un serveur et installer le bot

Pour utiliser le bot, vous avez besoin d'un serveur Discord (aussi appelé « Guild ») où le bot peut résider. Si vous n'avez pas de serveur privé pour vos journaux RcloneView, suivez les étapes ci-dessous.

### Étape 2-1 Créer un nouveau serveur Discord

1. Ouvrez votre **application Discord** (Desktop ou Web).
2. Cliquez sur l'**icône plus (+)** (Ajouter un serveur) en bas de votre liste de serveurs à gauche.
3. Sélectionnez **Créer le mien**.
4. Choisissez **Pour moi et mes amis**.
5. Donnez un nom à votre serveur (par exemple, `RcloneView Control Center`) puis cliquez sur **Créer**.
   

### Étape 2-2 Installer le bot sur votre serveur

1. Retournez sur le **Discord Developer Portal**.
2. Ouvrez **OAuth2 > URL Generator**.
3. Sélectionnez les scopes : **bot** et **applications.commands**.
4. Dans **Bot Permissions**, sélectionnez **Send Messages**, **Use Slash Commands**, et **Attach Files** (si vous souhaitez recevoir des fichiers de journaux).
5. Copiez l'URL générée en bas de page et collez-la dans votre navigateur.
6. Sélectionnez le serveur que vous venez de créer (par exemple, `RcloneView Control Center`) puis cliquez sur **Authorize**.

---

## Étape 3 : Rassembler les valeurs dont RcloneView a besoin

- **Discord Bot Token** : depuis l'onglet **Bot** (Étape 1-3).
- **Discord Application ID** : depuis **General Information** dans le Developer Portal.
- **My Discord User ID (Snowflake)** : un long identifiant numérique qui vous identifie de manière unique.

### Comment obtenir votre Discord User ID

1. Dans Discord (Desktop ou Web), ouvrez **User Settings** (⚙️).
2. Allez dans **Advanced** et activez **Developer Mode**.
3. Faites un clic droit sur votre **photo de profil** ou votre **nom d'utilisateur** (en bas à gauche ou dans une liste de membres) et choisissez **Copy User ID**. Enregistrez le numéro (exemple : `123456789012345678`).

Pourquoi cet identifiant est-il nécessaire ?

- **Sécurité** : seules les commandes provenant de votre compte sont traitées par l'application.
- **Notifications directes** : le bot sait exactement à quel utilisateur envoyer un message privé lorsqu'une tâche démarre ou échoue.

---

## Étape 4 : Activer le contrôle Discord dans RcloneView

1. Ouvrez RcloneView et allez dans **Settings -> Interfaces & Notifications**.
2. Activez le commutateur **Discord Remote Control**.
3. Saisissez votre **Discord Bot Token**, votre **Discord Application ID** et votre **My Discord User ID** dans les champs correspondants.
4. Cliquez sur **Send Test Message** pour vérifier que vous recevez bien un message privé du bot.

---

## ⌨️ Guide des commandes (ChatOps)

Envoyez des commandes au bot (le message privé est recommandé pour la confidentialité ; les canaux fonctionnent aussi si le bot y a accès) :

- `/help` — Affiche toutes les commandes disponibles.
- `/joblist` — Liste toutes les tâches enregistrées pour la connexion actuelle.
- `/start <jobName>` — Démarre une tâche par son nom exact.
- `/start #<number>` — Démarre une tâche en utilisant son index depuis `/joblist` (par exemple, `/start #1`).
- `/stop <JobId>` — Arrête une tâche en cours d'exécution en utilisant son Job ID.
- `/jobstatus <JobId>` — Vérifie la progression et les statistiques en temps réel d'une tâche spécifique.

---

## Conseils de sécurité et de gestion

- **Identification de l'utilisateur** : seul le Discord User ID configuré est autorisé à exécuter des commandes.
- **Sécurité des tokens** : traitez votre Bot Token et votre Application ID comme des mots de passe. Réinitialisez-les en cas d'exposition.
- **Statut en ligne** : si RcloneView n'est pas en cours d'exécution, le bot Discord ne répondra pas aux commandes.

## Ressources connexes

- [Guide de base RcloneView](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [Planification et automatisation des tâches](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [Surveillance des transferts en temps réel](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Conclusion

Discord transforme RcloneView en un centre de commande mobile : vous restez informé, vous pouvez démarrer ou arrêter des tâches instantanément, et vous réagissez plus rapidement aux échecs. Configurez-le une fois, gardez vos tokens en sécurité, et gérez votre automatisation cloud en toute confiance, même lorsque vous êtes loin de votre bureau.

<CloudSupportGrid />
