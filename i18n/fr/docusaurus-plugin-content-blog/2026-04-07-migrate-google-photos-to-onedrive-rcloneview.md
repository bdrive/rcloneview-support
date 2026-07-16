---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "Migrer Google Photos vers OneDrive avec RcloneView"
authors:
  - tayson
description: "Guide pas à pas pour migrer votre bibliothèque Google Photos vers OneDrive avec RcloneView. Accès en lecture seule, structure des dossiers, gestion des métadonnées et organisation."
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Google Photos vers OneDrive avec RcloneView

> Votre bibliothèque de photos est l'une des collections les plus personnelles et irremplaçables que vous possédez — la déplacer entre deux clouds demande de la prudence. **RcloneView** vous offre un moyen visuel, étape par étape, de migrer l'intégralité de votre bibliothèque Google Photos vers OneDrive sans perdre votre structure d'organisation.

Google Photos est depuis des années un choix par défaut pour le stockage de photos, grâce à son intégration avec Android et l'écosystème Google. Mais les circonstances changent. Peut-être passez-vous à Microsoft 365, votre espace de stockage Google se réduit, ou vous préférez l'intégration plus étroite de OneDrive avec Windows. Quelle que soit la raison, migrer une bibliothèque de photos comptant des milliers (voire des dizaines de milliers) d'images et de vidéos nécessite un processus fiable.

La difficulté vient du fait que Google Photos n'est pas un simple système de fichiers. Il organise les photos par date, albums et métadonnées plutôt que par dossiers traditionnels. Rclone gère cela en présentant Google Photos comme un répertoire structuré, et RcloneView vous offre une interface visuelle pour parcourir, sélectionner et transférer le tout vers OneDrive — avec suivi et vérification inclus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre Google Photos en tant que remote

Avant de commencer la migration, il est important de comprendre comment Google Photos fonctionne en tant que remote cloud dans RcloneView.

### Accès en lecture seule

L'API de Google Photos fournit un **accès en lecture seule** à votre bibliothèque. Cela signifie :

- Vous pouvez **parcourir et télécharger** toutes vos photos et vidéos via RcloneView.
- Vous **ne pouvez pas supprimer, renommer ou modifier** des fichiers sur Google Photos via l'API.
- Vous **ne pouvez pas téléverser** de nouveaux fichiers vers Google Photos via ce remote.

Il s'agit d'une limitation de l'API Google, et non d'une limitation de RcloneView. Pour les besoins d'une migration, un accès en lecture seule suffit — vous extrayez des données de Google Photos, vous n'y écrivez pas.

### Structure des dossiers

Google Photos présente votre bibliothèque via deux principaux types de répertoires :

- **`media/by-year/`** — Toutes les photos organisées par année (par exemple, `media/by-year/2024/`, `media/by-year/2025/`). Ce répertoire contient chaque photo de votre bibliothèque, organisée chronologiquement.
- **`media/by-month/`** — Les mêmes photos organisées par année et par mois (par exemple, `media/by-month/2024/2024-06/`).
- **`album/`** — Vos albums créés manuellement. Chaque album apparaît comme un dossier contenant ses photos.

Les photos qui apparaissent dans des albums apparaissent également dans les répertoires basés sur la date. Il peut donc y avoir une duplication apparente — la même photo listée sous `media/by-year/2024/` et sous `album/Vacation/`. Pendant la migration, vous voudrez choisir une seule approche d'organisation pour éviter de copier des fichiers deux fois.

## Configurer les deux remotes

### Ajouter Google Photos

1. Ouvrez RcloneView et cliquez sur **+ New Remote**.
2. Sélectionnez **Google Photos** dans la liste des fournisseurs.
3. Suivez le flux OAuth — vous serez redirigé vers Google pour autoriser l'accès. Accordez la permission de lecture seule à votre bibliothèque de photos.
4. Nommez le remote (par exemple, `MyGooglePhotos`) et enregistrez.

### Ajouter OneDrive

1. Cliquez à nouveau sur **+ New Remote**.
2. Sélectionnez **Microsoft OneDrive** dans la liste des fournisseurs.
3. Suivez le flux OAuth pour autoriser l'accès à votre compte OneDrive.
4. Sélectionnez le type de lecteur (Personnel, Professionnel ou SharePoint).
5. Nommez le remote (par exemple, `MyOneDrive`) et enregistrez.

