---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "Migrer de Koofr vers Jottacloud — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Déplacez vos fichiers de Koofr vers Jottacloud avec RcloneView — un transfert cloud à cloud vérifié entre deux fournisseurs de stockage européens axés sur la confidentialité."
keywords:
  - migrer de Koofr vers Jottacloud
  - transfert Koofr vers Jottacloud
  - RcloneView Koofr
  - RcloneView Jottacloud
  - migration cloud européen
  - transfert cloud à cloud
  - synchronisation Koofr Jottacloud
  - déplacer des fichiers entre clouds
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Koofr vers Jottacloud — Transférer des fichiers avec RcloneView

> Déplacez vos fichiers de Koofr vers Jottacloud directement, de cloud à cloud, sans passer d'abord par un dossier de téléchargement local.

Koofr et Jottacloud sont tous deux des fournisseurs de stockage basés en Europe, appréciés des utilisateurs qui privilégient la résidence des données et la confidentialité, et il est courant de tout regrouper sur l'un des deux après avoir comparé les forfaits ou les limites de compte. Effectuer cette migration en téléchargeant tout sur un ordinateur portable puis en le retéléversant gaspille de la bande passante et du temps, et expose à des transferts partiels si la connexion se coupe en cours de route. RcloneView se connecte aux deux distants à la fois et copie les fichiers directement entre eux, de sorte que le transfert ne fait que transiter par votre machine locale, sans en faire une étape de stockage.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants

Ajoutez Koofr comme distant via l'onglet Distant > Nouveau distant, puis répétez l'opération pour Jottacloud. Les deux se connectent via leur propre processus d'authentification de compte plutôt que via un écran de connexion partagé, gardez donc les identifiants de chaque fournisseur à portée de main avant de commencer. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, ce qui signifie que cette même configuration fonctionne de manière identique quelle que soit la plateforme depuis laquelle vous migrez.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

Une fois que les deux distants apparaissent dans le Gestionnaire de distants, ouvrez deux panneaux de l'Explorateur côte à côte — l'un affichant Koofr, l'autre Jottacloud — afin de voir les deux arborescences de fichiers en même temps avant de déplacer quoi que ce soit.

## Réaliser le transfert

Pour une migration ponctuelle, faites glisser les dossiers à déplacer depuis le panneau Koofr directement sur le panneau Jottacloud. Comme il s'agit d'un transfert entre deux distants différents, RcloneView traite ce dépôt comme une copie par défaut, laissant les fichiers originaux de Koofr intacts jusqu'à ce que vous ayez confirmé que tout est bien arrivé sur Jottacloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

Pour une bibliothèque plus volumineuse, l'assistant de synchronisation en 4 étapes est le meilleur outil : définissez Koofr comme source et Jottacloud comme destination, exécutez d'abord une simulation (Dry Run) pour prévisualiser exactement ce qui sera copié, puis lancez la synchronisation réelle. La simulation est disponible sur tous les niveaux de licence, il n'y a donc aucune raison de sauter cet aperçu avant de valider une migration importante.

## Vérifier que le déplacement est terminé

Une fois le transfert terminé, utilisez la Comparaison de dossiers pour vérifier les deux côtés fichier par fichier — elle signale tout ce qui n'existe que d'un seul côté ou qui a été transféré avec une taille différente, ce qui permet de repérer les téléversements partiels avant de supprimer quoi que ce soit de Koofr.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

L'Historique des tâches conserve également un enregistrement permanent de l'exécution — nombre de fichiers, taille totale et durée —, qu'il vaut la peine de capturer en image ou d'exporter si vous devez justifier la migration plus tard pour la résiliation d'un compte.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez à la fois Koofr et Jottacloud comme distants via l'onglet Distant > Nouveau distant.
3. Utilisez le glisser-déposer pour un déplacement rapide, ou construisez une tâche de synchronisation avec simulation pour une migration complète de bibliothèque.
4. Exécutez ensuite la Comparaison de dossiers pour confirmer que tous les fichiers sont bien arrivés avant de supprimer quoi que ce soit de Koofr.

Avec les deux fournisseurs connectés dans la même fenêtre, la consolidation du stockage cloud européen devient une tâche réalisable en une seule session plutôt qu'un projet de téléchargement puis retéléversement s'étalant sur plusieurs jours.

---

**Guides associés :**

- [Synchroniser Koofr avec Proton Drive — Sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Migrer de Jottacloud vers OneDrive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr contre Jottacloud — Comparatif du stockage cloud européen avec RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
