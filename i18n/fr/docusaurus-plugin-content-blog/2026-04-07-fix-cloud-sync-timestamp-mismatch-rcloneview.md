---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "Corriger les erreurs de décalage d'horodatage lors de la synchronisation cloud dans RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de décalage d'horodatage lors de la synchronisation cloud dans RcloneView. Cet article couvre le décalage d'horloge, les différences de fuseau horaire, les limitations des métadonnées des fournisseurs, la comparaison par somme de contrôle et des indicateurs comme --use-server-modtime et --no-update-modtime."
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de décalage d'horodatage lors de la synchronisation cloud dans RcloneView

> Les décalages d'horodatage font que rclone retransfère des fichiers qui n'ont pourtant pas changé, ce qui gaspille de la bande passante et du temps. Ce guide explique pourquoi ils se produisent et comment configurer RcloneView pour les gérer correctement.

Lorsque rclone synchronise des fichiers entre deux emplacements, il compare les horodatages de modification pour décider quels fichiers doivent être mis à jour. Si la source et la destination indiquent des horodatages différents pour le même fichier — même d'une seule seconde — rclone considère que le fichier a changé et le transfère à nouveau. Cela entraîne des transferts inutiles, des coûts de bande passante gonflés, et des tâches de synchronisation qui ne semblent jamais se terminer proprement. Le problème est particulièrement courant lors de la synchronisation entre différents fournisseurs cloud, ou entre un stockage local et des remotes cloud qui gèrent les horodatages différemment.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les décalages d'horodatage se produisent

Les horodatages semblent simples — un fichier a été modifié à un moment donné — mais la réalité chez les fournisseurs cloud est bien plus complexe. Plusieurs facteurs peuvent faire qu'un même fichier affiche des heures de modification différentes sur la source et la destination.

### Décalage d'horloge entre fournisseurs

Chaque fournisseur cloud maintient ses propres horloges internes. Bien que la plupart soient synchronisées à la milliseconde près via NTP, l'horodatage stocké pour un fichier peut être défini à différents moments du processus d'upload. Un fournisseur peut enregistrer l'heure de début de l'upload, un autre celle de sa fin. Pour les fichiers volumineux, cette différence peut atteindre plusieurs secondes, voire plus.

### Différences de fuseau horaire et de précision

Certains fournisseurs stockent les horodatages en UTC, d'autres dans le fuseau horaire local de l'utilisateur, et certains tronquent la précision. Par exemple :

- **Google Drive** stocke les heures de modification avec une précision à la milliseconde et permet de définir des heures de modification personnalisées.
- **OneDrive** prend en charge l'heure de modification avec une précision à la seconde.
- **Amazon S3** ne prend pas nativement en charge les heures de modification dans les métadonnées d'objet — il enregistre à la place l'heure d'upload comme en-tête « last-modified ».
- **Dropbox** conserve les heures de modification définies par le client, mais uniquement à la seconde près.
- **SFTP** dépend du système de fichiers distant, qui peut avoir une précision à la seconde ou à la microseconde.

