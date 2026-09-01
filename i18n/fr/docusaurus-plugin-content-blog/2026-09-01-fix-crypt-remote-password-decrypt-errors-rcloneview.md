---
slug: fix-crypt-remote-password-decrypt-errors-rcloneview
title: "Corriger les erreurs de déchiffrement du distant Crypt — Problèmes de mot de passe et de configuration avec RcloneView"
authors:
  - kai
description: "Dépannez les échecs de déchiffrement du distant crypt, les erreurs bad-decrypt et les mots de passe perdus dans RcloneView. Des solutions pratiques pour le stockage cloud chiffré."
keywords:
  - crypt remote decryption error
  - rclone crypt bad decrypt
  - fix rclone crypt password
  - erreur de stockage cloud chiffré
  - mot de passe de configuration rclone perdu
  - crypt remote troubleshooting
  - erreur de chiffrement rcloneview
  - déchiffrer des fichiers cloud rclone
  - crypt remote config corrupted
  - rclone crypt filename error
tags:
  - RcloneView
  - troubleshooting
  - tips
  - encryption
  - crypt
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de déchiffrement du distant Crypt — Problèmes de mot de passe et de configuration avec RcloneView

> Un distant crypt qui se met soudainement à afficher « bad decrypt » ou refuse de lister les fichiers signifie généralement une chose : le mot de passe utilisé pour lire les données ne correspond pas à celui utilisé pour les chiffrer.

Le distant virtuel crypt de rclone enveloppe un distant existant et chiffre les noms de fichiers, les noms de dossiers et le contenu des fichiers avant que quoi que ce soit ne quitte votre machine. Cette protection est puissante, mais elle signifie aussi qu'un seul mot de passe non correspondant ou une entrée de configuration corrompue peut vous priver de l'accès à des fichiers par ailleurs intacts dans le cloud. RcloneView affiche ces erreurs directement dans l'onglet Log et le Terminal, ce qui permet de diagnostiquer exactement ce qui s'est mal passé plutôt que de deviner.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi le déchiffrement Crypt échoue

Un distant crypt stocke deux secrets : le mot de passe principal et un second mot de passe optionnel (le « sel »). Les deux sont masqués et enregistrés dans votre configuration rclone lorsque vous configurez le distant via l'assistant New Remote de RcloneView. Le déchiffrement échoue lorsque l'une de ces valeurs ne correspond pas à celle utilisée à l'origine — une cause fréquente est de recréer le distant crypt de mémoire après une réinitialisation de la configuration, ou de copier un fichier `rclone.conf` entre machines sans copier les chaînes de mot de passe masquées exactes.

Un autre déclencheur fréquent consiste à appliquer le mauvais mode de « chiffrement des noms de fichiers » crypt. Si le distant d'origine utilisait le chiffrement standard des noms de fichiers et qu'un distant reconstruit utilise plutôt « off » ou « obfuscate », RcloneView affichera des noms illisibles ou échouera complètement en essayant de lire une structure de répertoires qu'il ne peut pas interpréter.

<img src="/support/images/en/blog/new-remote.png" alt="Création d'un distant crypt dans RcloneView avec les champs de mot de passe" class="img-large img-center" />

## Corriger les erreurs de Bad Decrypt et de noms de fichiers illisibles

Commencez dans Remote Manager et ouvrez les paramètres du distant crypt pour les comparer à la configuration du distant sous-jacent qu'il enveloppe. Vérifiez que les champs password et password2, le mode de chiffrement des noms de fichiers et le chemin cible correspondent tous à ce qui a été utilisé à l'origine. Si vous n'êtes pas sûr des paramètres exacts, consultez l'onglet Log après avoir activé la journalisation rclone au niveau DEBUG dans Settings — le texte de l'erreur mentionne généralement le champ précis que rclone a rejeté.

Si le distant crypt a été reconstruit après une réinitialisation de la configuration et que vous disposez toujours du `rclone.conf` d'origine, ne retapez pas le mot de passe à la main. Les mots de passe stockés dans les fichiers de configuration rclone sont masqués, pas en texte clair, donc coller la chaîne masquée exacte le préserve avec précision — le retaper introduit le risque d'un mot de passe subtilement différent qui semble identique mais ne déchiffre rien.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches montrant une synchronisation échouée causée par une erreur de distant crypt" class="img-large img-center" />

## Récupération lorsque le mot de passe est réellement perdu

Il n'y a pas de porte dérobée : le chiffrement crypt de rclone est conçu de telle sorte que, sans le bon mot de passe, les données sont irrécupérables — ni par RcloneView, ni par rclone, ni par le fournisseur cloud. Si un mot de passe est réellement perdu, la solution pratique consiste en la prévention plutôt qu'en la récupération. Exportez régulièrement votre configuration rclone via Settings, et conservez le fichier exporté (ou au minimum le mot de passe crypt) en lieu sûr, séparé de la machine sur laquelle RcloneView s'exécute.

RcloneView synchronise et compare également les dossiers avec la licence FREE, donc une fois qu'un distant crypt fonctionne correctement, vous pouvez y exécuter une synchronisation Dry Run pour confirmer que le déchiffrement réussit avant de lui confier de nouvelles données. Cela permet de détecter les incohérences de mot de passe avant qu'elles ne provoquent l'échec d'une tâche de sauvegarde.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vue de comparaison de dossiers vérifiant que le contenu du distant crypt correspond aux attentes" class="img-large img-center" />

## Prise en main

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Remote Manager et repérez le distant crypt qui génère l'erreur.
3. Activez la journalisation rclone au niveau DEBUG dans Settings, puis reproduisez l'erreur pour capturer le message d'échec exact.
4. Comparez le mot de passe, le password2 et le mode de chiffrement des noms de fichiers du distant crypt avec vos notes de configuration d'origine ou la configuration exportée.

Résoudre rapidement les erreurs de distant crypt fait toute la différence entre une simple vérification de configuration et une sauvegarde véritablement irrécupérable — traitez votre mot de passe de chiffrement avec autant de soin que les données qu'il protège.

---

**Guides associés :**

- [Zero-CLI Encryption with RcloneView Crypt Remote: Protect Any Cloud Folder](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [How to Backup, Migrate, and Manage Your Rclone Config with RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)

<CloudSupportGrid />
