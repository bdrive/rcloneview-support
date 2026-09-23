---
slug: fix-rclone-config-password-errors-rcloneview
title: "Corriger les erreurs de Config Password Rclone — Résoudre les problèmes de configuration chiffrée avec RcloneView"
authors:
  - robin
description: "Dépannez les erreurs de Config Password de rclone.conf dans RcloneView — blocages, échecs de déchiffrement et mots de passe oubliés — et reconnectez vos remotes."
keywords:
  - erreur config password rclone
  - rclone.conf chiffré
  - RcloneView config password
  - échec de déchiffrement rclone conf
  - config password rclone oubliée
  - config password ne correspond pas
  - chiffrement de configuration rclone
  - remotes verrouillés RcloneView
  - restaurer la config rclone
  - récupération de config rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de Config Password Rclone — Résoudre les problèmes de configuration chiffrée avec RcloneView

> Lorsque le Config Password protégeant votre rclone.conf n'est plus synchronisé, tous les remotes de RcloneView cessent de se charger en même temps — voici comment diagnostiquer le problème et retrouver l'accès.

L'onglet Settings de RcloneView comprend une option **Config Password** sous Embedded Rclone, qui chiffre l'intégralité de votre fichier rclone.conf — le fichier contenant tous les remotes que vous avez configurés, pas seulement un fournisseur. C'est différent du chiffrement de fichiers individuels avec un remote Crypt ; un Config Password protège d'un coup les identifiants et jetons de tous vos remotes. Lorsque ce mot de passe est incorrect, manquant, ou désynchronisé de celui qui a réellement chiffré le fichier, RcloneView ne peut déchiffrer aucun remote, et l'explorateur entier apparaît vide ou génère des erreurs de connexion au démarrage.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconnaître un problème de Config Password

Le symptôme est généralement total, et non partiel : au lieu qu'un seul remote échoue à se connecter, tous les remotes — Google Drive, S3, Dropbox, tous ensemble — échouent en même temps, souvent juste après le démarrage de RcloneView ou après le redémarrage du processus rclone embarqué. Vérifiez l'onglet **Log** dans l'Info View en bas, ou activez la journalisation basée sur fichier dans Settings > Embedded Rclone avec le niveau de journalisation réglé sur DEBUG, puis redémarrez le processus rclone embarqué. Un échec de déchiffrement de la configuration apparaît clairement dans le journal, contrairement à une erreur d'authentification propre à un fournisseur — c'est le moyen le plus sûr de le distinguer d'un jeton OAuth expiré ou d'une clé API révoquée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Examen de l'historique des tâches et des journaux après une erreur de config password dans RcloneView" class="img-large img-center" />

## Causes courantes et solutions

La plupart des problèmes de Config Password se ramènent à l'une de ces situations :

**Mot de passe saisi incorrectement après une mise à jour ou une réinstallation.** Si vous avez déplacé RcloneView vers une nouvelle machine ou l'avez réinstallé, ressaisissez le Config Password exact dans Settings > Embedded Rclone > Config Password. Il n'existe pas de correspondance partielle — un seul caractère erroné empêche le déchiffrement de l'ensemble du fichier.

**Un chemin rclone.conf obsolète.** Le paramètre Local Rclone config location de RcloneView pointe vers un fichier précis. Si une installation précédente a laissé à cet emplacement une configuration non chiffrée ou chiffrée différemment, RcloneView risque de lire un fichier totalement différent. Vérifiez que l'emplacement de la configuration dans Settings correspond bien à l'endroit où se trouve votre rclone.conf réellement chiffré.

**Mot de passe oublié, sans option de récupération.** Le chiffrement de configuration de rclone n'a pas de porte dérobée — si le mot de passe est vraiment perdu, le rclone.conf existant ne peut pas être déchiffré. Votre seule solution est de supprimer le fichier chiffré et de réajouter chaque remote depuis zéro via **Remote** > **New Remote**, ce qui explique pourquoi il vaut la peine de conserver cette valeur dans un gestionnaire de mots de passe, au même titre que n'importe quel identifiant de fournisseur cloud.

<img src="/support/images/en/blog/new-remote.png" alt="Réajout d'un remote dans RcloneView après une réinitialisation du config password" class="img-large img-center" />

## Prévenir les blocages à l'avenir

Avant de modifier un Config Password, exportez vos définitions de tâches actuelles avec l'option **Export** du Job Manager — elle enregistre les paramètres des tâches sous forme de fichier JSON portable, documentant quels remotes et tâches existaient, même si elle ne restaure pas les identifiants d'elle-même. RcloneView monte et synchronise également plus de 90 fournisseurs depuis une seule fenêtre sous Windows, macOS et Linux, si bien que reconstruire les remotes depuis zéro via New Remote prend quelques minutes plutôt que des heures.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Vérification des paramètres des tâches avant de modifier le config password dans RcloneView" class="img-large img-center" />

Lorsque vous contactez le support, suivez les mêmes étapes de collecte de journaux que pour les autres problèmes rclone : activez la journalisation DEBUG, redémarrez le processus rclone embarqué, reproduisez l'erreur, puis envoyez le fichier journal — les erreurs de déchiffrement sont bien plus faciles à diagnostiquer à partir d'une sortie de journal brute que d'une capture d'écran.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez Settings > Embedded Rclone > Config Password et confirmez qu'il correspond à celui qui a chiffré à l'origine votre rclone.conf.
3. Activez la journalisation DEBUG et redémarrez le processus rclone embarqué pour confirmer qu'il s'agit d'une erreur de déchiffrement et non d'un problème d'authentification du fournisseur.
4. Si le mot de passe est vraiment irrécupérable, supprimez la configuration chiffrée et réajoutez les remotes via New Remote.

Un Config Password protège d'un coup tous les identifiants de votre rclone.conf, alors traitez-le avec le même soin qu'un mot de passe maître — le perdre signifie reconstruire votre liste de remotes depuis le début.

---

**Guides associés :**

- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Fix Crypt Remote Decryption Errors — Password and Config Issues with RcloneView](https://rcloneview.com/support/blog/fix-crypt-remote-password-decrypt-errors-rcloneview)
- [Fix License Key Activation Errors — Resolve PLUS License Issues with RcloneView](https://rcloneview.com/support/blog/fix-license-key-activation-errors-rcloneview)

<CloudSupportGrid />
