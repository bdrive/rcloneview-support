---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Gérer le stockage d'objets Qiniu Cloud — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - kai
description: "Connectez le stockage d'objets Kodo de Qiniu Cloud à RcloneView et synchronisez, sauvegardez ou transférez des fichiers entre plus de 90 fournisseurs cloud depuis une seule interface, sur Windows, macOS et Linux."
keywords:
  - Synchronisation du stockage Qiniu Cloud
  - Interface graphique pour le stockage d'objets Kodo
  - Configuration Qiniu de RcloneView
  - Qiniu S3 compatible rclone
  - Synchroniser des fichiers vers Qiniu Cloud
  - Client de sauvegarde Qiniu pour Windows
  - Gestionnaire de stockage cloud Qiniu
  - Transférer des fichiers Qiniu avec RcloneView
  - Client de bureau S3 Qiniu Kodo
  - Gérer les buckets Qiniu via une interface graphique
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage d'objets Qiniu Cloud — Synchronisation et sauvegarde de fichiers avec RcloneView

> Connectez le stockage d'objets Kodo de Qiniu Cloud à l'interface à deux volets de RcloneView et gérez les téléversements, sauvegardes et transferts entre clouds sans jamais toucher à une ligne de commande.

Qiniu Cloud (七牛云) est l'un des principaux fournisseurs d'infrastructure cloud en Chine, et son service de stockage d'objets Kodo est largement utilisé pour la diffusion de médias, la gestion des ressources applicatives et l'archivage de données à grande échelle. Comme Kodo implémente une API compatible S3, RcloneView s'y connecte selon le même processus qu'avec Amazon S3, Wasabi ou Cloudflare R2 — aucun plugin spécial n'est requis. Contrairement aux outils limités au montage, RcloneView synchronise et compare également des dossiers avec Kodo et plus de 90 autres fournisseurs dans la licence GRATUITE, ce qui en fait un outil unique et pratique pour les équipes travaillant avec des environnements cloud mixtes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Qiniu Kodo comme distant S3 dans RcloneView

Pour ajouter Qiniu Kodo, ouvrez l'onglet **Remote** et cliquez sur **New Remote**. Sélectionnez le protocole S3 dans la liste des fournisseurs, puis choisissez **Qiniu** comme fournisseur S3. Vous aurez besoin de trois identifiants provenant de votre console Qiniu Cloud : votre **Access Key**, votre **Secret Key**, et le **point de terminaison régional** (endpoint) de la zone du bucket. Une fois saisis, RcloneView enregistre la configuration dans votre fichier de configuration rclone local, et le distant apparaît immédiatement dans le panneau de l'explorateur.

Aucune installation séparée de rclone n'est nécessaire — RcloneView est fourni avec un binaire rclone intégré qui gère toute la communication avec l'API. Si vous gérez déjà rclone en externe, vous pouvez connecter RcloneView à cette instance via Settings > Connect Manager.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

Après l'enregistrement, vos buckets Kodo apparaissent dans la barre d'onglets du panneau. Cliquez sur n'importe quel bucket pour parcourir son contenu dans la liste de fichiers, avec des colonnes affichant le nom, le type, la date de modification et la taille.

## Parcourir et gérer les buckets Kodo

La disposition à deux volets de RcloneView vous permet de travailler avec Qiniu Kodo aux côtés de n'importe quel autre distant — un dossier local, Google Drive, un bucket S3 d'entreprise — dans la même fenêtre. Faites glisser des fichiers du panneau local vers le panneau Kodo pour les téléverser, ou inversement pour les télécharger. Déplacer des fichiers entre deux distants Qiniu (ou buckets) les copie directement sans passer par votre disque local.

Pour les opérations en masse, utilisez Maj+Clic ou Ctrl+Clic pour sélectionner plusieurs objets, puis copiez, déplacez ou supprimez-les en une seule action. Le mode d'affichage en miniatures est utile pour parcourir des buckets Kodo riches en images. Avant toute opération destructive, le bouton **Dry Run** prévisualise exactement les fichiers qui seraient affectés — une protection importante lors du nettoyage de ressources de production.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Synchroniser et sauvegarder des fichiers avec Qiniu Cloud

L'assistant de synchronisation en 4 étapes de RcloneView configure des tâches reproductibles avec Kodo. À l'**Étape 1**, sélectionnez Qiniu comme source ou destination et associez-le à un autre distant — par exemple, en synchronisant une bibliothèque multimédia locale vers un bucket Kodo pour la distribution CDN. À l'**Étape 2**, ajustez le nombre de transferts parallèles et activez la vérification par somme de contrôle (checksum) pour confirmer que chaque objet téléversé est identique bit à bit à sa source. L'**Étape 3** propose des filtres par type de fichier, des plages d'ancienneté et des limites de taille, afin d'exclure les fichiers de cache ou de restreindre les synchronisations aux ressources récemment modifiées.

Avec une licence PLUS, l'**Étape 4** débloque la planification de type cron : configurez une sauvegarde nocturne d'un répertoire de serveur de production vers Kodo, et RcloneView l'exécutera automatiquement en arrière-plan. La fonctionnalité **1:N sync** permet à une seule source de se répliquer simultanément vers plusieurs destinations — utile pour distribuer le même ensemble de ressources vers Qiniu Kodo et une archive S3 secondaire en une seule tâche.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## Surveiller les transferts et l'historique des tâches

L'onglet **Transferring** en bas de RcloneView affiche la progression en temps réel des tâches Kodo actives : nom du fichier, octets transférés, vitesse actuelle et taux d'achèvement global. Pour un premier import volumineux — par exemple le téléversement de plusieurs centaines de gigaoctets de fichiers vidéo vers un nouveau bucket — cette vue de suivi des transferts en direct élimine le besoin d'un tableau de bord de surveillance distinct.

L'onglet **Job History** enregistre chaque exécution terminée avec l'heure de début, la durée, la taille totale, la vitesse de transfert, le nombre de fichiers et le statut. Filtrez par plage de dates ou type de tâche pour auditer l'activité de synchronisation sur plusieurs semaines ou mois.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez l'onglet **Remote**, cliquez sur **New Remote**, sélectionnez le protocole S3, puis choisissez **Qiniu** comme fournisseur.
3. Saisissez votre **Access Key**, votre **Secret Key** et le point de terminaison régional depuis votre console Qiniu Cloud.
4. Créez une tâche de synchronisation pointant vers votre bucket Kodo et exécutez-la pour sauvegarder des fichiers locaux ou transférer des données entre Qiniu et un autre cloud.

Avec Qiniu Kodo connecté, RcloneView vous donne un contrôle total sur votre stockage d'objets cloud chinois depuis la même interface que vous utilisez pour tous les autres fournisseurs.

---

**Guides connexes :**

- [Gérer le stockage Amazon S3 — Synchronisation et sauvegarde de fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Gérer le stockage Cloudflare R2 — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gérer le stockage cloud Wasabi — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
