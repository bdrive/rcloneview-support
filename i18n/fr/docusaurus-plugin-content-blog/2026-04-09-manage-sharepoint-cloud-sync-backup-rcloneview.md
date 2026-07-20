---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "Gérer les fichiers SharePoint et la synchronisation cloud avec RcloneView"
authors:
  - tayson
description: "Gérez les fichiers SharePoint Online avec RcloneView. Synchronisez, sauvegardez et transférez des données entre les bibliothèques de documents SharePoint et d'autres fournisseurs cloud grâce à une interface graphique visuelle."
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - RcloneView
  - sharepoint
  - cloud-storage
  - cloud-sync
  - guide
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer les fichiers SharePoint et la synchronisation cloud avec RcloneView

> SharePoint Online alimente la gestion documentaire au sein de Microsoft 365, mais synchroniser son contenu vers des clouds externes ou un NAS nécessite un outil dédié — **RcloneView** comble cette lacune.

SharePoint Online est le socle de gestion documentaire de millions d'organisations utilisant Microsoft 365. Chaque site SharePoint contient des bibliothèques de documents qui stockent les fichiers d'équipe, les ressources de projet et les archives de l'entreprise. Bien que le client de synchronisation natif OneDrive puisse synchroniser les bibliothèques SharePoint vers des machines locales, il ne propose aucun mécanisme pour répliquer les données vers AWS S3, Google Drive ou un stockage externe. RcloneView se connecte à SharePoint Online via l'API Microsoft Graph et expose les bibliothèques de documents comme des remotes navigables — parcourez, synchronisez, copiez, déplacez et planifiez des sauvegardes entre SharePoint et n'importe quel autre fournisseur.

Que vous ayez besoin de sauvegarder une bibliothèque sensible en matière de conformité vers un stockage S3 immuable, ou de migrer le site SharePoint d'une équipe partante vers Google Workspace, RcloneView s'en charge via une interface visuelle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter SharePoint dans RcloneView

Les remotes SharePoint dans RcloneView sont configurés via le type de remote OneDrive. Lors de l'autorisation OAuth, sélectionnez **SharePoint site** au lieu de OneDrive Personal ou Business. RcloneView interroge l'API Graph pour obtenir les sites disponibles et vous permet de choisir le site cible et la bibliothèque de documents.

Chaque bibliothèque de documents apparaît comme un chemin navigable distinct. Si votre organisation compte des dizaines de sites SharePoint — Marketing, Ingénierie, Juridique, RH — vous pouvez ajouter chacun comme un remote séparé ou basculer entre les bibliothèques au sein d'une seule configuration de remote.

La limitation de débit de l'API SharePoint suit les mêmes schémas que OneDrive for Business — des réponses 429 avec des en-têtes Retry-After. RcloneView les respecte automatiquement, en utilisant un backoff exponentiel pour garantir que les transferts volumineux se terminent sans intervention manuelle.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## Naviguer dans les bibliothèques de documents SharePoint

Les bibliothèques de documents SharePoint peuvent contenir des structures de dossiers imbriquées, des colonnes de métadonnées et des fichiers versionnés. L'explorateur de RcloneView affiche l'arborescence des dossiers et la liste des fichiers dans sa disposition familière à deux volets. Vous pouvez parcourir des hiérarchies de dossiers profondes, sélectionner des fichiers dans plusieurs dossiers et effectuer des opérations groupées — copier, déplacer, supprimer ou télécharger.

SharePoint impose des restrictions de nom de fichier plus strictes que de nombreux autres fournisseurs. Des caractères comme `#`, `%` et `*` sont interdits, et la longueur des chemins est limitée à 400 caractères. Lors d'une synchronisation depuis un fournisseur moins restrictif (comme Google Drive ou un système de fichiers local) vers SharePoint, RcloneView encode ou remplace automatiquement les caractères restreints pour éviter les échecs de transfert.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## Synchroniser SharePoint avec d'autres fournisseurs cloud

Les organisations ont fréquemment besoin de répliquer les données SharePoint vers des systèmes externes — un cloud secondaire pour la reprise après sinistre, un NAS pour un accès local, ou une suite cloud différente lors d'une migration de plateforme. RcloneView simplifie cette tâche.

