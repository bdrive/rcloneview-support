---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "Gérer le stockage d'objets RackCorp — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - morgan
description: "Connectez le stockage d'objets RackCorp à RcloneView pour la synchronisation multiplateforme, la sauvegarde et le montage aux côtés de plus de 90 autres fournisseurs cloud."
keywords:
  - stockage RackCorp
  - sauvegarde cloud RackCorp
  - RackCorp RcloneView
  - GUI de stockage d'objets compatible S3
  - synchroniser le stockage RackCorp
  - sauvegarder RackCorp
  - monter un stockage d'objets en lecteur local
  - gestionnaire de fichiers multi-cloud
  - outil de synchronisation de stockage cloud
  - logiciel de sauvegarde de stockage d'objets
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage d'objets RackCorp — Synchroniser et sauvegarder des fichiers avec RcloneView

> Réunissez le stockage d'objets RackCorp compatible S3 avec vos autres clouds, lecteurs locaux et partages NAS dans une seule et même fenêtre.

Les équipes qui exploitent déjà une infrastructure sur RackCorp finissent souvent par jongler avec un client S3 séparé, juste pour déplacer des fichiers dans et hors d'un bucket. RcloneView supprime cette étape supplémentaire en traitant RackCorp comme n'importe quel autre remote — parcourez-le, synchronisez-le, montez-le et sauvegardez-le à côté de Google Drive, S3 ou d'un disque local, dans le même explorateur. Contrairement aux outils qui ne font que du montage, RcloneView propose aussi la synchronisation et la comparaison de dossiers (Folder Compare) — dès la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter RackCorp comme remote

RackCorp est accessible via le protocole S3 de rclone, la configuration suit donc le même schéma de saisie des identifiants que les autres services compatibles S3 : un Access Key ID, un Secret Access Key et le bon endpoint régional. Ouvrez l'onglet Remote > New Remote, choisissez l'option compatible S3, puis collez les identifiants de votre compte RackCorp.

Une fois enregistré, RackCorp apparaît dans son propre onglet du panneau Explorer, aux côtés de tous les autres remotes déjà configurés. Inutile de mémoriser les chemins de bucket — l'arborescence des dossiers et la barre de fil d'Ariane permettent une navigation visuelle, et le clic droit > Copy Full Path fournit la chaîne au format `remote:bucket/path` si vous en avez besoin dans le terminal rclone intégré.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau remote compatible S3 dans RcloneView" class="img-large img-center" />

## Synchroniser et sauvegarder vers RackCorp

Une fois le remote connecté, utilisez l'assistant Sync pour créer une tâche de sauvegarde répétable. L'étape 1 définit votre source locale ou cloud et le dossier de destination RackCorp ; l'étape 2 permet d'ajuster le nombre de transferts de fichiers simultanés et de transferts multithread pour les gros volumes de données ; l'étape 3 applique des filtres par type de fichier, taille ou ancienneté afin de ne pas envoyer de fichiers temporaires ou de caches vers le bucket.

Lancez d'abord un Dry Run pour prévisualiser précisément les fichiers qui seront copiés ou supprimés avant de valider le transfert — cela permet de détecter les erreurs de mappage de dossiers avant qu'elles n'affectent des données de production. Pour les tâches récurrentes, enregistrez la tâche dans Job Manager afin qu'elle apparaisse ensuite dans Job History avec l'historique complet des transferts.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuration d'une tâche de sauvegarde planifiée vers le stockage RackCorp" class="img-large img-center" />

## Monter RackCorp comme lecteur local

Si vous préférez manipuler les objets RackCorp comme des fichiers ordinaires, montez le bucket en tant que lecteur virtuel. Sélectionnez le dossier remote dans l'Explorer, cliquez sur l'icône de montage dans la barre d'outils du panneau, puis choisissez un mode de cache VFS — le mode Writes est un choix par défaut solide, il met en mémoire tampon les modifications localement avant de les envoyer.

Les buckets montés apparaissent dans Mount Manager, où vous pouvez les démonter, les rouvrir dans votre explorateur de fichiers natif, ou basculer le montage directement depuis la barre système sans ramener la fenêtre principale au premier plan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montage d'un bucket RackCorp en lecteur local depuis le Remote Explorer" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Générez un Access Key ID et un Secret Access Key depuis votre compte RackCorp.
3. Ajoutez RackCorp comme nouveau remote compatible S3 via l'onglet Remote > New Remote.
4. Créez une tâche de synchronisation ou montez directement le bucket, selon votre flux de travail.

Une fois RackCorp connecté à RcloneView, il cesse d'être un outil séparé nécessitant un changement de contexte et devient simplement une destination supplémentaire dans votre routine de sauvegarde habituelle.

---

**Guides associés :**

- [Gérer le stockage d'objets Linode — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [Gérer le stockage d'objets Hetzner — Synchroniser et sauvegarder avec RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [Migrer d'Amazon S3 vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
