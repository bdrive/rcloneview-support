---
slug: fix-cloud-sync-symlink-errors-rcloneview
title: "Corriger les erreurs de liens symboliques lors de la synchronisation cloud — Résoudre les problèmes de transfert de liens avec RcloneView"
authors:
  - tayson
description: "Découvrez comment corriger les erreurs de liens symboliques lors de la synchronisation cloud dans RcloneView — comprenez comment rclone gère les liens symboliques et configurez les bons réglages pour éviter les échecs."
keywords:
  - erreurs de liens symboliques synchronisation cloud
  - rclone symlink
  - dépannage RcloneView
  - option copy-links
  - erreurs de synchronisation cloud
  - transfert de liens symboliques
  - options rclone
  - erreurs de synchronisation de fichiers
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de liens symboliques lors de la synchronisation cloud — Résoudre les problèmes de transfert de liens avec RcloneView

> Les liens symboliques peuvent silencieusement perturber les tâches de synchronisation cloud — voici comment comprendre le comportement de rclone vis-à-vis des liens symboliques et configurer RcloneView pour les gérer correctement.

Si vos tâches de synchronisation cloud échouent avec des erreurs inattendues ou que des fichiers semblent disparaître, les liens symboliques pourraient en être la cause. Rclone — le moteur qui alimente RcloneView — a un comportement par défaut spécifique pour les liens symboliques qui surprend de nombreux utilisateurs. Comprendre ce comportement et savoir quels réglages ajuster dans RcloneView permettra de résoudre rapidement la plupart des problèmes de synchronisation liés aux liens symboliques.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment rclone gère les liens symboliques par défaut

Par défaut, rclone suit les liens symboliques et transfère le fichier ou le répertoire vers lequel pointe le lien symbolique — il ne transfère pas le lien symbolique lui-même. Cela signifie que si vous avez un lien symbolique pointant vers un fichier volumineux situé ailleurs sur votre système, rclone copiera le contenu réel du fichier vers la destination cloud. Dans la plupart des cas, il s'agit du comportement souhaité, mais cela peut prêter à confusion lorsque la cible du lien symbolique n'existe pas, se trouve en dehors de la racine de synchronisation, ou crée des références circulaires.

Lorsque la cible d'un lien symbolique est manquante ou inaccessible, rclone enregistrera une erreur dans le journal et ignorera le lien symbolique. Ces fichiers ignorés peuvent facilement passer inaperçus dans un long journal de transfert. Le panneau **Historique des tâches** de RcloneView enregistre ces erreurs, alors vérifiez toujours l'historique après la fin d'une tâche pour confirmer qu'aucun fichier n'a été ignoré silencieusement.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history for symlink errors in RcloneView" class="img-large img-center" />

## Utiliser l'option --copy-links dans RcloneView

Si vous souhaitez que rclone suive les liens symboliques et copie le contenu de la cible (même si cette cible se trouve en dehors de la racine de synchronisation), vous pouvez passer l'option `--copy-links` via le réglage **Global Rclone Flags** de RcloneView. Ouvrez les préférences de RcloneView, localisez le champ **Global Rclone Flags**, et ajoutez `--copy-links`. Cela indique à rclone de traiter les liens symboliques comme des fichiers normaux en copiant le contenu sous-jacent.

Utilisez `--copy-links` avec précaution sur les systèmes où les liens symboliques pointent vers des répertoires très volumineux, car cela peut considérablement augmenter la taille du transfert. Notez également que certains fournisseurs de stockage cloud imposent des restrictions sur la longueur des noms de fichiers ou des chemins, ce qui peut poser problème si la cible du lien symbolique a un chemin long.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags in RcloneView settings" class="img-large img-center" />

## Exclure les liens symboliques avec des filtres

Une alternative plus sûre pour de nombreux flux de travail consiste à exclure entièrement les liens symboliques de la synchronisation. Dans la configuration des tâches de RcloneView, vous pouvez ajouter des règles de filtrage pour ignorer les liens symboliques. Utilisez l'option `--exclude` avec des motifs correspondant aux noms de vos liens symboliques, ou utilisez `--links` pour copier les liens symboliques sous forme de fichiers texte (en stockant le chemin de la cible du lien plutôt que le contenu). Cette approche rend votre synchronisation prévisible sans risque de transferts inattendus et volumineux.

Pour les projets tels que les dépôts de développement logiciel où les liens symboliques sont courants, il est recommandé de combiner des règles de filtrage avec une exécution à blanc avant de lancer une synchronisation réelle. Le mode d'exécution à blanc de RcloneView indique précisément quels fichiers seraient transférés, ignorés ou en erreur — vous donnant confiance avant de vous engager dans une synchronisation complète.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using filters and dry run to handle symlinks in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Après une synchronisation échouée, ouvrez l'**Historique des tâches** pour identifier les messages d'erreur liés aux liens symboliques.
3. Accédez aux préférences de RcloneView et ajoutez `--copy-links` aux **Global Rclone Flags** si vous souhaitez que le contenu des liens symboliques soit transféré.
4. Sinon, ajoutez des règles de filtrage dans l'**Assistant de tâche** pour exclure les liens symboliques du périmètre de synchronisation.
5. Effectuez une **exécution à blanc** pour vérifier le comportement avant de lancer une synchronisation réelle.

Gérer correctement les liens symboliques est l'un de ces petits détails de configuration qui fait une grande différence en matière de fiabilité de la synchronisation — et RcloneView vous donne tous les outils pour bien le faire.

---

**Guides connexes :**

- [Options rclone personnalisées et paramètres avancés dans RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Règles de filtrage pour une synchronisation sélective dans RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dépanner les erreurs rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
