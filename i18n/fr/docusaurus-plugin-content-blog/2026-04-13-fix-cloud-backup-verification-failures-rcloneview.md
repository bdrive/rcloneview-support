---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "Résoudre les échecs de vérification des sauvegardes cloud — Garantir l'intégrité des données avec RcloneView"
authors:
  - tayson
description: "Résolvez les incohérences de somme de contrôle et les échecs de vérification des sauvegardes cloud dans RcloneView. Utilisez Folder Compare, vérifiez les paramètres et relancez les transferts pour garantir l'intégrité des données."
keywords:
  - échec de vérification de sauvegarde cloud RcloneView
  - incohérence de somme de contrôle synchronisation cloud
  - corriger l'erreur d'intégrité de sauvegarde rclone
  - erreur de somme de contrôle transfert cloud
  - vérification de l'intégrité des données RcloneView
  - échec de vérification de somme de contrôle rclone
  - correction de corruption de sauvegarde rclone
  - dépannage de la vérification de synchronisation cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les échecs de vérification des sauvegardes cloud — Garantir l'intégrité des données avec RcloneView

> Les incohérences de somme de contrôle après un transfert cloud peuvent indiquer des différences entre fournisseurs ou une véritable corruption — comprendre le scénario en jeu détermine la bonne solution.

Après la fin d'une sauvegarde volumineuse, vous pouvez rencontrer des échecs de vérification : incohérences de somme de contrôle, fichiers marqués comme différents alors qu'ils devraient être identiques, ou erreurs dans les outils de comparaison de RcloneView. Ces échecs peuvent avoir plusieurs causes, allant de différences bénignes de métadonnées entre fournisseurs à une véritable corruption des données. Ce guide explique comment diagnostiquer chaque scénario et appliquer la bonne solution.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre les types de sommes de contrôle

Différents fournisseurs cloud prennent en charge différents algorithmes de somme de contrôle. AWS S3 utilise MD5 (pour les téléversements standards) et SHA-256 (pour les sommes de contrôle). Google Drive utilise MD5. Backblaze B2 utilise SHA1. Dropbox utilise un hachage de bloc personnalisé. Lorsque rclone compare des fichiers entre deux fournisseurs utilisant des algorithmes de hachage différents, il se rabat sur une comparaison de taille et de date de modification plutôt que sur une comparaison de hachage.

Cela signifie qu'une « incohérence » dans la vue Folder Compare de RcloneView n'indique pas forcément une corruption — elle peut indiquer que les fournisseurs utilisent des types de hachage incompatibles et que rclone compare uniquement par taille. Une véritable corruption se manifeste par des tailles identiques mais des valeurs de hachage différentes sur le même algorithme.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## Activer la vérification par somme de contrôle dans les tâches de synchronisation

Pour détecter une véritable corruption au moment du transfert, activez la vérification par somme de contrôle dans les paramètres de votre tâche de synchronisation. Dans RcloneView, ouvrez la tâche et allez à l'étape 2. Activez l'option **checksum**. Une fois cette option activée, rclone calcule et compare les hachages pendant le transfert. Si le hachage d'un fichier ne correspond pas après le téléversement, rclone relance le transfert.

Remarque : l'activation de la vérification par somme de contrôle augmente légèrement l'utilisation du processeur et le temps de transfert, mais elle permet de détecter une corruption de données qui passerait autrement inaperçue.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## Utiliser Folder Compare pour détecter les incohérences

Une fois la sauvegarde terminée, ouvrez **Folder Compare** dans RcloneView. Pointez un côté vers votre source et l'autre vers la destination de sauvegarde. RcloneView affiche les fichiers dans trois catégories :

- **Match** : identique des deux côtés
- **Source only** : existe à la source mais absent à la destination
- **Destination only** : existe à la destination mais pas à la source
- **Different** : même nom mais attributs différents (taille, hachage ou date de modification)

Les fichiers dans la catégorie « Different » méritent un examen plus approfondi. Téléchargez et comparez un échantillon pour déterminer si le contenu est réellement différent ou s'il s'agit d'un artefact de métadonnées propre au fournisseur.

## Exécuter une vérification via le terminal

Pour une vérification approfondie de l'intégrité, l'onglet **Terminal** de RcloneView vous permet d'exécuter directement des commandes rclone. Utilisez `rclone check` pour comparer minutieusement la source et la destination :

```
rclone check source:path destination:path --one-way
```

Cette commande liste chaque fichier qui diffère entre les deux côtés, en utilisant le meilleur hachage disponible pour chaque fournisseur. Le résultat indique précisément quels fichiers présentent des incohérences, ce qui permet de déterminer plus facilement si le problème est systématique ou isolé.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## Relancer avec des paramètres différents

Si les échecs de vérification persistent et que les fichiers diffèrent réellement, relancez la tâche de sauvegarde avec :

- **Vérification par somme de contrôle activée** : garantit que rclone retransfère et valide les fichiers
- **Ignore existing** : force le retransfert même pour les fichiers qui semblent présents
- **Low level retries augmentées** : offre plus de chances de réussite des transferts

Pour les sauvegardes entre fournisseurs différents où les algorithmes de hachage diffèrent, passez au mode de comparaison **taille et date de modification** au lieu de la comparaison par hachage uniquement, dans les paramètres avancés de la tâche. Cela réduit les faux positifs liés à l'incompatibilité des hachages.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activez la **vérification par somme de contrôle** dans les options de transfert de l'étape 2 de votre tâche de synchronisation.
3. Une fois la sauvegarde terminée, utilisez **Folder Compare** pour identifier les éventuelles divergences.
4. Pour une analyse plus poussée, exécutez `rclone check` depuis l'onglet **Terminal**.

Une vérification systématique par somme de contrôle et une comparaison post-sauvegarde vous donnent l'assurance que vos sauvegardes cloud sont exactes au bit près.

---

**Guides connexes :**

- [Résoudre les incohérences de somme de contrôle en synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Migrations cloud vérifiées par somme de contrôle avec RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Résoudre les fichiers manquants après un transfert de synchronisation cloud](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
