---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "Corriger la synchronisation cloud qui ne détecte pas les nouveaux fichiers — Comment résoudre avec RcloneView"
authors:
  - jay
description: "Corrigez les tâches de synchronisation cloud qui manquent des fichiers nouveaux ou récemment modifiés dans RcloneView en ajustant les paramètres de cache, les filtres et le comportement d'actualisation."
keywords:
  - synchronisation cloud ne détecte pas les nouveaux fichiers
  - rcloneview synchronisation fichiers manquants
  - corriger tâche de synchronisation qui ne se met pas à jour
  - cache de répertoire liste obsolète
  - dépannage rcloneview
  - problème d'actualisation de synchronisation cloud
  - nouveaux fichiers non synchronisés
  - corriger la détection de synchronisation rclone
  - la tâche ne prend pas en compte les modifications
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger la synchronisation cloud qui ne détecte pas les nouveaux fichiers — Comment résoudre avec RcloneView

> Lorsqu'une tâche de synchronisation se termine sans erreur mais laisse de côté des fichiers tout juste créés, la cause est presque toujours une liste de dossier obsolète, et non une connexion défaillante.

Un scénario de support fréquent : une tâche de synchronisation se termine sans erreur, mais des fichiers ajoutés au dossier source quelques minutes plus tôt n'apparaissent jamais sur la destination. Cela ressemble à une perte de données, mais dans la plupart des cas, la tâche a simplement lu une liste de répertoire mise en cache au lieu de l'état actuel du distant. RcloneView vous donne les outils pour diagnostiquer et corriger cela sans deviner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier si la vue Explorer est simplement obsolète

Avant de toucher aux paramètres de la tâche, confirmez que les fichiers sont réellement absents de la synchronisation plutôt que simplement masqués dans la vue. Ouvrez le distant source dans le panneau Explorer et appuyez sur F5 (ou Cmd+R sur macOS) pour forcer un Reload. La liste de fichiers de RcloneView peut conserver un instantané obsolète d'un dossier si vous ne l'avez pas actualisée depuis l'ajout des fichiers, et cela seul résout un nombre surprenant de signalements de « fichier manquant ».

Si les fichiers apparaissent après un Reload manuel mais que la tâche de synchronisation les a quand même ignorés lors de sa dernière exécution, le problème se situe dans le filtrage ou le comportement du cache de la tâche elle-même, et non dans la vue Explorer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution manuelle d'une tâche de synchronisation dans RcloneView pour forcer une nouvelle analyse" class="img-large img-center" />

## Examiner les règles de filtre et les paramètres de Max File Age

L'étape 3 de l'assistant de synchronisation vous permet de définir un filtre Max File Age, et il est facile de laisser une valeur trop agressive après avoir testé une tâche. Si Max File Age est réglé trop finement, les fichiers en dehors de cette fenêtre — y compris certains fichiers nouvellement ajoutés dont l'horodatage plus ancien provient d'une copie cloud précédente — sont silencieusement exclus de l'exécution. Ouvrez Edit Job pour la synchronisation concernée et vérifiez l'étape Filtering Settings pour toute règle Max File Age, Max File Size ou filtre personnalisé qui pourrait exclure les nouveaux fichiers par nom, extension ou chemin.

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux, de sorte que la même logique de filtrage s'applique, que vous dépanniez une tâche locale vers le cloud ou une tâche cloud à cloud.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Examen des paramètres de filtre de synchronisation pouvant exclure de nouveaux fichiers" class="img-large img-center" />

## Écarter les délais de cache du répertoire de montage

Si les fichiers « manquants » se trouvent derrière un lecteur monté plutôt que via une exploration directe du distant, le paramètre Dir Cache Time de votre configuration de montage en est généralement la cause. Un temps de cache de répertoire long accélère la navigation, mais signifie aussi que la vue montée ne reflétera pas les fichiers ajoutés ailleurs tant que ce cache n'a pas expiré. Réduisez Dir Cache Time dans Mount Manager pour les distants où la fraîcheur importe plus que la vitesse de navigation brute, ou démontez et remontez manuellement pour forcer une actualisation immédiate.

Exécutez ensuite un Dry Run sur la tâche de synchronisation — il liste exactement les fichiers désormais considérés comme nouveaux, afin que vous puissiez confirmer la correction avant de vous engager dans un transfert réel.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches montrant une exécution de synchronisation corrigée après réparation des paramètres de détection" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Forcez un Reload (F5) sur le distant source pour écarter une vue Explorer obsolète.
3. Ouvrez Edit Job et vérifiez Filtering Settings pour un Max File Age ou une règle personnalisée excluant les nouveaux fichiers.
4. Pour les distants montés, réduisez Dir Cache Time dans Mount Manager, puis remontez et relancez la tâche avec Dry Run pour confirmer.

La plupart des problèmes de synchronisation de « fichier manquant » proviennent d'une liste mise en cache ou d'un filtre négligé plutôt que d'un véritable échec de transfert, et Dry Run et Job History de RcloneView vous offrent un moyen rapide de confirmer que la correction a fonctionné.

---

**Guides associés :**

- [Règles de filtre — Synchronisation sélective dans RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — Aperçu de la synchronisation cloud dans RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Corriger la synchronisation planifiée qui ne s'exécute pas — Comment résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