Lorsque vous synchronisez depuis un fournisseur à précision milliseconde vers un fournisseur à précision seconde, l'arrondi provoque un écart constant d'une seconde (ou d'une fraction de seconde).

### Heure de modification non prise en charge

Certains backends de stockage cloud ne prennent tout simplement pas en charge la préservation des heures de modification :

- Le **stockage compatible S3** (AWS S3, Wasabi, Backblaze B2 en mode S3, Cloudflare R2) stocke l'heure d'upload, et non l'heure de modification originale du fichier. Rclone contourne ce problème en stockant l'heure de modification originale dans les métadonnées de l'objet (X-Amz-Meta-Mtime), mais cela ne fonctionne que si ces métadonnées ont été définies lors de l'upload initial par rclone.
- Les fichiers uploadés via l'interface web du fournisseur ou d'autres outils n'auront pas ces métadonnées, ce qui provoque des décalages lors des synchronisations suivantes.

### Métadonnées non conservées pendant le transfert

Si les fichiers ont été initialement uploadés vers la destination par un outil autre que rclone, ou si les en-têtes de métadonnées ont été supprimés par un proxy ou un CDN, rclone ne peut pas trouver les métadonnées d'heure de modification attendues. Il se rabat alors sur l'heure « last-modified » du fournisseur, qui sera différente de celle de la source.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## Diagnostiquer le problème

Avant d'appliquer des correctifs, vérifiez que les horodatages sont bien la cause du problème. Lancez une synchronisation à blanc (dry-run) dans RcloneView ou depuis le terminal :

```bash
rclone sync source: dest: --dry-run -v
```

Examinez la sortie. Si vous voyez des lignes comme :

```
NOTICE: file.txt: Skipped copy (src older)
```

ou des fichiers marqués pour transfert malgré un contenu identique, les horodatages en sont probablement la cause. Vous pouvez aussi comparer des fichiers spécifiques :

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

La commande `lsl` affiche la taille du fichier, l'heure de modification et le chemin. Comparez les horodatages — si les tailles correspondent mais que les heures diffèrent de quelques secondes ou affichent des fuseaux horaires différents, vous avez un décalage d'horodatage.

Dans RcloneView, utilisez la fonctionnalité **Comparer les dossiers** pour inspecter visuellement les différences. La vue de comparaison met en évidence les fichiers qui diffèrent par taille, horodatage ou somme de contrôle, ce qui facilite l'identification des écarts liés uniquement à l'horodatage.

## Utiliser --use-server-modtime

L'indicateur `--use-server-modtime` indique à rclone d'utiliser l'heure de modification signalée par le serveur plutôt qu'une heure stockée dans les métadonnées. Ceci est utile lorsque :

- Vous souhaitez un comportement cohérent quelle que soit la manière dont les fichiers ont été initialement uploadés.
- Les heures de modification des métadonnées ne sont pas fiables ou sont absentes.
- Vous synchronisez entre deux emplacements où les fichiers ont été uploadés par des outils différents.

```bash
rclone sync source: dest: --use-server-modtime
```

Dans RcloneView, vous pouvez ajouter cet indicateur dans la configuration de la tâche, sous les options avancées ou les indicateurs personnalisés.

**Quand l'utiliser :** Lors d'une synchronisation depuis un backend compatible S3 où les fichiers ont été uploadés par des outils autres que rclone, ou lorsque les en-têtes de métadonnées sont incohérents.

**Compromis :** Les heures de modification du serveur reflètent l'heure d'upload, pas l'heure de modification originale du fichier. Cela signifie que rclone ne peut pas détecter si un fichier a été modifié avant d'être re-uploadé — il ne voit que l'horodatage d'upload.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Utiliser --no-update-modtime

L'indicateur `--no-update-modtime` empêche rclone de définir l'heure de modification sur la destination après la copie d'un fichier. Par défaut, rclone copie un fichier puis définit l'heure de modification de la destination pour qu'elle corresponde à la source. Si la destination ne prend pas en charge la définition des heures de modification (ou les arrondit), cela crée un décalage persistant lors de la synchronisation suivante.

```bash
rclone sync source: dest: --no-update-modtime
```

**Quand l'utiliser :** Lorsque le fournisseur de destination ne prend pas en charge la définition des heures de modification, ou lorsque le fait de définir l'heure introduit des erreurs d'arrondi qui déclenchent des retransferts inutiles.

**Compromis :** Sans correspondance des heures de modification, rclone doit utiliser une autre méthode (comme les sommes de contrôle) pour détecter les changements lors des synchronisations suivantes.

## Passer à la comparaison basée sur les sommes de contrôle

Si les horodatages ne sont fondamentalement pas fiables entre votre source et votre destination, vous pouvez demander à rclone de comparer les fichiers par somme de contrôle plutôt que par heure de modification. C'est la méthode la plus fiable pour déterminer si un fichier a réellement changé.

```bash
rclone sync source: dest: --checksum
```

L'indicateur `--checksum` fait en sorte que rclone calcule ou récupère les hachages (MD5, SHA-1, ou d'autres algorithmes pris en charge) des fichiers des deux côtés, et ne transfère que les fichiers dont le hachage diffère.

**Avantages :**

- Ignore complètement les horodatages — plus de faux positifs dus au décalage d'horloge ou aux différences de précision.
- Détecte les changements réels de contenu, pas seulement les différences de métadonnées.
- Fonctionne de manière fiable avec tous les fournisseurs.

**Inconvénients :**

- Plus lent pour de grands ensembles de fichiers, car rclone doit calculer ou récupérer les sommes de contrôle pour chaque fichier.
- Certains fournisseurs ne renvoient pas de sommes de contrôle pour tous les fichiers (par exemple, les objets S3 uploadés en plusieurs parties ont des ETags composites qui ne sont pas des hachages MD5 standards).
- Augmente le nombre d'appels API, ce qui peut compter dans les limites de débit ou entraîner des coûts.

Dans RcloneView, activez la comparaison par somme de contrôle dans les paramètres de la tâche de synchronisation. Pour les grands jeux de données, envisagez d'exécuter des synchronisations par somme de contrôle selon un planning (par exemple, hebdomadaire) et d'utiliser des synchronisations basées sur l'horodatage pour les sauvegardes incrémentielles quotidiennes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Comment les différents fournisseurs gèrent les horodatages

Comprendre le comportement de chaque fournisseur en matière d'horodatage vous aide à choisir la bonne stratégie de synchronisation.

