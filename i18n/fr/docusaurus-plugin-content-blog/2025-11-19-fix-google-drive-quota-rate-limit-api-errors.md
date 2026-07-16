---
slug: fix-google-drive-quota-rate-limit-api-errors
title: "Corrigez les erreurs de quota, de limite de débit et d'API Google Drive avec RcloneView"
authors:
  - tayson
description: Contournez le quota de 750 Go/jour de Google Drive, l'erreur userRateLimitExceeded et les erreurs d'API aléatoires grâce au réglage visuel des tâches, au Planificateur et aux diagnostics de RcloneView, le tout appuyé sur le moteur rclone.
keywords:
  - rcloneview
  - erreur de quota google drive
  - limite de débit google drive
  - userRateLimitExceeded
  - api rclone drive
  - corriger google drive 403
  - automatisation api drive
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - automation
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrigez les erreurs de quota, de limite de débit et d'API Google Drive avec RcloneView

> Fatigué des erreurs `userRateLimitExceeded`, `quotaExceeded` ou des réponses 429 aléatoires ? RcloneView offre aux utilisateurs avancés de Google Drive une boîte à outils graphique pour prévoir, contourner et récupérer après une limitation d'API, sans avoir à surveiller des scripts en permanence.

Que vous archiviez des bibliothèques multimédias, consolidiez des Drives partagés ou synchronisiez MEGA vers Google Workspace, vous finirez toujours par atteindre les limites de Drive :
- **750 Go/jour** de quota d'envoi et de copie par utilisateur
- **5 To** de taille maximale de fichier (formats autres que Google Docs)
- Appels API limités par rafales (`userRateLimitExceeded`, `rateLimitExceeded`, 429)
- Quelques ratés occasionnels côté serveur (5xx, réinitialisations de connexion)

Plutôt que de procéder par essais-erreurs en ligne de commande, ce guide montre comment maintenir vos tâches actives grâce à l'Explorateur, au Planificateur et aux diagnostics de RcloneView, pour que chaque transfert reprenne exactement là où il s'était arrêté.

<!-- truncate -->

## Comprendre les erreurs Drive avant de réagir

| Texte de l'erreur | Cause racine | Correction dans RcloneView |
| --- | --- | --- |
| `userRateLimitExceeded`, `rateLimitExceeded` | Trop de requêtes par seconde depuis un même utilisateur/projet | Réduisez **Checkers/Transfers**, activez `--tpslimit`, décalez les fenêtres du Planificateur |
| `quotaExceeded`, `403: insufficient storage` | Le volume d'envoi + copie a dépassé 750 Go/jour, OU le Drive de destination est plein | Divisez les tâches par dossier, ajoutez des pauses entre les lots, choisissez un autre compte ou attendez la réinitialisation |
| `403: The user does not have sufficient permissions for file` | Mauvais Drive partagé ou mauvaise propriété du fichier | Utilisez **Compare** pour inspecter les chemins, vérifiez l'appartenance au Drive partagé |
| `5xx backendError` / `Internal Error` | Panne temporaire côté Google | Activez les tentatives de réessai, le backoff exponentiel, et laissez le Planificateur reprendre |
| `drive: rateLimitExceeded: Too many requests for this file` | Mise à jour trop rapide d'un même fichier | Activez les transferts fragmentés, limitez la concurrence |

RcloneView affiche ces messages dans l'historique des tâches et les journaux, afin que vous puissiez identifier précisément l'horodatage et l'objet en cause.

## Étape 1 — Établir une base de référence de votre usage Drive

1. **Vérifiez le quota restant** : dans Google Workspace Admin ou les paramètres Drive, confirmez l'espace de stockage disponible pour l'utilisateur ou le Drive partagé ciblé.
2. **Segmentez le jeu de données** : utilisez l'Explorateur de RcloneView pour répartir la migration en dossiers logiques (`Finance FY24`, `Video RAW`, etc.). Glissez-déposez dans des dossiers de préparation pour évaluer la taille.
3. **Lancez Compare** : le [guide Comparer le contenu des dossiers](/howto/rcloneview-basic/compare-folder-contents) vous aide à visualiser les écarts et à éviter de copier des doublons qui grignotent le quota.

