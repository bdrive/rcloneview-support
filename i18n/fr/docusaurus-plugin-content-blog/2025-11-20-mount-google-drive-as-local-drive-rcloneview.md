---
slug: mount-google-drive-local-drive-rcloneview
title: "Monter Google Drive comme un lecteur local sur Windows et macOS avec RcloneView"
authors:
  - tayson
description: Transformez les 40 000+ recherches mensuelles sur le montage de Google Drive en une expérience en quelques clics grâce à RcloneView, qui remplace les étapes CLI complexes par des montages guidés, la mise en cache et l'automatisation sur Windows et macOS.
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - RcloneView
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monter Google Drive comme un lecteur local sur Windows et macOS avec RcloneView

> Plus de 40 000 personnes par mois recherchent « monter Google Drive ». RcloneView transforme cette réponse riche en commandes CLI en un flux de travail en deux clics avec mise en cache, démarrage automatique et surveillance graphique.

`rclone mount` est légendaire mais intimidant : jetons OAuth, mots de passe de configuration, installations WinFsp/macFUSE, longues chaînes de paramètres et scripts à relancer après un redémarrage. RcloneView regroupe tous ces éléments dans une application de bureau afin que vous puissiez monter Google Drive (et tout autre service cloud) comme une véritable lettre de lecteur sur Windows ou un volume Finder sur macOS, sans terminal requis.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Pourquoi choisir RcloneView plutôt que des montages CLI faits maison

- **OAuth guidé** : le Gestionnaire de distants lance un navigateur sécurisé et stocke les jetons de rafraîchissement (voir [Gestionnaire de distants](/howto/rcloneview-basic/remote-manager)).
- **Assistants de pilotes** : les invites WinFsp et macFUSE sont intégrées à l'installateur, et RcloneView les valide avant que vous cliquiez sur Monter.
- **Modèles réutilisables** : le Gestionnaire de montage mémorise chaque Google Drive, Drive partagé ou autre distant afin que vous puissiez les remonter après un redémarrage d'un simple interrupteur.
- **Contrôle multi-cloud** : pendant que vous montez Google Drive, vous pouvez aussi synchroniser vers Dropbox, comparer des buckets S3 ou planifier des tâches depuis la même interface.
- **Surveillance et planificateur** : le Planificateur intégré et les moniteurs de transfert affichent le débit et redémarrent automatiquement les montages si vous le souhaitez.

## Étape 1 -- Préparez votre bureau

1. **Installez RcloneView** (le pack inclut rclone). Sur Windows, acceptez l'invite WinFsp ; sur macOS, installez macFUSE.
2. **Nommez vos lettres de lecteur externes ou vos volumes Finder** à l'endroit où vous voulez que Google Drive apparaisse (par exemple `G:` ou `/Volumes/GDrive`).
3. **Choisissez l'espace de cache** : sélectionnez un dossier SSD avec au moins quelques Go de libre ; vous y pointerez vos montages plus tard pour des aperçus plus rapides.  

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## Étape 2 -- Connectez Google Drive (et ses amis)

- Ouvrez le Gestionnaire de distants et cliquez sur **Ajouter un distant** -> **Google Drive**. Suivez les invites OAuth décrites dans [Ajouter une connexion OAuth en ligne](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide).
- Nommez le distant `gdrive-main` (et ajoutez éventuellement des Drives partagés ou d'autres services cloud comme Dropbox, OneDrive ou S3 pour pouvoir comparer/synchroniser plus tard).
- Utilisez [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage) pour créer des préréglages de dossiers que vous monterez fréquemment (Design, Finance, Drives partagés, etc.).  

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## Étape 3 -- Montez Google Drive depuis l'Explorateur ou le Gestionnaire de montage

1. Lancez l'Explorateur à double volet, sélectionnez votre distant Google Drive et cliquez sur l'**icône Monter** dans la barre d'outils.
2. Choisissez **Lettre de lecteur/Volume**, indiquez votre chemin de cache, puis activez lecture/écriture, mode cache et limites de bande passante.
3. Cliquez sur **Monter**, puis ouvrez l'Explorateur de fichiers ou le Finder pour voir le nouveau lecteur.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

Le Gestionnaire de montage (Outils -> Gestionnaire de montage) conserve une liste des montages avec des interrupteurs pour le démarrage automatique, la reconnexion et le lancement au démarrage de session. Vous pouvez même exposer plusieurs comptes Google simultanément, un tour de main qui nécessite habituellement plusieurs consoles de commandes.


## Étape 4 -- Automatisez des flux de travail au-delà du montage

Le montage n'est qu'une première étape. RcloneView superpose des flux de travail multi-cloud par-dessus :

- **Comparez et nettoyez** Google Drive par rapport à un SSD local ou à Dropbox à l'aide de [Comparer le contenu de dossiers](/howto/rcloneview-basic/compare-folder-contents) pendant que le montage reste actif.  

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- **Synchronisez ou copiez** des dossiers entiers vers des lecteurs externes à l'aide de [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs) et de [Synchroniser les stockages distants](/howto/rcloneview-basic/synchronize-remote-storages) pour des sauvegardes hors ligne.  

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- **Planifiez** ces tâches afin que chaque nuit, votre Google Drive monté déclenche une synchronisation vers un NAS ou Wasabi sans clic manuel (voir [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)).  

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- **Montez d'autres clouds** côte à côte (OneDrive, Dropbox, S3) et faites glisser des fichiers entre les fenêtres Finder comme s'il s'agissait de disques locaux.

## Cas d'usage débloqués par RcloneView

- **Designers et équipes média** : diffusez les ressources directement dans Adobe ou DaVinci Resolve sans stocker toute la bibliothèque localement.
- **Développeurs et DevOps** : montez des Drives partagés pour les fichiers de configuration, puis scriptez des tâches de comparaison ou de synchronisation vers des buckets de préproduction/production.
- **Audit et conformité** : montez Google Drive en lecture seule pour les évaluateurs pendant que le Planificateur maintient des copies immuables dans S3 ou sur des lecteurs externes.
- **Utilisateurs avancés** : remplacez Drive pour Ordinateur par un montage plus léger qui respecte vos propres chemins de cache, limites de bande passante et journalisation.

## Dépannage et FAQ

**Ai-je encore besoin de la CLI ?**  
Non. RcloneView génère tous les paramètres `rclone mount` en coulisses. Les utilisateurs avancés peuvent ouvrir les détails de la tâche pour voir la commande exacte.

**Qu'en est-il des autorisations macOS ?**  
Approuvez les invites d'extension système pour macFUSE, puis revenez au Gestionnaire de montage si le Finder ne voit pas le volume. Le guide pratique inclut des captures d'écran pour accorder les autorisations.

**Puis-je monter plusieurs comptes Google ?**  
Oui. Ajoutez un distant par compte dans le Gestionnaire de distants, puis créez une entrée de montage pour chacun. RcloneView conserve les jetons séparément afin que vous puissiez consulter simultanément `gdrive-marketing` et `gdrive-personal`.

Monter Google Drive reste l'une des principales recherches sur Google car les réponses en CLI sont complexes. RcloneView offre à ces 40 000+ personnes une solution sans code : connectez votre compte Google une fois, cliquez sur Monter, et obtenez une lettre de lecteur ou un volume Finder fiable avec toute la puissance multi-cloud (Comparaison, Synchronisation, Planificateur) dont vous dépendez déjà. Téléchargez la dernière version et abandonnez vos scripts de montage dès aujourd'hui.

<CloudSupportGrid />
