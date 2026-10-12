---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Comment sauvegarder Google Photos sur un disque externe ou un NAS — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google Photos ne permet plus aux applications tierces de télécharger votre bibliothèque existante. Exportez-la avec Google Takeout vers Google Drive, puis utilisez RcloneView pour copier l'export vers un disque externe, un NAS ou un autre stockage cloud — et gardez vos nouvelles photos sauvegardées avec RcloneView Mobile."
keywords:
  - sauvegarde google photos
  - google photos vers disque externe
  - google photos vers nas
  - google takeout vers nas
  - sauvegarde google takeout
  - google photos rclone
  - restriction de l'API google photos
  - enregistrer google photos en local
  - export google photos
  - sauvegarde de photos rcloneview mobile
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment sauvegarder Google Photos sur un disque externe ou un NAS — Google Takeout + RcloneView

> Depuis le 31 mars 2025, Google Photos ne permet aux applications tierces — rclone et RcloneView inclus — de voir que les photos qu'elles ont elles-mêmes téléversées. La méthode fiable pour récupérer votre bibliothèque existante est Google Takeout, et RcloneView prend ensuite le relais.

Google Photos conserve des années de photos et de vidéos irremplaçables, mais les quotas de stockage, les blocages de compte et les changements de politique peuvent vous en couper l'accès. De nombreux guides — y compris une version antérieure de celui-ci — vous conseillaient de connecter Google Photos à un outil de synchronisation et de tout télécharger. Cela ne fonctionne plus : Google a fermé cette porte en 2025.

Ce guide présente la méthode qui fonctionne aujourd'hui. Exportez votre bibliothèque avec **Google Takeout** directement dans Google Drive, laissez **RcloneView** copier l'export vers un disque externe, un NAS ou un autre stockage cloud, et utilisez **RcloneView Mobile** pour que vos nouvelles photos n'aient plus besoin de passer par Google Photos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ce qui a changé : les restrictions de l'API Google Photos (2025)

Le 31 mars 2025, Google a supprimé les portées d'accès à l'ensemble de la bibliothèque de l'API Photos Library. Selon les termes mêmes de Google, les applications tierces « peuvent désormais uniquement lister, rechercher et récupérer les albums et les éléments multimédias créés par votre application ». Les appels aux albums partagés renvoient `403 PERMISSION_DENIED`.

Voici ce que cela signifie lorsque vous ajoutez un distant **Google Photos** dans RcloneView :

- **Le distant semble presque vide.** Il n'affiche que les photos téléversées via RcloneView ou rclone. Les envois depuis le téléphone, depuis le web et tout le reste de votre bibliothèque sont invisibles pour l'API, si bien qu'une tâche de copie signale « aucun changement » ou copie zéro fichier.
- **Ce n'est pas un problème de connexion.** RcloneView 1.6 et versions ultérieures explique cette restriction dans l'application lorsque vous ouvrez un distant Google Photos, au lieu d'afficher ce qui ressemble à un compte vide.
- **Les albums partagés ne sont pas accessibles** du tout.
- **Vous avez besoin de votre propre identifiant client OAuth.** L'identifiant client Google Photos partagé de rclone sera retiré au cours de 2026. Lorsqu'une connexion ne peut pas être établie, l'assistant de connexion de RcloneView vous guide pour en créer un.

La méthode officielle de Google pour exporter une bibliothèque existante est **Google Takeout** — c'est donc par là que commence la sauvegarde.

## Étape 1 : exporter votre bibliothèque avec Google Takeout

