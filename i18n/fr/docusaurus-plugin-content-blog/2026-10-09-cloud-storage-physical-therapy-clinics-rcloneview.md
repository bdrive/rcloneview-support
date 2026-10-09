---
slug: cloud-storage-physical-therapy-clinics-rcloneview
title: "Stockage cloud pour les cabinets de kinésithérapie — des sauvegardes chiffrées et organisées avec RcloneView"
authors:
  - robin
description: "Stockage cloud pour les cabinets de kinésithérapie : sauvegardez vidéos d'exercices, formulaires d'accueil et fichiers d'imagerie vers un stockage cloud chiffré avec RcloneView."
keywords:
  - stockage cloud pour cabinet de kinésithérapie
  - sauvegarde de fichiers de kinésithérapie
  - sauvegarde cloud de cabinet
  - sauvegarde cloud chiffrée
  - stockage de vidéos d'exercices
  - synchronisation cloud planifiée
  - sauvegarde multi-cloud
  - RcloneView
  - rclone GUI
  - remote Crypt
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stockage cloud pour les cabinets de kinésithérapie — des sauvegardes chiffrées et organisées avec RcloneView

> Sauvegardez les documents des patients, les vidéos d'exercices et les exports d'imagerie sur plus d'un cloud, sans écrire la moindre commande.

Un cabinet de kinésithérapie produit plus de fichiers que la plupart des responsables ne l'imaginent : formulaires d'accueil numérisés, courriers d'adressage, vidéos d'exercices à domicile, enregistrements d'analyse de la marche et imagerie exportée. Ils se trouvent souvent sur le PC de l'accueil ou sur un petit NAS, en un seul exemplaire et sans restauration testée. RcloneView offre au personnel du cabinet une interface graphique de bureau pour copier ces données vers un stockage cloud, les chiffrer et vérifier qu'elles sont bien arrivées.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connecter le stockage que votre cabinet utilise déjà

La plupart des cabinets disposent déjà d'un compte Microsoft 365 ou Google Workspace, et beaucoup conservent un NAS local. Dans RcloneView, ouvrez l'onglet Remote et cliquez sur **New Remote**. OneDrive et Google Drive se connectent via le navigateur. Les stockages compatibles S3 comme Wasabi, Cloudflare R2 ou Backblaze B2 utilisent une clé d'accès. SFTP, WebDAV et SMB couvrent les serveurs sur site, et un NAS Synology peut être détecté automatiquement.

RcloneView gère plus de 90 services cloud depuis une seule fenêtre sous Windows, macOS et Linux, de sorte que le PC Windows de l'accueil et le MacBook du responsable utilisent le même flux de travail.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de remotes de stockage cloud pour un cabinet dans RcloneView" class="img-large img-center" />

## Chiffrer les fichiers liés aux patients avec un remote Crypt

Les formulaires d'accueil et les notes de soins ne devraient pas se trouver en clair dans un bucket tiers. RcloneView peut créer un remote virtuel **Crypt** qui chiffre les noms de fichiers, les noms de dossiers et les contenus avant l'envoi. Faites pointer le remote Crypt vers un dossier de votre fournisseur de sauvegarde, puis copiez les fichiers dans le remote Crypt plutôt que dans le bucket brut.

Conservez le mot de passe Crypt dans un endroit sûr, séparé des données. RcloneView ne rend pas à lui seul un cabinet conforme ; vérifiez les règles de confidentialité de votre région et les accords de votre fournisseur de stockage avant de déplacer des informations de patients.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copie des fichiers du cabinet vers une destination cloud chiffrée dans RcloneView" class="img-large img-center" />

## Prévisualiser, puis sauvegarder

Imaginons un cabinet qui possède 300 Go de vidéos de démonstration d'exercices et de dossiers numérisés sur un PC partagé. Créez un job de synchronisation de ce dossier vers le remote Crypt, puis lancez un **Dry Run** pour lister ce qui sera copié ou supprimé. Utiliser la sémantique de copie lors de la première exécution laisse la source intacte. Vous pouvez connecter S3, Azure ou Backblaze B2 en lecture/écriture complète avec la licence FREE : la destination de sauvegarde ne vous coûte donc aucun logiciel supplémentaire.

Ajoutez une seconde destination à l'étape 1 et la même source est répliquée vers deux clouds grâce à la synchronisation 1:N, également disponible en FREE.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'un job de sauvegarde du cabinet dans RcloneView" class="img-large img-center" />

## Planifier des jobs nocturnes et consulter l'historique

Avec une licence PLUS, l'étape 4 de l'assistant de synchronisation accepte des planifications de type crontab, par exemple une exécution à 22 h 00 en semaine après le dernier rendez-vous. L'application doit être en cours d'exécution pour que les jobs planifiés se déclenchent ; laissez donc le PC allumé avec RcloneView réduit dans la zone de notification.

Job History enregistre l'état, la durée, la taille et le nombre de fichiers de chaque exécution, ce qui vous donne une piste d'audit lorsque vous devez confirmer que la sauvegarde de mardi dernier s'est terminée.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une sauvegarde nocturne du cabinet dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre stockage principal et une destination de sauvegarde dans l'onglet Remote.
3. Créez un remote Crypt sur la destination de sauvegarde pour les dossiers sensibles.
4. Lancez un Dry Run, démarrez le job, puis consultez Job History pour confirmer le résultat.

Une seconde copie chiffrée et testée offre à votre cabinet une possibilité de reprise après une panne de disque ou un incident de ransomware.

---

**Guides associés :**

- [Stockage cloud pour la santé — sauvegardes sécurisées avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-healthcare-rcloneview)
- [Stockage cloud pour la conformité HIPAA dans la santé avec RcloneView](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)
- [Chiffrer les sauvegardes cloud avec un remote Crypt — guide RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
