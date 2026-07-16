---
slug: organize-google-drive-libraries-rcloneview
title: "Organiser de grandes bibliothèques Google Drive avec RcloneView -- Trier, filtrer, comparer et supprimer les doublons"
authors:
  - tayson
description: Utilisez l'explorateur double volet de RcloneView, les filtres Compare et les actions sélectives de copie/suppression pour désencombrer d'immenses bibliothèques Google Drive et éliminer les doublons plus rapidement qu'avec l'interface web de Drive.
keywords:
  - nettoyage google drive
  - suppression des doublons google drive
  - organiser les fichiers google drive
  - comparaison rcloneview
  - filtre rclone
  - déduplication rclone
  - détecteur de doublons drive
  - gérer le stockage google workspace
  - gestion des fichiers cloud
  - interface graphique rclone
tags:
  - google-drive
  - productivity
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Organiser de grandes bibliothèques Google Drive avec RcloneView -- Trier, filtrer, comparer et supprimer les doublons

> Quand « Partagés avec moi » devient un labyrinthe et que des ZIP en double dévorent votre quota, RcloneView transforme le nettoyage en un flux de travail guidé plutôt qu'un projet de tout un week-end.

Les arborescences Google Drive désordonnées commencent innocemment : les designers déposent des exports dans des dossiers aléatoires, les Docs enregistrés automatiquement génèrent des versions partout, et les Drive partagés héritent de l'ancienne structure d'une agence. Google n'offre guère plus qu'une recherche manuelle, si bien que les équipes vivent avec des ressources dupliquées, des dossiers de cache surdimensionnés et un nommage chaotique. RcloneView superpose une interface graphique double volet à rclone afin que vous puissiez parcourir des millions d'objets, trier par taille ou par ancienneté, filtrer les chemins inutiles et supprimer les doublons en toute confiance.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Pourquoi les locataires Google Workspace ont besoin d'un plan de nettoyage

- Drive pour le web masque la taille réelle des dossiers et ne peut pas afficher de différences côte à côte, ce qui complique la justification de ce qui peut être supprimé.
- Les archives en double ou les aperçus multimédias grignotent les frais de stockage mutualisé, en particulier sur les niveaux Business Standard/Plus.
- Les équipes juridique, marketing et ingénierie ont besoin de chemins de dossiers déterministes (par ex. `/Brand/2023/Campaign-A`) afin que les automatisations puissent retrouver les fichiers les plus récents.
- Sans revues régulières, les enregistrements et exports orphelins s'accumulent, créant un risque de conformité lorsque les politiques d'accès changent.

## Comment RcloneView accélère le ménage sur Google Drive

RcloneView exploite des backends rclone éprouvés pour afficher le contenu de Drive comme un gestionnaire de fichiers local :

- **Explorateur double volet :** montez deux dossiers Drive ou comparez Drive à un espace d'archive pour voir ce qui a changé avant de supprimer quoi que ce soit.
- **Contrôles de la vue Compare :** mettez en évidence les fichiers présents uniquement à gauche, uniquement à droite, ou différents, puis copiez ou supprimez en masse à l'aide de la même interface documentée dans [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- **Boîte à outils de filtrage :** les clients titulaires d'une licence Plus peuvent exclure les caches, les rendus ou les dossiers `.git/` directement dans les filtres Compare, en suivant les étapes de la section de filtrage du même guide.
- **Bascules de résultats et outils de saut :** basculez entre les vues (Left-only, Right-only, Different) et utilisez les icônes « Find » de Compare pour sauter vers les dossiers présentant les plus grandes différences de taille ou de nombre de fichiers.
- **Actions sécurisées :** chaque suppression ou copie utilise les vérifications de rclone pour garantir que vous ne touchez que les fichiers mis en évidence par Compare, ce qui évite les opérations accidentelles de type « supprimer et espérer ».

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Liste de préparation

| Élément                    | Pourquoi c'est important                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Portées Google Workspace | Utilisez un compte disposant au moins des droits de gestionnaire de contenu sur les zones Drive partagés ou Mon Drive que vous prévoyez de nettoyer. |
| Dernière version de RcloneView | Mettez d'abord à jour (Aide -> Rechercher les mises à jour) pour bénéficier des récentes corrections de stabilité de Compare et de tri de grands dossiers avant de lancer les nettoyages. |
| Licence Plus (facultatif) | Nécessaire pour l'interface de filtrage de Compare ; sans Plus, vous pouvez toujours comparer/copier/supprimer, mais les motifs de filtrage restent désactivés. |
| Destination de référence    | Envisagez de rattacher un second dossier Drive, un NAS ou un bucket S3 afin de pouvoir copier les données à conserver avant de supprimer l'encombrement. |

## Plan de nettoyage étape par étape

### 1. Cartographier le désordre

Ouvrez Remote Explorer et attachez les emplacements Drive qui vous intéressent (Drive partagés, dossiers de département, Mon Drive personnel). Étiquetez clairement chaque distant (par ex. `drive_creative`, `drive_finance_archive`) afin que Compare soit compréhensible par la suite.

### 2. Instantané avec Compare

