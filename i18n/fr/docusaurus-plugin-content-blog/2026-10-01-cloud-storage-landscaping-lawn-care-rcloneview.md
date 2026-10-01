---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "Stockage cloud pour les entreprises de paysagisme — Protégez vos fichiers de chantier avec RcloneView"
authors:
  - alex
description: "Stockage cloud pour les entreprises de paysagisme et d'entretien de pelouses : sauvegardez photos de chantier, plans et devis grâce à la synchronisation planifiée et au chiffrement de RcloneView."
keywords:
  - stockage cloud pour entreprises de paysagisme
  - sauvegarde de fichiers de conception paysagère
  - sauvegarde pour entreprise d'entretien de pelouses
  - sauvegarde de photos de chantier
  - synchronisation cloud paysagisme
  - sauvegarde cloud chiffrée
  - sauvegarde RcloneView
  - sauvegarde cloud pour petite entreprise
  - sauvegarde cloud planifiée
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les entreprises de paysagisme — Protégez vos fichiers de chantier avec RcloneView

> Gardez photos de chantier, plans de conception et devis sauvegardés hors site, sans demander aux équipes de changer leur façon de travailler.

Une entreprise de paysagisme accumule des fichiers à des endroits dispersés : photos avant/après sur les téléphones, exports de CAO ou de conception sur le PC du bureau, devis signés dans un dossier partagé. Quand un ordinateur portable tombe en panne en pleine saison, c'est aussi l'historique de ce qui a été promis à chaque client qui disparaît. RcloneView offre à une petite entreprise un moyen visuel de copier ce travail vers le stockage cloud et de vérifier qu'il est bien arrivé.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Organisez les fichiers de chantier avant la sauvegarde

Commencez par une structure de dossiers prévisible sur la machine du bureau : un dossier par client, avec des sous-dossiers pour les photos, les plans, les devis et les factures. Les photos des équipes peuvent être déposées dans le dossier du client à la fin de chaque journée.

Ouvrez le dossier local dans un panneau Explorer de RcloneView et votre remote cloud dans un autre. Le File Explorer permet de vérifier que les photos de chantier sont bien dans le bon dossier avant leur envoi.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un remote cloud pour les fichiers de chantiers de paysagisme dans RcloneView" class="img-large img-center" />

## Choisissez un stockage adapté à l'entreprise

RcloneView prend en charge Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, Amazon S3 et plus de 90 autres fournisseurs : vous pouvez donc utiliser un compte existant ou choisir un stockage objet pour de grandes archives de photos.

Si des adresses de clients et des contrats sont concernés, ajoutez un remote Crypt au-dessus de la destination. Les noms et le contenu des fichiers sont chiffrés via rclone Crypt avant l'envoi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copie de dossiers de chantier vers le stockage cloud dans RcloneView" class="img-large img-center" />

## Automatisez la copie nocturne

Créez un job Sync ou Copy du dossier des chantiers vers la destination cloud. Utilisez d'abord Dry Run pour prévisualiser ce qui sera copié ou supprimé. La synchronisation unidirectionnelle ne modifie que la destination, ce qui convient à une sauvegarde. Avec une licence PLUS, vous pouvez ajouter une planification de type crontab pour que le job s'exécute chaque nuit après l'envoi des photos par les équipes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'un job de sauvegarde nocturne dans RcloneView" class="img-large img-center" />

## Vérifiez que les sauvegardes ont bien fonctionné

Job History affiche pour chaque exécution l'heure de début, la durée, le statut, la taille et le nombre de fichiers. Utilisez Folder Compare entre le dossier local et la copie cloud pour repérer ce qui manque, surtout après une semaine chargée d'interventions.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des jobs pour les exécutions de sauvegarde dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre stockage cloud via New Remote, et éventuellement un remote Crypt pour les fichiers sensibles.
3. Créez un job Sync du dossier des chantiers vers le cloud, puis lancez un Dry Run.
4. Planifiez-le (PLUS) ou lancez-le manuellement, puis consultez Job History chaque semaine.

Des sauvegardes fiables font d'un ordinateur portable en panne un simple désagrément, et non la perte de toute une saison de dossiers clients.

---

**Guides associés :**

- [Stockage cloud pour les entreprises de chauffage et de plomberie](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [Stockage cloud pour les cabinets de design d'intérieur](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [Stockage cloud pour les cabinets de géomètres](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />
