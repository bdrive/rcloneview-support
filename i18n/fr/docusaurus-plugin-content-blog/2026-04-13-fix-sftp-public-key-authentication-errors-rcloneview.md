---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "Corriger les erreurs d'authentification par clé publique SFTP — Résoudre les problèmes SSH avec RcloneView"
authors:
  - tayson
description: "Dépannez les échecs d'authentification par clé publique SFTP dans RcloneView. Diagnostiquez les chemins de clé incorrects, les problèmes de permissions, de phrase secrète et de format de clé."
keywords:
  - erreur clé publique SFTP RcloneView
  - corriger échec d'authentification SFTP
  - authentification par clé SSH rclone SFTP
  - permission refusée clé publique SFTP
  - dépannage SFTP RcloneView
  - format de clé SSH rclone
  - erreur de phrase secrète clé SFTP
  - corriger connexion SFTP rclone
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs d'authentification par clé publique SFTP — Résoudre les problèmes SSH avec RcloneView

> Les échecs d'authentification par clé publique SFTP sont presque toujours causés par des incohérences de chemin de clé, de permissions de fichier ou de phrase secrète — ce guide passe en revue chacune d'entre elles de manière systématique.

SFTP est l'un des moyens les plus courants de connecter des serveurs Linux distants dans RcloneView, et l'authentification par clé publique est la méthode de sécurité privilégiée par rapport aux mots de passe. Lorsque l'authentification par clé échoue, les erreurs peuvent être cryptiques : `ssh: handshake failed`, `permission denied (publickey)`, ou `no supported methods remain`. Ce guide couvre les causes les plus fréquentes ainsi que la manière de diagnostiquer et de corriger chacune d'elles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuration du distant SFTP dans RcloneView

Lorsque vous créez un distant SFTP dans RcloneView, les champs pertinents pour l'authentification par clé sont :

- **Host** : le nom d'hôte ou l'adresse IP du serveur
- **User** : le nom d'utilisateur SSH
- **Key file** : le chemin vers votre fichier de clé privée (par exemple, `~/.ssh/id_rsa` ou `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase** : la phrase secrète qui déchiffre la clé (si elle est définie)

L'authentification par mot de passe et par clé sont mutuellement exclusives par distant. Si vous spécifiez un fichier de clé, laissez le champ mot de passe vide.

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## Erreur courante 1 : Chemin de fichier de clé incorrect

La cause la plus fréquente d'échec d'authentification par clé est un chemin de fichier de clé incorrect ou inaccessible. Vérifiez :

- Que le chemin existe et pointe vers la clé **privée** (et non le fichier public `.pub`)
- Sous Windows, utilisez le chemin absolu complet (par exemple, `C:\Users\username\.ssh\id_rsa`)
- Sous Linux/macOS, `~/.ssh/id_rsa` s'étend correctement — en cas de doute, utilisez le chemin complet

Dans RcloneView, ouvrez les paramètres du distant SFTP et vérifiez le chemin du fichier de clé. Si le fichier n'existe pas à cet emplacement, l'authentification échouera silencieusement ou avec une erreur peu explicite.

## Erreur courante 2 : Permissions du fichier de clé trop ouvertes

Sous Linux et macOS, SSH refuse d'utiliser des fichiers de clé privée lisibles par tout le monde. Si les permissions du fichier de clé sont trop permissives, vous verrez `Permissions 0644 for '~/.ssh/id_rsa' are too open`. Corrigez-le :

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

Sous Windows, les permissions du fichier de clé sont gérées via les paramètres de sécurité des fichiers. Assurez-vous que le fichier de clé est accessible uniquement à votre compte utilisateur et non partagé avec Tout le monde.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## Erreur courante 3 : Incohérence de phrase secrète

Si votre clé privée est protégée par une phrase secrète, le champ de phrase secrète dans les paramètres du distant SFTP de RcloneView doit correspondre exactement. Un champ de phrase secrète vide alors que la clé en possède une provoquera un échec d'authentification. Inversement, saisir une phrase secrète pour une clé qui n'en a pas échouera également.

Pour tester si la phrase secrète de votre clé est correcte, ouvrez un terminal et exécutez `ssh -i /path/to/key user@host` — s'il vous demande la phrase secrète et l'accepte, les identifiants sont corrects. Mettez ensuite à jour le distant RcloneView en conséquence.

## Erreur courante 4 : Format de clé non pris en charge

Les anciennes clés privées OpenSSH (format PEM) sont largement prises en charge, mais certaines clés ED25519 plus récentes au format natif OpenSSH peuvent poser problème selon la version de la bibliothèque Go SSH intégrée dans rclone. Si vous rencontrez `ssh: no supported methods remain` :

- Convertissez la clé au format PEM : `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- Ou générez une clé RSA : `ssh-keygen -t rsa -b 4096`

## Lire les journaux pour le diagnostic

Ouvrez l'onglet **Log** dans RcloneView après une tentative de connexion SFTP échouée. Le journal affiche l'erreur complète de négociation SSH. Pour plus de détails, utilisez l'onglet **Terminal** dans RcloneView pour exécuter directement une commande rclone avec les indicateurs `-vv`, qui affiche la négociation SSH complète.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez les paramètres de votre distant SFTP et vérifiez que le chemin du fichier de clé pointe vers la bonne clé privée.
3. Sous Linux/macOS, vérifiez les permissions du fichier de clé avec `ls -la ~/.ssh/` et corrigez-les avec `chmod 600`.
4. Confirmez que le champ de phrase secrète correspond à la phrase secrète de votre clé, puis testez la connexion depuis le Gestionnaire de distants.

Une vérification systématique du chemin, des permissions et de la phrase secrète résout la grande majorité des échecs d'authentification par clé publique SFTP.

---

**Guides associés :**

- [Corriger les erreurs de connexion refusée et de délai d'attente SFTP](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Dépanner les erreurs rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Corriger la synchronisation cloud interrompue par des erreurs réseau](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
