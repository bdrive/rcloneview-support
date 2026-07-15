---
sidebar_position: 9
description: "Changez l'emplacement où RcloneView stocke sa base de données SQLite (rclone_view.db) et choisissez un dossier sûr et accessible en écriture pour l'historique, les tâches, les montages et l'état de l'interface."
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# Changer l'emplacement de stockage de la base de données

RcloneView stocke son état principal dans un fichier SQLite nommé **`rclone_view.db`**. Cette base de données conserve votre historique de transferts, les définitions de tâches, les paramètres de montage, l'historique d'exécution des tâches et l'état de l'interface—tout ce dont l'application a besoin pour « se souvenir de ce que vous avez fait » et « afficher le statut actuel » dans l'interface.

Par défaut, la base de données se trouve dans votre dossier Documents. Vous pouvez la déplacer vers un autre emplacement accessible en écriture, comme un disque externe ou un dossier de sauvegarde synchronisé.

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## Emplacement par défaut de la base de données selon l'OS

| Plateforme | Chemin par défaut                          |
| ---------- | ------------------------------------------ |
| Windows    | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS      | `/Users/<user>/Documents/rclone_view.db`   |
| Linux      | `/home/<user>/Documents/rclone_view.db`    |

## Comment changer l'emplacement de la base de données

Vous pouvez choisir n'importe quel dossier accessible en écriture (local ou externe) directement depuis RcloneView.

### Étape 1 — Ouvrir les paramètres

- Allez dans **Paramètres → Paramètres généraux** dans le menu du haut.  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### Étape 2 — Rclone intégré → Paramètres de chemin

- Dans la fenêtre des paramètres, ouvrez **Rclone intégré → Paramètres de chemin**.
- Cliquez sur **Dossier de la base de données** pour choisir un nouvel emplacement pour `rclone_view.db`.  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- Utilisez l'icône de dossier pour parcourir jusqu'au répertoire cible ; RcloneView y placera `rclone_view.db`.

## Précautions concernant les autorisations et le chemin

RcloneView teste l'autorisation d'écriture en créant un fichier temporaire dans le dossier sélectionné. Certains dossiers système bloquent l'écriture pour les utilisateurs standard et déclencheront un avertissement :

- **Windows** : `C:\Program Files`, `C:\Windows`, etc.
- **macOS** : `/Applications`, `/System`, `/usr`, etc.
- **Linux** : `/usr`, `/opt`, `/etc`, etc.

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

Si vous voyez cet avertissement, choisissez un autre chemin avec un accès en écriture complet.

## Emplacements recommandés

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- Tout dossier personnel que vous possédez avec autorisation d'écriture
- Un disque externe que vous contrôlez (assurez-vous de l'accès en écriture)

Évitez les emplacements lents ou à accès restreint, et notez que les partages réseau peuvent introduire de la latence.

## Conseils d'entretien de la base de données

- Évitez les dossiers protégés par le système.
- Si vous utilisez un dossier de synchronisation cloud, privilégiez les services qui synchronisent les petits fichiers de manière fiable (par ex. OneDrive, Dropbox).
- Sauvegardez `rclone_view.db` périodiquement.
- Évitez les chemins réseau à latence élevée pour la base de données active.

## Résumé rapide

| Élément                    | Détails                                                        |
| -------------------------- | --------------------------------------------------------------- |
| Fichier de base de données | `rclone_view.db`                                                |
| Ce qu'il stocke            | Historique des transferts, tâches, montages, état de l'interface |
| Chemin par défaut          | Dossier Documents de l'utilisateur                               |
| Changer le chemin          | Paramètres → Rclone intégré → Paramètres de chemin               |
| Vérification d'autorisation | Test d'écriture de fichier temporaire                           |
| Meilleurs emplacements     | Dossiers accessibles en écriture (Documents, Roaming, disque externe) |

Choisissez un emplacement stable et accessible en écriture pour `rclone_view.db` afin de préserver la fiabilité de RcloneView et l'intégrité de votre historique.
