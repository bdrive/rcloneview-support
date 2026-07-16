---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "Transfert de fichiers cloud hybride entre NAS sur site et cloud public avec RcloneView"
authors:
  - tayson
description: "Montez, synchronisez et automatisez les transferts entre un NAS sur site (SMB/SFTP) et des clouds publics comme S3, Wasabi, Google Drive et Dropbox grâce à l'Explorateur à deux volets, à Compare, à Sync et aux tâches planifiées de RcloneView."
keywords:
  - rcloneview
  - cloud hybride
  - sauvegarde nas
  - smb sftp
  - webdav
  - transfert s3
  - synchronisation google drive
  - sauvegarde wasabi
  - monter un lecteur distant
  - interface rclone
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfert de fichiers cloud hybride entre NAS sur site et cloud public avec RcloneView

> Reliez votre NAS sur site et le cloud public sans gymnastique en ligne de commande. RcloneView vous permet d'ajouter des remotes SMB/SFTP/WebDAV, d'ouvrir des clouds côte à côte, de comparer les changements, de monter des lecteurs et de planifier des synchronisations nocturnes — pour que le stockage hybride reste ordonné et prévisible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## Pourquoi le cloud hybride est difficile (et pourquoi ça en vaut la peine)

- Le NAS sur site offre un accès LAN rapide pour les monteurs et les nœuds de rendu, mais manque de résilience hors site.
- Le cloud public (S3/Wasabi/Drive/Dropbox) apporte durabilité et partage global, mais la bande passante et les coûts comptent.
- Les équipes jonglent avec des permissions mixtes (ACL sur le NAS vs. OAuth/RBAC cloud) et des conventions de dossiers différentes.
- Copier manuellement expose à des écrasements, des versions manquantes et des corrections de dernière minute.
- Une interface graphique qui unifie les deux côtés réduit la charge cognitive et permet d'automatiser en toute confiance.

## Système de fichiers local vs. distant dans un seul volet

- **Local/NAS (SMB/SFTP/WebDAV) :** de type POSIX, sensible aux permissions, faible latence sur le LAN.
- **Cloud :** stockage objet (S3/Wasabi) ou de type drive (Google Drive/Dropbox) ; nécessite OAuth ou des clés.
- RcloneView traite chacun comme un remote que vous pouvez ouvrir, comparer, monter et synchroniser dans une seule interface.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## Ajouter votre remote NAS sur site (SMB/SFTP/WebDAV)

1. Cliquez sur **Remote → + New Remote** ou sur le bouton **+** dans l'Explorateur.
2. Choisissez **SMB** (pour un partage Windows/NAS) ou **SFTP** (serveurs Linux/UNIX).
3. Entrez l'adresse du serveur, le partage/chemin et les identifiants (ajoutez le domaine si SMB en a besoin).
4. Enregistrez et testez la navigation dans l'Explorateur à deux volets.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## Ajouter vos remotes de cloud public

- **S3/Wasabi/B2/R2 :** utilisez des clés d'accès/secrètes ; choisissez la région et le bucket.
- **Google Drive/Dropbox :** cliquez sur **Connect** pour terminer l'OAuth ; aucun jeton à coller.
- **Points de terminaison WebDAV :** collez l'URL et l'authentification.
- Conservez à la fois les remotes NAS et cloud dans le **Remote Manager** pour les réutiliser.

## Monter des systèmes de fichiers distants comme des lecteurs locaux

Le montage aide les applications qui exigent des chemins locaux (NLE, DAW, CAO). Le gestionnaire de montage de RcloneView vous évite les options en ligne de commande.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- Montez depuis la carte du remote ou la barre d'outils, choisissez la lettre/le chemin du lecteur, et définissez le cache/tampon.
- Démarrez/arrêtez les montages dans le **Mount Manager** sans redémarrer.
- Idéal pour éditer directement depuis SFTP/SMB ou exposer S3 comme un dossier pour des tâches légères.

## Comparer avant de copier

Les déplacements hybrides peuvent vite devenir confus ; Compare rend les écarts évidents.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- Ouvrez le NAS à gauche, le bucket cloud à droite, puis cliquez sur **Compare**.
- Met en évidence les fichiers **manquants**, **de taille différente** et **identiques**.
- Copiez uniquement le delta du NAS vers le cloud (ou inversement) pour éviter d'écraser des modifications plus récentes.

## Flux de synchronisation et de copie adaptés au cloud hybride

- **Copie unidirectionnelle** pour les sauvegardes/archives ; ne supprime rien à la destination.
- **Synchronisation unidirectionnelle avec suppression** lorsque vous voulez délibérément refléter le NAS vers le cloud.
- **Synchronisation bidirectionnelle** avec parcimonie (uniquement si les deux côtés changent activement).
- Utilisez les **filtres d'inclusion/exclusion** pour ignorer le cache, les proxys et les rendus temporaires.

## Gérer les permissions sans drame

- **SMB :** alignez le domaine/groupe de travail ; assurez-vous que les ACL du partage et du système de fichiers autorisent l'écriture.
- **SFTP :** vérifiez l'UID/GID et la propriété des dossiers sur le serveur ; ajustez `chmod` côté serveur si nécessaire.
- **WebDAV :** certains hébergeurs bloquent MOVE/DELETE ; utilisez la copie seule en cas de doute.
- Si un montage est en lecture seule, remontez avec l'utilisateur approprié ou ajustez les options de montage dans la boîte de dialogue.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- Consultez les **Logs** pour repérer les indices 401/403/550/permission refusée et relancez après correction.

