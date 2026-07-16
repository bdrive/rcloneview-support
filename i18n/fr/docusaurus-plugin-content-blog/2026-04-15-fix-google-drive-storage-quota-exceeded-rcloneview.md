---
slug: fix-google-drive-storage-quota-exceeded-rcloneview
title: "Résoudre le quota de stockage Google Drive dépassé — transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Résolvez le quota de stockage Google Drive dépassé — déplacez des fichiers vers un autre cloud, libérez de l'espace et gérez votre stockage Drive avec RcloneView."
keywords:
  - Google Drive stockage plein
  - résoudre quota dépassé
  - nettoyage Google Drive
  - déplacer des fichiers depuis Google Drive
  - libérer de l'espace Google Drive
  - gestion du stockage RcloneView
  - débordement du stockage cloud
  - solution quota Drive
  - archive Google Drive
  - récupération d'espace Google Drive
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre le quota de stockage Google Drive dépassé — transférer des fichiers avec RcloneView

> Un quota Google Drive plein bloque les envois et perturbe les flux de travail — RcloneView identifie les plus gros consommateurs d'espace et les déplace vers un stockage d'archivage économique, libérant immédiatement votre quota.

Lorsque Google Drive affiche « Le stockage est saturé » ou que les envois échouent à cause d'erreurs de quota, vous êtes confronté à un choix classique : payer pour plus de stockage, ou déplacer du contenu ailleurs. RcloneView propose une troisième voie — identifier efficacement les fichiers volumineux ou obsolètes et les déplacer de Google Drive vers un niveau de stockage moins coûteux, libérant du quota sans perdre de données.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifier ce qui utilise votre quota

Connectez votre Google Drive dans RcloneView (**onglet Remote > New Remote > Google Drive**, connexion OAuth). Une fois connecté, faites un clic droit sur n'importe quel dossier dans l'explorateur et sélectionnez **Get Size** pour voir l'espace de stockage qu'il occupe. Parcourez systématiquement vos dossiers de premier niveau — les exports vidéo, les fichiers de projet non compressés et les jeux de données dupliqués sont les principaux coupables des comptes Drive saturés.

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Google Drive in RcloneView to identify storage usage" class="img-large img-center" />

La fonctionnalité **Folder Compare** de RcloneView aide à identifier le contenu dupliqué : comparez deux dossiers au nom similaire pour trouver les fichiers existant aux deux emplacements (même contenu sauvegardé deux fois), ce qui vous permet de supprimer une copie en toute sécurité. Le filtre « same files » du résultat de comparaison repère les correspondances exactes entre deux emplacements.

## Déplacer des fichiers vers un stockage d'archivage

Une fois les dossiers les plus volumineux à libérer identifiés, configurez un distant d'archivage dans RcloneView — **Amazon S3**, **Backblaze B2** ou **Wasabi** conviennent bien comme niveaux de stockage froid économiques. Créez une tâche **Move** dans **Job Manager** : la source est le dossier Google Drive contenant les fichiers volumineux ou anciens, la destination est votre bucket d'archivage.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Moving Google Drive files to Backblaze B2 archive in RcloneView" class="img-large img-center" />

Les opérations Move copient le fichier vers la destination puis le suppriment de la source — libérant immédiatement votre quota Drive tout en préservant les données. Un monteur vidéo disposant de 200 Go de projets terminés sur Drive qui n'ont plus besoin d'accès collaboratif libère la totalité de son quota en une seule tâche Move vers B2. L'onglet **Transferring** de RcloneView affiche la progression en temps réel.

## Prévenir les futurs problèmes de quota

Après avoir résolu le débordement immédiat, mettez en place une politique d'archivage récurrente à l'aide de la fonctionnalité de planification de RcloneView (licence PLUS). Une tâche de synchronisation configurée avec le filtrage **Max File Age** (par exemple, fichiers de plus de 180 jours) archive automatiquement le contenu vieillissant de Drive vers un stockage froid selon un calendrier mensuel — gardant Drive comme un niveau de travail actif plutôt qu'un pool d'accumulation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive archiving in RcloneView" class="img-large img-center" />

L'onglet **Job History** suit chaque exécution d'archivage, vous donnant un enregistrement clair de ce qui a été déplacé hors de Drive et à quel moment — utile pour la récupération lorsque vous devez accéder à d'anciens fichiers archivés.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez votre Google Drive dans RcloneView et utilisez **Get Size** pour identifier les dossiers les plus volumineux.
3. Ajoutez votre stockage d'archivage (S3, B2, Wasabi) comme second distant.
4. Créez une tâche **Move** dans Job Manager des dossiers lourds vers votre distant d'archivage.

Un Google Drive saturé est un problème de gestion, pas une limite de stockage — RcloneView vous donne les outils pour orienter le contenu vers le bon niveau et garder Drive fonctionnel.

---

**Guides connexes :**

- [Résoudre les erreurs d'API de quota et de limite de débit Google Drive avec RcloneView](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Gérer le stockage cloud Google Drive — synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Backblaze B2 — synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
