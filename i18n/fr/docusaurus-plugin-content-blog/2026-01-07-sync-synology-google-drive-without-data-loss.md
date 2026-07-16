---
slug: sync-synology-google-drive-without-data-loss
title: "Synchroniser un NAS Synology avec Google Drive sans perte de données : une stratégie Compare-first"
authors:
  - tayson
description: "Utilisez un workflow Compare-first pour synchroniser un NAS Synology avec Google Drive ou OneDrive en toute sécurité. Évitez les synchronisations dans le mauvais sens, les suppressions et les erreurs coûteuses."
keywords:
  - synology google drive sync
  - synology onedrive sync
  - nas cloud sync
  - synology sync without data loss
  - compare first sync
  - rcloneview synology
  - cloud sync safety
  - prevent wrong way sync
  - nas backup strategy
  - rcloneview compare
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Synchroniser un NAS Synology avec Google Drive sans perte de données : une stratégie Compare-first

> La synchronisation NAS-vers-cloud est puissante, mais une seule mauvaise direction peut tout supprimer. Un workflow Compare-first rend la synchronisation NAS prévisible et sûre.

Synology NAS + Google Drive (ou OneDrive) est la configuration la plus courante pour les petites entreprises et à domicile. Le problème, c'est que la synchronisation semble simple jusqu'à ce qu'un mauvais sens, un nettoyage dans le cloud ou un décalage de timing provoque des suppressions massives. Ce guide montre comment sécuriser la synchronisation grâce à une stratégie Compare-first dans RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi la synchronisation NAS-cloud est populaire et risquée

Le NAS est la source de vérité locale. Les services cloud ajoutent le partage et la protection hors site. Mais la synchronisation ne pardonne rien :

- Un mauvais sens efface la destination
- Un nettoyage d'un côté supprime l'autre
- La sémantique des fichiers NAS ne correspond pas au comportement de l'API cloud

C'est pourquoi des recherches comme « synology google drive sync delete » ou « nas cloud sync problem » sont si courantes.

## DSM Cloud Sync est simple, mais limité

DSM Cloud Sync est pratique, mais il manque de contrôles de sécurité essentiels :

- Aucun aperçu clair des suppressions
- Filtrage limité des fichiers système du NAS
- Moins de garde-fous pour les grandes migrations

Si vous avez besoin de plus de contrôle, il vous faut des workflows Compare-first.

## Pourquoi Google Drive et OneDrive sont particulièrement risqués

- Google Drive utilise une structure de fichiers virtuelle et des métadonnées basées sur l'API.
- OneDrive introduit des fichiers de conflit et des comportements de verrouillage.
- Le NAS attend une sémantique de fichiers locale et des mises à jour immédiates.

Ces différences amplifient les erreurs de synchronisation, sauf si vous validez les changements au préalable.

## Le problème central : la synchronisation aveugle

La synchronisation aveugle signifie que vous lancez Sync sans voir ce qui va changer. Accidents typiques :

- Dossier NAS vide -> sync -> le cloud supprime tout
- Nettoyage du cloud -> sync -> le NAS supprime tout

Compare-first élimine ce risque en montrant les changements avant qu'ils ne se produisent.

## Compare vs Sync : objectifs différents, risques différents

- **Compare** est en lecture seule et sûr. Il montre ce qui va changer.
- **Sync** effectue de vrais changements, difficiles à annuler.

Compare n'est pas optionnel. C'est la porte de sécurité.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Filtres des résultats de comparaison" class="img-large img-center" />

## Étape par étape : synchronisation NAS -> Google Drive / OneDrive en toute sécurité

### Étape 1 : définir le périmètre

- Ne synchronisez pas tout le volume NAS
- Choisissez des dossiers partagés spécifiques
- Séparez par équipe ou par projet

### Étape 2 : décider du sens en premier

- NAS -> Cloud pour la sauvegarde
- Cloud -> NAS pour la restauration
- La synchronisation bidirectionnelle est la plus dangereuse

### Étape 3 : Compare avant chaque Sync

Vérifiez :

- les grands nombres de suppressions
- les changements inattendus du nombre de fichiers
- les incohérences d'horodatage ou de taille

<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Comparaison de dossiers terminée" class="img-large img-center" />

## D'abord Copy, ensuite Sync (le chemin le plus sûr)

**Copy** est plus sûr car il ne supprime rien. Utilisez Copy pour valider le workflow avant de lancer Sync.

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Comparer et copier uniquement les changements" class="img-large img-center" />

Une fois la structure stable, envisagez Sync avec Dry Run :

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync en mode simulation (dry run)" class="img-large img-center" />

## Gérer les fichiers système du NAS pendant la synchronisation

Les répertoires NAS contiennent souvent :

- `@eaDir`
- des caches temporaires
- des métadonnées générées par les paquets

Ces fichiers changent fréquemment et déclenchent des synchronisations répétées. Utilisez Compare et les filtres pour les exclure.

## Compare-first réduit le coût et le risque

- Moins de trafic API
- Cycles de synchronisation plus rapides
- Usage cloud prévisible
- Moins de suppressions accidentelles

## Automatiser des tâches de synchronisation sûres

Enregistrez le workflow en tant que Job et planifiez-le :

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Enregistrer la synchronisation dans Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Ajouter une planification de tâche" class="img-large img-center" />
</div>

Cela vous donne des paramètres reproductibles, des journaux d'historique et des audits plus faciles.

## Scénarios réels de synchronisation NAS

### Sauvegarde photo d'un NAS domestique

- NAS -> Google Drive
- Compare + Copy-first

### Serveur de fichiers de bureau

- NAS -> OneDrive
- Stratégie à sens unique, filtrer les fichiers système

### Workflow hybride

- NAS -> Cloud pour la sauvegarde
- Cloud -> NAS pour la restauration sélective

## Idées reçues courantes

**« La synchronisation bidirectionnelle est toujours la meilleure option. »**
Pratique, mais la plus dangereuse.

**« DSM Cloud Sync suffit. »**
Fonctionne pour les cas simples, mais échoue à grande échelle.

## Liste de bonnes pratiques

- Toujours Compare avant Sync
- Commencer par Copy
- Garder un périmètre restreint
- Surveiller le nombre de suppressions
- Filtrer les fichiers système du NAS

## Conclusion : la synchronisation est sûre si vous faites Compare d'abord

NAS + Google Drive ou OneDrive est puissant, mais seulement si vous contrôlez le workflow. Compare-first rend la synchronisation sûre, prévisible et réversible. Confirmez, copiez, puis synchronisez.