## Conseils de performance pour NAS ↔ cloud

- Planifiez les tâches volumineuses en dehors des heures de bureau ; limitez la bande passante pendant les heures ouvrées.
- Pour S3/Wasabi, maintenez une concurrence modérée pour éviter le throttling ; activez le **checksum** lorsque c'est pris en charge.
- Pour SFTP sur WAN, réduisez les transferts parallèles en cas de perte de paquets ; envisagez la compression uniquement si le CPU le permet.
- Évitez de monter deux fois le même partage SMB sur des réseaux instables.

## Automatiser avec les tâches (Jobs) et les plannings

- Enregistrez toute synchronisation/copie comme une **Job** (par ex. `nas-to-s3-nightly`).
- Ouvrez **Job Manager → Add Job**, choisissez la tâche enregistrée et planifiez-la à **02:00 chaque jour**.
- Échelonnez plusieurs tâches (NAS → S3, NAS → Drive, Drive → NAS) pour minimiser les conflits.

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### Exemple d'ensemble de tâches

- **NAS (SMB) → Wasabi (copie unidirectionnelle) :** archive hebdomadaire de RAW/PROJECT.
- **NAS (SFTP) → Google Drive Shared Drive (synchronisation unidirectionnelle) :** EDIT/EXPORT quotidien pour la collaboration.
- **S3 → NAS (copie unidirectionnelle) :** récupération mensuelle de tranches d'archive froide pour des tests de restauration locale.

### Test à blanc et vérification

- Effectuez un **dry-run** lors de la première exécution pour confirmer ce qui sera déplacé.
- Après la synchronisation, rouvrez **Compare** ; seules les différences attendues doivent subsister.
- Pour S3/Wasabi, conservez le versioning et les règles de cycle de vie pour contrôler les coûts et conserver l'historique.

## Organiser votre stratégie de dossiers hybride

- Standardisez un modèle (par ex. `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) à la fois sur le NAS et le cloud.
- Gardez les proxys sur le cloud pour un partage rapide ; gardez le RAW sur le NAS/S3 pour la fidélité.
- Utilisez **Copy** pour les archives, **Sync** pour les espaces de travail actifs, **Mount** pour la compatibilité des applications.
- Documentez quel remote fait office de « source de vérité » par dossier pour éviter les suppressions accidentelles.

## Flux de travail réel (étape par étape)

1. **Connecter les remotes :** ajoutez SMB/SFTP pour le NAS, ajoutez S3/Wasabi et Google Drive.
2. **Ouvrir deux volets :** NAS à gauche, cloud à droite ; confirmez les listages.
3. **Comparer un petit dossier pilote :** assurez-vous que les écarts semblent corrects.
4. **Lancer une copie unidirectionnelle vers le cloud :** commencez par une sauvegarde non destructive.
5. **Enregistrer comme Job + planifier :** delta uniquement, chaque nuit à 02:00.
6. **Monter pour les applications :** montez le NAS ou S3 lorsque les monteurs ont besoin d'un accès par chemin.
7. **Revue des logs :** vérifiez les nouvelles tentatives, les messages de throttling ou les permissions dans les Logs.
8. **Test de restauration périodique :** copiez depuis le cloud vers un dossier NAS de test pour vérifier l'intégrité.
9. **Affiner les filtres :** excluez les caches/rendus ; n'incluez que les masters et les fichiers de projet pour les archives.
10. **Transmission à l'équipe :** partagez le modèle de dossiers et le planning des tâches pour que tout le monde suive la même carte.

## Liste de dépannage rapide

- Vous voyez des erreurs 403/550 ? Revérifiez les identifiants, les ACL de partage ou les politiques de bucket.
- WAN lent ? Réduisez la concurrence et activez les limites de bande passante ; planifiez la nuit.
- Le montage n'écrit pas ? Remontez avec le bon utilisateur ou ajustez les permissions SMB.
- Les suppressions WebDAV échouent ? Copiez puis nettoyez manuellement ; certains hébergeurs bloquent MOVE/DELETE.
- Copies en double ? Utilisez Compare pour nettoyer en toute sécurité ; évitez la synchronisation bidirectionnelle sauf nécessité.

## Liste de vérification avant la mise en production

- [ ] Remote NAS (SMB/SFTP/WebDAV) ajouté et navigable.
- [ ] Remote cloud (S3/Wasabi/Drive/Dropbox) ajouté et authentifié.
- [ ] Modèle de dossiers reproduit des deux côtés.
- [ ] Compare pilote et dry-run effectués.
- [ ] Job enregistrée et planifiée (02:00 suggéré).
- [ ] Checksums activés là où c'est pris en charge ; logs surveillés.
- [ ] Test de restauration effectué et documenté.

## Résumé

RcloneView transforme le travail en cloud hybride en un flux de travail reproductible : ajoutez des remotes NAS et cloud, comparez avant de copier, montez lorsque les applications exigent des chemins locaux, et automatisez les sauvegardes avec les Jobs et les plannings. Avec des logs visibles, des nouvelles tentatives et la prise en charge du checksum, vous pouvez conserver la performance sur site et la résilience du cloud sans toucher à la ligne de commande.

<CloudSupportGrid />
