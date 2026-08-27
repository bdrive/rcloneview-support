---
slug: migrate-gofile-to-google-drive-rcloneview
title: "Migrer de Gofile vers Google Drive — Transférer des fichiers avec RcloneView"
authors:
  - steve
description: "Déplacez des fichiers de Gofile vers Google Drive avec RcloneView — connectez les deux remotes, transférez directement de cloud à cloud, et automatisez les récupérations récurrentes."
keywords:
  - migrer Gofile vers Google Drive
  - transfert Gofile vers Google Drive
  - déplacer des fichiers Gofile vers Google Drive
  - migration RcloneView Gofile
  - configuration du jeton d'accès Gofile
  - outil de transfert cloud à cloud
  - synchronisation Gofile Google Drive
  - consolider le stockage cloud
  - transfert de fichiers inter-cloud
  - gestion de fichiers Gofile
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Gofile vers Google Drive — Transférer des fichiers avec RcloneView

> Récupérez directement dans Google Drive les fichiers livrés via Gofile avec RcloneView, sans les télécharger localement au préalable ni jongler entre les onglets du navigateur.

Gofile est un point de dépôt courant pour le partage ponctuel de fichiers — un client envoie un lot d'assets, un prestataire téléverse des livrables, un lien de téléchargement circule dans une équipe. Mais ce n'est pas là que ce contenu doit vivre à long terme. RcloneView connecte à la fois Gofile et Google Drive comme remotes dans la même fenêtre, de sorte que sortir des fichiers de Gofile pour les mettre dans un stockage Google Drive permanent et organisé devient un transfert direct plutôt qu'un aller-retour de téléchargement puis re-téléversement.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Gofile et Google Drive

Gofile utilise une saisie d'identifiants plutôt qu'OAuth : générez un jeton d'accès depuis la page de profil de votre compte Gofile et collez-le dans l'écran New Remote. Google Drive, en revanche, utilise OAuth basé sur le navigateur — cliquez à travers l'assistant New Remote et authentifiez-vous dans la fenêtre contextuelle, sans jeton à copier. Ajoutez les deux comme remotes séparés et ils apparaîtront comme des onglets que vous pourrez ouvrir dans des panneaux Explorer adjacents.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des remotes Gofile et Google Drive dans RcloneView" class="img-large img-center" />

Contrairement aux outils qui ne font que du montage, RcloneView synchronise et compare également les dossiers entre remotes — avec la licence FREE — de sorte que cette même configuration à deux remotes couvre aussi bien un nettoyage ponctuel qu'une routine de récupération continue.

## Transférer des fichiers directement entre remotes

Ouvrez Gofile dans le panneau de gauche et Google Drive dans celui de droite, puis sélectionnez les fichiers ou dossiers à déplacer. Glisser entre deux remotes différents copie plutôt que déplace, donc rien ne disparaît de Gofile tant que vous ne le supprimez pas explicitement — utile si vous voulez confirmer que le transfert s'est bien déroulé avant de nettoyer la source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfert de fichiers de Gofile vers Google Drive dans RcloneView" class="img-large img-center" />

Pour les lots plus importants, faites un clic droit et utilisez Copy ou Download plutôt que le glisser-déposer — l'onglet Transferring dans l'Info View en bas affiche la progression en direct, la vitesse de transfert et le nombre de fichiers, afin que vous puissiez confirmer que tout est bien arrivé avant de fermer l'application.

## Automatiser les récupérations récurrentes

Si Gofile continue de recevoir de nouvelles livraisons — remises récurrentes de clients, exports programmés — une tâche de synchronisation enregistrée vaut mieux que de répéter le transfert manuel à chaque fois. L'assistant en quatre étapes du Job Manager vous permet de définir Gofile comme source et un dossier Google Drive spécifique comme destination, d'appliquer un filtre d'ancienneté maximale des fichiers pour ne récupérer que les téléversements récents, et d'exécuter un Dry Run pour prévisualiser exactement ce qui serait copié avant que quoi que ce soit ne bouge réellement.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de synchronisation récurrente de Gofile vers Google Drive dans RcloneView" class="img-large img-center" />

Job History enregistre ensuite chaque exécution — statut, nombre de fichiers, durée — afin que vous puissiez confirmer qu'une récupération planifiée s'est terminée sans avoir à ouvrir l'application pour vérifier.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Gofile comme remote en utilisant votre jeton d'accès depuis la page de compte Gofile.
3. Ajoutez Google Drive comme remote via la connexion OAuth dans le navigateur.
4. Ouvrez les deux côte à côte dans des panneaux Explorer et glissez votre premier lot, ou créez une tâche de synchronisation pour tout ce qui est récurrent.

Une fois les deux remotes réunis dans la même fenêtre, faire sortir du contenu de Gofile pour l'organiser dans Google Drive ne dépend plus de la durée de validité d'un lien de partage.

---

**Guides connexes :**

- [Gérer le stockage Gofile — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Gérer les fichiers Google Drive et la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Résoudre le quota de stockage Google Drive dépassé — Transférer des fichiers avec RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
