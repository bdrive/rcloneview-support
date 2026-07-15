---
sidebar_position: 1
description: "Découvrez comment configurer iCloud Drive comme remote dans Rclone via la CLI sous Windows, y compris les étapes pour l'authentification à deux facteurs et l'intégration avec RcloneView."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - icloud
  - cli
  - icloud drive
  - rclone cli
  - windows
  - 2fa
  - remote storage
  - cloud storage
  - Remote Connection
  - apple id
tags:
  - cli
  - icloud
  - windows
  - 2fa
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-21
author: Jay
---
# iCloud Drive

Le remote iCloud ne peut actuellement être ajouté que via la CLI de Rclone.

:::info
Actuellement, les remotes comme iCloud, qui prennent en charge l'authentification à deux facteurs (2FA) interactive, ne peuvent être configurés que via la CLI. La prise en charge de la configuration de ces remotes via l'interface utilisateur sera implémentée dans de futures versions.
:::

## Comment ajouter iCloud Drive via la CLI de Rclone (Windows)

#### Étape 1 : Ouvrir l'invite de commande

- Appuyez sur Win + R, tapez cmd, puis appuyez sur Entrée.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />

#### Étape 2 : Démarrer la configuration de Rclone

Ouvrez l'invite de commande et lancez le processus de configuration de Rclone :

```windows
rclone config
```

Vous verrez un menu :

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Tapez n et appuyez sur Entrée pour créer un nouveau remote.

#### Étape 3 : Configurer le remote iCloud Drive

Suivez les invites :

- **Name** : Attribuez un nom à votre nouveau remote (par exemple, icloud).

```windows
Enter name for new remote.
name> Myicloud
```

- **Storage** : Sélectionnez iCloud Drive en tapant `iclouddrive` ou le numéro correspondant (généralement `59`) dans la liste des options de stockage. S'il n'apparaît pas dans la liste, assurez-vous d'utiliser Rclone v1.69 ou une version ultérieure.

```
Storage> iclouddrive
```

- **Apple ID** : Saisissez l'adresse e-mail de votre identifiant Apple.

```
apple_id> your_email@icloud.com
```

- **Password** : Choisissez de saisir votre mot de passe.

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- Saisissez votre mot de passe d'identifiant Apple lorsque vous y êtes invité.

```
Enter the password
password:
Confirm the password
password:
```

- **Advanced Config** : Sauf besoin spécifique, vous pouvez ignorer la configuration avancée.

```
Edit advanced config? (y/n)
y/n> n
```

- **Authentification à deux facteurs (2FA)** : Si votre identifiant Apple a la 2FA activée (ce qui est recommandé), vous serez invité à saisir le code 2FA envoyé à votre appareil de confiance.

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **Confirm Configuration** : Vérifiez les paramètres et confirmez.

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Votre remote iCloud Drive est maintenant configuré.

Vous pouvez vérifier qu'iCloud Drive a bien été ajouté comme indiqué ci-dessous. Saisissez q pour quitter rclone config.

```
Current remotes:

Name                 Type
====                 ====
Myicloud             iclouddrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
#### Étape 4 : Tester la connexion

Pour vérifier que la configuration a réussi, listez le contenu de votre iCloud Drive :

```
rclone lsd Myicloud:
```

Vous devriez voir une liste des répertoires de votre iCloud Drive.

#### Étape 5 : Vérifier l'ajout d'iCloud Drive dans RcloneView

Lancez **RcloneView**.

1. Dans la barre de menu, cliquez sur **Remote Manager** sous l'onglet **Remote**.
2. Vérifiez que votre **iCloud Drive** apparaît dans la fenêtre **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger Considérations importantes
- **Protection avancée des données** : Si vous avez activé la **Protection avancée des données (ADP)** sur votre identifiant Apple, Rclone ne pourra pas accéder à votre iCloud Drive. Pour utiliser Rclone avec iCloud Drive, vous devez désactiver l'ADP. Vous pouvez le faire sur votre iPhone en accédant à :

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- Assurez-vous que « Advanced Data Protection » est **désactivé**. De plus, « Access iCloud Data on the Web » doit être **activé**.

- **Validité de la session** : Le jeton de confiance obtenu lors de la configuration est valide pendant **30 jours**. Après cette période, vous devrez vous réauthentifier à l'aide de :

```
rclone reconnect Myicloud:
```

- **Mots de passe spécifiques aux applications** : Actuellement, Rclone ne prend **pas** en charge les mots de passe spécifiques aux applications pour iCloud Drive. Vous devez utiliser votre mot de passe d'identifiant Apple habituel avec la 2FA lors de la configuration.

Pour des informations plus détaillées, consultez la documentation officielle de Rclone sur [iCloud Drive](https://rclone.org/iclouddrive/).
:::
