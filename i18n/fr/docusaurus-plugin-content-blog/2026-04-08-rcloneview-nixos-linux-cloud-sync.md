---
slug: rcloneview-nixos-linux-cloud-sync
title: "Exécuter RcloneView sur NixOS pour la synchronisation et la sauvegarde cloud"
authors:
  - tayson
description: "Guide étape par étape pour installer et exécuter RcloneView sur NixOS pour la synchronisation et la sauvegarde cloud, incluant la configuration d'AppImage, les montages FUSE et des conseils de configuration spécifiques à NixOS."
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exécuter RcloneView sur NixOS pour la synchronisation et la sauvegarde cloud

> NixOS propose une approche déclarative unique de la configuration système, mais l'exécution d'applications GUI tierces nécessite quelques étapes supplémentaires. **RcloneView** fonctionne sans problème sur NixOS une fois que vous avez configuré le support AppImage et FUSE, vous offrant un puissant gestionnaire cloud visuel sur l'une des distributions Linux les plus reproductibles.

NixOS est une distribution Linux construite autour du gestionnaire de paquets Nix et d'un modèle de configuration entièrement déclaratif. Au lieu d'installer des paquets de manière impérative, vous définissez l'état complet de votre système dans un fichier de configuration puis vous reconstruisez. Cette approche rend les systèmes reproductibles, facilite les retours en arrière, et convient parfaitement aux développeurs et utilisateurs avancés qui souhaitent un contrôle total sur leur environnement.

Cependant, l'organisation de système de fichiers non conventionnelle de NixOS (pas de `/lib`, pas de `/usr/lib`, pas de FHS traditionnel) signifie que les binaires Linux standards, y compris les AppImages, ne fonctionnent pas immédiatement. RcloneView est distribué sous forme d'AppImage pour Linux, vous devez donc activer la compatibilité AppImage sur NixOS avant de le lancer.

Ce guide couvre l'ensemble du processus : installer rclone, activer le support AppImage, exécuter RcloneView, configurer FUSE pour les montages cloud, et mettre en place une synchronisation automatisée en tant que service systemd.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vue d'ensemble de NixOS et son importance pour le stockage cloud

NixOS traite la configuration système comme du code. Votre fichier `/etc/nixos/configuration.nix` définit chaque paquet installé, chaque service activé et chaque paramètre système. Lorsque vous exécutez `nixos-rebuild switch`, le système passe de manière atomique au nouvel état. Si quelque chose casse, vous revenez à une génération précédente en quelques secondes.

Pour les flux de travail de stockage cloud, cela signifie que vous pouvez versionner l'intégralité de votre configuration de synchronisation et de sauvegarde. Votre installation rclone, votre configuration FUSE et vos services systemd sont tous définis dans un seul fichier et peuvent être reproduits sur n'importe quelle machine NixOS.

## Installer Rclone via Nixpkgs

Rclone est disponible dans le dépôt officiel Nixpkgs. Ajoutez-le à votre configuration système :

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

Puis reconstruisez votre système :

```bash
sudo nixos-rebuild switch
```

Vérifiez l'installation en exécutant `rclone version`. Cela vous donne le backend rclone que le GUI de RcloneView gère.

## Exécuter l'AppImage RcloneView sur NixOS

Les AppImages regroupent toutes les dépendances dans un seul exécutable, mais elles reposent sur des chemins FHS que NixOS ne fournit pas. NixOS propose deux solutions principales : `appimage-run` et `nix-ld`.

### Option A : Utiliser appimage-run

Ajoutez `appimage-run` à vos paquets système :

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

Après reconstruction, téléchargez l'AppImage RcloneView depuis [rcloneview.com](https://rcloneview.com/src/download.html), rendez-le exécutable, et lancez-le :

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### Option B : Utiliser nix-ld

Le module `nix-ld` fournit une couche de compatibilité qui permet aux binaires Linux standards de trouver leurs bibliothèques dynamiques. Activez-le dans votre configuration :

```nix
programs.nix-ld.enable = true;
```

Après reconstruction, l'AppImage devrait s'exécuter directement sans le wrapper `appimage-run` :

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

