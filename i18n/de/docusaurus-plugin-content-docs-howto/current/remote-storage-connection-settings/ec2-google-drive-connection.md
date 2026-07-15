---
sidebar_position: 11
description: "Erfahren Sie, wie Sie einen Google Drive Remote zu einem externen Rclone hinzufügen, das auf AWS EC2 läuft, ohne einen Webbrowser zu verwenden – mithilfe lokal generierter OAuth-Token."
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# Google Drive zu externem Rclone auf AWS EC2 hinzufügen (ohne Webbrowser)

Diese Anleitung erklärt, wie Sie einen **Google Drive Remote** zu einer **externen Rclone-Instanz** hinzufügen, die auf einem System ohne Webbrowser läuft, wie z. B. einem **AWS EC2 Ubuntu-Server**.

In solchen Umgebungen ist es nicht möglich, den standardmäßigen OAuth-Login-Ablauf über den Browser abzuschließen. Stattdessen können Sie eine lokale RcloneView-Installation verwenden, um das erforderliche **OAuth-Token** zu erhalten, und dieses dann auf dem externen Rclone auf EC2 wiederverwenden.

:::info Rclone-Daemon auf EC2 ausführen
Eine Anleitung zur Installation und Ausführung von Rclone auf einer EC2-Instanz finden Sie hier:

siehe: 👉 [Wie man die Rclone Engine auf AWS EC2 ausführt](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

Der Ablauf: Generieren Sie ein Google Drive OAuth-Token auf einem Rechner mit Browser, und fügen Sie dieses Token dann über RcloneView in das auf EC2 laufende externe Rclone ein.

---
## ✅ Schritt 1: Google Drive-Token generieren (eine Methode wählen)

**Methode A: `rclone authorize "drive"` (am schnellsten)**

1. Führen Sie auf einem Rechner mit Browser und derselben rclone-Version Folgendes aus:
   ```bash
   rclone authorize "drive"
   ```
2. Schließen Sie die Google-Anmeldung/Einwilligung im Browser ab.
3. Kopieren Sie den ausgegebenen JSON-Token-Block (den gesamten JSON-Inhalt behalten). Diesen fügen Sie in Schritt 3 in EC2 ein.

**Methode B: Den eingebetteten Remote von RcloneView verwenden und dessen Token kopieren**

1. Fügen Sie auf Ihrem lokalen PC Google Drive über das eingebettete Rclone hinzu (normaler Browser-OAuth).  
   👉 [Kurzanleitung: Google Drive Remote hinzufügen](../#step-2-adding-remote-storage-google-drive-example)
2. Öffnen Sie den **Remote-Manager**, bearbeiten Sie den Google Drive Remote, klicken Sie auf **Erweiterte Optionen anzeigen** und kopieren Sie das Feld **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 Mehr zum Bearbeiten von Remotes: [Remote-Einstellungen bearbeiten](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ Schritt 2: Verbindung zum externen Rclone (EC2) herstellen

Öffnen Sie ein **`neues Fenster`** oder verwenden Sie Ihre aktuelle Sitzung in RcloneView, um eine Verbindung zu Ihrem auf EC2 gehosteten Rclone herzustellen:

- Öffnen Sie `Einstellungen` -> **`Verbindungs-Manager`**, um entweder eine neue Verbindung zu Ihrem auf EC2 gehosteten Rclone zu erstellen oder sich mit einer bereits konfigurierten Verbindung zu verbinden.

👉 Mehr erfahren: [Externes Rclone verbinden](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Mehr erfahren: [Funktion „Neues Fenster"](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ Schritt 3: Google Drive Remote zum externen Rclone hinzufügen (Token einfügen)

1. Gehen Sie im mit EC2 verbundenen Fenster zum Menü `Remote` und wählen Sie **`+ Neuer Remote`**.
2. Wählen Sie **Google Drive** als Anbieter.
3. Geben Sie den **`Remote-Namen`** ein und klicken Sie auf **`Erweiterte Optionen anzeigen`**.
4. Fügen Sie das zuvor kopierte **OAuth-Token** in das Feld **`Token`** ein.
5. Klicken Sie auf die Schaltfläche **`Remote hinzufügen`**, um die Einrichtung wie gewohnt abzuschließen.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **Dieses Fehler-Popup können Sie ignorieren**
**Wenn RcloneView eine Fehlermeldung wie die unten stehende anzeigt, können Sie diese bedenkenlos ignorieren.**
In den meisten Fällen wird die Token-Konfiguration trotz dieser Meldung erfolgreich abgeschlossen.
Nach dem Schließen des Dialogs sollten Sie normal auf Google Drive zugreifen können.  
Dies ist ein bekanntes UI-Problem, und wir werden die Benutzererfahrung im nächsten Release verbessern.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Sobald die Konfiguration abgeschlossen ist, kann Ihr EC2-basiertes Rclone auch ohne Browser-Unterstützung auf Google Drive zugreifen. Sie können Dateien wie gewohnt über RcloneView verwalten, synchronisieren und übertragen.

---

## 🔗 Verwandte Anleitungen

- [Wie man die Rclone Engine auf AWS EC2 ausführt](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Google Drive Remote hinzufügen](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Remote-Einstellungen bearbeiten](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [Externes Rclone verbinden](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Nutzung mehrerer Fenster](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
