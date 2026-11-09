---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "Corriger la lenteur du listing de bucket S3 et de la synchronisation avec de nombreux petits fichiers — Réglages avec RcloneView"
authors:
  - morgan
description: "Corrigez la lenteur de la synchronisation et du listing S3 sur les buckets contenant de nombreux petits fichiers. Réglez checkers, transferts et filtres dans RcloneView et vérifiez avec Dry Run."
keywords:
  - synchronisation S3 lente petits fichiers
  - listing de bucket S3 lent
  - réglage des checkers rclone
  - synchronisation S3 millions de fichiers
  - RcloneView S3
  - accélérer la synchronisation S3
  - transfert de petits fichiers lent
  - performance de synchronisation compatible S3
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger la lenteur du listing de bucket S3 et de la synchronisation avec de nombreux petits fichiers — Réglages avec RcloneView

> Un bucket contenant des centaines de milliers de minuscules fichiers se synchronise lentement à cause de la surcharge par objet, et non de la bande passante, et quelques paramètres de job y changent beaucoup.

Le dossier de proxys d'un photographe ou l'archive de logs d'une application peut contenir un nombre énorme de petits objets. Chacun nécessite une entrée de listing, une comparaison et une requête, si bien que la synchronisation progresse péniblement alors que le réseau est au repos. RcloneView expose les paramètres rclone pertinents dans l'assistant de job, ce qui permet de les régler sans écrire de flags. Connectez S3, Azure ou Backblaze B2 avec un accès complet en lecture/écriture sur la licence FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les petits fichiers sont lents

Avec les gros fichiers, c'est le débit qui domine. Avec les petits fichiers, c'est le nombre de requêtes : chaque objet est listé, comparé par taille, date ou somme de contrôle, puis envoyé individuellement. La lenteur vient ici généralement de la latence par requête et de la limitation de débit côté fournisseur, si bien qu'ajouter de la bande passante ne sert à rien.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Onglet Transferring affichant le nombre de fichiers et la vitesse" class="img-large img-center" />

Ouvrez l'onglet Transferring pendant une exécution. Si la vitesse est faible mais que le nombre de fichiers augmente régulièrement, vous êtes limité par les requêtes et non par la bande passante.

## Régler les paramètres du job

À l'étape 2 de l'assistant de synchronisation, augmentez le nombre de transferts de fichiers pour déplacer plus d'objets en parallèle. Les equality checkers sont à 8 par défaut ; sur un backend lent ou bridé, la recommandation est d'utiliser 4 ou moins, car trop de vérifications simultanées peuvent déclencher une limitation et aggraver la situation. Modifiez une seule valeur à la fois, puis relancez.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Paramètres avancés du job pour les transferts et les checkers" class="img-large img-center" />

Activer la comparaison par somme de contrôle ajoute un calcul de hash en plus des vérifications de taille ; ne l'utilisez donc que lorsque l'intégrité compte plus que la vitesse. Laissez le paramètre de nouvelles tentatives à sa valeur par défaut de 3 afin que les erreurs transitoires n'interrompent pas une longue exécution.

## Réduire le travail

Les filtres de l'étape 3 allègent la charge du listing. Utilisez l'âge maximal des fichiers pour ignorer les anciens objets, excluez les dossiers inutiles et employez les filtres prédéfinis pour écarter certains types de fichiers. Diviser un job géant en jobs par préfixe facilite aussi l'isolement des échecs et leur relance.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'un job de synchronisation réglé dans RcloneView" class="img-large img-center" />

Lancez toujours un Dry Run après avoir modifié les filtres, afin de voir exactement quels fichiers seront copiés ou supprimés avant l'exécution réelle.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez votre job lent et surveillez l'onglet Transferring pour confirmer que les requêtes sont le goulot d'étranglement.
3. Ajustez les transferts et les checkers un par un, et ajoutez des filtres pour réduire le périmètre.
4. Comparez les durées dans Job History et conservez les meilleurs réglages.

De petits changements méthodiques transforment une synchronisation de toute une nuit en tâche de routine.

---

**Guides connexes :**

- [Corriger les échecs d'envoi multipart S3](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [Corriger la lenteur des transferts cloud](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Corriger les erreurs de limitation de débit des API cloud](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
