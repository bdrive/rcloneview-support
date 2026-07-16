---
slug: migrate-koofr-to-onedrive-rcloneview
title: "Koofr zu OneDrive migrieren — Dateien übertragen mit RcloneView"
authors:
  - jay
description: "Verschieben Sie Ihre Dateien von Koofr zu Microsoft OneDrive mit RcloneView. Eine visuelle Schritt-für-Schritt-Anleitung für eine sichere und präzise Cloud-zu-Cloud-Migration."
keywords:
  - Koofr zu OneDrive Migration
  - Koofr zu OneDrive migrieren
  - Koofr OneDrive Übertragung
  - Cloud-zu-Cloud-Migration
  - RcloneView Koofr
  - RcloneView OneDrive
  - rclone Koofr OneDrive GUI
  - Cloud-Datei-Migrationstool
  - OneDrive Migrationssoftware
  - Koofr Cloud-Übertragung
tags:
  - RcloneView
  - koofr
  - onedrive
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr zu OneDrive migrieren — Dateien übertragen mit RcloneView

> RcloneView macht die Migration von Koofr zu Microsoft OneDrive einfach und überprüfbar — mit integriertem Ordnervergleich, Dry-Run-Vorschau und Live-Überwachung der Übertragung.

Koofr ist ein auf Datenschutz ausgerichteter europäischer Cloud-Speicher-Anbieter, der bei Nutzern beliebt ist, die Wert auf Datensouveränität und eine übersichtliche Oberfläche legen. OneDrive, eng in Microsoft 365 integriert, ist häufig das Ziel, wenn Teams auf Word, Excel und Teams-Zusammenarbeit setzen. Der Wechsel zwischen diesen beiden Anbietern ist nicht einfach nur das Kopieren von Dateien — die Herausforderung besteht darin, dies zuverlässig zu tun: verschachtelte Ordnerstrukturen erhalten, Sonderfälle bei Dateinamen korrekt behandeln und bestätigen, dass jede Datei unbeschädigt angekommen ist. RcloneView verwaltet die gesamte Migration visuell und verbindet sich direkt mit beiden Anbietern, ohne die Daten über Ihre lokale Festplatte zu leiten.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr und OneDrive in RcloneView verbinden

Beide Remotes werden über den Assistenten **Neuer Remote** im **Remote**-Tab von RcloneView eingerichtet. Fügen Sie zuerst Koofr hinzu, indem Sie es aus der Anbieterliste auswählen und Ihre Kontodaten eingeben. Fügen Sie anschließend OneDrive hinzu — es verwendet OAuth-Authentifizierung, sodass sich ein Browserfenster öffnet, Sie sich mit Ihrem Microsoft-Konto anmelden und die Verbindung automatisch hergestellt wird, ohne dass Sie Tokens manuell handhaben müssen.

Sobald beide Remotes gespeichert sind, erscheinen sie als eigenständige Tabs im zweigeteilten Datei-Explorer. Öffnen Sie Koofr im linken Bereich und OneDrive im rechten Bereich, um beide Ordnerstrukturen nebeneinander zu sehen. Dieses Layout ist besonders nützlich für ein Team, das eine gemeinsame Projekthierarchie migriert: Sie können bestätigen, dass die Zielordnerstruktur auf OneDrive Ihren Erwartungen entspricht, bevor Sie auch nur eine einzige Datei verschieben.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and OneDrive remotes in RcloneView" class="img-large img-center" />

## Inhalte vor der Migration prüfen

Das **Ordnervergleich**-Tool von RcloneView, aufrufbar über den **Home**-Tab, ist ein effektives Mittel, um eine Cloud-Migration vorab zu prüfen. Richten Sie es links auf den Koofr-Quellordner und rechts auf den entsprechenden OneDrive-Zielordner. Die Vergleichsansicht kategorisiert jede Datei: nur links (noch nicht auf OneDrive), nur rechts (bereits vorhanden oder aus einem vorherigen Teillauf), identisch (übereinstimmend nach Größe) oder unterschiedlich (Größenabweichung, die auf einen möglichen Konflikt hinweist).

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Koofr and OneDrive folder contents before migration in RcloneView" class="img-large img-center" />

