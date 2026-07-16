---
slug: fix-onedrive-sync-errors-delta-token-path-length-rcloneview
title: "Corriger les erreurs de synchronisation OneDrive : jeton delta expiré, chemin trop long et échecs d'authentification"
authors:
  - tayson
description: "Résolvez les erreurs courantes de synchronisation OneDrive avec rclone et RcloneView — expiration du jeton delta, limites de longueur de chemin Windows, échecs d'authentification et dépassements de quota."
keywords:
  - fix onedrive sync errors rclone
  - onedrive delta token expired rclone
  - onedrive path too long sync error
  - rclone onedrive authentication error
  - onedrive sync failed rcloneview
  - onedrive quota exceeded rclone
  - troubleshoot onedrive rclone
  - onedrive sync troubleshooting
  - rcloneview onedrive errors
  - onedrive 400 bad request rclone
tags:
  - onedrive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corriger les erreurs de synchronisation OneDrive : jeton delta expiré, chemin trop long et échecs d'authentification

> OneDrive est une plateforme de stockage cloud performante, mais son comportement de synchronisation présente quelques particularités qui peuvent piéger les utilisateurs de rclone. Ce guide couvre les erreurs OneDrive les plus courantes que vous rencontrerez dans RcloneView et comment résoudre chacune d'entre elles.

OneDrive fonctionne bien pour la grande majorité des opérations rclone, mais certaines conditions d'erreur sont propres à la plateforme de Microsoft. L'expiration du jeton delta, les limites de longueur de chemin Windows, les échecs de renouvellement du jeton d'authentification et les quotas de téléversement par fichier ou par jour apparaissent tous dans un usage réel. Voici un guide systématique pour diagnostiquer et corriger chacun d'entre eux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Erreur 1 : Jeton delta expiré

**Symptôme :** Vous voyez une erreur comme :
```
Failed to sync: invalidDeltaToken: The token is expired.
```

**Cause :** Rclone utilise un jeton delta pour suivre les modifications incrémentielles dans OneDrive. Ce jeton a une durée de validité d'environ 30 jours. Si vous n'avez pas exécuté de synchronisation depuis plus d'un mois — ou si Microsoft a invalidé le jeton — rclone ne peut pas poursuivre l'analyse incrémentielle.

**Correction :** Forcez une nouvelle analyse complète en supprimant le jeton delta mis en cache :

1. Dans RcloneView, ouvrez le panneau **Terminal**.
2. Exécutez : `rclone backend remove-expiry onedrive:` (remplacez `onedrive` par le nom de votre remote).
3. Vous pouvez aussi supprimer l'entrée de cache `vfs/delta` pour le remote depuis la configuration de RcloneView.
4. Relancez le job de synchronisation — rclone effectuera cette fois une analyse complète.

Cela prend plus de temps lors de la première exécution après la correction, mais résout complètement l'erreur.

## Erreur 2 : Chemin trop long (> 400 caractères)

**Symptôme :**
```
ERROR: path too long: cannot handle path > 400 characters
```
ou des fichiers qui échouent à se synchroniser depuis des dossiers profondément imbriqués.

**Cause :** OneDrive impose une longueur de chemin maximale de 400 caractères (pour OneDrive Personnel) ou de 400 caractères pour OneDrive Entreprise. Windows a également des limites héritées de 260 caractères (MAX_PATH) qui affectent le client de synchronisation de bureau OneDrive, bien que rclone lui-même n'ait pas cette limitation Windows.

**Correction :**
- **Raccourcissez votre structure de dossiers** — gardez une imbrication de répertoires peu profonde. Renommez les noms de dossiers longs.
- **Utilisez un chemin de base plus court dans OneDrive** — si vous synchronisez vers `OneDrive/Clients/Projects/2026/Active/Reports/`, envisagez de simplifier vers `OneDrive/Projects-2026/Reports/`.
- **Utilisez les règles de filtre de RcloneView** pour ignorer les dossiers présentant des problèmes de longueur de chemin connus pendant que vous les restructurez.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Use folder comparison to identify path issues" class="img-large img-center" />

## Erreur 3 : Erreurs d'authentification (401 non autorisé)

**Symptôme :**
```
401 Unauthorized
Failed to refresh token
AADSTS700082: The refresh token has expired
```

