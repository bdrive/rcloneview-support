---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation de Mail.ru Cloud — Guide de dépannage avec RcloneView"
authors:
  - casey
description: "Résolvez les échecs de synchronisation courants de Mail.ru Cloud dans RcloneView : erreurs d'authentification, délais d'attente, fichiers ignorés et écarts, avec des solutions pratiques."
keywords:
  - corriger les erreurs de synchronisation mail.ru cloud
  - mailru cloud synchronisation échouée
  - mail.ru cloud rcloneview
  - erreur d'authentification mailru
  - délai d'attente mailru
  - dépannage mail.ru cloud
  - erreurs de synchronisation cloud
  - dépannage rcloneview
  - erreurs de sauvegarde mailru
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation de Mail.ru Cloud — Guide de dépannage avec RcloneView

> La plupart des échecs de synchronisation de Mail.ru Cloud dans RcloneView tiennent aux identifiants, à la concurrence ou à un filtre — chacun se corrige en quelques clics.

Lorsqu'un job Mail.ru Cloud se bloque ou signale des erreurs, la cause est rarement mystérieuse. RcloneView enregistre chaque exécution dans Job History et dans l'onglet Log, ce qui vous permet de rapprocher le message d'une cause connue. Ce guide couvre les problèmes les plus fréquents et les réglages qui les résolvent.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Échecs d'authentification et de connexion

Si un job qui fonctionnait la semaine dernière échoue maintenant immédiatement, les identifiants enregistrés sont le premier suspect. Ouvrez Remote Manager, sélectionnez le remote (distant) Mail.ru Cloud et modifiez-le pour ressaisir les informations du compte ; si le compte a une sécurité supplémentaire activée, vérifiez que les identifiants saisis sont ceux que le service accepte pour un accès tiers. Après l'enregistrement, parcourez le remote dans un panneau Explorer. Si la liste des dossiers se charge, la connexion est saine et le problème vient du job lui-même.

<img src="/support/images/en/blog/new-remote.png" alt="Recréation d'un remote Mail.ru Cloud dans RcloneView" class="img-large img-center" />

## Délais d'attente et transferts bloqués

Des transferts lents ou interrompus signifient généralement trop de concurrence pour la connexion. Dans les Advanced Settings du job, diminuez Number of file transfers et réglez Number of equality checkers sur 4 ou moins, car les backends plus lents gèrent mieux un nombre réduit de vérifications parallèles. Augmentez "Retry entire sync if fails" au-delà de sa valeur par défaut de 3 pour les jobs longs afin que les coupures réseau passagères se rétablissent automatiquement. Surveillez l'onglet Transferring pour confirmer que la vitesse se stabilise.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Surveillance d'un transfert Mail.ru Cloud dans l'onglet Transferring" class="img-large img-center" />

## Fichiers manquants ou non concordants

Si les fichiers paraissent différents après une synchronisation terminée, lancez Compare entre la source et le remote Mail.ru Cloud. Affichez les fichiers left-only pour trouver ce qui n'est jamais arrivé, puis copiez-les directement depuis la vue de comparaison. Pour les différences de contenu, activez l'option de somme de contrôle à l'étape 2 de l'assistant Sync afin que les fichiers soient comparés par hachage et par taille plutôt que par horodatage seul.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison de dossiers pour trouver les fichiers manquants sur Mail.ru Cloud" class="img-large img-center" />

## Filtres, Dry Run et Job History

Un job peut aussi ignorer des fichiers par conception. Passez en revue à l'étape 3 les Filtering Settings : taille maximale de fichier, ancienneté maximale ou règles d'exclusion personnalisées que vous auriez oubliées. Lancez ensuite un Dry Run pour voir exactement quels fichiers seraient copiés ou supprimés avant de toucher aux données réelles. Ouvrez ensuite Job History pour comparer l'état, la taille et le nombre de fichiers avec les exécutions réussies précédentes. RcloneView peut monter et synchroniser plus de 90 fournisseurs depuis une seule fenêtre ; vous pouvez donc aussi monter le remote Mail.ru Cloud pour en inspecter le contenu comme un lecteur local.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Consultation de l'historique des jobs Mail.ru Cloud dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** sur [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Job History et lisez l'entrée de l'onglet Log du job Mail.ru Cloud en échec.
3. Appliquez la solution correspondante ci-dessus : identifiants, concurrence, somme de contrôle ou filtres.
4. Lancez un Dry Run, puis relancez le job et confirmez avec Compare.

Des vérifications méthodiques valent mieux que des hypothèses — corrigez la cause une fois et vos jobs Mail.ru Cloud s'exécuteront de nouveau proprement.

---

**Guides associés :**

- [Gérer Mail.ru Cloud — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Migrer Mail.ru Cloud vers Backblaze B2 — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [Corriger les erreurs de limitation de débit des API cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
