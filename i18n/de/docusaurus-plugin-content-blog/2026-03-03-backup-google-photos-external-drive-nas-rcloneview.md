---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "So sichern Sie alle Google Fotos mit RcloneView auf einer externen Festplatte oder einem NAS"
authors:
  - tayson
description: "Laden Sie Ihre gesamte Google Fotos-Bibliothek herunter und sichern Sie sie auf einer externen Festplatte, einem NAS oder einer anderen Cloud – automatisch und ohne die Albumstruktur zu verlieren – mit RcloneView."
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So sichern Sie alle Google Fotos mit RcloneView auf einer externen Festplatte oder einem NAS

> Google Fotos speichert Ihre Erinnerungen, aber was passiert, wenn Ihr Konto gesperrt wird, der Speicherplatz voll ist oder Google seine Richtlinien ändert? Ein lokales Backup stellt sicher, dass Ihre Fotos immer Ihnen gehören.

Google Fotos ist praktisch – bis es das nicht mehr ist. Speicherlimits, Kontosperrungen und Richtlinienänderungen können den Zugriff auf jahrelange, unersetzliche Fotos und Videos gefährden. Google Takeout existiert zwar, ist aber quälend langsam, scheitert bei großen Bibliotheken und unterstützt keine inkrementellen Updates.

RcloneView bietet einen besseren Weg: Verbinden Sie sich direkt mit Google Fotos, durchsuchen Sie Ihre Bibliothek visuell und synchronisieren Sie alles auf eine externe Festplatte, ein NAS oder eine andere Cloud – mit automatischer Zeitplanung, sodass auch zukünftige Fotos gesichert werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Google Fotos lokal sichern?

### Google Takeout reicht nicht aus

Mit Google Takeout können Sie Fotos exportieren, aber es hat erhebliche Einschränkungen:

- **Langsam und unzuverlässig** — Bei großen Bibliotheken schlägt der Export oft mittendrin fehl, sodass Sie von vorne beginnen müssen.
- **Keine inkrementellen Updates** — Jeder Export ist ein vollständiger Dump. Haben Sie diesen Monat 500 neue Fotos gemacht? Dann exportieren Sie einfach alles noch einmal.
- **ZIP-Archivformat** — Sie erhalten Dutzende von ZIP-Dateien, die manuell entpackt und organisiert werden müssen.
- **Keine Automatisierung** — Es ist jedes Mal ein vollständig manueller Vorgang.

### Reale Risiken bei reiner Cloud-Speicherung

- **Speicherkontingent überschritten** — Sobald Sie 15 GB erreichen (gemeinsam mit Gmail und Drive genutzt), fordert Google Sie auf, Dateien zu löschen oder zu bezahlen.
- **Kontosperrung** — Verstöße gegen die Richtlinien, auch versehentliche, können Ihr gesamtes Google-Konto einfrieren.
- **Dienständerungen** — Google hat bereits Produkte eingestellt (Google+, Picasa). Ihre Datenstrategie sollte dies berücksichtigen.

Ein lokales Backup auf einer externen Festplatte oder einem NAS gibt Ihnen eine unabhängige Kopie, die keine Richtlinienänderung wegnehmen kann.

## Google Fotos als Remote einrichten

### Schritt 1: Google Fotos in RcloneView hinzufügen

Öffnen Sie RcloneView und erstellen Sie einen neuen Remote:

1. Klicken Sie im Remote-Manager auf die Schaltfläche **Add Remote**.
2. Wählen Sie **Google Photos** aus der Anbieterliste aus.
3. Folgen Sie dem OAuth-Authentifizierungsablauf — RcloneView öffnet Ihren Browser, um den Zugriff zu autorisieren.
4. Nach der Autorisierung erscheint Ihre Google Fotos-Bibliothek als durchsuchbarer Remote.

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### Schritt 2: Ihre Fotobibliothek durchsuchen

Sobald die Verbindung besteht, können Sie Ihre Google Fotos-Bibliothek direkt im [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) von RcloneView durchsuchen. Google Fotos organisiert Dateien wie folgt:

