---
slug: optimize-rcloneview-mount-s3-r2-performance
title: "Optimiser les performances de montage RcloneView pour S3 et Cloudflare R2"
authors:
  - tayson
description: Ajustez les montages RcloneView pour Amazon S3 et Cloudflare R2 avec le bon mode de cache, la bonne taille de chunk et la bonne concurrence, pour que les serveurs média et les tâches d'analyse restent rapides et stables.
keywords:
  - rcloneview
  - rclone mount
  - s3 mount performance
  - cloudflare r2 mount
  - vfs cache
  - rclone tuning
  - multi-thread streams
  - s3 chunk size
tags:
  - mount
  - cloudflare-r2
  - aws-s3
  - performance
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Optimiser les performances de montage RcloneView pour S3 et Cloudflare R2

> Obtenez une lecture plus fluide et des accès plus rapides en ajustant les paramètres de montage RcloneView pour un stockage compatible S3, sans modifier le moindre flag CLI.

Monter des buckets S3 ou Cloudflare R2 sur votre poste de travail, votre NAS ou votre serveur média offre un accès instantané, mais les paramètres par défaut peuvent limiter le débit. Avec quelques ajustements ciblés dans RcloneView, vous pouvez réduire la latence, limiter la mise en mémoire tampon (buffering) et garder des coûts prévisibles sur AWS comme sur R2.

<!-- truncate -->

**Mots-clés principaux :** *rclone mount*, *S3 mount performance*, *Cloudflare R2*, *VFS cache*, *multi-thread streams*.

---

## Pourquoi l'ajustement des montages est important

- Diffusion sans à-coups : les serveurs média et les outils BI ont besoin d'une lecture anticipée (read-ahead) et d'une mise en cache cohérentes pour éviter le buffering.  
- Protéger les API contre la surcharge : une concurrence maîtrisée évite les limitations 429/503 sur les points de terminaison compatibles S3.  
- Économiser sur l'egress et les relectures : une mise en cache plus intelligente réduit les GET dupliqués et le trafic réseau.  
- Sécuriser les écritures : un mode de cache correct évite de corrompre les bases de données ou de laisser des uploads partiels en cas de déconnexion.

---

## Prérequis et vérifications rapides

1. Emplacement et latence : choisissez la région AWS la plus proche de vos utilisateurs ; pour R2, choisissez l'emplacement Cloudflare le plus proche pour minimiser le RTT.  
2. Chemin réseau : vérifiez que les règles VPN/pare-feu autorisent un trafic HTTPS (443) soutenu sans limitation agressive par un IDS.  
3. Identifiants dans RcloneView : ajoutez des remotes pour Amazon S3 et Cloudflare R2 (point de terminaison compatible S3 comme `https://<account>.r2.cloudflarestorage.com`).  
   - Besoin d'un rappel ? Consultez [Comment ajouter un remote S3](/howto/remote-storage-connection-settings/s3) et [Comment obtenir des identifiants API Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential).  
4. Comprendre la charge de travail : le streaming média privilégie le read-ahead ; l'analytique privilégie les lectures parallèles ; les cibles de sauvegarde peuvent nécessiter une mise en cache d'écriture plus sûre.

---

## Étape 1 - Créer le montage dans RcloneView

1. Ouvrez **RcloneView** -> **Mounts** -> **New Mount**.  
2. Choisissez votre remote (S3 ou R2) et un chemin de montage local.  
3. Activez **Auto-start on launch** si vous exécutez des services (Plex/Jellyfin, outils BI) au redémarrage.  
4. Enregistrez, puis démarrez le montage une fois pour vérifier qu'il apparaît dans l'explorateur de fichiers de votre OS.

> Astuce : pour R2, définissez le bon point de terminaison dans Advanced Settings pour garder une faible latence régionale.

---

## Étape 2 - Définir le bon mode de cache VFS

| Cas d'usage | `--vfs-cache-mode` recommandé | Pourquoi |
| --- | --- | --- |
| Lecture média / tableaux de bord BI | `writes` | Met en tampon les téléchargements et écritures temporaires ; plus sûr pour les mises à jour partielles |
| Édition photo/vidéo | `full` | Garantit que les lectures/écritures aléatoires passent par le cache local avant l'upload |
| Navigation simple en lecture seule | `off` (par défaut) | Surcharge la plus faible quand vous modifiez rarement les fichiers |

Autres réglages de cache dans la fenêtre de montage :

- Taille max du cache : commencez avec 10-50 Go sur SSD ; augmentez si vous diffusez de grandes bibliothèques.  
- `--vfs-read-ahead` : réglez 32M-128M pour que les lecteurs pré-bufferisent sans pause.  
- `--buffer-size` : 8M-32M par fichier maintient les fenêtres TCP pleines sur les liens à forte latence.  
- `--dir-cache-time` : 5m-30m pour réduire les appels LIST sur les buckets profonds ; à associer avec `--poll-interval` (par ex. 30s) pour que les mises à jour continuent de se propager.

---

## Étape 3 - Débloquer le débit avec la concurrence et le tuning multipart

Même pour les montages, rclone respecte les flags de réglage du backend :

