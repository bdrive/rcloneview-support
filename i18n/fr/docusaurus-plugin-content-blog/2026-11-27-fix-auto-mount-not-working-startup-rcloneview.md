---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "Corriger le montage automatique qui ne fonctionne pas au démarrage — Restaurer vos lecteurs cloud avec RcloneView"
authors:
  - steve
description: "Lecteur cloud absent après un redémarrage ? Corrigez le montage automatique de RcloneView au démarrage : licence, Launch at login, lettres de lecteur, FUSE sous Linux et autorisations macOS."
keywords:
  - montage automatique ne fonctionne pas
  - lecteur cloud non monté au démarrage
  - rcloneview montage automatique
  - monter le stockage cloud au démarrage
  - lecteur monté disparu après redémarrage
  - corriger rclone mount au démarrage
  - lancer le lecteur cloud à la connexion
  - erreur de montage fuse linux
  - conflit de lettre de lecteur montage
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger le montage automatique qui ne fonctionne pas au démarrage — Restaurer vos lecteurs cloud avec RcloneView

> Si votre lecteur cloud disparaît à chaque redémarrage, une courte liste de vérification suffit généralement à le rétablir durablement.

Vous avez configuré un montage pour Google Drive ou un bucket S3, il a fonctionné comme prévu, puis après un redémarrage la lettre de lecteur ou le dossier de montage a disparu. Le montage automatique dépend de plusieurs réglages qui doivent fonctionner ensemble : l'application doit démarrer, le montage doit être marqué pour le montage automatique, et le système d'exploitation doit l'autoriser. Ce guide passe en revue chaque cause dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier la licence et le réglage de montage automatique

**Auto Mount on Startup** est une fonctionnalité de la licence PLUS. Avec la licence FREE, le montage et le démontage fonctionnent entièrement, mais chaque montage doit être lancé manuellement après le démarrage. Le pied de la fenêtre principale indique quelle licence est active.

Avec PLUS actif, ouvrez **Mount Manager** depuis l'onglet Remote et vérifiez que **Auto mount** est activé pour le montage. N'oubliez pas qu'Edit est désactivé tant qu'un montage est actif : démontez-le d'abord, modifiez les réglages, puis choisissez **Save and mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Activer le montage automatique dans le Mount Manager de RcloneView" class="img-large img-center" />

## S'assurer que RcloneView démarre réellement

Le montage automatique s'exécute au lancement de RcloneView, l'application elle-même doit donc démarrer à la connexion. Dans **Settings > General**, activez **Launch at login**. Activez **Start minimized** si vous préférez que l'application s'ouvre directement dans la zone de notification. Le menu de la zone de notification liste alors vos lecteurs montés et vous permet de basculer chacun d'eux.

Vérifiez aussi **Quit on close**. S'il est activé, fermer la fenêtre quitte l'application et démonte vos lecteurs. Désactivez-le pour que RcloneView, et ses montages, continuent de tourner en arrière-plan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Monter un dossier cloud depuis l'explorateur de RcloneView" class="img-large img-center" />

## Résoudre les blocages propres à chaque plateforme

**Windows :** si le montage utilise une lettre de lecteur fixe déjà prise par une clé USB ou un partage réseau, le montage ne peut pas s'attacher. Réglez **Target** sur Auto ou choisissez une lettre que rien d'autre n'utilise.

**Linux :** le montage nécessite FUSE (fuse3 recommandé). Les montages utilisent nfsmount par défaut, et l'application a besoin de GTK+3 et d'une session de bureau X11 ou Wayland en cours d'exécution. RcloneView est une application graphique et ne peut pas lancer de montages en tant que service systemd sans interface (headless).

**macOS :** si le point de montage se trouve dans Desktop, Documents ou Downloads, accordez l'accès à RcloneView dans **Privacy & Security > Files & Folders** ou **Full Disk Access**, puis redémarrez l'application.

## Lire les journaux quand rien d'autre ne fonctionne

Des jetons OAuth expirés et des délais réseau au démarrage peuvent aussi empêcher un montage. Activez **rclone logging** dans Settings > Embedded Rclone, réglez le niveau de journalisation sur DEBUG, redémarrez le rclone intégré, puis redémarrez l'ordinateur. Le journal indique l'erreur exacte. Une erreur d'authentification signifie que vous devez modifier le distant et le reconnecter ; une erreur réseau disparaît généralement dès que vous montez à nouveau depuis la zone de notification.

<img src="/support/images/en/blog/new-remote.png" alt="Reconnecter un distant cloud dans RcloneView après une erreur d'authentification" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez que vous disposez d'une licence PLUS et activez **Auto mount** pour chaque montage dans Mount Manager.
3. Activez **Launch at login** et désactivez **Quit on close** dans Settings > General.
4. Résolvez les problèmes de lettre de lecteur, de FUSE ou d'autorisations macOS, puis redémarrez pour tester.

Une fois la liste de vérification validée, vos lecteurs cloud sont prêts chaque fois que vous vous mettez au travail.

---

**Guides associés :**

- [Monter automatiquement le stockage cloud au démarrage avec RcloneView](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Corriger les conflits de lettre de lecteur lors du montage sous Windows avec RcloneView](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [Corriger les erreurs FUSE de rclone mount avec RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