1. Ouvrez [takeout.google.com](https://takeout.google.com) et connectez-vous avec le compte qui possède les photos.
2. Cliquez sur **Tout désélectionner**, puis cochez uniquement **Google Photos**. Utilisez **Tous les albums photo inclus** pour limiter l'export à certains albums ou à certaines années si vous souhaitez diviser une grande bibliothèque en plusieurs lots.
3. Sous **Destination**, choisissez **Ajouter à Drive**. Google place l'export dans un dossier `Takeout` de votre Google Drive, auquel RcloneView peut accéder directement. Dropbox, OneDrive et Box sont également proposés — RcloneView prend en charge ces trois services — et **Envoyer le lien de téléchargement par e-mail** fonctionne si vous préférez copier depuis votre ordinateur.
4. Choisissez le type d'archive (`.zip`) et la taille (de 1 Go à 50 Go). Des archives plus volumineuses signifient moins de fichiers à gérer.
5. Cliquez sur **Créer l'export**. Google vous envoie un e-mail lorsqu'il est prêt ; une grande bibliothèque peut prendre des heures, voire des jours.

À savoir avant de commencer :

- Chaque photo et chaque vidéo arrive en qualité d'origine, accompagnée d'un fichier de métadonnées `.json` contenant la date de prise de vue, la description et la localisation.
- Un export ajouté à Google Drive est décompté de votre espace de stockage Google jusqu'à ce que vous le supprimiez ; assurez-vous donc que Drive dispose de suffisamment d'espace — ou exportez par lots.
- Takeout est un export ponctuel, sans mode incrémentiel. L'étape 4 explique comment continuer à sauvegarder vos futures photos sans le répéter.

## Étape 2 : ajouter Google Drive dans RcloneView

1. Ouvrez RcloneView et cliquez sur **Add Remote** dans le Remote Manager.
2. Choisissez **Google Drive** et terminez la [connexion OAuth via le navigateur](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login).
3. Ouvrez le distant dans l'[Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) et accédez au dossier `Takeout`. Chaque export est un fichier `.zip` distinct (ou plusieurs, pour les bibliothèques plus volumineuses).

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Distant Google Drive avec le dossier Takeout ouvert dans l'Explorer de RcloneView" class="img-large img-center" />

## Étape 3 : copier l'export vers votre destination de sauvegarde

RcloneView copie les archives telles quelles — il ne les extrait pas — vous les décompressez donc une seule fois sur la machine de destination, une fois la copie terminée.

### Disque dur externe

1. Connectez le disque et notez son chemin (`E:\` sous Windows, `/Volumes/...` sous macOS, `/media/...` sous Linux).
2. Créez une [tâche de copie](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs) : **Source** = le dossier `Takeout` du distant Google Drive, **Destination** = un dossier sur le disque.
3. Exécutez la tâche, puis extrayez les archives sur le disque.

Utilisez **Copy** et non Sync : une tâche de copie ne supprime jamais rien à la destination.

### NAS Synology

RcloneView [détecte automatiquement les NAS Synology](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer) présents sur votre réseau, de sorte que le NAS apparaît dans l'onglet Local sans aucune configuration.

1. Créez une tâche de copie avec le dossier `Takeout` comme source et un dossier partagé du NAS (par exemple `/photos/google-takeout`) comme destination.
2. Exécutez-la, puis extrayez les archives sur le NAS.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="NAS Synology détecté automatiquement dans RcloneView pour la copie Google Takeout" class="img-large img-center" />

### Un autre stockage cloud

Vous préférez une copie hors site ? Dirigez la tâche de copie vers n'importe quel autre distant — Amazon S3, Backblaze B2, Wasabi, OneDrive, etc. RcloneView déplace les données de cloud à cloud grâce à son moteur rclone ; les archives n'ont pas besoin de transiter par le stockage de votre ordinateur.

### Vérifier et nettoyer

- Utilisez la [comparaison de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) pour confirmer que chaque archive est arrivée avec la même taille.
- Consultez l'[historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) pour le journal de transfert.
- Une fois la copie vérifiée, supprimez le dossier `Takeout` de Google Drive pour récupérer l'espace de stockage qu'il occupe.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison de dossiers entre l'export Takeout et la copie sur le NAS" class="img-large img-center" />

## Étape 4 : garder les nouvelles photos sauvegardées avec RcloneView Mobile

Takeout ne peut pas fonctionner de façon incrémentielle ; le répéter chaque mois n'est donc pas une solution. Pour les photos que vous prendrez à partir de maintenant, sortez Google Photos de la chaîne :

- **RcloneView Mobile** (Android et iOS) sauvegarde les photos et vidéos de votre téléphone directement vers votre propre stockage cloud — les mêmes distants que ceux que vous utilisez dans RcloneView sur ordinateur, sans serveur intermédiaire. La sauvegarde de photos est incluse avec RcloneView Plus. Téléchargez-le depuis la [page de téléchargement](https://rcloneview.com/src/download.html).
- Sur ordinateur, une tâche de copie planifiée (fonctionnalité PLUS, voir [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)) réplique ensuite ce dossier cloud vers votre NAS ou votre disque externe — chaque jour, chaque semaine, à la fréquence de votre choix.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification de la copie récurrente du dossier de photos cloud vers le NAS" class="img-large img-center" />

Votre téléphone, votre stockage cloud et votre NAS restent synchronisés sans que Google Photos décide de ce que vous pouvez télécharger.

## À quoi sert encore le distant Google Photos

Le distant n'est pas inutile — il fonctionne simplement dans l'autre sens :

- **Le téléversement.** Une tâche de copie depuis votre NAS ou votre ordinateur vers le dossier `upload` du distant ou vers un album ajoute ces photos à votre bibliothèque Google Photos, où l'application Google Photos les affiche comme n'importe quel autre envoi.
- **La relecture de ce que RcloneView a téléversé.** Tout ce qui a été envoyé via RcloneView peut être listé et copié à nouveau.
- **Réserves.** Les téléchargements via l'API ne sont pas en résolution d'origine et perdent les données de localisation EXIF ; considérez donc Google Photos comme une visionneuse pratique, et non comme l'archive. Et vous avez toujours besoin de votre propre identifiant client OAuth.

## Pour commencer

1. **Exportez** votre bibliothèque Google Photos avec Google Takeout, livrée dans Google Drive.
2. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux) et ajoutez Google Drive comme distant.
3. **Créez une tâche de copie** du dossier `Takeout` vers votre disque externe, votre NAS ou un autre stockage cloud, puis extrayez-y les archives.
4. **Vérifiez** la copie avec la comparaison de dossiers et supprimez l'export de Drive.
5. **Installez RcloneView Mobile** pour que les nouvelles photos aillent directement vers votre propre stockage cloud, et planifiez une tâche sur ordinateur pour les répliquer vers le NAS.

Vos photos sont irremplaçables. Un export et une tâche planifiée vous donnent une copie qu'aucun changement de politique ne pourra vous retirer.

---

**Guides connexes :**

- [Corriger les erreurs de synchronisation de Google Photos dans RcloneView](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [Ajouter un distant via la connexion par navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Parcourir et gérer les distants](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Détection automatique et connexion d'un NAS Synology](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
