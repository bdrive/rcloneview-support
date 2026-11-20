---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrer iCloud Drive vers pCloud — Transférer vos fichiers avec RcloneView"
authors:
  - tayson
description: "Déplacez vos fichiers iCloud Drive vers pCloud avec RcloneView : connectez les deux distants, prévisualisez avec Dry Run, lancez une tâche de synchronisation cloud à cloud et vérifiez avec Folder Compare."
keywords:
  - iCloud Drive vers pCloud
  - migrer iCloud Drive vers pCloud
  - transfert iCloud vers pCloud
  - déplacer des fichiers depuis iCloud Drive
  - outil de migration pCloud
  - alternative à iCloud Drive sous Windows et Linux
  - migration cloud à cloud avec interface graphique
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer iCloud Drive vers pCloud — Transférer vos fichiers avec RcloneView

> Déplacez votre bibliothèque iCloud Drive vers pCloud sans jongler entre les fenêtres du Finder ni subir des envois par navigateur interrompus.

iCloud Drive est pratique tant que tous vos appareils sont des appareils Apple. Dès qu'un portable Windows ou une station de travail Linux entre en jeu, beaucoup d'utilisateurs cherchent un cloud qui se comporte de la même façon sur toutes les plateformes, et pCloud est une destination courante. RcloneView connecte les deux services dans une seule fenêtre, copie les données avec une tâche de synchronisation reproductible et vous permet de vérifier le résultat avant de résilier quoi que ce soit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter iCloud Drive et pCloud comme distants

Ouvrez l'onglet **Remote** et cliquez sur **New Remote**. Choisissez **iCloud Drive**, saisissez les identifiants de votre compte Apple et validez toute demande de vérification qu'Apple envoie à vos appareils. Le backend iCloud Drive de rclone ne fonctionne pas avec la Protection avancée des données (Advanced Data Protection) : ce réglage doit donc être désactivé sur votre compte Apple. La prise en charge d'iCloud Drive nécessite rclone v1.69 ou une version ultérieure ; le rclone intégré fourni avec RcloneView répond à cette exigence, il n'y a donc rien d'autre à installer.

Ajoutez ensuite **pCloud**. Il utilise OAuth : une fenêtre de navigateur s'ouvre, vous vous connectez et le distant est enregistré automatiquement. Aucune clé d'API n'est nécessaire.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

Une fois les deux distants enregistrés, ouvrez iCloud Drive dans le panneau Explorer de gauche et pCloud dans celui de droite. Faites un clic droit sur les dossiers iCloud que vous comptez déplacer et utilisez **Get Size** pour connaître le volume de données avant de commencer.

## Prévisualiser la migration avec Dry Run

Créez une tâche de synchronisation depuis l'onglet **Home**. Définissez le dossier iCloud Drive comme source et un nouveau dossier pCloud, par exemple `/From-iCloud`, comme destination. Conservez le sens unidirectionnel (« Modifying destination only ») afin qu'iCloud Drive ne soit jamais modifié.

Avant de l'exécuter, cliquez sur **Dry Run**. RcloneView liste chaque fichier qu'il copierait et tout ce qu'il supprimerait à la destination, sans déplacer un seul octet. C'est le moment de repérer les surprises : dossiers de paquets Mac, fichiers `.DS_Store` ou dossier oublié d'anciennes sauvegardes de téléphone. Ajoutez des filtres personnalisés à l'étape Step 3 pour exclure ce que vous ne voulez pas emporter.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

Gardez à l'esprit qu'il ne s'agit pas d'une copie côté serveur entre Apple et pCloud : les données transitent par la machine qui exécute RcloneView. Une connexion filaire et un ordinateur qui ne se met pas en veille aident donc une grosse migration à se terminer en une seule passe.

## Exécuter, surveiller et vérifier

Lancez la tâche et suivez dans l'onglet **Transferring** la progression, le nombre de fichiers et la vitesse actuelle. Si la connexion est interrompue, relancez simplement la même tâche. La synchronisation ne transfère que les fichiers manquants ou différents, donc les fichiers déjà terminés sont ignorés.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

Une fois la tâche terminée, ouvrez **Compare** avec iCloud Drive à gauche et pCloud à droite. Activez « Show left-only files » et « Show different files ». Un résultat vide signifie que la migration est complète. **Job History** conserve un historique de chaque exécution, avec son statut, sa taille et son nombre de fichiers.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## Pour commencer

RcloneView fonctionne sous Windows, macOS et Linux : une fois le déménagement terminé, vous pouvez gérer la nouvelle bibliothèque pCloud depuis n'importe lequel de vos ordinateurs.

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez iCloud Drive (connexion avec le compte Apple) et pCloud (OAuth dans le navigateur) comme distants.
3. Créez une tâche de synchronisation unidirectionnelle d'iCloud Drive vers un dossier pCloud et vérifiez-la avec **Dry Run**.
4. Exécutez la tâche, puis confirmez le résultat avec **Compare** avant de retirer la copie iCloud.

Une migration vérifiée et reproductible vous permet de changer de cloud sans vous demander si des fichiers sont restés en route.

---

**Guides associés :**

- [Migrer iCloud Drive vers Google Drive — Transférer vos fichiers avec RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [Gérer le stockage pCloud — Synchroniser et sauvegarder vos fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de synchronisation iCloud Drive — Les résoudre avec RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
