---
slug: migrate-box-to-proton-drive-rcloneview
title: "Migrer de Box vers Proton Drive — Transférer des fichiers avec RcloneView"
authors:
  - casey
description: "Déplacez vos fichiers de Box vers Proton Drive avec RcloneView. Connectez les deux clouds, prévisualisez avec Dry Run, copiez les dossiers et vérifiez la migration avec Folder Compare."
keywords:
  - migrer box vers proton drive
  - transfert box vers proton drive
  - déplacer des fichiers de box vers proton drive
  - outil de migration box
  - migration proton drive
  - migration cloud à cloud
  - migration de stockage cloud chiffré
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer de Box vers Proton Drive — Transférer des fichiers avec RcloneView

> Déplacez vos dossiers Box vers le stockage chiffré de bout en bout de Proton Drive sans tout télécharger d'abord sur votre ordinateur portable.

Les équipes et les indépendants commencent souvent sur Box pour ses fonctions de collaboration, puis déplacent leurs archives sensibles vers Proton Drive pour son orientation vers la confidentialité. Le faire à la main signifie télécharger des gigaoctets depuis Box puis les renvoyer via un navigateur. RcloneView connecte les deux services dans une seule fenêtre : vous pouvez copier les dossiers directement, vérifier le résultat et conserver une tâche réutilisable pour tout ce qui sera ajouté plus tard.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter Box et Proton Drive

Ouvrez **Remote tab > New Remote** et ajoutez d'abord Box. Box utilise OAuth : une fenêtre de navigateur s'ouvre pour vous connecter et approuver l'accès, sans clé d'API à copier. Si votre organisation utilise Box for Business, définissez `box_sub_type = enterprise` dans les paramètres du distant pour que RcloneView voie vos dossiers d'entreprise.

Ajoutez ensuite Proton Drive avec votre adresse e-mail et votre mot de passe Proton, ainsi qu'un code 2FA si votre compte l'a activé. La prise en charge de Proton Drive nécessite rclone v1.69 ou une version ultérieure ; le rclone intégré fourni avec RcloneView répond à cette exigence, et la barre inférieure indique la version utilisée.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout des distants Box et Proton Drive dans RcloneView" class="img-large img-center" />

## Planifier le transfert

Ouvrez Box dans le panneau Explorer de gauche et Proton Drive dans celui de droite. Utilisez **Get Size** sur vos dossiers Box de premier niveau pour voir la quantité de données à déplacer, et créez dans Proton Drive une arborescence de destination qui reflète celle que vous voulez conserver.

Les Box Notes et autres documents natifs de Box ne sont pas des fichiers ordinaires. Dans les **Filtering Settings** de l'assistant de synchronisation, le filtre prédéfini **Box Docs** vous aide à les traiter délibérément plutôt que de les découvrir en plein transfert. Exportez depuis Box tout ce dont vous avez besoin dans ces formats avant la migration.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box et Proton Drive côte à côte pour un transfert cloud à cloud dans RcloneView" class="img-large img-center" />

## Lancer la migration

Pour quelques dossiers, faites-les glisser du panneau Box vers le panneau Proton Drive : un glisser-déposer entre distants différents copie les données. Pour une migration complète, créez une tâche **Sync** avec Box comme source et Proton Drive comme destination. Proton Drive chiffre les fichiers côté client ; une concurrence modérée est donc un point de départ raisonnable, et vous pouvez réduire le nombre de transferts de fichiers dans les Advanced Settings si des erreurs apparaissent.

Cliquez toujours d'abord sur **Dry Run**. Il liste ce qui sera copié et ce qui serait supprimé, ce qui protège le contenu existant de Proton Drive contre une mise en miroir accidentelle. Lancez ensuite la tâche et suivez la progression, la vitesse et le nombre de fichiers dans l'onglet **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi du transfert de Box vers Proton Drive dans l'onglet Transferring de RcloneView" class="img-large img-center" />

## Vérifier avant de résilier Box

Une fois la tâche terminée, ouvrez **Compare** avec le dossier Box d'un côté et le dossier Proton Drive de l'autre. Les fichiers présents uniquement à gauche montrent ce qui n'a pas été transféré ; utilisez Copy right pour combler les manques. Job History enregistre chaque exécution avec son statut, sa taille et son nombre de fichiers pour vos archives.

RcloneView monte et synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, de sorte que la même configuration servira pour votre prochain déménagement.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History confirmant une migration terminée de Box vers Proton Drive" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez Box via la connexion dans le navigateur et Proton Drive avec votre e-mail, votre mot de passe et un 2FA facultatif.
3. Créez une tâche Sync de Box vers Proton Drive et prévisualisez-la avec Dry Run.
4. Lancez la tâche, puis confirmez le résultat avec Folder Compare avant de fermer votre compte Box.

Une migration soignée et vérifiée vous permet de passer à un stockage chiffré en ayant la certitude que rien n'a été oublié.

---

**Guides associés :**

- [Gérer le stockage Box — Synchroniser et sauvegarder des fichiers avec RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gérer Proton Drive — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migrer de Dropbox vers Proton Drive avec RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
