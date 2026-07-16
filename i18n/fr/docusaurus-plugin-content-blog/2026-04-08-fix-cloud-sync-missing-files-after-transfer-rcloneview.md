---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "Corriger les fichiers manquants après une synchronisation cloud avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les fichiers manquants après des opérations de synchronisation cloud. Découvrez les causes courantes comme les règles de filtrage, les caractères spéciaux et les problèmes de sens de synchronisation dans RcloneView."
keywords:
  - rcloneview
  - fichiers manquants après synchronisation
  - fichiers manquants synchronisation cloud
  - fichiers rclone non synchronisés
  - données manquantes transfert cloud
  - sens de synchronisation incorrect
  - google docs non synchronisés
  - règles de filtrage rclone
  - problèmes de transfert de fichiers cloud
  - corriger la synchronisation cloud
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les fichiers manquants après une synchronisation cloud avec RcloneView

> Vous avez lancé une tâche de synchronisation et tout semblait avoir réussi, mais certains fichiers sont manquants à la destination. **RcloneView** fournit les outils nécessaires pour diagnostiquer exactement ce qui s'est passé et éviter que cela ne se reproduise.

Découvrir des fichiers manquants après une synchronisation cloud est l'une des situations les plus stressantes en gestion de fichiers cloud. Le transfert s'est terminé sans erreur, le journal de la tâche indique un succès, mais lorsque vous vérifiez la destination, certains fichiers restent introuvables. Avant de paniquer, sachez que cela est presque toujours dû à un problème de configuration logique plutôt qu'à une perte de données.

Ce guide passe en revue les raisons les plus courantes pour lesquelles des fichiers disparaissent après des opérations de synchronisation et vous montre comment utiliser les fonctionnalités de comparaison, de journalisation et de simulation (dry-run) de RcloneView pour identifier et résoudre le problème.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Des règles de filtrage excluent silencieusement des fichiers

La cause la plus fréquente de fichiers manquants est constituée par des règles de filtrage qui les excluent. Si vous avez configuré des règles `--exclude`, `--include` ou `--filter` et que vous les avez oubliées, les fichiers correspondant à ces motifs seront silencieusement ignorés lors de la synchronisation. Rclone ne vous avertit pas des fichiers exclus dans sa sortie standard.

**Erreurs de filtrage courantes :**

- Une règle `--include "*.jpg"` qui exclut par inadvertance tous les fichiers non-JPG, y compris les documents et les feuilles de calcul.
- Une règle `--exclude "*.tmp"` qui capture également les fichiers contenant `.tmp` au milieu de leur nom.
- Un indicateur `--min-size` qui ignore de petits fichiers importants comme des fichiers de configuration ou des notes texte.
- Des règles de filtrage restantes d'une tâche précédente qui ont été reportées lors de la création d'une nouvelle tâche.

**Comment diagnostiquer :** Dans RcloneView, examinez les indicateurs et filtres associés à votre tâche de synchronisation. Supprimez temporairement tous les filtres et lancez une comparaison pour voir si les fichiers manquants apparaissent. Réajoutez ensuite les filtres un par un pour identifier quelle règle les exclut.

## Confusion sur le sens de synchronisation

La différence entre `sync`, `copy` et `move` est essentielle, et choisir la mauvaise option peut faire disparaître des fichiers.

- **Sync** rend la destination identique à la source. Les fichiers présents à la destination mais absents de la source seront **supprimés**. Si vous synchronisez accidentellement dans le mauvais sens (de la destination vers la source au lieu de la source vers la destination), vos fichiers source pourraient être supprimés.
- **Copy** ajoute uniquement des fichiers à la destination. Elle ne supprime jamais rien. C'est l'option la plus sûre lorsque vous avez un doute.
- **Move** transfère les fichiers puis les supprime de la source.

Si des fichiers manquent à la source après une synchronisation, vous avez peut-être lancé une synchronisation dans le mauvais sens. Vérifiez toujours quel panneau est la source et lequel est la destination dans l'explorateur à deux panneaux de RcloneView avant de lancer l'opération.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google Docs, Sheets et Slides

Les documents Google Workspace (Docs, Sheets, Slides, Drawings) ne sont pas des fichiers traditionnels. Ce sont des objets natifs du cloud qui n'ont pas de taille fixe ni de format binaire téléchargeable dans leur état natif. Lors d'une synchronisation depuis Google Drive, rclone les convertit dans un format téléchargeable (par exemple `.docx`, `.xlsx`, `.pdf`), mais ce comportement dépend de votre configuration.

**Problèmes courants :**

- Les Google Docs apparaissent comme des fichiers de zéro octet ou sont entièrement ignorés si le format d'exportation n'est pas configuré.
- Les fichiers avec des noms très longs peuvent échouer à l'exportation sur certains systèmes d'exploitation.
- Les raccourcis dans Google Drive ne sont pas de véritables fichiers et ne seront pas transférés.

