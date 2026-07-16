---
slug: migrate-onedrive-to-pcloud-rcloneview
title: "OneDrive mit RcloneView zu pCloud migrieren: Vollständige Anleitung"
authors:
  - tayson
description: "Vollständige Anleitung zur Migration von Dateien von OneDrive zu pCloud mit RcloneView. Remotes einrichten, Migration planen, Dateinamensprobleme lösen, Daten übertragen und Ergebnisse überprüfen."
keywords:
  - rcloneview
  - onedrive to pcloud
  - migrate onedrive
  - pcloud migration
  - cloud migration tool
  - onedrive alternative
  - rclone GUI
  - cloud-to-cloud transfer
  - pcloud file transfer
  - onedrive backup to pcloud
tags:
  - onedrive
  - pcloud
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive mit RcloneView zu pCloud migrieren: Vollständige Anleitung

> Wechseln Sie von OneDrive zu pCloud? **RcloneView** verbindet beide Dienste und übernimmt die gesamte Migration visuell — von der Planung über die Übertragung bis zur Überprüfung und laufenden Synchronisation.

OneDrive ist tief in das Microsoft-365-Ökosystem eingebettet und dient für viele Nutzer als Standard-Cloud-Speicher. Es gibt jedoch überzeugende Gründe für einen Wechsel zu pCloud: lebenslange Speicherpläne, die wiederkehrende Gebühren entfallen lassen, strenge Datenschutzrichtlinien unter Schweizer Gerichtsbarkeit und eine clientseitige Verschlüsselungsoption (pCloud Crypto) für sensible Dateien. Die Herausforderung besteht darin, Ihre Dateien zuverlässig und vollständig von einem Dienst zum anderen zu bringen.

RcloneView löst dies, indem es sich mit OneDrive und pCloud verbindet, beide nebeneinander anzeigt und Ihnen visuelle Werkzeuge zum Kopieren, Vergleichen und Planen von Übertragungen bietet. Keine Kommandozeilenarbeit, kein vorheriges Herunterladen von Dateien auf Ihren lokalen Rechner und kein Risiko, dass Dateien in verschachtelten Ordnern zurückbleiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum von OneDrive zu pCloud migrieren

Es gibt mehrere praktische Gründe, warum Nutzer sich für pCloud statt OneDrive entscheiden:

- **Lebenslange Speicherpläne**: pCloud bietet Einmalzahlungspläne (500 GB, 2 TB oder 10 TB), die monatliche oder jährliche Abogebühren entfallen lassen. Über mehrere Jahre hinweg können die Einsparungen im Vergleich zum Microsoft-365-Speicher erheblich sein.
- **Schweizer Datenschutz**: pCloud hat seinen Hauptsitz in der Schweiz und unterliegt Schweizer Datenschutzgesetzen, die zu den strengsten der Welt zählen. Für Nutzer, die sich um Datenschutz und behördliche Zugriffsanfragen sorgen, ist dies ein bedeutender Unterschied.
- **Clientseitige Verschlüsselung**: pCloud Crypto bietet Zero-Knowledge-Verschlüsselung für ausgewählte Ordner. Dateien werden vor dem Hochladen auf Ihrem Gerät verschlüsselt, und pCloud kann nicht auf die Inhalte zugreifen.
- **Einfachheit**: pCloud bietet eine fokussierte, übersichtliche Oberfläche für Dateispeicherung und -freigabe ohne die Komplexität des breiteren Microsoft-365-Ökosystems. Wenn Sie nur Speicher und Synchronisation benötigen, hält pCloud die Dinge unkompliziert.
- **Keine Anbieterbindung**: Wenn Sie Ihre Abhängigkeit vom Microsoft-Ökosystem reduzieren — etwa durch den Wechsel zu Google Workspace oder Open-Source-Alternativen — ist die Migration von Dateien aus OneDrive ein notwendiger Schritt.

## Schritt 1: Beide Remotes in RcloneView einrichten

Verbinden Sie OneDrive und pCloud, damit RcloneView auf beide zugreifen kann:

1. Öffnen Sie RcloneView und klicken Sie auf **+ New Remote**.
2. **OneDrive hinzufügen**: Wählen Sie OneDrive aus der Anbieterliste, schließen Sie die Microsoft-OAuth-Anmeldung ab, wählen Sie Ihren Kontotyp (Persönlich oder Geschäftlich) und benennen Sie den Remote (z. B. `MyOneDrive`).
3. **pCloud hinzufügen**: Wählen Sie pCloud aus der Anbieterliste, schließen Sie die OAuth-Autorisierung ab und benennen Sie den Remote (z. B. `MyPCloud`).
4. Beide Remotes erscheinen nun im Explorer und sind bereit zum Durchsuchen.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

Wenn Sie OneDrive for Business mit einer SharePoint-Bibliothek verwenden, achten Sie darauf, während des OAuth-Setups das richtige Laufwerk auszuwählen. RcloneView zeigt eine Liste der verfügbaren Laufwerke Ihres Microsoft-Kontos an.

## Schritt 2: Ihre Migrationsstrategie planen

