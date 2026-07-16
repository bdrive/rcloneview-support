---
slug: fix-box-upload-errors-rcloneview
title: "Box-Upload-Fehler beheben — So lösen Sie Übertragungsprobleme mit RcloneView"
authors:
  - alex
description: "Diagnostizieren und beheben Sie Box-Upload-Fehler mit RcloneView — erfahren Sie, wie Sie Übertragungseinstellungen anpassen, Protokolle prüfen und Box-Dateien zuverlässig synchronisieren."
keywords:
  - Box-Upload-Fehler beheben
  - Box-Synchronisationsfehler RcloneView
  - Box-Übertragung fehlgeschlagen rclone
  - Box-API-Ratenlimit RcloneView
  - Box-Cloud-Synchronisation Fehlerbehebung
  - Box-Authentifizierungsfehler rclone
  - Probleme beim Hochladen von Box-Dateien
  - RcloneView Fehlerbehebungsleitfaden
  - Box-Cloud-Fehler beheben
tags:
  - box
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box-Upload-Fehler beheben — So lösen Sie Übertragungsprobleme mit RcloneView

> Ein einzelner Box-API-Fehler kann einen Synchronisationsjob unbemerkt zum Stillstand bringen — so diagnostizieren Sie die genaue Ursache und beheben sie in RcloneView.

Box ist eine weit verbreitete Enterprise-Cloud-Plattform, aber ihre API erzwingt Ratenlimits, Token-Ablauffenster und Regeln für Dateipfade, die dazu führen können, dass Uploads mitten in der Übertragung fehlschlagen. Wenn ein Synchronisationsjob ohne klare Meldung stoppt, starten die meisten Nutzer den gesamten Job neu und hoffen auf mehr Glück. RcloneView bietet strukturierte Protokollausgaben, konfigurierbares Wiederholungsverhalten und Authentifizierungskontrollen pro Remote — die richtigen Werkzeuge, um das eigentliche Problem zu identifizieren und ein erneutes Auftreten zu verhindern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Ursachen für Box-Upload-Fehler

Box-Upload-Fehler lassen sich im Allgemeinen in einige Kategorien einteilen. **API-Ratenbegrenzung** ist die häufigste Ursache: Wenn RcloneView zu viele gleichzeitige Anfragen sendet, gibt Box HTTP-429-Fehler zurück und drosselt die Verbindung. Mehr als die Standardanzahl paralleler Übertragungen zu Box auszuführen, kann dies auslösen, besonders bei einem Box-for-Business-Konto mit strengeren API-Kontingenten.

**Abgelaufene OAuth-Tokens** sind die zweithäufigste Ursache. Box-Zugriffstokens laufen nach einem festgelegten Zeitraum ab. Wenn ein lange laufender Job in Bearbeitung ist, während das Token abläuft, beginnen Uploads mit Authentifizierungsfehlern fehlzuschlagen. RcloneView speichert Ihre Box-Zugangsdaten sicher und erneuert Zugriffstokens, wenn sie ablaufen. Ist jedoch das Refresh-Token selbst abgelaufen — typischerweise nach längerer Inaktivität — müssen Sie das Remote erneut authentifizieren.

**Probleme mit Dateipfaden und Namensgebung** verursachen ebenfalls Fehler. Box erzwingt Einschränkungen für bestimmte Sonderzeichen und Dateipfadlängen. Dateien mit Zeichen, die Box nicht akzeptiert, schlagen stillschweigend fehl, sofern die Protokollierung nicht aktiviert ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView showing a Box sync transfer job in progress" class="img-large img-center" />

## Protokolle lesen, um den genauen Fehler zu identifizieren

Bevor Sie Einstellungen ändern, aktivieren Sie die Debug-Protokollierung, um den vollständigen Fehlerkontext zu erfassen. Gehen Sie in RcloneView zu **Settings > Embedded Rclone** und aktivieren Sie **Enable rclone Logging**, dann stellen Sie die Protokollebene auf **DEBUG**. Klicken Sie auf **Restart Embedded Rclone** und reproduzieren Sie anschließend den Upload-Fehler. Öffnen Sie die Protokolldatei aus dem konfigurierten Protokollordner — der Fehlercode und die HTTP-Antwort von Box werden klar erfasst.

