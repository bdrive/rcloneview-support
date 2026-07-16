---
slug: zero-cli-crypt-remote-rcloneview
title: "Chiffrement sans CLI avec le distant Crypt de RcloneView : protégez n'importe quel dossier cloud"
authors:
  - tayson
description: "Chiffrez vos fichiers avant qu'ils ne quittent votre PC grâce au distant Crypt de RcloneView. Découvrez la configuration, les vues en clair et chiffrées, ainsi que les bonnes pratiques pour des sauvegardes axées sur la confidentialité."
keywords:
  - rclone crypt
  - distant chiffré
  - chiffrement rcloneview
  - sauvegarde zero knowledge
  - confidentialité cloud
  - chiffrer le stockage cloud
  - distant crypt rcloneview
  - chiffrement des noms de fichiers
  - sauvegarde axée sur la confidentialité
  - interface graphique rclone
tags:
  - encryption
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Chiffrement sans CLI avec le distant Crypt de RcloneView : protégez n'importe quel dossier cloud

> Le stockage cloud est pratique, mais praticité ne rime pas avec confidentialité. Le distant Crypt de RcloneView vous permet de chiffrer vos fichiers avant leur envoi, sans commandes CLI ni options complexes.

De plus en plus d'équipes adoptent le **chiffrement avant envoi** comme stratégie par défaut. Cela protège contre une exposition involontaire liée à une compromission de compte, des audits internes, des contrôles de conformité régionaux ou des faux positifs lors de revues de sécurité. La complexité a toujours été le principal obstacle. RcloneView lève cet obstacle grâce à un flux de travail Crypt Remote simple.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qu'est-ce qu'un distant Crypt dans RcloneView ?

Un distant Crypt est une vue chiffrée superposée à un distant existant.

- **Distant de base** : l'endroit où les données chiffrées sont réellement stockées (Drive, S3, WebDAV, etc.)
- **Distant Crypt** : la vue dans laquelle vous travaillez (déchiffrée pour vous)

RcloneView chiffre automatiquement le contenu des fichiers, et éventuellement leurs noms, avant l'envoi.

```
[Crypt Remote]  -> decrypted view for you
        |
        v
[Base Remote]   -> encrypted data stored in the cloud
```

Pour le fournisseur, les fichiers sont illisibles et les noms de fichiers ressemblent à des chaînes de caractères aléatoires.

## Quand utiliser Crypt ?

### Documents professionnels sensibles
Les contrats, les données financières, les dossiers clients ou les plans internes ne devraient pas être lisibles par un fournisseur.

### Archives personnelles et sauvegardes à long terme
Les photos de famille, les documents d'identité et les archives privées méritent un chiffrement par défaut.

### Stockage partagé ou tiers
Les comptes appartenant à l'entreprise, le stockage de fournisseurs externes ou les configurations hybrides NAS + cloud sont plus sûrs avec une couche de chiffrement.

## Étape par étape : créer un distant Crypt (sans CLI)

### 1) Ouvrir Nouveau distant

Allez dans **Gestionnaire de distants → Nouveau distant**, puis choisissez **Virtuel → Crypt**.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />

### 2) Sélectionner le distant de base

Choisissez le distant et le dossier que vous souhaitez chiffrer. Vous pouvez cibler un dossier spécifique afin de garder les données chiffrées séparées.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select target folder for crypt" class="img-large img-center" />

### 3) Définir les mots de passe de chiffrement

- **Mot de passe des données** : obligatoire  
- **Mot de passe des noms de fichiers** : facultatif, utilisez-le pour masquer également les noms de fichiers

Ces mots de passe ne sont pas récupérables. Conservez-les en lieu sûr.

### 4) Confirmer et terminer

Le nouveau distant Crypt apparaît dans le Gestionnaire de distants, tandis que le distant de base reste inchangé.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="Crypt remote in Remote Manager" class="img-large img-center" />

Guide : [/support/howto/remote-storage-connection-settings/crypt-remote](/howto/remote-storage-connection-settings/crypt-remote)

## Comprendre les deux vues (très important)

**Vue du distant de base**  
Noms de fichiers chiffrés et données binaires illisibles. C'est normal.

**Vue du distant Crypt**  
Fichiers déchiffrés et noms normaux. C'est ici que vous devez travailler.

Si la vue Crypt semble vide, vous avez probablement envoyé des fichiers directement vers le distant de base. Envoyez toujours vos fichiers via le distant Crypt.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="Crypt vs base view comparison" class="img-large img-center" />

## Utiliser Crypt dans de vrais flux de travail RcloneView

Les distants Crypt se comportent comme des distants normaux :

- **Glisser-déposer** dans Crypt pour chiffrer lors de l'envoi  
  Guide : [/support/howto/rcloneview-basic/browse-and-manage-remote-storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- **Comparer & Synchroniser** pour des sauvegardes chiffrées  
  Guides : [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents), [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **Tâches planifiées** avec Crypt comme cible  
  Guide : [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

<div class="img-grid-2">
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop into Crypt" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
</div>
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
</div>

## Bonnes pratiques et avertissements

- **Les mots de passe ne sont pas récupérables** : utilisez un gestionnaire de mots de passe.  
- **Sauvegardez `rclone.conf`** : il contient les clés de chiffrement.  
- **Ne mélangez pas fichiers en clair et fichiers chiffrés** dans le même dossier.  
- **Testez d'abord** avec un petit dossier et une exécution à blanc.

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## FAQ

**Le chiffrement ralentit-il les transferts ?**  
Il y a une légère surcharge CPU, mais la vitesse du réseau est généralement le facteur limitant.

**Puis-je déchiffrer en dehors de RcloneView ?**  
Oui. Tout client rclone utilisant la même configuration crypt et les mêmes mots de passe peut déchiffrer les données.

**Que se passe-t-il si je perds le mot de passe ?**  
Les données ne sont pas récupérables. C'est le compromis inhérent à la sécurité zero-knowledge.

## Conclusion

Chiffrez d'abord, automatisez ensuite. Le distant Crypt de RcloneView vous offre des sauvegardes axées sur la confidentialité, sans CLI. Configurez-le une fois, utilisez Comparer/Synchroniser/Tâches comme d'habitude, et gardez le contrôle de vos données.
