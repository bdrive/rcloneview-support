---
slug: sync-google-photos-to-wasabi-rcloneview
title: "Synchroniser Google Photos vers Wasabi — Sauvegarde d'archive photo abordable avec RcloneView"
authors:
  - steve
description: "Découvrez comment synchroniser et sauvegarder votre bibliothèque Google Photos vers le stockage compatible S3 Wasabi avec RcloneView — une archive photo hors site redondante et abordable."
keywords:
  - synchroniser Google Photos vers Wasabi
  - sauvegarde Google Photos Wasabi
  - sauvegarde Google Photos RcloneView
  - stockage d'archive photo Wasabi
  - sauvegarde photo cloud abordable
  - sauvegarde hors site Google Photos
  - rclone Google Photos Wasabi
  - sauvegarde de bibliothèque photo cloud
tags:
  - google-photos
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Photos vers Wasabi — Sauvegarde d'archive photo abordable avec RcloneView

> Protégez des années de photos irremplaçables en synchronisant votre bibliothèque Google Photos vers le stockage compatible S3 Wasabi — redondant, hors site et économique.

Google Photos est l'endroit où des millions de personnes stockent leurs bibliothèques photo, mais dépendre d'une seule plateforme pour des souvenirs irremplaçables comporte un risque réel. Les quotas de stockage se remplissent, les politiques de compte changent, et l'accès peut être révoqué avec peu de préavis. Synchroniser vers Wasabi — un service de stockage objet compatible S3 — crée une copie hors site fiable et indépendante que vous contrôlez entièrement. RcloneView connecte les deux services dans une interface visuelle à deux panneaux, rendant les transferts photo cloud-à-cloud simples sans aucune configuration en ligne de commande.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Google Photos et Wasabi dans RcloneView

Commencez par ajouter Google Photos comme distant. Ouvrez l'onglet **Remote**, cliquez sur **New Remote**, et sélectionnez Google Photos dans la liste des fournisseurs. RcloneView ouvre une fenêtre de navigateur pour l'authentification OAuth — connectez-vous avec votre compte Google et accordez l'accès. Vos photos et albums deviennent immédiatement consultables dans le panneau explorateur.

Ensuite, ajoutez Wasabi comme distant compatible S3. Cliquez à nouveau sur **New Remote**, sélectionnez Amazon S3 comme type, et choisissez Wasabi comme fournisseur. Saisissez votre clé d'accès Wasabi, votre clé secrète, et le point de terminaison régional. Créez au préalable un bucket de destination dans la console Wasabi pour qu'il soit prêt à recevoir des fichiers. Une fois les deux distants enregistrés, vous pouvez parcourir votre bibliothèque Google Photos dans un panneau et votre bucket Wasabi dans l'autre.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView fournit un accès complet en lecture/écriture aux fournisseurs compatibles S3 comme Wasabi dans la licence GRATUITE — en faisant une destination de sauvegarde performante sans mise à niveau de votre offre.

## Créer et exécuter la tâche de synchronisation

Avec les deux distants visibles dans l'explorateur, ouvrez **Job Manager** et créez une nouvelle tâche de synchronisation. Définissez Google Photos comme source et votre bucket Wasabi comme destination. Dans l'étape des paramètres avancés, activez la **vérification par somme de contrôle** — cela compare les fichiers transférés par hachage de contenu plutôt que par la seule taille, détectant toute corruption durant le transfert.

Avant d'exécuter la synchronisation complète, utilisez **Dry Run** pour prévisualiser la liste complète des fichiers. Pour une bibliothèque photo constituée au fil des années, une exécution à blanc vous aide à comprendre le volume de données concerné et à vérifier que vos paramètres de filtre — le cas échéant — sont correctement configurés.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## Suivre la progression du transfert en direct

Une fois la tâche lancée, l'onglet **Transferring** en bas de RcloneView affiche la progression en direct : vitesse de transfert, fichiers terminés, et taille totale déplacée. Pour un photographe avec plus de 80 000 originaux, la synchronisation initiale peut durer plusieurs heures — les exécutions suivantes ne transfèrent que les fichiers nouveaux ou modifiés, gardant la sauvegarde incrémentielle rapide.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History** enregistre chaque exécution avec l'heure de début, la durée, le nombre de fichiers et le statut. La consulter périodiquement confirme que vos sauvegardes se terminent avec succès et vous permet de repérer rapidement toute erreur récurrente.

## Planifier des sauvegardes régulières avec PLUS

Avec une licence PLUS, vous pouvez planifier la synchronisation de Google Photos vers Wasabi pour qu'elle s'exécute automatiquement selon n'importe quel planning crontab — quotidien, hebdomadaire, ou à une heure précise. L'outil Simulate Schedule prévisualise les prochaines heures d'exécution avant d'enregistrer la tâche, afin que vous puissiez vérifier que la cadence correspond à votre flux de travail.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

Un photographe de mariage sauvegardant les galeries de ses clients, par exemple, peut planifier une tâche nocturne pour envoyer les nouvelles livraisons de Google Photos vers un bucket d'archive Wasabi — sans intervention manuelle nécessaire après chaque séance.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Google Photos via **New Remote** (connexion OAuth par navigateur).
3. Ajoutez Wasabi via **New Remote** — sélectionnez Amazon S3, choisissez Wasabi comme fournisseur, et saisissez vos identifiants.
4. Créez une tâche de synchronisation dans **Job Manager** avec Google Photos comme source et votre bucket Wasabi comme destination.

Votre bibliothèque Google Photos gagne une archive hors site abordable et contrôlée de manière indépendante, qui garde vos souvenirs en sécurité au-delà de toute plateforme unique.

---

**Guides connexes :**

- [Synchroniser Google Photos vers Backblaze B2 avec RcloneView](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [Gérer le stockage Google Photos — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Gérer le stockage cloud Wasabi avec RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
