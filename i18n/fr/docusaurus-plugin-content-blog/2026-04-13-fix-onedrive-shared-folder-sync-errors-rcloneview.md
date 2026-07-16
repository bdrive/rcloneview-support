---
slug: fix-onedrive-shared-folder-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation des dossiers partagés OneDrive — Résoudre avec RcloneView"
authors:
  - tayson
description: "Dépannez les échecs de synchronisation des dossiers partagés OneDrive dans RcloneView. Corrigez les erreurs de permission, les distants partagés manquants et les problèmes d'accès lors de la synchronisation de contenu OneDrive partagé."
keywords:
  - OneDrive shared folder sync error
  - OneDrive sync fix
  - OneDrive shared drive RcloneView
  - fix OneDrive permissions
  - OneDrive shared folder access
  - Microsoft OneDrive troubleshooting
  - OneDrive sync problem
  - RcloneView OneDrive error
  - OneDrive for Business sync
  - cloud sync troubleshooting
tags:
  - onedrive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation des dossiers partagés OneDrive — Résoudre avec RcloneView

> Diagnostiquez et corrigez les échecs de synchronisation des dossiers partagés OneDrive dans RcloneView — des erreurs de permission et raccourcis manquants aux problèmes d'accès OneDrive for Business au sein d'une organisation.

Le système de dossiers partagés de OneDrive comporte des subtilités qui posent problème à de nombreux outils de synchronisation. Les dossiers partagés avec vous par des collègues ne se comportent pas de la même façon que votre propre stockage OneDrive — ils apparaissent différemment dans l'API et nécessitent une configuration spécifique pour y accéder avec rclone. Lorsque RcloneView ne peut pas voir ou synchroniser un dossier partagé, la cause principale est presque toujours l'un de quelques problèmes bien connus. Ce guide couvre les échecs de synchronisation de dossiers partagés les plus courants et comment les résoudre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Les dossiers partagés ne sont pas visibles dans RcloneView

OneDrive présente les dossiers partagés différemment de votre propre stockage. Les dossiers partagés depuis le OneDrive d'un autre utilisateur apparaissent dans la section « Partagés » de l'interface web, mais ils ne font pas automatiquement partie de votre dossier racine dans l'API, sauf si vous les avez ajoutés en tant que raccourci à votre OneDrive.

**Correction :** Dans l'interface web de OneDrive, trouvez le dossier partagé que vous devez synchroniser et cliquez sur « Ajouter un raccourci à Mes fichiers ». Cela crée un raccourci dans votre propre racine OneDrive, accessible via l'API standard — et donc visible et synchronisable dans RcloneView. Après avoir ajouté le raccourci, actualisez l'explorateur de fichiers de RcloneView en appuyant sur F5 ou en cliquant sur Recharger.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive shared folder access configuration in RcloneView" class="img-large img-center" />

## Erreurs de permission lors de la synchronisation de dossiers partagés

Une erreur 403 Forbidden ou « accès refusé » lors de la synchronisation d'un dossier OneDrive partagé indique généralement l'une de ces trois situations :

1. **Partage en lecture seule :** Le propriétaire du dossier l'a partagé avec des permissions d'affichage uniquement. Vous ne pouvez pas y écrire ni y supprimer de contenu. Si vous essayez de synchroniser dans une direction nécessitant un accès en écriture, confirmez auprès du propriétaire du dossier que vous disposez des permissions de modification.

2. **Limitations d'accès invité :** Les comptes externes (invités) sur OneDrive for Business ont un accès API restreint. Certaines opérations de synchronisation sont bloquées par la politique de partage de l'organisation.

3. **Politiques d'accès conditionnel :** Les locataires Microsoft 365 d'entreprise peuvent appliquer des politiques d'accès conditionnel qui restreignent l'accès à l'API depuis des appareils ou applications non conformes. Contactez votre administrateur informatique si vous rencontrez des échecs d'authentification récurrents même après une connexion réussie.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Diagnosing OneDrive shared folder permission errors in RcloneView" class="img-large img-center" />

## Problèmes de bibliothèque partagée OneDrive for Business

Les bibliothèques adossées à SharePoint (y compris les bibliothèques de documents SharePoint exposées comme des dossiers OneDrive) nécessitent une configuration de distant séparée dans RcloneView. Plutôt que d'utiliser le distant OneDrive personnel, ajoutez un distant SharePoint pointant vers l'URL du site, ou utilisez OneDrive for Business avec la configuration de site SharePoint appropriée.

Pour les équipes qui rencontrent fréquemment des erreurs de longueur de chemin sur OneDrive for Business, l'indicateur `--onedrive-no-versions` de rclone peut réduire la charge API pour les opérations de synchronisation. Ajoutez des indicateurs personnalisés via Paramètres > Rclone intégré > Indicateurs Rclone globaux dans RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing OneDrive sync job history and error logs in RcloneView" class="img-large img-center" />

## Ré-authentification d'un jeton expiré

Les jetons OAuth de OneDrive peuvent expirer ou devenir invalides — en particulier après un changement de mot de passe, une mise à jour de l'authentification multifacteur, ou un événement de sécurité du compte. Un jeton expiré se manifeste par des erreurs 401 Unauthorized répétées lors de la synchronisation.

Pour vous ré-authentifier, ouvrez le Gestionnaire de distants dans l'onglet Distant de RcloneView, sélectionnez votre distant OneDrive, et modifiez-le. Le processus de modification vous invite à relancer le flux OAuth, en ouvrant une fenêtre de navigateur pour une nouvelle authentification. Après avoir terminé la nouvelle connexion, enregistrez le distant mis à jour et relancez la tâche de synchronisation.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pour les dossiers partagés, ajoutez-les d'abord en tant que « raccourcis vers Mes fichiers » dans l'interface web de OneDrive.
3. Confirmez que vous disposez des permissions correctes (Modification, et pas seulement Affichage) pour les dossiers que vous devez synchroniser.
4. Ré-authentifiez votre distant OneDrive si vous rencontrez des erreurs 401 répétées.

La plupart des problèmes de dossiers partagés OneDrive tiennent aux distinctions établies par Microsoft au niveau de l'API entre les dossiers possédés, partagés et raccourcis — comprendre cela rend le dépannage beaucoup plus direct.

---

**Guides connexes :**

- [Gérer la synchronisation et la sauvegarde cloud OneDrive avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation OneDrive : jeton delta et longueur de chemin avec RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)
- [Corriger les erreurs de synchronisation cloud liées à l'expiration du jeton OAuth avec RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
