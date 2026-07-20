---
slug: fix-nextcloud-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Nextcloud — Résoudre les problèmes WebDAV et d'authentification avec RcloneView"
authors:
  - morgan
description: "Résolvez les erreurs de synchronisation Nextcloud dans RcloneView — corrigez les échecs d'authentification WebDAV, les conflits de verrouillage de fichiers 423, les erreurs SSL et les délais de transfert."
keywords:
  - corriger les erreurs de synchronisation Nextcloud
  - erreur d'authentification WebDAV Nextcloud
  - correction du verrouillage 423 Nextcloud
  - délai de connexion Nextcloud RcloneView
  - erreur de certificat SSL Nextcloud rclone
  - dépannage Nextcloud RcloneView
  - sauvegarde Nextcloud qui ne fonctionne pas
  - correction des erreurs de synchronisation WebDAV
  - erreur rclone Nextcloud 401
  - résolution des conflits de verrouillage de fichiers Nextcloud
tags:
  - RcloneView
  - troubleshooting
  - nextcloud
  - tips
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Nextcloud — Résoudre les problèmes WebDAV et d'authentification avec RcloneView

> Les échecs de synchronisation Nextcloud dans RcloneView remontent presque toujours à l'une de quatre causes principales — et chacune a une solution concrète et reproductible.

Nextcloud est la plateforme cloud auto-hébergée la plus largement déployée, mais son interface WebDAV introduit une catégorie particulière de problèmes de synchronisation. Lorsque RcloneView synchronise vers ou depuis un serveur Nextcloud, les erreurs se manifestent sous forme d'échecs d'authentification 401, de réponses de verrouillage de fichiers 423, de rejets de certificat SSL, ou de transferts qui se bloquent en cours d'exécution. Chaque code d'erreur vous indique exactement où chercher — et la solution est généralement un simple changement de configuration dans RcloneView ou sur le serveur Nextcloud lui-même.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Échecs d'authentification (401 Unauthorized)

Une erreur 401 dans l'onglet **Log** de RcloneView signifie que Nextcloud a rejeté les identifiants de votre distant WebDAV. La cause la plus fréquente est l'utilisation du mot de passe habituel de votre compte au lieu d'un mot de passe d'application Nextcloud. Lorsque l'authentification à deux facteurs est activée sur votre compte Nextcloud, le mot de passe standard ne fonctionnera jamais pour l'accès à l'API — vous devez générer un mot de passe spécifique à l'application.

Connectez-vous à l'interface web de Nextcloud, allez dans **Paramètres > Sécurité > Mots de passe d'application**, créez un nouveau mot de passe d'application avec un libellé reconnaissable comme « RcloneView », et copiez-le immédiatement. Ensuite, dans RcloneView, ouvrez **Remote tab > Remote Manager**, sélectionnez votre distant Nextcloud, cliquez sur **Edit**, remplacez le mot de passe par le nouveau mot de passe d'application, puis enregistrez. Relancez la tâche de synchronisation échouée et surveillez l'onglet Log — l'erreur 401 ne devrait plus réapparaître.

Si vous n'utilisez pas l'authentification à deux facteurs et que vous voyez toujours des erreurs 401, vérifiez que le format de l'URL WebDAV est correct. Le chemin WebDAV standard de Nextcloud est `https://your-server.com/remote.php/dav/files/your-username/` — une barre oblique finale manquante ou un nom d'utilisateur incorrect dans le chemin produit des erreurs qui ressemblent à des problèmes d'authentification, même avec des identifiants valides.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Nextcloud WebDAV credentials in RcloneView Remote Manager" class="img-large img-center" />

## Conflits de verrouillage de fichiers (423 Locked)

Nextcloud utilise un verrouillage de fichiers côté serveur pour empêcher les modifications simultanées, et RcloneView peut rencontrer des réponses 423 Locked lors de la synchronisation de fichiers maintenus ouverts par un client de bureau Nextcloud actif ou une session de navigateur web. Cela se produit le plus souvent pendant les heures de bureau, lorsque les membres de l'équipe modifient activement des fichiers pendant qu'une tâche de sauvegarde planifiée est également en cours d'exécution.