- **Jahr/Monat-Ordner** — Fotos werden in Pfaden im Stil von `media/by-year/2024/01` angeordnet.
- **Alben** — Ihre Alben erscheinen als separate Ordner unter dem Pfad `album`.
- **Geteilte Alben** — Zugänglich unter `shared-album`.

So sehen Sie genau, was Sie sichern, bevor Sie eine Übertragung starten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## Backup-Strategie 1: Google Fotos → Externe Festplatte

Der einfachste Ansatz — alles auf eine per USB angeschlossene externe Festplatte kopieren.

### So richten Sie es ein

1. **Schließen Sie Ihre externe Festplatte an** und notieren Sie sich den Laufwerksbuchstaben (Windows) oder Mount-Punkt (Mac/Linux).
2. **Erstellen Sie einen Copy-Job** in RcloneView:
   - **Quelle**: Ihr Google Fotos-Remote (wählen Sie den Ordner `media/by-year` für alle Fotos)
   - **Ziel**: Der Pfad Ihrer externen Festplatte (z. B. `E:\Google Photos Backup`)
3. **Führen Sie den Job aus** — RcloneView lädt alle Fotos und Videos herunter und behält dabei die Ordnerstruktur bei.

### Empfohlene Einstellungen

- **Parallele Übertragungen**: 4–6 (die Google Photos API hat Ratenbegrenzungen)
- **Job-Typ**: Copy (nicht Sync — Sie möchten keine lokalen Dateien löschen, wenn Sie sie aus Google Fotos entfernen)

### Für inkrementelle Updates

Nach dem ersten Backup laden nachfolgende Läufe nur neue Fotos herunter. RcloneView vergleicht, was bereits auf Ihrem Laufwerk vorhanden ist, und überspringt vorhandene Dateien. Dadurch wird aus einem mehrstündigen ersten Backup ein schnelles tägliches Update.

## Backup-Strategie 2: Google Fotos → Synology NAS

Für Benutzer mit einem Synology NAS bietet RcloneView ein noch stärker integriertes Erlebnis. Seit v1.0 werden Synology NAS-Geräte in Ihrem Netzwerk [automatisch erkannt](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer).

### So richten Sie es ein

1. **Starten Sie RcloneView** — Ihr Synology NAS sollte automatisch im Tab „Local“ erscheinen.
2. **Erstellen Sie einen Copy-Job**:
   - **Quelle**: Google Fotos-Remote
   - **Ziel**: Ein freigegebener Ordner auf Ihrem NAS (z. B. `/photos/google-backup`)
3. **Planen Sie den Job** so, dass er täglich oder wöchentlich mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) ausgeführt wird.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### Warum ein NAS ideal für die Fotosicherung ist

- **Immer eingeschaltet** — Im Gegensatz zu einer externen Festplatte ist Ihr NAS immer verbunden und einsatzbereit.
- **RAID-Schutz** — Die meisten NAS-Setups verwenden RAID zum Schutz vor Festplattenausfällen.
- **Zugriff von überall** — Betrachten Sie Ihre gesicherten Fotos von jedem Gerät in Ihrem Netzwerk aus.
- **Sekundäres Cloud-Backup** — Verwenden Sie einen weiteren RcloneView-Job, um das NAS mit S3 oder Backblaze B2 zu synchronisieren und so eine externe Redundanz zu schaffen.

## Backup-Strategie 3: Google Fotos → Eine andere Cloud

Möchten Sie eine Kopie bei einem anderen Cloud-Anbieter aufbewahren? RcloneView macht Cloud-zu-Cloud-Übertragungen nahtlos:

- **Google Fotos → OneDrive** — Nutzen Sie Ihren Microsoft-365-Speicher.
- **Google Fotos → AWS S3** — Archivieren Sie in kostengünstigem, langlebigem Object Storage.
- **Google Fotos → Backblaze B2** — Kostengünstiger, unbegrenzter Backup-Speicher.
- **Google Fotos → Wasabi** — S3-kompatibel, ohne Ausgangsgebühren.

Erstellen Sie einfach einen Copy-Job mit Google Fotos als Quelle und Ihrer Ziel-Cloud als Ziel. Dabei laufen keine Daten über den Speicher Ihres lokalen Rechners — RcloneView wickelt die Übertragung über seine rclone-Engine ab.

## Automatisierung Ihrer Fotosicherung

