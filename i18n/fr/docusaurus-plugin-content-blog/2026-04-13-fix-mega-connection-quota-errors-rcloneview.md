---
slug: fix-mega-connection-quota-errors-rcloneview
title: "Corriger les erreurs de connexion et de quota Mega — Résoudre avec RcloneView"
authors:
  - tayson
description: "Corrigez les erreurs de synchronisation Mega dans RcloneView, notamment les dépassements de quota, les échecs de connexion et les problèmes d'authentification. Dépannage étape par étape des problèmes de stockage cloud Mega."
keywords:
  - erreur de connexion Mega
  - erreur de dépassement de quota Mega
  - corriger la synchronisation Mega
  - dépannage Mega RcloneView
  - quota Mega dépassé
  - erreur d'authentification Mega
  - corriger le stockage cloud Mega
  - erreur Mega RcloneView
  - problème de synchronisation Mega
  - dépannage de synchronisation cloud
tags:
  - mega
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de connexion et de quota Mega — Résoudre avec RcloneView

> Dépannez les échecs de synchronisation Mega dans RcloneView — résolvez les erreurs de dépassement de quota, les problèmes d'authentification et les délais de connexion lors de la synchronisation ou du transfert de fichiers Mega.

Mega est un service de stockage cloud connu pour son chiffrement de bout en bout et son généreux niveau de stockage gratuit. Bien qu'il fonctionne bien pour un accès manuel aux fichiers, la synchronisation de grandes quantités de données via Mega à l'aide de RcloneView peut faire apparaître des conditions d'erreur spécifiques : limitation par dépassement de quota, échecs d'authentification après expiration de session, et interruptions de connexion. Ce guide couvre les erreurs Mega les plus courantes rencontrées dans RcloneView et les étapes pour les résoudre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Erreurs de dépassement de quota Mega (limite de bande passante dépassée)

Mega impose des limites de bande passante en téléchargement — en particulier sur les comptes gratuits — et les dépasser déclenche une limitation qui se manifeste par des erreurs de « dépassement de quota » ou des vitesses de transfert considérablement réduites. Lorsque cela se produit pendant une tâche de synchronisation dans RcloneView, vous pouvez voir des erreurs contenant `EOVERQUOTA` ou des codes similaires dans l'onglet Log.

**Corrections immédiates :**
- **Attendre la réinitialisation de la fenêtre de quota.** Les limites de bande passante de Mega se réinitialisent sur une fenêtre temporelle glissante, généralement de plusieurs heures. Mettre en pause les synchronisations et réessayer plus tard résout souvent le problème sans aucune autre modification.
- **Réduire les transferts simultanés.** Dans les Paramètres avancés de la tâche de synchronisation, réduisez le nombre de transferts de fichiers à 1 ou 2. Moins de connexions simultanées réduit le taux de consommation de bande passante, ce qui vous aide à rester sous le seuil de quota.
- **Utilisez l'étape de filtrage** pour limiter chaque exécution de synchronisation à un sous-ensemble de fichiers, évitant les transferts volumineux en une seule exécution qui épuisent rapidement la bande passante.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Mega sync settings to avoid overquota errors in RcloneView" class="img-large img-center" />

## Erreurs d'authentification et de connexion

Mega utilise une authentification par email et mot de passe dans rclone. Les erreurs d'authentification apparaissent généralement sous forme d'échecs de connexion ou de messages de session expirée. Causes courantes :

**Identifiants incorrects :** Vérifiez votre email et votre mot de passe Mega dans le Gestionnaire de distants. Si vous avez récemment changé votre mot de passe Mega, modifiez le distant dans RcloneView et mettez à jour les identifiants. Accédez à l'onglet Distant > Gestionnaire de distants, sélectionnez votre distant Mega, puis cliquez sur Modifier.

**Authentification à deux facteurs (2FA) :** Si la 2FA est activée sur votre compte Mega, rclone peut avoir des difficultés avec la connexion standard par email/mot de passe. Consultez la documentation de Mega pour savoir si l'accès à l'API avec la 2FA activée nécessite une configuration spéciale de jeton ou de mot de passe d'application.

**Expiration de session :** Les opérations de synchronisation de longue durée peuvent dépasser la durée de vie d'un jeton de session. Si une tâche échoue en cours de route avec une erreur d'authentification, modifier à nouveau le distant pour déclencher une nouvelle authentification puis reprendre la synchronisation résout ce problème.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authenticating Mega remote in RcloneView" class="img-large img-center" />

## Délais de connexion et transferts interrompus

Les connexions Mega peuvent expirer lors de transferts volumineux en raison d'une instabilité du réseau ou d'une limitation de débit côté serveur Mega. Le moteur de synchronisation de RcloneView réessaie automatiquement les opérations échouées (par défaut : 3 tentatives), de sorte que les échecs transitoires se rétablissent souvent sans intervention. Si une tâche échoue systématiquement après toutes les tentatives, consultez l'onglet Log pour des messages d'erreur spécifiques.

Pour les problèmes de délai persistants, ajoutez les indicateurs `--timeout` et `--contimeout` via Paramètres > Rclone intégré > Indicateurs Rclone globaux pour prolonger les valeurs de délai de connexion. Cela laisse à l'API de Mega plus de temps pour répondre avant que rclone ne déclare un échec.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Mega sync error logs and job history in RcloneView" class="img-large img-center" />

## Reprendre les tâches de synchronisation Mega interrompues

Si une synchronisation Mega volumineuse est interrompue — que ce soit par un dépassement de quota, un délai d'attente, ou une mise en veille du système — relancer la même tâche de synchronisation dans RcloneView reprend là où elle s'était arrêtée. Le comportement de synchronisation incrémentale de rclone compare la source et la destination et ne transfère que les fichiers manquants ou différents, en ignorant tout ce qui a déjà été transféré avec succès.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activez la journalisation DEBUG (Paramètres > Rclone intégré > Niveau de journal : DEBUG) pour capturer une sortie d'erreur détaillée des opérations Mega.
3. Réduisez les transferts simultanés dans les Paramètres avancés de votre tâche de synchronisation si des erreurs de dépassement de quota se produisent.
4. Modifiez à nouveau le distant Mega dans le Gestionnaire de distants pour actualiser les identifiants si les erreurs d'authentification persistent.

Comprendre les limitations de bande passante et de session de Mega vous aide à configurer des tâches de synchronisation qui s'exécutent de manière fiable sans rencontrer ces conditions d'erreur courantes.

---

**Guides connexes :**

- [Sauvegarder Mega vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/backup-mega-to-onedrive-with-rcloneview)
- [Chiffrer et synchroniser les fichiers Mega avec RcloneView](https://rcloneview.com/support/blog/encrypt-sync-protect-mega-files-rcloneview)
- [Automatiser la sauvegarde de Mega vers Google Drive avec RcloneView](https://rcloneview.com/support/blog/automate-mega-to-google-drive-backup)

<CloudSupportGrid />