- `--multi-thread-streams` : améliore les lectures de fichier unique sur des chemins à forte latence (essayez 4-8).  
- `--transfers` : régit les uploads concurrents depuis le cache ; commencez à 4-8 pour éviter les limitations du fournisseur.  
- Taille de chunk S3 : réglez `--s3-chunk-size 64M` (128M pour 1 Gbit/s+) pour réduire les allers-retours sur les gros fichiers.  
- Concurrence d'upload S3 : `--s3-upload-concurrency 4` est une base sûre ; augmentez si le CPU et le réseau le permettent.  
- Sommes de contrôle : gardez `--s3-disable-checksum=false` pour l'intégrité, sauf si vous optimisez purement pour la vitesse sur des données non critiques.  
- Multipart R2 : utilisez `--chunk-size 64M` et `--upload-cutoff 64M` pour forcer les uploads multipart sur les fichiers volumineux.

Surveillez les limitations de débit ; en cas de réponses 429/503, réduisez `--transfers` de 25 % et ajoutez `--retries-sleep 10s`.

---

## Étape 4 - Garder les montages stables sur de longues sessions

- Tentatives et backoff : réglez `--retries 10` et `--low-level-retries 20` ; combinez avec `--retries-sleep 5s`.  
- Sécurité des timeouts : pour un Wi-Fi instable, ajoutez `--contimeout 15s` et `--timeout 5m` pour que les lectures longues survivent.  
- Sécurité des écritures : sur des charges d'édition partagées, n'activez `--immutable` que pour les archives qui ne doivent jamais changer.  
- Journalisation : activez les logs détaillés dans les montages RcloneView ; suivez-les en direct lors des ajustements de concurrence pour repérer les limitations.  
- Contrôles de santé : planifiez une tâche nocturne `--size-only` ou `--checksum` entre S3 et R2 pour vérifier l'intégrité.

---

## Étape 5 - Profils pour les scénarios courants

### Streaming média depuis R2/S3 vers Plex ou Jellyfin
- `--vfs-cache-mode writes`  
- `--vfs-read-ahead 96M`, `--buffer-size 16M`  
- `--multi-thread-streams 6`  
- Limitez `--transfers 4` pour ménager R2/S3 ; activez `--bwlimit 80M` aux heures de pointe.

### Tableaux de bord BI ou notebooks de data science sur du parquet/CSV monté
- `--vfs-cache-mode full` pour les lectures aléatoires  
- `--multi-thread-streams 8`, `--transfers 6`  
- `--s3-chunk-size 128M` plus élevé et `--s3-upload-concurrency 6` pour des écritures de spill rapides depuis le cache.

### Cible de sauvegarde (NAS vers S3/R2)
- `--vfs-cache-mode writes`, `--dir-cache-time 30m`  
- `--transfers 4` conservateur, `--checkers 8`  
- Activez le chiffrement côté serveur si la politique de votre bucket l'exige ; gardez les sommes de contrôle activées.

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Liste de vérification pour le dépannage

1. Navigation lente dans de grands dossiers ? Ajoutez `--fast-list` si votre fournisseur le permet et prolongez `--dir-cache-time`.  
2. Le buffering persiste ? Augmentez `--vfs-read-ahead` et vérifiez l'espace de cache SSD ; surveillez la file d'attente disque de l'OS.  
3. Erreurs de limitation ? Réduisez `--transfers` et `--multi-thread-streams` ; ajoutez `--bwlimit` pendant les heures de bureau.  
4. Les uploads se bloquent à 99 % ? Augmentez `--timeout`, vérifiez que les tailles de chunk multipart respectent les minimums du fournisseur (5 Mo pour S3, 5-50 Mo pour R2).  
5. Les applications voient des métadonnées obsolètes ? Réduisez `--poll-interval` et redémarrez le montage pour rafraîchir le cache de répertoire.

---

## FAQ

**Q. Ai-je besoin de montages différents pour S3 et R2 ?**  
**R.** Créez des montages séparés pour chaque remote ; vous pouvez garder les deux actifs et glisser-déposer entre eux dans RcloneView.

**Q. La taille du cache a-t-elle un impact sur le coût ?**  
**R.** Oui - des caches plus grands réduisent les GET répétés, ce qui peut diminuer les frais d'egress et de requêtes, en particulier avec le modèle par requête de R2.

**Q. Puis-je mélanger charges de travail en lecture seule et en lecture/écriture ?**  
**R.** Utilisez deux montages : un en lecture seule (`--read-only`) pour la lecture média, un autre en lecture/écriture pour les éditeurs, afin que les permissions et la mise en cache restent prévisibles.

**Q. Comment surveiller les performances dans le temps ?**  
**R.** Exportez les logs de montage et l'historique des tâches (Job History) chaque semaine, taguez vos configurations (par ex. `[MountTest] R2 64M/6threads`), et conservez un court runbook des réglages gagnants pour votre équipe.

---

Les montages paraissent locaux lorsqu'ils sont bien ajustés. Avec les contrôles GUI de RcloneView pour le cache, la concurrence et la journalisation, vous pouvez garder des performances S3 et R2 dignes d'un stockage on-prem - sans script shell requis.

<CloudSupportGrid />
