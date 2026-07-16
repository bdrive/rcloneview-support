---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "Comment migrer de OneDrive vers Google Drive — Guide de transfert étape par étape avec RcloneView"
authors:
  - tayson
description: "Vous passez de Microsoft 365 à Google Workspace ? Découvrez comment migrer tous vos fichiers de OneDrive vers Google Drive tout en préservant la structure des dossiers grâce à RcloneView."
keywords:
  - migrer onedrive vers google drive
  - transfert onedrive vers google drive
  - passer de microsoft 365 à google workspace
  - déplacer des fichiers onedrive google drive
  - outil de migration onedrive google drive
  - outil de migration cloud
  - synchronisation onedrive vers gdrive
  - transférer des fichiers onedrive
  - migration microsoft vers google
  - outil de migration onedrive
tags:
  - onedrive
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment migrer de OneDrive vers Google Drive — Guide de transfert étape par étape avec RcloneView

> Votre organisation passe à Google Workspace. Vous devez maintenant déplacer des téraoctets de fichiers OneDrive vers Google Drive sans perturber le flux de travail de votre équipe. Voici comment procéder correctement.

Que vous changiez de suite bureautique, consolidiez vos comptes cloud ou mainteniez une sauvegarde parallèle, la migration de OneDrive vers Google Drive nécessite une planification minutieuse. RcloneView se charge du plus difficile — un transfert direct de cloud à cloud qui préserve la structure de vos dossiers et gère automatiquement les différences de format de fichier.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi ne pas simplement télécharger puis re-téléverser ?

L'approche manuelle — télécharger depuis OneDrive, puis téléverser vers Google Drive — présente de sérieux inconvénients :

- **Nécessite de l'espace disque local** pour l'ensemble des données.
- **Deux fois plus de temps** — téléchargement + téléversement au lieu d'un transfert direct.
- **Aucune mise à jour incrémentielle** — toute modification pendant le transfert est perdue.
- **Échoue sur les grands volumes de données** — les téléversements via navigateur échouent sur les fichiers de plusieurs Go.

RcloneView transfère directement entre les clouds, ne nécessitant que de la bande passante — pas de stockage local.

## Étapes de la migration

### 1) Connecter les deux comptes

Ajoutez OneDrive et Google Drive comme distants dans RcloneView :

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) Évaluer et planifier

Parcourez les deux clouds côte à côte :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

Avant de migrer, vérifiez :

- **La taille totale** — Quel volume de données doit être déplacé ?
- **Les types de fichiers** — Les documents Office se convertissent automatiquement (voir ci-dessous).
- **Les dossiers partagés** — Les éléments partagés de OneDrive nécessitent un traitement séparé.
- **La longueur des chemins** — Google Drive a une limite de 400 caractères pour les chemins.

### 3) Gestion des formats de fichiers

Lors du transfert, les documents Office peuvent être téléversés tels quels vers Google Drive. Google Drive prend en charge l'ouverture native des fichiers `.docx`, `.xlsx` et `.pptx`. Vous pouvez éventuellement les convertir aux formats natifs de Google après la migration.

| Format OneDrive | Traitement par Google Drive |
|-----------------|---------------------|
| .docx | Ouverture native ou conversion vers Google Docs |
| .xlsx | Ouverture native ou conversion vers Google Sheets |
| .pptx | Ouverture native ou conversion vers Google Slides |
| Images, PDF | Transférés tels quels |

### 4) Lancer la migration

Créez une tâche de **copie** de OneDrive vers Google Drive :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

Utilisez **Copie** plutôt que Synchronisation — elle ne fait qu'ajouter des fichiers, sans jamais supprimer sur la destination.

### 5) Suivre la progression

Observez la migration en temps réel :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) Vérifier

Comparez les deux côtés après la migration :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Gestion des cas particuliers

### Bibliothèques de documents SharePoint

Les bibliothèques SharePoint sont distinctes du OneDrive personnel. Ajoutez SharePoint comme distant séparé dans RcloneView pour migrer les sites d'équipe.

### OneDrive Entreprise vs Personnel

Si vous migrez depuis OneDrive Entreprise, la configuration OAuth diffère de celle du OneDrive personnel. RcloneView vous guide à travers les deux processus d'authentification.

### Migrations volumineuses (500 Go et plus)

Pour les très grands volumes de données :

- **Migrez par lots** — Commencez par les dossiers critiques, puis les données secondaires.
- **Utilisez des règles de filtrage** — Priorisez par type de fichier ou par date.
- **Planifiez en dehors des heures de pointe** — Exécutez pendant les nuits/week-ends pour éviter les limites de débit.
- **Activez les nouvelles tentatives** — La fonctionnalité de nouvelle tentative de la v1.3 gère les échecs transitoires.

### Pendant la période de transition

Gardez les deux clouds synchronisés pendant que votre équipe fait la transition :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Planifiez des synchronisations quotidiennes de OneDrive → Google Drive jusqu'à ce que tout le monde ait basculé.

## Liste de contrôle post-migration

1. **Vérifier le nombre de fichiers** — La comparaison de dossiers confirme que tous les fichiers ont été transférés.
2. **Tester l'accès aux fichiers** — Ouvrez les documents clés sur Google Drive.
3. **Mettre à jour le partage** — Repartagez les dossiers sur Google Drive avec les membres de l'équipe.
4. **Mettre à jour les intégrations d'applications** — Pointez les scripts, outils et flux de travail vers Google Drive.
5. **Garder OneDrive actif** — Conservez l'ancien compte pendant 30 jours comme filet de sécurité.
6. **Décommissionner** — Après avoir confirmé que tout fonctionne, résiliez les abonnements OneDrive.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez OneDrive et Google Drive** comme distants.
3. **Lancez une tâche de copie** pour transférer les fichiers.
4. **Vérifiez avec la comparaison de dossiers**.
5. **Planifiez des synchronisations incrémentielles** pendant la transition.

La migration est déjà suffisamment stressante sans avoir à se soucier de fichiers manquants. Laissez RcloneView gérer le transfert pendant que vous vous concentrez sur le plan de transition.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migrer de Google Drive vers OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
