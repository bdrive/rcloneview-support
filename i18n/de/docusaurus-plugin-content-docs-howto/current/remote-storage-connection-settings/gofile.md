---
sidebar_position: 6
description: Erfahren Sie, wie Sie Gofile-Speicher in RcloneView hinzufügen.
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## So fügen Sie Gofile mit RcloneView hinzu (Windows)


### Schritt 1: Fenster zur Konfiguration eines neuen Remotes öffnen

- Klicken Sie im oberen Menü unter **`Remote`** auf **`+ New Remote`**.
- Alternativ können Sie im Explorer-Bereich auf die Schaltfläche **`+`** klicken und **`New Remote`** auswählen, um die Remote-Konfiguration zu starten.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### Schritt 2: Gofile-Remote hinzufügen

#### Im Tab **`Provider`**:

1. Suchen Sie nach **`gofile`**.
2. Wählen Sie **`Gofile`** aus der Liste aus.

#### Im Tab **`Options`**:

3. Geben Sie Ihr **Access Token** ein.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info Wie Sie ein Access Token erhalten
 - Besuchen Sie [https://gofile.io/myprofile](https://gofile.io/myprofile)
 - Melden Sie sich bei Ihrem Gofile-Konto an.
- Scrollen Sie nach unten, um das **`Account API Token`** zu finden, und kopieren Sie es.
:::

#### Im Tab **`Name`**:

4. Weisen Sie diesem Remote einen **`Remote name`** zu (z. B. `myGofile`).

#### Im Tab **`Save`**:

5. Klicken Sie auf **`Save`**, um das Hinzufügen des Remotes abzuschließen.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### Schritt 3: Das hinzugefügte Gofile-Remote in RcloneView überprüfen

Starten Sie **RcloneView**.

1. Klicken Sie in der Menüleiste unter dem Tab **`Remote`** auf **`Remote Manager`**.
2. Bestätigen Sie, dass Ihr **`Gofile`**-Remote im Fenster **`Remote Manager`** angezeigt wird.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **Fertig!** Ihr **`Gofile`**-Remote ist jetzt erfolgreich konfiguriert und einsatzbereit in **RcloneView**.


## 🔗 Weiterführende Ressourcen

- 🔐 Holen Sie sich Ihr Token: [https://gofile.io/myprofile](https://gofile.io/myprofile)
