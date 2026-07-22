---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Synchroniser Zoho WorkDrive avec OneDrive — Sauvegarde cloud avec RcloneView"
authors:
  - steve
description: "Synchronisez des fichiers de Zoho WorkDrive vers Microsoft OneDrive avec RcloneView, en gardant les deux comptes de stockage professionnels sauvegardés et à jour."
keywords:
  - synchroniser Zoho WorkDrive avec OneDrive
  - sauvegarde Zoho WorkDrive
  - migration Zoho WorkDrive OneDrive
  - RcloneView Zoho WorkDrive
  - sauvegarde professionnelle inter-cloud
  - outil de synchronisation Microsoft OneDrive
  - transfert de fichiers multi-cloud
  - synchronisation cloud à cloud GUI
  - sauvegarde de stockage de fichiers professionnels
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Zoho WorkDrive avec OneDrive — Sauvegarde cloud avec RcloneView

> Conservez une sauvegarde continue des dossiers d'équipe Zoho WorkDrive sur Microsoft OneDrive sans exporter les fichiers à la main ni scripter une tâche de transfert distincte pour chaque service.

Les équipes qui ont adopté Zoho WorkDrive comme standard pour la collaboration quotidienne ont souvent encore besoin d'une présence sur Microsoft OneDrive, que ce soit pour un client qui ne travaille que dans l'écosystème Microsoft, à cause d'une fusion laissant deux plateformes de stockage en usage simultané, ou simplement pour disposer d'une deuxième copie des fichiers professionnels en dehors de l'infrastructure Zoho. Télécharger manuellement depuis WorkDrive puis re-téléverser vers OneDrive ne passe pas à l'échelle au-delà de quelques fichiers, et ne laisse aucune trace de ce qui a été exécuté ni quand. RcloneView connecte les deux plateformes dans une seule interface et transforme ce transfert en une tâche de synchronisation reproductible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Zoho WorkDrive et OneDrive comme remotes

OneDrive se connecte via une connexion OAuth standard basée sur le navigateur dans l'assistant New Remote de RcloneView — aucune clé API distincte n'est nécessaire. Zoho WorkDrive nécessite une étape supplémentaire lors de la configuration : sélectionner la bonne région pour le compte, car Zoho héberge les données dans différentes régions géographiques selon l'endroit où l'espace de travail a été créé. Une fois les deux remotes ajoutés, ils apparaissent comme des onglets distincts dans l'explorateur, et chacun peut être parcouru, filtré, ou comparé à l'autre comme n'importe quel dossier local.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## Créer une tâche de synchronisation entre les deux plateformes

La première étape de l'assistant Sync consiste à sélectionner la source (dossier Zoho WorkDrive) et la destination (dossier OneDrive), ainsi qu'un nom de tâche et une direction de synchronisation. La synchronisation unidirectionnelle — qui ne modifie que la destination — est le mode stable et officiel, et le bon choix pour une tâche de type sauvegarde où WorkDrive reste la source de vérité. L'étape 2 couvre la concurrence des transferts et la vérification d'égalité, utile à réduire si l'API de WorkDrive répond lentement sous de nombreuses requêtes en parallèle. Les paramètres de filtrage de l'étape 3 permettent de limiter la tâche aux seuls dossiers ou types de fichiers pertinents, à l'aide de filtres prédéfinis pour les documents et les médias ou de règles d'exclusion personnalisées comme `/.tmp/*`.

Synchroniser entre Zoho WorkDrive et OneDrive ne nécessite aucune mise à niveau de licence, la synchronisation 1:N et la gestion de base de Sync & Job Management étant toutes deux incluses dans la licence FREE.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Vérifier et automatiser le transfert

Avant d'exécuter la tâche sur des données réelles, Dry Run simule la synchronisation et liste exactement les fichiers qui seraient copiés, permettant de repérer un filtre mal configuré ou un dossier non désiré avant que quoi que ce soit ne bouge réellement. Une fois la tâche jugée correcte, elle est enregistrée dans Job Manager, où elle peut être relancée manuellement ou, avec une licence PLUS, rattachée à une programmation de type crontab pour que la sauvegarde de WorkDrive vers OneDrive s'exécute automatiquement sans que personne n'ait à penser à la déclencher.

Job History enregistre chaque exécution — heure de début, durée, statut et nombre total de fichiers transférés —, ce qui est utile pour confirmer qu'une sauvegarde planifiée s'est réellement terminée plutôt que d'avoir échoué silencieusement pendant la nuit.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Zoho WorkDrive (en sélectionnant la bonne région) et OneDrive (via une connexion OAuth) via l'onglet Remote > New Remote.
3. Créez une tâche de Sync unidirectionnelle de votre dossier WorkDrive vers une destination OneDrive, en appliquant des filtres si nécessaire.
4. Exécutez Dry Run pour confirmer la liste des fichiers, puis enregistrez la tâche et programmez-la si vous disposez d'une licence PLUS.

Une fois les deux plateformes connectées dans la même fenêtre, garder Zoho WorkDrive et OneDrive synchronisés devient une tâche programmée plutôt qu'une corvée manuelle récurrente.

---

**Guides associés :**

- [Gérer Zoho WorkDrive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Monter Google Drive comme lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Règles de filtrage — Synchronisation sélective dans RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