<CloudSupportGrid />

## Étape 2 — Régler les transferts avant de planifier

Ouvrez **Gestionnaire de tâches → Ajouter une tâche** (voir [Créer des tâches de synchronisation](/howto/rcloneview-basic/create-sync-jobs)) et concentrez-vous sur ces réglages :

- **Transfers vs. Checkers** : réglez les transferts entre `4 et 8` pour des réseaux à 1 Gbit/s ; réduisez à `2` en cas de pic d'erreurs. Un Checkers à `4` maintient une vérification saine sans surcharger l'API.
- **Taille des fragments (chunk size)** : laissez les valeurs par défaut, sauf si Google limite l'envoi de très grosses vidéos ; réduisez alors la taille des fragments pour diminuer les rafales.
- **`--drive-stop-on-upload-limit`** : activez cette option (case à cocher dans les options avancées) pour que RcloneView mette en pause la tâche en douceur une fois les 750 Go consommés, au lieu de générer des erreurs 403 en boucle.
- **Limites de bande passante** : dans **Paramètres → Transferts**, réglez par exemple `200 Mbps` afin de préserver la stabilité du réseau local.

Enregistrez la tâche avec un nom explicite, comme `Drive-Master-Library-Sync`.

## Étape 3 — Planifier en tenant compte des quotas

