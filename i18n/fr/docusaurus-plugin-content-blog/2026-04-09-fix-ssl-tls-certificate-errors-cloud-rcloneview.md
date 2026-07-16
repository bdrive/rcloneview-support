---
slug: fix-ssl-tls-certificate-errors-cloud-rcloneview
title: "Résoudre les erreurs de certificat SSL/TLS pour les connexions cloud dans RcloneView"
authors:
  - tayson
description: "Diagnostiquez et résolvez les erreurs de certificat SSL/TLS lors de la connexion à un stockage cloud dans RcloneView. Résolvez les certificats expirés, les problèmes de certificats auto-signés et l'interception par proxy d'entreprise."
keywords:
  - rcloneview
  - ssl certificate error
  - tls certificate error
  - cloud connection ssl fix
  - self-signed certificate rclone
  - certificate verify failed
  - x509 certificate error
  - corporate proxy ssl
  - rclone tls error
  - cloud storage connection fix
tags:
  - RcloneView
  - troubleshooting
  - security
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de certificat SSL/TLS pour les connexions cloud dans RcloneView

> Les erreurs de certificat SSL/TLS empêchent RcloneView d'établir des connexions sécurisées avec les fournisseurs cloud. Ces erreurs vont des certificats expirés à l'interception par proxy d'entreprise — voici comment les diagnostiquer et les résoudre.

Chaque connexion que RcloneView établit avec un fournisseur cloud utilise HTTPS avec chiffrement TLS. La négociation TLS vérifie l'identité du serveur via son certificat SSL. Lorsque cette vérification échoue, RcloneView ne peut pas se connecter — plus de navigation, plus de transferts, plus de synchronisation. Les erreurs de certificat sont particulièrement courantes dans les environnements d'entreprise avec des proxys d'inspection SSL, lors de la connexion à un stockage auto-hébergé (MinIO, Nextcloud, Seafile), ou lorsque l'heure système est incorrecte.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Messages d'erreur courants

- **« x509: certificate signed by unknown authority »** : le certificat du serveur a été émis par une autorité de certification (CA) que votre système ne reconnaît pas comme fiable. Fréquent avec le stockage auto-hébergé et les proxys d'entreprise.
- **« x509: certificate has expired or is not yet valid »** : la période de validité du certificat ne correspond pas à l'heure système actuelle. Soit le certificat est réellement expiré, soit l'horloge de votre système est incorrecte.
- **« x509: certificate is valid for X, not Y »** : le nom commun (Common Name) ou les noms alternatifs du sujet (Subject Alternative Names) du certificat ne correspondent pas au nom d'hôte auquel vous vous connectez. Cela se produit lorsque l'URL du point de terminaison ne correspond pas au certificat.
- **« tls: failed to verify certificate »** : un échec générique de vérification TLS. Consultez le message d'erreur complet pour plus de détails.
- **« remote TLS connection closed unexpectedly »** : la négociation TLS a été interrompue, souvent par un pare-feu ou un proxy.

## Solution 1 : Vérifier l'horloge système

La cause la plus simple et la plus souvent négligée : l'horloge de votre système est incorrecte. Les certificats TLS ont une fenêtre de validité (Not Before / Not After). Si votre horloge se situe en dehors de cette fenêtre, chaque certificat apparaît comme invalide.

Sous Windows, vérifiez Paramètres > Heure et langue > Date et heure et assurez-vous que « Régler l'heure automatiquement » est activé. Sous Linux, exécutez `timedatectl` et vérifiez que l'heure est correcte. Sous macOS, consultez Préférences Système > Date et heure.

Une horloge système décalée, même de quelques heures seulement, peut déclencher des erreurs de certificat, en particulier pour les certificats récemment émis ou proches de l'expiration.

## Solution 2 : Proxy d'entreprise / Inspection SSL

