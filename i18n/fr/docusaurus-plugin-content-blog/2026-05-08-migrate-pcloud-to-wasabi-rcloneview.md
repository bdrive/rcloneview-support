---
slug: migrate-pcloud-to-wasabi-rcloneview
title: "Migrer pCloud vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Guide étape par étape pour migrer des fichiers de pCloud vers le stockage objet Wasabi avec RcloneView. Effectuez un transfert vérifié, confirmé par checksum, sans aucune perte de données."
keywords:
  - migration pCloud vers Wasabi
  - migrer pCloud Wasabi RcloneView
  - transfert de fichiers pCloud Wasabi
  - passer de pCloud à Wasabi
  - guide de migration cloud
  - sauvegarde pCloud Wasabi
  - outil de migration S3 Wasabi
  - rclone pCloud Wasabi GUI
tags:
  - pcloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer pCloud vers Wasabi — Transférer des fichiers avec RcloneView

> Déplacez votre bibliothèque pCloud vers le stockage objet compatible S3 de Wasabi en une seule opération — vérifiée, efficace et pilotée par une interface graphique avec RcloneView.

Que vous recherchiez un meilleur tarif pour de grandes archives, la compatibilité avec l'API S3 pour vos workflows de développement, ou simplement une diversification de votre stockage cloud, migrer de pCloud vers Wasabi est un choix judicieux. RcloneView gère l'ensemble du transfert — authentification auprès des deux fournisseurs, streaming des données directement entre eux sans passer par votre disque local, et vérification des checksums à chaque étape.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer les deux remotes

Avant de migrer, ajoutez les deux fournisseurs dans RcloneView. Pour pCloud, allez dans **Remote tab → New Remote**, sélectionnez pCloud, puis effectuez la connexion OAuth via le navigateur. Pour Wasabi, sélectionnez Amazon S3 comme type de fournisseur, puis choisissez Wasabi comme point de terminaison S3. Saisissez votre Access Key ID et votre Secret Access Key Wasabi, puis sélectionnez la région appropriée (par exemple, `s3.wasabisys.com`). Les deux remotes apparaîtront dans les panneaux de l'explorateur en quelques secondes.

Ouvrez pCloud dans le panneau de gauche et votre bucket Wasabi dans le panneau de droite. Vous pouvez immédiatement parcourir les deux stockages côte à côte, en confirmant le nombre de fichiers et la structure des dossiers avant de lancer la migration.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Wasabi as remotes in RcloneView" class="img-large img-center" />

## Exécuter la migration avec vérification par checksum

Dans l'onglet **Home**, cliquez sur **Sync** pour lancer l'assistant de tâche. Définissez votre dossier pCloud comme source et le bucket Wasabi (ou sous-dossier) comme destination. À l'étape 2 (Advanced Settings), activez l'option **Checksum** — cela indique à rclone de vérifier l'intégrité des fichiers par comparaison de hachage plutôt que par simple taille et horodatage. Pour une société de production vidéo migrant 2 To de rushes bruts, cela garantit que chaque image arrive intacte.

Réglez la concurrence de transfert en fonction de votre capacité réseau (8 à 16 est un point de départ courant pour Wasabi), puis cliquez d'abord sur **Dry Run** pour prévisualiser exactement les fichiers qui seront transférés. Une fois confirmé, cliquez sur **Run** pour démarrer la migration réelle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from pCloud to Wasabi in RcloneView" class="img-large img-center" />

## Suivre la progression et vérifier l'achèvement

L'onglet **Transferring** affiche la progression en direct : fichiers transférés, taille totale et débit actuel.

Une fois la tâche terminée, consultez l'onglet **Job History** pour obtenir un résumé complet. Utilisez ensuite la fonctionnalité **Folder Compare** de RcloneView pour effectuer une comparaison finale côte à côte entre pCloud et Wasabi — filtrez pour n'afficher que les fichiers présents uniquement à gauche ou différents afin de confirmer que rien n'a été oublié. Si la comparaison est concluante, votre migration est terminée.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring the pCloud to Wasabi transfer in real time" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez pCloud (OAuth) et Wasabi (identifiants S3) comme remotes.
3. Créez une tâche de synchronisation avec le checksum activé et effectuez d'abord un dry run.
4. Exécutez la migration et vérifiez ensuite avec Folder Compare.

Migrer de pCloud vers Wasabi avec RcloneView est un processus sûr et auditable qui protège vos données à chaque étape.

---

**Guides connexes :**

- [Gérer le stockage cloud pCloud avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrations cloud vérifiées par checksum avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
