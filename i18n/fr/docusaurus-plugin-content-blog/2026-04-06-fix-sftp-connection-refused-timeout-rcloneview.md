---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "Résoudre les erreurs SFTP « Connection Refused » et Timeout dans RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de connexion refusée, de timeout et d'authentification SFTP dans RcloneView. Couvre les règles de pare-feu, les clés SSH, la configuration des ports et le réglage des délais d'attente."
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - troubleshooting
  - sftp
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs SFTP « Connection Refused » et Timeout dans RcloneView

> Les erreurs SFTP dans RcloneView proviennent presque toujours de la configuration réseau, de l'authentification ou des paramètres côté serveur. Ce guide passe en revue toutes les causes courantes et leurs solutions.

SFTP (SSH File Transfer Protocol) est l'un des remotes les plus utilisés dans rclone, connectant RcloneView à n'importe quel serveur disposant d'un accès SSH — NAS, serveurs Linux, hébergement mutualisé et infrastructures auto-hébergées. Contrairement aux API des fournisseurs cloud, SFTP dépend de l'accessibilité réseau, des règles de pare-feu et de la configuration SSH, ce qui multiplie les points de défaillance possibles. Voici comment diagnostiquer et résoudre les problèmes SFTP les plus courants.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Messages d'erreur SFTP courants

| Message d'erreur | Cause probable |
|--------------|-------------|
| `connection refused` | Serveur SSH non démarré, mauvais port, ou blocage par pare-feu |
| `connection timed out` | Pare-feu bloquant les paquets, serveur inaccessible, ou problème réseau |
| `ssh: handshake failed` | Incompatibilité de clé SSH, algorithmes incompatibles, ou configuration côté serveur |
| `permission denied (publickey)` | Mauvais fichier de clé, clé non autorisée sur le serveur, ou problème de passphrase |
| `permission denied (password)` | Mot de passe incorrect ou authentification par mot de passe désactivée sur le serveur |
| `no supported methods remain` | Le serveur exige une méthode d'authentification que rclone n'est pas configuré pour utiliser |
| `ssh: unable to authenticate` | Identifiants non fournis ou rejetés |
| `too many authentication failures` | L'agent SSH propose trop de clés avant la bonne |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## Solution 1 : Connexion refusée

Une erreur « connection refused » signifie que la connexion TCP a été activement rejetée. La pile réseau du serveur est accessible, mais rien n'écoute sur le port cible.

### Vérifier que SSH est en cours d'exécution

Sur le serveur distant, exécutez `sudo systemctl status sshd`. Si SSH n'est pas démarré, lancez-le avec `sudo systemctl start sshd && sudo systemctl enable sshd`.

### Vérifier le port

Le port SSH par défaut est le 22, mais de nombreux serveurs utilisent un port personnalisé. Vérifiez avec `grep -i "^Port" /etc/ssh/sshd_config`. Dans RcloneView, assurez-vous que le paramètre de port du remote SFTP correspond. Une incohérence entre le port 22 et un port personnalisé comme 2222 est l'une des causes les plus fréquentes.

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### Vérifier les blocages du pare-feu local

Sur le serveur, vérifiez que le pare-feu autorise les connexions entrantes sur le port SSH. Utilisez `sudo ufw status` (Ubuntu/Debian), `sudo firewall-cmd --list-ports` (RHEL/Fedora), ou `sudo iptables -L -n | grep 22`. Si le port est bloqué, ajoutez une règle pour l'autoriser.

## Solution 2 : Timeout de connexion

Un timeout signifie que des paquets sont envoyés mais qu'aucune réponse n'est reçue. Il s'agit généralement d'un problème au niveau réseau plutôt que d'un problème de configuration côté serveur.

### Accessibilité réseau

Testez la connectivité de base depuis votre machine :

```bash
ping server-hostname
telnet server-hostname 22
```

Si `ping` réussit mais que `telnet` vers le port 22 échoue, un pare-feu entre vous et le serveur bloque le port SSH.

### Pare-feu de routeur et NAT

Si le serveur SFTP se trouve derrière un routeur NAT, assurez-vous que la redirection de port est configurée pour router le trafic externe sur le port SSH vers l'IP interne du serveur. Sans redirection de port, les connexions provenant de l'extérieur du réseau local expireront.

### Blocages par le FAI ou le pare-feu d'entreprise

Certains FAI et réseaux d'entreprise bloquent les connexions sortantes sur le port 22. Testez avec un port alternatif ou utilisez un VPN pour contourner la restriction.

