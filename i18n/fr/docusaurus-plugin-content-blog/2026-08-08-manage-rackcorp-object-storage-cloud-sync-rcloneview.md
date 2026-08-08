---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "Gérer le stockage objet RackCorp — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - tayson
description: "Connectez le stockage objet compatible S3 de RackCorp à RcloneView pour la navigation de fichiers par glisser-déposer, la synchronisation planifiée et la sauvegarde inter-cloud."
keywords:
  - stockage objet RackCorp
  - RackCorp S3
  - RcloneView RackCorp
  - gérer les fichiers RackCorp
  - sauvegarde cloud RackCorp
  - synchronisation RackCorp
  - GUI de stockage compatible S3
  - client GUI de stockage objet
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage objet RackCorp — Synchroniser et sauvegarder des fichiers avec RcloneView

> Parcourez, synchronisez et sauvegardez les buckets de stockage objet RackCorp avec le même flux de glisser-déposer que celui utilisé pour chaque autre cloud dans RcloneView.

Le stockage objet compatible S3 de RackCorp offre aux équipes une alternative régionale face aux grands hyperscalers, mais gérer des buckets signifie généralement jongler entre des outils CLI distincts ou un onglet de console dans le navigateur. RcloneView se connecte à RackCorp via le protocole S3 de rclone et place vos buckets dans la même fenêtre d'explorateur que Google Drive, OneDrive ou tout autre remote que vous gérez déjà. Contrairement aux outils qui ne font que monter des lecteurs, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter RackCorp à RcloneView

Le stockage objet RackCorp s'ajoute comme n'importe quel autre fournisseur compatible S3 : ouvrez l'onglet Remote > New Remote, sélectionnez l'option compatible S3, puis saisissez votre Access Key ID, votre Secret Access Key et l'URL de l'endpoint RackCorp. RcloneView transmet ces identifiants directement à la configuration de rclone, il n'y a donc aucun pilote ou plugin séparé à installer — le binaire rclone intégré gère la négociation du protocole.

Une fois le remote créé, il apparaît comme un nouvel onglet dans le panneau Explorer. Vous pouvez parcourir les buckets en List View pour des métadonnées détaillées, ou passer en Thumbnail View si vous stockez des images et souhaitez un aperçu visuel rapide. L'arborescence de dossiers à gauche vous permet de naviguer entre les préfixes sans avoir à ressaisir les chemins.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau remote compatible S3 pour le stockage objet RackCorp dans RcloneView" class="img-large img-center" />

Faites un clic droit sur n'importe quel objet dans la liste de fichiers pour accéder à Copy, Cut, Rename, Get Size ou Get Public Link — le même menu contextuel que vous utiliseriez pour des fichiers locaux, appliqué directement à votre bucket RackCorp.

## Synchroniser RackCorp avec d'autres clouds

Le stockage objet est rarement utilisé de manière isolée. Un schéma courant consiste à conserver une copie de travail dans Google Drive ou OneDrive pour l'édition quotidienne, tout en archivant les ressources terminées vers RackCorp pour une conservation moins coûteuse et à long terme. L'assistant Sync en 4 étapes de RcloneView gère cela sans toucher à un terminal : choisissez RackCorp comme source ou destination, définissez des filtres pour exclure les fichiers temporaires ou les ressources trop volumineuses, puis choisissez la synchronisation unidirectionnelle afin que l'archive ne reçoive que du nouveau contenu.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'un job de synchronisation cloud à cloud entre RackCorp et un autre remote dans RcloneView" class="img-large img-center" />

Avant de lancer un transfert complet, exécutez un Dry Run pour prévisualiser exactement les fichiers qui seront copiés ou supprimés. C'est particulièrement utile avec le stockage objet, où le re-téléversement accidentel de gros buckets peut gaspiller bande passante et temps.

## Automatiser les sauvegardes avec des jobs planifiés

Pour les équipes disposant d'une licence PLUS, les jobs de synchronisation RackCorp peuvent s'exécuter selon une planification de type crontab plutôt que de nécessiter un déclenchement manuel à chaque fois. Définissez une fois les champs minute, heure et jour de la semaine, et RcloneView maintient votre bucket RackCorp à jour en arrière-plan — consultez ensuite l'onglet Job History pour confirmer le statut, la vitesse de transfert et le nombre de fichiers de chaque exécution.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuration d'un job de synchronisation planifié pour le stockage objet RackCorp dans RcloneView" class="img-large img-center" />

Activez la vérification par somme de contrôle dans l'étape Advanced Settings si l'intégrité des données compte plus que la vitesse brute — RcloneView compare les hachages de fichiers plutôt que la seule taille et l'horodatage, détectant ainsi la corruption silencieuse pendant le transfert.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Allez dans l'onglet Remote > New Remote et sélectionnez l'option compatible S3 pour RackCorp.
3. Saisissez votre Access Key ID, votre Secret Access Key et l'endpoint RackCorp pour vous connecter.
4. Configurez un job de synchronisation ou de sauvegarde pour maintenir RackCorp synchronisé avec vos autres remotes cloud.

Une fois connecté, RackCorp se comporte comme n'importe quel autre onglet de votre espace de travail RcloneView — pas de console séparée, pas de paramètres CLI à mémoriser.

---

**Guides associés :**

- [Gérer le stockage objet Scaleway — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gérer le stockage cloud Selectel — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [Cache VFS — Des performances de montage cloud plus rapides dans RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
