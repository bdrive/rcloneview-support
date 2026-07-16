---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Gérer le stockage Linkbox — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - kai
description: "Connectez le stockage cloud Linkbox à RcloneView pour une gestion des fichiers par glisser-déposer, une sauvegarde planifiée et une synchronisation multi-fournisseurs depuis une seule application de bureau."
keywords:
  - Linkbox
  - stockage cloud Linkbox
  - gérer les fichiers Linkbox
  - sauvegarde Linkbox
  - synchronisation Linkbox
  - RcloneView Linkbox
  - gestionnaire de fichiers cloud
  - alternative client Linkbox
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Linkbox — Synchronisation et sauvegarde de fichiers avec RcloneView

> Intégrez Linkbox à votre flux de travail quotidien grâce à un explorateur de bureau complet, des sauvegardes planifiées et des transferts en un clic vers n'importe quel autre cloud.

Linkbox est une option pratique pour stocker et partager des fichiers en ligne, mais son interface web n'est pas conçue pour la gestion de fichiers en masse, la comparaison de dossiers ou les tâches de sauvegarde récurrentes. RcloneView ajoute une couche de bureau native au-dessus de Linkbox, vous offrant un véritable explorateur de fichiers, des téléversements par glisser-déposer et une synchronisation automatisée, afin que Linkbox cesse d'être un silo de stockage isolé et devienne partie intégrante d'un véritable flux de travail multi-cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Linkbox comme distant

Ouvrez l'onglet Remote et cliquez sur New Remote pour lancer l'assistant de configuration. RcloneView vous guide dans la sélection de Linkbox dans la liste des fournisseurs et la saisie des informations de connexion requises, puis teste la connexion avant de l'enregistrer. Une fois ajouté, Linkbox apparaît comme un onglet dans votre panneau Explorer, comme tout autre distant configuré, vous permettant de parcourir les dossiers, prévisualiser les fichiers et vérifier les tailles sans ouvrir d'onglet de navigateur.

Comme RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre sur Windows, macOS et Linux, Linkbox se retrouve directement à côté de votre Google Drive, vos buckets S3 ou vos partages NAS dans la même vue d'explorateur — pas besoin d'une application distincte pour chaque service.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

Une fois connecté, utilisez le Remote Manager pour consulter ou modifier la configuration de Linkbox à tout moment, et basculez entre plusieurs panneaux si vous comparez le contenu de Linkbox avec un autre distant côte à côte.

## Sauvegarder automatiquement le contenu de Linkbox

Réenvoyer manuellement des fichiers vers Linkbox après chaque modification est facile à oublier. Le Job Manager de RcloneView vous permet de définir une tâche de synchronisation, de copie ou de téléchargement qui récupère les fichiers nouveaux et modifiés depuis Linkbox vers un lecteur local, un SSD externe ou un autre fournisseur cloud, de manière répétée. L'assistant de tâche en 4 étapes couvre la sélection de la source et de la destination, la concurrence des transferts et le filtrage — vous pouvez ainsi, par exemple, exclure les fichiers temporaires ou plafonner l'ancienneté maximale des fichiers avant qu'une sauvegarde ne s'exécute.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

Effectuez d'abord un Dry Run pour prévisualiser exactement quels fichiers seraient copiés ou supprimés avant de lancer un transfert réel — utile la première fois que vous pointez une tâche vers un dossier Linkbox dont vous n'avez pas entièrement vérifié le contenu.

## Planifier et surveiller les tâches Linkbox

Pour les utilisateurs de licence PLUS, l'étape de planification du Job Manager prend en charge une syntaxe de type crontab, de sorte qu'une sauvegarde Linkbox puisse s'exécuter chaque nuit, chaque semaine, ou selon toute autre cadence adaptée à vos besoins de rétention, sans que vous ayez à penser à la déclencher. Les utilisateurs de licence FREE peuvent toujours exécuter les mêmes tâches manuellement ou en une seule exécution ponctuelle en cas de besoin.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

Chaque exécution est enregistrée dans Job History avec l'heure de début, la durée, la vitesse de transfert et le nombre de fichiers, afin que vous puissiez confirmer qu'une sauvegarde Linkbox s'est terminée avec succès ou enquêter sur un transfert échoué sans avoir à fouiller dans les journaux bruts.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet Remote et ajoutez Linkbox comme nouveau distant via l'assistant de configuration.
3. Créez une tâche de synchronisation ou de sauvegarde pointant de Linkbox vers votre destination préférée.
4. Lancez un Dry Run, puis enregistrez la tâche et planifiez-la éventuellement pour une exécution récurrente.

Une fois Linkbox intégré à RcloneView, il cesse d'être une destination distincte à retenir et devient simplement un autre dossier dans votre flux de travail cloud unifié.

---

**Guides associés :**

- [Manage Gofile Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Pixeldrain Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Manage Uptobox Cloud Downloads with RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