Les deux approches fonctionnent. Choisissez `appimage-run` pour la simplicité, ou `nix-ld` si vous exécutez de nombreux binaires tiers.

## Configurer FUSE pour les montages cloud

RcloneView peut monter un stockage cloud en tant que répertoire local, mais cela nécessite FUSE (Filesystem in Userspace). Sur NixOS, activez FUSE dans votre configuration :

```nix
# Activer FUSE
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# Autoriser les utilisateurs standards à monter des systèmes de fichiers FUSE
programs.fuse.userAllowOther = true;
```

Reconstruisez et vérifiez que `/dev/fuse` existe. Vous pouvez maintenant utiliser la fonctionnalité de montage de RcloneView pour accéder au stockage cloud comme s'il s'agissait d'un dossier local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Configurer les distants cloud dans RcloneView

Lancez RcloneView et utilisez l'assistant de configuration des distants pour ajouter vos fournisseurs cloud. Le processus est identique à celui de n'importe quelle distribution Linux :

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView prend en charge Google Drive, OneDrive, Dropbox, AWS S3, Wasabi, Backblaze B2, Cloudflare R2, et bien d'autres encore. Le GUI vous guide à travers l'authentification pour chaque fournisseur, y compris les flux OAuth qui s'ouvrent dans votre navigateur.

Votre configuration rclone est stockée par défaut dans `~/.config/rclone/rclone.conf`. Sur NixOS, ce chemin fonctionne normalement puisqu'il se trouve dans votre répertoire personnel, en dehors du Nix store.

## Créer des tâches de synchronisation et planifier des transferts

Une fois vos distants configurés, utilisez l'explorateur à deux volets de RcloneView pour parcourir votre stockage cloud et créer des tâches de synchronisation. Faites glisser des fichiers entre les volets pour lancer des transferts, ou configurez des tâches récurrentes avec le planificateur de tâches.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Pour les utilisateurs NixOS qui préfèrent s'intégrer au modèle déclaratif du système, vous pouvez également définir un service systemd qui exécute des commandes rclone sync sur une minuterie, en complément du planificateur intégré de RcloneView.

## Configurer un service Systemd pour la synchronisation automatisée

NixOS permet de définir facilement des services systemd personnalisés de manière déclarative. Ajoutez un service de synchronisation basé sur une minuterie à votre configuration :

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

Cela fonctionne conjointement avec le planificateur GUI de RcloneView. Utilisez l'approche systemd pour les serveurs sans interface graphique et le planificateur de RcloneView pour les postes de travail interactifs.

## Conseils spécifiques à NixOS

**Épinglez votre version de rclone.** NixOS facilite l'épinglage des versions de paquets via des overlays ou des flakes. Si une nouvelle version de rclone introduit des changements incompatibles, vous pouvez rester sur une version stable connue jusqu'à ce que vous soyez prêt à effectuer la mise à niveau.

**Utilisez Home Manager pour la configuration au niveau utilisateur.** Si vous utilisez Home Manager, vous pouvez gérer votre fichier de configuration rclone, l'entrée de bureau de l'AppImage et les paramètres de démarrage automatique de manière déclarative au sein de votre environnement utilisateur.

**Entrée de bureau pour le lanceur d'applications.** Créez un fichier `.desktop` afin que RcloneView apparaisse dans votre menu d'applications :

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**Sécurité des retours en arrière.** Comme NixOS prend en charge les retours en arrière atomiques, vous pouvez expérimenter en toute sécurité avec les configurations rclone. Si une tâche de synchronisation est mal configurée, revenez à la génération NixOS précédente et votre système retrouve son état antérieur.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez `rclone`, `appimage-run` et `fuse3` à votre configuration NixOS et reconstruisez.
3. Lancez RcloneView avec `appimage-run`, ajoutez vos distants cloud, et commencez la synchronisation.
4. Définissez éventuellement une minuterie systemd dans votre configuration NixOS pour des sauvegardes automatisées entièrement déclaratives.

NixOS et RcloneView vous offrent ensemble un flux de travail de stockage cloud reproductible et versionné, que vous pouvez répliquer sur n'importe quelle machine.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Ajouter AWS S3 et compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
