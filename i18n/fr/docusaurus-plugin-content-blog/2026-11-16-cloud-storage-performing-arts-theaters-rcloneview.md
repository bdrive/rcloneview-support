---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "Stockage cloud pour les théâtres — Protégez scripts, conduites et vidéos de répétition avec RcloneView"
authors:
  - tayson
description: "Découvrez comment les compagnies de théâtre utilisent RcloneView pour synchroniser scripts, fichiers de conduite lumière et son, et vidéos de répétition entre clouds et NAS avec des sauvegardes planifiées."
keywords:
  - stockage cloud pour les théâtres
  - sauvegarde des fichiers de production théâtrale
  - stockage cloud pour le spectacle vivant
  - sauvegarder les conduites lumière et son
  - sauvegarde cloud des vidéos de répétition
  - synchronisation des fichiers de scénographie
  - archives théâtrales du NAS vers le cloud
  - RcloneView pour les compagnies de théâtre
  - sauvegarde multi-cloud pour les structures culturelles
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les théâtres — Protégez scripts, conduites et vidéos de répétition avec RcloneView

> Le soir de la première dépend des fichiers : la bonne version du texte, les conduites son définitives et le plan de feux validé par la conceptrice.

Une compagnie de théâtre régionale jongle avec une quantité surprenante de données. La mise en scène partage les versions du texte dans Google Drive, le créateur son livre ses conduites via Dropbox, les vidéos de répétition s'accumulent sur un Synology NAS en régie, et les archives des saisons passées dorment sur des disques externes vieillissants. RcloneView rassemble tout cela dans une seule fenêtre, pour que l'équipe de production puisse synchroniser, comparer et sauvegarder chaque dossier de spectacle sans jongler entre plusieurs applications.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter tous les emplacements de stockage de la production

Chaque service a tendance à choisir son propre outil ; la première étape consiste donc à tout rendre visible. Dans RcloneView, ajoutez Google Drive et Dropbox via une connexion dans le navigateur, connectez le NAS de la régie grâce à la détection automatique Synology, puis ajoutez un bucket de stockage objet comme Backblaze B2 ou Wasabi pour l'archivage à long terme. Les dossiers partagés que les concepteurs externes envoient via Google Drive peuvent être ajoutés comme distant Google Drive Shared with Me.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

Avec jusqu'à quatre panneaux d'explorateur ouverts côte à côte, la régie plateau peut glisser la dernière conduite générale depuis Drive vers le dossier du spectacle sur le NAS, ou récupérer les rendus d'une conceptrice depuis Dropbox vers le bucket d'archives. Un glisser-déposer entre distants différents copie les fichiers : l'original reste là où la conceptrice l'a laissé.

## Garder conduites et textes cohérents avant la semaine technique

L'erreur classique de la semaine technique : jouer le spectacle avec un fichier de conduite obsolète. Folder Compare de RcloneView place le dossier de livraison du créateur son à côté de la copie en régie et met en évidence les fichiers présents d'un seul côté ou de taille différente. Copiez les conduites modifiées en un clic, et elles sont marquées comme identiques dans la vue de comparaison.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

Pour le dossier complet du spectacle, une tâche Sync précédée d'un Dry Run montre exactement ce qui sera copié ou supprimé, ce qui compte lorsqu'un metteur en scène a discrètement réorganisé le dossier du texte.

## Sauvegarder les vidéos de répétition vers deux destinations à la fois

Les captations de répétition et d'archives sont volumineuses et irremplaçables. La synchronisation 1:N de RcloneView réplique un dossier source vers plusieurs destinations en une seule tâche : le dossier vidéo du NAS peut ainsi partir à la fois vers un bucket B2 et vers un second cloud. Contrairement aux outils de montage seul, RcloneView synchronise et compare aussi les dossiers — avec la FREE License.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

Les contrats des comédiens et les exports de paie méritent une attention particulière. Enveloppez un dossier cloud dans un distant Crypt pour que les noms et le contenu des fichiers soient chiffrés avant de quitter le bureau.

## Automatiser les sauvegardes nocturnes pendant l'exploitation

Avec une PLUS License, le planificateur de type crontab de l'assistant de tâches lance les sauvegardes après chaque représentation du soir, par exemple à 1h00, et Simulate schedule affiche les prochaines exécutions. Job History enregistre chaque exécution avec son statut, sa taille et son nombre de fichiers, offrant à la direction de production un historique clair si une question se pose en cours d'exploitation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez les distants que vos services utilisent déjà : Google Drive, Dropbox, votre NAS et un bucket d'archives.
3. Utilisez Folder Compare pour vérifier que la copie des conduites en régie correspond à la dernière livraison du concepteur.
4. Créez une tâche Sync 1:N pour les vidéos de répétition et planifiez-la chaque nuit avec PLUS.

Une fois les fichiers protégés, l'équipe peut se concentrer sur le spectacle.

---

**Guides associés :**

- [Workflow de stockage cloud pour les équipes de production vidéo — Synchronisez rushes, proxys et masters avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [Stockage cloud pour la production musicale — Gérez sessions, stems et sauvegardes avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [Synchronisation 1:N — Synchronisez une source vers plusieurs destinations dans RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
