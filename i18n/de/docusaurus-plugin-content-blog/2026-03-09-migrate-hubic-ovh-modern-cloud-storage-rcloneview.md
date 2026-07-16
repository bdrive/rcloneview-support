---
slug: migrate-hubic-ovh-modern-cloud-storage-rcloneview
title: "Migrieren Sie von Hubic zu modernem Cloud-Speicher, bevor es zu spät ist – mit RcloneView"
authors: [tayson]
description: "Hubic wird eingestellt. Verlieren Sie nicht Ihre Daten. Erfahren Sie, wie Sie mit RcloneView sicher und schnell von Hubic zu Google Drive, OneDrive oder S3 migrieren."
keywords: ["hubic migration", "hubic alternative", "hubic zu google drive", "hubic daten exportieren", "hubic ovh migration", "hubic backup tool", "hubic rclone übertragung", "cloud-migration", "datenerhalt", "veralteter cloud-speicher"]
tags:
  - hubic
  - cloud-migration
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrieren Sie von Hubic zu modernem Cloud-Speicher, bevor es zu spät ist – mit RcloneView

Wenn Sie Hubic (den Consumer-Cloud-Speicher von OVH) genutzt haben, kennen Sie die schlechte Nachricht bereits: **Hubic befindet sich im Wartungsmodus und steuert auf die Abschaltung zu.** OVH nimmt keine neuen Konten mehr an, die Funktionen sind eingefroren, und der Dienst ist auf Zeit gestellt. Wenn Sie dort jahrelang Dateien gespeichert haben, ist das Ihr Weckruf.

Die gute Nachricht? Der Umzug weg von Hubic ist einfacher, als Sie denken. RcloneView macht das Verschieben Ihrer gesamten Hubic-Bibliothek zu Google Drive, OneDrive, AWS S3 oder jedem anderen modernen Cloud-Anbieter zu einem unkomplizierten, einmaligen Vorgang. Noch wichtiger: RcloneView verifiziert die Übertragung, damit Sie sicher sein können, dass nichts verloren geht.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Sie jetzt migrieren müssen

Hubic war einst solide – günstig, zuverlässig, beliebt in Europa. Doch OVHs Entscheidung, den Consumer-Cloud-Speicher einzustellen, bedeutet:

- **Keine neuen Funktionen**: Die App ist eingefroren; Fehler werden nicht mehr behoben
- **Unklarer Zeitplan**: OVH hat kein konkretes Abschaltdatum genannt, aber es wird kommen
- **Risiko von Datenverlust**: Wenn Hubic abrupt schließt, könnten Ihre Dateien unzugänglich oder gelöscht werden
- **Nachlassende Leistung**: Weniger Investitionen bedeuten langsamere Geschwindigkeiten und längere Ausfallzeiten
- **DSGVO-Implikationen**: Wenn Sie DSGVO-relevante Daten in Hubic verarbeiten, befinden Sie sich mit einem einzustellenden Dienst in einer rechtlich unsicheren Lage

Sie können es sich nicht leisten zu warten. Wenn Sie wichtige Dateien in Hubic haben, migrieren Sie diese innerhalb der nächsten Monate – nicht Jahre.

## Hubic mit RcloneView verbinden

Öffnen Sie RcloneView und fügen Sie einen neuen Remote hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote in RcloneView" class="img-large img-center" />

Wählen Sie Hubic aus der Anbieterliste. RcloneView öffnet ein Browserfenster, in dem Sie sich bei Ihrem Hubic-Konto authentifizieren. Dies erfolgt über OAuth, sodass Ihr Hubic-Passwort niemals mit RcloneView in Berührung kommt.

Nach der Authentifizierung erscheint Ihre gesamte Hubic-Bibliothek im Remote Explorer:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

Sie können nun Ihre Hubic-Dateien in der RcloneView-Oberfläche durchsuchen. Dies ist auch eine gute Gelegenheit zu prüfen, was tatsächlich gespeichert ist – Sie könnten überrascht sein, wie viel es ist.

## Ihre Daten vor der Migration bewerten

Bevor Sie mit der Synchronisation beginnen, nehmen Sie sich ein paar Minuten Zeit, um Ihre Hubic-Dateien in RcloneView zu durchsuchen. Prüfen Sie:
- **Gesamtgröße**: Wie viele Daten werden bewegt? (relevant für Übertragungsdauer und Ziel)
- **Dateitypen**: Gibt es beschädigte oder ungewöhnliche Dateien?
- **Organisation**: Ist Ihre Hubic-Ordnerstruktur sinnvoll, oder sollten Sie während der Migration umstrukturieren?

Der Remote Explorer macht dies anschaulich und unkompliziert. Wenn Hubic unübersichtlich ist, ist jetzt der richtige Zeitpunkt zum Aufräumen.

