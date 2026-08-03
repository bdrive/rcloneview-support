---
slug: migrate-zoho-workdrive-to-dropbox-rcloneview
title: "Migrer de Zoho WorkDrive vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez des fichiers de Zoho WorkDrive vers Dropbox avec RcloneView — comparez les dossiers avant le transfert et vérifiez que chaque fichier arrive intact."
keywords:
  - migrer zoho workdrive vers dropbox
  - migration zoho workdrive
  - transfert zoho workdrive vers dropbox
  - outil de migration cloud à cloud
  - rcloneview zoho workdrive
  - outil de migration dropbox
  - transfert de fichiers entre clouds
  - sauvegarde zoho workdrive
  - migration cloud d'entreprise
  - déplacer des fichiers entre clouds
tags:
  - RcloneView
  - zoho
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Zoho WorkDrive vers Dropbox — Transférer des fichiers avec RcloneView

> Déplacez les fichiers d'une équipe de Zoho WorkDrive vers Dropbox sans tout télécharger au préalable sur un disque local.

Changer de plateforme de collaboration signifie généralement que quelqu'un doit déplacer des années de dossiers partagés de l'ancien système vers le nouveau. Le faire via un navigateur — télécharger depuis Zoho WorkDrive, puis renvoyer vers Dropbox — est lent, mobilise de l'espace disque local et complique la vérification qu'aucun fichier n'a été perdu en chemin. RcloneView se connecte directement aux deux services et transfère de cloud à cloud, de sorte que les fichiers se déplacent côté serveur partout où les fournisseurs le permettent, sans transiter par le stockage de votre machine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Zoho WorkDrive et Dropbox

Ajoutez les deux services comme distants avant de démarrer la migration. Zoho WorkDrive exige de sélectionner la région de votre compte lors de la configuration, car Zoho héberge les données dans plusieurs régions de centres de données. Dropbox se connecte via une connexion OAuth standard par navigateur — cliquez sur Authorize, connectez-vous, et RcloneView reçoit automatiquement l'accès.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de Zoho WorkDrive et Dropbox comme distants dans RcloneView" class="img-large img-center" />

Contrairement aux outils de montage seul, RcloneView synchronise et compare aussi les dossiers avec la licence FREE, de sorte que les deux distants sont prêts pour un flux de migration complet, et pas seulement pour une navigation occasionnelle.

## Comparer les dossiers avant tout déplacement

Avant le transfert, ouvrez **Compare** et pointez-le vers le dossier Zoho WorkDrive que vous migrez et vers une destination Dropbox vide (ou partiellement remplie). La vue de comparaison sépare les fichiers présents d'un seul côté de ceux qui correspondent déjà, ce qui est particulièrement utile si vous reprenez une migration commencée plus tôt ou si vous la relancez après un échec partiel.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison d'un dossier Zoho WorkDrive avec une destination Dropbox dans RcloneView" class="img-large img-center" />

## Exécuter et vérifier le transfert

Pour un déplacement ponctuel, configurez une tâche Copy avec Zoho WorkDrive comme source et Dropbox comme destination, appliquez les filtres nécessaires (exclusion des fichiers dans la corbeille ou de dossiers spécifiques), puis exécutez d'abord un **Dry Run** pour voir exactement ce qui sera transféré.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de copie de Zoho WorkDrive vers Dropbox" class="img-large img-center" />

Activez la comparaison par somme de contrôle dans les paramètres de synchronisation afin que RcloneView vérifie l'intégrité des fichiers par hachage plutôt que par la seule taille, puis consultez **Job History** après le transfert pour un relevé précis de ce qui a été transféré, du temps que cela a pris, et des éventuels fichiers en erreur.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre compte Zoho WorkDrive en sélectionnant la bonne région.
3. Connectez Dropbox via la connexion OAuth par navigateur.
4. Comparez la source et la destination, puis exécutez une tâche Copy vérifiée par somme de contrôle pour terminer la migration.

Une fois le transfert confirmé comme terminé dans Job History, votre équipe peut commencer à collaborer dans Dropbox avec la certitude que rien n'est resté dans WorkDrive.

---

**Guides associés :**

- [Gérer Zoho WorkDrive avec RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Synchroniser Zoho WorkDrive avec OneDrive grâce à RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Migrer de Dropbox vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-onedrive-rcloneview)

<CloudSupportGrid />
