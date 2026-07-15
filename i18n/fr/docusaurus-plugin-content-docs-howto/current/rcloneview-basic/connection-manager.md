---
sidebar_position: 9
description: "Apprenez à configurer et à basculer entre les instances Rclone intégrées et externes à l'aide du gestionnaire de connexions RcloneView."
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gérer les connexions Rclone dans RcloneView

RcloneView est un gestionnaire de fichiers graphique pour le stockage cloud qui communique avec **Rclone** via son API de contrôle à distance (RC). Par défaut, il est fourni avec une instance **Rclone intégrée**, mais il prend également en charge la connexion à des instances Rclone externes (**Rclone externe**).

Ce guide explique comment gérer ces connexions à l'aide du **gestionnaire de connexions**.

## Présentation du gestionnaire de connexions

RcloneView communique avec Rclone selon deux modes :

- **Rclone intégré** (par défaut, intégré)
- **Rclone externe** (configuré par l'utilisateur, connecté au réseau)

Le **gestionnaire de connexions** vous permet d'afficher, de basculer entre et de gérer ces instances Rclone.

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### Rclone intégré

RcloneView inclut un binaire Rclone préinstallé appelé **Rclone intégré**, qui se lance automatiquement.

| Champ                       | Description                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Adresse**                 | Généralement `http://127.0.0.1:5582` (boucle locale)                           |
| **Version de Rclone**       | Exemple : `v1.70.1`                                                            |
| **Connecté** / **Connecter**| Indique le statut actuel. Si non connecté, cliquez sur **Connecter** pour activer. |
| **Mise à jour automatique** | Cliquez pour passer à la dernière version de Rclone.                           |

### Liste des Rclone externes

Rclone externe désigne une instance Rclone autonome lancée manuellement par l'utilisateur, généralement via `rclone rcd`. Elle peut s'exécuter :

- Sur une machine locale (pour les tests)
- Sur un serveur distant (par exemple, AWS EC2)
- Dans un conteneur Docker

Chaque entrée affiche :

| Champ | Description |
|-------|-------------|
| **Nom d'affichage** | Nom défini par l'utilisateur (par exemple, `aws-rclone`) |
| **Adresse distante** | Point de terminaison API, par exemple `http://<host>:5572` |
| **Nom d'utilisateur** | Si l'authentification est activée |
| **Version de Rclone** | Récupérée depuis l'instance connectée |

**Actions disponibles** :
- **Connecter** – Active cette instance
- **Modifier** – Modifie l'adresse, les identifiants ou les options SSL
- **Supprimer** – Retire de la liste

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### Indicateur de sélection actuelle

En haut de la boîte de dialogue du gestionnaire de connexions :

- `Selected: Embedded Rclone` – l'instance intégrée par défaut est active  
- `Selected: aws-rclone` – une instance externe personnalisée est utilisée

Une seule connexion peut être active à la fois. Votre sélection actuelle affecte :

- La visibilité de la liste des distants  
- Les actions de montage/tâche  
- Les opérations de configuration

:::important Remarques
- Une seule connexion Rclone peut être active à tout moment.  
- Vous pouvez basculer librement entre les connexions intégrée et externe.  

💡 Pour gérer deux instances côte à côte, ouvrez une nouvelle fenêtre RcloneView.

- Si un Rclone externe devient indisponible, vous pouvez toujours revenir à la version intégrée.
:::

## Ajouter un nouveau Rclone externe

Pour se connecter à un serveur `rclone rcd` en cours d'exécution :

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. Cliquez sur **Nouvelle connexion** en bas du gestionnaire de connexions.
2. Remplissez le formulaire :

| Champ | Description |
|-------|-------------|
| **Nom d'affichage** | par exemple, `aws-rclone` |
| **Adresse distante** | Point de terminaison API complet (`http://<host>:5572`) |
| **Nom d'utilisateur / Mot de passe** | Requis si l'authentification est activée |
| **Désactiver la vérification SSL** | Pour les certificats auto-signés ou l'utilisation en développement |
<br />
<br />

3. Cliquez sur **Tester la connexion**. Si elle réussit, cliquez sur **Enregistrer**.

:::important Remarques

💡 Pour rendre un Rclone externe disponible, exécutez-le avec :

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::
