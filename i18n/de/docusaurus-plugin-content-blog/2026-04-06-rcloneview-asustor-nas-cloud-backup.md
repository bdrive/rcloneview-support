---
slug: rcloneview-asustor-nas-cloud-backup
title: "RcloneView auf einem ASUSTOR NAS für automatisiertes Cloud-Backup ausführen"
authors:
  - tayson
description: "ASUSTOR-NAS-Geräte sind leistungsstark genug, um RcloneView über Docker auszuführen. Richten Sie automatisierte Cloud-Backups ein, binden Sie Remote-Speicher ein und überwachen Sie Übertragungen direkt von Ihrem NAS aus."
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - RcloneView
  - nas
  - platform
  - backup
  - cloud-backup
  - guide
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf einem ASUSTOR NAS für automatisiertes Cloud-Backup ausführen

> Ihr ASUSTOR NAS läuft rund um die Uhr — machen Sie es zu Ihrer stets aktiven Cloud-Backup-Engine. RcloneView verwandelt Ihr NAS in eine Multi-Cloud-Dateiverwaltungszentrale mit geplanten Backups, Cloud-Einbindung und Echtzeit-Überwachung der Übertragungen.

ASUSTOR-NAS-Geräte werden mit Intel- oder ARM-Prozessoren ausgeliefert, laufen unter dem Betriebssystem ADM (ASUSTOR Data Master) und unterstützen Docker über die Portainer-App oder die Kommandozeile. Dadurch sind sie in der Lage, RcloneView als containerisierten Dienst auszuführen — dauerhaft aktiv, dauerhaft sichernd, ohne einen Desktop- oder Laptop-Rechner zu blockieren. Ob Sie NAS-Freigaben auf Backblaze B2 sichern, Ordner mit Google Drive synchronisieren oder S3 als lokales Volume einbinden möchten — RcloneView auf Ihrem ASUSTOR NAS erledigt das alles über eine webbasierte GUI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Cloud-Backup auf dem NAS ausführen

Cloud-Backup direkt auf Ihrem NAS auszuführen, bietet gegenüber der Ausführung auf einer Workstation mehrere Vorteile:

- **Dauerhafter Betrieb** — Ihr NAS läuft bereits 24/7. Backups werden nach Zeitplan ausgeführt, ohne dass ein PC eingeschaltet sein muss.
- **LAN-Geschwindigkeit beim Zugriff auf NAS-Daten** — Dateien müssen vor dem Hochladen nicht erst über das Netzwerk auf einen PC übertragen werden. Das NAS liest direkt von den eigenen Festplatten.
- **Zentralisierte Verwaltung** — alle Backup-Jobs, Zeitpläne und Protokolle befinden sich auf dem NAS. Jedes Gerät mit einem Browser kann sie verwalten.
- **Keine Belastung der Workstation-Ressourcen** — die CPU- und Bandbreitenkosten großer Übertragungen werden auf das NAS ausgelagert.

## ASUSTOR-NAS-Kompatibilität

RcloneView läuft via Docker auf ASUSTOR-Modellen mit:

- **Intel-basierten** (x86_64) Prozessoren: AS31, AS32, AS33, AS52, AS54, AS61, AS62, AS63, AS64, AS65, AS67, Lockerstor, Lockerstor Pro und die Flashstor-Serie.
- **ARM-basierten** Prozessoren: Drivestor- und Drivestor-Pro-Serie (AS11, AS33 ARM-Varianten) — überprüfen Sie die Docker-Unterstützung für Ihr spezifisches Modell.
- **ADM 4.0 oder neuer** mit über das App Central installiertem Docker (Portainer).
- **Mindestens 2 GB RAM** empfohlen (4 GB+ für gleichzeitige große Übertragungen).

## RcloneView über Docker installieren

### Schritt 1 — Docker aus dem App Central installieren

1. Öffnen Sie **App Central** in Ihrer ADM-Weboberfläche.
2. Suchen Sie nach **Portainer** (oder Docker-CE, falls verfügbar).
3. Installieren und starten Sie die Portainer-App.

### Schritt 2 — RcloneView-Container bereitstellen

Öffnen Sie Portainer unter `http://your-nas-ip:9443` und erstellen Sie einen neuen Container, oder verwenden Sie SSH, um über die Kommandozeile bereitzustellen:

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

Wichtige Volume-Zuordnungen:

- `/volume1/Docker/rcloneview/config` — speichert Ihre rclone-Remote-Konfigurationen dauerhaft.
- `/volume1` — stellt Ihr Haupt-NAS-Volume für RcloneView-Backup-Vorgänge bereit.

### Schritt 3 — Auf die Weboberfläche zugreifen

Öffnen Sie Ihren Browser und navigieren Sie zu `http://your-nas-ip:5572`. Sie sollten das RcloneView-Dashboard sehen.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## Cloud-Remotes verbinden

Fügen Sie über die RcloneView-Oberfläche Ihre Cloud-Speicheranbieter hinzu:

### Gängige Einrichtungen für NAS-Backups

- **Backblaze B2** — kostengünstig für große NAS-Backups zu 6 $/TB/Monat.
- **Wasabi** — S3-kompatibler Speicher mit Pauschalpreis und ohne Ausgangsgebühren.
- **Google Drive** — wichtige Ordner zwischen NAS und Drive synchronisieren.
- **Amazon S3** — Haltbarkeit auf Unternehmensniveau mit flexiblen Speicherklassen.
- **SFTP** — Backup auf einen Remote-Server oder ein zweites NAS.

