---
slug: fix-google-shared-drive-permission-errors-rcloneview
title: "Corriger les erreurs de permission Google Shared Drive — Résoudre les problèmes d'accès avec RcloneView"
authors:
  - tayson
description: "Corrigez les erreurs de permission Google Shared Drive qui bloquent l'accès aux fichiers et la synchronisation. Découvrez comment RcloneView résout les problèmes d'autorisation et d'accès aux team drives."
keywords:
  - Google Shared Drive permission error
  - team drive access denied
  - Shared Drive sync failed
  - Google Drive 403 error
  - Shared Drive authorization
  - RcloneView Shared Drive fix
  - Google Workspace permissions
  - team drive file access
  - Shared Drive rclone setup
  - Google Drive insufficient permissions
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de permission Google Shared Drive — Résoudre les problèmes d'accès avec RcloneView

> Une erreur 403 Forbidden sur un Shared Drive auquel vous devriez avoir accès est à la fois déroutante et urgente.

Les Google Shared Drives (anciennement Team Drives) introduisent un modèle de permissions à plusieurs niveaux qui va au-delà du simple partage de fichiers. Lorsque les outils de synchronisation échouent à accéder au contenu d'un Shared Drive, les messages d'erreur de l'API Google sont souvent vagues — « insufficient permissions » peut signifier une dizaine de choses différentes. RcloneView simplifie la configuration des Shared Drives grâce à une sélection explicite de l'ID du drive, une gestion correcte des scopes OAuth et des rapports d'erreur clairs qui identifient précisément l'échec de permission réel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## En quoi les permissions des Shared Drives diffèrent

Contrairement à Google Drive personnel, où le propriétaire du compte a un accès complet à tout, les Shared Drives utilisent des permissions basées sur des rôles, gérées au niveau organisationnel. Les membres peuvent se voir attribuer les rôles Manager, Content Manager, Contributor, Commenter ou Viewer, chacun avec des capacités spécifiques. Un Contributor, par exemple, peut ajouter des fichiers mais ne peut pas les supprimer ni les déplacer — une opération que la commande `sync` de rclone peut tenter par défaut.

Le détail essentiel est que l'accès à un Shared Drive doit être explicitement accordé au niveau du drive. Faire partie de la même organisation Google Workspace n'accorde pas automatiquement l'accès. De plus, les politiques de partage à l'échelle du domaine définies par l'administrateur Workspace peuvent outrepasser les permissions individuelles du drive, bloquant silencieusement des utilisateurs externes ou des comptes de service.

L'assistant de configuration des remotes de RcloneView vous invite à sélectionner un Shared Drive spécifique par son ID, garantissant que la connexion cible le bon drive plutôt que de revenir par défaut au « My Drive » personnel de l'utilisateur.

<img src="/support/images/en/blog/new-remote.png" alt="Selecting a Google Shared Drive in RcloneView remote setup" class="img-large img-center" />

## Configurer correctement les scopes OAuth

Une source fréquente d'erreurs de permission est l'insuffisance des scopes OAuth. Lorsque vous autorisez RcloneView pour la première fois avec Google, l'écran de consentement OAuth demande des permissions spécifiques. Si l'autorisation initiale a utilisé un scope en lecture seule, toutes les opérations d'écriture sur les Shared Drives échoueront avec une erreur 403.

RcloneView demande par défaut le scope `drive`, qui offre un accès complet en lecture-écriture. Si vous avez précédemment autorisé avec un scope plus restreint, vous devez réautoriser en relançant le flux de configuration. Le fichier de jeton stocke les scopes accordés, et RcloneView peut détecter quand le jeton actuel ne dispose pas des permissions nécessaires aux opérations que vous avez configurées.

Pour les environnements Google Workspace utilisant des comptes de service, le compte de service doit se voir accorder une délégation à l'échelle du domaine avec les scopes appropriés dans la console d'administration. Sans cette étape, le compte de service peut s'authentifier mais ne peut accéder à aucun contenu de Shared Drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive transfer settings in RcloneView" class="img-large img-center" />

## Résoudre les scénarios d'erreur courants

**« File not found » sur des fichiers qui existent :** cela signifie généralement que le remote rclone pointe vers My Drive au lieu du Shared Drive. Dans RcloneView, vérifiez que le paramètre `team_drive` de votre configuration de remote est défini sur l'ID correct du Shared Drive.

**« Insufficient permissions » lors d'un upload :** vérifiez votre rôle sur le Shared Drive. Les Contributors et rôles supérieurs peuvent envoyer des fichiers, mais si un administrateur a restreint les uploads aux seuls Managers, vous obtiendrez cette erreur. La journalisation détaillée de RcloneView (`-vv`) affiche la réponse exacte de l'API, y compris la permission manquante.

**« Rate limit exceeded » lors d'opérations en masse :** les Shared Drives partagent le quota d'API entre tous les membres. Une synchronisation volumineuse lancée par un utilisateur peut épuiser le quota, provoquant des erreurs de limitation 403 pour tout le monde. L'option `--tpslimit` de RcloneView limite les appels API pour rester dans les quotas partagés.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing file permissions and sync status in RcloneView" class="img-large img-center" />

## Compte de service et paramètres d'administration Workspace

Pour les workflows automatisés, les comptes de service constituent la méthode d'authentification recommandée. Le compte de service doit être ajouté en tant que membre de chaque Shared Drive auquel il doit accéder, avec au moins des privilèges Content Manager pour les opérations de synchronisation impliquant la suppression de fichiers.

Les administrateurs Workspace doivent également vérifier que la politique « Partage en dehors de l'organisation » autorise le mode d'accès du compte de service. Si l'administrateur a désactivé le partage externe, un compte de service provenant d'un projet GCP différent sera bloqué, quelle que soit son appartenance au Shared Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up automated Shared Drive sync with service account in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configurez un remote Google Drive** et sélectionnez votre Shared Drive par ID lors de la configuration.
3. **Vérifiez les scopes OAuth** en réautorisant si votre jeton actuel ne dispose pas des permissions d'écriture.
4. **Vérifiez votre rôle sur le Shared Drive** — Content Manager ou supérieur est requis pour les opérations de synchronisation complètes.

Avec la bonne configuration, les erreurs de permission des Shared Drives disparaissent et les workflows de synchronisation d'équipe s'exécutent sans accroc.

---

**Guides connexes :**

- [Monter des Google Shared Drives avec RcloneView](https://rcloneview.com/support/blog/mount-google-shared-drives-rcloneview)
- [Corriger les erreurs de synchronisation cloud « Permission Denied » — Résoudre les problèmes d'accès avec RcloneView](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Corriger les erreurs de limitation de débit de l'API cloud — Gérer les quotas avec RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