**Cause :** Les jetons de rafraîchissement OAuth de Microsoft expirent s'ils ne sont pas utilisés pendant 90 jours ou après un changement de mot de passe / une réinitialisation de politique de sécurité. Lorsque le jeton stocké dans la configuration de rclone devient invalide, toutes les opérations échouent.

**Correction :** Réautorisez le remote OneDrive dans RcloneView :

1. Ouvrez **Remotes** dans RcloneView.
2. Sélectionnez votre remote OneDrive et choisissez **Modifier**.
3. Cliquez sur **Réautoriser** — une fenêtre de navigateur s'ouvre pour la connexion Microsoft.
4. Connectez-vous et accordez à nouveau l'accès.
5. Enregistrez le jeton mis à jour.

Les opérations futures utiliseront le nouveau jeton. Programmez un rappel pour réautoriser si vous exécutez des jobs de synchronisation peu fréquents (mensuels ou moins).

## Erreur 4 : 429 Trop de requêtes / limitation de débit

**Symptôme :**
```
429 Too Many Requests: request throttled
```

**Cause :** L'API de OneDrive impose des limites de débit par utilisateur. Synchroniser rapidement des milliers de petits fichiers déclenche une limitation.

**Correction :**

- **Réduisez les transferts simultanés** — dans les paramètres de job de RcloneView, réduisez le nombre de transferts à 2–4.
- **Ajoutez une limite de débit** — utilisez le flag `--tpslimit 10` dans le champ des flags personnalisés de RcloneView pour limiter les transactions par seconde.
- **Planifiez pendant les heures creuses** — la limitation de Microsoft est plus agressive pendant les heures de bureau.
- **Utilisez les téléversements par blocs pour les fichiers volumineux** — RcloneView gère cela automatiquement pour les fichiers de plus de 100 Mo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive jobs during off-peak hours" class="img-large img-center" />

## Erreur 5 : Quota dépassé

**Symptôme :**
```
403 Forbidden: insufficient storage
```
ou des téléversements qui échouent silencieusement lorsque OneDrive est proche de sa capacité maximale.

**Cause :** Le compte OneDrive cible dispose d'un espace libre insuffisant.

**Correction :**
- Vérifiez votre quota OneDrive dans le centre d'administration Microsoft 365 ou sur onedrive.live.com.
- **Libérez de l'espace** en supprimant ou en déplaçant d'anciens fichiers de OneDrive.
- **Mettez à niveau votre forfait** si le compte est réellement plein.
- **Divisez la migration** — déplacez les fichiers vers un autre compte OneDrive ou basculez vers une autre destination pour le surplus.

## Erreur 6 : Caractères invalides dans les noms de fichiers

**Symptôme :** Les fichiers contenant certains caractères échouent au transfert vers OneDrive.

**Cause :** OneDrive interdit certains caractères dans les noms de fichiers : `\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`. Les fichiers provenant de systèmes Linux contiennent souvent des deux-points ou d'autres caractères dans leurs noms.

**Correction :** RcloneView (via rclone) dispose d'une option d'encodage intégrée `--onedrive-enc` qui remplace automatiquement les caractères interdits par des équivalents Unicode. Activez-la dans les paramètres avancés de votre remote OneDrive.

## Surveillance des erreurs dans RcloneView

Le panneau **Historique des jobs** de RcloneView affiche les journaux de transfert avec les messages d'erreur complets pour chaque fichier :

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View OneDrive error logs in RcloneView" class="img-large img-center" />

Utilisez-le pour identifier rapidement quels fichiers ont échoué et pourquoi, sans fouiller dans les journaux bruts de rclone.

## Pour commencer

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Consultez l'historique des jobs** pour les messages d'erreur lorsqu'une synchronisation échoue.
3. **Appliquez la correction** pour le type d'erreur spécifique en suivant les indications ci-dessus.
4. **Relancez le job** — rclone ignorera les fichiers transférés avec succès et ne retentera que les échecs.

La plupart des erreurs OneDrive ont des corrections simples. La clé est d'identifier le message d'erreur exact et d'appliquer la solution ciblée plutôt que de déboguer à l'aveugle.

---

**Guides connexes :**

- [Corriger les erreurs de limite de débit 403 de Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Résoudre les erreurs rclone avec RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Résoudre les conflits de synchronisation cloud](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