Utilisez le Planificateur (étape 4 de l'assistant de création de tâche) pour minimiser les collisions :

1. Activez **Enable Scheduler** et sélectionnez des fenêtres **Daily** ou **Hourly**.
2. Lancez les envois volumineux *la nuit, en heure locale*, pour qu'ils coïncident avec les heures les plus calmes de Drive.
3. Enchaînez plusieurs tâches avec des heures de démarrage décalées (par ex. `01:00`, `03:30`, `06:00`) afin de répartir les quotas sur la fenêtre de réinitialisation.
4. Activez les **Retries** (3 à 5) avec backoff exponentiel. RcloneView reprend automatiquement exactement là où il s'était arrêté, car rclone conserve les sommes de contrôle des fichiers et les transferts partiels.
5. Activez les **Notifications** pour recevoir des alertes par e-mail ou webhook chaque fois que Google envoie un avertissement de quota.

**Exemple de commande affichée dans les détails de la tâche**

```bash
rclone copy gdrive-main:Video gdrive-archive:Video ^
  --transfers=4 ^
  --checkers=4 ^
  --drive-stop-on-upload-limit ^
  --tpslimit=8 ^
  --retries=5 --low-level-retries=10
```

Vous n'avez jamais besoin de lancer cette commande manuellement, mais elle documente la mesure d'atténuation pour vos audits.

## Étape 4 — Réagir en cas d'erreur

- **Quota de 750 Go/jour atteint** : la tâche se met en pause avec une entrée de journal claire. Dupliquez la tâche, changez le sous-dossier source, ou attendez la prochaine réinitialisation à minuit UTC. Le Planificateur reprend automatiquement.
- **userRateLimitExceeded** : réduisez transfers/checkers, ajoutez `--tpslimit` (onglet Avancé), et envisagez de déplacer les identifiants API vers un projet Google Cloud dédié afin d'obtenir un quota par projet plus élevé.
- **429 Too Many Requests** : réglez le Planificateur pour s'exécuter toutes les heures avec des lots plus petits (utilisez le filtre **Include/Exclude** pour diviser les répertoires). Activez `--drive-chunk-size=64M` pour lisser les rafales.
- **Permissions sur un Drive partagé** : utilisez l'Explorateur pour ouvrir la destination au moins une fois ; si Drive génère des erreurs de permission, basculez vers un utilisateur ayant le rôle Gestionnaire/Gestionnaire de contenu sur ce Drive partagé.
- **5xx** : laissez les tentatives de réessai faire leur travail. Si le même objet échoue systématiquement, marquez-le comme ignoré via Compare afin de continuer les autres transferts pendant que vous enquêtez.

Tous les événements sont enregistrés dans l'**historique des tâches**, avec des journaux téléchargeables, de sorte que les preuves pour les tickets de support ou les rapports de conformité sont accessibles en un clic.

## Étape 5 — Surveiller de manière proactive

- **Panneau des transferts** : surveillez les graphiques de bande passante et le statut par fichier pour repérer instantanément une limitation.
- **Compare après automatisation** : relancez Compare (Dry Run) pour confirmer qu'aucun écart en attente ne subsiste une fois les quotas réinitialisés.
- **Chronologie d'activité** : la vue du Planificateur affiche « Dernière exécution / Prochaine exécution / Statut », pour savoir exactement quand le pipeline se met en pause pour cause de quota.
- **Notifications** : connectez vos tâches à Slack/e-mail pour que les alertes de limite de débit atteignent la bonne équipe avant que les utilisateurs ne remarquent des fichiers manquants.
- **Lancement à la connexion** : activez cette option dans les Paramètres pour que RcloneView et le Planificateur survivent aux redémarrages du poste de travail.

## Bonnes pratiques pour les équipes fortement utilisatrices de Drive

1. **Faites tourner les comptes de service** : pour les administrateurs Workspace, attribuez des comptes de service distincts par service afin de répartir les quotas.
2. **Préparez localement les médias volumineux** : synchronisez d'abord vers un NAS sur site, puis laissez RcloneView répliquer ce NAS vers Drive pendant la nuit, en fractionnant l'usage de l'API.
3. **Étiquetez les tâches par priorité** : les données critiques bénéficient de fenêtres nocturnes ; les archives non urgentes s'exécutent chaque semaine.
4. **Documentez les préréglages** : exportez les définitions de tâches pour que les collègues réutilisent des réglages déjà optimisés plutôt que d'en inventer de nouveaux qui atteignent les limites de débit.
5. **Conservez les journaux** : stockez les journaux RcloneView (JSON/CSV) dans un compartiment d'audit pour prouver que chaque incident de quota a été traité.

## FAQ

**Comment savoir quel fichier a atteint la limite ?**
Ouvrez Historique des tâches → Voir le journal. Le chemin exact du fichier apparaît juste au-dessus du message d'erreur, ce qui vous permet de relancer uniquement ce répertoire.

**Puis-je contourner la limite de 750 Go/jour ?**
Pas directement. Répartissez les données sur plusieurs comptes Google (chacun disposant de son propre quota) ou attendez la réinitialisation. Les filtres de RcloneView aident à segmenter les dossiers sans avoir à les déplacer manuellement.

**Réduire les transferts ralentit-il tout ?**
Cela peut arriver, mais c'est préférable à des tâches qui plantent. Associez des transferts plus faibles à des exécutions plus fréquentes du Planificateur, afin que le débit net continue de respecter vos SLA.

**Que faire si Drive bannit ma clé API ?**
Créez un projet Google Cloud dédié uniquement à RcloneView/rclone, ajoutez des identifiants OAuth, et limitez l'accès aux opérateurs de confiance. Faites tourner la clé si un abus est détecté.

## Maintenir des migrations Drive saines

Les quotas et limites de débit de Drive sont permanents, mais avec RcloneView, vous pouvez les anticiper, recevoir des alertes précoces et reprendre automatiquement dès que Google redonne son feu vert. Réglez vos tâches une fois, planifiez-les, et laissez l'interface graphique appliquer les bonnes pratiques pour ne plus jamais avoir à surveiller manuellement les tentatives de réessai.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
