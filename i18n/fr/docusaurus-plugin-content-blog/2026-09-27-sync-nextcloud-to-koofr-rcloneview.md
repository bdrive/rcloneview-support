---
slug: sync-nextcloud-to-koofr-rcloneview
title: "Synchroniser Nextcloud avec Koofr — Sauvegarde cloud avec RcloneView"
authors:
  - robin
description: "Gardez une instance Nextcloud sauvegardée sur Koofr avec RcloneView — une synchronisation directe de cloud à cloud entre deux fournisseurs de stockage axés sur la confidentialité."
keywords:
  - synchroniser Nextcloud avec Koofr
  - sauvegarde de Nextcloud vers Koofr
  - RcloneView Nextcloud
  - RcloneView Koofr
  - sauvegarde cloud auto-hébergée
  - synchronisation de cloud à cloud
  - transfert Nextcloud Koofr
  - sauvegarde de stockage cloud européen
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Nextcloud avec Koofr — Sauvegarde cloud avec RcloneView

> Offrez à une instance Nextcloud auto-hébergée une sauvegarde hors site sur Koofr, exécutée selon un calendrier plutôt que par export manuel.

Nextcloud est populaire justement parce qu'il place le stockage sous votre propre contrôle, mais ce contrôle signifie aussi qu'une seule panne de serveur, une mauvaise mise à jour ou une erreur de disque peut emporter votre unique copie de tout. Koofr constitue un pairage naturel comme copie secondaire, puisqu'il s'agit d'un autre fournisseur basé dans l'UE et axé sur la confidentialité — la sauvegarde se retrouve dans un lieu avec une posture de résidence des données similaire, plutôt que dans une juridiction sans lien. RcloneView se connecte aux deux comme des distants ordinaires et exécute la copie directement entre eux, de sorte que la sauvegarde ne dépend pas du fait que votre serveur Nextcloud soit aussi votre client d'envoi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Nextcloud et Koofr

Ajoutez Nextcloud comme distant via l'onglet Distant > Nouveau distant en utilisant WebDAV — Nextcloud expose ses fichiers via WebDAV à une URL que le panneau d'administration de votre instance affiche sous Paramètres, vous aurez donc besoin de l'adresse du serveur, de votre nom d'utilisateur et d'un mot de passe d'application plutôt que de votre mot de passe de connexion habituel. Ajoutez Koofr séparément via son propre processus de connexion OAuth. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte que la même configuration à deux distants fonctionne, que votre serveur Nextcloud se trouve sur un NAS domestique ou un VPS loué.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

Une fois que les deux distants apparaissent dans le Gestionnaire de distants, ouvrez deux panneaux d'exploration côte à côte pour confirmer que vous pouvez parcourir la structure des dossiers Nextcloud et voir la destination Koofr (probablement vide) avant de configurer quoi que ce soit d'automatisé.

## Créer la tâche de synchronisation

Utilisez l'assistant de synchronisation en 4 étapes plutôt qu'un glisser-déposer ponctuel pour ce type de sauvegarde — définissez Nextcloud comme source et Koofr comme destination, choisissez la synchronisation unidirectionnelle pour que Koofr ne reçoive que des copies et que Nextcloud reste la référence, et exécutez d'abord une simulation (Dry Run) pour confirmer que la liste des fichiers est correcte avant que quoi que ce soit ne soit réellement transféré.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

À l'étape 3, excluez tout ce que vous ne souhaitez pas dupliquer hors site — les propres dossiers de versions de type `.git` de Nextcloud ou les grandes bibliothèques multimédias synchronisées déjà sauvegardées ailleurs sont de bons candidats pour une règle de filtre, ce qui permet de concentrer la copie Koofr sur ce qui a réellement besoin de redondance.

## Planifier des sauvegardes récurrentes

Une synchronisation unique ne vous protège que contre la panne d'aujourd'hui, pas celle du mois prochain. Avec une licence PLUS, l'étape 4 de l'assistant ajoute une planification de type crontab, permettant à la synchronisation de Nextcloud vers Koofr de s'exécuter chaque nuit ou chaque semaine sans que vous ayez à ouvrir l'application.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

L'historique des tâches vous donne alors un enregistrement continu de chaque exécution planifiée — statut d'achèvement, nombre de fichiers et durée — afin que vous puissiez confirmer que la sauvegarde s'est réellement exécutée, plutôt que de supposer qu'une tâche planifiée fonctionne silencieusement en arrière-plan.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre instance Nextcloud comme distant WebDAV et Koofr comme distant OAuth.
3. Créez une tâche de synchronisation unidirectionnelle de Nextcloud vers Koofr, en filtrant tout ce que vous n'avez pas besoin de dupliquer.
4. Planifiez la tâche pour qu'elle s'exécute automatiquement et vérifiez périodiquement l'historique des tâches pour confirmer son achèvement.

Un serveur auto-hébergé n'est aussi sûr que sa sauvegarde, et diriger cette sauvegarde vers un second fournisseur indépendant referme la brèche du point de défaillance unique que l'auto-hébergement laisse sinon ouverte.

---

**Guides connexes :**

- [Synchroniser Koofr avec Proton Drive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Corriger les erreurs de synchronisation Nextcloud — Comment résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Migrer de Koofr vers Jottacloud — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
