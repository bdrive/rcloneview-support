---
slug: recover-interrupted-failed-transfers-rcloneview
title: "Comment récupérer des transferts cloud interrompus ou échoués avec RcloneView"
authors:
  - tayson
description: "Reprenez les transferts cloud interrompus, récupérez les téléversements partiels et corrigez les tâches de synchronisation échouées dans RcloneView. Techniques pratiques pour les transferts de fichiers volumineux qui ne se terminent pas."
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - tips
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment récupérer des transferts cloud interrompus ou échoués avec RcloneView

> Les coupures réseau, les délais d'expiration d'API, les mises en veille d'ordinateur portable et les coupures de courant interrompent les transferts cloud. RcloneView et rclone disposent de mécanismes intégrés pour reprendre en toute sécurité sans tout retéléverser depuis le début.

Transférer des téraoctets vers le cloud n'est pas une opération de cinq minutes. Lors des tâches de longue durée, les interruptions de connectivité sont presque inévitables. La bonne nouvelle, c'est que le moteur de transfert intelligent de rclone — que RcloneView utilise en interne — est conçu exactement pour ce scénario. Les opérations de copie et de synchronisation sont intrinsèquement idempotentes : les relancer ignore les fichiers déjà transférés et reprend là où les choses se sont arrêtées.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment rclone gère les transferts interrompus

Rclone compare la source et la destination avant de transférer chaque fichier. Lorsque vous relancez une tâche de copie ou de synchronisation après une interruption :

- **Les fichiers déjà transférés** sont ignorés (selon la taille et la date de modification, ou la somme de contrôle si celle-ci est activée).
- **Les fichiers partiellement transférés** sont nettoyés et retransférés depuis le début.
- **Les fichiers non encore commencés** sont mis en file d'attente et transférés lors de la reprise.

Cela signifie qu'il n'y a pas de bouton « reprendre » spécial dans la plupart des cas — il suffit de relancer la même tâche.

## Étape 1 — Relancer la même tâche

Après une interruption, ouvrez **Jobs** dans RcloneView et cliquez sur **Run** sur la même tâche :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Relancer une tâche de transfert échouée dans RcloneView" class="img-large img-center" />

RcloneView va :
1. Lister la source et la destination.
2. Comparer les fichiers déjà présents dans la destination.
3. Ignorer les fichiers transférés avec succès.
4. Transférer uniquement les fichiers manquants ou modifiés.

Pour une tâche de 10 000 fichiers dont 8 000 ont réussi, relancer la tâche prend une fraction du temps initial.

## Étape 2 — Vérifier l'historique des tâches pour les fichiers échoués

Avant de relancer, consultez l'**historique des tâches** (Job History) dans RcloneView pour comprendre ce qui a échoué :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Examiner les fichiers échoués dans l'historique des tâches RcloneView" class="img-large img-center" />

Le journal affiche :
- Quels fichiers spécifiques ont échoué
- Le message d'erreur pour chaque échec
- Si les échecs étaient temporaires (erreur réseau) ou persistants (permissions, chemin trop long)

Les erreurs persistantes nécessitent une correction avant de relancer — les erreurs temporaires se résoudront lors d'une nouvelle tentative.

## Étape 3 — Gérer les fichiers volumineux partiellement téléversés

Pour les fichiers très volumineux (plusieurs Go), une interruption en cours de téléversement laisse un fichier partiel à la destination. Le comportement de rclone dépend du fournisseur :

| Fournisseur | Comportement du fichier partiel |
|----------|-----------------------|
| Amazon S3 / compatible S3 | Téléversements multipart : les parties incomplètes sont orphelines, rclone recommence depuis le début |
| Google Drive | Téléversements reprenables : rclone peut reprendre en cours de fichier si la session est toujours valide |
| OneDrive | Téléversements reprenables : similaire à Google Drive |
| Backblaze B2 | Parties de fichiers volumineux : les téléversements incomplets sont visibles dans la console B2 |

**Pour les téléversements multipart S3 orphelins :** ceux-ci s'accumulent et coûtent de l'argent. Nettoyez-les en utilisant :
- Le terminal RcloneView : `rclone cleanup s3-remote:bucket-name`
- Ou via la console AWS sous S3 → Your Bucket → Multipart uploads

## Étape 4 — Utiliser `--retries` et `--low-level-retries`

Pour les tâches qui échouent en raison d'erreurs temporaires, configurez la tâche RcloneView pour qu'elle réessaie automatiquement :

Ajoutez ceci au champ **Custom flags** :
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — réessaie l'intégralité de la tâche jusqu'à 5 fois en cas d'erreurs
- `--retries-sleep 10s` — attend 10 secondes entre les tentatives
- `--low-level-retries 20` — réessaie les opérations de bas niveau individuelles (appels API) jusqu'à 20 fois

## Étape 5 — Gérer les incohérences de somme de contrôle

Après un transfert interrompu, le relancer avec vérification par somme de contrôle garantit l'intégrité des données :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vérifier l'intégrité du transfert avec la comparaison de dossiers" class="img-large img-center" />

Dans RcloneView, activez la **vérification par somme de contrôle** (Checksum verification) dans les paramètres de la tâche. Cela force rclone à comparer le contenu des fichiers (pas seulement la taille/date de modification) — plus lent, mais garantit que les fichiers partiellement écrits sont détectés et retransférés.

## Étape 6 — Récupérer après une synchronisation ayant supprimé des fichiers

Si une tâche de synchronisation s'est exécutée dans le mauvais sens — copiant la destination sur la source au lieu de l'inverse — vous devez récupérer via le versionnement du fournisseur cloud :

- **Google Drive** : restaurez depuis la corbeille ou l'historique des versions (disponible pendant 30 à 180 jours).
- **OneDrive** : restaurez depuis la corbeille ou l'historique des versions.
- **S3 avec versionnement** : restaurez une version précédente depuis la console S3.
- **Backblaze B2** : restaurez depuis l'historique des versions si celui-ci est activé.

C'est pourquoi il est fortement recommandé d'utiliser le mode **Copy** (non destructif) pour les transferts initiaux volumineux plutôt que la synchronisation.

## Prévention : configurer les transferts pour la résilience

Intégrez la résilience à vos tâches de transfert dès le départ :

| Paramètre | Recommandation |
|---------|----------------|
| Mode de tâche | Utilisez **Copy** pour les migrations initiales ; Sync pour la maintenance continue |
| Tentatives | Définissez `--retries 5 --retries-sleep 10s` |
| Somme de contrôle | Activez-la pour les données critiques |
| Transferts | Réduisez le nombre simultané pour les connexions instables |
| Planification | Exécutez pendant des fenêtres réseau stables (la nuit, hors VPN) |
| Bande passante | Définissez des limites pour éviter les délais d'expiration causés par la saturation du réseau |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Consultez l'historique des tâches** pour identifier ce qui a échoué et pourquoi.
3. **Relancez la tâche** — rclone ignore automatiquement les fichiers déjà terminés.
4. **Configurez les tentatives et la vérification par somme de contrôle** pour une résilience future.

La plupart des transferts interrompus ne nécessitent rien de plus qu'un nouveau clic sur Run. Rclone se charge du reste.

---

**Guides connexes :**

- [Éviter la perte de données due à un mauvais sens de synchronisation](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Accélérer les transferts cloud volumineux](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
