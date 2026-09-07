---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "Migrer de Jottacloud vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Déplacez vos fichiers de Jottacloud vers Dropbox avec RcloneView. Synchronisez des dossiers, vérifiez les transferts et gérez les deux distants dans une seule fenêtre."
keywords:
  - migrer jottacloud vers dropbox
  - transfert jottacloud vers dropbox
  - migration jottacloud dropbox
  - RcloneView jottacloud
  - RcloneView dropbox
  - transfert de cloud à cloud
  - déplacer des fichiers entre stockages cloud
  - alternative à jottacloud
  - outil de migration dropbox
  - migration de stockage cloud européen
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Jottacloud vers Dropbox — Transférer des fichiers avec RcloneView

> Déplacez vos fichiers de Jottacloud vers Dropbox sans rien télécharger d'abord sur votre bureau.

Les équipes qui ont commencé avec Jottacloud pour sa résidence des données européenne ont parfois besoin de tout consolider vers Dropbox lorsque la collaboration avec des partenaires internationaux devient prioritaire. Tout télécharger localement puis le re-téléverser gaspille de la bande passante et risque de casser les structures de dossiers. RcloneView se connecte aux deux distants à la fois et déplace les fichiers directement entre eux, de sorte que le transfert se fait de cloud à cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Jottacloud et Dropbox côte à côte

Ajoutez les deux comptes de stockage via l'onglet Remote > New Remote. Dropbox se connecte via une connexion navigateur standard — sans clé API à gérer. Une fois ajouté, chaque distant obtient son propre onglet dans le panneau Explorer, et vous pouvez ouvrir Jottacloud dans un panneau et Dropbox dans un autre pour une vue côte à côte des deux arborescences de dossiers avant de déplacer quoi que ce soit.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau distant cloud dans RcloneView" class="img-large img-center" />

Parcourir les deux comptes avant de démarrer le transfert vous permet de confirmer que les conventions de nommage des dossiers correspondent, ou de planifier une nouvelle structure côté Dropbox si la source s'est désorganisée avec le temps.

## Exécuter le transfert de cloud à cloud

Utilisez l'assistant de synchronisation depuis l'onglet Home pour configurer Jottacloud comme source et Dropbox comme destination. Réglez le sens de synchronisation sur unidirectionnel afin que Dropbox reflète la source sans que RcloneView ne supprime quoi que ce soit sur Jottacloud en retour. À l'étape 3, appliquez des filtres pour ignorer les types de fichiers dont vous n'avez pas besoin dans le nouvel emplacement — exclure les fichiers `.iso` ou des dossiers `.git/` entiers permet de concentrer le transfert sur le contenu qui compte réellement.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuration d'une tâche de synchronisation de cloud à cloud de Jottacloud vers Dropbox" class="img-large img-center" />

Exécutez d'abord un Dry Run. Il liste exactement les fichiers qui seront copiés sans toucher à aucun des deux comptes, ce qui est le moyen le plus rapide de repérer un filtre mal configuré avant qu'il n'affecte des milliers de fichiers.

## Vérifier que chaque fichier est bien arrivé

Une fois le transfert terminé, ouvrez Folder Compare et pointez-le vers les mêmes chemins sur Jottacloud et Dropbox. Les fichiers de taille identique s'affichent comme identiques ; tout ce qui diffère ou n'a pas pu être copié est signalé afin que vous puissiez ne relancer que ces éléments. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, donc cette étape de vérification fonctionne de la même manière quels que soient les deux clouds comparés.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers Jottacloud et Dropbox après la migration" class="img-large img-center" />

Job History enregistre la taille, la vitesse et le nombre de fichiers de la synchronisation terminée, ce qui vous donne un historique à consulter si quelqu'un demande comment la migration s'est déroulée.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez vos distants Jottacloud et Dropbox depuis l'onglet Remote.
3. Créez une tâche de synchronisation unidirectionnelle avec Jottacloud comme source et Dropbox comme destination, puis exécutez un Dry Run.
4. Exécutez la synchronisation et confirmez les résultats avec Folder Compare.

Une fois la vérification faite, gardez les deux distants connectés pendant un moment afin de repérer tout fichier ajouté à l'ancien compte Jottacloud avant que la bascule ne soit complète.

---

**Guides connexes :**

- [Gérer le stockage Jottacloud — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Gérer le stockage Dropbox — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Migrer de Jottacloud vers Wasabi — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
