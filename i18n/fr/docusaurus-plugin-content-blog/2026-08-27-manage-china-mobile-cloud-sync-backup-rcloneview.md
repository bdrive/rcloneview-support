---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "Gérer le stockage China Mobile — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - jay
description: "Connectez le stockage objet compatible S3 de China Mobile à RcloneView pour parcourir vos fichiers multiplateforme, effectuer des transferts par glisser-déposer et planifier des sauvegardes."
keywords:
  - stockage objet China Mobile
  - gérer le stockage cloud China Mobile
  - GUI de stockage compatible S3
  - RcloneView China Mobile
  - synchroniser le stockage objet China Mobile
  - sauvegarder un stockage compatible S3
  - China Mobile Ecloud EOS
  - gestionnaire de fichiers stockage objet
  - client GUI multi-cloud
  - configuration de la clé d'accès du point de terminaison S3
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

# Gérer le stockage China Mobile — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, transférez et sauvegardez le stockage objet compatible S3 de China Mobile depuis la même fenêtre que celle utilisée pour tous vos autres cloud, sans toucher à un terminal.

Les équipes qui exploitent leur infrastructure via le stockage objet compatible S3 de China Mobile finissent souvent par le gérer avec des appels CLI bruts ou des scripts ponctuels, séparément du reste de leur empreinte cloud. RcloneView le traite comme n'importe quel autre remote compatible S3 — même explorateur, mêmes tâches de synchronisation, même comparaison de dossiers — de sorte qu'un bucket sur China Mobile se retrouve à côté de Google Drive, Backblaze B2 ou d'un disque local dans une seule interface. Connectez S3, Azure ou Backblaze B2 en lecture/écriture complète avec la licence FREE, et cela vaut également pour tout point de terminaison compatible S3.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter le stockage objet China Mobile

Le stockage objet de China Mobile est accessible via le protocole S3 de rclone, le même chemin que RcloneView utilise pour Wasabi, MinIO ou Cloudflare R2. Dans l'écran New Remote, sélectionnez le type de fournisseur compatible S3 et fournissez trois valeurs : Access Key ID, Secret Access Key et le Endpoint du service. Il n'y a pas de flux OAuth — il s'agit d'une saisie d'identifiants, alors vérifiez bien la chaîne du point de terminaison, car une faute de frappe est la raison la plus courante pour laquelle un nouveau remote échoue à son premier test de connexion.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un remote compatible S3 China Mobile dans RcloneView" class="img-large img-center" />

Une fois le remote connecté, il apparaît comme un onglet dans le panneau Explorer, comme tout autre type de stockage. Vous pouvez l'ouvrir côte à côte avec un second panneau — disque local, autre cloud, ou un bucket totalement différent — grâce à la disposition de 1 à 4 panneaux.

## Parcourir et transférer des fichiers

Une fois le remote ouvert, la File List affiche les buckets et objets avec les mêmes colonnes que celles d'un gestionnaire de fichiers local : nom, type, date de modification, taille. Faites un clic droit pour Copy, Cut, Paste, Rename, New Folder, Download et Upload, ou utilisez Ctrl+Clic et Maj+Clic pour sélectionner plusieurs éléments avant des opérations groupées.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de fichiers entre le stockage objet China Mobile et un autre remote" class="img-large img-center" />

Le glisser-déposer suit une règle simple : déplacer des fichiers au sein du même remote les repositionne, tandis que les glisser entre deux remotes différents les copie. Cela transforme les transferts ponctuels entre stockage objet et autres clouds en un simple glissement d'une sélection entre panneaux, plutôt qu'un téléchargement local préalable.

## Planifier des sauvegardes récurrentes

Pour toute tâche récurrente, l'assistant en quatre étapes du Job Manager transforme un transfert ponctuel en une tâche enregistrée : choisissez la source et la destination, ajustez la concurrence de transfert et le comportement de nouvelle tentative, appliquez des filtres comme la taille ou l'ancienneté maximale des fichiers et — avec une licence PLUS — configurez une planification de type crontab. Exécutez d'abord un Dry Run pour prévisualiser exactement ce qui serait copié ou supprimé avant de valider.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde pour le stockage objet China Mobile dans RcloneView" class="img-large img-center" />

Job History suit ensuite chaque exécution — statut, durée, vitesse de transfert, nombre de fichiers — vous disposez ainsi d'un enregistrement de ce qui a été déplacé et quand, sans avoir à fouiller dans des journaux bruts.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez New Remote, choisissez le type de fournisseur compatible S3, et saisissez votre Access Key ID, Secret Access Key et point de terminaison China Mobile.
3. Parcourez le bucket dans Explorer et testez une copie manuelle vers ou depuis un autre remote.
4. Créez une tâche de synchronisation dans Job Manager pour tout transfert que vous souhaitez répéter, et exécutez un Dry Run avant la première exécution réelle.

Une fois que le stockage objet China Mobile se trouve aux côtés de vos autres remotes dans un seul explorateur, déplacer des données cesse d'être une corvée de script et devient une opération de glisser-déposer.

---

**Guides connexes :**

- [Gérer le stockage objet RackCorp — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage objet Scaleway — Synchronisation cloud et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage objet Ceph avec RcloneView — GUI compatible S3 pour votre cluster Ceph](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