**Comment corriger :** Vérifiez que votre distant Google Drive est configuré avec les formats d'exportation appropriés. Alternativement, si vous n'avez pas besoin des Google Docs à la destination, excluez-les explicitement pour éviter toute confusion à propos de fichiers manquants.

## Sensibilité à la casse et caractères spéciaux

Différents fournisseurs cloud traitent les noms de fichiers différemment. Un fichier nommé `Report.PDF` et `report.pdf` peut être traité comme le même fichier sous Windows et OneDrive, mais comme deux fichiers différents sous Linux et S3. Lors de la synchronisation, l'un peut écraser l'autre silencieusement.

**Caractères problématiques :**

- Espaces ou points en fin de nom (rejetés par OneDrive et Windows).
- Deux-points, points d'interrogation et chevrons (invalides sous Windows).
- Emojis ou caractères Unicode (certains fournisseurs les gèrent de manière incohérente).
- Chemins de fichiers très longs dépassant 260 caractères sous Windows.

**Comment diagnostiquer :** Utilisez la fonctionnalité de comparaison de RcloneView pour lister les fichiers côte à côte. Recherchez les fichiers présents à la source mais manquants ou nommés différemment à la destination. Les journaux de rclone peuvent afficher des avertissements de renommage pour les fichiers contenant des caractères incompatibles.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Limites de taille de fichier et restrictions des fournisseurs

Certains fournisseurs cloud imposent des limites de taille de fichier maximale qui peuvent entraîner l'ignorance silencieuse de gros fichiers :

- Google Drive : 5 To par fichier.
- OneDrive : 250 Go par fichier.
- Dropbox : 2 Go par fichier via l'API (350 Go via le client de bureau).
- MEGA : les limites de taille de fichier varient selon le type de compte.
- De nombreux fournisseurs compatibles S3 : 5 To par objet, mais les parties de téléversement individuelles sont limitées à 5 Go.

Si vous synchronisez un fichier qui dépasse la limite du fournisseur de destination, son transfert échouera. Consultez l'historique de vos tâches dans RcloneView pour repérer d'éventuelles entrées d'erreur liées à des fichiers trop volumineux.

## Utiliser la comparaison pour trouver les fichiers manquants

La fonctionnalité de comparaison de dossiers de RcloneView est le moyen le plus rapide d'identifier précisément quels fichiers sont manquants. Ouvrez la source d'un côté et la destination de l'autre, puis lancez une comparaison. L'outil mettra en évidence les fichiers présents uniquement à la source, uniquement à la destination, ou qui diffèrent entre les deux.

Cela vous donne une liste définitive de ce qui n'a pas été transféré, que vous pouvez ensuite examiner individuellement. Recherchez des motifs -- tous les fichiers manquants sont-ils dans un même dossier ? Partagent-ils une extension de fichier ? Sont-ils tous en dessous d'une certaine taille ? Ces motifs indiquent la cause profonde.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Effectuer une simulation (dry-run) avant de synchroniser

La meilleure façon d'éviter les fichiers manquants est d'effectuer une simulation avant chaque synchronisation. Une simulation reproduit l'opération sans réellement transférer ou supprimer de fichiers. Elle vous montre exactement ce que rclone ferait, y compris quels fichiers seraient ignorés, transférés ou supprimés.

Dans RcloneView, vous pouvez utiliser l'indicateur `--dry-run` lors de la configuration d'une tâche de synchronisation. Examinez attentivement le résultat. Si des fichiers que vous vous attendiez à voir transférés ne sont pas listés, examinez vos règles de filtrage et votre configuration avant de lancer la synchronisation réelle.

## Stratégies de prévention

Pour éviter les fichiers manquants lors de futures synchronisations :

1. **Comparez toujours en premier.** Utilisez la fonctionnalité de comparaison de RcloneView avant de synchroniser pour comprendre l'état actuel des deux emplacements.
2. **Utilisez la copie plutôt que la synchronisation** lorsque vous ne voulez rien supprimer à la destination.
3. **Commencez par des simulations.** Ajoutez `--dry-run` pour tester de nouvelles configurations de synchronisation avant de les valider.
4. **Documentez vos règles de filtrage.** Conservez un enregistrement de ce que fait chaque règle de filtrage et de la raison de son existence.
5. **Vérifiez l'historique des tâches.** Après chaque synchronisation, consultez l'historique des tâches dans RcloneView pour confirmer que le nombre de fichiers attendu a bien été transféré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'explorateur à deux panneaux avec vos distants source et destination, puis lancez une comparaison de dossiers.
3. Vérifiez la configuration de votre tâche de synchronisation pour les règles de filtrage, le sens de synchronisation et tout indicateur pouvant exclure des fichiers.
4. Utilisez `--dry-run` pour prévisualiser l'opération de synchronisation avant de l'exécuter.

Les fichiers manquants après une synchronisation sont presque toujours un problème de configuration, et non une perte de données. Un diagnostic méthodique à l'aide des outils de comparaison et de journalisation de RcloneView permettra à chaque fois d'en identifier la cause.

---

**Guides associés :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchroniser instantanément les stockages distants](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
