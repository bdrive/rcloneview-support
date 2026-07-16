---
slug: rcloneview-connection-manager-embedded-external
title: "RcloneView Connection Manager : basculez entre rclone intégré et externe pour des opérations cloud plus sûres"
authors:
  - tayson
description: "Utilisez RcloneView Connection Manager pour basculer entre des instances rclone intégrées et externes, isoler vos environnements et exécuter des workflows plus sûrs et auditables."
keywords:
  - rcloneview connection manager
  - embedded rclone
  - external rclone
  - rclone rcd gui
  - rcloneview remote control
  - rclone instance switch
  - cloud automation gui
  - rcloneview workflow
  - rclone gui
  - rcloneview enterprise
tags:
  - sync
  - file-management
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Connection Manager : basculez entre rclone intégré et externe pour des opérations cloud plus sûres

> Besoin d'une séparation nette entre vos tâches personnelles, vos données de production et vos environnements de test ? RcloneView Connection Manager vous permet de basculer entre instances rclone en quelques secondes -- sans risque lié à la ligne de commande.

RcloneView intègre un moteur rclone embarqué, mais il peut aussi se connecter à des instances rclone externes (locales, distantes ou en conteneur). Cela vous offre un moyen sûr d'isoler vos environnements, de tester des modifications et d'opérer à l'échelle de l'entreprise sans réécrire vos configurations ni jongler entre plusieurs terminaux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi Connection Manager est important

La plupart des utilisateurs de rclone finissent par rencontrer l'un de ces problèmes :

- Un test modifie des remotes de production
- Une machine nécessite des identifiants différents d'une autre
- Vous souhaitez qu'un serveur distant effectue les transferts pendant que votre PC reste propre

Connection Manager résout ce problème en vous permettant de basculer entre des instances rclone **intégrées** et **externes** en un seul clic.

## rclone intégré vs externe (modèle mental rapide)

- **rclone intégré** : livré avec l'application, local et toujours disponible
- **rclone externe** : géré par l'utilisateur, peut s'exécuter sur un serveur, un NAS ou une machine distincte

C'est la base de workflows sûrs : isoler les environnements plutôt que de les mélanger.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="Embedded rclone model" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="External rclone model" class="img-large img-center" />
</div>

## Ce que fait Connection Manager

Connection Manager vous permet de :

- Voir toutes les instances rclone disponibles
- Vous connecter à une instance à la fois
- Basculer instantanément entre intégré et externe
- Conserver des configurations isolées par instance

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="Connection Manager with embedded rclone" class="img-large img-center" />

## Pourquoi ce workflow a une forte valeur pour les équipes

### 1) Tests et validations plus sûrs

Utilisez une instance externe pour tester des modifications sans toucher aux remotes de production.

### 2) Séparation nette des environnements

Exécutez une instance pour la préproduction, une autre pour la production. Aucune configuration mélangée.

### 3) Calcul distant pour les transferts lourds

Laissez un serveur ou un NAS gérer les gros transferts pendant que votre poste de travail reste léger.

### 4) Récupération plus rapide après une erreur

Si une instance externe tombe en panne ou se comporte mal, revenez instantanément à l'instance intégrée.

## Étape par étape : ajouter une connexion rclone externe

1) Ouvrez **Settings -> Connection Manager**.
2) Cliquez sur **New Connection**.
3) Saisissez l'adresse distante pour `rclone rcd`.

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="New connection form" class="img-large img-center" />

Une fois ajoutée, vous pouvez connecter, modifier ou supprimer l'entrée.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="External rclone added" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="External rclone selected" class="img-large img-center" />
</div>

Guide : [/support/howto/rcloneview-basic/connection-manager](/howto/rcloneview-basic/connection-manager)

## Cas d'usage typiques

### Isolation personnel vs professionnel

Conservez vos remotes personnels en intégré et vos remotes professionnels en externe.

### Transferts côté serveur

Exécutez rclone sur un serveur (EC2, NAS ou Docker). Utilisez RcloneView comme interface de contrôle.

### Opérations multi-fenêtres

Ouvrez une nouvelle fenêtre RcloneView pour gérer une autre instance sans avoir à basculer.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="Open new RcloneView window" class="img-large img-center" />

## Bonnes pratiques pour des workflows fiables

- Nommez clairement vos instances externes (par ex. `Prod-Rclone`, `Lab-Rclone`).
- Associez les planifications de tâches à la bonne instance.
- Utilisez Compare avant Sync lorsque vous changez d'environnement.
- Documentez quels remotes se trouvent dans chaque instance.

## Erreurs courantes à éviter

- Exécuter des tâches de production sur une instance de test
- Partager une seule instance externe entre équipes non liées
- Oublier quelle instance est actuellement active

Connection Manager corrige la plupart de ces problèmes grâce à un contexte visuel et à un basculement rapide.

## Conclusion

RcloneView Connection Manager transforme rclone en un système sûr et multi-environnement. L'instance intégrée est parfaite pour un usage quotidien. L'instance externe est idéale pour l'isolation, les transferts côté serveur et les workflows d'entreprise. Basculez selon vos besoins et gardez des opérations propres.

<CloudSupportGrid />
