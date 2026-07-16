---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "Migrer iCloud Drive vers OneDrive — Transférer des fichiers avec RcloneView"
authors:
  - alex
description: "Guide étape par étape pour migrer les fichiers iCloud Drive vers Microsoft OneDrive à l'aide de la synchronisation cloud à cloud de RcloneView, de l'aperçu en mode simulation (dry-run) et des outils de vérification par comparaison de dossiers."
keywords:
  - migration iCloud Drive vers OneDrive
  - migrer iCloud vers Microsoft OneDrive
  - transfert iCloud Drive OneDrive
  - passer d'iCloud à OneDrive
  - migration cloud Apple Microsoft
  - sauvegarde iCloud Drive OneDrive
  - migration iCloud RcloneView
  - déplacer des fichiers d'iCloud vers OneDrive
  - migration de fichiers cloud multiplateforme
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer iCloud Drive vers OneDrive — Transférer des fichiers avec RcloneView

> Passer de l'écosystème iCloud d'Apple à Microsoft OneDrive ne signifie pas forcément télécharger puis re-téléverser manuellement des gigaoctets de fichiers — RcloneView exécute la migration sous forme de transfert direct de cloud à cloud.

Lorsque des équipes standardisent leur environnement sur Microsoft 365, ou lorsque des utilisateurs individuels passent de flux de travail centrés sur Mac à Windows, faire migrer les fichiers d'iCloud Drive vers OneDrive constitue le premier obstacle concret. Tout télécharger sur un disque local puis tout re-téléverser est lent, sujet aux interruptions, et ne permet pas de vérifier facilement que chaque fichier est arrivé intact. RcloneView traite cela comme un transfert côté serveur, avec suivi de progression intégré, aperçu en mode simulation (dry-run) et vérification par comparaison de dossiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi passer d'iCloud Drive à OneDrive ?

iCloud Drive fonctionne parfaitement au sein du matériel Apple, mais offre une intégration native limitée en dehors de cet écosystème. OneDrive, en revanche, est intégré à l'Explorateur de fichiers Windows, se connecte directement à Microsoft Office et Teams, et fonctionne sur Windows, macOS, iOS et Android avec un comportement de synchronisation cohérent. Les organisations qui déploient Microsoft 365 exigent souvent que les employés transfèrent leurs bibliothèques de fichiers existantes vers OneDrive, afin que la collaboration, l'historique des versions et les politiques d'accès passent tous par un seul système géré.

La prise en charge d'iCloud Drive dans RcloneView nécessite rclone v1.69 ou une version ultérieure. RcloneView est fourni avec un binaire rclone intégré qui répond déjà à cette exigence : aucune installation séparée de rclone n'est donc nécessaire avant de commencer.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'iCloud Drive et de OneDrive en tant que remotes dans le gestionnaire de remotes de RcloneView" class="img-large img-center" />

## Configurer les deux remotes dans RcloneView

Commencez par ajouter votre remote iCloud Drive : allez dans l'onglet **Remote**, cliquez sur **New Remote**, puis choisissez **iCloud Drive**. Suivez les instructions à l'écran pour vous authentifier avec votre compte Apple. Ajoutez ensuite votre remote OneDrive de la même manière — OneDrive utilise une connexion OAuth via le navigateur, une fenêtre de navigateur s'ouvre donc pour la connexion à votre compte Microsoft, et le remote est enregistré une fois l'autorisation terminée.

Une fois les deux remotes enregistrés, ouvrez-les côte à côte dans les panneaux de l'Explorateur. Cela vous donne une vue en direct des deux arborescences de fichiers avant que tout transfert ne commence. Utilisez **Get Size** sur la racine d'iCloud Drive pour confirmer le volume total de données, et parcourez les structures de dossiers pour repérer d'éventuelles différences de nommage ou des chemins profondément imbriqués qui pourraient se comporter différemment sur OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive et OneDrive affichés côte à côte dans l'Explorateur à deux panneaux de RcloneView pour un transfert de cloud à cloud" class="img-large img-center" />

## Exécuter la migration avec un job de synchronisation

Créez un nouveau job Sync depuis l'onglet **Home**. Définissez iCloud Drive (ou un sous-dossier spécifique) comme source et le chemin OneDrive cible comme destination. Avant d'exécuter le job, lancez un **Dry Run** : RcloneView répertorie chaque fichier et dossier qu'il transférerait, sans rien déplacer réellement. Sur une bibliothèque iCloud de 50 Go, cette analyse ne prend que quelques minutes et fait apparaître les fichiers surdimensionnés ou les caractères de nom de fichier qu'OneDrive gère différemment.

Contrairement aux outils limités au montage, RcloneView permet aussi de synchroniser et de comparer des dossiers avec la licence GRATUITE — le flux de migration complet, du dry-run au transfert en direct jusqu'à la vérification, ne nécessite donc aucune mise à niveau payante.

Une fois que le résultat du dry-run vous semble correct, démarrez le transfert en direct. L'onglet **Transferring** affiche la progression en temps réel, la vitesse et le fichier en cours de transfert. Si la connexion est interrompue, relancez simplement le même job : rclone ignore les fichiers déjà présents à destination avec une taille identique, de sorte que le transfert reprend efficacement là où il s'était arrêté.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vue Folder Compare dans RcloneView confirmant que le contenu des dossiers iCloud Drive et OneDrive correspond après la migration" class="img-large img-center" />

## Vérifier la migration avec Folder Compare

Une fois le job Sync terminé, ouvrez **Folder Compare** depuis l'onglet **Home** et pointez-le vers la même source iCloud Drive et la même destination OneDrive. Le moteur de comparaison indique quels fichiers sont identiques, lesquels diffèrent en taille, et ceux qui n'apparaissent que d'un seul côté. Parcourir les filtres left-only et right-only est le moyen le plus rapide de confirmer une absence totale de perte de données sans vérifier les fichiers un par un manuellement.

Si vous menez une migration progressive — utilisant encore activement iCloud Drive sur certains appareils tout en faisant transiter les autres vers OneDrive — les utilisateurs de la licence PLUS peuvent associer une planification au job de synchronisation. Tout nouveau fichier ajouté à iCloud Drive se réplique automatiquement vers OneDrive à chaque exécution planifiée, jusqu'à ce que la bascule soit terminée.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'un job de synchronisation récurrent d'iCloud Drive vers OneDrive dans RcloneView pour une transition de migration progressive" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre remote **iCloud Drive** via **Remote** > **New Remote** et terminez l'authentification du compte Apple.
3. Ajoutez votre remote **OneDrive** via une connexion OAuth dans le navigateur.
4. Créez un job Sync avec iCloud Drive comme source et OneDrive comme destination ; lancez d'abord un **Dry Run**.
5. Après le transfert en direct, utilisez **Folder Compare** pour confirmer que tous les fichiers ont bien migré.

Une migration complète vers OneDrive vous offre un accès cohérent sur Windows, Microsoft 365 et Teams — sans laisser vos fichiers durablement répartis entre deux services.

---

**Guides connexes :**

- [Gérer la synchronisation cloud d'iCloud Drive avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Gérer OneDrive — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrer iCloud Drive vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
