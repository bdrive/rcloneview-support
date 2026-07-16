---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "Migrer Google Drive vers Cloudflare R2 avec RcloneView"
authors:
  - tayson
description: "Migrez vos fichiers Google Drive vers Cloudflare R2 avec RcloneView. Guide étape par étape couvrant la configuration, la conversion des Google Docs, la vérification et les avantages du zéro frais de sortie."
keywords:
  - rcloneview
  - google drive vers cloudflare r2
  - migrer google drive
  - outil de migration google drive
  - migration cloudflare r2
  - migration cloud à cloud
  - export google docs
  - migration sans frais de sortie
  - sauvegarde google drive r2
  - interface de migration de stockage cloud
tags:
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrer Google Drive vers Cloudflare R2 avec RcloneView

> Passer de Google Drive à Cloudflare R2 élimine les frais de sortie et vous donne un accès compatible S3 à vos données — **RcloneView** gère l'ensemble de la migration de façon visuelle.

Google Drive est une plateforme de collaboration puissante, mais à mesure que les besoins de stockage augmentent et que les schémas d'accès aux données évoluent, de nombreuses équipes se tournent vers le stockage objet pour sa scalabilité et sa flexibilité API. Cloudflare R2 offre un stockage compatible S3 avec zéro frais de sortie, ce qui en fait une destination attrayante pour les données devant être servies de manière programmatique. RcloneView comble l'écart entre ces deux modèles de stockage très différents, en gérant la conversion des formats Google Docs, les transferts de fichiers volumineux et la vérification post-migration dans une seule interface graphique.

Ce guide décrit le processus de migration complet — de la configuration des deux remotes à la vérification de l'arrivée intacte de chaque fichier.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi migrer de Google Drive vers Cloudflare R2

Les tarifs de Google Drive commencent à 1,99 $/mois pour 100 Go, avec des paliers entreprise sous Google Workspace. Bien qu'abordable pour la collaboration, Google Drive n'est pas conçu pour un accès programmatique aux données. Les limites de taux d'API, l'absence de compatibilité S3 et les quotas de stockage par utilisateur en font un mauvais choix pour servir des ressources statiques, héberger des jeux de données ou alimenter des pipelines CI/CD.

Cloudflare R2 répond à ces limitations. À 0,015 $/Go/mois avec zéro frais de sortie, R2 est nettement moins cher pour les charges de travail à forte lecture. Son API compatible S3 signifie que les outils et SDK existants fonctionnent sans modification. Si vos données ont démarré sur Google Drive mais doivent désormais être accessibles via des points de terminaison S3, migrer vers R2 est l'étape logique.

## Configurer Google Drive dans RcloneView

Ouvrez le gestionnaire de remotes et ajoutez un remote Google Drive. RcloneView utilise OAuth 2.0 — cliquez sur autoriser, connectez-vous à votre compte Google et accordez l'accès. Le jeton est stocké localement dans votre configuration rclone.

Si vous migrez depuis un compte Google Workspace avec des Drives partagés, vous pouvez configurer RcloneView pour accéder à des Drives partagés spécifiques plutôt qu'à votre seul Mon Drive personnel. Ceci est important pour les migrations organisationnelles où les données sont réparties entre plusieurs drives d'équipe.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout d'un remote Google Drive dans RcloneView" class="img-large img-center" />

## Configurer Cloudflare R2 dans RcloneView

Ajoutez R2 en tant que remote compatible S3. Dans le gestionnaire de remotes, sélectionnez **Amazon S3 Compatible** et configurez :

- **Provider** : Cloudflare
- **Access Key ID** et **Secret Access Key** : générés depuis le tableau de bord Cloudflare
- **Endpoint** : `https://<account-id>.r2.cloudflarestorage.com`

Créez un bucket de destination dans le tableau de bord Cloudflare ou via l'explorateur de RcloneView avant de démarrer la migration. Choisissez un nom de bucket qui reflète la source des données — par exemple `gdrive-archive-2026` — pour faciliter son identification ultérieure.

## Gérer la conversion des formats Google Docs

C'est la considération la plus critique lors d'une migration depuis Google Drive. Les formats natifs de Google — Docs, Sheets, Slides, Drawings — ne sont pas des fichiers au sens traditionnel. Ils n'existent que dans l'écosystème de Google et occupent zéro octet sur disque.

Lorsque RcloneView exporte ces fichiers, il les convertit en formats standards :

- **Google Docs** deviennent des `.docx` (Microsoft Word)
- **Google Sheets** deviennent des `.xlsx` (Microsoft Excel)
- **Google Slides** deviennent des `.pptx` (Microsoft PowerPoint)

