---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "Diffusez vos médias cloud via DLNA et serveur FTP avec RcloneView"
authors: [tayson]
description: "Configurez la diffusion de médias DLNA et l'accès par serveur FTP à votre stockage cloud grâce à rclone serve et RcloneView, pour une lecture fluide sur tous vos appareils."
keywords:
  - serveur dlna rclone
  - diffusion média stockage cloud
  - serveur ftp rclone
  - diffuser google drive dlna
  - serveur média cloud
  - rclone serve dlna
  - diffusion média rcloneview
  - stockage cloud ftp
  - diffusion cloud smart tv
  - lecteur média rclone
tags: [RcloneView, feature, media, guide, tips, cloud-storage, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Diffusez vos médias cloud via DLNA et serveur FTP avec RcloneView

> Transformez votre stockage cloud en serveur média personnel en diffusant du contenu directement vers vos smart TV, lecteurs multimédias et clients FTP grâce à rclone serve.

Votre stockage cloud contient des téraoctets de photos, vidéos et musique, mais y accéder depuis votre téléviseur de salon ou via des outils de transfert de fichiers traditionnels peut s'avérer étonnamment compliqué. La commande `serve` de rclone résout ce problème en exposant n'importe quel distant cloud comme serveur média DLNA, serveur FTP, serveur HTTP ou point d'accès WebDAV. Combinée à l'interface intuitive de RcloneView pour gérer les distants et surveiller les connexions, vous pouvez mettre en place un serveur média entièrement fonctionnel adossé au cloud en quelques minutes. Ce guide couvre la diffusion DLNA vers les smart TV et lecteurs multimédias, la configuration d'un serveur FTP pour l'accès depuis des clients historiques, l'optimisation des performances pour une lecture fluide, ainsi que le contrôle d'accès pour les environnements multi-utilisateurs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne rclone serve

La commande `serve` de rclone crée un serveur local qui traduit les requêtes de protocoles standards (DLNA, FTP, HTTP, WebDAV) en appels API vers le stockage cloud. Lorsqu'une smart TV demande une vidéo via DLNA, rclone récupère le fichier depuis votre fournisseur cloud et le diffuse en temps réel. L'appareil client ne sait jamais qu'il accède à du stockage cloud -- il voit simplement un serveur média ou un serveur de fichiers standard.

**Protocoles serve disponibles :**

| Protocole | Cas d'usage | Clients typiques |
|----------|----------|----------------|
| DLNA | Diffusion média vers TV et lecteurs | Smart TV, VLC, Kodi, Xbox, PlayStation |
| FTP | Transfert de fichiers pour applications historiques | FileZilla, WinSCP, clients FTP en ligne de commande |
| HTTP | Accès aux fichiers via navigateur | N'importe quel navigateur web |
| WebDAV | Lecteur réseau montable | Explorateur Windows, Finder macOS, gestionnaires de fichiers Linux |
| SFTP | Transfert de fichiers sécurisé | Clients SSH, applications compatibles SFTP |

**Vue d'ensemble de l'architecture :**

Le flux de données est simple :

1. Un appareil client découvre ou se connecte à l'instance rclone serve sur votre réseau local.
2. Le client demande une liste de fichiers ou un fichier spécifique.
3. Rclone traduit la requête en appels API vers le stockage cloud.
4. Les données sont diffusées depuis le fournisseur cloud, via rclone, jusqu'au client.
5. La mise en cache VFS optionnelle stocke localement les données fréquemment consultées pour un accès répété plus rapide.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

Cette architecture signifie que votre bibliothèque média peut résider entièrement dans le cloud tout en restant accessible depuis n'importe quel appareil de votre réseau via des protocoles standards.

## Configurer la diffusion média DLNA

DLNA (Digital Living Network Alliance) est le standard universel de diffusion média sur les réseaux domestiques. Presque toutes les smart TV, consoles de jeu et lecteurs multimédias prennent en charge la découverte et la lecture DLNA.

**Démarrer un serveur DLNA basique :**

Via le terminal intégré de RcloneView, démarrez un serveur DLNA pointant vers votre bibliothèque média cloud :

```bash
rclone serve dlna gdrive:/Media
```

Cela crée immédiatement un serveur DLNA qui s'annonce sur votre réseau local. Tout appareil compatible DLNA sur le même réseau le découvrira automatiquement.

**Personnaliser le serveur DLNA :**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**Options DLNA clés :**

| Option | Objectif | Valeur recommandée |
|------|---------|-------------------|
| `--name` | Nom du serveur visible par les clients | Nom descriptif comme "Cloud Movies" |
| `--addr` | Adresse et port d'écoute | `:7879` (par défaut) |
| `--vfs-cache-mode` | Stratégie de mise en cache | `full` pour une diffusion fluide |
| `--vfs-cache-max-size` | Taille maximale du cache local | 5-20 Go selon l'espace disque disponible |
| `--vfs-read-ahead` | Tampon de préchargement des données | 128M-256M pour la diffusion vidéo |
| `--vfs-cache-max-age` | Durée de persistance des fichiers mis en cache | `24h` pour les bibliothèques média |

**Se connecter depuis une smart TV :**

1. Démarrez le serveur DLNA avec la commande ci-dessus.
2. Sur votre smart TV, ouvrez le lecteur multimédia ou le navigateur DLNA (le nom exact varie selon le fabricant -- Samsung utilise "SmartThings", LG utilise "Media Player", Sony utilise "Media Player").
3. Recherchez le nom du serveur que vous avez spécifié (par exemple, "Cloud Media Server").
4. Parcourez les dossiers et sélectionnez le média à lire.

**Se connecter depuis VLC :**

1. Ouvrez le lecteur multimédia VLC.
2. Accédez à Affichage > Liste de lecture > Réseau local > Universal Plug'n'Play.
3. Votre serveur DLNA rclone apparaît dans la liste.
4. Parcourez et lisez le média directement.

**Diffuser des médias depuis un stockage compatible S3 :**

S3 et les fournisseurs de stockage objet similaires sont excellents pour les bibliothèques média en raison de leur faible coût par gigaoctet :

```bash
# Serve from Wasabi (S3-compatible, no egress fees)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Configurer un serveur FTP

FTP reste largement utilisé pour les transferts de fichiers, notamment avec les applications historiques, les appareils réseau et les flux de travail automatisés. Rclone peut exposer n'importe quel distant cloud comme un serveur FTP pleinement fonctionnel.

**Démarrer un serveur FTP basique :**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

Cela crée un serveur FTP sur le port 2121 qui donne accès à l'ensemble de votre Google Drive.

**Configuration FTP avancée :**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**Options FTP clés :**

| Option | Objectif |
|------|---------|
| `--addr` | Adresse et port d'écoute |
| `--user` / `--pass` | Identifiants d'authentification FTP |
| `--passive-port` | Plage de ports pour les connexions en mode passif |
| `--vfs-cache-mode` | `writes` pour le support des envois, `full` pour la mise en cache lecture/écriture |
| `--dir-cache-time` | Durée de mise en cache des listes de répertoires |
| `--read-only` | Empêcher les envois et modifications |

**Se connecter depuis FileZilla ou un autre client FTP :**

1. Ouvrez votre client FTP.
2. Saisissez l'hôte (IP de la machine exécutant rclone), le port (2121), le nom d'utilisateur et le mot de passe.
3. Connectez-vous et parcourez votre stockage cloud comme s'il s'agissait d'un serveur FTP traditionnel.

**Cas d'usage pour la diffusion FTP :**

- **Intégration d'applications historiques :** les anciennes applications qui ne prennent en charge que FTP peuvent désormais accéder au stockage cloud.
- **Envois depuis un scanner réseau :** configurez des scanners de documents pour envoyer les fichiers numérisés directement vers le stockage cloud via FTP.
- **Dépôts de fichiers automatisés :** mettez en place un point d'accès FTP en écriture seule pour recevoir des fichiers de parties externes.
- **Accès multiplateforme :** FTP fonctionne sur tous les systèmes d'exploitation sans installation de logiciel supplémentaire.

## Optimisation des performances pour la diffusion

Une diffusion média fluide nécessite un réglage minutieux du cache VFS (Virtual File System) de rclone et des paramètres réseau.

**Comprendre les modes de cache VFS :**

| Mode | Comportement | Idéal pour |
|------|------------|----------|
| `off` | Aucune mise en cache, diffusion directe | Petits fichiers, connexions à haut débit |
| `minimal` | Cache uniquement les fichiers ouverts | Navigation média légère |
| `writes` | Met en cache les écritures localement, diffuse les lectures | Usage FTP intensif en envois |
| `full` | Mise en cache complète en lecture/écriture | Diffusion vidéo, lecture média |

Pour la diffusion média, le mode de cache `full` est presque toujours le meilleur choix. Il garantit que la lecture vidéo ne saccade pas en raison de la latence réseau ou de la limitation d'API.

**Optimiser pour la diffusion vidéo :**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

Paramètres clés expliqués :
- **`--vfs-read-ahead 256M`** : précharge 256 Mo de données en avance de la position de lecture actuelle, évitant les mises en mémoire tampon pendant la lecture.
- **`--vfs-read-chunk-size 32M`** : taille initiale des blocs de lecture. Commence à 32 Mo et double jusqu'à la limite.
- **`--vfs-read-chunk-size-limit 256M`** : taille maximale des blocs. Des blocs plus grands signifient moins d'appels API mais une latence initiale plus élevée.
- **`--buffer-size 64M`** : tampon en mémoire pour chaque fichier ouvert.

**Considérations de bande passante :**

Les besoins en bande passante pour la diffusion vidéo varient considérablement selon la qualité :

| Qualité vidéo | Débit | Connexion minimale |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | 10 Mbps recommandé |
| 1080p | 8-12 Mbps | 25 Mbps recommandé |
| 4K | 25-40 Mbps | 50 Mbps recommandé |

Si votre connexion internet ou la bande passante sortante de votre fournisseur cloud ne peut pas soutenir ces débits, envisagez de transcoder vos médias vers des débits plus faibles avant l'envoi, ou utilisez un fournisseur avec une sortie rapide comme Wasabi ou un bucket S3 adossé à un CDN.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Surveiller les performances de diffusion :**

Utilisez le suivi des transferts de RcloneView pour observer le débit en temps réel et identifier les goulets d'étranglement. Si vous constatez des pauses fréquentes suivies de rafales, augmentez le tampon de préchargement. Si les transferts sont systématiquement lents, le goulet d'étranglement provient probablement de votre connexion internet ou de la limite de débit du fournisseur cloud.

## Contrôle d'accès et configuration multi-utilisateurs

Pour les environnements partagés, vous devez contrôler qui peut accéder à quel contenu.

**Configuration FTP multi-utilisateurs :**

Le serveur FTP de rclone prend directement en charge une seule paire utilisateur/mot de passe. Pour les environnements multi-utilisateurs, exécutez plusieurs instances serve sur des ports différents :

```bash
# Family media - read only
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin access - full control
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**Accès en lecture seule :**

Pour les serveurs média, l'accès en lecture seule est généralement approprié :

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**Restreindre à des répertoires spécifiques :**

Ne diffusez que des sous-répertoires spécifiques pour limiter l'exposition :

```bash
# Only serve the Movies folder, not the entire drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve a specific S3 prefix
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**Restrictions au niveau réseau :**

Liez le service à des interfaces spécifiques pour contrôler l'accès réseau :

```bash
# Only accessible from local machine
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Only accessible from local network
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## Exécution en tant que service persistant

Pour un serveur média toujours actif, configurez rclone serve pour qu'il démarre automatiquement.

**Service systemd sous Linux :**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Configuration du service sous Windows :**

Sous Windows, utilisez NSSM (Non-Sucking Service Manager) ou le Planificateur de tâches pour exécuter la commande rclone serve au démarrage :

```powershell
# Using Task Scheduler (run at login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**Exécuter plusieurs serveurs simultanément :**

Vous pouvez exécuter des serveurs DLNA et FTP en même temps pour une compatibilité maximale :

```bash
# DLNA for smart TVs and media players
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP for file manager access
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP for browser access
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Comparaison entre Serve et Mount

`rclone serve` et `rclone mount` rendent tous deux le stockage cloud accessible localement, mais ils répondent à des besoins différents.

| Fonctionnalité | Serve (DLNA/FTP) | Mount |
|---------|------------------|-------|
| Protocole | DLNA, FTP, HTTP, WebDAV | Système de fichiers FUSE/WinFSP |
| Compatibilité client | Tout client compatible avec le protocole | Toute application via le système de fichiers |
| Accès réseau | Disponible pour tous les appareils du réseau | Machine locale uniquement (par défaut) |
| Complexité de mise en place | Commande simple, aucun pilote requis | Nécessite FUSE (Linux/Mac) ou WinFSP (Windows) |
| Support des lecteurs multimédias | Découverte DLNA native | Nécessite de pointer le lecteur vers le chemin de montage |
| Utilisateurs simultanés multiples | Oui, intégré | Limité par le partage du système de fichiers |

**Quand utiliser serve :**
- Diffuser des médias vers des smart TV, consoles de jeu ou lecteurs en réseau
- Fournir un accès FTP pour des applications ou appareils historiques
- Partager des fichiers cloud avec plusieurs utilisateurs sur un réseau
- Éviter l'installation de pilotes FUSE/WinFSP

**Quand utiliser mount :**
- Accéder aux fichiers cloud depuis des applications de bureau qui attendent des chemins locaux
- Éditer des fichiers cloud directement dans des applications bureautiques
- Exécuter des scripts qui opèrent sur des chemins de fichiers locaux

Dans de nombreuses configurations, exécuter à la fois serve et mount simultanément vous offre le meilleur des deux mondes.

## Pour bien démarrer

Rclone serve transforme votre stockage cloud d'une archive passive en un serveur média actif et une plateforme de partage de fichiers. Commencez par un serveur DLNA simple pointant vers votre dossier média cloud et testez la lecture sur votre smart TV ou lecteur VLC. Une fois que vous avez confirmé que la diffusion fonctionne de manière fiable, ajoutez la mise en cache VFS pour une lecture plus fluide, configurez un point d'accès FTP pour un accès plus large aux fichiers, et paramétrez le service pour qu'il démarre automatiquement. Avec RcloneView gérant vos distants et surveillant les connexions, vous disposez d'un serveur média complet adossé au cloud, sans coût supplémentaire au-delà de votre abonnement de stockage cloud existant.

---

**Guides associés :**
- [Monter un stockage cloud comme lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Paramètres de connexion au stockage distant S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
