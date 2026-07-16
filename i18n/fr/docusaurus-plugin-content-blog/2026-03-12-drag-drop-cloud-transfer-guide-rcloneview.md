---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "Glisser-déposer entre clouds — Le moyen le plus rapide de transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Transférez des fichiers entre Google Drive, OneDrive, S3 et plus de 70 clouds en les faisant glisser-déposer dans l'explorateur à deux volets de RcloneView. Aucune commande, aucun script."
keywords:
  - transfert cloud par glisser déposer
  - glisser déposer fichiers cloud
  - transfert de fichiers cloud facile
  - transfert cloud visuel
  - gestionnaire de fichiers cloud glisser déposer
  - transférer des fichiers entre clouds
  - migration cloud simple
  - transfert cloud sans code
  - explorateur cloud glisser déposer
  - transfert multi-cloud facile
tags:
  - RcloneView
  - drag-and-drop
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Glisser-déposer entre clouds — Le moyen le plus rapide de transférer des fichiers avec RcloneView

> Sélectionnez des fichiers sur Google Drive. Faites-les glisser vers votre bucket S3. Terminé. Pas de ligne de commande, pas de scripts, pas de processus de téléversement en cinq étapes. Juste du glisser-déposer entre deux clouds, quels qu'ils soient.

Le transfert de fichiers cloud ne devrait pas nécessiter un diplôme en informatique. L'explorateur à deux volets de RcloneView place côte à côte deux emplacements de stockage cloud — Google Drive et S3, OneDrive et Dropbox, NAS et Backblaze B2 — et vous permet de transférer des fichiers simplement en les faisant glisser d'un côté à l'autre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment ça marche

### L'explorateur à deux volets

RcloneView affiche deux emplacements de stockage côte à côte — comme un gestionnaire de fichiers à double volet :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **Volet gauche** : n'importe quel cloud, NAS ou lecteur local.
- **Volet droit** : n'importe quel autre cloud, NAS ou lecteur local.

### Glisser-déposer pour transférer

1. Accédez au dossier source d'un côté.
2. Accédez au dossier de destination de l'autre côté.
3. Sélectionnez des fichiers ou des dossiers.
4. Faites-les glisser d'un côté à l'autre.
5. Le transfert commence.

### Suivi en temps réel

Observez la progression du transfert pendant que les fichiers se déplacent :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## Ce que vous pouvez faire glisser

Toutes les combinaisons fonctionnent :

| De | Vers | Exemple |
|------|-----|---------|
| Google Drive | AWS S3 | Sauvegarder des documents sur S3 |
| OneDrive | Dropbox | Partager avec un client utilisant Dropbox |
| Lecteur local | Backblaze B2 | Téléverser une sauvegarde locale vers le cloud |
| NAS | Google Drive | Rendre les fichiers NAS accessibles à distance |
| S3 | Azure Blob | Migration inter-cloud |
| Dropbox | NAS | Télécharger des fichiers cloud vers un stockage local |

## Au-delà du simple glisser-déposer

### Pour les transferts récurrents → Créer une tâche

Si vous faites glisser les mêmes fichiers régulièrement, enregistrez cette action sous forme de tâche nommée. Planifiez-la ensuite pour qu'elle s'exécute automatiquement :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### Pour la vérification → Utiliser la comparaison de dossiers

Après le transfert, comparez les deux côtés pour vous assurer que tout est bien arrivé :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### Pour les transferts volumineux → Suivre la progression

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## Astuces

- **Faites glisser des dossiers** pour transférer des arborescences entières.
- **Sélectionnez plusieurs fichiers** avant de les glisser pour des transferts par lots.
- **Clic droit** pour des options supplémentaires (copier, déplacer, synchroniser).
- **Utilisez la barre d'adresse** pour naviguer rapidement vers des chemins spécifiques.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez vos comptes cloud** — deux fournisseurs (ou plus), au choix.
3. **Ouvrez-les côte à côte** dans l'explorateur à deux volets.
4. **Glissez-déposez** pour transférer.

Les transferts cloud, simplifiés.

---

**Guides associés :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Monter un stockage cloud](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
