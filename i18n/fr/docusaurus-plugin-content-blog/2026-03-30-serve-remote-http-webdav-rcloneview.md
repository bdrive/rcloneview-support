---
slug: serve-remote-http-webdav-rcloneview
title: "Servir un distant via HTTP et WebDAV — Partager des fichiers cloud avec RcloneView"
authors:
  - tayson
description: "Utilisez RcloneView pour servir des distants de stockage cloud via HTTP et WebDAV, permettant le partage de fichiers et l'accès depuis des navigateurs, gestionnaires de fichiers et autres appareils."
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - feature
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Servir un distant via HTTP et WebDAV — Partager des fichiers cloud avec RcloneView

> Transformez n'importe quel distant de stockage cloud en serveur HTTP ou WebDAV local et accédez à vos fichiers depuis des navigateurs, gestionnaires de fichiers et lecteurs multimédias.

La fonctionnalité serve de rclone vous permet d'exposer un distant de stockage cloud en tant que service réseau local. RcloneView rend cette fonctionnalité accessible via son interface graphique, vous permettant de démarrer un serveur HTTP ou WebDAV pour n'importe quel distant configuré en quelques clics. Cela ouvre des flux de travail puissants : parcourir des buckets S3 dans un navigateur web, monter Google Drive sur des appareils dépourvus de support natif, ou diffuser des fichiers multimédias depuis Wasabi directement vers un lecteur vidéo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Servir le stockage cloud via HTTP

Le mode serve HTTP de RcloneView démarre un serveur web léger qui présente vos fichiers de stockage cloud sous la forme d'une liste de répertoires conviviale pour navigateur. Pointez-le vers n'importe quel distant — Google Drive, Dropbox, un bucket S3, ou même un distant crypt chiffré — et il génère une interface HTML navigable à une adresse locale comme `http://localhost:8080`.

Ceci est particulièrement utile pour partager des fichiers avec des collègues sur le même réseau sans leur accorder un accès direct à vos identifiants de stockage cloud. Démarrez le serveur HTTP, partagez l'URL locale, et ils peuvent parcourir et télécharger des fichiers via leur navigateur web. Le serveur ne fonctionne que tant que RcloneView est ouvert, et vous contrôlez quel distant ou sous-répertoire est exposé.

Pour les équipes travaillant dans des environnements réseau isolés ou restreints, le serve HTTP offre un moyen d'accéder à des documents de référence, de la documentation ou des jeux de données stockés dans le cloud sans installer de clients de fournisseurs cloud sur chaque poste de travail. Une seule machine exécutant RcloneView sert de point d'accès.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## Servir le stockage cloud via WebDAV

WebDAV (Web Distributed Authoring and Versioning) étend HTTP avec des capacités de gestion de fichiers — lecture, écriture, renommage et suppression de fichiers sur le réseau. Lorsque vous servez un distant via WebDAV dans RcloneView, le stockage cloud devient accessible en tant que lecteur réseau sur tout appareil prenant en charge WebDAV, y compris Windows, macOS, Linux, iOS et Android.

Sur Windows, vous pouvez mapper un partage WebDAV en tant que lecteur réseau via l'Explorateur de fichiers. Sur macOS, utilisez la boîte de dialogue « Se connecter au serveur » du Finder. Sur Linux, les gestionnaires de fichiers comme Nautilus et Dolphin prennent en charge WebDAV nativement. Cela signifie que votre stockage Google Drive, OneDrive ou S3 apparaît comme un dossier ordinaire sur des appareils qui n'ont peut-être pas d'applications clientes cloud dédiées.

Le serve WebDAV permet également l'intégration avec des applications qui prennent en charge WebDAV comme backend de stockage. Les éditeurs de documents, lecteurs multimédias et outils de sauvegarde peuvent lire et écrire dans votre stockage cloud via le point de terminaison WebDAV sans aucune configuration spécifique au cloud.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## Authentification et sécurité

Par défaut, le serve HTTP et WebDAV fonctionnent sans authentification, ce qui les rend adaptés uniquement aux réseaux de confiance. Pour tout scénario impliquant des données sensibles ou une exposition réseau, RcloneView prend en charge la configuration de l'authentification HTTP basique avec un nom d'utilisateur et un mot de passe. Cela garantit que seuls les utilisateurs autorisés peuvent accéder aux fichiers servis.

Pour une sécurité supplémentaire, liez le serveur à `127.0.0.1` (localhost uniquement) pour empêcher l'accès depuis d'autres machines du réseau. Si vous avez besoin d'un accès distant, combinez le point de terminaison serve avec un tunnel SSH ou un VPN plutôt que de l'exposer directement à internet. Le panneau de configuration serve de RcloneView vous permet de définir l'adresse de liaison, le port et les identifiants d'authentification avant de démarrer le serveur.

Lors du service d'un distant crypt chiffré, les fichiers sont déchiffrés à la volée lors de leur accès. Cela signifie que vous pouvez stocker des données chiffrées dans le cloud et les servir localement sous forme déchiffrée — utile pour accéder à des archives sensibles sans les déchiffrer de manière permanente sur le disque.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## Flux de travail pratiques

**Diffusion multimédia :** Servez un distant cloud contenant des fichiers vidéo ou audio via HTTP, puis ouvrez les URL des fichiers dans VLC ou un autre lecteur multimédia. Cela évite de télécharger des bibliothèques multimédias entières vers le stockage local.

**Accès aux fichiers multi-appareils :** Exécutez RcloneView sur un serveur domestique ou un poste de travail toujours actif et servez votre stockage cloud via WebDAV. Connectez-vous depuis des tablettes, téléphones ou autres ordinateurs sur le même réseau.

**Développement et tests :** Servez un bucket S3 localement pendant le développement pour tester des applications qui consomment des fichiers depuis une URL web, sans déployer vers un environnement de staging.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez le distant de stockage cloud que vous souhaitez servir (S3, Google Drive, Dropbox, etc.).
3. Ouvrez le panneau serve, sélectionnez le mode HTTP ou WebDAV, définissez le port et l'authentification optionnelle.
4. Démarrez le serveur et accédez à vos fichiers cloud depuis un navigateur ou un gestionnaire de fichiers à l'adresse locale.

La fonctionnalité serve de RcloneView transforme le stockage cloud en une ressource locale instantanément accessible pour tout appareil de votre réseau.

---

**Guides connexes :**

- [Bisync — Synchronisation bidirectionnelle du cloud dans RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [Connecter un serveur WebDAV pour la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Monter SFTP et SMB en tant que lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