Ouvrez votre bibliothèque SharePoint dans un volet et la destination (AWS S3, Google Drive, Backblaze B2, un chemin local) dans l'autre. RcloneView compare les listes de fichiers en utilisant la taille et la date de modification, ne transférant que les fichiers modifiés. Pour les migrations initiales comportant des milliers de fichiers, les transferts multithreads et les tailles de blocs configurables maintiennent l'efficacité du processus.

SharePoint stocke les empreintes de fichiers au format QuickXorHash, le même algorithme utilisé par OneDrive for Business. RcloneView prend en charge QuickXorHash nativement, permettant une détection précise des différences sans télécharger le contenu des fichiers à des fins de comparaison.

## Planifier des sauvegardes SharePoint automatisées

Les politiques de rétention intégrées et la corbeille de SharePoint offrent une certaine protection, mais elles fonctionnent au sein de l'écosystème Microsoft. Une attaque par ransomware qui compromet votre tenant Microsoft 365 peut affecter les données SharePoint comme tout le reste. Une sauvegarde indépendante vers un fournisseur distinct constitue la protection la plus solide.

Le planificateur de RcloneView automatise cela. Configurez une tâche de synchronisation nocturne d'une bibliothèque de documents SharePoint vers AWS S3 avec le versioning activé, et RcloneView s'occupe du reste. Le panneau d'historique des tâches enregistre chaque exécution avec des statistiques de transfert, ce qui permet de vérifier facilement que les sauvegardes se terminent avec succès.

Pour les organisations soumises à des exigences de conformité, associer des sauvegardes SharePoint planifiées avec S3 Object Lock ou la fonctionnalité de verrouillage de fichiers de Backblaze B2 crée une archive immuable qui satisfait les exigences réglementaires de conservation des données.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## Comparer les dossiers et vérifier les migrations

Après avoir synchronisé ou migré une bibliothèque SharePoint, utilisez la fonction de comparaison de RcloneView pour vérifier l'exhaustivité. Sélectionnez la source SharePoint et la destination de sauvegarde, et RcloneView met en évidence les fichiers qui n'existent que d'un côté, les fichiers qui diffèrent et les fichiers identiques. Cette vérification visuelle élimine les incertitudes et garantit l'intégrité des données avant de désaffecter l'original.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## Monter SharePoint comme un lecteur local

RcloneView peut monter une bibliothèque de documents SharePoint comme une lettre de lecteur local (Windows) ou un point de montage (macOS/Linux). Cela vous permet d'accéder aux fichiers SharePoint depuis n'importe quelle application de bureau — logiciel de CAO, éditeurs d'images ou outils d'analyse — sans la surcharge du client de synchronisation OneDrive.

Activez la mise en cache VFS pour stocker localement les fichiers récemment consultés afin d'obtenir un accès répété rapide. Ceci est particulièrement utile pour les équipes qui doivent travailler avec des fichiers hébergés sur SharePoint dans des applications ne prenant pas en charge nativement le stockage cloud.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## Surveiller les transferts

Les migrations SharePoint volumineuses peuvent impliquer des centaines de milliers de fichiers. Le tableau de bord de surveillance en temps réel de RcloneView affiche la vitesse de transfert, la progression par fichier et l'avancement global. Vous pouvez mettre en pause, reprendre ou annuler les transferts individuellement. Les limites de bande passante empêchent les transferts SharePoint de consommer toute votre connexion réseau pendant les heures de bureau.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisez votre compte Microsoft 365 via OAuth et sélectionnez le site SharePoint et la bibliothèque de documents.
3. Parcourez votre bibliothèque SharePoint dans l'explorateur à deux volets et configurez une tâche de synchronisation ou de copie vers un autre fournisseur.
4. Planifiez une sauvegarde quotidienne pour maintenir une copie indépendante sur S3, B2 ou un autre cloud.

SharePoint gère la gestion documentaire au sein de Microsoft 365, mais RcloneView garantit que vos données SharePoint sont sauvegardées, portables et accessibles sur tous les clouds que vous utilisez.

---

**Guides connexes :**

- [Ajouter un remote via connexion basée sur le navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
