---
slug: rcloneview-asustor-nas-cloud-backup
title: "Exécuter RcloneView sur un NAS ASUSTOR pour une sauvegarde cloud automatisée"
authors:
  - tayson
description: "Les NAS ASUSTOR sont assez puissants pour exécuter RcloneView via Docker. Configurez des sauvegardes cloud automatisées, montez du stockage distant et surveillez les transferts directement depuis votre NAS."
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - nas
  - platform
  - cloud-backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur un NAS ASUSTOR pour une sauvegarde cloud automatisée

> Votre NAS ASUSTOR fonctionne 24h/24 et 7j/7 — faites-en votre moteur de sauvegarde cloud toujours actif. RcloneView transforme votre NAS en un hub de gestion de fichiers multi-cloud avec des sauvegardes planifiées, un montage cloud et une surveillance des transferts en temps réel.

Les NAS ASUSTOR sont équipés de processeurs Intel ou ARM, exécutent le système ADM (ASUSTOR Data Master) et prennent en charge Docker via l'application Portainer ou la ligne de commande. Cela leur permet d'exécuter RcloneView en tant que service conteneurisé — toujours actif, toujours en train de sauvegarder, sans mobiliser un poste de travail ou un ordinateur portable. Que vous souhaitiez sauvegarder des partages NAS vers Backblaze B2, synchroniser des dossiers avec Google Drive, ou monter S3 comme volume local, RcloneView sur votre NAS ASUSTOR gère tout cela depuis une interface web.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi exécuter la sauvegarde cloud sur votre NAS

Exécuter la sauvegarde cloud directement sur votre NAS présente plusieurs avantages par rapport à un poste de travail :

- **Fonctionnement permanent** — votre NAS tourne déjà 24h/24. Les sauvegardes s'exécutent selon un planning sans nécessiter qu'un PC soit allumé.
- **Accès aux données NAS à la vitesse du réseau local** — pas besoin de récupérer les fichiers via le réseau sur un PC avant de les envoyer. Le NAS lit directement depuis ses propres disques.
- **Gestion centralisée** — toutes les tâches de sauvegarde, les plannings et les journaux résident sur le NAS. Tout appareil équipé d'un navigateur peut les gérer.
- **Pas de charge sur le poste de travail** — déchargez le coût CPU et bande passante des transferts volumineux sur le NAS.

## Compatibilité des NAS ASUSTOR

RcloneView via Docker fonctionne sur les modèles ASUSTOR équipés de :

- Processeurs **basés sur Intel** (x86_64) : séries AS31, AS32, AS33, AS52, AS54, AS61, AS62, AS63, AS64, AS65, AS67, Lockerstor, Lockerstor Pro et Flashstor.
- Processeurs **basés sur ARM** : séries Drivestor et Drivestor Pro (variantes ARM AS11, AS33) — vérifiez la prise en charge de Docker pour votre modèle spécifique.
- **ADM 4.0 ou version ultérieure** avec Docker (Portainer) installé depuis App Central.
- **Au moins 2 Go de RAM** recommandés (4 Go+ pour des transferts volumineux concurrents).

## Installer RcloneView via Docker

### Étape 1 — Installer Docker depuis App Central

1. Ouvrez **App Central** dans votre interface web ADM.
2. Recherchez **Portainer** (ou Docker-CE si disponible).
3. Installez et lancez l'application Portainer.

### Étape 2 — Déployer le conteneur RcloneView

Ouvrez Portainer sur `http://your-nas-ip:9443` et créez un nouveau conteneur, ou utilisez SSH pour le déployer via la ligne de commande :

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

Mappages de volumes clés :

- `/volume1/Docker/rcloneview/config` — stocke vos configurations de remote rclone de manière persistante.
- `/volume1` — expose votre volume NAS principal à RcloneView pour les opérations de sauvegarde.

### Étape 3 — Accéder à l'interface web

Ouvrez votre navigateur et accédez à `http://your-nas-ip:5572`. Vous devriez voir le tableau de bord RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## Connecter des remotes cloud

Depuis l'interface RcloneView, ajoutez vos fournisseurs de stockage cloud :

### Configurations courantes pour la sauvegarde NAS

- **Backblaze B2** — économique pour les sauvegardes NAS volumineuses à 6 $/To/mois.
- **Wasabi** — stockage compatible S3 à tarif fixe, sans frais de sortie.
- **Google Drive** — synchronisez les dossiers importants entre le NAS et Drive.
- **Amazon S3** — durabilité de niveau entreprise avec des classes de stockage flexibles.
- **SFTP** — sauvegardez vers un serveur distant ou un second NAS.

