---
sidebar_position: 2
description: "Fügen Sie in RcloneView einen Crypt-Remote hinzu, um Dateien und Dateinamen zusätzlich zu einem bestehenden Cloud-Remote zu verschlüsseln und dabei den Zugriff innerhalb der App zu behalten."
keywords:
  - rcloneview
  - crypt
  - virtueller Remote
  - verschlüsselter Remote
  - Cloud-Verschlüsselung
  - Remote-Manager
  - Privatsphäre
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## So fügen Sie Crypt mit RcloneView hinzu

Ein **Crypt-Remote** fügt eine Verschlüsselungsebene über einem bestehenden Cloud-Remote (Google Drive, OneDrive usw.) hinzu.  
Die Dateien bleiben weiterhin auf dem ursprünglichen Remote gespeichert, während der Crypt-Remote die Ver- und Entschlüsselung übernimmt.

Warum das nützlich ist:

- Verhindert, dass Anbieter Dateiinhalte einsehen können.
- Kann auch Dateinamen verschlüsseln, um vollständige Privatsphäre zu gewährleisten.
- Die Entschlüsselung erfolgt automatisch innerhalb von RcloneView.
- Ideal für sensible Backups.

---

## Warum ein Crypt-Remote leer aussehen kann

Nutzer erwarten oft, ihre unverschlüsselten Dateien in einem Crypt-Remote zu sehen. Stattdessen gilt:

- Crypt zeigt nur **verschlüsselte** Dateien an.
- Unverschlüsselte Dateien im zugrunde liegenden Remote werden in der Crypt-Ansicht **nicht** angezeigt (das ist normal).

Beispiel:

- `mygoogledrive:Meet Recordings` enthält unverschlüsselte Dateien.
- `MyCryptGoogle:` umschließt denselben Ordner mit Crypt.
- Im Crypt-Remote sieht er leer aus – das ist zu erwarten.

Wenn Sie **über Crypt** hochladen, werden die Dateien verschlüsselt gespeichert, sodass:

- Sie im Crypt-Remote normal (entschlüsselt) angezeigt werden.
- Sie im ursprünglichen Remote mit verschlüsselten Namen angezeigt werden.

---

## Einen Crypt-Remote über „Neuer Remote" erstellen

### Schritt 1 — Öffnen Sie **Neuer Remote** → **Virtuell** → **Crypt**

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### Schritt 2 — Crypt-Details eingeben

Erforderliche Felder:

- **Remote-Name**: Name des Crypt-Remotes (z. B. `MyCryptGoogle`).
- **Remote (zu verschlüsselnder Ordner)**: Klicken Sie auf die Ordnerauswahl, um den bestehenden Remote und den zu schützenden Ordner auszuwählen.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

Überprüfen Sie nach der Auswahl die Einstellungen und klicken Sie auf **Remote hinzufügen**.  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### Schritt 3 — Im Remote-Manager bestätigen

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## Hochladen und Anzeigen von Dateien in einem Crypt-Remote

Wenn Sie über den Crypt-Remote hochladen:

- Dateien werden **beim Hochladen verschlüsselt**.
- Die Crypt-Ansicht zeigt zur Übersicht **entschlüsselte Namen** an.
- Der zugrunde liegende Remote zeigt **verschlüsselte Dateinamen** an.

Vergleichsbeispiel:  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| Ansichtsort                     | Was Sie sehen                                |
| -------------------------------- | --------------------------------------------- |
| `MyCryptGoogle:`                 | Klartext-ähnliche Dateinamen (entschlüsselt) |
| `mygoogledrive:Meet Recordings`  | Verschlüsselte Dateinamen (erwartet)         |

---

## Warum einen Crypt-Remote verwenden

- Cloud-Anbieter können Dateiinhalte nicht lesen.
- Dateinamen können für vollständige Privatsphäre verschlüsselt werden.
- Die automatische Entschlüsselung in RcloneView macht die Nutzung einfach.
- Ideal für sichere Backups, sensible Dokumente und geteilte Laufwerke.
- Kombinierbar mit dem Scheduler für automatisierte verschlüsselte Backups.

---

## Zusammenfassung

| Funktion                        | Beschreibung                                            |
| -------------------------------- | -------------------------------------------------------- |
| **Crypt-Remote**                 | Verschlüsselungsebene über einem bestehenden Remote      |
| **Sichtbarkeit unverschlüsselter Dateien** | Unverschlüsselte Dateien sind in der Crypt-Ansicht verborgen (normal) |
| **Uploads über Crypt**           | Verschlüsselt gespeichert; in der Crypt-Ansicht entschlüsselt sichtbar |
| **Zweck**                        | Sichere Cloud-Backups und Schutz der Privatsphäre         |

