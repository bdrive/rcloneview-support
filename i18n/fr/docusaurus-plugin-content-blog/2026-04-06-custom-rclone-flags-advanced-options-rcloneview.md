---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "Utiliser des indicateurs rclone personnalisés et des options avancées dans les tâches RcloneView"
authors:
  - tayson
description: "Découvrez comment ajouter des indicateurs rclone personnalisés dans RcloneView pour l'optimisation des performances, le débogage et la configuration avancée des tâches. Couvre les transfers, checkers, fast-list, et plus encore."
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - feature
  - rclone
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser des indicateurs rclone personnalisés et des options avancées dans les tâches RcloneView

> RcloneView gère automatiquement les cas courants, mais la véritable puissance de rclone réside dans ses indicateurs (flags). Savoir lesquels ajouter -- et où -- peut réduire de moitié les temps de transfert ou résoudre des cas particuliers tenaces.

Rclone dispose de centaines d'indicateurs en ligne de commande qui contrôlent tout, du parallélisme des transferts au comportement des sommes de contrôle en passant par la logique de nouvelle tentative. RcloneView fournit une interface claire pour les opérations les plus courantes, mais il vous permet également d'injecter des indicateurs personnalisés dans n'importe quelle tâche pour les situations où les paramètres par défaut ne suffisent pas. Ce guide couvre les indicateurs les plus utiles, quand les utiliser et comment les configurer dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Où ajouter des indicateurs personnalisés dans RcloneView

RcloneView prend en charge les indicateurs personnalisés à deux endroits :

1. **Configuration de la tâche** -- lors de la création ou de la modification d'une tâche (copy, sync, move), il existe un champ pour les indicateurs supplémentaires. Saisissez-les exactement comme vous le feriez en ligne de commande.
2. **Terminal** -- pour les commandes ponctuelles, ouvrez le panneau Terminal et saisissez la commande rclone complète avec les indicateurs souhaités.

Les indicateurs ajoutés à une tâche enregistrée persistent d'une exécution à l'autre, vous les configurez donc une seule fois et ils s'appliquent à chaque exécution de la tâche -- y compris les exécutions planifiées.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## Indicateurs d'optimisation des performances

Ces indicateurs ont un impact direct sur la vitesse de transfert et l'utilisation des ressources.

### --transfers N

Contrôle le nombre de fichiers transférés en parallèle. La valeur par défaut est 4.

```bash
--transfers 16
```

Augmentez cette valeur pour un grand nombre de petits fichiers ou lorsque le fournisseur prend en charge une concurrence élevée. S3, B2 et Wasabi gèrent bien 16 à 32 transferts parallèles. Google Drive peut limiter le débit au-delà de 8 à 10.

### --checkers N

Contrôle le nombre de fichiers vérifiés (comparés) en parallèle. La valeur par défaut est 8.

```bash
--checkers 32
```

Augmentez cette valeur lors de l'exécution d'opérations de synchronisation ou de vérification sur des répertoires contenant de nombreux fichiers. La phase de vérification est souvent le goulot d'étranglement, pas le transfert.

### --fast-list

Utilise moins d'appels API pour lister les répertoires en demandant tous les objets en une seule requête. Nettement plus rapide pour les fournisseurs compatibles S3 avec de grands buckets.

```bash
--fast-list
```

Compromis : utilise plus de mémoire car l'ensemble du listing est conservé en mémoire. Sur des buckets contenant des millions d'objets, cela peut consommer plusieurs gigaoctets de RAM.

### --no-traverse

Ignore complètement le listing de la destination. Utile lors de la copie de quelques fichiers vers une destination contenant des millions de fichiers existants.

```bash
--no-traverse
```

Sans cet indicateur, rclone liste l'intégralité de la destination pour vérifier les fichiers existants. Si vous savez que la destination est en grande partie non pertinente (par exemple, copier 10 nouveaux fichiers dans un bucket contenant 5 millions d'objets), `--no-traverse` permet d'économiser plusieurs minutes de listing.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

Contrôle le tampon en mémoire par transfert de fichier. La valeur par défaut est 16 MiB.

```bash
--buffer-size 64M
```

Augmentez cette valeur pour les fichiers volumineux sur des connexions à large bande passante afin de réduire les blocages d'E/S. Diminuez-la si la mémoire est limitée.

### --multi-thread-streams N

Nombre de flux pour les téléchargements multi-thread d'un seul fichier. La valeur par défaut est 4.

```bash
--multi-thread-streams 8
```

Utile lors du téléchargement de fichiers volumineux individuels depuis des fournisseurs prenant en charge les requêtes par plage d'octets.

## Indicateurs de comparaison et de comportement

Ces indicateurs modifient la façon dont rclone décide de ce qu'il faut transférer.

### --size-only

Compare les fichiers uniquement par taille, en ignorant la date de modification et les sommes de contrôle.

```bash
--size-only
```

À utiliser lorsque les horodatages ne sont pas fiables (fréquent avec certains serveurs SFTP) ou lorsque vous souhaitez la comparaison la plus rapide possible, au prix de la non-détection des modifications de même taille.

