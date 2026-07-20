---
sidebar_position: 3
description: Guide étape par étape pour configurer SharePoint Online en tant que distant avec Rclone CLI sur Windows et le vérifier via RcloneView.
keywords:
  - rcloneview
  - rclone
  - sharepoint
  - microsoft 365
  - Onedrive
  - stockage distant
  - business
  - rclone cli
  - stockage cloud
  - Connexion distante
tags:
  - microsoft
  - cli
  - sharepoint
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-22
author: Jay
---
# SharePoint pour les utilisateurs Microsoft 365 Business

## Comment ajouter SharePoint avec Rclone CLI (Windows)

### Étape 1 : Ouvrir l'invite de commande

- Appuyez sur `Win + R`, tapez `cmd`, puis appuyez sur `Entrée`.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
### Étape 2 : Démarrer la configuration de Rclone

Dans la fenêtre d'invite de commande, tapez :

```windows
rclone config
```

Vous verrez le menu suivant :

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Tapez `n` et appuyez sur Entrée pour créer un nouveau distant.

### Étape 3 : Configurer SharePoint

Suivez ces invites :

- **Name** : Donnez un nom significatif à votre distant (par exemple, `mySharePoint`).

```windows
Enter name for new remote.
name> mySharePoint
```

- **Storage** : Sélectionnez OneDrive en tapant `onedrive` ou le numéro correspondant (généralement `36`) dans la liste.

```
Storage> onedrive
```

- **client_id et client_secret** : Laissez vide sauf si vous disposez d'identifiants spécifiques.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Region** : Choisissez global par défaut.

```
Choose national cloud region for OneDrive.
Choose a number from below, or type in your own value of type string.
Press Enter for the default (global).
 1 / Microsoft Cloud Global
   \ (global)
 2 / Microsoft Cloud for US Government
   \ (us)
 3 / Microsoft Cloud Germany (deprecated - try global region first).
   \ (de)
 4 / Azure and Office 365 operated by Vnet Group in China
   \ (cn)
region> (press Enter)
```

- **Option tenant** : Laissez vide sauf besoin spécifique.

```
Enter a value. Press Enter to leave empty.
tenant> (press Enter)
```

- **Edit advanced config?** Entrez `n`.

```
Edit advanced config? (y/n)
y/n> n
```

- **Use auto config?** Entrez `y`.

```
Use web browser to automatically authenticate rclone with remote?
....
y) Yes (default)
n) No
y/n> y
```

Une fenêtre de navigateur s'ouvrira automatiquement. Connectez-vous avec votre compte Microsoft (compte professionnel) et accordez les autorisations demandées.

### Étape 4 : Configurer le site SharePoint

Après l'authentification, sélectionnez votre type de compte :

- Pour ajouter un site SharePoint, sélectionnez l'option `2` (Root SharePoint site) ou `4` (Search for a SharePoint site) :

```
Choose a number from below, or type in an existing value of type string.
Press Enter for the default (onedrive).
 1 / OneDrive Personal or Business
   \ (onedrive)
 2 / Root Sharepoint site
   \ (sharepoint)
   / Sharepoint site name or URL
 3 | E.g. mysite or https://contoso.sharepoint.com/sites/mysite
   \ (url)
 4 / Search for a Sharepoint site
   \ (search)
 5 / Type in driveID (advanced)
   \ (driveid)
 6 / Type in SiteID (advanced)
   \ (siteid)
   / Sharepoint server-relative path (advanced)
 7 | E.g. /teams/hr
   \ (path)
config_type> 2
```

- Entrez l'URL de votre site SharePoint ou sélectionnez-la dans les résultats de recherche.

- Vérifiez et confirmez la configuration affichée :

```
Keep this "mySharePoint" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Quittez la configuration de Rclone :

```
Current remotes:

Name                 Type
====                 ====
mySharePoint         onedrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

**Terminé !** Votre site SharePoint est maintenant configuré avec succès.

### Étape 5 : Tester la connexion

Vérifiez votre configuration en listant le contenu de votre site SharePoint :

```
rclone ls mySharePoint:
```

Si tout est correctement configuré, vous verrez vos fichiers listés.

### Étape 6 : Vérifier SharePoint dans RcloneView

Lancez **RcloneView**.

1. Cliquez sur **Remote > Remote Manager** dans la barre de menu.

2. Confirmez que votre **SharePoint** apparaît dans la fenêtre **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-ms365.png" alt="add sharepoint for microsoft 365 business" class="img-medium img-center" />
</div>