### Réglage des délais d'attente dans Rclone

Le délai d'attente de connexion par défaut de rclone peut être trop court pour les connexions à latence élevée. Vous pouvez l'augmenter en ajoutant le flag `--contimeout`. Pour les délais de réponse spécifiques au serveur SFTP, envisagez de définir `--timeout` à une valeur plus élevée (par exemple, `5m` pour les serveurs lents).

## Solution 3 : Échecs d'authentification par clé SSH

L'authentification par clé est la méthode la plus sûre et recommandée pour les connexions SFTP, mais les erreurs de configuration sont fréquentes.

### Vérifier le chemin du fichier de clé

Dans RcloneView, la configuration du remote SFTP inclut un champ pour le chemin du fichier de clé SSH. Assurez-vous que :

- Le chemin pointe vers la clé **privée** (par exemple, `~/.ssh/id_rsa` ou `~/.ssh/id_ed25519`), et non la clé publique.
- Le fichier existe et est lisible par votre compte utilisateur.
- Le fichier de clé possède les bonnes permissions (`600` sur Linux/macOS).

### Autoriser la clé sur le serveur

La clé publique doit être répertoriée dans `~/.ssh/authorized_keys` sur le serveur. Ajoutez-la avec `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys`, puis assurez-vous que les permissions sont `600` pour le fichier et `700` pour le répertoire `.ssh`.

### Clés protégées par une passphrase

Si votre clé privée est protégée par une passphrase, rclone en a besoin pour la déchiffrer. Dans la configuration du remote SFTP de RcloneView, saisissez la passphrase dans le champ approprié. Si vous la laissez vide, l'authentification échouera silencieusement.

### Conflits avec l'agent SSH

Si un agent SSH est en cours d'exécution avec de nombreuses clés chargées, le serveur peut rejeter la connexion après trop de tentatives de clé échouées (la limite par défaut est généralement de 6). Spécifiez le fichier de clé exact dans la configuration rclone pour contourner l'agent, ou réduisez le nombre de clés chargées dans votre agent.

## Solution 4 : Problèmes d'authentification par mot de passe

### Authentification par mot de passe désactivée sur le serveur

De nombreux serveurs désactivent l'authentification par mot de passe pour des raisons de sécurité. Vérifiez avec `grep -i "PasswordAuthentication" /etc/ssh/sshd_config`. Si la valeur est `no`, vous devez utiliser l'authentification par clé à la place.

### Mot de passe incorrect

Assurez-vous de saisir le bon mot de passe dans la configuration du remote SFTP de RcloneView. Rclone stocke le mot de passe sous une forme obscurcie dans `rclone.conf` — si vous modifiez la configuration manuellement, utilisez `rclone obscure` pour encoder correctement le mot de passe.

## Solution 5 : Limites de connexions simultanées

Les serveurs SFTP limitent souvent le nombre de sessions simultanées. Rclone utilise par défaut 4 transferts simultanés, mais certains serveurs n'autorisent qu'une ou deux connexions.

Si vous observez des échecs de connexion intermittents lors de transferts volumineux, réduisez la concurrence :

- Définissez `--transfers 1` ou `--transfers 2` pour limiter les connexions parallèles.
- Définissez `--checkers 1` pour réduire le nombre d'opérations de vérification simultanées.

Certains hébergeurs mutualisés sont particulièrement restrictifs. Commencez avec une faible concurrence et augmentez-la progressivement.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## Solution 6 : Incompatibilité d'algorithmes SSH

Les anciens serveurs peuvent ne pas prendre en charge les algorithmes SSH modernes, ou les serveurs renforcés peuvent rejeter les anciens algorithmes. Si vous voyez des erreurs « handshake failed », mettez à jour le logiciel du serveur SSH si possible, ou vérifiez les restrictions `KexAlgorithms`, `Ciphers` et `MACs` dans `/etc/ssh/sshd_config`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez un remote SFTP** avec l'hôte, le port et les paramètres d'authentification corrects.
3. **Testez la connexion** en parcourant le remote dans l'explorateur.
4. **Suivez la liste de vérification** ci-dessus si vous rencontrez des erreurs.

Les problèmes SFTP sont presque toujours des problèmes de configuration, et non des bugs logiciels. Vérifier méthodiquement chaque couche — réseau, pare-feu, authentification et paramètres du serveur — résout la grande majorité des cas.

---

**Guides connexes :**

- [Résoudre les erreurs Rclone dans RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Corriger la corruption de la configuration Rclone](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Récupérer des transferts interrompus](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
