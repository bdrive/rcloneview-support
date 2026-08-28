---
slug: fix-citrix-sharefile-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Citrix ShareFile — Résoudre les problèmes de connexion avec RcloneView"
authors:
  - kai
description: "Dépannez les erreurs de connexion et de synchronisation Citrix ShareFile dans RcloneView, d'une mauvaise configuration du Root Folder ID aux délais d'authentification dépassés."
keywords:
  - erreurs citrix sharefile
  - échec synchronisation sharefile
  - corriger connexion sharefile
  - sharefile root folder id
  - erreur authentification sharefile
  - dépannage rcloneview sharefile
  - erreurs sharefile rclone
  - erreurs synchronisation fichiers entreprise
  - citrix sharefile rclone gui
  - résoudre problèmes synchronisation sharefile
tags:
  - RcloneView
  - sharefile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Citrix ShareFile — Résoudre les problèmes de connexion avec RcloneView

> L'exigence de Root Folder ID de Citrix ShareFile et la gestion des sessions en entreprise sont à l'origine de la plupart des échecs de connexion et de synchronisation — voici comment les diagnostiquer et les corriger dans RcloneView.

Citrix ShareFile se configure différemment de la plupart des remotes de stockage cloud, et cette étape de configuration supplémentaire est à l'origine de la plupart des problèmes de connexion. Les listes de dossiers vides, les tâches de synchronisation qui échouent en cours de route et les remotes qui cessent silencieusement de s'authentifier sont presque toujours attribuables à l'une d'une poignée de causes. RcloneView affiche suffisamment de détails dans son onglet Log et dans Job History pour identifier de laquelle il s'agit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnostiquer une mauvaise configuration du Root Folder ID

Contrairement aux remotes uniquement OAuth comme Google Drive ou Dropbox, un remote Citrix ShareFile dans RcloneView nécessite la saisie d'un Root Folder ID lors de la configuration. Si cette valeur est incorrecte, manquante, ou pointe vers un dossier auquel votre compte n'a plus accès, le remote se connectera souvent avec succès mais renverra une liste de fichiers vide, ce qui ressemble à un échec de synchronisation alors que la connexion elle-même fonctionne. Ouvrez Remote Manager, modifiez le remote ShareFile, et revérifiez le Root Folder ID par rapport à la valeur affichée dans votre console d'administration ShareFile avant de supposer que la tâche de synchronisation elle-même est défaillante.

<img src="/support/images/en/blog/new-remote.png" alt="Modification du paramètre Root Folder ID d'un remote Citrix ShareFile dans RcloneView" class="img-large img-center" />

Ressaisir l'identifiant correct et recharger le panneau Explorer (F5 / Cmd+R) suffit généralement à confirmer si le problème venait de la configuration ou d'un point plus en aval dans le pipeline de synchronisation.

## Corriger les erreurs d'authentification et de délai de session dépassé

Les locataires ShareFile en entreprise imposent souvent des durées de session plus courtes que les services cloud grand public, ce qui fait qu'un remote qui fonctionnait hier peut soudainement signaler des erreurs d'authentification en plein transfert. Dans ce cas, réauthentifiez le remote depuis Remote Manager plutôt que de redémarrer toute la tâche — RcloneView actualisera les identifiants et reprendra le transfert. Si les délais d'attente continuent de se produire sur le même dossier volumineux, vérifiez si votre administrateur ShareFile applique une politique stricte de session inactive, car il s'agit d'un paramètre côté locataire qu'aucune configuration client ne peut contourner.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Examen de l'historique des tâches Citrix ShareFile pour repérer des erreurs d'authentification dans RcloneView" class="img-large img-center" />

## Résoudre les échecs de tâches de synchronisation sur les dossiers d'équipe partagés

Les dossiers partagés et gérés par les administrateurs de ShareFile comportent parfois des restrictions de permissions différentes de celles de l'espace personnel d'un utilisateur, ce qui provoque l'échec de fichiers individuels au sein d'une tâche de synchronisation par ailleurs saine, tandis que le reste se termine normalement. Exécuter d'abord un Dry Run montre précisément quels fichiers la tâche compte traiter, ce qui facilite la détection d'un problème de permissions sur un dossier partagé avant qu'il n'interrompe un transfert en cours. Contrairement aux outils de montage uniquement, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE — vous pouvez donc associer un Dry Run à Folder Compare pour isoler précisément les chemins à l'origine de la divergence.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison de dossiers Citrix ShareFile pour isoler des erreurs de synchronisation dans RcloneView" class="img-large img-center" />

Si les nouvelles tentatives continuent d'échouer sur le même sous-ensemble de fichiers, réduire la portée de la tâche avec un filtre personnalisé et la relancer séparément de la synchronisation en masse permet d'isoler le dossier problématique sans bloquer le reste du transfert.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez que le Root Folder ID de votre remote ShareFile correspond à votre console d'administration ShareFile.
3. Réauthentifiez le remote si vous constatez des erreurs d'authentification en plein transfert.
4. Exécutez un Dry Run sur la tâche de synchronisation concernée pour identifier quels fichiers ou dossiers précis échouent.

La plupart des erreurs de synchronisation Citrix ShareFile proviennent de la configuration ou des permissions plutôt que du moteur de transfert lui-même, et un rapide passage en revue de ces vérifications résout la majorité des cas.

---

**Guides associés :**

- [Gérer le stockage Citrix ShareFile — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Migrer Citrix ShareFile vers OneDrive et SharePoint — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Résoudre les conflits de synchronisation cloud — Comment les résoudre avec RcloneView](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
