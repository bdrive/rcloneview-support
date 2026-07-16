---
slug: rclone-rc-api-remote-control-rcloneview
title: "Contrôler RcloneView à distance avec l'API RC de rclone"
authors: [tayson]
description: "Découvrez comment utiliser l'API RC (Remote Control) de rclone pour automatiser les opérations de stockage cloud, surveiller les transferts et intégrer RcloneView dans vos flux de travail."
keywords:
  - rclone rc api
  - rclone remote control
  - rcloneview api
  - rclone automation
  - rclone api endpoints
  - rclone rest api
  - rclone programmatic control
  - cloud storage automation
  - rclone webhook
  - rclone monitoring api
tags: [feature, api, automation, cli, tips, monitoring]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Contrôler RcloneView à distance avec l'API RC de rclone

> Débloquez le contrôle programmatique de vos opérations de stockage cloud grâce à l'API RC intégrée de rclone, associée en toute transparence à RcloneView.

Rclone est fourni avec une puissante API REST appelée l'interface RC (Remote Control). Cette API expose presque toutes les opérations de rclone sous forme de point de terminaison HTTP, ce qui vous permet de démarrer des transferts, de suivre leur progression, de gérer les montages et d'interroger des statistiques depuis n'importe quel langage de programmation ou outil d'automatisation. RcloneView s'appuie sur cette même API RC en coulisses pour ses opérations d'interface graphique, ce qui signifie que tout ce que vous pouvez faire dans l'interface peut également être fait de façon programmatique. Ce guide couvre l'API RC depuis les bases jusqu'à l'automatisation avancée, vous donnant les connaissances nécessaires pour créer des intégrations personnalisées, des tableaux de bord de supervision et des flux de travail automatisés autour de vos opérations de stockage cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Comprendre l'architecture RC de rclone

L'API RC de rclone est une API REST basée sur JSON qui s'exécute comme un serveur HTTP intégré au processus rclone. Lorsque vous démarrez rclone avec l'option `--rc` ou que vous utilisez la commande `rclone rcd`, celui-ci ouvre un port (5572 par défaut) et écoute les requêtes HTTP.

**Comment RcloneView utilise l'API RC :**

RcloneView communique avec rclone exclusivement via cette interface RC. Lorsque vous cliquez sur un bouton dans l'interface graphique pour démarrer une synchronisation, parcourir un répertoire ou vérifier la progression d'un transfert, RcloneView envoie des requêtes HTTP à l'API RC de rclone en arrière-plan. Cette architecture implique que :

- RcloneView peut contrôler des instances rclone s'exécutant sur des machines distantes
- Plusieurs clients peuvent se connecter à la même instance rclone
- Toutes les opérations sont sans état (stateless) et peuvent être automatisées
- L'interface graphique et l'accès programmatique utilisent le même mécanisme sous-jacent

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**Rclone intégré vs. externe :**

En mode intégré, RcloneView démarre son propre processus rclone et gère automatiquement la connexion RC. En mode externe, vous démarrez rclone séparément et vous pointez RcloneView vers celui-ci. Le mode externe est essentiel pour les scénarios de gestion à distance, comme le contrôle d'une instance rclone s'exécutant sur un NAS ou un serveur cloud.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## Démarrer le démon RC

Pour utiliser l'API RC, vous avez besoin d'une instance rclone en cours d'exécution avec l'interface RC activée.

**Démarrage basique :**

```bash
rclone rcd --rc-addr :5572
```

Cela démarre le démon RC en écoutant sur toutes les interfaces sur le port 5572 sans authentification. Cela convient uniquement au développement local.

**Démarrage authentifié (recommandé) :**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**Avec chiffrement TLS :**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**Avec l'interface web activée :**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**Options de démarrage courantes :**

| Option | Objectif |
|------|---------|
| `--rc-addr` | Adresse et port d'écoute |
| `--rc-user` / `--rc-pass` | Identifiants d'authentification de base |
| `--rc-allow-origin` | Origine CORS pour un accès depuis un navigateur |
| `--rc-serve` | Servir les objets distants via l'API RC |
| `--rc-no-auth` | Désactiver l'authentification (usage local uniquement) |
| `--rc-cert` / `--rc-key` | Certificat TLS et clé privée |

**Vérifier que le démon fonctionne :**

```bash
curl http://localhost:5572/rc/noop
# Réponse attendue : {}
```

Si l'authentification est activée :

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## Points de terminaison essentiels de l'API

L'API RC fournit des dizaines de points de terminaison organisés par catégorie. Voici les plus importants pour un usage quotidien.