## Wählen Sie Ihr Migrationsziel

Wohin sollen Ihre Hubic-Dateien wandern? Berücksichtigen Sie Ihre Anforderungen:

- **Google Drive**: Am besten, wenn Sie Google Workspace nutzen und Suche sowie Freigabe benötigen
- **OneDrive**: Gut, wenn Sie auf Microsoft setzen und Office-Integration benötigen
- **AWS S3**: Am besten für kostensensitiven Langzeitspeicher oder Daten, die Haltbarkeitsgarantien benötigen
- **Mehrere Ziele**: Nutzen Sie RcloneView, um Hubic zu zwei Clouds zu synchronisieren, für Redundanz

In dieser Anleitung zeigen wir die Migration zu Google Drive, aber RcloneView unterstützt jedes Ziel.

## Einwegmigration: Hubic zu Google Drive

Richten Sie die Migration mit Hubic als Quelle und Google Drive als Ziel ein:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer" class="img-large img-center" />

Konfigurieren Sie die Synchronisation mit diesen Einstellungen:
- **Richtung**: Einweg (Hubic → Google Drive)
- **Überschreiben**: Auf "Vorhandene überspringen" setzen (falls Sie bereits einige Dateien migriert haben)
- **Verifizieren**: Aktiviert (RcloneView prüft Prüfsummen, um sicherzustellen, dass Dateien während der Übertragung nicht beschädigt wurden)
- **Quelle löschen**: Deaktiviert (wir bestätigen erst, bevor wir aus Hubic löschen)

Starten Sie die Synchronisation und lassen Sie sie laufen. Je nach Datenmenge kann dies Stunden oder Tage dauern. RcloneView erledigt dies effizient:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

Verfolgen Sie den Fortschritt in Echtzeit. Sie sehen:
- Übertragene Dateien / Gesamtzahl der Dateien
- Übertragene Daten / Gesamtdatenmenge
- Übertragungsgeschwindigkeit
- Geschätzte verbleibende Zeit
- Etwaige Fehler (selten, aber RcloneView protokolliert sie)

## Die Migration mit Prüfsummen verifizieren

Nach Abschluss der Übertragung benötigen Sie eine Verifizierung. RcloneView hat während der Übertragung automatisch Prüfsummen kontrolliert, aber machen wir einen abschließenden Vergleich:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders" class="img-large img-center" />

Öffnen Sie die Vergleichsfunktion von RcloneView mit Hubic links und Google Drive rechts. Diese zeigt:
- **Dateien in Hubic, aber NICHT in Google Drive**: Migration unvollständig; Synchronisation erneut ausführen
- **Dateien in beiden**: Erfolgreich migriert
- **Dateien in Google Drive, aber NICHT in Hubic**: Zusätzliche Dateien, die Sie nach Beginn der Migration erstellt haben

Wenn der Vergleich zeigt, dass alle Hubic-Dateien nun mit übereinstimmenden Größen und Prüfsummen in Google Drive vorhanden sind, können Sie sie gefahrlos aus Hubic löschen.

## Übertragungsverlauf und Protokolle überprüfen

Bevor Sie etwas Endgültiges tun, überprüfen Sie den Aufgabenverlauf:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

Dieser zeigt:
- Genaues Migrationsdatum und -uhrzeit
- Anzahl der übertragenen Dateien
- Gesamtmenge der bewegten Daten
- Etwaige Fehler oder Warnungen
- Details auf Dateiebene, falls Sie Nachforschungen anstellen müssen

Dies erstellt einen dauerhaften Prüfpfad, der belegt, dass Ihre Migration erfolgreich war. Wertvoll, falls jemand (Chef, Kunde, Prüfer) später fragt, ob Sie die Daten ordnungsgemäß erhalten haben.

## Optional: Alte Hubic-Dateien aufräumen

Sobald Sie verifiziert haben, dass alle Ihre Dateien sicher in Google Drive sind, können Sie sie aus Hubic löschen, um Speicherplatz freizugeben (oder einfach die Zahlung einstellen, falls es sich um ein kostenpflichtiges Konto handelt). RcloneView kann dabei helfen:

Binden Sie Hubic als lokales Laufwerk ein und löschen Sie Dateien über Ihren Datei-Explorer, oder nutzen Sie die Löschfunktion von RcloneView, nachdem der Vergleich bestätigt hat, dass alles kopiert wurde.

**Wichtig**: Löschen Sie nichts aus Hubic, bevor Sie:
1. die Migration abgeschlossen haben
2. mit Prüfsummen verifiziert haben
3. die Migration in Ihrer Ziel-Cloud bestätigt haben
4. mindestens eine Woche gewartet haben (um etwaige Probleme zu erkennen)

