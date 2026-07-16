---
slug: fix-pcloud-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation pCloud — Résoudre les problèmes courants de pCloud avec RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de synchronisation pCloud courantes dans RcloneView — corrigez l'expiration du jeton OAuth, les limites de débit de l'API, les incompatibilités de région de serveur et les problèmes de téléversement lent."
keywords:
  - pCloud sync errors
  - RcloneView pCloud
  - pCloud troubleshooting
  - OAuth token expired
  - pCloud Europe US server
  - pCloud API rate limit
  - cloud sync fix
  - rclone pCloud
tags:
  - pcloud
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation pCloud — Résoudre les problèmes courants de pCloud avec RcloneView

> Les échecs de synchronisation pCloud sont presque toujours causés par l'un des quelques problèmes connus — voici comment diagnostiquer et corriger les plus courants dans RcloneView.

pCloud est un fournisseur de stockage cloud axé sur la confidentialité, avec des serveurs aux États-Unis et en Europe, et cette répartition régionale est à l'origine de nombreux échecs de synchronisation mystérieux. Combiné à l'expiration du jeton OAuth et aux limites de débit de l'API, pCloud peut générer des erreurs déroutantes qui semblent sans rapport avec le problème réel. Ce guide passe en revue les problèmes pCloud les plus courants rencontrés dans RcloneView et explique comment résoudre chacun d'eux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Expiration du jeton OAuth et réautorisation

pCloud utilise OAuth pour l'authentification, ce qui signifie que RcloneView détient un jeton d'accès qui expire périodiquement. Lorsque le jeton expire, les tâches de synchronisation échouent avec des erreurs d'authentification telles que `401 Unauthorized` ou `invalid_token`. La solution est simple : accédez à votre liste de distants dans RcloneView, sélectionnez le distant pCloud, puis choisissez **Re-authorize** (ou supprimez et recréez le distant). Cela déclenche un nouveau flux OAuth dans votre navigateur, émettant un nouveau jeton valide.

Pour éviter des interruptions répétées de réautorisation, assurez-vous que votre distant pCloud dans RcloneView est créé avec la bonne région de serveur sélectionnée (voir ci-dessous). Une incompatibilité de région peut faire apparaître les jetons comme valides, mais ils échouent lors des appels API réels, ce qui ressemble exactement à une expiration de jeton.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a pCloud remote in RcloneView" class="img-large img-center" />

## Incompatibilité de région de serveur Europe vs États-Unis

Il s'agit du problème le plus courant spécifique à pCloud. Les comptes pCloud créés en Europe sont hébergés sur des serveurs européens (`eapi.pcloud.com`), tandis que les comptes américains utilisent le point de terminaison US par défaut (`api.pcloud.com`). Si vous avez créé un compte pCloud avec une région européenne mais que RcloneView est configuré pour utiliser le point de terminaison américain, chaque appel API échouera.

Lors de la configuration d'un distant pCloud dans RcloneView, recherchez le champ **Hostname** ou **API Endpoint** pendant la configuration. Pour les comptes européens, définissez-le sur `eapi.pcloud.com`. Si votre distant a été créé sans spécifier cela, supprimez-le et recréez-le avec le bon nom d'hôte. Cette simple correction résout la grande majorité des échecs de connexion pCloud.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="pCloud remote configuration showing region endpoint in RcloneView" class="img-large img-center" />

## Limites de débit de l'API et téléversements lents

pCloud applique des limites de débit d'API, en particulier pour les comptes gratuits. Lorsque vous atteignez ces limites, rclone reçoit des erreurs telles que `too many requests` ou les transferts ralentissent considérablement. RcloneView respecte la logique de nouvelle tentative intégrée de rclone, mais vous pouvez l'ajuster davantage en modifiant les indicateurs `--retries` et `--retries-sleep` dans le paramètre **Global Rclone Flags**.

Pour les téléversements lents en particulier, le niveau gratuit de pCloud impose des restrictions de bande passante distinctes de la limitation de débit. Envisagez de diviser les grandes tâches de synchronisation en lots plus petits à l'aide de règles de filtrage, ou de planifier les tâches pendant les heures creuses avec une planification de licence PLUS. Si les téléversements expirent fréquemment, ajouter `--timeout 300s` à vos indicateurs globaux donne plus de temps aux transferts pour se terminer avant que rclone ne les considère comme échoués.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring pCloud transfer progress in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Si vous voyez des erreurs d'authentification, réautorisez votre distant pCloud dans le panneau des paramètres du distant.
3. Vérifiez si votre compte pCloud est de région UE et mettez à jour le point de terminaison vers `eapi.pcloud.com` si nécessaire.
4. Pour les erreurs de limite de débit, ajoutez `--retries 10 --retries-sleep 30s` aux Global Rclone Flags dans les préférences.
5. Effectuez un **essai à blanc (dry run)** avant chaque synchronisation pour confirmer que le distant est accessible et que les bons fichiers sont concernés.

La plupart des problèmes de synchronisation pCloud dans RcloneView sont résolus par l'une de ces étapes — la correction du point de terminaison de région représente à elle seule la majorité des échecs signalés.

---

**Guides connexes :**

- [Gérer Koofr — Synchronisation et sauvegarde cloud avec RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Gérer Proton Drive — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Corriger l'expiration du jeton OAuth cloud et les problèmes de rafraîchissement avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)

<CloudSupportGrid />