**Opérations principales :**

```bash
# Obtenir la version de rclone et les informations de build
curl -X POST http://localhost:5572/core/version

# Obtenir les statistiques de transfert actuelles
curl -X POST http://localhost:5572/core/stats

# Obtenir les statistiques de mémoire
curl -X POST http://localhost:5572/core/memstats

# Déclencher le ramasse-miettes (garbage collection)
curl -X POST http://localhost:5572/core/gc

# Arrêter rclone proprement
curl -X POST http://localhost:5572/core/quit
```

**Opérations de synchronisation et de copie :**

```bash
# Copier des fichiers de la source vers la destination
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# Synchroniser (miroir) la source vers la destination
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# Déplacer des fichiers de la source vers la destination
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**Opérations sur les fichiers :**

```bash
# Lister les fichiers d'un répertoire
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# Obtenir des informations sur un fichier spécifique
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# Supprimer un fichier
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# Créer un répertoire
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# Obtenir des informations sur l'espace disque
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**Opérations de montage :**

```bash
# Monter un distant comme un lecteur local
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# Lister les montages actifs
curl -X POST http://localhost:5572/mount/listmounts

# Démonter
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## Surveiller les transferts de manière programmatique

L'une des utilisations les plus précieuses de l'API RC est la surveillance des transferts en temps réel.

**Interroger les statistiques de transfert :**

```bash
curl -X POST http://localhost:5572/core/stats
```

Cela renvoie un objet JSON contenant :

```json
{
  "bytes": 1234567890,
  "checks": 150,
  "deletedDirs": 0,
  "deletes": 0,
  "elapsedTime": 45.2,
  "errors": 0,
  "eta": 120,
  "fatalError": false,
  "renames": 0,
  "speed": 27434842,
  "totalBytes": 9876543210,
  "totalChecks": 500,
  "totalTransfers": 200,
  "transferTime": 42.1,
  "transfers": 85,
  "transferring": [
    {
      "bytes": 52428800,
      "eta": 30,
      "group": "sync/copy",
      "name": "Photos/vacation-2025/IMG_4521.jpg",
      "percentage": 65,
      "size": 80530636,
      "speed": 1048576,
      "speedAvg": 983040
    }
  ]
}
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Gestion des tâches :**

Chaque opération asynchrone (sync, copy, move) crée une tâche que vous pouvez suivre :

```bash
# Lister toutes les tâches en cours
curl -X POST http://localhost:5572/job/list

# Obtenir le statut d'une tâche spécifique
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# Arrêter une tâche en cours
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**Créer un script de surveillance simple :**

```python
import requests
import time
import json

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

def get_stats():
    resp = requests.post(f"{RC_URL}/core/stats", auth=AUTH)
    return resp.json()

def monitor_transfers(interval=5):
    while True:
        stats = get_stats()
        speed_mb = stats.get("speed", 0) / 1024 / 1024
        transferred = stats.get("transfers", 0)
        total = stats.get("totalTransfers", 0)
        errors = stats.get("errors", 0)

        print(f"Speed: {speed_mb:.1f} MB/s | "
              f"Progress: {transferred}/{total} | "
              f"Errors: {errors}")

        if transferred >= total and total > 0:
            print("Transfer complete!")
            break

        time.sleep(interval)

monitor_transfers()
```

## Créer des scripts d'automatisation

L'API RC permet des scénarios d'automatisation puissants qui vont au-delà de ce qu'une interface graphique seule peut offrir.

**Sauvegarde automatisée avec gestion des erreurs :**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# Démarrer la sauvegarde
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# Surveiller jusqu'à la fin
while true; do
  STATUS=$(curl -s -u "$AUTH" -X POST "$RC_URL/job/status" \
    -H "Content-Type: application/json" \
    -d "{\"jobid\": $JOBID}")

  FINISHED=$(echo "$STATUS" | jq -r '.finished')
  SUCCESS=$(echo "$STATUS" | jq -r '.success')

  if [ "$FINISHED" = "true" ]; then
    if [ "$SUCCESS" = "true" ]; then
      echo "Backup completed successfully"
    else
      ERROR=$(echo "$STATUS" | jq -r '.error')
      echo "Backup failed: $ERROR"
      # Envoyer une notification d'alerte
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**Orchestration de synchronisation multi-distants :**

```python
import requests
import time

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

SYNC_JOBS = [
    {"srcFs": "gdrive:/Documents", "dstFs": "s3:backup/documents"},
    {"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-archive"},
    {"srcFs": "onedrive:/Work", "dstFs": "s3:backup/work"},
]

