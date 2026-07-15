---
sidebar_position: 8
description: Erfahren Sie, wie Sie Backblaze B2-Speicher in RcloneView hinzufügen.
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## So fügen Sie Backblaze B2 mit RcloneView hinzu (Windows)

### Schritt 1: Remote-Manager öffnen

- Klicken Sie im oberen Menü unter **`Remote`** auf **`+ New Remote`**.
- Alternativ können Sie im Explorer-Bereich auf die Schaltfläche **`+`** klicken und **`New Remote`** auswählen, um die Remote-Konfiguration zu starten.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Schritt 2: Backblaze B2 als Speicheranbieter auswählen

1. Geben Sie in der **Search Provider**-Leiste `b2` ein.
2. Klicken Sie auf die angezeigte Option **Backblaze B2**.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

Sie gelangen anschließend zum Konfigurationsbildschirm für Backblaze B2.

### Schritt 3: Ihren Backblaze B2-Remote konfigurieren

Geben Sie im Einrichtungsformular die folgenden erforderlichen Informationen ein:

- **Remote name**: Ein aussagekräftiger Name für Ihren Remote (z. B. `MyB2Master`).
- **account**: Ihre Backblaze **Application Key ID**.
- **key**: Ihr Backblaze **Application Key**.

Klicken Sie nach Eingabe der erforderlichen Werte auf **`Add Remote`**, um die Verbindung zu speichern.
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info Wo finde ich diese Zugangsdaten?

- Melden Sie sich bei Ihrem [Backblaze B2-Konto](https://secure.backblaze.com/b2_buckets.htm) an.
- Gehen Sie zu **App Keys**.
- Erstellen Sie ein neues Schlüsselpaar oder kopieren Sie ein vorhandenes:
  - Verwenden Sie die **Key ID** als `account`
  - Verwenden Sie den **Application Key** als `key`
:::


### Schritt 4: Den hinzugefügten Remote bestätigen

Nach dem Hinzufügen erscheint Ihr neuer Backblaze B2-Remote (z. B. `MyB2Master`) in der Liste des **Remote Manager**.

Sie können jetzt:
- Auf **`Open`** klicken, um den Remote zu durchsuchen.
- Ihn bei Kopier-/Synchronisations-/Mount-Vorgängen verwenden.
- Ihn jederzeit verwalten oder löschen.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **Fertig!** Sie haben Ihren **Backblaze B2**-Speicher erfolgreich mit **RcloneView** verbunden.


## 🔗 Weitere Ressourcen

- 🔐 Verwalten Sie Ihre Schlüssel: [https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 App-Key-Dokumentation: [https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)
