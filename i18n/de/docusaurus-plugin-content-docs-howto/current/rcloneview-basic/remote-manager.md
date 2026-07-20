---
sidebar_position: 2
description: "Erfahren Sie, wie Sie mit RcloneView Cloud- und lokale Remotes hinzufügen, bearbeiten und löschen – einschließlich Google Drive, Dropbox, WebDAV, S3 und mehr."
keywords:
  - rcloneview
  - remote storage management
  - add remote
  - remote manager
  - cloud sync
  - cloud storage
  - open remote
  - delete remote
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# Remote-Speicher in RcloneView hinzufügen und verwalten

Mit RcloneView können Sie sowohl Cloud- als auch lokale Speicherdienste verbinden und verwalten.  
Diese Anleitung erklärt, wie Sie Remote-Speicher mit RcloneView **hinzufügen**, **bearbeiten** und **löschen**.

## Einen neuen Remote hinzufügen
  
Sie können einen neuen Remote-Speicher hinzufügen, indem Sie zunächst den Dialog **New Remote** öffnen und anschließend die Einrichtung abschließen.

### Den Dialog **New Remote** öffnen

Sie können den Einrichtungsdialog **`New Remote`** über eine der folgenden Methoden öffnen:

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### Methode 1: Über das obere Remote-Menü

Klicken Sie auf **`+ New Remote`** im oberen Remote-Tab.

#### Methode 2: Über die Schaltfläche `+` im Explorer-Bereich

Klicken Sie auf das **`+`**-Symbol im Datei-Explorer-Bereich (links oder rechts) und wählen Sie dann **New Remote**.

#### Methode 3: Über den Remote Manager

Klicken Sie auf die Schaltfläche **`Remote Manager`** im Tab **`Remote`** und dann auf die Schaltfläche **`+`** auf einer leeren Remote-Karte.


### Den neuen Remote einrichten

Sobald sich der Dialog **New Remote** öffnet, wählen Sie den Remote-Typ (z. B. Google Drive, Dropbox, S3) aus und füllen Sie die erforderlichen Einstellungen aus.  

Die Felder unterscheiden sich je nach ausgewähltem Anbieter.

Detaillierte, anbieterspezifische Anweisungen finden Sie unter [**Remote Storage Connection Settings**](/howto/category/remote-storage-connection-settings).  

## Bestehende Remotes in RcloneView verwalten

Nachdem Sie Remotes zu RcloneView hinzugefügt haben, können Sie diese auf verschiedene Weise verwalten – etwa öffnen, bearbeiten oder löschen. Im Folgenden wird erklärt, wie Sie jede dieser Aktionen durchführen.

### Remote im Explorer-Bereich öffnen

Sie können die Ordneransicht eines Remotes öffnen, um Dateien zu durchsuchen oder zwischen lokal und Cloud zu übertragen.

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### Methode 1: Auf der Remote-Karte die Schaltfläche `Open` klicken

Klicken Sie auf die Schaltfläche **`Open`** auf einer beliebigen Remote-Karte im rechten Bereich.

#### Methode 2: Remote über die Schaltfläche `+` im Explorer-Bereich öffnen

Wenn Sie auf die Schaltfläche **`+`** im linken oder rechten **Explorer-Bereich** klicken, wird eine Liste aller aktuell konfigurierten Remotes angezeigt.

1. Klicken Sie auf das `+`-Symbol im Explorer-Bereich, in dem Sie den Remote öffnen möchten.
2. Es erscheint eine Dropdown-Liste mit allen verfügbaren Remotes.
3. Wählen Sie den gewünschten Remote (z. B. `MyWebDAV`) aus der Liste aus.
4. Der ausgewählte Remote wird im angeklickten Bereich geöffnet. Falls dort bereits ein anderer Remote geöffnet ist, wird ein **neuer Tab** für den ausgewählten Remote hinzugefügt.

:::note
 Remotes, die als **Favoriten (Aliase)** markiert sind, werden zum schnelleren Zugriff **oben in der Liste** angezeigt.
:::
#### Methode 3: Über die Schaltfläche `Open` des Remote Managers

1. Klicken Sie in der Symbolleiste auf die Schaltfläche **Remote Manager**.
2. Suchen Sie im Dialog des Remote Managers den gewünschten Remote.
3. Klicken Sie auf **`Open`**, um ihn in einem Datei-Browser-Bereich zu öffnen.

:::tip Schnellzugriff über das System-Tray
Sie können einen Remote schnell öffnen, indem Sie auf das RcloneView-Symbol im System-Tray klicken und einen Remote aus der Liste auswählen.  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### Remote-Einstellungen bearbeiten


Sie können die Einstellungen eines bestehenden Remotes über eine der folgenden Methoden ändern:

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### Methode 1: Bearbeiten über den Explorer-Bereich  

Wenn Sie gerade einen Remote im **Explorer-Bereich** durchsuchen, klicken Sie auf das **Zahnradsymbol (⚙️)** oben rechts im aktiven Remote-Bereich.

Dadurch öffnet sich der Dialog **Edit Remote**, in dem Sie die Werte für **Provider** und **Options** des ausgewählten Remotes aktualisieren können.  

 ⚠️ **Hinweis:** Der Remote kann hier nicht umbenannt werden.


#### Methode 2: Bearbeiten über den Remote Manager  

1. Klicken Sie in der Hauptsymbolleiste unter dem Menü **Remote** auf die Schaltfläche **Remote Manager**.  
2. Suchen Sie im Fenster **Remote Manager** den Remote, den Sie bearbeiten möchten.  
3. Klicken Sie auf der Remote-Karte auf die Schaltfläche **Edit**, um den Dialog **Edit Remote** zu öffnen.

Auch mit dieser Methode können Sie **Provider** und **Options** ändern, der **Remote-Name** bleibt jedoch unverändert.


### Einen Remote löschen


Wenn Sie einen konfigurierten Remote nicht mehr benötigen, können Sie ihn über den **Remote Manager** sicher löschen.

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. Klicken Sie im oberen Menü im Tab **Remote** auf die Schaltfläche **Remote Manager** in der Symbolleiste.
2. Suchen Sie im Fenster **Remote Manager** den Remote, den Sie entfernen möchten.
3. Klicken Sie auf der entsprechenden Remote-Karte auf die Schaltfläche **`Delete`**.

Diese Aktion bewirkt Folgendes:
- Der Remote wird dauerhaft aus Ihrer Konfiguration entfernt.
- Falls er im Explorer-Bereich geöffnet ist, wird er automatisch geschlossen.
