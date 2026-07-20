---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "Migrer de Backblaze B2 vers Wasabi avec RcloneView"
authors:
  - tayson
description: "Migrez de Backblaze B2 vers Wasabi avec RcloneView. Comparez les modèles de tarification, configurez les deux distants, transférez les données et vérifiez la migration étape par étape."
keywords:
  - rcloneview
  - backblaze b2 vers wasabi
  - migrer de b2 vers wasabi
  - migration cloud wasabi
  - outil de migration backblaze
  - migration compatible s3
  - migration de stockage cloud
  - wasabi sans frais de sortie
  - transfert de données b2
  - interface graphique de migration de stockage objet
tags:
  - RcloneView
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Backblaze B2 vers Wasabi avec RcloneView

> Backblaze B2 offre des coûts de stockage réduits, mais les frais de sortie et d'API peuvent s'accumuler — **RcloneView** simplifie et rend vérifiable la migration vers la tarification à taux fixe de Wasabi.

Backblaze B2 et Wasabi sont deux des fournisseurs de stockage objet compatibles S3 les plus populaires pour les équipes soucieuses des coûts. Bien que B2 soit connu pour son faible tarif par Go de stockage (0,006 $/Go/mois), son modèle de tarification inclut des frais de sortie (0,01 $/Go) et des frais par transaction qui peuvent surprendre les équipes ayant des charges de travail à forte lecture. Wasabi propose un tarif fixe (0,0069 $/Go/mois) sans frais de sortie ni d'API, rendant les coûts entièrement prévisibles. RcloneView gère la migration entre ces deux fournisseurs compatibles S3 grâce à une interface visuelle qui élimine le besoin de scripts en ligne de commande.

Ce guide couvre l'intégralité de la migration — de la compréhension des différences de tarification à la vérification de chaque objet après le transfert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi migrer de Backblaze B2 vers Wasabi

La décision de migrer se résume généralement à une question de prévisibilité. Le tarif de stockage de B2 est légèrement inférieur à celui de Wasabi, mais une fois que l'on prend en compte les frais de sortie et les transactions de classe B/C, le coût total dépasse souvent le tarif fixe de Wasabi — en particulier pour les charges de travail qui lisent fréquemment les données.

