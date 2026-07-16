---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "Migrer de Dropbox vers Proton Drive — Transférer des fichiers avec RcloneView"
authors:
  - jay
description: "Déplacez vos fichiers Dropbox vers Proton Drive pour un stockage chiffré de bout en bout. Découvrez comment migrer de cloud à cloud avec RcloneView en quelques étapes simples."
keywords:
  - migrer Dropbox vers Proton Drive
  - transfert Dropbox vers Proton Drive
  - migration cloud à cloud RcloneView
  - sauvegarde Proton Drive
  - confidentialité migration Dropbox
  - déplacer des fichiers Dropbox Proton Drive
  - migration de stockage cloud chiffré
  - guide de transfert cloud RcloneView
  - passer de Dropbox à Proton Drive
  - synchronisation Proton Drive RcloneView
tags:
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Dropbox vers Proton Drive — Transférer des fichiers avec RcloneView

> RcloneView vous permet de transférer toute votre bibliothèque Dropbox vers Proton Drive directement de cloud à cloud — sans téléchargement local, sans re-téléversement manuel, et sans ligne de commande.

Pour de nombreuses équipes, la décision de quitter Dropbox repose sur la confidentialité des données. Dropbox stocke les fichiers en clair sur ses serveurs, ce qui signifie que les employés de Dropbox et les autorités judiciaires peuvent accéder à vos données avec un mandat. Proton Drive, développé par l'équipe derrière ProtonMail, chiffre les fichiers côté client avant qu'ils n'atteignent les serveurs de Proton — même Proton ne peut pas lire votre contenu. RcloneView simplifie cette migration en se connectant simultanément aux deux services et en déplaçant les données directement de cloud à cloud, en préservant la structure des dossiers et l'intégrité des fichiers tout au long du processus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ajouter Dropbox et Proton Drive en tant que remotes

Avant de transférer des fichiers, ajoutez les deux comptes cloud à RcloneView. Allez dans **Remote tab > New Remote** et sélectionnez **Dropbox**. RcloneView ouvre une fenêtre de navigateur pour l'authentification OAuth — connectez-vous à Dropbox et accordez l'accès. Le remote est enregistré automatiquement une fois l'autorisation accordée.

Répétez le processus pour Proton Drive : sélectionnez **Proton Drive** dans la liste des remotes, saisissez votre adresse e-mail et votre mot de passe Proton. Si vous avez activé l'authentification à deux facteurs, saisissez le code lorsque vous y êtes invité. Le binaire rclone intégré à RcloneView prend en charge Proton Drive nativement (nécessite rclone v1.69+, qui est inclus). Une fois les deux remotes ajoutés, ils apparaissent sous forme d'onglets dans l'explorateur de fichiers à double volet.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Planifier la migration avec Folder Compare

Avant de transférer quoi que ce soit, utilisez l'outil **Folder Compare** de RcloneView pour évaluer ce qui se trouve dans Dropbox et ce qui existe déjà dans Proton Drive. Cliquez sur le bouton **Compare** dans l'onglet Home, définissez Dropbox comme source de gauche et Proton Drive comme source de droite. La vue de comparaison met en évidence les fichiers qui n'existent que dans Dropbox (left-only), les fichiers identiques des deux côtés, et les différences de taille — vous donnant une image claire de ce qui doit réellement être déplacé.

Cette étape est particulièrement utile si vous avez déjà copié manuellement certains fichiers vers Proton Drive et que vous souhaitez éviter de dupliquer le travail. Filtrez par « left-only » pour ne voir que ce qui manque dans Proton Drive, puis copiez ces éléments spécifiques.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## Exécuter le transfert cloud à cloud

Pour une migration complète, utilisez l'assistant **Sync**. Cliquez sur **Sync** dans l'onglet Home, définissez Dropbox comme source et Proton Drive comme destination, puis nommez la tâche (par exemple, `dropbox-proton-migration`). Choisissez **Copy** comme type de tâche pour préserver les originaux dans Dropbox tout en construisant la copie sur Proton Drive — cela conserve votre Dropbox intact jusqu'à ce que vous ayez vérifié la migration.

À l'étape 2 de l'assistant, activez la **vérification par checksum** pour confirmer que chaque fichier arrive sans corruption. C'est essentiel pour les documents sensibles où l'intégrité des données doit être garantie. Exécutez d'abord un **Dry Run** pour prévisualiser les fichiers qui seront transférés avant de valider, puis exécutez la tâche réelle.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## Suivre la progression et vérifier l'achèvement

Pendant que le transfert s'exécute, l'onglet **Transferring** en bas de RcloneView affiche en temps réel la vitesse de transfert, le nombre de fichiers et le pourcentage d'avancement. Les grandes bibliothèques Dropbox — les 50 000 documents clients d'un cabinet d'avocats, par exemple — peuvent prendre plusieurs heures ; la tâche continue en arrière-plan pendant que RcloneView se réduit dans la barre système.

Une fois la tâche terminée, relancez le Folder Compare pour confirmer qu'il n'y a plus aucun fichier « left-only ». Tout élément encore marqué « left-only » dans Dropbox signale un échec de transfert qui peut être relancé de manière sélective. Le **Job History** de RcloneView enregistre l'exécution complète avec l'heure de début, le nombre total d'octets, la vitesse et le statut — un enregistrement permanent adapté à la conformité ou aux audits informatiques.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Dropbox via OAuth et Proton Drive via e-mail/mot de passe dans **Remote tab > New Remote**.
3. Utilisez **Folder Compare** pour auditer les différences entre les deux comptes avant le transfert.
4. Créez une tâche de synchronisation Copy avec vérification par checksum et exécutez-la pour terminer la migration.

Avec les deux remotes connectés dans RcloneView, déplacer vos données de Dropbox vers Proton Drive devient une opération visuelle et facile à gérer — sans script, sans téléchargement intermédiaire, et avec une piste d'audit claire tout au long du processus.

---

**Guides connexes :**

- [Gérer le stockage cloud Dropbox avec RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Gérer la synchronisation cloud Proton Drive avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migrer de Dropbox vers Wasabi avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
