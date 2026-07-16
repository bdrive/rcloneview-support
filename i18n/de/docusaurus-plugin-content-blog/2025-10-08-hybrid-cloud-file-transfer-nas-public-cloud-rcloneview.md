---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "Hybride Cloud-Dateiübertragung zwischen lokalem NAS und Public Cloud mit RcloneView"
authors:
  - tayson
description: "Mounten, synchronisieren und automatisieren Sie Übertragungen zwischen lokalem NAS (SMB/SFTP) und Public Clouds wie S3, Wasabi, Google Drive und Dropbox mit dem Zwei-Fenster-Explorer, Compare, Sync und den geplanten Jobs von RcloneView."
keywords:
  - rcloneview
  - hybrid cloud
  - nas backup
  - smb sftp
  - webdav
  - s3 transfer
  - google drive sync
  - wasabi backup
  - mount remote drive
  - rclone gui
tags:
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hybride Cloud-Dateiübertragung zwischen lokalem NAS und Public Cloud mit RcloneView

> Verbinden Sie lokales NAS und Public Clouds ohne CLI-Akrobatik. Mit RcloneView fügen Sie SMB/SFTP/WebDAV hinzu, öffnen Clouds nebeneinander, vergleichen Änderungen mit Compare, binden Laufwerke ein und planen nächtliche Synchronisationen ? so bleibt hybrider Speicher übersichtlich und vorhersehbar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## Warum Hybrid Cloud schwierig ist (und sich trotzdem lohnt)

- Ein lokales NAS bietet schnellen LAN-Zugriff für Editoren und Render-Knoten, es fehlt jedoch die Ausfallsicherheit außerhalb des Standorts.  
- Public Cloud (S3/Wasabi/Drive/Dropbox) bringt Dauerhaftigkeit und globale Freigabe, aber Bandbreite und Kosten spielen eine Rolle.  
- Teams jonglieren mit gemischten Berechtigungen (ACLs auf dem NAS vs. OAuth/Cloud-RBAC) und unterschiedlichen Ordnerkonventionen.  
- Manuelles Kopieren birgt das Risiko von Überschreibungen, fehlenden Versionen und nächtlichem Stress.  
- Eine GUI, die beide Seiten vereint, reduziert die kognitive Last und ermöglicht zuverlässige Automatisierung.

## Lokales Dateisystem vs. Remote-Dateisystem in einem Fenster

- **Lokal/NAS (SMB/SFTP/WebDAV):** POSIX-ähnlich, berechtigungssensibel, geringe Latenz im LAN.  
- **Cloud:** Objektspeicher (S3/Wasabi) oder Drive-Stil (Google Drive/Dropbox); erfordert OAuth oder Schlüssel.  
- RcloneView behandelt jede Verbindung als Remote, das Sie in einer einzigen Oberfläche öffnen, vergleichen, einbinden (mount) und synchronisieren können.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## Fügen Sie Ihr lokales NAS-Remote hinzu (SMB/SFTP/WebDAV)

1. Klicken Sie auf **Remote → + Neues Remote** oder die Schaltfläche **+** im Explorer.  
2. Wählen Sie **SMB** (für Windows-/NAS-Freigaben) oder **SFTP** (Linux-/UNIX-Server).  
3. Geben Sie Serveradresse, Freigabe/Pfad und Zugangsdaten ein (fügen Sie bei SMB bei Bedarf die Domain hinzu).  
4. Speichern und testen Sie das Durchsuchen im Zwei-Fenster-Explorer.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## Fügen Sie Ihre Public-Cloud-Remotes hinzu

- **S3/Wasabi/B2/R2:** Verwenden Sie Zugriffs-/Geheimschlüssel; wählen Sie Region und Bucket aus.  
- **Google Drive/Dropbox:** Klicken Sie auf **Verbinden**, um OAuth abzuschließen; keine Tokens zum Einfügen nötig.  
- **WebDAV-Endpunkte:** Fügen Sie URL und Anmeldedaten ein.  
- Bewahren Sie sowohl NAS- als auch Cloud-Remotes im **Remote Manager** zur Wiederverwendung auf.

## Remote-Dateisysteme wie lokale Laufwerke einbinden (mount)

