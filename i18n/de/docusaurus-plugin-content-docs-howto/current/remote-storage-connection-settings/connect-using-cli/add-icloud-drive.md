---
sidebar_position: 1
description: "Erfahren Sie, wie Sie iCloud Drive als Remote in Rclone über die CLI unter Windows konfigurieren, einschließlich der Schritte für die Zwei-Faktor-Authentifizierung und die Integration mit RcloneView."
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

Der iCloud-Remote kann derzeit nur über die Rclone-CLI hinzugefügt werden.

:::info
Derzeit können Remotes wie iCloud, die interaktive Zwei-Faktor-Authentifizierung (2FA) unterstützen, nur über die CLI konfiguriert werden. Die Unterstützung für die Konfiguration dieser Remotes über die Benutzeroberfläche wird in zukünftigen Versionen implementiert.
:::

## So fügen Sie iCloud Drive über die Rclone-CLI hinzu (Windows)

#### Schritt 1: Eingabeaufforderung öffnen

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

#### Schritt 3: Den iCloud-Drive-Remote einrichten

Folgen Sie den Anweisungen:

- **Name**: Vergeben Sie einen Namen für Ihren neuen Remote (z. B. icloud).

```windows
Enter name for new remote.
name> Myicloud
```

- **Storage**: Wählen Sie iCloud Drive aus, indem Sie `iclouddrive` oder die entsprechende Nummer (normalerweise `59`) aus der Liste der Speicheroptionen eingeben. Falls es nicht aufgeführt ist, stellen Sie sicher, dass Sie Rclone v1.69 oder höher verwenden.

```
Storage> iclouddrive
```

- **Apple ID**: Geben Sie Ihre Apple-ID-E-Mail-Adresse ein.

```
apple_id> your_email@icloud.com
```

- **Password**: Wählen Sie, Ihr Passwort einzugeben.

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- Geben Sie bei Aufforderung Ihr Apple-ID-Passwort ein.

```
Enter the password
password:
Confirm the password
password:
```

- **Advanced Config**: Sofern Sie keine besonderen Anforderungen haben, können Sie die erweiterte Konfiguration überspringen.

```
Edit advanced config? (y/n)
y/n> n
```

- **Zwei-Faktor-Authentifizierung (2FA)**: Wenn für Ihre Apple ID 2FA aktiviert ist (was empfohlen wird), werden Sie aufgefordert, den 2FA-Code einzugeben, der an Ihr vertrauenswürdiges Gerät gesendet wurde.

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **Confirm Configuration**: Überprüfen Sie die Einstellungen und bestätigen Sie sie.

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Ihr iCloud-Drive-Remote ist jetzt konfiguriert.

Sie können überprüfen, ob iCloud Drive erfolgreich hinzugefügt wurde, wie unten gezeigt. Geben Sie q ein, um rclone config zu beenden.

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
#### Schritt 4: Verbindung testen

Um zu überprüfen, ob die Konfiguration erfolgreich war, listen Sie den Inhalt Ihres iCloud Drive auf:

```
rclone lsd Myicloud:
```

Sie sollten eine Liste der Verzeichnisse in Ihrem iCloud Drive sehen.

#### Schritt 5: Das hinzugefügte iCloud Drive in RcloneView überprüfen

Starten Sie **RcloneView**.

1. Klicken Sie in der Menüleiste unter dem Tab **Remote** auf **Remote Manager**.
2. Überprüfen Sie, ob Ihr **iCloud Drive** im Fenster **Remote Manager** angezeigt wird.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger Wichtige Hinweise
- **Advanced Data Protection**: Wenn Sie **Advanced Data Protection (ADP)** für Ihre Apple ID aktiviert haben, kann Rclone nicht auf Ihr iCloud Drive zugreifen. Um Rclone mit iCloud Drive zu verwenden, müssen Sie ADP deaktivieren. Sie können dies auf Ihrem iPhone tun, indem Sie zu Folgendem navigieren:

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- Stellen Sie sicher, dass „Advanced Data Protection“ **deaktiviert** ist. Zusätzlich muss „Access iCloud Data on the Web“ **aktiviert** sein.

- **Session Validity**: Das während der Konfiguration erhaltene Trust-Token ist **30 Tage** lang gültig. Nach diesem Zeitraum müssen Sie sich erneut authentifizieren, indem Sie Folgendes verwenden:

```
rclone reconnect Myicloud:
```

- **App-Specific Passwords**: Derzeit unterstützt Rclone **keine** app-spezifischen Passwörter für iCloud Drive. Sie müssen bei der Einrichtung Ihr reguläres Apple-ID-Passwort zusammen mit 2FA verwenden.

Weitere detaillierte Informationen finden Sie in der offiziellen Rclone-Dokumentation zu [iCloud Drive](https://rclone.org/iclouddrive/).
:::




