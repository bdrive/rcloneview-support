---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "Nettoyer le stockage cloud : vider la corbeille et supprimer les anciennes versions avec RcloneView"
authors:
  - tayson
description: "Libérez de l'espace de stockage cloud en vidant la corbeille, en supprimant les anciennes versions de fichiers et en nettoyant les données orphelines sur Google Drive, OneDrive, S3 et bien d'autres avec RcloneView."
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - RcloneView
  - feature
  - cleanup
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nettoyer le stockage cloud : vider la corbeille et supprimer les anciennes versions avec RcloneView

> Les fichiers supprimés et les anciennes versions consomment silencieusement votre quota cloud. RcloneView permet de les nettoyer facilement et de récupérer l'espace de stockage que vous payez déjà.

Chaque fois que vous supprimez un fichier sur Google Drive, il va dans la corbeille. Chaque fois que OneDrive écrase un document, il conserve l'ancienne version. Chaque fois qu'un bucket S3 avec le versioning activé reçoit une mise à jour, l'objet précédent est conservé. Ces copies invisibles s'accumulent au fil des mois et des années, consommant du quota et gonflant les factures de stockage. La commande `cleanup` de rclone supprime ce surplus caché, et RcloneView vous permet de l'exécuter en quelques clics.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment les fichiers mis à la corbeille et versionnés gaspillent le quota

La plupart des fournisseurs cloud comptent les fichiers mis à la corbeille et les versions dans votre quota de stockage. L'impact est souvent plus important que prévu :

| Fournisseur | Ce qui compte dans le quota | Politique de purge automatique |
|----------|--------------------------|-------------------|
| **Google Drive** | Fichiers dans la corbeille, toutes les versions de fichiers | La corbeille se vide automatiquement après 30 jours |
| **OneDrive** | Éléments de la corbeille, historique des versions | La corbeille se purge automatiquement après 93 jours |
| **Dropbox** | Fichiers supprimés et versions précédentes | Conservés pendant 30 jours (Basic) ou 180 jours (Professional) |
| **Amazon S3** | Toutes les versions d'objets (si le versioning est activé) | Pas de purge automatique ; des règles de cycle de vie sont requises |
| **Backblaze B2** | Toutes les versions de fichiers | Pas de purge automatique sans règles de cycle de vie |
| **Google Cloud Storage** | Versions d'objets non actuelles | Configurable via des règles de cycle de vie |

Un compte Google Drive à 90% de capacité peut avoir 5 à 10% de son utilisation dans la seule corbeille. Sur les buckets S3 avec versioning, les anciennes versions peuvent doubler ou tripler la consommation de stockage réelle au fil du temps.

## Exécuter le nettoyage par fournisseur

### Corbeille Google Drive

La corbeille de Google Drive est la source la plus courante d'utilisation cachée. Pour la vider :

```bash
rclone cleanup gdrive:
```

Cela supprime définitivement tous les fichiers de la corbeille Google Drive. Il n'y a pas d'annulation possible -- assurez-vous de ne rien avoir besoin dans la corbeille avant d'exécuter cette commande.

Dans RcloneView, vous pouvez déclencher le nettoyage depuis l'interface sans ouvrir le terminal. Accédez à votre remote Google Drive et utilisez l'action de nettoyage.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### Corbeille OneDrive

OneDrive conserve les fichiers supprimés dans la corbeille jusqu'à 93 jours :

```bash
rclone cleanup onedrive:
```

Cela vide la corbeille. Pour les comptes OneDrive Business avec de grandes corbeilles, cela peut libérer un espace important immédiatement.

### Objets versionnés S3

Les buckets S3 avec le versioning activé accumulent d'anciennes versions d'objets. Le nettoyage de rclone supprime les versions non actuelles :

```bash
rclone cleanup s3-remote:my-bucket
```

Pour les buckets contenant des milliers d'objets versionnés, cette opération peut prendre du temps. Vous pouvez cibler des préfixes spécifiques pour un nettoyage sélectif :

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox et autres fournisseurs

