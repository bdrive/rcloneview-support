---
slug: fix-google-photos-sync-errors-rcloneview
title: "Google-Photos-Synchronisationsfehler beheben — leere Bibliothek, 403 Forbidden und Schreibschutz-Probleme in RcloneView"
authors:
  - steve
description: "Häufige Google-Photos-Fehler in RcloneView beheben — ein Remote, das leer wirkt oder keine Änderungen meldet, 403 Forbidden durch eine eingestellte Client-ID oder Rate Limits, Fehler wegen schreibgeschütztem Ziel und fehlende Dateien nach dem Upload."
keywords:
  - Google Photos Synchronisationsfehler RcloneView
  - Google Photos leerer Ordner rclone
  - Google Photos 403 Client-ID
  - Google-Photos-Backup-Probleme beheben
  - Google Photos rclone Fehler
  - Google Photos API Kontingentfehler
  - RcloneView Google Photos Fehlerbehebung
  - Google Photos Upload-Probleme
  - Google Photos Backup Lösung
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google-Photos-Synchronisationsfehler beheben — leere Bibliothek, 403 Forbidden und Schreibschutz-Probleme in RcloneView

> Google Photos hat API-Einschränkungen, die kein anderer Cloud-Speicher kennt. Die meisten „Fehler“, auf die Nutzer in RcloneView stoßen, sind schlicht Googles Regeln — hier erfahren Sie, was jeder einzelne bedeutet und was Sie tun können.

Google Photos ist für die private Fotospeicherung beliebt, aber das rclone-Backend verhält sich ganz anders als bei einem gewöhnlichen Cloud-Speicher. Seit dem 31. März 2025 zeigt die Google-Photos-API einer Drittanbieter-App nur noch die Medien, die diese App selbst hochgeladen hat; vorhandene Medien lassen sich über die API weder ändern noch löschen; und die Rate Limits sind strenger als bei Google Drive. Diese Einschränkungen zu verstehen ist der erste Schritt, um Fehler bei der Arbeit mit Google Photos in RcloneView zu beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Das Remote wirkt leer — „No Changes Detected“ oder 0 kopierte Dateien

Die mit Abstand häufigste Meldung: Sie fügen ein Google-Photos-Remote hinzu, öffnen es im Explorer und finden dort kaum etwas — oder ein Copy-Job auf Ihr NAS ist in Sekunden fertig, ohne dass eine Datei übertragen wurde. Es ist nichts defekt. Am 31. März 2025 hat Google die API-Scopes entfernt, mit denen Drittanbieter-Apps die gesamte Bibliothek eines Nutzers lesen konnten. In Googles Worten können Apps „nun nur noch Alben und Medienobjekte auflisten, durchsuchen und abrufen, die von Ihrer App erstellt wurden“. RcloneView sieht daher nur die Fotos, die über RcloneView oder rclone hochgeladen wurden; Uploads vom Smartphone und aus dem Web sind unsichtbar, und geteilte Alben liefern `403 PERMISSION_DENIED`.

RcloneView 1.6 und neuer erklärt diese Einschränkung direkt in der App, sobald Sie ein Google-Photos-Remote öffnen, sodass es nicht mehr wie ein leeres Konto aussieht.

Was zu tun ist: Exportieren Sie Ihre vorhandene Bibliothek mit **Google Takeout** — am besten per Zustellung in Google Drive — und lassen Sie RcloneView den Export auf Ihre externe Festplatte, Ihr NAS oder einen anderen Cloud-Speicher kopieren. Die vollständige Anleitung finden Sie unter [Google Photos auf eine externe Festplatte oder ein NAS sichern](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview).

## Fehler: „403 Forbidden“ — eingestellte Client-ID oder Rate Limit

Ein `403` von Google Photos hat zwei verschiedene Ursachen. Im **Log-Tab** von RcloneView erkennen Sie, welche vorliegt.