Vous pouvez configurer le format d'export dans les paramètres du remote. Si votre équipe préfère les formats PDF ou OpenDocument, ajustez-les avant de démarrer la migration. Notez que les fichiers exportés perdent les fonctionnalités spécifiques à Google comme les commentaires, le mode suggestion et les liens de collaboration en temps réel.

Pour les fichiers déjà dans des formats standards (PDF téléversés, images, ZIP), le transfert est une simple copie octet par octet, sans conversion nécessaire.

## Lancer la migration

Une fois les deux remotes configurés, ouvrez l'explorateur à deux volets. Placez Google Drive à gauche et votre bucket R2 à droite. Vous pouvez migrer l'intégralité du drive ou sélectionner des dossiers spécifiques.

Pour une migration complète, utilisez une tâche de synchronisation. RcloneView énumérera tous les fichiers sur Google Drive, exportera les formats natifs Google, et transférera tout vers R2. Le tableau de bord de suivi en temps réel affiche la progression par fichier, la vitesse de transfert et le temps estimé restant.

Pour les migrations volumineuses (plusieurs centaines de gigaoctets ou plus), envisagez ces optimisations :

- **Augmenter les transferts parallèles** : R2 gère bien la concurrence élevée. Augmentez le nombre de transferts parallèles à 8-16 pour maximiser le débit.
- **Utiliser la planification de bande passante** : si la migration a lieu pendant les heures de bureau, limitez la bande passante pour éviter d'impacter les autres utilisateurs du réseau.
- **Procéder par étapes** : migrez dossier par dossier plutôt que tout en une fois. Cela facilite la vérification de chaque lot et la reprise en cas d'interruption.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Suivi de la progression de la migration Google Drive vers R2 dans RcloneView" class="img-large img-center" />

## Vérifier la migration avec Compare

Une fois la migration terminée, exécutez l'opération de comparaison de RcloneView entre Google Drive et R2. La vue de comparaison met en évidence :

- **Fichiers uniquement sur la source** : éléments dont le transfert a échoué ou qui ont été ignorés
- **Fichiers uniquement sur la destination** : ajouts inattendus (rares, mais à vérifier)
- **Fichiers différents** : écarts de taille ou de hash indiquant des transferts incomplets

Notez que les fichiers Google Docs apparaîtront toujours comme différents, car le format exporté diffère du format natif Google à zéro octet. Concentrez-vous sur les fichiers non natifs pour une comparaison pertinente. Si des fichiers standards affichent des écarts, relancez une synchronisation pour ne transférer que les éléments manquants ou modifiés.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vérification de la migration Google Drive vers R2 avec compare dans RcloneView" class="img-large img-center" />

## Après la migration : synchronisation incrémentale

Après la migration initiale, vous pouvez souhaiter maintenir R2 synchronisé avec Google Drive pendant une période de transition. Configurez une tâche de synchronisation planifiée dans RcloneView — quotidienne ou horaire selon vos besoins. Cela garantit que les nouveaux fichiers ajoutés à Google Drive sont automatiquement répliqués vers R2 jusqu'à la bascule complète.

Une fois la transition terminée et tous les points d'accès référençant R2, vous pouvez désactiver la tâche de synchronisation et éventuellement archiver ou supprimer les données Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification de la synchronisation incrémentale de Google Drive vers R2 dans RcloneView" class="img-large img-center" />

## Historique des tâches et piste d'audit

Chaque exécution de migration est enregistrée dans l'historique des tâches de RcloneView. Vous pouvez consulter le nombre de fichiers transférés, les octets déplacés, les erreurs rencontrées et le temps écoulé pour chaque exécution. Cela fournit une piste d'audit à des fins de conformité et aide à résoudre les problèmes survenant pendant ou après la migration.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historique des tâches montrant les exécutions de migration Google Drive vers R2" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre Google Drive via OAuth et votre Cloudflare R2 en tant que remote compatible S3.
3. Configurez les formats d'export Google Docs (docx, xlsx, pptx ou vos alternatives préférées).
4. Lancez la migration à l'aide de l'explorateur à deux volets et vérifiez les résultats avec la fonction de comparaison.

Google Drive excelle en matière de collaboration, mais lorsque vous avez besoin d'un stockage compatible S3 et sans frais de sortie, Cloudflare R2 est la destination — et RcloneView en est le pont.

---

**Guides associés :**

- [Ajouter Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Ajouter AWS S3 et compatible S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparer le contenu des dossiers](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
