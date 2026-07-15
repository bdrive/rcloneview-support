---
slug: migrate-citrix-sharefile-onedrive-sharepoint-rcloneview
title: "Migrer de Citrix ShareFile vers OneDrive ou SharePoint avec RcloneView"
authors:
  - tayson
description: "Déplacez les données de votre organisation de Citrix ShareFile vers Microsoft OneDrive ou SharePoint — en toute sécurité, avec vérification par comparaison de dossiers et sans aucune perte de données — grâce à RcloneView."
keywords:
  - sharefile migration
  - sharefile to onedrive
  - citrix sharefile export
  - sharefile to sharepoint
  - migrate sharefile data
  - sharefile alternative
  - sharefile backup tool
  - citrix sharefile migration tool
  - sharefile to microsoft 365
  - sharefile data export
tags:
  - RcloneView
  - sharefile
  - onedrive
  - sharepoint
  - cloud-storage
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Citrix ShareFile vers OneDrive ou SharePoint avec RcloneView

> Vous quittez Citrix ShareFile pour Microsoft 365 ? La migration n'a pas à être un cauchemar. RcloneView vous offre un flux de travail visuel et vérifiable pour tout déplacer — sans aucune perte de données.

De nombreuses organisations consolident leur stockage de fichiers dans Microsoft 365, en remplaçant des solutions autonomes comme Citrix ShareFile par OneDrive for Business et SharePoint. Mais migrer des années de données d'entreprise, de fichiers clients et de dossiers partagés n'est pas une tâche triviale. RcloneView fournit les outils nécessaires pour rendre cette migration contrôlée, vérifiable et reproductible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les entreprises quittent ShareFile

- **Consolidation** — Microsoft 365 inclut déjà OneDrive et SharePoint. Payer séparément pour ShareFile est redondant.
- **Intégration** — OneDrive s'intègre nativement avec Teams, Outlook et les applications Office.
- **Coût** — Éliminer une licence ShareFile distincte permet de faire des économies.
- **Conformité** — Centraliser les données sur une seule plateforme simplifie la gouvernance.

Le défi réside dans la migration elle-même : comment tout déplacer sans perdre de fichiers, sans casser la structure des dossiers, ni perturber les utilisateurs actifs ?

## Connexion à ShareFile

1. Ouvrez RcloneView et cliquez sur **Add Remote**.
2. Sélectionnez **Citrix ShareFile** dans la liste des fournisseurs.
3. Authentifiez-vous avec vos identifiants ShareFile (OAuth ou clé API).
4. Enregistrez — vos dossiers et fichiers ShareFile sont désormais parcourables.

<img src="/support/images/en/blog/new-remote.png" alt="Add Citrix ShareFile remote" class="img-large img-center" />

## Stratégie de migration : quatre phases

### Phase 1 : Évaluation

Parcourez votre compte ShareFile dans l'Explorateur pour comprendre l'étendue du projet :

- Volume total de données (Go/To).
- Nombre de fichiers et profondeur des dossiers.
- Identifiez les dossiers critiques par rapport aux données archivables.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Assess ShareFile data for migration" class="img-large img-center" />

### Phase 2 : Copie initiale

Lancez la première copie complète de ShareFile vers OneDrive/SharePoint :

1. **Ajoutez OneDrive** en tant que distant (via [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)).
2. **Créez un job de copie** : ShareFile → OneDrive.
3. **Exécutez le job** — la structure des dossiers est préservée automatiquement.
4. Surveillez la progression en temps réel.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor ShareFile to OneDrive transfer" class="img-large img-center" />

### Phase 3 : Vérification

Une fois la copie terminée, vérifiez-la avec la [Comparaison de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) :

- Confirmez que tous les fichiers ont bien été transférés.
- Identifiez les éventuelles différences.
- Copiez les fichiers manquants pour combler les écarts.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify ShareFile migration completeness" class="img-large img-center" />

### Phase 4 : Synchronisation pendant la transition

Maintenez les deux systèmes synchronisés pendant que les utilisateurs effectuent la transition :

1. **Planifiez un job de synchronisation quotidien** de ShareFile → OneDrive.
2. Les nouveaux fichiers ajoutés à ShareFile apparaissent automatiquement dans OneDrive.
3. Une fois que tous les utilisateurs sont passés à OneDrive, mettez fin à ShareFile.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during migration" class="img-large img-center" />

## Après la migration : conservez une sauvegarde

Même après la migration, envisagez de conserver une sauvegarde secondaire des données OneDrive :

- Synchronisez OneDrive vers [AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3) pour une redondance hors site.
- Utilisez les [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) pour automatiser les sauvegardes multi-destinations.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez ShareFile** et **OneDrive/SharePoint** en tant que distants.
3. **Parcourez et évaluez** l'étendue de la migration.
4. **Copiez, vérifiez, synchronisez** en suivant l'approche en quatre phases.
5. **Mettez fin à ShareFile** en toute confiance.

La migration de ShareFile vers Microsoft 365 n'a pas à être un saut dans l'inconnu. RcloneView en fait un processus contrôlé et vérifié, sans aucune perte de données.

---

**Guides associés :**

- [Ajouter un distant via connexion en ligne basée sur le navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Créer des jobs de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des jobs](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
