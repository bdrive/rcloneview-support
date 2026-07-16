---
slug: fix-cloud-mount-disconnect-drops-rcloneview
title: "Verbindungsabbrüche bei Cloud-Mounts beheben — Stabile virtuelle Laufwerke mit RcloneView"
authors:
  - tayson
description: "Behebe Verbindungsabbrüche bei Cloud-Mounts und abgebrochene virtuelle Laufwerke. Erfahre, wie der VFS-Cache und die Mount-Einstellungen von RcloneView deine Cloud-Laufwerke verbunden und reaktionsfähig halten."
keywords:
  - cloud mount disconnect
  - virtual drive drops
  - rclone mount unstable
  - VFS cache disconnect
  - cloud drive keeps disconnecting
  - RcloneView mount fix
  - mounted drive disappears
  - cloud mount timeout
  - stable cloud mount
  - virtual drive reconnect
tags:
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Verbindungsabbrüche bei Cloud-Mounts beheben — Stabile virtuelle Laufwerke mit RcloneView

> Ein virtuelles Laufwerk, das mitten im Arbeitsablauf verschwindet, kann geöffnete Dateien beschädigen und automatisierte Pipelines zum Absturz bringen.

Cloud-Speicher als lokalen Laufwerksbuchstaben einzubinden (mount), ist eine der leistungsfähigsten Funktionen in jedem Cloud-Verwaltungstool — doch Verbindungsabbrüche verwandeln diesen Komfort in ein Risiko. Wenn ein eingebundenes Google-Drive- oder S3-Bucket unerwartet die Verbindung verliert, verlieren Anwendungen den Zugriff auf geöffnete Dateien, Speichervorgänge schlagen stillschweigend fehl und geplante Skripte bleiben stehen. Der Mount-Manager und die VFS-Cache-Einstellungen von RcloneView geben dir die nötigen Kontrollmöglichkeiten, um auch bei unzuverlässigen Verbindungen stabile, dauerhafte Cloud-Mounts aufrechtzuerhalten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Ursachen für Mount-Verbindungsabbrüche

Verbindungsabbrüche bei Cloud-Mounts haben typischerweise drei Ursachen: Netzwerkunterbrechungen, abgelaufene Authentifizierungs-Tokens und VFS-Cache-Erschöpfung. Ein kurzer WLAN-Ausfall von nur wenigen Sekunden kann dazu führen, dass die FUSE- oder WinFsp-Schicht den Mount als nicht verfügbar meldet, und viele Anwendungen wiederholen den Lese- oder Schreibvorgang nicht automatisch.

Der Ablauf von OAuth-Tokens ist eine weitere häufige Ursache. Google-Drive-Tokens laufen standardmäßig nach einer Stunde ab, und wenn der Austausch des Refresh-Tokens fehlschlägt — etwa wegen einer Netzwerkstörung genau im ungünstigsten Moment — verliert der Mount seine Autorisierung. Der Laufwerksbuchstabe bleibt im Explorer sichtbar, aber jeder Dateivorgang liefert einen Zugriff-verweigert- oder E/A-Fehler zurück.

VFS-Cache-Druck verursacht eine subtilere Form des Verbindungsabbruchs. Wenn die lokale Cache-Partition voll ist, können neue Lese- und Schreibanfragen nicht gepuffert werden, und der Mount stockt effektiv. RcloneView protokolliert diese Cache-voll-Ereignisse, damit du die eigentliche Ursache nachvollziehen kannst, anstatt das Netzwerk verantwortlich zu machen.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView mount manager showing active cloud drives" class="img-large img-center" />

## VFS-Cache für Stabilität konfigurieren

Der VFS-Cache ist der Puffer zwischen deinen lokalen Anwendungen und der Cloud-API. Mit `--vfs-cache-mode full` sorgst du dafür, dass alle Lese- und Schreibvorgänge über den lokalen Cache laufen, wodurch Anwendungen von vorübergehenden Netzwerkproblemen abgeschirmt werden. Dateien werden aus dem Cache gelesen und asynchron in die Cloud zurückgeschrieben.

