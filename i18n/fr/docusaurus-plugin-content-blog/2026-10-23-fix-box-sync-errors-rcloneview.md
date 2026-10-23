---
slug: fix-box-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Box — Comment les résoudre avec RcloneView"
authors:
  - kai
description: "Corrigez les erreurs de synchronisation Box avec RcloneView : résolvez les problèmes d'OAuth, de Box for Business, de limitation de débit et de noms de fichiers grâce à Dry Run, aux journaux et à l'historique des tâches."
keywords:
  - corriger les erreurs de synchronisation Box
  - la synchronisation Box ne fonctionne pas
  - erreur de limite de débit Box
  - jeton OAuth Box expiré
  - Box for Business rclone
  - RcloneView box
  - dépannage Box
  - échec du transfert Box
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Box — Comment les résoudre avec RcloneView

> Une liste de contrôle pratique pour diagnostiquer les transferts Box en échec avec les outils déjà intégrés à RcloneView.

Les tâches de synchronisation Box échouent généralement pour quelques raisons récurrentes : une connexion expirée, un mauvais type de compte, des appels d'API limités ou des fichiers que Box traite différemment des documents ordinaires. RcloneView fournit l'historique des tâches, les journaux et le terminal intégré pour distinguer rapidement ces causes. De plus, RcloneView permet de monter et de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, ce qui vous permet aussi de tester les mêmes fichiers avec un autre remote.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Commencez par l'historique des tâches et l'onglet des journaux

Ouvrez l'historique des tâches (Job History) et regardez le statut de l'exécution en échec : Completed, Errored ou Canceled, ainsi que la taille et le nombre de fichiers transférés. Un transfert partiel indique un problème propre à certains fichiers. Une tâche qui échoue immédiatement pointe en général vers un problème d'authentification ou de configuration.

Pour plus de détails, passez à l'onglet des journaux (Log) en bas. Pour en capturer davantage, activez la journalisation de rclone dans les paramètres d'Embedded Rclone, définissez le niveau sur DEBUG, redémarrez le rclone intégré et reproduisez l'échec.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consulter l'historique des tâches en échec dans RcloneView" class="img-large img-center" />

## Se réauthentifier et vérifier le type de compte

Si toutes les requêtes échouent, le jeton OAuth a peut-être expiré ou été révoqué. Ouvrez le gestionnaire de remotes (Remote Manager), modifiez le remote Box et reconnectez-vous via le navigateur.

Si vous parvenez à vous connecter mais que des dossiers manquent ou que des erreurs d'autorisation apparaissent, vérifiez le type de compte. Box for Business exige `box_sub_type = enterprise` sur le remote. Utiliser une configuration de compte personnel avec un compte professionnel est une cause fréquente de résultats déroutants.

<img src="/support/images/en/blog/new-remote.png" alt="Modifier la configuration d'un remote Box dans RcloneView" class="img-large img-center" />

## Gérer la limitation et les grosses tâches

Lorsque des milliers de petits fichiers sont traités en même temps, Box peut limiter les requêtes. Dans les paramètres avancés (Advanced Settings) de la tâche, réduisez le nombre de transferts de fichiers et le nombre de vérificateurs d'égalité (equality checkers) ; 4 ou moins est recommandé pour les backends lents. Laissez les nouvelles tentatives à leur valeur par défaut de 3 afin que les échecs transitoires se résolvent automatiquement.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveiller un transfert dans l'onglet Transferring" class="img-large img-center" />

## Filtrer les fichiers problématiques

Les éléments uniquement en ligne, tels que Box Notes, ne sont pas des fichiers ordinaires. Le filtre prédéfini Box Docs de l'étape de filtrage les exclut afin qu'ils ne fassent plus échouer la tâche. Vous pouvez aussi ajouter des règles personnalisées, définir une taille de fichier maximale ou exclure un dossier problématique pendant votre investigation. Lancez ensuite un Dry Run pour confirmer ce qui sera copié.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparer des dossiers pour trouver les fichiers dont la synchronisation a échoué" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Consultez l'historique des tâches et l'onglet des journaux pour identifier l'erreur exacte.
3. Réauthentifiez le remote Box et vérifiez le paramètre Box for Business s'il s'applique.
4. Réduisez la concurrence, appliquez le filtre Box Docs, puis lancez un Dry Run et relancez la tâche.

La plupart des échecs Box sont des problèmes de configuration que quelques minutes passées dans les journaux suffisent à révéler.

---

**Guides associés :**

- [Corriger les erreurs d'envoi vers Box](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [Corriger l'expiration du jeton OAuth dans la synchronisation cloud](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Corriger les erreurs de limitation de débit des API cloud](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
