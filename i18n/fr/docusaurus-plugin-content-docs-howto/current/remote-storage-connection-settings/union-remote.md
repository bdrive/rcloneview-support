---
sidebar_position: 4
description: "Ajoutez un Remote Union dans RcloneView pour fusionner plusieurs emplacements Remote:Path en une seule vue de dossier unifiée sans dupliquer les données."
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## Comment ajouter Union avec RcloneView

Un **Remote Union** fusionne les dossiers de plusieurs distants cloud en un seul dossier unifié. Il est différent de Combine :

- **Combine** affiche les dossiers côte à côte.
- **Union** fusionne plusieurs dossiers en une seule vue.

Union est utile pour :

- Accéder aux données de plusieurs distants comme s'il s'agissait d'un seul dossier.
- La navigation en un seul panneau et les configurations de sauvegarde multi-cloud.
- Construire un système de fichiers virtuel sans copier ni déplacer les données.

---

## Créer un Remote Union

### Étape 1 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### Étape 2 — Saisir les détails du Union

Renseignez :

- **Remote name** : par exemple `MyUnion`.
- **Upstreams (Remote:Path)** : chaque Upstream est un emplacement de dossier réel.

Ajoutez le premier Upstream en sélectionnant un distant et un dossier :  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

Pour ajouter un autre Upstream, cliquez sur **Add Remote** et choisissez le dossier suivant :  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

Ajoutez autant d'Upstreams que nécessaire, puis vérifiez les paramètres :  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

Cliquez sur **Add Remote** pour créer le distant Union.

### Étape 3 — Confirmer dans Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## Vérifier le Union dans l'Explorateur

Ouvrez le distant Union dans l'Explorateur. Le contenu de tous les Upstreams apparaît comme un dossier fusionné unique.

**Upstreams 1 — exemple Google Drive**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
Correspond à `mygoogledrive:Meet Recordings`.

**Upstreams 2 — exemple Dropbox**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
Correspond à `drop:assets`.

---

## Combine vs Union (différences clés)

| Fonctionnalité      | Combine Remote                       | Union Remote                                |
| ------------------- | ------------------------------------- | -------------------------------------------- |
| Style d'affichage    | Affiche plusieurs dossiers séparément | Affiche une seule vue fusionnée              |
| Règles d'écriture    | Non fusionnées ; dossiers séparés     | Les nouvelles écritures suivent les politiques Union |
| Structure de fichiers | Folder1 / Folder2                    | Un seul dossier virtuel combiné              |
| Idéal pour           | L'organisation                        | La fusion multi-cloud et l'usage unifié      |

---

## Quand utiliser Union

- Visualiser des données de plusieurs clouds à la fois dans un seul dossier.
- Des projets répartis sur plusieurs distants nécessitant une vue unifiée.
- Exécuter des tâches de synchronisation/sauvegarde sur un seul distant virtuel.
- Fournir une vue fusionnée sans dupliquer le stockage.

---

## Résumé

| Fonctionnalité   | Description                                                |
| ---------------- | ----------------------------------------------------------- |
| **Union Remote**  | Fusionne plusieurs entrées `Remote:Path` en une seule vue   |
| **Upstreams**     | Dossiers distants réels qui composent le union              |
| **Avantages**     | Consolidation multi-cloud, accès en un seul panneau         |
| **Objectif**      | Navigation unifiée, sauvegardes/synchronisation, unification de projets |

Union Remote est un distant virtuel puissant pour gérer des environnements multi-cloud grâce à une vue de dossier fusionnée unique.