Wichtige Parameter zum Anpassen sind `--vfs-cache-max-size` (setze diesen auf mindestens 10 GB, sofern der Speicherplatz es zulässt), `--vfs-cache-max-age` (24h ist ein guter Standardwert für aktive Arbeitsabläufe) und `--vfs-write-back` (5s bis 30s, abhängig davon, wie häufig Dateien gespeichert werden). Diese Einstellungen ermöglichen es dem Mount, kurze Netzwerkausfälle abzufedern, ohne Fehler an die Anwendungen weiterzugeben.

Das Mount-Konfigurationspanel von RcloneView stellt diese Optionen in einer übersichtlichen Oberfläche bereit, und du kannst Profile für unterschiedliche Anwendungsfälle speichern — einen großen Cache für die Videobearbeitung, einen kleineren für den Dokumentzugriff.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive in RcloneView" class="img-large img-center" />

## Netzwerkunterbrechungen elegant handhaben

Die Flags `--low-level-retries` und `--retries` steuern, wie aggressiv der Mount fehlgeschlagene API-Aufrufe wiederholt. Wenn du `--low-level-retries` auf 20 und `--retries` auf 10 erhöhst, gibst du dem Mount Zeit, sich von kurzen Ausfällen zu erholen, ohne dem Benutzer Fehler anzuzeigen.

Mit `--contimeout 30s` und `--timeout 5m` verhinderst du vorzeitige Verbindungsabbrüche, wenn der Anbieter langsam reagiert. Für Benutzer mit VPN-Verbindungen oder Satellitenverbindungen mit hoher Latenz sind diese längeren Timeouts für die Mount-Stabilität unerlässlich.

RcloneView kann auch so konfiguriert werden, dass ein Laufwerk automatisch neu eingebunden wird, wenn der Prozess unerwartet beendet wird. Der Mount-Manager erkennt, wenn ein Mount abbricht, und kann ihn innerhalb weniger Sekunden neu starten, um das Zeitfenster der Unterbrechung zu minimieren.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring mount activity and connection status in RcloneView" class="img-large img-center" />

## Probleme durch abgelaufene Tokens vermeiden

Bei OAuth-basierten Anbietern wie Google Drive und OneDrive sind fehlgeschlagene Token-Aktualisierungen ein stiller Mount-Killer. RcloneView speichert Tokens sicher und übernimmt den Aktualisierungszyklus automatisch. Schlägt eine Aktualisierung fehl, protokolliert der Mount-Manager das Ereignis und versucht es erneut, bevor der Mount als nicht verfügbar gemeldet wird.

Wenn du `rclone config reconnect` regelmäßig über die Oberfläche von RcloneView ausführst, stellst du sicher, dass deine Refresh-Tokens gültig bleiben — besonders bei Google-Konten mit strikten Sitzungsrichtlinien.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Mount event history showing reconnection attempts in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Lade RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Aktiviere den vollständigen VFS-Cache-Modus** und setze `--vfs-cache-max-size` auf mindestens 10 GB für stabile Lese-/Schreibvorgänge.
3. **Erhöhe die Wiederholungs- und Timeout-Werte**, um vorübergehende Netzwerkprobleme abzufedern, ohne den Mount zu verlieren.
4. **Nutze den Mount-Manager**, um das automatische erneute Einbinden bei unerwarteten Verbindungsabbrüchen zu konfigurieren.

Ein richtig konfigurierter Cloud-Mount sollte so zuverlässig sein wie ein lokales Laufwerk — RcloneView macht das möglich.

---

**Weiterführende Anleitungen:**

- [VFS-Cache und Mount-Performance — Virtuelle Laufwerke mit RcloneView optimieren](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Google Drive als lokales Laufwerk mit RcloneView einbinden](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Abgelaufene OAuth-Token-Fehler beheben — Cloud-Synchronisation mit RcloneView wiederverbinden](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
