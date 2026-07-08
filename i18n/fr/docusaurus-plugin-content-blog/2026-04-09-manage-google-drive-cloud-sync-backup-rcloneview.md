---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "Gérer les fichiers Google Drive et la synchronisation cloud avec RcloneView"
authors:
  - tayson
description: "Gérez vos fichiers Google Drive avec RcloneView. Synchronisez, sauvegardez et transférez des données entre Google Drive, les Drive partagés et d'autres fournisseurs cloud grâce à une interface graphique."
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - guide
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer les fichiers Google Drive et la synchronisation cloud avec RcloneView

> Google Drive est l'épine dorsale de Google Workspace, mais gérer les sauvegardes et les transferts entre clouds exige plus que le client natif — **RcloneView** offre ce contrôle grâce à une interface visuelle.

Google Drive sert plus de deux milliards d'utilisateurs avec 15 Go de stockage gratuit partagés entre Gmail, Drive et Photos. Les forfaits Workspace peuvent aller jusqu'au stockage illimité sur les niveaux Enterprise. Le client de bureau natif de Google Drive synchronise les fichiers vers votre machine locale, mais il ne peut pas répliquer les données vers AWS S3, OneDrive ou un NAS. RcloneView se connecte à Google Drive via l'API Drive v3 et propose une interface complète de gestion de fichiers — parcourir, synchroniser, copier, déplacer et planifier des sauvegardes entre Google Drive et n'importe quel autre fournisseur de stockage.

Que vous soyez un étudiant protégeant ses travaux, un photographe gérant des milliers de fichiers RAW, ou un administrateur Workspace synchronisant des Drive partagés vers une cible de sauvegarde indépendante, RcloneView vous offre des capacités que le client natif ne propose pas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Drive dans RcloneView

L'ajout de Google Drive utilise le flux OAuth 2.0 standard. Ouvrez le gestionnaire de distants, sélectionnez **Google Drive**, puis cliquez sur autoriser. Une fenêtre de navigateur s'ouvre où vous vous connectez à votre compte Google et accordez l'accès. Le jeton est stocké en toute sécurité dans votre configuration rclone locale.

Lors de la configuration, vous choisissez la portée de l'accès — accès complet au drive, lecture seule, ou accès limité aux fichiers créés par RcloneView. Pour la plupart des flux de sauvegarde et de synchronisation, l'accès complet est le bon choix. Vous pouvez également configurer l'accès aux Drive partagés (anciennement Team Drives) à cette étape, en sélectionnant un Drive partagé spécifique par ID ou en laissant RcloneView lister tous les drives disponibles.

Google Drive impose des quotas d'API — 10 000 requêtes par 100 secondes par projet par défaut. RcloneView gère automatiquement les réponses 403 userRateLimitExceeded avec un backoff exponentiel. Pour les opérations à grande échelle, vous pouvez enregistrer votre propre projet Google Cloud et fournir votre propre client ID pour augmenter les limites de quota.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## My Drive vs. Drive partagés

Google Drive fait la distinction entre My Drive (stockage personnel lié à un compte utilisateur) et les Drive partagés (stockage appartenant à l'organisation où les fichiers appartiennent à l'équipe, et non à un individu). Cette distinction est importante pour la synchronisation et la sauvegarde, car les Drive partagés ont des règles de propriété différentes, des règles de nommage de fichiers plus strictes et des quotas de stockage séparés.

RcloneView gère les deux de manière transparente. Vous pouvez ouvrir My Drive et un Drive partagé côte à côte dans l'explorateur à deux volets, comparer le contenu des dossiers et synchroniser entre eux. Lors d'une synchronisation de My Drive vers un Drive partagé, RcloneView s'ajuste automatiquement aux limitations des Drive partagés — les fichiers contenant des caractères non pris en charge sont renommés, et les fichiers de raccourci sont résolus ou ignorés selon votre préférence.

## Synchroniser Google Drive avec d'autres fournisseurs cloud

L'explorateur à deux volets de RcloneView place Google Drive à côté de n'importe quel autre distant. Synchronisez l'intégralité de votre Drive vers Backblaze B2 pour une sauvegarde abordable, copiez un dossier de projet spécifique vers AWS S3 pour l'archivage, ou déplacez d'anciens fichiers vers Wasabi pour un stockage froid économique.

Google Drive utilise des sommes de contrôle MD5 pour vérifier l'intégrité des fichiers. RcloneView prend nativement en charge la comparaison MD5 lors de la synchronisation, de sorte que seuls les fichiers ayant réellement changé sont transférés. Cela permet d'économiser à la fois du temps et du quota d'API. Pour les Google Docs, Sheets et Slides — stockés dans des formats natifs au cloud sans taille de fichier fixe — RcloneView les exporte vers des formats standards (docx, xlsx, pptx) lors du téléchargement et de la synchronisation.

