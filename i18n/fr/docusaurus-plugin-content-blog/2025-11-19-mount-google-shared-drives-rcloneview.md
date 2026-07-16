---
slug: mount-google-shared-drives-rcloneview
title: "Monter des Drives partagés Google sous Windows et macOS avec RcloneView -- Accès complet, sans client de synchronisation"
authors:
  - tayson
description: Montez n'importe quel Drive partagé Google directement dans le Finder ou l'Explorateur de fichiers grâce à l'assistant guidé de RcloneView, en contournant les limites de Drive pour ordinateur tout en gardant un contrôle de niveau administrateur.
keywords:
  - montage drive partagé google
  - monter drive partagé windows
  - monter drive partagé mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - explorateur drive partagé
  - google workspace drive partagé
  - rclone gui
  - monter team drive
tags:
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monter des Drives partagés Google sous Windows et macOS avec RcloneView -- Accès complet, sans client de synchronisation

> Offrez à chaque équipe le Drive partagé dont elle a besoin sans imposer de client de synchronisation complet sur les ordinateurs portables.

Les Drives partagés de Google Workspace contiennent souvent vos ressources de design, dossiers de transfert ou archives de conformité, mais Drive pour ordinateur ne conserve qu'un petit cache et peine à gérer des dizaines de Drives partagés par utilisateur. RcloneView s'appuie sur la prise en charge des Drives partagés de rclone afin que vous puissiez monter exactement le drive dont vous avez besoin, sous forme de lettre de lecteur réelle sous Windows ou de volume Finder sous macOS, avec montage automatique et mise en cache VFS intégrés.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi les équipes ont besoin de monter des Drives partagés sans Drive pour ordinateur

- Drive pour ordinateur duplique l'intégralité du drive, consommant l'espace SSD et laissant les ordinateurs portables hors ligne une fois les quotas atteints.
- Les services d'assistance n'ont aucun moyen de donner à des prestataires un seul Drive partagé sans accorder des droits de synchronisation à l'échelle du compte.
- Les ingénieurs et équipes créatives ont besoin de chemins prévisibles (X:\Marketing ou /Volumes/Archive) pour les automatisations, scripts et applications créatives.

## Comment RcloneView apporte les Drives partagés sous Windows et macOS

RcloneView superpose une interface graphique à rclone, de sorte que le sélecteur de Drive partagé, les jetons d'authentification et les options de montage sont gérés pour vous.

- L'assistant guidé de remote liste chaque Drive partagé auquel votre compte Google Workspace a accès et le stocke en toute sécurité. Consultez les étapes de référence dans [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive).
- Le Mount Manager présente les options décrites dans [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) afin que vous n'ayez pas à mémoriser la syntaxe CLI.
- Le montage automatique se trouve dans la boîte de dialogue Mount ; le lancement à la connexion est disponible dans Réglages -> Général (documenté dans [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings)).

## Ce dont vous avez besoin avant de monter

| Prérequis | Détails |
| --- | --- |
| RcloneView + Rclone | Installez la dernière version de RcloneView (inclut rclone). |
| Pilotes de système de fichiers | Windows utilise WinFsp (inclus). macOS nécessite macFUSE ; suivez les instructions affichées dans RcloneView. Consultez [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) pour ajuster les limites. |


## Étape par étape : monter un Drive partagé Google avec RcloneView

Ces étapes reprennent ce que les administrateurs font déjà en CLI, mais dans un assistant convivial afin que les services d'assistance puissent les répéter rapidement.

### Étape 1 -- Connectez votre compte Google Workspace

1. Ouvrez **Remote Manager** -> **+ New Remote**.
2. Choisissez **Google Drive** -> **OAuth (Browser)**.
3. Une fois la connexion via le navigateur terminée, RcloneView stocke le jeton de rafraîchissement localement afin que le Drive partagé reste autorisé.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### Étape 2 -- Choisissez le Drive partagé souhaité

1. Lorsque la question « Configure this as a Shared Drive? » s'affiche, sélectionnez **Yes**.
2. RcloneView liste tous les Drives partagés renvoyés par Google. Saisissez le numéro ou effectuez une recherche pour mettre en surbrillance le bon drive.
3. Enregistrez le remote avec un nom explicite tel que `shared_marketing` afin que vos coéquipiers sachent immédiatement ce qu'il contient.

