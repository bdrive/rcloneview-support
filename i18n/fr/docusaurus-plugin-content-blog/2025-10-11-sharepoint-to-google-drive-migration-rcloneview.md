---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "Maîtriser la migration de SharePoint vers Google Drive avec RcloneView : un guide d'entreprise étape par étape"
authors:
  - tayson
description: "Migrations SharePoint vers Google Drive visuelles, régulées et auditables avec RcloneView — conçues pour les équipes IT d'entreprise qui souhaitent une bascule sans CLI et conforme aux politiques."
keywords:
  - SharePoint to Google Drive
  - move files from SharePoint to Drive
  - RcloneView SharePoint
  - cloud migration for business
  - Microsoft 365 migration tool
  - migrate sharepoint document library
  - google drive workspace migration
  - rclone sharepoint connector
  - office 365 to google drive
  - sharepoint migration guide
tags:
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Maîtriser la migration de SharePoint vers Google Drive avec RcloneView : un guide d'entreprise étape par étape

> Déplacez les bibliothèques de documents SharePoint vers Google Drive (Workspace) avec un flux visuel, régulé et reproductible que les administrateurs d'entreprise peuvent exécuter sans toucher à la CLI.

RcloneView intègre les connecteurs SharePoint et Google Drive de rclone dans une interface graphique dotée de journaux adaptés aux audits, d'un planificateur et d'une surveillance en temps réel. Ce guide explique comment planifier et exécuter une migration par étapes afin de déplacer des sites d'équipe, des dossiers de projet ou des unités commerciales entières sans interruption de service.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Pourquoi utiliser RcloneView pour SharePoint → Google Drive

- Aucune CLI requise : configurez les distants Microsoft 365 (SharePoint/OneDrive Entreprise) et Google Drive via des dialogues guidés.
- Adapté aux entreprises : régulez les requêtes pour éviter les limites de débit des API SharePoint et Drive, et planifiez les bascules pendant les fenêtres de maintenance.
- Visibilité opérationnelle : explorateur côte à côte, comparaison et copie, historique des tâches, et surveillance en direct des transferts pour les audits.
- Déplacements flexibles : copie unique, synchronisation bidirectionnelle, ou synchronisations delta par étapes qui maintiennent la source et la destination alignées.

## Prérequis (prêts pour l'entreprise)

- RcloneView installé et connecté avec des comptes ayant accès au site SharePoint cible et à la destination Google Drive (Drive partagé ou Mon Drive).
- Consentement administrateur accordé pour Microsoft Graph si votre tenant restreint les applications tierces.
- Une fenêtre de bascule (ou la possibilité d'effectuer des synchronisations par étapes) et un quota Drive/Drive partagé suffisant.

## Étape 1 — Connecter les distants SharePoint et Google Drive

1) Dans **RcloneView ? Paramètres ? Stockage distant**, ajoutez un nouveau distant.  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) Choisissez **OneDrive/SharePoint (Microsoft 365)**, connectez-vous avec le compte qui possède ou peut accéder au site, et sélectionnez le bon **Site / Bibliothèque de documents** (par exemple, `/sites/Marketing/Shared Documents`).  
3) Ajoutez **Google Drive** (Workspace) : choisissez d'atterrir dans **Mon Drive** ou dans un **Drive partagé** spécifique pour le projet.  
4) Testez chaque distant et enregistrez.

## Étape 2 — Cartographier les bonnes bibliothèques et dossiers cibles

- Pour chaque bibliothèque SharePoint, notez le chemin sélectionné dans le dialogue de connexion ; ouvrez-le dans l'explorateur pour confirmer la racine (vous devriez voir les dossiers de département attendus).
- Créez la structure de dossiers correspondante dans Google Drive/Drive partagé si elle n'existe pas déjà.
- Si vous avez une isolation par équipe, répétez l'opération avec plusieurs distants SharePoint (un par site ou par collection sensible).

## Étape 3 — Valider avec une vérification côte à côte

