---
sidebar_position: 8
description: "Découvrez comment monter un stockage cloud distant en tant que lecteur virtuel avec RcloneView, y compris la configuration via l'Explorateur de distants, le Gestionnaire de montage et l'accès depuis la barre système."
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monter un stockage cloud en tant que lecteur local

:::important Prérequis avant de monter
Avant de monter, assurez-vous que le distant cible a déjà été ajouté à RcloneView.   
Voir : [Ajouter un nouveau distant](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## Monter un stockage distant dans RcloneView

RcloneView vous permet de monter un stockage distant en tant que lecteur virtuel pour un accès et une gestion plus faciles.  
Ce guide explique comment monter un stockage distant à l'aide de deux méthodes et gérer les configurations de montage.

### Méthode 1 : Monter depuis l'Explorateur de distants

Vous pouvez monter un dossier distant directement pendant que vous parcourez son contenu.

1. Dans le panneau **Explorateur de distants**, sélectionnez le dossier distant que vous souhaitez monter. 
2. Cliquez sur l'**icône de montage** (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />) dans le coin supérieur du panneau Explorateur de distants.
3. La boîte de dialogue **Montage** s'ouvrira avec le chemin du distant sélectionné déjà rempli.
4. Configurez les paramètres de montage :
   - **Cible** : Choisissez `Auto` ou attribuez manuellement une lettre de lecteur dans la liste.
   - (optionnel) cochez « Monter vers un chemin local » pour spécifier un emplacement de montage personnalisé.
   - Activez **Montage automatique** pour monter automatiquement ce distant au démarrage de RcloneView.
5. Cliquez sur **Enregistrer et monter** pour appliquer les paramètres et monter immédiatement.
   - Vous pouvez aussi cliquer sur **Enregistrer** pour simplement sauvegarder la configuration de montage et la monter plus tard.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>Options de montage avancées</summary>

Options de montage avancées

| Champ                        | Description                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nom du volume**    | (Optionnel) Définissez un nom personnalisé pour le volume monté. Ce nom peut être affiché dans votre gestionnaire de fichiers ou l'interface système.                                                                                                                                                        |
| **Type de montage**     | Sélectionnez le moteur de montage : <br /> - `cmount` (par défaut sous Windows) : utilise le moteur de montage interne de Rclone, basé sur C et de type FUSE, avec une haute compatibilité  <br />- `nfsmount` (alternative, principalement pour les environnements Linux/macOS). Utilise le protocole NFS pour monter le distant |
| **Lecteur réseau**  | Cochez cette case pour marquer le montage comme un lecteur réseau. Cela peut affecter la façon dont le système d'exploitation traite le dossier monté.                                                                                                                                                       |
| **Lecture seule**      | Active le mode lecture seule, empêchant les opérations d'écriture sur le distant.                                                                                                                                                                               |
| **Autoriser les autres**    | Autorise l'accès au système de fichiers monté par des utilisateurs autres que celui qui l'a monté (principalement utilisé sous Linux).                                                                                                                                                        |
| **Mode de cache**     | Contrôle le comportement de mise en cache. Options disponibles :  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />Le mode par défaut `writes` met en cache les opérations d'écriture.                                                                                              |
| **Taille max du cache** | Taille maximale autorisée du cache en octets.  <br />Exemple : 1073741824 = 1 Go.  <br />Définissez `-1` pour aucune limite.                                                                                                                                                            |
| **Âge max du cache**  | Durée pendant laquelle les données mises en cache restent valides. L'unité de temps est en **nanosecondes**. Exemple : 3600000000000 = 1 heure.                                                                                                                                               |
| **Durée du cache de répertoire** | Durée de validité du cache de répertoire. L'unité de temps est en **nanosecondes**. Exemple : 300000000000 = 5 minutes.                                                                                                                                   |

💡 N'utilisez ces options que si vous êtes familier avec les paramètres de montage. Les valeurs par défaut conviennent à la plupart des utilisateurs.

</details>
### Méthode 2 : Monter via le Gestionnaire de montage

Vous pouvez également configurer et monter un stockage à l'aide du **Gestionnaire de montage**.

1. Cliquez sur le bouton **`Gestionnaire de montage`** sous l'onglet **`Distant`** dans la barre de menu supérieure.  
2. Cliquez sur **`Nouveau montage`** pour créer une nouvelle configuration de montage.  
3. Sélectionnez le distant et, éventuellement, spécifiez un sous-répertoire à monter.  
4. Configurez les options de montage :  
   - **Cible** : Choisissez `Auto` ou attribuez manuellement une lettre de lecteur dans la liste.  
   - (Optionnel) Activez **Monter vers un chemin local** pour spécifier un chemin de montage personnalisé.  
   - Activez **Montage automatique** pour monter automatiquement ce distant au démarrage de RcloneView.  
1. Cliquez sur **`Enregistrer`** pour sauvegarder la configuration de montage sans monter immédiatement.  
   - Pour enregistrer et monter le distant immédiatement, cliquez sur **`Enregistrer et monter`**.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## Afficher et gérer les lecteurs montés

Pour afficher ou gérer vos configurations de montage, ouvrez la boîte de dialogue **Gestionnaire de montage** en cliquant sur le bouton **`Gestionnaire de montage`** sous l'onglet **`Distant`** dans le menu principal.

Toutes les configurations de montage enregistrées seront listées dans la fenêtre du Gestionnaire de montage.  
Chaque configuration est classée en fonction de son **statut** actuel :
- **Monté** : Le distant est actuellement monté et actif.
- **Non monté** : Le montage est enregistré mais n'est pas actuellement monté.
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
Vous pouvez effectuer les actions suivantes selon le statut :


<Tabs>
<TabItem value="Status: mounted" label="🟢 Statut : monté">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Démonter** — Cliquez pour démonter le distant actuellement monté.
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : (Désactivé)Modifier
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Ouvrir** — Cliquez pour ouvrir le dossier monté dans votre explorateur de fichiers.
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : (Désactivé)Supprimer
</TabItem>



<TabItem value="Status: Configured" label="🟠 Statut : non monté">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Monter** — Cliquez pour monter manuellement le distant sélectionné.
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Modifier** — Cliquez pour modifier les paramètres de montage.
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : (Désactivé)Ouvrir
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Supprimer** — Cliquez pour supprimer la configuration de montage.
</TabItem>

</Tabs>


<br />
<br />

:::tip Montage rapide depuis la barre système
Vous pouvez également gérer les montages rapidement via l'icône de la barre système.

1. Cliquez avec le bouton droit sur l'**icône RcloneView** dans la barre système.
2. Survolez le menu **Montage**.
3. Vous pouvez :
   - Afficher les lecteurs actuellement montés et monter ou démonter le lecteur
   - Tout démonter
   - Démarrer un nouveau montage
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

