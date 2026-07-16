---
slug: fix-google-drive-403-rate-limit-errors-rcloneview
title: "Corriger les erreurs 403 et les limites de débit de Google Drive : un guide pratique avec RcloneView"
authors:
  - tayson
description: "Vous recevez des erreurs 403 Forbidden ou des limites de débit sur Google Drive ? Découvrez pourquoi cela se produit et comment configurer les paramètres de transfert de RcloneView pour les éviter durablement."
keywords:
  - google drive 403 error
  - google drive rate limit
  - google drive api limit
  - fix google drive sync error
  - google drive forbidden error
  - rclone google drive 403
  - google drive transfer limit
  - google drive api quota exceeded
  - google drive too many requests
  - fix rclone google drive error
tags:
  - google-drive
  - troubleshooting
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs 403 et les limites de débit de Google Drive : un guide pratique avec RcloneView

> « Erreur 403 : Rate Limit Exceeded. » Si vous avez déjà vu ce message en synchronisant Google Drive, vous n'êtes pas seul. Voici pourquoi cela arrive et comment le résoudre définitivement.

Google Drive impose des limites de débit API strictes qui peuvent interrompre les transferts volumineux, les tâches de synchronisation automatisées, et même la simple navigation dans les fichiers. Lorsque vous atteignez ces limites, vous obtenez des erreurs 403 Forbidden qui interrompent vos transferts et forcent des tentatives répétées. RcloneView vous donne les outils pour configurer intelligemment vos paramètres de transfert afin de rester dans les limites imposées par Google tout en déplaçant vos données aussi rapidement que possible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Google Drive renvoie des erreurs 403

Google Drive impose plusieurs types de limites :

- **Limite de débit par utilisateur** — Trop de requêtes API par seconde depuis un même compte.
- **Quota par projet** — Trop de requêtes provenant du même OAuth client ID.
- **Limite d'upload quotidienne** — ~750 Go par jour et par compte pour les envois.
- **Limite de téléchargement quotidienne** — ~10 To par jour (variable).
- **Limites d'opérations sur les fichiers** — Créer, renommer ou supprimer trop de fichiers trop rapidement.

Lorsque l'une de ces limites est dépassée, Google renvoie une erreur `403 rateLimitExceeded` ou `403 userRateLimitExceeded`.

## Causes courantes

1. **Trop de transferts parallèles** — Exécuter 8 envois/téléchargements simultanés ou plus sature l'API.
2. **Listes de répertoires volumineuses** — Parcourir des dossiers contenant des milliers de fichiers génère de nombreux appels API.
3. **Opérations fréquentes sur des petits fichiers** — Synchroniser des milliers de fichiers minuscules génère plus d'appels API que quelques gros fichiers.
4. **Plusieurs outils accédant au même compte** — Client de synchronisation de bureau + RcloneView + une autre application = pression combinée sur le débit.

## Comment corriger cela dans RcloneView

### 1) Réduire les transferts parallèles

La correction la plus efficace. Dans les paramètres de votre tâche :

- **Recommandé** : 3 à 4 transferts parallèles pour Google Drive
- **Minimum sûr** : 2 pour des limites de débit très strictes
- **Par défaut (8)** : Trop agressif pour la plupart des comptes Google

### 2) Activer le Pacer / la limitation de débit

RcloneView (via rclone) dispose d'un pacer intégré qui ralentit automatiquement les requêtes lorsque les limites de débit sont atteintes. Assurez-vous qu'il fonctionne en conservant les paramètres de nouvelle tentative par défaut :

- **Nouvelles tentatives de bas niveau** : 10 (par défaut)
- **Délai de nouvelle tentative** : Backoff exponentiel

### 3) Utiliser votre propre Google API Client ID

Le Client ID OAuth par défaut de rclone est partagé par des milliers d'utilisateurs, ce qui signifie que vous êtes en concurrence pour le même quota. Créer votre propre projet Google Cloud et votre propre Client ID vous donne un quota dédié :

1. Rendez-vous sur [Google Cloud Console](https://console.cloud.google.com).
2. Créez un projet et activez l'API Google Drive.
3. Créez des identifiants OAuth.
4. Saisissez votre Client ID et votre Secret lors de l'ajout du remote Google Drive dans RcloneView.

Ce seul changement élimine souvent complètement les erreurs 403.

### 4) Utiliser --fast-list avec précaution

`--fast-list` réduit le nombre d'appels API pour le listage des répertoires mais utilise plus de mémoire. Pour les grands Google Drive, cela peut réellement aider à éviter les limites de débit en consolidant les opérations de listage.

### 5) Planifier les transferts volumineux en dehors des heures de pointe

Les limites de débit de Google se réinitialisent avec le temps. Planifier les transferts volumineux pendant les heures creuses réduit le risque d'atteindre ces limites :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Google Drive transfers off-peak" class="img-large img-center" />

## Paramètres recommandés pour Google Drive

| Paramètre | Valeur recommandée | Pourquoi |
|---------|-------------------|-----|
| Transferts parallèles | 3–4 | Reste dans les limites de débit de l'API |
| Checkers | 4–8 | Réduit les appels API de listage |
| Taille des chunks | 8–32 Mo | Équilibre entre vitesse et appels API |
| Délai minimum du pacer Drive | 100ms | Délai minimum entre les appels API |
| Nouvelles tentatives de bas niveau | 10 | Suffisamment de tentatives pour les limites de débit temporaires |

## Surveiller et ajuster

Utilisez l'[historique des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) pour suivre les taux d'erreur sur plusieurs exécutions :

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Track Google Drive error rates" class="img-large img-center" />

Si les erreurs persistent, réduisez les transferts parallèles de 1 et réessayez. Si les erreurs disparaissent, vous pouvez les augmenter prudemment.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive transfer with rate limit awareness" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Google Drive** avec votre propre Client ID OAuth si possible.
3. **Configurez des paramètres de transfert prudents** (3 à 4 transferts parallèles).
4. **Exécutez et surveillez** — ajustez en fonction des taux d'erreur.
5. **Planifiez les transferts volumineux** pendant les heures creuses.

Les erreurs 403 ne signifient pas que Google Drive est défaillant. Elles signifient que vous avez besoin de paramètres de transfert plus intelligents. RcloneView vous donne les contrôles nécessaires pour trouver le bon équilibre.

---

**Guides connexes :**

- [Corriger les erreurs d'API de quota et de limite de débit Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Ajouter Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
