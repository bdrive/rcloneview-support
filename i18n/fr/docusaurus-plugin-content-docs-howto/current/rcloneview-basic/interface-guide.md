---
sidebar_position: 1
description: " Une présentation visuelle de l'interface de RcloneView, incluant la barre de titre, les menus principaux, l'explorateur de fichiers et les onglets de transfert."
keywords:
  - rcloneview
  - rclone GUI
  - cloud file manager
  - remote storage management
  - file explorer
  - cloud to cloud transfer
  - file synchronization
  - rcloneview interface
  - rcloneview layout
  - toolbar
  - transfer status
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# Guide de l'interface RcloneView

RcloneView propose une mise en page intuitive qui permet aux utilisateurs de parcourir, comparer et transférer des fichiers entre le stockage local et les remotes cloud. Voici une présentation détaillée de chaque section.

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① Barre de titre

Affiche le nom de l'application et les boutons standard de contrôle de fenêtre :

- `—` : Réduire
- `□` : Agrandir / Restaurer
- `X` : Quitter RcloneView

## ② Barre de menu principale

Onglets de navigation principaux permettant d'accéder aux fonctionnalités essentielles :

- **`Home`** – Outils de synchronisation et de comparaison de fichiers, planification de tâches et prise en charge multi-fenêtres  
- **`Remote`** – Ajouter, configurer et monter des remotes de stockage cloud  
- **`Settings`** – Gérer les connexions aux remotes, les préférences générales et la disposition de l'interface  
- **`Help`** – Accéder au support produit, à l'activation de licence, aux retours d'expérience et aux vérifications de mise à jour  

## ③ Barre d'outils

La barre d'outils change dynamiquement en fonction de l'onglet de menu sélectionné :

  ### Lorsque `Home` est sélectionné :

| Bouton        | Description                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | Synchronise les fichiers et dossiers entre les répertoires sélectionnés dans les deux volets de l'explorateur |
| `Compare`     | Compare les différences entre les répertoires sélectionnés dans les deux volets de l'explorateur           |
| `Job Manager` | Crée et gère des tâches de synchronisation récurrentes entre les remotes fréquemment utilisés     |
| `New Window`  | Ouvre une nouvelle fenêtre RcloneView pour se connecter à une instance différente du daemon Rclone        |
 
### Lorsque `Remote` est sélectionné :

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| Bouton           | Description                                                                      |
| ---------------- | ---------------------------------------------------------------------------------- |
| `New Remote`     | Crée une nouvelle connexion à un remote de stockage cloud                                |
| `Remote Manager` | Affiche, modifie ou supprime les remotes enregistrés                                              |
| `Mount Manager`  | Monte un remote en tant que lecteur local                                                  |
| `Job Manager`    | Crée et gère des tâches de synchronisation récurrentes entre les remotes fréquemment utilisés |
  
### Lorsque `Settings` est sélectionné :
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| Bouton             | Description                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | Gère et bascule entre les connexions au daemon Rclone intégré ou externe                                     |
| `General settings` | Configure la langue de l'application, les chemins de fichiers, le thème, le comportement du glisser-déposer, les options du Rclone intégré, etc. |
| `Layout`           | Bascule entre les dispositions horizontale et verticale des volets pour l'arborescence des dossiers et la vue liste des fichiers                   |
| `View count`       | Bascule entre les vues à un seul volet et à deux volets de l'explorateur de fichiers                                                 |

### Lorsque `Help` est sélectionné :
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| Bouton                 | Description                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | Vérifie si une nouvelle version est disponible   |
| `Feedback`             | Envoie un retour ou signale un problème      |
| `Homepage`             | Visite le site officiel de RcloneView |
| `Register License Key` | Active votre licence PLUS            |

## ④ Volet de l'explorateur de fichiers

Chaque volet vous permet de parcourir les lecteurs locaux ou les remotes cloud à l'aide d'une interface à onglets.  
Vous pouvez ouvrir différentes sources dans chaque volet et transférer facilement des fichiers entre elles.

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
Le volet comprend les composants suivants :

1. **Barre d'onglets** – Affiche la connexion actuelle (par ex., Local Disk, myAwsS3, myGoogleDrive)  
2. **Barre du fil d'Ariane (chemin)** – > Affiche le chemin du dossier actuel et permet une navigation rapide en cliquant ou en tapant, avec suggestions automatiques. 
3. **Barre d'outils du volet** – Comprend des actions rapides :  
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **Créer un alias (favori)** — Enregistre le dossier actuel comme favori pour un accès rapide  
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**Monter le dossier** — Monte le dossier sélectionné en tant que lecteur local  
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **Modifier les paramètres du remote** — Modifie la configuration du remote connecté  
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **Actualiser** — Recharge le contenu du dossier actuel
4. **Arborescence des dossiers** – Un navigateur de dossiers repliable  
5. **Vue liste des fichiers/dossiers** – Affiche le contenu avec nom, type, date de modification et taille  
6. **Pied de page récapitulatif** – Affiche le nombre total de fichiers/dossiers et la taille totale des fichiers

## ⑤ Onglets d'état des transferts

Affiche l'état et l'historique des opérations de synchronisation ou de transfert de fichiers :

| Onglet          | Description                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | Affiche toutes les tâches de transfert actives en cours, avec la vitesse, la progression et le temps restant |
| **`Completed`** | Répertorie toutes les tâches de synchronisation ou de copie terminées avec des détails tels que l'heure, la taille et l'identifiant de la tâche               |
| **`Log`**       | Affiche les entrées de journal horodatées avec les horodatages, les types de tâches, les messages et le statut               |
## ⑥ Pied de page

- **Informations de version** : Version actuellement exécutée de RcloneView (par ex., `RcloneView 0.6.301`)
- **Informations de licence** : Indique le type de licence (`FREE License` ou `PLUS License`)
- **Informations de connexion Rclone** : Affiche l'instance rclone connectée, l'adresse du serveur et le système d'exploitation
  - Exemple : `Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
