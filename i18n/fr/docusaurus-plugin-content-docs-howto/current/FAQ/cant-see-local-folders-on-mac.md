---
sidebar_position: 2
description: "Résolvez l'absence des dossiers Bureau, Documents ou Téléchargements dans RcloneView sur macOS en accordant les autorisations, en activant l'accès complet au disque et en collectant les journaux pour le support."
keywords:
  - rcloneview
  - macos
  - permissions
  - files and folders
  - full disk access
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# Impossible de voir les dossiers locaux sur Mac (Bureau/Documents/Téléchargements)

Si vous venez d'installer RcloneView sur macOS et que vous ne voyez pas de dossiers comme **Bureau**, **Documents** ou **Téléchargements** dans le panneau gauche « Disque local », il s'agit presque toujours d'un problème d'autorisation de confidentialité de macOS. Ce guide explique comment autoriser l'accès et que faire si les dossiers apparaissent encore vides.

Pour une visite rapide de l'Explorateur lui-même, consultez : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Pourquoi cela se produit-il

Depuis macOS 10.15 (Catalina), Apple exige que les applications demandent une autorisation avant d'accéder aux dossiers protégés tels que Bureau, Documents et Téléchargements. Si vous avez cliqué sur « Ne pas autoriser » ou si l'application n'a pas encore l'autorisation, ces dossiers apparaîtront vides dans RcloneView.

## Lorsqu'une fenêtre d'autorisation apparaît

Une boîte de dialogue macOS peut apparaître la première fois que vous ouvrez RcloneView ou lorsque vous cliquez sur un dossier protégé.

1) Si une fenêtre apparaît demandant l'accès au dossier Documents, cliquez sur **Autoriser**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) Si vous cliquez sur un dossier protégé (par ex. Téléchargements) dans le panneau gauche et qu'une invite similaire apparaît, cliquez sur **Autoriser**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) Si vous avez cliqué sur **Ne pas autoriser**, le dossier semblera vide jusqu'à ce que l'autorisation soit accordée.

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## Résoudre le problème : accorder l'accès dans Réglages Système (première action)

Si les dossiers semblent toujours vides, ou si vous avez accidentellement cliqué sur « Ne pas autoriser », accordez l'accès depuis Réglages Système de macOS.

**Étapes (macOS Ventura, Sonoma, Sequoia) :**

1. Ouvrez `Réglages Système > Confidentialité et sécurité > Fichiers et dossiers`.
2. Trouvez **RcloneView**.
3. Activez les commutateurs pour les dossiers souhaités (par ex. **Dossier Documents**, **Dossier Téléchargements**).  
4. Rouvrez le dossier dans RcloneView.

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

Si vous ne voyez pas RcloneView dans cette liste, lancez RcloneView une fois, essayez d'ouvrir un dossier protégé, et macOS devrait redemander l'autorisation.

## Toujours pas résolu ? Ajoutez l'accès complet au disque (deuxième action)

Si les commutateurs de Fichiers et dossiers sont activés et que vous ne pouvez toujours pas parcourir le contenu, essayez d'ajouter RcloneView à **l'accès complet au disque**.

1. Ouvrez `Réglages Système > Confidentialité et sécurité > Accès complet au disque`.
2. Cliquez sur le bouton `+` et choisissez l'application **RcloneView** depuis `Applications`.
3. Assurez-vous que le commutateur est activé pour RcloneView.
4. Redémarrez RcloneView et réessayez.

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## Besoin d'aide supplémentaire ? Collectez les journaux et contactez le support

Si l'accès est toujours bloqué après les étapes ci-dessus, veuillez nous envoyer des journaux afin que nous puissions vous aider.

1. Dans RcloneView, ouvrez `Paramètres > Rclone intégré`.
2. Sous **Configuration de la journalisation**, activez la journalisation, choisissez un **dossier de journaux**, conservez le nom du fichier (par ex. `rclone.log`), et définissez le **niveau de journalisation** sur **DEBUG**.
3. Cliquez sur **Redémarrer Rclone intégré** pour appliquer les modifications.
4. Reproduisez le problème (essayez d'ouvrir le dossier problématique), puis envoyez le fichier journal à [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com) avec une brève description des étapes que vous avez suivies.

:::caution Redémarrage requis
Les journaux ne sont capturés qu'après avoir cliqué sur **Redémarrer Rclone intégré**. Ne sautez pas cette étape.
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## Guides connexes

- Gestion des fichiers locaux/cloud dans l'Explorateur : [Parcourir et gérer le stockage distant](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- Aperçu complet des Paramètres (y compris Rclone intégré et Journalisation) : [Paramètres généraux](/howto/rcloneview-basic/general-settings#logging-configuration)

---

Si vous avez besoin d'aide supplémentaire, envoyez-nous un e-mail à **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
