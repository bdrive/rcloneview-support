---
slug: migrate-pcloud-to-proton-drive-rcloneview
title: "Migrer de pCloud vers Proton Drive — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez vos fichiers de pCloud vers Proton Drive directement avec RcloneView, sans étape de téléchargement local, avec aperçus Dry Run et vérification par somme de contrôle."
keywords:
  - migrer de pCloud vers Proton Drive
  - transfert pCloud vers Proton Drive
  - RcloneView pCloud Proton Drive
  - migration cloud axée sur la confidentialité
  - transférer des fichiers pCloud
  - synchronisation Proton Drive
  - migration de cloud à cloud
  - transfert de stockage cloud chiffré
tags:
  - RcloneView
  - pcloud
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de pCloud vers Proton Drive — Transférer des fichiers avec RcloneView

> Déplacez vos fichiers directement entre deux fournisseurs de cloud axés sur la confidentialité, sans tout faire transiter d'abord par un disque dur local.

Les utilisateurs qui passent de pCloud à Proton Drive le font généralement pour la même raison : ils veulent un stockage chiffré de bout en bout lié à un fournisseur axé sur la confidentialité. Le problème est qu'aucun des deux services ne communique nativement avec l'autre, si bien que l'approche par défaut consiste à tout télécharger depuis pCloud puis à le retéléverser vers Proton Drive — lent, et cela double inutilement l'utilisation de votre disque local. RcloneView connecte les deux distants dans une seule fenêtre et transfère directement de cloud à cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants

Ajoutez d'abord pCloud — c'est un distant basé sur OAuth, une fenêtre de navigateur s'ouvre donc pour la connexion et RcloneView se connecte automatiquement, sans clé API à copier. Proton Drive nécessite l'e-mail et le mot de passe de votre compte, avec la 2FA en option si vous l'avez activée. Une fois les deux distants configurés, ils apparaissent comme des onglets distincts dans le panneau Explorer, et vous pouvez en ouvrir un de chaque côté d'une vue en panneaux divisés pour voir les dossiers source et destination côte à côte avant de déplacer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting pCloud and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Transférer des fichiers de cloud à cloud

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien que le transfert de pCloud vers Proton Drive se déroule de la même manière que tout autre déplacement entre fournisseurs. Faites glisser-déposer entre les deux panneaux pour des transferts ponctuels de petite taille — RcloneView reconnaît qu'il s'agit d'une opération entre distants différents et copie plutôt que de déplacer. Pour une migration complète de compte, configurez plutôt une tâche Copy ou Sync, afin d'obtenir un suivi de la progression, une logique de nouvelle tentative et un enregistrement précis de ce qui a été transféré.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files from pCloud to Proton Drive in RcloneView" class="img-large img-center" />

## Vérifier que la migration s'est terminée proprement

Avant de clôturer pCloud, exécutez Folder Compare entre la source et la destination. Il signale les fichiers présents uniquement à gauche, uniquement à droite, et ceux dont la taille diffère, afin que vous puissiez repérer tout ce qui n'a pas été transféré avant de résilier votre ancien forfait. Pour les grandes bibliothèques, activez la comparaison par somme de contrôle dans les paramètres de synchronisation afin que les fichiers soient vérifiés par hash plutôt que par simple taille — important lors d'un déplacement entre deux fournisseurs dont la gestion interne des fichiers diffère.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud comme distant et connectez-vous via OAuth dans le navigateur.
3. Ajoutez Proton Drive comme distant avec l'e-mail et le mot de passe de votre compte.
4. Exécutez un Dry Run, puis lancez une tâche Copy ou Sync entre les deux.

Une fois le transfert terminé, le vérifier avec Folder Compare vous donne la confiance nécessaire pour clôturer l'ancien compte sans rien laisser derrière vous.

---

**Guides associés :**

- [Gérer le stockage pCloud — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gérer le stockage Proton Drive — Synchroniser avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migrer de pCloud vers OneDrive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)

<CloudSupportGrid />
