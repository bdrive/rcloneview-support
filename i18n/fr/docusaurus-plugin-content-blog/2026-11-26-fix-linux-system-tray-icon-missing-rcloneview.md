---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Corriger l'icône manquante de la zone de notification sous Linux — Restaurer les montages et tâches en arrière-plan avec RcloneView"
authors:
  - alex
description: "L'icône de RcloneView n'apparaît pas dans la zone de notification sous Linux ? Découvrez comment les bibliothèques AppIndicator, les réglages du bureau et les options de RcloneView rétablissent les montages et les tâches en arrière-plan."
keywords:
  - icône rcloneview manquante linux
  - icône zone de notification linux absente
  - libayatana-appindicator3-1
  - icône appindicator gnome
  - dépannage rcloneview linux
  - zone de notification rclone gui linux
  - synchronisation cloud en arrière-plan linux
  - mount manager zone de notification
  - rcloneview démarrer réduit
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger l'icône manquante de la zone de notification sous Linux — Restaurer les montages et tâches en arrière-plan avec RcloneView

> Si RcloneView fonctionne sous Linux mais que son icône n'apparaît jamais dans la zone de notification, la cause est presque toujours une bibliothèque AppIndicator manquante ou un bureau qui masque ces icônes.

L'icône de RcloneView dans la zone de notification est bien plus qu'une décoration. Elle liste vos lecteurs montés, bascule entre montage et démontage, lance de nouveaux montages et garde l'application accessible pendant que les tâches s'exécutent en arrière-plan. Lorsque l'icône manque sous Linux — fréquent sur des installations neuves d'Ubuntu, de Fedora ou de bureaux minimaux —, les utilisateurs gardent la fenêtre principale ouverte toute la journée ou perdent l'application de vue après l'avoir fermée. Voici comment diagnostiquer et corriger le problème.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi l'icône disparaît

Sous Linux, RcloneView s'intègre au bureau via D-Bus et AppIndicator. Cela nécessite l'une de deux bibliothèques : **libayatana-appindicator3-1** ou **libappindicator3-1**. Si aucune n'est installée, l'application s'ouvre quand même — elle a besoin pour cela de GTK+ 3.0 et d'une session X11 ou Wayland —, mais l'icône n'a nulle part où s'enregistrer.

La seconde cause est l'environnement de bureau. Certains bureaux, GNOME en particulier, n'affichent pas les icônes AppIndicator par défaut et nécessitent l'activation d'une extension AppIndicator. KDE Plasma, Xfce, Cinnamon et MATE les affichent généralement sans étape supplémentaire.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager de RcloneView utilisé lorsque l'icône de notification Linux est indisponible" class="img-large img-center" />

## Correction étape par étape

1. **Installez une bibliothèque AppIndicator.** Utilisez le gestionnaire de paquets de votre distribution pour installer libayatana-appindicator3-1 (ou libappindicator3-1 sur les distributions qui la fournissent encore). Les noms de paquets varient légèrement d'une distribution à l'autre ; recherchez donc « appindicator » dans votre gestionnaire de paquets.
2. **Activez la prise en charge de la zone de notification dans votre bureau.** Sous GNOME, activez une extension AppIndicator/KStatusNotifierItem, puis déconnectez-vous et reconnectez-vous.
3. **Redémarrez complètement RcloneView.** Quittez l'application — ne vous contentez pas de fermer la fenêtre — et relancez-la pour qu'elle s'enregistre dans la zone de notification au démarrage.

Si l'icône n'apparaît toujours pas, ouvrez l'onglet **Log** dans l'Info View en bas pour repérer les erreurs, ou activez la journalisation rclone au niveau DEBUG dans Settings > Embedded Rclone afin de collecter des détails pour le support.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Monter un distant cloud depuis l'explorateur RcloneView sous Linux" class="img-large img-center" />

## Vérifier les réglages qui dépendent de la zone de notification

Deux réglages General interagissent avec la zone de notification. **Start minimized** lance RcloneView directement dans la zone de notification — sans icône fonctionnelle, l'application peut sembler ne pas démarrer du tout. **Quit on close** détermine si le bouton de fermeture quitte l'application ou la laisse tourner en arrière-plan. Tant que la zone de notification n'est pas réparée, désactivez Start minimized et gardez Quit on close à l'esprit pour ne pas arrêter accidentellement des tâches en cours.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de RcloneView confirmant la fin des tâches en arrière-plan" class="img-large img-center" />

## Vérifier que le travail en arrière-plan s'exécute

Une fois l'icône revenue, fermez la fenêtre principale et vérifiez que le menu de la zone de notification liste toujours vos montages. Les tâches continuent en arrière-plan et une notification apparaît à la fin de chacune. Ensuite, **Job History** indique si chaque exécution s'est terminée, a échoué ou a été annulée. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux — et la zone de notification permet de garder cette fenêtre hors de votre chemin.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) au format .deb, .rpm ou .AppImage.
2. Installez libayatana-appindicator3-1 ou libappindicator3-1 avec le gestionnaire de paquets de votre distribution.
3. Activez la prise en charge d'AppIndicator dans votre environnement de bureau s'il masque les icônes.
4. Redémarrez complètement RcloneView et vérifiez que vos montages apparaissent dans le menu de la zone de notification.

Avec une zone de notification fonctionnelle, vos lecteurs cloud et vos tâches de synchronisation restent à un clic sans encombrer votre écran.

---

**Guides associés :**

- [Zone de notification et synchronisation en arrière-plan dans RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Installer RcloneView sur Ubuntu et Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Corriger les erreurs FUSE de montage Rclone avec RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
