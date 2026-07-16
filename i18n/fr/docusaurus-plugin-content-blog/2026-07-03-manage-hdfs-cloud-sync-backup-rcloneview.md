---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "Gérer le stockage HDFS — Synchronisation et sauvegarde de fichiers avec RcloneView"
authors:
  - kai
description: "Connectez des clusters Hadoop Distributed File System (HDFS) à RcloneView pour parcourir, synchroniser et sauvegarder du stockage big data sur plus de 90 fournisseurs cloud."
keywords:
  - hdfs rcloneview
  - gérer le stockage cloud hdfs
  - interface graphique hadoop distributed file system
  - migration hdfs vers le cloud
  - sauvegarde cloud hdfs
  - synchroniser hdfs vers le stockage cloud
  - interface hdfs rclone
  - synchronisation cloud hybride pour data lake
  - sauvegarde cloud hadoop sur site
tags:
  - RcloneView
  - self-hosted
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gérer le stockage HDFS — Synchronisation et sauvegarde de fichiers avec RcloneView

> Les clusters Hadoop conservent des années de données traitées, mais déplacer ces données entre le stockage sur site et le cloud implique généralement de passer par des scripts et des outils en ligne de commande — RcloneView offre à HDFS un espace visuel à la place.

Hadoop Distributed File System (HDFS) est la couche de stockage derrière d'innombrables pipelines big data sur site, mais il ne propose pas de moyen simple d'inspecter, de transférer ou d'archiver ces données en dehors de l'écosystème Hadoop. RcloneView se connecte à HDFS en tant que distant basé sur un protocole, aux côtés de SFTP, FTP et WebDAV, ce qui permet à un ingénieur de données de parcourir le contenu du cluster dans un explorateur de fichiers familier et de déplacer des jeux de données vers et depuis le stockage cloud sans écrire de tâche distcp ni de script personnalisé. Il fonctionne de la même manière sous Windows, macOS et Linux, ce qui compte lorsque votre équipe de données n'utilise pas tous le même système d'exploitation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter un cluster HDFS en tant que distant

HDFS relève de la catégorie de stockage basée sur un protocole de RcloneView, configurée via le même assistant Nouveau distant utilisé pour les connexions SFTP et WebDAV. Une fois le cluster ajouté, il apparaît sous son propre onglet dans le panneau Explorateur, avec l'arborescence de dossiers standard, la liste de fichiers et l'aperçu en miniatures disponibles pour parcourir les jeux de données stockés sur les namenodes du cluster. Les opérations du clic droit — copier, télécharger, renommer, Obtenir la taille — fonctionnent exactement comme sur tout autre distant, ce qui signifie que les ingénieurs peu à l'aise avec les commandes `hadoop fs` peuvent tout de même vérifier ce qui se trouve réellement dans HDFS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, si bien que la même session qui parcourt HDFS peut avoir un Google Drive, un bucket S3 ou un disque local ouvert dans un panneau adjacent pour une comparaison directe.

## Relier le stockage sur site au stockage objet cloud

La raison la plus courante de connecter HDFS à RcloneView est de sortir les données froides ou traitées d'un cluster coûteux et limité en capacité pour les transférer vers un stockage cloud moins cher en vue d'une conservation à long terme. Une tâche de synchronisation à sens unique avec la direction « Modification de la destination uniquement » copie la sortie HDFS — jeux de données traités, artefacts d'entraînement de modèles, archives de journaux — vers un bucket S3, Azure Blob ou Backblaze B2 sans toucher à la source. Les paramètres de filtrage à l'étape 3 de l'assistant de synchronisation permettent de limiter la tâche à des types de fichiers spécifiques ou d'exclure les fichiers intermédiaires `_SUCCESS` et temporaires laissés par les tâches Hadoop, de sorte que le bucket de destination ne contienne que ce qui vaut réellement la peine d'être conservé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

Pour les grands jeux de données, ajuster le nombre de transferts de fichiers et le nombre de transferts multithread dans les Paramètres avancés permet de saturer la bande passante disponible entre le cluster et la destination, tandis que le fait de garder un nombre modeste de vérificateurs d'égalité évite d'imposer une charge de lecture inutile au namenode pendant la phase de comparaison.

## Planifier des tâches d'archivage récurrentes

Les pipelines de données s'exécutent rarement une seule fois. Les utilisateurs de la licence PLUS peuvent associer une planification de type crontab à une tâche de synchronisation HDFS afin que les nouvelles sorties soient automatiquement dupliquées vers le stockage cloud après chaque exécution par lots, sans qu'il soit nécessaire de se souvenir de lancer un transfert manuel. L'historique des tâches suit ensuite chaque exécution — statut, taille transférée, durée — offrant à l'équipe une piste d'audit qui indique précisément quand chaque jeu de données a quitté le cluster et où il a atterri.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre cluster HDFS en tant que nouveau distant à l'aide de l'option de stockage basée sur un protocole.
3. Parcourez le cluster dans le panneau Explorateur pour vérifier que les jeux de données et les autorisations sont corrects.
4. Configurez une tâche de synchronisation à sens unique vers votre destination cloud d'archivage, avec des filtres pour exclure les fichiers temporaires.

Amener HDFS dans la même fenêtre que vos distants cloud transforme un processus d'exportation scripté et sujet aux erreurs en une tâche reproductible que vous pouvez surveiller et planifier.

---

**Guides connexes :**

- [Gérer le stockage MinIO — Synchronisation cloud auto-hébergée dans RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [Stockage cloud pour data scientists — Simplifiez vos jeux de données avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [Pipeline de jeux de données d'entraînement IA — Construire et synchroniser avec RcloneView](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