La solution la plus fiable est une question de timing : planifiez les tâches de synchronisation RcloneView pendant les heures creuses — la nuit ou pendant des périodes d'activité prévisiblement faible — à l'aide du planificateur de la licence PLUS. Dans les **Advanced Settings** de la tâche, réduisez le nombre de transferts de fichiers simultanés. Moins de transferts en parallèle signifie moins de demandes de verrouillage simultanées, et les verrous transitoires se libèrent plus rapidement lorsque RcloneView ne sollicite pas le serveur de toutes les directions à la fois.

RcloneView relance les opérations échouées jusqu'au nombre de tentatives configuré (par défaut : 3). Une fois une tâche terminée, consultez **Job History** pour voir si des fichiers affichent un statut Errored. Si le nombre d'erreurs est faible, une relance manuelle de la tâche de synchronisation résoudra les conflits de verrouillage restants une fois les fichiers concernés fermés.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Nextcloud sync job history and error details in RcloneView" class="img-large img-center" />

## Erreurs de certificat SSL

Les installations Nextcloud auto-hébergées utilisent fréquemment des certificats SSL auto-signés, que rclone rejette par défaut. L'échec apparaît dans l'onglet Log comme une erreur de vérification de certificat. Pour contourner ce problème, ouvrez **Settings tab > Embedded Rclone** et ajoutez `--no-check-certificate` au champ **Global Rclone Flags**. Cela s'applique globalement à tous les distants, donc si certains distants utilisent des certificats valides que vous souhaitez continuer à vérifier, envisagez plutôt d'ajouter le certificat auto-signé au magasin de certificats de confiance de votre système d'exploitation.

Pour les serveurs Nextcloud situés derrière un proxy inverse, vérifiez que le proxy transmet les en-têtes corrects. Un proxy mal configuré peut provoquer des boucles de redirection qui se manifestent par des erreurs SSL ou de connexion, même lorsque le certificat lui-même est valide.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active Nextcloud sync progress in RcloneView Transferring tab" class="img-large img-center" />

## Transferts lents et délais d'attente en cours de tâche

La couche WebDAV de Nextcloud est plus lente que les backends compatibles S3 pour les répertoires contenant de nombreux petits fichiers. Si une tâche de synchronisation expire ou se bloque sur de grands dossiers, commencez par un **Dry Run** pour compter le nombre total de fichiers concernés. Pour les répertoires contenant des dizaines de milliers de petits fichiers, réduisez le nombre de transferts simultanés dans **Advanced Settings** et augmentez le **retry count** pour laisser au serveur plus de temps de récupération entre les lots.

Appliquez des filtres de taille et d'ancienneté de fichiers à l'étape 3 de l'assistant de synchronisation pour diviser les grandes tâches en lots plus petits : synchronisez d'abord les fichiers modifiés au cours des 30 derniers jours, puis exécutez séparément les fichiers plus anciens. Cela permet de maintenir chaque exécution dans un périmètre gérable et réduit le risque qu'un seul délai d'attente interrompe un transfert de plusieurs heures.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Nextcloud sync job after adjusting transfer settings in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Après tout échec de synchronisation Nextcloud, ouvrez l'onglet **Log** et notez le code d'erreur HTTP avant de modifier quoi que ce soit.
3. Pour les erreurs 401 : régénérez un mot de passe d'application dans les paramètres Nextcloud et mettez à jour les identifiants de votre distant.
4. Pour les erreurs 423 : replanifiez la tâche pendant les heures creuses et réduisez les transferts parallèles dans Advanced Settings.

Lire d'abord le code d'erreur transforme le dépannage de Nextcloud d'une devinette en une solution prévisible de cinq minutes.

---

**Guides connexes :**

- [Gérer Nextcloud — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Synchroniser Nextcloud vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-google-drive-rcloneview)
- [Corriger les erreurs de connexion et d'authentification WebDAV avec RcloneView](https://rcloneview.com/support/blog/fix-webdav-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