### Étape 3 -- Configurez le profil de montage

1. Accédez à **Mount Manager** (ou cliquez sur l'icône de montage dans Remote Explorer).
2. Sélectionnez le remote du Drive partagé et choisissez le dossier à monter (racine ou sous-dossier).
3. Définissez les cibles et options de montage :
   - **Target** : conservez `Auto` ou attribuez une lettre de lecteur/chemin de montage fixe via **Mount to local path**.
   - **Auto mount** : activez cette option pour que RcloneView remonte le drive au lancement (à associer avec Launch at login dans Réglages).
   - **Advanced options** : définissez **Volume name** (libellé facultatif), **Mount type** (`cmount` par défaut), **Network drive** (Windows), **Allow other** (Linux), et **Read only** si vous souhaitez bloquer les écritures.
   - **Cache options** : choisissez **Cache mode** (`full` pour une compatibilité optimale), définissez **Cache max size**, **Cache max age**, et **Dir cache time** en utilisant les valeurs en nanosecondes indiquées dans la boîte de dialogue.

### Étape 4 -- Lancez et vérifiez

1. Cliquez sur **Save & Mount**. Le badge de statut passe au vert dès que le montage est actif.
2. Dans l'Explorateur de fichiers ou le Finder, ouvrez le nouveau lecteur. Vous devriez voir les dossiers du Drive partagé ; les répertoires volumineux peuvent prendre un instant pendant le remplissage du cache de répertoire selon votre réglage **Dir cache time**.
3. Utilisez Mount Manager pour démonter, ouvrir le dossier monté, ou modifier les réglages.

## Conseils de performance et d'accès

- Réglez **Cache mode** sur **Full** et augmentez généreusement **Cache max size** pour l'expérience d'édition la plus fluide.
- Utilisez **Read only** pour les drives finance/juridique afin d'éviter les suppressions accidentelles ; créez un montage en écriture séparé si nécessaire.
- Ajustez **Dir cache time** en fonction de la fréquence des changements (plus court pour les drives actifs, plus long pour les archives).
- Réutilisez un **Target** ou un **Mount to local path** fixe afin que les scripts et applications retrouvent toujours le même point de montage.

## Automatiser, partager et sécuriser l'accès

RcloneView vous permet de garder les montages de Drives partagés cohérents entre les machines :

- Activez **Auto mount** sur chaque montage et **Launch at login** dans Réglages afin que les drives soient prêts dès le démarrage du système.
- Utilisez le Job Scheduler pour dupliquer le contenu du Drive partagé vers S3/Wasabi en vue d'une conservation hors site après les heures de bureau.
- Vérifiez le statut dans Mount Manager (Mounted vs. Unmounted) pour confirmer la connectivité avant que les utilisateurs n'ouvrent Office ou Adobe.

## Dépannage et FAQ

| Symptôme | Cause probable | Solution |
| --- | --- | --- |
| Le lecteur disparaît après la mise en veille | Le système d'exploitation a démonté WinFsp/macFUSE | Activez **Auto mount** et **Launch at login** pour que RcloneView remonte le drive au démarrage. |
| Ouverture de fichier lente | Cache trop petit ou situé sur un disque lent | Augmentez **Cache max size** et laissez **Cache mode** sur Full. |
| Erreur de permissions sur macOS | FUSE ne dispose pas de l'accès complet au disque | Accordez à RcloneView et macFUSE l'accès complet au disque (Full Disk Access), puis redémarrez le montage (menu Apple -> Réglages Système -> Confidentialité et sécurité). |
| `too many open files` | Limite ulimit par défaut de macOS fixée à 256 | Appliquez l'ajustement de plist décrit dans [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos). |
| Liste des Drives partagés vide | L'administrateur Workspace a désactivé l'API Drive | Réactivez l'API Drive dans Google Admin ou demandez un accès délégué au Drive partagé. |

## Déployez des montages de Drives partagés sans script

RcloneView rend l'accès aux Drives partagés prévisible : pas de dossiers de synchronisation surchargés, pas de scripts, et pas d'attente auprès de l'IT pour chaque nouveau montage. Offrez dès aujourd'hui à chaque équipe une lettre de lecteur ou un volume Finder propre et gardez le contrôle de votre stockage Google Workspace.


<CloudSupportGrid />
