---
sidebar_position: 3
description: "Schritt-für-Schritt-Anleitung zur Konfiguration von SharePoint Online als Remote mit der Rclone CLI unter Windows und zur Überprüfung über RcloneView."
keywords:
  - rcloneview
  - rclone
  - sharepoint
  - microsoft 365
  - Onedrive
  - remote storage
  - business
  - rclone cli
  - cloud storage
  - Remote Connection
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
# SharePoint für Microsoft 365 Business-Nutzer

## So fügen Sie SharePoint mit der Rclone CLI hinzu (Windows)

### Schritt 1: Eingabeaufforderung öffnen

- Drücken Sie `Win + R`, geben Sie `cmd` ein und drücken Sie `Enter`.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
### Schritt 2: Rclone-Konfiguration starten

Geben Sie im Fenster der Eingabeaufforderung Folgendes ein:

```windows
rclone config
```

Sie sehen das folgende Menü:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Geben Sie `n` ein und drücken Sie Enter, um einen neuen Remote zu erstellen.

### Schritt 3: SharePoint einrichten

Folgen Sie diesen Eingabeaufforderungen:

- **Name**: Geben Sie Ihrem Remote einen aussagekräftigen Namen (z. B. `mySharePoint`).

```windows
Enter name for new remote.
name> mySharePoint
```

- **Storage**: Wählen Sie OneDrive, indem Sie `onedrive` oder die entsprechende Nummer (meist `36`) aus der Liste eingeben.

```
Storage> onedrive
```

- **client_id und client_secret**: Leer lassen, sofern Sie keine spezifischen Anmeldedaten besitzen.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Region**: Wählen Sie standardmäßig „global“.

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

- **Option tenant**: Leer lassen, sofern nicht ausdrücklich erforderlich.

```
Enter a value. Press Enter to leave empty.
tenant> (press Enter)
```

- **Erweiterte Konfiguration bearbeiten?** Geben Sie `n` ein.

```
Edit advanced config? (y/n)
y/n> n
```

- **Automatische Konfiguration verwenden?** Geben Sie `y` ein.

```
Use web browser to automatically authenticate rclone with remote?
....
y) Yes (default)
n) No
y/n> y
```

Ein Browserfenster öffnet sich automatisch. Melden Sie sich mit Ihrem Microsoft-Konto (Business-Konto) an und erteilen Sie die angeforderten Berechtigungen.

### Schritt 4: SharePoint-Site konfigurieren

Wählen Sie nach der Authentifizierung Ihren Kontotyp aus:

- Um eine SharePoint-Site hinzuzufügen, wählen Sie Option `2` (Root SharePoint site) oder `4` (Search for a SharePoint site):

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

- Geben Sie die URL Ihrer SharePoint-Site ein oder wählen Sie eine aus den Suchergebnissen aus.

- Überprüfen und bestätigen Sie die angezeigte Konfiguration:

```
Keep this "mySharePoint" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Beenden Sie die Rclone-Konfiguration:

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

**Fertig!** Ihre SharePoint-Site ist nun erfolgreich konfiguriert.

### Schritt 5: Verbindung testen

Überprüfen Sie Ihre Konfiguration, indem Sie den Inhalt Ihrer SharePoint-Site auflisten:

```
rclone ls mySharePoint:
```

Bei korrekter Konfiguration werden Ihre Dateien aufgelistet.

### Schritt 6: SharePoint in RcloneView überprüfen

Starten Sie **RcloneView**.

1. Klicken Sie in der Menüleiste auf **Remote > Remote Manager**.

2. Bestätigen Sie, dass Ihr **SharePoint** im Fenster **Remote Manager** angezeigt wird.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-ms365.png" alt="add sharepoint for microsoft 365 business" class="img-medium img-center" />
</div>
