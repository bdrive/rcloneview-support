---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "Cache Remote — Accélérer un stockage cloud lent dans RcloneView"
authors:
  - robin
description: "Découvrez comment le remote virtuel cache de RcloneView accélère les backends cloud lents en mettant en cache les listes de répertoires et les données de fichiers, avec l'intégration Plex."
keywords:
  - rclone cache remote
  - configurer cache remote rcloneview
  - accélérer stockage cloud lent
  - intégration rclone cache plex
  - accélérer navigation fichiers cloud
  - remote virtuel cache rclone
  - remotes virtuels rcloneview
  - solution stockage cloud lent
  - cache cloud plex media server
  - cache de répertoire rclone
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cache Remote — Accélérer un stockage cloud lent dans RcloneView

> Certains backends cloud sont lents à lister et relister à chaque navigation — le remote virtuel cache résout ce problème en mémorisant ce qu'il a déjà récupéré.

Tous les fournisseurs de stockage ne répondent pas rapidement. Les backends avec des limites de débit API strictes ou une latence élevée par requête peuvent rendre la navigation poussive, en particulier dans de grandes arborescences de dossiers ou lorsqu'un serveur multimédia comme Plex scanne à répétition la même bibliothèque. RcloneView expose le remote virtuel cache de rclone directement dans l'assistant New Remote, ce qui permet d'envelopper un remote lent dans une couche de cache sans toucher manuellement à un fichier de configuration.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce que fait le Cache Remote

Le cache remote est un wrapper, pas un type de stockage autonome — il se place entre RcloneView et un remote existant déjà configuré, en interceptant les listes de répertoires et les lectures de fichiers pour que les requêtes répétées n'atteignent plus le backend. La première fois que vous parcourez un dossier, RcloneView le récupère normalement depuis le remote enveloppé ; la fois suivante, le cache sert le résultat localement, ce qui est particulièrement perceptible sur des remotes avec des temps de réponse API lents ou des limites de débit agressives.

Cela diffère du mode de cache VFS intégré au montage, qui met en cache les données pour une seule session de montage. Le remote virtuel cache crée à la place son propre remote persistant et nommé, que vous pouvez parcourir, monter ou synchroniser directement, et dont l'état mis en cache survit aux redémarrages de l'application. Le cas d'usage réel le plus courant consiste à associer un cache remote à l'intégration Plex media server, faute de quoi le scan constant de la bibliothèque générerait un flux continu d'appels API redondants vers le stockage cloud sous-jacent.

<img src="/support/images/en/blog/new-remote.png" alt="Création d'un remote virtuel cache enveloppant un remote de stockage cloud existant dans RcloneView" class="img-large img-center" />

## Configurer un Cache Remote dans RcloneView

Ouvrez l'onglet Remote > New Remote et sélectionnez Cache parmi les options de remote virtuel. Il vous sera demandé de choisir le remote sous-jacent à envelopper — celui-ci doit déjà être configuré dans RcloneView, qu'il s'agisse d'un fournisseur cloud, d'un bucket compatible S3 ou d'une connexion basée sur un protocole comme SFTP ou WebDAV. Donnez au cache remote un nom distinct afin qu'il soit clair, dans la Tab Bar et le Remote Manager, que vous naviguez dans la version mise en cache plutôt que dans la connexion brute.

Une fois créé, le cache remote apparaît dans le Remote Manager aux côtés de vos autres remotes et se comporte comme n'importe quelle autre entrée pour naviguer, monter ou synchroniser. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte qu'un cache remote construit sur un backend lent bénéficie du même ensemble de fonctionnalités qu'une connexion native — effectuez un Dry Run de synchronisation dessus, ajoutez-le au Job Manager, ou montez-le comme lecteur local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montage d'un cache remote depuis la barre d'outils du panneau Remote Explorer" class="img-large img-center" />

## Quand la mise en cache aide vraiment

La mise en cache est la plus rentable sur les remotes où les opérations de listage sont coûteuses par rapport à la quantité de données qui changent — grandes bibliothèques de photos ou de vidéos scannées à répétition par Plex, arborescences de dossiers profondes, ou fournisseurs avec des limites de débit conservatrices qui freinent les requêtes successives rapides. Elle est moins utile pour les remotes dans lesquels vous écrivez souvent, car les fichiers modifiés doivent se propager à travers le cache avant que les autres outils ne les voient de façon cohérente.

Si vous montez un cache remote pour du streaming multimédia, associez-le au mode de cache VFS propre au montage, réglé sur writes ou full — les deux couches de cache fonctionnent à des niveaux différents et se complètent.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager affichant une tâche de synchronisation en cours sur un cache remote" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez le remote lent que vous souhaitez accélérer, s'il n'est pas déjà en place.
3. Ouvrez New Remote, sélectionnez Cache, puis choisissez ce remote comme celui à envelopper.
4. Montez ou parcourez le nouveau cache remote et comparez la vitesse de listage lors d'une seconde visite du même dossier.

Un cache remote ne rendra pas votre connexion internet plus rapide, mais pour les schémas de navigation qui se répètent — en particulier les scans de bibliothèques multimédias — il transforme un backend lent en un remote qui paraît instantané dès le second passage.

---

**Guides associés :**

- [Les remotes virtuels dans RcloneView — Combine, Union et Alias expliqués](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Streaming cloud Plex avec RcloneView](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Corriger la mise en mémoire tampon de Plex — Réglage du cache VFS dans RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
