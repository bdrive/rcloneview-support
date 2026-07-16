---
slug: fix-filename-special-characters-cloud-sync-rcloneview
title: "Résoudre les erreurs de nom de fichier trop long et de caractères spéciaux en synchronisation cloud — Guide RcloneView"
authors:
  - tayson
description: "La synchronisation cloud échoue à cause des noms de fichiers ? Chemins trop longs, caractères spéciaux et incompatibilités d'encodage provoquent des erreurs cachées. Apprenez à diagnostiquer et corriger ces problèmes dans RcloneView."
keywords:
  - filename too long cloud
  - special characters cloud sync
  - cloud sync filename error
  - path too long error
  - rclone filename encoding
  - cloud storage filename limit
  - unicode filename cloud
  - onedrive path length limit
  - google drive filename issues
  - fix cloud sync file errors
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de nom de fichier trop long et de caractères spéciaux en synchronisation cloud — Guide RcloneView

> Votre tâche de synchronisation échoue sur 47 fichiers. Le message d'erreur indique « filename too long » ou « invalid character ». Les fichiers semblent pourtant parfaitement normaux de votre côté. Bienvenue dans la compatibilité des noms de fichiers entre fournisseurs cloud.

Chaque fournisseur cloud applique des règles différentes concernant les noms de fichiers. Ce qui est parfaitement valide sur Google Drive peut être interdit sur OneDrive. Un chemin qui fonctionne sur S3 peut dépasser la limite de caractères sur Dropbox. Lors d'une synchronisation entre fournisseurs, ces incompatibilités génèrent des erreurs frustrantes pouvant bloquer des tâches de transfert entières. Ce guide couvre les problèmes les plus courants et explique comment les résoudre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Problèmes courants liés aux noms de fichiers

### Limites de longueur de chemin

| Fournisseur | Longueur de chemin maximale |
|----------|----------------|
| OneDrive | 400 caractères |
| SharePoint | 400 caractères |
| Google Drive | 32 768 caractères |
| S3 | 1 024 caractères |
| Dropbox | 260 caractères |
| Local (Windows) | 260 caractères (par défaut) |

Des dossiers profondément imbriqués avec des noms longs dépassent rapidement les limites de OneDrive ou Dropbox.

### Caractères interdits

| Caractère | Google Drive | OneDrive | S3 | Dropbox |
|-----------|-------------|----------|-----|---------|
| `\` | Autorisé | Non autorisé | Autorisé | Non autorisé |
| `?` | Autorisé | Non autorisé | Autorisé | Non autorisé |
| `*` | Autorisé | Non autorisé | Autorisé | Non autorisé |
| `:` | Autorisé | Non autorisé | Autorisé | Non autorisé |
| `<` `>` `\|` | Autorisé | Non autorisé | Autorisé | Non autorisé |

Les fichiers créés sur Google Drive avec un `?` ou un `:` dans leur nom échoueront lors de la synchronisation vers OneDrive.

### Espaces et points en fin de nom

OneDrive et Windows rejettent les noms de fichiers se terminant par des espaces ou des points. Google Drive les autorise. Cela crée des échecs de synchronisation invisibles.

### Problèmes d'Unicode et d'encodage

Les caractères non-ASCII (japonais, coréen, chinois, emoji) fonctionnent sur la plupart des fournisseurs, mais peuvent poser problème avec des systèmes plus anciens ou certains fournisseurs compatibles S3 spécifiques.

## Comment diagnostiquer

### Vérifier l'historique des tâches

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Find filename errors in job history" class="img-large img-center" />

L'historique des tâches montre exactement quels fichiers ont échoué et pourquoi. Recherchez les messages d'erreur mentionnant « invalid », « too long » ou « not allowed ».

### Identifier les fichiers problématiques

Le terminal de RcloneView vous permet d'exécuter `rclone check` avec une sortie détaillée pour lister tous les fichiers qui échoueraient avant même de tenter le transfert.

## Solutions

### Renommer les fichiers problématiques à la source

La solution la plus propre : renommer les fichiers pour supprimer les caractères interdits ou raccourcir les chemins avant la synchronisation.

### Utiliser les indicateurs d'encodage de rclone

Rclone peut encoder automatiquement les caractères interdits pendant le transfert. Configurez ces options dans les paramètres de distant de RcloneView pour gérer la compatibilité entre fournisseurs.

### Aplatir les structures de dossiers profondes

Si la longueur du chemin est en cause, réorganisez les dossiers profondément imbriqués en une structure plus plate.

### Utiliser la comparaison de dossiers pour repérer les incohérences

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find filename mismatches" class="img-large img-center" />

La comparaison de dossiers met en évidence les fichiers présents à la source mais absents à la destination — souvent ceux qui ont échoué à cause de problèmes de noms de fichiers.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Effectuez une synchronisation de test** sur un petit dossier d'abord.
3. **Vérifiez l'historique des tâches** pour repérer les erreurs liées aux noms de fichiers.
4. **Corrigez les noms de fichiers** à la source ou configurez l'encodage.
5. **Relancez et vérifiez** avec la comparaison de dossiers.

La solution est généralement plus simple que ne le laisse penser le message d'erreur.

---

**Guides connexes :**

- [Résoudre les erreurs de permission refusée](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Limites de débit des API cloud](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)
- [Résoudre les erreurs rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
