---
slug: resume-failed-cloud-transfers-rcloneview
title: "Comment reprendre les transferts cloud échoués sans tout recommencer dans RcloneView"
authors:
  - tayson
description: "Les gros transferts cloud échouent. Les réseaux tombent, les API limitent le débit, les machines se mettent en veille. Découvrez comment RcloneView gère les transferts interrompus pour ne jamais gaspiller de bande passante en recommençant depuis le début."
keywords:
  - reprendre un transfert cloud
  - continuer un envoi échoué
  - transfert cloud interrompu
  - reprendre un transfert rclone
  - reprise d'envoi partiel
  - reprise de synchronisation cloud
  - migration cloud interrompue
  - reprendre l'envoi d'un gros fichier
  - redémarrage de transfert cloud
  - récupération de synchronisation échouée
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment reprendre les transferts cloud échoués sans tout recommencer dans RcloneView

> Vous migrez 2 To de Google Drive vers S3. À 1,3 To, votre réseau tombe. Devez-vous tout recommencer ? Absolument pas.

Les gros transferts cloud sont inévitablement interrompus. Les réseaux tombent en panne, les ordinateurs se mettent en veille, les limites d'API se déclenchent, ou les fournisseurs subissent des pannes temporaires. La question n'est pas de savoir si un transfert échouera, mais comment vous vous en remettez. RcloneView utilise la logique de reprise intelligente de rclone pour reprendre exactement là où vous vous étiez arrêté.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne la reprise

Lorsque vous lancez une tâche de synchronisation ou de copie dans RcloneView, rclone suit ce qui a déjà été transféré. Si la tâche est interrompue et que vous la relancez, rclone effectue automatiquement les actions suivantes :

1. **Vérifie ce qui se trouve déjà à la destination** — en comparant les noms de fichiers, les tailles et les dates de modification
2. **Ignore les fichiers déjà terminés** — les fichiers déjà transférés ne sont pas réenvoyés
3. **Reprend les fichiers partiels** — pour les fournisseurs qui le prennent en charge, les fichiers partiellement envoyés reprennent là où ils s'étaient arrêtés

Cela signifie que relancer une tâche échouée ne retransfère pas tout. Elle ne traite que ce qui manque.

## Étapes pratiques de récupération

### Étape 1 : Vérifier ce qui s'est passé

Ouvrez l'historique des tâches pour voir quels fichiers ont échoué et pourquoi :

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review failed transfer details" class="img-large img-center" />

### Étape 2 : Relancer la même tâche

Relancez simplement la même tâche de synchronisation ou de copie. RcloneView ignorera tout ce qui a été terminé avec succès et ne transférera que les fichiers restants :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-run failed job" class="img-large img-center" />

### Étape 3 : Vérifier l'exhaustivité

Une fois la relance terminée, utilisez la comparaison de dossiers pour confirmer que tout a bien été transféré :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify complete transfer" class="img-large img-center" />

## Conseils pour des transferts volumineux fiables

### Utilisez des tâches de synchronisation, pas une copie ponctuelle

Les tâches de synchronisation sont intrinsèquement reprenables — elles comparent la source et la destination, puis ne transfèrent que les différences. Enregistrez votre transfert sous forme de tâche nommée afin de pouvoir le relancer à tout moment.

### Planifiez des nouvelles tentatives automatiques

Pour les transferts nocturnes susceptibles d'échouer, planifiez la même tâche pour qu'elle s'exécute toutes les quelques heures. Chaque exécution reprend là où la précédente s'est arrêtée. Une fois que tout a été transféré, les exécutions suivantes se terminent instantanément, n'ayant rien à faire.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic retries" class="img-large img-center" />

### Surveillez la progression

Suivez les débits de transfert et le nombre de fichiers en temps réel pour repérer les problèmes rapidement :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Enregistrez vos transferts sous forme de tâches nommées** pour faciliter les relances.
3. **Relancez les tâches échouées** — elles ignorent automatiquement les fichiers déjà terminés.
4. **Vérifiez avec la comparaison de dossiers** après l'achèvement.

Les transferts échoués sont un ralentisseur sur la route, pas un mur de briques.

---

**Guides connexes :**

- [Corriger les envois cloud lents](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Historique des tâches et journaux de transfert](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Synchronisation vs copie vs déplacement](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)

<CloudSupportGrid />
