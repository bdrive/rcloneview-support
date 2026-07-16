---
slug: tiered-cloud-archive-glacier-rcloneview
title: "Sauvegarde cloud par paliers vers S3 Standard, Wasabi et Glacier Deep Archive avec RcloneView"
authors:
  - tayson
description: Construisez un pipeline de sauvegarde chaud-tiède-froid avec RcloneView entre S3/Wasabi pour des restaurations rapides et Glacier Deep Archive pour une rétention à très faible coût, grâce à des tâches de synchronisation/copie planifiées et des politiques de cycle de vie.
keywords:
  - glacier deep archive
  - stockage à froid
  - sauvegarde par paliers
  - rclone s3
  - rcloneview
  - archive wasabi
  - politique de cycle de vie
  - sauvegarde cloud
  - rétention d'archives
tags:
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sauvegarde cloud par paliers vers S3 Standard, Wasabi et Glacier Deep Archive avec RcloneView

> Gardez les restaurations récentes rapides et la rétention à long terme peu coûteuse : chaud dans S3 Standard, tiède dans Wasabi/R2, et archive dans Glacier Deep Archive—avec les planifications RcloneView et les politiques de cycle de vie des buckets.

Une seule classe de stockage convient rarement à tous les fichiers. Concevez un pipeline par paliers : copiez les données récentes vers S3 Standard pour un accès rapide, effectuez un miroir vers un palier tiède à faible coût (Wasabi/R2) pour la redondance géographique, et envoyez des instantanés mensuels vers Glacier Deep Archive pour la rétention de conformité. RcloneView superpose une interface graphique à rclone afin que vous puissiez planifier des synchronisations, vérifier avec Compare, et conserver les règles de cycle de vie intactes—sans scripts shell.

<!-- truncate -->

**Documentation pertinente**

- Créer des tâches de synchronisation : https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Planification et exécution des tâches (Plus) : https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Comparer des dossiers : https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Monter en tant que lecteur local : https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Pourquoi une sauvegarde par paliers avec RcloneView

- Vitesse de récupération : les fichiers récents restent dans S3 Standard pour des extractions à faible latence.
- Maîtrise des coûts : copie tiède dans Wasabi/R2 ; archivage profond dans Glacier pour quelques centimes par To-mois.
- Résilience : le multi-cloud et le multi-région réduisent le risque lié à un seul fournisseur.
- Sans script : des tâches, planifications et journaux visuels au lieu de cron/YAML.
- Preuve : les tâches de comparaison révèlent les écarts avant que vous n'ayez besoin de restaurer.

## Architecture en un coup d'œil

```
[Primary (NAS/Drive/OneDrive)] --(Hourly Sync)--> [S3 Standard hot copy]
                                         \
                                          --(Daily Sync)--> [Wasabi/R2 warm copy]
                                          --(Monthly Copy)--> [Glacier Deep Archive]
```

- Chaud : S3 Standard (restauration rapide).
- Tiède : Wasabi ou R2 (économique et adapté aux restaurations en termes de sortie de données).
- Froid : Glacier Deep Archive pour une rétention de 90 à 365 jours (utilisez le cycle de vie du bucket pour transitionner les objets).

## Prérequis

- Trois remotes configurés dans RcloneView (par exemple, `s3:hot`, `wasabi:warm`, `s3:archive`).
- Versionnage activé sur les buckets chaud/tiède ; règles de cycle de vie sur le bucket d'archive pour transitionner vers Glacier Deep Archive.
- Permissions IAM/API : lecture/écriture/liste + multipart ; permissions de restauration Glacier pour le palier froid.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Étape 1 : Créer les tâches de synchronisation chaude et tiède

1. Créez une tâche **Sync** (Primaire -> S3 chaud).
2. Dans **Paramètres avancés**, définissez les nombres de transferts et activez la comparaison de sommes de contrôle si les deux côtés prennent en charge les hachages.
3. Dans **Paramètres de filtrage**, excluez les dossiers de cache/temporaires.
4. Créez une deuxième tâche **Sync** (Primaire -> Wasabi/R2 tiède) avec des paramètres et filtres similaires.
5. Enregistrez les deux tâches dans le Gestionnaire de tâches.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Étape 2 : Ajouter la tâche de copie vers l'archive froide

1. Créez une tâche **Copy** (S3 chaud -> bucket d'archive Glacier). Utilisez Copy, pas Sync, pour éviter les suppressions sur l'archive.
2. Dans **Paramètres avancés**, définissez les nombres de transferts et la comparaison de sommes de contrôle selon les besoins.
3. Utilisez des règles de cycle de vie de bucket pour transitionner les objets vers Glacier Deep Archive et faire expirer les anciennes versions après les périodes de conformité.

## Étape 3 : Tout planifier

- Dans l'assistant de tâche (Étape 4 : Planification, Plus), définissez les cadences : chaud toutes les heures, tiède chaque nuit, froid mensuel.
- Utilisez **Simulate** pour prévisualiser les planifications et définir les nombres de tentatives dans les Paramètres avancés.
- Ajoutez une comparaison hebdomadaire (chaud vs tiède) pour détecter les écarts tôt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Étape 4 : Vérifier l'intégrité

- Exécutez Compare entre le chaud et le tiède après la première synchronisation complète.
- Pour l'archive, effectuez des vérifications ponctuelles de restauration : réalisez une petite récupération Glacier et confirmez que les fichiers s'ouvrent correctement.
- Conservez un petit fichier témoin (par exemple, `canary.txt`) dans chaque palier et vérifiez sa présence dans les rapports Compare.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Étape 5 : Playbook de restauration

- Restaurations rapides : récupérez depuis le tiède (Wasabi/R2) ou le chaud (S3 Standard) selon la sortie de données/l'emplacement.
- Restaurations profondes : lancez une restauration Glacier pour le préfixe nécessaire ; puis effectuez une copie vers le tiède/chaud.
- Utilisez Mount dans RcloneView pour parcourir avant une copie en masse afin d'éviter de restaurer les mauvais dossiers.

## Conseils d'optimisation

- Sensible à la latence/sortie de données : réduisez les nombres de transferts pendant les heures de bureau ; augmentez-les en dehors des heures de pointe.
- Coûts Glacier : regroupez les archives mensuellement ; évitez les téléversements fréquents de petite taille pour réduire les requêtes PUT et de récupération.
- Sécurité : associez le chaud/tiède avec Object Lock (voir le guide sur l'immuabilité) pour bloquer les suppressions par ransomware.
- Nommage : préfixez les instantanés avec des dossiers datés (par exemple, `archive/2025-11/`) pour simplifier le cycle de vie et les restaurations.

## Liste de vérification pour le dépannage

- Délais de restauration : la récupération Glacier peut prendre des heures—planifiez le RPO/RTO en conséquence.
- AccessDenied sur l'archive : assurez-vous que le rôle IAM autorise `glacier:InitiateJob`/restore pour le bucket.
- Écart détecté : relancez la synchronisation chaud/tiède ; si des objets manquent dans l'archive, recopiez le delta depuis le chaud.
- Flambée des coûts : activez l'expiration du cycle de vie après la rétention ; limitez la concurrence pendant les pics de sortie de données.



Faites les paliers une fois, planifiez toujours, et gardez à la fois les coûts et le RPO sous contrôle avec RcloneView.

<CloudSupportGrid />
