---
slug: fix-smb-windows-network-share-mount-errors-rcloneview
title: "Résoudre les erreurs de montage de partage réseau SMB — Corriger les problèmes de connexion avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs de connexion et de montage de partage réseau SMB/CIFS dans RcloneView. Résolvez les échecs d'authentification, les incompatibilités de protocole et les problèmes de permissions pour les partages Windows."
keywords:
  - erreur de montage SMB RcloneView
  - corriger l'erreur de connexion SMB rclone
  - dépannage de partage réseau CIFS
  - erreur de montage de partage réseau Windows
  - erreur d'authentification SMB rclone
  - correction d'incompatibilité de protocole SMB
  - corriger la connexion au lecteur réseau RcloneView
  - erreur de permission de partage SMB
tags:
  - troubleshooting
  - smb
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de montage de partage réseau SMB — Corriger les problèmes de connexion avec RcloneView

> Les erreurs de partage réseau SMB/CIFS dans RcloneView proviennent généralement d'incompatibilités d'authentification, de conflits de version de protocole ou d'un blocage par le pare-feu. Voici comment diagnostiquer et corriger chaque cas.

SMB (Server Message Block) / CIFS est le protocole que Windows utilise pour le partage de fichiers réseau — les NAS, les serveurs de fichiers Windows et les partages Samba l'utilisent tous. RcloneView se connecte aux partages SMB en tant que distant, ce qui permet de synchroniser entre SMB et le stockage cloud ou de monter des partages SMB aux côtés d'autres fournisseurs cloud. Mais les connexions SMB sont sensibles à la configuration réseau : le mode d'authentification, la version du dialecte et les règles de pare-feu influencent tous la réussite de la connexion. Ce guide passe en revue les erreurs SMB les plus courantes et leurs corrections.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Messages d'erreur SMB courants dans RcloneView

Vérifiez l'onglet **Log** après une tentative de connexion SMB échouée. Les signatures d'erreur courantes incluent :

- `NT_STATUS_LOGON_FAILURE` — le nom d'utilisateur ou le mot de passe est incorrect
- `NT_STATUS_ACCESS_DENIED` — les identifiants sont corrects mais les permissions du partage refusent l'accès
- `connection refused` ou `no route to host` — le pare-feu bloque le port 445 (SMB)
- `SMB negotiation failed: Protocol negotiate error` — incompatibilité de version de protocole entre le client et le serveur
- `NT_STATUS_IO_TIMEOUT` — le serveur SMB est injoignable ou ne répond pas

Chaque erreur pointe vers une cause racine et une correction différentes.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring an SMB remote connection in RcloneView" class="img-large img-center" />

## Corriger les erreurs d'authentification et de permission

Pour `NT_STATUS_LOGON_FAILURE`, vérifiez le format du nom d'utilisateur. L'authentification SMB nécessite le nom d'utilisateur dans le format correct pour le serveur :
- Comptes de domaine : `DOMAIN\username` ou `username@domain.com`
- Comptes locaux sur un NAS : simplement `username` (sans préfixe de domaine)
- Accès invité : laissez le nom d'utilisateur et le mot de passe vides, ou utilisez `guest`

Pour `NT_STATUS_ACCESS_DENIED`, les identifiants sont valides mais la liste de contrôle d'accès (ACL) du partage n'accorde pas l'accès à l'utilisateur authentifié. Connectez-vous au panneau d'administration du NAS ou du serveur Windows et vérifiez que les permissions du partage incluent un accès en lecture (ou lecture/écriture) pour votre compte.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Testing SMB share connection and browsing files in RcloneView" class="img-large img-center" />

## Corriger les problèmes de version de protocole

Les anciens NAS et serveurs Samba peuvent ne pas prendre en charge le dernier dialecte SMB3 que rclone négocie par défaut. Dans le gestionnaire de distants de RcloneView, modifiez le distant SMB et définissez explicitement le champ **SMB version** : essayez `SMB2` ou `SMB1` pour le matériel ancien. Notez que SMB1 est désactivé par défaut sur Windows 10/11 et Windows Server 2016+ pour des raisons de sécurité — évitez d'utiliser SMB1 dans la mesure du possible.

Pour les serveurs Samba (NAS Linux, Synology, QNAP exécutant Samba), vérifiez les paramètres `min protocol` et `max protocol` du fichier `smb.conf`. Assurez-vous que Samba est configuré pour proposer au moins SMB2.

## Corriger les problèmes de pare-feu et de connectivité

SMB nécessite le port TCP 445. Si RcloneView affiche `connection refused` ou `no route to host`, vérifiez :
- Que le pare-feu du serveur (pare-feu Windows, pare-feu du NAS) autorise le trafic TCP entrant sur le port 445 depuis l'IP de votre client
- Que votre routeur ou commutateur réseau ne bloque pas le trafic inter-VLAN sur le port 445
- Pour un SMB distant via Internet : SMB doit passer par un tunnel VPN, et non être exposé directement

Utilisez l'onglet Terminal de RcloneView pour exécuter `rclone about smb-remote:` après avoir corrigé la configuration — une réponse réussie confirme que la connexion fonctionne.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an SMB share as a virtual drive through RcloneView Mount Manager" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Consultez l'onglet Log pour connaître le code d'erreur SMB précis après une connexion échouée.
3. Corrigez les problèmes d'authentification, de version de protocole ou de pare-feu selon ce qu'indique l'erreur.
4. Retestez la connexion via le gestionnaire de distants avant de créer des tâches de synchronisation ou de montage.

Les erreurs SMB dans RcloneView sont presque toujours résolubles sans rien réinstaller — le bon changement de configuration permet de connecter votre partage réseau et de synchroniser de manière fiable.

---

**Guides connexes :**

- [Monter SFTP et SMB en tant que lecteurs locaux avec RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Corriger les erreurs de connexion refusée et de délai d'attente SFTP avec RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Dépanner les erreurs Rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