- Ouvrez les deux distants dans l'explorateur à deux volets.  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- Utilisez **Comparer** pour prévisualiser les différences (taille, fichiers manquants) avant de copier.  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- Copiez d'abord un petit dossier pilote pour vérifier les permissions, les fichiers versionnés et les règles de nommage (les caractères `# % & { }` de SharePoint deviennent valides sur Drive, mais les chemins longs peuvent encore nécessiter un nettoyage).

## Étape 4 — Choisir votre mode de migration

- **Copie unique (la plus rapide)** : utilisez **Copier** pour un transfert direct vers le nouveau Drive partagé. Idéal lorsque la source passe en lecture seule pendant la bascule.
- **Synchronisation (bidirectionnelle en option)** : utilisez **Synchroniser** lorsque les utilisateurs modifient encore des fichiers pendant la migration ; terminez par une synchronisation delta finale dans la fenêtre de bascule.
- **Copie côté serveur si possible** : si votre SharePoint et Drive sont accessibles via Internet, RcloneView exploite les copies côté serveur lorsque cela est pris en charge pour réduire les sorties de données.

Le glisser-déposer fonctionne également pour les déplacements ponctuels et les corrections rapides.  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Étape 5 — Créer une tâche reproductible et planifier la bascule

1) Dans **Tâches**, créez une nouvelle tâche **Copier** ou **Synchroniser** depuis la bibliothèque SharePoint vers le chemin du Drive partagé cible.  
2) Définissez les **Limites de bande passante** et les **Transferts** pour respecter la régulation de Microsoft 365 et Google Drive (par exemple, `tpslimit`, `--drive-chunk-size`, ou les curseurs **Transfert maximum**).  
3) Enregistrez, puis planifiez pendant les heures creuses pour le déplacement en masse ; ajoutez une seconde planification pour les deltas.  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Étape 6 — Exécuter, surveiller et gérer la régulation

- Démarrez la tâche et observez la progression en temps réel (débit, ETA, erreurs).  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- Si vous voyez des réponses `throttled` ou `403`/`429`, réduisez les transferts ou ajoutez un court délai d'attente ; RcloneView affiche ces journaux sans ouvrir de terminal.
- Utilisez l'**Historique des tâches** pour exporter les résultats à des fins de conformité et relancer directement depuis l'interface tout objet en échec.

## Étape 7 — Vérifications post-migration et transmission

- Relancez **Comparer** pour confirmer que la destination correspond à SharePoint avant de débloquer l'accès des utilisateurs.
- Vérifiez ponctuellement les permissions : bien que les listes de contrôle d'accès (ACL) de Drive ne reproduisent pas automatiquement celles de SharePoint, vous pouvez partager en masse la nouvelle racine avec les bons groupes Workspace.
- Conservez la tâche comme synchronisation delta planifiée pendant quelques jours si les équipes restent actives sur SharePoint, puis passez la source en lecture seule.

## Conseils de dépannage pour les environnements d'entreprise

- **Sites complexes** : connectez-vous par site/bibliothèque plutôt qu'à l'échelle du tenant pour éviter une expansion accidentelle du périmètre.
- **Chemins longs ou caractères inhabituels** : activez la normalisation Unicode de Rclone et la gestion de la longueur des chemins dans les options avancées ; renommez les cas particuliers dans l'explorateur avant la bascule.
- **Souveraineté des données** : pour les équipes soumises à réglementation, ciblez des Drives partagés régionaux et conservez un audit des exports d'historique des tâches.

## Ressources associées

- [Ajouter un distant via connexion par navigateur (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Ajouter Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchroniser instantanément les stockages distants](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Monter un stockage cloud comme un lecteur local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Conclusion

RcloneView offre aux équipes IT un chemin visuel et à faible risque pour migrer les bibliothèques SharePoint vers Google Drive ou des Drives partagés. Grâce à une régulation conforme aux politiques, des bascules planifiées et une surveillance en direct, vous pouvez déplacer des données critiques pour l'entreprise sans scripts en ligne de commande, tenir les parties prenantes informées, et laisser en place une tâche reproductible pour de futures consolidations.

<CloudSupportGrid />
