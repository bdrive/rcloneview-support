---
slug: mount-google-shared-drives-rcloneview
title: "Google Shared Drives unter Windows & macOS mit RcloneView einbinden -- Voller Zugriff ohne Sync-Client"
authors:
  - tayson
description: Binden Sie jedes Google Shared Drive direkt in Finder oder den Datei-Explorer ein -- mit dem geführten Workflow von RcloneView, ganz ohne die Einschränkungen von Drive for Desktop, bei voller administrativer Kontrolle.
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Shared Drives unter Windows & macOS mit RcloneView einbinden -- Voller Zugriff ohne Sync-Client

> Geben Sie jedem Team das Shared Drive, das es braucht -- ohne einen vollständigen Sync-Client auf den Laptops zu erzwingen.

Google Workspace Shared Drives enthalten oft Ihre Design-Assets, Übergabeordner oder Compliance-Archive, doch Drive for Desktop hält nur einen kleinen Cache vor und tut sich schwer mit Dutzenden von Shared Drives pro Nutzer. RcloneView baut auf der Shared-Drive-Unterstützung von rclone auf, sodass Sie genau das benötigte Drive als echten Laufwerksbuchstaben unter Windows oder als Finder-Volume unter macOS einbinden können -- inklusive Auto-Mount und integriertem VFS-Caching.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum Teams Shared-Drive-Mounting ohne Drive for Desktop brauchen

- Drive for Desktop spiegelt das gesamte Drive, verbraucht SSD-Speicherplatz und lässt Laptops offline zurück, sobald Kontingente erreicht sind.
- Helpdesks haben keine Möglichkeit, Auftragnehmern ein einzelnes Shared Drive zu übergeben, ohne kontoweite Sync-Rechte zu vergeben.
- Ingenieure und Medienteams benötigen vorhersehbare Pfade (X:\Marketing oder /Volumes/Archive) für Automatisierungen, Skripte und Kreativ-Anwendungen.

## Wie RcloneView Shared Drives auf Windows & macOS bringt

RcloneView legt eine GUI über rclone, sodass die Auswahl des Shared Drive, die Auth-Token und die Mount-Flags für Sie übernommen werden.

- Der geführte Remote-Assistent listet jedes Shared Drive auf, auf das Ihr Google-Workspace-Konto zugreifen kann, und speichert es sicher. Die Referenzschritte finden Sie unter [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive).
- Der Mount Manager stellt die in [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) beschriebenen Optionen bereit, sodass Sie sich keine CLI-Syntax merken müssen.
- Auto-Mount befindet sich im Mount-Dialog; „Beim Login starten" ist unter Einstellungen -> Allgemein verfügbar (dokumentiert in [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings)).

## Was Sie vor dem Einbinden benötigen

| Voraussetzung | Details |
| --- | --- |
| RcloneView + Rclone | Installieren Sie das aktuelle RcloneView-Paket (enthält rclone). |
| Dateisystemtreiber | Windows nutzt WinFsp (im Lieferumfang enthalten). macOS benötigt macFUSE; folgen Sie den Anweisungen in RcloneView. Für die Feinabstimmung von Limits siehe [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos). |


## Schritt für Schritt: Ein Google Shared Drive mit RcloneView einbinden

Diese Schritte spiegeln das wider, was Administratoren bereits über die CLI erledigen, jedoch in einem benutzerfreundlichen Assistenten, sodass Helpdesks sie schnell wiederholen können.

### Schritt 1 -- Ihr Google-Workspace-Konto verbinden

1. Öffnen Sie **Remote Manager** -> **+ New Remote**.
2. Wählen Sie **Google Drive** -> **OAuth (Browser)**.
3. Nach Abschluss des Browser-Logins speichert RcloneView den Refresh-Token lokal, sodass das Shared Drive autorisiert bleibt.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### Schritt 2 -- Das gewünschte Shared Drive auswählen

1. Wenn Sie gefragt werden „Configure this as a Shared Drive?", wählen Sie **Yes**.
2. RcloneView listet alle von Google zurückgegebenen Shared Drives auf. Geben Sie die Nummer ein oder suchen Sie, um das richtige Drive zu markieren.
3. Speichern Sie den Remote unter einem aussagekräftigen Namen wie `shared_marketing`, damit Teammitglieder sofort wissen, was er enthält.

### Schritt 3 -- Das Mount-Profil konfigurieren