Für ein Team, das mehrere tausend Dokumente und Design-Dateien migriert, deckt dieser Vergleichsschritt genau die Fälle auf, die sonst Wochen später als Support-Tickets auftauchen — ein Ordner, der wegen eines Sonderzeichens im Pfad stillschweigend fehlgeschlagen ist, oder Dateien, die bereits durch einen vorherigen Versuch teilweise migriert wurden. Sobald der Vergleich bestätigt, dass sich Quelle und Ziel im erwarteten Zustand befinden, fahren Sie mit dem Synchronisationsauftrag fort.

## Die Cloud-zu-Cloud-Übertragung ausführen

Erstellen Sie im **Job Manager** einen neuen Auftrag, legen Sie den Koofr-Ordner als Quelle und den Ziel-OneDrive-Ordner als Ziel fest und wählen Sie **Sync** als Auftragstyp. RcloneView überträgt Dateien direkt zwischen den beiden Anbietern: Die Daten fließen von Koofr zu OneDrive, ohne lokal zwischengespeichert zu werden — dadurch bleibt Ihre Internetbandbreitennutzung ausschließlich auf den Cloud-zu-Cloud-Pfad beschränkt, anstatt alles zweimal herunterzuladen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Koofr to OneDrive in RcloneView" class="img-large img-center" />

Aktivieren Sie im Schritt Erweiterte Einstellungen die **Prüfsummenverifizierung**, um jegliche Beschädigung während der Übertragung zu erkennen. Führen Sie zuerst einen **Dry Run** aus — dieser zeigt eine Vorschau der vollständigen Liste der zu kopierenden oder zu löschenden Dateien, bevor tatsächlich etwas verschoben wird, und gibt Ihnen eine letzte Gelegenheit, unerwartete Löschungen oder Pfadabweichungen zu erkennen, bevor Sie den Vorgang bestätigen.

## Fortschritt überwachen und Abschluss bestätigen

Der Tab **Übertragung** zeigt während des laufenden Auftrags die aktuelle Übertragungsgeschwindigkeit, die verarbeiteten Dateien und die insgesamt übertragene Datenmenge in Echtzeit an. Nach Abschluss protokolliert das **Job History**-Log jeden Lauf mit Startzeit, verstrichener Dauer, übertragener Größe und Endstatus.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Koofr to OneDrive migration progress in RcloneView" class="img-large img-center" />

Führen Sie nach Abschluss der Migration einen zweiten **Ordnervergleich** durch und filtern Sie nach Dateien, die "nur links" vorhanden sind. Ist die Anzahl null, ist die Migration abgeschlossen. Sollten noch Dateien übrig sein, zeigt die Vergleichsansicht genau, welche das sind, sodass Sie den Auftrag für bestimmte Unterordner erneut ausführen können, anstatt den gesamten Datenbestand neu zu migrieren.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihren Koofr-Remote über **Remote-Tab > Neuer Remote** hinzu und geben Sie Ihre Kontodaten ein.
3. Fügen Sie Ihren OneDrive-Remote per OAuth-Browseranmeldung hinzu — keine manuelle Token-Handhabung erforderlich.
4. Nutzen Sie **Ordnervergleich**, um Quelle und Ziel zu prüfen, und führen Sie dann eine Dry-Run-Synchronisation aus, bevor Sie die vollständige Migration starten.

Die Migration von Koofr zu OneDrive mit RcloneView bietet Ihnen einen vollständigen Prüfpfad — von dem Vergleich vor der Migration bis hin zum Job-History-Log — sodass Sie mit Sicherheit bestätigen können, dass jede Datei den Weg erfolgreich zurückgelegt hat.

---

**Weiterführende Anleitungen:**

- [Koofr zu Google Drive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Koofr zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)
- [Box zu OneDrive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
