---
slug: fix-google-drive-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Google Drive — dossiers manquants, tâches en échec et listes vides résolus avec RcloneView"
authors:
  - steve
description: "Résolvez les erreurs de synchronisation Google Drive comme les dossiers partagés manquants, les listes Computers vides et les tâches en erreur grâce aux journaux de RcloneView et à Folder Compare."
keywords:
  - corriger les erreurs de synchronisation Google Drive
  - erreur rclone Google Drive
  - Google Drive Partagés avec moi manquant
  - dossier Computers Google Drive vide
  - échec de synchronisation Google Drive
  - RcloneView Google Drive
  - filtre de synchronisation Google Docs
  - dépannage Google Drive
  - dépannage de la synchronisation cloud
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Google Drive — dossiers manquants, tâches en échec et listes vides résolus avec RcloneView

> De nombreux problèmes de synchronisation Google Drive proviennent d'un paramètre manquant, d'une connexion expirée ou d'un filtre, et RcloneView vous aide à identifier lequel.

Une tâche Google Drive qui se termine en Errored, ou un remote qui n'affiche pas ce que vous attendiez, reste rarement un mystère dès que l'on peut consulter les journaux. Les causes les plus courantes sont des dossiers partagés qui nécessitent un paramètre précis, des ordinateurs sauvegardés qui nécessitent un identifiant de dossier, et des fichiers Google Docs qui se comportent différemment des fichiers ordinaires. RcloneView réunit au même endroit les paramètres du remote, l'historique des tâches et les journaux afin de cerner rapidement le problème.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dossiers qui n'apparaissent pas

Si les fichiers partagés avec vous sont absents de la liste racine, le remote a probablement besoin du paramètre `shared_with_me = true`, qui vous donne la vue Google Drive Shared with Me. Les ordinateurs sauvegardés depuis Drive for desktop constituent un cas distinct : le remote Google Drive Computers nécessite que `root_folder_id` soit défini sur l'identifiant de l'ordinateur.

Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote et vérifiez ces valeurs. Rechargez ensuite le panneau Explorer avec F5.

<img src="/support/images/en/blog/new-remote.png" alt="Modification des paramètres du remote Google Drive dans RcloneView Remote Manager" class="img-large img-center" />

## Connexion expirée et échec d'autorisation

Google Drive se connecte via OAuth dans le navigateur. Si chaque requête échoue avec une erreur d'autorisation, modifiez le remote et reconnectez-vous afin qu'un nouveau jeton soit émis. C'est une solution courante lorsqu'un remote qui fonctionnait échoue soudainement.

Pour les messages de quota et de limitation de débit, consultez nos guides dédiés aux limites de débit et au quota de stockage de Google Drive. Dans les deux cas, réduire le nombre de transferts de fichiers à l'étape 2 de l'assistant de synchronisation est une première mesure raisonnable.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History affichant une synchronisation Google Drive en erreur dans RcloneView" class="img-large img-center" />

## Lire les journaux pour trouver l'erreur exacte

Ouvrez Job History pour voir si une tâche a échoué immédiatement ou en cours d'exécution. Pour plus de détails, rendez-vous dans Settings > Embedded Rclone, activez la journalisation de rclone, définissez le niveau sur DEBUG et cliquez sur Restart Embedded Rclone. Reproduisez l'échec et lisez le journal : il indique le fichier et l'erreur. Vous pouvez aussi exécuter des commandes comme `rclone about "remote:"` dans l'onglet Terminal intégré pour vérifier la connectivité.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nouvelle exécution d'une tâche Google Drive après correction des paramètres" class="img-large img-center" />

## Gérer Google Docs et vérifier les résultats

Google Docs, Sheets et Slides ne sont pas des fichiers ordinaires ; ils peuvent donc apparaître différemment après un transfert. L'étape 3 de l'assistant de synchronisation inclut un filtre Google Docs prédéfini si vous souhaitez les exclure. Après une nouvelle exécution, utilisez Compare pour vérifier les deux côtés : les fichiers présents uniquement à gauche, uniquement à droite et différents montrent ce qui reste à traiter. Lancez un Dry Run avant toute synchronisation susceptible de supprimer des fichiers.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare vérifiant une synchronisation Google Drive" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez la présence de `shared_with_me` ou `root_folder_id` dans le remote et réautorisez-le si nécessaire.
3. Passez en revue Job History et activez la journalisation DEBUG pour les tâches en erreur.
4. Lancez un Dry Run, relancez la tâche, puis vérifiez avec Folder Compare.

Avec les paramètres, les journaux et la comparaison réunis dans une seule fenêtre, une tâche Drive en échec se résume à une courte liste de contrôle.

---

**Guides associés :**

- [Gérer le stockage Google Drive — synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Corriger les erreurs 403 de limite de débit Google Drive avec RcloneView](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Corriger le dépassement du quota de stockage Google Drive avec RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
