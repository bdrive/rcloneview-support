---
slug: rcloneview-fedora-rhel-centos-linux
title: "Installer et utiliser RcloneView sur Fedora, RHEL et CentOS Linux"
authors:
  - tayson
description: "Installez RcloneView sur les distributions Linux basées sur RPM — Fedora, RHEL, CentOS et Rocky Linux. Configurez la synchronisation cloud et la sauvegarde sur Linux en entreprise et sur poste de travail."
keywords:
  - rcloneview fedora
  - rcloneview rhel
  - rcloneview centos
  - rclone gui rpm linux
  - install rcloneview fedora linux
  - rclone gui red hat linux
  - rcloneview rocky linux
  - cloud sync fedora linux
  - rclone centos gui
  - rpm based linux cloud management
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Installer et utiliser RcloneView sur Fedora, RHEL et CentOS Linux

> Fedora, Red Hat Enterprise Linux (RHEL), CentOS Stream et Rocky Linux sont des distributions basées sur RPM largement utilisées sur les postes de travail et les serveurs d'entreprise. RcloneView fonctionne sur toutes ces distributions, apportant une gestion visuelle du stockage cloud à l'écosystème Red Hat.

Alors qu'Ubuntu et les distributions basées sur Debian captent la majeure partie de l'attention Linux dans les tutoriels, la famille basée sur RPM — Fedora (postes de travail et bureaux), RHEL (entreprise), CentOS Stream (tests en amont) et Rocky Linux/AlmaLinux (alternatives à RHEL) — représente une grande partie des déploiements Linux. La version Linux de RcloneView fonctionne sur toute cette famille, et la configuration est simple.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Distributions prises en charge

| Distribution | Version | Architecture |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## Étape 1 — Installer RcloneView

Téléchargez le paquet Linux approprié depuis [rcloneview.com](https://rcloneview.com/src/download.html).

Pour les distributions basées sur RPM, RcloneView est distribué sous forme d'**AppImage** ou de binaire direct — un exécutable autonome qui ne nécessite pas d'installation système.

**Télécharger et exécuter (AppImage) :**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

Autrement, pour une entrée d'application de bureau :

```bash
# Move to a standard location
mkdir -p ~/.local/bin
mv RcloneView.AppImage ~/.local/bin/rcloneview

# Create a desktop entry (optional)
cat > ~/.local/share/applications/rcloneview.desktop << EOF
[Desktop Entry]
Name=RcloneView
Exec=/home/$USER/.local/bin/rcloneview
Icon=rcloneview
Type=Application
Categories=Utility;Network;
EOF
```

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Étape 2 — Installer FUSE (pour les fonctionnalités de montage)

La fonctionnalité de montage de lecteur cloud nécessite FUSE. Sur les distributions basées sur RPM :

**Fedora :**
```bash
sudo dnf install fuse fuse3
sudo modprobe fuse
```

**RHEL / CentOS Stream / Rocky Linux :**
```bash
sudo dnf install fuse fuse3
# Add your user to the fuse group
sudo usermod -aG fuse $USER
```

Sur les systèmes basés sur RHEL, vous devrez peut-être également activer le module FUSE :
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

Vérifiez que FUSE est disponible :
```bash
fusermount3 --version
```

## Étape 3 — Installer rclone (si non intégré)

RcloneView nécessite que rclone soit installé séparément. Sur les distributions basées sur RPM :

**Avec l'installateur officiel de rclone (recommandé) :**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**Avec dnf sur Fedora :**
```bash
sudo dnf install rclone
```

**Vérifier l'installation :**
```bash
rclone version
```

## Étape 4 — Lancer RcloneView et ajouter des distants

Lancez RcloneView et ajoutez vos comptes cloud :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

Pour les distants nécessitant OAuth (Google Drive, OneDrive, Dropbox), RcloneView ouvre le navigateur système. Sur les installations serveur RHEL sans environnement de bureau, utilisez l'option rclone `--auth-no-browser` ou autorisez via une machine disposant d'un navigateur puis copiez le jeton.

## Déploiement sur serveur sans interface graphique (RHEL/CentOS)

Pour les serveurs RHEL sans environnement de bureau, exécutez RcloneView en mode backend et accédez-y via un navigateur distant :

1. Démarrez le backend API de RcloneView :
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. Accédez-y depuis une machine distante via le transfert de port SSH :
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. Ouvrez `http://localhost:5572` dans votre navigateur local.

## Planification des tâches sur Linux

Pour les sauvegardes automatisées sur RHEL ou Fedora, utilisez les minuteries systemd ou cron en complément de la planification de tâches de RcloneView :

**Avec cron :**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**Avec une minuterie systemd** (préférée sur RHEL 8/9) :

Créez `/etc/systemd/system/rclone-backup.service` :
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

Créez `/etc/systemd/system/rclone-backup.timer` :
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

Activez et démarrez :
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## Considérations relatives à SELinux

Les distributions basées sur RHEL exécutent SELinux en mode « enforcing » par défaut. Si RcloneView rencontre des difficultés à accéder à certains chemins ou à monter des lecteurs :

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

La plupart des opérations fonctionnent sans modification de SELinux. Les opérations de montage peuvent nécessiter le contexte SELinux approprié sur le point de montage.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Installez FUSE** pour la prise en charge du montage : `sudo dnf install fuse fuse3`.
3. **Installez rclone** via l'installateur officiel.
4. **Lancez RcloneView**, ajoutez vos distants cloud, et commencez à gérer votre stockage cloud.

Les postes de travail Fedora et les serveurs RHEL sont des citoyens de première classe dans la prise en charge Linux de RcloneView. Les 70+ fournisseurs cloud, le montage, le chiffrement, la planification et la comparaison de dossiers fonctionnent de la même manière que sur toute autre plateforme.

---

**Guides associés :**

- [Installer RcloneView sur Ubuntu et Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Exécuter RcloneView sur Linux ARM](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [Exécuter RcloneView dans Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
