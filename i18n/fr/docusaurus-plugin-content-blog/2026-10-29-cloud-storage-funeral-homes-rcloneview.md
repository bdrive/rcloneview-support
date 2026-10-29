---
slug: cloud-storage-funeral-homes-rcloneview
title: "Stockage cloud pour les pompes funèbres — Protégez les dossiers des familles avec RcloneView"
authors:
  - alex
description: "Les pompes funèbres peuvent sauvegarder dossiers de service, contrats, photos et vidéos d'hommage sur plusieurs clouds avec RcloneView : synchronisation planifiée, chiffrement et Folder Compare."
keywords:
  - stockage cloud pour pompes funèbres
  - sauvegarde de fichiers pompes funèbres
  - stockage de documents pompes funèbres
  - sauvegarde de vidéo d'hommage
  - sauvegarde cloud chiffrée
  - sauvegarde cloud pour petite entreprise
  - rcloneview pompes funèbres
  - sauvegarde multi-cloud
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

# Stockage cloud pour les pompes funèbres — Protégez les dossiers des familles avec RcloneView

> Conservez contrats d'obsèques, photos d'hommage et vidéos commémoratives sauvegardés en toute sécurité à plus d'un endroit.

Une entreprise de pompes funèbres détient des dossiers que les familles s'attendent à voir exister pendant des décennies : contrats signés, avis de décès, documents de contrats obsèques, diaporamas photo et enregistrements de cérémonies pouvant atteindre plusieurs gigaoctets. Ces données se trouvent souvent sur un seul PC de bureau ou dans un seul compte cloud. RcloneView offre à une petite équipe un moyen visuel de copier ces données vers un deuxième et un troisième emplacement, sans script.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi une seule copie ne suffit pas

Prenons une entreprise disposant de 15 ans de dossiers clients sur un lecteur partagé, ainsi que d'un compte Dropbox pour les photos envoyées par les familles. Une panne de disque, une suppression accidentelle ou une connexion compromise touche tous les dossiers à la fois. Un schéma solide consiste en une copie principale, une copie cloud hors site et un second cloud indépendant ou un disque local.

RcloneView se connecte à plus de 90 fournisseurs, dont Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, ainsi que des disques locaux ou externes. Associer un lecteur professionnel à un bucket de stockage objet permet de conserver la sauvegarde dans un compte et chez un fournisseur différents de l'original.

<img src="/support/images/en/blog/new-remote.png" alt="Ajout de remotes cloud et locaux pour les sauvegardes d'une entreprise de pompes funèbres dans RcloneView" class="img-large img-center" />

## Créer une tâche de sauvegarde reproductible

Créez une tâche **Sync** ou **Copy** depuis l'assistant en 4 étapes : la source est le dossier des dossiers clients, la destination est le remote de sauvegarde. Utilisez Copy si vous ne voulez jamais qu'une suppression à la source soit propagée. Lancez d'abord un **Dry Run** pour voir ce qui serait copié ou supprimé.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copie des dossiers clients vers un cloud de sauvegarde dans RcloneView" class="img-large img-center" />

Avec une licence PLUS, la dernière étape de l'assistant ajoute une planification de type crontab, de sorte qu'une tâche nocturne puisse s'exécuter après la fermeture du bureau. Le Job History enregistre l'état, la taille et le nombre de fichiers de chaque exécution, ce qui constitue une preuve utile que les sauvegardes ont bien lieu.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planification d'une tâche de sauvegarde nocturne dans RcloneView" class="img-large img-center" />

## Protéger les dossiers sensibles

Les informations familiales et financières méritent d'être chiffrées. Créez un remote virtuel **Crypt** au-dessus de la destination de sauvegarde, et RcloneView chiffre les noms de fichiers, les noms de dossiers et le contenu avant qu'ils ne quittent la machine. Conservez le mot de passe Crypt à un endroit distinct de l'ordinateur du bureau ; sans lui, les données ne peuvent pas être déchiffrées.

Utilisez **Folder Compare** régulièrement pour vérifier que la sauvegarde correspond à la source. Les fichiers présents uniquement à gauche indiquent ce qui n'a pas encore été copié, et les fichiers de taille différente signalent des envois partiels.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare vérifiant la sauvegarde d'une entreprise de pompes funèbres" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ajoutez votre stockage principal et une destination de sauvegarde avec **New Remote**.
3. Enveloppez la destination dans un remote Crypt pour les dossiers sensibles.
4. Créez une tâche Copy, lancez d'abord un Dry Run, puis planifiez-la (PLUS) ou exécutez-la après chaque cérémonie.

Des dossiers qui survivent à leurs créateurs méritent un plan de sauvegarde qui survive à n'importe quel compte.

---

**Guides associés :**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
