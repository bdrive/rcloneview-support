---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "Corriger les dossiers Bureau et Documents vides sous macOS — Correction des autorisations avec RcloneView"
authors:
  - robin
description: "Corrigez le problème où RcloneView affiche des dossiers Bureau, Documents ou Téléchargements vides sous macOS. Accordez les bonnes autorisations de confidentialité et restaurez l'accès complet aux fichiers."
keywords:
  - correction dossiers vides macOS
  - autorisations RcloneView macOS
  - dossier Bureau vide macOS
  - dossier Documents vide macOS
  - Accès complet au disque macOS
  - Confidentialité et sécurité Fichiers et dossiers
  - autorisations de synchronisation cloud macOS
  - dépannage RcloneView
  - accès aux fichiers refusé macOS
  - corriger RcloneView macOS
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les dossiers Bureau et Documents vides sous macOS — Correction des autorisations avec RcloneView

> Si RcloneView affiche le dossier Bureau, Documents ou Téléchargements de votre Mac comme vide, c'est presque toujours à cause d'une autorisation de confidentialité macOS qui n'a pas encore été accordée — pas d'un problème de synchronisation.

Depuis Catalina, macOS verrouille les dossiers Bureau, Documents et Téléchargements derrière les autorisations Confidentialité et sécurité, et toute application qui souhaite les lire — y compris RcloneView lorsqu'il parcourt des dossiers locaux comme source de synchronisation — doit être explicitement approuvée. Les utilisateurs configurant leur première tâche de sauvegarde locale vers le cloud rencontrent souvent ce problème : l'arborescence des dossiers se charge, mais la liste des fichiers reste vide même si les fichiers sont clairement présents sur le disque. RcloneView se connecte et synchronise plus de 90 fournisseurs cloud, mais ce problème particulier réside entièrement du côté macOS, et c'est une correction de deux minutes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les dossiers semblent vides

macOS traite Bureau, Documents et Téléchargements comme des emplacements protégés. Une application reçoit une demande d'autorisation la première fois qu'elle tente de lire l'un d'eux, et si cette demande est ignorée ou refusée — ce qui peut facilement arriver par accident lors de la configuration initiale — l'application reçoit silencieusement une liste vide au lieu d'une erreur. Le panneau Explorateur de RcloneView affichera le dossier lui-même, et même le nombre correct de fichiers dans certains cas, mais la liste de fichiers sous-jacente reste vide car le système d'exploitation retient le contenu au niveau du système de fichiers.

Ceci est distinct de tout problème lié à un remote cloud. Si votre remote Google Drive ou Dropbox semble également vide, il s'agit d'un problème différent — cette correction s'applique spécifiquement aux dossiers macOS locaux utilisés comme source ou destination de synchronisation.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## Accorder les bonnes autorisations

Ouvrez Réglages Système > Confidentialité et sécurité > Fichiers et dossiers, trouvez RcloneView dans la liste et activez individuellement les interrupteurs pour Dossier Bureau, Dossier Documents et Dossier Téléchargements. Si RcloneView n'apparaît pas encore dans la liste, déclenchez la demande d'autorisation en naviguant d'abord vers l'un de ces dossiers dans l'application — macOS ne liste que les applications ayant tenté un accès.

Pour les problèmes persistants, ou si vous synchronisez depuis des emplacements en dehors des trois dossiers protégés (disques externes, partages réseau), accorder l'Accès complet au disque dans le même panneau Confidentialité et sécurité est la solution la plus complète. Cela couvre Bureau, Documents, Téléchargements et tout autre emplacement que le système d'exploitation pourrait autrement restreindre.

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

RcloneView doit être entièrement redémarré — pas seulement la fenêtre fermée — après avoir modifié ces autorisations. macOS ne réévalue l'accès aux fichiers d'une application qu'au lancement, donc quitter complètement puis rouvrir l'application est nécessaire avant que le contenu des dossiers n'apparaisse correctement.

## Vérifier la correction et construire votre synchronisation

Après le redémarrage, naviguez à nouveau vers le dossier précédemment vide — le nombre de fichiers et de dossiers devrait maintenant s'afficher normalement dans le résumé du pied de page. Avant d'exécuter une véritable tâche de synchronisation, utilisez Comparer les dossiers (Folder Compare) par rapport à votre destination cloud prévue pour confirmer que RcloneView peut désormais voir tout ce qu'il devrait voir du côté local, détectant ainsi les éventuelles lacunes d'accès restantes avant qu'elles ne deviennent une sauvegarde incomplète.

Une fois les autorisations confirmées comme fonctionnelles, construisez votre tâche de synchronisation comme d'habitude : dossier local comme source, remote cloud comme destination, avec le Mode simulation (Dry Run) activé d'abord pour prévisualiser exactement ce qui sera transféré.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Réglages Système > Confidentialité et sécurité > Fichiers et dossiers.
3. Activez l'accès à Bureau, Documents et Téléchargements pour RcloneView, ou accordez l'Accès complet au disque.
4. Quittez complètement puis relancez RcloneView, puis vérifiez que le contenu des dossiers se charge correctement.

Ce modèle d'autorisations existe pour protéger les données des utilisateurs sous macOS, et une fois accordé, RcloneView conserve un accès complet et ininterrompu à vos fichiers locaux pour chaque tâche de synchronisation future.

---

**Guides connexes :**

- [Corriger l'erreur macOS « Trop de fichiers ouverts » avec RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView sous macOS Sequoia — Synchronisation du stockage cloud](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Corriger les fichiers manquants après transfert lors de la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
