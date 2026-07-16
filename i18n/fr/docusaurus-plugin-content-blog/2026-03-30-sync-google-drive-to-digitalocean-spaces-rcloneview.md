---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "Synchroniser Google Drive avec DigitalOcean Spaces — Sauvegarde cloud avec RcloneView"
authors:
  - tayson
description: "Synchronisez Google Drive avec DigitalOcean Spaces pour une sauvegarde cloud abordable et compatible S3. Configurez des tâches de synchronisation automatisées avec l'interface visuelle de RcloneView."
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synchroniser Google Drive avec DigitalOcean Spaces — Sauvegarde cloud avec RcloneView

> Sauvegarder Google Drive vers DigitalOcean Spaces vous offre un filet de sécurité abordable et compatible S3 pour chaque fichier de votre Drive.

Google Drive gère brillamment la collaboration et l'édition en temps réel, mais il n'est pas conçu comme une cible de sauvegarde d'archivage. DigitalOcean Spaces propose un stockage objet compatible S3 à tarif forfaitaire, à 5 $ par mois pour 250 Go (avec un stockage supplémentaire à 0,02 $/Go), ce qui en fait une destination prévisible et abordable pour les sauvegardes de Drive. RcloneView connecte les deux services et les maintient synchronisés grâce à des tâches planifiées avec suivi de la progression en temps réel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi choisir DigitalOcean Spaces pour la sauvegarde de Google Drive

DigitalOcean Spaces fournit un stockage objet compatible S3 dans plusieurs régions (NYC, SFO, AMS, SGP, FRA). Son modèle de tarification forfaitaire élimine les surprises de coûts par requête que peut engendrer AWS S3. Pour les équipes exploitant déjà leur infrastructure sur DigitalOcean, Spaces s'intègre nativement — les fichiers synchronisés depuis Google Drive deviennent immédiatement accessibles aux Droplets, aux clusters Kubernetes et aux fonctions serverless.

Les options de sauvegarde natives de Google Drive sont limitées. Google Takeout produit des exports ponctuels, pas des miroirs continus. Les outils de sauvegarde tiers facturent souvent des frais par utilisateur qui rivalisent avec le coût de licences Google Workspace supplémentaires. Synchroniser Drive vers Spaces via RcloneView ne coûte que les frais de stockage Spaces et s'exécute sur votre propre machine ou serveur.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Configuration des distants

Ajoutez un distant Google Drive dans RcloneView en sélectionnant « Google Drive » comme fournisseur. Le flux OAuth s'authentifie via votre navigateur — connectez-vous avec votre compte Google et accordez l'accès. Vous pouvez limiter le distant à l'ensemble de votre Drive, à un lecteur partagé spécifique, ou à un seul dossier en configurant l'ID du dossier racine.

Pour DigitalOcean Spaces, créez un distant compatible S3. Sélectionnez « Amazon S3 Compliant », puis « DigitalOcean Spaces » dans la liste déroulante des fournisseurs. Saisissez votre clé d'accès et votre clé secrète Spaces (générées dans le panneau de contrôle DigitalOcean sous API > Spaces Keys). Définissez le point de terminaison sur votre région préférée, comme `nyc3.digitaloceanspaces.com` ou `fra1.digitaloceanspaces.com`. RcloneView valide les identifiants et liste vos Spaces existants.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## Création de la tâche de synchronisation

Ouvrez le gestionnaire de tâches de RcloneView et créez une nouvelle tâche. Définissez Google Drive comme source et votre Space DigitalOcean comme destination. Choisissez le mode « Sync » pour maintenir un miroir exact, ou le mode « Copy » si vous souhaitez conserver les fichiers supprimés dans Spaces même après leur suppression de Drive.

Google Drive stocke les Google Docs, Sheets et Slides dans des formats natifs au cloud, sans extensions de fichier traditionnelles. RcloneView les exporte automatiquement vers leurs équivalents Microsoft Office (`.docx`, `.xlsx`, `.pptx`) lors du transfert, garantissant qu'ils arrivent dans Spaces sous forme de fichiers utilisables. Vous pouvez personnaliser le format d'export dans la configuration du distant si vous préférez le PDF ou d'autres formats.

Configurez des transferts parallèles pour accélérer la synchronisation initiale. Quatre à huit transferts simultanés fonctionnent généralement bien dans les limites de quota de l'API Google Drive. Définissez une limite de bande passante si vous partagez la connexion avec d'autres services.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## Planification et maintenance continue

Planifiez l'exécution de la tâche de synchronisation chaque nuit ou chaque semaine, selon la fréquence de modification de votre Drive. Le planificateur de RcloneView prend en charge une syntaxe de type cron, et chaque exécution ne transfère que les fichiers modifiés depuis la dernière synchronisation. Le panneau d'historique des tâches suit chaque exécution avec horodatages, nombre de fichiers et volumes transférés.

DigitalOcean Spaces prend en charge un CDN intégré. Une fois vos fichiers Drive synchronisés, vous pouvez activer le CDN de Spaces pour diffuser les fichiers à l'échelle mondiale — utile pour distribuer des ressources marketing, de la documentation, ou des médias provenant de Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Authentifiez votre compte Google Drive via OAuth et, éventuellement, limitez le distant à un dossier ou un lecteur partagé spécifique.
3. Ajoutez votre distant DigitalOcean Spaces avec vos clés API et le point de terminaison de votre région.
4. Créez une tâche de synchronisation et planifiez son exécution de manière récurrente pour une sauvegarde continue.

Avec Google Drive synchronisé vers DigitalOcean Spaces, vos fichiers vivent dans deux clouds indépendants — protégés contre les suppressions accidentelles, les blocages de compte et les pannes de fournisseur.

---

**Guides connexes :**

- [Transférer Google Drive vers un autre compte facilement](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [Monter DigitalOcean Spaces comme un lecteur local avec RcloneView](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Synchroniser Linode Object Storage, S3 et Google Drive avec RcloneView](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />
