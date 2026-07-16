---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "Migrer de pCloud vers Backblaze B2 — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Guide étape par étape pour migrer des fichiers de pCloud vers Backblaze B2 avec RcloneView. Connectez-vous via OAuth et App Key, prévisualisez avec Dry Run, puis exécutez la tâche de synchronisation."
keywords:
  - migrer pCloud vers Backblaze B2
  - transfert pCloud Backblaze B2
  - migration pCloud RcloneView
  - synchronisation pCloud vers B2
  - migration cloud à cloud
  - archivage Backblaze B2
  - alternative de sauvegarde pCloud
  - migration cloud RcloneView
tags:
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de pCloud vers Backblaze B2 — Transférer des fichiers avec RcloneView

> Passer de pCloud à Backblaze B2 vous offre un stockage d'archivage nettement moins cher — RcloneView gère le transfert cloud à cloud sans faire transiter les données par votre machine.

pCloud est un service de stockage cloud personnel fiable proposant des offres à vie, mais pour archiver de gros volumes de données, la tarification au Go de Backblaze B2 est souvent plus rentable. Que vous consolidiez vos services cloud ou que vous ajoutiez B2 comme niveau d'archivage, RcloneView simplifie la migration : connectez les deux fournisseurs, prévisualisez avec Dry Run, puis exécutez la tâche de synchronisation. Le transfert se fait entièrement de cloud à cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Étape 1 — Connecter pCloud

Ouvrez RcloneView et allez dans **Remote Manager**. Cliquez sur **New Remote** et sélectionnez **pCloud** dans la liste des fournisseurs. pCloud utilise une connexion OAuth via navigateur — RcloneView ouvre votre navigateur, vous vous connectez et autorisez l'accès, et le jeton est enregistré. Aucune clé API à gérer manuellement.

Après l'autorisation, ouvrez le distant pCloud dans l'explorateur de fichiers pour confirmer que vous voyez bien vos fichiers et dossiers. Notez les répertoires de premier niveau que vous souhaitez migrer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Étape 2 — Connecter Backblaze B2

Toujours dans **Remote Manager**, cliquez à nouveau sur **New Remote** et sélectionnez **Backblaze B2**. Backblaze B2 s'authentifie avec un **Application Key ID** et une **Application Key** — tous deux disponibles dans la console Backblaze sous **App Keys**. Créez une clé avec les permissions appropriées (lecture et écriture sur le bucket cible, ou tous les buckets s'il s'agit d'une migration). Saisissez les deux valeurs dans RcloneView et enregistrez.

Ouvrez le distant B2 pour confirmer qu'il charge bien vos buckets. Si le bucket cible n'existe pas encore, vous pouvez le créer directement depuis l'explorateur de fichiers de RcloneView en faisant un clic droit au niveau racine.

## Étape 3 — Configurer la tâche de migration

Allez dans **Jobs** et cliquez sur **New Job**. Définissez pCloud comme source et sélectionnez le dossier spécifique ou la racine. Définissez Backblaze B2 comme destination et choisissez le bucket et le chemin cibles.

À l'étape 2 de l'assistant de tâche, passez en revue les options de transfert :

- Activez d'abord **Dry Run** pour voir exactement ce qui sera copié
- Réglez **transfers** entre 4 et 8 pour un bon équilibre entre vitesse et stabilité de l'API
- Activez la **vérification par somme de contrôle** si vous souhaitez confirmer l'intégrité des fichiers après le transfert

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## Étape 4 — Exécuter Dry Run, puis la migration réelle

Avec Dry Run activé, cliquez sur **Run**. RcloneView journalise ce qu'il transférerait — noms de fichiers, tailles et nombres — sans effectuer aucune modification. Consultez le résultat dans l'onglet **Log**. Si la liste vous semble correcte, retournez dans les paramètres de la tâche, désactivez Dry Run, puis relancez.

La migration réelle s'exécute de cloud à cloud : pCloud envoie les données à B2 sans passer par votre machine locale, si bien que votre bande passante locale n'est pas un goulot d'étranglement. La vitesse de transfert dépend des serveurs des deux fournisseurs.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## Vérifier la migration

Une fois la tâche terminée, ouvrez l'outil **Folder Compare** et pointez-le vers la source pCloud et la destination B2. RcloneView compare les deux côtés et met en évidence toute divergence. Pour des données à forte valeur, cette étape confirme que la migration est complète avant de supprimer les fichiers de pCloud.

L'historique des tâches (Job History) enregistre l'exécution complète : nombre total de fichiers, volume de données transférées, durée et éventuelles erreurs. Conservez-le pour référence.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez pCloud via OAuth et Backblaze B2 via Application Key dans **Remote Manager**.
3. Créez une tâche de synchronisation avec pCloud comme source et B2 comme destination ; effectuez d'abord un Dry Run.
4. Désactivez Dry Run et exécutez la migration ; vérifiez avec Folder Compare.

Une fois la migration confirmée, Backblaze B2 vous offre un stockage d'archivage durable et économique pour tout ce qui se trouvait dans pCloud.

---

**Guides connexes :**

- [Sauvegarder pCloud vers AWS S3 avec RcloneView](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Migrer de pCloud vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