Ouvrez les deux dossiers que vous voulez analyser -- par exemple, `drive_creative:/2023/Projects` à gauche et `drive_creative:/Archive/2023` à droite. Cliquez sur **Compare** (ruban Home). Lorsque la fenêtre de résumé signale la fin de l'analyse, basculez vers l'onglet Compare pour voir les comptages agrégés et les états des fichiers ([procédure complète](/howto/rcloneview-basic/compare-folder-contents#display-by-selected-result-type)).

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

### 3. Filtrer le bruit, se concentrer sur les signaux

Cliquez sur l'icône **Filter** pour écarter les rendus, les proxies ou d'autres dossiers jetables. Ajoutez des motifs tels que `Cache/`, `_Proxies/`, `.bak`, ou `.zip` selon ce que vous voulez masquer. Les filtres persistent pour cette session Compare, ce qui vous permet de relancer les analyses jusqu'à ce qu'il ne reste que des fichiers pertinents (voir « Using filters to refine comparison » dans le même guide pratique).

### 4. Faire apparaître les doublons avec les vues Compare

Utilisez la barre d'outils Compare pour vous concentrer sur les différences, puis sautez vers les dossiers présentant les plus grands changements :

- **Left-only** fait apparaître les fichiers présents dans votre dossier de travail mais absents de l'archive.
- **Right-only** repère les fichiers déjà archivés, ce qui suggère qu'il est sûr de supprimer la copie de travail.
- **Different** révèle des noms en double avec des tailles différentes -- souvent des exports redondants.
- Utilisez les icônes **Find** (documentées dans le guide Compare) pour sauter vers les dossiers présentant les plus grandes différences de taille ou de nombre de fichiers et nettoyer ceux-là en premier.

Sélectionnez les fichiers fautifs (`Ctrl`+clic ou `Shift`+clic) et repérez-les mentalement pour la copie ou la suppression.

### 5. Copier ce qu'il faut garder, purger le reste

Lorsque vous identifiez un dossier que vous souhaitez conserver, cliquez sur **Copy -&lt;** ou **&lt;- Copy** pour le déplacer vers votre destination sécurisée. Une fois la copie confirmée (recherchez l'icône d'égalité mentionnée dans le guide pratique), mettez en évidence les doublons et cliquez sur **Delete** du côté que vous nettoyez. Travaillez par lots pour ne pas surcharger l'API Drive, et consultez la barre d'état pour voir le nombre d'opérations réussies.

### 6. Reconstruire la structure par glisser-déposer

Besoin de déplacer des dizaines de dossiers de projet vers une nouvelle taxonomie ? Utilisez les volets de l'Explorer (en dehors de Compare) pour glisser des dossiers entiers vers de meilleurs emplacements ou les renommer sur place. Comme tout passe par rclone, les déplacements distants s'effectuent côté serveur lorsque c'est possible, ce qui fait gagner du temps et de la bande passante.

### 7. Journaliser, répéter et automatiser les rapports

Enregistrez un préréglage Compare par département afin de pouvoir relancer le même nettoyage chaque mois. Associez-le à une tâche de synchronisation ponctuelle (voir [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)) configurée en `Copy` avec `--dry-run` pour envoyer par e-mail aux parties prenantes un rapport des éléments qui seront archivés ou supprimés.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  


## Exemples de flux de travail

| Scénario                                      | Que faire dans RcloneView                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Drive partagé marketing atteignant les quotas de stockage | Comparez `/Assets/` et `/Archive/Assets/`, filtrez `/_Proxies/`, copiez les dossiers validés par le client vers l'archive, supprimez les décharges RAW redondantes. |
| Établissement scolaire nettoyant les dossiers des enseignants        | Utilisez les vues **Different** et **Left-only** pour repérer les dossiers de classe obsolètes, copiez les programmes finaux vers un coffre de conformité, supprimez les exports redondants. |
| Équipe d'ingénierie préparant des licenciements/un litige juridique  | Comparez les instantanés de `My Drive` au compartiment de conservation légale, filtrez `.git/`, copiez les livrables, et signalez tout le reste pour suppression avec des journaux auditables. |

## Bonnes pratiques pour des nettoyages fluides

- Effectuez d'abord une comparaison en **dry-run** pour comprendre les comptages avant de supprimer quoi que ce soit.
- Gardez les sessions Compare sous 500 000 objets chacune pour éviter le throttling de l'API Drive ; divisez par année ou par département si nécessaire.
- Déplacez les lots de suppression volumineux vers le soir ou le week-end pour éviter d'atteindre les limites de débit pendant les heures de bureau.
- Utilisez des comptes de service en lecture seule lorsque vous n'avez besoin que de rapports, puis passez à un compte avec des droits élevés pour le nettoyage proprement dit.

## Garder Drive léger à l'avenir

Une fois que les équipes constatent la rapidité avec laquelle on peut comparer, filtrer et trier les dossiers Drive dans RcloneView, elles sont plus enclines à planifier des sessions d'hygiène mensuelles plutôt que d'attendre des quotas d'urgence. Intégrez la recette de nettoyage dans une procédure opérationnelle standardisée, exportez les préréglages Compare, et partagez-les avec chaque propriétaire de Drive partagé afin que les doublons et les fichiers inutiles ne s'accumulent plus jamais.


<CloudSupportGrid />
