---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "Migrer de Koofr vers Backblaze B2 — Transférez vos fichiers avec RcloneView"
authors:
  - tayson
description: "Découvrez comment migrer des fichiers de Koofr vers le stockage objet Backblaze B2 avec RcloneView — avec vérification par somme de contrôle et nouvelle tentative automatique pour les transferts volumineux."
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Koofr vers Backblaze B2 — Transférez vos fichiers avec RcloneView

> Déplacez votre bibliothèque de stockage cloud Koofr vers le stockage objet Backblaze B2 en une seule tâche RcloneView — vérifiée, surveillée et reprenable en cas d'interruption.

Koofr est un service de stockage cloud européen axé sur la confidentialité, qui fait également office de hub reliant d'autres comptes cloud. Si vous consolidez vos données vers Backblaze B2 pour des raisons d'archivage ou de coût, RcloneView gère la migration directement entre les deux fournisseurs — aucun téléchargement local n'est nécessaire. Les fichiers sont diffusés depuis le backend WebDAV de Koofr, via le moteur de transfert de rclone, directement vers votre bucket B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les distants Koofr et Backblaze B2

Pour Koofr, allez dans **onglet Distant → Nouveau distant** et sélectionnez Koofr dans la liste des fournisseurs. Koofr prend en charge la connexion OAuth — RcloneView ouvre une fenêtre de navigateur pour vous permettre de vous authentifier avec votre compte Koofr. Si vous préférez un accès par mot de passe, vous pouvez générer un mot de passe d'application dans les paramètres de votre compte Koofr et l'utiliser avec votre adresse e-mail Koofr.

Pour Backblaze B2, saisissez votre Application Key ID et votre Application Key générés depuis la console B2. Indiquez le nom du bucket dans la configuration. Une fois les deux distants enregistrés, placez Koofr dans le panneau explorateur de gauche et B2 dans celui de droite pour confirmer que les deux sont accessibles.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## Exécuter la migration

Cliquez sur **Sync** dans l'onglet Accueil et configurez la tâche : dossier Koofr comme source, bucket B2 comme destination. Dans les paramètres avancés, activez **Checksum** pour la vérification d'intégrité. Koofr utilise WebDAV en interne, ce qui signifie que le listage des fichiers peut être légèrement plus lent qu'avec un S3 natif ; réglez donc le nombre de vérificateurs (checkers) sur 4 pour ne pas surcharger l'API Koofr.

Effectuez d'abord un **Dry Run** pour voir la liste complète des fichiers qui seront transférés. Cela est particulièrement utile pour les grandes bibliothèques Koofr, où Koofr agrège également des fichiers provenant d'autres comptes connectés (Google Drive, Dropbox, etc.) — le dry run vous aide à confirmer que vous migrez uniquement votre stockage Koofr réel, et non les vues miroir d'autres fournisseurs.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## Gérer les transferts interrompus

Si la migration est interrompue (coupure réseau, mise en veille de l'ordinateur, etc.), le mode Sync de RcloneView est intrinsèquement reprenable. Lorsque vous relancez la même tâche Sync, rclone compare la source et la destination et ne transfère que les fichiers absents ou différents du côté B2. Les fichiers déjà transférés n'ont pas besoin d'être renvoyés.

Une fois la migration terminée, utilisez **Folder Compare** pour vérifier que la source Koofr et la destination B2 correspondent. La vue de comparaison met en évidence tout fichier présent sur Koofr mais absent de B2, vous offrant une liste claire de ce qui nécessite une nouvelle tentative.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Koofr (OAuth) et Backblaze B2 (Application Key) comme distants.
3. Effectuez un dry run pour confirmer la portée, puis exécutez la migration avec la somme de contrôle activée.
4. Utilisez Folder Compare après la fin du processus pour vérifier que la migration a entièrement réussi.

Migrer de Koofr vers Backblaze B2 avec RcloneView est un processus fiable et reprenable qui protège l'intégrité de vos données à chaque étape.

---

**Guides connexes :**

- [Gérer le stockage cloud Koofr avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrer de Koofr vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Gérer le stockage cloud Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
