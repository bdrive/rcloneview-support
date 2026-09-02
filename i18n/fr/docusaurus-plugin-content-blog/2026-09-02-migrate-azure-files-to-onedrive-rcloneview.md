---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Migrer Azure Files vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Migrez Azure File Storage vers OneDrive avec RcloneView. Déplacez des fichiers professionnels entre clouds par glisser-déposer, tâches de synchronisation et aperçus dry-run."
keywords:
  - migrer azure files vers onedrive
  - migration azure file storage
  - migration cloud onedrive
  - transfert d'azure vers onedrive
  - migration cloud à cloud
  - RcloneView azure files
  - RcloneView onedrive
  - déplacer azure file storage vers onedrive
  - transfert de fichiers entre clouds
  - outil de migration cloud pour entreprises
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Azure Files vers OneDrive — Transférer des fichiers avec RcloneView

> Déplacez un partage Azure File Storage entier vers OneDrive sans toucher la ligne de commande ni jongler entre deux consoles distinctes.

Les équipes qui ont provisionné Azure File Storage pour un projet ou un partage départemental le dépassent souvent une fois que le reste de l'entreprise standardise Microsoft 365 et OneDrive pour la collaboration quotidienne. Tout re-téléverser manuellement via deux portails web différents est lent et source d'erreurs. RcloneView ouvre les deux distants côte à côte dans une seule fenêtre et vous permet de déplacer des fichiers directement entre eux, de sorte que la migration se déroule comme une seule tâche suivie plutôt que comme un marathon manuel de copier-coller. Contrairement aux outils qui ne font que du montage, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Azure Files et OneDrive côte à côte

Pour ajouter Azure File Storage, il vous faut le nom du compte de stockage, la clé partagée et le nom du partage, disponibles sur la page des clés d'accès de votre portail Azure — l'assistant de configuration de distant de RcloneView demande exactement ces trois champs. OneDrive, en revanche, utilise l'OAuth basé sur navigateur : cliquez sur New Remote, choisissez OneDrive, puis connectez-vous via la fenêtre pop-up que RcloneView ouvre pour vous. Aucune clé API à copier ou coller.

Une fois les deux distants configurés, ouvrez chacun dans son propre panneau Explorer en utilisant la disposition à deux volets (ou quatre volets). Vous verrez l'arborescence de dossiers du partage Azure d'un côté et la structure de votre OneDrive de l'autre, avec le nombre de fichiers et les tailles affichés en pied de chaque panneau.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'Azure File Storage et de OneDrive comme distants dans RcloneView" class="img-large img-center" />

## Transférer ou synchroniser des fichiers entre les deux distants

Pour une migration ponctuelle, sélectionnez les dossiers ou fichiers dans le panneau Azure Files et faites-les glisser vers le panneau OneDrive — glisser entre deux distants différents effectue une copie, laissant la source Azure intacte jusqu'à ce que vous soyez prêt à la nettoyer. Pour un partage plus important, utilisez plutôt l'assistant Sync : choisissez Azure Files comme source et OneDrive comme destination, puis exécutez d'abord un Dry Run pour prévisualiser exactement quels fichiers seront copiés avant que quoi que ce soit ne bouge réellement.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de fichiers d'Azure File Storage vers OneDrive" class="img-large img-center" />

Activer la comparaison par somme de contrôle dans l'étape Advanced Settings de la synchronisation permet à RcloneView de vérifier le contenu des fichiers par hachage et taille plutôt que par simple nom de fichier, ce qui compte lorsqu'une migration doit pouvoir être prouvée complète.

## Automatiser la migration et suivre la progression

Les partages volumineux se terminent rarement en une seule fois. Enregistrez le transfert comme tâche dans Job Manager afin de pouvoir le relancer pour récupérer les fichiers ajoutés à Azure Files après la première passe, et consultez l'onglet Transferring dans l'Info View inférieure pour suivre la progression, la vitesse et le nombre de fichiers en temps réel pendant l'exécution.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation récurrente d'Azure Files vers OneDrive dans RcloneView" class="img-large img-center" />

Job History enregistre chaque exécution — heure de début, durée, statut et taille totale transférée — afin que vous disposiez d'un historique permettant de confirmer que la bascule est complète avant de mettre hors service le partage Azure.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre distant Azure File Storage avec le nom de compte, la clé partagée et le nom du partage.
3. Ajoutez OneDrive via le flux de connexion basé sur navigateur.
4. Exécutez un Dry Run, puis lancez la tâche de synchronisation et confirmez les résultats dans Job History.

Une migration propre et vérifiable vaut toujours mieux qu'une copie manuelle précipitée.

---

**Guides associés :**

- [Gérer Azure Files Storage — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Gérer le stockage OneDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Résoudre les erreurs de connexion Azure Files avec RcloneView](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
