---
sidebar_position: 13
description: "Activez le verrouillage de l'application (App Lock) dans RcloneView pour exiger un mot de passe au lancement et protéger les distants, les transferts, les tâches, les montages et la base de données interne."
keywords:
  - rcloneview
  - app lock
  - password
  - security
  - rclone_view.db
  - job history
  - transfer history
  - settings
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# Utiliser App Lock (protection par mot de passe)

**App Lock** exige un mot de passe au démarrage de RcloneView ou lors de sa réouverture, protégeant ainsi vos distants, l'historique des transferts, les tâches, les informations de montage, l'historique des tâches et la base de données interne (`rclone_view.db`). C'est idéal pour les PC partagés ou professionnels sur lesquels plusieurs utilisateurs peuvent accéder à la machine.

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## Pourquoi utiliser App Lock ?

- Conserver la confidentialité des tâches, des montages et de l'historique des transferts de RcloneView.  
- Adapté aux PC partagés ou aux environnements de bureau.  
- Protéger les opérations sensibles de synchronisation/montage et les tâches automatisées.  
- Ajoute une couche de sécurité même si des tâches automatiques s'exécutent en arrière-plan.

## Comment activer App Lock

### Étape 1 — Ouvrir les paramètres

- Allez dans **Paramètres → Paramètres généraux** depuis le menu du haut.  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### Étape 2 — Activer App Lock dans l'onglet Général

- Dans **Général**, cochez **Activer App Lock**.  
- Saisissez le mot de passe que vous souhaitez utiliser.  
- Cliquez sur **Fermer** pour enregistrer.  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## Comment fonctionne App Lock

Lorsque App Lock est activé, le lancement de RcloneView ou la réouverture de sa fenêtre demande le mot de passe avant d'accorder l'accès.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Réinitialiser App Lock (Reset App)

Si vous oubliez le mot de passe, cliquez sur **Reset App** dans l'invite de mot de passe.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**Avertissement :** Reset App efface toutes les données internes de RcloneView :

- Mot de passe App Lock  
- Toutes les valeurs de paramètres  
- Historique des transferts  
- Définitions des tâches  
- Historique des tâches  

Non réinitialisé : la configuration **rclone** (`rclone.conf`) reste intacte, donc les définitions des distants sont conservées.

## Utilisation recommandée

- PC partagés ou publics.  
- Environnements d'entreprise ou institutionnels.  
- Lorsque vous exécutez de nombreuses tâches automatisées et souhaitez empêcher toute altération.  
- Lorsque vous devez protéger l'historique des tâches/transferts et les données internes.

## Résumé

| Élément | Description |
| --- | --- |
| Fonction | Exige un mot de passe au démarrage/à la réouverture de RcloneView |
| Protège | Paramètres, tâches, historique des transferts, fichier de base de données |
| Déclencheur | Lancement de l'application ou réouverture |
| Réinitialisation | **Reset App** efface les données internes ; conserve `rclone.conf` |
| Idéal pour | PC partagés, environnements à haute sécurité |

App Lock est un petit commutateur qui offre une protection solide. Activez-le pour préserver la confidentialité de votre activité et de votre historique RcloneView.
