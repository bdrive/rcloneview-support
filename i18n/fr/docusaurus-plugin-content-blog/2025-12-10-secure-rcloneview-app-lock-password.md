---
slug: secure-rcloneview-app-lock-password
title: "Verrouillez RcloneView avec App Lock : protégez vos remotes, jobs et historique"
authors:
  - tayson
description: "Ajoutez une protection par mot de passe à RcloneView avec App Lock afin que seuls les utilisateurs autorisés puissent voir les remotes, l'historique des transferts, les jobs, les montages et la base de données interne—même sur des PC partagés."
keywords:
  - rcloneview security
  - rcloneview app lock
  - rclone password protect
  - secure rclone gui
  - protect rclone remotes
  - rclone_view.db
  - cloud automation security
  - shared pc security
  - job history protection
  - transfer history protection
tags:
  - RcloneView
  - security
  - backup
  - job-management
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# Verrouillez RcloneView avec App Lock : protégez vos remotes, jobs et historique

> PC partagé ou d'entreprise ? Activez App Lock pour exiger un mot de passe avant que quiconque puisse ouvrir RcloneView, afin de garder vos remotes, jobs et historique de transfert hors de vue.

App Lock de RcloneView ajoute un simple écran de mot de passe au lancement ou à la réouverture de l'application. Il protège la base de données interne (`rclone_view.db`), qui contient vos remotes, définitions de jobs, paramètres de montage, historique des jobs et journaux de transfert—afin que votre automatisation sensible reste privée même si le poste de travail est partagé.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Ce que protège App Lock

- Les définitions de remotes et les identifiants stockés dans `rclone.conf` (accès contrôlé par l'application)  
- L'historique et les journaux de transfert  
- Les paramètres et planifications des jobs  
- Les configurations de montage et l'état de l'interface  
- La base de données SQLite (`rclone_view.db`) qui relie le tout

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## À qui cela profite

- Aux équipes partageant un même poste de travail ou une machine relais  
- Aux administrateurs IT exécutant des jobs de synchronisation/montage planifiés qui ont besoin d'une résistance à la falsification  
- Aux utilisateurs ayant des flux de travail multi-cloud sensibles (sauvegardes, archives de conformité)  
- À toute personne souhaitant une couche de sécurité rapide sans modification au niveau du système d'exploitation

## Comment activer App Lock (en une minute)

1) Ouvrez **Settings → General Settings** dans le menu supérieur.  
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) Dans **General**, cochez **Enable App Lock**, saisissez votre mot de passe, puis cliquez sur **Close**.  
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

C'est tout. La prochaine fois que RcloneView démarre ou que sa fenêtre est rouverte, vous verrez l'invite de déverrouillage.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Réinitialisation en cas de mot de passe oublié

- Sur l'écran de déverrouillage, cliquez sur **Reset App**.  
- Confirmez la réinitialisation pour effacer App Lock et toutes les données internes (paramètres, jobs, historique des transferts, historique des jobs).  
- Votre fichier `rclone.conf` reste intact, donc les définitions de remotes restent disponibles une fois l'application rouverte.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## Bonnes pratiques pour des opérations sécurisées

- Utilisez App Lock sur les PC partagés ou dans les bureaux où plusieurs utilisateurs peuvent ouvrir votre session.  
- Associez-le aux mots de passe de compte du système d'exploitation ou au chiffrement du disque pour une protection à plusieurs niveaux.  
- Nommez vos jobs clairement mais évitez d'intégrer des secrets dans les noms de jobs ou les notes.  
- Sauvegardez `rclone_view.db` dans un emplacement sécurisé et accessible en écriture par l'utilisateur (voir [changer l'emplacement de la base de données](/tutorials/change-rcloneview-database-location)).  
- Ne laissez le planificateur activé que pour les jobs auxquels vous faites confiance, et surveillez-les via Job History.

## FAQ rapide

**App Lock arrête-t-il les jobs planifiés ?**  
Non—les jobs que vous avez planifiés continuent de s'exécuter. App Lock restreint l'accès à l'interface pour empêcher d'autres personnes de les voir ou de les modifier.

**Que se passe-t-il si je réinitialise App Lock ?**  
Les données internes sont effacées, mais `rclone.conf` persiste, donc les remotes restent disponibles. Recréez les jobs/l'historique si nécessaire.

**Puis-je toujours utiliser le Terminal ?**  
Oui. Une fois déverrouillé, le Terminal intégré fonctionne normalement ; App Lock ne contrôle que l'accès au lancement.

## Conclusion

Une invite de mot de passe peut sembler minime, mais c'est un bouclier puissant pour vos remotes, votre automatisation et votre historique. Activez App Lock, conservez votre `rclone_view.db` dans un emplacement sécurisé, et exécutez vos flux de travail cloud en sachant qu'ils restent privés—même sur des machines partagées.

<CloudSupportGrid />
