---
slug: plex-buffering-fix-rcloneview
title: "Plex-Pufferung schnell beheben mit RcloneView — Mounts, VFS-Cache und Netzwerklimits optimieren"
authors:
  - tayson
description: Beenden Sie Plex-Pufferung beim Streamen von Google Drive, Dropbox, S3 oder anderen Clouds, indem Sie den Mount-Manager, die VFS-Cache-Voreinstellungen und die Performance-Diagnose von RcloneView nutzen, statt CLI-Flags hinterherzujagen.
keywords:
  - rcloneview
  - plex buffering fix
  - plex vfs cache
  - rclone plex mount
  - plex stuttering cloud
  - google drive plex
  - plex 4k streaming
tags:
  - plex
  - performance
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Plex-Pufferung schnell beheben mit RcloneView — Mounts, VFS-Cache und Netzwerklimits optimieren

> Plex läuft nur so flüssig wie der Speicher dahinter. Mit RcloneView können Sie jede Einstellung sehen, anpassen und überwachen, die für das pausenlose Streamen von 4K-Bibliotheken aus Google Drive, Dropbox, Wasabi oder S3 nötig ist.

Plex-Pufferung hat mehrere Ursachen — langsame Datenträger, unterdimensionierter VFS-Cache, aggressive Scanner oder Google-Drive-Drosselung. RcloneView legt eine GUI über rclone, sodass Sie Clouds einbinden, Cache-Modi einstellen und den Durchsatz in Echtzeit beobachten können, ohne sich Flags merken zu müssen. Dieser Artikel bietet Plex-Administratoren eine Checkliste, um Ruckler zu beseitigen und ungestörte Serienabende zurückzugewinnen.

<!-- truncate -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Schnelltriage: Liegt es an Plex, am Netzwerk oder am Mount?

| Symptom | Wahrscheinliche Ursache | Was in RcloneView zu prüfen ist |
| --- | --- | --- |
| Pufferung nach 30–60 Sekunden | Cache hält nicht die gesamte Datei oder Cache liegt auf einem langsamen Datenträger | Mount-Details → Cache-Modus (**Full**) und ausreichend großes **Cache max size** auf SSD |
| Pufferung beim Überspringen von Kapiteln | Zwischengespeicherte Daten laufen zu schnell ab | Erweiterte Mount-Optionen → längeres Zeitfenster bei **Cache max age** und **Dir cache time** (5–15 Minuten) |
| Streamt lokal einwandfrei, stockt aber remote | Netzwerk-/ISP-Engpass | Bestätigen Sie, dass der Mount auf schnellem Speicher liegt; LAN/ISP prüfen. Mit dem Mount-Manager verifizieren, dass er eingebunden bleibt. |
| SD spielt ab, 4K schlägt fehl | Cache-Größe zu klein für große Dateien oder Mount-Pfad geändert | Erweiterte Optionen → **Cache max size** erhöhen und ein festes **Target** oder **Mount to local path** für Plex beibehalten |
| Bibliotheks-Scans lassen Plex einfrieren | Wiederholte Verzeichnisabfragen | Erweiterte Optionen → **Dir cache time** (z. B. 5–15 Minuten); Scans in verkehrsarme Zeiten legen |

Wenn der Mount der Engpass ist, liegt die Lösung in RcloneView.

## Schritt 1 — Clouds mit den richtigen Standardwerten einbinden

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

