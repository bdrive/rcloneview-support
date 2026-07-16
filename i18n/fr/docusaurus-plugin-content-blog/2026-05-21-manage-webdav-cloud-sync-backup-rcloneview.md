---
slug: manage-webdav-cloud-sync-backup-rcloneview
title: "Gérer le stockage sur serveur WebDAV — Synchroniser et sauvegarder vos fichiers avec RcloneView"
authors:
  - casey
description: "Connectez, synchronisez et sauvegardez n'importe quel serveur WebDAV avec RcloneView. Gérez Nextcloud, ownCloud et les points d'accès WebDAV d'entreprise aux côtés de plus de 90 fournisseurs cloud."
keywords:
  - WebDAV sync RcloneView
  - manage WebDAV cloud storage
  - WebDAV file transfer GUI
  - Nextcloud WebDAV backup
  - sync WebDAV to cloud storage
  - ownCloud backup tool
  - WebDAV rclone GUI
  - WebDAV file management desktop
  - cross-platform WebDAV client
  - WebDAV cloud backup automation
tags:
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage sur serveur WebDAV — Synchroniser et sauvegarder vos fichiers avec RcloneView

> Connectez n'importe quel point d'accès WebDAV à RcloneView et contrôlez vos fichiers grâce à une interface claire — synchronisez, sauvegardez et transférez sans toucher à la ligne de commande.

WebDAV (Web Distributed Authoring and Versioning) est à la base de certaines des plateformes de fichiers auto-hébergées les plus largement déployées. Nextcloud, ownCloud, SharePoint et de nombreux systèmes de gestion de contenu d'entreprise exposent tous des points d'accès WebDAV. Gérer ces serveurs implique généralement de composer avec des outils en ligne de commande ou des clients de synchronisation de bureau peu fiables. RcloneView traite les distants WebDAV exactement comme n'importe quel autre fournisseur cloud — avec des transferts par glisser-déposer, des tâches de synchronisation planifiées et un suivi des transferts en temps réel — depuis la même interface que celle utilisée pour gérer Amazon S3 ou Google Drive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connectez votre serveur WebDAV en quelques minutes

Ajouter un distant WebDAV prend moins de deux minutes dans RcloneView. Cliquez sur **Remote tab > New Remote**, sélectionnez WebDAV comme type de stockage, puis saisissez l'URL de votre serveur, votre nom d'utilisateur et votre mot de passe. Pour les serveurs utilisant des certificats SSL auto-signés, ajoutez `--no-check-certificate` dans le champ **Global Rclone Flags** sous **Settings > Embedded Rclone** afin de contourner la vérification du certificat. Une fois enregistré, votre serveur WebDAV apparaît dans le panneau explorateur aux côtés de tous les autres comptes cloud que vous avez configurés.

Cette vue unifiée est particulièrement utile pour les équipes qui font tourner Nextcloud pour la collaboration interne tout en utilisant un stockage cloud public pour les sauvegardes hors site. Un studio de production vidéo disposant d'un serveur Nextcloud auto-hébergé peut parcourir les fichiers du projet dans le panneau de gauche et un bucket Backblaze B2 dans celui de droite — puis glisser-déposer directement les livrables terminés, ou définir une tâche de synchronisation planifiée pour gérer l'archivage nocturne automatiquement.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a WebDAV remote in RcloneView Remote Manager" class="img-large img-center" />

## Synchronisez WebDAV vers n'importe quel fournisseur cloud

Une fois votre serveur WebDAV connecté, créez des tâches de synchronisation dans le Job Manager pour transférer des fichiers vers n'importe lequel des plus de 90 fournisseurs cloud pris en charge par RcloneView. L'assistant de synchronisation en 4 étapes vous guide dans la sélection des distants source et destination, la configuration du nombre de transferts simultanés et de la vérification par somme de contrôle, l'application de filtres par taille ou ancienneté de fichier, et la planification optionnelle de la tâche.

Pour les scénarios de sauvegarde, sélectionnez **"Modifying destination only"** dans le champ de direction de synchronisation. Cela garantit que votre sauvegarde cloud reflète le serveur WebDAV sans introduire de modifications inverses. Lorsque l'intégrité des données est essentielle — pour des archives de documents juridiques ou des bibliothèques d'imagerie médicale — activez l'option de somme de contrôle afin que RcloneView valide les fichiers à la fois par hash et par taille à chaque exécution, et non uniquement par date de modification.

La fonction Dry Run mérite d'être utilisée avant toute première synchronisation : elle liste exactement les fichiers qui seront copiés ou supprimés à la destination, sans effectuer aucune modification réelle. Cela prend quelques secondes et peut éviter des écrasements accidentels.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from WebDAV server to cloud storage in RcloneView" class="img-large img-center" />

## Automatisez les sauvegardes selon un planning (licence PLUS)

Les exécutions de synchronisation manuelle couvrent les transferts immédiats, mais c'est l'automatisation planifiée qui rend la sauvegarde WebDAV fiable. Avec une licence PLUS, le planificateur de type crontab de RcloneView vous permet de configurer des tâches à exécuter chaque nuit, chaque heure, ou selon tout intervalle personnalisé. Le simulateur de planning affiche un aperçu des dix prochaines heures d'exécution avant l'enregistrement, afin qu'il n'y ait aucune surprise sur le moment où les sauvegardes se déclenchent.

Job History suit le résultat de chaque exécution : heure de début, durée, vitesse de transfert, nombre de fichiers et statut (Completed / Errored / Canceled). Si une tâche planifiée rencontre une défaillance réseau transitoire, RcloneView effectue de nouvelles tentatives jusqu'au nombre configuré avant de marquer la tâche comme en erreur. Pour les organisations gérant de grands déploiements Nextcloud ou ownCloud, cela produit une piste d'audit fiable sans surveillance manuelle.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled sync job from WebDAV to cloud storage in RcloneView" class="img-large img-center" />

## Parcourez et comparez les fichiers côte à côte

L'explorateur multi-panneaux de RcloneView vous permet de parcourir simultanément votre serveur WebDAV et une destination cloud. L'outil Folder Compare identifie précisément les fichiers qui diffèrent entre les deux côtés — en affichant les fichiers présents uniquement à gauche, uniquement à droite, ou dont la taille ne correspond pas. Pour la vérification de sauvegarde incrémentielle, c'est plus rapide et plus fiable que de passer en revue manuellement les journaux de transfert.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing WebDAV server files with cloud backup using Folder Compare in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Remote tab > New Remote**, choisissez WebDAV, puis saisissez l'URL de votre serveur et vos identifiants.
3. Créez une tâche de synchronisation dans le Job Manager avec votre distant WebDAV comme source et votre fournisseur cloud préféré comme destination.
4. Exécutez un **Dry Run** pour prévisualiser ce qui sera transféré, puis activez la tâche ou définissez un planning.

RcloneView fait des serveurs WebDAV des participants à part entière de votre stratégie multi-cloud — que vous protégiez une instance Nextcloud auto-hébergée ou que vous fassiez le pont entre une plateforme de contenu d'entreprise et un stockage d'archivage cloud à long terme.

---

**Guides connexes :**

- [Gérer le stockage sur serveur SFTP — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Connecter un serveur WebDAV — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Gérer Nextcloud — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