### --ignore-existing

Ignore les fichiers déjà présents sur la destination, quels que soient leur taille ou leur date.

```bash
--ignore-existing
```

Idéal pour les téléversements incrémentiels où vous ne modifiez jamais les fichiers existants -- vous en ajoutez seulement de nouveaux. Bien plus rapide que de comparer chaque fichier.

### --ignore-size

Compare les fichiers uniquement par date de modification, en ignorant la taille.

```bash
--ignore-size
```

Rarement nécessaire, mais utile avec les fournisseurs qui indiquent des tailles incorrectes pour certains types de fichiers.

### --update

Ignore les fichiers plus récents sur la destination.

```bash
--update
```

Utile pour les flux de travail de type bidirectionnel où vous souhaitez copier uniquement les fichiers plus anciens sur la destination.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## Indicateurs de nouvelle tentative et de fiabilité

### --retries N

Nombre de nouvelles tentatives pour les opérations échouées. La valeur par défaut est 3.

```bash
--retries 10
```

Augmentez cette valeur pour les réseaux peu fiables ou les fournisseurs sujets à des erreurs intermittentes.

### --retries-sleep DURATION

Temps d'attente entre les nouvelles tentatives. La valeur par défaut est 0.

```bash
--retries-sleep 5s
```

Ajoute un délai entre les tentatives, utile en cas de limitation de débit par le fournisseur.

### --low-level-retries N

Nombre de nouvelles tentatives pour les opérations de bas niveau (requêtes HTTP). La valeur par défaut est 10.

```bash
--low-level-retries 20
```

### --timeout DURATION

Délai d'inactivité des E/S. La valeur par défaut est 5m0s.

```bash
--timeout 10m
```

Augmentez cette valeur pour les connexions très lentes ou les fournisseurs à latence élevée.

## Indicateurs de débogage et de journalisation

Lorsqu'une tâche échoue ou se comporte de manière inattendue, ces indicateurs aident à diagnostiquer le problème.

### -v / -vv

Sortie verbeuse et très verbeuse.

```bash
-v
```

Affiche chaque fichier au fur et à mesure de son transfert ainsi que des informations de progression de base. Utilisez `-vv` pour une sortie de débogage détaillée incluant les requêtes HTTP.

### --log-file PATH

Écrit les journaux dans un fichier au lieu de la console.

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

Définit explicitement le niveau de journalisation.

```bash
--log-level DEBUG
```

Produit la sortie la plus détaillée. À utiliser lors du signalement de problèmes ou de l'investigation d'un comportement inattendu.

### --dry-run

Simule l'opération sans effectuer aucune modification.

```bash
--dry-run
```

Exécutez toujours cette option en premier lors du test d'une nouvelle combinaison d'indicateurs afin de confirmer qu'elle fait ce que vous attendez.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## Configuration des indicateurs par tâche

RcloneView vous permet d'enregistrer différents ensembles d'indicateurs pour différentes tâches. Quelques combinaisons pratiques :

**Synchronisation de fichiers volumineux vers S3 :**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**Sauvegarde incrémentielle de petits fichiers :**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**Synchronisation prudente avec dry-run d'abord :**
```
--dry-run -v
```
Puis supprimez `--dry-run` pour l'exécution réelle.

**Déboguer un transfert qui échoue :**
```
-vv --log-file /tmp/debug.log --retries 1
```

## Indicateurs à éviter sauf si vous savez ce que vous faites

| Indicateur | Risque |
|------|------|
| `--delete-before` | Supprime les fichiers de destination avant le transfert -- dangereux si le transfert échoue en cours de route |
| `--max-delete N` sans test | Peut empêcher le nettoyage si la valeur est trop basse |
| `--no-check-certificate` | Désactive la vérification TLS -- risque de sécurité |
| `--ignore-checksum` | Ignore la vérification d'intégrité -- annule l'intérêt des sommes de contrôle |

## Bonnes pratiques

- **Commencez avec les valeurs par défaut** -- les valeurs par défaut de rclone sont adaptées à la plupart des charges de travail. N'ajoutez des indicateurs que lorsque vous avez un problème spécifique ou un goulot d'étranglement mesurable.
- **Testez avec --dry-run** avant d'appliquer de nouveaux indicateurs à des tâches en production.
- **Documentez vos indicateurs** -- lors de l'enregistrement d'une tâche avec des indicateurs personnalisés, notez la raison de chacun afin que vous-même (ou vos collègues) compreniez l'intention plus tard.
- **Comparez avant et après** -- mesurez les temps de transfert avec et sans indicateurs de performance pour confirmer qu'ils sont réellement utiles pour votre charge de travail.
- **Utilisez -v pour les tâches en production** -- la légère surcharge en vaut la peine pour la visibilité sur ce qui s'est passé pendant chaque exécution.

---

**Guides connexes :**

- [Vérifier l'intégrité des fichiers cloud avec Check et Compare](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Récupérer des transferts interrompus et échoués](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Transferts et synchronisation de cloud à cloud](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