Dropbox ne prend pas en charge directement la commande cleanup via rclone. Pour Dropbox, gérez les fichiers supprimés et les versions via l'interface web ou l'API Dropbox. D'autres fournisseurs comme pCloud et Backblaze B2 prennent en charge le nettoyage de manière similaire aux exemples ci-dessus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## Vérifier l'espace consommé par la corbeille

Avant d'exécuter le nettoyage, vérifiez l'espace que vous pouvez récupérer :

```bash
rclone about gdrive:
```

La sortie inclut une ligne **Trashed** indiquant exactement l'espace utilisé par les fichiers supprimés :

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

Dans cet exemple, vider la corbeille libérerait instantanément 3,8 Gio -- plus que doublant l'espace disponible.

## Supprimer les anciennes versions de fichiers de manière sélective

Certains flux de travail nécessitent de conserver la dernière version tout en supprimant tout ce qui est plus ancien. Rclone prend en charge cela avec des commandes spécifiques au backend :

Pour S3 avec versioning :

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

Cela supprime uniquement les versions cachées (non actuelles) tout en conservant intacte la version actuelle de chaque objet.

Pour Google Drive, vous pouvez utiliser `--drive-keep-revision-forever=false` dans la configuration de votre remote pour empêcher une rétention illimitée des versions à l'avenir.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## Automatiser le nettoyage avec des tâches planifiées

Le nettoyage manuel fonctionne, mais un nettoyage planifié évite que le problème ne se reproduise :

1. Dans RcloneView, créez une nouvelle **Job** avec la commande de nettoyage pour chaque remote.
2. Ouvrez le **Job Scheduler** et définissez une planification récurrente -- mensuelle suffit pour la plupart des comptes.
3. Vérifiez l'**historique des tâches (Job History)** après chaque exécution pour confirmer le succès du nettoyage.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

Une planification de nettoyage mensuelle garantit que la corbeille et les anciennes versions ne s'accumulent jamais suffisamment pour causer des problèmes de quota ou des factures gonflées.

## Considérations de sécurité

- **Le nettoyage est permanent** -- les fichiers mis à la corbeille ne peuvent pas être récupérés après l'exécution de `rclone cleanup`.
- **Auditez d'abord la corbeille** -- parcourez la corbeille de votre fournisseur via son interface web avant de la purger.
- **Le versioning S3 a un but** -- si vous comptez sur les versions pour un rollback, ne nettoyez pas sans discernement. Envisagez des règles de cycle de vie qui conservent les N dernières versions à la place.
- **Testez d'abord sur un remote non critique** -- confirmez que le comportement correspond à vos attentes avant d'exécuter le nettoyage sur des données de production.
- **Le mode simulation n'est pas disponible** pour le nettoyage -- contrairement à sync ou copy, il n'existe pas de mode `--dry-run`. Ne procédez avec confiance qu'après avoir examiné le contenu de votre corbeille.

## L'impact sur les coûts

Pour les fournisseurs facturés à l'usage, le nettoyage réduit directement votre facture :

| Fournisseur | Coût de stockage | 100 Go d'anciennes versions/corbeille |
|----------|-------------|------------------------------|
| Amazon S3 Standard | 0,023 $/Go/mois | 2,30 $/mois économisés |
| Backblaze B2 | 0,006 $/Go/mois | 0,60 $/mois économisés |
| Google Cloud Standard | 0,020 $/Go/mois | 2,00 $/mois économisés |
| Wasabi | 0,0069 $/Go/mois | 0,69 $/mois économisés |

Pour les fournisseurs basés sur des quotas, le nettoyage évite d'atteindre des limites qui interrompent les synchronisations et les sauvegardes.

---

**Guides connexes :**

- [Analyser l'utilisation et les quotas du stockage cloud](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Comparaison Wasabi vs Backblaze B2 vs IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Transferts et synchronisation cloud-à-cloud](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
