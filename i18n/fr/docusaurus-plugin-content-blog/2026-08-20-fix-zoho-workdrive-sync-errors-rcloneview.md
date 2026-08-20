---
slug: fix-zoho-workdrive-sync-errors-rcloneview
title: "Corriger les erreurs de synchronisation Zoho WorkDrive — Guide de dépannage pour RcloneView"
authors:
  - tayson
description: "Dépannez les incompatibilités de région, les coupures de connexion et les échecs de synchronisation Zoho WorkDrive dans RcloneView avec des solutions pratiques, étape par étape."
keywords:
  - erreurs de synchronisation Zoho WorkDrive
  - corriger Zoho WorkDrive RcloneView
  - paramètre de région Zoho WorkDrive
  - échec de connexion Zoho WorkDrive
  - dépannage Zoho WorkDrive
  - erreurs de synchronisation RcloneView
  - corriger sauvegarde Zoho WorkDrive
  - débogage journalisation rclone
  - authentification Zoho WorkDrive
tags:
  - RcloneView
  - troubleshooting
  - tips
  - zoho
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation Zoho WorkDrive — Guide de dépannage pour RcloneView

> La plupart des échecs de synchronisation Zoho WorkDrive dans RcloneView proviennent d'un paramètre de région incorrect ou d'un jeton OAuth expiré — et non d'une tâche de transfert défectueuse.

Zoho WorkDrive est un service régional, donc le distant que vous configurez doit pointer exactement vers le centre de données où se trouve réellement votre compte, et une incohérence à ce niveau produit des erreurs de connexion déroutantes qui semblent sans rapport avec la cause réelle. RcloneView affiche les détails nécessaires pour isoler le problème dans Job History et l'onglet Log, transformant un vague message « synchronisation échouée » en une solution concrète.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Incompatibilité de région et échecs de connexion

Zoho WorkDrive exige de sélectionner une région lors de la configuration du distant, et choisir la mauvaise est la cause la plus courante d'un distant qui se connecte brièvement puis échoue à chaque opération suivante. Ouvrez Remote Manager, modifiez le distant Zoho WorkDrive et vérifiez que la région correspond au centre de données indiqué dans les paramètres de votre compte Zoho — un distant créé avec la mauvaise région s'authentifie souvent une fois, mais échoue ensuite lors du listage des dossiers ou du transfert.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Zoho WorkDrive region setting in RcloneView Remote Manager" class="img-large img-center" />

RcloneView monte et synchronise Zoho WorkDrive depuis la même fenêtre sous Windows, macOS et Linux, donc une fois la région corrigée, la solution s'applique à chaque tâche et montage construits sur ce distant, sans reconfiguration spécifique à la plateforme.

## Expiration du jeton OAuth en cours de synchronisation

Comme Zoho WorkDrive se connecte via une connexion OAuth basée sur le navigateur, une synchronisation qui fonctionnait hier mais échoue aujourd'hui signifie généralement que le jeton stocké a expiré ou a été révoqué côté compte Zoho. Réauthentifiez le distant dans Remote Manager pour déclencher une nouvelle connexion via le navigateur, puis relancez la tâche plutôt que de supposer que la configuration de synchronisation elle-même est en cause.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-running a Zoho WorkDrive sync job after re-authentication in RcloneView" class="img-large img-center" />

## Consulter Job History et activer les journaux de débogage

Job History enregistre si chaque exécution s'est terminée (Completed), a échoué (Errored) ou a été annulée (Canceled), avec l'heure exacte d'arrêt, ce qui permet de corréler de manière fiable un échec avec un fichier spécifique ou une réponse d'API plutôt que de deviner à partir de la boîte de dialogue récapitulative.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Zoho WorkDrive job history status in RcloneView" class="img-large img-center" />

Pour les échecs qui persistent après la correction de la région et du jeton, activez rclone Logging dans les paramètres, réglez le niveau de journalisation sur DEBUG, redémarrez le processus rclone intégré et reproduisez la synchronisation. Le journal obtenu isole l'appel API exact qui a échoué, ce qui est bien plus précis que d'interpréter uniquement la boîte de dialogue d'erreur.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait.
2. Vérifiez que le paramètre de région de votre distant Zoho WorkDrive correspond au centre de données réel de votre compte.
3. Réauthentifiez le distant si l'échec a commencé soudainement après un fonctionnement normal.
4. Activez la journalisation DEBUG et reproduisez le problème si la synchronisation échoue encore après confirmation de la région et du jeton.

Une fois la région et l'authentification alignées, les synchronisations Zoho WorkDrive dans RcloneView se comportent comme n'importe quel autre distant — prévisibles, journalisées et faciles à relancer.

---

**Guides associés :**

- [Gérer les fichiers Zoho WorkDrive et la synchronisation cloud avec RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Synchroniser Zoho WorkDrive vers OneDrive avec RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Sauvegarder Zoho WorkDrive vers Google Drive et S3 avec RcloneView](https://rcloneview.com/support/blog/backup-zoho-workdrive-google-drive-s3-rcloneview)

<CloudSupportGrid />
