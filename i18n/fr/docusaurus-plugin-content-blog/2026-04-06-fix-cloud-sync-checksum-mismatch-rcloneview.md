---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "Corriger les erreurs de non-correspondance de somme de contrôle lors de la synchronisation cloud dans RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de non-correspondance de somme de contrôle lors de la synchronisation cloud dans RcloneView. Découvrez comment rclone gère les sommes de contrôle, les différences de hachage entre fournisseurs, et quand utiliser --ignore-checksum."
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de non-correspondance de somme de contrôle lors de la synchronisation cloud dans RcloneView

> Les non-correspondances de somme de contrôle lors de la synchronisation cloud signifient généralement que la source et la destination utilisent des algorithmes de hachage différents, et non que vos données sont corrompues. Voici comment les diagnostiquer et les résoudre.

Lorsque rclone synchronise des fichiers entre fournisseurs cloud, il compare les sommes de contrôle pour vérifier que les données transférées correspondent à l'original. Si la source et la destination utilisent des algorithmes de hachage différents — ou si l'un des fournisseurs ne renvoie aucune somme de contrôle — rclone peut signaler une non-correspondance ou retransférer des fichiers inutilement. Ce guide explique ce qui se passe et comment le corriger dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que signifient les non-correspondances de somme de contrôle

Une somme de contrôle (ou hachage) est une chaîne de longueur fixe calculée à partir du contenu d'un fichier. Si deux fichiers produisent la même somme de contrôle, ils sont identiques. Rclone utilise les sommes de contrôle pour :

- **Vérifier les téléversements** — confirmer que le fichier de destination correspond à la source après le transfert.
- **Détecter les changements** — pendant la synchronisation, ignorer les fichiers dont la somme de contrôle et la taille n'ont pas changé.
- **Garantir l'intégrité** — signaler une corruption si le hachage d'un fichier ne correspond pas aux attentes.

Une non-correspondance signifie que le hachage calculé d'un côté ne correspond pas à celui de l'autre côté. Cela peut indiquer une véritable corruption de données, mais cela reflète plus souvent une **incompatibilité d'algorithme de hachage** entre fournisseurs.

## Différences de hachage propres à chaque fournisseur

Différents fournisseurs cloud prennent en charge différents algorithmes de hachage :

