---
slug: fix-ftp-connection-errors-rcloneview
title: "Corriger les erreurs de connexion FTP — Dépannage avec RcloneView"
authors:
  - jay
description: "Résolvez les échecs de connexion FTP dans RcloneView, des remotes bloqués aux erreurs d'authentification, grâce au terminal intégré et aux outils de journalisation."
keywords:
  - corriger erreurs de connexion ftp
  - dépannage ftp rcloneview
  - échec d'authentification ftp
  - erreurs de remote ftp rclone
  - connexion ftp refusée
  - remote ftp rcloneview
  - résoudre erreurs de synchronisation ftp
  - problèmes de connexion serveur ftp
  - diagnostic terminal rclone
  - problèmes ftp synchronisation cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - ftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de connexion FTP — Dépannage avec RcloneView

> Lorsqu'un remote FTP refuse de se connecter ou que les tâches de synchronisation échouent sans cesse, passez d'abord en revue les outils de diagnostic intégrés de RcloneView avant de supposer que le serveur est en panne.

Le FTP reste l'épine dorsale d'une bonne partie de l'infrastructure existante — hébergeurs web, anciens NAS, serveurs de fichiers internes — et le connecter à RcloneView vous permet d'intégrer ce stockage à votre routine habituelle de synchronisation et de sauvegarde. Mais les remotes FTP sont aussi plus sensibles aux conditions réseau et aux erreurs de frappe dans les identifiants que les fournisseurs basés sur OAuth, ce qui explique que les erreurs de connexion y soient plus fréquentes. Voici comment isoler la cause au lieu de deviner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifiez que les paramètres du remote sont corrects

La plupart des erreurs « connexion échouée » proviennent d'un hôte, d'un port ou d'un chemin mal saisi dans la configuration du remote plutôt que du serveur lui-même. Ouvrez **onglet Remote > Remote Manager**, trouvez votre remote FTP et ouvrez-le en mode édition pour revérifier l'adresse de l'hôte et les identifiants de connexion par rapport à ce que votre administrateur serveur vous a communiqué.

<img src="/support/images/en/blog/new-remote.png" alt="Vérification des paramètres de connexion d'un remote FTP dans RcloneView" class="img-large img-center" />

Si les paramètres semblent corrects mais que la connexion échoue toujours, le problème vient plus probablement du réseau : un pare-feu bloquant le port, un VPN interférant avec la route, ou le serveur FTP lui-même inaccessible depuis votre réseau actuel.

## Testez la connexion depuis le terminal intégré

RcloneView inclut également un terminal rclone complet en plus de l'interface graphique, même avec la licence FREE, vous n'avez donc pas besoin d'installer une ligne de commande séparée pour investiguer un problème de connexion. Ouvrez l'onglet **Terminal** dans l'Info View en bas de l'écran et exécutez `rclone about "remote:"` sur votre remote FTP — une connexion fonctionnelle renvoie immédiatement les détails du stockage, tandis qu'un échec affiche le message d'erreur brut de rclone au lieu d'une boîte de dialogue générique RcloneView.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Test d'une connexion remote FTP depuis le terminal RcloneView" class="img-large img-center" />

Ce texte d'erreur brut permet de distinguer rapidement un rejet d'authentification d'un délai d'attente dépassé, deux situations qui appellent des correctifs totalement différents.

## Collectez les journaux en cas d'échecs persistants

Si le problème persiste après la correction des identifiants, activez la journalisation détaillée : allez dans **Settings > Embedded Rclone**, activez **rclone Logging**, réglez le niveau de journalisation sur **DEBUG**, puis cliquez sur **Restart Embedded Rclone** et reproduisez la synchronisation en échec. Le fichier journal obtenu capture l'intégralité de la négociation avec le serveur FTP et se révèle bien plus utile pour le diagnostic que le résumé affiché dans l'onglet Log seul.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Examen de l'historique des tâches après reproduction d'un échec de connexion FTP" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revérifiez l'hôte, le port et les identifiants de votre remote FTP dans Remote Manager.
3. Exécutez `rclone about "remote:"` dans l'onglet Terminal pour voir l'erreur de connexion brute.
4. Activez la journalisation de niveau DEBUG si l'erreur persiste, puis reproduisez le problème.

Quelques minutes passées avec le terminal et les paramètres de journalisation transforment généralement un vague message « connexion échouée » en un correctif que vous pouvez appliquer.

---

**Guides associés :**

- [Gérer un serveur FTP — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Migrer un serveur FTP vers le stockage cloud](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Corriger les erreurs de connexion SFTP refusée et de délai d'attente](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
