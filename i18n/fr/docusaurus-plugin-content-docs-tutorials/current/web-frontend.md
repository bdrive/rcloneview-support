---
sidebar_position: 1
description: Activez le serveur web intégré de RcloneView pour accéder à l'Explorateur, aux Tâches, aux Distants et aux Paramètres depuis n'importe quel navigateur de votre réseau local.
keywords:
  - rcloneview
  - interface web
  - serveur web
  - accès navigateur
  - accès distant
  - interface web
  - interface web rclone
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# Interface web de RcloneView

RcloneView inclut un serveur web intégré qui vous permet d'accéder à l'intégralité de l'interface RcloneView depuis n'importe quel navigateur web. Vous pouvez parcourir vos distants, gérer les tâches et configurer les paramètres — sans même ouvrir la fenêtre de l'application de bureau.

Ce tutoriel couvre :

- L'activation du serveur web dans les paramètres de RcloneView
- La configuration du port, du nom d'utilisateur et du mot de passe
- L'accès à l'interface web depuis un navigateur
- L'autorisation de l'accès distant depuis d'autres appareils de votre réseau

---

## Qu'est-ce que l'interface web ?

L'interface web est une interface basée sur navigateur pour RcloneView qui reproduit l'expérience de l'application de bureau. Une fois le serveur web intégré démarré, vous pouvez ouvrir un navigateur et interagir avec RcloneView via une interface familière comprenant :

- **Explorateur** — parcourir le stockage local et distant
- **Tâches** — afficher et gérer les tâches de synchronisation/copie
- **Distants** — gérer les connexions aux distants
- **Paramètres** — configurer les options de RcloneView

Ceci est utile lorsque vous souhaitez gérer des transferts depuis un autre appareil du même réseau, ou si vous préférez simplement un flux de travail basé sur navigateur.

---

## Prérequis

- RcloneView installé et en cours d'exécution (Bureau)
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge, etc.)
- Pour l'accès distant : des appareils sur le même réseau local

---

## Étape 1 : Ouvrir les paramètres du serveur web

1. Lancez **RcloneView**.
2. Allez dans **Paramètres** > **Réseau et divers**.
3. Repérez la section **Serveur web** (marquée **Bêta**).

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## Étape 2 : Configurer le serveur web

Dans la section **Serveur web**, configurez les éléments suivants :

- **Port** : le numéro de port du serveur web (par défaut : `8580`). Modifiez-le si le port par défaut entre en conflit avec un autre service.
- **Nom d'utilisateur** : définissez un nom d'utilisateur pour l'authentification (par exemple, `admin`).
- **Mot de passe** : définissez un mot de passe pour protéger l'accès à l'interface web.

---

## Étape 3 : Activer le serveur web

1. Basculez **Activer le serveur web** sur **On**.
2. Le statut passe de **Arrêté** à **En cours d'exécution sur le port 8580** (ou le port que vous avez configuré).
3. Un bouton **Redémarrer le serveur** apparaît, que vous pouvez utiliser après toute modification des paramètres.

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## Étape 4 : Accéder à l'interface web

1. Ouvrez un navigateur web sur la même machine.
2. Accédez à `http://localhost:8580` (ou le port que vous avez configuré).
3. L'écran de connexion de RcloneView s'affiche. Saisissez le **nom d'utilisateur** et le **mot de passe** configurés à l'étape 2, puis cliquez sur **Se connecter**.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. L'interface web de RcloneView se charge avec l'interface complète — l'Explorateur, les Tâches, les Distants et les Paramètres sont tous accessibles depuis la barre latérale gauche.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## Étape 5 : Autoriser l'accès distant (facultatif)

Par défaut, le serveur web n'accepte que les connexions provenant de **localhost (127.0.0.1)**. Pour accéder à RcloneView depuis d'autres appareils de votre réseau :

1. Basculez **Autoriser l'accès distant** sur **On**.
2. Cliquez sur **Redémarrer le serveur** pour appliquer la modification.
3. Sur un autre appareil, ouvrez un navigateur et accédez à `http://<adresse-ip-de-votre-ordinateur>:8580`.

> **Remarque de sécurité :** L'activation de l'accès distant permet à tout appareil de votre réseau d'accéder à l'interface web. Utilisez toujours un nom d'utilisateur et un mot de passe robustes pour protéger l'accès.

---

## Résumé

L'interface web de RcloneView vous donne un accès basé sur navigateur à toutes les fonctionnalités principales :

- Activez le serveur web depuis **Paramètres > Réseau et divers**
- Définissez un port, un nom d'utilisateur et un mot de passe pour un accès sécurisé
- Accédez à l'interface complète sur `http://localhost:8580`
- Activez éventuellement l'accès distant pour d'autres appareils de votre réseau

Laissez RcloneView s'exécuter en arrière-plan et gérez votre stockage cloud depuis n'importe quel navigateur.
