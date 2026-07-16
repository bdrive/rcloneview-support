---
slug: rcloneview-aws-ec2-cloud-sync
title: "RcloneView auf AWS EC2 für serverseitige Cloud-Synchronisation ausführen"
authors:
  - tayson
description: "Führen Sie RcloneView auf einer AWS-EC2-Instanz für serverseitige Cloud-Synchronisation, Migration und Backup aus. Greifen Sie remote auf die GUI zu und nutzen Sie die EC2-Bandbreite für schnelle Übertragungen."
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - platform
  - amazon-s3
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf AWS EC2 für serverseitige Cloud-Synchronisation ausführen

> RcloneView auf einer AWS-EC2-Instanz auszuführen, bietet Ihnen Server-Bandbreite für Cloud-Übertragungen, 24/7-Betrieb für geplante Jobs und erspart Ihnen, Daten über Ihren lokalen Rechner zu leiten.

Bei der Migration von Terabytes zwischen Cloud-Anbietern wird Ihre lokale Internetverbindung zum Flaschenhals. Eine AWS-EC2-Instanz mit Gigabit-Netzwerk kann Daten zwischen Cloud-Diensten mit Geschwindigkeiten übertragen, die Ihre Heim- oder Büroverbindung nicht erreichen kann. Der Betrieb von RcloneView auf EC2 bedeutet auch, dass Übertragungen 24/7 weiterlaufen, ohne dass ein lokaler Rechner eingeschaltet bleiben muss, und Daten, die zwischen S3 und anderen AWS-Diensten bewegt werden, verbleiben innerhalb des Amazon-Netzwerks — oft ohne Egress-Kosten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView auf EC2 ausführen

- **Geschwindigkeit**: EC2-Instanzen in AWS-Rechenzentren verfügen über Multi-Gigabit-Netzwerkverbindungen. Übertragungen zwischen S3 und externen Anbietern nutzen diese Bandbreite anstelle Ihrer lokalen Verbindung.
- **Kostenlose S3-Übertragung**: Die Datenübertragung zwischen EC2 und S3 innerhalb derselben Region ist kostenlos. Bei großen S3-zu-Cloud-Migrationen entfällt beim Betrieb auf EC2 der größte Kostenfaktor — lokaler Egress.
- **24/7-Betrieb**: Geplante Jobs laufen kontinuierlich, ohne dass ein Desktop-Rechner eingeschaltet bleiben muss. Die EC2-Instanz übernimmt nächtliche Backups, wöchentliche Migrationen und laufende Synchronisationsjobs.
- **Nähe zu den Daten**: Wenn sich Ihre Quelldaten in AWS befinden (S3, EBS, EFS), platziert der Betrieb von RcloneView auf EC2 diese in unmittelbarer Nähe der Daten für minimale Latenz.
- **Team-Zugriff**: Mehrere Teammitglieder können remote auf dieselbe RcloneView-Instanz zugreifen und Konfigurationen sowie Job-Historien gemeinsam nutzen.

## Einrichten einer EC2-Instanz

### Instanzauswahl

Für die meisten RcloneView-Workloads reicht eine kleine bis mittlere Instanz aus:

- **t3.medium** (2 vCPU, 4 GB RAM): Geeignet für leichte Synchronisationsjobs und kleine Migrationen.
- **m5.large** (2 vCPU, 8 GB RAM): Besser für gleichzeitige Übertragungen und große Dateioperationen.
- **c5.xlarge** (4 vCPU, 8 GB RAM): Für anspruchsvolle Migrations-Workloads mit vielen parallelen Übertragungen.

Wählen Sie eine Instanz in derselben Region wie Ihre S3-Buckets, um regionsübergreifende Übertragungskosten zu vermeiden.

### Betriebssystem

Starten Sie die Instanz mit Ubuntu Server LTS oder Amazon Linux 2. Beide unterstützen RcloneView problemlos. Installieren Sie eine leichtgewichtige Desktop-Umgebung für die GUI:

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

Aktivieren und starten Sie den RDP-Dienst, damit Sie remote auf die GUI zugreifen können.

### Konfiguration der Sicherheitsgruppe

Öffnen Sie die folgenden Ports in Ihrer EC2-Sicherheitsgruppe:

- **Port 3389** (RDP): Für den Remote-Desktop-Zugriff auf die GUI. Beschränken Sie diesen auf Ihre IP-Adresse.
- **Port 22** (SSH): Für den Terminalzugriff. Beschränken Sie diesen auf Ihre IP-Adresse.
- **Port 53682** (optional): Falls Sie OAuth-Abläufe von der EC2-Instanz aus ausführen müssen, ist dies der standardmäßige OAuth-Callback-Port von rclone. Alternativ können Sie eine Headless-OAuth-Konfiguration verwenden.

## Installation von RcloneView auf EC2

Verbinden Sie sich per SSH mit der Instanz und laden Sie RcloneView herunter:

1. Laden Sie das Linux-AppImage oder das .deb-Paket von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Machen Sie das AppImage ausführbar: `chmod +x RcloneView-*.AppImage`
3. Verbinden Sie sich per RDP und starten Sie RcloneView aus der Desktop-Umgebung.

