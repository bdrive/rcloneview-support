---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "Synchroniser Yandex Disk avec Google Drive avec RcloneView — Un workflow multi-cloud simplifié"
authors:
  - tayson
description: "Connectez Yandex Disk et Google Drive, prévisualisez les différences, et exécutez des synchronisations planifiées avec vérification par checksum dans RcloneView."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud sync
  - rclone sync
  - multi cloud
  - checksum verification
  - scheduler
  - compare
  - mount
  - webdav
  - backup
  - migration
  - gui
  - cloud to cloud
  - transfer monitor
  - job history
  - bandwidth limits
  - dry run
  - sync jobs
tags:
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Yandex Disk avec Google Drive avec RcloneView — Un workflow multi-cloud simplifié

> Déplacez et synchronisez des fichiers entre Yandex Disk et Google Drive sans toucher aux options de ligne de commande. RcloneView vous offre des comparaisons côte à côte, des tâches vérifiées par checksum, et un planificateur pour garder les deux clouds synchronisés.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi synchroniser Yandex Disk et Google Drive ?

- Consolidez des dossiers dispersés entre comptes personnels et d'équipe.
- Maintenez un miroir en direct pour la redondance ou l'accès régional.
- Préparez les migrations en toute sécurité avec des aperçus, des essais à blanc (dry-run) et des checksums avant le basculement.
- Réduisez la dépendance à un fournisseur : conservez une copie vérifiée dans un autre cloud sans exports manuels.
- Maintenez la disponibilité : si un fournisseur limite le débit, l'autre reste utilisable.

## Étape 1 — Connecter les deux distants

- Ajoutez Yandex Disk (WebDAV ou OAuth) via `+ New Remote`. Guide : [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Ajoutez Google Drive avec le même processus ; choisissez la bonne portée (My Drive ou Shared Drive).
- Vérifiez les deux dans **Remote Explorer** pour vous assurer que les chemins et les permissions sont corrects.
- Vérifications facultatives : confirmez la cohérence du fuseau horaire et de l'heure de modification sur quelques fichiers de test pour éviter des écrasements inattendus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Étape 2 — Comparer avant de synchroniser

- Ouvrez **Compare** pour voir ce qui diffère entre Yandex Disk et Google Drive : [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filtrez par extensions si vous souhaitez vous concentrer sur les documents, médias ou archives.
- Enregistrez la comparaison comme tâche afin de pouvoir relancer les vérifications après chaque synchronisation.
- Utilisez la comparaison comme essai à blanc (dry-run) : elle montre les ajouts/mises à jour/suppressions sans modifier les données.
- Si vous observez des suppressions inattendues, changez votre tâche pour `copy` (et non `sync`) jusqu'à ce que vous soyez confiant.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## Étape 3 — Créer une tâche de synchronisation sécurisée

- Créez une tâche de Yandex Disk vers Google Drive (ou bidirectionnelle si nécessaire) : [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Commencez par **copy** pour la première exécution afin d'éviter des suppressions involontaires ; passez à **sync** une fois validé.
- Activez la vérification par checksum pour détecter toute corruption silencieuse.
- Excluez les dossiers temporaires/cache pour ne déplacer que ce qui compte.
- Pour les Shared Drives, choisissez le bon dossier de destination (évitez la racine) pour garder les ACL propres.
- Gardez la casse des chemins cohérente pour éviter des dossiers qui semblent en double entre les backends sensibles ou non à la casse.
- Envisagez la taille des blocs et la concurrence uniquement si vous atteignez les limites de l'API ; les valeurs par défaut conviennent à la plupart des utilisateurs.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## Étape 4 — Planifier et surveiller

- Configurez le planificateur en dehors des heures de pointe pour réduire la limitation de l'API : [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- Surveillez le débit en direct et les fichiers bloqués dans **Transfer Monitor** : [real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring).
- Habitude de notification : consultez l'historique des tâches (Job History) chaque matin pendant les semaines de migration pour détecter rapidement les anomalies.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## Étape 5 — Monter pour un accès à la demande (facultatif)

- Montez l'un ou l'autre cloud localement pour parcourir les fichiers sans tout télécharger : [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Windows : attribuez une lettre de lecteur ; macOS : choisissez un chemin de montage sous `/Volumes`.
- Utile pour la validation : ouvrez quelques fichiers directement depuis chaque point de montage après une synchronisation pour confirmer les permissions et la lisibilité.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## Restaurer ou inverser

- Pour inverser le sens (Google Drive vers Yandex Disk), dupliquez la tâche et inversez source/cible.
- Pour des restaurations sélectives, exécutez **copy** sur une liste d'inclusion ciblée pour éviter d'écraser de bonnes données.
- Conservez un petit dossier "canari" fiable et assurez-vous que chaque exécution le préserve inchangé ; c'est votre contrôle de santé rapide.

## Astuces rapides

- Maintenez des structures de dossiers cohérentes des deux côtés pour réduire les incohérences de chemins.
- Utilisez des préréglages par équipe (Docs, Médias, Archives) pour que les exécutions restent prévisibles.
- Testez d'abord avec un petit dossier, puis passez à l'ensemble de l'arborescence.
- Documentez les paramètres de votre tâche (mode, filtres, planification) afin que toute personne de l'équipe puisse relancer en toute sécurité.
- Pendant les migrations lourdes, gardez les points de montage en lecture seule pour les utilisateurs afin d'éviter les modifications en cours d'exécution.

RcloneView rend la synchronisation Yandex Disk ↔ Google Drive simple : comparez d'abord, copiez en toute sécurité, planifiez le reste, et surveillez tout depuis un seul tableau de bord.


<CloudSupportGrid />
