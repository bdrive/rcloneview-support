---
slug: copy-full-path-rclone-cli-paths-rcloneview
title: "Copier le chemin complet — Obtenez instantanément des chemins prêts pour rclone dans RcloneView"
authors:
  - jay
description: "Découvrez comment la fonction Copier le chemin complet de RcloneView transforme n'importe quel fil d'Ariane en un chemin CLI rclone prêt à l'emploi en un clic."
keywords:
  - copy full path rclone
  - rclone cli path format
  - breadcrumb path bar
  - rclone remote path syntax
  - RcloneView terminal
  - cloud file path copy
  - rclone command line paths
  - GUI to CLI workflow
  - cloud storage path management
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copier le chemin complet — Obtenez instantanément des chemins prêts pour rclone dans RcloneView

> Arrêtez de retaper à la main les noms de distants et les chemins de dossiers — copiez-les directement dans votre terminal.

Quiconque associe l'interface graphique de RcloneView à la ligne de commande rclone connaît cette friction : on trouve un dossier visuellement, puis il faut reconstruire son chemin manuellement pour exécuter une commande `rclone copy` ou `rclone check`. RcloneView élimine complètement cette étape grâce à Copier le chemin complet, une action clic droit sur la barre de fil d'Ariane qui copie exactement la chaîne remote:path attendue par rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne Copier le chemin complet

Chaque panneau de l'explorateur dans RcloneView dispose d'une barre de fil d'Ariane au-dessus de la liste de fichiers, affichant la hiérarchie de dossiers actuelle du distant actif dans cet onglet. Un clic droit n'importe où sur le fil d'Ariane ouvre un menu contextuel avec Couper, Copier, Coller, Tout sélectionner et — surtout — Copier le chemin complet (avec le distant).

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar showing a connected remote folder" class="img-large img-center" />

En sélectionnant cette option, une chaîne comme `mygoogledrive:Meet recordings` est copiée dans le presse-papiers, dans le format exact attendu par la CLI de rclone. Il n'y a aucune traduction manuelle entre ce que vous voyez dans l'interface graphique et ce dont rclone a besoin en ligne de commande — le nom du distant, les deux-points et le chemin du dossier sont tous transférés correctement, y compris les sous-dossiers imbriqués.

Cela devient particulièrement important dès que vous avez configuré plus d'une poignée de distants. Les noms de distants — en particulier ceux configurés pour des points de terminaison compatibles S3 ou des serveurs SFTP — ne sont pas toujours faciles à mémoriser, et les structures de dossiers sur les lecteurs cloud peuvent être imbriquées sur de nombreux niveaux. Copier le chemin complet élimine ces incertitudes.

## Son rôle dans un flux de travail CLI

Une fois le chemin copié, collez-le directement dans le Terminal Rclone intégré de RcloneView — l'onglet Terminal dans la vue d'informations en bas — pour exécuter des commandes ponctuelles comme `rclone size` ou `rclone lsf` sur cet emplacement précis. Contrairement aux outils de montage seul, RcloneView propose aussi la synchronisation et la comparaison de dossiers avec la même licence FREE, de sorte que le terminal, les tâches de synchronisation et l'explorateur de fichiers référencent tous les mêmes distants sans avoir à ressaisir les identifiants.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView terminal tab used alongside the file explorer" class="img-large img-center" />

Le chemin copié fonctionne aussi en dehors de RcloneView, dans n'importe quelle installation rclone autonome pointant vers le même fichier `rclone.conf` — utile pour scripter des tâches planifiées ou déboguer une synchronisation depuis un serveur distant.

## Un exemple concret

Supposons qu'une équipe de production vidéo stocke ses rushes à la fois sur Google Drive et dans un compartiment d'archives compatible S3. Plutôt que de taper `s3archive:projects/2026/client-x/raw` à la main — au risque d'une faute de frappe qui viserait silencieusement le mauvais dossier — un monteur y accède visuellement, fait un clic droit sur le fil d'Ariane et copie le chemin exact pour une commande de vérification avant de lancer un transfert volumineux.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView file explorer with a deeply nested cloud folder open" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez les distants que vous utilisez le plus souvent via Remote Manager.
3. Naviguez vers n'importe quel dossier et faites un clic droit sur sa barre de fil d'Ariane.
4. Sélectionnez Copier le chemin complet (avec le distant) et collez-le dans le Terminal Rclone ou n'importe quelle ligne de commande.

Ces petites commodités s'accumulent lorsque vous passez chaque jour de l'explorateur visuel aux commandes rclone brutes.

---

**Guides connexes :**

- [Terminal RcloneView — La CLI Rclone dans l'interface graphique](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Indicateurs Rclone personnalisés — Options avancées dans RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Guide de transfert cloud par glisser-déposer avec RcloneView](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