Pour les transferts volumineux, vous pouvez configurer des téléchargements multithread et ajuster la taille des blocs. Google Drive prend en charge les téléversements reprenables pour les fichiers de plus de 5 Mo, et RcloneView tire parti de cette fonctionnalité pour se remettre des interruptions sans redémarrer le fichier entier.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## Planifier des sauvegardes automatisées de Google Drive

Une seule copie de vos données sur Google Drive n'est pas une sauvegarde. Les suppressions accidentelles, les suspensions de compte et les ransomwares peuvent tous entraîner une perte de données. Une sauvegarde indépendante vers un fournisseur distinct ajoute un filet de sécurité crucial.

Le planificateur de RcloneView automatise ce processus. Configurez une tâche de synchronisation nocturne de Google Drive vers AWS S3 ou Backblaze B2, et RcloneView gère la détection des différences, le transfert et la journalisation. Le panneau d'historique des tâches enregistre chaque exécution avec des statistiques — fichiers transférés, fichiers ignorés, total d'octets déplacés et temps écoulé.

Pour les administrateurs Workspace, les sauvegardes planifiées des Drive partagés garantissent que les données de l'équipe sont répliquées indépendamment de l'infrastructure de Google. Associez les sauvegardes planifiées au chiffrement (à l'aide d'un distant crypt) pour une couche de protection supplémentaire.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## Comparer les dossiers et vérifier les données

Avant de vous engager dans une synchronisation volumineuse, la fonction de comparaison de RcloneView montre exactement ce qui va changer. Sélectionnez deux dossiers — l'un sur Google Drive, l'autre sur un autre distant — et RcloneView met en évidence les fichiers qui n'existent que d'un côté, les fichiers qui diffèrent en taille ou en hash, et les fichiers identiques.

Cela est particulièrement utile après une migration. Effectuez une comparaison entre votre source Google Drive et la destination de sauvegarde pour confirmer que chaque fichier est arrivé intact. La comparaison visuelle facilite le repérage des lacunes et leur résolution avant de mettre hors service l'original.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## Monter Google Drive comme lecteur local

RcloneView peut monter Google Drive comme une lettre de lecteur local sur Windows ou un point de montage sur macOS et Linux. Cela vous permet d'accéder directement aux fichiers de Drive depuis n'importe quelle application — gestionnaires de fichiers, éditeurs vidéo ou outils en ligne de commande — sans avoir à les télécharger au préalable.

Activez la mise en cache VFS pour de meilleures performances. Cela stocke localement les fichiers récemment consultés afin que les lectures suivantes soient instantanées. La taille du cache et son expiration sont configurables. Le montage est particulièrement utile pour les flux de travail médias où vous devez parcourir ou prévisualiser des fichiers Drive sans synchronisation complète.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## Surveiller les transferts en temps réel

Lors de transferts volumineux, RcloneView fournit un tableau de bord de surveillance en temps réel affichant la vitesse de transfert, la progression par fichier et le pourcentage d'achèvement global. Vous pouvez mettre en pause, reprendre ou annuler des transferts individuels sans affecter le reste de la file d'attente. La limitation de bande passante empêche les transferts Google Drive de saturer votre réseau — définissez une limite pendant les heures de bureau et autorisez la pleine vitesse la nuit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## Parcourir et gérer les fichiers

L'explorateur de RcloneView offre des capacités que l'interface web de Google Drive ne propose pas — opérations groupées sur des dizaines de milliers de fichiers, glisser-déposer entre deux fournisseurs cloud quelconques, et comparaison de dossiers côte à côte. Vous pouvez renommer, déplacer, supprimer et créer des dossiers directement sur Google Drive via l'explorateur. Les Drive partagés, les raccourcis et les structures de dossiers imbriquées sont tous navigables dans le panneau de l'explorateur.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisez votre compte Google via OAuth dans le gestionnaire de distants et sélectionnez votre type de Drive (My Drive ou Drive partagé).
3. Parcourez votre Google Drive dans l'explorateur à deux volets et configurez une tâche de synchronisation ou de copie vers un autre fournisseur.
4. Planifiez une sauvegarde quotidienne pour conserver une copie redondante sur S3, B2 ou un autre cloud.

Google Drive gère la collaboration et l'édition de documents, mais RcloneView garantit que vos données sont sauvegardées, portables et accessibles sur tous les clouds que vous utilisez.

---

**Guides associés :**

- [Ajouter Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Monter le stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