| Fournisseur | Hachages pris en charge |
|----------|-----------------|
| **Disque local** | MD5, SHA-1, SHA-256 (selon le système d'exploitation) |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1, QuickXorHash |
| **Dropbox** | Hachage de contenu Dropbox (propriétaire) |
| **Amazon S3** | MD5 (ETag, mais pas pour les téléversements multiparties) |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5, SHA-1 (si le serveur le prend en charge) |
| **Wasabi** | MD5 (ETag) |
| **Cloudflare R2** | MD5 (ETag) |

Lors d'une synchronisation entre fournisseurs partageant un hachage commun (par exemple, Google Drive MD5 vers Azure Blob MD5), les sommes de contrôle fonctionnent sans problème. Lorsqu'il n'y a pas de hachage commun (par exemple, Google Drive MD5 contre OneDrive QuickXorHash), rclone ne peut pas comparer directement les sommes de contrôle.

## Comment rclone gère les hachages non concordants

Rclone est intelligent dans ses comparaisons de hachage :

1. **Hachage commun trouvé** — rclone utilise l'algorithme partagé pour comparer les fichiers. Aucun problème.
2. **Aucun hachage commun** — rclone se rabat sur la comparaison de la taille du fichier et de la date de modification. Les fichiers dont la taille et la date correspondent sont considérés comme identiques.
3. **Option `--checksum` activée** — rclone n'utilise que les sommes de contrôle (sans comparaison de date). Si aucun hachage commun n'existe, rclone retransférera chaque fichier car il ne peut pas confirmer qu'ils correspondent.

Ce troisième scénario est la cause la plus courante de comportement inattendu : activer `--checksum` entre des fournisseurs incompatibles force des retransferts inutiles.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders in RcloneView to identify mismatched files" class="img-large img-center" />

## Scénarios d'erreur courants

### Scénario 1 : non-correspondance d'ETag lors d'un téléversement multiparties sur S3

Lorsque vous téléversez un fichier volumineux vers S3 via un téléversement multiparties, l'ETag résultant n'est pas un simple hachage MD5 — c'est un hachage composite des parties. Le MD5 local calculé par rclone pour le fichier ne correspondra pas à l'ETag S3, ce qui déclenche une non-correspondance lors de la synchronisation suivante.

**Correction :** il s'agit d'un comportement attendu. Rclone gère cela en stockant le hachage attendu dans les métadonnées lorsque c'est possible. Si vous constatez des retransferts de fichiers volumineux, vous pouvez utiliser sans risque `--ignore-checksum` pour ce job de synchronisation spécifique.

### Scénario 2 : synchronisation de Google Drive vers OneDrive

Google Drive utilise MD5 tandis que OneDrive utilise QuickXorHash. Il n'y a pas d'algorithme de hachage commun.

**Correction :** rclone se rabat automatiquement sur la taille + la date de modification. N'utilisez pas `--checksum` pour cette combinaison, sinon chaque fichier sera retransféré.

### Scénario 3 : distants chiffrés (Crypt)

Lors de l'utilisation de rclone crypt, le fichier chiffré a un hachage différent de celui de la source en clair. Rclone gère cela en interne, mais si vous comparez le hachage du distant chiffré à celui du fournisseur d'origine, ils ne correspondront jamais.

**Correction :** comparez toujours les fichiers via la couche du distant crypt, et non en examinant directement le stockage chiffré sous-jacent.

## Configurer le comportement des sommes de contrôle dans RcloneView

### Utiliser l'option --checksum

L'option `--checksum` indique à rclone d'utiliser uniquement les sommes de contrôle (et non la date de modification) pour déterminer si des fichiers doivent être transférés. Activez-la lorsque :

- La source et la destination prennent en charge le même algorithme de hachage.
- Vous souhaitez la garantie d'intégrité la plus forte possible.
- Vous synchronisez entre un disque local et un fournisseur prenant en charge MD5.

Ne l'utilisez pas lorsque :

- La source et la destination n'ont aucun hachage commun — cela forcera le retransfert de tous les fichiers.
- Vous synchronisez des fichiers volumineux vers S3 (les ETags multiparties ne correspondront pas).

### Utiliser l'option --ignore-checksum

L'option `--ignore-checksum` ignore toute vérification de somme de contrôle. Utilisez-la lorsque :

- Vous avez confirmé que les données sont correctes mais que les sommes de contrôle ne correspondront jamais (par exemple, les ETags multiparties de S3).
- Vous souhaitez une synchronisation plus rapide en évitant le calcul de hachage sur des ensembles de données très volumineux.
- Un fournisseur renvoie des hachages incohérents ou incorrects (rare mais possible).

Ne l'utilisez pas par défaut — les sommes de contrôle existent pour détecter une véritable corruption.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure sync job flags in RcloneView before execution" class="img-large img-center" />

## Vérifier l'intégrité des données

Si vous soupçonnez une véritable corruption plutôt qu'une non-correspondance d'algorithme de hachage :

1. **Exécutez `rclone check`** — cela compare les fichiers source et destination et signale les différences. Dans RcloneView, vous pouvez utiliser la vue de comparaison de dossiers.
2. **Téléchargez et comparez localement** — téléchargez le fichier depuis la source et la destination, puis calculez les sommes de contrôle locales avec `md5sum` ou `sha256sum`.
3. **Vérifiez les journaux de transfert** — consultez l'historique des jobs de RcloneView pour repérer d'éventuelles erreurs survenues lors du transfert d'origine.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress and verify checksums in RcloneView" class="img-large img-center" />

## Référence rapide : matrice de compatibilité des hachages

| Sens de synchronisation | Hachage commun | Option checksum sûre ? |
|---------------|-------------|-------------------|
| Local vers Google Drive | MD5 | Oui |
| Local vers OneDrive | SHA-1 | Oui |
| Local vers S3 (petits fichiers) | MD5 | Oui |
| Local vers S3 (multiparties) | Aucun (ETag différent) | Non |
| Google Drive vers OneDrive | Aucun | Non |
| Google Drive vers S3 | MD5 | Oui (petits fichiers) |
| S3 vers Backblaze B2 | Aucun (MD5 contre SHA-1) | Non |
| S3 vers Azure Blob | MD5 | Oui (petits fichiers) |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Vérifiez la prise en charge des hachages de vos fournisseurs** à l'aide du tableau ci-dessus.
3. **Évitez `--checksum` entre fournisseurs incompatibles** pour éviter des retransferts inutiles.
4. **Utilisez la comparaison de dossiers** dans RcloneView pour vérifier visuellement les résultats de la synchronisation.

La plupart des erreurs de non-correspondance de somme de contrôle ne sont pas des corruptions de données — ce sont des incompatibilités d'algorithme de hachage entre fournisseurs. Comprendre quels hachages chaque fournisseur prend en charge est la clé pour résoudre rapidement ces problèmes.

---

**Guides connexes :**

- [Résoudre les erreurs rclone dans RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Corriger les erreurs d'accès refusé S3](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Corriger les erreurs de synchronisation OneDrive](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />
