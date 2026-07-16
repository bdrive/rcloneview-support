---
slug: troubleshoot-rclone-errors-rcloneview
title: "Résoudre les erreurs rclone avec RcloneView : limites d'API, permissions, délais d'attente, et plus"
authors:
  - tayson
description: "Diagnostiquez et corrigez les erreurs rclone courantes grâce au Terminal RcloneView, aux journaux de tâches et à l'historique, pour résoudre les limites d'API, les problèmes de permissions, les délais d'attente et les avertissements d'intégrité des données."
keywords:
  - rclone error fix
  - rclone troubleshooting
  - rclone api rate limit
  - rclone permission denied
  - rclone timeout
  - rclone quota exceeded
  - rclone debugging
  - rcloneview errors
  - rclone cli gui
  - cloud automation
  - rcloneview
tags:
  - sync
  - file-management
unlisted: true

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs rclone avec RcloneView : limites d'API, permissions, délais d'attente, et plus

> rclone est puissant, mais des erreurs comme les limites de débit 403, les délais d'attente ou « permission denied » peuvent bloquer une migration. RcloneView combine la visibilité de la CLI avec le contexte du GUI afin que vous puissiez repérer la cause plus rapidement et la corriger en toute sécurité.

Si vous vous êtes déjà retrouvé face à un mur de sortie rclone en vous demandant pourquoi une tâche a échoué, RcloneView peut raccourcir cette boucle. Le Terminal intégré, les journaux détaillés et l'Historique des tâches vous aident à reproduire les problèmes, isoler les fichiers en échec, et ajuster les paramètres de performance ou d'authentification sans quitter l'application.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Pourquoi les erreurs rclone se produisent

- Limites d'API et quotas : réponses 403 ou 429 de Google Drive, OneDrive, Dropbox, etc.
- Problèmes de portée d'authentification : jetons expirés ou permissions manquantes.
- Incohérences de chemin et de permissions : lecteurs partagés, dossiers externes ou mauvais chemin racine.
- Conditions réseau : délais d'attente, limitation de débit ou liens instables.
- Contrôles d'intégrité : incohérences de somme de contrôle lorsque les fournisseurs modifient les envois.

## Erreurs courantes et leur signification

| Erreur | Ce que cela signifie généralement | Prochaine étape rapide |
| --- | --- | --- |
| 403: Rate Limit Exceeded / 429 Too Many Requests | Le fournisseur a limité les requêtes | Réduisez `--transfers`, ajoutez `--tpslimit`, réessayez avec un backoff |
| Failed to copy: permission denied | Accès manquant au dossier ou au fichier | Vérifiez le chemin, contrôlez les permissions du lecteur partagé, ré-authentifiez avec la bonne portée |
| Failed to refresh token | Jeton OAuth expiré ou invalide | Reconnectez le remote via le flux OAuth de RcloneView |
| Directory not found | Faute de frappe dans le chemin ou mauvaise racine | Confirmez le chemin avec `rclone lsf remote:` |
| Timeout waiting for connection | Instabilité réseau ou pare-feu | Réduisez le parallélisme, réessayez avec `--retries` et `--low-level-retries` |
| Upload failed: corrupted on transfer | Échec du contrôle d'intégrité | Relancez avec `--checksum` ou `rclone check` |

## Utiliser le Terminal RcloneView pour reproduire et inspecter les erreurs

Relancez la commande en échec dans le Terminal intégré pour éliminer des variables telles que de mauvais répertoires de travail ou configurations.

- Ouvrez l'onglet **Terminal** et tapez `rclone ` pour voir toutes les commandes (autocomplétion). [Guide](/howto/rcloneview-basic/using-terminal-in-rcloneview)
- Ajoutez `-vv` pour capturer une sortie détaillée que vous pouvez copier ou partager.

Exemples :

