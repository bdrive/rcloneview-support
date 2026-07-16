---
slug: warm-standby-disaster-recovery-rcloneview
title: "Reprise après sinistre en veille chaude entre clouds avec RcloneView (S3, Wasabi, R2, OneDrive)"
authors:
  - tayson
description: Mettez en place une configuration de reprise après sinistre en veille chaude multi-région avec RcloneView et rclone sur AWS S3, Wasabi, Cloudflare R2, OneDrive ou Google Drive, grâce à la synchronisation planifiée, la comparaison et le basculement par montage.
keywords:
  - veille chaude
  - reprise après sinistre
  - sauvegarde multi-région
  - rclone s3
  - rcloneview
  - basculement cloud
  - comparaison de synchronisation
  - cloudflare r2
  - wasabi s3
tags:
  - disaster-recovery
  - multi-cloud
  - sync
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Reprise après sinistre en veille chaude entre clouds avec RcloneView (S3, Wasabi, R2, OneDrive)

> Conservez une copie active des données de production dans une autre région ou un autre cloud, et basculez en quelques minutes en cas d'incident.

La reprise après sinistre en veille chaude associe un emplacement principal (par exemple, AWS S3 ou OneDrive) à un site de secours mis à jour en continu (par exemple, Cloudflare R2 ou Wasabi). RcloneView superpose une interface graphique à rclone afin que vous puissiez planifier des synchronisations régulières, valider les écarts avec Compare, et monter le site de secours pour un basculement rapide, sans script shell.

<!-- truncate -->

**Documentation associée**

- Créer des tâches de synchronisation : https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Planification et exécution des tâches (Plus) : https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Monter comme lecteur local : https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- Comparer des dossiers : https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Pourquoi opter pour la veille chaude avec RcloneView

- Reprise plus rapide : les copies de secours sont à quelques minutes/heures du site principal, pas à quelques jours.
- Choix du cloud : combinez S3, Wasabi, R2, B2, Google Drive, Dropbox ou OneDrive.
- Sans script : créez des tâches via un assistant, pas en YAML/cron.
- Écarts visibles : Compare met en évidence les incohérences avant que vous n'ayez besoin de basculer.
- Restaurations plus sûres : montez le site de secours et copiez les données en retour sans toucher à la production.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## Stratégie et architecture

```
[Primary cloud/local/NAS] --(RcloneView scheduled Sync)--> [Standby cloud/region]
                                                \
                                                 --(Weekly Compare)--> [Drift report]
```

- Principal : là où les applications écrivent (bucket S3, site OneDrive, espace GDrive, NAS).
- Secours : une autre région/un autre fournisseur avec gestion des versions (R2/Wasabi/S3/B2).
- Contrôle : RcloneView exécute la synchronisation à intervalles réguliers ; Compare vérifie l'intégrité ; Mount permet un accès rapide pendant le basculement.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Prérequis

- Deux remotes configurés dans RcloneView (par exemple, `s3:prod-bucket` et `r2:standby-bucket`).
- Gestion des versions activée sur le site de secours pour la sécurité des restaurations.
- Autorisations IAM/API pour lister/lire/écrire des deux côtés.
- Fenêtre de bande passante pour la réplication planifiée (nocturne ou horaire).

## Étape 1 : construire la tâche de synchronisation de base

1. Créez une tâche Sync : Source = principal, Destination = secours.
2. Utilisez une synchronisation à sens unique pour refléter les fichiers nouveaux/modifiés ; conservez les suppressions si vous voulez une parité stricte.
3. Ajoutez des filtres pour les chemins bruyants (par exemple, cache/temp) à l'étape de filtrage.
4. Dans **Paramètres avancés**, ajustez le nombre de transferts et activez la comparaison par somme de contrôle si les deux côtés prennent en charge les hachages.
5. Enregistrez la tâche pour que les mêmes paramètres s'appliquent à chaque exécution (Gestionnaire de tâches).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Étape 2 : planifier les mises à jour continues

1. Dans l'assistant de tâche (étape 4 : Planification, licence Plus), activez la planification pour la tâche de reprise après sinistre.
2. Choisissez la cadence : horaire pour les données applicatives, nocturne pour les archives, et utilisez **Simuler** pour prévisualiser les prochaines exécutions.
3. Définissez le nombre de tentatives dans les Paramètres avancés pour les connexions instables.
4. Conservez une comparaison hebdomadaire manuelle pour détecter les écarts tôt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Étape 3 : vérifier et surveiller

- Utilisez Compare pour vous assurer que le nombre d'objets correspond avant de déclarer le site de secours prêt.
- Consultez l'historique des tâches pour repérer les échecs ou les tentatives, et relancez la tâche si une fenêtre a été manquée.
- Conservez la gestion des versions sur le site de secours afin de pouvoir récupérer les suppressions accidentelles.

## Étape 4 : plan de basculement

1. Montez le site de secours : utilisez le Gestionnaire de montage pour monter le remote de destination sur un chemin/une lettre de lecteur stable.
2. Redirigez les charges de travail vers le chemin monté ou vers le point de terminaison du bucket de secours.
3. Maintenez le site principal en lecture seule ou hors ligne jusqu'à ce que le tri de l'incident soit terminé.


## Conseils d'optimisation

- Applications sensibles à la latence : réduisez le nombre de transferts dans les Paramètres avancés et planifiez pendant les périodes de faible trafic.
- Conformité : conservez la gestion des versions sur le site de secours et exportez l'historique des tâches pour les audits.
- Maîtrise des coûts : excluez les dossiers de staging/temporaires via les Filtres et appliquez des politiques de cycle de vie sur le cloud de secours.
- Multi-cloud : exécutez des tâches distinctes si vous avez besoin de deux sites de secours (par exemple, R2 + Wasabi) à partir du même site principal.

## Liste de contrôle pour le dépannage

- Nombres non concordants : relancez Compare et consultez l'historique des tâches pour les éléments ignorés ; vérifiez que la gestion des versions est activée.
- Erreurs de permission : assurez-vous que les clés API autorisent lister/lire/écrire sur les deux clouds.
- La restauration supprime des données : utilisez Copy (et non Sync) lorsque vous ramenez des données vers la production.


Gardez votre site de secours chaud, testé et prêt, pour que le basculement soit un simple interrupteur, pas une course contre la montre.

<CloudSupportGrid />
