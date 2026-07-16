---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "Comment définir des limites de bande passante pour les transferts cloud dans RcloneView"
authors:
  - tayson
description: "Contrôlez la bande passante utilisée par les tâches de synchronisation et de sauvegarde cloud — évitez les ralentissements réseau pendant les heures de travail et maximisez la vitesse la nuit grâce aux réglages de limitation de RcloneView."
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - RcloneView
  - cloud-storage
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Comment définir des limites de bande passante pour les transferts cloud dans RcloneView

> Vous lancez une synchronisation cloud massive pendant les heures de travail ? Votre équipe va le remarquer. Voici comment limiter la bande passante pour que les sauvegardes s'exécutent sans plomber la connexion de tout le monde.

Les tâches de synchronisation et de sauvegarde cloud peuvent saturer votre connexion réseau — ralentissant les appels vidéo, la navigation web et d'autres tâches critiques. Ce problème est particulièrement présent dans les environnements de bureau, les bureaux à domicile avec connexion partagée, ou lors de la synchronisation de téraoctets de données. RcloneView vous permet de définir des limites de bande passante précises afin que vos transferts cloud s'exécutent en arrière-plan sans perturber votre réseau.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les limites de bande passante sont importantes

### Réseaux partagés

Dans un bureau disposant d'une connexion à 100 Mbps, une seule tâche de synchronisation cloud non limitée peut consommer plus de 80 Mbps — ne laissant presque rien pour le reste de l'équipe.

### Bureau à domicile

Les appels vidéo nécessitent environ 5 à 10 Mbps. Si votre tâche de sauvegarde utilise toute la bande passante disponible, votre appel Zoom se transforme en bouillie de pixels.

### Politiques d'usage équitable des FAI

Certains FAI limitent ou facturent en supplément une utilisation soutenue à haute bande passante. Limiter les transferts cloud évite les factures surprises ou les ralentissements.

### Limites de débit des fournisseurs cloud

Certains fournisseurs (en particulier Google Drive) limitent ou renvoient des erreurs lorsque les transferts sont trop rapides. La limitation de bande passante permet de rester dans des limites sûres.

## Comment définir des limites de bande passante

### Méthode 1 : limite de bande passante par tâche

Lors de la création ou de la modification d'une tâche dans RcloneView, ajoutez le drapeau de limitation de bande passante dans les options rclone :

- **`--bwlimit 10M`** — Limite à 10 Mo/s (mégaoctets par seconde)
- **`--bwlimit 50M`** — Limite à 50 Mo/s
- **`--bwlimit 1M`** — Limite à 1 Mo/s (adapté à une synchronisation légère en arrière-plan)

### Méthode 2 : planification de bande passante par tranche horaire

rclone prend en charge des limites de bande passante basées sur l'heure — utilisez des vitesses différentes selon le moment de la journée :

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

Cela signifie :
- **8h – 18h** : Limité à 5 Mo/s (heures de travail, impact minimal)
- **18h – 23h** : Limité à 50 Mo/s (soirée, plus de disponibilité)
- **23h – 8h** : Illimité (nuit, pleine vitesse)

C'est le compromis idéal pour la plupart des utilisateurs — les transferts s'exécutent 24h/24 mais ne passent à pleine vitesse que lorsque le réseau est inactif.

### Méthode 3 : limites distinctes pour l'envoi et le téléchargement

Définissez des limites différentes pour l'envoi et le téléchargement :

```
--bwlimit "10M:5M"
```

Cela limite les envois à 10 Mo/s et les téléchargements à 5 Mo/s. Utile lorsque votre FAI propose des vitesses asymétriques (courant avec les connexions câble et DSL).

## Exemples pratiques

### Bureau à domicile avec connexion 100 Mbps

```
--bwlimit "09:00,2M 17:00,off"
```
- Pendant les heures de travail : 2 Mo/s (à peine perceptible en parallèle des appels vidéo)
- En dehors des heures : Illimité

### Petit bureau avec connexion partagée 50 Mbps

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- Heures ouvrées : 3 Mo/s (laisse 47 Mbps pour le personnel)
- Soirée : 25 Mo/s (moitié de la capacité)
- Nuit : Pleine vitesse

### Migration importante pendant un week-end

```
--bwlimit off
```
- Aucune limite — maximisez la vitesse de transfert pendant les fenêtres de maintenance.

## Combiner avec la planification des tâches

L'approche la plus efficace : planifier des **tâches lourdes la nuit sans limite de bande passante** et des **tâches légères en journée avec des limites strictes**.

1. Créez deux versions de votre tâche de synchronisation :
   - **Tâche de jour** : `--bwlimit 5M` — s'exécute à midi pour une synchronisation incrémentale rapide
   - **Tâche de nuit** : sans limite de bande passante — s'exécute à 2h du matin pour les transferts lourds
2. Planifiez les deux avec la [planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## Surveiller la vitesse réelle

Utilisez le suivi des transferts en temps réel pour vérifier que vos limites de bande passante fonctionnent :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

L'affichage de la vitesse de transfert doit indiquer des valeurs égales ou inférieures à votre limite configurée. Si vous constatez des vitesses inférieures à votre limite, le goulot d'étranglement se trouve ailleurs (réseau, API du fournisseur, vitesse du disque).

## Référence rapide

| Scénario | Réglage | Effet |
|----------|---------|--------|
| Synchronisation légère en arrière-plan | `--bwlimit 2M` | À peine perceptible |
| Transferts modérés | `--bwlimit 10M` | Visible mais gérable |
| Heures de travail uniquement | `--bwlimit "09:00,5M 17:00,off"` | Limité pendant le travail |
| Envoi prioritaire | `--bwlimit "20M:5M"` | 20M en envoi, 5M en téléchargement |
| Aucune limite | `--bwlimit off` ou omis | Vitesse maximale |

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajoutez vos remotes** et créez une tâche de synchronisation/copie.
3. **Ajoutez `--bwlimit`** aux drapeaux rclone de la tâche.
4. **Testez et surveillez** pour trouver le bon équilibre.
5. **Combinez avec la planification** pour tirer le meilleur des deux approches.

Des transferts rapides, c'est bien. Mais des transferts qui ne plombent pas les appels vidéo de votre équipe, c'est encore mieux.

---

**Guides connexes :**

- [Accélérer les transferts cloud volumineux](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Suivi des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Résoudre les erreurs de limite de débit Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
