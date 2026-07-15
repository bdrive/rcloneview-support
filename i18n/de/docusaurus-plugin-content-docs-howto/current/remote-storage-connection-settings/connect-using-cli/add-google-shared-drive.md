---
sidebar_position: 2
description: "Erfahren Sie, wie Sie Google Shared Drive als Remote in Rclone über die CLI unter Windows konfigurieren und es über RcloneView verwalten."
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
# Google Shared Drive (früher Team Drive)

## So fügen Sie Google Shared Drive über die Rclone CLI hinzu (Windows)

### Schritt 1: Eingabeaufforderung öffnen
  
- Drücken Sie Win + R, geben Sie cmd ein und drücken Sie Enter.  

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
#### Schritt 2: Rclone-Konfiguration starten

Öffnen Sie die Eingabeaufforderung und starten Sie den Rclone-Konfigurationsprozess:

```windows
rclone config
```

Sie sehen ein Menü:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Geben Sie n ein und drücken Sie Enter, um einen neuen Remote zu erstellen.

### Schritt 3: Google Shared Drive einrichten

Folgen Sie diesen Eingabeaufforderungen:

- **Name**: Vergeben Sie einen Namen für Ihren neuen Remote (z. B. mySharedDrive).

```windows
Enter name for new remote.
name> mySharedDrive
```

- **Storage**: Wählen Sie Google Drive, indem Sie `drive` oder die entsprechende Nummer (normalerweise `20`) aus der Liste der Speicheroptionen eingeben.

```
Storage> 20
```

- **client_id und client_secret**: Lassen Sie diese leer, es sei denn, Sie verfügen über spezifische Anmeldedaten.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Scope**: Geben Sie `1` ein, um vollen Zugriff auf Ihr Google Drive zu gewähren.

```
scope> 1
```

- **Service Account Credentials**: Lassen Sie dies leer, sofern nicht ausdrücklich erforderlich.
```
service_account_file> (press Enter)
```

- **Advanced Config**: Überspringen Sie die erweiterte Konfiguration, sofern nicht erforderlich.

```
Edit advanced config? (y/n)
y/n> n
```

- **Auto Config**: Verwenden Sie die automatische Konfiguration für eine einfachere Einrichtung.

```
If not sure try Y. If Y failed, try N.
y) Yes (default)
n) No
y/n> y
```

Ein Browserfenster wird automatisch geöffnet. [Melden Sie sich mit Ihrem Google-Konto an und erteilen Sie die angeforderten Berechtigungen.](/howto/#step-3-connecting-your-remote-storage-googledrive-single-sign-on)


### Schritt 4: Shared Drive konfigurieren

Nach Abschluss der Google-Authentifizierung:

- Sie sehen eine Eingabeaufforderung: "Configure this as a Shared Drive?" Geben Sie `y` ein, um zu bestätigen.

```
Configure this as a Shared Drive (Team Drive)?
y) Yes
n) No (default)
y/n> y
```

- Rclone zeigt eine Liste Ihrer Shared Drives an. Geben Sie die entsprechende Nummer des Shared Drive ein, den Sie hinzufügen möchten.

```
Choose a number from below, or type in your own value of type string.
Press Enter for the default (0APnCeqmeA1p1Uk9PVA).
 1 / Team shared drive
   \ (0APnCeqmeA1p1Uk9PVA)
config_team_drive> 1
```

- Überprüfen Sie die angezeigten Konfigurationsdetails und bestätigen Sie diese.

```
Keep this "mySharedDrive" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Beenden Sie die Rclone-Konfigurationsoberfläche.

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

**Fertig!** Ihr Google Shared Drive ist nun erfolgreich konfiguriert und einsatzbereit für Rclone.

### Schritt 5: Verbindung testen

Überprüfen Sie Ihre Konfiguration, indem Sie den Inhalt Ihres Google Shared Drive auflisten:

```
rclone ls mySharedDrive:
```

Sie sollten eine Liste der Dateien aus Ihrem Shared Drive sehen, wenn alles korrekt eingerichtet ist.

#### Schritt 5: Hinzugefügtes iCloud Drive in RcloneView überprüfen

Starten Sie **RcloneView**.

1. Klicken Sie in der Menüleiste auf **Remote Manager** unter der Registerkarte **Remote**.
2. Überprüfen Sie, ob Ihr **Google Shared Drive** im Fenster **Remote Manager** angezeigt wird.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-google-shared-drive.png" alt="add google shared drive - team drive" class="img-medium img-center" />
</div>
