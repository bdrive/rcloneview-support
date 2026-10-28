---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "Mail.ru-Cloud-Synchronisationsfehler beheben — Leitfaden zur Fehlerbehebung mit RcloneView"
authors:
  - casey
description: "Beheben Sie häufige Mail.ru-Cloud-Synchronisationsfehler in RcloneView: Authentifizierungsfehler, Timeouts, übersprungene Dateien und Abweichungen, mit praxisnahen Lösungen."
keywords:
  - Mail.ru Cloud Synchronisationsfehler beheben
  - mailru cloud Synchronisation fehlgeschlagen
  - mail.ru cloud rcloneview
  - mailru Authentifizierungsfehler
  - mailru Timeout
  - mail.ru cloud Fehlerbehebung
  - Cloud-Synchronisationsfehler
  - rcloneview Fehlerbehebung
  - mailru Backup-Fehler
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru-Cloud-Synchronisationsfehler beheben — Leitfaden zur Fehlerbehebung mit RcloneView

> Die meisten Mail.ru-Cloud-Synchronisationsfehler in RcloneView lassen sich auf Zugangsdaten, Parallelität oder einen Filter zurückführen — und mit wenigen Klicks beheben.

Wenn ein Mail.ru-Cloud-Job stockt oder Fehler meldet, ist die Ursache selten rätselhaft. RcloneView protokolliert jeden Lauf in Job History und im Log-Tab, sodass Sie die Meldung einer bekannten Ursache zuordnen können. Dieser Leitfaden behandelt die häufigsten Probleme und die Einstellungen, die sie lösen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Authentifizierungs- und Verbindungsfehler

Wenn ein Job, der letzte Woche noch funktionierte, jetzt sofort fehlschlägt, sind die gespeicherten Zugangsdaten der erste Verdächtige. Öffnen Sie den Remote Manager, wählen Sie das Mail.ru-Cloud-Remote aus und bearbeiten Sie es, um die Kontodaten erneut einzugeben. Ist für das Konto eine zusätzliche Sicherheitsfunktion aktiviert, prüfen Sie, ob die eingegebenen Zugangsdaten die sind, die der Dienst für den Zugriff durch Drittanbieter akzeptiert. Durchsuchen Sie das Remote nach dem Speichern in einem Explorer-Panel. Wenn die Ordnerliste geladen wird, ist die Verbindung in Ordnung und das Problem liegt im Job selbst.

<img src="/support/images/en/blog/new-remote.png" alt="Ein Mail.ru-Cloud-Remote in RcloneView neu erstellen" class="img-large img-center" />

## Timeouts und hängende Übertragungen

Langsame oder unterbrochene Übertragungen bedeuten meist zu viel Parallelität für die Verbindung. Verringern Sie in den Advanced Settings des Jobs Number of file transfers und setzen Sie Number of equality checkers auf 4 oder weniger, da langsamere Backends mit weniger parallelen Prüfungen besser zurechtkommen. Erhöhen Sie bei langen Jobs "Retry entire sync if fails" über den Standardwert 3, damit sich kurze Netzwerkunterbrechungen automatisch erholen. Beobachten Sie den Transferring-Tab, um zu bestätigen, dass sich die Geschwindigkeit stabilisiert.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Eine Mail.ru-Cloud-Übertragung im Transferring-Tab überwachen" class="img-large img-center" />

## Fehlende oder abweichende Dateien

Wenn Dateien nach einer abgeschlossenen Synchronisation anders aussehen, führen Sie Compare zwischen der Quelle und dem Mail.ru-Cloud-Remote aus. Zeigen Sie left-only-Dateien an, um zu finden, was nie angekommen ist, und kopieren Sie diese direkt aus der Vergleichsansicht. Bei inhaltlichen Abweichungen aktivieren Sie in Schritt 2 des Sync-Assistenten die Prüfsummen-Option, damit Dateien anhand von Hash und Größe statt nur anhand von Zeitstempeln verglichen werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Ordner vergleichen, um in Mail.ru Cloud fehlende Dateien zu finden" class="img-large img-center" />

## Filter, Dry Run und Job History

Ein Job kann Dateien auch absichtlich überspringen. Prüfen Sie in Schritt 3 Filtering Settings die maximale Dateigröße, das maximale Dateialter oder benutzerdefinierte Ausschlussregeln, die Sie vergessen haben. Führen Sie dann einen Dry Run aus, um genau zu sehen, welche Dateien kopiert oder gelöscht würden, bevor echte Daten angefasst werden. Öffnen Sie anschließend Job History und vergleichen Sie Status, Größe und Dateianzahl mit früheren erfolgreichen Läufen. RcloneView kann 90+ Anbieter in einem Fenster einbinden (mount) und synchronisieren, sodass Sie das Mail.ru-Cloud-Remote auch einbinden können, um seinen Inhalt wie ein lokales Laufwerk zu prüfen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Den Mail.ru-Cloud-Jobverlauf in RcloneView prüfen" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie Job History und lesen Sie den Log-Tab-Eintrag des fehlgeschlagenen Mail.ru-Cloud-Jobs.
3. Wenden Sie die passende Lösung von oben an: Zugangsdaten, Parallelität, Prüfsumme oder Filter.
4. Führen Sie einen Dry Run aus, starten Sie den Job dann erneut und bestätigen Sie das Ergebnis mit Compare.

Methodische Prüfungen schlagen Raten — beheben Sie die Ursache einmal, und Ihre Mail.ru-Cloud-Jobs laufen wieder sauber.

---

**Weiterführende Leitfäden:**

- [Mail.ru Cloud verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Mail.ru Cloud zu Backblaze B2 migrieren — Dateien mit RcloneView übertragen](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [Cloud-API-Ratenbegrenzungsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