Les deux remotes apparaissent désormais dans l'Explorateur de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Planifier la structure de vos dossiers sur OneDrive

Avant de lancer le transfert, décidez comment vous voulez organiser vos photos sur OneDrive. Vous avez plusieurs options :

### Option 1 : reproduire la structure par année

Copiez le répertoire `media/by-year/` de Google Photos vers un dossier `Photos/` sur OneDrive. La structure de votre OneDrive ressemblera à ceci :

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

C'est l'approche la plus simple, et elle fonctionne bien avec les fonctionnalités photo intégrées de OneDrive, qui peuvent afficher les images en vue chronologique.

### Option 2 : organisation par mois

Copiez `media/by-month/` pour une organisation plus granulaire :

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

Cela est utile si vous avez une grande bibliothèque et souhaitez retrouver rapidement des photos d'un mois précis.

### Option 3 : organisation par album

Si vous avez soigneusement organisé votre Google Photos en albums, copiez le répertoire `album/` :

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

Notez qu'une migration basée sur les albums peut manquer des photos qui n'ont jamais été ajoutées à un album. Pour une migration complète, combinez cette approche avec l'une des approches basées sur la date.

### Approche recommandée

Pour la plupart des utilisateurs, **l'option 1 (par année) est le meilleur point de départ**. Elle capture chaque photo dans une structure chronologique claire. Si les albums sont importants pour vous, effectuez une seconde passe en copiant uniquement le répertoire `album/` vers un dossier séparé sur OneDrive.

## Lancer la migration

Une fois les deux remotes configurés et votre stratégie de dossiers décidée, lancez le transfert.

### Étape 1 : parcourir et prévisualiser

Ouvrez Google Photos dans un volet de l'Explorateur et OneDrive dans l'autre. Naviguez dans la structure de répertoires de Google Photos pour confirmer que vous pouvez voir vos photos organisées par année, mois et album.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Étape 2 : créer le dossier de destination

Dans le volet OneDrive, créez un dossier `Photos` (ou tout autre nom choisi) pour servir de cible à la migration.

### Étape 3 : commencer par un lot de test

Avant de migrer toute votre bibliothèque, testez avec une seule année :

1. Dans le volet Google Photos, accédez à `media/by-year/2025/` (ou toute année récente contenant un nombre gérable de photos).
2. Faites glisser le dossier vers le répertoire `Photos/` sur OneDrive.
3. Surveillez le transfert pour confirmer que les photos arrivent correctement.
4. Ouvrez quelques photos transférées sur OneDrive pour vérifier qu'elles s'affichent correctement et conservent leur qualité.

### Étape 4 : exécuter la migration complète

Une fois le test réussi, transférez les années restantes :

1. Créez une tâche **Copy** de `media/by-year/` sur Google Photos vers `Photos/` sur OneDrive.
2. Exécutez d'abord un **Dry Run** pour voir le nombre total de fichiers et le volume de transfert estimé.
3. Exécutez la tâche de copie.

Pour les grandes bibliothèques (10 000+ photos), cela peut prendre plusieurs heures. RcloneView affichera la progression en temps réel.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### Étape 5 : migrer les albums (optionnel)

Si vous souhaitez également retrouver votre structure d'albums sur OneDrive :

1. Créez une seconde tâche de copie de `album/` sur Google Photos vers `Photos/Albums/` sur OneDrive.
2. Exécutez la copie. Notez que cela créera des copies en double des photos déjà présentes dans les dossiers organisés par année. Si l'espace de stockage est une préoccupation, vous pouvez sauter cette étape ou copier sélectivement uniquement certains albums.

## Comprendre les métadonnées et les formats de fichiers

### Ce qui est transféré

- **Photos et vidéos en résolution originale** — les fichiers sont transférés dans leur qualité d'origine, et non les versions compressées « Storage saver ».
- **Noms de fichiers** — les noms de fichiers d'origine de l'appareil photo sont conservés (par exemple, `IMG_20240615_143022.jpg`).
- **Dates des fichiers** — les horodatages de création et de modification sont conservés lorsque le format le permet.

### Ce qui n'est pas transféré

