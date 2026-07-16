---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → Cloud, en toute simplicité : sauvegardes et synchronisation hors site avec RcloneView"
authors:
  - jay
description: Protégez votre NAS Synology avec des sauvegardes hors site vers Backblaze, Google Drive, Amazon S3, pCloud, Wasabi et plus encore—planifiez, prévisualisez et automatisez dans l'interface graphique de RcloneView.
keywords:
  - rcloneview
  - sauvegarde nas synology
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - sauvegarde cloud
  - synchronisation planifiée
  - interface rclone
tags:
  - RcloneView
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → Cloud, en toute simplicité : sauvegardes et synchronisation hors site avec RcloneView

> Conservez une seconde copie hors site sans scripts ni terminal. Sauvegardez votre **NAS Synology** vers **Backblaze, Google Drive, Amazon S3, pCloud, Wasabi**, et plus encore—visuellement, de manière fiable, et selon un planning.

## Introduction — Pourquoi mettre vos sauvegardes Synology hors site ?

Un NAS est parfait pour un accès local rapide—photos de famille, projets créatifs et partages d'équipe ne sont qu'à un réseau local de distance. Mais **le stockage local uniquement** comporte des risques : vol, incendie, suppression accidentelle ou pannes multi-disques. Ajouter une **copie cloud hors site** vous apporte :

<!-- truncate -->

- **Résilience** : survivez aux sinistres locaux grâce à une copie distante et récupérable.
- **Flexibilité** : restaurez où que vous soyez, même loin du bureau/domicile.
- **Gouvernance** : combinez la rétention du NAS avec le versionnement et les politiques des buckets cloud.

**Le NAS Synology en un coup d'œil**
- Stockage central accessible via **SMB/NFS** (monté comme un dossier local) ou des points d'accès réseau comme **WebDAV** et **SFTP**.
- Idéal pour les sauvegardes permanentes, l'hébergement de médias et les hubs de fichiers d'équipe.

**Les destinations cloud en un coup d'œil**
- **Google Drive** : collaboration et partage dans Google Workspace.
- **Amazon S3 / Wasabi / Backblaze B2** : stockage objet avec buckets, régions et règles de cycle de vie.
- **pCloud** : stockage convivial avec une gestion de fichiers généreuse.

**Pourquoi envoyer le NAS vers le cloud dès maintenant ?**
- Créez un **filet de sécurité hors site**.
- **Standardisez** les sauvegardes vers une destination unique (ou multi-cloud).
- Exploitez les **politiques et le versionnement** disponibles sur de nombreuses plateformes cloud.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Étape 1 — Préparation

Avant de commencer :

1. **Choisissez votre périmètre** — quels dossiers partagés sur Synology (par ex. `/photo`, `/projects`, `/backup`) iront vers le cloud ?
2. **Confirmez la capacité cloud** — assurez-vous que le compte ou le bucket cible dispose de suffisamment d'espace (plus une marge pour les versions).
3. **Choisissez une méthode de connexion NAS**
   - **Chemin local** : montez le partage NAS via **SMB/NFS** sur votre système et utilisez-le comme **Local** dans RcloneView.
   - **WebDAV** : activez le **serveur WebDAV** de Synology et connectez-vous avec WebDAV dans RcloneView.
   - **SFTP** : activez SSH/SFTP sur Synology et connectez-vous avec **SFTP**.
4. **Choisissez votre cloud** — Google Drive, Amazon S3/Wasabi, Backblaze B2, pCloud, etc.
5. **Décidez de la cadence** — archivage ponctuel, synchronisation périodique, ou **tâches planifiées nocturnes**.
6. **Faites d'abord un test pilote** — exécutez un petit test pour valider les chemins, les permissions et le débit.

🔍 Aperçu utile :
- [Tutoriel Cloud ↔ Synology](/tutorials/synology-nas-cloud-transfer)


## 3) Étape 2 — Configurer les connexions dans RcloneView

RcloneView transforme la configuration de rclone en un flux guidé, en quelques clics.