Bevor Sie Dateien verschieben, nehmen Sie sich Zeit für die Planung:

- **OneDrive-Speicher prüfen**: Durchsuchen Sie Ihren OneDrive-Remote in RcloneView, um die vollständige Ordnerstruktur und Gesamtgröße zu überprüfen. Identifizieren Sie, was migriert werden muss und was archiviert oder gelöscht werden kann.
- **pCloud-Kapazität prüfen**: Stellen Sie sicher, dass Ihr pCloud-Plan genügend Speicherplatz bietet. Lebenslange Pläne sind fest auf 500 GB, 2 TB oder 10 TB begrenzt — eine vorübergehende Kapazitätserweiterung ist nicht möglich.
- **Ordnerstruktur festlegen**: Sie können Ihre OneDrive-Struktur exakt in pCloud nachbilden oder während der Migration neu organisieren. RcloneView erlaubt das Kopieren an jeden beliebigen Zielpfad.
- **Übertragungszeit einschätzen**: Große Migrationen (mehrere hundert Gigabyte) können je nach Internetverbindung und Anbieter-Ratenlimits Stunden oder sogar Tage dauern. Planen Sie entsprechend und erwägen Sie, Übertragungen über Nacht laufen zu lassen.
- **Vorgehen wählen**: Für eine einmalige vollständige Migration eignet sich ein einzelner Kopierjob. Für eine schrittweise Migration, bei der Sie OneDrive während der Übergangsphase weiter nutzen, planen Sie wiederkehrende Synchronisationsjobs.

## Schritt 3: OneDrive-spezifische Dateinamen- und Pfadprobleme lösen

OneDrive hat mehrere Verhaltensweisen bei Dateinamen und Pfaden, die während der Migration Probleme verursachen können. Klären Sie diese, bevor Sie mit dem Kopieren beginnen:

### Zeichenbeschränkungen

