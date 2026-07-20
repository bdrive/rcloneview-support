---
sidebar_position: 4
description: "Erfahren Sie, wie Sie WebDAV als Remote-Speicher in RcloneView für Dateisynchronisation und -zugriff konfigurieren."
keywords:
  - rcloneview
  - webdav
  - remote storage
  - cloud storage
  - sync
  - webdav configuration
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## So fügen Sie WebDAV mit RcloneView hinzu

### Schritt 1: Fenster für die Konfiguration eines neuen Remotes öffnen

- Klicken Sie im oberen Menü unter **`Remote`** auf **`+ New Remote`**.
- Alternativ können Sie im Explorer-Bereich auf die Schaltfläche **`+`** klicken und **`New Remote`** auswählen, um die Remote-Konfiguration zu starten.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Schritt 2: WebDAV-Remote hinzufügen

#### Im Tab **`Provider`**:
1. Suchen Sie nach **`webdav`**.
2. Wählen Sie **`WebDAV`** aus der Liste aus.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### Im Tab **`Options`**:
3. Geben Sie die Remote-URL ein
4. Geben Sie Ihren Anmeldebenutzernamen ein
5. Geben Sie Ihr Passwort ein

<details>
<summary>Options Details</summary>

Details zu den Optionen

| Field          | Description                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | Die WebDAV-Remote-URL (z. B. https://webdav.example.com/) Sie können auch eine benutzerdefinierte Portnummer angeben (z. B. https://webdav.example.com:5020)                                                                          |
| `vendor`       | (Optional) Leer lassen oder WebDAV-kompatiblen Dienstanbieter angeben (z. B. fastmail, nextcloud, owncloud, sharepoint, sharepoint-ntlm, rclone) Vollständige Liste: [WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | Ihr Anmeldebenutzername                                                                                                                                                                                                     |
| `pass`         | Ihr Anmeldepasswort (maskiert)                                                                                                                                                                                               |
| `bearer_token` | (Optional) Wird normalerweise leer gelassen                                                                                                                                                                                              |



</details>
#### Im Tab **`Name`**:
6. Geben Sie einen eindeutigen und wiedererkennbaren Namen für diesen Remote ein (z. B. `myWebDAV`).

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### Im Tab **`Save`**:
5. Klicken Sie auf **`Save`**, um die Remote-Einrichtung abzuschließen.

### Schritt 3: Den hinzugefügten WebDAV-Remote in RcloneView überprüfen

1. Klicken Sie im oberen Menü unter dem Tab **`Remote`** auf **`Remote Manager`**.
2. Bestätigen Sie, dass Ihr **WebDAV-Remote** im Fenster **Remote Manager** angezeigt wird.

✅ **Fertig!** Ihr WebDAV-Remote ist nun erfolgreich konfiguriert und einsatzbereit in RcloneView.
