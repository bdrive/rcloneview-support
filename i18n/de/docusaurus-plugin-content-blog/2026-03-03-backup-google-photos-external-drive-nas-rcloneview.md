---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Google Fotos auf externer Festplatte oder NAS sichern — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google Fotos erlaubt Drittanbieter-Apps nicht mehr, Ihre bestehende Bibliothek herunterzuladen. Exportieren Sie sie mit Google Takeout nach Google Drive und kopieren Sie den Export dann mit RcloneView auf eine externe Festplatte, ein NAS oder einen anderen Cloud-Speicher — und sichern Sie neue Fotos mit RcloneView Mobile."
keywords:
  - Google Fotos Backup
  - Google Fotos auf externe Festplatte
  - Google Fotos auf NAS
  - Google Takeout auf NAS
  - Google Takeout Backup
  - Google Fotos rclone
  - Einschränkung der Google Fotos API
  - Google Fotos lokal speichern
  - Google Fotos Export
  - RcloneView Mobile Foto-Backup
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Fotos auf externer Festplatte oder NAS sichern — Google Takeout + RcloneView

> Seit dem 31. März 2025 dürfen Drittanbieter-Apps — einschließlich rclone und RcloneView — in Google Fotos nur noch die Fotos sehen, die sie selbst hochgeladen haben. Der zuverlässige Weg, Ihre bestehende Bibliothek herauszuholen, ist Google Takeout; ab dort übernimmt RcloneView.

Google Fotos enthält über Jahre gesammelte, unersetzliche Fotos und Videos, doch Speicherkontingente, Kontosperrungen und Richtlinienänderungen können Ihnen jederzeit den Zugriff darauf nehmen. Viele Anleitungen — auch eine frühere Version dieser — empfahlen, Google Fotos mit einem Synchronisationswerkzeug zu verbinden und alles herunterzuladen. Das funktioniert nicht mehr: Google hat diese Tür 2025 geschlossen.

Diese Anleitung zeigt den Weg, der heute funktioniert. Exportieren Sie Ihre Bibliothek mit **Google Takeout** direkt nach Google Drive, lassen Sie **RcloneView** den Export auf eine externe Festplatte, ein NAS oder einen anderen Cloud-Speicher kopieren und nutzen Sie **RcloneView Mobile**, damit neue Fotos künftig nicht mehr den Umweg über Google Fotos nehmen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was sich geändert hat: Einschränkungen der Google Fotos API (2025)

Am 31. März 2025 hat Google die Scopes für die gesamte Bibliothek aus der Photos Library API entfernt. In Googles eigenen Worten können Drittanbieter-Apps „nur noch Alben und Medienelemente auflisten, durchsuchen und abrufen, die von Ihrer App erstellt wurden". Aufrufe für geteilte Alben liefern `403 PERMISSION_DENIED`.

Das bedeutet, wenn Sie in RcloneView ein **Google Fotos**-Remote hinzufügen:

- **Das Remote wirkt fast leer.** Es zeigt nur Fotos, die über RcloneView oder rclone hochgeladen wurden. Uploads vom Smartphone, Uploads über das Web und alles andere in Ihrer Bibliothek sind für die API unsichtbar, sodass ein Copy-Job „keine Änderungen" meldet oder null Dateien kopiert.
- **Das ist kein Verbindungsproblem.** RcloneView 1.6 und neuer erklärt die Einschränkung direkt in der App, wenn Sie ein Google Fotos-Remote öffnen, statt ein scheinbar leeres Konto anzuzeigen.
- **Geteilte Alben sind überhaupt nicht zugänglich.**
- **Sie benötigen eine eigene OAuth-Client-ID.** Die gemeinsame Google Fotos-Client-ID von rclone wird im Laufe des Jahres 2026 eingestellt. Wenn keine Verbindung hergestellt werden kann, führt Sie der Verbindungsassistent von RcloneView durch das Erstellen einer eigenen ID.

Googles offiziell unterstützter Weg, eine bestehende Bibliothek zu exportieren, ist **Google Takeout** — dort beginnt also das Backup.

## Schritt 1: Bibliothek mit Google Takeout exportieren

