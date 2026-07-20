---
slug: fix-bandwidth-throttle-slow-uploads-rcloneview
title: "Corriger les envois cloud lents — Optimiser la bande passante et la vitesse de transfert avec RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les vitesses d'envoi cloud lentes dans RcloneView. Ajustez les transferts simultanés, les limites de bande passante et les flags rclone pour maximiser les performances d'envoi vers n'importe quel fournisseur cloud."
keywords:
  - fix slow cloud uploads RcloneView
  - cloud upload speed optimization
  - RcloneView bandwidth tuning
  - slow cloud transfer troubleshooting
  - rclone upload speed fix
  - increase cloud sync speed
  - RcloneView transfer performance
  - fix slow backup uploads
  - cloud upload optimization guide
  - rclone concurrent transfers tuning
tags:
  - RcloneView
  - troubleshooting
  - tips
  - performance
  - optimization
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les envois cloud lents — Optimiser la bande passante et la vitesse de transfert avec RcloneView

> Lorsque les envois cloud dans RcloneView semblent plus lents que prévu, quelques modifications de réglages ciblées peuvent considérablement augmenter le débit — voici comment diagnostiquer et corriger les goulots d'étranglement de performance les plus courants.

Les vitesses d'envoi cloud lentes figurent parmi les frustrations les plus courantes des utilisateurs de RcloneView. La cause profonde est rarement évidente : cela peut être un nombre trop faible de transferts simultanés, une limite de bande passante activée par accident, un point d'accès API bridé, ou une incompatibilité entre le MTU de votre réseau et les exigences du fournisseur cloud. Ce guide passe en revue chaque cause potentielle de manière systématique afin que vous puissiez identifier et résoudre le problème rapidement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier et augmenter les transferts simultanés

Le réglage ayant le plus d'impact sur le débit d'envoi est le **nombre de transferts de fichiers simultanés**. Par défaut, rclone transfère les fichiers séquentiellement ou avec une concurrence limitée. Dans la configuration de la tâche de synchronisation de RcloneView (Étape 2 : Paramètres avancés), augmentez le réglage **Nombre de transferts de fichiers** — essayez entre 8 et 16 pour les connexions à haut débit. Chaque transfert simultané ajoute un débit indépendant, ce qui multiplie efficacement votre vitesse d'envoi effective.

Pour les fournisseurs comme Amazon S3 et Cloudflare R2 qui prennent en charge les envois multiparties, augmentez également le **Nombre de transferts multi-threads** (par défaut : 4) afin de paralléliser l'envoi de chaque fichier volumineux en segments. Ceci est particulièrement bénéfique lors de l'envoi de fichiers vidéo volumineux ou de sauvegardes de bases de données.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Adjusting concurrent transfer settings in RcloneView sync job" class="img-large img-center" />

## Supprimer les limites de bande passante accidentelles

RcloneView transmet les Flags Rclone Globaux depuis Settings > Embedded Rclone à chaque opération. Vérifiez si les flags `--bwlimit` ou `--bwlimit-file` y sont définis — ceux-ci plafonnent la vitesse d'envoi à la valeur spécifiée. Si vous aviez précédemment défini une limite de bande passante pour éviter de saturer votre connexion et que vous avez oublié de la supprimer, ce flag bridera silencieusement tous vos envois.

Supprimez ou modifiez le flag `--bwlimit` dans Settings > Embedded Rclone > Global Rclone Flags, puis relancez votre tâche de synchronisation pour voir si la vitesse s'améliore.

<img src="/support/images/en/blog/new-remote.png" alt="Checking global rclone flags that might limit upload bandwidth" class="img-large img-center" />

## Vérifier les limites de débit API côté fournisseur

Certains fournisseurs cloud imposent des limites de débit qui peuvent donner l'impression que les envois sont lents. Google Drive limite le nombre d'appels API par utilisateur et par seconde. Dropbox bride les applications qui effectuent trop de requêtes. Amazon S3 applique des limites de requêtes par préfixe. Lorsque vous constatez que les envois progressent lentement avec de nombreux petits fichiers mais plus rapidement avec des fichiers volumineux, la limitation du débit API en est souvent la cause.

Dans l'onglet Log de RcloneView, recherchez les messages contenant `429 Too Many Requests` ou `Rate limit exceeded`. Si c'est le cas, réduisez le nombre de transferts simultanés pour rester dans les limites de l'API du fournisseur. Pour Google Drive en particulier, réduisez les transferts simultanés à 4 et limitez le nombre de vérificateurs (checkers) à 8 ou moins.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfer speed and detecting rate limits in RcloneView" class="img-large img-center" />

## Ajuster la taille des segments d'envoi multiparties

Pour les fichiers volumineux envoyés vers des fournisseurs compatibles S3, la taille des segments (chunk size) des envois multiparties affecte le débit. RcloneView vous permet de transmettre des flags rclone avancés dans les réglages personnalisés de la tâche de synchronisation. L'ajout de `--s3-chunk-size 64M` (en augmentant par rapport à la valeur par défaut de 5 Mo) réduit la surcharge des appels API pour les envois de fichiers volumineux et peut considérablement améliorer le débit sur les connexions à haut débit.

De même, pour Backblaze B2, utilisez `--b2-chunk-size 100M` pour les envois de fichiers volumineux. Ces flags peuvent être ajoutés via le champ des flags rclone personnalisés dans la configuration de la tâche de synchronisation de RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Advanced sync job settings for tuning upload performance in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Dans les paramètres avancés de votre tâche de synchronisation, augmentez les transferts simultanés entre 8 et 16.
3. Vérifiez Settings > Embedded Rclone pour tout flag `--bwlimit` susceptible de plafonner la vitesse.
4. Consultez l'onglet Log pour les erreurs de limite de débit et réduisez la concurrence si nécessaire.

Optimiser la vitesse d'envoi dans RcloneView est un processus qui consiste à ajuster la concurrence, à supprimer les plafonds accidentels et à aligner vos réglages sur les caractéristiques de l'API de chaque fournisseur.

---

**Guides connexes :**

- [Accélérer les transferts cloud volumineux avec RcloneView](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Corriger la progression bloquée des transferts cloud — Résoudre les envois figés avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Flags rclone personnalisés et options avancées dans RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
