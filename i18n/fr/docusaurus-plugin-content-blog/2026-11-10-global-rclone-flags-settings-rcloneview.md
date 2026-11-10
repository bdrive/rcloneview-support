---
slug: global-rclone-flags-settings-rcloneview
title: "Flags globaux Rclone — Appliquez des options personnalisées à chaque job dans RcloneView"
authors:
  - alex
description: "Utilisez Global Rclone Flags dans RcloneView pour appliquer partout des options rclone supplémentaires, avec les réglages de journalisation, de mot de passe de configuration et de chemin du binaire."
keywords:
  - flags globaux rclone
  - paramètres RcloneView
  - flags rclone GUI
  - paramètres rclone intégré
  - no-check-certificate
  - niveau de journalisation rclone
  - mot de passe de configuration rclone
  - binaire rclone personnalisé
  - paramètres avancés RcloneView
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Flags globaux Rclone — Appliquez des options personnalisées à chaque job dans RcloneView

> Définissez un flag rclone une seule fois dans Settings et il s'applique à tout RcloneView, sans le répéter job par job.

Certains environnements ont besoin d'une option rclone supplémentaire partout : un certificat auto-signé sur un serveur privé, un emplacement de journaux personnalisé ou un fichier de configuration chiffré. La page de paramètres Embedded Rclone est l'endroit où ils se trouvent. RcloneView monte ET synchronise plus de 90 fournisseurs depuis une seule fenêtre, sous Windows, macOS et Linux, et ces paramètres s'appliquent à l'ensemble du moteur intégré.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Où se trouvent les paramètres

Ouvrez l'onglet Settings et choisissez Embedded Rclone. Vous y trouverez l'emplacement du binaire rclone, l'emplacement de rclone.conf, les dossiers de téléchargement et d'envoi par défaut, une option Stop rclone on App Exit, les options de journalisation, un champ Config Password et la zone Global Rclone Flags.

Embedded Rclone écoute par défaut sur `http://127.0.0.1:5582`, et RcloneView communique avec lui via l'API RC de rclone. Modifier ces paramètres change la façon dont ce moteur démarre ; redémarrez donc Embedded Rclone après toute modification.

<img src="/support/images/en/blog/new-remote.png" alt="Configuration d'un remote dans RcloneView utilisant les paramètres de rclone intégré" class="img-large img-center" />

## Utiliser Global Rclone Flags

Le champ Global Rclone Flags accepte des flags rclone supplémentaires qui s'appliquent de façon générale. L'exemple documenté est `--no-check-certificate`, pratique lorsqu'un serveur WebDAV ou HTTPS utilise un certificat auto-signé. Utilisez-le avec prudence : il désactive la vérification des certificats ; réservez-le donc aux serveurs privés de confiance plutôt qu'aux points d'accès publics.

Pour ajuster un seul job, privilégiez les Advanced Settings propres à chaque job (transferts, checkers, checksum, nouvelles tentatives). Réservez les flags globaux aux options qui s'appliquent réellement partout.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Paramètres de job dans RcloneView complétant les flags globaux" class="img-large img-center" />

## Journalisation et protection de la configuration

Cochez Enable rclone Logging, choisissez un dossier et un nom de fichier de journal, puis un niveau : DEBUG, INFO, NOTICE ou ERROR. DEBUG est le plus détaillé et c'est celui que le support vous demandera lorsque vous signalez un problème ; cliquez sur Restart Embedded Rclone, reproduisez le problème, puis envoyez le fichier journal.

Si votre rclone.conf est chiffré, saisissez ici le Config Password afin que le moteur intégré puisse lire vos remotes. Vous pouvez aussi indiquer à RcloneView un binaire rclone ou un chemin de configuration personnalisé, et le Self Update intégré à l'application maintient rclone à jour.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History utilisé avec les journaux rclone dans RcloneView" class="img-large img-center" />

## Premiers pas

1. **Téléchargez RcloneView** depuis [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ouvrez Settings, puis Embedded Rclone, et vérifiez les chemins actuels.
3. Ajoutez le flag dont vous avez besoin dans Global Rclone Flags et activez la journalisation si vous souhaitez conserver une trace.
4. Redémarrez Embedded Rclone et lancez un petit job de test.

Quelques paramètres globaux bien choisis garantissent la cohérence de chaque job sans clics supplémentaires.

---

**Guides associés :**

- [Log Debug : diagnostiquer les transferts](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [Rclone Self Update dans RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [Corriger les erreurs de certificat SSL/TLS](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
