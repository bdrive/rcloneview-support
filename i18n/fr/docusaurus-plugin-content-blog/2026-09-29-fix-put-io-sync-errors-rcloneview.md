---
slug: fix-put-io-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Put.io — diagnostiquer et résoudre avec RcloneView"
authors:
  - kai
description: "Corrigez les erreurs de synchronisation Put.io avec RcloneView : réautorisez OAuth, ajustez les transferts, consultez l'historique des tâches et les journaux, puis vérifiez avec Folder Compare."
keywords:
  - corriger erreurs de synchronisation put.io
  - erreur d'authentification put.io
  - échec de transfert put.io
  - erreurs putio rclone
  - RcloneView put.io
  - réautoriser oauth put.io
  - dépannage de la synchronisation cloud
  - échec de téléchargement put.io
  - débogage des journaux rclone
  - synchronisation put.io GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Put.io — diagnostiquer et résoudre avec RcloneView

> Passez en revue les causes habituelles des transferts Put.io en échec, d'une autorisation expirée à une concurrence excessive, avec les outils intégrés à RcloneView.

Une synchronisation Put.io qui s'arrête à mi-chemin laisse souvent dans le doute : était-ce la connexion, le réseau ou les paramètres de la tâche ? RcloneView rassemble les indices au même endroit. L'onglet Transferring, Job History et l'afficheur de journaux montrent chacun une facette différente de ce qui s'est passé, et Folder Compare indique ensuite ce qui manque encore.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Commencer par l'autorisation

Put.io se connecte via OAuth dans le navigateur. Si une tâche échoue immédiatement avec un message d'authentification ou d'autorisation, l'autorisation enregistrée est le premier suspect. Ouvrez **Remote Manager** depuis l'onglet Remote, modifiez le remote Put.io et refaites la connexion dans le navigateur. Veillez à vous connecter avec le même compte Put.io que celui qui contient vos fichiers, car un second compte dans le même navigateur est une cause fréquente de listes vides.

<img src="/support/images/en/blog/new-remote.png" alt="Réautorisation d'un remote Put.io dans RcloneView" class="img-large img-center" />

Après la réautorisation, actualisez le panneau Put.io avec F5 (Cmd+R sous macOS) et vérifiez que vos dossiers s'affichent correctement avant de relancer une tâche.

## Lire l'historique des tâches et les journaux

Lorsqu'une tâche échoue en cours de route, ouvrez **Job History**. Chaque exécution enregistre son type d'exécution, son heure de début, sa durée, son statut (Completed, Errored ou Canceled), sa taille totale, sa vitesse et son nombre de fichiers. Comparer une exécution en échec avec une exécution précédente réussie montre si elle a échoué tôt, ce qui pointe vers les identifiants, ou tard, ce qui pointe vers des problèmes de réseau ou de volume.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History avec des exécutions Put.io en erreur et terminées" class="img-large img-center" />

Pour plus de détails, activez la journalisation dans un fichier sous **Settings > Embedded Rclone**, réglez le niveau de journalisation sur DEBUG et cliquez sur Restart Embedded Rclone. Reproduisez l'échec, puis lisez dans l'onglet des journaux le fichier concerné et le texte de l'erreur. L'onglet Terminal permet aussi d'exécuter `rclone about "putio:"` (avec le nom de votre propre remote) pour vérifier que le remote répond.

## Ajuster les paramètres de la tâche

Les échecs de transfert vers des services distants sont souvent auto-infligés. Dans les Advanced Settings de l'assistant de synchronisation, réduisez **Number of file transfers** et **Number of equality checkers** ; pour les backends lents, il est recommandé de garder les checkers à 4 ou moins. Laissez **Retry entire sync if fails** à sa valeur par défaut de 3 pour que les brèves interruptions se résorbent d'elles-mêmes. Si ce sont de très gros fichiers qui posent problème, utilisez le filtre de taille maximale de fichier pour scinder le travail en une première passe avec les petits fichiers et une passe séparée pour le reste.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche de synchronisation Put.io après ajustement des paramètres" class="img-large img-center" />

## Confirmer ce qui manque

Après une nouvelle exécution, ouvrez **Compare** avec Put.io d'un côté et votre destination de l'autre. Les fichiers Left-only sont ceux qui ne sont jamais arrivés, et **Copy right** envoie uniquement ceux-là. RcloneView propose cette fonction avec la licence FREE, comme le montage et la synchronisation, ce qui vous permet de terminer la récupération sans passer à une offre supérieure.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare listant les fichiers encore absents de la destination" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Réautorisez le remote Put.io dans Remote Manager et actualisez la liste.
3. Consultez Job History et activez la journalisation DEBUG si la cause n'est pas évidente.
4. Réduisez la concurrence, relancez, puis utilisez Compare pour copier ce qui reste.

Lire d'abord les indices transforme un échec vague en un paramètre précis et corrigeable.

---

**Guides associés :**

- [Gérer le stockage Put.io](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migrer Put.io vers Google Drive](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [Corriger les erreurs de synchronisation cloud dues à un jeton OAuth expiré](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
