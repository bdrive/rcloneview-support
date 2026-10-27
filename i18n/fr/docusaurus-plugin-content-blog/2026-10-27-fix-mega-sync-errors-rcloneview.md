---
slug: fix-mega-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Mega — diagnostiquer les tâches échouées avec RcloneView"
authors:
  - kai
description: "Corrigez les erreurs de synchronisation Mega avec RcloneView : vérifiez les identifiants, réduisez la concurrence, utilisez Dry Run et les journaux de Job History, puis revérifiez avec Folder Compare."
keywords:
  - corriger les erreurs de synchronisation Mega
  - échec de la synchronisation Mega
  - erreur de connexion Mega
  - erreurs de transfert Mega
  - dépannage RcloneView
  - Mega rclone GUI
  - historique des tâches Mega
  - la synchronisation Mega ne fonctionne pas
  - dépannage de la synchronisation cloud
  - erreurs de sauvegarde Mega
tags:
  - RcloneView
  - mega
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Mega — diagnostiquer les tâches échouées avec RcloneView

> Passez en revue une synchronisation Mega défaillante étape par étape : identifiants, concurrence, journaux et comparaison finale.

Lorsqu'une tâche de synchronisation Mega échoue en cours de route, on en est réduit aux suppositions : est-ce la connexion, le nombre de transferts parallèles ou quelques fichiers problématiques ? RcloneView réunit les paramètres de la tâche, l'historique et les journaux dans une seule fenêtre, ce qui vous permet de cerner la cause plutôt que de relancer à l'aveugle.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Commencer par le remote et les identifiants

Mega se connecte avec une adresse e-mail et un mot de passe. Si les tâches échouent soudainement dès la première étape, ouvrez **Remote Manager**, examinez le remote Mega et saisissez à nouveau les identifiants si le mot de passe a changé. Parcourez ensuite le remote dans un panneau Explorer : si la liste des dossiers se charge, la connexion est correcte et le problème vient de la tâche elle-même.

<img src="/support/images/en/blog/new-remote.png" alt="Vérification du remote Mega dans RcloneView" class="img-large img-center" />

Vous pouvez aussi tester depuis l'onglet Terminal intégré avec `rclone about "mymega:"`, ce qui confirme que le compte répond avant de toucher aux paramètres de la tâche.

## Réduire la concurrence dans la tâche

Une forte charge parallèle est un suspect fréquent lorsqu'un backend se met à renvoyer des erreurs. Modifiez la tâche et ouvrez l'étape 2, Advanced Settings. Réduisez **Number of file transfers** et réglez **Number of equality checkers** sur 4 ou moins pour un backend lent. Conservez **Retry entire sync if fails** à sa valeur par défaut de 3 afin que les échecs transitoires aient une nouvelle chance.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Modification des paramètres avancés d'une tâche dans RcloneView" class="img-large img-center" />

## Lire Job History et les journaux

Ouvrez **Job History** et examinez l'état, la durée et le nombre de fichiers des exécutions échouées. Consultez ensuite l'onglet Log en bas pour voir les messages horodatés autour de l'échec. Pour obtenir plus de détails, activez rclone Logging dans Settings, réglez le niveau de journalisation sur DEBUG, redémarrez le rclone intégré et reproduisez le problème.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History affichant une synchronisation Mega échouée" class="img-large img-center" />

## Prévisualiser et vérifier la correction

Lancez **Dry Run** pour voir ce que la tâche copierait ou supprimerait maintenant, ce qui est particulièrement utile après un échec partiel. Une fois la tâche réelle terminée, utilisez **Compare** entre votre source et Mega, filtrez les fichiers présents uniquement à gauche et copiez tout ce qui manque encore.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des dossiers source et Mega après une correction" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez à nouveau le remote Mega et confirmez que la liste des dossiers se charge.
3. Réduisez les transferts de fichiers et les vérificateurs, puis relancez d'abord avec **Dry Run**.
4. Examinez **Job History** et les journaux, puis terminez avec **Compare**.

Des vérifications méthodiques transforment un vague « échec de la synchronisation » en une cause précise et corrigeable.

---

**Guides associés :**

- [Corriger les erreurs de connexion et de quota Mega](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)
- [Gérer la synchronisation et la sauvegarde cloud Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation pCloud](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
