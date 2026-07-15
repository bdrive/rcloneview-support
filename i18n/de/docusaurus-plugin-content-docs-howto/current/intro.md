---
sidebar_position: 1
description: "Erfahren Sie, wie Sie RcloneView installieren und Google Drive als Remote mit einer einfachen Schritt-für-Schritt-Anleitung verbinden."
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# Schnellstartanleitung

Diese Anleitung führt Sie Schritt für Schritt durch die Installation von **RcloneView** und das Hinzufügen eines **Remote-Speichers (Google Drive)**.

## **Schritt 1: RcloneView installieren**

1. Laden Sie die Installationsdatei von der [**RcloneView-Downloadseite**](https://rcloneview.com/src/download.html) herunter.
2. Führen Sie den heruntergeladenen Installer aus und folgen Sie den Anweisungen auf dem Bildschirm, um die Installation abzuschließen.
3. Nach erfolgreicher Installation sehen Sie den folgenden Bestätigungsbildschirm:
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **Schritt 2: Remote-Speicher hinzufügen (Beispiel Google Drive)**

### **Fenster zum Konfigurieren eines neuen Remotes öffnen**

- Klicken Sie im oberen Menü unter **`Remote`** auf **`+ New Remote`**.
- Alternativ können Sie im Explorer-Bereich auf die Schaltfläche **`+`** klicken und **`New Remote`** auswählen, um die Remote-Konfiguration zu starten.
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### Google-Drive-Remote hinzufügen

1. Geben Sie **`google`** in die Suchleiste ein.
2. Wählen Sie **`Google Drive`** aus den Ergebnissen aus.
3. Geben Sie einen wiedererkennbaren **`Remote-Namen`** ein (z. B. MyGoogleDrive).
4. Klicken Sie auf **`Add Remote`**, um das Hinzufügen des Remotes abzuschließen.

:::tip
Felder, die mit einem Sternchen (*) markiert sind, sind Pflichtfelder. Stellen Sie sicher, dass alle Pflichtfelder ausgefüllt sind, bevor Sie speichern.
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip OAuth-basierte Cloud-Remotes

Bei den meisten Cloud-Speicher-Anbietern, die OAuth (webbasierte Anmeldung) unterstützen, wie **Google Drive**, **Dropbox**, **Google Photos**, **OneDrive**, **Box**, **pCloud**, **Yandex Disk**, **premiumize.me**, **put.io** und **HiDrive**, können Sie den Schritt `Options` überspringen – benennen Sie einfach Ihren Remote und melden Sie sich über den Browser an.

**Einige Anbieter erfordern jedoch zusätzliche Konfiguration** im Tab `Options`, bevor die OAuth-Anmeldung möglich ist:
- **Zoho WorkDrive** – Auswahl der Region
- **Google Cloud Storage** – Eingabe der Projektnummer
- **Citrix ShareFile** – Eingabe der Root Folder ID
- **Google Drive Shared with Me** – Aktivieren von `shared_with_me`
- **Box for Business** – `enterprise` für box_sub_type auswählen

👉 Siehe Anleitung: [Verbindung über Browser-Anmeldung](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **Schritt 3: Ihren Remote-Speicher verbinden (Google Drive Single Sign-On)**
### Kontoauthentifizierung

- Sie werden zur Google-SSO-Anmeldeseite weitergeleitet.
- Wählen Sie Ihr Google-Konto aus oder klicken Sie auf **"Use another account"**, um sich mit einem anderen Konto anzumelden.

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
Wenn Sie eine andere Anmeldemethode als die oben gezeigte passwortbasierte Anmeldung verwenden, lesen Sie bitte [diese Anleitung](https://support.google.com/accounts/answer/12849458), um den Anmeldevorgang abzuschließen.
:::

### RcloneView-Zugriff autorisieren

- Klicken Sie auf "Continue", um die Verbindung zu Ihrem Google Drive abzuschließen.

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- Sie sollten eine Bestätigungsseite mit der Meldung **"Success!"** sehen.
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **Fertig!** Ihr Google-Drive-Remote ist nun erfolgreich verbunden und einsatzbereit in RcloneView.

