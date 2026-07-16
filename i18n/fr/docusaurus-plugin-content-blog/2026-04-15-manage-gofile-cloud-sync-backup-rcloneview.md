---
slug: manage-gofile-cloud-sync-backup-rcloneview
title: "Gérer le stockage Gofile — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - tayson
description: "Gérez votre stockage cloud Gofile avec RcloneView — téléversez, organisez et synchronisez votre contenu Gofile grâce à une interface graphique basée sur le backend Gofile de rclone."
keywords:
  - gestion Gofile
  - outil de synchronisation Gofile
  - interface de téléversement Gofile
  - RcloneView Gofile
  - sauvegarde cloud Gofile
  - transfert de fichiers Gofile
  - stockage de diffusion de contenu
  - gestion multi-cloud de fichiers
  - Gofile rclone
  - service de téléversement de gros fichiers
tags:
  - gofile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage Gofile — Synchroniser et sauvegarder vos fichiers avec RcloneView

> Gofile est un service populaire d'hébergement et de partage de fichiers conçu pour les gros téléversements — RcloneView se connecte à Gofile via un jeton d'accès et l'intègre à votre flux de gestion cloud.

Gofile est un service d'hébergement et de partage de fichiers qui vous permet de téléverser des fichiers volumineux et de générer des liens de partage sans limites de taille restrictives. Pour les utilisateurs qui diffusent régulièrement du contenu via Gofile, gérer les téléversements uniquement via le portail web devient vite fastidieux. RcloneView se connecte à Gofile à l'aide d'un jeton d'accès, intégrant votre stockage Gofile dans un flux de gestion de fichiers standard, aux côtés de tous vos autres remotes cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer Gofile dans RcloneView

Pour connecter Gofile dans RcloneView, allez dans **Onglet Remote > Nouveau remote** et sélectionnez **Gofile** dans la liste des fournisseurs. Vous aurez besoin d'un **jeton d'accès** provenant du tableau de bord de votre compte Gofile. Saisissez le jeton, nommez le remote, puis enregistrez. Votre compte Gofile apparaît dans l'explorateur comme un remote consultable, affichant les dossiers et fichiers comme n'importe quel autre stockage cloud.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile as a new remote in RcloneView" class="img-large img-center" />

Gofile organise le contenu selon une structure de dossiers que RcloneView affiche clairement, aussi bien en vue liste qu'en vue miniatures. Vous pouvez parcourir des dossiers imbriqués, vérifier les noms et tailles de fichiers, et sélectionner plusieurs fichiers pour des opérations groupées — téléchargement par lots, suppression d'anciens envois, ou déplacement de contenu entre dossiers Gofile.

## Téléverser et organiser le contenu Gofile

RcloneView prend en charge le glisser-déposer depuis votre gestionnaire de fichiers local directement dans le panneau explorateur de Gofile. Glisser un lot de fichiers vidéo depuis un dossier local les téléverse vers la destination Gofile sélectionnée sans ouvrir de navigateur — particulièrement utile pour les créateurs de contenu qui diffusent régulièrement de gros paquets vidéo ou des archives logicielles via Gofile.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Gofile in RcloneView" class="img-large img-center" />

Créer une tâche de synchronisation dans le **Gestionnaire de tâches** vous permet de pousser régulièrement du contenu depuis un dossier local vers Gofile. Un producteur de podcast qui téléverse l'audio des épisodes montés sur Gofile pour sa diffusion aux auditeurs peut automatiser cette opération pour qu'elle s'exécute chaque semaine après les sessions d'enregistrement — en ne synchronisant à chaque fois que les fichiers nouveaux ou modifiés.

## Sauvegarder le contenu Gofile vers un stockage pérenne

Le contenu hébergé sur Gofile peut avoir une durée de conservation limitée ou dépendre du statut du compte. Pour les utilisateurs qui utilisent Gofile comme canal de diffusion mais souhaitent des sauvegardes permanentes, RcloneView permet un transfert direct depuis Gofile vers Amazon S3, Backblaze B2, ou tout autre remote cloud. Configurez une tâche de copie pour récupérer le contenu depuis Gofile et l'archiver dans un stockage à long terme — en conservant ainsi une copie permanente de tout ce que vous avez partagé.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Gofile backup transfers in RcloneView" class="img-large img-center" />

L'onglet **Historique des tâches** suit chaque transfert avec des détails sur les octets déplacés, les fichiers transférés, la durée et le statut — pour que vous sachiez toujours si votre contenu Gofile a bien été archivé.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans **Onglet Remote > Nouveau remote**, sélectionnez **Gofile**, puis saisissez votre jeton d'accès.
3. Parcourez votre contenu Gofile dans le panneau explorateur.
4. Utilisez le **Gestionnaire de tâches** pour synchroniser du contenu local vers Gofile, ou copier le contenu Gofile vers un stockage de sauvegarde.

Gofile via RcloneView offre aux diffuseurs de contenu une véritable couche de gestion de fichiers par-dessus l'infrastructure de téléversement et de partage rapide de Gofile — transformant des envois ponctuels en flux organisés et automatisés.

---

**Guides associés :**

- [Gérer le stockage cloud Backblaze B2 — Synchroniser et sauvegarder avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Téléverser des fichiers volumineux vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Copier une URL — Télécharger des fichiers directement vers le cloud avec RcloneView](https://rcloneview.com/support/blog/copyurl-download-url-to-cloud-rcloneview)

<CloudSupportGrid />
