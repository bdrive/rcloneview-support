---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "Corriger les jetons OAuth expirés pour le stockage cloud — Se reconnecter avec RcloneView"
authors:
  - tayson
description: "Découvrez comment diagnostiquer et corriger les erreurs de jeton OAuth expiré dans RcloneView pour Google Drive, Dropbox, OneDrive et d'autres fournisseurs cloud basés sur OAuth."
keywords:
  - jeton OAuth expiré stockage cloud
  - corriger jeton OAuth rclone expiré
  - jeton Google Drive expiré RcloneView
  - erreur de jeton d'autorisation Dropbox
  - actualisation du jeton OneDrive rclone
  - erreur d'authentification stockage cloud
  - reconnexion fournisseur cloud rclone
  - corriger connexion cloud expirée RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les jetons OAuth expirés pour le stockage cloud — Se reconnecter avec RcloneView

> Les jetons OAuth pour Google Drive, Dropbox, OneDrive et d'autres fournisseurs expirent périodiquement. Voici comment reconnaître l'erreur dans RcloneView et se réauthentifier sans perdre la configuration de votre distant.

Les fournisseurs cloud basés sur OAuth — Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud, Yandex Disk et d'autres — accordent l'accès via des jetons plutôt que des mots de passe. Ces jetons ont des politiques d'expiration : certains se rafraîchissent automatiquement tant que l'application reste active, tandis que d'autres expirent après 90 à 180 jours d'inactivité ou lorsque le système de sécurité du fournisseur détecte des schémas d'accès inhabituels. Lorsqu'un jeton expire, les tâches de synchronisation de RcloneView commencent à échouer avec des erreurs d'authentification qui paraissent alarmantes mais sont faciles à corriger.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconnaître les erreurs de jeton expiré

Les erreurs de jeton OAuth expiré apparaissent dans l'onglet **Log** de RcloneView avec des messages tels que :

- Google Drive : `oauth2: cannot fetch token: 401 Unauthorized` ou `Token has been expired or revoked`
- Dropbox : `invalid_grant` ou `Token is expired`
- OneDrive : `AADSTS70008: The refresh token has expired`
- Box : `401 Unauthorized: The access token provided has expired`

L'onglet Transferring montre les tâches échouant immédiatement à 0 % sans aucun fichier transféré. Le distant peut également apparaître comme injoignable dans le panneau Explorer — parcourir le distant renvoie une erreur au lieu de la liste des dossiers.

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Se réauthentifier via le Remote Manager

Pour rafraîchir un jeton OAuth expiré, allez dans **Remote tab → Remote Manager**, sélectionnez le distant concerné, puis cliquez sur **Edit**. Dans l'écran de configuration du distant, repérez la section du jeton OAuth et cliquez sur le bouton de réauthentification (ou effacez le jeton existant). RcloneView ouvre la page d'autorisation OAuth du fournisseur dans votre navigateur.

Connectez-vous avec les identifiants de votre compte cloud, réaccordez l'accès à RcloneView (via rclone), et le nouveau jeton est enregistré automatiquement. Fermez l'onglet du navigateur et revenez à RcloneView — le distant devrait maintenant se connecter avec succès. Testez-le en parcourant le distant dans le panneau Explorer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## Fournisseurs avec des politiques de jetons plus strictes

**Google Drive** — les jetons de rafraîchissement restent valides indéfiniment si l'application est autorisée par le propriétaire du compte et que l'application rclone n'a pas été révoquée dans les paramètres de sécurité de Google. Si vous avez révoqué l'accès dans Google Account → Third-party apps, vous devrez réautoriser depuis le début.

**Microsoft OneDrive** — les jetons expirent après 90 jours d'inactivité. Si vous n'avez pas synchronisé depuis trois mois, attendez-vous à devoir vous réauthentifier. Les jetons OneDrive for Business peuvent également expirer plus tôt en raison des politiques organisationnelles définies par l'administrateur Azure AD.

**Box** et **Dropbox** — les jetons sont généralement de longue durée mais expirent si vous changez le mot de passe de votre compte, activez l'authentification à deux facteurs pour la première fois, ou si le fournisseur détecte un événement de sécurité.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## Prévenir les futures interruptions

Programmez au moins une petite tâche de synchronisation pour chaque distant OAuth afin qu'elle s'exécute chaque semaine, même si elle ne transfère rien. Une utilisation active du jeton empêche l'expiration déclenchée par l'inactivité pour des fournisseurs comme OneDrive. Vérifiez régulièrement l'onglet Job History afin que les échecs de tâches soient détectés rapidement plutôt que de passer inaperçus pendant des jours.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez l'onglet Log pour les messages d'erreur d'expiration OAuth après l'échec d'une tâche de synchronisation.
3. Ouvrez Remote Manager, sélectionnez le distant concerné, puis cliquez sur Edit pour vous réauthentifier.
4. Testez la connexion dans le panneau Explorer avant de relancer les tâches échouées.

Le renouvellement du jeton OAuth prend moins de deux minutes dans RcloneView — une fois réauthentifié, toutes les tâches de synchronisation précédemment configurées reprennent leur fonctionnement sans aucun autre changement.

---

**Guides connexes :**

- [Corriger les erreurs de quota et de limite de débit Google Drive avec RcloneView](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Résoudre les erreurs rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Alertes de notification pour la fin de synchronisation avec RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
