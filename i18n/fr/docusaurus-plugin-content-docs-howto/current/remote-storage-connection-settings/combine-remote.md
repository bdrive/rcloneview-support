---
sidebar_position: 3
description: "Combinez plusieurs dossiers cloud en une seule vue virtuelle dans RcloneView sans copier de données, idéal pour la navigation multi-cloud et les tâches unifiées."
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## Comment ajouter un Combine avec RcloneView

Un **Combine Remote** fusionne des dossiers provenant de plusieurs remotes cloud en une seule vue virtuelle. Il ne copie ni ne déplace aucune donnée — il vous permet simplement de parcourir plusieurs emplacements comme s'il s'agissait d'un seul dossier.

Pourquoi c'est utile :

- Voir des données réparties sur plusieurs clouds en un seul endroit.
- Traiter des dossiers de projet provenant de différents services comme un seul espace de travail.
- Exécuter des tâches de sauvegarde/synchronisation comme s'il s'agissait d'un seul remote.
- Aucun stockage supplémentaire ni fichiers dupliqués.

Combine Remote est en pratique une visionneuse multi-cloud.

---

## Créer un Combine Remote

### Étape 1 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### Étape 2 — Saisir les détails du Combine

Trois champs sont nécessaires pour chaque entrée :

- **Remote name** : Nom du remote Combine (par ex., `MyCombine`).
- **Directory** : Nom du dossier tel qu'il apparaîtra dans la vue Combine (par ex., `Folder1`).
- **Remote Path** : Chemin cloud réel à inclure. Cliquez sur l'icône de dossier pour choisir parmi les remotes enregistrés.

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

Après avoir sélectionné le premier chemin :  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

Utilisez **Add Remote** pour ajouter Folder2, Folder3, et d'autres.  
Une fois toutes les entrées définies :  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

Cliquez sur **Add Remote** pour créer le remote Combine.

### Étape 3 — Confirmer dans Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## Vérifier les dossiers combinés dans l'Explorateur

Ouvrez le remote Combine dans l'Explorateur pour voir chaque dossier ajouté.

**Folder1 — exemple Google Drive**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
Affiche le même contenu que `mygoogledrive:Meet Recordings`.

**Folder2 — exemple Dropbox**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
Affiche le même contenu que `drop:assets`.

---

## Quand utiliser Combine

- Visualiser des données réparties sur plusieurs clouds en même temps.
- Consolider des dossiers de projet répartis sur plusieurs remotes.
- Gérer des tâches de sauvegarde ou de synchronisation via un seul remote virtuel.
- Conserver les structures d'origine intactes tout en unifiant la vue.
- Éviter le stockage dupliqué tout en obtenant un espace de travail combiné.

---

## Résumé

| Fonctionnalité           | Description                                    |
| ------------------------ | ----------------------------------------------- |
| **Combine Remote**       | Fusionne plusieurs dossiers en une seule vue virtuelle |
| **Aucune duplication de données** | Les fichiers restent à leur emplacement d'origine |
| **Ajout de remotes variés** | Fonctionne avec Drive, Dropbox, OneDrive, S3, etc. |
| **Cas d'usage**          | Navigation unifiée, sauvegarde multi-cloud, projets |

Combine Remote vous permet de gérer des données multi-cloud comme si elles se trouvaient en un seul endroit — sans déplacer ni dupliquer de fichiers.
