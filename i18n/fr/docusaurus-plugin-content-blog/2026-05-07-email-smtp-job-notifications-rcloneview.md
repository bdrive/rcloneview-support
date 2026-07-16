---
slug: email-smtp-job-notifications-rcloneview
title: "Notifications par e-mail SMTP — Restez informé du statut de vos synchronisations dans RcloneView"
authors:
  - tayson
description: "Configurez les notifications par e-mail SMTP dans RcloneView PLUS pour recevoir des alertes de fin de tâche de synchronisation, définir plusieurs destinataires et surveiller par e-mail les tâches de sauvegarde sans surveillance."
keywords:
  - notifications e-mail RcloneView
  - notification de synchronisation SMTP
  - alerte e-mail de synchronisation cloud
  - notification de tâche SMTP
  - e-mail de surveillance de sauvegarde
  - notifications RcloneView PLUS
  - alerte de fin de synchronisation
  - notification e-mail rclone
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Notifications par e-mail SMTP — Restez informé du statut de vos synchronisations dans RcloneView

> RcloneView PLUS vous permet de configurer des notifications par e-mail SMTP direct pour la fin des tâches de synchronisation, afin que votre équipe sache toujours quand une sauvegarde se termine — ou échoue — sans avoir à vérifier manuellement.

Exécuter des tâches de synchronisation et de sauvegarde cloud selon un planning ne représente que la moitié de l'équation d'automatisation. L'autre moitié consiste à connaître le résultat sans avoir à ouvrir l'application et à vérifier manuellement l'historique des tâches. RcloneView PLUS prend en charge les notifications par e-mail via une configuration SMTP directe, en délivrant les messages de statut de synchronisation directement dans votre boîte de réception dès qu'une tâche se termine. Cela rend la surveillance des sauvegardes sans surveillance pratique, aussi bien pour les particuliers que pour les équipes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuration du SMTP dans RcloneView

Pour configurer les notifications par e-mail, ouvrez les paramètres de notification de RcloneView (disponibles avec une licence PLUS). Saisissez les détails de votre serveur SMTP :

- **Hôte SMTP** : Le serveur de messagerie sortant de votre fournisseur d'e-mail (par exemple, `smtp.gmail.com` pour Gmail ou le serveur Exchange/SMTP de votre organisation).
- **Port** : Généralement le port **587** pour STARTTLS (recommandé) ou le port 465 pour SSL. Évitez le port 25 dans la plupart des environnements grand public et cloud, car il est fréquemment bloqué.
- **Authentification** : Saisissez votre nom d'utilisateur et votre mot de passe de messagerie, ou un mot de passe spécifique à l'application. Pour Gmail, utilisez un mot de passe d'application si la validation en deux étapes (2FA) est activée sur votre compte.
- **Adresse d'expéditeur** : L'adresse d'expéditeur qui apparaîtra sur les e-mails de notification.

Après avoir saisi les détails, utilisez le bouton **Test** pour envoyer un e-mail de test et confirmer que la connexion SMTP fonctionne avant de vous y fier pour des notifications en production.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## Ajout de destinataires et paramètres au niveau de la tâche

Une fois le SMTP configuré globalement, vous pouvez ajouter des destinataires de notification au niveau de chaque tâche. Ouvrez les paramètres d'une tâche de synchronisation et saisissez une ou plusieurs adresses e-mail à notifier lorsque cette tâche se termine. Différentes tâches peuvent notifier différentes personnes — par exemple, une tâche de sauvegarde pour les documents financiers peut notifier l'équipe finance, tandis qu'une tâche de synchronisation de médias notifie l'équipe de contenu.

RcloneView vous permet également de définir des seuils pour les notifications — par exemple, n'envoyer un e-mail que lorsqu'une tâche transfère plus d'un nombre configurable de mégaoctets. Cela est utile pour les tâches qui s'exécutent fréquemment et se terminent souvent sans changement : vous ne recevez une notification que lorsque quelque chose de significatif s'est réellement produit, ce qui réduit la fatigue liée aux alertes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## Cas d'usage des notifications par e-mail

La **surveillance des sauvegardes sans surveillance** est le cas d'usage principal. Si vous planifiez une sauvegarde nocturne de vos fichiers locaux vers Backblaze B2, configurez une notification par e-mail vers votre adresse personnelle. Si la tâche échoue — en raison d'une panne réseau, d'un problème d'identifiants ou d'un disque plein — vous recevez un e-mail d'échec le matin plutôt que de découvrir le problème des semaines plus tard, lors d'une tentative de récupération.

La **sensibilisation de l'équipe** est tout aussi précieuse. Lorsqu'une tâche de synchronisation cloud partagée se termine — par exemple, une synchronisation hebdomadaire d'un dossier de projet partagé vers Amazon S3 — notifier toute l'équipe confirme que la synchronisation est à jour sans que personne n'ait besoin de se connecter à RcloneView. Vous pouvez configurer différentes tâches pour notifier différents destinataires, afin que les bonnes personnes soient informées selon leur domaine de responsabilité.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) et activez une licence PLUS.
2. Ouvrez les **Paramètres de notification** et saisissez votre hôte SMTP, le port 587 et vos identifiants d'authentification.
3. Cliquez sur **Test** pour envoyer un e-mail de test et vérifier la connexion.
4. Ouvrez les paramètres de chaque tâche de synchronisation et ajoutez les adresses e-mail à notifier.
5. Définissez éventuellement un seuil de taille de transfert afin que les notifications ne se déclenchent que lorsqu'une quantité importante de données est déplacée.

Les notifications par e-mail SMTP dans RcloneView PLUS bouclent la surveillance automatisée des sauvegardes — vous offrant la tranquillité d'esprit de savoir que vos tâches de synchronisation cloud s'exécutent avec succès, ou vous alertant immédiatement lorsque ce n'est pas le cas.

---

**Guides associés :**

- [Alertes de notification pour la fin de synchronisation avec RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Contrôle à distance de RcloneView via Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
