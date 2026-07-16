---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "Migrer de Cloudflare R2 vers Backblaze B2 — Transférez vos fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment migrer des fichiers de Cloudflare R2 vers Backblaze B2 grâce à l'interface visuelle de RcloneView. Transférez du stockage compatible S3 sans commandes CLI."
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Cloudflare R2 vers Backblaze B2 — Transférez vos fichiers avec RcloneView

> Passer de Cloudflare R2 à Backblaze B2 ne signifie pas forcément écrire des scripts ou gérer des jetons API dans un terminal.

Cloudflare R2 propose une tarification sans frais de sortie (zero-egress), mais certaines équipes trouvent que les intégrations plus poussées de Backblaze B2 avec son écosystème, ses politiques de cycle de vie et ses partenariats Bandwidth Alliance en font un meilleur choix à long terme. Que vous consolidiez votre stockage d'objets ou que vous déplaciez des charges de travail, RcloneView vous permet de migrer chaque bucket de R2 vers B2 via une interface point-and-click — sans CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi migrer de Cloudflare R2 vers Backblaze B2

Backblaze B2 offre des intégrations natives avec des partenaires CDN comme Cloudflare (via le Bandwidth Alliance) et Fastly, ce qui signifie que la sortie de données depuis B2 via ces réseaux est gratuite ou fortement réduite. B2 prend également en charge des points de terminaison API compatibles S3 en plus de son API native, offrant une flexibilité dans la manière dont les applications se connectent. Pour les équipes qui ont besoin de règles de cycle de vie au niveau applicatif, de gestion de clés de chiffrement côté serveur ou de notifications d'événements, B2 propose des fonctionnalités que l'offre actuelle de R2 n'égale pas encore.

La prévisibilité des coûts est un autre facteur. Backblaze B2 facture un tarif fixe de 6 $ par To et par mois pour le stockage, avec une sortie de données gratuite via les réseaux partenaires. Si votre architecture achemine déjà le trafic via le CDN de Cloudflare, la combinaison du stockage B2 avec la diffusion Cloudflare peut être plus économique que R2 seul, une fois pris en compte les coûts de calcul et de Workers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurer les deux remotes dans RcloneView

Ouvrez RcloneView et créez un nouveau remote pour Cloudflare R2. Sélectionnez « Amazon S3 Compliant » comme type de fournisseur, puis choisissez « Cloudflare R2 » dans le menu déroulant des fournisseurs S3. Saisissez votre R2 Access Key ID, votre Secret Access Key, ainsi que l'URL du point de terminaison — généralement au format `https://<account-id>.r2.cloudflarestorage.com`. RcloneView valide la connexion avant l'enregistrement.

Ensuite, ajoutez un remote Backblaze B2. Vous pouvez utiliser soit le type de fournisseur B2 natif, soit l'interface compatible S3. Pour l'option native, saisissez votre B2 Application Key ID et votre Application Key. RcloneView listera automatiquement vos buckets existants une fois la connexion établie. Si le bucket de destination n'existe pas encore, créez-le d'abord dans la console B2 avec la région et les paramètres de chiffrement de votre choix.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## Lancer la migration

Une fois les deux remotes configurés, ouvrez l'explorateur à deux volets de RcloneView. Sélectionnez votre remote R2 d'un côté et le remote B2 de l'autre. Parcourez le bucket source dans R2 et le bucket de destination dans B2. Vous pouvez faire un glisser-déposer de tout le contenu du bucket ou sélectionner des préfixes et dossiers spécifiques à transférer.

Pour les migrations volumineuses, créez plutôt une tâche de synchronisation ou de copie. Accédez au gestionnaire de tâches, définissez R2 comme source et B2 comme destination, puis choisissez le mode « Copy » pour vous assurer que les fichiers arrivent dans B2 sans rien supprimer de R2 pendant la transition. Activez la vérification par somme de contrôle pour valider que chaque objet arrive intact — R2 et B2 prennent tous deux en charge les sommes de contrôle MD5 sur les téléversements compatibles S3, ce qui permet à RcloneView de vérifier l'intégrité de bout en bout.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## Planifier et surveiller les transferts

Si vos buckets R2 contiennent des téraoctets de données, découpez la migration en tâches planifiées. Le planificateur de RcloneView vous permet d'exécuter les transferts en dehors des heures de pointe afin d'éviter de saturer votre réseau. Définissez des limites de bande passante par tâche pour que les autres services continuent de fonctionner sans problème.

Suivez la progression dans le tableau de bord des transferts, qui affiche le débit en temps réel, le nombre de fichiers et les éventuelles erreurs. Une fois la copie initiale terminée, passez la tâche en mode « Sync » et exécutez-la périodiquement jusqu'à ce que vous basculiez les points de terminaison de votre application de R2 vers B2.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote Cloudflare R2 en utilisant des identifiants compatibles S3 et le point de terminaison de votre compte.
3. Ajoutez votre remote Backblaze B2 avec votre Application Key ID et votre Application Key.
4. Créez une tâche Copy de R2 vers B2 avec la vérification par somme de contrôle activée, puis planifiez-la pour qu'elle s'exécute en dehors des heures de pointe.

Une fois tous les objets vérifiés dans B2, mettez à jour les points de terminaison de votre application et supprimez les buckets R2 à votre propre rythme.

---

**Guides connexes :**

- [Passer de Cloudflare R2 à AWS S3 avec RcloneView](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [Comparer Cloudflare R2 et AWS S3 avec RcloneView](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [Centraliser S3, Wasabi et R2 avec RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
