---
slug: migrate-proton-drive-to-backblaze-b2-rcloneview
title: "Migrer de Proton Drive vers Backblaze B2 — Transfert cloud sécurisé avec RcloneView"
authors:
  - jay
description: "Déplacez vos fichiers de Proton Drive vers Backblaze B2 avec RcloneView. Guide étape par étape pour migrer des données de stockage cloud chiffrées vers un stockage objet économique."
keywords:
  - Proton Drive to Backblaze B2
  - migrate Proton Drive Backblaze
  - Proton Drive cloud migration
  - Backblaze B2 cloud backup
  - RcloneView cloud transfer
  - cloud-to-cloud file migration
  - move files from Proton Drive
  - Backblaze B2 object storage backup
  - Proton Drive export backup
tags:
  - RcloneView
  - proton-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Proton Drive vers Backblaze B2 — Transfert cloud sécurisé avec RcloneView

> Déplacez vos fichiers Proton Drive vers le stockage objet économique de Backblaze B2 avec RcloneView — aucun téléchargement manuel requis.

Proton Drive offre un chiffrement de bout en bout robuste et un stockage axé sur la confidentialité, ce qui en fait un choix populaire pour les données personnelles et professionnelles sensibles. À mesure que les besoins de stockage augmentent — ou lorsque vous avez besoin d'une destination de sauvegarde secondaire économique — migrer vos fichiers vers Backblaze B2 devient une option pratique. Un studio de photographie qui archive des téraoctets de fichiers RAW, ou une équipe de développeurs qui consolide ses actifs cloud, peut tirer parti du stockage objet évolutif de B2 en complément du stockage principal de Proton axé sur la confidentialité. RcloneView simplifie cette migration de cloud à cloud, en diffusant les données directement entre fournisseurs sans avoir à télécharger d'abord les fichiers sur votre machine locale.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Proton Drive et Backblaze B2

Avant de migrer, configurez les deux remotes cloud dans RcloneView. Commencez par ajouter votre compte Proton Drive : accédez à l'onglet Remote dans la barre de menus et cliquez sur New Remote. Sélectionnez Proton Drive dans la liste des fournisseurs et saisissez l'e-mail et le mot de passe de votre compte Proton. Si vous avez activé l'authentification à deux facteurs, RcloneView vous demandera votre code 2FA lors de la configuration. La prise en charge de Proton Drive nécessite rclone v1.69 ou une version ultérieure — le rclone intégré de RcloneView gère cela automatiquement.

Ensuite, ajoutez votre remote Backblaze B2. Cliquez de nouveau sur New Remote et choisissez Backblaze B2. Vous aurez besoin de votre Application Key ID et de votre Application Key, générés depuis la console Backblaze B2 sous App Keys. Limitez la clé au bucket spécifique que vous souhaitez utiliser comme destination de migration, ou accordez un accès à l'échelle du compte si vous prévoyez de créer un nouveau bucket pendant la configuration.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Une fois les deux remotes configurés, parcourez-les côte à côte dans l'explorateur à double panneau de RcloneView. Naviguez vers votre dossier Proton Drive d'un côté et vers votre bucket B2 de l'autre pour confirmer que les deux connexions fonctionnent avant de démarrer la migration.

## Configurer la tâche de migration

Une fois les deux remotes connectés, ouvrez le Job Manager depuis l'onglet Home et créez une nouvelle tâche de synchronisation ou de copie. Définissez votre dossier Proton Drive comme source et votre bucket Backblaze B2 comme destination. Donnez à la tâche un nom descriptif tel que `proton-to-b2-archive` pour la distinguer des autres tâches de transfert.

Avant d'exécuter la migration complète, utilisez l'option Dry Run pour prévisualiser exactement les fichiers qui seront transférés. Cette simulation affiche la liste complète des fichiers à copier sans déplacer aucune donnée — une étape essentielle lors de la migration de grandes bibliothèques pour détecter rapidement les problèmes de correspondance de chemins. Pour les grandes archives Proton Drive, activez la vérification par somme de contrôle dans les paramètres avancés afin de garantir l'intégrité des fichiers entre les deux fournisseurs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer job from Proton Drive to Backblaze B2" class="img-large img-center" />

Les paramètres de transferts simultanés à l'étape 2 de l'assistant de création de tâche vous permettent d'ajuster les performances. Commencer avec 4 transferts simultanés constitue une valeur par défaut raisonnable, et vous pouvez augmenter ce nombre une fois que vous avez confirmé que la migration se déroule sans problème.

## Surveiller et vérifier le transfert

Une fois la tâche de migration lancée, l'onglet Transferring dans le panneau inférieur de RcloneView affiche la progression en temps réel : vitesse de transfert, fichiers terminés, taille totale et données restantes. Pour les migrations volumineuses portant sur des dizaines ou des centaines de gigaoctets, réduisez RcloneView dans la barre système et laissez le transfert s'exécuter en arrière-plan pendant que les tâches se poursuivent sans interruption.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring showing Proton Drive to Backblaze B2 migration progress" class="img-large img-center" />

Une fois la migration terminée, consultez l'onglet Job History pour vérifier le statut du transfert, le nombre total de fichiers déplacés et les éventuelles erreurs. Si la tâche signale des erreurs pour des fichiers spécifiques, la vue des journaux fournit les messages d'erreur exacts pour identifier s'il s'agit d'un problème de permission, d'un délai d'attente réseau ou d'un conflit d'encodage de nom de fichier.

## Planifier des sauvegardes récurrentes

Pour les utilisateurs qui souhaitent faire de Backblaze B2 une destination de sauvegarde continue pour leurs données Proton Drive, RcloneView PLUS prend en charge la planification de type crontab. Une fois la migration initiale terminée, modifiez la tâche et accédez à l'étape 4 (Scheduling) pour configurer une synchronisation récurrente — par exemple, chaque nuit à 2 h. La tâche planifiée s'exécutera automatiquement, en copiant uniquement les fichiers nouveaux ou modifiés depuis la dernière exécution, gardant ainsi votre archive B2 à jour sans intervention manuelle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automatic Proton Drive to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Proton Drive via Remote tab > New Remote, en saisissant votre e-mail et votre mot de passe.
3. Ajoutez votre remote Backblaze B2 en utilisant votre Application Key ID et votre Application Key depuis la console B2.
4. Créez une tâche de synchronisation ou de copie dans Job Manager avec Proton Drive comme source et votre bucket B2 comme destination.
5. Effectuez un Dry Run pour prévisualiser la migration, puis exécutez le transfert complet et suivez la progression dans l'onglet Transferring.

Avec RcloneView qui gère la connexion entre Proton Drive et Backblaze B2, vous pouvez construire une stratégie de sauvegarde inter-cloud fiable qui associe la confidentialité de Proton à la capacité de stockage économique de B2.

---

**Guides connexes :**

- [Migrer de Proton Drive vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Migrer de Dropbox vers Proton Drive — Transfert cloud avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Migrer de Google Drive vers Backblaze B2 — Transfert cloud avec RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
