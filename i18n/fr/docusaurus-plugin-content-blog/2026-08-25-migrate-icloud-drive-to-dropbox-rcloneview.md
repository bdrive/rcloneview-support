---
slug: migrate-icloud-drive-to-dropbox-rcloneview
title: "Migrer d'iCloud Drive vers Dropbox — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Déplacez vos fichiers d'iCloud Drive vers Dropbox avec RcloneView — une interface graphique multiplateforme qui connecte les deux clouds pour un transfert direct et vérifiable."
keywords:
  - migrer iCloud Drive vers Dropbox
  - transfert d'iCloud vers Dropbox
  - du cloud Apple vers Dropbox
  - migration iCloud Drive
  - transfert cloud à cloud RcloneView
  - passer d'iCloud à Dropbox
  - sauvegarde iCloud Drive vers Dropbox
  - transférer des fichiers Apple vers Dropbox
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - dropbox
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer d'iCloud Drive vers Dropbox — Transférer des fichiers avec RcloneView

> Quitter iCloud Drive implique généralement de tout télécharger d'abord sur un Mac — RcloneView se connecte directement aux deux clouds et transfère les fichiers sans ce détour local.

Quitter l'écosystème Apple, passer à une équipe multiplateforme, ou simplement consolider son stockage dans Dropbox aboutissent tous au même problème : iCloud Drive n'offre pas d'export natif vers un autre fournisseur de cloud. La solution habituelle consiste à télécharger toute la bibliothèque sur un disque local puis à la réuploader vers Dropbox, ce qui double le temps de transfert et consomme de l'espace disque local dont vous ne disposez peut-être pas en excès. RcloneView, qui s'appuie sur rclone v1.69+ pour la prise en charge d'iCloud Drive, se connecte aux deux distants à la fois et déplace les fichiers directement de cloud à cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter iCloud Drive et Dropbox

iCloud Drive nécessite rclone v1.69 ou une version ultérieure, ce que satisfait déjà le rclone intégré fourni par défaut avec RcloneView — aucune configuration séparée n'est nécessaire. Ajoutez le distant iCloud Drive avec vos identifiants de compte Apple, puis ajoutez Dropbox via sa connexion OAuth dans le navigateur. Les deux distants apparaissent alors sous forme d'onglets dans l'Explorateur, et vous pouvez les ouvrir côte à côte dans une disposition à deux panneaux pour parcourir chaque bibliothèque avant de lancer le transfert. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux, de sorte que ce même flux de travail fonctionne aussi bien depuis un Mac que depuis un PC Windows gérant le stockage Apple partagé d'une famille.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Drive remote alongside Dropbox in RcloneView" class="img-large img-center" />

## Exécuter la migration comme une tâche de synchronisation

Plutôt que de glisser les dossiers un par un, configurez une tâche de synchronisation unidirectionnelle dans l'assistant en 4 étapes : la source est iCloud Drive, la destination est Dropbox, et le sens est « Modifier uniquement la destination », de sorte que rien ne change côté iCloud. Pour une bibliothèque volumineuse de photos ou de documents, exécuter d'abord un Dry Run montre exactement ce qui sera copié avant tout déplacement de données — ce qui vaut particulièrement la peine étant donné la quantité de contenu personnel qui a tendance à s'accumuler dans iCloud Drive au fil des années.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from iCloud Drive to Dropbox in RcloneView" class="img-large img-center" />

## Suivre le transfert et confirmer son achèvement

Les bibliothèques volumineuses prennent du temps, en particulier pour d'importantes collections de photos ou de documents. L'onglet Transferring affiche la progression en direct, la vitesse et le nombre de fichiers, tandis que Job History enregistre l'exécution terminée avec la taille totale et les fichiers en erreur, afin que vous puissiez repérer ce qui nécessite une nouvelle tentative. Si un transfert est interrompu en cours de route, le paramètre de nouvelle tentative automatique de RcloneView relance la synchronisation (3 tentatives par défaut) pour récupérer ce qui n'a pas été terminé.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed iCloud Drive to Dropbox transfer in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre distant iCloud Drive (nécessite rclone v1.69+, inclus par défaut) et votre distant Dropbox via une connexion OAuth.
3. Exécutez un Dry Run pour prévisualiser les fichiers qui seront transférés avant de valider.
4. Créez une tâche de synchronisation unidirectionnelle et suivez-la jusqu'à son achèvement dans Job History.

Une fois la tâche de synchronisation configurée, répéter le transfert pour les fichiers nouvellement ajoutés se résume à un seul clic plutôt qu'à un nouvel export manuel.

---

**Guides associés :**

- [Migrer d'iCloud Drive vers Google Drive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [Migrer d'iCloud Drive vers OneDrive — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-onedrive-rcloneview)
- [Gérer le stockage iCloud Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)

<CloudSupportGrid />
