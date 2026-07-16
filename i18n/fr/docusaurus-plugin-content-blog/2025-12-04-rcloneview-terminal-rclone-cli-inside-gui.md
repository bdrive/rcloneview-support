---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView Terminal : exploitez toute la puissance de la CLI rclone dans une interface graphique"
authors:
  - tayson
description: "Exécutez l'intégralité de la CLI rclone dans le Terminal de RcloneView avec autocomplétion, mode plein écran et journaux copiables--aucun shell séparé requis."
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Terminal : exploitez toute la puissance de la CLI rclone dans une interface graphique

> Exécutez chaque commande rclone sans quitter RcloneView. Le nouveau Terminal apporte l'autocomplétion, des journaux copiables et un affichage plein écran dans la même fenêtre que celle utilisée pour parcourir, comparer et synchroniser.

RcloneView inclut désormais un Terminal intégré permettant d'exécuter l'intégralité de la CLI rclone directement dans l'application -- sans CMD, PowerShell ou fenêtre Terminal supplémentaire. Les débutants peuvent apprendre les commandes avec un contexte visuel, tandis que les ingénieurs, utilisateurs avancés et administrateurs IT conservent leurs indicateurs d'automatisation, journaux détaillés et flux de scripts sans changer de contexte.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi intégrer la CLI dans une interface graphique ?

- Arrêtez de basculer entre une interface graphique pour parcourir et un shell pour les indicateurs avancés ou les diagnostics.
- Gardez les sorties et journaux rclone à côté de vos transferts, montages et tâches planifiées.
- Formez vos collègues à rclone en toute sécurité grâce à des repères visuels guidés plutôt qu'à des terminaux vides.

## Qu'est-ce que le Terminal RcloneView ?

Le Terminal se trouve en bas de l'espace de travail RcloneView et exécute les mêmes binaires rclone que ceux déjà utilisés dans l'application. Tapez `rclone` et appuyez sur la barre d'espace pour révéler toutes les commandes prises en charge, puis exécutez-la immédiatement--Windows, macOS et Linux partagent tous la même expérience.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## Avantages pour les débutants

- Aucun stress de configuration : rclone est déjà intégré, vous pouvez donc pratiquer les commandes sans installer quoi que ce soit ni chercher des chemins système.
- L'autocomplétion simplifie la découverte--tapez `rclone ` pour voir la liste des commandes avant d'en exécuter une.
- La sortie reste dans l'application, ce qui facilite la copie, la ré-exécution ou la comparaison avec ce que vous voyez dans l'interface graphique.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## Avantages pour les ingénieurs et utilisateurs avancés

- Conservez un espace de travail unique pour les montages, la comparaison, le planificateur et les expérimentations CLI--sans changer de contexte.
- Capturez des journaux détaillés (`-vv`) pour diagnostiquer la latence cloud ou la limitation d'API, puis copiez tout en un clic.
- Configurez les remotes plus rapidement avec `rclone config create`, validez les backends, puis passez aux tâches scriptées.
- Utilisez la vue étendue pour lire confortablement de longues sorties ou des scripts multi-lignes.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## Fonctionnalités clés en un coup d'œil

- **Découverte automatique des commandes** : tapez `rclone` + espace pour voir chaque commande en contexte avant l'exécution.
- **Terminal plein écran** : agrandissez pour les longues listes, réduisez lorsque vous devez consulter Compare ou Transferts.
- **Copier, Coller, Tout copier** : partagez les journaux avec vos collègues ou le support sans exporter de fichiers.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## Commandes pratiques à essayer dès maintenant

### 1) Vérifier l'espace de stockage utilisé pour un remote
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) Découvrir tous les remotes configurés
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) Créer un nouveau remote via la CLI
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) Prévisualiser des dossiers avant un transfert
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) Répéter une migration avec des journaux détaillés
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
Utilisez `--dry-run` pour simuler les modifications et `-vv` pour repérer les backends lents ou la limitation avant d'exécuter la tâche réelle.

## Quand choisir l'interface graphique plutôt que le Terminal

- **Utilisez l'interface graphique** pour glisser-déposer entre les clouds, comparer visuellement les différences, planifier des tâches récurrentes ou monter un stockage comme un lecteur.
- **Utilisez le Terminal** pour tester des indicateurs de backend, exécuter des diagnostics ponctuels ou lancer des commandes rclone avancées plus rapides à taper qu'à cliquer.
- **Utilisez les deux ensemble** : prévisualisez avec Compare, ajustez le plan avec des indicateurs CLI, puis enregistrez le workflow comme tâche planifiée.

## Démarrage rapide et sécurité

1. Ouvrez l'onglet **Terminal**, tapez `rclone `, puis choisissez une commande dans la liste.
2. Commencez par des commandes en lecture seule (`listremotes`, `lsf`, `about`) avant d'exécuter toute opération de synchronisation ou de suppression.
3. Pour un guide pas à pas avec captures d'écran, consultez [Utiliser le Terminal dans RcloneView](/howto/rcloneview-basic/using-terminal-in-rcloneview).

> Conseil de pro : des commandes destructrices comme `delete`, `purge` ou une `sync` non vérifiée peuvent supprimer des données. Vérifiez bien les chemins et les remotes avant d'appuyer sur Entrée.

## Conclusion

Le Terminal RcloneView place l'intégralité de la CLI rclone aux côtés des outils visuels que vous utilisez déjà, afin que les débutants apprennent plus vite et que les experts avancent plus vite. Essayez-le dès aujourd'hui pour garder vos opérations cloud, vos expérimentations d'automatisation et vos journaux de débogage au même endroit.

<CloudSupportGrid />
