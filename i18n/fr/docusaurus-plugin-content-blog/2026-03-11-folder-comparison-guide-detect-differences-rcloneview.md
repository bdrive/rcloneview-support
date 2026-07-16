---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "Comparaison de dossiers en profondeur — Détectez chaque différence entre vos emplacements de stockage cloud"
authors:
  - tayson
description: "La comparaison de dossiers de RcloneView détecte les fichiers manquants, les écarts de taille et les dérives de synchronisation entre deux emplacements de stockage cloud. Guide complet avec exemples pratiques."
keywords:
  - outil de comparaison de dossiers
  - comparer des dossiers cloud
  - détecter les fichiers manquants dans le cloud
  - vérification de synchronisation cloud
  - comparer google drive et onedrive
  - outil de diff de dossiers
  - comparaison de stockage cloud
  - vérifier une sauvegarde cloud
  - trouver les fichiers cloud manquants
  - diff de dossiers cloud
tags:
  - folder-comparison
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comparaison de dossiers en profondeur — Détectez chaque différence entre vos emplacements de stockage cloud

> Vous avez lancé une sauvegarde la semaine dernière. Tous les fichiers sont-ils bien arrivés ? Les tailles sont-elles correctes ? Manque-t-il quelque chose ? Le seul moyen de le savoir avec certitude est de comparer la source et la destination fichier par fichier. C'est exactement ce que fait la Comparaison de dossiers.

La Comparaison de dossiers est l'une des fonctionnalités les plus précieuses de RcloneView. Elle compare deux emplacements de stockage — n'importe quelle combinaison de local, NAS et stockage cloud — et vous montre exactement ce qui diffère. Fichiers manquants, écarts de taille, différences de date et fichiers présents uniquement d'un côté sont clairement identifiés.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que montre la Comparaison de dossiers

### Catégories de fichiers

Après la comparaison de deux emplacements, les fichiers sont classés :

- **Correspondance** — Le fichier existe dans les deux emplacements avec la même taille et la même date de modification. ✅
- **Gauche uniquement** — Le fichier existe uniquement dans la source (côté gauche). Il pourrait devoir être copié.
- **Droite uniquement** — Le fichier existe uniquement dans la destination (côté droit). Il peut s'agir d'un orphelin ou d'une copie supplémentaire.
- **Différent** — Le fichier existe dans les deux emplacements mais diffère en taille ou en date. Il pourrait devoir être mis à jour.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## Quand utiliser la Comparaison de dossiers

### 1) Après une sauvegarde — vérifier l'exhaustivité

Après tout job de Copie ou de Synchronisation, comparez la source et la destination :

- **Tout correspond ?** → La sauvegarde est complète.
- **Des fichiers en « gauche uniquement » ?** → Ces fichiers n'ont pas été sauvegardés. Recherchez la cause.
- **Des fichiers en « droite uniquement » ?** → Fichiers supprimés de la source mais toujours présents dans la sauvegarde (comportement attendu avec les jobs de Copie).

### 2) Avant une synchronisation — prévisualiser les changements

Avant de lancer un job de Synchronisation, comparez pour voir ce qui va changer :

- **Gauche uniquement** → Sera copié vers la destination.
- **Droite uniquement** → Sera SUPPRIMÉ de la destination (Synchronisation uniquement !).
- **Différent** → Sera écrasé.

C'est comme un essai à blanc visuel.

### 3) Après une migration — confirmer qu'il ne manque rien

Après une migration d'un cloud vers un autre :

- Comparez l'ancien cloud avec le nouveau.
- Chaque fichier doit être en « correspondance » ou « droite uniquement » (déjà à destination).
- Les fichiers en « gauche uniquement » ont été omis et doivent être re-transférés.

### 4) Audits réguliers — détecter la dérive

Même avec des synchronisations planifiées, des problèmes peuvent survenir silencieusement. Des comparaisons mensuelles permettent de repérer :

- Les transferts échoués qui n'ont pas été signalés.
- Les fichiers ignorés à cause d'une limitation de débit.
- Les fichiers corrompus (tailles différentes).
- Les jetons OAuth expirés en cours de job.

## Exemples pratiques

### Comparer Google Drive et une sauvegarde S3

Source : Google Drive (principal).
Destination : S3 (sauvegarde).

**Résultats attendus après une sauvegarde saine :**
- La plupart des fichiers : Correspondance ✅
- Quelques fichiers en « gauche uniquement » : fichiers ajoutés à Google Drive depuis la dernière sauvegarde (seront copiés la prochaine fois).
- Peu de fichiers en « droite uniquement » : fichiers supprimés de Google Drive mais conservés dans la sauvegarde (c'est une bonne chose — votre sauvegarde les a préservés).

### Comparer deux volumes NAS

Gauche : Volume NAS 1 (données actives).
Droite : Volume NAS 2 (miroir).

**Toute différence indique que le miroir n'est plus synchronisé.** Corrigez immédiatement.

### Comparer avant de fermer un compte cloud

Avant d'annuler Dropbox :
1. Comparez Dropbox avec Google Drive (destination de votre migration de données).
2. Assurez-vous qu'il n'y a aucun fichier en « gauche uniquement » (tout ce qui était sur Dropbox est sur Google Drive).
3. Ce n'est qu'alors que vous pouvez annuler Dropbox.

## Options de comparaison

### Méthodes de vérification

- **Taille** — Compare les tailles de fichiers. Rapide mais ne détecte pas la corruption au niveau des bits.
- **Date de modification** — Compare les horodatages. Utile pour détecter les fichiers mis à jour.
- **Checksum** — Compare les empreintes de fichiers (MD5, SHA1). Le plus lent mais le plus rigoureux. Détecte le bit-rot et la corruption.

Pour les données critiques, utilisez le checksum. Pour les vérifications de routine, la taille et la date de modification suffisent.

### Conseils de performance

- **Répertoires volumineux (10 000+ fichiers)** — La comparaison peut prendre plusieurs minutes. Soyez patient.
- **Comparaison inter-cloud** — Nécessite de lister les deux clouds. Utilisez `--fast-list` pour plus d'efficacité.
- **Réduisez la portée** — Comparez des sous-répertoires spécifiques plutôt que l'intégralité du cloud pour des résultats plus rapides.

## Agir sur les différences

Après la comparaison, vous pouvez agir directement :

- **Fichiers en « gauche uniquement »** → Sélectionnez-les et copiez-les vers le côté droit.
- **Fichiers différents** → Sélectionnez-les et mettez-les à jour du côté droit.
- **Fichiers en « droite uniquement »** → Vérifiez s'il faut les conserver ou les supprimer.

Cela fait de la Comparaison de dossiers non seulement un outil de diagnostic, mais aussi un outil de workflow.

## Intégration avec les jobs par lots

Les Jobs par lots de la v1.3 peuvent inclure une étape de comparaison :

1. Copie source → destination.
2. Comparaison source vs destination.
3. Signalement de toute différence via Slack.

Ce workflow automatisé de vérification après sauvegarde vous garantit de toujours connaître l'état de vos sauvegardes.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez les deux emplacements** que vous souhaitez comparer.
3. **Lancez la Comparaison de dossiers** entre eux.
4. **Examinez les résultats** — correspondance, gauche uniquement, droite uniquement, différent.
5. **Agissez sur les différences** — copiez, mettez à jour ou investiguez.

Si vous ne pouvez pas le vérifier, vous ne pouvez pas lui faire confiance.

---

**Guides connexes :**

- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Créer des jobs de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Historique des jobs et surveillance](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
