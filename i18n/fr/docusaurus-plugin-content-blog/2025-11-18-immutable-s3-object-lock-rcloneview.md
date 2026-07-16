---
slug: immutable-backups-s3-object-lock-rcloneview
title: "Sauvegardes immuables et résistantes aux ransomwares avec S3 Object Lock dans RcloneView"
authors:
  - tayson
description: Utilisez RcloneView avec des buckets S3 Object Lock pour créer des sauvegardes immuables et résistantes aux ransomwares sur AWS S3, Wasabi, Backblaze B2 ou Cloudflare R2, avec planification, vérification et restaurations rapides.
keywords:
  - s3 object lock
  - sauvegardes immuables
  - protection contre les ransomwares
  - rclone s3
  - rcloneview
  - wasabi object lock
  - immuabilité des sauvegardes cloud
  - sauvegarde de conformité
tags:
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sauvegardes immuables et résistantes aux ransomwares avec S3 Object Lock dans RcloneView

> Ne vous inquiétez plus des restaurations en arrière causées par les ransomwares. Combinez S3 Object Lock avec le planificateur de RcloneView pour garder vos sauvegardes intouchables.

Le stockage immuable empêche les attaquants (ou les accidents) de supprimer ou d'écraser vos sauvegardes avant que vous puissiez les récupérer. S3 Object Lock est disponible sur AWS S3, Wasabi, Backblaze B2 et Cloudflare R2. RcloneView utilise les paramètres Object Lock et de versionnage du bucket pendant que vous créez des tâches dans l'interface graphique — aucun CLI n'est nécessaire.

<!-- truncate -->

**Documentation associée**

- Créer des tâches de synchronisation : https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Planification et exécution des tâches (Plus) : https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Comparer des dossiers : https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Monter comme lecteur local : https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Pourquoi Object Lock + RcloneView

- Copies immuables : les dates de rétention bloquent les suppressions/écrasements pendant la période spécifiée.
- Choix du cloud : fonctionne sur S3, Wasabi, R2, B2 et les passerelles NAS compatibles S3.
- Sans script : créez des tâches de synchronisation dans l'interface graphique, planifiez-les (Plus), et conservez l'historique/les journaux.
- Vérifications rapides : utilisez Compare pour confirmer que la destination correspond et affiche les versions conservées.
- Restaurations faciles : montez ou synchronisez depuis le bucket verrouillé sans modifier la rétention.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## Prérequis

- Un bucket compatible S3 créé avec Object Lock activé dès sa création.
- Le versionnage activé sur ce bucket (requis pour Object Lock).
- RcloneView installé avec un remote S3 déjà connecté.
- Un utilisateur IAM/API avec les autorisations pour `PutObject` et `PutObjectRetention`.
- (Optionnel) Une licence Plus si vous souhaitez planifier les tâches automatiquement.


## Étape 1 : Activer Object Lock sur le bucket

1. Créez le bucket avec Object Lock activé (impossible à modifier ultérieurement). Sur AWS S3, cochez « Enable Object Lock ». Sur Wasabi/R2/B2, choisissez l'option Object Lock lors de la création du bucket.
2. Activez le versionnage pour ce bucket.
3. Décidez de votre rétention par défaut : Governance (dérogations plus faciles) ou Compliance (aucune dérogation), et de la durée de rétention (par ex. 30 à 90 jours).

## Étape 2 : Pointer une tâche de synchronisation/copie vers le bucket Object Lock

RcloneView n'expose pas les indicateurs Object Lock par objet. Appuyez-vous plutôt sur les paramètres par défaut Object Lock + versionnage du bucket et gardez vos tâches pointées vers cette destination.

1. Créez une nouvelle tâche **Sync** (ou **Copy** si vous ne souhaitez pas de suppressions) : Source = vos données, Destination = le bucket Object Lock.
2. Dans **Advanced Settings**, définissez le nombre de transferts et activez la comparaison par checksum si les deux côtés prennent en charge le hachage.
3. Dans **Filtering Settings**, excluez les chemins de cache/temporaires pour ne pas gaspiller la rétention sur des données inutiles.
4. Enregistrez la tâche pour que les mêmes paramètres s'appliquent à chaque exécution (Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Étape 3 : Planifier les sauvegardes immuables

1. Dans l'assistant de tâche (étape 4 : Scheduling, Plus), activez la planification pour la tâche de sauvegarde immuable.
2. Définissez une fréquence quotidienne ou horaire et utilisez **Simulate** pour prévisualiser les prochaines exécutions.
3. Définissez le nombre de tentatives dans Advanced Settings pour les connexions instables.
4. Effectuez une comparaison manuelle hebdomadaire pour valider les objets conservés.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Étape 4 : Vérifier la rétention et l'intégrité

- Utilisez Compare pour vérifier le nombre d'objets après les téléversements.
- Dans la console S3 (ou les journaux RcloneView), vérifiez que les objets affichent `Compliance`/`Governance` et la date de rétention (Retain Until) attendue.
- Essayez de supprimer un fichier de test depuis la destination ; cela devrait être bloqué jusqu'à l'expiration de la période de rétention.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Étape 5 : Restaurer depuis des sauvegardes immuables

Lorsque vous devez effectuer une récupération :

1. Créez une nouvelle tâche : Destination (bucket Object Lock) -> Source (emplacement de récupération), et exécutez Sync/Copy.
2. Pour des restaurations ponctuelles, utilisez Mount pour parcourir le bucket verrouillé et glisser les fichiers vers l'extérieur.
3. Utilisez Copy (et non Sync) pour les restaurations si vous souhaitez éviter de supprimer des fichiers plus récents à l'emplacement de récupération.

## Bonnes pratiques et ajustements

- Définissez une rétention suffisamment longue pour la détection et l'investigation (par ex. 30 à 90 jours).
- Utilisez le mode Governance pour la flexibilité en environnement de test ; Compliance pour la production et les données réglementées.
- Ajustez le nombre de transferts dans Advanced Settings pour les fichiers multimédias volumineux ou les images de VM.
- Conservez au moins deux régions ou fournisseurs (par ex. Wasabi + R2) et faites tourner les planifications.
- Surveillez les coûts : Object Lock conserve toutes les versions, associez-le donc à des règles de cycle de vie après expiration de la rétention.

## Liste de dépannage

- Le téléversement échoue avec AccessDenied : assurez-vous que le rôle IAM autorise `PutObjectRetention`.
- Les objets ne sont pas verrouillés : vérifiez que le bucket a été créé avec Object Lock et que le versionnage est activé (On).
- Transferts lents : réduisez le nombre de transferts ou utilisez des limites de bande passante en cas de connexion faible.
- La restauration supprime des données actives : utilisez Copy plutôt que Sync lors de la récupération depuis le bucket verrouillé.



Verrouillez vos sauvegardes une fois pour toutes, et laissez RcloneView les garder en sécurité en pilote automatique.

<CloudSupportGrid />
