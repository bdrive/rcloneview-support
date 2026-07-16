---
slug: fix-icloud-drive-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation iCloud Drive — Comment les résoudre avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs de synchronisation iCloud Drive dans RcloneView — problèmes d'authentification, exigences de version rclone et problèmes de connexion courants sur macOS."
keywords:
  - iCloud Drive sync errors RcloneView
  - fix iCloud Drive rclone errors
  - iCloud Drive authentication problem
  - RcloneView iCloud troubleshoot
  - iCloud Drive connection failed
  - rclone iCloud Drive setup
  - fix iCloud backup RcloneView
  - iCloud Drive macOS sync issues
tags:
  - macos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation iCloud Drive — Comment les résoudre avec RcloneView

> La prise en charge d'iCloud Drive dans rclone nécessite une configuration spécifique. Voici comment diagnostiquer les échecs d'authentification, les incompatibilités de version et les erreurs de connexion lors de l'utilisation d'iCloud avec RcloneView.

iCloud Drive est l'un des fournisseurs de stockage cloud les plus complexes à configurer avec rclone, car l'authentification d'Apple repose sur les identifiants Apple ID et peut impliquer des vérifications par authentification à deux facteurs. RcloneView gère cela via son backend rclone intégré, mais faire fonctionner correctement iCloud nécessite de remplir quelques prérequis. Ce guide vous accompagne à travers les points de blocage les plus courants.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prérequis : rclone v1.69 ou version ultérieure requise

La prise en charge d'iCloud Drive a été introduite dans rclone v1.69. Si vous voyez une erreur telle que `unknown provider type: iclouddrive` ou `remote type not found`, votre version de rclone intégrée est trop ancienne. Dans RcloneView, vérifiez la version actuelle de rclone dans la **barre de pied de page** en bas de la fenêtre. Si elle affiche une version antérieure à v1.69.1, utilisez **Onglet Aide → Vérifier les mises à jour** pour mettre à jour vers la dernière version de rclone intégrée.

RcloneView est livré avec un binaire rclone intégré moderne, mais si vous utilisez une installation plus ancienne, déclencher une mise à jour automatique résout entièrement cette catégorie d'erreurs.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Échecs d'authentification et 2FA Apple ID

Lors de l'ajout d'iCloud Drive via **Onglet Distant → Nouveau distant**, RcloneView vous invite à saisir votre Apple ID (e-mail) et votre mot de passe. Si vous utilisez l'authentification à deux facteurs — désormais exigée par Apple pour la plupart des comptes — vous serez également invité à saisir le code 2FA qui apparaît sur votre appareil Apple de confiance. Saisissez-le lorsque cela vous est demandé pendant l'assistant de configuration du distant.

Les erreurs courantes à ce stade incluent `INVALID_EMAIL` (vérifiez que votre adresse e-mail Apple ID est correcte), `AUTHENTICATION_FAILED` (des mots de passe spécifiques à l'application peuvent être requis si votre compte Apple dispose d'une sécurité renforcée), et des erreurs de délai d'attente si l'invite 2FA n'est pas validée rapidement. Si Apple impose des mots de passe spécifiques à l'application pour votre compte, générez-en un sur appleid.apple.com et utilisez-le à la place de votre mot de passe habituel.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Testing iCloud Drive connection in RcloneView" class="img-large img-center" />

## Listage lent ou visibilité partielle des fichiers

iCloud Drive utilise un stockage à la demande, ce qui signifie que les fichiers peuvent être stockés uniquement dans iCloud et non téléchargés localement. Lors de la navigation via rclone, les fichiers pas encore mis en cache localement sur le Mac peuvent apparaître avec des métadonnées limitées ou prendre plus de temps à être listés. Il s'agit d'un comportement normal — iCloud doit récupérer les métadonnées des fichiers depuis les serveurs d'Apple.

Si le listage des dossiers semble incomplet, essayez d'actualiser le panneau (F5 ou **Recharger** depuis le menu contextuel). Pour les grandes bibliothèques iCloud, réglez le **nombre de vérificateurs d'égalité** sur une valeur plus basse (2 à 4) dans les paramètres du job afin de réduire le rythme auquel rclone sollicite l'API iCloud pendant les opérations de comparaison.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="iCloud Drive transfer monitoring in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez que votre version de rclone intégrée est v1.69.1 ou ultérieure via la barre de pied de page.
3. Utilisez votre Apple ID et votre code 2FA (ou un mot de passe spécifique à l'application) lors de la configuration du distant.
4. Réduisez la concurrence des vérificateurs si vous rencontrez des lenteurs de listage ou des délais d'attente.

Une fois correctement configuré, iCloud Drive s'intègre facilement dans votre flux de travail RcloneView pour la sauvegarde et les transferts entre clouds.

---

**Guides connexes :**

- [Gérer la synchronisation cloud iCloud Drive avec RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Corriger l'erreur macOS « Trop de fichiers ouverts » dans RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView sur macOS Sonoma — Synchronisation et sauvegarde cloud](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
