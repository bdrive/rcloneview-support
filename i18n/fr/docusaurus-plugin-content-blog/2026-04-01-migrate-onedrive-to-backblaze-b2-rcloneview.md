---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "Migrer OneDrive vers Backblaze B2 pour une sauvegarde cloud économique avec RcloneView"
authors:
  - tayson
description: "Réduisez vos coûts de stockage en migrant vos fichiers OneDrive vers Backblaze B2 avec RcloneView. Guide étape par étape pour transférer vos données personnelles ou professionnelles vers un stockage compatible S3 moins cher."
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer OneDrive vers Backblaze B2 pour une sauvegarde cloud économique avec RcloneView

> Les coûts de stockage OneDrive peuvent vite s'accumuler — en particulier pour les équipes ou les particuliers disposant de téraoctets de données d'archives. Backblaze B2 propose un stockage objet compatible S3 à une fraction du prix. RcloneView simplifie la migration.

OneDrive est pratique pour la collaboration active, mais ce n'est pas le choix le plus économique pour les archives à long terme, les sauvegardes froides ou les grandes collections multimédias. À environ 0,006 $/Go par mois, Backblaze B2 est nettement moins cher que les forfaits par utilisateur d'OneDrive pour les données rarement consultées. Déplacer les données d'archives d'OneDrive vers Backblaze B2 — tout en conservant les fichiers de travail actifs dans OneDrive — est une stratégie d'optimisation des coûts intelligente, que RcloneView permet de réaliser sans aucune expertise en ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Quand cette migration est-elle pertinente ?

- Vous dépassez votre quota de stockage Microsoft 365 et souhaitez éviter une mise à niveau.
- Vous avez de grandes archives multimédias (photos, vidéos, fichiers de projet) stockées dans OneDrive et rarement consultées.
- Vous remplacez OneDrive par Backblaze B2 comme destination principale de sauvegarde.
- Vous souhaitez un stockage compatible S3 avec prise en charge native de rclone et sans frais de sortie vers d'autres régions.

## Comparaison des coûts : OneDrive vs Backblaze B2

| Stockage | 1 To/mois | 5 To/mois |
|---------|-----------|-----------|
| OneDrive (Microsoft 365) | ~9,99 $/utilisateur | ~50 $+ (limites par utilisateur) |
| Backblaze B2 | ~6,00 $ | ~30,00 $ |

Pour les utilisateurs disposant de nombreuses archives, Backblaze B2 peut réduire votre facture de stockage de 40 à 60 %.

## Étape 1 — Connecter OneDrive dans RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. Ouvrez RcloneView et cliquez sur **New Remote**.
2. Sélectionnez **Microsoft OneDrive**.
3. Cliquez sur **Authorize** — une fenêtre de navigateur s'ouvre pour l'authentification OAuth Microsoft.
4. Connectez-vous et accordez l'accès.
5. Choisissez votre type de OneDrive (Personal, Business ou SharePoint) et enregistrez le distant sous le nom `onedrive`.

## Étape 2 — Connecter Backblaze B2 dans RcloneView

1. Connectez-vous au [tableau de bord Backblaze](https://www.backblaze.com) et accédez à **App Keys**.
2. Créez une nouvelle clé d'application avec un accès **Read and Write** au bucket cible.
3. Notez le **keyID** et l'**applicationKey**.
4. Dans RcloneView, ajoutez un nouveau distant de type **Backblaze B2**.
5. Saisissez le keyID et l'applicationKey, nommez-le `b2`, puis enregistrez.

## Étape 3 — Créer le bucket cible

Dans Backblaze B2, créez le bucket de destination avant de migrer :

- **Nom du bucket** : choisissez un nom unique (par ex. `onedrive-archive-2026`)
- **Type de bucket** : Private (pour les sauvegardes personnelles) ou Public (pour la diffusion de médias)
- **Versioning** : Optionnel — permet de récupérer les fichiers écrasés

## Étape 4 — Lancer la migration

Ouvrez **Jobs** dans RcloneView et configurez :

| Paramètre | Valeur |
|---------|-------|
| Source | `onedrive:/Archives/` (ou le dossier que vous migrez) |
| Destination | `b2:onedrive-archive-2026/` |
| Mode | **Copy** (conserve la copie OneDrive jusqu'à vérification) |
| Transferts | 4 à 8 en parallèle (à ajuster selon votre bande passante) |
| Somme de contrôle | Activée |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

Cliquez sur **Run**. RcloneView affiche la progression fichier par fichier, la vitesse de transfert et le temps estimé restant.

## Étape 5 — Vérifier la migration avec la comparaison de dossiers

Une fois le job terminé, utilisez la **Folder Comparison** de RcloneView pour vérifier que chaque fichier OneDrive est bien arrivé dans B2 :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

Les écarts éventuels apparaissent en surbrillance. Relancez le job — rclone ignore les fichiers déjà présents et ne retransfère que ceux qui manquent.

## Étape 6 — Planifier des sauvegardes continues (facultatif)

Si vous souhaitez conserver B2 comme sauvegarde en direct de OneDrive :

1. Passez le mode du job de Copy à **Sync**.
2. Ouvrez **Schedule** et définissez un intervalle récurrent (par ex. toutes les nuits à 2 h).
3. Les fichiers OneDrive nouveaux ou modifiés seront sauvegardés automatiquement vers B2.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## Conseils pour les migrations OneDrive volumineuses

- **Migrez dossier par dossier** — découpez les gros comptes en blocs de 100 à 500 Go.
- **Évitez les heures de pointe** — Microsoft limite l'accès à l'API OneDrive en cas de forte charge.
- **Utilisez des limites de bande passante** — définissez une limite dans RcloneView pour ne pas impacter le travail quotidien pendant les heures de bureau.
- **Gardez OneDrive actif** — ne supprimez pas les fichiers de OneDrive tant que B2 n'est pas vérifié.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez les distants OneDrive et Backblaze B2** via l'assistant de configuration de RcloneView.
3. **Créez votre bucket B2** dans le tableau de bord Backblaze.
4. **Copiez, vérifiez, puis décidez** de conserver OneDrive comme stockage actif ou de basculer entièrement vers B2.

Moins de dépendance à Microsoft, des coûts réduits et une compatibilité S3 — Backblaze B2 est une excellente zone d'atterrissage pour les archives OneDrive.

---

**Guides connexes :**

- [Sauvegarder Dropbox vers Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migrer Google Drive vers OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Coûts cachés du stockage cloud — Économisez avec RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
