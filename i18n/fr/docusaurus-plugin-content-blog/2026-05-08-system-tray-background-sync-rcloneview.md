---
slug: system-tray-background-sync-rcloneview
title: "Barre système et synchronisation en arrière-plan — Gardez vos tâches cloud actives dans RcloneView"
authors:
  - steve
description: "Découvrez comment l'intégration de RcloneView à la barre système permet de maintenir les tâches de synchronisation en arrière-plan, de gérer les montages cloud et d'envoyer des notifications de fin de tâche sans garder la fenêtre ouverte."
keywords:
  - RcloneView system tray background sync
  - cloud sync background mode
  - RcloneView minimize to tray
  - background cloud backup RcloneView
  - RcloneView tray icon jobs
  - cloud sync notifications RcloneView
  - keep cloud sync running background
  - RcloneView continuous backup
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Barre système et synchronisation en arrière-plan — Gardez vos tâches cloud actives dans RcloneView

> L'intégration de RcloneView à la barre système vous permet de réduire l'application tout en gardant les tâches de synchronisation actives, les lecteurs cloud montés et les notifications fonctionnelles — sans interrompre votre flux de travail.

La plupart des outils de synchronisation cloud exigent de garder une fenêtre ouverte pour confirmer que les tâches sont en cours d'exécution. La prise en charge de la barre système par RcloneView brise cette contrainte. Une fois configuré, vous pouvez réduire complètement RcloneView, et vos tâches de synchronisation planifiées, vos transferts actifs et vos lecteurs cloud montés continuent de fonctionner en arrière-plan. L'icône de la barre système vous donne un accès rapide à tout, sans encombrer votre espace de travail.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Activer le mode arrière-plan et la barre système

Par défaut, RcloneView peut être configuré pour se réduire dans la barre système plutôt que de se fermer lorsque vous fermez la fenêtre. Dans **Onglet Paramètres → Général**, recherchez l'option **Quit on close**. Désactivez-la pour vous assurer que RcloneView se déplace vers la barre système lorsque vous cliquez sur le bouton X, au lieu de se fermer complètement.

Vous pouvez également activer **Launch at login** afin que RcloneView démarre automatiquement avec votre système et commence immédiatement à surveiller les tâches planifiées. Associez cette option à **Start minimized** pour que RcloneView fonctionne silencieusement en arrière-plan dès le démarrage de votre ordinateur.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## Gérer les montages cloud depuis la barre système

L'une des fonctionnalités les plus utiles de la barre système est la gestion rapide des montages. Faites un clic droit sur l'icône RcloneView dans la barre système pour afficher la liste de tous les montages cloud configurés avec leur statut actuel (monté ou non monté). Cliquez sur une entrée pour basculer son état de montage — monter un lecteur cloud en tant que volume local ou le démonter — sans ouvrir la fenêtre principale.

Cette fonctionnalité est particulièrement précieuse pour les professionnels qui gardent plusieurs lecteurs cloud montés tout au long de la journée. Un développeur peut avoir un bucket S3 monté comme lecteur réseau, un montage Google Drive pour accéder à des documents, et un montage NAS pour le transfert de fichiers local. La barre système offre un contrôle instantané sur tous ces éléments.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## Notifications de fin de tâche

Lorsqu'une tâche de synchronisation se termine — qu'elle soit planifiée ou déclenchée manuellement — RcloneView peut afficher une notification de bureau indiquant le nom de la tâche, sa durée et son statut final. Activez cette option dans **Onglet Paramètres → Interfaces & Notifications → Show sync completion notification**.

Cela signifie que vous pouvez lancer une tâche de sauvegarde volumineuse pendant la nuit, réduire RcloneView dans la barre système, et recevoir une notification de bureau lorsque la tâche se termine. Si la tâche a échoué, vous le saurez immédiatement.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Dans **Settings → General**, désactivez **Quit on close** et activez **Launch at login**.
3. Configurez les tâches de synchronisation ou les tâches planifiées comme d'habitude.
4. Réduisez RcloneView — les tâches et les montages continuent de fonctionner en arrière-plan.

Une fois configuré, RcloneView fonctionne comme un service d'arrière-plan silencieux pour votre stockage cloud, sans nécessiter de garder une fenêtre ouverte.

---

**Guides connexes :**

- [Automatisez les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Alertes de notification à la fin de la synchronisation — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Notifications de tâches par e-mail SMTP dans RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
