---
slug: fix-premiumize-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation de premiumize.me — Problèmes d'autorisation et de transfert résolus avec RcloneView"
authors:
  - casey
description: "Dépannez les erreurs de synchronisation de premiumize.me (autorisation expirée, transferts échoués, fichiers manquants) grâce aux journaux, à l'historique des tâches et à Folder Compare de RcloneView."
keywords:
  - corriger les erreurs de synchronisation premiumize.me
  - erreur premiumize rclone
  - échec d'autorisation premiumize
  - échec de transfert premiumize
  - dépannage premiumize
  - RcloneView premiumize
  - dépannage de la synchronisation cloud
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation de premiumize.me — Problèmes d'autorisation et de transfert résolus avec RcloneView

> Lorsqu'une tâche premiumize.me échoue, l'historique des tâches, les journaux DEBUG et Folder Compare de RcloneView indiquent si la cause est la connexion, la charge de transfert ou des fichiers jamais arrivés.

Une tâche premiumize.me qui s'arrête prématurément, ou qui laisse un dossier à moitié copié, est difficile à diagnostiquer avec la seule ligne de commande. RcloneView réunit dans une seule fenêtre la vérification du remote, l'enregistrement de la tâche, le journal et une comparaison côte à côte, ce qui vous permet de corriger la vraie cause au lieu de relancer à l'aveugle. RcloneView permet de monter ET de synchroniser plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Réautoriser le remote

premiumize.me se connecte via OAuth dans le navigateur. Si les tâches échouent en quelques secondes, la connexion est le premier suspect. Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote premiumize.me et reconnectez-vous via l'invite du navigateur.

Ouvrez ensuite le remote dans un panneau Explorer et parcourez le dossier racine. S'il s'affiche normalement, la connexion est saine et l'échec vient du transfert lui-même.

<img src="/support/images/en/blog/new-remote.png" alt="Réautorisation d'un remote premiumize.me dans RcloneView" class="img-large img-center" />

## Lire l'historique des tâches et activer les journaux DEBUG

Ouvrez Job History et vérifiez l'état, la durée et le nombre de fichiers de l'exécution échouée. Une tâche qui se termine en erreur en cours de route pointe généralement vers des fichiers précis ou vers la charge, et non vers les identifiants.

Pour obtenir le message exact par fichier, allez dans Settings > Embedded Rclone, activez la journalisation de rclone, réglez le niveau sur DEBUG, puis cliquez sur Restart Embedded Rclone. Reproduisez l'échec, puis lisez l'onglet Log ou le fichier journal dans le dossier que vous avez configuré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches de RcloneView montrant une tâche premiumize.me en erreur" class="img-large img-center" />

## Réduire la charge et prévisualiser la nouvelle exécution

Les échecs intermittents s'atténuent souvent avec moins de transferts simultanés. À l'étape 2 de l'assistant de synchronisation, diminuez le nombre de transferts de fichiers et réglez les equality checkers sur 4 ou moins. Conservez « Retry entire sync if fails » à 3 afin que les erreurs transitoires soient retentées.

Avant de relancer, utilisez Dry Run pour voir quels fichiers seraient copiés ou supprimés, afin que la nouvelle tentative ne réserve aucune surprise.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nouvelle exécution d'une tâche premiumize.me avec une concurrence réduite" class="img-large img-center" />

## Confirmer avec Folder Compare

Après la nouvelle exécution, ouvrez Compare avec un dossier local d'un côté et premiumize.me de l'autre. Filtrez les fichiers présents uniquement à gauche, uniquement à droite et différents, puis copiez seulement ce qui manque encore plutôt que de répéter toute la tâche.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare montrant les fichiers manquants sur premiumize.me" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Réautorisez le remote premiumize.me et vérifiez que le dossier racine s'affiche.
3. Consultez Job History et activez la journalisation DEBUG pour la tâche en échec.
4. Réduisez la concurrence, lancez un Dry Run, relancez et vérifiez avec Folder Compare.

Une fois la cause visible dans les journaux et la comparaison, un échec premiumize.me devient une correction courte et reproductible.

---

**Guides associés :**

- [Gérer le stockage cloud premiumize.me avec RcloneView](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [Synchroniser les téléchargements cloud premiumize.me avec RcloneView](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [Corriger les erreurs de synchronisation put.io avec RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
