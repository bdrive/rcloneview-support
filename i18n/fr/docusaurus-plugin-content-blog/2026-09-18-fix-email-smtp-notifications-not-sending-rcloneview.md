---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "Résoudre les Notifications par E-mail SMTP qui ne s'Envoient Pas — Guide de Dépannage pour RcloneView"
authors:
  - morgan
description: "Résolvez les notifications par e-mail SMTP de RcloneView qui échouent. Corrigez le blocage de port, les erreurs d'authentification et les seuils mal configurés pour les alertes de tâches."
keywords:
  - résoudre les notifications e-mail RcloneView
  - notification SMTP non envoyée
  - erreur d'alerte e-mail RcloneView
  - échec d'authentification SMTP
  - dépannage des notifications de tâches de synchronisation
  - port 587 bloqué SMTP
  - alerte de sauvegarde non reçue
  - notifications RcloneView PLUS
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre les Notifications par E-mail SMTP qui ne s'Envoient Pas — Guide de Dépannage pour RcloneView

> Lorsque les notifications par e-mail de RcloneView cessent d'arriver, la cause est presque toujours la configuration SMTP, un blocage de port, ou un seuil de transfert réglé trop haut — voici comment diagnostiquer et corriger chaque cas.

Les alertes par e-mail ne sont utiles que si elles arrivent réellement. Lorsqu'une sauvegarde planifiée échoue silencieusement et que la notification n'atteint jamais votre boîte de réception, tout l'intérêt de la surveillance sans surveillance disparaît. Le système de notification SMTP de RcloneView dépend de plusieurs paramètres faciles à mal configurer, et ce guide passe en revue les points de défaillance les plus courants pour que vos alertes de tâches recommencent à fonctionner de manière fiable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Erreurs d'authentification et d'hôte

La cause la plus fréquente d'échecs silencieux des notifications est une authentification SMTP incorrecte. Si votre fournisseur de messagerie exige un mot de passe spécifique à l'application (courant avec les comptes Gmail et Microsoft 365 ayant l'authentification à deux facteurs activée), saisir votre mot de passe de compte habituel fera échouer la connexion, même si le champ l'accepte sans erreur évidente. Générez un mot de passe d'application dans les paramètres de sécurité de votre fournisseur et utilisez-le à la place.

Vérifiez également le champ **Hôte SMTP** — une faute de frappe comme `smtp.gmial.com`, ou l'utilisation de l'hôte IMAP de votre fournisseur au lieu de l'hôte SMTP, fera échouer la connexion. Après avoir corrigé les identifiants, utilisez toujours le bouton **Tester** avant de vous fier à la configuration pour de vraies tâches ; cela isole les problèmes d'authentification des problèmes de configuration au niveau de la tâche.

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## Blocage de port et problèmes réseau

RcloneView recommande le **port 587** avec STARTTLS pour l'envoi SMTP. Si vous exécutez RcloneView sur un réseau avec des règles de pare-feu sortant restrictives — courant sur les réseaux d'entreprise, certains fournisseurs VPS et certains FAI résidentiels — le port 587 (et surtout le port 25) peut être entièrement bloqué, ce qui provoque un délai d'attente du courriel de test plutôt qu'une erreur explicite.

Si le test expire systématiquement au lieu de renvoyer une erreur d'authentification, le problème se situe presque certainement au niveau du réseau, pas des identifiants. Essayez de passer au port 465 (SSL) si votre fournisseur le prend en charge, ou vérifiez auprès de votre administrateur réseau que le trafic SMTP sortant est autorisé. Si vous vous connectez à une instance rclone externe sur un serveur distant ou un conteneur Docker, vérifiez que les règles sortantes de ce serveur autorisent également le trafic SMTP, car la connexion provient de l'endroit où rclone s'exécute réellement.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## Mauvaise configuration du seuil et des destinataires

Si SMTP se connecte et que les tests réussissent, mais que les notifications des tâches réelles n'arrivent jamais, vérifiez le seuil de notification au niveau de la tâche. RcloneView vous permet de définir une taille de transfert minimale (en Mo ou Go) avant l'envoi d'une notification — utile pour réduire la lassitude liée aux alertes sur les tâches qui s'exécutent fréquemment avec peu ou pas de mouvement de données, mais cela signifie aussi qu'une tâche qui ne transfère que quelques fichiers peut rester sous le seuil et ne générer aucun e-mail. Réduisez ou supprimez temporairement le seuil pour confirmer si c'est bien la cause.

Vérifiez également que les adresses des destinataires sont correctement saisies au niveau de la tâche, et pas seulement dans les paramètres SMTP globaux — RcloneView exige que les destinataires des notifications soient configurés par tâche, de sorte qu'une connexion SMTP fonctionnant globalement mais sans destinataire assigné à une tâche spécifique n'enverra jamais d'alerte pour cette tâche. Les notifications par e-mail sont une fonctionnalité de la licence PLUS ; si le SMTP, les destinataires et les seuils sont tous corrects mais que les alertes n'arrivent toujours pas, vérifiez votre niveau de licence avant de poursuivre le dépannage.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si ce n'est pas déjà fait, et ouvrez les paramètres de notification.
2. Ressaisissez les identifiants SMTP en utilisant un mot de passe spécifique à l'application si votre fournisseur l'exige, puis cliquez sur **Tester**.
3. Si le test expire, passez du port 587 au port 465 ou vérifiez les règles de pare-feu qui bloquent le SMTP sortant.
4. Vérifiez le seuil de notification et la liste des destinataires de chaque tâche pour confirmer qu'ils sont configurés comme prévu.

Une fois les identifiants SMTP, l'accès réseau et les paramètres au niveau de la tâche vérifiés, les notifications par e-mail deviennent un filet de sécurité fiable pour chaque synchronisation planifiée s'exécutant en arrière-plan.

---

**Guides associés :**

- [Notifications par e-mail SMTP — Restez informé du statut de vos synchronisations dans RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [Configurer les notifications et alertes pour la synchronisation cloud dans RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Résoudre la synchronisation planifiée qui ne se lance pas — Dépanner les tâches cloud automatisées dans RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