Alternativ prüfen Sie den **Log tab** am unteren Rand der RcloneView-Oberfläche auf zeitgestempelte Fehlereinträge der aktuellen Sitzung. Der Tab **Job History** (zugänglich über Job Manager) zeichnet Status, Dauer und Übertragungsgeschwindigkeit jedes vergangenen Jobs auf. Ein Job, der mit dem Status „Errored" abgeschlossen wurde, enthält die Dateianzahl und Größenangaben, die Sie zur Eingrenzung des Problems benötigen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history in RcloneView showing Box sync error details" class="img-large img-center" />

## Übertragungseinstellungen an die Grenzen von Box anpassen

Sobald Sie den Fehlertyp kennen, öffnen Sie den betroffenen Job im **Job Manager** und klicken Sie auf **Edit**. Reduzieren Sie in Schritt 2 (Advanced Settings) die **Number of file transfers**, um die Anzahl gleichzeitiger Anfragen zu senken — ein Start mit 2 oder 3 ist ein sicherer Ausgangswert für Box. Reduzieren Sie außerdem die **Number of equality checkers** auf 4 oder weniger, da Box auch bei hoher Parallelität auf der Metadatenseite Schwierigkeiten haben kann.

Erhöhen Sie den Zähler **Retry entire sync if fails** vom Standardwert 3 auf 5 oder höher bei instabilen Netzwerkbedingungen. Die Wiederholungslogik von RcloneView überspringt bereits übertragene Dateien bei nachfolgenden Durchläufen, sodass eine Wiederholung keine doppelte Arbeit verursacht — sie setzt genau dort fort, wo der vorherige Versuch aufgehört hat. Aktivieren Sie die **checksum**-Überprüfung, wenn die Datenintegrität entscheidend ist, auch wenn dies das Anfragevolumen erhöht — kombinieren Sie dies daher mit einer niedrigeren Parallelitätseinstellung.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring advanced transfer settings for Box in RcloneView" class="img-large img-center" />

## Box erneut authentifizieren, wenn Token-Fehler bestehen bleiben

Wenn die Protokolle auch nach Reduzierung der Parallelität weiterhin Authentifizierungsfehler anzeigen, muss das Box-OAuth-Token erneuert werden. Gehen Sie in RcloneView zu **Remote tab > Remote Manager**, wählen Sie Ihr Box-Remote aus und klicken Sie auf **Edit**. Das erneute Ausführen des OAuth-Ablaufs öffnet ein Browserfenster, in dem Sie sich erneut bei Box anmelden und ein neues Token-Paar ausstellen lassen. Bestätigen Sie bei Box-for-Business-Konten vor dem Speichern, dass die Einstellung `box_sub_type = enterprise` weiterhin in der Remote-Konfiguration vorhanden ist.

Führen Sie den Job nach der erneuten Authentifizierung erneut aus. Nutzen Sie die Option **Dry Run** (verfügbar im Job Manager), um eine Vorschau zu erhalten, welche Dateien übertragen werden, ohne tatsächliche Änderungen vorzunehmen — so können Sie bestätigen, dass die Verbindung funktioniert und die Dateiliste wie erwartet aussieht, bevor Sie einen vollständigen Upload starten.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktivieren Sie die **DEBUG**-Protokollierung unter Settings > Embedded Rclone und reproduzieren Sie den Upload-Fehler, um den genauen Fehlercode zu erfassen.
3. Bearbeiten Sie den fehlgeschlagenen Job im Job Manager, reduzieren Sie die gleichzeitigen Übertragungen auf 2–3 und erhöhen Sie die Anzahl der Wiederholungsversuche.
4. Bestehen Authentifizierungsfehler weiterhin, authentifizieren Sie das Box-Remote über den Remote Manager erneut und nutzen Sie Dry Run, um die Konnektivität vor dem vollständigen Job zu bestätigen.

Mit den richtigen Parallelitätseinstellungen und einem gültigen Token laufen Box-Uploads über RcloneView zuverlässig — selbst bei großen Enterprise-Archiven mit Zehntausenden von Dateien.

---

**Verwandte Anleitungen:**

- [Box-Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Cloud-Synchronisations-Timeout-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [Cloud-API-Ratenlimit-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
