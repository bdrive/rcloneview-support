---
slug: fix-google-drive-sync-errors-rcloneview
title: "Google-Drive-Synchronisationsfehler beheben — fehlende Ordner, fehlgeschlagene Jobs und leere Listen mit RcloneView lösen"
authors:
  - steve
description: "Beheben Sie Google-Drive-Synchronisationsfehler wie fehlende freigegebene Ordner, leere Computers-Listen und fehlerhafte Jobs mit den Logs von RcloneView und Folder Compare."
keywords:
  - Google-Drive-Synchronisationsfehler beheben
  - Google Drive rclone Fehler
  - Google Drive Mit mir geteilt fehlt
  - Google Drive Computers-Ordner leer
  - Google-Drive-Synchronisation fehlgeschlagen
  - RcloneView Google Drive
  - Google-Docs-Synchronisationsfilter
  - Google-Drive-Fehlerbehebung
  - Cloud-Synchronisation Fehlerbehebung
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google-Drive-Synchronisationsfehler beheben — fehlende Ordner, fehlgeschlagene Jobs und leere Listen mit RcloneView lösen

> Viele Probleme bei der Google-Drive-Synchronisation gehen auf eine fehlende Einstellung, eine abgelaufene Anmeldung oder einen Filter zurück — und RcloneView hilft Ihnen, die Ursache zu finden.

Ein Google-Drive-Job, der mit Errored endet, oder ein Remote, das nicht die erwarteten Inhalte auflistet, ist selten ein Rätsel, sobald Sie die Logs einsehen können. Typische Ursachen sind freigegebene Ordner, die eine bestimmte Einstellung benötigen, gesicherte Computer, die eine Ordner-ID erfordern, und Google-Docs-Dateien, die sich anders verhalten als gewöhnliche Dateien. RcloneView bündelt Remote-Einstellungen, Job-Verlauf und Logs an einem Ort, sodass Sie die Ursache schnell eingrenzen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ordner, die nicht angezeigt werden

Wenn mit Ihnen geteilte Dateien in der Stammansicht fehlen, benötigt das Remote wahrscheinlich die Einstellung `shared_with_me = true`, die Ihnen die Ansicht Google Drive Shared with Me bereitstellt. Mit Drive for desktop gesicherte Computer sind ein separater Fall: Das Remote Google Drive Computers benötigt `root_folder_id`, gesetzt auf die ID des Computers.

Öffnen Sie den Remote Manager auf der Registerkarte Remote, bearbeiten Sie das Remote und prüfen Sie diese Werte. Laden Sie danach das Explorer-Panel mit F5 neu.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten der Google-Drive-Remote-Einstellungen im RcloneView Remote Manager" class="img-large img-center" />

## Abgelaufene Anmeldung und fehlgeschlagene Autorisierung

Google Drive verbindet sich über OAuth im Browser. Wenn jede Anfrage mit einem Autorisierungsfehler scheitert, bearbeiten Sie das Remote und melden Sie sich erneut an, damit ein neues Token ausgestellt wird. Das ist eine gängige Lösung, wenn ein zuvor funktionierendes Remote plötzlich ausfällt.

Bei Meldungen zu Kontingent und Ratenbegrenzung finden Sie unsere eigenen Anleitungen zu Google-Drive-Ratenbegrenzungen und Speicherkontingent. In beiden Fällen ist es ein vernünftiger erster Schritt, die Anzahl der Dateiübertragungen in Schritt 2 des Synchronisationsassistenten zu verringern.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History zeigt eine fehlerhafte Google-Drive-Synchronisation in RcloneView" class="img-large img-center" />

## Den genauen Fehler im Log lesen

Öffnen Sie den Job History, um zu sehen, ob ein Job sofort oder erst während der Ausführung fehlgeschlagen ist. Für Details gehen Sie zu Settings > Embedded Rclone, aktivieren die rclone-Protokollierung, setzen die Stufe auf DEBUG und klicken auf Restart Embedded Rclone. Reproduzieren Sie den Fehler und lesen Sie das Log: Es nennt die Datei und den Fehler. Im integrierten Terminal-Tab können Sie auch Befehle wie `rclone about "remote:"` ausführen, um die Verbindung zu prüfen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Google-Drive-Job nach der Korrektur der Einstellungen erneut ausführen" class="img-large img-center" />

## Google Docs behandeln und Ergebnisse überprüfen

Google Docs, Sheets und Slides sind keine gewöhnlichen Dateien und können nach einer Übertragung daher anders aussehen. Schritt 3 des Synchronisationsassistenten enthält einen vordefinierten Google-Docs-Filter, wenn Sie sie ausschließen möchten. Prüfen Sie nach einem erneuten Lauf beide Seiten mit Compare: Nur links, nur rechts und unterschiedliche Dateien zeigen, was noch Aufmerksamkeit braucht. Führen Sie vor jeder Synchronisation, die Dateien löschen könnte, einen Dry Run durch.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare überprüft eine Google-Drive-Synchronisation" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie das Remote auf `shared_with_me` oder `root_folder_id` und autorisieren Sie bei Bedarf neu.
3. Sehen Sie den Job History durch und aktivieren Sie DEBUG-Protokollierung für fehlerhafte Jobs.
4. Führen Sie einen Dry Run durch, wiederholen Sie den Job und überprüfen Sie das Ergebnis mit Folder Compare.

Da Einstellungen, Logs und Vergleich in einem Fenster liegen, wird aus einem fehlschlagenden Drive-Job eine kurze Checkliste.

---

**Weiterführende Anleitungen:**

- [Google-Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google-Drive-403-Ratenbegrenzungsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Überschrittenes Google-Drive-Speicherkontingent mit RcloneView beheben](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
