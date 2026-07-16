---
slug: fix-slow-cloud-uploads-speed-optimization-rcloneview
title: "Pourquoi mes transferts cloud sont-ils si lents ? Astuces d'optimisation de vitesse avec RcloneView"
authors:
  - tayson
description: "Vos transferts cloud rament ? Découvrez pourquoi les transferts cloud sont lents et comment optimiser la vitesse grâce aux transferts parallèles, au découpage en blocs, au contrôle de la bande passante et aux réglages spécifiques à chaque fournisseur dans RcloneView."
keywords:
  - correction transfert cloud lent
  - accélérer le transfert cloud
  - transfert cloud lent
  - optimiser la vitesse de synchronisation cloud
  - transferts cloud parallèles
  - optimisation de la vitesse rclone
  - transfert google drive lent
  - vitesse de transfert s3
  - performance de transfert cloud
  - outil de synchronisation cloud rapide
tags:
  - performance
  - optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pourquoi mes transferts cloud sont-ils si lents ? Astuces d'optimisation de vitesse avec RcloneView

> Vous lancez un transfert cloud en espérant 30 minutes. Deux heures plus tard, il en est à 40 %. Avant d'accuser votre connexion internet, le problème vient peut-être de votre outil — pas de votre connexion.

Les transferts cloud lents sont frustrants, mais ils sont rarement causés par un seul problème. Il s'agit généralement d'une combinaison de paramètres par défaut non optimisés pour votre situation, de limitations spécifiques au fournisseur, et de méthodes de transfert inefficaces. RcloneView vous donne les contrôles pour corriger tout cela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pourquoi les transferts cloud sont lents

### 1) Transferts monofil

La plupart des outils de synchronisation cloud transfèrent un fichier à la fois. Si vous avez 10 000 petits fichiers, chaque fichier nécessite une connexion HTTP distincte — établissement, transfert, vérification. Le coût par fichier peut dépasser le temps de transfert réel.

**Solution** : Augmentez les transferts parallèles. Rclone utilise 4 par défaut, mais de nombreuses connexions peuvent gérer 8 à 16, voire plus.

### 2) Taille de blocs trop petite

Les fichiers volumineux sont transférés par blocs. Si la taille de bloc est trop petite, chaque bloc nécessite sa propre requête HTTP, ce qui ajoute de la surcharge. Si elle est trop grande, l'échec d'un bloc signifie le re-transfert d'une plus grande quantité de données.

**Solution** : Pour les connexions stables, augmentez la taille de bloc. Pour Google Drive, essayez 64M ou 128M. Pour S3, essayez 16M–64M.

### 3) Limites de débit imposées par le fournisseur

Les fournisseurs cloud limitent les transferts pour éviter les abus :

- **Google Drive** : limite d'environ 750 Go/jour en transfert.
- **OneDrive** : limitation après un débit élevé soutenu.
- **Dropbox** : limitation progressive sous forte charge.
- **S3** : 3 500 requêtes PUT/seconde par préfixe.

**Solution** : Respectez les limites de débit en ajustant les vitesses de transfert. Utilisez la [limitation de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) pour rester sous les seuils.

### 4) Absence de copie côté serveur

Lors d'un transfert entre deux clouds (par exemple, S3 vers S3), certains outils téléchargent sur votre machine avant de retransférer. Rclone prend en charge la copie côté serveur pour les fournisseurs compatibles — les données se déplacent directement entre les clouds sans passer par votre machine.

**Solution** : RcloneView utilise automatiquement la copie côté serveur lorsqu'elle est disponible.

### 5) Vérification de chaque fichier

Avant le transfert, rclone vérifie si chaque fichier existe déjà à la destination. Avec un grand nombre de fichiers, cette phase de vérification peut prendre plus de temps que le transfert lui-même.

**Solution** : Utilisez `--no-check-dest` pour les transferts massifs initiaux. Utilisez la vérification normale pour les synchronisations incrémentales.

## Paramètres d'optimisation de la vitesse

### Transferts parallèles

Augmentez le nombre de transferts de fichiers simultanés :

