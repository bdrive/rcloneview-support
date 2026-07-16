---
slug: keyboard-shortcuts-productivity-rcloneview
title: "Raccourcis clavier et astuces de productivité RcloneView"
authors:
  - tayson
description: "Maîtrisez les raccourcis clavier et les astuces de productivité de RcloneView pour naviguer plus rapidement dans le stockage cloud, gérer les transferts efficacement et simplifier les opérations quotidiennes sur les fichiers."
keywords:
  - rcloneview
  - raccourcis clavier
  - raccourcis rcloneview
  - astuces de productivité
  - raccourcis gestionnaire de fichiers
  - workflow rcloneview
  - astuces gestionnaire de fichiers cloud
  - navigation rcloneview
  - astuces utilisateur avancé
  - efficacité rcloneview
tags:
  - feature
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Raccourcis clavier et astuces de productivité RcloneView

> Les utilisateurs avancés savent que les raccourcis clavier peuvent réduire de moitié le temps de gestion des fichiers. Le système de raccourcis de RcloneView vous donne un accès rapide à la navigation, la sélection, les transferts et la gestion des tâches sans avoir à toucher la souris.

L'explorateur à deux volets de RcloneView est conçu pour des opérations sur les fichiers efficaces à travers les fournisseurs cloud. Bien que l'interface soit entièrement navigable à la souris, apprendre les raccourcis clavier transforme votre workflow — surtout lorsque vous gérez des milliers de fichiers sur plusieurs remotes. Ce guide couvre les raccourcis essentiels et les astuces de workflow sur lesquels s'appuient quotidiennement les utilisateurs expérimentés de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Raccourcis de navigation

Une navigation efficace est le fondement d'une gestion de fichiers rapide. Ces raccourcis vous permettent de vous déplacer entre les volets, de changer de distant et de naviguer dans les arborescences de dossiers sans cliquer :

### Gestion des volets

- **Tab** : Bascule le focus entre le volet gauche et le volet droit. C'est le raccourci le plus utilisé dans RcloneView — il permet d'alterner entre source et destination sans quitter le clavier.
- **Entrée** : Ouvre le dossier ou le fichier sélectionné. Pour les dossiers, cela permet d'y accéder. Pour les fichiers, cela déclenche l'action par défaut.
- **Retour arrière / Alt+Haut** : Remonte d'un niveau de répertoire dans le volet actuel.

### Sélection de fichiers

- **Ctrl+A** : Sélectionne tous les fichiers du volet actuel. Utile pour les opérations en masse comme la copie du contenu entier d'un dossier.
- **Maj+Clic** : Sélectionne une plage de fichiers entre le dernier fichier sélectionné et le fichier cliqué.
- **Ctrl+Clic** : Bascule la sélection d'un fichier individuel sans désélectionner les autres. Permet de constituer une sélection multi-fichiers sur des éléments non contigus.

## Raccourcis d'opérations sur les fichiers

Une fois vos fichiers sélectionnés, ces raccourcis exécutent rapidement les opérations :

