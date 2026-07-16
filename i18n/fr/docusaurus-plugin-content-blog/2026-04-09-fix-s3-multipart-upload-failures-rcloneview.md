---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "Corriger les échecs d'upload multipart S3 dans RcloneView"
authors:
  - tayson
description: "Diagnostiquez et corrigez les échecs d'upload multipart S3 dans RcloneView. Résolvez les uploads incomplets, les erreurs de taille de partie et les sessions multipart orphelines."
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les échecs d'upload multipart S3 dans RcloneView

> Les uploads multipart S3 découpent les fichiers volumineux en morceaux pour un transfert parallèle et une reprise possible, mais des échecs en cours de processus peuvent laisser des uploads incomplets, gaspiller du stockage et bloquer les transferts — voici comment les corriger dans RcloneView.

Amazon S3 et les fournisseurs compatibles S3 (Wasabi, Backblaze B2 S3, Cloudflare R2, MinIO, DigitalOcean Spaces) exigent des uploads multipart pour les fichiers de plus de 5 Go et les recommandent pour les fichiers de plus de 100 Mo. Le fichier est découpé en parties (de 5 Mo à 5 Go par défaut), uploadé en parallèle, puis assemblé côté serveur. Lorsque ce processus échoue en cours de route — à cause d'interruptions réseau, de délais d'expiration ou d'une taille de partie mal configurée — le résultat est un upload incomplet qui consomme du stockage mais ne produit aucun objet utilisable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Symptômes courants

- **L'upload se bloque ou reste bloqué** : le transfert semble s'arrêter au milieu d'un gros fichier. Le suivi de RcloneView n'affiche aucune progression pendant une période prolongée.
- **Erreur « EntityTooSmall »** : des parties plus petites que la taille minimale (5 Mo pour la plupart des fournisseurs S3) ont été uploadées. Cela se produit généralement lorsque la configuration de la taille des morceaux est trop petite par rapport à la taille du fichier.
- **Erreur « EntityTooLarge »** : une seule partie dépasse la taille maximale autorisée (5 Go).
- **« InvalidPart » ou « InvalidPartOrder »** : les parties ont été uploadées dans le mauvais ordre ou une partie a été corrompue pendant le transfert. Le serveur rejette la demande de finalisation.
- **L'utilisation du stockage augmente mais les fichiers n'apparaissent pas** : les uploads multipart incomplets consomment du stockage. Les parties existent sur le serveur mais l'objet final n'est jamais assemblé.

## Correction 1 : ajuster la taille des morceaux

La cause la plus courante des échecs multipart est une taille de morceau incorrecte par rapport à la taille du fichier. S3 autorise un maximum de 10 000 parties par upload. Si votre taille de morceau est trop petite pour un gros fichier, l'upload dépasse la limite de parties et échoue.

**Exemple** : un fichier de 500 Go avec la taille de morceau par défaut de 5 Mo nécessiterait 100 000 parties — dépassant largement la limite de 10 000 parties.

Dans RcloneView, ajustez la taille des morceaux lors de la configuration de votre remote S3 ou dans les options avancées de la tâche. Une bonne règle empirique : définissez la taille des morceaux à au moins `taille_du_fichier / 10 000`. Pour un fichier de 500 Go, utilisez des morceaux d'au moins 50 Mo. Pour la plupart des charges de travail, des morceaux de 64 Mo à 128 Mo offrent un bon équilibre entre parallélisme et fiabilité.

Vous pouvez définir cela avec l'indicateur `--s3-chunk-size` dans le champ des indicateurs personnalisés de RcloneView.

## Correction 2 : augmenter le délai d'expiration de l'upload

Les grosses parties sur des connexions lentes peuvent dépasser le délai d'expiration par défaut. Si votre connexion est plus lente que 10 Mbps, un morceau de 128 Mo pourrait mettre plus de 100 secondes à s'uploader — proche des limites de délai d'expiration par défaut.

Augmentez le délai d'expiration avec l'indicateur `--timeout`. Par exemple, `--timeout 300s` accorde jusqu'à 5 minutes à chaque partie pour se terminer. Vous pouvez également réduire la taille des morceaux pour que les parties individuelles se transfèrent plus rapidement.

## Correction 3 : réduire la concurrence des transferts

