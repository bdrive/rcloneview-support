---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "Éliminer les fichiers système parasites de la synchronisation cloud — Exclure .DS_Store et Thumbs.db avec RcloneView"
authors:
  - kai
description: "Empêchez .DS_Store, Thumbs.db et desktop.ini d'encombrer vos sauvegardes cloud. Utilisez les filtres de synchronisation, Dry Run et Folder Compare de RcloneView pour les tenir à l'écart."
keywords:
  - exclure .DS_Store de la synchronisation cloud
  - Thumbs.db sauvegarde cloud
  - desktop.ini encombrement de synchronisation
  - supprimer les fichiers parasites du stockage cloud
  - rclone exclure les fichiers système
  - filtres personnalisés RcloneView
  - synchronisation cloud propre macOS Windows
  - filtre de synchronisation fichiers cachés
  - conseils de synchronisation cloud multiplateforme
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Éliminer les fichiers système parasites de la synchronisation cloud — Exclure .DS_Store et Thumbs.db avec RcloneView

> Les fichiers de métadonnées du système d'exploitation encombrent vos sauvegardes. Quelques règles de filtre suffisent à les écarter définitivement.

Ouvrez un dossier cloud partagé utilisé à la fois par des Mac et des PC Windows et vous trouverez généralement un `.DS_Store` dans chaque répertoire, un `Thumbs.db` à côté de chaque lot d'images et des `desktop.ini` éparpillés dans toute l'arborescence. Ils sont petits, mais gonflent le nombre de fichiers, apparaissent comme « différents » lors des comparaisons et déclenchent des renvois inutiles. RcloneView vous permet de les exclure des tâches de synchronisation grâce à des règles de filtre, puis de vérifier que la destination est propre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi ces fichiers reviennent sans cesse

Le Finder de macOS écrit `.DS_Store` pour enregistrer les réglages d'affichage d'un dossier. L'Explorateur Windows crée `Thumbs.db` pour mettre en cache les miniatures d'images et `desktop.ini` pour enregistrer la personnalisation des dossiers. Chaque fois que quelqu'un parcourt un dossier synchronisé ou un lecteur monté, le système d'exploitation peut réécrire ces fichiers, si bien que la synchronisation suivante détecte un fichier « modifié » et le transfère à nouveau.

Imaginez une agence de design avec 40 000 dossiers de projets sur un NAS synchronisé chaque nuit vers le cloud. Même si le travail réel n'a changé que dans quelques dossiers, chaque dossier parcouru peut produire un nouveau fichier de métadonnées, ce qui encombre le journal de la tâche et noie les transferts qui comptent.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## Ajouter des filtres d'exclusion à votre tâche de synchronisation

Ouvrez la tâche dans **Job Manager**, cliquez sur **Edit**, puis allez à **Step 3: Filtering Settings**. Dans les filtres personnalisés, ajoutez une règle d'exclusion par nom de fichier : `.DS_Store`, `Thumbs.db` et `desktop.ini`. Si votre équipe utilise aussi Office, pensez à exclure les fichiers de verrouillage temporaires qui commencent par `~$`. Les règles utilisent la syntaxe de filtre de rclone, la même que celle des exemples documentés comme `.iso` et `.git/`.

Les filtres s'appliquent à chaque exécution de la tâche, y compris les exécutions planifiées avec la licence PLUS : il suffit donc de les configurer une seule fois. Utilisez **Export** dans Job Manager pour enregistrer la tâche dans un fichier JSON, puis **Import** sur d'autres machines afin que tout le monde utilise les mêmes règles.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## Prévisualiser, nettoyer et vérifier

Lancez un **Dry Run** après l'enregistrement. L'aperçu ne devrait plus lister de fichiers de métadonnées à transférer. S'ils apparaissent encore, vérifiez l'orthographe et la casse de chaque règle, car une faute de frappe est une raison fréquente pour laquelle un filtre semble ignoré.

Les filtres empêchent le transfert de nouvelles copies, mais les fichiers déjà présents dans le cloud y restent. Ouvrez la destination dans le panneau Explorer, repérez les restes et supprimez-les avec le clic droit **Delete**. Pour une vérification complète, ouvrez **Compare** entre la source et la destination et utilisez « Show right-only files » pour trouver les fichiers de métadonnées laissés par les exécutions précédentes. Avec la licence PLUS, Folder Compare with Filter applique les mêmes exclusions à la vue de comparaison.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## Pour commencer

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux : les mêmes règles de filtre fonctionnent donc quel que soit le système qui a créé les fichiers.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Modifiez votre tâche de synchronisation et ajoutez `.DS_Store`, `Thumbs.db` et `desktop.ini` comme filtres d'exclusion personnalisés.
3. Lancez un **Dry Run** pour confirmer que les fichiers de métadonnées n'apparaissent plus dans les transferts.
4. Utilisez **Compare** pour trouver et supprimer les restes déjà présents dans le cloud.

Des journaux de tâches plus courts et des sauvegardes plus propres rendent les changements importants plus faciles à repérer.

---

**Guides associés :**

- [Corriger les filtres de synchronisation qui n'excluent pas les fichiers — Règles d'exclusion correctes avec RcloneView](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Filtres de profondeur de dossier et de taille de fichier maximales — Contrôler ce qui est synchronisé dans RcloneView](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Corriger les dossiers Bureau et Documents vides sous macOS — Autorisations avec RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
