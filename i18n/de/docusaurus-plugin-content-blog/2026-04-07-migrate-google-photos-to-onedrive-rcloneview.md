---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "Google Fotos mit RcloneView zu OneDrive migrieren"
authors:
  - tayson
description: "Schritt-für-Schritt-Anleitung zur Migration Ihrer Google Fotos-Bibliothek zu OneDrive mit RcloneView. Behandelt Lesezugriff, Ordnerstruktur, Umgang mit Metadaten und Organisation."
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - RcloneView
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - guide
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Fotos mit RcloneView zu OneDrive migrieren

> Ihre Fotobibliothek ist eine der persönlichsten und unersetzlichsten Sammlungen, die Sie besitzen — sie zwischen Clouds zu verschieben erfordert Sorgfalt. **RcloneView** bietet Ihnen eine visuelle, schrittweise Methode, um Ihre gesamte Google Fotos-Bibliothek zu OneDrive zu migrieren, ohne Ihre Organisationsstruktur zu verlieren.

Google Fotos war über Jahre hinweg dank der Integration mit Android und Googles Ökosystem eine Standardwahl für die Fotospeicherung. Doch die Umstände ändern sich. Vielleicht wechseln Sie zu Microsoft 365, Ihr Google-Speicher wird knapp, oder Sie bevorzugen die engere Integration von OneDrive mit Windows. Was auch der Grund ist, die Migration einer Fotobibliothek mit Tausenden (oder Zehntausenden) von Bildern und Videos erfordert einen zuverlässigen Prozess.

Die Herausforderung besteht darin, dass Google Fotos kein einfaches Dateisystem ist. Es organisiert Fotos nach Datum, Alben und Metadaten statt nach traditionellen Ordnern. Rclone löst dies, indem es Google Fotos als strukturiertes Verzeichnis darstellt, und RcloneView bietet Ihnen eine visuelle Oberfläche, um alles zu durchsuchen, auszuwählen und zu OneDrive zu übertragen — inklusive Überwachung und Verifizierung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Fotos als Remote verstehen

Bevor Sie mit der Migration beginnen, ist es wichtig zu verstehen, wie Google Fotos als Cloud-Remote in RcloneView funktioniert.

### Lesezugriff (Read-Only)

Die API von Google Fotos bietet **nur Lesezugriff** auf Ihre Bibliothek. Das bedeutet:

- Sie können alle Ihre Fotos und Videos über RcloneView **durchsuchen und herunterladen**.
- Sie können Dateien in Google Fotos über die API **nicht löschen, umbenennen oder ändern**.
- Sie können über diesen Remote **keine neuen Dateien** zu Google Fotos hochladen.

Dies ist eine Einschränkung der Google API, keine Einschränkung von RcloneView. Für Migrationszwecke ist der Lesezugriff ausreichend — Sie ziehen Daten aus Google Fotos heraus, statt hineinzuschreiben.

### Ordnerstruktur

Google Fotos präsentiert Ihre Bibliothek über zwei Hauptverzeichnistypen:

- **`media/by-year/`** — Alle Fotos, organisiert nach Jahr (z. B. `media/by-year/2024/`, `media/by-year/2025/`). Dies enthält jedes Foto Ihrer Bibliothek, chronologisch organisiert.
- **`media/by-month/`** — Dieselben Fotos, organisiert nach Jahr und Monat (z. B. `media/by-month/2024/2024-06/`).
- **`album/`** — Ihre manuell erstellten Alben. Jedes Album erscheint als Ordner mit seinen Fotos.

Fotos, die in Alben erscheinen, erscheinen auch in den datumsbasierten Verzeichnissen. Das bedeutet, es kann zu scheinbaren Duplikaten kommen — dasselbe Foto wird sowohl unter `media/by-year/2024/` als auch unter `album/Vacation/` aufgeführt. Bei der Migration sollten Sie einen Organisationsansatz wählen, um das doppelte Kopieren von Dateien zu vermeiden.

## Beide Remotes einrichten

### Google Fotos hinzufügen

1. Öffnen Sie RcloneView und klicken Sie auf **+ Neuer Remote**.
2. Wählen Sie **Google Fotos** aus der Anbieterliste.
3. Folgen Sie dem OAuth-Ablauf — Sie werden zu Google weitergeleitet, um den Zugriff zu autorisieren. Gewähren Sie Leseberechtigung für Ihre Fotobibliothek.
4. Benennen Sie den Remote (z. B. `MyGooglePhotos`) und speichern Sie.

### OneDrive hinzufügen

1. Klicken Sie erneut auf **+ Neuer Remote**.
2. Wählen Sie **Microsoft OneDrive** aus der Anbieterliste.
3. Folgen Sie dem OAuth-Ablauf, um den Zugriff auf Ihr OneDrive-Konto zu autorisieren.
4. Wählen Sie den Laufwerkstyp (Personal, Business oder SharePoint).
5. Benennen Sie den Remote (z. B. `MyOneDrive`) und speichern Sie.

Beide Remotes erscheinen jetzt im Explorer von RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Ihre Ordnerstruktur auf OneDrive planen

