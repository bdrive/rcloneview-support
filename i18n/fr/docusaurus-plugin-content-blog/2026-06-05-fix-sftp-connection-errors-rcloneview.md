---
slug: fix-sftp-connection-errors-rcloneview
title: "Corriger les erreurs de connexion SFTP — Résoudre les problèmes de transfert de fichiers SSH avec RcloneView"
authors:
  - alex
description: "Diagnostiquez et corrigez les erreurs de connexion SFTP courantes dans RcloneView — échecs d'authentification, incompatibilités de clé d'hôte et délais d'attente — et faites fonctionner vos transferts SSH."
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de connexion SFTP — Résoudre les problèmes de transfert de fichiers SSH avec RcloneView

> Les erreurs SFTP dans RcloneView remontent presque toujours à une poignée de causes profondes — mauvaise configuration de l'authentification, règles de pare-feu ou échecs de vérification de la clé d'hôte — et chacune d'elles a une solution directe.

SFTP (SSH File Transfer Protocol, port 22) est incontournable pour transférer des fichiers entre machines locales et serveurs : hébergeurs web, NAS sur site et VM cloud exposent tous couramment une interface SFTP. Lorsque RcloneView ne parvient pas à atteindre un distant SFTP, le message d'erreur dans l'onglet Log indique la cause, mais l'éventail des problèmes possibles — identifiants incorrects, ports bloqués, clés d'hôte incompatibles, chemins restreints — peut rendre le diagnostic difficile. Ce guide passe en revue les erreurs SFTP les plus courantes et la façon de résoudre chacune d'elles méthodiquement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurer correctement le distant SFTP

La plupart des erreurs de connexion commencent lors de la configuration du distant. Dans RcloneView, ouvrez **Remote tab > New Remote** et sélectionnez **SFTP** dans la liste des fournisseurs. Les champs requis sont l'**Host** (nom d'hôte ou adresse IP brute — omettez `sftp://`), le **Port** (par défaut 22), un **Username**, et votre méthode d'**Authentication**, qui est soit un mot de passe, soit le chemin d'un fichier de clé privée SSH.

Une erreur fréquente consiste à saisir `sftp://hostname` dans le champ Host. RcloneView (via rclone) attend uniquement le nom d'hôte ou l'IP bruts, et le préfixe `sftp://` provoque un refus de connexion immédiat. Si votre serveur utilise une authentification par clé, assurez-vous que le chemin du fichier de clé privée pointe vers le bon fichier sur votre machine locale. Sous Linux et macOS, les permissions du fichier de clé doivent être `600` ou plus strictes — le client SSH refuse d'utiliser des clés lisibles par tous.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## Diagnostiquer les échecs d'authentification

Les échecs d'authentification apparaissent dans l'onglet **Log** de RcloneView avec des messages comme `ssh: handshake failed` ou `Permission denied (publickey,password)`. Effectuez ces vérifications dans l'ordre :

1. **Vérifiez le nom d'utilisateur** — connectez-vous une fois avec un client SSH en terminal pour confirmer le nom de compte exact. RcloneView utilise les mêmes identifiants, et la casse a de l'importance.
2. **Vérifiez le mode clé versus mot de passe** — si le serveur impose une connexion par clé, une saisie de mot de passe dans RcloneView échouera. Laissez le mot de passe vide et indiquez plutôt le chemin de la clé privée.
3. **Activez la journalisation DEBUG** — allez dans Settings > Embedded Rclone > Enable rclone Logging, réglez le niveau sur DEBUG, et reproduisez l'échec. Le fichier journal capture l'intégralité du handshake SSH et identifie précisément l'étape du rejet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## Résoudre les erreurs d'incompatibilité de clé d'hôte

La première fois que rclone se connecte à un serveur SFTP, il enregistre la clé d'hôte du serveur. Si cette clé change ultérieurement — suite à une reconstruction du serveur, une réinstallation du système ou une rotation de certificat — rclone déclenche une erreur `host key mismatch` et refuse la connexion pour prévenir les attaques de type homme du milieu. Pour résoudre ce problème, ouvrez l'onglet **Rclone Terminal** dans RcloneView et exécutez :

```
rclone config show <remote-name>
```

Repérez le chemin `known_hosts_file` indiqué dans la sortie, ouvrez ce fichier dans un éditeur de texte, et supprimez l'entrée obsolète pour l'hôte concerné. La prochaine tentative de connexion vous invitera à approuver la nouvelle clé et à l'enregistrer proprement.

## Corriger les problèmes de pare-feu et de délai d'attente

Si la tentative de connexion reste bloquée sans erreur — ou produit `dial tcp: connection timed out` — le problème vient probablement d'un pare-feu bloquant le port 22, que ce soit sur le serveur ou sur le réseau client. Utilisez l'onglet Terminal pour tester si rclone peut atteindre le serveur avec `rclone about <remote-name>:` et comparez le résultat à une connexion SSH directe en terminal. Si le client SSH réussit mais que rclone dépasse le délai d'attente, vérifiez si votre machine ou le réseau de l'entreprise applique des règles de pare-feu sortant affectant les connexions non liées à un navigateur. Pour les réseaux qui bloquent le port 22 sortant, demandez à l'administrateur du serveur d'exposer SFTP sur un port alternatif — une solution courante consiste à utiliser le port 443 — et mettez à jour le champ Port dans les paramètres de votre distant RcloneView en conséquence.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## Examiner l'historique des tâches après des transferts échoués

Une fois la connexion stable, consultez la vue **Job History** pour confirmer que les exécutions échouées précédentes n'ont pas laissé de fichiers partiels à destination. RcloneView enregistre pour chaque tâche son statut, le nombre de transferts, la vitesse et les codes d'erreur. Un examen rapide permet d'identifier les synchronisations incomplètes à relancer, et l'option Dry Run vous permet de prévisualiser exactement quels fichiers seront copiés ou supprimés avant de valider l'opération.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez **Remote tab > New Remote > SFTP** et saisissez le nom d'hôte brut (sans préfixe `sftp://`), le port, le nom d'utilisateur et les identifiants d'authentification.
3. Activez la journalisation DEBUG dans Settings pour capturer l'intégralité du handshake SSH en cas d'erreur.
4. Vérifiez **Job History** après tout transfert échoué pour identifier les synchronisations partielles à relancer.

Avec les bons identifiants et une vue claire sur la sortie des journaux de rclone, la plupart des erreurs SFTP se résolvent rapidement — et RcloneView facilite la vérification des résultats pour reprendre des transferts de fichiers productifs.

---

**Related Guides:**

- [Gérer les fichiers d'un serveur FTP — Synchronisation cloud et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Monter SFTP et SMB comme lecteurs locaux avec RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Résoudre les erreurs rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