De nombreux réseaux d'entreprise utilisent un proxy d'inspection SSL qui intercepte les connexions HTTPS, les déchiffre pour inspection, puis les rechiffre avec le certificat propre à l'organisation. Cela réalise en pratique une opération de type « man-in-the-middle » qui est approuvée par les machines gérées par l'entreprise (car la CA de l'entreprise est installée dans le magasin de confiance du système) mais qui peut ne pas être approuvée par le lot de certificats intégré de rclone.

Pour résoudre ce problème, vous devez indiquer à rclone d'utiliser le magasin de certificats de votre système ou fournir explicitement le certificat de la CA de l'entreprise :

- **Option A** : définissez l'indicateur `--ca-cert` dans les indicateurs personnalisés de RcloneView pour pointer vers le fichier de certificat de la CA de l'entreprise. Par exemple : `--ca-cert /path/to/corporate-ca.pem`.
- **Option B** : sous Linux, assurez-vous que le certificat de la CA de l'entreprise est installé dans le magasin de confiance du système (`/etc/ssl/certs/` sur Debian/Ubuntu, `/etc/pki/tls/certs/` sur RHEL/CentOS). Exécutez `update-ca-certificates` après avoir ajouté le certificat.
- **Option C** : sous Windows, si la CA de l'entreprise est installée dans le magasin de certificats Windows, rclone peut ne pas l'utiliser par défaut (il utilise sa propre implémentation TLS Go). Exportez la CA de l'entreprise depuis le magasin de certificats Windows sous forme de fichier PEM et utilisez `--ca-cert`.

Contactez votre service informatique pour obtenir le certificat de la CA de l'entreprise si vous ne le possédez pas.

## Solution 3 : Certificats auto-signés (stockage auto-hébergé)

Lors de la connexion à un stockage auto-hébergé comme MinIO, Nextcloud via WebDAV, ou un serveur SFTP privé avec un certificat TLS auto-signé, rclone rejettera la connexion car le certificat n'est pas émis par une CA de confiance.

Vous avez deux options :

- **Recommandé** : ajoutez votre certificat auto-signé au magasin de confiance du système ou utilisez `--ca-cert` pour pointer vers le fichier de certificat. Cela maintient la vérification TLS tout en faisant confiance à votre certificat spécifique.
- **Non recommandé mais parfois nécessaire** : utilisez `--no-check-certificate` dans les indicateurs personnalisés. Cela désactive entièrement la vérification du certificat, rendant la connexion vulnérable aux attaques de type « man-in-the-middle ». N'utilisez cette option que pour des tests sur des réseaux de confiance, jamais en production.

Pour MinIO en particulier, envisagez de générer un certificat approprié avec Let's Encrypt (gratuit) plutôt que d'utiliser un certificat auto-signé.

## Solution 4 : Certificat serveur expiré

Si le certificat du fournisseur cloud a réellement expiré, vous ne pouvez rien faire côté client — le fournisseur doit le renouveler. Cela est rare pour les grands fournisseurs (AWS, Google, Microsoft, Dropbox) mais peut se produire avec des fournisseurs plus petits ou des solutions auto-hébergées.

Vérifiez en consultant le certificat dans un navigateur web : accédez à l'URL du fournisseur et cliquez sur l'icône de cadenas pour afficher les détails du certificat. Si le certificat est expiré, contactez le fournisseur. Pour le stockage auto-hébergé, renouvelez le certificat via votre CA ou Let's Encrypt.

## Solution 5 : Incompatibilité de nom d'hôte

Les incompatibilités de nom d'hôte de certificat se produisent lorsque l'URL à laquelle vous vous connectez ne correspond pas au nom commun (Common Name) ou aux noms alternatifs du sujet (Subject Alternative Names) du certificat. Cela est courant lorsque :

- Vous vous connectez à un point de terminaison compatible S3 en utilisant une adresse IP plutôt que le nom d'hôte.
- L'URL du point de terminaison contient une faute de frappe ou utilise un sous-domaine différent de celui couvert par le certificat.
- Vous accédez à un service via un répartiteur de charge ou un proxy inverse qui présente un certificat différent.

Résolvez le problème en utilisant exactement le nom d'hôte pour lequel le certificat a été émis. Vérifiez la configuration du distant dans le Gestionnaire de distants de RcloneView et assurez-vous que l'URL du point de terminaison correspond aux noms d'hôte du certificat.

## Solution 6 : Mettre à jour rclone et RcloneView

Les anciennes versions de rclone peuvent utiliser un lot de certificats obsolète qui n'inclut pas les autorités de certification les plus récentes. Mettez à jour vers la dernière version de RcloneView, qui inclut un binaire rclone à jour avec les certificats de CA actuels.

## Diagnostiquer les problèmes de certificat

Lorsqu'une erreur de certificat survient, rassemblez des détails à l'aide du terminal intégré de RcloneView :

1. Exécutez `rclone lsd remote:` avec `--verbose` pour voir le message d'erreur complet, y compris les détails du certificat.
2. Utilisez `openssl s_client -connect endpoint:443` (si disponible) pour inspecter la chaîne de certificats du serveur.
3. Vérifiez l'émetteur du certificat, sa date d'expiration et ses noms alternatifs du sujet pour identifier le problème spécifique.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Si vous rencontrez des erreurs de certificat, vérifiez d'abord l'horloge de votre système.
3. Pour les environnements d'entreprise, obtenez et configurez le certificat de la CA de l'entreprise.
4. Pour le stockage auto-hébergé, ajoutez le certificat auto-signé à votre magasin de confiance.

Les erreurs de certificat SSL/TLS sont toujours résolubles — la solution dépend du fait que le problème provienne de l'horloge de votre système, d'un proxy d'entreprise, d'un certificat auto-signé ou d'un certificat serveur expiré. Identifier la cause profonde à partir du message d'erreur est la clé d'une résolution rapide.

---

**Guides associés :**

- [Ajouter AWS S3 et compatible S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Ajouter WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Parcourir et gérer le stockage distant](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

<CloudSupportGrid />
