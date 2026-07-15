---
sidebar_position: 1
description: Créez des Alias Remotes dans RcloneView pour mettre en favori des dossiers cloud profonds sous forme de remotes virtuels, pour un accès plus rapide et une organisation plus claire.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - accès rapide
  - raccourci de remote cloud
  - raccourci de remote
  - stockage cloud
  - gestionnaire de remotes
  - favori
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# Alias

## Comment ajouter un Alias avec RcloneView

Un **Alias Remote** est un distant virtuel qui met en favori un dossier spécifique à l'intérieur d'un distant cloud existant. Au lieu de parcourir une arborescence de dossiers profonde à chaque fois, cliquez sur l'Alias et le dossier cible s'ouvre immédiatement.

Utilisez Alias lorsque vous :

- Revenez fréquemment sur des dossiers de projet profonds.
- Gardez des structures de dossiers complexes et avez besoin de points d'entrée rapides.
- Gérez de nombreux distants et souhaitez une présentation plus claire.
- Voulez sélectionner des dossiers spécifiques plus rapidement dans Sync / Compare / Jobs.

**Résumé :** Alias = favori de dossier cloud.

---

### Ajouter un Alias Remote (via New Remote)

#### Étape 1 — Ouvrez **New Remote** et choisissez **Virtual > Alias**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### Étape 2 — Renseignez les informations de l'Alias

1. **Remote name** : saisissez le nom de l'Alias (par exemple, `MyAlias`).
2. **Remote (target folder)** : cliquez sur l'icône de dossier et choisissez le distant et le dossier existants que vous souhaitez.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   Une fois la sélection effectuée, confirmez les détails de l'Alias :  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. Cliquez sur **Add Remote** pour créer l'Alias.

#### Étape 3 — Vérifiez l'Alias dans Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

Ouvrez-le dans l'explorateur de fichiers pour confirmer qu'il pointe bien vers le dossier cible exact :  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Créer un Alias plus rapidement depuis l'Explorer

Vous pouvez créer rapidement un Alias Remote pour mettre en favori des dossiers distants fréquemment utilisés, pour un accès plus rapide et plus simple.

1. Dans le panneau **Explorer**, cliquez sur l'icône **`☆` Alias** à droite de la barre d'adresse.
2. Saisissez un nom pour votre nouvel **Alias**.
3. Le distant sera instantanément ajouté et ouvert en tant qu'**Alias Remote**, prêt à l'emploi.
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### Vérifier l'Alias Remote ajouté dans RcloneView

L'Alias Remote ajouté peut être vérifié de la même manière que n'importe quel autre distant cloud dans RcloneView.

1. Dans le menu supérieur, cliquez sur **`Remote Manager`** sous l'onglet **`Remote`**.
2. Confirmez que votre **Alias Remote** nouvellement créé apparaît dans la fenêtre **`Remote Manager`**.
3. Vous pouvez également ouvrir un nouvel onglet dans le panneau Explorer à l'aide du bouton **`☆`** et vérifier que l'Alias Remote est disponible pour la navigation.

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### Pourquoi utiliser les Alias Remotes

- Gagnez du temps : accédez à des dossiers profonds en un seul clic.
- Gardez Remote Manager ordonné en faisant apparaître les chemins clés comme des entrées séparées.
- Idéal pour les structures d'équipe/de lecteurs partagés complexes.
- Entièrement utilisable dans les workflows Sync / Compare / Job comme n'importe quel distant.

---

### Résumé

| Fonctionnalité             | Description                                        |
| --------------------------- | -------------------------------------------------- |
| **Alias via New Remote**    | Créer un distant dédié pour un dossier profond      |
| **Alias via Explorer**      | Ajouter instantanément le dossier actuel comme Alias |
| **Affichage Remote Manager**| Répertorié comme n'importe quel autre distant       |
| **Cas d'usage**             | Accès rapide, organisation, automatisation          |

Alias est simple mais puissant : aplatissez des arborescences complexes, accédez directement à l'essentiel et accélérez chaque tâche cloud.

