---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "Résoudre les erreurs de connexion à DigitalOcean Spaces — Diagnostiquer les problèmes d'endpoint et de clés avec RcloneView"
authors:
  - jay
description: "Résolvez les erreurs de connexion à DigitalOcean Spaces, comme l'accès refusé et l'incohérence de signature, en vérifiant l'endpoint, la région et les clés dans RcloneView."
keywords:
  - résoudre l'erreur de connexion DigitalOcean Spaces
  - DigitalOcean Spaces accès refusé
  - Spaces SignatureDoesNotMatch
  - endpoint et région DigitalOcean Spaces
  - dépannage stockage compatible S3
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - clé d'accès Spaces
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les erreurs de connexion à DigitalOcean Spaces — Diagnostiquer les problèmes d'endpoint et de clés avec RcloneView

> La plupart des échecs de connexion à DigitalOcean Spaces se résument à trois paramètres : l'endpoint, la région et les clés d'accès.

Vous avez ajouté un remote Spaces, mais la liste des buckets est vide, ou chaque requête renvoie un accès refusé ou une erreur de signature. Spaces étant un service compatible S3, la cause est généralement un petit écart dans la configuration du remote. RcloneView vous permet d'inspecter et de corriger le remote, puis de le retester depuis la même fenêtre.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérifiez d'abord l'endpoint et la région

Les endpoints Spaces sont propres à chaque région, sous la forme `<region>.digitaloceanspaces.com`, par exemple `nyc3.digitaloceanspaces.com`. Si la région de l'endpoint diffère de celle où le Space a été créé, les requêtes échouent même si vos clés sont correctes. Ouvrez Remote Manager depuis l'onglet Remote, modifiez le remote et comparez l'endpoint avec la région affichée dans votre console DigitalOcean.

Utilisez l'endpoint régional simple, et non l'URL propre au Space qui inclut le nom du bucket. Ajouter le nom du bucket à l'endpoint est une cause fréquente de résultats étranges de type « bucket not found ».

<img src="/support/images/en/blog/new-remote.png" alt="Modification de l'endpoint d'un remote compatible S3 dans RcloneView" class="img-large img-center" />

## Vérifiez la clé d'accès et le secret

Spaces utilise sa propre paire de clés d'accès, distincte de votre jeton d'API DigitalOcean. Coller un jeton d'API dans le champ de la clé est une erreur fréquente. En cas de doute, régénérez une paire de clés Spaces, puis collez à nouveau les deux valeurs en vérifiant qu'aucun espace en début ou en fin de chaîne ne s'est glissé lors de la copie.

Si le listage fonctionne mais que les envois échouent, la clé n'a peut-être pas l'autorisation d'écriture sur ce Space. Créez une clé avec les droits appropriés et mettez à jour le remote.

## Tester depuis le terminal intégré

RcloneView inclut un onglet Terminal dans l'Info View du bas. Exécutez `rclone listremotes` pour confirmer que le remote existe, puis `rclone about "myspaces:"` ou un simple listage pour voir le texte brut de l'erreur. Le message exact indique si le problème vient de l'authentification, de l'endpoint ou du réseau.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches RcloneView montrant des transferts en erreur" class="img-large img-center" />

Consultez l'onglet Log et Job History pour repérer les échecs répétés. Si les erreurs n'apparaissent que sur les gros transferts, réduisez le nombre de transferts de fichiers dans les Advanced Settings de la tâche pour alléger la charge.

## Écarter les problèmes de réseau et d'heure

Une erreur de signature peut aussi provenir d'une horloge système très décalée, car les requêtes signées dépendent de l'heure actuelle. Corrigez l'horloge et réessayez. Les proxys d'entreprise et les pare-feu qui inspectent TLS peuvent également perturber les connexions ; testez donc depuis un autre réseau si les clés et l'endpoint semblent corrects.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Exécution d'un transfert vers DigitalOcean Spaces dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Remote Manager, modifiez votre remote Spaces et confirmez l'endpoint régional.
3. Saisissez à nouveau la clé d'accès et le secret Spaces.
4. Testez avec la copie d'un petit dossier, puis relancez votre tâche complète.

Un endpoint et une paire de clés correctement configurés transforment un échec vague en un workflow fiable et reproductible.

---

**Guides associés :**

- [Gérer DigitalOcean Spaces — Synchronisation et sauvegarde avec RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Corriger les erreurs de permissions d'accès refusé S3 avec RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Corriger les erreurs de certificat SSL/TLS avec RcloneView](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