Bevor Sie mit der Übertragung beginnen, entscheiden Sie, wie Ihre Fotos auf OneDrive organisiert sein sollen. Sie haben mehrere Optionen:

### Option 1: Die jahresbasierte Struktur spiegeln

Kopieren Sie das Verzeichnis `media/by-year/` von Google Fotos in einen `Photos/`-Ordner auf OneDrive. Ihre OneDrive-Struktur sieht dann so aus:

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

Dies ist der einfachste Ansatz und funktioniert gut mit den integrierten Fotofunktionen von OneDrive, die Bilder in einer Zeitleistenansicht anzeigen können.

### Option 2: Monatsbasierte Organisation verwenden

Kopieren Sie `media/by-month/` für eine detailliertere Organisation:

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

Dies ist hilfreich, wenn Sie eine große Bibliothek haben und schnell Fotos aus einem bestimmten Monat finden möchten.

### Option 3: Albenbasierte Organisation

Wenn Sie Ihre Google Fotos akribisch in Alben organisiert haben, kopieren Sie das Verzeichnis `album/`:

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

Beachten Sie, dass bei der albenbasierten Migration Fotos fehlen können, die nie zu einem Album hinzugefügt wurden. Für eine vollständige Migration kombinieren Sie dies mit einem der datumsbasierten Ansätze.

### Empfohlener Ansatz

Für die meisten Nutzer ist **Option 1 (jahresbasiert) der beste Ausgangspunkt**. Sie erfasst jedes Foto in einer sauberen, chronologischen Struktur. Wenn Alben für Sie wichtig sind, führen Sie einen zweiten Durchlauf durch, bei dem nur das Verzeichnis `album/` in einen separaten Ordner auf OneDrive kopiert wird.

## Die Migration ausführen

Nachdem beide Remotes eingerichtet und Ihre Ordnerstrategie festgelegt ist, starten Sie die Übertragung.

### Schritt 1: Durchsuchen und Vorschau

Öffnen Sie Google Fotos in einem Explorer-Bereich und OneDrive im anderen. Navigieren Sie durch die Google Fotos-Verzeichnisstruktur, um zu bestätigen, dass Sie Ihre Fotos nach Jahr, Monat und Album organisiert sehen können.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Schritt 2: Zielordner erstellen

Erstellen Sie im OneDrive-Bereich einen `Photos`-Ordner (oder einen Namen Ihrer Wahl), der als Migrationsziel dient.

### Schritt 3: Mit einem Testdurchlauf beginnen

Bevor Sie Ihre gesamte Bibliothek migrieren, testen Sie mit einem einzelnen Jahr:

1. Navigieren Sie im Google Fotos-Bereich zu `media/by-year/2025/` (oder einem beliebigen aktuellen Jahr mit einer überschaubaren Anzahl an Fotos).
2. Ziehen Sie den Ordner in das `Photos/`-Verzeichnis auf OneDrive.
3. Überwachen Sie die Übertragung, um zu bestätigen, dass die Fotos korrekt ankommen.
4. Öffnen Sie einige übertragene Fotos auf OneDrive, um zu prüfen, ob sie korrekt angezeigt werden und ihre Qualität behalten.

### Schritt 4: Die vollständige Migration ausführen

Sobald der Test erfolgreich war, übertragen Sie die restlichen Jahre:

1. Erstellen Sie einen **Kopier**-Job von `media/by-year/` auf Google Fotos zu `Photos/` auf OneDrive.
2. Führen Sie zuerst einen **Testlauf (Dry Run)** aus, um die Gesamtanzahl der Dateien und das geschätzte Übertragungsvolumen zu sehen.
3. Führen Sie den Kopierjob aus.

Bei großen Bibliotheken (10.000+ Fotos) kann dies mehrere Stunden dauern. RcloneView zeigt den Fortschritt in Echtzeit an.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### Schritt 5: Alben migrieren (optional)

Wenn Sie Ihre Albumstruktur ebenfalls auf OneDrive haben möchten:

1. Erstellen Sie einen zweiten Kopierjob von `album/` auf Google Fotos zu `Photos/Albums/` auf OneDrive.
2. Führen Sie den Kopiervorgang aus. Beachten Sie, dass dies Duplikate von Fotos erzeugt, die bereits in den jahresbasierten Ordnern vorhanden sind. Wenn Speicherplatz ein Anliegen ist, sollten Sie diesen Schritt möglicherweise überspringen oder nur bestimmte Alben selektiv kopieren.

## Metadaten und Dateiformate verstehen

### Was übertragen wird

- **Fotos und Videos in Originalauflösung** — Dateien werden in ihrer ursprünglichen Qualität übertragen, nicht in den komprimierten "Speicherplatzsparer"-Versionen.
- **Dateinamen** — Die ursprünglichen Kameradateinamen bleiben erhalten (z. B. `IMG_20240615_143022.jpg`).
- **Dateidaten** — Erstellungs- und Änderungszeitstempel bleiben erhalten, sofern das Format dies unterstützt.

### Was nicht übertragen wird