**403 beim Verbinden oder Auflisten — die gemeinsame Client-ID.** Die in rclone eingebaute Google-Photos-Client-ID wird im Laufe des Jahres 2026 eingestellt, und Google verlangt nun, dass sich jeder Nutzer mit einer eigenen OAuth-Client-ID verbindet. Wenn sich das Remote nicht verbinden lässt oder jede Anfrage abgelehnt wird, ist das die Ursache. RcloneView 1.6 und neuer führt Sie im Verbindungsassistenten durch das Erstellen einer eigenen Client-ID, wenn keine Verbindung zustande kommt; die [Google-Photos-Dokumentation](https://rclone.org/googlephotos/#making-your-own-client-id) von rclone beschreibt dieselben Schritte in der Google Cloud Console.

**403 mit `userRateLimitExceeded` bei Uploads — das Schreibkontingent.** Google setzt pro Nutzer tägliche Limits für Foto-Uploads über die API, und beim Massen-Upload tausender Fotos können Sie diese mitten in der Übertragung erreichen. Verringern Sie die Parallelität der Übertragung — öffnen Sie dazu die erweiterten Einstellungen Ihres Jobs und setzen Sie die Anzahl der Datei-Übertragungen auf 2 oder 3 — und aktivieren Sie **Retry on failure** (5 oder mehr Wiederholungen), damit RcloneView gedrosselte Uploads erneut versucht, statt den gesamten Job scheitern zu lassen. Verteilen Sie sehr große Uploads bei Bedarf auf mehrere Tage.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload-Rate von Google Photos in RcloneView überwachen" class="img-large img-center" />

## Fehler: „Can't Copy — Destination is Read Only“

Wenn Sie Fehler wegen eines schreibgeschützten Ziels sehen, versuchen Sie, bidirektional zu synchronisieren oder Fotos zu überschreiben, die bereits in Google Photos vorhanden sind. Die Google-Photos-API erlaubt es nicht, vorhandene Medien über rclone zu ändern oder zu löschen, und RcloneView respektiert diese Einschränkung.

Die Lösung: Konfigurieren Sie den Job als einseitigen **Copy** (nicht Sync) von Ihrer Quelle nach Google Photos. So werden neue Dateien hochgeladen, ohne dass auf der Google-Photos-Seite etwas gelöscht oder überschrieben wird. Wenn Sie Fotos löschen möchten, tun Sie das in der Google-Photos-Web-App oder der mobilen App.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Copy-Job nach Google Photos in RcloneView konfigurieren" class="img-large img-center" />

## Fehlende Dateien nach dem Upload

Google Photos ordnet Medien nach Album und Erstellungsdatum, nicht nach Ihrer ursprünglichen Ordnerstruktur. Wenn Sie eine Ordnerhierarchie nach Google Photos kopieren, landen die Dateien zwar in der Bibliothek, behalten aber nicht die erwarteten Ordner — die API bewahrt die Ordnerstruktur nicht. Beachten Sie außerdem, dass über die API zurückgeladene Fotos nicht in Originalauflösung vorliegen und die EXIF-Standortdaten verlieren.

Um Ihre Ordnerorganisation zu behalten, kopieren Sie stattdessen nach Google Drive, wo Unterverzeichnisse exakt wie in Ihrer Quelle erhalten bleiben. Für ein echtes Foto-Archiv sind Backblaze B2 oder Amazon S3 mit einer Kopie Ihres ursprünglichen Ordnerbaums die zuverlässigere Langzeitlösung.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf nach einem Google-Photos-Job prüfen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Wenn das Remote leer wirkt, liegt das an Googles API-Einschränkung — exportieren Sie Ihre vorhandene Bibliothek mit Google Takeout und kopieren Sie den Export mit RcloneView.
3. Erstellen Sie bei 403 beim Verbinden Ihre eigene OAuth-Client-ID; verringern Sie bei `userRateLimitExceeded` die Parallelität auf 2–3 und erhöhen Sie die Anzahl der Wiederholungen.
4. Verwenden Sie beim Hochladen nach Google Photos den Job-Typ **Copy**, nicht Sync.

Wenn Sie wissen, auf welche von Googles Regeln Sie gestoßen sind, können Sie RcloneView gleich beim ersten Mal richtig konfigurieren und frustrierende Wiederholungszyklen vermeiden.

---

**Weiterführende Anleitungen:**

- [Google Photos auf eine externe Festplatte oder ein NAS sichern — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Fehler bei Google-Drive-Kontingent und Rate Limit beheben](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Remote per browserbasierter Anmeldung (OAuth) hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
