---
slug: free-vs-plus-license-rcloneview
title: "Licence FREE vs PLUS — Comparaison des fonctionnalités dans RcloneView"
authors:
  - alex
description: "Comparez les fonctionnalités des licences FREE et PLUS de RcloneView côte à côte — planification, multi-fenêtres, montage automatique et comparaison filtrée — pour choisir le bon plan."
keywords:
  - licence RcloneView
  - RcloneView FREE vs PLUS
  - fonctionnalités RcloneView PLUS
  - synchronisation cloud planifiée
  - gestionnaire de fichiers multi-fenêtres
  - montage automatique au démarrage
  - comparaison de dossiers avec filtre
  - comparaison des licences RcloneView
  - automatisation de la synchronisation cloud
  - gestionnaire de fichiers multiplateforme
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Licence FREE vs PLUS — Comparaison des fonctionnalités dans RcloneView

> Sachez exactement ce que débloque chaque licence RcloneView avant de construire votre flux de travail de stockage cloud autour d'elle.

Choisir entre la licence FREE et PLUS ne devrait pas nécessiter de deviner. RcloneView divise clairement son ensemble de fonctionnalités : la licence FREE couvre déjà la gestion complète des fichiers, la synchronisation et le montage sur plus de 90 fournisseurs, tandis que PLUS ajoute l'automatisation et des capacités multi-instances pour les utilisateurs avancés et les équipes. Ce guide détaille exactement ce que contient chaque niveau afin que vous puissiez choisir la licence adaptée à votre façon de travailler.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que la licence FREE inclut déjà

La licence FREE n'est pas un essai limité — c'est une boîte à outils complète pour un usage quotidien. Le montage et le démontage des lecteurs cloud, les opérations complètes de l'explorateur de fichiers (copier, déplacer, supprimer, renommer), le Folder Compare de base, ainsi que l'ensemble du système Sync & Job Management sont tous inclus gratuitement. Cela signifie que la synchronisation 1:N (une source répliquée vers plusieurs destinations), le Job History avec journaux détaillés, les aperçus Dry Run avant l'exécution d'une synchronisation, et l'export/import des configurations de tâches fonctionnent tous avec FREE.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

Contrairement aux outils de montage uniquement, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE — sur les mêmes plus de 90 fournisseurs cloud, connectés via Remote Manager avec OAuth ou une configuration par identifiants selon le service.

## Ce que PLUS débloque

PLUS est conçu pour les personnes qui ont besoin que RcloneView fonctionne sans surveillance ou dans plusieurs contextes à la fois. La fonctionnalité phare est Schedule-Based Sync : une planification de type crontab avec des champs pour la minute, l'heure, le jour de la semaine, le jour du mois et le mois, ainsi qu'un simulateur de planification pour prévisualiser les prochaines heures d'exécution avant de valider.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

En plus de la planification, PLUS ajoute Auto Mount on Startup (afin que les lecteurs montés soient prêts dès le démarrage de votre machine), Auto Start Schedule on Startup, le support Multi-Window pour exécuter des instances RcloneView indépendantes avec leur propre état, et Folder Compare with Filter pour restreindre les comparaisons par nom de dossier ou type de fichier.

## Choisir la bonne licence pour votre flux de travail

Si vous déclenchez manuellement les transferts, parcourez le stockage cloud comme un gestionnaire de fichiers, et exécutez occasionnellement une comparaison ou une synchronisation, FREE couvre l'ensemble du flux de travail. Si vous avez besoin que les tâches de synchronisation se déclenchent selon un planning sans ouvrir l'application, que les lecteurs soient montés automatiquement après un redémarrage, ou de plusieurs fenêtres RcloneView indépendantes pour des projets distincts, PLUS supprime les étapes manuelles.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez vos distants et exécutez une synchronisation ou un montage manuel pour vérifier que l'ensemble de fonctionnalités FREE convient à votre usage quotidien.
3. Si vous constatez que vous répétez le même transfert à la même heure chaque jour, essayez de créer une planification pour voir si la planification PLUS vous convient.
4. Activez une clé de licence sous Help > Activate License une fois que vous avez décidé quel niveau correspond à votre flux de travail.

Adapter la licence à vos habitudes réelles — et non l'inverse — garde votre configuration de stockage cloud simple et prévisible.

---

**Guides connexes :**

- [Bonnes pratiques de planification — Cron et nouvelles tentatives dans RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Explorer parallèle multi-fenêtres dans RcloneView](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [Folder Compare avec filtre dans RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
