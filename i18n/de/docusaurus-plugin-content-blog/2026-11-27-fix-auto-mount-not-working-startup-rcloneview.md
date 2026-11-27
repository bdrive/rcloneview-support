---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "Auto-Mount beim Start funktioniert nicht — Cloud-Laufwerke mit RcloneView wiederherstellen"
authors:
  - steve
description: "Cloud-Laufwerk nach dem Neustart verschwunden? Beheben Sie das Auto-Mount von RcloneView beim Start: Lizenz, Launch at login, Laufwerksbuchstaben, FUSE unter Linux und macOS-Berechtigungen prüfen."
keywords:
  - auto mount funktioniert nicht
  - cloud-laufwerk wird beim start nicht eingebunden
  - rcloneview auto mount
  - cloud-speicher beim booten einbinden
  - eingebundenes laufwerk nach neustart verschwunden
  - rclone mount startproblem beheben
  - cloud-laufwerk bei anmeldung starten
  - fuse mount fehler linux
  - laufwerksbuchstaben konflikt mount
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Auto-Mount beim Start funktioniert nicht — Cloud-Laufwerke mit RcloneView wiederherstellen

> Wenn Ihr Cloud-Laufwerk nach jedem Neustart fehlt, bringt eine kurze Checkliste es meist dauerhaft zurück.

Sie haben einen Mount für Google Drive oder einen S3-Bucket eingerichtet, er hat wie erwartet funktioniert, und nach einem Neustart sind Laufwerksbuchstabe oder Mount-Ordner verschwunden. Auto-Mount hängt davon ab, dass mehrere Einstellungen zusammenspielen: Die App muss starten, der Mount muss für Auto-Mount markiert sein, und das Betriebssystem muss es zulassen. Diese Anleitung geht jede Ursache in RcloneView durch.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Lizenz und Auto-Mount-Einstellung prüfen

**Auto Mount on Startup** ist eine Funktion der PLUS-Lizenz. Mit der FREE-Lizenz funktionieren Einbinden (mount) und Aushängen vollständig, aber jeder Mount muss nach dem Start manuell gestartet werden. Die Fußzeile des Hauptfensters zeigt, welche Lizenz aktiv ist.

Ist PLUS aktiv, öffnen Sie den **Mount Manager** über den Remote-Tab und prüfen Sie, ob beim Mount **Auto mount** aktiviert ist. Beachten Sie, dass Edit deaktiviert ist, solange ein Mount aktiv ist. Hängen Sie ihn also zuerst aus, bearbeiten Sie die Einstellungen und wählen Sie **Save and mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Auto-Mount im RcloneView Mount Manager aktivieren" class="img-large img-center" />

## Sicherstellen, dass RcloneView tatsächlich startet

Auto-Mount läuft beim Start von RcloneView, daher muss die App selbst bei der Anmeldung starten. Aktivieren Sie unter **Settings > General** die Option **Launch at login**. Schalten Sie **Start minimized** ein, wenn die App direkt im System Tray starten soll. Das Tray-Menü listet dann Ihre eingebundenen Laufwerke auf und lässt Sie jedes einzeln umschalten.

Prüfen Sie auch **Quit on close**. Ist die Option aktiv, beendet das Schließen des Fensters die App und hängt Ihre Laufwerke aus. Schalten Sie sie aus, damit RcloneView und seine Mounts im Hintergrund weiterlaufen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einen Cloud-Ordner aus dem RcloneView-Explorer einbinden" class="img-large img-center" />

## Plattformspezifische Hindernisse beheben

**Windows:** Verwendet der Mount einen festen Laufwerksbuchstaben, den ein USB-Stick oder eine Netzwerkfreigabe zuerst belegt hat, kann der Mount nicht angebunden werden. Setzen Sie **Target** auf Auto oder wählen Sie einen Buchstaben, den nichts anderes nutzt.

**Linux:** Das Einbinden erfordert FUSE (fuse3 empfohlen). Mounts verwenden standardmäßig nfsmount, und die App benötigt GTK+3 sowie eine laufende X11- oder Wayland-Desktop-Sitzung. RcloneView ist eine GUI-Anwendung und kann Mounts nicht als Headless-systemd-Dienst starten.

**macOS:** Liegt der Mount-Punkt in Desktop, Documents oder Downloads, gewähren Sie RcloneView Zugriff unter **Privacy & Security > Files & Folders** oder **Full Disk Access** und starten Sie die App neu.

## Logs lesen, wenn nichts anderes hilft

Abgelaufene OAuth-Token und Netzwerkverzögerungen beim Booten können einen Mount ebenfalls verhindern. Aktivieren Sie **rclone logging** unter Settings > Embedded Rclone, setzen Sie das Log-Level auf DEBUG, starten Sie das eingebettete rclone neu und booten Sie den Rechner neu. Das Log zeigt den genauen Fehler. Ein Authentifizierungsfehler bedeutet, dass Sie das Remote bearbeiten und neu verbinden sollten; ein Netzwerkfehler verschwindet meist, sobald Sie erneut aus dem Tray einbinden.

<img src="/support/images/en/blog/new-remote.png" alt="Ein Cloud-Remote in RcloneView nach einem Authentifizierungsfehler neu verbinden" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Bestätigen Sie eine PLUS-Lizenz und aktivieren Sie **Auto mount** für jeden Mount im Mount Manager.
3. Schalten Sie **Launch at login** ein und **Quit on close** aus unter Settings > General.
4. Beheben Sie Probleme mit Laufwerksbuchstaben, FUSE oder macOS-Berechtigungen und starten Sie zum Testen neu.

Sobald die Checkliste erfüllt ist, stehen Ihre Cloud-Laufwerke jedes Mal bereit, wenn Sie sich an die Arbeit setzen.

---

**Verwandte Anleitungen:**

- [Cloud-Speicher beim Start automatisch einbinden mit RcloneView](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Laufwerksbuchstaben-Konflikte beim Mount unter Windows mit RcloneView beheben](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [rclone-Mount-FUSE-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
