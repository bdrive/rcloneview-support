---
slug: fix-proton-drive-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Proton Drive — Guide de dépannage pour RcloneView"
authors:
  - tayson
description: "Dépannez les problèmes d'authentification, de 2FA et d'échec de synchronisation Proton Drive dans RcloneView grâce à des solutions pratiques et des étapes de journalisation."
keywords:
  - erreurs de synchronisation Proton Drive
  - corriger Proton Drive RcloneView
  - échec d'authentification Proton Drive
  - connexion 2FA Proton Drive
  - dépannage Proton Drive
  - erreurs de synchronisation RcloneView
  - problèmes de connexion Proton Drive
  - corriger la sauvegarde Proton Drive
  - débogage de journalisation rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Proton Drive — Guide de dépannage pour RcloneView

> Lorsqu'une synchronisation Proton Drive se bloque ou échoue à s'authentifier, la cause se trouve généralement dans la configuration des identifiants ou le journal de la tâche — pas dans un bug du transfert lui-même.

Proton Drive se connecte à RcloneView avec un e-mail, un mot de passe et un code à deux facteurs optionnel plutôt qu'un flux OAuth via navigateur. La plupart des échecs de synchronisation proviennent donc de cette étape d'identification, ou d'une tâche qui n'a pas été retestée depuis un changement des paramètres de votre compte Proton. RcloneView affiche ces échecs dans Job History et l'onglet Log, ce qui permet d'isoler facilement la cause réelle une fois qu'on sait où regarder.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Échecs d'authentification et de 2FA

Si un distant Proton Drive ne parvient pas à se connecter, vérifiez d'abord l'e-mail et le mot de passe saisis dans Remote Manager — contrairement aux fournisseurs OAuth, il n'y a pas de reconnexion via navigateur en secours, donc un mot de passe Proton modifié casse silencieusement le distant jusqu'à ce que vous le modifiiez. Si l'authentification à deux facteurs est activée sur votre compte Proton, veillez à saisir rapidement le code, car les codes 2FA expirent vite et un code expiré produit la même erreur d'authentification générique qu'un mot de passe incorrect.

<img src="/support/images/en/blog/new-remote.png" alt="Modification des identifiants Proton Drive dans le Remote Manager de RcloneView" class="img-large img-center" />

RcloneView monte et synchronise Proton Drive depuis la même fenêtre sur Windows, macOS et Linux — une correction d'identifiants s'applique donc partout où vous avez configuré le distant, sans reconfiguration par plateforme.

## Tâches de synchronisation bloquées ou échouant en cours de transfert

Une tâche qui démarre mais ne se termine jamais indique souvent une règle de filtre excluant plus que prévu, ou un nombre de tentatives trop faible pour une connexion instable. Ouvrez les Advanced Settings de la tâche et vérifiez le nombre de tentatives — la valeur par défaut de 3 gère les brefs incidents réseau, mais la réduire à 1 supprime entièrement ce filet de sécurité. Exécutez un Dry Run avant de relancer la tâche pour voir exactement quels fichiers seront concernés.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'un Dry Run avant de relancer une tâche de synchronisation Proton Drive" class="img-large img-center" />

## Consulter Job History et activer les journaux de débogage

Job History enregistre si une exécution était Completed, Errored ou Canceled, ainsi que l'heure exacte de son arrêt — cet horodatage est un moyen fiable de relier un échec à un fichier ou un événement réseau précis.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consultation du statut de l'historique des tâches Proton Drive dans RcloneView" class="img-large img-center" />

Pour les échecs persistants ou peu clairs, activez la journalisation rclone dans les paramètres, réglez le niveau de journal sur DEBUG, redémarrez le processus rclone intégré, puis reproduisez la synchronisation. Le fichier journal obtenu indique précisément quel appel API a échoué, ce qui est bien plus utile que de deviner à partir de la seule boîte de dialogue d'erreur.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait.
2. Ressaisissez votre e-mail et mot de passe Proton Drive dans Remote Manager, en complétant rapidement la 2FA si elle est demandée.
3. Exécutez un Dry Run sur la tâche de synchronisation concernée pour confirmer les fichiers concernés.
4. Activez la journalisation DEBUG et reproduisez le problème si l'actualisation des identifiants ne le résout pas.

La plupart des erreurs de synchronisation Proton Drive se résolvent une fois les identifiants et les paramètres de nouvelle tentative vérifiés — pour le reste, les journaux sont là.

---

**Guides connexes :**

- [Gérer les fichiers Proton Drive et la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Chiffrer et sauvegarder votre disque dur sur Proton Drive avec RcloneView](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive rencontre vos clouds — Sauvegarde et synchronisation simplifiées avec RcloneView](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
