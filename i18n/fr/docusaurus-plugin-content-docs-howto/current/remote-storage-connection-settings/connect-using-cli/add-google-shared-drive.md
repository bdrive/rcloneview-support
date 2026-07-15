---
sidebar_position: 2
description: Découvrez comment configurer Google Shared Drive en tant que remote dans Rclone à l'aide de la CLI sous Windows et le gérer via RcloneView.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - google drive
  - shared drive
  - team drive
  - rclone cli
  - remote storage
  - cloud storage
  - windows
  - Remote Connection
tags:
  - google-drive
  - shared-drive
  - team-drive
  - cli
  - cloud-storage
  - Remote-Storage
  - remote-connection
date: 2025-05-22
author: Jay
---
# Google Shared Drive (anciennement Team Drive)

## Comment ajouter Google Shared Drive avec Rclone CLI (Windows)

### Étape 1 : Ouvrir l'invite de commandes
  
- Appuyez sur Win + R, tapez cmd, puis appuyez sur Entrée.  

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
#### Étape 2 : Démarrer la configuration de Rclone

Ouvrez l'invite de commandes et lancez le processus de configuration de Rclone :

```windows
rclone config
```

Un menu s'affiche :

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Tapez n et appuyez sur Entrée pour créer un nouveau remote.

### Étape 3 : Configurer le Google Shared Drive

Suivez ces invites :

- **Name** : Attribuez un nom à votre nouveau remote (par exemple, mySharedDrive).

```windows
Enter name for new remote.
name> mySharedDrive
```

- **Storage** : Sélectionnez Google Drive en tapant `drive` ou le numéro correspondant (généralement `20`) dans la liste des options de stockage.

```
Storage> 20
```

- **client_id et client_secret** : Laissez ces champs vides sauf si vous disposez d'identifiants spécifiques.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Scope** : Entrez `1` pour accorder un accès complet à votre Google Drive.

```
scope> 1
```

- **Service Account Credentials** : Laissez ce champ vide sauf si nécessaire.
```
service_account_file> (press Enter)
```

- **Advanced Config** : Ignorez la configuration avancée sauf si elle est requise.

```
Edit advanced config? (y/n)
y/n> n
```

- **Auto Config** : Utilisez la configuration automatique pour une installation plus simple.

```
If not sure try Y. If Y failed, try N.
y) Yes (default)
n) No
y/n> y
```

Une fenêtre de navigateur s'ouvrira automatiquement. [Connectez-vous avec votre compte Google et accordez les autorisations demandées.](/howto/#step-3-connecting-your-remote-storage-googledrive-single-sign-on)


### Étape 4 : Configurer le Shared Drive

Une fois l'authentification Google terminée :

- Une invite s'affiche : « Configure this as a Shared Drive? ». Tapez `y` pour confirmer.

```
Configure this as a Shared Drive (Team Drive)?
y) Yes
n) No (default)
y/n> y
```

- Rclone affichera la liste de vos Shared Drives. Entrez le numéro correspondant au Shared Drive que vous souhaitez ajouter.

```
Choose a number from below, or type in your own value of type string.
Press Enter for the default (0APnCeqmeA1p1Uk9PVA).
 1 / Team shared drive
   \ (0APnCeqmeA1p1Uk9PVA)
config_team_drive> 1
```

- Vérifiez les détails de configuration affichés et confirmez.

```
Keep this "mySharedDrive" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Quittez l'interface de configuration de Rclone.

```
Current remotes:

Name                 Type
====                 ====
mySharedDrive        drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

**Terminé !** Votre Google Shared Drive est maintenant configuré avec succès et prêt à être utilisé avec Rclone.

### Étape 5 : Tester la connexion

Vérifiez votre configuration en listant le contenu de votre Google Shared Drive :

```
rclone ls mySharedDrive:
```

Vous devriez voir la liste des fichiers de votre Shared Drive si tout est correctement configuré.

#### Étape 5 : Vérifier l'ajout d'iCloud Drive dans RcloneView

Lancez **RcloneView**.

1. Dans la barre de menu, cliquez sur **Remote Manager** sous l'onglet **Remote**.
2. Vérifiez que votre **Google Shared Drive** apparaît dans la fenêtre **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-google-shared-drive.png" alt="add google shared drive - team drive" class="img-medium img-center" />
</div>
