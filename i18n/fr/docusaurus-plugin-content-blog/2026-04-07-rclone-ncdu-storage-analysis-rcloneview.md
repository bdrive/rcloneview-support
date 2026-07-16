---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "Analyser l'utilisation du stockage cloud avec Rclone NCDU dans RcloneView"
authors: [tayson]
description: "Utilisez rclone ncdu via RcloneView pour analyser l'utilisation du stockage cloud, trouver les fichiers volumineux et gérer l'espace disque sur plusieurs fournisseurs de cloud."
keywords:
  - rclone ncdu
  - analyse du stockage cloud
  - utilisation du disque cloud
  - analyseur de stockage rcloneview
  - trouver des fichiers volumineux dans le cloud
  - espace de stockage cloud
  - utilisation du disque rclone
  - répartition de l'utilisation du stockage
  - taille de dossier cloud
  - analyser le stockage distant
tags: [feature, tips, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Analyser l'utilisation du stockage cloud avec Rclone NCDU dans RcloneView

> Découvrez exactement où va votre espace de stockage cloud grâce au puissant outil NCDU de rclone, accessible directement depuis le terminal intégré de RcloneView.

Les coûts de stockage cloud peuvent grimper discrètement. Un dossier de sauvegarde oublié ici, un lot de fichiers vidéo non compressés là, et vous voilà soudain à payer pour des téraoctets de stockage dont vous ne saviez même pas l'existence. Rclone inclut un outil NCDU (NCurses Disk Usage) intégré qui scanne votre stockage distant et présente une répartition interactive et navigable de la taille des répertoires. Grâce au terminal intégré et à l'explorateur de fichiers de RcloneView, vous pouvez lancer des scans ncdu, identifier les fichiers et dossiers qui consomment de l'espace, et agir immédiatement pour récupérer du stockage. Ce guide couvre tout, des scans de base aux flux d'analyse avancés sur plusieurs fournisseurs de cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce que Rclone NCDU ?

Rclone NCDU est une version adaptée au cloud du célèbre utilitaire Linux `ncdu` (NCurses Disk Usage). Alors que le ncdu original analyse les systèmes de fichiers locaux, l'implémentation de rclone fonctionne avec n'importe quel backend de stockage distant pris en charge par rclone, y compris Google Drive, Amazon S3, Dropbox, OneDrive, Backblaze B2, et plus de 70 autres fournisseurs.

Lorsque vous lancez `rclone ncdu`, il effectue un scan récursif du chemin distant spécifié, en calculant la taille de chaque fichier et répertoire. Les résultats sont présentés dans une interface terminal interactive où vous pouvez :

- **Naviguer dans les répertoires** pour explorer les structures de dossiers imbriquées
- **Trier par taille** pour repérer immédiatement les plus gros consommateurs d'espace
- **Trier par nombre** pour trouver les répertoires contenant un nombre excessif de petits fichiers
- **Marquer des fichiers pour suppression** directement depuis l'interface
- **Exporter les résultats** pour une analyse ou un rapport hors ligne

L'avantage principal par rapport à une simple navigation dans votre stockage cloud réside dans la rapidité et l'exhaustivité. Une revue manuelle de milliers de dossiers est irréaliste, mais ncdu scanne tout en une seule passe et présente les résultats de façon priorisée et exploitable.

**En quoi cela diffère des outils propres à chaque fournisseur :**

La plupart des fournisseurs de cloud proposent une forme d'affichage de l'utilisation du stockage, mais celui-ci est souvent limité :
- Google Drive affiche l'utilisation totale mais ne la décompose pas par dossier
- S3 nécessite des métriques CloudWatch ou des outils tiers pour une analyse détaillée
- Dropbox affiche l'utilisation par dossier partagé mais ne montre pas la structure imbriquée

Rclone ncdu fournit une analyse cohérente et détaillée quel que soit le fournisseur que vous utilisez.

## Lancer votre premier scan NCDU

Démarrer avec ncdu via RcloneView est simple. Ouvrez le terminal intégré de RcloneView ou utilisez l'explorateur de fichiers pour une approche visuelle.

**Via le terminal de RcloneView :**

```bash
rclone ncdu remote:
```

Remplacez `remote:` par le nom de votre distant configuré. Par exemple :

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**Scanner un sous-répertoire spécifique :**

Si vous souhaitez uniquement analyser une partie de votre stockage, spécifiez le chemin :

```bash
rclone ncdu gdrive:/Projects/2025
```

C'est nettement plus rapide que de scanner l'intégralité du distant, en particulier pour les comptes de stockage volumineux.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**Comprendre le processus de scan :**

Lorsque ncdu démarre, il liste récursivement chaque fichier et répertoire sur le distant. Le temps que cela prend dépend de :

| Facteur | Impact |
|--------|--------|
| Nombre total de fichiers | Facteur principal ; 100 000 fichiers peuvent prendre plusieurs minutes |
| Limites de débit de l'API | Google Drive limite à environ 10 requêtes/seconde |
| Latence réseau | Une latence plus élevée ralentit les appels API |
| Profondeur des répertoires | Les structures profondément imbriquées nécessitent davantage d'appels API |

Pour un Google Drive avec 50 000 fichiers, prévoyez un temps de scan de 2 à 5 minutes. Pour un bucket S3 contenant des millions d'objets, envisagez de scanner des préfixes spécifiques plutôt que l'intégralité du bucket.

## Naviguer dans l'interface NCDU

Une fois le scan terminé, un affichage interactif s'ouvre. Voici comment le parcourir efficacement.

**Commandes clavier :**

| Touche | Action |
|-----|--------|
| Flèche Haut/Bas | Déplacer la sélection entre les éléments |
| Entrée / Flèche Droite | Entrer dans le répertoire sélectionné |
| Flèche Gauche | Revenir au répertoire parent |
| d | Supprimer le fichier ou répertoire sélectionné |
| s | Basculer le tri par taille |
| c | Basculer le tri par nombre (de fichiers) |
| g | Basculer l'affichage du graphique |
| n | Trier par nom |
| q | Quitter ncdu |

**Lire l'affichage :**

Chaque ligne de la sortie ncdu affiche :
- La taille du répertoire ou du fichier (dans un format lisible)
- Un graphique en barres visuel montrant la taille relative par rapport aux éléments voisins
- Le nombre de fichiers contenus (pour les répertoires)
- Le nom du répertoire ou du fichier

Les éléments les plus volumineux apparaissent en haut par défaut, ce qui rend immédiatement évident où votre stockage est consommé.

**Flux de navigation pratique :**

1. Commencez au niveau racine pour voir quels dossiers de premier niveau sont les plus volumineux.
2. Entrez dans le dossier le plus volumineux pour voir son contenu.
3. Continuez à explorer en profondeur jusqu'à trouver les fichiers ou sous-répertoires spécifiques qui consomment l'espace.
4. Notez les chemins des éléments que vous souhaitez nettoyer.
5. Utilisez l'explorateur de fichiers de RcloneView pour supprimer, déplacer ou archiver ces éléments.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Trouver les fichiers volumineux et les données oubliées

Le cas d'usage le plus courant de ncdu est de trouver des fichiers étonnamment volumineux et des données oubliées. Voici des stratégies pour identifier différents types de gaspillage de stockage.

**Identifier les fichiers multimédias volumineux :**

Les fichiers vidéo, les images disque et les archives non compressées sont des coupables fréquents. Lorsque vous triez par taille dans ncdu, ceux-ci remontent généralement immédiatement en tête de liste. Parmi les coupables courants :

- Enregistrements d'écran et exports vidéo laissés dans des répertoires de travail
- Images disque de machines virtuelles téléchargées comme sauvegardes
- Archives ZIP ou TAR non compressées qui pourraient être compressées
- Copies en double de grands ensembles de données dans différents dossiers

**Trouver des sauvegardes obsolètes :**

De nombreux utilisateurs mettent en place des sauvegardes automatisées et les oublient ensuite. Recherchez :
- Des répertoires nommés `backup`, `archive`, `old`, ou contenant des horodatages
- Plusieurs copies horodatées des mêmes données
- Des exports de base de données qui s'accumulent au fil du temps sans nettoyage

**Détecter les fichiers en double entre fournisseurs :**

Si vous utilisez ncdu sur plusieurs distants, vous pourriez découvrir que les mêmes données sont stockées de manière redondante :

```bash
# Scanner Google Drive
rclone ncdu gdrive:/Backups

# Scanner S3
rclone ncdu s3:my-backup-bucket

# Comparer les résultats pour trouver les données en chevauchement
```

**Types de fichiers volumineux par fournisseur :**

Différents fournisseurs attirent différents types de gaspillage de stockage :

| Fournisseur | Fichiers volumineux courants |
|----------|--------------------|
| Google Drive | Vidéos partagées, notebooks Colab avec sorties, anciens exports Takeout |
| S3 | Archives de logs, anciens artefacts de déploiement, data lakes non compressés |
| OneDrive | Blobs OneNote, fichiers d'équipe partagés, copies de pièces jointes Outlook |
| Dropbox | Doublons de téléchargement d'appareil photo, anciens dossiers partagés |

## Exporter et comparer les résultats

Pour une gestion continue du stockage, vous voudrez exporter les résultats de ncdu et suivre les évolutions au fil du temps.

**Exporter les résultats du scan vers un fichier :**

La commande `size` de rclone complète ncdu en fournissant une sortie scriptable :

```bash
# Obtenir la taille totale d'un distant
rclone size gdrive: --json

# Lister les répertoires avec leurs tailles
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**Créer un rapport d'utilisation du stockage :**

Combinez des commandes rclone pour construire un rapport complet :

```bash
# Générer un rapport JSON de toutes les tailles de fichiers
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Utiliser rclone size pour des résumés rapides
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**Comparer l'utilisation entre les fournisseurs :**

Si vous gérez plusieurs comptes cloud, lancez ncdu ou les commandes size sur chacun pour les comparer :

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

Cela vous donne une image claire de la répartition du stockage et des endroits où les efforts d'optimisation auront le plus d'impact.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Techniques NCDU avancées

Au-delà du scan de base, plusieurs techniques avancées peuvent rendre votre analyse de stockage plus efficace.

**Filtrer les scans :**

Utilisez les indicateurs de filtre de rclone pour cibler votre analyse :

```bash
# Ne scanner que les fichiers de plus de 100 Mo
rclone ncdu gdrive: --min-size 100M

# Exclure certains répertoires du scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Ne scanner que certains types de fichiers
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**Mettre en cache les résultats du scan :**

Pour les distants très volumineux, le scan peut prendre beaucoup de temps. Activez le cache de répertoires de rclone pour accélérer les scans répétés :

```bash
rclone ncdu gdrive: --fast-list
```

L'option `--fast-list` utilise moins d'appels API en demandant les listes de répertoires en bloc. Cela peut réduire les temps de scan de 50 % ou plus sur les fournisseurs qui le prennent en charge (S3, Google Drive, B2).

**Analyser le stockage partagé :**

Sur Google Drive, le stockage utilisé par les fichiers partagés avec vous ne compte pas dans votre quota, mais les fichiers que vous possédez dans des drives partagés, si. Utilisez ncdu pour scanner des drives partagés spécifiques :

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**Planifier des scans réguliers :**

Configurez des rapports de stockage automatisés à l'aide de cron ou du planificateur de tâches de RcloneView :

```bash
# Rapport hebdomadaire de stockage
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## Agir sur les résultats

Après avoir identifié le gaspillage de stockage, utilisez RcloneView pour agir directement.

**Supprimer les fichiers inutiles :**

Depuis l'interface ncdu, appuyez sur `d` sur n'importe quel fichier ou répertoire pour le supprimer. Vous pouvez également utiliser l'explorateur de fichiers de RcloneView pour naviguer jusqu'aux chemins identifiés et supprimer des fichiers avec l'interface graphique.

**Déplacer les données froides vers un stockage moins coûteux :**

Si vous trouvez de grands ensembles de données que vous devez conserver mais auxquels vous accédez rarement, déplacez-les vers un niveau de stockage moins coûteux :

```bash
# Déplacer d'anciennes archives de Google Drive vers Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

L'explorateur à deux volets de RcloneView rend cette opération simple par glisser-déposer.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**Compresser avant d'archiver :**

Pour les données à forte densité de texte comme les logs et les CSV, compressez avant de transférer vers un stockage froid :

```bash
# Compresser localement, puis téléverser
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**Mettre en place des politiques de cycle de vie :**

Après le nettoyage, évitez toute nouvelle accumulation de stockage en configurant un nettoyage automatisé. Utilisez la planification de tâches de RcloneView pour exécuter des tâches de nettoyage périodiques :

- Supprimer les fichiers plus anciens qu'un certain âge : `rclone delete remote: --min-age 365d`
- Supprimer les répertoires vides : `rclone rmdirs remote: --leave-root`
- Dédupliquer les fichiers sur Google Drive : `rclone dedupe gdrive: --dedupe-mode newest`

## Pour commencer

Rclone NCDU est l'un des outils les plus immédiatement précieux de l'écosystème rclone. Un simple scan peut révéler des gigaoctets de données oubliées, de fichiers en double et de gaspillage de stockage dont vous ignoriez l'existence. Grâce à RcloneView, vous pouvez lancer ces scans, examiner les résultats et agir sans jamais quitter l'application. Commencez par scanner votre compte de stockage cloud le plus volumineux, triez par taille, et parcourez les 10 plus gros éléments. Vous trouverez probablement des économies significatives dès votre première session.

---

**Guides connexes :**
- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
