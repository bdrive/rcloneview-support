---
slug: rcloneview-steam-deck-cloud-sync
title: "Utiliser RcloneView sur Steam Deck pour le stockage cloud et la sauvegarde de jeux"
authors:
  - tayson
description: "Le SSD limité de la Steam Deck rend le stockage cloud indispensable. Découvrez comment installer RcloneView sur Steam Deck pour sauvegarder les sauvegardes de jeux, synchroniser captures d'écran et enregistrements vers Google Drive, OneDrive ou S3, et libérer de l'espace sur votre console portable."
keywords:
  - stockage cloud steam deck
  - sauvegarde de jeux steam deck
  - rcloneview steam deck
  - synchronisation google drive steam deck
  - sauvegarde onedrive steam deck
  - sauvegarde cloud des jeux steam deck
  - installation rcloneview steamos
  - synchronisation captures d'écran steam deck
  - gestionnaire de fichiers steam deck
  - stockage cloud externe steam deck
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Utiliser RcloneView sur Steam Deck pour le stockage cloud et la sauvegarde de jeux

> La Steam Deck embarque un PC complet dans un format portable — mais son SSD de 64 Go, 256 Go ou 512 Go se remplit vite. Le stockage cloud transforme votre Deck en un appareil à la capacité pratiquement illimitée pour les sauvegardes de jeux, captures d'écran, enregistrements et bien plus.

La Steam Deck de Valve fonctionne sous SteamOS, une distribution Linux basée sur Arch avec un mode bureau KDE Plasma personnalisé. Si la fonction de sauvegarde cloud intégrée de Steam gère certains jeux, elle ne couvre pas les titres hors Steam, les jeux émulés, les configurations de mods, les caches de shaders, ni les captures d'écran et enregistrements de gameplay qui s'accumulent au fil du temps. Avec un SSD limité, la gestion du stockage est une préoccupation constante. RcloneView offre aux utilisateurs de Steam Deck un gestionnaire de fichiers multi-cloud graphique pour sauvegarder les sauvegardes de jeux vers Google Drive, OneDrive ou S3, synchroniser captures d'écran et enregistrements vers le stockage cloud, et décharger les fichiers volumineux afin de libérer de l'espace sur le disque interne. Ce guide couvre l'installation en mode Bureau, la configuration des remotes cloud, et des flux de travail pratiques pour protéger les données de votre Steam Deck tout en gardant votre stockage léger.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi utiliser le stockage cloud sur Steam Deck

La Steam Deck est un PC de jeu performant, mais ses contraintes de stockage posent de vrais problèmes :

- **Le SSD se remplit rapidement** — les jeux modernes peuvent dépasser 50 à 100 Go chacun. Même le modèle 512 Go se remplit après l'installation de quelques titres AAA.
- **Steam Cloud ne couvre pas tout** — de nombreux jeux ne prennent pas en charge les sauvegardes Steam Cloud. Les jeux hors Steam (GOG, Epic via des couches de compatibilité, titres émulés) n'ont aucune sauvegarde cloud intégrée.
- **Les captures d'écran et enregistrements s'accumulent** — la Deck facilite la capture d'écrans et l'enregistrement de gameplay, mais ces fichiers grignotent votre stockage limité.
- **Les configurations de mods sont fragiles** — si vous moddez des jeux sur la Deck, ces configurations résident sur le système de fichiers local et peuvent être perdues lors d'une mise à jour SteamOS ou d'une réinitialisation d'usine.
- **Aucune sauvegarde externe automatique** — la Steam Deck n'a aucun mécanisme intégré pour sauvegarder des fichiers arbitraires vers un stockage cloud externe.

RcloneView résout ces problèmes en connectant votre Steam Deck à n'importe quel grand fournisseur cloud, vous donnant la possibilité d'envoyer des fichiers vers le cloud à la demande ou selon un calendrier.

## Passer en mode Bureau

Toute l'installation et la configuration se font dans le mode Bureau de la Steam Deck. Pour y accéder :

1. Appuyez sur le **bouton Steam** de votre Deck.
2. Accédez à **Alimentation > Passer en mode Bureau**.
3. La Deck redémarre dans un bureau KDE Plasma complet avec une barre des tâches, un gestionnaire de fichiers (Dolphin) et un terminal (Konsole).

Le mode Bureau vous offre un environnement de bureau Linux complet. Vous pouvez utiliser l'écran tactile, les pavés tactiles, ou connecter un clavier et une souris via USB-C ou Bluetooth pour plus de confort.

## Installer RcloneView sur Steam Deck

SteamOS possède par défaut un système de fichiers racine en lecture seule, ce qui limite l'installation traditionnelle de paquets. Les deux meilleures approches pour installer des logiciels sont Flatpak (la méthode officiellement prise en charge) et AppImage.

### Option 1 : AppImage (recommandé)

La méthode AppImage est la plus simple et fonctionne sans modifier le système :

