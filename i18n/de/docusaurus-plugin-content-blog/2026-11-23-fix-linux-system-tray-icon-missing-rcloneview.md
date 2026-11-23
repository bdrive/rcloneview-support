---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Fehlendes Systemtray-Symbol unter Linux beheben — Hintergrundsteuerung in RcloneView wiederherstellen"
authors:
  - steve
description: "Das RcloneView-Tray-Symbol fehlt unter Linux? Installieren Sie die AppIndicator-Bibliothek, aktivieren Sie die Tray-Unterstützung Ihres Desktops und erhalten Sie Mounts und Hintergrundjobs zurück."
keywords:
  - rcloneview tray symbol fehlt linux
  - linux systemtray symbol wird nicht angezeigt
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator tray
  - rcloneview linux fehlerbehebung
  - cloud mount tray menü linux
  - hintergrund synchronisation linux gui
  - rcloneview ubuntu tray
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehlendes Systemtray-Symbol unter Linux beheben — Hintergrundsteuerung in RcloneView wiederherstellen

> Ohne Tray-Symbol gibt es keine schnellen Mount-Schalter und keinen einfachen Weg zurück zur minimierten App. So holen Sie es zurück.

Unter Windows und macOS erscheint das RcloneView-Tray-Symbol einfach. Unter Linux hängt es von zwei Dingen ab, die die App nicht steuert: einer AppIndicator-Bibliothek auf dem System und einer Desktop-Umgebung, die Indikator-Symbole anzeigt. Fehlt eines davon, läuft RcloneView zwar weiter, aber das Symbol, das eingebundene Laufwerke auflistet, Mounts umschaltet und das Fenster wieder öffnet, taucht nie auf.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum das Symbol verschwindet

RcloneView ist eine Flutter-Desktop-App. Unter Linux benötigt sie eine laufende X11- oder Wayland-Sitzung, GTK+ 3.0 sowie **libayatana-appindicator3-1** oder **libappindicator3-1** für das Systemtray. Die `.deb`- und `.rpm`-Pakete werden gegen Ubuntu 22.04 LTS gebaut und getestet, daher kann einer Minimalinstallation, einer anderen Distribution oder einem AppImage auf einem abgespeckten System die Indikator-Bibliothek fehlen.

Die zweite Ursache ist der Desktop. Manche Umgebungen, insbesondere Standard-GNOME, zeigen AppIndicator-Symbole erst an, wenn eine Indikator-Erweiterung aktiviert ist. Die Bibliothek kann installiert sein, und das Symbol bleibt trotzdem verborgen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager in RcloneView als Ausweichlösung, wenn das Linux-Tray-Symbol fehlt" class="img-large img-center" />

## Schritt 1: AppIndicator-Bibliothek installieren

Installieren Sie unter Debian, Ubuntu und deren Derivaten `libayatana-appindicator3-1` aus den Repositories Ihrer Distribution (bzw. `libappindicator3-1` auf älteren Versionen). Installieren Sie unter Fedora und RHEL-basierten Systemen das entsprechende ayatana- oder libappindicator-GTK3-Paket, das Ihre Version bereitstellt. Prüfen Sie außerdem, ob GTK+ 3 vorhanden ist.

Beenden Sie RcloneView vollständig und starten Sie es erneut. Das Tray wird beim Start der App eingerichtet, daher wirkt eine Bibliothek, die bei geöffneter App installiert wurde, erst nach einem Neustart.

## Schritt 2: Indikator-Unterstützung im Desktop aktivieren

Aktivieren Sie unter GNOME eine AppIndicator/KStatusNotifierItem-Erweiterung über den Erweiterungsmanager Ihrer Distribution; Ubuntu liefert eine standardmäßig aktivierte mit. KDE Plasma, Xfce, Cinnamon und MATE zeigen Indikator-Symbole über ihr eigenes Panel- oder Benachrichtigungsfeld-Widget an. Stellen Sie sicher, dass dieses Widget im Panel vorhanden und nicht ausgeblendet ist.

Wenn Sie einen Tiling-Fenstermanager verwenden, fügen Sie eine Leiste hinzu, die StatusNotifierItem unterstützt, sonst hat das Symbol keinen Platz zum Erscheinen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Ein Cloud-Remote im RcloneView Explorer unter Linux einbinden" class="img-large img-center" />

## Schritt 3: Einstellungen für minimierten Start und Beenden beim Schließen prüfen

Ohne Tray-Symbol kann **Start minimized** (minimiert starten) den Eindruck erwecken, RcloneView sei nie gestartet, weil die App direkt in ein Tray startet, das Sie nicht sehen. Bis das Symbol funktioniert, öffnen Sie **Settings > General**, deaktivieren Sie Start minimized und aktivieren Sie **Quit on close** (beim Schließen beenden), damit beim Schließen des Fensters kein versteckter Prozess weiterläuft.

Für die Kernarbeit brauchen Sie das Tray nicht. Mit dem **Mount Manager** binden Sie Laufwerke ein und aus, der **Job Manager** führt gespeicherte Jobs aus, und die **Job History** zeigt, was gelaufen ist und ob es abgeschlossen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView bestätigt Hintergrundjobs unter Linux" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) als `.deb`, `.rpm` oder `.AppImage` für x86_64 oder ARM64 herunter.
2. Installieren Sie `libayatana-appindicator3-1` (oder `libappindicator3-1`) und prüfen Sie, ob GTK+ 3 vorhanden ist.
3. Aktivieren Sie die AppIndicator-Unterstützung in Ihrer Desktop-Umgebung und starten Sie RcloneView anschließend vollständig neu.
4. Aktivieren Sie **Start minimized** wieder, sobald das Symbol erscheint und Sie Ihre Mounts über das Tray erreichen.

Anders als reine Mount-Tools bietet RcloneView auch mit der FREE License Synchronisation und Ordnervergleich, und sobald das Tray-Symbol zurück ist, ist all das nur einen Klick entfernt.

---

**Verwandte Anleitungen:**

- [Systemtray und Hintergrund-Synchronisation — Cloud-Jobs in RcloneView am Laufen halten](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView unter Ubuntu und Debian Linux installieren — Vollständige Einrichtungsanleitung](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Rclone-Mount- und FUSE-Fehler in RcloneView beheben](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