```bash
rclone about myremote: -vv
rclone lsf myremote:path -vv --dirs-only --recursive
rclone sync src: dst: -vv --transfers=8
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="RcloneView Terminal autocomplete" class="img-medium img-center" />

## Vérifier les journaux et l'historique des tâches pour repérer des tendances

Les vues Moniteur de tâches et Historique montrent quels fichiers ont échoué et à quelle fréquence.

- **Moniteur de tâches** : onglet Transfert en direct pour les tâches actives, plus les journaux Terminé/API pour les exécutions terminées. [Voir les étapes](/howto/rcloneview-basic/real-time-transfer-monitoring)
- **Historique** : ouvrez l'Historique d'une tâche spécifique depuis le Gestionnaire de tâches pour examiner les résultats par fichier. [Voir les étapes](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="Job Monitor transfer log" class="img-medium img-center" />

## Corriger les erreurs de limite de débit et de quota d'API

- Réduisez la concurrence : diminuez `--transfers` et `--checkers` dans les options de tâche ou les indicateurs de commande.
- Ajoutez une limitation courtoise : utilisez `--tpslimit` et `--tpslimit-burst` pour les fournisseurs avec des API strictes.
- Divisez les grosses tâches : exécutez dossier par dossier ou planifiez pendant les heures creuses via le Gestionnaire de tâches.
- Utilisez des exécutions incrémentielles : combinez Comparer + Synchroniser pour ne déplacer que les fichiers modifiés et réduire le nombre d'appels.

## Corriger les problèmes d'authentification et OAuth

- Ré-authentifiez le remote avec la bonne portée à l'aide des invites OAuth de RcloneView.
- Si un jeton est expiré ou révoqué, recréez le remote ou actualisez-le via le Terminal avec `rclone config reconnect remote:`.
- Pour les lecteurs partagés ou les comptes délégués, confirmez que le remote est configuré avec les bons identifiants de lecteur ou de locataire.

## Corriger les erreurs de permission refusée

- Confirmez que le chemin existe et que vous y avez accès : `rclone lsf remote:folder` dans le Terminal.
- Pour les lecteurs partagés Google ou les dossiers partagés Dropbox, assurez-vous que le remote utilise la bonne racine ou le bon identifiant de lecteur.
- Si vous copiez vers un lecteur partagé, vérifiez que vous disposez des permissions d'écriture ; sinon, choisissez une destination dont vous êtes propriétaire.

## Corriger les délais d'attente et les connexions instables

- Réduisez le parallélisme pour les liens fragiles : `--transfers=2 --checkers=2`.
- Augmentez le comportement de nouvelle tentative : `--retries=10 --retries-sleep=5s --low-level-retries=20`.
- Pour les fichiers volumineux, activez le streaming multi-thread : `--multi-thread-streams=4 --multi-thread-cutoff=64M`.
- Testez l'accessibilité depuis le Terminal avec une commande légère avant les grandes synchronisations :

```bash
rclone lsf remote: --max-depth 1 --fast-list -vv
```

## Corriger les erreurs d'intégrité des données et de somme de contrôle

- Vérifiez les sources et destinations avec un essai à blanc : `--dry-run` sur les tâches de Synchronisation ou de Copie.
- Utilisez `rclone check` pour comparer les sommes de contrôle entre deux remotes :

```bash
rclone check source:folder dest:folder --one-way --size-only
```

- Activez la comparaison de sommes de contrôle sur les fournisseurs pris en charge pour détecter les corruptions silencieuses.

## Quand utiliser le GUI plutôt que le Terminal

- **GUI** : créer des tâches, planifier des sauvegardes récurrentes, Comparer avant de synchroniser, glisser-déposer entre les clouds.
- **Terminal** : diagnostiquer rapidement les erreurs, tester les indicateurs du backend, ou exécuter des commandes ponctuelles avec des journaux `-vv` complets.
- Utilisez les deux : prototypez dans le Terminal, puis enregistrez les commandes stables comme tâches réutilisables.

## Liste de contrôle rapide de dépannage

1. Reproduisez l'erreur dans le Terminal avec `-vv` et copiez les journaux.
2. Vérifiez le Moniteur de tâches et l'Historique pour les fichiers en échec et leur fréquence.
3. Appliquez la catégorie de correction : limites de débit (réduire la concurrence), authentification (ré-authentifier), permissions (vérifier le chemin/la racine), réseau (réduire les threads, augmenter les nouvelles tentatives), intégrité (exécuter `check`).
4. Relancez avec `--dry-run` avant d'apporter des modifications.

## Conclusion

RcloneView transforme le débogage de rclone en un flux de travail guidé : autocomplétion pour éviter les erreurs de syntaxe, journaux intégrés pour voir ce qui a échoué, et contrôles GUI pour ajuster la concurrence ou les planifications. Utilisez le Terminal et l'Historique des tâches ensemble pour résoudre les erreurs plus rapidement et maintenir les transferts en mouvement.

<CloudSupportGrid />
