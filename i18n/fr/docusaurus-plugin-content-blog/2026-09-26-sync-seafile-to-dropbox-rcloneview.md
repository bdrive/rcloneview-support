---
slug: sync-seafile-to-dropbox-rcloneview
title: "Synchroniser Seafile vers Dropbox — Sauvegarde cloud avec RcloneView"
authors:
  - casey
description: "Sauvegardez un serveur Seafile auto-hébergé vers Dropbox avec RcloneView, grâce à des jobs de synchronisation planifiés et des aperçus Dry Run pour des transferts sûrs et vérifiés."
keywords:
  - synchroniser Seafile vers Dropbox
  - sauvegarde Seafile Dropbox
  - sauvegarde cloud auto-hébergée
  - RcloneView Seafile
  - synchronisation cloud à cloud
  - sauvegarde externalisée Seafile
  - outil de sauvegarde Dropbox
  - reprise après sinistre Seafile
  - migration d'auto-hébergé vers Dropbox
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Seafile vers Dropbox — Sauvegarde cloud avec RcloneView

> Donnez à un serveur Seafile auto-hébergé une copie externalisée dans Dropbox sans rien scripter à la main.

Seafile est populaire précisément parce qu'il garde les données sous le contrôle propre d'une organisation, mais cette même indépendance signifie qu'il n'existe pas de chemin intégré vers une sauvegarde externe. Si le serveur, son disque ou son hébergeur tombe en panne, tout ce qui n'a pas été copié ailleurs est perdu. RcloneView se connecte à Seafile aux côtés de Dropbox dans la même fenêtre et déplace les fichiers entre les deux sous forme de job de synchronisation planifié, de sorte que le serveur auto-hébergé obtient une véritable copie externalisée sans que personne n'ait à écrire un script cron ou une commande rclone à la main. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien que la même configuration fonctionne que le job de synchronisation s'exécute depuis l'ordinateur portable d'un administrateur ou depuis une machine dédiée à la sauvegarde.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Seafile et Dropbox

Seafile s'ajoute comme remote en saisissant l'URL du serveur, la bibliothèque et les identifiants du compte, et RcloneView vérifie la connexion avant l'enregistrement. Dropbox utilise le flux OAuth, plus simple : une fenêtre de navigateur s'ouvre, le compte est autorisé, et le remote apparaît automatiquement comme un onglet. Une fois les deux configurés, le Remote Manager les liste côte à côte, et chacun peut être modifié plus tard sans perturber l'autre.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

Une fois les deux remotes connectés, ouvrez une disposition à deux panneaux pour parcourir ensemble la bibliothèque Seafile et le dossier de destination Dropbox avant de lancer une synchronisation complète.

## Construire le job de synchronisation

Créez un job de synchronisation à sens unique avec la bibliothèque Seafile comme source et un dossier Dropbox dédié comme destination, afin que les exécutions de sauvegarde ne modifient jamais accidentellement les données Seafile d'origine. Dans Filtering Settings, excluez tout ce qui ne doit pas quitter le serveur — fichiers temporaires, dossiers `.git/` de tout projet versionné, ou types de fichiers dépassant un seuil de taille — en utilisant la même syntaxe de filtre personnalisé que RcloneView applique à tout job de synchronisation. Lancez d'abord un Dry Run : il liste tous les fichiers qui seraient copiés sans réellement rien transférer, le moyen le plus rapide de repérer un mauvais dossier source avant qu'il ne coûte de la bande passante.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

Les utilisateurs en licence PLUS peuvent associer au job une planification de type crontab pour que la sauvegarde s'exécute chaque nuit sans que personne ne la lance manuellement — utile pour un serveur Seafile qui évolue tout au long de la journée de travail.

## Vérifier la sauvegarde dans Job History

Activez la comparaison par somme de contrôle dans Advanced Settings pour que RcloneView confirme que les fichiers correspondent par hash et par taille plutôt que de se fier uniquement à la taille du fichier — important lorsque le versionnage de Seafile peut laisser des fichiers de taille identique mais de contenu différent. Après chaque exécution, Job History affiche le nombre total de fichiers transférés, le temps passé et tout élément en erreur, ce qui permet de confirmer facilement que la copie Dropbox est bien à jour avant de lui faire confiance comme point de restauration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre serveur Seafile comme remote avec son chemin de bibliothèque et ses identifiants.
3. Ajoutez Dropbox via le flux de connexion OAuth.
4. Lancez un Dry Run, puis exécutez le job de synchronisation et vérifiez les résultats dans Job History.

Une copie planifiée et vérifiée dans Dropbox transforme une installation Seafile auto-hébergée d'un point de défaillance unique en un serveur disposant d'un véritable filet de secours.

---

**Guides associés :**

- [Gérer le cloud auto-hébergé Seafile avec Google Drive, S3 et un stockage externe grâce à RcloneView](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Gérer Dropbox — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation Seafile avec RcloneView](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
