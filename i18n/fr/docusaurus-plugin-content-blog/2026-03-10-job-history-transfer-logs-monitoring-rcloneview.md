---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "Suivez vos transferts cloud avec l'historique des tâches et les journaux — Surveillez chaque synchronisation et sauvegarde dans RcloneView"
authors:
  - tayson
description: "Gardez une trace de chaque synchronisation, copie et sauvegarde cloud grâce à l'historique des tâches et aux journaux de transfert de RcloneView. Surveillez les réussites, les échecs et les performances dans le temps."
keywords:
  - historique des transferts cloud
  - journal des tâches de synchronisation
  - surveillance des sauvegardes cloud
  - journal de transfert cloud
  - historique des tâches rclone
  - surveillance de la synchronisation cloud
  - suivi des tâches de sauvegarde
  - statut des transferts cloud
  - journal de transfert rclone
  - outil de surveillance des tâches cloud
tags:
  - monitoring
  - job-history
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Suivez vos transferts cloud avec l'historique des tâches et les journaux — Surveillez chaque synchronisation et sauvegarde dans RcloneView

> Vous avez programmé une sauvegarde la semaine dernière. S'est-elle réellement exécutée ? S'est-elle terminée avec succès ? Combien de fichiers ont été transférés ? Sans historique des tâches, vous ne pouvez que deviner. Avec RcloneView, chaque tâche laisse une trace.

Mettre en place une synchronisation cloud n'est que la première étape. Savoir qu'elle fonctionne de manière fiable en est la deuxième — et sans doute la plus importante. L'historique des tâches de RcloneView suit chaque exécution : quand elle a eu lieu, combien de temps elle a pris, combien de fichiers ont été transférés, et si des erreurs sont survenues.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi l'historique des tâches est important

### Les échecs silencieux

Le pire échec de sauvegarde est celui dont vous n'avez pas connaissance. Problèmes silencieux courants :

- **Jeton OAuth expiré** — Le fournisseur cloud a révoqué l'accès, les tâches échouent silencieusement.
- **Disque plein** — La destination a manqué d'espace en cours de transfert.
- **Limitation de débit** — Le fournisseur a limité les transferts, certains fichiers ont été ignorés.
- **Délai réseau dépassé** — Une connectivité intermittente a provoqué des transferts partiels.

Sans historique des tâches, ces problèmes passent inaperçus jusqu'au moment où vous devez restaurer — et découvrez que votre « sauvegarde » date de plusieurs mois.

### Conformité et audit

Certains secteurs exigent une preuve documentée que les sauvegardes ont bien eu lieu. L'historique des tâches fournit :

- Les horodatages de chaque exécution de tâche.
- Le nombre de fichiers et les volumes transférés.
- Le statut de réussite/échec.
- Les détails des erreurs pour le dépannage.

## L'historique des tâches dans RcloneView

### Consulter les exécutions passées

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

Chaque entrée affiche :

- **Nom de la tâche** — Quelle tâche de synchronisation/copie/déplacement s'est exécutée.
- **Heure de début** — Quand l'exécution a commencé.
- **Durée** — Combien de temps cela a pris.
- **Statut** — Réussite, partielle ou échec.
- **Fichiers transférés** — Nombre de fichiers déplacés.
- **Volume de données** — Total des octets transférés.
- **Erreurs** — Nombre d'erreurs (le cas échéant).

### Repérer les tendances

Au fil du temps, l'historique des tâches révèle des schémas :

- **Durée croissante** — Votre jeu de données grossit ou les performances se dégradent.
- **Échecs intermittents** — Problèmes de réseau ou de fournisseur certains jours.
- **Zéro transfert** — Rien n'a changé (attendu pour les synchronisations incrémentales) ou la tâche ne fonctionne pas.
- **Pics d'erreurs** — Limites de débit, problèmes de permissions ou stockage plein.

## Surveillance des transferts en temps réel

Pendant l'exécution d'une tâche, surveillez la progression en direct :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

La surveillance en direct affiche :

- **Vitesse actuelle** — Mo/s ou Go/s.
- **Transferts actifs** — Nombre d'opérations de fichiers en parallèle.
- **Progression** — Pourcentage terminé.
- **Temps restant estimé (ETA)**.
- **Erreurs** — Compteurs d'erreurs en temps réel.

## Notifications d'échec

La v1.3 ajoute les notifications Slack, Discord et Telegram. Configurez des alertes pour savoir immédiatement quand :

- Une tâche programmée échoue.
- Une tâche se termine avec des erreurs.
- Une tâche se termine avec succès (confirmation optionnelle).

C'est la différence entre « ma sauvegarde a probablement fonctionné » et « ma sauvegarde a définitivement fonctionné — j'ai reçu le message Slack ».

## Dépannage à l'aide des journaux

Lorsqu'une tâche échoue, le journal de transfert vous indique exactement pourquoi :

- **403 Forbidden** — Limite de débit ou problème de permission.
- **404 Not Found** — Le fichier source a été supprimé pendant le transfert.
- **429 Too Many Requests** — Limitation par le fournisseur.
- **Timeout** — Problème de connectivité réseau.
- **Disque plein** — La destination manque d'espace.

## Bonnes pratiques

### Consultez l'historique des tâches chaque semaine

Passez 2 minutes chaque lundi à examiner les exécutions de tâches de la semaine écoulée. Repérez les problèmes avant qu'ils ne deviennent des crises.

### Configurez des alertes d'échec

Ne comptez pas sur des vérifications manuelles. Configurez des notifications Slack ou Discord pour les échecs de tâches.

### Vérifiez après des erreurs

Lorsqu'une tâche signale des erreurs, effectuez un suivi avec la comparaison de dossiers pour identifier précisément les fichiers manquants ou différents :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### Relancez les transferts échoués

La fonctionnalité de nouvelle tentative de la v1.3 peut relancer automatiquement les transferts de fichiers échoués. En cas d'échecs persistants, recherchez la cause racine à l'aide des journaux.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Créez et programmez vos tâches de synchronisation/sauvegarde**.
3. **Surveillez l'exécution** via l'historique des tâches.
4. **Configurez des notifications** pour les alertes d'échec.
5. **Passez en revue chaque semaine** — faites confiance, mais vérifiez.

Une sauvegarde que vous ne surveillez pas est une sauvegarde à laquelle vous ne pouvez pas faire confiance.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programmation des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
