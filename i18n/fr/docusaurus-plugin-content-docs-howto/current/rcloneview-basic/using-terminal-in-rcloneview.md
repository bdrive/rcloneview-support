---
sidebar_position: 13
description: "Exécutez des commandes CLI rclone directement dans le Terminal intégré de RcloneView pour les tests, la gestion des distants et le dépannage."
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - gestion des distants
  - dépannage
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# Utiliser le Terminal dans RcloneView

RcloneView inclut un Terminal intégré vous permettant d'exécuter des commandes CLI `rclone` complètes sans ouvrir CMD, PowerShell ou un shell système. Il est idéal pour des tests rapides, la gestion des distants ou la capture de journaux tout en restant dans l'application.

Ce guide explique comment ouvrir le Terminal, exécuter des commandes `rclone`, agrandir/réduire la vue, et utiliser les options de copie pour partager des résultats.

---

## Ouvrir le Terminal

- Cliquez sur l'onglet **`Terminal`** en bas de RcloneView.  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- Le Terminal fonctionne comme l'interface en ligne de commande standard `rclone` et exécute les commandes dans le contexte actuel de RcloneView.

---

## Lister les commandes rclone disponibles

Tapez rclone puis appuyez sur la barre d'espace pour afficher automatiquement toutes les commandes prises en charge.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## Afficher l'aide et les détails d'un distant (`rclone about`)

- Pour l'aide générale sur `about` :  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- Pour obtenir les informations de stockage d'un distant spécifique (exemple : `mygoogle`) :
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

Exemple de résultat :  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## Lister tous les distants configurés

Utilisez la commande `listremotes` pour vérifier quels distants sont disponibles :

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## Agrandir ou réduire la vue du Terminal

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **Agrandir** : Passez en Terminal plein écran pour les sorties longues.
- **Réduire** : Revenez à la mise en page par défaut.

---

## Créer un distant via la CLI (`rclone config create`)

Exemple : créez un distant Google Drive nommé `mygoogledrive` et vérifiez-le :

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## Copier, coller et tout copier

Sélectionnez n'importe quelle sortie du Terminal pour ouvrir le menu contextuel et choisissez **Copier**, **Coller** ou **Tout copier**.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

Cela est utile pour partager des journaux avec le support ou enregistrer des résultats dans la documentation.

---

## Cas d'usage recommandés

- Testez des commandes `rclone` avancées (`lsf`, `tree`, indicateurs de backend) avant de les automatiser.
- Validez des scripts ou des commandes côté serveur dans RcloneView.
- Gérez ou créez rapidement des distants lorsque le chemin de l'interface graphique est plus lent.

:::caution Attention aux commandes destructrices
Des commandes comme `delete`, `purge`, ou des indicateurs `sync` incorrects peuvent supprimer des données de manière permanente. Vérifiez soigneusement les chemins et les distants avant de les exécuter dans le Terminal.
:::