| Fournisseur | Prise en charge de l'heure de modification | Précision | Remarques |
|---|---|---|---|
| Google Drive | Complète | Milliseconde | Permet de définir une heure de modification personnalisée via l'API |
| OneDrive | Complète | Seconde | Prend en charge la définition de l'heure de modification |
| Dropbox | Complète | Seconde | Heure de modification définie par le client conservée |
| Amazon S3 | Métadonnées uniquement | Seconde | Rclone stocke l'heure de modification dans X-Amz-Meta-Mtime |
| Backblaze B2 | Métadonnées uniquement | Milliseconde | Stockée dans les en-têtes d'informations du fichier |
| Wasabi | Métadonnées uniquement | Seconde | Compatible S3, utilise X-Amz-Meta-Mtime |
| Cloudflare R2 | Métadonnées uniquement | Seconde | Compatible S3, basé sur les métadonnées |
| SFTP | Dépend du système de fichiers | Variable | Dépend du système de fichiers distant |
| Azure Blob | Métadonnées uniquement | Seconde | Rclone utilise les en-têtes de métadonnées |
| Google Cloud Storage | Métadonnées uniquement | Seconde | Métadonnées personnalisées pour l'heure de modification |

Lors d'une synchronisation entre deux fournisseurs ayant une prise en charge « Complète » de l'heure de modification (par exemple, Google Drive vers OneDrive), la comparaison basée sur l'horodatage fonctionne de manière fiable. Lors d'une synchronisation entre un fournisseur « Complet » et un fournisseur « Métadonnées uniquement », les décalages sont fréquents, sauf si les fichiers ont été initialement uploadés par rclone.

## Combiner les indicateurs pour de meilleurs résultats

Pour la plupart des scénarios de synchronisation entre fournisseurs, une combinaison d'indicateurs donne les meilleurs résultats :

**Pour les synchronisations S3-vers-S3 ou S3-vers-cloud où les fichiers ont été uploadés par d'autres outils :**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**Pour Google Drive vers OneDrive (les deux prennent en charge l'heure de modification) :**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

L'indicateur `--modify-window` ajoute une tolérance aux comparaisons d'horodatage. Le définir à `1s` signifie que les fichiers dont les horodatages sont à une seconde d'écart l'un de l'autre sont considérés comme identiques. Cela permet de gérer l'arrondi dû aux différences de précision.

**Pour une synchronisation incrémentielle quotidienne avec vérification complète occasionnelle :**

```bash
# Quotidien (rapide, basé sur l'horodatage avec tolérance)
rclone sync source: dest: --modify-window 2s

# Hebdomadaire (approfondi, basé sur la somme de contrôle)
rclone sync source: dest: --checksum
```

Dans RcloneView, vous pouvez créer deux tâches de synchronisation distinctes — une pour les exécutions quotidiennes avec `--modify-window` et une pour les exécutions hebdomadaires avec `--checksum` — et les planifier indépendamment.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Prévenir les problèmes d'horodatage dans les nouvelles configurations

Si vous mettez en place un nouveau flux de synchronisation, vous pouvez éviter la plupart des problèmes d'horodatage dès le départ :

1. **Utilisez rclone pour tous les transferts** — rclone définit les métadonnées de manière cohérente, de sorte que les fichiers uploadés par rclone auront des métadonnées d'heure de modification correctes partout.
2. **Définissez --modify-window de manière appropriée** pour votre paire de fournisseurs dès la première synchronisation.
3. **Utilisez le mode somme de contrôle pour les migrations initiales** — lorsque vous déplacez un grand jeu de données vers un nouveau fournisseur pour la première fois, utilisez `--checksum` pour garantir une base de référence propre.
4. **Testez d'abord avec un petit dossier** — synchronisez une poignée de fichiers, vérifiez l'absence de décalages, puis montez en échelle.
5. **Documentez vos indicateurs** — lorsque vous trouvez la bonne combinaison pour vos fournisseurs, enregistrez-la comme tâche RcloneView afin de ne pas avoir à la redécouvrir plus tard.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez vos remotes source et destination** dans le gestionnaire de remotes.
3. **Utilisez Comparer les dossiers** pour inspecter les différences avant de synchroniser.
4. **Configurez les indicateurs de synchronisation** (`--checksum`, `--modify-window`, `--no-update-modtime`) en fonction de votre paire de fournisseurs.
5. **Créez une tâche de synchronisation planifiée** et surveillez les résultats dans l'historique des tâches.

Les décalages d'horodatage sont l'une des causes les plus courantes de synchronisations cloud inefficaces. Avec les bons indicateurs et une bonne compréhension de la façon dont chaque fournisseur gère les heures de modification, vous pouvez éliminer les transferts inutiles et garder vos tâches de synchronisation propres.

---

**Guides connexes :**

- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchroniser des stockages distants](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