Mounts helfen Anwendungen, die auf lokale Pfade angewiesen sind (NLEs, DAWs, CAD). Der Mount-Manager von RcloneView hält Sie von CLI-Flags fern.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- Binden Sie über die Remote-Karte oder Symbolleiste ein (mount), wählen Sie Laufwerksbuchstabe/Pfad und legen Sie Cache/Puffer fest.  
- Starten/stoppen Sie Mounts im **Mount Manager**, ohne neu zu starten.  
- Ideal, um direkt von SFTP/SMB zu bearbeiten oder S3 für leichte Aufgaben als Ordner bereitzustellen.

## Vergleichen, bevor Sie kopieren

Hybride Umzüge können unübersichtlich werden; Compare macht Unterschiede sichtbar.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- Öffnen Sie das NAS links, den Cloud-Bucket rechts, und klicken Sie auf **Compare**.  
- Hebt **fehlende**, **größenunterschiedliche** und **übereinstimmende** Dateien hervor.  
- Kopieren Sie nur das Delta von NAS → Cloud (oder umgekehrt), um neuere Änderungen nicht zu überschreiben.

## Sync- und Kopierabläufe für Hybrid Cloud

- **Einweg-Kopie** für Backups/Archive; am Ziel wird nicht gelöscht.  
- **Einweg-Synchronisation mit Löschen**, wenn Sie das NAS absichtlich zur Cloud spiegeln.  
- **Zweiwege-Synchronisation** sparsam einsetzen (nur wenn sich beide Seiten aktiv ändern).  
- Verwenden Sie **Einschluss-/Ausschlussfilter**, um Caches, Proxys und temporäre Renderings zu überspringen.

## Berechtigungen ohne Drama verwalten

- **SMB:** Domain/Arbeitsgruppe abgleichen; sicherstellen, dass Freigabe-ACLs und Dateisystem-ACLs Schreibzugriff erlauben.  
- **SFTP:** UID/GID und Ordnerbesitz auf dem Server überprüfen; bei Bedarf serverseitig `chmod` anpassen.  
- **WebDAV:** Manche Hosts blockieren MOVE/DELETE; im Zweifel nur kopieren.  
- Ist ein Mount schreibgeschützt, erneut mit passendem Benutzer einbinden oder die Mount-Optionen im Dialog anpassen.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- Prüfen Sie die **Logs** auf Hinweise wie 401/403/550/permission-denied und wiederholen Sie den Vorgang nach der Behebung.

## Performance-Tipps für NAS ↔ Cloud

- Planen Sie große Jobs außerhalb der Geschäftszeiten; begrenzen Sie die Bandbreite während der Geschäftszeiten.  
- Halten Sie bei S3/Wasabi die Parallelität moderat, um Drosselung zu vermeiden; aktivieren Sie **Checksummen**, wenn unterstützt.  
- Reduzieren Sie bei SFTP über WAN die parallelen Übertragungen, wenn Paketverluste auftreten; erwägen Sie Kompression nur, wenn die CPU es zulässt.  
- Vermeiden Sie das doppelte Einbinden derselben SMB-Freigabe bei instabilen Netzwerken.

## Automatisieren mit Jobs und Zeitplänen

- Speichern Sie jede Sync-/Kopieraktion als **Job** (z. B. `nas-to-s3-nightly`).  
- Öffnen Sie **Job Manager → Job hinzufügen**, wählen Sie den gespeicherten Job aus und planen Sie ihn **täglich um 02:00 Uhr**.  
- Staffeln Sie mehrere Jobs (NAS → S3, NAS → Drive, Drive → NAS), um Konflikte zu minimieren.

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### Beispiel-Job-Set

- **NAS (SMB) → Wasabi (Einweg-Kopie)**: wöchentliches Archiv von RAW/PROJECT.  
- **NAS (SFTP) → Google Drive Shared Drive (Einweg-Synchronisation)**: tägliches EDIT/EXPORT für die Zusammenarbeit.  
- **S3 → NAS (Einweg-Kopie)**: monatliches Abrufen von Cold-Archive-Slices für lokale Wiederherstellungstests.

### Testlauf und Verifizierung