1. Gehen Sie zu **Mount Manager** (oder klicken Sie auf das Mount-Symbol im Remote Explorer).
2. Wählen Sie den Shared-Drive-Remote aus und den Ordner, den Sie einbinden möchten (Root oder Unterordner).
3. Legen Sie Mount-Ziele und Optionen fest:
   - **Target**: belassen Sie `Auto`, oder weisen Sie mit **Mount to local path** einen festen Laufwerksbuchstaben/Mount-Pfad zu.
   - **Auto mount**: aktivieren, damit RcloneView beim Start erneut mountet (kombinieren Sie dies mit „Beim Login starten" in den Einstellungen).
   - **Advanced options**: legen Sie **Volume name** (optionale Bezeichnung), **Mount type** (`cmount` Standard), **Network drive** (Windows), **Allow other** (Linux) sowie **Read only** fest, falls Sie Schreibvorgänge blockieren möchten.
   - **Cache options**: wählen Sie **Cache mode** (`full` für beste Kompatibilität), legen Sie **Cache max size**, **Cache max age** und **Dir cache time** anhand der im Dialog angezeigten Nanosekundenwerte fest.

### Schritt 4 -- Starten und verifizieren

1. Klicken Sie auf **Save & Mount**. Der Status-Chip wird grün, sobald der Mount aktiv ist.
2. Öffnen Sie im Datei-Explorer oder Finder das neue Laufwerk. Sie sollten die Ordner des Shared Drive sehen; große Verzeichnisse können je nach Ihrer Einstellung für **Dir cache time** einen Moment brauchen, bis der Verzeichnis-Cache gefüllt ist.
3. Nutzen Sie den Mount Manager, um das Laufwerk zu trennen, den gemounteten Ordner zu öffnen oder Einstellungen zu bearbeiten.

## Tipps zu Leistung & Zugriff

- Setzen Sie **Cache mode** auf **Full** und dimensionieren Sie **Cache max size** großzügig für ein möglichst flüssiges Bearbeitungserlebnis.
- Nutzen Sie **Read only** für Finanz-/Rechtslaufwerke, um versehentliches Löschen zu verhindern; erstellen Sie bei Bedarf ein separates beschreibbares Mount.
- Passen Sie **Dir cache time** an die Änderungshäufigkeit an (kürzer für aktive Drives, länger für Archive).
- Verwenden Sie ein festes **Target** oder **Mount to local path** wieder, damit Skripte und Anwendungen immer denselben Mount finden.

## Zugriff automatisieren, teilen und absichern

Mit RcloneView halten Sie Shared-Drive-Mounts über mehrere Rechner hinweg konsistent:

- Aktivieren Sie **Auto mount** bei jedem Mount sowie „Beim Login starten" in den Einstellungen, damit Laufwerke beim Systemstart bereitstehen.
- Nutzen Sie den Job Scheduler, um Shared-Drive-Inhalte nach Feierabend zur externen Aufbewahrung nach S3/Wasabi zu spiegeln.
- Prüfen Sie den Status im Mount Manager (Mounted vs. Unmounted), um die Konnektivität zu verifizieren, bevor Nutzer Office oder Adobe öffnen.

## Fehlerbehebung & FAQ

| Symptom | Wahrscheinliche Ursache | Lösung |
| --- | --- | --- |
| Laufwerk verschwindet nach Ruhezustand | Betriebssystem hat WinFsp/macFUSE ausgehängt | Aktivieren Sie **Auto mount** und „Beim Login starten", damit RcloneView beim Start erneut mountet. |
| Langsames Öffnen von Dateien | Cache zu klein oder auf langsamer Festplatte | Erhöhen Sie **Cache max size** und belassen Sie **Cache mode** auf Full. |
| Berechtigungsfehler unter macOS | FUSE fehlt Full Disk Access | Gewähren Sie RcloneView und macFUSE Full Disk Access und starten Sie den Mount neu (Apple-Menü -> Systemeinstellungen -> Datenschutz & Sicherheit). |
| `too many open files` | macOS ulimit Standardwert 256 | Wenden Sie die Plist-Anpassung in [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) an. |
| Liste der Shared Drives leer | Workspace-Administrator hat die Drive API deaktiviert | Aktivieren Sie die Drive API im Google Admin erneut oder bitten Sie um delegierten Zugriff auf das Shared Drive. |

## Shared-Drive-Mounts ohne Skripte ausliefern

RcloneView macht den Zugriff auf Shared Drives vorhersehbar: keine aufgeblähten Sync-Ordner, kein Scripting und kein Warten auf die IT für jeden neuen Mount. Geben Sie jedem Team noch heute ein sauberes Laufwerk oder Finder-Volume und behalten Sie die Kontrolle über Ihren Google-Workspace-Speicher.


<CloudSupportGrid />
