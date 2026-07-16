---
slug: fix-azure-files-connection-errors-rcloneview
title: "Corriger les erreurs de connexion Azure Files — Résoudre les problèmes SMB Azure avec RcloneView"
authors:
  - tayson
description: "Résolvez les erreurs de connexion Azure Files dans RcloneView — corrigez les identifiants incorrects, les blocages de pare-feu sur le port SMB 445, les incompatibilités TLS et les problèmes de nom de partage."
keywords:
  - Azure Files connection error
  - Azure SMB troubleshooting
  - RcloneView Azure Files
  - SMB port 445
  - Azure File Storage fix
  - Azure Files credentials
  - cloud storage troubleshooting
  - rclone Azure Files
tags:
  - azure-files
  - troubleshooting
  - tips
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de connexion Azure Files — Résoudre les problèmes SMB Azure avec RcloneView

> Les erreurs de connexion Azure Files dans RcloneView sont presque toujours causées par l'un de ces trois problèmes — des identifiants incorrects, un port SMB bloqué ou une incompatibilité de configuration TLS. Voici comment corriger chacun d'eux.

Azure Files fournit des partages de fichiers SMB et NFS gérés, hébergés dans Azure, et RcloneView prend en charge Azure File Storage directement comme type de distant. Cependant, les connexions Azure Files échouent plus souvent que les autres fournisseurs, car elles dépendent de l'alignement simultané des identifiants corrects, des règles de pare-feu et des paramètres TLS. Ce guide couvre les modes d'échec les plus courants et comment les résoudre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifier vos identifiants Azure Files

Azure Files nécessite trois éléments d'information : le **nom du compte de stockage** (Storage Account Name), la **clé partagée** (Shared Key, aussi appelée Storage Account Key), et le **nom du partage** (Share Name). Une incohérence dans l'un de ces trois champs provoque un échec d'authentification immédiat. Les messages d'erreur d'Azure ne précisent pas toujours quel champ est en cause.

Dans RcloneView, ouvrez la configuration de votre distant Azure Files et vérifiez chaque champ :
- **Account Name** : il s'agit du nom du compte de stockage, et non du nom d'affichage ou du nom de l'abonnement.
- **Account Key** : disponible dans le portail Azure, sous votre compte de stockage > **Access Keys** > Key1 ou Key2. Copiez la clé complète — ce sont de longues chaînes en base64, faciles à tronquer par erreur.
- **Share Name** : le nom exact du partage de fichiers au sein du compte de stockage, sensible à la casse.

Si vous avez récemment fait pivoter vos clés d'accès dans le portail Azure, mettez à jour la clé dans la configuration du distant de RcloneView immédiatement, car l'ancienne clé sera invalidée.

<img src="/support/images/en/blog/new-remote.png" alt="Azure Files remote configuration in RcloneView with Account Name and Key fields" class="img-large img-center" />

## Problèmes de pare-feu sur le port SMB 445

Azure Files utilise le protocole SMB via le port TCP 445. De nombreux réseaux d'entreprise et fournisseurs d'accès Internet bloquent le port 445 sortant par mesure de sécurité contre d'anciennes vulnérabilités SMB. Si vos identifiants sont corrects mais que les connexions expirent toujours, le blocage du port 445 est la cause la plus probable.

Pour tester si le port 445 est accessible, exécutez `Test-NetConnection -ComputerName <storage-account>.file.core.windows.net -Port 445` dans PowerShell (Windows) ou `nc -zv <storage-account>.file.core.windows.net 445` sous Linux/macOS. Si la connexion échoue, vous avez deux options : collaborer avec votre administrateur réseau pour autoriser le port 445 sortant, ou utiliser Azure Files via NFS (lorsque disponible), ou encore accéder directement au stockage Azure Blob sous-jacent.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Diagnosing Azure Files port 445 connectivity for RcloneView" class="img-large img-center" />

## Configuration TLS et point de terminaison

Le distant Azure Files de RcloneView utilise HTTPS pour le plan de contrôle et SMB pour le transfert de données. Assurez-vous que votre point de terminaison (endpoint) est correctement configuré — pour les comptes de stockage Azure standard, le point de terminaison est `<accountname>.file.core.windows.net`. Si vous utilisez Azure Government, Azure Chine ou un point de terminaison privé, le nom d'hôte sera différent et devra être spécifié explicitement dans la configuration du distant.

Des incompatibilités de version TLS peuvent survenir sur d'anciens systèmes Windows où TLS 1.2 n'est pas activé par défaut. Azure Files nécessite TLS 1.2 ou une version supérieure. Sur Windows, activez TLS 1.2 via le registre ou via une stratégie de groupe (Group Policy) si les connexions échouent avec des messages d'erreur liés à TLS. Sur Linux, assurez-vous que la version d'OpenSSL de votre système prend en charge TLS 1.2 (c'est le cas de toute distribution moderne).

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Successful Azure Files connection and transfer monitoring in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez que votre **Account Name**, **Account Key** et **Share Name** sont tous corrects et correspondent exactement au portail Azure.
3. Testez la connectivité sortante vers le port 445 avec `nc` ou PowerShell `Test-NetConnection`.
4. Si le port 445 est bloqué, contactez votre équipe réseau ou envisagez une méthode d'accès alternative.
5. Assurez-vous que TLS 1.2 est activé sur votre système si vous rencontrez des erreurs de négociation TLS (handshake).

Résoudre les erreurs de connexion Azure Files est généralement une question de vérification des identifiants et de la configuration réseau — une fois ces éléments corrects, le distant fonctionne de manière fiable dans RcloneView pour la navigation, la synchronisation et les tâches de sauvegarde.

---

**Guides connexes :**

- [Gérer Azure Files — Synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Corriger les erreurs de montage de partage réseau SMB Windows avec RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)
- [Corriger les erreurs d'authentification par jeton SAS Azure Blob avec RcloneView](https://rcloneview.com/support/blog/fix-azure-blob-sas-token-auth-errors-rcloneview)

<CloudSupportGrid />
