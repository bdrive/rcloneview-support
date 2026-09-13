---
slug: migrate-sftp-to-google-drive-rcloneview
title: "Migrer de SFTP vers Google Drive — transférer des fichiers avec RcloneView"
authors:
  - kai
description: "Migrez des fichiers d'un serveur SFTP vers Google Drive à l'aide de l'explorateur à double panneau de RcloneView, de l'aperçu en simulation et des tâches de synchronisation planifiées."
keywords:
  - RcloneView
  - migrer SFTP vers Google Drive
  - migration SFTP vers le cloud
  - transférer des fichiers SFTP
  - transfert de fichiers SSH vers le cloud
  - migration de stockage cloud
  - interface graphique client SFTP
  - sauvegarde Google Drive
  - outil de transfert de fichiers sécurisé
  - mettre hors service un serveur SFTP
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de SFTP vers Google Drive — transférer des fichiers avec RcloneView

> Mettez à la retraite un serveur SFTP vieillissant sans perdre le moindre fichier, en utilisant RcloneView pour tout déplacer directement vers Google Drive.

De nombreuses équipes exploitent encore un serveur SFTP interne pour le dépôt de fichiers, mais maintenir les identifiants SSH, les règles de pare-feu et l'espace disque de cette machine coûte cher comparé à laisser Google Drive gérer le stockage et le partage. RcloneView se connecte à la fois à un hôte SFTP et à Google Drive dans la même fenêtre, ce qui permet de parcourir, comparer et transférer entre les deux sans toucher à un terminal. C'est une première étape pratique pour une petite équipe informatique qui migre un serveur de fichiers hérité avant de mettre le matériel définitivement hors service.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter le serveur SFTP et Google Drive côte à côte

Ajoutez d'abord le distant SFTP : saisissez l'adresse de l'hôte et les identifiants SSH dans l'assistant New Remote, en utilisant le port 22 par défaut. Ajoutez ensuite Google Drive comme second distant via sa connexion OAuth par navigateur — aucune saisie de clé API n'est nécessaire. Ouvrez les deux dans des panneaux Explorer distincts grâce à la disposition en panneaux divisés de RcloneView, afin de voir la structure complète des dossiers de chaque côté en même temps.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, si bien que la même configuration fonctionne que le serveur SFTP soit sur votre réseau local ou accessible uniquement via un hôte relais.

## Prévisualiser la migration avant de déplacer quoi que ce soit

Avant de transférer des années de fichiers accumulés, exécutez Folder Compare entre la racine SFTP et le dossier Google Drive cible pour voir exactement ce qui manque côté destination. Configurez ensuite le transfert comme une tâche Sync et utilisez Dry Run pour simuler la copie — RcloneView liste chaque fichier qui serait déplacé et chaque dossier qui serait créé, sans rien écrire réellement tant que vous n'avez pas confirmé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

Cette étape compte particulièrement lorsque le serveur SFTP a accumulé des années de dossiers imbriqués aux noms incohérents — la simulation révèle les surprises avant qu'elles ne deviennent un incident de support en pleine nuit.

## Automatiser le reste du transfert avec des tâches planifiées

Pour une archive SFTP volumineuse, n'essayez pas de tout déplacer en une seule fois. Enregistrez la migration comme un Job dans le Job Manager, réglez le nombre de transferts de fichiers pour qu'il corresponde au débit réel de votre réseau, et laissez-la s'exécuter en arrière-plan pendant que vous continuez à travailler dans d'autres panneaux Explorer. Si le serveur SFTP doit rester actif encore quelques semaines pendant la transition, la planification de la licence PLUS permet de répéter la synchronisation selon un horaire de type crontab afin que Google Drive reste à jour jusqu'à l'arrêt de l'ancien serveur.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre serveur SFTP comme distant en utilisant son adresse d'hôte et ses identifiants SSH.
3. Ajoutez Google Drive comme second distant via le flux de connexion OAuth par navigateur.
4. Exécutez Folder Compare et Dry Run, puis enregistrez le transfert comme un Job avant de l'exécuter pour de bon.

Une fois que la tâche de synchronisation se termine proprement lors d'une nouvelle exécution sans plus rien à copier, l'ancien serveur SFTP peut être arrêté en toute sécurité.

---

**Guides associés :**

- [Gérer le stockage du serveur SFTP — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Gérer le stockage Google Drive — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Monter SFTP et SMB comme lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
