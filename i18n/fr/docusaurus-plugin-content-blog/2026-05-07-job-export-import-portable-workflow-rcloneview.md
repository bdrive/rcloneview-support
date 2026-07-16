---
slug: job-export-import-portable-workflow-rcloneview
title: "Exportation et importation de tâches — Workflows de synchronisation portables dans RcloneView"
authors:
  - tayson
description: "Découvrez comment exporter et importer des tâches de synchronisation dans RcloneView pour partager des workflows entre machines, standardiser les configurations d'équipe et récupérer après une migration système."
keywords:
  - exportation de tâches RcloneView
  - importation de tâches de synchronisation
  - workflow de synchronisation portable
  - exportation du gestionnaire de tâches
  - configuration de synchronisation d'équipe
  - sauvegarde des tâches de synchronisation
  - migration des tâches RcloneView
  - portabilité des tâches
tags:
  - RcloneView
  - feature
  - job-management
  - automation
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exportation et importation de tâches — Workflows de synchronisation portables dans RcloneView

> RcloneView vous permet d'exporter toutes vos tâches de synchronisation vers un fichier JSON et de les importer sur n'importe quelle autre machine — rendant vos workflows véritablement portables et les configurations de votre équipe cohérentes.

Configurer des tâches de synchronisation complexes prend du temps : choisir les bons remotes source et destination, configurer des filtres, définir des limites de bande passante et ajuster les options pour chaque tâche. La dernière chose que vous voulez, c'est refaire ce travail lorsque vous passez à un nouvel ordinateur, ajoutez un second poste de travail, ou intégrez un nouveau membre à votre équipe. La fonctionnalité d'exportation et d'importation de tâches de RcloneView résout ce problème en capturant toute votre configuration de tâches dans un fichier JSON portable, pouvant être chargé sur n'importe quelle installation de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Exporter vos tâches de synchronisation

Pour exporter vos tâches, ouvrez le **Job Manager** dans RcloneView et recherchez l'option **Export** dans la barre d'outils ou le menu contextuel. RcloneView exporte toutes les tâches de synchronisation configurées — y compris leurs chemins source/destination, règles de filtrage, indicateurs rclone et informations de planification — dans un unique fichier JSON. Vous choisissez où enregistrer ce fichier.

Il est recommandé d'exporter régulièrement vos tâches dans le cadre de votre stratégie de sauvegarde globale. Stockez le fichier JSON exporté dans un dossier cloud (par exemple, votre bucket de sauvegarde Google Drive ou Backblaze B2) afin qu'il reste toujours accessible, quoi qu'il arrive à votre machine locale. Considérez cela comme une sauvegarde de votre configuration de sauvegarde.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## Importer des tâches sur une nouvelle machine

Sur la machine de destination, installez RcloneView depuis [rcloneview.com](https://rcloneview.com/src/download.html) et configurez les remotes cloud nécessaires (les mêmes noms de remotes doivent exister pour que les tâches importées fonctionnent correctement). Ouvrez ensuite le **Job Manager** et utilisez la fonction **Import** pour charger votre fichier JSON exporté. Toutes vos tâches de synchronisation apparaissent immédiatement, prêtes à être exécutées.

Ce workflow est particulièrement précieux après une migration d'ordinateur. Au lieu de recréer manuellement une douzaine de tâches de synchronisation, l'importation prend quelques secondes. Le même processus fonctionne pour la standardisation d'équipe : un chef d'équipe crée et exporte une configuration de tâches canonique, puis distribue le fichier JSON à tous les membres de l'équipe, qui l'importent dans leurs propres installations de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## Standardisation d'équipe et reprise après sinistre

Pour les équipes gérant plusieurs destinations cloud, la cohérence de la configuration des tâches de synchronisation est essentielle. Si chaque membre de l'équipe configure ses propres tâches manuellement, des divergences dans les règles de filtrage ou les chemins de destination peuvent entraîner des fichiers manquants ou des écrasements involontaires. En maintenant un fichier d'exportation de tâches maître et en l'important sur toutes les machines de l'équipe, vous garantissez que tout le monde exécute des workflows identiques.

La fonctionnalité d'exportation/importation sert également de mécanisme léger de reprise après sinistre pour votre configuration de synchronisation. Si RcloneView doit être réinstallé ou qu'une machine est remplacée, la restauration de l'ensemble de votre workflow se fait en deux étapes : importer la configuration des remotes rclone et importer le JSON des tâches. L'exportation/importation de RcloneView est disponible dans la formule gratuite — aucune licence PLUS n'est requise pour cette fonctionnalité.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez vos tâches de synchronisation dans le **Job Manager** sur votre machine principale.
3. Utilisez **Export** dans le Job Manager pour enregistrer toutes les tâches dans un fichier JSON.
4. Stockez le fichier d'exportation dans un emplacement de sauvegarde cloud pour le conserver en lieu sûr.
5. Sur une nouvelle machine, installez RcloneView, configurez des noms de remotes correspondants, puis **Importez** le JSON pour restaurer toutes les tâches.

L'exportation et l'importation de tâches font de RcloneView une plateforme de synchronisation véritablement portable — une plateforme où votre investissement dans le workflow n'est jamais lié à une seule machine.

---

**Guides connexes :**

- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Sauvegarder et migrer la configuration Rclone avec RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Opérations par lots dans RcloneView](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
