---
slug: migrate-pcloud-to-cloudflare-r2-rcloneview
title: "Migrer de pCloud vers Cloudflare R2 — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Déplacez vos fichiers pCloud vers Cloudflare R2 avec RcloneView. Aperçu visuel en dry-run, vérification par somme de contrôle et transferts planifiés — sans ligne de commande."
keywords:
  - migration pCloud vers Cloudflare R2
  - migrer pCloud vers R2
  - transfert pCloud Cloudflare R2
  - outil de migration de stockage cloud
  - rclone pCloud R2 GUI
  - migration cloud à cloud RcloneView
  - outil de migration compatible S3
  - sauvegarde pCloud vers Cloudflare R2
  - migration cloud sans frais de sortie
  - transfert de fichiers entre fournisseurs
tags:
  - pcloud
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de pCloud vers Cloudflare R2 — Transférer des fichiers avec RcloneView

> Les offres à vie de pCloud sont attrayantes, mais la tarification sans frais de sortie de Cloudflare R2 en fait une destination puissante pour les équipes qui font évoluer leur stockage — et RcloneView rend la migration visuelle, vérifiée et reproductible.

De nombreuses équipes commencent avec pCloud pour ses généreuses options de stockage européennes et sa tarification à vie, puis découvrent Cloudflare R2 à mesure que leur infrastructure cloud se développe. L'API compatible S3 de R2 et l'absence de frais de sortie en font une couche de stockage naturelle pour l'archivage ou en complément d'un CDN. Migrer entre les deux impliquait auparavant de jongler avec des options en ligne de commande. L'interface à double panneau de RcloneView gère l'intégralité du transfert — avec aperçu en dry-run, vérification par somme de contrôle et historique des tâches — sans une seule commande de terminal. RcloneView gère plus de 90 fournisseurs cloud depuis une seule fenêtre, sur Windows, macOS et Linux, si bien que pCloud et R2 cohabitent dans le même explorateur de fichiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter pCloud et Cloudflare R2 en tant que distants

pCloud se connecte via une authentification OAuth dans le navigateur. Dans RcloneView, accédez à **Onglet Remote > New Remote**, choisissez pCloud dans la liste des fournisseurs, puis authentifiez-vous dans votre navigateur. En quelques secondes, vos fichiers pCloud apparaissent comme un distant navigable dans le panneau Explorer — aucune clé API à copier, aucun identifiant à stocker manuellement.

Cloudflare R2 se connecte comme un distant compatible S3. Vous aurez besoin d'un **API Token** avec des permissions de lecture/écriture R2, de votre **Account ID**, et de l'URL du point de terminaison (au format `https://<account-id>.r2.cloudflarestorage.com`, disponible dans votre tableau de bord Cloudflare). Saisissez ces informations dans les champs d'identifiants lors de l'ajout du nouveau distant.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Cloudflare R2 as remotes in RcloneView" class="img-large img-center" />

Une fois les deux distants enregistrés, ouvrez-les dans des panneaux Explorer adjacents à l'aide de la barre d'onglets. Vous pouvez parcourir les deux simultanément et copier des fichiers individuels entre eux par un clic droit ou un glisser-déposer — chaque glisser-déposer entre différents distants est traité comme une opération de copie.

## Exécuter la migration de pCloud vers R2

Pour une migration complète de dossier, utilisez le workflow **Sync** plutôt que le glisser-déposer. Cliquez sur le bouton **Sync** dans l'onglet Home et configurez la tâche dans l'assistant en quatre étapes :

- **Source :** Votre distant pCloud et le dossier de premier niveau à migrer
- **Destination :** Votre bucket Cloudflare R2
- **Enable checksum :** Compare les fichiers par hachage plutôt que par la seule taille et date de modification — essentiel pour vérifier l'intégrité des données entre fournisseurs

Avant de lancer le transfert réel, cliquez sur **Dry Run** pour prévisualiser chaque fichier qui sera copié. Cela permet de détecter les mauvaises configurations — comme pointer vers le mauvais bucket — avant que la moindre donnée ne soit déplacée. La liste du dry-run indique précisément quels fichiers seraient ajoutés, mis à jour ou supprimés.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from pCloud to Cloudflare R2 in RcloneView" class="img-large img-center" />

Une fois satisfait de l'aperçu, lancez la tâche. L'onglet **Transferring** en bas affiche la progression en direct : fichiers transférés, vitesse et toute erreur par fichier nécessitant une attention.

## Vérifier le transfert et planifier une synchronisation continue

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Cloudflare R2 sync job in RcloneView" class="img-large img-center" />

Une fois la migration terminée, ouvrez **Job History** pour confirmer que chaque fichier a bien été transféré. La vue historique affiche la taille totale transférée, la durée, le nombre de fichiers et le statut final — Completed, Errored ou Canceled — offrant une piste d'audit claire.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history to verify the pCloud to Cloudflare R2 migration" class="img-large img-center" />

Si vous souhaitez garder R2 synchronisé avec pCloud à mesure que de nouveaux fichiers arrivent, ajoutez une planification de type crontab à la tâche de synchronisation (licence PLUS). Vous pouvez également utiliser la synchronisation 1:N de RcloneView pour pousser le même dossier pCloud vers R2 et Backblaze B2 simultanément — utile pour des stratégies d'archivage redondant où vous souhaitez à la fois un stockage objet et une copie séparée en stockage froid.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre compte pCloud via **Onglet Remote > New Remote** et effectuez l'authentification OAuth dans le navigateur.
3. Ajoutez Cloudflare R2 comme distant compatible S3 à l'aide de votre API Token, de votre Account ID et de l'URL du point de terminaison.
4. Créez une tâche Sync depuis votre dossier pCloud vers votre bucket R2, lancez un Dry Run pour prévisualiser, puis exécutez la migration complète.

Avec RcloneView qui gère la logique de transfert, le suivi en direct des transferts et l'historique des tâches, une migration de pCloud vers R2 devient un workflow reproductible et auditable — et non plus un projet ponctuel en ligne de commande.

---

**Guides associés :**

- [Gérer le stockage pCloud — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gérer le stockage Cloudflare R2 — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Migrer de Dropbox vers Cloudflare R2 avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
