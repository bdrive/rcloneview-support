---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "Gérer un serveur FTP — Synchroniser et sauvegarder des fichiers avec RcloneView"
authors:
  - robin
description: "Connectez et gérez votre serveur FTP avec RcloneView. Synchronisez et sauvegardez vos fichiers FTP vers Google Drive, S3, Backblaze B2 et plus de 90 fournisseurs de stockage cloud."
keywords:
  - gestion de serveur FTP
  - synchronisation FTP cloud
  - sauvegarde FTP vers le cloud
  - RcloneView FTP
  - transfert de fichiers FTP
  - synchroniser FTP vers Google Drive
  - FTP vers Amazon S3
  - outil de sauvegarde cloud FTP
  - gérer le stockage FTP
  - interface graphique rclone FTP
tags:
  - RcloneView
  - ftp
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer un serveur FTP — Synchroniser et sauvegarder des fichiers avec RcloneView

> RcloneView transforme votre serveur FTP en un remote de premier plan — parcourez, synchronisez et sauvegardez ses fichiers visuellement, aux côtés de Google Drive, S3 et plus de 90 autres fournisseurs cloud.

Le FTP reste l'épine dorsale d'innombrables environnements d'hébergement web, d'archives multimédias historiques et de serveurs de distribution de fichiers internes. Gérer des fichiers FTP implique généralement de jongler entre sessions de terminal, listages manuels de répertoires et scripts artisanaux. RcloneView traite votre serveur FTP exactement comme n'importe quel compte de stockage cloud — vous bénéficiez d'une interface visuelle cohérente pour parcourir, transférer et sauvegarder des fichiers sans toucher à la ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter votre serveur FTP dans RcloneView

Ouvrez l'onglet **Remote** et cliquez sur **New Remote**. Dans la liste des fournisseurs, choisissez FTP et saisissez le nom d'hôte ou l'adresse IP de votre serveur, le port, le nom d'utilisateur et le mot de passe. Si votre serveur prend en charge le FTPS (FTP sur TLS), vous pouvez l'activer dans les options avancées pour une connexion chiffrée.

Une fois enregistré, le remote FTP apparaît dans le panneau de l'explorateur aux côtés de vos comptes cloud. Vous pouvez déplier son arborescence de dossiers, parcourir les sous-répertoires et afficher les noms de fichiers, tailles et horodatages de modification — la même expérience que celle offerte par Amazon S3 ou Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## Parcourir et transférer des fichiers FTP visuellement

L'explorateur multi-panneaux de RcloneView est l'endroit où la gestion FTP devient efficace. Ouvrez votre remote FTP dans un panneau et une destination cloud — un bucket Backblaze B2, un dossier Google Drive ou un préfixe Amazon S3 — dans l'autre. Faites glisser-déposer des fichiers entre les panneaux pour lancer une copie. Utilisez Ctrl+Clic ou Maj+Clic pour la sélection multiple lors du déplacement de lots de fichiers. Faites un clic droit pour renommer, supprimer, créer des dossiers ou obtenir la taille des dossiers.

Pour les agences web qui conservent les fichiers clients sur un serveur FTP et doivent les archiver vers du stockage objet, ou pour les équipes multimédias distribuant des ressources depuis un hôte FTP vers plusieurs fournisseurs de CDN cloud, cette vue côte à côte remplace des workflows manuels sujets aux erreurs.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## Créer des tâches de synchronisation entre FTP et stockage cloud

Pour les workflows répétables, le **Job Manager** de RcloneView vous permet de configurer des tâches de synchronisation ou de copie entre votre serveur FTP et n'importe quelle destination cloud. L'assistant en 4 étapes couvre la sélection de la source et de la destination, les paramètres avancés (transferts simultanés, vérification par checksum) et les règles de filtrage (type de fichier, limite de taille, seuil d'ancienneté).

Exécutez d'abord un **Dry Run** — il prévisualise chaque fichier qui serait copié ou supprimé sans effectuer de modification. Cela est particulièrement utile pour les sources FTP dont les structures de répertoires peuvent être complexes ou où des écrasements involontaires pourraient poser problème.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

Après chaque exécution, l'onglet **Job History** affiche le temps d'exécution, la vitesse de transfert, le nombre de fichiers et le statut final — vous offrant une piste d'audit claire de ce qui a été déplacé et quand.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

Avec une **licence PLUS**, vous pouvez associer des planifications de type cron à vos tâches de synchronisation FTP — sauvegardant les nouveaux téléversements chaque nuit ou synchronisant vers le stockage cloud selon une cadence hebdomadaire, le tout sans laisser une session ouverte.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Remote** > **New Remote** et sélectionnez FTP dans la liste des fournisseurs.
3. Saisissez l'hôte, le port, le nom d'utilisateur et le mot de passe de votre serveur, puis enregistrez le remote.
4. Ouvrez votre remote FTP dans un panneau et une destination cloud dans l'autre.
5. Utilisez le **Job Manager** pour configurer une tâche de synchronisation et exécutez un Dry Run avant le premier transfert réel.

Connecter votre serveur FTP à RcloneView signifie ne plus jamais écrire de script de synchronisation — chaque transfert est suivi, répétable et vérifiable depuis une seule interface.

---

**Guides connexes :**

- [Gérer un serveur SFTP — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Migrer un serveur FTP vers le stockage cloud avec RcloneView](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Connecter un serveur WebDAV et synchroniser avec le cloud avec RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
