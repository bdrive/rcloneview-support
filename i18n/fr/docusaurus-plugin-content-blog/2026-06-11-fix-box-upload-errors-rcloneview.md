---
slug: fix-box-upload-errors-rcloneview
title: "Corriger les erreurs de téléversement Box — Comment résoudre les problèmes de transfert avec RcloneView"
authors:
  - alex
description: "Diagnostiquez et corrigez les erreurs de téléversement Box avec RcloneView — apprenez à ajuster les paramètres de transfert, consulter les journaux et synchroniser vos fichiers Box de manière fiable."
keywords:
  - corriger les erreurs de téléversement Box
  - erreurs de synchronisation Box RcloneView
  - échec de transfert Box rclone
  - limite de taux API Box RcloneView
  - dépanner la synchronisation cloud Box
  - erreur d'authentification Box rclone
  - problèmes de téléversement de fichiers Box
  - guide de dépannage RcloneView
  - résoudre les erreurs cloud Box
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de téléversement Box — Comment résoudre les problèmes de transfert avec RcloneView

> Une simple erreur d'API Box peut bloquer silencieusement une tâche de synchronisation — voici comment en diagnostiquer la cause exacte et la corriger dans RcloneView.

Box est une plateforme cloud d'entreprise très utilisée, mais son API impose des limites de taux, des fenêtres d'expiration de jetons et des règles de chemins de fichiers qui peuvent faire échouer les téléversements en cours de transfert. Lorsqu'une tâche de synchronisation s'arrête sans message clair, la plupart des utilisateurs relancent l'intégralité de la tâche en espérant que cela fonctionne. RcloneView vous fournit une sortie de journal structurée, un comportement de nouvelle tentative configurable et des contrôles d'authentification par distant — les bons outils pour identifier le vrai problème et éviter qu'il ne se reproduise.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causes courantes des erreurs de téléversement Box

Les échecs de téléversement Box se répartissent généralement en quelques catégories. **La limitation du taux d'API** est la cause la plus fréquente : lorsque RcloneView envoie trop de requêtes simultanées, Box renvoie des erreurs HTTP 429 et limite la connexion. Exécuter plus que le nombre par défaut de transferts parallèles vers Box peut déclencher ce problème, en particulier avec un compte Box for Business soumis à des quotas d'API plus stricts.

**Les jetons OAuth expirés** constituent la deuxième cause principale. Les jetons d'accès Box expirent après une période fixe. Si une tâche de longue durée est en cours lorsque le jeton expire, les téléversements commencent à échouer avec des erreurs d'authentification. RcloneView stocke vos identifiants Box de manière sécurisée et renouvelle les jetons d'accès à leur expiration, mais si le jeton de renouvellement lui-même a expiré — généralement après une inactivité prolongée — vous devez ré-authentifier le distant.

**Les problèmes de chemins de fichiers et de nommage** provoquent également des erreurs. Box impose des restrictions sur certains caractères spéciaux et sur la longueur des chemins de fichiers. Les fichiers contenant des caractères que Box n'accepte pas échoueront silencieusement, sauf si la journalisation est activée.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView showing a Box sync transfer job in progress" class="img-large img-center" />

## Consulter les journaux pour identifier l'erreur exacte

Avant de modifier un quelconque paramètre, activez la journalisation de débogage pour capturer le contexte complet de l'erreur. Dans RcloneView, allez dans **Settings > Embedded Rclone** et cochez **Enable rclone Logging**, puis réglez le niveau de journalisation sur **DEBUG**. Cliquez sur **Restart Embedded Rclone**, puis reproduisez l'échec du téléversement. Ouvrez le fichier journal depuis le dossier de journaux configuré — le code d'erreur et la réponse HTTP de Box y seront clairement enregistrés.

Vous pouvez aussi consulter l'onglet **Log** en bas de l'interface RcloneView pour voir les entrées d'erreur horodatées de la session en cours. L'onglet **Job History** (accessible via le Job Manager) enregistre le statut, la durée et la vitesse de transfert de chaque tâche passée. Une tâche terminée avec un statut « Errored » contient le nombre et la taille des fichiers nécessaires pour cerner le problème.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history in RcloneView showing Box sync error details" class="img-large img-center" />

## Ajuster les paramètres de transfert aux limites de Box

Une fois le type d'erreur identifié, ouvrez la tâche concernée dans **Job Manager** et cliquez sur **Edit**. À l'étape 2 (Advanced Settings), réduisez le **Number of file transfers** pour diminuer le nombre de requêtes simultanées — commencer avec 2 ou 3 est une base sûre pour Box. Réduisez également le **Number of equality checkers** à 4 ou moins, car Box peut aussi rencontrer des difficultés avec un fort parallélisme côté métadonnées.

Augmentez le compteur **Retry entire sync if fails** de la valeur par défaut de 3 à 5 ou plus pour les conditions réseau instables. La logique de nouvelle tentative de RcloneView ignore les fichiers déjà transférés lors des passages suivants, donc relancer ne duplique pas le travail — elle reprend exactement là où la tentative précédente s'est arrêtée. Activez la vérification par **checksum** si l'intégrité des données est critique, bien que cela augmente le volume de requêtes ; combinez donc cette option avec des paramètres de concurrence réduits.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring advanced transfer settings for Box in RcloneView" class="img-large img-center" />

## Ré-authentifier Box lorsque les erreurs de jeton persistent

Si les journaux montrent des échecs d'authentification persistants même après avoir réduit la concurrence, le jeton OAuth de Box doit être renouvelé. Dans RcloneView, allez dans **Remote tab > Remote Manager**, sélectionnez votre distant Box, et cliquez sur **Edit**. Relancer le flux OAuth ouvre une fenêtre de navigateur vous permettant de vous reconnecter à Box, générant une nouvelle paire de jetons. Pour les comptes Box for Business, vérifiez que le paramètre `box_sub_type = enterprise` est toujours présent dans la configuration du distant avant d'enregistrer.

Après la ré-authentification, relancez la tâche. Utilisez l'option **Dry Run** (disponible dans Job Manager) pour prévisualiser les fichiers qui seront transférés sans effectuer de modifications réelles — cela vous permet de confirmer que la connexion fonctionne et que la liste des fichiers correspond à vos attentes avant de lancer un téléversement complet.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activez la journalisation **DEBUG** dans Settings > Embedded Rclone et reproduisez l'erreur de téléversement pour capturer le code d'erreur exact.
3. Modifiez la tâche défaillante dans Job Manager, réduisez les transferts simultanés à 2–3, et augmentez le nombre de tentatives.
4. Si les erreurs d'authentification persistent, ré-authentifiez le distant Box via Remote Manager et utilisez Dry Run pour confirmer la connectivité avant de lancer la tâche complète.

Avec les bons paramètres de concurrence et un jeton valide, les téléversements Box via RcloneView s'exécutent de manière fiable — même pour de vastes archives d'entreprise comprenant des dizaines de milliers de fichiers.

---

**Guides connexes :**

- [Gérer le stockage cloud Box — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de délai d'attente de synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [Corriger les erreurs de limitation de taux d'API cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
