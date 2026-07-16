---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "Migrer de Backblaze B2 vers Cloudflare R2 — Transférez vos fichiers avec RcloneView"
authors:
  - alex
description: "Migrez votre stockage objet Backblaze B2 vers Cloudflare R2 avec RcloneView. Guide GUI étape par étape avec vérification par somme de contrôle, sans aucune commande CLI."
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Backblaze B2 vers Cloudflare R2 — Transférez vos fichiers avec RcloneView

> Déplacer un bucket B2 vers Cloudflare R2 est une opération de cloud à cloud simple dans RcloneView — ajoutez les deux remotes, configurez une tâche de copie et vérifiez l'intégrité avec la comparaison de sommes de contrôle.

Backblaze B2 et Cloudflare R2 sont tous deux des plateformes de stockage objet compatibles S3 très répandues, et de nombreuses équipes doivent déplacer des données entre elles à mesure que leurs besoins d'infrastructure évoluent. Plutôt que de télécharger les données localement puis de les réimporter, RcloneView effectue le transfert côté serveur via le moteur cloud-à-cloud de rclone — vous permettant de migrer des buckets entiers via une interface graphique sans écrire la moindre commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Backblaze B2 et Cloudflare R2 comme remotes

Avant de lancer la migration, connectez les deux comptes de stockage dans RcloneView.

**Backblaze B2 :** Ouvrez **Remote** > **New Remote**, sélectionnez Backblaze B2, puis saisissez votre Application Key ID et votre Application Key. RcloneView listera vos buckets B2 dans l'explorateur une fois enregistré.

**Cloudflare R2 :** Ajoutez un second remote, choisissez Cloudflare R2, puis renseignez votre API Token, votre Account ID et l'endpoint R2. Comme pour B2, vos buckets R2 apparaîtront immédiatement dans l'explorateur.

Une fois les deux remotes connectés, vous pouvez les parcourir côte à côte dans l'interface à double volet de RcloneView et confirmer que le bucket source et le bucket de destination sont corrects avant de démarrer la migration.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Lancer la migration de cloud à cloud

Ouvrez **Job Manager** et créez une nouvelle tâche de copie ou de synchronisation. Définissez votre bucket Backblaze B2 (ou un préfixe spécifique à l'intérieur) comme source et le bucket Cloudflare R2 comme destination.

Dans l'étape Advanced Settings, configurez le nombre de transferts de fichiers simultanés en fonction de votre capacité réseau — des valeurs plus élevées accélèrent les buckets comportant de nombreux petits fichiers, tandis que les grandes archives multimédias tirent parti des transferts multi-threads. Activez la **vérification par somme de contrôle** pour vous assurer que B2 et R2 s'accordent sur l'intégrité des fichiers via une comparaison de hachage plutôt que de se fier uniquement à la taille et à la date de modification.

Exécutez un **Dry Run** avant le transfert réel. L'aperçu affiche chaque objet qui sera copié, vous permettant de repérer toute correspondance de filtre inattendue ou tout problème de chemin avant de valider.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Suivre le transfert en temps réel

Une fois la tâche démarrée, l'onglet **Transferring** dans l'Info View en bas affiche la progression en direct : vitesse de transfert par fichier, débit global, et le nombre d'objets terminés par rapport à ceux restants. Pour les grands buckets B2 — une archive vidéo comptant des dizaines de milliers de fichiers, par exemple — la vue en temps réel vous permet de repérer rapidement tout blocage et d'annuler ou d'ajuster si nécessaire.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

Une fois le transfert terminé, consultez l'onglet **Job History** pour un résumé complet : taille totale déplacée, vitesse de transfert, nombre de fichiers et statut final. Une exécution vérifiée par somme de contrôle affichant zéro erreur signifie que votre bucket R2 est une copie exacte, octet pour octet, des données B2 source.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

Avec une **licence PLUS**, vous pouvez planifier des tâches de synchronisation incrémentale pour maintenir R2 à jour à mesure que de nouveaux objets sont ajoutés à B2 pendant une transition progressive — en effectuant la migration par vagues plutôt qu'en un seul grand lot.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre compte Backblaze B2 via **Remote** > **New Remote** (Application Key ID + Application Key).
3. Ajoutez votre compte Cloudflare R2 (API Token + Account ID + Endpoint).
4. Ouvrez **Job Manager**, créez une tâche de copie de B2 vers R2, et activez la vérification par somme de contrôle.
5. Exécutez d'abord un Dry Run, puis lancez la migration réelle et consultez les résultats dans Job History.

RcloneView élimine le besoin d'expertise en ligne de commande ou de stockage local intermédiaire — vos données B2 sont transférées directement vers R2 avec une vérification d'intégrité complète intégrée.

---

**Guides connexes :**

- [Gérer le stockage cloud Backblaze B2 — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Cloudflare R2 — Synchronisation avec RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Migrer de Cloudflare R2 vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
