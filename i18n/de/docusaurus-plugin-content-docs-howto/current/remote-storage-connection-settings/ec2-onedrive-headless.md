---
sidebar_position: 12
description: "Installieren und Ausführen von Rclone auf AWS EC2, Verbindung von RcloneView auf Ihrem PC aus herstellen und einen OneDrive-Remote hinzufügen, ohne einen Browser auf dem Server zu verwenden."
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# OneDrive zu externem Rclone auf AWS EC2 hinzufügen (Headless)

:::info Zugehörige Voraussetzung
Wenn Sie eine vollständige EC2-Einrichtungsanleitung benötigen, siehe 👉 [Rclone-Engine auf AWS EC2 ausführen](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).
:::

---

Der Ablauf: Erzeugen Sie ein OneDrive-OAuth-Token auf einem Rechner mit Browser und fügen Sie dieses Token anschließend über RcloneView in das auf EC2 laufende externe Rclone ein.

---

## Schritt 1. OneDrive-Token erzeugen (eine Methode wählen)

**Methode A: `rclone authorize "onedrive"` (am schnellsten)**

1. Führen Sie auf einem Rechner mit Browser und derselben Rclone-Version Folgendes aus:
   ```bash
   rclone authorize "onedrive"
   ```  
2. Schließen Sie die Microsoft-Anmeldung/Zustimmung im Browser ab.  
3. Kopieren Sie den ausgegebenen JSON-Token-Block (das gesamte JSON aufbewahren). Diesen fügen Sie in Schritt 3 in EC2 ein.

**Methode B: Den eingebetteten Remote von RcloneView verwenden und dessen Token kopieren**

1. Fügen Sie auf Ihrem lokalen PC OneDrive über das eingebettete Rclone hinzu (normale Browser-OAuth).  
2. Öffnen Sie den **Remote-Manager**, bearbeiten Sie den OneDrive-Remote, klicken Sie auf **Erweiterte Optionen anzeigen** und kopieren Sie das Feld **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 Mehr zum Bearbeiten von Remotes: [Remote-Einstellungen bearbeiten](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## Schritt 2. Mit dem externen Rclone (EC2) verbinden

Öffnen Sie ein **neues Fenster** oder verwenden Sie Ihre aktuelle Sitzung in RcloneView, um eine Verbindung zu Ihrem auf EC2 gehosteten Rclone herzustellen:

- Öffnen Sie `Einstellungen` -> **`Verbindungsmanager`**, um entweder eine neue Verbindung zu Ihrem auf EC2 gehosteten Rclone zu erstellen oder eine Verbindung zu einer bereits konfigurierten herzustellen.

👉 Mehr erfahren: [Externes Rclone verbinden](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Mehr erfahren: [Neues-Fenster-Funktion](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## Schritt 3. OneDrive-Remote zum externen Rclone hinzufügen (Token einfügen)

1. Gehen Sie im mit EC2 verbundenen Fenster zum Menü `Remote` und wählen Sie **`+ Neuer Remote`**.
2. Wählen Sie **OneDrive** als Anbieter.
3. Geben Sie den **Remote-Namen** ein und klicken Sie auf **Erweiterte Optionen anzeigen**.
4. Fügen Sie das zuvor kopierte **OAuth-Token** in das Feld **Token** ein.
5. Klicken Sie auf **Remote hinzufügen**, um die Einrichtung abzuschließen.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **Diese Fehlermeldung ignorieren**
Wenn RcloneView eine Fehlermeldung wie die unten stehende anzeigt, können Sie diese bedenkenlos ignorieren.
In den meisten Fällen wird die Token-Konfiguration trotz dieser Meldung erfolgreich abgeschlossen.
Nach dem Schließen des Dialogs sollten Sie normal auf OneDrive zugreifen können.  
Dies ist ein bekanntes UI-Problem, und wir werden die Benutzererfahrung im nächsten Release verbessern.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Sobald die Konfiguration abgeschlossen ist, kann Ihr EC2-basiertes Rclone auch ohne Browser-Unterstützung auf OneDrive zugreifen. Sie können Dateien wie gewohnt mit RcloneView verwalten, synchronisieren und übertragen.

---

## Verwandte Links

- [Rclone-Engine auf AWS EC2 ausführen](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [Verbindungsmanager](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [Verwendung mehrerer Fenster](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [Synchronisationsaufgaben erstellen](/howto/rcloneview-basic/create-sync-jobs)  
- [Aufgaben ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)  
- [Aufgabenplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

