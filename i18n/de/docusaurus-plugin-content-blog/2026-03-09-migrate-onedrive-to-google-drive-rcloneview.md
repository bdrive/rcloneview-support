---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "Von OneDrive zu Google Drive migrieren — Schritt-für-Schritt-Übertragungsanleitung mit RcloneView"
authors:
  - tayson
description: "Wechsel von Microsoft 365 zu Google Workspace? Erfahren Sie, wie Sie alle Dateien von OneDrive zu Google Drive migrieren und dabei die Ordnerstruktur mit RcloneView erhalten."
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - onedrive
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Von OneDrive zu Google Drive migrieren — Schritt-für-Schritt-Übertragungsanleitung mit RcloneView

> Ihr Unternehmen wechselt zu Google Workspace. Jetzt müssen Sie Terabytes an OneDrive-Dateien zu Google Drive verschieben, ohne den Workflow Ihres Teams zu stören. So gelingt es richtig.

Egal ob Sie die Produktivitäts-Suite wechseln, Cloud-Konten konsolidieren oder ein paralleles Backup pflegen — die Migration von OneDrive zu Google Drive erfordert sorgfältige Planung. RcloneView übernimmt die Schwerstarbeit — eine direkte Cloud-zu-Cloud-Übertragung, die Ihre Ordnerstruktur erhält und Unterschiede im Dateiformat automatisch behandelt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum nicht einfach herunterladen und wieder hochladen?

Der manuelle Ansatz — von OneDrive herunterladen und dann zu Google Drive hochladen — hat erhebliche Nachteile:

- **Erfordert lokalen Speicherplatz** für den gesamten Datensatz.
- **Doppelte Zeit** — Download + Upload statt direkter Übertragung.
- **Keine inkrementellen Updates** — Änderungen während der Übertragung gehen verloren.
- **Scheitert bei großen Datensätzen** — Browser-Uploads schlagen bei Dateien über wenigen GB fehl.

RcloneView überträgt direkt zwischen den Clouds und benötigt dafür nur Bandbreite — keinen lokalen Speicher.

## Migrationsschritte

### 1) Beide Konten verbinden

Fügen Sie OneDrive und Google Drive als Remotes in RcloneView hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) Bewerten und planen

Durchsuchen Sie beide Clouds nebeneinander:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

Prüfen Sie vor der Migration:

- **Gesamtgröße** — Wie viele Daten müssen verschoben werden?
- **Dateitypen** — Office-Dokumente werden automatisch konvertiert (siehe unten).
- **Freigegebene Ordner** — Für freigegebene OneDrive-Elemente ist eine separate Behandlung nötig.
- **Pfadlängen** — Google Drive hat ein Limit von 400 Zeichen pro Pfad.

### 3) Umgang mit Dateiformaten

Bei der Übertragung können Office-Dokumente unverändert zu Google Drive hochgeladen werden. Google Drive unterstützt das native Öffnen von `.docx`, `.xlsx` und `.pptx`. Optional können Sie sie nach der Migration in google-native Formate umwandeln.

| OneDrive-Format | Umgang bei Google Drive |
|-----------------|---------------------|
| .docx | Öffnet nativ oder konvertiert zu Google Docs |
| .xlsx | Öffnet nativ oder konvertiert zu Google Sheets |
| .pptx | Öffnet nativ oder konvertiert zu Google Slides |
| Bilder, PDFs | Werden unverändert übertragen |

### 4) Migration ausführen

Erstellen Sie einen **Copy**-Job von OneDrive zu Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

Verwenden Sie **Copy** statt Sync — dabei werden nur Dateien hinzugefügt, niemals am Ziel gelöscht.

### 5) Fortschritt überwachen

Verfolgen Sie die Migration in Echtzeit:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) Überprüfen

Vergleichen Sie beide Seiten nach der Migration:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Umgang mit Sonderfällen

### SharePoint-Dokumentbibliotheken

SharePoint-Bibliotheken sind getrennt vom persönlichen OneDrive. Fügen Sie SharePoint als separaten Remote in RcloneView hinzu, um Team-Sites zu migrieren.

### OneDrive for Business vs. privat

Bei der Migration von OneDrive for Business unterscheidet sich die OAuth-Einrichtung vom privaten OneDrive. RcloneView führt Sie durch beide Authentifizierungsabläufe.

### Große Migrationen (500 GB+)

Für sehr große Datensätze:

- **In Batches migrieren** — Beginnen Sie mit kritischen Ordnern, dann sekundäre Daten.
- **Filterregeln nutzen** — Priorisieren Sie nach Dateityp oder Datum.
- **Außerhalb der Geschäftszeiten planen** — Führen Sie die Übertragung nachts/am Wochenende aus, um Rate-Limits zu vermeiden.
- **Wiederholungsversuche aktivieren** — Die Retry-Funktion von v1.3 behandelt vorübergehende Fehler.

### Während der Übergangsphase

Halten Sie beide Clouds synchron, während Ihr Team umsteigt:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Planen Sie tägliche Synchronisationen von OneDrive → Google Drive, bis alle umgestiegen sind.

## Checkliste nach der Migration

1. **Dateianzahl überprüfen** — Der Ordnervergleich bestätigt, dass alle Dateien übertragen wurden.
2. **Dateizugriff testen** — Öffnen Sie wichtige Dokumente in Google Drive.
3. **Freigaben aktualisieren** — Geben Sie Ordner auf Google Drive erneut für Teammitglieder frei.
4. **App-Integrationen aktualisieren** — Verweisen Sie Skripte, Tools und Workflows auf Google Drive.
5. **OneDrive aktiv halten** — Behalten Sie das alte Konto 30 Tage als Sicherheitsnetz.
6. **Außerbetriebnahme** — Kündigen Sie OneDrive-Abonnements erst, nachdem alles bestätigt funktioniert.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **OneDrive und Google Drive** als Remotes hinzufügen.
3. **Einen Copy-Job ausführen**, um Dateien zu übertragen.
4. **Mit dem Ordnervergleich überprüfen**.
5. **Inkrementelle Synchronisationen planen** während der Übergangsphase.

Migration ist stressig genug, ohne sich Sorgen um fehlende Dateien machen zu müssen. Lassen Sie RcloneView die Übertragung übernehmen, während Sie sich auf den Übergangsplan konzentrieren.

---

**Weiterführende Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Von Google Drive zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
