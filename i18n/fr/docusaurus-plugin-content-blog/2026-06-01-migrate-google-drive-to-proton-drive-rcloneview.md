---
slug: migrate-google-drive-to-proton-drive-rcloneview
title: "Migrer de Google Drive vers Proton Drive — Transférez vos fichiers en toute sécurité avec RcloneView"
authors:
  - kai
description: "Migrez vos fichiers de Google Drive vers Proton Drive avec RcloneView — l'outil de transfert cloud avec interface graphique qui rend la migration axée sur la confidentialité simple et fiable."
keywords:
  - migrer google drive vers proton drive
  - transfert de google drive vers proton drive
  - migration de stockage cloud axée sur la confidentialité
  - outil de transfert cloud RcloneView
  - migration de fichiers de cloud à cloud
  - outil de migration proton drive
  - synchroniser google drive vers proton drive
  - déplacer des fichiers de google drive vers proton drive
  - interface graphique de migration cloud sécurisée
  - migration de confidentialité google drive
tags:
  - google-drive
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Google Drive vers Proton Drive — Transférez vos fichiers en toute sécurité avec RcloneView

> Déplacez vos fichiers de Google Drive vers Proton Drive sans ligne de commande — et vérifiez que chaque octet est bien arrivé.

Les utilisateurs soucieux de leur confidentialité migrent de plus en plus de Google Drive vers Proton Drive pour bénéficier du chiffrement de bout en bout et de la souveraineté des données basée en Suisse. Que vous soyez journaliste protégeant vos sources, entreprise gérant des données clients sensibles, ou simplement quelqu'un qui reprend le contrôle de ses fichiers personnels, déplacer manuellement des gigaoctets de données n'est pas pratique. RcloneView propose un flux de travail visuel, basé sur une interface graphique, pour transférer efficacement et de façon vérifiable tous vos fichiers entre les deux services.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Drive et Proton Drive dans RcloneView

Google Drive se connecte via OAuth — cliquez sur **New Remote** dans l'onglet Remote, sélectionnez Google Drive, puis effectuez une connexion via le navigateur. Aucune clé API ni gestion manuelle de jeton n'est nécessaire ; RcloneView gère le flux OAuth automatiquement.

Proton Drive nécessite votre adresse e-mail, votre mot de passe et, éventuellement, un code d'authentification à deux facteurs. Dans l'assistant New Remote, sélectionnez Proton Drive, saisissez vos identifiants, et le backend rclone intégré de RcloneView établit la connexion. La version minimale de rclone prise en charge pour Proton Drive est la v1.69+, que RcloneView intègre par défaut. Une fois les deux remotes affichés dans les panneaux Explorer, vous pouvez parcourir côte à côte les arborescences de répertoires de Google Drive et de Proton Drive.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Utiliser Folder Compare pour vérifier avant la migration

Avant de lancer le transfert, utilisez la fonction **Folder Compare** de RcloneView pour vérifier la source et la destination. Lancez-la depuis l'onglet Home, pointez le panneau de gauche vers la racine de votre Google Drive et le panneau de droite vers le dossier Proton Drive cible. La vue de comparaison met en évidence les fichiers présents uniquement à gauche (pas encore migrés), les fichiers présents uniquement à droite, ainsi que tout écart de taille.

Cette étape est particulièrement utile pour reprendre une migration interrompue : vous voyez immédiatement ce qui est déjà passé et pouvez concentrer le travail de transfert uniquement sur le delta restant — évitant ainsi de coûteux retransferts de données déjà arrivées en toute sécurité.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view showing Google Drive vs Proton Drive differences in RcloneView" class="img-large img-center" />

## Exécuter le travail de migration

Une fois les remotes connectés et les dossiers comparés, ouvrez le **Job Manager** et créez un nouveau travail de copie ou de synchronisation. Définissez votre dossier Google Drive comme source et le dossier Proton Drive correspondant comme destination. Dans l'étape Advanced Settings, activez **checksum** pour comparer les fichiers par hash plutôt que par seule taille — c'est particulièrement important pour Proton Drive, où le format de stockage chiffré fait que les tailles de fichiers renvoyées par l'API peuvent légèrement différer.

L'onglet **Transferring** dans le panneau inférieur affiche la progression du transfert en temps réel : nombre de fichiers, volume de données déplacées et vitesse de transfert. Si le travail est interrompu par une coupure réseau, relancez-le simplement — la logique de transfert de rclone ignore les fichiers déjà identiques et reprend là où elle s'était arrêtée.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Real-time cloud-to-cloud transfer progress between Google Drive and Proton Drive in RcloneView" class="img-large img-center" />

## Planifier une synchronisation continue pendant une période de transition

Si votre équipe est en transition progressive et que des collègues continuent d'ajouter des fichiers à Google Drive, vous pouvez planifier un travail de synchronisation récurrent pour maintenir Proton Drive à jour. Avec une licence **PLUS**, l'étape Schedule de l'assistant de travail accepte des règles de type crontab — par exemple, une synchronisation nocturne à 2 h garantit que les nouveaux fichiers sont automatiquement transférés vers Proton Drive, sans intervention manuelle.

Le **Job History** de RcloneView enregistre chaque exécution : heure de début, durée, fichiers transférés, vitesse et statut final (Completed / Errored / Canceled). Cela vous donne un historique vérifiable de l'ensemble du calendrier de migration et permet de confirmer facilement quand la bascule est terminée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History tab showing completed Google Drive to Proton Drive migration runs in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Cliquez sur **New Remote** et ajoutez Google Drive via connexion OAuth dans le navigateur.
3. Cliquez de nouveau sur **New Remote** et ajoutez Proton Drive avec votre e-mail et votre mot de passe.
4. Utilisez **Folder Compare** pour visualiser les différences entre les deux côtés.
5. Créez un travail de copie ou de synchronisation avec checksum activé et lancez le transfert.

La migration axée sur la confidentialité ne nécessite pas de sacrifier la commodité — RcloneView rend le passage à Proton Drive aussi simple que n'importe quel autre transfert de cloud à cloud.

---

**Guides connexes :**

- [Gérer Proton Drive — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Sauvegarder un disque dur vers Proton Drive avec RcloneView](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Synchroniser Proton Drive avec d'autres clouds avec RcloneView](https://rcloneview.com/support/blog/sync-proton-drive-backup-other-clouds-rcloneview)

<CloudSupportGrid />
