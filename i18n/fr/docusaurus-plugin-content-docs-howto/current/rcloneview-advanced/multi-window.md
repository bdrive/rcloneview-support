---
sidebar_position: 3
description: "Découvrez comment gérer en parallèle des instances Rclone intégrées et externes grâce à la fonctionnalité Nouvelle fenêtre de RcloneView."
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# Utiliser plusieurs connexions Rclone avec Nouvelle fenêtre

RcloneView propose une interface flexible permettant de gérer plusieurs instances Rclone simultanément. Cela est particulièrement utile lorsque l'on travaille à la fois avec des configurations Rclone intégrées et externes.

## Architecture Rclone intégrée

Dans la configuration par défaut, RcloneView inclut un binaire Rclone intégré (Rclone intégré). Cette instance permet aux utilisateurs de gérer des remotes cloud via une interface GUI facile à utiliser.

### 🔹 Modèle intégré

- RcloneView inclut Rclone et communique avec lui via l'API.
- Les fichiers sont accédés et gérés directement via Rclone.
- Convient à la plupart des scénarios d'utilisation sur bureau local.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## Architecture Rclone externe

Pour des cas d'utilisation plus avancés, comme la gestion de remotes sur des serveurs distants ou des instances cloud, RcloneView peut se connecter à une instance Rclone externe s'exécutant ailleurs.

### 🔹 Modèle externe

- RcloneView se connecte à un serveur Rclone distant (via Rclone RC).
- Le Rclone distant est responsable de l'accès et de la synchronisation du stockage cloud.
- Utile pour gérer des environnements Rclone hébergés dans le cloud (par ex., AWS EC2, serveurs Linux).

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## Fonctionnalité Nouvelle fenêtre : gérer les deux modèles

Pour prendre en charge simultanément les instances Rclone intégrées et externes, RcloneView inclut une fonctionnalité **Nouvelle fenêtre**. Elle permet aux utilisateurs de lancer plusieurs instances GUI de RcloneView, chacune connectée à un backend Rclone différent.

### ✅ Principaux avantages

- Chaque fenêtre peut se connecter à une instance Rclone unique.
- Gérez des environnements locaux et distants en parallèle.
- Comparez, synchronisez et copiez entre différents clouds ou environnements en toute transparence.

### 🔸 Exemple : fenêtre principale (Rclone intégré)

Cette fenêtre est connectée au Rclone intégré inclus avec RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important Icône d'accueil pour la fenêtre principale
La fenêtre principale de RcloneView (connectée au Rclone intégré) peut être identifiée par l'**icône d'accueil** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> située à côté du logo RcloneView, dans le coin supérieur droit.

:::
### 🔸 Exemple : nouvelle fenêtre (Rclone externe)

Cette fenêtre est connectée à un Rclone externe s'exécutant sur un serveur Linux AWS.

:::info Comment exécuter le moteur Rclone sur AWS EC2  
Pour apprendre à déployer et gérer le démon API de Rclone (`rcd`) sur une instance EC2 basée sur Ubuntu, consultez : [Comment exécuter Rclone sur un serveur AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩Comparaison : Rclone intégré vs. Rclone externe

| Fonctionnalité                        | Rclone intégré                          | Rclone externe                                |
| -------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| S'exécute sur la machine locale        | ✅ Oui                                    | ❌ Non (s'exécute sur un serveur distant)       |
| Accès au disque local                  | Oui — PC local où RcloneView s'exécute  | Oui — serveur où le Rclone externe s'exécute   |
| Utilise le binaire Rclone intégré      | ✅ Inclus par défaut                      | ❌ Nécessite une installation séparée           |
| Configurable dans `Settings > Location`| ✅ Pris en charge                         | ❌ Non applicable                               |
| Nécessite une configuration réseau     | ❌ Non                                    | ✅ Oui (hôte, port, authentification requis)    |
| Performances réseau                    | Dépend du réseau local/domestique        | Dépend du réseau serveur/cloud                  |

 💡 Utilisez la fonctionnalité **Nouvelle fenêtre** pour gérer plusieurs instances Rclone en parallèle — par exemple, connectez une fenêtre au Rclone intégré pour les tâches locales, et une autre à un Rclone externe pour les opérations côté cloud.
