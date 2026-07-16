---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "Migrer de Wasabi vers Cloudflare R2 avec RcloneView"
authors:
  - tayson
description: "Migrez de Wasabi vers Cloudflare R2 avec RcloneView. Comparez les tarifs, configurez les deux distants compatibles S3, transférez les données et vérifiez la migration étape par étape."
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - RcloneView
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Wasabi vers Cloudflare R2 avec RcloneView

> Wasabi et Cloudflare R2 sont tous deux compatibles S3 et présentés comme des alternatives économiques à AWS S3, mais leurs modèles tarifaires diffèrent sur des points importants — **RcloneView** gère la migration entre les deux avec une interface visuelle.

Wasabi propose du stockage cloud à chaud à 6,99 $/To/mois sans frais de sortie, mais impose une durée de stockage minimale de 90 jours ainsi qu'un montant mensuel minimum. Cloudflare R2 facture 0,015 $/Go/mois (environ 15,36 $/To) sans frais de sortie et sans durée de stockage minimale. Pour les charges de travail avec des récupérations de données fréquentes ou des objets à courte durée de vie, R2 peut être nettement moins cher. RcloneView se connecte aux deux en tant que distants compatibles S3 et propose un chemin de migration simple.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi migrer de Wasabi vers Cloudflare R2

Les deux fournisseurs suppriment les frais de sortie, ce qui constitue leur principal argument face à AWS S3. La décision de migrer dépend généralement des facteurs suivants :

- **Durée de stockage minimale** : Wasabi facture au moins 90 jours de stockage par objet, même si vous le supprimez plus tôt. R2 n'impose aucun minimum, ce qui le rend plus adapté aux données transitoires ou fréquemment remplacées.
- **Intégration CDN** : R2 s'intègre nativement au réseau CDN de Cloudflare, permettant un accès public instantané aux objets stockés via un domaine Cloudflare sans configuration supplémentaire.
- **Intégration Workers** : Si votre application utilise Cloudflare Workers, R2 offre un accès à latence nulle depuis le edge computing.
- **Tarification à grande échelle** : Pour les charges de travail lourdes en stockage, le tarif fixe par To de Wasabi peut être plus avantageux. Pour les charges de travail avec un volume élevé d'appels API, le modèle tarifaire de R2 (gratuit pour les 10 premiers millions de requêtes de classe B par mois) peut l'emporter.

## Configuration des deux distants

### Distant Wasabi

Ouvrez le gestionnaire de distants de RcloneView et ajoutez un distant compatible S3. Sélectionnez **Wasabi** comme fournisseur, saisissez votre clé d'accès et votre clé secrète Wasabi, puis indiquez le point de terminaison de la région (par exemple, `s3.us-east-1.wasabisys.com`). Sélectionnez le bucket que vous souhaitez migrer.

### Distant Cloudflare R2

Ajoutez un autre distant compatible S3 et sélectionnez **Cloudflare R2** comme fournisseur. Saisissez votre ID de clé d'accès R2 et votre clé d'accès secrète (générés depuis le tableau de bord Cloudflare, sous R2 > Manage R2 API Tokens). Le point de terminaison suit le format `https://<account-id>.r2.cloudflarestorage.com`. Créez un bucket cible dans le tableau de bord Cloudflare ou laissez RcloneView en créer un pendant la configuration.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Exécution de la migration

Ouvrez Wasabi dans le panneau de gauche et R2 dans le panneau de droite. Naviguez jusqu'au bucket source sur Wasabi et au bucket cible sur R2.

Comme les deux fournisseurs utilisent l'API S3, le transfert des métadonnées est simple — les types de contenu, les en-têtes cache-control et les métadonnées personnalisées sont conservés. RcloneView utilise les métadonnées côté serveur pendant le transfert, préservant les propriétés des objets sans configuration supplémentaire.

Pour la migration initiale, utilisez une tâche de copie. RcloneView compare les fichiers à l'aide des sommes de contrôle MD5 (Wasabi et R2 renvoient tous deux des ETags MD5 standard pour les téléversements non multiparties) et ne transfère que les fichiers nouveaux ou modifiés. Les transferts multithread avec une concurrence configurable permettent de garder la migration efficace — réglez les transferts sur 8 à 16 pour les migrations de buckets volumineux.

Soyez attentif à la durée de stockage minimale de Wasabi : si des objets ont été téléversés récemment (au cours des 90 derniers jours), vous serez toujours facturé pour les 90 jours complets sur Wasabi même après les avoir supprimés. Planifiez votre calendrier de migration en conséquence — migrez d'abord, vérifiez, puis supprimez de Wasabi une fois la période de 90 jours écoulée.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Vérification de la migration

Après le transfert, utilisez la fonction de comparaison de RcloneView pour vérifier que chaque objet est bien arrivé sur R2. Sélectionnez la source Wasabi et la destination R2, puis lancez une comparaison de dossiers. Les objets identiques apparaissent comme correspondants ; les objets manquants ou différents sont mis en évidence pour examen.

Pour plus de confiance, exécutez une opération de vérification (check) qui calcule les sommes de contrôle des deux côtés. Cela vérifie l'intégrité des données au niveau de l'octet.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## Nettoyage après migration

Une fois la migration vérifiée :

1. Mettez à jour les configurations des applications pour pointer vers les points de terminaison R2 au lieu de Wasabi.
2. Testez l'accès des applications pour confirmer que tout fonctionne avec R2.
3. Attendez que la période de stockage minimale de 90 jours soit écoulée sur Wasabi avant de supprimer les objets, afin d'éviter des frais de suppression anticipée.
4. Supprimez le bucket Wasabi et désactivez les clés d'accès Wasabi.

Si vous devez exécuter les deux fournisseurs en parallèle pendant la transition, planifiez une tâche de synchronisation quotidienne dans RcloneView pour maintenir R2 à jour avec tout nouvel objet ajouté à Wasabi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Wasabi et Cloudflare R2 comme distants compatibles S3.
3. Exécutez une tâche de copie de Wasabi vers R2.
4. Vérifiez avec les opérations de comparaison et de vérification.
5. Mettez à jour les points de terminaison des applications et nettoyez Wasabi après la période de rétention.

Wasabi et R2 sont tous deux d'excellentes options compatibles S3, mais lorsque le profil de votre charge de travail change, RcloneView rend la migration sans effort.

---

**Guides associés :**

- [Ajouter AWS S3 et les services compatibles S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
