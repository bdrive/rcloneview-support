---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Gérer le stockage Premiumize.me — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Premiumize.me à RcloneView via une connexion OAuth dans le navigateur et synchronisez vos fichiers stockés vers n'importe quel autre fournisseur cloud pour la sauvegarde et la gestion à long terme."
keywords:
  - premiumize.me RcloneView
  - synchronisation cloud premiumize
  - sauvegarde premiumize
  - gérer les fichiers premiumize
  - premiumize rclone GUI
  - stockage média premiumize
  - transfert cloud premiumize
  - gestion de fichiers premiumize
tags:
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Premiumize.me — Synchronisation et sauvegarde de fichiers avec RcloneView

> Premiumize.me combine l'hébergement de fichiers premium avec un stockage cloud personnel — RcloneView vous permet de gérer et de sauvegarder ce contenu via une interface graphique claire.

Premiumize.me est surtout connu comme un générateur de liens premium et un service de téléchargement cloud, mais il propose également un stockage cloud personnel où réside le contenu que vous récupérez. Si vous l'utilisez pour stocker des médias, des téléchargements ou des fichiers de projet, vous aurez tôt ou tard besoin d'un moyen de déplacer ces fichiers — vers un autre cloud pour l'archivage, ou vers un stockage local pour un accès hors ligne. RcloneView se connecte à Premiumize.me via une connexion OAuth dans le navigateur, ce qui rend la configuration possible en moins d'une minute.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connexion à Premiumize.me via OAuth

Lancez RcloneView et ouvrez le **Gestionnaire de distants**. Cliquez sur **Nouveau distant** et recherchez **Premiumize** dans la liste des fournisseurs. Lorsque vous le sélectionnez, RcloneView ouvre votre navigateur par défaut et vous redirige vers la page d'autorisation OAuth de Premiumize.me. Connectez-vous et accordez l'accès — RcloneView stocke le jeton localement, vous n'aurez donc pas besoin de réautoriser sauf si vous révoquez l'accès.

Après l'autorisation, le distant apparaît dans la liste du Gestionnaire de distants. Double-cliquez pour l'ouvrir dans l'Explorateur de fichiers. Votre arborescence de fichiers Premiumize.me se charge avec tous les dossiers et fichiers que vous avez accumulés via le service.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Parcourir votre bibliothèque Premiumize.me

L'Explorateur de fichiers de RcloneView offre une disposition familière à deux panneaux. Naviguez dans votre stockage Premiumize.me d'un côté et dans tout autre distant configuré — Google Drive, Backblaze B2, ou un dossier local — de l'autre. Vous pouvez sélectionner plusieurs fichiers, faire un clic droit pour copier ou déplacer, et suivre la progression dans le panneau de transfert.

Pour les bibliothèques riches en médias, le mode **Vue Miniatures** affiche des aperçus d'images en grille, ce qui est utile lorsque votre stockage Premiumize.me contient des photos ou des miniatures vidéo que vous souhaitez identifier visuellement avant le transfert.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Synchroniser Premiumize.me vers un autre cloud

La navigation manuelle des fichiers convient pour des déplacements occasionnels, mais pour des sauvegardes régulières, le système de **Tâches** est l'outil approprié. Allez dans **Tâches**, cliquez sur **Nouvelle tâche**, et définissez Premiumize.me comme source. Choisissez n'importe quel distant de destination — Backblaze B2 est une option économique pour l'archivage média à long terme, tandis que Google Drive fonctionne bien si vous souhaitez accéder aux fichiers depuis un mobile.

Dans la deuxième étape de l'assistant de création de tâche, vous pouvez configurer les **options de transfert** : définir le nombre de transferts simultanés, activer ou désactiver les sommes de contrôle, et activer le **Dry Run** pour prévisualiser ce qui sera copié avant que quoi que ce soit ne soit déplacé. Cela est particulièrement utile si votre stockage Premiumize.me s'est développé de manière organique au fil du temps et que vous n'êtes pas sûr de sa structure exacte.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## Suivi et historique des tâches

Une fois qu'une tâche s'exécute, RcloneView enregistre le résultat dans l'**Historique des tâches**. Chaque entrée affiche l'heure de début, la durée, le nombre de fichiers transférés, le volume total de données déplacées, ainsi que les éventuelles erreurs. Cela vous donne une piste d'audit de chaque opération de synchronisation, ce qui est important si vous migrez systématiquement une grande bibliothèque Premiumize.me sur plusieurs sessions.

Si un transfert échoue en cours de route — en raison d'un problème de réseau ou d'une limite de débit de l'API Premiumize.me — vous pouvez relancer la même tâche depuis l'Historique des tâches sans avoir à la reconfigurer. RcloneView ignore les fichiers déjà transférés avec succès, de sorte que les synchronisations interrompues reprennent là où elles s'étaient arrêtées.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le **Gestionnaire de distants**, cliquez sur **Nouveau distant**, et sélectionnez **Premiumize**.
3. Effectuez la connexion OAuth dans le navigateur pour autoriser votre compte.
4. Créez une tâche de synchronisation avec Premiumize.me comme source et le cloud de votre choix comme destination.

Avec RcloneView, vos fichiers Premiumize.me ne sont plus enfermés dans un seul service — sauvegardez-les, archivez-les ou migrez-les selon votre propre calendrier.

---

**Guides connexes :**

- [Gérer le stockage Put.io — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migration cloud à cloud avec RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Historique des tâches et suivi des journaux de transfert](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
