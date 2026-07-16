---
slug: fix-cloud-sync-encoding-unicode-errors-rcloneview
title: "Corriger les erreurs d'encodage et de nom de fichier Unicode lors de la synchronisation cloud dans RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs d'encodage et de nom de fichier Unicode lors de la synchronisation cloud dans RcloneView. Résolvez les incompatibilités de caractères entre fournisseurs."
keywords:
  - rcloneview
  - unicode filename error
  - cloud sync encoding error
  - special characters cloud sync
  - filename encoding fix
  - rclone encoding
  - cloud file name error
  - unicode cloud transfer
  - character encoding fix
  - cross-platform filename issues
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs d'encodage et de nom de fichier Unicode lors de la synchronisation cloud dans RcloneView

> Les différents fournisseurs cloud et systèmes d'exploitation gèrent les noms de fichiers différemment. Les caractères Unicode, les symboles spéciaux et les incompatibilités d'encodage provoquent des échecs de synchronisation — voici comment les diagnostiquer et les corriger dans RcloneView.

Un fichier nommé `résumé_2026.pdf` sur Google Drive peut échouer à se synchroniser vers OneDrive for Business. Un dossier contenant des caractères japonais sur un NAS local peut ne pas se transférer vers S3. Un nom de fichier contenant `#`, `%` ou `:` peut fonctionner sur Dropbox mais être rejeté par SharePoint. Ces problèmes d'encodage et de compatibilité de caractères comptent parmi les plus frustrants en matière de synchronisation cloud, car ils ignorent silencieusement des fichiers ou produisent des erreurs difficiles à interpréter.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Symptômes courants

- **Erreurs « Nom de fichier invalide » ou « Caractère non pris en charge »** : le fournisseur de destination rejette les noms de fichiers contenant des caractères qu'il ne prend pas en charge.
- **Fichiers ignorés silencieusement pendant la synchronisation** : le transfert se termine « avec succès », mais certains fichiers sont manquants sur la destination. Ces fichiers ont généralement des caractères problématiques dans leur nom.
- **Noms de fichiers illisibles sur la destination** : les fichiers arrivent, mais leurs noms contiennent des séquences d'échappement `%xx`, des caractères de remplacement (`?`) ou du mojibake (rendu de caractères incorrect).
- **Erreurs « Chemin trop long »** : les noms de fichiers encodés deviennent plus longs que la limite de longueur de chemin de la destination (par exemple, 400 caractères pour SharePoint, 1024 pour S3).
- **Fichiers en double avec des noms similaires** : deux fichiers qui semblent identiques (par exemple, `café` avec Unicode composé ou décomposé) sont traités comme des fichiers différents.

## Comprendre le problème

### Restrictions de caractères des fournisseurs

Chaque fournisseur cloud a des règles différentes concernant les caractères autorisés dans les noms de fichiers :