Jedes Remote wird einmal konfiguriert und dauerhaft gespeichert. Der Einrichtungsassistent führt Sie durch die Authentifizierung für jeden Anbieter — API-Schlüssel für S3-kompatible Dienste, OAuth für Google Drive und OneDrive.

## Automatisierte Backups planen

Der Hauptnutzen der Ausführung von RcloneView auf Ihrem NAS liegt in automatisierten, unbeaufsichtigten Backups. So richten Sie das ein:

### Einen Backup-Job erstellen

1. Öffnen Sie den zweigeteilten Explorer in RcloneView.
2. Setzen Sie den linken Bereich auf Ihren lokalen NAS-Pfad (z. B. `/data/volume1/Photos`).
3. Setzen Sie den rechten Bereich auf Ihr Cloud-Remote (z. B. `backblaze-b2:nas-backup/photos/`).
4. Wählen Sie **Sync**, um den NAS-Ordner mit der Cloud zu spiegeln, oder **Copy**, um neue Dateien hinzuzufügen, ohne Löschungen zu übernehmen.
5. Speichern Sie den Vorgang als benannten Job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### Den Job planen

Legen Sie fest, dass der Job automatisch ausgeführt wird:

- **Täglich um 2:00 Uhr** — Backups während Zeiten geringer Auslastung, um die NAS-Leistung nicht zu beeinträchtigen.
- **Wöchentliche Vollsynchronisation** — eine umfassende Synchronisation am Wochenende, wenn der Bandbreitenbedarf am geringsten ist.
- **Auf Abruf** — ein Backup manuell auslösen, bevor größere Änderungen vorgenommen werden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## Cloud-Speicher einbinden

RcloneView kann Cloud-Speicher als lokalen Pfad auf Ihrem NAS einbinden, sodass Remote-Dateien so zugänglich sind, als befänden sie sich auf einer lokalen Festplatte. Das ist nützlich für:

- **Erweiterung der NAS-Kapazität** durch Cloud-Speicher.
- **Zugriff auf archivierte Dateien**, ohne sie manuell herunterzuladen.
- **Streaming von Medien** aus dem Cloud-Speicher über Ihre NAS-Medien-Apps.

Um FUSE-Mounts in Docker zu aktivieren, fügen Sie Ihrem Container diese Flags hinzu:

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

Verwenden Sie dann den Mount Manager von RcloneView, um jedes beliebige Remote in einen lokalen Pfad einzubinden.

## Übertragungen überwachen

Während Backup-Jobs laufen, zeigt die Übertragungsüberwachung von RcloneView den Fortschritt in Echtzeit:

- Dateien, die aktuell übertragen werden
- Übertragungsgeschwindigkeit und ETA
- Fehler und Wiederholungsversuche
- Anzahl abgeschlossener Dateien

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

Überprüfen Sie den Job-Verlauf, um zu bestätigen, dass geplante Backups erfolgreich abgeschlossen wurden. Schlägt ein Job fehl (Netzwerkausfall, abgelaufene Anmeldedaten), protokolliert RcloneView den Fehler zur Fehlerbehebung.

## Best Practices für ASUSTOR-NAS-Backups

- **Beginnen Sie mit Ihren wichtigsten Daten** — zuerst Fotos, Dokumente und Datenbanken. Mediatheken können folgen.
- **Verwenden Sie Bandbreitenbegrenzungen** während der Geschäftszeiten, um Ihre Internetverbindung nicht zu überlasten: setzen Sie `--bwlimit 10M` in den Job-Optionen.
- **Aktivieren Sie Versionierung** in Ihrem Cloud-Speicher, um sich vor Ransomware oder versehentlichem Überschreiben zu schützen.
- **Sichern Sie Ihre rclone-Konfiguration** — das Verzeichnis `/config/rclone` enthält Ihre Cloud-Zugangsdaten. Kopieren Sie es an einen zweiten Ort.
- **Überwachen Sie die Festplattengesundheit** — Cloud-Backup nützt nichts, wenn die NAS-Festplatte ausfällt, bevor das Backup läuft. Nutzen Sie die Benachrichtigungen des ADM Storage Manager.

## Erste Schritte

1. **Portainer installieren** aus dem ASUSTOR App Central.
2. **Den RcloneView-Docker-Container bereitstellen** mit den oben gezeigten Volume-Zuordnungen.
3. **Ihre Cloud-Remotes hinzufügen** — Backblaze B2, S3, Google Drive oder jeden anderen unterstützten Anbieter.
4. **Backup-Jobs für Ihre wichtigsten NAS-Freigaben erstellen und planen**.
5. **Wöchentlich den Job-Verlauf prüfen**, um sicherzustellen, dass alles reibungslos läuft.

Ihr ASUSTOR NAS schützt Ihre Daten bereits lokal mit RAID. Das Hinzufügen von automatisiertem Cloud-Backup mit RcloneView bietet Ihnen echten Offsite-Schutz — und läuft von selbst.

---

**Verwandte Anleitungen:**

- [Cloud-zu-NAS-Brücke: Backup auf Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [RcloneView auf TrueNAS ausführen](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [Tägliche Cloud-Backups automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
