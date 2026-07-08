---
slug: backup-dir-versioned-sync-rcloneview
title: "Utiliser Backup Dir pour une synchronisation cloud versionnée avec RcloneView"
authors:
  - tayson
description: "Découvrez comment utiliser --backup-dir dans RcloneView pour créer des synchronisations cloud versionnées. Conservez les versions précédentes de vos fichiers en toute sécurité en déplaçant les fichiers écrasés vers un répertoire de sauvegarde."
keywords:
  - rcloneview
  - backup-dir
  - synchronisation versionnée
  - versionnage de sauvegarde cloud
  - répertoire de sauvegarde rclone
  - synchronisation cloud sécurisée
  - historique des versions de fichiers
  - récupération de fichiers cloud
  - synchronisation avec sauvegarde
  - suffixe rclone
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser Backup Dir pour une synchronisation cloud versionnée avec RcloneView

> Écraser ou supprimer accidentellement des fichiers pendant une synchronisation est le cauchemar de tout utilisateur du cloud. **RcloneView** rend les synchronisations versionnées simples grâce à la prise en charge intégrée de `--backup-dir`, garantissant que vous ne perdiez plus jamais une version précédente.

Lorsque vous exécutez une opération de synchronisation standard, les fichiers de destination qui diffèrent de la source sont écrasés, et les fichiers qui n'existent plus à la source sont supprimés. C'est efficace, mais aussi destructeur. Si un fichier a été corrompu à la source, ou si vous avez accidentellement supprimé quelque chose dont vous aviez encore besoin, ces changements se propagent vers la destination sans possibilité de retour en arrière.

L'option `--backup-dir` résout ce problème avec élégance. Au lieu de supprimer définitivement les fichiers écrasés ou supprimés, rclone les déplace d'abord vers un répertoire de sauvegarde distinct. Cela vous offre un filet de sécurité complet : chaque fichier qui aurait été perdu est conservé à un emplacement que vous contrôlez.

RcloneView vous permet de configurer `--backup-dir` via son interface de flags personnalisés, afin que vous bénéficiiez de toute la puissance des synchronisations versionnées sans avoir à mémoriser la syntaxe en ligne de commande. Combiné à `--suffix` pour des versions horodatées, vous pouvez construire un système léger de versionnage de fichiers en utilisant uniquement votre stockage cloud existant.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait réellement --backup-dir

Lorsqu'une opération de synchronisation rencontre un fichier de destination qui doit être écrasé ou supprimé, `--backup-dir` intercepte cette action. Au lieu de détruire le fichier, rclone le déplace vers le répertoire de sauvegarde spécifié, en conservant sa structure de chemin relative.

Par exemple, si votre synchronisation écrase `documents/report.docx` sur la destination, l'ancienne version est déplacée vers `backup/documents/report.docx`. La hiérarchie des répertoires est conservée, ce qui facilite la localisation et la restauration de fichiers spécifiques par la suite.

Cela s'applique à deux scénarios :
- **Fichiers écrasés** : lorsqu'un fichier source est plus récent ou différent, l'ancienne copie de destination est déplacée vers le répertoire de sauvegarde avant que la nouvelle version ne la remplace.
- **Fichiers supprimés** : lorsqu'un fichier existe à la destination mais pas à la source, il est déplacé vers le répertoire de sauvegarde au lieu d'être supprimé définitivement.

## Pourquoi les synchronisations versionnées sont essentielles

Les opérations de synchronisation standard supposent que vous voulez toujours que la destination reflète exactement la source. Cela fonctionne bien jusqu'à ce que quelque chose tourne mal. Voici quelques scénarios courants :

- Un fichier est corrompu ou infecté par un ransomware à la source, et la corruption se propage vers votre sauvegarde avant que vous ne le remarquiez.
- Vous supprimez accidentellement un dossier, et la prochaine synchronisation planifiée le supprime également de la destination.
- Un collègue écrase un document partagé, et la version précédente disparaît des deux emplacements.

Avec `--backup-dir`, chacune de ces situations est récupérable. Les versions précédentes se trouvent en toute sécurité dans votre répertoire de sauvegarde, intactes lors des opérations de synchronisation ultérieures.

## Configurer --backup-dir dans RcloneView

RcloneView prend en charge les flags rclone personnalisés dans la configuration de ses tâches. Voici comment configurer une synchronisation versionnée :

1. Ouvrez le **Job Manager** et créez une nouvelle tâche de synchronisation ou modifiez-en une existante.
2. Configurez vos distants source et destination comme d'habitude.
3. Dans la section **Custom Flags**, ajoutez : `--backup-dir remote:backup/2026-04-08`
4. Enregistrez et exécutez la tâche.

Le répertoire de sauvegarde peut se trouver sur le même distant que la destination ou sur un distant entièrement différent. L'utilisation d'un chemin basé sur la date, comme `backup/2026-04-08`, permet de garder les fichiers déplacés de chaque jour organisés dans leur propre dossier.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Combiner --backup-dir avec --suffix pour des versions horodatées

