---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "Corriger « connexion refusée » avec Rclone externe — dépanner l'accès rcd avec RcloneView"
authors:
  - casey
description: "Corrigez les erreurs de connexion rclone externe dans RcloneView : vérifiez rclone rcd, le port 5572, les identifiants, le pare-feu et SSL avec Test Connection."
keywords:
  - rclone rcd connexion refusée
  - RcloneView rclone externe
  - rclone contrôle à distance ne se connecte pas
  - rclone rcd port 5572
  - RcloneView Connect Manager
  - rclone rcd authentification échouée
  - corriger connexion rclone rc
  - rclone rcd pare-feu
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger « connexion refusée » avec Rclone externe — dépanner l'accès rcd avec RcloneView

> Lorsque RcloneView ne parvient pas à joindre votre serveur rclone externe, la cause est presque toujours l'un des cinq points ci-dessous, vérifiables en quelques minutes.

RcloneView est fourni avec un rclone intégré, mais de nombreux utilisateurs le relient à un rclone externe exécuté sur un NAS, un VPS ou une instance AWS EC2 via le Connect Manager. Lorsque cette liaison échoue avec « connection refused », un délai dépassé ou une erreur d'authentification, une courte liste de contrôle permet d'identifier la cause.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier que rclone rcd est bien en cours d'exécution

RcloneView communique avec un rclone externe via son API de contrôle à distance (Remote Control), lancée avec `rclone rcd`. Sur le serveur, démarrez-la avec des identifiants et une adresse explicites, par exemple `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`. Le port externe par défaut est 5572, tandis que l'instance intégrée utilise 5582 sur localhost.

Une erreur fréquente consiste à se lier à `127.0.0.1` puis à se connecter depuis une autre machine. La boucle locale n'accepte que le trafic local. Pour un serveur distant, liez-vous à `0.0.0.0:5572` et restreignez l'accès par IP dans votre pare-feu. Notez que RcloneView est un outil graphique qui n'est pas installé sur le serveur ; le serveur n'exécute que rclone.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Connexion de RcloneView à un hôte rclone externe" class="img-large img-center" />

## Vérifier le chemin réseau et les identifiants

Si rcd fonctionne mais que la connexion est toujours refusée, testez le chemin réseau. Depuis la machine qui exécute RcloneView, un contrôle d'état sur `/rc/noop` avec votre nom d'utilisateur et votre mot de passe doit renvoyer une réponse. S'il se bloque, un pare-feu ou un groupe de sécurité cloud bloque le port 5572. Sur AWS EC2, le groupe de sécurité nécessite une règle TCP personnalisée pour le port 5572, en plus du SSH restreint.

Les échecs d'authentification sont un cas distinct : le nom d'utilisateur et le mot de passe saisis dans RcloneView doivent correspondre exactement à `--rc-user` et `--rc-pass`, y compris la casse.

<img src="/support/images/en/blog/new-remote.png" alt="Saisie des informations de connexion externe dans RcloneView" class="img-large img-center" />

## Vérifier les paramètres dans le Connect Manager

Ouvrez Settings > Connect Manager > New Connection et renseignez le nom d'affichage, l'adresse au format `http://<host>:5572` et vos identifiants. Si votre serveur utilise un certificat auto-signé, l'option de désactivation de la vérification du certificat SSL permet à la connexion de se poursuivre. Cliquez sur Test Connection avant d'enregistrer afin de voir le résultat immédiatement.

Si l'échec persiste, activez la journalisation de rclone dans Settings > Embedded Rclone, réglez le niveau sur DEBUG, redémarrez et reproduisez le problème pour obtenir un journal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consultation des journaux et de l'historique dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Démarrez `rclone rcd` sur le serveur avec un utilisateur, un mot de passe et une adresse accessible.
3. Ouvrez le port dans votre pare-feu ou groupe de sécurité.
4. Ajoutez la connexion dans le Connect Manager et cliquez sur Test Connection.

Une fois la liaison stable, vous pouvez gérer le stockage cloud d'un serveur distant depuis votre poste de travail.

---

**Guides associés :**

- [RcloneView Connection Manager — intégré et externe](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Corriger les erreurs de certificat SSL/TLS](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [Corriger SFTP connexion refusée et délai dépassé](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
