---
slug: alias-remote-shortcut-paths-rcloneview
title: "Remote Alias — Créez des raccourcis vers des dossiers cloud profonds avec RcloneView"
authors:
  - tayson
description: "Découvrez comment utiliser la fonctionnalité de remote alias de rclone pour créer des raccourcis vers des dossiers cloud imbriqués et améliorer votre productivité avec RcloneView."
keywords:
  - alias remote
  - rclone alias
  - raccourcis de dossiers
  - raccourcis de dossiers cloud
  - accès aux dossiers imbriqués
  - configuration des remotes rclone
  - raccourcis de productivité
  - raccourcis de dossiers rclone
  - accès rapide aux dossiers
  - organisation du cloud
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Alias — Créez des raccourcis vers des dossiers cloud profonds avec RcloneView

> Fatigué de naviguer à travers d'innombrables dossiers pour atteindre vos répertoires cloud les plus utilisés ? Créez des raccourcis avec les remotes alias et accédez-y instantanément.

Les hiérarchies de stockage cloud peuvent devenir difficiles à gérer. Trouver ce dossier de projet profondément imbriqué ou ce répertoire d'équipe partagé nécessite plusieurs clics. La fonctionnalité de remote alias de rclone résout ce problème en créant des raccourcis — des alias — qui pointent directement vers des dossiers spécifiques.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce qu'un remote alias ?

Un remote alias est un remote virtuel qui pointe vers un sous-dossier d'un autre remote. Au lieu de naviguer dans `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`, vous créez un alias appelé `smith-vs-jones` qui pointe directement vers cet emplacement.

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

Dans RcloneView, vous voyez alors `smith-vs-jones` comme un remote distinct dans votre liste de remotes, ce qui vous permet d'accéder à ce dossier en un clic. Ce remote virtuel se comporte exactement comme un remote réel : vous pouvez copier, déplacer et synchroniser des fichiers en utilisant l'alias comme point de départ.

## Créer un remote alias

Configurez les remotes alias dans votre fichier de configuration rclone en spécifiant le remote de base et le chemin du sous-dossier. RcloneView affiche tous les remotes alias configurés aux côtés de vos comptes cloud standards.

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

Par exemple, créez un alias pointant vers `/GoogleDrive/Archive/2025` appelé `archive-2025`, puis accédez-y directement depuis le sélecteur de remote de RcloneView. L'alias agit comme un raccourci pratique sans dupliquer les données ni nécessiter de stockage particulier.

## Améliorez votre productivité

Les cas d'usage courants incluent :

- Dossiers spécifiques à un projet pour un accès rapide pendant le travail actif
- Répertoires clients pour les cabinets juridiques ou d'affaires nécessitant un accès fréquent
- Dossiers d'équipe partagés que plusieurs projets consultent régulièrement
- Dossiers d'archive ou de sauvegarde consultés moins fréquemment mais nécessitant une récupération facile
- Répertoires de travail temporaires pour des workflows ou campagnes spécifiques

Chaque alias réduit les étapes de navigation et permet à votre workflow de rester concentré sur l'essentiel. Les équipes peuvent partager des configurations d'alias pour garantir que chacun accède efficacement aux mêmes structures de projet.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez les remotes alias dans votre configuration rclone (en les faisant pointer vers des sous-répertoires fréquemment utilisés).
3. Lancez RcloneView et voyez vos nouveaux alias apparaître comme des remotes distincts.
4. Cliquez sur n'importe quel alias pour naviguer instantanément vers ce dossier.

Simplifiez votre navigation cloud et récupérez des heures de productivité.

---

**Guides connexes :**

- [Remotes virtuels — Combine et Union Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Gestion des remotes — Ajouter, modifier, supprimer](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [Remote Union — Combinez du stockage gratuit](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