Uploader trop de parties simultanément peut surcharger votre connexion réseau ou le point de terminaison S3. Si vous constatez des délais d'expiration fréquents ou des réinitialisations de connexion pendant les uploads multipart, réduisez le nombre de transferts simultanés.

Dans la configuration de tâche de RcloneView, réduisez le nombre de transferts par défaut (4) à 2 voire 1 pour les fichiers très volumineux. Vous pouvez également utiliser `--s3-upload-concurrency` pour contrôler combien de parties d'un même fichier sont uploadées en parallèle (la valeur par défaut est 4).

## Correction 4 : nettoyer les uploads multipart orphelins

Les uploads multipart échoués laissent des parties orphelines sur le serveur qui consomment du stockage et engendrent des coûts. Ces parties ne sont pas visibles comme des objets — vous ne les verrez pas en parcourant le bucket dans RcloneView ou la console AWS.

Pour nettoyer les uploads orphelins :

- **AWS S3** : configurez une règle de cycle de vie sur le bucket pour annuler automatiquement les uploads multipart incomplets après un nombre de jours spécifié (par exemple, 7 jours). Cela se fait dans la console AWS sous l'onglet Management du bucket.
- **Avec rclone** : exécutez `rclone cleanup remote:bucket` depuis le terminal intégré de RcloneView. Cela annule tous les uploads multipart en attente sur le bucket spécifié.
- **Fournisseurs compatibles S3** : la plupart des fournisseurs prennent en charge les mêmes règles de cycle de vie ou commandes de nettoyage, mais consultez la documentation de votre fournisseur pour les détails spécifiques.

## Correction 5 : activer la nouvelle tentative en cas d'échec

Les interruptions réseau pendant les uploads multipart peuvent provoquer l'échec de parties individuelles. RcloneView relance automatiquement les opérations échouées (3 tentatives par défaut avec un délai exponentiel). Si vous rencontrez des échecs transitoires fréquents, augmentez le nombre de tentatives avec `--retries 5` ou `--retries 10` dans les indicateurs personnalisés.

Pour les connexions très instables, définissez également `--low-level-retries 10` pour retenter les requêtes HTTP individuelles avant de les compter comme une opération échouée.

## Correction 6 : utiliser la copie côté serveur lorsque c'est possible

Si vous copiez entre deux buckets compatibles S3 chez le même fournisseur, la copie côté serveur évite entièrement les problèmes d'upload multipart — les données se déplacent au sein du réseau du fournisseur sans passer par votre machine. RcloneView utilise automatiquement la copie côté serveur lorsque la source et la destination sont chez le même fournisseur S3.

Pour les transferts entre fournisseurs (par exemple, AWS S3 vers Cloudflare R2), les données doivent passer par votre machine et les uploads multipart s'appliquent côté destination.

## Prévenir les futurs échecs

- **Définir la taille des morceaux de manière proactive** : avant d'uploader des fichiers de plus de 1 Go, calculez la taille de morceau requise (`taille_du_fichier / 10 000`) et définissez-la dans les indicateurs personnalisés.
- **Activer le nettoyage par cycle de vie** : configurez toujours une règle de cycle de vie pour annuler les uploads multipart incomplets. Cela empêche l'accumulation de parties orphelines.
- **Surveiller les transferts** : utilisez le suivi en temps réel de RcloneView pour détecter tôt les uploads bloqués. Mettre en pause puis reprendre un transfert bloqué résout souvent les problèmes transitoires.
- **Tester avec un essai à blanc** : pour les uploads critiques, utilisez le mode d'essai à blanc (dry run) de RcloneView pour vérifier le plan de transfert avant de le valider.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez votre remote S3 avec une taille de morceau appropriée pour vos fichiers les plus volumineux.
3. Définissez des règles de cycle de vie sur vos buckets pour nettoyer automatiquement les uploads orphelins.
4. Surveillez les transferts en temps réel et ajustez la concurrence selon les besoins.

Les échecs d'upload multipart constituent le problème le plus courant lors du travail avec des fichiers volumineux sur S3. Une configuration adéquate de la taille des morceaux, des paramètres de délai d'expiration et du nettoyage des uploads orphelins résout la grande majorité des cas.

---

**Guides connexes :**

- [Ajouter AWS S3 et compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Suivi des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
