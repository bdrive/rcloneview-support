---
sidebar_position: 14
description: Chiffrez votre fichier de configuration rclone et utilisez-le avec RcloneView en définissant un mot de passe de configuration dans les Paramètres.
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# Utiliser un fichier de configuration rclone chiffré

Rclone peut chiffrer son fichier de configuration (`rclone.conf`) afin que les identifiants des distants ne soient pas stockés en texte clair. RcloneView prend entièrement en charge les fichiers de configuration chiffrés — il vous suffit de lui indiquer le mot de passe.

Ce tutoriel couvre :

- Pourquoi chiffrer votre configuration rclone
- Comment chiffrer votre configuration existante avec `rclone config`
- Comment saisir le mot de passe de configuration dans RcloneView

---

## Pourquoi chiffrer votre configuration rclone ?

Votre fichier `rclone.conf` contient les identifiants (jetons, mots de passe, clés API) de tous les distants que vous avez configurés. Par défaut, ceux-ci sont stockés en texte clair. Chiffrer le fichier de configuration protège ces identifiants si quelqu'un accède à votre machine ou à votre sauvegarde.

- Empêche l'exposition des identifiants en texte clair.
- Ajoute une couche de sécurité sur les systèmes partagés ou multi-utilisateurs.
- Fonctionne avec tous les distants et fonctionnalités de rclone — rien ne change, si ce n'est que le fichier est chiffré au repos.

---

## Étape 1 : Chiffrer votre configuration rclone

Ouvrez un terminal et exécutez :

```bash
rclone config
```

Un menu d'options s'affiche. Sélectionnez **`s`** pour **Set configuration password** :

```
s) Set configuration password
q) Quit config
s/q> s
```

Saisissez le mot de passe souhaité lorsque vous y êtes invité, puis confirmez-le. Rclone chiffrera le fichier de configuration existant sur place.

:::tip
Si vous avez déjà des distants configurés, ils continueront de fonctionner. Rclone rechiffre l'intégralité du fichier avec votre nouveau mot de passe.
:::

:::caution
Mémorisez ce mot de passe. Si vous le perdez, vous devrez reconfigurer vos distants depuis zéro.
:::

---

## Étape 2 : Saisir le mot de passe de configuration dans RcloneView

1. Ouvrez **Settings** (depuis le menu du haut).
2. Allez dans l'onglet **Embedded Rclone**.
3. Faites défiler jusqu'à **Advanced Options**.
4. Dans le champ **Config Password**, saisissez le même mot de passe que celui défini à l'Étape 1.
5. Cliquez sur **Restart Embedded Rclone**.

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

Et voilà — RcloneView déchiffrera et utilisera votre configuration chiffrée de manière transparente. Vos distants apparaîtront et fonctionneront comme d'habitude.

---

## Résumé

| Item | Description |
| --- | --- |
| Fonction | Utiliser un fichier de configuration rclone chiffré avec RcloneView |
| Chiffrer | Exécutez `rclone config` → `s) Set configuration password` |
| Configuration RcloneView | Settings → Embedded Rclone → Advanced Options → Config Password |
| Appliquer | Cliquez sur **Restart Embedded Rclone** après avoir saisi le mot de passe |
| Idéal pour | Protéger les identifiants sur des systèmes partagés ou sensibles |
