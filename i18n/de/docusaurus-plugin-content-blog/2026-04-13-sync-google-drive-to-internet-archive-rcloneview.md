---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Google Drive mit Internet Archive synchronisieren — Digitale Langzeitarchivierung mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie mit RcloneView Google Drive-Dateien im Internet Archive archivieren, um eine langfristige digitale Aufbewahrung zu gewährleisten. Ideal für Forscher, Journalisten und Pädagogen."
keywords:
  - Google Drive Internet Archive Synchronisation
  - digitale Langzeitarchivierung RcloneView
  - Google Drive Dateien archivieren
  - Internet Archive rclone GUI
  - langfristiges Cloud-Backup
  - Datenarchivierung für Forscher
  - Google Drive Backup Internet Archive
  - RcloneView digitales Archiv
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Internet Archive synchronisieren — Digitale Langzeitarchivierung mit RcloneView

> Das Internet Archive bietet dauerhaften, kostenlosen Speicherplatz für digitale Inhalte — mit RcloneView können Sie Ihre Google Drive-Dateien ganz einfach dorthin übertragen, um sie langfristig zu bewahren.

Forscher, die Felddaten archivieren, Journalisten, die Quellmaterial sichern, und Pädagogen, die Kursunterlagen verwalten, stehen vor derselben Herausforderung: Google Drive ist praktisch für die aktive Arbeit, aber nicht für die dauerhafte Aufbewahrung konzipiert. Das Internet Archive (archive.org) hingegen schon. Es speichert Inhalte unbegrenzt und macht sie langfristig öffentlich (oder privat) zugänglich. RcloneView verbindet beide Anbieter und ermöglicht es Ihnen, Google Drive-Inhalte mit dem Internet Archive zu synchronisieren, ohne die Kommandozeile zu benutzen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive verbinden

Öffnen Sie RcloneView und gehen Sie zum **Remote Manager**. Klicken Sie auf **New Remote** und wählen Sie **Google Drive**. RcloneView öffnet Ihren Browser für die OAuth-Authentifizierung — melden Sie sich mit Ihrem Google-Konto an und erteilen Sie den Zugriff. Nach der Autorisierung erscheint der Remote im Remote Manager. Öffnen Sie ihn, um zu bestätigen, dass Ihre Drive-Dateien sichtbar sind.

Wenn Sie ein **Shared Drive** archivieren möchten, konfigurieren Sie den Remote so, dass er auf das spezifische Shared-Drive-Stammverzeichnis statt auf My Drive verweist. Prüfen Sie dazu die erweiterten Einstellungen des Remotes in RcloneView auf die Team-Drive-Option.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Internet Archive verbinden

Klicken Sie erneut im **Remote Manager** auf **New Remote** und wählen Sie **Internet Archive**. Das Internet Archive verwendet entweder E-Mail/Passwort-Anmeldedaten (Ihren archive.org-Kontologin) oder S3-kompatible API-Schlüssel, die Sie in Ihren Kontoeinstellungen auf archive.org finden. Geben Sie den Access Key und den Secret Key (S3-API-Schlüssel für Internet Archive) im Konfigurationsformular ein und speichern Sie.

Öffnen Sie den Internet-Archive-Remote, um die Verbindung zu überprüfen. Ihre vorhandenen Objekte auf archive.org erscheinen als Einträge auf oberster Ebene.

## Den Archivierungs-Job konfigurieren

Gehen Sie zu **Jobs** und klicken Sie auf **New Job**. Legen Sie Google Drive als Quelle fest — wählen Sie den konkreten Ordner mit den zu bewahrenden Daten aus. Legen Sie den Internet-Archive-Remote als Ziel fest und geben Sie die Item-Kennung an, unter der die Dateien landen sollen.

Konfigurieren Sie in Schritt 2 des Job-Assistenten Optionen, die für die Archivierung geeignet sind:

- Aktivieren Sie die **Checksummen-Verifizierung** — Datenintegrität ist für die Aufbewahrung entscheidend
- Legen Sie eine moderate Anzahl gleichzeitiger Übertragungen (2–4) fest, um die Ingest-Pipeline des Internet Archive nicht zu überlasten
- Aktivieren Sie zunächst **Dry Run**, um genau zu überprüfen, was hochgeladen wird

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## Die Archivierungs-Synchronisation ausführen

Nachdem Sie die Dry-Run-Ausgabe im Log-Tab überprüft haben, deaktivieren Sie Dry Run und führen Sie den vollständigen Job aus. RcloneView überträgt Dateien direkt von Google Drive zum Internet Archive. Je nach Dateigröße und der Ingest-Warteschlange des Archivs können große Uploads einige Zeit in Anspruch nehmen — das Echtzeit-Fortschrittspanel hält Sie auf dem Laufenden.

Für kontinuierliche Archivierungs-Workflows erstellen Sie einen wiederkehrenden Job (PLUS-Lizenz für die Zeitplanung erforderlich), damit neue Dateien, die einem Google Drive-Ordner hinzugefügt werden, automatisch nach einem Zeitplan archiviert werden — zum Beispiel wöchentlich.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## Anwendungsfälle

- **Wissenschaftliche Forscher**: Archivierung von Datensätzen und Arbeitsdokumenten nach Projektabschluss
- **Journalisten**: dauerhafte Bewahrung von Quellmaterial und Interviewaufnahmen
- **Pädagogen**: Archivierung von Kursinhalten und digitalen Lernmaterialien
- **Non-Profit-Organisationen**: Bewahrung von Förderanträgen, Spenderdaten und institutioneller Geschichte

Die Dauerhaftigkeit des Internet Archive unterscheidet es von jedem kommerziellen Cloud-Dienst — dort hinterlegte Inhalte sind darauf ausgelegt, einzelne Organisationen oder Abonnements zu überdauern.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Google Drive per OAuth im **Remote Manager** verbinden.
3. Internet Archive mit Ihren S3-API-Anmeldedaten aus den archive.org-Kontoeinstellungen verbinden.
4. Einen Synchronisationsjob von Google Drive zu Internet Archive erstellen; zuerst Dry Run ausführen, dann die vollständige Archivierung.

RcloneView bietet Archivaren und Forschern einen zuverlässigen, nachvollziehbaren Workflow, um Google Drive-Inhalte dauerhaft zu hinterlegen.

---

**Weiterführende Anleitungen:**

- [Cloud-zu-Cloud-Migration mit RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Checksummen-verifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