Ein einmaliges Backup ist gut. Ein automatisiertes, wiederkehrendes Backup ist besser.

### Geplante Backups einrichten

1. **Erstellen Sie Ihren Copy-Job** mit einer der oben genannten Strategien.
2. **Öffnen Sie Job Scheduling** und legen Sie einen wiederkehrenden Zeitplan fest:
   - **Täglich um 2 Uhr** — Erfasst alle neuen Fotos vom Vortag.
   - **Wöchentlich am Sonntag** — Ein leichterer Ansatz für kleinere Bibliotheken.
3. **Fügen Sie Benachrichtigungen hinzu**, damit Sie wissen, dass es funktioniert hat:
   - [Slack-Benachrichtigungen](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) für Teams
   - [Telegram-Benachrichtigungen](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) für den persönlichen Gebrauch
   - [Discord-Benachrichtigungen](https://rcloneview.com/support/blog/rcloneview-discord-remote-control) für Communities

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### Batch-Jobs für Backups mit mehreren Zielen verwenden

Mit den [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) von v1.3 können Sie Google Fotos in einer automatisierten Abfolge auf mehrere Ziele gleichzeitig sichern:

1. Copy Google Fotos → Externe Festplatte
2. Copy Google Fotos → NAS
3. Copy Google Fotos → Backblaze B2

Ein Klick (oder ein geplanter Trigger) führt alle drei aus.

## Überwachung und Verifizierung

### Echtzeit-Übertragungsüberwachung

Verfolgen Sie den Fortschritt Ihres Backups in Echtzeit — sehen Sie Dateianzahl, Übertragungsgeschwindigkeit und geschätzte Fertigstellungszeit.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### Mit Folder Comparison verifizieren

Verwenden Sie nach Abschluss eines Backups die [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um zu überprüfen, ob Ihre lokale Kopie mit der Google Fotos-Bibliothek übereinstimmt. So können Sie sicher sein, dass nichts fehlt.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### Job History prüfen

Sehen Sie sich die [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) an, um ein vollständiges Protokoll früherer Backup-Läufe einzusehen, einschließlich übertragener Dateien, aufgetretener Fehler und Gesamtdauer.

## Tipps für große Google Fotos-Bibliotheken

Wenn Sie Zehntausende von Fotos haben:

1. **Beginnen Sie mit den letzten Jahren** — Sichern Sie zuerst die letzten 2–3 Jahre und arbeiten Sie sich dann rückwärts vor. So schützen Sie Ihre neuesten Erinnerungen am schnellsten.
2. **Verwenden Sie inkrementelles Copy** — Nach dem ersten Lauf werden nur neue Dateien übertragen.
3. **Haben Sie Geduld bei Ratenbegrenzungen** — Die Ratenbegrenzungen der Google Photos API sind strenger als bei Google Drive. Halten Sie parallele Übertragungen bei 4–6.
4. **Bei Fehlern erneut versuchen** — Die Funktion „Retry Failed Jobs“ von v1.3 behandelt vorübergehende API-Fehler elegant.
5. **Erwägen Sie eine Zeitplanung außerhalb der Stoßzeiten** — Führen Sie große Backups über Nacht durch, um Netzwerküberlastungen zu vermeiden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux).
2. **Fügen Sie Google Fotos** als Remote mittels OAuth-Authentifizierung hinzu.
3. **Durchsuchen Sie Ihre Bibliothek** im Explorer, um zu sehen, was Sie sichern.
4. **Erstellen Sie einen Copy-Job** zu Ihrem gewählten Ziel (externe Festplatte, NAS oder Cloud).
5. **Planen Sie ihn** für automatische, wiederkehrende Backups.
6. **Verifizieren Sie** nach dem ersten Lauf mit Folder Comparison.

Ihre Fotos sind unersetzlich. Ihr Backup sollte nicht von einem einzigen Anbieter abhängen. RcloneView macht es einfach, eine unabhängige Kopie zu behalten — automatisch, zuverlässig und ganz ohne CLI.

---

**Verwandte Anleitungen:**

- [Remote über browserbasierte Anmeldung hinzufügen (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Remotes durchsuchen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS: automatische Erkennung und Verbindung](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