## Erweitert: Multi-Cloud-Migration für Redundanz

Wenn Hubic kritische Daten enthielt, sollten Sie eine Migration zu mehreren Clouds für Redundanz in Betracht ziehen:

1. **Primär**: Hubic → Google Drive (durchsuchbar, teilbar, kollaborativ)
2. **Backup**: Hubic → AWS S3 (günstiger Langzeitspeicher)
3. **Offsite**: Hubic → OneDrive (eine weitere kommerzielle Cloud)

RcloneView kann dies mit mehreren Synchronisationsaufgaben einrichten:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

- Job 1: Hubic → Google Drive synchronisieren (einmal, manuell ausführen)
- Job 2: Hubic → S3 synchronisieren (nach Abschluss von Job 1 ausführen)

Oder erstellen Sie zwei separate manuelle Synchronisationen und führen Sie diese nacheinander aus. Der Vorteil: Sollte Google Drive jemals ein Problem haben, verfügen Sie über S3 und OneDrive als Backups.

## Hubic einbinden (Optional, für eine Verifizierung in letzter Minute)

Wenn Sie vorsichtig sind (und angesichts des Risikos eines Datenverlusts ist das klug), können Sie Hubic als virtuelles Laufwerk einbinden:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-large img-center" />

Nach dem Einbinden können Sie Ihre Hubic-Dateien über Ihren nativen Datei-Explorer durchsuchen. Dies gibt Ihnen eine weitere visuelle Bestätigung, dass die Dateien vorhanden und nicht beschädigt sind. Fahren Sie anschließend mit der Migration fort, im Wissen, dass Sie dreifach geprüft haben.

## Zeitplan und Dringlichkeit

**Jetzt**: Laden Sie RcloneView herunter, verbinden Sie Hubic, durchsuchen Sie Ihre Dateien und verschaffen Sie sich einen Überblick über den Umfang.

**Diese Woche**: Führen Sie eine Testmigration von 1–2 Ordnern zu Google Drive oder einem anderen Ziel durch. Verifizieren Sie, dass die Dateien korrekt ankommen.

**Nächste 1–2 Wochen**: Migrieren Sie Ihre gesamte Hubic-Bibliothek. Verifizieren Sie mit Prüfsummen und Vergleichen.

**Nach der Migration**: Behalten Sie Hubic für eine Übergangsfrist (1–2 Monate) bei, falls Sie feststellen, dass etwas übersehen wurde. Löschen Sie danach Ihr Hubic-Konto.

Schieben Sie dies nicht auf. Abschaltungen von Cloud-Diensten sind unvorhersehbar, und Sie wollen nicht in letzter Minute 500 GB an Dateien hektisch verschieben müssen.

## Warum RcloneView perfekt für diese Migration geeignet ist

1. **Unterstützt**: RcloneView bietet native Unterstützung für Hubic (direkt, nicht über Umwege)
2. **Verifiziert**: Prüfsummen garantieren, dass während der Übertragung nichts verloren geht oder beschädigt wird
3. **Flexibel**: Migrieren Sie zu Google Drive, OneDrive, S3 oder jeder anderen Cloud – alles aus einer App
4. **Nachvollziehbar**: Vollständiger Aufgabenverlauf und Protokolle belegen, dass die Migration stattgefunden hat
5. **Sicher**: Einweg-Übertragung bedeutet, dass Sie vor dem Löschen aus Hubic verifizieren können
6. **Schnell**: Cloud-zu-Cloud-Übertragung ist deutlich schneller als Herunterladen und anschließendes Hochladen

## Erste Schritte

1. RcloneView herunterladen (kostenlose Testversion verfügbar)
2. Ihr Hubic-Konto verbinden (dauert 2 Minuten)
3. Ihre Ziel-Cloud verbinden (Google Drive, OneDrive, S3 usw.)
4. Eine Synchronisation ausführen, um Ihre Dateien zu migrieren
5. Mit Prüfsummen und Vergleich verifizieren
6. Nach Bestätigung können Sie gefahrlos aus Hubic löschen

Die Abschaltung von Hubic muss nicht Datenverlust bedeuten. Wenn Sie jetzt mit RcloneView handeln, sind Ihre Dateien sicher in einem modernen, stabilen Cloud-Dienst gespeichert – mit vollständigem Prüfpfad und ohne Risiko. Warten Sie nicht auf die Abschaltungsankündigung von OVH. Migrieren Sie diese Woche.

## Verwandte Anleitungen

- Einführung in die RcloneView-Dokumentation
- Dokumentation erstellen und organisieren
- Eine neue Seite veröffentlichen
- Markdown-Funktionen verwenden

<CloudSupportGrid />
