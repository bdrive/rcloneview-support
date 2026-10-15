---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "Copier le chemin complet avec le remote — faites le lien entre l'interface graphique et les commandes rclone dans RcloneView"
authors:
  - kai
description: "Utilisez Copy Full Path dans le fil d'Ariane de RcloneView pour récupérer des chaînes remote:path et les exécuter dans le terminal rclone intégré. Un flux de travail pratique de l'interface graphique vers la CLI."
keywords:
  - chemin remote rclone
  - copier le chemin complet rclone
  - fil d'Ariane RcloneView
  - terminal rclone GUI
  - commande rclone about
  - syntaxe remote:path
  - flux de travail rclone GUI
  - aide aux commandes rclone
  - fonctionnalité RcloneView
  - copie de chemin cloud
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copier le chemin complet avec le remote — faites le lien entre l'interface graphique et les commandes rclone dans RcloneView

> Un clic droit transforme le dossier que vous parcourez en chemin rclone prêt à l'emploi.

Quiconque a déjà saisi une commande rclone connaît la difficulté d'écrire `remote:path` exactement comme il faut, surtout avec des espaces et des dossiers imbriqués. RcloneView résout ce problème grâce à une option du menu du fil d'Ariane qui copie le chemin complet, nom du remote compris, directement dans le presse-papiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait Copy Full Path

Chaque panneau de l'Explorateur dispose d'une barre de chemin en fil d'Ariane indiquant où vous vous trouvez. Un clic droit dessus affiche Couper, Copier, Coller, Tout sélectionner et **Copy Full Path (with Remote)**. La dernière option copie l'emplacement sous la forme `mygoogledrive:Meet recordings`, exactement la syntaxe attendue par rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Remotes listés dans l'explorateur de RcloneView" class="img-large img-center" />

Comme le nom du remote est inclus, inutile de deviner à quel remote appartient un dossier. C'est important lorsque vous gérez plusieurs comptes d'un même fournisseur.

## Collez-le dans le terminal intégré

RcloneView inclut un onglet Terminal dans la vue d'informations (Info View) du bas, avec une émulation complète de terminal. Tapez `rclone` suivi d'un espace pour obtenir des suggestions de commandes, puis collez le chemin copié. Par exemple, `rclone about "remote:"` indique l'utilisation du stockage d'un remote, et `rclone listremotes` liste tous les remotes configurés. Placez entre guillemets les chemins contenant des espaces.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution de jobs et de commandes dans RcloneView" class="img-large img-center" />

Ce va-et-vient entre l'interface graphique et la CLI est utile lorsque vous avez besoin d'une commande ponctuelle que l'assistant ne propose pas, tout en utilisant l'Explorateur visuel pour trouver le bon dossier.

## Utilisez les chemins dans les jobs et la documentation

Les chemins copiés servent aussi en dehors du terminal : les coller dans un runbook, un ticket de support ou la discussion d'un collègue garantit que tout le monde désigne le même emplacement. Après un transfert, vérifiez le résultat dans l'onglet Transferring ou dans l'historique des jobs (Job History), qui enregistre le statut, la taille et la vitesse de chaque exécution.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des jobs affichant des transferts terminés" class="img-large img-center" />

RcloneView est une interface graphique construite sur rclone, et non un remplaçant de celui-ci ; les commandes que vous exécutez dans le terminal utilisent donc le même moteur intégré que vos jobs.

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez un remote et accédez à un dossier dans l'Explorateur.
3. Faites un clic droit sur la barre en fil d'Ariane et choisissez **Copy Full Path (with Remote)**.
4. Ouvrez l'onglet Terminal, tapez `rclone about "` et collez le chemin.

Moins de fautes de frappe, un dépannage plus rapide, et un seul outil pour cliquer et pour taper.

---

**Guides associés :**

- [Terminal Rclone dans RcloneView](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Flux de travail entre terminal et interface graphique](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Chemins raccourcis avec les remotes Alias](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
