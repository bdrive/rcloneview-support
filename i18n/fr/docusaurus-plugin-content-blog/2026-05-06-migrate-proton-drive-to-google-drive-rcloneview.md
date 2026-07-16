---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "Migrer de Proton Drive vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez vos fichiers de Proton Drive vers Google Drive avec RcloneView. Transférez des données cloud chiffrées directement entre fournisseurs — sans téléchargement manuel, en conservant toute la structure des dossiers."
keywords:
  - migrer Proton Drive vers Google Drive
  - transfert Proton Drive Google Drive
  - migration RcloneView Proton Google Drive
  - outil de migration Proton Drive
  - déplacer des fichiers Proton Drive Google Drive
  - interface graphique de migration cloud Proton Drive
  - importer Proton Drive vers Google Drive
  - migration cloud à cloud
  - outil de transfert de fichiers Proton Drive
  - synchronisation RcloneView Proton Drive
tags:
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Proton Drive vers Google Drive — Transférer des fichiers avec RcloneView

> RcloneView migre le contenu de votre Proton Drive vers Google Drive directement dans le cloud — en déchiffrant les fichiers à la volée et en les téléversant sans rien stocker localement.

Le chiffrement de bout en bout de Proton Drive en fait une plateforme de stockage de confiance pour les utilisateurs soucieux de leur confidentialité. Lors d'un passage à un environnement d'équipe basé sur Google Workspace, migrer des documents, photos et ressources de projet de Proton Drive vers Google Drive est un besoin courant. RcloneView gère cette migration efficacement, en se connectant aux deux fournisseurs et en coordonnant le transfert via une seule tâche de synchronisation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Proton Drive et Google Drive dans RcloneView

Ajouter Proton Drive comme remote nécessite rclone v1.69 ou une version ultérieure — ce que le rclone intégré de RcloneView satisfait par défaut. Accédez à l'onglet Remote > Nouveau Remote, sélectionnez Proton Drive, puis saisissez l'e-mail et le mot de passe de votre compte Proton. Si vous avez activé l'authentification à deux facteurs, le code 2FA vous sera également demandé.

Pour Google Drive, sélectionnez Google Drive et effectuez le flux OAuth dans le navigateur. Les deux remotes apparaissent dans l'explorateur de fichiers de RcloneView une fois configurés. Ouvrez Proton Drive et Google Drive côte à côte dans la vue à deux panneaux pour évaluer l'étendue de la migration.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configurer la tâche de migration

Créez une tâche de copie ou de synchronisation avec Proton Drive comme source et votre dossier Google Drive comme destination. Dans l'assistant de synchronisation de RcloneView :

- **Mode :** Choisissez Copier pour déplacer les fichiers sans les supprimer de Proton Drive (en gardant votre original comme sauvegarde pendant la migration)
- **Filtrage :** Utilisez le filtre prédéfini Google Docs pour éviter les problèmes d'incompatibilité de types de fichiers
- **Somme de contrôle :** Activez-la pour vérifier l'intégrité des fichiers transférés

Le chiffrement de Proton Drive signifie que rclone déchiffre le contenu pendant le téléchargement et retéléverse le texte en clair vers Google Drive. Vérifiez que votre dossier de destination Google Drive dispose d'un quota suffisant avant de démarrer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## Exécuter un essai à blanc et prévisualiser

Utilisez toujours le mode d'essai à blanc (dry run) avant d'exécuter une migration de grande envergure. Le dry run de RcloneView analyse la source Proton Drive et liste chaque fichier qui serait transféré — vous donnant le nombre de fichiers, un aperçu de la structure des dossiers et des estimations de taille de transfert avant de vous engager. Cela permet d'identifier les dossiers que vous voudriez exclure, comme les versions internes de fichiers ou les liens partagés de Proton Drive.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## Suivre la progression et valider les résultats

L'onglet Transfert de RcloneView affiche la progression de la migration en temps réel. Le stockage chiffré de Proton Drive ajoute une certaine surcharge de traitement par rapport aux fournisseurs en texte clair, donc les transferts peuvent être légèrement plus lents que des opérations équivalentes entre deux comptes Google Drive. Une fois la tâche terminée, l'historique des tâches affiche le résumé complet : fichiers migrés, octets transférés, durée et erreurs.

Comparez le nombre de fichiers et les tailles dans Google Drive avec votre source Proton Drive pour valider que la migration s'est terminée avec succès.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Proton Drive (e-mail + mot de passe) et Google Drive (OAuth) comme remotes.
3. Créez une tâche de copie de Proton Drive vers votre dossier de destination Google Drive.
4. Lancez un essai à blanc pour confirmer l'étendue, puis exécutez la migration complète.

Avec RcloneView, migrer de Proton Drive vers Google Drive est un processus simple — avec suivi de la progression et un journal d'historique de transfert détaillé.

---

**Guides connexes :**

- [Gérer le stockage Proton Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migrer de Proton Drive vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [Gérer le stockage Google Drive — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
