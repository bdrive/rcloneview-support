---
slug: cloud-api-rate-limits-explained-rcloneview
title: "Limites de débit des API cloud expliquées — Pourquoi vos transferts échouent et comment y remédier"
authors:
  - tayson
description: "Erreurs 403 sur Google Drive ? Limitation OneDrive ? Découvrez ce que sont les limites de débit des API cloud, pourquoi elles interrompent vos transferts, et comment configurer RcloneView pour les éviter."
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Limites de débit des API cloud expliquées — Pourquoi vos transferts échouent et comment y remédier

> Votre synchronisation cloud démarre en trombe, puis ralentit soudainement jusqu'à l'arrêt. Des messages d'erreur apparaissent : « Rate limit exceeded », « 403 Forbidden », « Too many requests ». Votre transfert se bloque à 60 %. Que se passe-t-il ?

Chaque fournisseur de stockage cloud limite la vitesse à laquelle vous pouvez interagir avec son API. Ces limites de débit protègent leur infrastructure contre les abus, mais elles affectent aussi les utilisateurs légitimes qui déplacent de grandes quantités de données. Comprendre ces limites — et configurer vos outils pour les respecter — fait toute la différence entre des transferts qui se terminent de manière fiable et des transferts qui échouent à mi-parcours.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Que sont les limites de débit des API ?

Lorsque vous téléversez, téléchargez, listez ou modifiez des fichiers dans un espace de stockage cloud, votre outil effectue des appels API. Chaque opération correspond à une ou plusieurs requêtes API. Les limites de débit plafonnent le nombre de requêtes que vous pouvez effectuer sur une période donnée.

### Types de limites

- **Requêtes par seconde** — Nombre d'appels API par seconde (par ex. S3 : 3 500 requêtes PUT/seconde par préfixe).
- **Requêtes par jour** — Total des appels API quotidiens (par ex. Google Drive : ~10 milliards de requêtes/jour pour les applications, mais bien moins par utilisateur).
- **Bande passante par jour** — Volume total de données (par ex. Google Drive : ~750 Go de téléversement/jour).
- **Connexions simultanées** — Nombre de connexions simultanées autorisées.
- **Limites de rafale (burst)** — Pics de courte durée autorisés avant l'activation de la limitation.

## Limites de débit par fournisseur

### Google Drive

| Limite | Valeur |
|-------|-------|
| Téléversement par jour | ~750 Go |
| Téléchargement par jour | ~10 To |
| Requêtes API par 100 secondes | 1 000 par utilisateur |
| Opérations sur fichiers par seconde | ~10 |
| Code d'erreur | 403 (userRateLimitExceeded), 429 |

Google Drive est l'un des fournisseurs appliquant les limites de débit les plus strictes. Si vous voyez `403` ou `userRateLimitExceeded`, vous avez atteint la limite.

### OneDrive / SharePoint

| Limite | Valeur |
|-------|-------|
| Appels API | Limitation dynamique |
| Téléversements simultanés | ~4 recommandés |
| Code d'erreur | 429 (Too Many Requests), 503 |

Microsoft utilise une limitation dynamique — les limites se resserrent à mesure que votre utilisation augmente au cours d'une session.

### AWS S3

| Limite | Valeur |
|-------|-------|
| PUT/COPY/POST/DELETE | 3 500 par seconde et par préfixe |
| GET/HEAD | 5 500 par seconde et par préfixe |
| Pas de limite de bande passante quotidienne | Illimité |
| Code d'erreur | 503 (Slow Down) |

S3 est le plus généreux. La plupart des utilisateurs n'atteignent jamais les limites de débit, sauf en cas de milliers d'opérations sur de petits fichiers.

### Dropbox

| Limite | Valeur |
|-------|-------|
| Appels API | ~300 par minute pour les applications |
| Téléversement par session | Limitation progressive |
| Code d'erreur | 429 |

### Backblaze B2

| Limite | Valeur |
|-------|-------|
| Appels API | Selon le forfait |
| Téléversements simultanés | Pas de limite stricte |
| Bande passante | Paiement à l'usage, sans plafond |

B2 est très permissif — les limites de débit posent rarement problème.

## Comment RcloneView gère les limites de débit

### Nouvelle tentative automatique

Lorsque rclone reçoit une erreur de limite de débit (429, 403, 503), il effectue automatiquement les actions suivantes :

1. Met en pause le transfert concerné.
2. Attend le délai spécifié par le serveur (ou utilise un backoff exponentiel).
3. Retente l'opération.

Vous voyez cela dans le journal de transfert sous la forme « rate limited, waiting X seconds ».

### Transferts parallèles configurables

Réduisez le nombre de transferts parallèles pour diminuer le taux de vos requêtes API :

| Fournisseur | Transferts parallèles recommandés |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### Limitation de bande passante

Utilisez les [limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) pour contrôler le débit de données et réduire indirectement le nombre d'appels API.

### Nouvelle tentative des transferts échoués (v1.3)

Si des transferts échouent malgré la gestion des limites de débit, la fonctionnalité de nouvelle tentative de la v1.3 peut relancer les fichiers en échec une fois la tâche terminée.

## Stratégies pour éviter les limites de débit

### 1) Transférer en dehors des heures de pointe

Planifiez les transferts volumineux la nuit et le week-end, lorsque les autres utilisateurs (et vos propres applications) n'effectuent pas d'appels API :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) Répartir sur plusieurs jours

Pour les migrations dépassant la limite quotidienne de téléversement de 750 Go de Google Drive :

- Jour 1 : Transférer le dossier A (500 Go).
- Jour 2 : Transférer le dossier B (500 Go).
- Jour 3 : Transférer le dossier C + tout vérifier.

### 3) Utiliser vos propres identifiants API

Google Drive et certains autres fournisseurs autorisent des limites de débit plus élevées lorsque vous utilisez vos propres identifiants d'application OAuth au lieu de ceux partagés. Configurez votre propre projet API Google pour obtenir des quotas plus élevés.

### 4) Réduire la vérification des fichiers

Pour les téléversements initiaux en masse, désactivez la vérification de la destination. Cela élimine la moitié de vos appels API (ceux qui vérifient si chaque fichier existe déjà).

### 5) Regrouper les petits fichiers

Si vous avez des milliers de petits fichiers, envisagez de les archiver en ZIP avant le transfert. Un seul ZIP de 1 Go ne fait qu'un appel API, au lieu de 10 000 téléversements individuels effectuant 10 000 appels.

## Surveiller les problèmes de limite de débit

Surveillez la progression de votre transfert pour détecter les signes de limitation :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

Signes avant-coureurs :

- La vitesse de transfert chute soudainement après un bon démarrage.
- Des pauses périodiques dans le transfert.
- Des messages d'erreur dans le journal avec les codes 429 ou 403.
- La vitesse de transfert oscille (rapide → lente → rapide).

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Définissez le nombre approprié de transferts parallèles** pour votre fournisseur cloud.
3. **Planifiez les transferts volumineux** en dehors des heures de pointe.
4. **Surveillez la progression** et repérez les indicateurs de limitation.
5. **Utilisez la nouvelle tentative** (v1.3) pour plus de fiabilité.

Les limites de débit ne vont pas disparaître — mais avec les bons réglages, vous pouvez travailler dans ce cadre de manière fiable.

---

**Guides associés :**

- [Corriger les erreurs de limite de débit 403 sur Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
