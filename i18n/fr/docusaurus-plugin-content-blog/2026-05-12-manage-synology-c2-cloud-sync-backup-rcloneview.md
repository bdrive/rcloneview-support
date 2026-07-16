---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "Gérer le stockage Synology C2 — Synchronisez et sauvegardez vos fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez Synology C2 à RcloneView et gérez facilement votre sauvegarde cloud. Synchronisez des fichiers, planifiez des tâches et surveillez les transferts via une interface graphique de bureau soignée."
keywords:
  - Synology C2 RcloneView
  - sauvegarde Synology C2
  - gérer le stockage Synology C2
  - Synology C2 rclone GUI
  - synchronisation cloud compatible S3
  - sauvegarde du stockage cloud Synology
  - automatiser la synchronisation Synology C2
  - configuration S3 RcloneView
  - transfert de fichiers Synology C2
  - sauvegarde planifiée Synology C2
tags:
  - synology
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Synology C2 — Synchronisez et sauvegardez vos fichiers avec RcloneView

> Synology C2 est le stockage cloud conçu par Synology — et avec RcloneView, vous pouvez le gérer depuis une interface visuelle sans écrire la moindre commande.

Synology C2 est le service de stockage cloud conçu pour étendre l'écosystème des propriétaires de NAS Synology, offrant un stockage objet compatible S3 qui s'intègre parfaitement aux outils basés sur rclone. Que vous utilisiez un DiskStation à la maison, gériez un serveur de fichiers pour une petite entreprise, ou ayez besoin d'un niveau de sauvegarde hors site supplémentaire, RcloneView facilite la navigation, la synchronisation et l'automatisation des transferts vers et depuis Synology C2. Comme Synology C2 expose une API standard compatible S3, vous bénéficiez des mêmes performances rclone fiables que celles offertes par n'importe quel grand fournisseur de stockage objet — le tout enveloppé dans une interface graphique de bureau claire.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Synology C2 en tant que distant compatible S3

Le stockage objet Synology C2 utilise une API standard compatible S3, vous le connectez donc dans RcloneView en sélectionnant Amazon S3 comme type de distant et en le pointant vers le point de terminaison (endpoint) Synology C2. Ouvrez l'onglet Remote, cliquez sur New Remote, et choisissez Amazon S3 comme fournisseur. Saisissez votre Access Key ID C2, votre Secret Access Key, et le point de terminaison régional de votre compte C2 — disponible dans le portail Synology C2 après avoir créé votre stockage et généré une paire de clés d'accès. Définissez le champ région pour qu'il corresponde à votre région C2, puis enregistrez.

Une fois le distant créé, il apparaît dans votre panneau Explorer comme n'importe quel autre stockage cloud. Vous pouvez parcourir les buckets et les dossiers, consulter la taille des fichiers et les dates de modification, et naviguer dans des arborescences de répertoires imbriqués sans quitter l'interface graphique.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## Parcourir et transférer des fichiers

Avec votre distant Synology C2 ouvert dans un panneau Explorer et un disque local ou un autre cloud dans le panneau adjacent, vous pouvez glisser-déposer des fichiers entre eux pour lancer un transfert immédiat. RcloneView confirme l'opération avant toute action, et l'onglet Transferring en bas de l'écran affiche la progression en direct : nombre de fichiers, octets transférés, et débit actuel.

Pour de gros volumes — un studio de photographie sauvegardant 2 To de fichiers RAW, par exemple — le moteur multi-thread de RcloneView déplace plusieurs fichiers en parallèle. Vous pouvez configurer le nombre de flux de transfert simultanés dans les paramètres avancés de la tâche pour maximiser le débit sans saturer votre connexion réseau.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## Créer des tâches de synchronisation pour une sauvegarde continue

Au-delà des transferts ponctuels, le gestionnaire de tâches de RcloneView vous permet de définir des tâches de synchronisation qui maintiennent un dossier source miroité vers un bucket Synology C2, à la demande ou selon un planning. Choisissez Sync comme type de tâche, sélectionnez votre source — un dossier local, un distant NAS Synology, ou un autre cloud — pointez la destination vers votre bucket C2, et configurez les préférences de filtrage : limites d'âge des fichiers, plafonds de taille et exclusions d'extensions sont tous configurables sans modifier le moindre fichier de configuration.

Avant la première synchronisation réelle, exécutez le Dry Run intégré. Il indique exactement quels fichiers seront copiés ou supprimés, pour éviter toute surprise lorsque des milliers de fichiers sont concernés. L'historique des tâches (Job History) enregistre chaque exécution avec horodatages, nombre de fichiers, tailles de transfert et codes de statut, pour une piste d'audit complète.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes automatisées (licence PLUS)

Pour une protection des données sans intervention manuelle, la licence PLUS de RcloneView débloque la planification de type crontab. Configurez une tâche de synchronisation Synology C2 pour s'exécuter chaque nuit, chaque semaine, ou à tout intervalle personnalisé en renseignant les champs Minute, Heure et Jour de la semaine dans l'étape Schedule de l'assistant de création de tâche. RcloneView exécute le transfert à l'heure configurée et enregistre le résultat dans l'historique des tâches — vous offrant une piste d'audit complète pour vérifier que les sauvegardes se sont déroulées et confirmer exactement quels fichiers ont été transférés, même lorsque vous êtes loin de la machine.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Dans le portail Synology C2, créez un bucket de stockage et générez une paire de clés d'accès.
3. Dans RcloneView, ouvrez l'onglet Remote > New Remote, choisissez Amazon S3, et saisissez votre Access Key ID C2, votre Secret Access Key et le point de terminaison régional.
4. Ouvrez le bucket C2 dans un panneau Explorer à côté de votre source, créez une tâche de synchronisation dans le gestionnaire de tâches, et exécutez d'abord un Dry Run.
5. Activez la planification (licence PLUS) pour automatiser les sauvegardes nocturnes ou hebdomadaires sans intervention manuelle.

Synology C2 vous offre un niveau de sauvegarde hors site étroitement intégré — RcloneView le transforme en un flux de travail planifié et surveillé que vous pouvez mettre en place en quelques minutes.

---

**Guides connexes :**

- [Sauvegarder un NAS vers plusieurs clouds avec RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Sauvegarder Synology sans Hyper Backup — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