Prenons un scénario : 10 To de stockage sur B2 coûtent 60 $/mois. Si vous téléchargez 5 To de ces données chaque mois (diffusion de médias, distribution de builds, exécution d'analyses), les frais de sortie ajoutent 50 $. Les transactions de classe B pour lister et télécharger des fichiers ajoutent encore des coûts. Sur Wasabi, les mêmes 10 To coûtent 69 $/mois au total, quelle que soit la quantité de données lues ou le nombre d'appels API effectués.

Wasabi applique également une politique de stockage minimum de 90 jours — supprimer des objets avant 90 jours entraîne des frais au prorata pour la période restante. Tenez-en compte dans votre planification si vous stockez des données à courte durée de vie.

## Configurer Backblaze B2 dans RcloneView

Ouvrez le gestionnaire de distants et ajoutez un distant Backblaze B2. Vous pouvez utiliser soit l'API native B2, soit l'API compatible S3. Pour les besoins de la migration, il est recommandé d'utiliser le point de terminaison compatible S3, car cela permet à RcloneView d'utiliser la même logique de transfert pour la source et la destination.

Entrez votre ID de clé d'application B2 et votre clé d'application. Si vous disposez de clés spécifiques à un bucket, utilisez-les pour une sécurité renforcée — la clé n'a besoin que d'un accès en lecture pour la source.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## Configurer Wasabi dans RcloneView

Ajoutez Wasabi en tant que distant compatible S3. Dans le gestionnaire de distants, sélectionnez **Amazon S3 Compatible** et configurez :

- **Fournisseur** : Wasabi
- **Clé d'accès** et **Clé secrète** : Générées depuis la console Wasabi
- **Région** : Sélectionnez la région la plus proche de vos utilisateurs (us-east-1, eu-central-1, ap-northeast-1, etc.)
- **Point de terminaison** : Configuré automatiquement en fonction de la région sélectionnée

Créez votre bucket de destination dans la console Wasabi ou via l'explorateur de RcloneView. Choisissez la même région que celle de votre base d'utilisateurs principale pour minimiser la latence.

## Exécuter la migration

Ouvrez l'explorateur à deux volets avec B2 à gauche et Wasabi à droite. Naviguez vers le bucket B2 que vous souhaitez migrer et le bucket de destination Wasabi.

Pour une migration complète, créez une tâche de synchronisation. RcloneView énumère tous les objets du bucket B2, les compare à la destination Wasabi et ne transfère que ce qui manque ou a changé. Étant donné que les deux fournisseurs prennent en charge les sommes de contrôle MD5 via ETag, la comparaison des fichiers est rapide et précise.

Points clés à considérer pour le transfert :

- **Frais de sortie depuis B2** : Vous encourrez des frais de sortie B2 pendant la migration. Pour minimiser les coûts, envisagez d'utiliser le partenariat de sortie gratuite de Backblaze avec Cloudflare (le cas échéant pour votre configuration) ou la Bandwidth Alliance de B2.
- **Transferts parallèles** : B2 et Wasabi prennent tous deux en charge une concurrence élevée. Réglez les transferts parallèles entre 8 et 16 pour un débit optimal.
- **Fichiers volumineux** : Les deux fournisseurs prennent en charge les téléversements multiparties. RcloneView utilise automatiquement le mode multiparties pour les fichiers dépassant le seuil, garantissant un transfert fiable des objets volumineux.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## Surveiller la progression du transfert

Le tableau de bord de surveillance en temps réel affiche l'état de chaque fichier dans la file d'attente de transfert. Vous pouvez suivre la progression par fichier, le pourcentage d'achèvement global et la vitesse de transfert actuelle. Si les conditions réseau changent, mettez le transfert en pause et reprenez-le plus tard — RcloneView reprend là où il s'était arrêté.

Pour les migrations de plusieurs téraoctets, le transfert peut durer des heures, voire des jours. La journalisation de RcloneView vous garantit un enregistrement complet de ce qui a été transféré, de ce qui a été ignoré et des éventuelles erreurs survenues.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## Vérifier la migration

Une fois le transfert terminé, exécutez une opération de comparaison entre la source B2 et la destination Wasabi. RcloneView répertorie les fichiers qui n'existent que d'un seul côté et les fichiers qui diffèrent en taille ou en somme de contrôle. Une comparaison propre — sans différences — confirme une migration réussie.

Portez attention aux points suivants :

- **Dossiers vides** : Le stockage objet n'a pas de véritables dossiers. B2 et Wasabi utilisent tous deux des « dossiers » basés sur des préfixes. RcloneView gère cela de manière cohérente, mais vérifiez que la logique de votre application ne dépend pas de marqueurs de répertoire.
- **Préservation des métadonnées** : Les métadonnées standard (content-type, last-modified) sont préservées lors des transferts compatibles S3. Les métadonnées personnalisées (x-amz-meta-*) sont également transférées par RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## Nettoyage post-migration

Une fois la migration vérifiée et tous les points de terminaison de l'application mis à jour de B2 vers Wasabi :

1. **Mettre à jour le DNS et les configurations d'application** : Pointez vos services vers le nouveau point de terminaison Wasabi.
2. **Exécuter une synchronisation finale** : Rattrapez tous les fichiers ajoutés à B2 pendant la fenêtre de migration.
3. **Conserver temporairement les données B2** : Maintenez le bucket B2 pendant une période de retour en arrière (2 à 4 semaines est typique).
4. **Supprimer les données B2** : Après avoir confirmé que tout fonctionne sur Wasabi, supprimez le bucket B2 pour arrêter les frais de stockage.

N'oubliez pas la politique de stockage minimum de 90 jours de Wasabi lors de la planification de votre stratégie de rétention. Si vous supprimez des objets de Wasabi avant 90 jours, vous serez facturé pour la totalité de la période de 90 jours.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Backblaze B2 et Wasabi en tant que distants compatibles S3 dans le gestionnaire de distants.
3. Exécutez une tâche de synchronisation de B2 vers Wasabi à l'aide de l'explorateur à deux volets et surveillez la progression en temps réel.
4. Vérifiez la migration avec la fonctionnalité de comparaison et mettez à jour les points de terminaison de votre application.

B2 et Wasabi sont tous deux d'excellents fournisseurs de stockage objet, mais lorsque la prévisibilité des coûts est essentielle, le modèle à taux fixe de Wasabi l'emporte — et RcloneView rend le changement sans effort.

---

**Guides connexes :**

- [Ajouter AWS S3 et compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Surveillance du transfert en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
