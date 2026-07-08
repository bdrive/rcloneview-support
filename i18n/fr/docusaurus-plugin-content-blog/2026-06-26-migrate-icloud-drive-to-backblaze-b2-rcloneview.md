---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "Migrer iCloud Drive vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Transférez vos fichiers d'iCloud Drive vers Backblaze B2 avec RcloneView. Guide étape par étape pour sauvegarder votre stockage cloud Apple vers un stockage objet abordable et indépendant du fournisseur."
keywords:
  - iCloud Drive vers Backblaze B2
  - migrer iCloud Drive Backblaze B2
  - sauvegarde iCloud Backblaze B2
  - transférer fichiers iCloud vers B2
  - migration cloud iCloud Drive RcloneView
  - RcloneView iCloud Backblaze B2
  - transfert cloud à cloud iCloud
  - outil de sauvegarde Backblaze B2 iCloud
tags:
  - RcloneView
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer iCloud Drive vers Backblaze B2 — Transférer des fichiers avec RcloneView

> iCloud Drive d'Apple est pratique pour la synchronisation entre appareils, mais copier vos fichiers vers Backblaze B2 crée une sauvegarde économique et indépendante du fournisseur, que RcloneView rend entièrement pilotable via une interface graphique.

Des millions d'utilisateurs stockent photos, documents et archives de projets dans iCloud Drive au sein de l'écosystème Apple. Bien qu'iCloud fonctionne parfaitement entre les appareils Apple, les organisations et les utilisateurs avancés ont souvent besoin d'une copie secondaire dans un stockage objet durable — pour la diversification des fournisseurs, des fenêtres de rétention plus longues, ou une stratégie de sauvegarde indépendante de la plateforme. Backblaze B2 est un service de stockage objet compatible S3 qui s'intègre naturellement avec RcloneView, vous permettant de transférer du contenu depuis iCloud Drive sans téléchargement manuel, script ou client de synchronisation tiers. Connectez Backblaze B2 avec un accès complet en lecture/écriture dès la licence GRATUITE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer iCloud Drive dans RcloneView

iCloud Drive est pris en charge dans RcloneView via le backend iCloud de rclone, qui nécessite rclone v1.69 ou une version ultérieure — le binaire rclone intégré fourni avec RcloneView répond déjà à cette exigence, aucune installation séparée n'est donc nécessaire. Pour vous connecter, ouvrez l'onglet **Remote**, cliquez sur **New Remote**, puis sélectionnez iCloud Drive dans la liste des fournisseurs. Vous vous authentifierez avec vos identifiants Apple ID et, si l'authentification à deux facteurs est activée sur votre compte, vous saisirez le code de vérification lorsque demandé. Une fois enregistré, vos dossiers iCloud apparaissent dans le panneau explorateur exactement comme sur un Mac.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

Parcourez la structure de votre iCloud Drive — Desktop, Documents, ou tout dossier personnalisé — pour confirmer le périmètre du contenu avant de créer une tâche de transfert.

## Connecter Backblaze B2 comme destination

Backblaze B2 se connecte via la saisie d'identifiants. Dans **New Remote**, choisissez Backblaze B2 et entrez votre **Application Key ID** et votre **Application Key** — tous deux générés dans votre compte Backblaze, dans la section App Keys. Une fois enregistré, vous pouvez naviguer dans vos buckets B2 dans le second panneau explorateur de RcloneView. Avec iCloud Drive et Backblaze B2 ouverts côte à côte, vous avez une vue claire de la source et de la destination avant même le déplacement du premier fichier.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## Lancer le transfert de migration

Ouvrez l'assistant **Sync** depuis l'onglet Home. Définissez votre dossier iCloud Drive comme source et votre bucket Backblaze B2 (ou un préfixe à l'intérieur) comme destination. Dans l'étape Advanced Settings, activez la **vérification par checksum** pour comparer les empreintes des fichiers plutôt que de se fier uniquement aux horodatages — c'est particulièrement précieux pour une migration ponctuelle où l'intégrité des données est primordiale. Vous pouvez aussi ajouter un filtre **max file age** pour ne migrer que le contenu récent, si vous souhaitez exclure lors de ce premier passage les fichiers plus anciens et rarement consultés.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

Effectuez toujours un **Dry Run** avant le transfert réel. RcloneView liste précisément les fichiers qu'il copierait ou ignorerait — une vérification de sécurité pratique lors de la migration d'une grande bibliothèque iCloud Drive, où des écrasements accidentels ou des dossiers manqués peuvent être coûteux à corriger.

## Vérifier la migration avec Folder Compare

Une fois le transfert terminé, utilisez la fonctionnalité **Folder Compare** de RcloneView pour confirmer que les deux côtés correspondent. Ouvrez la vue Compare, placez iCloud Drive à gauche et votre bucket B2 à droite, et laissez RcloneView faire apparaître les fichiers présents uniquement à gauche, uniquement à droite, ou dont la taille diffère. Une comparaison propre — ne montrant que des fichiers identiques — confirme que votre migration a réussi sans lacunes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

Pour une protection continue, la **licence PLUS** vous permet de planifier une tâche de synchronisation récurrente — hebdomadaire ou quotidienne — afin de capturer tout nouvel ajout dans iCloud Drive et de maintenir automatiquement votre copie B2 à jour.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez iCloud Drive comme nouveau remote avec vos identifiants Apple ID.
3. Ajoutez Backblaze B2 comme remote avec votre Application Key ID et votre Application Key.
4. Créez une tâche de synchronisation : iCloud Drive comme source, bucket B2 comme destination, puis exécutez d'abord un **Dry Run**.
5. Utilisez **Folder Compare** pour vérifier la migration, puis planifiez des sauvegardes récurrentes selon vos besoins.

Migrer d'iCloud Drive vers Backblaze B2 avec RcloneView offre à vos fichiers Apple un emplacement durable et indépendant de la plateforme dans un stockage objet — protégé, vérifiable et accessible depuis n'importe quel appareil.

---

**Guides associés :**

- [Gérer iCloud Drive avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Gérer Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrer iCloud Drive vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