| Fournisseur | Caractères restreints |
|---|---|
| OneDrive Business | `" * : < > ? / \ \|` et `#` `%` dans certains contextes |
| SharePoint | `" * : < > ? / \ \| #` `%` `~` et espaces en début/fin |
| Google Drive | Seuls `/` et les octets null sont restreints |
| Dropbox | `/` et octets null ; espaces et points en fin de nom sous Windows |
| AWS S3 | Presque aucune restriction (toute séquence d'octets UTF-8) |
| Système de fichiers local (Windows) | `" * : < > ? / \ \|` et noms réservés (CON, PRN, etc.) |

Lors d'une synchronisation d'un fournisseur permissif (Google Drive, S3) vers un fournisseur restrictif (OneDrive Business, SharePoint), les fichiers contenant des caractères restreints échoueront à moins d'être encodés.

### Normalisation Unicode

Unicode offre plusieurs façons de représenter le même caractère. Par exemple, `é` peut être :
- **NFC (composé)** : un seul point de code U+00E9
- **NFD (décomposé)** : deux points de code U+0065 + U+0301

macOS utilise généralement NFD, tandis que Windows et Linux utilisent NFC. Google Drive préserve l'encodage d'origine, tandis que OneDrive normalise en NFC. Cela signifie qu'un fichier créé sur macOS et téléversé sur Google Drive peut ne pas correspondre au même fichier sur OneDrive lors d'une comparaison — même si le nom de fichier semble identique aux yeux d'un humain.

## Correctif 1 : activer l'encodage automatique des caractères

RcloneView (via rclone) encode automatiquement les caractères restreints lors du transfert entre fournisseurs. Par défaut, chaque type de distant dispose d'un préréglage d'encodage qui gère ses restrictions spécifiques. Par exemple, lors d'une copie vers OneDrive, des caractères comme `"`, `*` et `:` sont automatiquement remplacés par des équivalents Unicode visuellement similaires mais autorisés.

Si vous constatez des erreurs d'encodage malgré cela, vérifiez que l'encodage n'est pas désactivé. Dans la configuration du distant, vérifiez que le paramètre `encoding` est défini sur sa valeur par défaut (ne le définissez pas sur `None`). Vous pouvez consulter et modifier ce paramètre dans le gestionnaire de distants de RcloneView.

## Correctif 2 : gérer la normalisation Unicode

Si vous synchronisez entre des fichiers originaires de macOS et des fournisseurs cloud basés sur Windows, les différences de normalisation Unicode peuvent causer de faux positifs lors des comparaisons (les fichiers semblent différents alors qu'ils ne le sont pas) ou des fichiers en double sur la destination.

Utilisez l'indicateur `--no-unicode-normalization` dans les indicateurs personnalisés de RcloneView si vous souhaitez préserver la séquence d'octets exacte des noms de fichiers. Alternativement, la plupart des fournisseurs cloud normalisent les noms de fichiers côté serveur, et le comportement par défaut de rclone gère correctement les cas les plus courants.

Pour les problèmes persistants, l'indicateur `--fix-case` peut aider lorsque des différences de sensibilité à la casse entre fournisseurs posent problème (par exemple, S3 est sensible à la casse ; le système de fichiers local Windows ne l'est pas).

## Correctif 3 : renommer les fichiers problématiques

Pour un petit nombre de fichiers avec des caractères problématiques, la solution la plus simple consiste à les renommer sur la source. Utilisez l'explorateur de RcloneView pour identifier les fichiers contenant des caractères spéciaux et renommez-les directement. Caractères courants à éviter chez tous les fournisseurs :

- `# % & { } \ < > * ? / $ ! ' " : @ + \`` \| =`
- Espaces ou points en début ou fin de nom
- Noms réservés Windows (CON, PRN, AUX, NUL, COM1-9, LPT1-9)

## Correctif 4 : utiliser des règles de filtrage pour ignorer les fichiers problématiques

Si vous ne pouvez pas renommer les fichiers (par exemple, ils se trouvent sur un lecteur partagé que vous ne contrôlez pas), utilisez des règles de filtrage pour exclure de la synchronisation les fichiers présentant des motifs de caractères spécifiques. Il s'agit d'une solution de contournement plutôt que d'une véritable correction, mais elle évite que la synchronisation échoue ou se bloque sur des fichiers problématiques.

Dans la configuration de tâche de RcloneView, ajoutez des règles de filtrage telles que :
- `--exclude "**/*#*"` pour ignorer les fichiers contenant `#`
- `--exclude "**/*%*"` pour ignorer les fichiers contenant `%`

Consultez ensuite les journaux de synchronisation pour identifier les fichiers ignorés et les traiter manuellement si nécessaire.

## Correctif 5 : vérifier les limites de longueur de chemin

Lorsque les noms de fichiers sont encodés, ils deviennent plus longs (chaque caractère restreint est remplacé par une séquence Unicode multi-octets). Si le chemin source est déjà proche de la limite de la destination, l'encodage la dépasse.

SharePoint a une limite de chemin de 400 caractères. Windows a une limite de 260 caractères par défaut (configurable). S3 a une limite de clé de 1024 caractères.

Si vous rencontrez des erreurs de chemin trop long, raccourcissez les noms de dossiers dans la hiérarchie source ou aplatissez les structures profondément imbriquées. L'explorateur de RcloneView affiche le chemin complet, ce qui facilite l'identification des fichiers profondément imbriqués.

## Prévenir les problèmes futurs

- **Standardiser les noms de fichiers avant le téléversement** : évitez dès le départ les caractères spéciaux dans les noms de fichiers. Limitez-vous aux caractères alphanumériques, tirets, underscores et points.
- **Tester avec un essai à blanc** : avant de grandes synchronisations entre fournisseurs ayant des règles de caractères différentes, utilisez le mode d'essai à blanc de RcloneView pour identifier les problèmes d'encodage potentiels sans transférer de données.
- **Consulter les journaux de synchronisation** : après chaque synchronisation, vérifiez l'historique des tâches pour repérer les avertissements concernant les fichiers ignorés ou renommés. Traitez-les de manière proactive avant qu'ils ne s'accumulent.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez que vos configurations de distants utilisent les paramètres d'encodage par défaut.
3. Utilisez l'essai à blanc pour identifier les problèmes d'encodage avant de lancer un transfert.
4. Renommez ou filtrez les fichiers problématiques selon vos besoins.

Les problèmes d'encodage et d'Unicode sont subtils mais courants lors de la synchronisation entre fournisseurs. L'encodage automatique de RcloneView gère la majorité des cas, et les étapes de dépannage ci-dessus résolvent le reste.

---

**Guides associés :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
