---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Fehlendes Taskleisten-Symbol unter Linux beheben — Hintergrund-Mounts und Jobs mit RcloneView wiederherstellen"
authors:
  - alex
description: "Das RcloneView-Tray-Symbol wird unter Linux nicht angezeigt? Erfahren Sie, wie AppIndicator-Bibliotheken, Desktop-Einstellungen und RcloneView-Optionen Tray-Mounts und Hintergrund-Jobs wiederherstellen."
keywords:
  - rcloneview tray-symbol fehlt linux
  - linux systemtray symbol wird nicht angezeigt
  - libayatana-appindicator3-1
  - appindicator tray-symbol gnome
  - rcloneview linux fehlerbehebung
  - rclone gui systemtray linux
  - cloud-synchronisation im hintergrund linux
  - mount manager systemtray
  - rcloneview minimiert starten
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehlendes Taskleisten-Symbol unter Linux beheben — Hintergrund-Mounts und Jobs mit RcloneView wiederherstellen

> Wenn RcloneView unter Linux läuft, das Tray-Symbol aber nie erscheint, liegt die Ursache fast immer an einer fehlenden AppIndicator-Bibliothek oder an einem Desktop, der Tray-Symbole ausblendet.

Das System-Tray-Symbol von RcloneView ist mehr als Dekoration. Es listet Ihre eingebundenen Laufwerke auf, schaltet zwischen Einbinden (mount) und Aushängen um, startet neue Mounts und hält die App erreichbar, während Jobs im Hintergrund laufen. Fehlt das Symbol unter Linux — häufig bei frischen Ubuntu-, Fedora- oder minimalen Desktop-Installationen —, lassen Nutzer entweder den ganzen Tag das Hauptfenster offen oder verlieren die App nach dem Schließen aus den Augen. So diagnostizieren und beheben Sie das Problem.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum das Tray-Symbol verschwindet

Unter Linux integriert sich RcloneView über D-Bus und AppIndicator in den Desktop. Dafür ist eine von zwei Bibliotheken erforderlich: **libayatana-appindicator3-1** oder **libappindicator3-1**. Ist keine davon installiert, öffnet sich die App zwar trotzdem — dafür benötigt sie GTK+ 3.0 und eine X11- oder Wayland-Sitzung —, aber das Tray-Symbol hat nichts, wo es sich registrieren kann.

Die zweite Ursache ist die Desktop-Umgebung. Manche Desktops, insbesondere GNOME, zeigen AppIndicator-Symbole standardmäßig nicht an und benötigen eine aktivierte AppIndicator-Erweiterung. KDE Plasma, Xfce, Cinnamon und MATE zeigen sie in der Regel ohne zusätzliche Schritte an.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView Mount Manager, wenn das Linux-Tray-Symbol nicht verfügbar ist" class="img-large img-center" />

## Schritt-für-Schritt-Lösung

1. **Installieren Sie eine AppIndicator-Bibliothek.** Installieren Sie mit dem Paketmanager Ihrer Distribution libayatana-appindicator3-1 (oder libappindicator3-1 bei Distributionen, die sie noch ausliefern). Die Paketnamen unterscheiden sich je nach Distribution leicht, suchen Sie daher in Ihrem Paketmanager nach „appindicator".
2. **Aktivieren Sie die Tray-Unterstützung in Ihrem Desktop.** Schalten Sie unter GNOME eine AppIndicator/KStatusNotifierItem-Erweiterung ein, melden Sie sich dann ab und wieder an.
3. **Starten Sie RcloneView vollständig neu.** Beenden Sie die App — schließen Sie nicht nur das Fenster — und starten Sie sie erneut, damit sie sich beim Start im Tray registriert.

Erscheint das Symbol weiterhin nicht, öffnen Sie den Tab **Log** in der unteren Info View, um Fehler zu prüfen, oder aktivieren Sie unter Settings > Embedded Rclone das rclone-Logging auf DEBUG-Ebene, um Details für den Support zu sammeln.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Einbinden eines Cloud-Remotes aus dem RcloneView-Explorer unter Linux" class="img-large img-center" />

## Einstellungen prüfen, die vom Tray abhängen

Zwei General-Einstellungen hängen mit dem Tray zusammen. **Start minimized** startet RcloneView direkt in den Tray — ohne funktionierendes Tray-Symbol kann es so aussehen, als würde die App gar nicht starten. **Quit on close** legt fest, ob die Schließen-Schaltfläche die App beendet oder sie im Hintergrund weiterlaufen lässt. Bis der Tray repariert ist, deaktivieren Sie Start minimized und behalten Sie Quit on close im Blick, damit laufende Jobs nicht versehentlich gestoppt werden.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History bestätigt abgeschlossene Hintergrund-Jobs" class="img-large img-center" />

## Prüfen, ob Hintergrundarbeit läuft

Sobald das Symbol wieder da ist, schließen Sie das Hauptfenster und prüfen Sie, ob das Tray-Menü Ihre Mounts weiterhin auflistet. Jobs laufen im Hintergrund weiter, und nach Abschluss jedes Jobs erscheint eine Benachrichtigung. Anschließend zeigt **Job History**, ob jeder Lauf abgeschlossen wurde, fehlgeschlagen ist oder abgebrochen wurde. RcloneView bindet über 90 Anbieter ein UND synchronisiert sie aus einem Fenster, unter Windows, macOS und Linux — und der Tray hält dieses Fenster aus dem Weg.

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) als .deb, .rpm oder .AppImage herunter.
2. Installieren Sie libayatana-appindicator3-1 oder libappindicator3-1 mit dem Paketmanager Ihrer Distribution.
3. Aktivieren Sie die AppIndicator-Unterstützung in Ihrer Desktop-Umgebung, falls diese Tray-Symbole ausblendet.
4. Starten Sie RcloneView vollständig neu und prüfen Sie, ob Ihre Mounts im Tray-Menü erscheinen.

Mit funktionierendem Tray sind Ihre Cloud-Laufwerke und Sync-Jobs nur einen Klick entfernt, ohne Ihren Bildschirm zu belegen.

---

**Verwandte Anleitungen:**

- [System-Tray und Hintergrund-Synchronisation in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView unter Ubuntu und Debian Linux installieren](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Rclone-Mount-FUSE-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