1. Fügen Sie Ihren Cloud-Remote (Google Drive, Dropbox, Wasabi, S3 usw.) unter **Explorer → + New Remote** hinzu. Brauchen Sie eine Auffrischung? Siehe [/support/howto/remote-storage-connection-settings/add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
2. Öffnen Sie **Mount Manager → Add Mount**.
3. Wählen Sie den Remote-Ordner mit den Medien (`gdrive-media:Movies`) und legen Sie einen für Plex sichtbaren Mount-Pfad fest (Laufwerksbuchstabe unter Windows oder `/Volumes/CloudMovies` unter macOS/Linux).
4. Belassen Sie **Target** auf `Auto`, außer Plex benötigt einen festen Laufwerksbuchstaben. Um ihn festzulegen, wählen Sie einen Buchstaben (Windows) oder aktivieren Sie **Mount to local path** und verweisen auf einen dauerhaften Ordner (Linux/macOS).
5. Belassen Sie unter **Advanced** den **Mount type** für Windows auf `cmount`; verwenden Sie `nfsmount` nur, wenn Sie unter Linux/macOS bereits auf NFS setzen. Aktivieren Sie **Network drive** unter Windows, damit der Plex-Dienst den Mount sieht. Nutzen Sie **Allow other** unter Linux, wenn Plex als anderer Benutzer läuft. Lassen Sie **Read only** deaktiviert, falls Sie Dateien oder Untertitel über den Mount hinzufügen.
6. Wählen Sie unter **Cache mode** die Option **Full** (am besten für Plex). Stellen Sie **Cache max size**, **Cache max age** und **Dir cache time** im selben Dialog ein, um große Medien im Cache zu halten.
7. Aktivieren Sie **Auto start on launch**, damit Mounts nach einem Serverneustart automatisch zurückkehren.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### Erweiterte Mount-Optionen für Plex-Nutzer erklärt

Diese Feldnamen entsprechen dem Mount-Dialog von RcloneView. Die Standardwerte folgen der Anleitung [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive); die Spalte „Plex-freundlich“ erklärt, wie Sie sie fürs Streaming einstellen.

| RcloneView-Feld | Was es steuert | Plex-freundliche Einstellung |
| --- | --- | --- |
| Volume name | Vom Betriebssystem/Dateimanager angezeigte Bezeichnung. | Optional; verwenden Sie einen klaren Namen wie `Plex Cloud`. |
| Mount type | Backend-Engine (`cmount` Standard unter Windows, `nfsmount` meist Linux/macOS). | Bei `cmount` bleiben, außer Sie nutzen bereits NFS; ein Wechsel verbessert die Pufferung selten. |
| Target | Laufwerksbuchstabe oder automatisch zugewiesenes Mount-Ziel. | `Auto` ist in Ordnung; wählen Sie einen festen Buchstaben/Pfad, falls Plex als Dienst läuft. |
| Mount to local path | Benutzerdefinierter Mount-Ort. | Verwenden, wenn Plex einen stabilen Unix-Pfad erwartet (z. B. `/mnt/plex-media`). |
| Network drive | Markiert den Mount unter Windows als Netzlaufwerk. | Aktivieren, damit Plex-Dienstkonten den Mount sehen können. |
| Read only | Blockiert Schreibzugriffe auf den Remote. | Deaktiviert lassen, um Untertitel-Downloads oder Metadaten-Änderungen zu erlauben; nur bei reinen Wiedergabe-Mounts aktivieren. |
| Allow other | Erlaubt anderen OS-Benutzern den Zugriff auf den Mount (Linux). | Aktivieren, falls Plex unter einem anderen Benutzer als Ihrem Login läuft. |
| Cache mode | VFS-Cache-Verhalten: `off`, `minimal`, `writes`, `full` (Standard `writes`). | Für Plex **Full** verwenden, damit ganze Dateien im Cache bleiben und das Suchen schneller wird. |
| Cache max size | Maximale VFS-Cache-Größe (Bytes). `-1` = kein Limit. | Eine explizite Größe festlegen (z. B. `75000000000` für ca. 75 GB), um SSD-Speicher zu schützen. |
| Cache max age | Wie lange zwischengespeicherte Daten gültig bleiben (Nanosekunden). | 3600000000000 = 1 Std., 21600000000000 = 6 Std. Mit 6–12 Std. beginnen, damit 4K-Dateien warm bleiben. |
| Dir cache time | Wie lange Verzeichnislisten zwischengespeichert bleiben (Nanosekunden). | 300000000000 = 5 Min., 900000000000 = 15 Min. An die Scan-Häufigkeit anpassen (typisch 5–15 Min.). |

## Schritt 2 — VFS-Cache-Größe und -Aktualität für Plex optimieren

RcloneView bietet Cache-Regler, die die Plex-Wiedergabe direkt beeinflussen. Geben Sie Zeitwerte in **Nanosekunden** ein.

- **Cache mode**: Verwenden Sie **Full** für Plex, damit die gesamte Datei für flüssiges Springen im Cache bleibt. Wenn Sie zusätzlich Untertitel/Metadaten über den Mount schreiben, funktioniert Full weiterhin; lassen Sie **Read only** deaktiviert, damit Schreibvorgänge erlaubt sind.
- **Cache max size**: Reservieren Sie genug SSD-Speicher für gleichzeitige Streams (z. B. ca. 75–100 GB pro aktivem 4K-Nutzer). Beispiel: `107374182400` ≈ 100 GB.
- **Cache max age**: Halten Sie zwischengespeicherte Medien stundenlang warm, damit die Rückkehr zu einer Episode kein erneutes Abrufen erfordert. Beispiel: `21600000000000` = 6 Stunden; `43200000000000` = 12 Stunden.
- **Dir cache time**: Reduzieren Sie den Verzeichnis-Wechsel während Plex-Scans. Beispiel: `300000000000` = 5 Minuten; `900000000000` = 15 Minuten. Nach dem Hinzufügen von Inhalten manuell aktualisieren.
- RcloneView zeigt `VFS read ahead`, `buffer-size` oder `--tpslimit` nicht an; konzentrieren Sie sich auf die oben genannten Cache-Felder für den größten Plex-Gewinn.

## Schritt 3 — RcloneView-Durchsatz an den Plex-Bedarf anpassen

- Behalten Sie ein **festes Target oder Mount to local path**, damit Plex-Bibliotheken ihren Mount-Pfad nach einem Neustart nie verlieren.
- Nutzen Sie **Auto start on launch**, damit Mounts wiederhergestellt sind, bevor die Plex-Dienste starten.
- Aktivieren Sie unter Windows **Network drive**, unter Linux **Allow other**, damit das Plex-Dienstkonto den Mount sehen kann.
- Beobachten Sie den **Mount Manager**-Status. Wechselt ein Mount zu Unmounted, binden Sie ihn dort oder über das System-Tray-Menü erneut ein, statt die Bibliotheken neu aufzubauen.
- Erstellen Sie bei Mehrfach-Bibliotheken separate Mounts (z. B. Filme vs. Serien) und legen Sie **Cache max size** pro Mount fest, damit eine Bibliothek nicht den Cache der anderen verdrängt.

## Schritt 4 — Netzwerk- und Betriebssystemeinstellungen härten

- **Lokales Netzwerk**: Verbinden Sie den Plex-Server per Ethernet; stellen Sie QoS so ein, dass er priorisierte Bandbreite erhält.
- **Windows**: Binden Sie mit einem festen Laufwerksbuchstaben ein und stellen Sie sicher, dass der Plex-Dienst unter demselben Benutzer läuft, dem der Mount gehört.
- **Linux/macOS**: Nutzen Sie `/etc/fstab` oder einen Launch-Agent erst, nachdem Sie überprüft haben, dass das Auto-Mount von RcloneView funktioniert — Beständigkeit ist wichtiger als manuelle Skripte.
- **Bandbreitenbegrenzungen**: Lassen Sie unter **Settings → Transfers** die Bandbreite für LAN-Streaming unbegrenzt, setzen Sie aber eine Obergrenze (z. B. 300 Mbit/s), falls sich andere Workloads die Leitung teilen.


## Troubleshooting-Übersicht

| Problem | Lösung |
| --- | --- |
| Pufferung nach Leerlaufphase | **Cache max age** erhöhen (z. B. 6–12 Stunden) und **Cache mode** auf Full belassen, damit zwischengespeicherte Chunks warm bleiben |
| Pufferung bei mehreren gleichzeitigen Nutzern | **Cache max size** erhöhen, um gleichzeitige 4K-Dateien unterzubringen, und sicherstellen, dass die SSD freien Speicherplatz hat |
| Laufwerk wird über Nacht ausgehängt | **Auto start on launch** aktivieren und ein festes **Target** oder **Mount to local path** verwenden |
| Plex sieht den Mount nicht | Unter Windows **Network drive** prüfen und Plex mit denselben Zugangsdaten ausführen; unter Linux **Allow other** aktivieren |
| Bibliotheks-Scans sind langsam | **Dir cache time** auf 5–15 Minuten erhöhen; Cache nach dem Hinzufügen neuer Inhalte aktualisieren |

## Praxisbeispiele für die Behebung von Pufferung

1. **4K-HDR-Sammler**  
   - Cache Mode: Full  
   - Cache max size: 120 GB (SSD/NVMe)  
   - Cache max age: 12 Stunden (`43200000000000` ns)  
   - Dir cache time: 15 Minuten (`900000000000` ns)  
   Ergebnis: Sofortiges Kapitelspringen, &lt;1 s Pufferung bei Dolby-Vision-Remuxes.

2. **Familienserver mit gemischtem 1080p/4K**  
   - Zwei Mounts: `Movies`, `Shows`, jeweils mit eigener Cache-Größe  
   - Ein Scheduler-Job wärmt nachts häufig angesehene Ordner vor  
   Ergebnis: Getrennte Caches verhindern, dass Kinder-Cartoons die Film-Caches verdrängen.

3. **Reisende Nutzer über LTE**  
   - Bandbreitenbegrenzung: 80 Mbit/s  
   - Plex-Transcodierung auf 8 Mbit/s 1080p eingestellt  
   - Der RcloneView-Mount bleibt im Cache-Modus **Full**; Schreibvorgänge werden bis zur Wiederherstellung der Verbindung in die Warteschlange gestellt  
   Ergebnis: Stabile Streams selbst über mobile Hotspots.

## FAQ

**Brauche ich einen separaten Mount pro Bibliothek?**  
Nicht erforderlich, aber die Aufteilung großer Bibliotheken hält die Caches überschaubar und ermöglicht es, Cache-Größe/-Alter pro Bibliothek anzupassen (z. B. längere Cache-Dauer für 4K-Filme als für TV-Episoden).

## Ohne Pausen abspielen

Plex-Pufferung lässt sich lösen, sobald Sie Mounts, Cache und Kontingente im Griff haben. RcloneView bietet die GUI, um den VFS-Cache korrekt zu konfigurieren, den Durchsatz zu überwachen und Vorwärmvorgänge zu automatisieren — kein Rätselraten mit Shell-Skripten. Stellen Sie die oben genannten Einstellungen ein, beobachten Sie Ihre Übertragungsdiagramme und genießen Sie Plex-Bibliotheken, die sich wie lokaler Speicher verhalten.


<CloudSupportGrid />
