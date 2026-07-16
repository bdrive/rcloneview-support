---
slug: manage-seagate-lyve-cloud-sync-backup-rcloneview
title: "Gérer Seagate Lyve Cloud — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - kai
description: "Découvrez comment gérer le stockage Seagate Lyve Cloud avec RcloneView. Synchronisez, sauvegardez et transférez des fichiers avec cette interface graphique pour stockage cloud compatible S3."
keywords:
  - Seagate Lyve Cloud
  - RcloneView Seagate
  - synchronisation Lyve Cloud
  - sauvegarde Lyve Cloud
  - interface graphique stockage compatible S3
  - gestion du stockage objet
  - Lyve Cloud RcloneView
  - gérer le stockage cloud Seagate
  - outil de transfert de fichiers cloud
  - gestionnaire de fichiers Lyve Cloud
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer Seagate Lyve Cloud — Synchroniser et sauvegarder vos fichiers avec RcloneView

> Connectez Seagate Lyve Cloud à RcloneView et prenez le contrôle total, via une interface graphique, de votre stockage objet compatible S3 — parcourez, synchronisez, sauvegardez et montez sans jamais toucher une ligne de commande.

Seagate Lyve Cloud est une plateforme de stockage objet compatible S3, conçue pour les charges de travail à haut débit et la conservation de données sur le long terme. Que vous gériez des enregistrements de vidéosurveillance, de vastes archives multimédias ou des jeux de données d'entreprise, l'architecture de Lyve Cloud en fait un niveau de stockage attrayant pour les données en masse. En le connectant à RcloneView, chaque bucket devient une arborescence de fichiers navigable que vous pouvez glisser-déposer, synchroniser et planifier au même titre que les 90+ autres fournisseurs pris en charge par RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Seagate Lyve Cloud comme remote dans RcloneView

Seagate Lyve Cloud utilise le protocole S3, sa configuration se fait donc de la même manière que pour tout fournisseur compatible S3 : avec une clé d'accès (Access Key), une clé secrète (Secret Key) et le point de terminaison (endpoint) Lyve Cloud correspondant à votre région.

Ouvrez RcloneView, allez dans **Remote > New Remote**, puis choisissez **Amazon S3** comme type de fournisseur. Sur l'écran suivant, sélectionnez **Seagate Lyve Cloud** dans la liste des sous-types de fournisseurs — RcloneView applique automatiquement le bon format de point de terminaison pour votre région. Saisissez vos identifiants API Lyve Cloud (Access Key ID et Secret Access Key) générés depuis la console Lyve Cloud, puis enregistrez le remote. En quelques secondes, vos buckets apparaissent dans l'explorateur de fichiers exactement comme un dossier local.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Seagate Lyve Cloud remote in RcloneView" class="img-large img-center" />

Si votre organisation opère sur plusieurs régions Lyve Cloud, ajoutez chacune comme un remote nommé distinct — par exemple `lyve-us`, `lyve-eu`, `lyve-ap` — et comparez-les ou synchronisez-les côte à côte dans l'explorateur à double panneau de RcloneView.

## Synchroniser et sauvegarder des fichiers vers Lyve Cloud

Une fois le remote connecté, vous pouvez lancer immédiatement des transferts ponctuels par glisser-déposer, ou créer des tâches de synchronisation répétables via le gestionnaire de tâches (Job Manager). Un cas d'usage courant est celui d'un studio de production vidéo qui synchronise des rendus de projets 4K depuis un serveur local vers Lyve Cloud pour un archivage de longue durée, tout en conservant un miroir simultané sur un autre cloud pour un accès rapide.

Allez dans **Home > Sync**, choisissez votre dossier local ou un autre remote cloud comme source, puis sélectionnez votre bucket Lyve Cloud comme destination. Dans les paramètres avancés de l'assistant de synchronisation, vous pouvez ajuster le nombre de threads de transfert simultanés, activer la vérification par checksum (hash), et définir des filtres d'âge ou de taille de fichier à l'étape de filtrage — par exemple, exclure les fichiers `.tmp` et `.part` des enregistrements de vidéosurveillance. Une fois la configuration validée, cliquez sur **Dry Run** pour prévisualiser exactement quels fichiers seront déplacés, sans toucher aux données de production.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Seagate Lyve Cloud in RcloneView" class="img-large img-center" />

Avec une licence PLUS, vous pouvez planifier des tâches via des expressions de type crontab — programmez des transferts quotidiens en heures creuses vers Lyve Cloud sans aucune intervention manuelle.

## Suivre les transferts et consulter l'historique des tâches

L'onglet **Transferring** du panneau inférieur de RcloneView affiche la progression en temps réel de chaque tâche active : vitesse de transfert, nombre de fichiers, pourcentage d'avancement, et un bouton d'annulation pour tout transfert en cours. Une fois chaque tâche terminée, la vue **Job History** enregistre l'heure de démarrage, la durée, le volume total transféré, la vitesse moyenne et le statut final — offrant une traçabilité auditable, essentielle pour les secteurs fortement réglementés où la provenance du stockage doit être documentée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Seagate Lyve Cloud sync transfers in RcloneView" class="img-large img-center" />

Pour les équipes exploitant Lyve Cloud sur plusieurs sites, exportez la configuration de vos tâches de synchronisation dans un fichier JSON et importez-la sur d'autres machines — garantissant des paramètres de tâche identiques sans nouvelle saisie manuelle.

## Monter Lyve Cloud comme lecteur local

Pour les flux de travail nécessitant que des applications lisent directement depuis Lyve Cloud sans téléchargement préalable des fichiers, la fonction de montage de RcloneView associe votre bucket Lyve Cloud à une lettre de lecteur locale (Windows) ou à un chemin de montage (macOS/Linux). Rendez-vous dans **Remote > Mount Manager**, créez un nouveau montage ciblant votre remote Lyve Cloud, puis cliquez sur **Save and mount**. Le bucket apparaît alors comme un lecteur dans l'Explorateur Windows ou le Finder macOS.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Seagate Lyve Cloud bucket as a local drive in RcloneView" class="img-large img-center" />

Le mode de cache VFS par défaut (`writes`) met en mémoire tampon les écritures localement avant leur envoi, garantissant des performances réactives même sur des connexions à latence élevée. Pour les flux de travail à forte lecture qui bénéficient de la mise en cache locale, basculez vers le mode de cache `full` dans les paramètres de montage.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans **Remote > New Remote**, sélectionnez **Amazon S3**, puis choisissez **Seagate Lyve Cloud** comme sous-type de fournisseur.
3. Saisissez votre Access Key ID et votre Secret Access Key Lyve Cloud, puis enregistrez le remote.
4. Ouvrez le remote Seagate Lyve Cloud dans l'explorateur de fichiers et commencez immédiatement à parcourir vos buckets.

Une fois connecté, créez une tâche de synchronisation pour déplacer des fichiers depuis un stockage local ou un autre cloud vers Lyve Cloud — puis planifiez-la pour qu'elle s'exécute automatiquement chaque nuit, pour un archivage sans intervention manuelle.

---

**Guides connexes :**

- [Gérer le stockage cloud Wasabi — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Backblaze B2 — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Gérer Amazon S3 — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