- Führen Sie beim ersten Ausführen einen **Testlauf (Dry-Run)** durch, um zu prüfen, was verschoben wird.  
- Öffnen Sie nach der Synchronisation erneut **Compare**; es sollten nur die erwarteten Unterschiede bestehen bleiben.  
- Behalten Sie bei S3/Wasabi Versionierung + Lifecycle-Regeln bei, um Kosten zu kontrollieren und den Verlauf zu bewahren.

## Organisieren Sie Ihre hybride Ordnerstrategie

- Standardisieren Sie eine Vorlage (z. B. `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) sowohl auf dem NAS als auch in der Cloud.  
- Halten Sie Proxys in der Cloud für schnelle Freigabe bereit; bewahren Sie RAW auf dem NAS/S3 für Originaltreue auf.  
- Verwenden Sie **Copy** für Archive, **Sync** für aktive Arbeitsbereiche und **Mount** für App-Kompatibilität.  
- Dokumentieren Sie pro Ordner, welches Remote die „Single Source of Truth“ ist, um versehentliches Löschen zu vermeiden.

## Praxis-Workflow (Schritt für Schritt)

1. **Remotes verbinden:** SMB/SFTP für das NAS hinzufügen, S3/Wasabi und Google Drive hinzufügen.  
2. **Zwei Fenster öffnen:** NAS links, Cloud rechts; Auflistungen bestätigen.  
3. **Kleinen Pilotordner vergleichen:** sicherstellen, dass die Deltas plausibel sind.  
4. **Einweg-Kopie in die Cloud ausführen:** mit einem nicht-destruktiven Backup beginnen.  
5. **Als Job speichern + planen:** nächtlich um 02:00 Uhr nur für Deltas.  
6. **Für Apps einbinden (mount):** NAS oder S3 mounten, wenn Editoren pfadbasierten Zugriff benötigen.  
7. **Log-Überprüfung:** Wiederholungen, Drosselungsmeldungen oder Berechtigungen in den Logs prüfen.  
8. **Regelmäßiger Wiederherstellungstest:** zur Integritätsprüfung von der Cloud in einen NAS-Testordner zurückkopieren.  
9. **Filter verfeinern:** Caches/Renderings ausschließen; für Archive nur Master- und Projektdateien einschließen.  
10. **Team-Übergabe:** Ordnervorlage und Job-Zeitplan teilen, damit alle demselben Schema folgen.

## Kurze Fehlerbehebungs-Checkliste

- 403/550 gesehen? Zugangsdaten, Freigabe-ACLs oder Bucket-Richtlinien erneut prüfen.  
- Langsames WAN? Parallelität reduzieren und Bandbreitenbegrenzung aktivieren; über Nacht planen.  
- Mount schreibt nicht? Mit korrektem Benutzer erneut einbinden oder SMB-Berechtigungen anpassen.  
- WebDAV-Löschungen schlagen fehl? Erst kopieren, dann manuell bereinigen; manche Hosts blockieren MOVE/DELETE.  
- Doppelte Kopien? Mit Compare sicher bereinigen; Zweiwege-Synchronisation nur bei Bedarf verwenden.

## Checkliste zur Inbetriebnahme

- [ ] NAS-Remote (SMB/SFTP/WebDAV) hinzugefügt und durchsuchbar.  
- [ ] Cloud-Remote (S3/Wasabi/Drive/Dropbox) hinzugefügt und authentifiziert.  
- [ ] Ordnervorlage auf beiden Seiten gespiegelt.  
- [ ] Pilot-Compare und Testlauf (Dry-Run) abgeschlossen.  
- [ ] Job gespeichert und geplant (02:00 Uhr empfohlen).  
- [ ] Checksummen aktiviert, wo unterstützt; Logs überwacht.  
- [ ] Wiederherstellungstest durchgeführt und dokumentiert.

## Zusammenfassung

RcloneView verwandelt hybride Cloud-Arbeit in einen wiederholbaren Workflow: NAS- und Cloud-Remotes hinzufügen, vor dem Kopieren vergleichen, bei Bedarf einbinden (mount), wenn Apps lokale Pfade erfordern, und Backups mit Jobs und Zeitplänen automatisieren. Mit sichtbaren Logs, Wiederholungen und Checksummen-Unterstützung behalten Sie lokale Performance und Cloud-Ausfallsicherheit, ohne die CLI zu berühren.

<CloudSupportGrid />
