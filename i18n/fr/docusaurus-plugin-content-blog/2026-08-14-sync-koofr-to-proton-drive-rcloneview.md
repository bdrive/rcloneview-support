---
slug: sync-koofr-to-proton-drive-rcloneview
title: "Synchroniser Koofr avec Proton Drive — Sauvegarde cloud avec RcloneView"
authors:
  - alex
description: "Découvrez comment synchroniser des fichiers de Koofr vers Proton Drive avec RcloneView, une interface multiplateforme qui garde deux clouds sauvegardés en synchronisation."
keywords:
  - synchroniser Koofr vers Proton Drive
  - sauvegarde Koofr Proton Drive
  - RcloneView Koofr
  - RcloneView Proton Drive
  - synchronisation cloud à cloud
  - sauvegarde Koofr
  - synchronisation Proton Drive
  - sauvegarde cloud chiffrée
  - outil de synchronisation multi-cloud
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Koofr avec Proton Drive — Sauvegarde cloud avec RcloneView

> Conservez une sauvegarde permanente de vos fichiers Koofr sur Proton Drive sans rien télécharger d'abord sur un disque local.

Koofr est un service de stockage cloud européen qui peut aussi agréger d'autres comptes, tandis que Proton Drive apporte un stockage chiffré de bout en bout signé par les créateurs de Proton Mail. Certains utilisateurs veulent les deux — Koofr pour sa vue unifiée, Proton Drive pour ses garanties de confidentialité — et RcloneView vous permet de les connecter côte à côte et de synchroniser directement entre eux, de cloud à cloud, sans faire transiter les fichiers par un disque local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Koofr et Proton Drive comme distants

Ajoutez Koofr comme distant via le Remote Manager en utilisant les identifiants du compte, puis répétez l'opération pour Proton Drive, qui s'authentifie avec votre e-mail Proton, votre mot de passe et un code à deux facteurs optionnel. Les deux distants apparaissent comme des onglets séparés dans l'explorateur, ce qui vous permet d'ouvrir Koofr dans un panneau et Proton Drive dans l'autre pour une comparaison directe avant de configurer tout transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de Koofr et Proton Drive comme distants dans RcloneView" class="img-large img-center" />

Vous pouvez aussi connecter S3, Azure ou Backblaze B2 en lecture/écriture complète dès la licence FREE, de sorte qu'une synchronisation Koofr vers Proton Drive cohabite avec toute sauvegarde de stockage objet que vous exécutez déjà — le tout depuis la même fenêtre.

## Configurer une synchronisation à sens unique

Ouvrez l'assistant de synchronisation depuis l'onglet Home et sélectionnez Koofr comme source, Proton Drive comme destination, en choisissant « Modifying destination only » pour une sauvegarde à sens unique qui ne modifie jamais vos fichiers d'origine sur Koofr. Dans Advanced Settings, activez la comparaison par somme de contrôle afin que les fichiers soient comparés par hash et taille plutôt que par la seule date de modification — un point important lorsque Koofr et Proton Drive rapportent des horodatages différents.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une synchronisation à sens unique de Koofr vers Proton Drive" class="img-large img-center" />

Avant de la lancer réellement, utilisez Dry Run pour voir exactement quels fichiers seront copiés, et appliquez des filtres — par type de fichier, taille maximale ou profondeur de dossier — si vous ne voulez refléter que certains dossiers plutôt que l'ensemble du compte Koofr.

## Planifier et suivre la sauvegarde

Enregistrez la configuration comme tâche dans Job Manager ; les utilisateurs de licence PLUS peuvent y associer une planification au format crontab pour que la synchronisation Koofr vers Proton Drive s'exécute automatiquement selon une cadence fixe, avec un aperçu des prochaines exécutions avant validation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une synchronisation récurrente de Koofr vers Proton Drive" class="img-large img-center" />

Chaque exécution est enregistrée dans Job History avec la durée, la vitesse de transfert, le nombre de fichiers et la taille totale transférée, ce qui vous donne un historique permettant de confirmer que la sauvegarde s'est déroulée correctement ou de repérer une exécution à relancer.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Koofr et Proton Drive comme distants dans Remote Manager.
3. Créez une tâche de synchronisation à sens unique de Koofr vers Proton Drive et lancez d'abord un Dry Run.
4. Enregistrez la tâche et, si vous êtes en PLUS, associez une planification pour des sauvegardes récurrentes sans effort.

Une fois configuré, chaque exécution reflète vos fichiers Koofr sur Proton Drive, vous offrant une copie chiffrée sans jamais quitter RcloneView.

---

**Guides associés :**

- [Gérer le stockage Proton Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Gérer le stockage Koofr — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrer de Proton Drive vers Backblaze B2 — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
