---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Corriger les dossiers vides non synchronisés — Activer la création de répertoires avec RcloneView"
authors:
  - robin
description: "Découvrez pourquoi les dossiers vides disparaissent lors de la synchronisation cloud et comment corriger cela avec l'option de création de répertoires vides de RcloneView."
keywords:
  - dossiers vides non synchronisés
  - corriger dossiers manquants synchronisation cloud
  - RcloneView créer répertoires vides
  - structure de dossiers synchronisation cloud
  - rclone synchronisation répertoires vides
  - structure de dossiers non préservée
  - dossiers vides manquants après synchronisation
  - paramètres de synchronisation RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les dossiers vides non synchronisés — Activer la création de répertoires avec RcloneView

> Si une tâche de synchronisation laisse de côté vos dossiers vides soigneusement organisés, la solution est un simple interrupteur dans la configuration de synchronisation de RcloneView, pas un bug de votre fournisseur cloud.

La plupart des moteurs de synchronisation, y compris rclone, ne transfèrent que les objets contenant réellement des données — un dossier vide n'a rien à copier, il est donc ignoré entièrement par défaut. C'est sans conséquence pour une sauvegarde à plat, mais cela casse tout flux de travail qui dépend d'une structure de dossiers fixe, comme un modèle de projet, une arborescence d'accueil client, ou des répertoires de type placeholder qu'une équipe s'attend à voir avant même que des fichiers n'y arrivent. RcloneView affiche directement dans l'assistant de synchronisation le paramètre qui contrôle ce comportement, vous n'avez donc pas besoin de toucher un fichier de configuration ni de relancer une tâche à l'aveugle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les dossiers vides sont abandonnés

Lorsque RcloneView (via rclone) parcourt une arborescence source pendant une synchronisation, il construit sa liste de transfert à partir des fichiers, pas des répertoires. Un dossier qui ne contient que des sous-dossiers sans aucun fichier en dessous, où que ce soit, ne produit aucun objet transférable, si bien que rien n'indique à la destination que ce dossier devrait exister. C'est un comportement de synchronisation attendu, pas un défaut — mais cela surprend quiconque suppose qu'une synchronisation dossier à dossier préserve l'arborescence exacte, branches vides comprises.

<img src="/support/images/en/blog/new-remote.png" alt="Assistant de configuration de synchronisation RcloneView affichant les options de l'étape 1" class="img-large img-center" />

La solution se trouve à l'étape 1 de l'assistant de configuration de synchronisation, aux côtés de la source, de la destination et du sens de synchronisation — facile à manquer au premier passage car elle est désactivée par défaut.

## Activer « Créer des répertoires vides »

À l'étape 1 de l'assistant de synchronisation en 4 étapes, activez l'option « Créer des répertoires vides » avant d'enregistrer la tâche. Une fois activée, RcloneView demande à rclone de reproduire l'arborescence complète à la destination, y compris les branches qui ne contiennent actuellement aucun fichier. Cela compte surtout pour les tâches exécutées de manière répétée selon un planning — un dossier vide aujourd'hui pourrait recevoir des fichiers la semaine prochaine, et disposer d'une structure de destination déjà prête évite toute confusion sur l'endroit où le nouveau contenu doit atterrir.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Interrupteur de création de répertoires vides à l'étape 1 de la configuration de synchronisation RcloneView" class="img-large img-center" />

Contrairement aux outils de montage seul, RcloneView synchronise et compare aussi des dossiers — dès la licence FREE — cette correction s'applique donc que vous mettiez en miroir une seule destination ou que vous répartissiez une source vers plusieurs destinations avec la synchronisation 1:N.

## Vérifier la correction avec Dry Run

Avant de lancer une synchronisation complète, utilisez la fonction Dry Run de RcloneView pour prévisualiser exactement quels dossiers et fichiers seront créés ou modifiés. Dry Run liste les opérations en attente sans toucher à la destination, ce qui constitue un moyen fiable de confirmer que vos dossiers vides apparaîtront réellement avant d'exécuter la tâche pour de bon — particulièrement utile si vous ajoutez cette option a posteriori à une tâche déjà en cours d'exécution depuis un moment.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une prévisualisation en simulation avant de lancer une tâche de synchronisation dans RcloneView" class="img-large img-center" />

Si une tâche planifiée a déjà été exécutée sans l'option activée, réenregistrez-la avec « Créer des répertoires vides » coché et exécutez-la à nouveau — la prochaine exécution comblera la structure de répertoires manquante à la destination.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez ou créez votre tâche de synchronisation et allez à l'étape 1 : Configurer le stockage.
3. Cochez « Créer des répertoires vides » avant d'enregistrer.
4. Lancez d'abord un Dry Run pour confirmer que la structure de dossiers correspond à vos attentes.

Une seule case à cocher suffit pour garder votre structure de dossiers intacte sur chaque cloud vers lequel vous synchronisez.

---

**Guides connexes :**

- [Guide de comparaison de dossiers — Détecter les différences avec RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — Prévisualiser la synchronisation cloud avant le transfert avec RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Règles de filtrage — Synchronisation sélective avec RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