| Scénario | Réglage recommandé |
|----------|-------------------|
| Par défaut | 4 transferts |
| Internet rapide (100+ Mbps) | 8–16 transferts |
| Nombreux petits fichiers | 16–32 transferts |
| Fichiers volumineux uniquement | 4–8 transferts |

Davantage de transferts parallèles aident avec de nombreux petits fichiers. Pour quelques fichiers volumineux, la taille de bloc compte davantage.

### Taille de bloc par fournisseur

| Fournisseur | Bloc par défaut | Recommandé |
|----------|--------------|-------------|
| Google Drive | 8 Mo | 64–128 Mo |
| OneDrive | 10 Mo | 64 Mo |
| S3 | 5 Mo | 16–64 Mo |
| Dropbox | 48 Mo | 48–150 Mo |

Des blocs plus grands signifient moins de requêtes HTTP et moins de surcharge.

### Taille du tampon

Augmentez le tampon en mémoire pour une lecture plus rapide :

- Par défaut : 16 Mo
- Recommandé : 64–256 Mo (si vous avez la RAM nécessaire)

Cela aide lors de la lecture depuis des sources lentes (NAS, disques mécaniques).

## Surveiller et mesurer

Suivez la vitesse de transfert en temps réel pour observer l'effet de vos modifications :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed in real time" class="img-large img-center" />

### Ce qu'il faut surveiller

- **Vitesse de transfert** — Devrait correspondre à un pourcentage raisonnable de votre vitesse de transfert internet.
- **Transferts actifs** — Devrait correspondre à votre réglage de transferts parallèles.
- **Erreurs** — Les erreurs de limite de débit (429, 403) signifient que vous devez ralentir.
- **Vérifications vs transferts** — Si la vérification prend trop de temps, envisagez de la sauter pour les transferts initiaux.

## Astuces spécifiques par fournisseur

### Google Drive

- Réglez la taille de bloc à 64M ou plus.
- Gardez les transferts parallèles entre 4 et 8 (Google limite agressivement au-delà).
- Si vous atteignez la limite quotidienne de 750 Go, planifiez les transferts sur plusieurs jours.

### OneDrive / SharePoint

- Utilisez 4 à 8 transferts parallèles.
- Une taille de bloc de 64 Mo fonctionne bien.
- OneDrive limite en fonction du volume total — étalez les gros transferts dans le temps.

### AWS S3

- S3 gère bien un parallélisme élevé — essayez 16 à 32 transferts.
- Utilisez le transfert multipart pour les fichiers de plus de 100 Mo.
- Choisissez une région S3 proche de votre emplacement pour une latence plus faible.

### Backblaze B2

- Prend en charge un parallélisme élevé — 16+ transferts fonctionnent bien.
- La taille de bloc ne s'applique pas (B2 utilise sa propre API pour les fichiers volumineux).
- Aucune limite de transfert quotidienne.

## Tâches par lots pour des flux de travail optimisés

Avec les Tâches par lots de la v1.3, enchaînez une séquence de transfert optimisée :

1. Transfert massif avec des paramètres agressifs.
2. Comparaison de vérification.
3. Notification une fois terminé.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Batch optimized transfer workflow" class="img-large img-center" />

## Liste de vérification rapide

- **Augmentez les transferts parallèles** — surtout pour de nombreux petits fichiers.
- **Augmentez la taille de bloc** — surtout pour les fichiers volumineux.
- **Vérifiez votre vitesse internet** — `speedtest-cli` pour établir une référence de votre connexion.
- **Surveillez les limites de débit** — surveillez les erreurs 429/403 dans les journaux de transfert.
- **Utilisez la copie côté serveur** — lors d'un transfert entre clouds compatibles.
- **Planifiez les gros transferts** — en dehors des heures de pointe pour ne pas impacter votre réseau.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ajustez vos paramètres de transfert** dans la configuration de la tâche.
3. **Surveillez la vitesse** en temps réel.
4. **Ajustez et itérez** — de petits changements peuvent considérablement améliorer le débit.

Les paramètres par défaut fonctionnent pour la plupart des situations. Mais lorsque vous déplacez des téraoctets, l'optimisation porte rapidement ses fruits.

---

**Guides connexes :**

- [Définir des limites de bande passante](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Créer des tâches de synchronisation](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Planification des tâches](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
