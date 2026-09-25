---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "Corriger les plantages de rclone intégré — Redémarrer et récupérer avec RcloneView"
authors:
  - tayson
description: "Dépannez les coupures de connexion du rclone intégré dans RcloneView grâce aux étapes de redémarrage, à la journalisation et aux options de repli vers un rclone externe."
keywords:
  - plantage rclone intégré
  - connexion rclone perdue
  - dépannage RcloneView
  - redémarrer rclone intégré
  - erreurs rclone rc api
  - fichier journal rclone
  - connexion rclone externe
  - rcloneview ne se connecte pas
  - mise à jour automatique rclone
  - corriger erreurs rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les plantages de rclone intégré — Redémarrer et récupérer avec RcloneView

> Quand le pied de page affiche « déconnecté » au lieu d'un numéro de version, le moteur rclone intégré a cessé de répondre — voici comment le relancer sans perdre votre historique de tâches.

RcloneView embarque un binaire rclone intégré qui communique avec l'application via une adresse API locale, `http://127.0.0.1:5582` par défaut. La plupart du temps, cette connexion est invisible — on n'y pense jamais parce qu'elle fonctionne tout simplement. Mais si le processus intégré est tué par une limite de ressources du système, une règle de pare-feu locale en conflit ou un verrou de configuration corrompu, les informations de connexion du pied de page cessent d'afficher une version et chaque distant de vos panneaux Explorer devient injoignable en même temps. C'est le signe que vous avez affaire à un plantage du rclone intégré, et non à un problème d'authentification d'un seul distant.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirmer qu'il s'agit du moteur intégré et non d'un seul distant

Le moyen le plus rapide de faire la différence : si seul un onglet ou un distant ne se charge pas alors que le reste de vos panneaux fonctionne normalement, il s'agit d'un problème propre à ce distant — jeton OAuth invalide, identifiants erronés, panne côté fournisseur. Si tous les distants de tous les panneaux cessent de répondre simultanément et que la version rclone du pied de page disparaît, c'est le processus intégré lui-même qui s'est arrêté. Vérifiez l'onglet Settings > Embedded Rclone ; si le champ de version est vide ou affiche une erreur, c'est confirmé.

RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, et tout cela transite par ce processus intégré unique — c'est exactement pourquoi un plantage à cet endroit ressemble à une panne totale plutôt qu'à une erreur propre à un fournisseur.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## Redémarrer le processus intégré

Rendez-vous dans l'onglet Settings > Embedded Rclone et utilisez la commande de redémarrage qui s'y trouve — cela relance le binaire embarqué sans que vous ayez besoin de quitter puis rouvrir RcloneView. Toute tâche en cours de transfert au moment du plantage apparaîtra comme Errored dans Job History au lieu de Completed ; vérifiez donc ensuite et relancez tout ce qui n'a pas abouti. Le paramètre Retry entire sync if fails de RcloneView (situé dans l'étape Advanced Settings de chaque tâche) aide à absorber automatiquement ce type d'interruption lors des exécutions futures.

Si les redémarrages continuent d'échouer, vérifiez le chemin du binaire rclone sous Settings > Embedded Rclone > Local Rclone location. Un chemin pointant vers un binaire déplacé, supprimé ou mis en quarantaine par un antivirus empêchera le processus de démarrer même après un clic sur redémarrer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## Activer la journalisation pour les plantages récurrents

Un plantage isolé nécessite rarement une investigation approfondie, mais un plantage récurrent, si. Activez Enable rclone Logging dans Settings > Embedded Rclone, réglez Log level sur DEBUG, puis redémarrez le processus intégré pour démarrer un nouveau fichier journal. Reproduisez le plantage, puis consultez l'onglet Log dans l'Info View du bas, ou le fichier journal directement à l'emplacement configuré dans Log folder. Si vous avez besoin d'aide pour l'interpréter, l'équipe de support de RcloneView accepte les fichiers journaux à l'adresse rcloneview@bdrive.com — joignez le journal de niveau DEBUG plutôt qu'un résumé, car la ligne d'erreur exacte est déterminante.

Vérifiez également que le champ Global Rclone Flags de cette même section de paramètres ne contient pas un drapeau isolé ou incompatible resté d'une précédente session de dépannage — un drapeau invalide peut empêcher le processus intégré de démarrer proprement à chaque fois.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## Basculer vers une instance rclone externe

Si le moteur intégré continue de planter sur une machine en particulier — souvent sur du matériel aux ressources limitées —, vous pouvez faire pointer RcloneView vers une instance rclone externe à la place. Exécutez `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572` depuis un terminal, puis ajoutez-la sous Settings > Connect Manager > New Connection en utilisant cette adresse et ces identifiants. Cela découple le cycle de vie du processus rclone de l'application RcloneView, si bien qu'un problème d'interface graphique ne peut pas faire tomber votre moteur de transfert, et inversement.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html) si vous avez besoin d'une nouvelle installation.
2. Vérifiez dans Settings > Embedded Rclone si le champ de version est vide pour confirmer un plantage.
3. Utilisez la commande de redémarrage, puis passez en revue Job History à la recherche d'éléments marqués Errored.
4. Activez la journalisation DEBUG si le plantage se répète, et basculez vers une connexion rclone externe s'il persiste.

Un processus intégré planté paraît alarmant parce que tous les distants s'éteignent en même temps, mais la solution tient presque toujours en un simple redémarrage — et la journalisation transforme un mystère en diagnostic tenant en une seule ligne la prochaine fois que cela se produit.

---

**Guides associés :**

- [Corriger les erreurs de mot de passe de configuration Rclone — Résoudre les problèmes de configuration chiffrée avec RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [Corriger l'utilisation élevée de mémoire et de CPU lors des transferts Rclone avec RcloneView](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Mise à jour automatique de Rclone — Gardez votre moteur intégré à jour dans RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
