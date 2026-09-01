---
slug: rclone-self-update-rcloneview
title: "Mise à jour automatique de Rclone — Gardez votre moteur intégré à jour dans RcloneView"
authors:
  - casey
description: "Mettez à jour le binaire rclone intégré dans RcloneView en un seul clic, pour que les nouvelles corrections et fonctionnalités des fournisseurs arrivent sans réinstallation manuelle."
keywords:
  - mise à jour automatique de rclone
  - mettre à jour rclone intégré
  - version de rclone dans RcloneView
  - garder rclone à jour
  - GUI de mise à jour du binaire rclone
  - RcloneView rclone intégré
  - version de l'API rc de rclone
  - mises à jour de GUI de stockage cloud
  - version minimale de rclone
tags:
  - RcloneView
  - feature
  - automation
  - installation
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mise à jour automatique de Rclone — Gardez votre moteur intégré à jour dans RcloneView

> RcloneView est livré avec rclone intégré et peut mettre à jour ce binaire intégré depuis l'application elle-même, au lieu de vous demander de suivre un téléchargement séparé.

RcloneView ne se contente pas d'appeler n'importe quel rclone qui se trouve installé sur votre système — il est livré avec son propre binaire rclone intégré et communique avec lui via l'API RC locale de rclone. C'est ce binaire intégré qui exécute réellement chaque copie, synchronisation et montage, donc le maintenir à jour compte pour bénéficier des nouvelles corrections de fournisseurs, des changements de protocole et des améliorations de performance. Plutôt que d'exiger une réinstallation complète de l'application à chaque nouvelle version de rclone, RcloneView inclut une fonction de mise à jour automatique intégrée à l'application pour le moteur embarqué.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi la version de Rclone intégré compte

RcloneView nécessite une version minimale de rclone de v1.69.1 ou ultérieure, car les fonctionnalités les plus récentes de l'application dépendent de capacités de l'API RC disponibles seulement à partir de ce point. Les fournisseurs modifient parfois leurs API, et les versions de rclone corrigent ces changements — exécuter un binaire intégré obsolète peut faire qu'un distant qui fonctionnait auparavant se mette soudain à générer des erreurs d'authentification ou de listage qui n'ont rien à voir avec votre configuration RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration d'un distant RcloneView reposant sur le moteur rclone intégré" class="img-large img-center" />

Comme le rclone intégré communique via `http://127.0.0.1:5582` en local, sa mise à jour ne touche ni vos distants, ni vos tâches de synchronisation, ni vos identifiants enregistrés — ceux-ci résident dans la configuration propre de RcloneView, indépendamment de la version du binaire.

## Déclencher une mise à jour automatique

L'action de mise à jour automatique se trouve à côté des détails de connexion rclone, où RcloneView affiche déjà la version de rclone actuellement en cours d'exécution, l'adresse de l'API locale et le système d'exploitation hôte. Lancer la mise à jour depuis là récupère et installe la dernière version compatible de rclone sans quitter l'application ni ouvrir un terminal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Vérification de la version de rclone et de l'historique des tâches après une mise à jour de rclone intégré dans RcloneView" class="img-large img-center" />

Cela vaut la peine d'être vérifié après qu'un fil de support ou des notes de version mentionnent une correction spécifique à un fournisseur — mettre d'abord à jour le binaire intégré est un moyen rapide d'écarter un décalage de version avant de dépanner davantage une tâche de synchronisation.

## Combiner la mise à jour automatique avec la journalisation

Si une tâche commence à échouer juste après une mise à jour, activer la journalisation rclone (Paramètres > Rclone intégré > Activer la journalisation rclone) et régler le niveau de journalisation sur DEBUG vous donne un enregistrement clair de l'avant et de l'après. Redémarrez le processus rclone intégré, reproduisez la tâche, et le fichier journal indiquera précisément quelle version a traité la requête — utile pour signaler un problème ou comparer le comportement entre versions.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Exécution d'une tâche de synchronisation après la mise à jour du moteur rclone intégré dans RcloneView" class="img-large img-center" />

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez le pied de page ou les paramètres de connexion pour vérifier la version de rclone intégré actuellement en cours d'exécution.
3. Lancez la mise à jour automatique intégrée à l'application pour récupérer la dernière version compatible de rclone.
4. Relancez une synchronisation ou un montage existant pour confirmer que tout continue de se connecter comme prévu.

Garder le moteur intégré à jour est une petite habitude qui évite une part surprenante des problèmes de synchronisation cloud du type « ça marchait hier ».

---

**Guides connexes :**

- [Gestionnaire de connexions RcloneView — Rclone intégré et externe](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [API RC de Rclone — Contrôle à distance avec RcloneView](https://rcloneview.com/support/blog/rclone-rc-api-remote-control-rcloneview)
- [Indicateurs Rclone personnalisés — Options avancées dans RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
