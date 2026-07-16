---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "Corriger les erreurs de jeton OAuth expiré — Réautoriser les comptes cloud dans RcloneView"
authors:
  - tayson
description: "Votre sauvegarde planifiée a cessé de fonctionner car le jeton OAuth a expiré. Voici comment diagnostiquer et corriger les jetons expirés pour Google Drive, OneDrive, Dropbox et d'autres fournisseurs OAuth dans RcloneView."
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de jeton OAuth expiré — Réautoriser les comptes cloud dans RcloneView

> Votre sauvegarde nocturne échoue silencieusement depuis deux semaines. L'erreur : « token expired ». Votre connexion Google Drive, OneDrive ou Dropbox a simplement besoin d'une réautorisation — voici comment la corriger.

Les jetons OAuth connectent RcloneView aux fournisseurs cloud comme Google Drive, OneDrive, Dropbox et Box. Ces jetons ont des politiques d'expiration — les jetons Google durent indéfiniment mais peuvent être révoqués, les jetons Microsoft expirent s'ils ne sont pas utilisés pendant 90 jours, et les changements de mot de passe ou les événements de sécurité invalident tous les jetons. Lorsqu'ils expirent, les tâches de synchronisation échouent silencieusement jusqu'à ce que vous le remarquiez.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causes courantes d'expiration des jetons

| Fournisseur | Comportement du jeton |
|----------|---------------|
| Google Drive | Jeton de rafraîchissement valide jusqu'à révocation (mais peut être révoqué par l'utilisateur ou l'administrateur) |
| OneDrive | 90 jours si non utilisé ; le changement de mot de passe l'invalide |
| Dropbox | Valide jusqu'à révocation explicite |
| Box | 60 jours sans rafraîchissement |

## Symptômes

- Les tâches planifiées échouent avec des erreurs « authentication » ou « token »
- La navigation manuelle affiche des messages « unauthorized »
- L'historique des tâches montre un nombre croissant d'échecs ces derniers jours

## Comment corriger

### Vérifier d'abord l'historique des tâches

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

Recherchez des tendances — si toutes les tâches d'un même fournisseur ont commencé à échouer à la même date, il s'agit d'un problème de jeton.

### Réautoriser le distant

Ouvrez le gestionnaire de distants et réautorisez le distant concerné. Cela déclenche un nouveau flux OAuth — connectez-vous au fournisseur et accordez à nouveau l'accès.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

Vos configurations de tâches existantes sont conservées. Seul le jeton d'authentification est mis à jour.

### Vérifier la correction

Exécutez une synchronisation de test pour confirmer que la connexion fonctionne :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## Prévention

- **Activez les notifications** — les alertes Slack/Discord/Telegram vous informent immédiatement en cas d'échec d'une tâche
- **Vérifiez l'historique des tâches chaque semaine** — repérez les échecs avant qu'ils ne s'accumulent
- **Évitez les changements de mot de passe** sans réautoriser les distants cloud
- **Utilisez des comptes de service** pour Google Workspace (ils n'expirent pas comme les jetons utilisateur)

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Vérifiez l'historique des tâches** pour repérer les échecs liés à l'authentification.
3. **Réautorisez** les distants concernés dans le gestionnaire de distants.
4. **Configurez les notifications** pour détecter rapidement les futurs échecs.

Une réautorisation de 2 minutes évite des semaines de sauvegardes manquées.

---

**Guides associés :**

- [Corriger les erreurs de permission refusée](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Dépanner les erreurs Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Notifications Slack](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