## Headless-OAuth für Cloud-Anbieter

EC2-Instanzen verfügen in der Regel über keinen lokalen Browser für OAuth-Abläufe. Für Anbieter, die OAuth erfordern (Google Drive, OneDrive, Dropbox), verwenden Sie die Headless-Authentifizierung:

1. Führen Sie auf Ihrem lokalen Rechner `rclone authorize "drive"` (oder den entsprechenden Anbieter) aus, um den OAuth-Ablauf abzuschließen.
2. Kopieren Sie das resultierende Token.
3. Fügen Sie das Token auf der EC2-Instanz in die Remote-Konfiguration von RcloneView ein.

Alternativ können Sie RcloneView mit einer externen rclone-Instanz konfigurieren und das OAuth-Token über den RcloneView-Verbindungsmanager einrichten.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## Konfiguration des S3-Zugriffs

Verwenden Sie für den S3-Zugriff von EC2 aus eine IAM-Instanzrolle anstelle statischer Zugriffsschlüssel. Weisen Sie der EC2-Instanz eine IAM-Rolle mit S3-Berechtigungen zu, und rclone nutzt den Instance-Metadata-Service, um automatisch temporäre Anmeldeinformationen zu erhalten. Dies ist sicherer, als Zugriffsschlüssel auf der Instanz zu speichern.

Lassen Sie in der S3-Remote-Konfiguration von RcloneView die Felder für Zugriffsschlüssel und geheimen Schlüssel leer und stellen Sie die Umgebungsauthentifizierung so ein, dass das Instanzprofil verwendet wird.

## Große Migrationen durchführen

Mit der Bandbreite von EC2 werden große Migrationen, die auf einer Heimverbindung Tage dauern würden, in Stunden abgeschlossen:

- **1 TB von Google Drive zu S3**: Etwa 2-4 Stunden bei anhaltender Geschwindigkeit.
- **10 TB von S3 zu Backblaze B2**: Etwa 1-2 Tage, abhängig von der B2-API-Drosselung.
- **Regionsübergreifende S3-Replikation**: Nahezu Leitungsgeschwindigkeit innerhalb von AWS.

Die mehrfädigen Übertragungen von RcloneView nutzen die Netzwerkkapazität von EC2 voll aus. Setzen Sie transfers auf 16-32 und checkers auf 16, um bei größeren Instanzen den maximalen Durchsatz zu erzielen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## Serverseitige Jobs planen

Der integrierte Scheduler von RcloneView übernimmt wiederkehrende Jobs. Konfigurieren Sie nächtliche Backups von Google Drive zu S3, wöchentliche Synchronisation zwischen S3 und Backblaze B2 oder tägliche Replikation in eine DR-Region. Die EC2-Instanz führt diese Jobs unabhängig davon aus, ob Sie per RDP verbunden sind.

Lassen Sie die EC2-Instanz für geplante Jobs kontinuierlich laufen, oder verwenden Sie einen Start-/Stopp-Zeitplan (über AWS Instance Scheduler oder eine Lambda-Funktion), um die Instanz nur während der Backup-Fenster auszuführen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## Kostenmanagement

Die EC2-Kosten variieren je nach Instanztyp und Laufzeit:

- **t3.medium on-demand**: ~0,042 $/Stunde (30 $/Monat bei 24/7-Betrieb)
- **Spot-Instanzen**: Bis zu 90 % günstiger für unterbrechbare Workloads wie einmalige Migrationen.
- **Reservierte Instanzen**: Niedrigerer Stundensatz für langfristig laufende serverseitige Synchronisationseinrichtungen.

Verwenden Sie für einmalige Migrationen eine Spot-Instanz — starten Sie sie, führen Sie die Migration durch, überprüfen Sie das Ergebnis und beenden Sie die Instanz. Für laufende geplante Backups ist eine reservierte t3.small- oder t3.medium-Instanz kosteneffizient.

Denken Sie daran: Die S3-Datenübertragung innerhalb derselben Region von EC2 aus ist kostenlos. Die Datenübertragung ins Internet hinaus (z. B. zu Backblaze B2 oder Google Drive) verursacht die üblichen AWS-Egress-Gebühren.

## Erste Schritte

1. Starten Sie eine EC2-Instanz mit Ubuntu oder Amazon Linux und einer Desktop-Umgebung.
2. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) und installieren Sie es auf der Instanz.
3. Konfigurieren Sie Remotes mit Headless-OAuth für Cloud-Anbieter und IAM-Rollen für S3.
4. Führen Sie Migrationen durch und planen Sie Backup-Jobs, die die Bandbreite von EC2 nutzen.
5. Beenden oder stoppen Sie die Instanz, wenn sie nicht benötigt wird, um die Kosten zu kontrollieren.

Der Betrieb von RcloneView auf EC2 bietet Ihnen die Geschwindigkeit des AWS-Rechenzentrumsnetzwerks, den Komfort einer GUI zur Verwaltung von Übertragungen und 24/7-Betrieb für geplante Jobs — die ideale Einrichtung für groß angelegte Cloud-Migrationen und laufende serverseitige Synchronisation.

---

**Verwandte Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [OneDrive headless hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [Headless Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [Beispiel für externes rclone](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
