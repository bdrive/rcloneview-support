---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Remote Hasher — Ajoutez des sommes de contrôle d'intégrité de fichiers à tout stockage cloud dans RcloneView"
authors:
  - robin
description: "Découvrez comment le remote Hasher de RcloneView ajoute une vérification par somme de contrôle aux backends cloud dépourvus de support natif du hachage, protégeant chaque sauvegarde contre la corruption silencieuse."
keywords:
  - RcloneView Hasher remote
  - vérification d'intégrité de fichiers cloud
  - somme de contrôle sauvegarde cloud rcloneview
  - guide du remote hasher rclone
  - vérifier l'intégrité des transferts cloud
  - validation par somme de contrôle des sauvegardes cloud
  - détecter la corruption de fichiers en synchronisation cloud
  - intégrité des données de stockage cloud rcloneview
  - vérification par hachage de sauvegarde cloud
  - remote virtuel hasher rclone
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Hasher — Ajoutez des sommes de contrôle d'intégrité de fichiers à tout stockage cloud dans RcloneView

> Le remote virtuel Hasher ajoute discrètement un suivi par somme de contrôle aux backends cloud qui ne le prennent pas nativement en charge, transformant chaque synchronisation en un transfert vérifié et résistant à la corruption.

Tous les fournisseurs de stockage cloud ne calculent pas et ne stockent pas de sommes de contrôle des fichiers. Les fournisseurs qui s'appuient uniquement sur la taille du fichier et l'horodatage de modification pour la comparaison peuvent passer à côté d'une corruption de données silencieuse — le genre qui se produit lorsqu'un fichier est transféré intégralement mais arrive avec des bits inversés. Pour les archivistes, les administrateurs système et les entreprises ayant des exigences d'intégrité des données, il s'agit d'une lacune importante. RcloneView prend en charge le remote Hasher de rclone, un wrapper de remote virtuel qui ajoute un suivi MD5, SHA-1 ou d'autres hachages par-dessus n'importe quel backend cloud existant, sans changer la façon dont vous stockez ou récupérez vos fichiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce que le remote Hasher et pourquoi il est important

Le remote Hasher est l'un des types de remotes virtuels de rclone — un wrapper qui se place devant un remote existant et améliore ses capacités. Plus précisément, le remote Hasher stocke des sommes de contrôle aux côtés de vos fichiers, en mettant en cache les valeurs de hachage afin que les opérations de synchronisation suivantes puissent comparer les fichiers par contenu plutôt que de se fier uniquement à la taille. C'est particulièrement important lorsque vous synchronisez vers des fournisseurs cloud qui n'exposent pas d'API de hachage native, ou lorsque vous devez détecter une corruption au niveau des bits qui ne modifierait pas la taille d'un fichier.

Un exemple concret : une société de production média qui archive des rushs vidéo 4K sur un serveur de stockage basé sur WebDAV ne dispose d'aucun support de hachage natif de la part du serveur. Sans sommes de contrôle, rclone compare les fichiers par taille et horodatage — mais un fichier subtilement corrompu de taille identique semblerait inchangé. Envelopper le remote WebDAV dans un remote Hasher ajoute une comparaison par hachage à chaque synchronisation, détectant le fichier corrompu et le signalant pour vérification avant qu'il n'écrase silencieusement une bonne copie.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## Configurer un remote Hasher dans RcloneView

Dans RcloneView, les remotes virtuels comme Hasher sont créés via le même assistant Nouveau remote que n'importe quel fournisseur cloud. Depuis l'onglet Remote, cliquez sur Nouveau remote, puis faites défiler jusqu'aux types de remotes virtuels — vous y trouverez Hasher aux côtés de Crypt, Union, Combine, et d'autres. Sélectionnez le remote sous-jacent que vous souhaitez envelopper (par exemple votre serveur WebDAV ou FTP), choisissez les algorithmes de hachage à activer, puis enregistrez. Le remote Hasher enveloppe votre backend de manière transparente.

Une fois enregistré, le remote Hasher apparaît dans le Gestionnaire de remotes comme n'importe quel autre remote. Vous pouvez l'ouvrir dans le panneau Explorateur, parcourir les fichiers et exécuter des tâches de synchronisation dessus. La base de données de hachages est gérée automatiquement — RcloneView et rclone s'occupent de la comptabilité, et vous interagissez avec le remote Hasher exactement comme vous le feriez avec le stockage sous-jacent. Aucun changement de flux de travail n'est nécessaire de votre côté.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## Exécuter des transferts vérifiés par intégrité

Une fois le remote Hasher configuré, activez l'option **Enable checksum** à l'étape 2 (Paramètres avancés) de l'assistant de tâche de synchronisation de RcloneView. Cela indique à rclone de comparer les fichiers à l'aide des valeurs de hachage mises en cache plutôt que de se baser uniquement sur la taille et l'horodatage. Lors de la première exécution, les hachages sont calculés et stockés. Les exécutions suivantes se comparent à ces hachages stockés, évitant un nouveau calcul pour les fichiers inchangés — ce qui maintient des temps de synchronisation rapides même sur de grandes archives.

La fonction Dry Run fonctionne parfaitement avec les remotes Hasher. Avant de lancer une synchronisation d'archive volumineuse, effectuez un essai à blanc pour prévisualiser exactement quels fichiers seraient copiés, modifiés ou ignorés en fonction de la comparaison par hachage. C'est précieux avant d'écraser des mois de séquences archivées, et cela ne coûte rien — aucun fichier n'est déplacé tant que vous n'avez pas confirmé.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Dans l'onglet Remote, cliquez sur Nouveau remote et sélectionnez Hasher dans la section des remotes virtuels.
3. Enveloppez votre remote cloud existant — WebDAV, FTP ou tout backend dépourvu de sommes de contrôle natives — avec le remote Hasher.
4. Créez une tâche de synchronisation, activez la comparaison par somme de contrôle à l'étape 2 des Paramètres avancés, et lancez votre première sauvegarde vérifiée par intégrité.

Protéger vos archives contre la corruption silencieuse ne prend que quelques minutes de configuration, et le remote Hasher rend cette protection disponible pour chaque backend pris en charge par RcloneView.

---

**Guides connexes :**

- [Vérifier et contrôler l'intégrité des fichiers cloud avec RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Chiffrer les sauvegardes cloud avec le remote Crypt dans RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Remotes virtuels : Combine, Union et Alias dans RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
