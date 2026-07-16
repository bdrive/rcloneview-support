---
slug: fix-scheduled-sync-not-running-rcloneview
title: "Résoudre la synchronisation planifiée qui ne se lance pas — Dépanner les tâches cloud automatisées dans RcloneView"
authors:
  - steve
description: "Diagnostiquez et corrigez les tâches de synchronisation planifiée RcloneView qui ne démarrent pas ou s'exécutent au mauvais moment. Couvre la vérification de la licence, la syntaxe cron, les paramètres de démarrage et l'inspection des journaux."
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - RcloneView
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Résoudre la synchronisation planifiée qui ne se lance pas — Dépanner les tâches cloud automatisées dans RcloneView

> Si votre sauvegarde automatisée RcloneView cesse de se déclencher selon le planning — ou ne démarre jamais — ce guide passe en revue chaque cause probable dans l'ordre, de la vérification de la licence à la syntaxe cron en passant par la configuration du démarrage.

La synchronisation planifiée est l'une des fonctionnalités PLUS les plus pratiques de RcloneView : configurez une tâche une fois et elle s'exécute selon un planning crontab sans intervention manuelle. Lorsqu'elle cesse de fonctionner, la cause première est presque toujours l'une de ces quatre choses : un problème de licence, un planning mal configuré, l'application non lancée au moment prévu, ou une erreur silencieuse dans la tâche elle-même. Examiner chaque couche méthodiquement résout le problème en quelques minutes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vérification 1 : confirmez que votre licence PLUS est active

La synchronisation planifiée est une fonctionnalité exclusive aux licences PLUS ou Lifetime. La licence FREE n'active pas la planification crontab, et une tâche enregistrée sous une licence FREE aura son planning silencieusement inactif. Vérifiez la barre de pied de page en bas de la fenêtre RcloneView — elle affiche soit « FREE License » soit « PLUS License », ainsi que la version de rclone et les informations de connexion.

Si la licence apparaît comme FREE ou expirée, allez dans **Help → Activate License** et ressaisissez votre adresse e-mail et votre clé de licence. Les coupons de réduction sont à usage unique par adresse e-mail, donc une tentative d'activation en double avec le même coupon ne prolongera pas l'abonnement — contactez le support si la clé semble invalide après un renouvellement récent.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

Après avoir confirmé que PLUS est actif, rouvrez la tâche concernée dans le Gestionnaire de tâches et vérifiez que l'étape 4 (planification) est remplie avec des valeurs réelles plutôt que des champs vides. Une tâche déjà enregistrée peut avoir besoin d'être modifiée et réenregistrée avec PLUS actif pour valider le planning.

## Vérification 2 : examinez la syntaxe crontab à l'étape 4 de la tâche

Le planificateur de RcloneView utilise cinq champs de type crontab : **Minute** (0–59), **Heure** (0–23), **Jour de la semaine** (0–6, dimanche=0), **Jour du mois** (1–31), et **Mois** (1–12). Laisser un champ vide signifie « chaque » — saisir une valeur signifie « uniquement celle-ci ». L'erreur de configuration la plus courante consiste à saisir `0` dans le mauvais champ ou à utiliser une combinaison incompatible, comme spécifier à la fois le jour de la semaine et le jour du mois d'une manière qui ne s'aligne jamais.

RcloneView inclut un bouton **Simulate Schedule** directement à l'étape 4. Cliquez dessus pour prévisualiser les prochaines exécutions avant d'enregistrer. Si l'aperçu montre des résultats inattendus — exécution chaque minute, jours attendus ignorés, ou aucune exécution à venir affichée — ajustez les champs et relancez la simulation.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

La syntaxe de liste (`1,3,5`), la syntaxe de plage (`1-5` pour les jours ouvrés) et la syntaxe de pas (`0-23/4` pour toutes les 4 heures) sont toutes prises en charge. Une tâche quotidienne à minuit, par exemple, utilise Minute=`0`, Heure=`0`, les autres champs restant vides.

## Vérification 3 : gardez RcloneView actif au moment du planning

RcloneView doit être **ouvert et en cours d'exécution** pour que les tâches planifiées se déclenchent — il ne fonctionne pas comme un service ou un démon système en arrière-plan. Si l'ordinateur est en veille, l'utilisateur est déconnecté, ou l'application a été fermée, tout planning arrivant à échéance durant cette période sera ignoré silencieusement.

La solution est simple : activez **Launch at login** dans **Settings → General** pour que l'application démarre automatiquement au démarrage du système d'exploitation. Combinez-le avec **Start minimized** pour que RcloneView démarre dans la barre système sans perturber votre bureau, tout en exécutant toutes les tâches planifiées en arrière-plan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

Si la machine cible est régulièrement éteinte la nuit, envisagez soit d'ajuster le planning aux heures de bureau, soit de configurer le système d'exploitation pour qu'il sorte de veille avant l'échéance de la tâche.

## Vérification 4 : inspectez l'historique des tâches et les journaux de transfert

Si une tâche semble s'être exécutée sans produire de résultat, l'onglet **Job History** dans la vue d'informations en bas de l'écran est le premier endroit à consulter. Il enregistre chaque exécution avec le statut (Completed / Errored / Canceled), le temps écoulé, la vitesse de transfert et le nombre de fichiers. Filtrez l'historique pour n'afficher que les entrées « Errored » afin de faire ressortir les exécutions échouées. Chaque enregistrement renvoie vers le journal associé, qui identifie l'échec précis — délai réseau dépassé, erreur d'authentification, chemin introuvable, ou problème de permissions sur la destination.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

Pour un diagnostic plus approfondi, activez **Enable rclone Logging** dans **Settings → Embedded Rclone** et réglez le niveau de journalisation sur **INFO** ou **DEBUG**. Lors de la prochaine exécution de la tâche (ou d'un déclenchement manuel), le fichier journal capture la sortie complète de rclone — y compris le code d'erreur exact et le fichier à l'origine de l'échec — ce qui rend l'analyse de la cause première simple, même pour les problèmes intermittents.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vérifiez la barre de pied de page — une licence PLUS est requise pour la planification crontab.
3. Ouvrez la tâche concernée → Modifier → Étape 4, puis utilisez Simulate Schedule pour vérifier la syntaxe cron.
4. Activez **Launch at login** et **Start minimized** dans Settings → General.
5. Vérifiez l'historique des tâches pour les exécutions en erreur, et activez la journalisation rclone pour un diagnostic détaillé.

Un diagnostic méthodique à travers ces quatre couches résout rapidement presque tous les échecs de synchronisation planifiée — sans avoir à deviner.

---

**Guides connexes :**

- [Automatiser les sauvegardes cloud quotidiennes avec RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Bonnes pratiques de planification — Cron, nouvelles tentatives et surveillance dans RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Historique des tâches et journaux de transfert — Surveillance dans RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