- **Ctrl+C** : Copie les fichiers sélectionnés dans le presse-papiers (pour coller dans l'autre volet).
- **Ctrl+X** : Coupe les fichiers sélectionnés (opération de déplacement).
- **Ctrl+V** : Colle les fichiers du presse-papiers à l'emplacement du volet actuel.
- **Suppr / Del** : Supprime les fichiers sélectionnés sur le distant. RcloneView demande confirmation avant la suppression.
- **F2** : Renomme le fichier ou le dossier sélectionné.
- **Ctrl+Maj+N** : Crée un nouveau dossier à l'emplacement du volet actuel.

## Raccourcis de comparaison et de synchronisation

Les fonctions de comparaison et de synchronisation de RcloneView ont leurs propres raccourcis :

- **Bouton / raccourci Comparer** : Lance une comparaison de dossiers entre le volet gauche et le volet droit. La comparaison met en évidence les fichiers uniques à chaque côté, les fichiers qui diffèrent et les fichiers identiques.
- **Raccourcis de synchronisation** : Lancez une synchronisation de gauche à droite ou de droite à gauche directement depuis la barre d'outils ou le clavier.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Keyboard-driven folder comparison in RcloneView" class="img-large img-center" />

## Recherche et filtrage

- **Ctrl+F** : Ouvre la barre de recherche/filtrage dans le volet actuel. Tapez un motif de nom de fichier pour filtrer les fichiers visibles. Ceci est précieux dans les dossiers contenant des centaines de fichiers — tapez quelques caractères pour réduire instantanément la liste.
- **Échap** : Ferme la barre de recherche/filtrage et restaure la liste complète des fichiers.

## Astuces de productivité

### Astuce 1 : Nommez vos remotes de façon descriptive

Nommez vos remotes selon leur usage plutôt que selon le fournisseur — « Client-A-Drive » plutôt que « Google-Drive-2 ». Lorsque vous avez plus de 10 remotes, des noms descriptifs font gagner du temps pour retrouver le bon dans le menu déroulant.

### Astuce 2 : Exploitez la disposition à deux volets

Gardez votre distant le plus utilisé dans le volet gauche et changez le volet droit selon les besoins. Par exemple, conservez toujours votre destination de sauvegarde (Backblaze B2, S3) dans le volet gauche et chargez différents remotes source dans le volet droit. Cela crée un modèle spatial cohérent — « gauche = sauvegarde, droite = source » — qui devient automatique.

### Astuce 3 : Épinglez les chemins fréquemment utilisés

Si vous naviguez régulièrement vers le même dossier profondément imbriqué, créez un favori ou un remote alias qui pointe directement vers celui-ci. Au lieu de naviguer vers `remote:/projects/2026/client-a/deliverables/` à chaque fois, créez un remote alias nommé « Client-A-Deliverables » qui s'ouvre directement sur ce chemin.

### Astuce 4 : Utilisez le mode simulation avant une synchronisation

Avant de lancer une tâche de synchronisation sur des données de production, prévisualisez toujours avec le mode simulation (dry run). Cela montre exactement ce qui sera transféré, supprimé ou ignoré — sans réellement effectuer de modifications. Détectez les erreurs avant qu'elles ne se produisent.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a job efficiently with keyboard shortcuts in RcloneView" class="img-large img-center" />

### Astuce 5 : Opérations en lot avec la file de tâches

Au lieu d'exécuter les transferts un par un, mettez plusieurs tâches en file d'attente. Configurez une copie du remote A vers B, puis une synchronisation de C vers D, et laissez-les s'exécuter séquentiellement. La file de tâches gère l'ordre d'exécution pendant que vous passez à autre chose.

### Astuce 6 : Surveillez sans interrompre

Passez à la vue de suivi des transferts pour vérifier la progression sans arrêter votre navigation. RcloneView affiche les vitesses de transfert en temps réel, la progression par fichier et le temps d'achèvement estimé. Mettez en pause ou annulez des transferts individuels sans affecter les autres dans la file d'attente.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfers while navigating in RcloneView" class="img-large img-center" />

### Astuce 7 : Utilisez le glisser-déposer pour des transferts rapides

Pour les transferts ponctuels, le glisser-déposer est la méthode la plus rapide. Sélectionnez des fichiers dans un volet et faites-les glisser vers l'autre. Cela fonctionne entre deux remotes quelconques — cloud vers cloud, local vers cloud, ou cloud vers local.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop between cloud providers in RcloneView" class="img-large img-center" />

### Astuce 8 : Consultez régulièrement l'historique des tâches

Le panneau d'historique des tâches enregistre chaque opération avec des statistiques. Consultez-le périodiquement pour confirmer que les tâches planifiées s'exécutent avec succès, vérifier les vitesses de transfert et identifier d'éventuelles erreurs. Cette habitude permet de détecter les problèmes tôt — avant qu'une sauvegarde échouée ne devienne une sauvegarde manquée.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history for productivity insights in RcloneView" class="img-large img-center" />

## Développer la mémoire musculaire

Le moyen le plus rapide d'intérioriser les raccourcis est de les utiliser délibérément pendant une semaine. Chaque fois que vous tendez la main vers la souris pour changer de volet, arrêtez-vous et appuyez plutôt sur Tab. Chaque fois que vous faites un clic droit pour copier, utilisez plutôt Ctrl+C. Après une semaine, les raccourcis deviennent automatiques et votre vitesse de gestion des fichiers augmente sensiblement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configurez vos remotes avec des noms descriptifs.
3. Pratiquez les raccourcis de navigation (Tab, Entrée, Retour arrière) jusqu'à ce qu'ils deviennent automatiques.
4. Utilisez Ctrl+F pour filtrer les grands dossiers plutôt que de faire défiler.
5. Exploitez le mode simulation, les files de tâches et les revues d'historique pour des opérations en toute confiance.

Les raccourcis clavier et les bonnes habitudes de workflow s'accumulent avec le temps. Quelques secondes économisées par opération représentent des heures gagnées par mois lorsque vous gérez quotidiennement des fichiers sur plusieurs fournisseurs cloud.

---

**Guides connexes :**

- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Glisser-déposer des fichiers](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)
- [Comparer le contenu de dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Exécuter et gérer les tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
