---
sidebar_position: 1
description: Erstellen Sie Alias-Remotes in RcloneView, um tiefe Cloud-Ordner als virtuelle Remotes für schnelleren Zugriff und übersichtlichere Organisation zu speichern.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# Alias

## So fügen Sie mit RcloneView einen Alias hinzu

Ein **Alias-Remote** ist ein virtueller Remote, der einen bestimmten Ordner innerhalb eines vorhandenen Cloud-Remotes speichert. Anstatt sich jedes Mal durch einen tiefen Ordnerbaum zu klicken, öffnen Sie mit einem Klick auf den Alias sofort den Zielordner.

Verwenden Sie Alias, wenn Sie:

- häufig tiefe Projektordner besuchen.
- komplexe Ordnerstrukturen verwalten und schnelle Einstiegspunkte benötigen.
- viele Remotes verwalten und ein übersichtlicheres Layout möchten.
- bestimmte Ordner in Sync / Compare / Jobs schneller auswählen möchten.

**Zusammenfassung:** Alias = Lesezeichen für Cloud-Ordner.

---

### Alias-Remote hinzufügen (über New Remote)

#### Schritt 1 — Öffnen Sie **New Remote** und wählen Sie **Virtual > Alias**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### Schritt 2 — Alias-Informationen eingeben

1. **Remote name**: Geben Sie den Alias-Namen ein (z. B. `MyAlias`).
2. **Remote (Zielordner)**: Klicken Sie auf das Ordnersymbol und wählen Sie den vorhandenen Remote und Ordner aus, den Sie möchten.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   Bestätigen Sie nach der Auswahl die Alias-Details:  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. Klicken Sie auf **Add Remote**, um den Alias zu erstellen.

#### Schritt 3 — Den Alias im Remote Manager überprüfen

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

Öffnen Sie ihn im Datei-Browser, um zu bestätigen, dass er auf den exakten Zielordner verweist:  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Alias schneller aus dem Explorer erstellen

Sie können schnell einen Alias-Remote erstellen, um häufig verwendete Remote-Ordner für schnelleren und einfacheren Zugriff zu speichern.

1. Klicken Sie im **Explorer**-Bereich auf das **`☆` Alias**-Symbol auf der rechten Seite der Pfadleiste.
2. Geben Sie einen Namen für Ihren neuen **Alias** ein.
3. Der Remote wird sofort hinzugefügt und als **Alias Remote** geöffnet, einsatzbereit.
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### Den hinzugefügten Alias-Remote in RcloneView überprüfen

Der hinzugefügte Alias-Remote kann genauso überprüft werden wie jeder andere Cloud-Remote in RcloneView.

1. Klicken Sie im oberen Menü unter dem Tab **`Remote`** auf **`Remote Manager`**.
2. Bestätigen Sie, dass Ihr neu erstellter **Alias Remote** im Fenster **`Remote Manager`** angezeigt wird.
3. Alternativ öffnen Sie mit der Schaltfläche **`☆`** einen neuen Tab im Explorer-Bereich und überprüfen Sie, ob der Alias-Remote zum Durchsuchen verfügbar ist.

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### Warum Alias-Remotes verwenden

- Zeit sparen: mit einem Klick in tiefe Ordner springen.
- Den Remote Manager übersichtlich halten, indem wichtige Pfade als separate Einträge angezeigt werden.
- Ideal für komplexe Team-/Shared-Drive-Strukturen.
- Vollständig nutzbar in Sync- / Compare- / Job-Workflows wie jeder andere Remote.

---

### Zusammenfassung

| Feature                    | Beschreibung                                  |
| -------------------------- | ---------------------------------------------- |
| **Alias via New Remote**   | Erstellt einen dedizierten Remote für einen tiefen Ordner |
| **Alias via Explorer**     | Fügt den aktuellen Ordner sofort als Alias hinzu |
| **Remote Manager Anzeige** | Wird wie jeder andere Remote aufgelistet       |
| **Anwendungsfälle**        | Schneller Zugriff, Organisation, Automatisierung |

Alias ist einfach, aber leistungsstark – vereinfachen Sie komplexe Baumstrukturen, springen Sie direkt zum Wesentlichen und beschleunigen Sie jede Cloud-Aufgabe.
