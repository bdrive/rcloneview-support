---
slug: transfer-google-drive-to-another-account-easily
title: Transférez Google Drive vers un autre compte facilement avec RcloneView
authors:
  - jay
description: Déplacez des fichiers entre comptes Google Drive avec RcloneView. Planifiez vos migrations, restez dans les quotas Google, et automatisez les transferts—sans ligne de commande.
keywords:
  - rcloneview
  - transfert google drive
  - migrer google drive
  - transfert entre comptes
  - synchronisation cloud
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transférez Google Drive vers un autre compte facilement avec RcloneView

> Changez de compte sans perdre le contrôle. RcloneView habille le backend Google Drive de rclone d'une interface graphique conviviale afin que vous puissiez transmettre, consolider ou archiver des données entre comptes Drive en toute clarté—et sans script.

## Pourquoi déplacer des données entre comptes Google Drive ?

Diplômes, changements d'emploi, fusions et simples projets de nettoyage nécessitent souvent de déplacer des fichiers entre comptes Google. Les outils de transfert intégrés de Google sont utiles, mais ils laissent des lacunes : ils ne couvrent que Mon Drive, ignorent les filtres granulaires et ne permettent pas de préparer ou de planifier les migrations. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### Connaître les limites avant de commencer

- **Taille par fichier** : Les formats non-Google peuvent atteindre jusqu'à **5 To** par élément ; les Docs, Sheets et Slides ont des limites distinctes. [Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **Quota de transfert quotidien** : L'API Drive autorise **750 Go** de téléversements (et opérations de copie) par utilisateur et par jour ; le plafond se réinitialise toutes les 24 heures. [Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **Règles de propriété** : Les transferts personnels couvrent uniquement Gmail + Mon Drive. Les administrateurs Workspace peuvent réattribuer la propriété au sein d'un domaine, mais les drives partagés inter-domaines nécessitent une copie. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### Aperçu des approches

| Approche | Idéal pour | Limitations |
|---|---|---|
| L'outil « Transférer votre contenu » de Google | Étudiants quittant l'école ou passant à un Gmail personnel | Uniquement Mon Drive + Gmail ; pas de filtres ; ne peut cibler les drives partagés |
| Partager vers un compte secondaire puis copier | Petites transmissions au sein d'un même domaine | Travail manuel ; l'historique des versions et les commentaires peuvent se fragmenter |
| Transfert entre comptes avec RcloneView | Mélange de Mon Drive + drives partagés, déplacements de dossiers granulaires, synchronisations répétables | Nécessite des remotes rclone pour chaque compte (géré par l'assistant RcloneView) |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Préparation

1. **Clarifiez la propriété et le périmètre** : Listez les dossiers (Mon Drive et drives partagés) qui doivent être déplacés ou rester en place. Décidez qui doit posséder les copies de destination.  
2. **Vérifiez les quotas** : Contrôlez l'espace de stockage disponible et notez les archives vidéo volumineuses susceptibles d'atteindre la limite de 750 Go/jour.  
3. **Planifiez les fenêtres de bascule** : Communiquez une période de gel ou un calendrier échelonné afin que les collaborateurs sachent où travailler.  
4. **Étiquetez les filtres** : Décidez des règles d'inclusion/exclusion (par ex. ignorer `/Backups/old/` ou déplacer uniquement `/Projects/2024/`).  
5. **Sauvegardez les dossiers critiques** : Pour le contenu réglementé, exportez un inventaire ou un historique des versions avant le déplacement.

🔍 Guides utiles  
- [Configuration rapide OAuth Google dans RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Ajouter des remotes Google Shared Drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## Connecter les deux comptes Google Drive dans RcloneView

RcloneView transforme `rclone config` en assistant guidé, afin que vous puissiez enregistrer chaque compte Google une seule fois et le réutiliser pour les transferts.

1. Ouvrez **RcloneView** → cliquez sur **`+ New Remote`**.  
2. Choisissez **Google Drive** → connectez-vous avec le **compte source** → donnez au remote un nom clair (par ex. `Drive-Source`).  
3. Répétez l'opération pour le **compte de destination** (par ex. `Drive-Destination`).  
4. Si des drives partagés sont concernés, activez-les dans l'assistant ou ajoutez l'ID du drive.  
5. Vérifiez que les deux remotes apparaissent dans le panneau Explorer et que vous pouvez parcourir les dossiers de chaque côté.

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## Choisir le bon flux de transfert dans RcloneView

Commencez par un dossier pilote avant de copier l'intégralité du compte. Une fois l'essai concluant, poursuivez avec des déplacements plus larges ou des synchronisations planifiées.

### Glisser-déposer (déplacements manuels)

Ouvrez le remote source à gauche et la destination à droite, puis glissez-déposez fichiers ou dossiers d'un côté à l'autre. Parfait pour les transmissions ponctuelles ou le déplacement de quelques dossiers de drive partagé.  
👉 Voir plus : [Copier des fichiers par glisser-déposer](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### Comparer et copier (prévisualiser les différences)

Exécutez **Compare** pour lister ce qui est nouveau, modifié ou manquant entre les deux comptes. Passez en revue les différences, désélectionnez ce que vous souhaitez ignorer, puis copiez. Idéal pour les migrations échelonnées ou le nettoyage après la fenêtre de gel.  
👉 Voir plus : [Comparer et gérer les fichiers](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### Synchronisation et tâches planifiées (automatiser les bascules)

Utilisez **Sync** pour refléter les dossiers sélectionnés jusqu'à ce que la destination remplace entièrement la source. Effectuez toujours un **dry-run**, puis enregistrez la tâche et planifiez des exécutions nocturnes ou horaires jusqu'à la fin de la bascule.  
👉 Voir plus :  
- [Synchroniser les stockages distants](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)  
- [Planification et exécution des tâches](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**Astuces pratiques**

- Fractionnez les migrations en lots restant sous le quota API de 750 Go/jour ; enchaînez avec le lot suivant une fois le plafond réinitialisé.  
- Lors de la copie de contenu d'un drive partagé vers Mon Drive personnel, vérifiez les permissions et repartagez les dossiers clés depuis le compte de destination.  
- Passez les dossiers source en lecture seule pendant la synchronisation finale afin que le dernier delta reste faible et prévisible.  
- Exportez les journaux rclone depuis l'historique des tâches de RcloneView pour conserver une trace d'audit de ce qui a été déplacé et quand.

## Après la migration

- **Vérifiez ponctuellement la propriété** : Confirmez que le compte de destination possède les fichiers critiques (en particulier les Docs/Sheets) et que les collaborateurs conservent leur accès.  
- **Reconstruisez les raccourcis et favoris** : Les raccourcis Google ne sont pas transférés ; recréez les liens importants dans le nouveau compte.  
- **Nettoyez la source** : Archivez ou supprimez les anciens dossiers une fois que la destination fait foi, pour éviter les modifications accidentelles.  
- **Surveillez les permissions des drives partagés** : Les grandes équipes peuvent avoir besoin de mettre à jour l'appartenance aux groupes pour correspondre à la nouvelle structure de propriété.

## Conclusion — points clés

- Les outils de transfert natifs de Google sont utiles mais limités aux opérations générales.  
- RcloneView offre une sélection granulaire des dossiers, des aperçus et des synchronisations planifiées entre comptes Google Drive—le tout entièrement via une interface graphique.  
- Planifiez en fonction des limites de quota de Google, testez votre déplacement avec un pilote, et documentez la bascule afin que les collègues sachent où trouver les fichiers les plus récents.

## FAQ

**RcloneView préserve-t-il les versions et commentaires des fichiers ?**  
Les fichiers non-Google (PDF, vidéos, ZIP) restent intacts. Les Google Docs/Sheets/Slides conservent leur contenu mais génèrent de nouveaux ID lors de la copie ; RcloneView les affiche comme de nouveaux fichiers afin que vous puissiez les repartager si nécessaire.

**Puis-je déplacer des dossiers de drive partagé entre domaines ?**  
Google ne permet pas aux drives partagés de changer de domaine directement. Utilisez RcloneView pour copier le contenu dans un drive partagé appartenant au domaine de destination, puis réappliquez les permissions. [Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**Que se passe-t-il si j'atteins le quota de 750 Go/jour ?**  
Les transferts se mettent en pause avec une erreur de limitation de débit. Attendez 24 heures (ou déplacez-vous vers un autre compte disposant de quota disponible) et reprenez la tâche. Les journaux de RcloneView indiquent où le transfert s'est arrêté afin que vous puissiez reprendre sans dupliquer les fichiers.

**Prêt à faire des transferts entre comptes une simple case à cocher ?**

<CloudSupportGrid />
