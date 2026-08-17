---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "Résoudre les erreurs de détection et de connexion Synology NAS — Sauvegardes fiables avec RcloneView"
authors:
  - casey
description: "Dépannez les échecs de détection automatique et de connexion Synology NAS dans RcloneView, avec des corrections pour la découverte réseau local et la configuration manuelle."
keywords:
  - Synology NAS RcloneView
  - erreur de détection automatique Synology
  - connexion NAS RcloneView
  - corriger NAS non détecté
  - sauvegarde cloud Synology
  - stockage réseau local NAS
  - dépannage RcloneView
  - montage SMB Synology
  - synchronisation stockage local
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de détection et de connexion Synology NAS — Sauvegardes fiables avec RcloneView

> Lorsque RcloneView ne trouve pas votre Synology sur le réseau local, la solution est généralement un paramètre, pas un NAS défaillant.

RcloneView peut détecter automatiquement un NAS Synology sur votre réseau local, mais la détection automatique dépend de la visibilité réseau, pas seulement du fait que le NAS soit allumé. Un studio photo qui sauvegarde 2 To de fichiers RAW chaque nuit peut perdre toute une fenêtre de sauvegarde à cause d'un NAS qui cesse silencieusement d'apparaître dans l'explorateur. Ce guide passe en revue les causes courantes des échecs de détection et de connexion Synology et la façon de résoudre chacune dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi la détection automatique échoue

Le paramètre de détection automatique Synology de RcloneView balaie le segment de réseau local auquel votre machine est connectée. Si le NAS se trouve derrière un VLAN, un sous-réseau différent ou un tunnel VPN, la diffusion ne l'atteint jamais et le NAS n'apparaît pas automatiquement — il s'agit d'une limite de topologie réseau, pas d'un bug de RcloneView. Vérifiez d'abord que le paramètre lui-même est activé : l'onglet Settings > General > Auto-detect Synology NAS doit être activé, car il s'agit d'un interrupteur qu'il est facile de laisser désactivé après une nouvelle installation.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Interrupteur de détection automatique Synology NAS dans les paramètres RcloneView" class="img-large img-center" />

Si l'interrupteur est activé et que la détection échoue toujours, vérifiez que la machine cliente et le NAS se trouvent sur le même segment réseau physique ou virtuel. Les réseaux d'entreprise avec isolation des clients activée sur le point d'accès Wi-Fi bloquent entièrement la découverte d'appareil à appareil, même si les deux apparaissent comme « connectés ».

## Connexion manuelle lorsque la détection automatique ne peut pas atteindre le NAS

Lorsque la détection automatique n'est pas viable — bureaux distants, réseaux segmentés ou unités NAS sur un VLAN différent — connectez-vous manuellement plutôt que de dépanner la découverte. Ajoutez le Synology comme distant SFTP ou SMB/CIFS dans le gestionnaire de distants en utilisant directement son adresse IP ou son nom d'hôte, contournant entièrement le balayage réseau local.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout manuel d'un NAS Synology comme distant SFTP" class="img-large img-center" />

Cette voie manuelle résout également le problème secondaire le plus courant : des délais de connexion qui ressemblent à des échecs de détection mais qui sont en réalité des problèmes d'authentification. Vérifiez à nouveau que le service SSH ou SMB du NAS est activé dans le panneau de configuration propre à Synology — RcloneView ne peut pas se connecter à un service que le NAS lui-même n'exécute pas.

## Vérifier la connexion et automatiser les sauvegardes

Une fois le distant ajouté, utilisez Test Connection avant l'enregistrement pour confirmer les identifiants et l'accessibilité en une seule étape, plutôt que de découvrir un échec en plein transfert. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sur Windows, macOS et Linux, de sorte qu'une fois le Synology connecté, il se trouve dans le même explorateur que vos distants cloud, sans application séparée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches montrant une exécution de sauvegarde Synology terminée" class="img-large img-center" />

À partir de là, créez une tâche de synchronisation qui reflète le NAS vers une destination cloud et vérifiez l'historique des tâches après la première exécution — une tâche qui se termine avec zéro fichier transféré signifie généralement que le chemin source était incorrect, pas que la connexion est rompue.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activez Auto-detect Synology NAS dans Settings, ou connectez-vous manuellement via SFTP/SMB en utilisant l'adresse IP du NAS.
3. Exécutez Test Connection avant d'enregistrer le distant.
4. Configurez une tâche de synchronisation vers une destination cloud et confirmez le transfert dans l'historique des tâches.

Un NAS qui se connecte de manière fiable vaut bien les cinq minutes de dépannage réseau — les sauvegardes automatisées ne vous protègent que si elles s'exécutent réellement.

---

**Guides connexes :**

- [Synchroniser Synology avec Google Drive sans perte de données](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [Sauvegarder Synology dans le cloud avec RcloneView](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [Résoudre les erreurs de montage de partage réseau SMB/Windows — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />
