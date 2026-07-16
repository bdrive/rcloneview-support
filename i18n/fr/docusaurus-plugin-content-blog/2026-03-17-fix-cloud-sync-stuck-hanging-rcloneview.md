---
slug: fix-cloud-sync-stuck-hanging-rcloneview
title: "Corriger une synchronisation cloud bloquée à 99 % ou figée — Résoudre les transferts bloqués dans RcloneView"
authors:
  - tayson
description: "Votre synchronisation cloud tourne depuis des heures mais semble bloquée. La progression affiche 99 % sans jamais se terminer. Voici les causes des transferts bloqués et comment les résoudre."
keywords:
  - synchronisation cloud bloquée
  - transfert cloud figé
  - synchronisation bloquée à 99 pour cent
  - téléversement cloud figé
  - transfert rclone bloqué
  - synchronisation cloud ne se termine pas
  - corriger un transfert cloud bloqué
  - délai d'expiration de synchronisation cloud
  - téléversement cloud figé
  - synchronisation rclone figée
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger une synchronisation cloud bloquée à 99 % ou figée — Résoudre les transferts bloqués dans RcloneView

> La barre de progression affiche 99 %. Elle affiche 99 % depuis 45 minutes. Est-ce que ça fonctionne ? Est-ce bloqué ? Faut-il annuler ? Voici comment diagnostiquer et corriger les transferts cloud bloqués.

Les transferts cloud bloqués sont l'un des problèmes les plus frustrants en synchronisation cloud. La tâche semble en cours d'exécution, l'indicateur de progression avance à peine, et vous ne savez pas s'il faut attendre ou redémarrer. La bonne nouvelle : les transferts bloqués ont presque toujours une cause précise et corrigible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causes courantes

### 1) Un fichier volumineux presque terminé

La « fausse alerte » la plus fréquente. Un fichier de 50 Go à 98 % terminé, il reste encore 1 Go. À 10 Mo/s, cela représente encore 100 secondes — mais la barre de progression avance à peine car elle mesure le nombre de fichiers, pas les octets.

**Solution** : surveillez l'indicateur de vitesse de transfert. Si des octets continuent de circuler, le transfert fonctionne — il est simplement lent sur le dernier gros fichier.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Check if bytes are flowing" class="img-large img-center" />

### 2) Limitation du débit par l'API (rate limiting)

Google Drive, OneDrive et d'autres fournisseurs limitent les transferts lorsque vous atteignez les limites de leur API. Le transfert ralentit fortement mais n'échoue pas.

**Solution** : réduisez le nombre de transferts simultanés. Ajoutez `--tpslimit` via le terminal intégré.

### 3) Délai d'expiration réseau sur un fichier volumineux

Certains fournisseurs déconnectent silencieusement les téléversements de longue durée. Le transfert paraît actif mais aucune donnée ne circule.

**Solution** : configurez les délais d'expiration dans les paramètres de votre distant. Utilisez `--timeout` pour détecter les blocages plus tôt.

### 4) Fichier verrouillé par un autre processus

Le fichier source est ouvert dans une autre application. Le transfert attend l'accès.

**Solution** : fermez les applications susceptibles d'utiliser le fichier, ou excluez les fichiers activement utilisés à l'aide de filtres.

### 5) Traitement côté fournisseur

Certains fournisseurs traitent les fichiers téléversés (analyse antivirus, indexation) avant de confirmer la fin de l'opération. Cela crée un écart entre la fin du téléversement et sa confirmation.

**Solution** : patientez. Cela se résout généralement en 1 à 5 minutes.

### 6) Saturation de la mémoire

Des listes de transfert très volumineuses (millions de fichiers) peuvent saturer la mémoire disponible, ce qui ralentit considérablement le processus.

**Solution** : divisez le transfert en lots plus petits par dossier.

## Étapes de diagnostic

### Vérifier l'historique des tâches

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check job status" class="img-large img-center" />

### Utiliser le terminal pour une sortie détaillée

Exécutez la même opération depuis le terminal de RcloneView avec le drapeau `-vv` pour obtenir une sortie de diagnostic détaillée.

### Annuler et relancer

Si le transfert est réellement bloqué, annulez-le et relancez la tâche. RcloneView ignore les fichiers déjà transférés et reprend là où il s'est bloqué.

## Prévention

- **Définissez des délais d'expiration raisonnables** dans la configuration du distant
- **Utilisez une concurrence modérée** (4 à 8 transferts) pour éviter les limitations de débit
- **Divisez les tâches volumineuses** en lots plus petits
- **Planifiez des relances** — si une tâche nocturne se bloque, une seconde exécution planifiée rattrape le retard

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Vérifiez la vitesse de transfert** — si des octets circulent, tout fonctionne.
3. **Réduisez la concurrence** en cas de limitation de débit.
4. **Annulez et relancez** si le blocage persiste réellement.

Une progression bloquée à 99 % correspond presque toujours à la fin lente du dernier gros fichier.

---

**Guides associés :**

- [Corriger les téléversements cloud lents](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Reprendre les transferts échoués](https://rcloneview.com/support/blog/resume-failed-cloud-transfers-rcloneview)
- [Comprendre les limites de débit des API cloud](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)

<CloudSupportGrid />
