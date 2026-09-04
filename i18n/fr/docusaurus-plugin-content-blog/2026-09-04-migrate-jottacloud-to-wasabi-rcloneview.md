---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "Migrer de Jottacloud vers Wasabi — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Migrez des fichiers de Jottacloud vers le stockage objet Wasabi avec RcloneView, en utilisant des aperçus Dry Run et une vérification par somme de contrôle pour un transfert sécurisé."
keywords:
  - migrer jottacloud vers wasabi
  - transfert jottacloud vers wasabi
  - migration jottacloud wasabi
  - rcloneview jottacloud
  - rcloneview wasabi
  - déplacer fichiers jottacloud wasabi
  - outil de migration cloud à cloud
  - migration de stockage objet wasabi
  - sauvegarde jottacloud wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Jottacloud vers Wasabi — Transférer des fichiers avec RcloneView

> Déplacez vos fichiers Jottacloud directement vers le stockage objet à faible coût de Wasabi, sans rien télécharger au préalable sur un disque local.

Les équipes qui quittent un cloud grand public comme Jottacloud pour un stockage objet à long terme moins cher se heurtent souvent à un obstacle : leurs fichiers se trouvent dans un compte cloud personnel hébergé en Norvège, et leur nouvelle destination est un bucket compatible S3 avec un modèle d'accès complètement différent. RcloneView comble cet écart dans une seule fenêtre, en vous permettant de connecter les deux services en tant que distants et de transférer directement entre eux, de cloud à cloud, sans détour par un stockage local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter les deux distants dans RcloneView

Commencez par ajouter Jottacloud comme distant via le flux de connexion OAuth basé sur le navigateur, puis ajoutez Wasabi comme distant compatible S3 en utilisant votre Access Key ID, votre Secret Access Key et le bon point de terminaison régional. Les deux distants apparaissent comme des onglets séparés dans le panneau Explorer, et vous pouvez ouvrir Jottacloud à gauche et Wasabi à droite en utilisant une disposition à deux panneaux.

Contrairement aux outils de montage seul, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE. Cela signifie que vous n'êtes pas limité à de simples copies par glisser-déposer ; vous bénéficiez du moteur de synchronisation complet, du filtrage et des outils Dry Run pour cette migration.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un nouveau distant dans RcloneView pour une migration cloud à cloud" class="img-large img-center" />

## Aperçu de la migration avec Dry Run

Avant de déplacer quoi que ce soit, configurez une tâche de synchronisation avec Jottacloud comme source et votre bucket Wasabi cible comme destination. Réglez la direction de synchronisation sur unidirectionnelle « Modifying destination only » afin que rien ne soit modifié sur Jottacloud. Exécutez d'abord la tâche en mode Dry Run — RcloneView affiche précisément quels fichiers seront copiés sans transférer le moindre octet, ce qui est essentiel lorsque vous migrez une structure de dossiers que vous n'avez pas entièrement auditée depuis des années.

Si votre compte Jottacloud contient de grandes bibliothèques multimédias ou des archives dont vous n'avez pas besoin dans le nouveau bucket, utilisez l'étape de filtrage pour exclure des types de fichiers ou définir une taille de fichier maximale avant que le transfert réel ne commence.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert cloud à cloud de Jottacloud vers Wasabi dans RcloneView" class="img-large img-center" />

## Vérifier et surveiller le transfert

Une fois que le Dry Run semble correct, activez la comparaison par somme de contrôle dans l'étape Advanced Settings afin que RcloneView compare les fichiers par hachage et taille plutôt que par simple date de modification — important lorsqu'on se déplace entre deux backends de stockage très différents. Démarrez la tâche et basculez vers l'onglet Transferring dans l'Info View en bas pour suivre en direct la progression, la vitesse de transfert et le nombre de fichiers à mesure que les données arrivent dans Wasabi.

Pour les grandes bibliothèques, ajustez le nombre de transferts de fichiers et les paramètres de transfert multithread pour mieux exploiter votre bande passante, et laissez Job History enregistrer l'exécution complète pour référence ultérieure.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Examen de l'historique des tâches après une migration de Jottacloud vers Wasabi" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Jottacloud comme distant via une connexion OAuth, puis ajoutez Wasabi comme distant compatible S3 avec votre Access Key ID et votre Secret Access Key.
3. Créez une tâche de synchronisation unidirectionnelle de Jottacloud vers votre bucket Wasabi et exécutez un Dry Run pour prévisualiser les fichiers exacts à copier.
4. Activez la vérification par somme de contrôle, exécutez la synchronisation réelle, puis confirmez le transfert terminé dans Job History.

Migrer d'un cloud généraliste vers un stockage objet dédié ne signifie pas jongler entre applications séparées ou subir un lent nouveau téléversement local — RcloneView gère l'ensemble du trajet dans une seule interface.

---

**Guides associés :**

- [Corriger les erreurs de synchronisation Jottacloud — Comment résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [Gérer le stockage Wasabi — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrer de Backblaze B2 vers Wasabi — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