1. Ouvrez **RcloneView** → cliquez sur **`+ New Remote`**
2. **Ajoutez Synology (source)** via l'une des méthodes suivantes :
   - **Local** : sélectionnez votre dossier NAS monté (par ex. `Z:\NAS\Projects` ou `/Volumes/NAS/Projects`)
   - **WebDAV** : utilisez le point d'accès/les identifiants WebDAV de Synology → nommez-le (par ex. `NAS-WebDAV`)
   - **SFTP** : hôte/IP, port et compte → nommez-le (par ex. `NAS-SFTP`)
3. **Ajoutez le Cloud (destination)**, par exemple :
   - **Google Drive** : connexion OAuth → nommez-le `MyGoogleDrive`
   - **Amazon S3 / Wasabi** : fournisseur **S3** → clé d'accès/secret, région, bucket → nommez-le `MyS3` / `MyWasabi`
   - **Backblaze B2** : fournisseur **B2** (ou point d'accès compatible S3 le cas échéant) → nommez-le `MyB2`
   - **pCloud** : flux de connexion/jeton → nommez-le `MyPcloud`
4. Vérifiez que les deux apparaissent côte à côte dans le volet Explorateur.

🔍 Guides utiles :
- [Configuration OAuth rapide (Google Drive, etc.)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Ajouter un distant S3 (Amazon S3/Wasabi)](/howto/remote-storage-connection-settings/s3)
- [Tutoriel Cloud ↔ Synology](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) Étape 3 — Exécuter la sauvegarde/synchronisation (trois méthodes pratiques)

RcloneView propose trois approches simples. Commencez petit, puis montez en puissance en toute confiance.

### A) Glisser-déposer (copie manuelle)
- Ouvrez **Synology (Local/WebDAV/SFTP)** d'un côté et votre **cloud** de l'autre, puis **glissez-déposez les dossiers/fichiers**.
- Idéal pour les déplacements sélectifs et les gains rapides.

👉 En savoir plus : [Copier des fichiers par glisser-déposer](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Comparer et copier (prévisualiser les changements)
- Exécutez **Comparer** pour voir ce qui est nouveau/modifié sur le NAS par rapport à votre bucket/drive cloud.
- Copiez uniquement les différences—moins de surprises, exécutions plus rapides.

👉 En savoir plus : [Comparer et gérer les fichiers](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Synchronisation et tâches planifiées (automatiser)
- Utilisez **Sync** pour refléter les dossiers NAS sélectionnés vers votre destination cloud.
- Faites d'abord un **essai à blanc (dry-run)**, puis enregistrez comme **tâche (Job)** réutilisable et ajoutez une planification (nocturne/hebdomadaire).

👉 En savoir plus :
- [Synchroniser des stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**Astuces pratiques**
- Pour les **clouds de type S3** (S3/Wasabi/B2 compatible S3), pré-créez les buckets et choisissez la bonne région.
- Activez le **versionnement** sur les buckets qui le prennent en charge pour des retours en arrière plus sûrs.
- Gardez les sources NAS **en lecture seule pendant la bascule** pour éviter les dérives.
- Utilisez des filtres pour exclure les dossiers de cache/temporaires des sauvegardes.


## 5) Conclusion — Points clés et astuces supplémentaires

- **Pourquoi le faire** : un filet de sécurité hors site durable, des options de reprise après sinistre plus rapides, et une rétention unifiée.
- **Comment ça marche** : RcloneView connecte votre NAS Synology et vos destinations cloud, puis vous permet de **glisser-déposer**, **comparer** ou **synchroniser**—avec une **planification** pour des sauvegardes automatisées.
- **Monter en puissance en toute sécurité** : faites d'abord un test pilote, respectez les quotas des fournisseurs, et surveillez les journaux des tâches pour une piste d'audit propre.


## FAQ

**Q. Puis-je sauvegarder vers plusieurs clouds ?**
**A.** Oui—ajoutez plusieurs destinations (par ex. S3 et Google Drive) et créez des tâches ou planifications distinctes pour chacune.

**Q. Ai-je besoin de la ligne de commande ?**
**A.** Non. RcloneView est une interface graphique complète—configurez les distants, prévisualisez les changements, exécutez des synchronisations et planifiez des tâches sans CLI.


**Prêt à mettre vos sauvegardes Synology en pilote automatique—hors site et sous contrôle ?**

<CloudSupportGrid />