- **Métadonnées de Google Photos** — les descriptions, tags, données de reconnaissance faciale et informations de localisation stockées dans la base de données de Google Photos ne sont pas transférées. Ces métadonnées sont propriétaires à la plateforme de Google.
- **Modifications effectuées dans Google Photos** — si vous avez modifié une photo dans Google Photos (recadrage, filtre, etc.), seule la version originale non modifiée est disponible via l'API. La version modifiée n'est pas accessible.
- **Contexte des albums partagés** — les photos partagées avec vous par d'autres personnes peuvent ou non être accessibles selon les paramètres de partage de Google.

### Données EXIF

La bonne nouvelle est que la plupart des métadonnées importantes sont intégrées directement dans les fichiers photo sous forme de données EXIF. Cela comprend :

- La **date et l'heure** de la prise de vue.
- Le **modèle d'appareil photo** et les réglages (ouverture, vitesse d'obturation, ISO).
- Les **coordonnées GPS** (si la localisation était activée lors de la prise de la photo).

Ces données EXIF sont transférées avec le fichier et sont lisibles par OneDrive, Windows Photos et pratiquement toute application de gestion de photos.

## Vérifier la migration

Une fois le transfert terminé, vérifiez que tout est bien arrivé.

### Comparaison de dossiers

Utilisez la fonctionnalité **Compare** de RcloneView :

1. Ouvrez Google Photos dans un volet et OneDrive dans l'autre.
2. Naviguez vers des répertoires correspondants (par exemple, `media/by-year/2024/` et `Photos/2024/`).
3. Exécutez une comparaison pour identifier les fichiers présents sur Google Photos mais manquants sur OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### Vérification ponctuelle des photos

Ouvrez plusieurs photos transférées sur OneDrive pour confirmer que :

- Les images s'affichent correctement et ne sont pas corrompues.
- Les vidéos se lisent correctement.
- Les tailles de fichiers correspondent aux attentes (un JPEG de 5 Mo sur Google Photos devrait faire environ 5 Mo sur OneDrive).

### Consulter l'historique des tâches

Vérifiez le panneau **Job History** pour repérer d'éventuelles erreurs pendant le transfert. Les problèmes courants incluent :

- **Fichiers ignorés** en raison de caractères non pris en charge dans les noms de fichiers.
- **Erreurs de délai d'attente** pour les fichiers vidéo très volumineux.
- **Limitation de débit** de la part de l'API Google (rare mais possible avec de très grandes bibliothèques).

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Conseils pour une migration fluide

- **Effectuez la migration en dehors des heures de pointe.** Les grandes bibliothèques de photos peuvent prendre des heures à transférer. Démarrer le processus la nuit lui laisse un temps d'exécution ininterrompu.
- **Utilisez la planification pour les très grandes bibliothèques.** Si vous avez plus de 50 000 photos, créez une tâche planifiée s'exécutant quotidiennement. Chaque exécution reprend là où la précédente s'est arrêtée, et la migration se termine sur plusieurs jours sans que vous ayez à la surveiller constamment.
- **Ne supprimez pas encore Google Photos.** Conservez votre bibliothèque Google Photos intacte jusqu'à ce que vous ayez entièrement vérifié la copie sur OneDrive. Google Photos étant de toute façon en lecture seule via l'API, il n'y a aucun risque de suppression accidentelle depuis RcloneView.
- **Vérifiez les limites de stockage de OneDrive.** Assurez-vous que votre forfait OneDrive dispose de suffisamment d'espace pour l'intégralité de votre bibliothèque de photos. Microsoft 365 Personal inclut 1 To, et les forfaits Famille offrent jusqu'à 6 To partagés.
- **Envisagez l'intégration de la pellicule de OneDrive.** Après la migration, vous pouvez configurer l'application mobile OneDrive pour téléverser automatiquement les nouvelles photos. Cela crée une transition fluide depuis Google Photos pour la suite.
- **Surveillez les limites de débit de l'API Google.** L'API Google Photos impose des quotas d'utilisation. Si vous atteignez ces limites, RcloneView réessaiera automatiquement, mais le transfert pourra ralentir temporairement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connectez Google Photos** via OAuth dans l'assistant New Remote (accès en lecture seule).
3. **Connectez OneDrive** via OAuth.
4. **Parcourez, copiez et vérifiez** — vos souvenirs photo, migrés en toute sécurité.

Vos photos sont irremplaçables. RcloneView veille à ce qu'elles arrivent en toute sécurité sur OneDrive.

---

**Guides connexes :**

- [Ajouter une connexion en ligne OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
