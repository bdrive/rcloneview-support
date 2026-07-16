---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "Corriger l'utilisation élevée de mémoire et de CPU dans les transferts rclone avec RcloneView"
authors:
  - tayson
description: "Corrigez l'utilisation élevée de mémoire et de CPU par rclone lors des transferts cloud. Apprenez à ajuster les transferts, les vérificateurs, le cache VFS et les paramètres de tampon grâce à l'interface visuelle de RcloneView."
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger l'utilisation élevée de mémoire et de CPU dans les transferts rclone avec RcloneView

> Les transferts rclone dévorent toute votre RAM ou bloquent votre CPU à 100 % ? **RcloneView** facilite l'identification de la cause et l'ajustement des paramètres de performance sans avoir à mémoriser les indicateurs en ligne de commande.

Si vous avez remarqué que votre système ralentit considérablement pendant les transferts cloud, vous n'êtes pas seul. Rclone est puissant, mais ses paramètres par défaut ou des options mal configurées peuvent consommer d'importantes ressources système -- en particulier lorsqu'il s'agit de grands nombres de fichiers, de lecteurs montés ou de transferts parallèles. Les symptômes sont familiers : ventilateurs qui s'emballent, applications qui deviennent non réactives, et transferts qui semblent utiliser plus de ressources que nécessaire.

La bonne nouvelle est que la plupart des scénarios de forte consommation de ressources ont des solutions simples. Ce guide passe en revue les causes les plus courantes d'une utilisation excessive de mémoire et de CPU dans rclone et vous montre comment les résoudre à l'aide des outils de configuration visuelle de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Symptômes courants

Avant d'aborder les solutions, voici à quoi ressemble typiquement une utilisation élevée des ressources pendant les opérations rclone :

- **Utilisation élevée de la RAM** : le processus rclone consomme 1 Go ou plus de mémoire, augmentant parfois en continu jusqu'à épuisement du système.
- **Pics de CPU** : un ou plusieurs cœurs de CPU bloqués à 100 % pendant les transferts, en particulier lors du listage de grands répertoires.
- **Non-réactivité du système** : d'autres applications se figent ou ralentissent pendant que rclone fonctionne.
- **Échecs de transfert** : des erreurs de mémoire insuffisante entraînant l'abandon inattendu des transferts.
- **Performance lente** : paradoxalement, trop d'opérations parallèles peuvent tout ralentir en raison de la contention des ressources.

## Trop de transferts et de vérificateurs simultanés

La cause la plus courante d'une utilisation élevée des ressources est l'exécution de trop de transferts et de vérificateurs en parallèle. Rclone utilise par défaut 4 transferts et 8 vérificateurs, mais les utilisateurs augmentent souvent ces nombres en pensant que cela accélérera les choses. Exécuter 32 ou 64 transferts simultanés peut submerger à la fois votre système et votre connexion réseau.

**Comment le corriger dans RcloneView :**

Lors de la création ou de la modification d'une tâche de synchronisation, définissez l'indicateur `--transfers` à une valeur raisonnable. Commencez avec 4 et augmentez uniquement si votre bande passante et votre système peuvent le supporter. Définissez `--checkers` à 8 ou moins. Pour la plupart des connexions domestiques, 2 à 4 transferts et 4 à 8 vérificateurs offrent le bon équilibre entre vitesse et consommation de ressources.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Grandes listes de fichiers et analyse de répertoires

Lorsque rclone analyse des répertoires contenant des centaines de milliers, voire des millions de fichiers, il construit une liste en mémoire de chaque fichier et de ses métadonnées. Cela peut consommer des gigaoctets de RAM sur de très grands répertoires.

**Comment le corriger :**

- Utilisez `--fast-list` lorsque cela est pris en charge. Cet indicateur récupère les listages de répertoires en moins d'appels API, ce qui peut effectivement réduire l'utilisation de la mémoire pour certains fournisseurs (comme S3) tout en l'augmentant pour d'autres. Testez avec votre fournisseur spécifique.
- Divisez les grandes tâches de synchronisation en morceaux plus petits en ciblant des sous-répertoires spécifiques plutôt qu'en synchronisant un compte cloud entier à la fois.
- Utilisez des règles de filtre (`--include`, `--exclude`) pour limiter la portée de chaque opération de synchronisation. Moins de fichiers à lister signifie moins de mémoire consommée.

## Surcharge du cache VFS due aux lecteurs montés

