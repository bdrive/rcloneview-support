---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "Cloud-Übertragungen verfolgen mit Auftragsverlauf und Protokollen — Überwachen Sie jede Synchronisation und jedes Backup in RcloneView"
authors:
  - tayson
description: "Behalten Sie jeden Cloud-Sync-, Kopier- und Backup-Auftrag mit dem Auftragsverlauf und den Übertragungsprotokollen von RcloneView im Blick. Überwachen Sie Erfolge, Fehler und Leistung über die Zeit."
keywords:
  - Cloud-Übertragungsverlauf
  - Sync-Auftragsprotokoll
  - Cloud-Backup-Überwachung
  - Übertragungsprotokoll Cloud
  - rclone Auftragsverlauf
  - Cloud-Sync-Überwachung
  - Backup-Auftragsverfolgung
  - Cloud-Übertragungsstatus
  - rclone Übertragungsprotokoll
  - Cloud-Auftragsüberwachungstool
tags:
  - monitoring
  - job-history
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Übertragungen verfolgen mit Auftragsverlauf und Protokollen — Überwachen Sie jede Synchronisation und jedes Backup in RcloneView

> Sie haben letzte Woche ein Backup geplant. Wurde es tatsächlich ausgeführt? Wurde es erfolgreich abgeschlossen? Wie viele Dateien wurden übertragen? Ohne Auftragsverlauf raten Sie nur. Mit RcloneView hinterlässt jeder Auftrag eine Spur.

Cloud-Synchronisation einzurichten ist der erste Schritt. Zu wissen, dass sie zuverlässig funktioniert, ist der zweite — und wohl der wichtigere. Der Auftragsverlauf von RcloneView verfolgt jede Ausführung: wann sie lief, wie lange sie dauerte, wie viele Dateien übertragen wurden und ob Fehler aufgetreten sind.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum der Auftragsverlauf wichtig ist

### Stille Fehler

Der schlimmste Backup-Fehler ist einer, von dem Sie nichts wissen. Häufige unbemerkte Probleme:

- **OAuth-Token abgelaufen** — Der Cloud-Anbieter hat den Zugriff widerrufen, Aufträge schlagen stillschweigend fehl.
- **Speicherplatz voll** — Dem Ziel ging während der Übertragung der Speicherplatz aus.
- **Rate-Limit erreicht** — Der Anbieter hat Übertragungen gedrosselt, einige Dateien wurden übersprungen.
- **Netzwerk-Timeout** — Zeitweise Konnektivität führte zu unvollständigen Übertragungen.

Ohne Auftragsverlauf bleiben diese Probleme unbemerkt, bis Sie eine Wiederherstellung benötigen — und feststellen, dass Ihr „Backup" Monate alt ist.

### Compliance und Auditing

Manche Branchen benötigen dokumentierten Nachweis, dass Backups durchgeführt wurden. Der Auftragsverlauf liefert:

- Zeitstempel für jede Auftragsausführung.
- Dateianzahlen und Übertragungsvolumen.
- Erfolgs-/Fehlerstatus.
- Fehlerdetails für die Fehlerbehebung.

## Auftragsverlauf in RcloneView

### Vergangene Ausführungen anzeigen

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

Jeder Eintrag zeigt:

- **Auftragsname** — Welcher Sync-/Kopier-/Verschiebe-Auftrag ausgeführt wurde.
- **Startzeit** — Wann die Ausführung begann.
- **Dauer** — Wie lange sie dauerte.
- **Status** — Erfolgreich, teilweise oder fehlgeschlagen.
- **Übertragene Dateien** — Anzahl der verschobenen Dateien.
- **Datenvolumen** — Gesamtzahl der übertragenen Bytes.
- **Fehler** — Anzahl der Fehler (falls vorhanden).

### Trends erkennen

Im Laufe der Zeit zeigt der Auftragsverlauf Muster:

- **Zunehmende Dauer** — Ihr Datenbestand wächst oder die Leistung verschlechtert sich.
- **Sporadische Fehler** — Netzwerk- oder Anbieterprobleme an bestimmten Tagen.
- **Keine Übertragungen** — Nichts hat sich geändert (erwartet bei inkrementellen Synchronisationen) oder der Auftrag funktioniert nicht.
- **Fehlerspitzen** — Rate-Limits, Berechtigungsprobleme oder voller Speicher.

## Übertragungsüberwachung in Echtzeit

Während ein Auftrag läuft, verfolgen Sie den Fortschritt live:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

Die Live-Überwachung zeigt:

- **Aktuelle Geschwindigkeit** — MB/s oder GB/s.
- **Aktive Übertragungen** — Anzahl paralleler Dateioperationen.
- **Fortschritt** — Prozentualer Abschluss.
- **ETA** — Geschätzte verbleibende Zeit.
- **Fehler** — Fehlerzahlen in Echtzeit.

## Benachrichtigungen bei Fehlern

v1.3 fügt Slack-, Discord- und Telegram-Benachrichtigungen hinzu. Konfigurieren Sie Alarme, damit Sie sofort informiert werden, wenn:

- Ein geplanter Auftrag fehlschlägt.
- Ein Auftrag mit Fehlern abgeschlossen wird.
- Ein Auftrag erfolgreich abgeschlossen wird (optionale Bestätigung).

Das ist der Unterschied zwischen „mein Backup ist wahrscheinlich gelaufen" und „mein Backup ist definitiv gelaufen — ich habe die Slack-Nachricht bekommen."

## Fehlerbehebung mit Protokollen

Wenn ein Auftrag fehlschlägt, verrät das Übertragungsprotokoll genau, warum:

- **403 Forbidden** — Rate-Limit- oder Berechtigungsproblem.
- **404 Not Found** — Quelldatei wurde während der Übertragung gelöscht.
- **429 Too Many Requests** — Drosselung durch den Anbieter.
- **Timeout** — Problem mit der Netzwerkverbindung.
- **Speicherplatz voll** — Kein Platz mehr am Ziel.

## Best Practices

### Auftragsverlauf wöchentlich überprüfen

Verbringen Sie jeden Montag 2 Minuten damit, die Auftragsausführungen der vergangenen Woche zu überprüfen. Erkennen Sie Probleme, bevor sie zu Krisen werden.

### Fehleralarme einrichten

Verlassen Sie sich nicht auf manuelle Prüfungen. Konfigurieren Sie Slack- oder Discord-Benachrichtigungen für Auftragsfehler.

### Nach Fehlern verifizieren

Wenn ein Auftrag Fehler meldet, folgen Sie mit dem Ordnervergleich, um genau zu identifizieren, welche Dateien fehlen oder unterschiedlich sind:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### Fehlgeschlagene Übertragungen erneut versuchen

Die Wiederholungsfunktion von v1.3 kann fehlgeschlagene Dateiübertragungen automatisch erneut ausführen. Untersuchen Sie bei anhaltenden Fehlern die Grundursache anhand der Protokolle.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Erstellen und planen Sie Ihre Sync-/Backup-Aufträge**.
3. **Ausführung überwachen** über den Auftragsverlauf.
4. **Benachrichtigungen einrichten** für Fehleralarme.
5. **Wöchentlich überprüfen** — vertrauen, aber verifizieren.

Ein Backup, das Sie nicht überwachen, ist ein Backup, dem Sie nicht vertrauen können.

---

**Verwandte Anleitungen:**

- [Sync-Aufträge erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Auftragsplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
