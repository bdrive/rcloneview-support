---
slug: sync-google-drive-to-box-rcloneview
title: "Synchroniser Google Drive vers Box — Sauvegarde cloud avec RcloneView"
authors:
  - kai
description: "Découvrez comment synchroniser Google Drive vers Box avec RcloneView. Transférez des fichiers entre les deux plateformes, automatisez les sauvegardes inter-cloud et gardez vos équipes synchronisées."
keywords:
  - sync Google Drive to Box
  - Google Drive Box RcloneView
  - cloud-to-cloud sync RcloneView
  - Google Drive Box backup
  - migrate Google Drive Box
  - RcloneView cross-cloud transfer
  - automate Google Drive backup Box
  - Google Workspace Box sync
  - Box cloud backup RcloneView
  - Google Drive Box file transfer
tags:
  - RcloneView
  - google-drive
  - box
  - cloud-to-cloud
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive vers Box — Sauvegarde cloud avec RcloneView

> Lorsque votre équipe stocke du contenu à la fois sur Google Workspace et sur Box, RcloneView comble l'écart sans nécessiter le moindre script.

De nombreuses organisations conservent leurs fichiers actifs dans Google Drive tandis que Box sert d'archive de conformité, de portail client ou d'espace partagé départemental. Maintenir ces deux plateformes synchronisées manuellement est source d'erreurs et prend beaucoup de temps. RcloneView propose un flux de travail par simple clic pour récupérer le contenu de Google Drive et le transférer vers Box — que vous ayez besoin d'une migration ponctuelle, d'une sauvegarde incrémentielle nocturne, ou d'une copie actualisée en continu à des fins d'audit. Les deux services étant pris en charge nativement par rclone, les transferts sont efficaces et vérifiés par somme de contrôle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Drive et Box à RcloneView

Google Drive et Box utilisent tous deux l'authentification OAuth via navigateur dans RcloneView, ce qui signifie que la configuration prend moins de deux minutes par compte. Ouvrez l'onglet Remote, cliquez sur New Remote, puis choisissez Google Drive. Une fenêtre de navigateur s'ouvre pour vous connecter à votre compte Google et accorder les autorisations — aucune clé API à créer manuellement. Répétez les mêmes étapes pour Box : New Remote, choisissez Box, et terminez le flux OAuth dans le navigateur.

Si vous travaillez avec un Google Shared Drive (Team Drive), activez l'option `shared_with_me` lors de la configuration, ou indiquez l'ID du Shared Drive comme dossier racine pour vous assurer que tout le contenu de l'équipe est visible dans le panneau Explorer. Pour les comptes Box for Business, définissez `box_sub_type = enterprise` lors de la création du distant pour débloquer les dossiers et autorisations d'entreprise.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## Effectuer un transfert cloud-à-cloud

Ouvrez Google Drive dans le panneau Explorer de gauche et Box dans celui de droite. Naviguez jusqu'au dossier source dans Google Drive — le dossier `Projects` partagé de votre équipe ou un répertoire de livrables client — puis sélectionnez les éléments que vous souhaitez copier et glissez-les vers le panneau Box. RcloneView confirme l'opération de copie et transmet les données directement entre les deux services cloud, votre machine locale ne servant que de plan de contrôle, ce qui limite l'utilisation de votre propre bande passante.

L'onglet Transferring en bas de l'écran affiche la progression en direct : vitesse actuelle, nombre de fichiers et total d'octets déplacés. Pour les transferts volumineux comprenant des présentations, des fichiers vidéo et des feuilles de calcul, le moteur multithread de RcloneView déplace plusieurs fichiers simultanément, ce qui réduit considérablement le temps de transfert total par rapport à une copie séquentielle.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## Configurer une tâche de synchronisation pour une sauvegarde continue

Pour les sauvegardes récurrentes, utilisez le Job Manager pour créer une tâche de synchronisation. Sélectionnez le dossier Google Drive comme source, un dossier Box comme destination, et configurez des règles de filtrage — par exemple, excluez les fichiers de raccourci Google Docs `.gdoc` ou limitez la synchronisation au contenu modifié au cours des 30 derniers jours. Le mode de synchronisation à sens unique écrit les modifications sur Box sans modifier le contenu de votre Google Drive, ce qui permet de l'exécuter en toute sécurité sur un espace de travail de production actif.

Avant la première exécution réelle, utilisez l'option Dry Run pour prévisualiser exactement quels fichiers seront copiés ou écrasés. Job History enregistre chaque exécution avec horodatages, tailles de transfert et codes de statut, offrant aux équipes de conformité une piste d'audit claire à consulter.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## Automatiser avec la synchronisation planifiée (licence PLUS)

Avec une licence PLUS, vous pouvez planifier l'exécution automatique de la synchronisation Google Drive → Box selon n'importe quel intervalle crontab — chaque nuit à minuit, chaque lundi matin, ou selon une fréquence personnalisée requise par votre politique informatique. Renseignez les champs Minute, Hour et Day-of-Week dans l'étape Schedule de l'assistant de création de tâche. Chaque exécution est enregistrée dans Job History avec horodatages et codes de statut, afin que votre équipe de conformité puisse vérifier exactement quand les synchronisations ont eu lieu et si elles ont réussi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre compte Google Drive via Remote tab > New Remote > Google Drive (connexion OAuth via navigateur).
3. Ajoutez votre compte Box via Remote tab > New Remote > Box (connexion OAuth via navigateur).
4. Ouvrez les deux distants côte à côte dans les panneaux Explorer, glissez-déposez des fichiers pour une copie immédiate, ou créez une tâche de synchronisation dans le Job Manager pour un flux de travail reproductible.
5. Activez la planification (licence PLUS) pour automatiser la synchronisation de manière récurrente et configurez les notifications de fin d'exécution.

Une synchronisation Google Drive vers Box bien entretenue garde votre archive de conformité à jour et votre accès aux fichiers inter-plateformes cohérent — RcloneView en fait une configuration de cinq minutes.

---

**Guides connexes :**

- [Gérer la synchronisation cloud et la sauvegarde Google Drive avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gérer la synchronisation cloud et la sauvegarde Box avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Synchroniser Box vers Google Drive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