- **Google Fotos-Metadaten** — Beschreibungen, Tags, Gesichtserkennungsdaten und Standortinformationen, die in der Datenbank von Google Fotos gespeichert sind, werden nicht übertragen. Diese Metadaten sind proprietär für Googles Plattform.
- **In Google Fotos vorgenommene Bearbeitungen** — Wenn Sie ein Foto in Google Fotos bearbeitet haben (zugeschnitten, gefiltert usw.), ist über die API nur die ursprüngliche, unbearbeitete Version verfügbar. Die bearbeitete Version ist nicht zugänglich.
- **Kontext geteilter Alben** — Fotos, die andere mit Ihnen geteilt haben, sind je nach den Freigabeeinstellungen von Google möglicherweise zugänglich oder nicht.

### EXIF-Daten

Die gute Nachricht ist, dass die meisten wichtigen Metadaten direkt als EXIF-Daten in den Fotodateien eingebettet sind. Dazu gehören:

- **Datum und Uhrzeit** der Aufnahme.
- **Kameramodell** und Einstellungen (Blende, Verschlusszeit, ISO).
- **GPS-Koordinaten** (falls der Standort beim Aufnehmen des Fotos aktiviert war).

Diese EXIF-Daten werden mit der Datei übertragen und sind von OneDrive, Windows Fotos und praktisch jeder Foto-Verwaltungs-App lesbar.

## Die Migration überprüfen

Nach Abschluss der Übertragung überprüfen Sie, ob alles korrekt angekommen ist.

### Ordnervergleich

Verwenden Sie die **Vergleich**-Funktion von RcloneView:

1. Öffnen Sie Google Fotos in einem Bereich und OneDrive im anderen.
2. Navigieren Sie zu übereinstimmenden Verzeichnissen (z. B. `media/by-year/2024/` und `Photos/2024/`).
3. Führen Sie einen Vergleich durch, um Dateien zu identifizieren, die auf Google Fotos vorhanden, aber auf OneDrive nicht vorhanden sind.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### Fotos stichprobenartig prüfen

Öffnen Sie mehrere übertragene Fotos auf OneDrive, um zu bestätigen:

- Bilder werden korrekt angezeigt und sind nicht beschädigt.
- Videos lassen sich einwandfrei abspielen.
- Dateigrößen entsprechen den Erwartungen (ein 5-MB-JPEG auf Google Fotos sollte auf OneDrive ungefähr 5 MB groß sein).

### Jobverlauf überprüfen

Prüfen Sie das **Jobverlauf**-Panel auf Fehler während der Übertragung. Häufige Probleme sind:

- **Übersprungene Dateien** aufgrund nicht unterstützter Zeichen in Dateinamen.
- **Zeitüberschreitungsfehler** bei sehr großen Videodateien.
- **Ratenbegrenzung** durch Googles API (selten, aber möglich bei sehr großen Bibliotheken).

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Tipps für eine reibungslose Migration

- **Führen Sie die Migration außerhalb der Stoßzeiten durch.** Große Fotobibliotheken können Stunden für die Übertragung benötigen. Ein Start über Nacht gibt dem Prozess ununterbrochene Zeit.
- **Nutzen Sie Zeitplanung für sehr große Bibliotheken.** Wenn Sie 50.000+ Fotos haben, erstellen Sie einen geplanten Job, der täglich läuft. Jeder Durchlauf setzt dort an, wo der letzte aufgehört hat, und die Migration wird über mehrere Tage abgeschlossen, ohne dass Sie sie ständig überwachen müssen.
- **Löschen Sie Google Fotos noch nicht.** Behalten Sie Ihre Google Fotos-Bibliothek intakt, bis Sie die OneDrive-Kopie vollständig verifiziert haben. Google Fotos ist über die API ohnehin nur lesbar, daher besteht kein Risiko einer versehentlichen Löschung durch RcloneView.
- **Prüfen Sie die OneDrive-Speicherlimits.** Stellen Sie sicher, dass Ihr OneDrive-Plan genügend Platz für Ihre gesamte Fotobibliothek bietet. Microsoft 365 Personal umfasst 1 TB, und Family-Pläne bieten bis zu 6 TB gemeinsam genutzten Speicher.
- **Ziehen Sie die Kamerarollen-Integration von OneDrive in Betracht.** Nach der Migration können Sie die mobile App von OneDrive so einstellen, dass neue Fotos automatisch hochgeladen werden. Dies schafft einen nahtlosen Übergang von Google Fotos für die Zukunft.
- **Achten Sie auf Ratenlimits der Google API.** Die Google Fotos API hat Nutzungskontingente. Wenn Sie an Ratenlimits stoßen, wiederholt RcloneView den Vorgang automatisch, aber die Übertragung kann sich vorübergehend verlangsamen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Verbinden Sie Google Fotos** über OAuth im Assistenten für neue Remotes (Lesezugriff).
3. **Verbinden Sie OneDrive** über OAuth.
4. **Durchsuchen, kopieren und verifizieren** — Ihre Fotoerinnerungen, sicher migriert.

Ihre Fotos sind unersetzlich. RcloneView stellt sicher, dass sie sicher auf OneDrive ankommen.

---

**Verwandte Anleitungen:**

- [OAuth-Online-Anmeldung hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