1. Ouvrez le navigateur **Firefox** en mode Bureau (préinstallé sur SteamOS).
2. Accédez à [rcloneview.com](https://rcloneview.com/src/download.html) et téléchargez l'AppImage Linux.
3. Ouvrez **Dolphin** (le gestionnaire de fichiers) et accédez à votre dossier de téléchargements.
4. Faites un clic droit sur le fichier AppImage, sélectionnez **Propriétés > Permissions**, puis cochez **Est exécutable**.
5. Double-cliquez pour lancer.

Autrement, depuis Konsole (le terminal) :

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

Déplacez l'AppImage vers un emplacement permanent pour garder votre dossier de téléchargements propre :

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

Pour ajouter RcloneView à votre menu d'applications, créez une entrée de bureau :

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

Remplacez le nom de fichier par le nom réel de votre AppImage.

### Option 2 : Désactiver le système de fichiers en lecture seule (avancé)

Si vous souhaitez installer des paquets via pacman (comme sur un système Arch classique), vous pouvez désactiver le système de fichiers en lecture seule :

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**Avertissement :** désactiver le système de fichiers en lecture seule signifie que les mises à jour SteamOS peuvent écraser vos modifications. La méthode AppImage est plus durable face aux mises à jour du système.

### Vérifier l'installation

Lancez RcloneView. Vous devriez voir l'interface principale avec l'explorateur de remotes. Si vous utilisez l'écran tactile, l'interface est suffisamment réactive pour une navigation de base, bien qu'une souris soit recommandée pour des sessions de gestion de fichiers prolongées.

## Connecter des comptes de stockage cloud

Avec RcloneView lancé en mode Bureau, ajoutez vos fournisseurs de stockage cloud.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. Cliquez sur **Nouveau remote** et sélectionnez **Google Drive**.
2. Le flux OAuth s'ouvre dans Firefox. Connectez-vous avec votre compte Google et accordez l'accès.
3. Enregistrez le remote. L'intégralité de votre Google Drive est désormais accessible depuis RcloneView.

### OneDrive

1. Cliquez sur **Nouveau remote** et sélectionnez **Microsoft OneDrive**.
2. Authentifiez-vous via la page de connexion Microsoft dans Firefox.
3. Choisissez OneDrive personnel ou OneDrive Entreprise.
4. Enregistrez le remote.

### Stockage compatible S3 (Backblaze B2, Wasabi, AWS)

1. Cliquez sur **Nouveau remote** et sélectionnez votre fournisseur S3.
2. Saisissez votre clé d'accès (Access Key) et votre clé secrète (Secret Key).
3. Précisez la région et le point de terminaison (endpoint).
4. Enregistrez le remote.

Pour les utilisateurs de Steam Deck, Google Drive et OneDrive sont les choix les plus courants, car de nombreux joueurs possèdent déjà ces comptes. Les fournisseurs compatibles S3 comme Backblaze B2 ou Wasabi offrent un stockage en masse économique pour les grandes archives de sauvegarde de jeux.

## Sauvegarder les sauvegardes de jeux

C'est le principal cas d'usage pour la plupart des utilisateurs de Steam Deck. Les fichiers de sauvegarde de jeux sont petits mais irremplaçables. Voici comment les sauvegarder avec RcloneView.

### Localiser les fichiers de sauvegarde

Sur la Deck, les sauvegardes de jeux Steam se trouvent généralement dans :

- **Sauvegardes Steam Proton :** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **Sauvegardes Linux natives :** `~/.local/share/[GameName]/` ou `~/.config/[GameName]/`
- **Sauvegardes de jeux émulés :** dépendent de l'émulateur (les sauvegardes RetroArch se trouvent généralement dans `~/.config/retroarch/saves/`)

### Créer une tâche de sauvegarde des sauvegardes

1. Dans RcloneView, ouvrez votre système de fichiers local dans le panneau de gauche et accédez à votre dossier de sauvegardes.
2. Ouvrez votre remote cloud dans le panneau de droite et créez un dossier de destination (par ex. `SteamDeck/Saves/`).
3. Sélectionnez les fichiers ou dossiers de sauvegarde et copiez-les vers le cloud.

Pour une protection continue, créez une tâche de synchronisation :

1. Définissez la source sur votre répertoire de sauvegarde local.
2. Définissez la destination sur votre dossier de sauvegarde cloud.
3. Planifiez l'exécution de la tâche quotidiennement ou à la fréquence de votre choix.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

Ainsi, chaque fois que vous terminez une session de jeu et passez en mode Bureau, vos dernières sauvegardes sont automatiquement envoyées vers le cloud (ou vous pouvez lancer la tâche manuellement avant de repasser en mode Jeu).

## Synchroniser les captures d'écran et enregistrements

La Steam Deck stocke les captures d'écran dans `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/`. Les enregistrements de gameplay (si vous utilisez des outils comme OBS en mode Bureau) peuvent être stockés où vous le configurez.

### Configurer la synchronisation des captures d'écran

1. Dans RcloneView, accédez à votre répertoire de captures d'écran dans le panneau de gauche.
2. Ouvrez un dossier de destination cloud (par ex. `SteamDeck/Screenshots/`) dans le panneau de droite.
3. Créez une tâche de synchronisation pour envoyer les nouvelles captures d'écran vers le cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Les captures d'écran sont généralement de petite taille (1 à 5 Mo chacune), donc les tâches de synchronisation se terminent rapidement même avec une connexion internet modeste. Pour les enregistrements de gameplay, qui peuvent atteindre plusieurs centaines de mégaoctets voire plusieurs gigaoctets chacun, envisagez de planifier les envois pour les moments où la Deck est en dock et connectée au Wi-Fi.

### Libérer de l'espace après l'envoi

Une fois les captures d'écran et enregistrements en sécurité dans le cloud, vous pouvez supprimer les copies locales pour récupérer de l'espace SSD. L'opération de déplacement de RcloneView (par opposition à la copie) transfère les fichiers et supprime la source en une seule étape. Utilisez cette fonction avec prudence — vérifiez que la copie cloud existe avant de supprimer les fichiers locaux.

## Gérer le stockage sur un SSD limité

Au-delà de la sauvegarde des sauvegardes et des médias, RcloneView aide à une gestion plus large du stockage sur la Steam Deck :

- **Archiver les anciennes données de jeu** — vous avez terminé un jeu et souhaitez conserver les sauvegardes tout en récupérant l'espace ? Synchronisez les données de sauvegarde vers le cloud, puis désinstallez le jeu. Si vous le réinstallez plus tard, restaurez les sauvegardes depuis le cloud.
- **Décharger les fichiers de mods** — les gros packages de mods (refontes de textures, conversions totales) peuvent être sauvegardés vers le stockage cloud et retéléchargés en cas de besoin.
- **Monter le stockage cloud pour les médias** — montez un dossier Google Drive ou OneDrive comme répertoire local et diffusez des médias (musique, vidéos) depuis le cloud sans les stocker sur le SSD.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### Monter le stockage cloud sur Steam Deck

Pour monter un remote cloud en tant que système de fichiers local :

1. Assurez-vous que FUSE est disponible. Sur SteamOS par défaut, le support FUSE est généralement inclus. Sinon :

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. Dans RcloneView, faites un clic droit sur un remote et sélectionnez **Monter**, ou utilisez le gestionnaire de montages.
3. Choisissez un point de montage (par ex. `~/CloudDrive/`).
4. Configurez les paramètres de cache — utilisez le mode de cache VFS « full » pour une meilleure expérience avec les fichiers multimédias.

Le lecteur monté apparaît dans Dolphin et est accessible à toute application. Vous pourriez, par exemple, pointer un lecteur multimédia vers un dossier cloud monté pour diffuser votre bibliothèque musicale sans utiliser d'espace SSD.

## Flux de travail pratiques pour les utilisateurs de Steam Deck

### Avant un voyage

1. Passez en mode Bureau.
2. Lancez votre tâche de sauvegarde des sauvegardes pour envoyer les dernières sauvegardes vers le cloud.
3. Vérifiez que la sauvegarde s'est terminée dans l'historique des tâches de RcloneView.
4. Repassez en mode Jeu.

### Après une session de jeu

1. Passez en mode Bureau.
2. Lancez la synchronisation des captures d'écran pour envoyer les nouvelles captures vers le cloud.
3. Supprimez éventuellement les captures d'écran locales pour libérer de l'espace.
4. Repassez en mode Jeu.

### Après une mise à jour SteamOS ou une réinitialisation d'usine

1. Passez en mode Bureau.
2. Réinstallez RcloneView (la méthode AppImage ne prend que quelques secondes).
3. Reconfigurez vos remotes cloud (ou restaurez le fichier de configuration rclone si vous l'aviez sauvegardé dans le cloud).
4. Récupérez vos fichiers de sauvegarde depuis le cloud.
5. Reprenez le jeu.

Pour accélérer la récupération, sauvegardez également votre fichier de configuration rclone (`~/.config/rclone/rclone.conf`) dans le cloud. Ce fichier contient vos définitions de remotes et peut être restauré pour reconnecter instantanément tous vos comptes cloud.

## Pour commencer

1. **Passez en mode Bureau** sur votre Steam Deck.
2. **Téléchargez l'AppImage RcloneView** et rendez-la exécutable.
3. **Ajoutez vos comptes cloud** — Google Drive, OneDrive ou S3 sont les choix les plus courants.
4. **Sauvegardez vos sauvegardes de jeux** en créant une tâche de synchronisation depuis vos répertoires de sauvegarde vers un dossier cloud.
5. **Synchronisez vos captures d'écran** pour libérer de l'espace SSD et garder vos captures en sécurité.
6. **Planifiez des sauvegardes régulières** afin que vos données soient toujours protégées, même si vous oubliez de lancer une synchronisation manuelle.

Votre Steam Deck est une puissante machine de jeu portable, mais son stockage est limité. RcloneView transforme n'importe quel compte cloud en extension du système de fichiers de votre Deck — en gardant les sauvegardes en sécurité, les captures d'écran organisées, et votre SSD libre pour le prochain jeu.

---

**Guides associés :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Monter le stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
