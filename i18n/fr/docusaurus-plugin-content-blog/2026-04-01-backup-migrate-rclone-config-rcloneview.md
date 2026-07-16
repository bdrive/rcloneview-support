---
slug: backup-migrate-rclone-config-rcloneview
title: "Comment sauvegarder, migrer et gérer votre configuration rclone avec RcloneView"
authors:
  - tayson
description: "Découvrez comment sauvegarder, restaurer et migrer votre fichier de configuration rclone — y compris les remotes chiffrés — avec RcloneView. Gardez vos connexions cloud portables et protégées."
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment sauvegarder, migrer et gérer votre configuration rclone avec RcloneView

> Votre fichier de configuration rclone contient toutes vos configurations de remotes cloud — détails de connexion, jetons d'authentification, clés de chiffrement et paramètres personnalisés. Le perdre signifie devoir reconfigurer chaque remote depuis zéro. Voici comment le sauvegarder, le migrer et le garder portable.

Après avoir passé du temps à configurer des dizaines de remotes cloud dans RcloneView — flux OAuth, clés API, phrases de passe de chiffrement, points de terminaison personnalisés — la dernière chose que vous voulez, c'est perdre ce travail à cause d'une panne de disque, d'une réinstallation du système ou d'un changement de machine. Le fichier de configuration rclone est un simple fichier texte qui encode toute cette configuration. Comprendre où il se trouve et comment le protéger est une maintenance essentielle pour tout utilisateur sérieux de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Où se trouve le fichier de configuration rclone ?

L'emplacement du fichier de configuration dépend de votre système d'exploitation :

| OS | Emplacement par défaut |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

Vous pouvez vérifier l'emplacement dans le **Terminal** de RcloneView :

```bash
rclone config file
```

Cela affiche le chemin exact utilisé sur votre système.

## Ce que contient le fichier de configuration

Le fichier de configuration est un fichier texte simple au format INI. Chaque section représente un remote :

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**Important :** les jetons OAuth (pour Google Drive, OneDrive, Dropbox) sont stockés dans le fichier de configuration. Ces jetons expirent et sont rafraîchis automatiquement pendant l'utilisation. Sauvegardez régulièrement la configuration pour capturer les jetons valides les plus récents.

## Sauvegarder le fichier de configuration

### Sauvegarde manuelle

Copiez le fichier de configuration vers un emplacement sécurisé :

**Windows :**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux :**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### Sauvegarde automatisée avec RcloneView

Configurez une tâche dans RcloneView pour sauvegarder le fichier de configuration lui-même vers un stockage cloud :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. Créez une nouvelle tâche **Copy**.
2. Source : l'emplacement du fichier de configuration (`~/.config/rclone/`)
3. Destination : un dossier cloud (`s3-backup:system-configs/rclone/`)
4. Planification : hebdomadaire ou après des modifications majeures.

**Note de sécurité :** le fichier de configuration contient des identifiants. Ne le sauvegardez que vers un stockage chiffré ou un dossier cloud chiffré (par exemple, un remote Crypt).

## Chiffrer le fichier de configuration au repos

Rclone peut chiffrer l'intégralité du fichier de configuration avec un mot de passe. Activez cela depuis le terminal de RcloneView :

```bash
rclone config
# Choose: s - Set configuration password
```

Après avoir défini un mot de passe, le fichier de configuration est chiffré sur disque. Vous aurez besoin du mot de passe à chaque démarrage de RcloneView ou lors de l'exécution de commandes rclone. Cela protège les identifiants même si le fichier de configuration est volé.

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## Migrer vers une nouvelle machine

### Méthode 1 — Copie directe

La migration la plus simple :

1. Copiez `rclone.conf` de votre ancienne machine vers le même chemin sur la nouvelle machine.
2. Installez RcloneView sur la nouvelle machine.
3. Ouvrez RcloneView — tous vos remotes apparaissent immédiatement.

Aucune ré-authentification n'est nécessaire pour la plupart des remotes (S3, WebDAV, FTP, etc.). Les remotes OAuth (Google Drive, OneDrive, Dropbox) utiliseront les jetons stockés, qui restent valides jusqu'à leur expiration (généralement 60 à 90 jours après la dernière utilisation).

### Méthode 2 — Ré-authentifier les remotes OAuth

Si les jetons OAuth ont expiré, réautorisez chaque remote concerné :

1. Ouvrez **Remotes** dans RcloneView.
2. Sélectionnez le remote et choisissez **Edit**.
3. Cliquez sur **Re-authorize** pour générer de nouveaux jetons.

Seuls les remotes avec des jetons OAuth expirés nécessitent cette étape.

### Méthode 3 — Utiliser l'option `--config`

Si vous conservez la configuration dans un emplacement non standard (par exemple, Dropbox pour la portabilité), utilisez :

```bash
rclone --config /path/to/rclone.conf <command>
```

Ou définissez la variable d'environnement `RCLONE_CONFIG` pour en faire l'option par défaut pour toutes les opérations rclone sur cette machine.

## Afficher et modifier la configuration dans RcloneView

L'interface de gestion des remotes de RcloneView offre une interface graphique pour ajouter et modifier des remotes — mais pour les utilisateurs avancés qui préfèrent un accès direct, le fichier de configuration reste toujours un moyen valide d'apporter des modifications. Après avoir modifié manuellement le fichier de configuration, redémarrez RcloneView pour prendre en compte les changements.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## Bonnes pratiques

| Pratique | Pourquoi |
|----------|-----|
| Sauvegarder la configuration chaque semaine | Les jetons OAuth sont rafraîchis ; capturez le dernier état valide |
| Chiffrer l'emplacement de sauvegarde | La configuration contient des identifiants et des jetons |
| Utiliser un mot de passe de configuration pour les installations sensibles | Protection supplémentaire si la machine est compromise |
| Ne pas commiter la configuration dans des dépôts Git publics | Les clés d'accès et les jetons seraient exposés |
| Tester la restauration périodiquement | Vérifiez que votre sauvegarde est réellement utilisable |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Trouvez votre fichier de configuration** à l'aide de `rclone config file` dans le terminal de RcloneView.
3. **Configurez une tâche de sauvegarde automatisée** pour copier la configuration vers un stockage cloud chiffré.
4. **Stockez le mot de passe de configuration** (s'il est défini) dans un gestionnaire de mots de passe — le perdre signifie perdre l'accès à la configuration.

Votre configuration rclone est le fichier le plus important de votre installation RcloneView. Protégez-le en conséquence.

---

**Guides connexes :**

- [Chiffrer les sauvegardes cloud avec un remote Crypt](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Terminal RcloneView : CLI intégré à l'interface graphique](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Sécuriser RcloneView avec le verrouillage d'application](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />
