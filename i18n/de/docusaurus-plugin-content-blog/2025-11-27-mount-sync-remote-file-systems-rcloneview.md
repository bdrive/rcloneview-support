---
slug: mount-sync-remote-file-systems-rcloneview
title: "Remote-Dateisysteme mit RcloneView einfach einbinden, synchronisieren und verwalten"
authors:
  - tayson
description: "Verbinden Sie SFTP, SMB, WebDAV und Cloud-Speicher in einer GUI. Binden Sie Remote-Dateisysteme mit dem Zwei-Fenster-Explorer, Compare, Jobs und dem Mount-Manager von RcloneView ein, synchronisieren und automatisieren Sie sie."
keywords:
  - rcloneview
  - sftp
  - smb
  - webdav
  - remote-laufwerk einbinden
  - cloud-dateisystem
  - rclone gui
  - nas-backup
  - remote explorer
  - synchronisationsautomatisierung
tags:
  - RcloneView
  - cloud
  - sync
  - mount
  - nas
  - sftp
  - webdav
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote-Dateisysteme mit RcloneView einfach einbinden, synchronisieren und verwalten

> Dateisystem-Remotes wie **SFTP**, **SMB** und **WebDAV** verdienen denselben Komfort wie Cloud-Laufwerke. RcloneView bietet Ihnen einen Zwei-Fenster-Explorer, Compare, Sync und einen Mount-Manager, damit Sie Remote-Server und NAS-Boxen wie lokale Laufwerke behandeln können – ohne sich rclone-Flags merken zu müssen.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


<!-- Image verified: /images/en/howto/rcloneview-basic/rcloneview-user-interface.png exists -->

## Lokales FS vs. Remote-FS: warum es wichtig ist

- **Lokales FS:** sofortige Latenz, native Berechtigungen, keine Netzwerk-Hops. Hervorragend zum Bearbeiten, aber nicht immer redundant.
- **Remote-FS (SFTP/SMB/WebDAV):** bringt Netzwerklatenz und Authentifizierung mit sich, ermöglicht aber zentrales NAS, Remote-Server und Zusammenarbeit.
- **Cloud-Objektspeicher:** günstig und langlebig, aber nicht POSIX-konform; das Einbinden verbessert Workflows für Apps, die ein Dateisystem erwarten.
- **Ziel:** alles in einer UI vereinen, damit Sie durchsuchen, einbinden, synchronisieren und automatisieren können, ohne das Tool zu wechseln.

## SFTP und WebDAV in wenigen Minuten verbinden

RcloneView verpackt die rclone-Backend-Liste (100+ Anbieter) in einen einfachen Remote-Assistenten. Bei den meisten dateisystembasierten Remotes wählen Sie einfach den Anbieter aus und füllen Host/Zugangsdaten aus.

<!-- Image verified: /images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-large img-center" />

👉 Remote-Anleitung: [Remote Manager](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

### SFTP-Remote

1. Öffnen Sie **Remote -> + New Remote** (oder das **+** im Explorer).
2. Wählen Sie **SFTP**.
3. Geben Sie `host`, `port`, `user` sowie entweder ein Passwort oder eine Schlüsseldatei ein.
4. Speichern – Ihr SFTP-Server erscheint im Remote Manager.

### WebDAV-Remote

1. Wählen Sie **WebDAV** in der Anbieterliste.
2. Geben Sie die **WebDAV-URL**, Benutzername und Passwort/Token ein.
3. Speichern und das Durchsuchen im Zwei-Fenster-Explorer testen.

### SMB-/NAS-Freigabe

1. Wählen Sie **SMB** (Samba/CIFS).
2. Geben Sie die Serveradresse und den Freigabenamen an; fügen Sie bei Bedarf die Domäne hinzu.
3. Speichern und wie jedes andere Remote öffnen.

### Cloud + FS gemeinsam

Sie können SFTP, SMB, WebDAV und Cloud-Remotes (Google Drive, Dropbox, Mega, S3) in derselben Explorer-Sitzung mischen und direkt zwischen ihnen kopieren.

## Zwei-Fenster-Explorer für schnelle Hausarbeit

Remote-Dateisysteme fühlen sich lokal an, wenn Sie sie nebeneinander sehen können.

<!-- Image: two-pane explorer -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
   
- Öffnen Sie den **Server** (SFTP/SMB/WebDAV) links und ein **Cloud-/NAS**-Ziel rechts.
- Ziehen und ablegen zum Kopieren; der Fortschritt erscheint unter **Transfer**.
- Rechtsklick für `**Copy ->**`/ `**<- Copy**`, **Delete** oder **Mount**-Aktionen.
- Verwenden Sie Filter, um Cache-/Temp-Ordner vor der Synchronisation auszublenden.

👉 Explorer-Grundlagen: 
 - [Remotes durchsuchen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)  
  - [Dateien per Drag & Drop](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

## Remote-Dateisysteme wie lokale Laufwerke einbinden

Brauchen Sie Ihre SFTP- oder WebDAV-Freigabe als Laufwerksbuchstaben oder Finder-Mount? Nutzen Sie den integrierten Mount-Manager.

<!-- Image verified: /images/en/howto/rcloneview-basic/mount-from-remote-explorer.png -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
- Klicken Sie auf **Mount** in der Symbolleiste oder der Remote-Karte.
- Wählen Sie den Mount-Typ (Laufwerksbuchstabe/Pfad) und stellen Sie Cache-/Puffer-Optionen ein.
- Überwachen Sie den Status im **Mount Manager**; stoppen/neustarten ohne CLI.
- Ideal für Apps, die nur lokale Pfade verstehen (NLEs, DAWs, CAD-Tools).

👉 Mount-Anleitung: [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Vor der Synchronisation vergleichen

Kopien von Remote-Dateisystemen sollten bewusst erfolgen. Nutzen Sie **Compare**, um das Überschreiben neuerer Änderungen zu vermeiden.

<!-- Image: compare before copy -->
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare folders" class="img-large img-center" />

- Hebt **fehlende**, **unterschiedlich große** und **übereinstimmende** Dateien hervor.
- Kopieren Sie nur, was sich geändert hat – von NAS -> Cloud oder von Cloud -> NAS.
- Ideal, um Änderungen von lokaler SSD zu Remote-SFTP ohne Überraschungen vorzubereiten.

👉 Compare-Anleitung: [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

## Berechtigungsprobleme schnell lösen

- **SFTP:** stellen Sie die korrekte UID/GID auf dem Server sicher; schlagen Schreibvorgänge fehl, prüfen Sie den Besitz des Verzeichnisses und `chmod` auf dem Host.
- **SMB:** Domäne/Arbeitsgruppe abgleichen; „Gast/NTLMv2 erlauben“ bei Bedarf auf dem Server setzen; Freigabeberechtigungen getrennt von Dateisystem-ACLs prüfen.
- **WebDAV:** manche Hosts blockieren MOVE/DELETE – verwenden Sie COPY und dann DELETE; achten Sie auf schreibgeschützte Mounts.
- **Lokale Mounts:** können Apps nicht schreiben, erneut mit dem richtigen Benutzer einbinden oder die Mount-Optionen im Mount-Dialog anpassen.
- Nutzen Sie den Tab **Logs**, um HTTP-/SFTP-Fehler (401/403/550) zu sehen und Zugangsdaten oder Pfade entsprechend anzupassen.

<!-- Image verified: /images/en/howto/rcloneview-basic/log-tab.png -->
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
   
## Backup- und Automatisierungsbeispiele

### Beispiel 1: NAS -> S3 (nächtlich)

1. Quelle: **SMB**-Freigabe; Ziel: **S3**-Bucket.
2. Klicken Sie auf **Sync** und wählen Sie **einseitig** (NAS -> S3).
3. Aktivieren Sie **Checksum** (falls unterstützt) und schließen Sie Temp-/Cache-Ordner aus.
4. **Als Job speichern** (z. B. `nas-to-s3-nightly`).
5. Öffnen Sie **Job Manager -> Add Job**, planen Sie **02:00 täglich**.

<!-- Image: job scheduling -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

👉 Job-Anleitungen: [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Jobs ausführen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Transfer-Überwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

### Beispiel 2: SFTP-Bearbeitungsfreigabe -> Google Drive (in Bearbeitung)

1. Linkes Fenster: **SFTP**-Projektordner; rechtes Fenster: **Google Drive**-Teambereich.
2. Nutzen Sie **Compare**, um nur neue Renderings zu synchronisieren.
3. Als wiederverwendbaren Job für tägliche Backups um 03:00 speichern.
4. Behalten Sie einen zweiten Job nur für **EXPORT**, damit Review-Links aktuell bleiben.

### Beispiel 3: WebDAV-CMS -> lokale SSD (einbinden + kopieren)

1. Binden Sie die WebDAV-Site über den **Mount Manager** für App-Kompatibilität ein.
2. Kopieren Sie Site-Assets in einen lokalen SSD-Ordner; führen Sie **Compare** wöchentlich aus, um Deltas abzurufen.
3. Sind Löschvorgänge blockiert, verwenden Sie nur Kopieren und bereinigen manuell nach der Überprüfung.

## Tipps für Geschwindigkeit und Stabilität bei Remote-FS

- Nutzen Sie **Bandbreitenlimits** während der Bürozeiten; erhöhen Sie die Parallelität außerhalb der Geschäftszeiten.
- Bevorzugen Sie **Resume** bei großen Uploads; RcloneView übernimmt Wiederholungsversuche automatisch.
- Bei langen SFTP-Strecken aktivieren Sie Komprimierung nur, wenn CPU-Reserven vorhanden sind.
- Vermeiden Sie bei SMB das doppelte Einbinden derselben Freigabe bei instabilen Netzwerken – halten Sie einen Mount am Leben.
- Reduzieren Sie bei WebDAV-Hosts mit Ratenlimits die parallelen Übertragungen im Sync-Dialog.

## NAS- und Cloud-Ordner sauber organisieren

- Bewahren Sie eine gemeinsame Ordnervorlage (z. B. `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) sowohl auf NAS als auch in der Cloud auf; kopieren Sie sie vor jedem Projekt.
- Nutzen Sie **Compare** wöchentlich: NAS vs. Cloud-Archiv, um sicherzustellen, dass der Kaltspeicher aktuell ist.
- Behalten Sie **einseitiges Kopieren** für Archive bei (vermeiden Sie die Löschweitergabe).
- Speichern Sie **Proxys** in der Cloud für die Zusammenarbeit; behalten Sie **RAW** auf NAS/S3 für die Sicherheit.

## Wann einbinden vs. wann synchronisieren

- **Einbinden**, wenn Anwendungen Datei-Handles benötigen (NLEs, Asset-Browser).
- **Sync/Copy** für Massenverschiebungen, Offsite-Backups oder bei verlustbehafteten Netzwerkverbindungen.
- Kombinieren Sie beides: für tägliche Bearbeitungen einbinden, dann eine geplante Synchronisation zum Archivieren ausführen.

## Protokollierung und Wiederherstellung

- Nutzen Sie **Job History**, um zu sehen, welche Dateien fehlgeschlagen sind und warum; erneut ausführen, um nur fehlende Elemente zu übernehmen.
- Bei Berechtigungsfehlern authentifizieren Sie das Remote erneut oder passen die Server-ACLs vor dem erneuten Versuch an.
- Behalten Sie den **Log-Tab** bei den ersten Läufen geöffnet, um Codes 401/403/550/429 frühzeitig zu erkennen.
- Stockt ein Mount, stoppen/starten Sie ihn über den **Mount Manager** neu, statt neu zu starten.

## Checkliste für den Schnellstart

1. SFTP-/SMB-/WebDAV-Remotes im Remote Manager hinzufügen.
2. Zwei-Fenster-Explorer öffnen und Auflistung prüfen.
3. **Compare** auf einem kleinen Ordner ausführen; Kopierrichtungen bestätigen.
4. Einbinden, wenn Ihre App einen Laufwerksbuchstaben/Pfad benötigt.
5. Sync/Copy als Jobs speichern; außerhalb der Geschäftszeiten planen.
6. Nach dem ersten vollständigen Lauf die Logs prüfen; Checksum aktivieren, wo unterstützt.

## Zusammenfassung

RcloneView macht Remote-Dateisysteme zu vollwertigen Bürgern. Verbinden Sie SFTP, SMB, WebDAV, NAS und Cloud-Remotes, binden Sie sie wie lokale Laufwerke ein, vergleichen Sie vor der Synchronisation und automatisieren Sie Backups mit Jobs und Zeitplänen – alles aus einer GUI, die auf der Engine von rclone basiert. Behandeln Sie jeden Speicher-Endpunkt gleich: sichtbar, überprüfbar und automatisiert.

<CloudSupportGrid />
