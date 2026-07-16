---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "Fehlende Dateien nach Cloud-Synchronisation mit RcloneView beheben"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie fehlende Dateien nach Cloud-Synchronisationsvorgängen. Lernen Sie häufige Ursachen wie Filterregeln, Sonderzeichen und Probleme mit der Synchronisationsrichtung in RcloneView kennen."
keywords:
  - rcloneview
  - fehlende Dateien nach Synchronisation
  - Cloud-Synchronisation fehlende Dateien
  - rclone Dateien werden nicht synchronisiert
  - Cloud-Übertragung fehlende Daten
  - falsche Synchronisationsrichtung
  - google docs werden nicht synchronisiert
  - rclone Filterregeln
  - Probleme bei der Cloud-Dateiübertragung
  - Cloud-Synchronisation beheben
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fehlende Dateien nach Cloud-Synchronisation mit RcloneView beheben

> Sie haben einen Synchronisationsjob ausgeführt und alles sah erfolgreich aus, aber am Ziel fehlen einige Dateien. **RcloneView** bietet die Werkzeuge, um genau zu diagnostizieren, was passiert ist, und ein erneutes Auftreten zu verhindern.

Fehlende Dateien nach einer Cloud-Synchronisation zu entdecken, ist eine der stressigsten Situationen im Umgang mit Cloud-Dateien. Die Übertragung wurde ohne Fehler abgeschlossen, das Job-Protokoll zeigt Erfolg an, aber wenn Sie das Ziel prüfen, sind bestimmte Dateien nirgends zu finden. Bevor Sie in Panik geraten: Dies wird fast immer durch ein logisches Konfigurationsproblem verursacht, nicht durch Datenverlust.

Diese Anleitung führt durch die häufigsten Gründe, warum Dateien nach Synchronisationsvorgängen fehlen, und zeigt, wie Sie die Vergleichs-, Protokollierungs- und Dry-Run-Funktionen von RcloneView nutzen, um das Problem zu identifizieren und zu beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Filterregeln schließen Dateien stillschweigend aus

Die häufigste Ursache für fehlende Dateien sind Filterregeln, die sie ausschließen. Wenn Sie `--exclude`-, `--include`- oder `--filter`-Regeln eingerichtet und vergessen haben, werden Dateien, die diesen Mustern entsprechen, bei der Synchronisation stillschweigend übersprungen. Rclone warnt Sie in seiner Standardausgabe nicht vor ausgeschlossenen Dateien.

**Häufige Filterfehler:**

- Eine `--include "*.jpg"`-Regel, die versehentlich alle Nicht-JPG-Dateien ausschließt, einschließlich Dokumente und Tabellenkalkulationen.
- Eine `--exclude "*.tmp"`-Regel, die auch Dateien erfasst, die `.tmp` mitten im Namen enthalten.
- Ein `--min-size`-Flag, das kleine, aber wichtige Dateien wie Konfigurationsdateien oder Textnotizen überspringt.
- Übrig gebliebene Filterregeln aus einem vorherigen Job, die beim Erstellen eines neuen Jobs übernommen wurden.

**So diagnostizieren Sie das Problem:** Überprüfen Sie in RcloneView die Flags und Filter, die an Ihren Synchronisationsjob angehängt sind. Entfernen Sie vorübergehend alle Filter und führen Sie einen Vergleich durch, um zu sehen, ob die fehlenden Dateien erscheinen. Fügen Sie dann Filter nacheinander wieder hinzu, um herauszufinden, welche Regel sie ausschließt.

## Verwechslung der Synchronisationsrichtung

Der Unterschied zwischen `sync`, `copy` und `move` ist entscheidend, und die falsche Wahl kann dazu führen, dass Dateien verschwinden.

- **Sync** gleicht das Ziel an die Quelle an. Dateien am Ziel, die nicht in der Quelle existieren, werden **gelöscht**. Wenn Sie versehentlich in die falsche Richtung synchronisieren (Ziel zu Quelle statt Quelle zu Ziel), könnten Ihre Quelldateien entfernt werden.
- **Copy** fügt dem Ziel nur Dateien hinzu. Es löscht nie etwas. Dies ist die sicherere Option, wenn Sie unsicher sind.
- **Move** überträgt Dateien und löscht sie anschließend aus der Quelle.

Wenn nach einer Synchronisation Dateien in der Quelle fehlen, haben Sie möglicherweise eine Synchronisation in die falsche Richtung ausgeführt. Prüfen Sie vor der Ausführung immer, welches Panel die Quelle und welches das Ziel im Zwei-Panel-Explorer von RcloneView ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google Docs, Sheets und Slides

Google-Workspace-Dokumente (Docs, Sheets, Slides, Drawings) sind keine herkömmlichen Dateien. Es handelt sich um Cloud-native Objekte, die in ihrem nativen Zustand keine feste Größe oder ein herunterladbares Binärformat haben. Beim Synchronisieren von Google Drive konvertiert rclone sie in ein herunterladbares Format (z. B. `.docx`, `.xlsx`, `.pdf`), aber dieses Verhalten hängt von Ihrer Konfiguration ab.

**Häufige Probleme:**

- Google Docs erscheinen als Dateien mit null Byte oder werden ganz übersprungen, wenn das Exportformat nicht konfiguriert ist.
- Dateien mit sehr langen Namen können bei manchen Betriebssystemen beim Export fehlschlagen.
- Verknüpfungen in Google Drive sind keine echten Dateien und werden nicht übertragen.

**So beheben Sie das Problem:** Prüfen Sie, ob Ihr Google-Drive-Remote mit den passenden Exportformaten konfiguriert ist. Wenn Sie Google Docs am Ziel nicht benötigen, schließen Sie sie alternativ explizit aus, um Verwirrung über fehlende Dateien zu vermeiden.

