---
slug: migrate-box-to-onedrive-rcloneview
title: "Migrer de Box vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - morgan
description: "Guide étape par étape pour migrer vos fichiers de Box vers Microsoft OneDrive avec RcloneView. Transfert de fichiers cloud à cloud rapide et fiable, avec suivi complet de la progression."
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - RcloneView
  - box
  - onedrive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers OneDrive — Transférer des fichiers avec RcloneView

> RcloneView simplifie la migration de Box vers Microsoft OneDrive — connectez les deux comptes, configurez une tâche de transfert et déplacez toute votre bibliothèque de fichiers sans passer par un navigateur.

Les organisations qui passent de Box à Microsoft OneDrive font toutes face au même défi récurrent : déplacer des milliers de fichiers de manière fiable, sans perte de données, sans duplication de contenu, et sans subir un lent cycle manuel de téléchargement puis de réenvoi. RcloneView gère l'intégralité de la migration via une interface graphique de bureau, en transférant les fichiers directement entre les deux services cloud selon un chemin cloud à cloud, pendant que vous suivez la progression en temps réel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et OneDrive

La première étape consiste à ajouter les deux comptes en tant que remotes dans RcloneView. Depuis l'onglet **Remote**, cliquez sur **New Remote** et sélectionnez **Box**. RcloneView ouvrira une fenêtre de navigateur pour l'authentification OAuth — connectez-vous et accordez l'accès, puis revenez à l'application. Répétez le processus pour **OneDrive**, qui utilise également une connexion OAuth via navigateur.

Une fois les deux remotes enregistrés, ouvrez deux panneaux Explorer côte à côte à l'aide de l'option **Layout** dans l'onglet Settings. Accédez à votre dossier source Box dans le panneau de gauche et à votre dossier de destination OneDrive dans le panneau de droite. Cette vue à double panneau vous donne une vision claire de la structure existante avant le début du transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

Si vous migrez un compte Box for Business, définissez `box_sub_type = enterprise` dans la configuration du remote — l'assistant de configuration inclut ce champ. Pour OneDrive for Business ou une bibliothèque de documents SharePoint, sélectionnez le type de compte approprié lors de l'étape de configuration OneDrive. Les deux variantes entreprise s'authentifient de la même manière via OAuth dans le navigateur.

## Exécuter la tâche de migration

Une fois les deux remotes configurés, ouvrez le **Job Manager** et cliquez sur **Add Job**. Sélectionnez votre dossier Box comme source et le dossier OneDrive cible comme destination. Pour une migration ponctuelle, le type de tâche **Copy** conserve tous les fichiers dans Box tout en peuplant OneDrive — n'utilisez **Move** que si vous souhaitez que les fichiers soient supprimés de Box au fur et à mesure du transfert.

Dans les paramètres avancés, activez la **vérification par checksum** pour confirmer que chaque fichier arrive intact. Ceci est particulièrement précieux pour les migrations volumineuses, où des interruptions réseau pourraient produire silencieusement des copies corrompues. Définissez également un nombre de tentatives (par défaut : 3) pour gérer les erreurs d'API transitoires de l'un ou l'autre fournisseur sans nécessiter de redémarrages manuels.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

Avant d'exécuter le transfert complet, utilisez le mode **Dry Run** pour simuler la tâche. L'aperçu montre exactement quels fichiers seront copiés, ce qui vous aide à repérer des structures de dossiers incohérentes ou des fichiers inattendus et volumineux avant d'engager la bande passante et le temps nécessaires à la migration réelle.

## Suivre la progression et vérifier les résultats

Pendant le transfert, l'onglet **Transferring** en bas de l'interface RcloneView affiche la progression en direct : vitesse actuelle, fichiers terminés, volume total de données déplacées et temps écoulé. Pour les migrations volumineuses — une équipe juridique déplaçant une décennie de documents contractuels, par exemple — cette visibilité est essentielle pour estimer la durée de l'opération et planifier en fonction des heures ouvrées.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

Une fois la tâche terminée, consultez le panneau **Job History** pour obtenir un résumé complet de l'exécution. Si des fichiers ont généré des erreurs, le journal indique les chemins exacts et les messages d'erreur, ce qui vous permet de les traiter individuellement sans avoir à relancer l'intégralité de la tâche. Après avoir examiné l'historique, utilisez la fonctionnalité **Folder Compare** de RcloneView pour comparer côte à côte la source Box et la destination OneDrive, et confirmer que chaque fichier a été correctement transféré avant de désactiver le compte Box.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez **Box** en tant que remote via **Remote > New Remote** avec authentification OAuth.
3. Ajoutez **OneDrive** comme second remote avec authentification OAuth.
4. Créez une tâche **Copy** dans le Job Manager avec Box comme source et OneDrive comme destination, activez la vérification par checksum, puis exécutez-la.

Passer de Box à OneDrive est une opération propre et traçable avec RcloneView — pas de téléchargements manuels, pas de stockage intermédiaire, et une visibilité complète sur la progression du début à la fin.

---

**Guides connexes :**

- [Synchroniser Box vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Migration Box vers Dropbox sans interruption avec RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrer de Box vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
