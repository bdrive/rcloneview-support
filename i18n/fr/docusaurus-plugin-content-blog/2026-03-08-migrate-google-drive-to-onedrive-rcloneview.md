---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "Comment migrer de Google Drive vers OneDrive — Guide complet de transfert avec RcloneView"
authors:
  - tayson
description: "Vous passez de Google Workspace à Microsoft 365 ? Découvrez comment migrer tous vos fichiers de Google Drive vers OneDrive sans perdre la structure des dossiers, grâce à RcloneView."
keywords:
  - migrer google drive vers onedrive
  - transfert google drive vers onedrive
  - passer de google workspace à microsoft 365
  - déplacer des fichiers google drive onedrive
  - migration google vers microsoft
  - outil de migration cloud à cloud
  - synchronisation google drive onedrive
  - transférer des fichiers google drive
  - de google workspace à office 365
  - migration cloud sans perte de données
tags:
  - RcloneView
  - google-drive
  - onedrive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment migrer de Google Drive vers OneDrive — Guide complet de transfert avec RcloneView

> Vous passez de Google Workspace à Microsoft 365 ? Le plus gros casse-tête n'est pas les nouvelles applications, mais bien le déplacement de téraoctets de fichiers de Google Drive vers OneDrive sans perdre votre structure de dossiers, vos partages, ni votre patience.

Que votre organisation change de suite bureautique ou que vous souhaitiez simplement disposer d'une copie de votre Google Drive sur OneDrive, le processus de migration peut être pénible. Google Takeout exporte un fichier ZIP qui fait perdre la structure des dossiers. Le glisser-déposer manuel prend une éternité. RcloneView s'en charge correctement grâce à un transfert direct de cloud à cloud qui préserve vos dossiers.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi ne pas utiliser Google Takeout ?

Google Takeout est l'outil d'export officiel de Google, mais il présente des limites importantes pour une migration :

- **Exporte au format ZIP** — Vous obtenez une archive compressée, pas une structure de dossiers active.
- **Perte de l'organisation** — Les Drive partagés et les hiérarchies de dossiers peuvent être aplatis.
- **Pas de mises à jour incrémentielles** — Si des fichiers changent pendant l'export, vous devez recommencer depuis le début.
- **Réimport manuel** — Vous devez quand même tout téléverser sur OneDrive.

RcloneView transfère les fichiers directement de Google Drive vers OneDrive, en préservant la structure de dossiers d'origine.

## Migration étape par étape

### 1) Connecter les deux comptes

Ajoutez Google Drive et OneDrive comme distants dans RcloneView :

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) Parcourir et planifier

Ouvrez les deux distants dans l'explorateur à deux volets. Google Drive à gauche, OneDrive à droite :

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

Passez en revue la structure de votre Google Drive avant de migrer. Identifiez :

- Les dossiers à migrer (pas forcément tout).
- La taille totale (elle affecte la durée du transfert).
- Les fichiers Google Docs/Sheets/Slides (ils nécessitent une conversion — voir ci-dessous).

### 3) Gérer les fichiers natifs Google

Les fichiers Google Docs, Sheets et Slides ne sont pas des fichiers traditionnels : ce sont des documents web. Lors du transfert, rclone les convertit aux formats Microsoft Office :

| Format Google | Converti en |
|---------------|------------|
| Google Docs | .docx |
| Google Sheets | .xlsx |
| Google Slides | .pptx |
| Google Drawings | .png |

Cette conversion se fait automatiquement pendant le transfert.

### 4) Démarrer le transfert

Créez une tâche **Copier** de Google Drive vers OneDrive :

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

Utilisez **Copier** (et non Synchroniser) pour la migration. Copier ne fait qu'ajouter des fichiers à la destination — cela ne supprime jamais rien.

### 5) Suivre la progression

Observez le transfert en temps réel :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) Vérifier avec la comparaison de dossiers

Une fois le transfert terminé, comparez les deux côtés pour vous assurer que rien n'a été oublié :

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Conseils de migration

### Migrer par lots

Pour les gros volumes (500 Go et plus), migrez dossier par dossier plutôt que tout en une fois :

1. Commencez par les dossiers critiques (Documents, Projets).
2. Déplacez ensuite les dossiers partagés.
3. Terminez par les archives et les médias.

Ainsi, les utilisateurs peuvent commencer à travailler immédiatement sur OneDrive avec leurs fichiers les plus importants.

### Gérer les limites de débit

Google Drive et OneDrive ont tous deux des limites de débit d'API. RcloneView les respecte automatiquement, mais pour les très grosses migrations :

- Utilisez la [limitation de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) pour éviter d'atteindre ces limites.
- Planifiez les transferts en dehors des heures de pointe.
- Laissez les transferts échoués relancer automatiquement (fonctionnalité v1.3).

### Effectuer des mises à jour incrémentielles

Après la migration initiale, relancez la même tâche Copier. Elle ne transfère que les fichiers nouveaux ou modifiés, en ignorant ce qui a déjà été copié. Cela permet de récupérer les fichiers ajoutés à Google Drive pendant la migration.

## Après la migration : garder les deux synchronisés

Si vous avez besoin des deux clouds actifs pendant une période de transition, configurez une synchronisation planifiée :

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Cela permet de maintenir OneDrive à jour avec les changements survenus sur Google Drive jusqu'à votre bascule complète.

## Problèmes courants

### « Nom de fichier trop long »

OneDrive impose une limite de 400 caractères pour les chemins. Google Drive est plus permissif. Si vous rencontrez ce problème, raccourcissez les noms de dossiers profondément imbriqués avant de migrer.

### Fichiers des Drive partagés

Les Drive partagés Google (anciennement Team Drives) sont distincts de votre Drive personnel. Ajoutez-les comme distant séparé ou configurez rclone pour inclure les Drive partagés.

### Fichiers volumineux

OneDrive Business prend en charge des fichiers jusqu'à 250 Go. OneDrive Personnel prend également en charge jusqu'à 250 Go. Vérifiez vos fichiers les plus volumineux avant de commencer.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez Google Drive et OneDrive** comme distants.
3. **Exécutez une tâche Copier** — la structure des dossiers est préservée automatiquement.
4. **Vérifiez avec la comparaison de dossiers** — assurez-vous que rien ne manque.
5. **Planifiez des mises à jour incrémentielles** jusqu'à ce que la transition soit terminée.

Ne laissez pas la migration de fichiers devenir le goulot d'étranglement de votre changement de plateforme.

---

**Guides connexes :**

- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