1. Öffnen Sie [takeout.google.com](https://takeout.google.com) und melden Sie sich mit dem Konto an, dem die Fotos gehören.
2. Klicken Sie auf **Alle abwählen** und aktivieren Sie nur **Google Fotos**. Mit **Alle Fotoalben inbegriffen** können Sie den Export auf bestimmte Alben oder Jahre beschränken, wenn Sie eine große Bibliothek in mehrere Teile aufteilen möchten.
3. Wählen Sie unter **Ziel** die Option **Zu Drive hinzufügen**. Google legt den Export in einem Ordner `Takeout` in Ihrem Google Drive ab, auf den RcloneView direkt zugreifen kann. Dropbox, OneDrive und Box stehen ebenfalls zur Auswahl — RcloneView unterstützt alle drei — und **Downloadlink per E-Mail senden** funktioniert, wenn Sie lieber von Ihrem Computer aus kopieren.
4. Wählen Sie den Archivtyp (`.zip`) und die Größe (1 GB bis 50 GB). Größere Archive bedeuten weniger Dateien, die Sie handhaben müssen.
5. Klicken Sie auf **Export erstellen**. Google benachrichtigt Sie per E-Mail, sobald der Export bereit ist; bei einer großen Bibliothek kann das Stunden oder sogar Tage dauern.

Gut zu wissen, bevor Sie beginnen:

- Jedes Foto und jedes Video kommt in Originalqualität an, zusammen mit einer `.json`-Metadatendatei, die Aufnahmedatum, Beschreibung und Standort enthält.
- Ein Export, der zu Google Drive hinzugefügt wird, zählt zu Ihrem Google-Speicherplatz, bis Sie ihn löschen. Stellen Sie also sicher, dass Drive genug Platz hat — oder exportieren Sie in Etappen.
- Takeout ist ein einmaliger Export ohne inkrementellen Modus. Schritt 4 zeigt, wie Sie künftige Fotos sichern, ohne den Export zu wiederholen.

## Schritt 2: Google Drive in RcloneView hinzufügen

1. Öffnen Sie RcloneView und klicken Sie im Remote Manager auf **Add Remote**.
2. Wählen Sie **Google Drive** und schließen Sie die [browserbasierte OAuth-Anmeldung](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) ab.
3. Öffnen Sie das Remote im [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) und navigieren Sie zum Ordner `Takeout`. Jeder Export ist eine eigene `.zip`-Datei (bei größeren Bibliotheken auch mehrere).

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Google Drive-Remote mit geöffnetem Takeout-Ordner im RcloneView Explorer" class="img-large img-center" />

## Schritt 3: Export an das Backup-Ziel kopieren

RcloneView kopiert die Archive unverändert — es entpackt sie nicht —, daher entpacken Sie sie nach Abschluss des Kopiervorgangs einmalig auf dem Zielrechner.

### Externe Festplatte

1. Schließen Sie die Festplatte an und notieren Sie ihren Pfad (`E:\` unter Windows, `/Volumes/...` unter macOS, `/media/...` unter Linux).
2. Erstellen Sie einen [Copy-Job](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs): **Source** = der Ordner `Takeout` auf Ihrem Google Drive-Remote, **Destination** = ein Ordner auf der Festplatte.
3. Führen Sie den Job aus und entpacken Sie anschließend die Archive auf der Festplatte.

Verwenden Sie **Copy**, nicht Sync: Ein Copy-Job löscht am Ziel niemals etwas.

### Synology NAS

RcloneView [erkennt Synology-NAS-Geräte](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer) in Ihrem Netzwerk automatisch, sodass das NAS ohne jede Konfiguration im Tab „Local" erscheint.

1. Erstellen Sie einen Copy-Job mit dem Ordner `Takeout` als Quelle und einem freigegebenen Ordner auf dem NAS (zum Beispiel `/photos/google-takeout`) als Ziel.
2. Führen Sie ihn aus und entpacken Sie die Archive anschließend auf dem NAS.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="In RcloneView automatisch erkanntes Synology NAS für den Google-Takeout-Kopiervorgang" class="img-large img-center" />

### Anderer Cloud-Speicher

Sie möchten lieber eine externe Kopie an einem anderen Standort? Richten Sie den Copy-Job auf ein beliebiges anderes Remote — Amazon S3, Backblaze B2, Wasabi, OneDrive und so weiter. RcloneView überträgt die Daten über seine rclone-Engine direkt von Cloud zu Cloud; die Archive müssen nicht über den Speicher Ihres Computers laufen.

### Prüfen und aufräumen

- Verwenden Sie den [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um zu bestätigen, dass jedes Archiv mit derselben Größe angekommen ist.
- Prüfen Sie den [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) auf das Übertragungsprotokoll.
- Sobald die Kopie verifiziert ist, löschen Sie den Ordner `Takeout` aus Google Drive, um den belegten Speicherplatz freizugeben.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison zwischen dem Takeout-Export und der NAS-Kopie" class="img-large img-center" />

## Schritt 4: Neue Fotos mit RcloneView Mobile gesichert halten

Takeout lässt sich nicht inkrementell ausführen, daher ist es keine Lösung, es jeden Monat zu wiederholen. Für die Fotos, die Sie ab jetzt aufnehmen, nehmen Sie Google Fotos aus der Kette:

- **RcloneView Mobile** (Android und iOS) sichert die Fotos und Videos Ihres Smartphones direkt in Ihren eigenen Cloud-Speicher — dieselben Remotes, die Sie auch in RcloneView auf dem Desktop verwenden, ohne zwischengeschalteten Server. Das Foto-Backup ist in RcloneView Plus enthalten. Laden Sie die App über die [Download-Seite](https://rcloneview.com/src/download.html) herunter.
- Auf dem Desktop spiegelt ein geplanter Copy-Job (eine PLUS-Funktion, siehe [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)) diesen Cloud-Ordner dann auf Ihr NAS oder Ihre externe Festplatte — täglich, wöchentlich, ganz nach Wunsch.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung des wiederkehrenden Kopiervorgangs vom Cloud-Fotoordner auf das NAS" class="img-large img-center" />

Ihr Smartphone, Ihr Cloud-Speicher und Ihr NAS bleiben im Gleichklang, ohne dass Google Fotos entscheidet, was Sie herunterladen dürfen.

## Wofür das Google Fotos-Remote weiterhin taugt

Das Remote ist nicht nutzlos — es funktioniert nur in die andere Richtung:

- **Hochladen.** Ein Copy-Job von Ihrem NAS oder Computer in den Ordner `upload` des Remotes oder in ein Album fügt diese Fotos Ihrer Google Fotos-Bibliothek hinzu, wo die Google Fotos-App sie wie jeden anderen Upload anzeigt.
- **Zurücklesen, was RcloneView hochgeladen hat.** Alles, was über RcloneView hochgeladen wurde, lässt sich auflisten und wieder herauskopieren.
- **Einschränkungen.** Downloads über die API erfolgen nicht in Originalauflösung und verlieren die EXIF-Standortdaten. Betrachten Sie Google Fotos daher als praktischen Viewer, nicht als Archiv. Außerdem benötigen Sie weiterhin Ihre eigene OAuth-Client-ID.

## Erste Schritte

1. **Exportieren** Sie Ihre Google Fotos-Bibliothek mit Google Takeout, zugestellt in Google Drive.
2. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux) und fügen Sie Google Drive als Remote hinzu.
3. **Erstellen Sie einen Copy-Job** vom Ordner `Takeout` auf Ihre externe Festplatte, Ihr NAS oder einen anderen Cloud-Speicher und entpacken Sie die Archive dort.
4. **Verifizieren** Sie die Kopie mit Folder Comparison und löschen Sie den Export aus Drive.
5. **Installieren Sie RcloneView Mobile**, damit neue Fotos direkt in Ihren eigenen Cloud-Speicher gelangen, und planen Sie einen Desktop-Job, der sie auf das NAS spiegelt.

Ihre Fotos sind unersetzlich. Ein Export plus ein geplanter Job ergibt eine Kopie, die Ihnen keine Richtlinienänderung mehr nehmen kann.

---

**Verwandte Anleitungen:**

- [Google Fotos-Synchronisationsfehler in RcloneView beheben](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [Remote per browserbasierter Anmeldung (OAuth) hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Remotes durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Automatische Erkennung und Verbindung von Synology NAS](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