## Groß-/Kleinschreibung und Sonderzeichen

Verschiedene Cloud-Anbieter behandeln Dateinamen unterschiedlich. Eine Datei mit dem Namen `Report.PDF` und `report.pdf` kann unter Windows und OneDrive als dieselbe Datei behandelt werden, unter Linux und S3 jedoch als zwei verschiedene Dateien. Während der Synchronisation kann eine die andere stillschweigend überschreiben.

**Problematische Zeichen sind unter anderem:**

- Nachgestellte Leerzeichen oder Punkte (von OneDrive und Windows abgelehnt).
- Doppelpunkte, Fragezeichen und spitze Klammern (unter Windows ungültig).
- Emoji oder Unicode-Zeichen (manche Anbieter behandeln diese inkonsistent).
- Sehr lange Dateipfade, die unter Windows 260 Zeichen überschreiten.

**So diagnostizieren Sie das Problem:** Verwenden Sie die Vergleichsfunktion von RcloneView, um Dateien nebeneinander aufzulisten. Achten Sie auf Dateien, die in der Quelle existieren, aber am Ziel fehlen oder anders benannt sind. Rclone-Protokolle können Umbenennungswarnungen für Dateien mit inkompatiblen Zeichen anzeigen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Dateigrößenbeschränkungen und Anbieterbeschränkungen

Manche Cloud-Anbieter legen maximale Dateigrößen fest, die dazu führen können, dass große Dateien stillschweigend übersprungen werden:

- Google Drive: 5 TB pro Datei.
- OneDrive: 250 GB pro Datei.
- Dropbox: 2 GB pro Datei über die API (350 GB über den Desktop-Client).
- MEGA: Dateigrößenbeschränkungen variieren je nach Kontotyp.
- Viele S3-kompatible Anbieter: 5 TB pro Objekt, wobei einzelne Upload-Teile auf 5 GB begrenzt sind.

Wenn Sie eine Datei synchronisieren, die das Limit des Ziel-Anbieters überschreitet, schlägt die Übertragung fehl. Prüfen Sie Ihren Job-Verlauf in RcloneView auf Fehlereinträge im Zusammenhang mit übergroßen Dateien.

## Vergleich verwenden, um fehlende Dateien zu finden

Die Ordnervergleichsfunktion von RcloneView ist der schnellste Weg, um genau zu identifizieren, welche Dateien fehlen. Öffnen Sie die Quelle auf der einen Seite und das Ziel auf der anderen, und führen Sie dann einen Vergleich durch. Das Tool hebt Dateien hervor, die nur in der Quelle, nur im Ziel existieren oder sich zwischen beiden unterscheiden.

Dies liefert Ihnen eine eindeutige Liste dessen, was nicht übertragen wurde, die Sie dann einzeln untersuchen können. Achten Sie auf Muster -- befinden sich alle fehlenden Dateien in einem Ordner? Haben sie dieselbe Dateierweiterung? Liegen sie alle unter einer bestimmten Größe? Diese Muster weisen auf die Grundursache hin.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Einen Dry Run vor der Synchronisation ausführen

Der beste Weg, fehlende Dateien zu vermeiden, ist vor jeder Synchronisation einen Dry Run durchzuführen. Ein Dry Run simuliert den Vorgang, ohne tatsächlich Dateien zu übertragen oder zu löschen. Er zeigt Ihnen genau, was rclone tun würde, einschließlich welche Dateien übersprungen, übertragen oder gelöscht würden.

In RcloneView können Sie beim Konfigurieren eines Synchronisationsjobs das Flag `--dry-run` verwenden. Überprüfen Sie die Ausgabe sorgfältig. Wenn Dateien, die Sie zur Übertragung erwarten, nicht aufgeführt sind, untersuchen Sie Ihre Filterregeln und Konfiguration, bevor Sie die eigentliche Synchronisation ausführen.

## Präventionsstrategien

So vermeiden Sie fehlende Dateien bei zukünftigen Synchronisationen:

1. **Immer zuerst vergleichen.** Nutzen Sie die Vergleichsfunktion von RcloneView vor der Synchronisation, um den aktuellen Zustand beider Speicherorte zu verstehen.
2. **Copy statt Sync verwenden**, wenn am Ziel nichts gelöscht werden soll.
3. **Mit Dry Runs beginnen.** Fügen Sie `--dry-run` hinzu, um neue Synchronisationskonfigurationen zu testen, bevor Sie sie übernehmen.
4. **Dokumentieren Sie Ihre Filterregeln.** Führen Sie Buch darüber, was jede Filterregel bewirkt und warum sie existiert.
5. **Job-Verlauf prüfen.** Überprüfen Sie nach jeder Synchronisation den Job-Verlauf in RcloneView, um zu bestätigen, dass die erwartete Anzahl an Dateien übertragen wurde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Zwei-Panel-Explorer mit Ihren Quell- und Ziel-Remotes und führen Sie dann einen Ordnervergleich durch.
3. Überprüfen Sie Ihre Synchronisationsjob-Konfiguration auf Filterregeln, Synchronisationsrichtung und Flags, die Dateien ausschließen könnten.
4. Verwenden Sie `--dry-run`, um den Synchronisationsvorgang vor der Ausführung zu überprüfen.

Fehlende Dateien nach der Synchronisation sind fast immer ein Konfigurationsproblem, kein Datenverlust. Eine methodische Diagnose mit den Vergleichs- und Protokollierungswerkzeugen von RcloneView findet die Ursache jedes Mal.

---

**Weitere Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Remote-Speicher sofort synchronisieren](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
