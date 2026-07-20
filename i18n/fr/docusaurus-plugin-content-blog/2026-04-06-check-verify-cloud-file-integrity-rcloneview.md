---
slug: check-verify-cloud-file-integrity-rcloneview
title: "Vérifiez l'intégrité de vos fichiers cloud avec les fonctionnalités de vérification et de comparaison de RcloneView"
authors:
  - tayson
description: "Utilisez les fonctionnalités de vérification et de comparaison de RcloneView pour vérifier l'intégrité des fichiers cloud, détecter la corruption des données, valider les sommes de contrôle et confirmer la réussite des migrations entre fournisseurs."
keywords:
  - rclone check files
  - vérifier l'intégrité des fichiers cloud
  - rcloneview comparer les dossiers
  - vérification des sommes de contrôle cloud
  - détecter la corruption des données stockage cloud
  - vérification post-migration
  - validation des fichiers rclone
  - comparer source destination cloud
  - fonctionnalité de vérification rcloneview
  - outil d'intégrité des données cloud
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vérifiez l'intégrité de vos fichiers cloud avec les fonctionnalités de vérification et de comparaison de RcloneView

> Copier des fichiers vers le cloud n'est que la moitié du travail. Vérifier que chaque octet est arrivé intact est ce qui distingue un flux de travail fiable d'un flux de travail optimiste.

Déplacer des téraoctets entre fournisseurs, exécuter des sauvegardes nocturnes ou archiver des jeux de données importants comportent tous un risque commun : la corruption silencieuse. Un fichier peut sembler présent à destination tout en différant de la source en raison de transferts interrompus, de bugs côté fournisseur ou simplement de la corruption des données au fil du temps. Rclone propose une commande dédiée `check` qui compare les fichiers source et destination un par un, et RcloneView rend ce processus visuel et accessible. Ce guide explique quand et comment vérifier vos fichiers cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi la vérification de l'intégrité des fichiers est importante

Les fournisseurs cloud répliquent les données en interne, mais aucun système n'est à l'abri des erreurs. Voici les scénarios les plus courants où la vérification permet de détecter de vrais problèmes :

- **Transferts interrompus** -- une coupure réseau pendant une copie volumineuse peut laisser des fichiers partiels à destination qui semblent complets rien qu'à leur nom.
- **Corruption des données** -- les supports de stockage peuvent se dégrader sur des mois ou des années, altérant des bits dans des fichiers rarement consultés.
- **Bugs côté fournisseur** -- des erreurs API occasionnelles peuvent entraîner des téléversements de zéro octet ou des écritures tronquées qui passent sans générer d'erreur.
- **Validation de migration** -- après avoir déplacé des centaines de milliers de fichiers entre fournisseurs, vous avez besoin d'une preuve que rien n'a été perdu ou altéré.

Sans étape de vérification, ces problèmes passent inaperçus jusqu'au moment où vous avez réellement besoin du fichier.

## Comment fonctionne Rclone Check

La commande `rclone check` compare un chemin source et un chemin destination et signale les fichiers qui diffèrent. Selon les fournisseurs concernés, elle utilise l'une de ces méthodes :

| Méthode | Fonctionnement | Cas d'utilisation |
|--------|-------------|-----------|
| **Vérification par hachage** | Compare les sommes de contrôle (MD5, SHA1, etc.) fournies par les deux fournisseurs | Les deux fournisseurs prennent en charge un hachage commun |
| **Vérification par taille** | Compare uniquement les tailles de fichiers | Aucun hachage commun disponible |
| **Vérification par téléchargement** | Télécharge les deux fichiers et les compare octet par octet | Forcée avec l'option `--download` |

La vérification par hachage est la plus rapide et la plus fiable lorsque les deux fournisseurs la prennent en charge. Google Drive, OneDrive, les fournisseurs compatibles S3 et Backblaze B2 fournissent tous des hachages de fichiers, bien que pas toujours du même type.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## Utiliser Compare dans RcloneView

La fonctionnalité intégrée **Compare** de RcloneView vous offre une vue visuelle côte à côte des dossiers source et destination :

1. Ouvrez le panneau **Explorer** et sélectionnez votre remote source d'un côté et la destination de l'autre.
2. Naviguez jusqu'aux dossiers que vous souhaitez comparer.
3. Cliquez sur **Compare** pour lancer l'analyse.
4. Examinez les résultats -- les fichiers sont colorés selon leur statut : identiques, présents uniquement à la source, présents uniquement à la destination, ou différents.

