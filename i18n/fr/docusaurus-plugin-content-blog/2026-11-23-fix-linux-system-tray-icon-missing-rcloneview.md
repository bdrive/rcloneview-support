---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Corriger l'icône de la zone de notification absente sous Linux — Retrouver le contrôle en arrière-plan dans RcloneView"
authors:
  - steve
description: "L'icône de RcloneView n'apparaît pas dans la zone de notification sous Linux ? Installez la bibliothèque AppIndicator, activez la prise en charge dans votre bureau et retrouvez vos montages et tâches en arrière-plan."
keywords:
  - rcloneview icône zone de notification absente linux
  - linux icône barre système ne s'affiche pas
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator zone de notification
  - rcloneview linux dépannage
  - menu montage cloud zone de notification linux
  - synchronisation en arrière-plan linux gui
  - rcloneview ubuntu zone de notification
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger l'icône de la zone de notification absente sous Linux — Retrouver le contrôle en arrière-plan dans RcloneView

> Sans icône dans la zone de notification, pas de bascule rapide des montages ni de retour facile vers l'application réduite. Voici comment la faire revenir.

Sous Windows et macOS, l'icône de RcloneView apparaît tout simplement. Sous Linux, elle dépend de deux éléments que l'application ne contrôle pas : une bibliothèque AppIndicator sur le système et un environnement de bureau qui affiche les icônes d'indicateur. Si l'un des deux manque, RcloneView fonctionne toujours, mais l'icône qui liste les lecteurs montés, bascule les montages et rouvre la fenêtre n'apparaît jamais.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi l'icône disparaît

RcloneView est une application de bureau Flutter. Sous Linux, elle nécessite une session X11 ou Wayland active, GTK+ 3.0 et **libayatana-appindicator3-1** ou **libappindicator3-1** pour la zone de notification. Les paquets `.deb` et `.rpm` sont compilés et testés sur Ubuntu 22.04 LTS ; une installation minimale, une autre distribution ou un AppImage lancé sur un système allégé peut donc ne pas disposer de la bibliothèque d'indicateurs.

La deuxième cause est le bureau. Certains environnements, en particulier GNOME standard, n'affichent pas les icônes AppIndicator tant qu'une extension d'indicateurs n'est pas activée. La bibliothèque peut être installée et l'icône rester malgré tout masquée.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager de RcloneView comme solution de repli lorsque l'icône est absente sous Linux" class="img-large img-center" />

## Étape 1 : installer la bibliothèque AppIndicator

Sous Debian, Ubuntu et leurs dérivées, installez `libayatana-appindicator3-1` depuis les dépôts de votre distribution (ou `libappindicator3-1` sur les versions plus anciennes). Sous Fedora et les systèmes basés sur RHEL, installez le paquet GTK3 ayatana ou libappindicator équivalent fourni par votre version. Vérifiez aussi que GTK+ 3 est présent.

Quittez complètement RcloneView puis relancez-le. La zone de notification est configurée au démarrage de l'application : une bibliothèque installée pendant que l'application était ouverte ne prendra effet qu'après un redémarrage.

## Étape 2 : activer la prise en charge des indicateurs dans votre bureau

Sous GNOME, activez une extension AppIndicator/KStatusNotifierItem via le gestionnaire d'extensions de votre distribution ; Ubuntu en fournit une activée par défaut. KDE Plasma, Xfce, Cinnamon et MATE affichent les icônes d'indicateur via leur propre widget de panneau ou de zone de notification. Assurez-vous que ce widget est présent sur le panneau et n'a pas été masqué.

Si vous utilisez un gestionnaire de fenêtres en mosaïque, ajoutez une barre compatible StatusNotifierItem, sinon l'icône n'a nulle part où apparaître.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Monter un distant cloud depuis l'Explorer de RcloneView sous Linux" class="img-large img-center" />

## Étape 3 : vérifier les réglages de démarrage réduit et de fermeture

Sans icône, **Start minimized** (démarrer réduit) peut donner l'impression que RcloneView ne s'est jamais lancé, car il démarre directement dans une zone de notification invisible. Tant que l'icône ne fonctionne pas, ouvrez **Settings > General**, désactivez Start minimized et activez **Quit on close** (quitter à la fermeture) pour que la fermeture de la fenêtre ne laisse pas de processus caché en cours d'exécution.

Vous n'avez pas besoin de la zone de notification pour l'essentiel. **Mount Manager** monte et démonte les lecteurs, **Job Manager** exécute les tâches enregistrées et **Job History** indique ce qui a été exécuté et si cela s'est terminé.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de RcloneView confirmant les tâches en arrière-plan sous Linux" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) au format `.deb`, `.rpm` ou `.AppImage` pour x86_64 ou ARM64.
2. Installez `libayatana-appindicator3-1` (ou `libappindicator3-1`) et vérifiez que GTK+ 3 est présent.
3. Activez la prise en charge AppIndicator dans votre environnement de bureau, puis redémarrez complètement RcloneView.
4. Réactivez **Start minimized** une fois que l'icône apparaît et que vous accédez à vos montages depuis la zone de notification.

Contrairement aux outils limités au montage, RcloneView propose aussi la synchronisation et la comparaison de dossiers avec la FREE License, et une fois l'icône revenue, tout est à portée de clic.

---

**Guides associés :**

- [Zone de notification et synchronisation en arrière-plan — Garder les tâches cloud actives dans RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Comment installer RcloneView sur Ubuntu et Debian Linux — Guide de configuration complet](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Corriger les erreurs de montage rclone et FUSE dans RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
