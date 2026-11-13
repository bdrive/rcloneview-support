---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "Résoudre les problèmes de synchronisation Google Docs et Sheets — gérer les fichiers natifs avec RcloneView"
authors:
  - casey
description: "Google Docs, Sheets et Slides sont recopiés ou signalés comme différents ? Découvrez pourquoi les fichiers natifs se comportent autrement et comment les gérer dans les tâches de synchronisation de RcloneView."
keywords:
  - erreurs de synchronisation google docs
  - problèmes de sauvegarde google sheets
  - synchronisation fichiers natifs google drive
  - google docs export rclone
  - filtre google docs rcloneview
  - sauvegarde google drive docx xlsx
  - formats d'export rclone drive
  - corriger synchronisation google drive rcloneview
  - sauvegarde fichiers google workspace
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les problèmes de synchronisation Google Docs et Sheets — gérer les fichiers natifs avec RcloneView

> Google Docs, Sheets et Slides ne sont pas des fichiers ordinaires, et une tâche de sauvegarde qui ignore cette différence continuera de vous surprendre.

Vous sauvegardez Google Drive vers un NAS ou un autre cloud, et la tâche se termine — mais les Docs et Sheets apparaissent comme des fichiers Word et Excel, Folder Compare les signale comme différents à chaque fois, ou ils réapparaissent dans la liste de copie à l'exécution suivante. Rien de tout cela ne signifie que le transfert est défaillant. RcloneView exécute ces tâches via rclone, et comprendre comment rclone traite les documents natifs Google vous permet de choisir le comportement que vous voulez vraiment.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les fichiers Google natifs se comportent différemment

Un Google Doc vit dans les éditeurs de Google ; aucun fichier binaire stocké ne se cache derrière. Lorsque rclone en copie un depuis Google Drive vers une destination non Google, il exporte le document dans un format téléchargeable — par défaut des formats Office comme `.docx`, `.xlsx` et `.pptx`.

Cette conversion a des effets de bord. Drive n'indique pas de taille fixe pour les documents natifs, donc les comparaisons basées sur la taille ne peuvent pas les associer à la copie exportée. Drive ne stocke pas non plus de hash MD5 pour eux, si bien qu'activer la somme de contrôle dans une tâche de synchronisation ne permet pas de les vérifier. Le résultat : des fichiers qui peuvent sembler « différents » à chaque vérification.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## Option 1 : exclure les Docs natifs des sauvegardes de fichiers

Si votre équipe n'a besoin de sauvegarder que les fichiers téléversés — PDF, images, vidéos — la solution la plus propre consiste à laisser de côté les documents natifs. À l'étape Step 3 de l'assistant de synchronisation, activez le filtre prédéfini **Google Docs**. La tâche se concentre alors sur les fichiers ordinaires et cesse de relister des documents qu'elle ne peut pas comparer.

Associez cela à un **Dry Run** avant la première exécution réelle. L'aperçu liste exactement les fichiers qui seront copiés, ce qui vous permet de confirmer que les Docs et Sheets ne sont plus dans la file d'attente.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## Option 2 : conserver volontairement les copies exportées

Parfois, les copies exportées sont justement l'objectif — un cabinet comptable peut vouloir archiver chaque feuille de calcul au format `.xlsx` sur un NAS pour qu'elle s'ouvre sans compte Google. Dans ce cas, gardez les fichiers natifs dans la tâche et considérez les copies converties comme l'archive.

Vous pouvez changer le format d'export via des flags rclone. Dans Settings, le champ **Global Rclone Flags** accepte des flags supplémentaires comme `--drive-export-formats` (par exemple `pdf` pour des archives en lecture seule). Testez d'abord le flag sur un petit dossier avec Dry Run, car il s'applique à toutes les tâches qui touchent Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## Vérifier les résultats dans Job History

Après chaque exécution, ouvrez Job History et vérifiez le statut, le nombre de fichiers et la taille totale. Si les chiffres varient de façon inattendue d'une exécution à l'autre, revoyez les règles de filtre de l'étape Step 3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## Pour commencer

Contrairement aux outils limités au montage, RcloneView synchronise et compare aussi des dossiers — avec la FREE License.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez Google Drive via la connexion OAuth dans le navigateur.
3. Décidez si les Docs natifs doivent être exclus avec le filtre Google Docs ou exportés en fichiers Office.
4. Prévisualisez la tâche avec Dry Run, lancez-la, puis confirmez le résultat dans Job History.

Une fois les fichiers natifs gérés délibérément, vos sauvegardes Google Drive cessent de produire de fausses alertes.

---

**Guides associés :**

- [Résoudre les erreurs de synchronisation Google Drive — dossiers manquants, tâches échouées et listes vides corrigés avec RcloneView](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [Règles de filtre RcloneView : exclure des dossiers et types de fichiers pour des synchronisations plus rapides et plus propres](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Aperçu Dry Run — tester la synchronisation cloud avant de valider les changements dans RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