Chaque remote est configuré une seule fois et enregistré de manière permanente. L'assistant de configuration vous guide à travers l'authentification pour chaque fournisseur — clés API pour les services compatibles S3, OAuth pour Google Drive et OneDrive.

## Planifier des sauvegardes automatisées

La valeur principale d'exécuter RcloneView sur votre NAS réside dans la sauvegarde automatisée et sans surveillance. Voici comment la configurer :

### Créer une tâche de sauvegarde

1. Ouvrez l'explorateur à deux volets dans RcloneView.
2. Définissez le volet gauche sur votre chemin local NAS (par exemple, `/data/volume1/Photos`).
3. Définissez le volet droit sur votre remote cloud (par exemple, `backblaze-b2:nas-backup/photos/`).
4. Choisissez **Sync** pour refléter le dossier NAS vers le cloud, ou **Copy** pour ajouter de nouveaux fichiers sans supprimer les suppressions.
5. Enregistrez l'opération en tant que tâche nommée.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### Planifier la tâche

Configurez la tâche pour qu'elle s'exécute automatiquement :

- **Tous les jours à 2h00** — sauvegardez pendant les heures de faible utilisation pour éviter d'impacter les performances du NAS.
- **Synchronisation complète hebdomadaire** — une synchronisation complète le week-end lorsque la demande de bande passante est la plus faible.
- **À la demande** — déclenchez une sauvegarde manuellement avant d'effectuer des modifications importantes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## Monter du stockage cloud

RcloneView peut monter du stockage cloud comme chemin local sur votre NAS, rendant les fichiers distants accessibles comme s'ils étaient sur un disque local. Cela est utile pour :

- **Étendre la capacité du NAS** avec du stockage cloud.
- **Accéder aux fichiers archivés** sans les télécharger manuellement.
- **Diffuser des médias** depuis le stockage cloud via les applications multimédias de votre NAS.

Pour activer les montages FUSE dans Docker, ajoutez ces indicateurs à votre conteneur :

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

Utilisez ensuite le gestionnaire de montage de RcloneView pour monter n'importe quel remote sur un chemin local.

## Surveiller les transferts

Lorsque des tâches de sauvegarde sont en cours d'exécution, la surveillance des transferts de RcloneView affiche la progression en temps réel :

- Fichiers en cours de transfert
- Vitesse de transfert et temps estimé (ETA)
- Erreurs et nouvelles tentatives
- Nombre de fichiers terminés

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

Vérifiez l'historique des tâches pour confirmer que les sauvegardes planifiées se sont terminées avec succès. Si une tâche échoue (panne réseau, expiration des identifiants), RcloneView journalise l'erreur pour le dépannage.

## Bonnes pratiques pour les sauvegardes NAS ASUSTOR

- **Commencez par vos données les plus critiques** — photos, documents et bases de données en premier. Les bibliothèques multimédias peuvent suivre.
- **Utilisez des limites de bande passante** pendant les heures ouvrées pour éviter de saturer votre connexion internet : définissez `--bwlimit 10M` dans les options de la tâche.
- **Activez le versioning** sur votre stockage cloud pour vous protéger contre les rançongiciels ou les écrasements accidentels.
- **Sauvegardez votre configuration rclone** — le répertoire `/config/rclone` contient vos identifiants cloud. Copiez-le vers un second emplacement.
- **Surveillez l'état de santé des disques** — la sauvegarde cloud ne sert à rien si le disque du NAS tombe en panne avant l'exécution de la sauvegarde. Utilisez les alertes du gestionnaire de stockage d'ADM.

## Pour commencer

1. **Installez Portainer** depuis App Central d'ASUSTOR.
2. **Déployez le conteneur Docker RcloneView** avec les mappages de volumes indiqués ci-dessus.
3. **Ajoutez vos remotes cloud** — Backblaze B2, S3, Google Drive, ou tout autre fournisseur pris en charge.
4. **Créez et planifiez des tâches de sauvegarde** pour vos partages NAS les plus importants.
5. **Vérifiez l'historique des tâches chaque semaine** pour confirmer que tout fonctionne correctement.

Votre NAS ASUSTOR protège déjà vos données localement grâce au RAID. Ajouter une sauvegarde cloud automatisée avec RcloneView vous offre une véritable protection hors site — et cela fonctionne tout seul.

---

**Guides connexes :**

- [Pont Cloud-vers-NAS : sauvegarder vers Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [Exécuter RcloneView sur TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [Automatiser les sauvegardes cloud quotidiennes](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