OneDrive erlaubt bestimmte Zeichen in Dateinamen, die pCloud möglicherweise anders behandelt. Umgekehrt schränkt OneDrive selbst Zeichen wie `"`, `*`, `:`, `<`, `>`, `?`, `\`, `|` sowie führende/nachgestellte Leerzeichen ein. Wenn Sie Dateien mit ungewöhnlichen Zeichen haben, überprüfen Sie diese vor der Übertragung.

### Pfadlängenbeschränkungen

OneDrive erzwingt eine Gesamtpfadlängenbeschränkung von 400 Zeichen. Wenn Sie tief verschachtelte Ordner mit langen Namen haben, sollten die vollständigen Pfade in pCloud innerhalb vernünftiger Grenzen bleiben. pCloud ist im Allgemeinen großzügiger, aber extrem lange Pfade können bei Sync-Clients auf bestimmten Betriebssystemen Probleme verursachen.

### OneNote-Notizbücher

OneNote-Notizbücher, die in OneDrive gespeichert sind, sind keine gewöhnlichen Dateien — sie sind strukturierte Daten, die über die OneNote-API zugänglich sind. Rclone und RcloneView sehen die Notizbuch-Ordner, können den OneNote-Inhalt aber nicht sinnvoll übertragen. Exportieren Sie Ihre Notizbücher separat aus OneNote (als PDF oder .onepkg) vor der Migration.

### Office-Dokumentformate

Word-, Excel- und PowerPoint-Dateien, die in OneDrive gespeichert sind, liegen in Standard-Office-Formaten (.docx, .xlsx, .pptx) vor und werden problemlos übertragen. Links zu freigegebenen Dokumenten, Co-Autoring-Sitzungen und Kommentare, die an die OneDrive-Freigabe gebunden sind, werden jedoch nicht auf pCloud übertragen.

### Files-On-Demand-Elemente

Wenn Sie die Files-On-Demand-Funktion von OneDrive verwenden, existieren manche Dateien auf Ihrem lokalen Rechner nur als Cloud-Platzhalter. Dies betrifft RcloneView nicht, da es sich direkt mit der OneDrive-Cloud-API verbindet, anstatt aus Ihrem lokalen Sync-Ordner zu lesen.

## Schritt 4: Ihre Dateien übertragen

Öffnen Sie OneDrive auf der einen Seite und pCloud auf der anderen Seite im RcloneView Explorer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Kleine Migrationen: Drag & Drop

Bei wenigen Ordnern oder einem begrenzten Datensatz ziehen Sie Dateien direkt von OneDrive zu pCloud. RcloneView übernimmt die Übertragung und zeigt den Fortschritt in Echtzeit an.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Große Migrationen: Kopierjob

Für Datensätze ab 50 GB erstellen Sie einen strukturierten Kopierjob:

1. Wählen Sie den OneDrive-Quellordner aus (oder das Stammverzeichnis für eine vollständige Migration).
2. Wählen Sie den pCloud-Zielordner aus.
3. Führen Sie zunächst einen **Dry Run** aus, um die Dateianzahl, Gesamtgröße und mögliche Probleme im Voraus zu sehen.
4. Führen Sie den Kopierjob aus und überwachen Sie den Fortschritt im Übertragungspanel.
5. RcloneView wiederholt automatisch fehlgeschlagene einzelne Dateien aufgrund von Zeitüberschreitungen oder Ratenlimits.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

Bei sehr großen Migrationen empfiehlt es sich, die Arbeit nach übergeordnetem Ordner in Stapel aufzuteilen. Das erleichtert die Fortschrittsverfolgung, das Fortsetzen nach Unterbrechungen und die unabhängige Überprüfung jedes Abschnitts.

## Schritt 5: Die Migration überprüfen

Bestätigen Sie nach Abschluss der Übertragung, dass alles korrekt angekommen ist:

1. Verwenden Sie die **Compare**-Funktion in RcloneView, um Ihre OneDrive-Quelle mit dem pCloud-Ziel zu vergleichen.
2. Überprüfen Sie die Vergleichsergebnisse auf fehlende, größenmäßig unterschiedliche oder nicht übereinstimmende Dateien.
3. Kopieren Sie fehlgeschlagene oder übersprungene Dateien erneut.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

Häufige Probleme, auf die Sie bei der Überprüfung achten sollten:

- **Zeitstempelunterschiede**: OneDrive und pCloud speichern Änderungszeiten möglicherweise mit unterschiedlicher Präzision. Geringfügige Zeitstempelabweichungen (im Bereich weniger Sekunden) sind normal und deuten nicht auf Datenverlust hin.
- **Leere Ordner**: Manche Sync-Tools überspringen leere Ordner. Prüfen Sie, ob Ihre Ordnerstruktur vollständig ist.
- **Große Dateien**: Wenn Dateien über 5 GB fehlgeschlagen sind, prüfen Sie die Upload-Limits Ihres pCloud-Plans und versuchen Sie es einzeln erneut.

## Schritt 6: Übergangs-Synchronisation planen

Wenn Ihr Team schrittweise migriert und beide Dienste während der Übergangsphase synchron bleiben müssen:

1. Erstellen Sie einen **Sync**-Job von OneDrive zu pCloud in RcloneView.
2. Öffnen Sie das **Job Scheduling**-Panel und konfigurieren Sie einen täglichen oder zweimal täglichen Zeitplan.
3. Neue Dateien, die zu OneDrive hinzugefügt werden, erscheinen bei der nächsten geplanten Ausführung in pCloud.
4. Sobald alle ihre Arbeitsabläufe auf pCloud umgestellt haben, deaktivieren Sie den Zeitplan und stellen die OneDrive-Synchronisation ein.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Achten Sie auf die Richtung der Synchronisation. Wenn manche Nutzer bereits pCloud verwenden, während andere noch auf OneDrive sind, ist eine einseitige Synchronisation (OneDrive zu pCloud) sicherer als ein bidirektionaler Ansatz. Sie können einen zweiten Job in umgekehrter Richtung erstellen, falls eine wirklich bidirektionale Synchronisation nötig ist, sollten dies aber sorgfältig koordinieren, um Konflikte zu vermeiden.

## Checkliste nach der Migration

Nachdem Sie die Migration überprüft haben und Ihr Team pCloud nutzt:

- **Freigabelinks neu erstellen**: OneDrive-Freigabelinks funktionieren nicht mehr, sobald Sie die Dateien entfernen. Erstellen Sie neue pCloud-Freigabelinks und verteilen Sie diese.
- **Anwendungsintegrationen aktualisieren**: Wenn Sie Apps oder Dienste haben, die auf OneDrive-Pfade verweisen (Backup-Tools, Medienserver, Automatisierungsskripte), aktualisieren Sie diese, damit sie auf pCloud verweisen.
- **pCloud-Sync-Client konfigurieren**: Installieren Sie den pCloud-Desktop-Client auf jedem Rechner, der lokalen Zugriff benötigt.
- **pCloud Crypto aktivieren**: Wenn Datenschutz ein Faktor bei Ihrer Migration war, richten Sie pCloud Crypto für sensible Ordner ein.
- **OneDrive vorübergehend aktiv halten**: Behalten Sie Ihr OneDrive-Abonnement 30 bis 60 Tage lang als Rollback-Sicherheitsnetz bei, bevor Sie es kündigen oder herabstufen.
- **OneNote-Notizbücher exportieren**: Falls noch nicht geschehen, exportieren Sie alle OneNote-Inhalte, die nicht Teil der Dateiübertragung waren.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Verbinden Sie OneDrive und pCloud** über deren OAuth-Autorisierungsabläufe.
3. **Planen, kopieren, überprüfen und terminieren** Sie Ihre Migration mit voller visueller Kontrolle bei jedem Schritt.

Von OneDrive zu pCloud — eine kontrollierte Migration, bei der keine Dateien zurückbleiben.

---

**Verwandte Anleitungen:**

- [pCloud mit RcloneView zu OneDrive migrieren](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Mühelose Übertragungen zwischen Google Drive und OneDrive](https://rcloneview.com/support/blog/Effortless-Transfers-Between-Google-Drive-&-OneDrive)
- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

<CloudSupportGrid />