Pour un versionnage encore plus précis, combinez `--backup-dir` avec `--suffix` afin d'ajouter un horodatage à chaque fichier sauvegardé. Cela évite les collisions de noms de fichiers lorsque le même fichier est modifié et synchronisé plusieurs fois.

Ajoutez les deux flags dans la section des flags personnalisés :

```
--backup-dir remote:backup --suffix .2026-04-08
```

Avec cette configuration, si `report.docx` est écrasé, l'ancienne version est enregistrée sous le nom `backup/report.docx.2026-04-08`. Relancez la synchronisation le lendemain avec un suffixe mis à jour, et vous accumulez un historique de versions datées sans aucun conflit.

Pour les tâches automatisées exécutées selon un planning, vous pouvez utiliser des suffixes dynamiques liés à la date d'exécution, garantissant que chaque exécution crée des sauvegardes portant un nom unique.

## Exemples pratiques

**Sauvegarde quotidienne avec conservation des versions :**
Synchronisez votre Google Drive vers Backblaze B2 chaque nuit, avec les fichiers déplacés de chaque jour stockés dans un dossier de sauvegarde daté. Après 30 jours, vous pouvez nettoyer les anciens répertoires de sauvegarde pour maîtriser les coûts de stockage.

**Protection de projet d'équipe :**
Synchronisez un dossier Dropbox partagé vers S3, en utilisant `--backup-dir` pour capturer tous les fichiers que les membres de l'équipe suppriment ou écrasent. Cela agit comme une piste d'audit légère sans nécessiter les fonctionnalités de versionnage premium de votre fournisseur cloud.

**Filet de sécurité pour la migration :**
Lors d'une migration d'un cloud à un autre, utilisez `--backup-dir` pendant la synchronisation initiale pour capturer tous les fichiers de destination qui seraient écrasés. Si la migration ne se déroule pas comme prévu, vous disposez d'un point de retour en arrière complet.

## Flux de récupération

La restauration de fichiers depuis votre répertoire de sauvegarde est simple dans RcloneView :

1. Ouvrez le **Remote Explorer** et accédez à votre répertoire de sauvegarde.
2. Parcourez la structure du répertoire pour trouver le fichier dont vous avez besoin. La hiérarchie de dossiers d'origine est préservée.
3. Utilisez le glisser-déposer ou une opération de copie pour remettre le fichier à son emplacement d'origine.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

Étant donné que les répertoires de sauvegarde sont de simples dossiers sur votre distant, vous pouvez également les parcourir, télécharger des fichiers, ou même les synchroniser vers un autre emplacement à des fins d'archivage.

## Gérer le stockage de sauvegarde dans le temps

Les sauvegardes versionnées s'accumulent avec le temps, il est donc important d'avoir une stratégie de conservation. Voici quelques approches :

- **Dossiers basés sur la date** : utilisez un chemin de répertoire de sauvegarde daté (par exemple, `backup/2026-04-08`) et supprimez périodiquement les dossiers plus anciens que votre fenêtre de conservation.
- **Nettoyage basé sur le suffixe** : lorsque vous utilisez `--suffix`, vous pouvez identifier et supprimer les fichiers portant d'anciens suffixes de date.
- **Stockage séparé à faible coût** : dirigez votre répertoire de sauvegarde vers un fournisseur de stockage objet économique comme Wasabi ou Backblaze B2, où les coûts de conservation à long terme sont minimes.

L'Explorer de RcloneView facilite la navigation dans les répertoires de sauvegarde et la suppression des versions obsolètes lorsque vous êtes prêt à récupérer de l'espace.

## Bonnes pratiques pour --backup-dir

- Testez toujours votre configuration `--backup-dir` avec un essai à blanc (dry run) au préalable pour confirmer que les fichiers sont acheminés vers le bon emplacement.
- Conservez le répertoire de sauvegarde sur le même distant que la destination lorsque c'est possible, car les déplacements au sein d'un même distant sont instantanés et ne consomment pas de bande passante.
- Utilisez des conventions de nommage cohérentes pour vos chemins de sauvegarde afin que les scripts de nettoyage automatisés puissent facilement identifier les anciennes versions.
- Combinez `--backup-dir` avec `--backup-dir` sur un distant différent pour les données critiques, ce qui vous donne à la fois une sauvegarde locale à récupération rapide et une archive géographiquement séparée.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Créez une tâche de synchronisation avec vos distants source et destination configurés.
3. Ajoutez `--backup-dir remote:backup/YYYY-MM-DD` dans le champ des flags personnalisés pour activer les synchronisations versionnées.
4. Effectuez d'abord un essai à blanc pour vérifier la configuration, puis exécutez la tâche.

Avec `--backup-dir` configuré, chaque opération de synchronisation devient un processus sûr et réversible. Vous bénéficiez de l'efficacité d'une synchronisation à sens unique avec la tranquillité d'esprit que rien n'est jamais perdu définitivement.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
