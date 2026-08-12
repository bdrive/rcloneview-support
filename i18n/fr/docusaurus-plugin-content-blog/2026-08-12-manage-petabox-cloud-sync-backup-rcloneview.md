---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Gérer le stockage Petabox — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - kai
description: "Connectez le stockage objet compatible S3 de Petabox à RcloneView pour naviguer, synchroniser, sauvegarder et monter en multiplateforme dans une seule interface graphique."
keywords:
  - Petabox RcloneView
  - stockage cloud Petabox
  - stockage objet compatible S3
  - sauvegarde Petabox
  - synchronisation Petabox
  - monter Petabox
  - interface graphique stockage objet
  - gestion de fichiers Petabox
  - gestionnaire de stockage cloud
  - synchronisation de buckets Petabox
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Petabox — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez vos buckets Petabox aux côtés de tous les autres clouds que vous utilisez — depuis une seule fenêtre de bureau.

Petabox est un service de stockage objet compatible S3, ce qui signifie que RcloneView peut s'y connecter de la même manière qu'à Amazon S3, Wasabi ou tout autre fournisseur utilisant le protocole S3 : avec un Access Key ID, une Secret Access Key et un endpoint. Une fois connectés, les buckets Petabox apparaissent comme un distant classique dans l'explorateur de fichiers, prêts à être parcourus, transférés et planifiés comme n'importe quel dossier local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Petabox comme nouveau distant

Ouvrez Remote Manager depuis l'onglet Remote et choisissez New Remote. Comme Petabox est accessible via le protocole S3 de rclone, sélectionnez l'option compatible S3 et saisissez votre Access Key ID, votre Secret Access Key ainsi que l'URL d'endpoint Petabox fournie par votre compte. Aucun flux OAuth via navigateur n'est nécessaire — les identifiants suffisent à authentifier la connexion, et le distant apparaît dans votre barre d'onglets dès que le test de connexion réussit.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau distant compatible S3 dans RcloneView" class="img-large img-center" />

Contrairement aux outils qui ne font que du montage, RcloneView propose aussi la synchronisation et la comparaison de dossiers dès la licence FREE — les buckets Petabox bénéficient des mêmes fonctions de synchronisation, de comparaison et d'historique des tâches que tout autre fournisseur pris en charge, sans qu'une mise à niveau soit nécessaire pour démarrer.

## Parcourir, transférer et synchroniser des buckets

Une fois Petabox ajouté, divisez votre explorateur en deux panneaux — l'un affichant des dossiers locaux ou un autre cloud, l'autre votre bucket Petabox — puis faites glisser des fichiers entre eux. Déplacer des fichiers au sein du même distant effectue un déplacement ; les faire glisser entre distants différents effectue une copie, ce qui vous permet de préparer une sauvegarde Petabox sans toucher aux fichiers source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de fichiers entre un dossier local et un bucket Petabox" class="img-large img-center" />

Pour les transferts récurrents, utilisez l'assistant de synchronisation en 4 étapes : choisissez la source et la destination, définissez le nombre de transferts simultanés et de vérificateurs d'égalité dans Advanced Settings, puis appliquez des filtres par type de fichier, taille ou ancienneté avant d'enregistrer la tâche. Exécutez d'abord un Dry Run pour prévisualiser exactement ce qui sera copié ou supprimé avant de lancer un transfert réel.

## Planifier des sauvegardes et surveiller les tâches

Une fois une tâche de synchronisation enregistrée dans Job Manager, les utilisateurs de la licence PLUS peuvent y associer une planification au format crontab afin que les sauvegardes Petabox s'exécutent automatiquement selon leur propre rythme, avec un aperçu des prochaines heures d'exécution avant l'enregistrement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuration d'une planification de sauvegarde récurrente pour une tâche de synchronisation Petabox" class="img-large img-center" />

Chaque exécution — planifiée ou manuelle — est consignée dans Job History avec le statut, la vitesse de transfert, le nombre de fichiers et la taille totale, ce qui permet de confirmer qu'une sauvegarde Petabox s'est bien terminée ou de repérer une exécution ayant échoué à relancer.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez un Access Key ID et une Secret Access Key depuis votre compte Petabox et notez l'URL d'endpoint.
3. Ajoutez Petabox comme nouveau distant compatible S3 dans Remote Manager et testez la connexion.
4. Exécutez une synchronisation Dry Run avant de planifier des sauvegardes récurrentes vers votre bucket Petabox.

Une fois Petabox connecté, votre stockage objet se retrouve juste à côté de tous les autres clouds que vous gérez — pas de client séparé, pas de changement de fenêtre.

---

**Guides connexes :**

- [Gérer le stockage Storj — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Gérer le stockage IDrive E2 — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
