---
slug: fix-hetzner-storage-box-connection-errors-rcloneview
title: "Corriger les erreurs de connexion Hetzner Storage Box — Dépanner avec RcloneView"
authors:
  - kai
description: "Dépannez les échecs de connexion Hetzner Storage Box dans RcloneView, d'une mauvaise configuration de l'endpoint aux erreurs d'identifiants et de montage."
keywords:
  - erreur de connexion Hetzner Storage Box
  - dépannage Hetzner S3
  - corriger la synchronisation cloud Hetzner
  - erreurs de stockage objet Hetzner
  - RcloneView Hetzner
  - erreur de configuration d'endpoint S3
  - connexion refusée stockage cloud
  - configuration des identifiants Hetzner
tags:
  - RcloneView
  - troubleshooting
  - hetzner
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de connexion Hetzner Storage Box — Dépanner avec RcloneView

> Les échecs de connexion au stockage objet compatible S3 de Hetzner remontent presque toujours à un endpoint, une région ou une paire d'identifiants incorrects — le test de connexion de RcloneView indique précisément lequel avant que vous ne perdiez du temps sur une synchronisation complète.

Le stockage objet de Hetzner est accessible via le protocole compatible S3 de rclone, ce qui signifie que le remote a besoin d'une Access Key, d'une Secret Key et d'un endpoint saisis correctement — contrairement aux fournisseurs basés sur OAuth, où une connexion via navigateur gère l'authentification automatiquement. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, mais les remotes compatibles S3 comme Hetzner demandent un peu plus de soin lors de la configuration que les remotes OAuth en un clic. Voici comment diagnostiquer les échecs de connexion les plus courants.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier la correspondance entre l'endpoint et la région

La cause la plus fréquente d'une erreur de connexion Hetzner est un endpoint qui ne correspond pas à la région où la storage box a été créée. Les endpoints de stockage objet de Hetzner sont spécifiques à chaque région, et coller le mauvais endpoint — ou en conserver un copié depuis un autre fournisseur compatible S3 — produit un échec de connexion qui ressemble exactement à des identifiants incorrects.

<img src="/support/images/en/blog/new-remote.png" alt="Modification des paramètres du remote Hetzner Storage Box dans RcloneView" class="img-large img-center" />

Ouvrez le Remote Manager, sélectionnez le remote Hetzner et vérifiez le champ endpoint par rapport à la valeur exacte affichée dans la Hetzner Cloud Console pour cette storage box spécifique. Les incohérences de région sont faciles à manquer car le remote continue souvent de charger l'écran de configuration sans erreur — l'échec n'apparaît que lorsque RcloneView tente réellement de lister les fichiers.

## Tester la connexion avant une synchronisation complète

Plutôt que de découvrir un problème d'identifiants en pleine transmission, utilisez le test de connexion de RcloneView lors de l'ajout ou de la modification du remote. Si le test échoue avec une erreur d'authentification, soupçonnez plutôt l'Access Key ID ou la Secret Access Key que l'endpoint — vérifiez s'il y a un espace superflu ou si une clé a été régénérée dans la console Hetzner après la configuration initiale du remote dans RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparaison des fichiers locaux avec Hetzner Storage Box après correction d'une erreur de connexion" class="img-large img-center" />

Si le test réussit mais qu'une tâche de synchronisation continue d'échouer en cours de route, vérifiez l'onglet Log dans l'Info View en bas — Hetzner renvoie parfois des réponses de limitation de débit lors de téléversements par lots importants, et le journal détaillé affichera le statut HTTP précis plutôt qu'un délai d'attente générique.

## Vérifier le pare-feu et l'accès réseau

Les pare-feu d'entreprise et certaines configurations VPN bloquent le trafic sortant vers des endpoints S3 moins courants tout en autorisant le trafic vers les principaux fournisseurs. Si le test de connexion reste bloqué au lieu d'échouer rapidement, vérifiez que la machine peut atteindre directement l'endpoint Hetzner — un blocage au niveau réseau ressemblera exactement à un remote mal configuré depuis l'intérieur de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Vérification du Job History après résolution d'un problème de connexion Hetzner" class="img-large img-center" />

Une fois qu'une tâche s'exécute avec succès, le Job History conserve un enregistrement de la vitesse de transfert et du nombre de fichiers, ce qui est utile pour confirmer que la correction a tenu tout au long d'une synchronisation complète.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le Remote Manager et revérifiez l'endpoint Hetzner par rapport à la région affichée dans la Hetzner Cloud Console.
3. Ressaisissez l'Access Key et la Secret Key si le test de connexion échoue avec une erreur d'authentification.
4. Exécutez une synchronisation Dry Run avant le transfert réel pour détecter les problèmes restants sans déplacer de données.

Un endpoint et une paire d'identifiants correctement configurés résolvent la grande majorité des problèmes de connexion Hetzner, permettant aux tâches de synchronisation et de sauvegarde de s'exécuter de manière fiable par la suite.

---

**Guides connexes :**

- [Gérer Hetzner Storage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Corriger les erreurs de connexion et d'authentification MinIO avec RcloneView](https://rcloneview.com/support/blog/fix-minio-connection-authentication-errors-rcloneview)
- [Corriger les erreurs de connexion Linode Object Storage avec RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)

<CloudSupportGrid />