Cette approche visuelle est idéale pour vérifier ponctuellement des dossiers spécifiques ou examiner les résultats post-migration sans avoir à mémoriser la sortie en ligne de commande.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## Exécuter Rclone Check via le Terminal

Pour une analyse d'intégrité complète sur l'ensemble d'un remote, ouvrez le **Terminal** dans RcloneView et exécutez :

```bash
rclone check source:path dest:path
```

Options utiles à connaître :

| Option | Objectif |
|------|---------|
| `--size-only` | Comparer uniquement par taille, sans vérification par hachage |
| `--download` | Forcer une comparaison octet par octet en téléchargeant les deux copies |
| `--one-way` | Vérifier uniquement que les fichiers source existent à destination (pas l'inverse) |
| `--combined report.txt` | Écrire un rapport combiné des correspondances et différences dans un fichier |
| `--missing-on-src missing.txt` | Journaliser les fichiers présents à destination mais absents de la source |
| `--missing-on-dst missing.txt` | Journaliser les fichiers présents à la source mais absents de la destination |
| `--error errors.txt` | Journaliser les fichiers ayant échoué à la vérification |

Exemple pour une vérification approfondie post-migration :

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## Flux de travail de vérification post-migration

Après avoir migré des données entre fournisseurs, suivez ce flux de travail pour confirmer le succès de l'opération :

1. **Exécutez une vérification à sens unique** de la source vers la destination pour confirmer que tous les fichiers source sont bien arrivés :
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **Examinez les différences** -- toute différence signalée indique des fichiers qui doivent être recopiés.
3. **Retransférez les fichiers en échec** en utilisant la copie ou la synchronisation de RcloneView avec l'option `--ignore-existing` retirée.
4. **Relancez la vérification** pour confirmer que toutes les différences sont résolues.
5. **Enregistrez le rapport** à des fins d'audit à l'aide de l'option `--combined`.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## Détecter la corruption des données dans le temps

Pour les archives à long terme, planifiez des vérifications d'intégrité périodiques :

1. Créez un **Job** dans RcloneView qui exécute `rclone check` sur votre archive.
2. Planifiez-le de façon hebdomadaire ou mensuelle à l'aide du **Job Scheduler**.
3. Examinez l'historique des jobs après chaque exécution pour détecter tout nouveau fichier corrompu.

Ceci est particulièrement important pour les niveaux de stockage à froid (S3 Glacier, archives Backblaze B2) où les fichiers sont écrits une seule fois et rarement lus.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## Compatibilité des sommes de contrôle entre fournisseurs

Tous les fournisseurs ne prennent pas en charge le même algorithme de hachage. Voici un aperçu rapide :

| Fournisseur | MD5 | SHA1 | Autre |
|----------|-----|------|-------|
| Google Drive | Oui | Non | Quickxor disponible |
| OneDrive | Non | Non | QuickXorHash |
| Amazon S3 | Oui (ETag pour le mode single-part) | Non | -- |
| Backblaze B2 | Non | Oui | SHA1 natif |
| Dropbox | Non | Non | Hachage de contenu Dropbox |
| SFTP/Local | Oui | Oui | Multiples |

Lorsque deux fournisseurs ne partagent aucun hachage commun, rclone recourt à une comparaison par taille uniquement. Utilisez `--download` pour obtenir une certitude au niveau de l'octet dans ces cas.

## Bonnes pratiques

- **Vérifiez toujours après les migrations importantes** -- une commande de copie réussie ne garantit pas que chaque fichier est intact.
- **Utilisez les rapports `--combined`** pour créer un enregistrement auditable de ce qui correspond et de ce qui ne correspond pas.
- **Planifiez des vérifications périodiques** pour les données archivées qui restent inutilisées pendant des mois.
- **Privilégiez les vérifications par hachage** plutôt que par taille uniquement lorsque c'est possible -- la corruption à taille identique est rare mais réelle.
- **Exécutez des synchronisations en mode dry-run** après une vérification pour corriger automatiquement les différences.

---

**Guides connexes :**

- [Transferts et synchronisation cloud-à-cloud sans effort](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Sauvegarde incrémentielle de Google Drive vers Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Récupérer les transferts interrompus et échoués](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