def start_sync(src, dst):
    resp = requests.post(f"{RC_URL}/sync/sync", auth=AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    return resp.json().get("jobid")

def wait_for_job(jobid):
    while True:
        resp = requests.post(f"{RC_URL}/job/status", auth=AUTH,
                            json={"jobid": jobid})
        status = resp.json()
        if status.get("finished"):
            return status.get("success", False)
        time.sleep(5)

# Exécuter toutes les synchronisations séquentiellement
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**Automatisation des rapports d'utilisation du stockage :**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

REMOTES=("gdrive:" "s3:my-bucket" "b2:my-bucket" "onedrive:")

echo "Storage Usage Report - $(date)"
echo "================================"

for REMOTE in "${REMOTES[@]}"; do
  RESULT=$(curl -s -u "$AUTH" -X POST "$RC_URL/operations/about" \
    -H "Content-Type: application/json" \
    -d "{\"fs\": \"$REMOTE\"}")

  TOTAL=$(echo "$RESULT" | jq -r '.total // "unlimited"')
  USED=$(echo "$RESULT" | jq -r '.used // "unknown"')
  FREE=$(echo "$RESULT" | jq -r '.free // "unknown"')

  echo "$REMOTE: Used=$USED, Free=$FREE, Total=$TOTAL"
done
```

## Intégrations de webhooks et notifications

Combinez l'API RC avec des webhooks pour créer des flux de travail pilotés par événements.

**Notifications Slack à la fin d'un transfert :**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # Démarrer la synchronisation
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # Attendre la fin
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # Obtenir les statistiques finales
            stats = requests.post(f"{RC_URL}/core/stats", auth=RC_AUTH).json()

            if status.get("success"):
                notify_slack(
                    f"Completed: {label}\n"
                    f"Files: {stats.get('transfers', 0)} | "
                    f"Size: {stats.get('bytes', 0) / 1024 / 1024:.1f} MB | "
                    f"Errors: {stats.get('errors', 0)}"
                )
            else:
                notify_slack(f"FAILED: {label}\nError: {status.get('error')}")
            break
        time.sleep(10)

run_sync_with_notification(
    "gdrive:/Backups", "b2:disaster-recovery",
    "Nightly Google Drive Backup"
)
```

**Point de terminaison de contrôle de santé pour la supervision de disponibilité :**

Vous pouvez utiliser l'API RC comme point de terminaison de contrôle de santé pour des outils de supervision comme Uptime Kuma ou Healthchecks.io :

```bash
# Contrôle de santé simple - renvoie 200 si rclone fonctionne
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

Intégrez cela dans votre pile de supervision pour recevoir des alertes si le démon rclone s'arrête.

## Bonnes pratiques de sécurité

Lorsque vous exposez l'API RC, en particulier sur un réseau, la sécurité est essentielle.

**Authentification :** Utilisez toujours `--rc-user` et `--rc-pass` en production. N'exécutez jamais avec `--rc-no-auth` sur une interface accessible depuis le réseau.

**Chiffrement TLS :** Utilisez `--rc-cert` et `--rc-key` pour chiffrer le trafic de l'API. Les certificats autosignés conviennent à un usage interne ; utilisez Let's Encrypt pour les instances exposées au public.

**Restrictions réseau :** Liez le service à localhost lorsque seul un accès local est nécessaire :

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

Pour un accès distant, utilisez un proxy inverse (nginx, Caddy) avec une terminaison TLS appropriée et une limitation de débit plutôt que d'exposer rclone directement.

**Règles de pare-feu :** Restreignez l'accès au port RC :

```bash
# Autoriser uniquement des IP spécifiques
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**Alternative d'authentification par jeton :** Pour les scripts, envisagez de placer les identifiants dans des variables d'environnement plutôt que de les coder en dur :

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## Pour commencer

L'API RC de rclone transforme RcloneView d'une application autonome en une plateforme pour créer de l'automatisation de stockage cloud. Que vous ayez besoin d'une simple surveillance des transferts, d'une orchestration multi-distants complexe, ou d'une intégration avec votre chaîne d'outils DevOps existante, l'API RC fournit la base nécessaire. Commencez par activer le démon RC, expérimentez avec `core/stats` et `operations/list` pour comprendre le format des réponses, puis développez progressivement des flux de travail automatisés qui gèrent vos tâches de stockage cloud routinières sans intervention manuelle.

---

**Guides connexes :**
- [Exécuter et gérer des tâches](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Surveillance des transferts en temps réel](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Utiliser RcloneView avec un rclone externe](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
