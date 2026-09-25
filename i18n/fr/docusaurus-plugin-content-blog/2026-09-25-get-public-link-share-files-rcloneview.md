---
slug: get-public-link-share-files-rcloneview
title: "Obtenir un lien public — Partagez vos fichiers cloud instantanément avec RcloneView"
authors:
  - kai
description: "Découvrez comment générer des liens publics partageables pour vos fichiers cloud directement depuis l'explorateur de fichiers de RcloneView, sans onglet de navigateur."
keywords:
  - obtenir lien public
  - partager fichiers cloud
  - lien partageable stockage cloud
  - RcloneView lien public
  - lien de partage google drive
  - lien de partage dropbox
  - lien de partage box
  - partage de fichiers cloud
  - lien public rclone
  - lien de partage onedrive
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Obtenir un lien public — Partagez vos fichiers cloud instantanément avec RcloneView

> Zappez le navigateur : faites un clic droit sur n'importe quel fichier dans RcloneView et générez un lien public partageable en quelques secondes.

Partager un seul fichier depuis le cloud implique généralement d'ouvrir un onglet de navigateur, de se connecter à la console web du fournisseur, de chercher le bouton de partage, puis de copier un lien dont on n'est pas toujours sûr qu'il ait les bonnes permissions. RcloneView condense tout ce flux de travail en un seul élément du menu contextuel accessible par clic droit. Si vous gérez des fichiers répartis sur plusieurs fournisseurs depuis le même explorateur, cette cohérence compte plus qu'il n'y paraît — vous cessez de jongler entre cinq interfaces web différentes juste pour envoyer un fichier à quelqu'un.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comment fonctionne Obtenir un lien public

La commande **Obtenir un lien public (Get Public Link)** se trouve dans le même menu contextuel de clic droit que Copy, Cut, Rename et Download. Sélectionnez un ou plusieurs fichiers dans la liste de fichiers de n'importe quel distant connecté, faites un clic droit et choisissez Get Public Link. RcloneView transmet la requête au backend rclone sous-jacent, qui demande à l'API du fournisseur de générer un lien avec les permissions que ce backend prend en charge — lecture seule, expirant ou protégé par mot de passe, selon ce que le fournisseur autorise.

Comme il s'agit d'un comportement propre à chaque fournisseur, le format exact du lien et les options varient. Un lien Dropbox se comporte différemment d'un lien Box, et tous les types de distants ne prennent pas en charge les liens publics — les distants basés sur un protocole, comme un simple serveur SFTP ou FTP, n'ont généralement pas de notion de « partage » comme les espaces de stockage cloud grand public. RcloneView affiche ce que le backend prend réellement en charge, plutôt que de simuler un bouton universel qui échouerait silencieusement sur les distants non pris en charge.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## Où cela s'intègre dans un flux de travail quotidien

Les équipes qui jonglent avec des livrables clients, des ressources marketing ou des demandes ponctuelles de documents tirent le plus grand bénéfice du fait de pouvoir générer le lien dans la même fenêtre où se trouvent déjà les fichiers. Plutôt que de se souvenir sur quel fournisseur se trouve un fichier et d'ouvrir séparément le site de ce fournisseur, vous naviguez jusqu'à lui dans le panneau Explorer de RcloneView et générez le lien sur place. Contrairement aux outils qui ne font que du montage, RcloneView synchronise et compare aussi les dossiers — dès la licence FREE —, si bien que la même fenêtre qui partage un lien aujourd'hui peut aussi maintenir ce dossier sauvegardé selon un planning demain.

Cela est particulièrement utile lorsque les ressources d'un même projet sont dispersées entre plusieurs fournisseurs — par exemple, des exports de photos RAW sur Backblaze B2 et des épreuves destinées au client sur Dropbox. Vous n'avez pas besoin de deux flux de travail ; il vous suffit d'un seul explorateur avec deux onglets ouverts.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## Combiner liens publics et organisation des dossiers

Avant de partager, il est utile d'utiliser la vue en liste de fichiers de RcloneView pour vérifier exactement ce que vous exposez. Passez en List View pour vérifier les tailles de fichiers et les dates de modification, ou en Thumbnail View si vous partagez des images et souhaitez confirmer visuellement et rapidement que vous avez sélectionné le bon fichier. Get Public Link fonctionne aussi sur une sélection multiple de fichiers, ce qui permet de générer plusieurs liens en une seule fois plutôt que de répéter le clic droit à chaque fois.

Si le lien doit rester actif pour un partage récurrent programmé — par exemple, un rapport hebdomadaire qu'un client récupère toujours à la même URL —, associez-le à une tâche Sync qui maintient à jour le fichier sous-jacent à ce même chemin, afin que le lien lui-même n'ait jamais besoin d'être régénéré.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Connectez le distant contenant le fichier à partager via New Remote.
3. Naviguez jusqu'au fichier dans le panneau Explorer, faites un clic droit et sélectionnez Get Public Link.
4. Copiez le lien généré et envoyez-le — sans connexion séparée au navigateur.

Une fois que cela fait partie de votre routine, partager un fichier cloud demande les mêmes trois clics, quel que soit celui des plus de 90 fournisseurs pris en charge où il se trouve.

---

**Guides associés :**

- [Corriger les erreurs de lien public non pris en charge — Partagez correctement vos fichiers avec RcloneView](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [Obtenir la taille — Calculez instantanément l'utilisation du stockage cloud avec RcloneView](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [Vue en miniatures — Parcourez et prévisualisez visuellement vos images cloud avec RcloneView](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
