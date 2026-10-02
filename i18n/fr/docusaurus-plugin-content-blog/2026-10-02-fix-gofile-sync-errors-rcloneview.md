---
slug: fix-gofile-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Gofile — Problèmes de jeton, d'envoi et de liste résolus avec RcloneView"
authors:
  - jay
description: "Dépannez les erreurs de synchronisation Gofile (jetons invalides, envois échoués, listes vides) grâce à l'historique des tâches, aux journaux et au terminal intégré de RcloneView."
keywords:
  - corriger erreurs synchronisation Gofile
  - erreur Gofile rclone
  - jeton Gofile invalide
  - échec d'envoi Gofile
  - dépannage Gofile
  - RcloneView Gofile
  - jeton API du compte Gofile
  - remote Gofile rclone
  - dépannage synchronisation cloud
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Gofile — Problèmes de jeton, d'envoi et de liste résolus avec RcloneView

> La plupart des échecs de synchronisation Gofile proviennent de quelques causes : un jeton périmé, un dossier racine incorrect ou un transfert à relancer — et RcloneView les fait apparaître dans l'historique des tâches et les journaux.

Gofile s'authentifie avec un jeton API de compte plutôt qu'avec une connexion par navigateur ; les erreurs se manifestent donc généralement par des messages « unauthorized » ou des dossiers qui semblent vides. Plutôt que de deviner en ligne de commande, vous pouvez utiliser l'historique des tâches, les journaux et le terminal de RcloneView pour voir exactement quelle étape a échoué. RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Commencer par le jeton API du compte

L'échec le plus courant est un jeton invalide ou périmé. Les jetons Gofile se trouvent dans le champ Account API Token de votre page de profil Gofile. Si vous avez régénéré le jeton, ou si vous l'avez collé avec une espace à la fin, chaque requête sera rejetée.

Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote Gofile et collez à nouveau le jeton. Parcourez ensuite la racine du remote dans un panneau Explorer. Si la liste se charge, l'authentification est correcte et le problème se situe ailleurs.

<img src="/support/images/en/blog/new-remote.png" alt="Modification d'un remote Gofile et nouvelle saisie du jeton API du compte dans RcloneView" class="img-large img-center" />

## Lire l'historique des tâches et les journaux

Lorsqu'une tâche planifiée ou manuelle se termine en Errored, ouvrez Job History. Chaque entrée enregistre le type d'exécution, la durée, l'état, la taille et le nombre de fichiers, ce qui permet de savoir si une tâche a échoué immédiatement (généralement l'authentification) ou en cours de route (généralement un problème réseau ou au niveau d'un fichier).

Pour plus de détails, activez la journalisation de rclone dans Settings > Embedded Rclone, définissez le niveau sur DEBUG, redémarrez le rclone intégré et reproduisez l'échec. Le journal affiche l'erreur exacte renvoyée pour chaque fichier.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches RcloneView montrant une tâche de synchronisation Gofile en erreur" class="img-large img-center" />

## Isoler les échecs d'envoi avec un Dry Run

Si seuls certains fichiers échouent, lancez d'abord un Dry Run. Il liste ce qui serait copié ou supprimé sans rien modifier, ce qui vous permet de confirmer que la source et la destination sont bien celles attendues. Réduisez ensuite le nombre de transferts de fichiers à l'étape 2 de l'assistant de synchronisation et conservez « Retry entire sync if fails » à sa valeur par défaut de 3. Moins de transferts parallèles résolvent souvent les erreurs d'envoi intermittentes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche de synchronisation Gofile après ajustement des paramètres de transfert dans RcloneView" class="img-large img-center" />

## Vérifier avec Folder Compare

Après une nouvelle exécution, utilisez Compare pour comparer côte à côte le dossier local et le dossier Gofile. Les filtres « gauche uniquement », « droite uniquement » et « différents » montrent précisément ce qui manque encore, sans avoir à tout renvoyer.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vue Folder Compare mettant en évidence les fichiers manquants sur Gofile" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Saisissez à nouveau votre Account API Token Gofile dans Remote Manager et vérifiez que le dossier racine s'affiche.
3. Consultez Job History et activez la journalisation DEBUG si une tâche est Errored.
4. Lancez un Dry Run, réduisez les transferts simultanés, puis vérifiez avec Folder Compare.

Une vision claire des jetons, des journaux et des différences transforme un échec Gofile obscur en correction rapide.

---

**Guides associés :**

- [Gérer le stockage Gofile — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation Put.io avec RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [Corriger les blocages de synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