Si vous montez un stockage cloud comme lecteur local, le cache VFS (Virtual File System) peut croître considérablement. Par défaut, rclone peut mettre en cache de grandes quantités de données pour offrir des performances de lecture/écriture fluides sur les lecteurs montés. Au fil du temps, ce cache peut consommer un espace disque et une mémoire substantiels.

**Comment le corriger :**

- Définissez `--vfs-cache-max-size` à une limite raisonnable, telle que `1G` ou `5G`, selon vos ressources disponibles.
- Définissez `--vfs-cache-max-age` pour nettoyer automatiquement les anciens fichiers mis en cache. Une valeur comme `1h` ou `4h` fonctionne bien pour la plupart des flux de travail.
- Choisissez le bon `--vfs-cache-mode`. Utilisez `minimal` ou `writes` plutôt que `full` si vous n'avez besoin que d'un accès en lecture ou d'écritures occasionnelles. Le mode de cache complet met en cache des fichiers entiers avant qu'ils ne soient accessibles, ce qui utilise le plus de mémoire et de disque.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Mauvaise configuration de la taille du tampon

L'indicateur `--buffer-size` contrôle la quantité de mémoire que rclone alloue par fichier pour la mise en tampon pendant les transferts. La valeur par défaut est de 16 Mo par transfert. Si vous exécutez 16 transferts simultanés, cela représente 256 Mo de mémoire tampon à elle seule. Augmenter `--buffer-size` à 256 Mo avec 16 transferts consommerait 4 Go rien que pour les tampons.

**Comment le corriger :**

- Conservez `--buffer-size` à la valeur par défaut `16M` sauf si vous avez une raison spécifique de l'augmenter.
- Si vous l'avez augmenté pour de gros transferts de fichiers, réduisez `--transfers` proportionnellement pour rester dans les limites de votre RAM disponible.
- Pour les systèmes avec une RAM limitée (4 Go ou moins), envisagez de réduire `--buffer-size` à `8M`, voire `4M`.

## Surcharge de montage et opérations FUSE

Les lecteurs montés ajoutent une surcharge CPU car chaque opération de fichier (ouverture, lecture, écriture, stat) passe par la couche FUSE et déclenche des appels API. Les applications qui analysent agressivement les répertoires -- comme les logiciels antivirus, les générateurs de miniatures ou les indexeurs de recherche -- peuvent provoquer une utilisation continue du CPU et des API sur les lecteurs montés.

**Comment le corriger :**

- Excluez les chemins des lecteurs montés de l'analyse antivirus.
- Désactivez la génération de miniatures pour les lecteurs montés dans les paramètres de votre explorateur de fichiers.
- Utilisez `--dir-cache-time` pour augmenter la durée pendant laquelle les listages de répertoires sont mis en cache (par exemple, `5m` ou `30m`), réduisant ainsi les appels API répétés.
- Définissez `--attr-timeout` pour mettre en cache les attributs de fichiers plus longtemps, ce qui réduit les appels stat.
- Si vous avez seulement besoin de lire des fichiers, utilisez `--read-only` pour éviter la surcharge liée à l'écriture.

## Surveillance de l'utilisation des ressources dans RcloneView

RcloneView fournit une surveillance des transferts en temps réel qui vous aide à identifier quand les ressources sont consommées de manière excessive. Pendant un transfert actif, vous pouvez observer les vitesses de transfert, le nombre de fichiers et la progression globale. Si les vitesses chutent ou si l'interface devient lente, c'est le signe qu'il faut réduire le parallélisme.

Utilisez la vue de l'historique des tâches pour examiner les transferts passés et identifier des tendances. Si certaines tâches prennent systématiquement plus de temps ou échouent, elles sont candidates pour un ajustement.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Référence rapide : paramètres recommandés

| Paramètre | Système à ressources limitées | Système standard | Haute performance |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

Ajustez ces valeurs en fonction de votre RAM disponible, de vos cœurs de CPU et de votre bande passante Internet. Commencez de manière prudente et augmentez progressivement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez une tâche de synchronisation existante ou créez-en une nouvelle, et vérifiez les paramètres de transferts et de vérificateurs.
3. Réduisez `--transfers` et `--checkers` si votre système peine pendant les transferts.
4. Pour les lecteurs montés, configurez les limites de cache VFS afin d'éviter une croissance illimitée de la mémoire.

De petits ajustements du parallélisme et des paramètres de cache peuvent améliorer considérablement la réactivité du système sans impacter significativement les vitesses de transfert.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
