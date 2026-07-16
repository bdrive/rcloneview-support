---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "Unterbrochene Cloud-Synchronisation durch Netzwerkfehler beheben — Wiederholen und Fortsetzen mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie durch Netzwerkabbrüche unterbrochene Cloud-Synchronisationsjobs in RcloneView wiederherstellen. Nutzen Sie Wiederholungseinstellungen, das erneute Ausführen aus dem Job-Verlauf und den Testlauf zur Überprüfung des Zustands nach einer Unterbrechung."
keywords:
  - unterbrochene Cloud-Synchronisation Netzwerk RcloneView
  - unterbrochene Synchronisation fortsetzen rclone
  - Netzwerkfehler bei Cloud-Synchronisation beheben
  - Cloud-Synchronisation wiederholen RcloneView
  - Cloud-Backup Netzwerkausfall beheben
  - Wiederherstellung unterbrochener Übertragungen
  - rclone Netzwerk-Wiederholungseinstellungen
  - RcloneView Synchronisation fortsetzen
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Unterbrochene Cloud-Synchronisation durch Netzwerkfehler beheben — Wiederholen und Fortsetzen mit RcloneView

> Netzwerkabbrüche während einer Cloud-Synchronisation sind ärgerlich, aber nicht katastrophal — der Wiederholungsmechanismus von RcloneView und die Möglichkeit, Jobs aus dem Job-Verlauf erneut auszuführen, bringen Ihre Übertragung wieder in Gang.

Netzwerkunterbrechungen mitten in der Synchronisation sind eine Realität, besonders bei lang laufenden Übertragungen über Heimverbindungen, VPNs oder getaktete Verbindungen. Wenn die Verbindung während eines aktiven Synchronisationsjobs abbricht, sind bereits übertragene Dateien sicher — aber Sie müssen wissen, was abgeschlossen wurde, was fehlgeschlagen ist und wie Sie korrekt fortsetzen. RcloneView bietet Wiederholungskonfiguration, das erneute Ausführen von Jobs aus dem Verlauf und die Verifizierung per Testlauf, um dieses Szenario sauber zu handhaben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was passiert, wenn das Netzwerk abbricht

Wenn die Netzwerkverbindung während eines Synchronisationsjobs verloren geht, versucht rclone (die Engine hinter RcloneView), die fehlgeschlagenen Vorgänge gemäß der Wiederholungskonfiguration des Jobs erneut auszuführen. Erholt sich das Netzwerk nicht innerhalb des Wiederholungsfensters, wird der Job als fehlgeschlagen gemeldet. Dateien, die vor der Unterbrechung erfolgreich übertragen wurden, bleiben am Ziel erhalten — sie werden nicht beschädigt, aber beim nächsten Lauf auch nicht unnötig erneut übertragen.

Entscheidend ist zu verstehen, dass Synchronisationsjobs in RcloneView idempotent sind: Ein erneutes Ausführen eines Synchronisationsjobs vergleicht Quelle und Ziel und überträgt nur, was fehlt oder sich geändert hat.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## Wiederholungsverhalten konfigurieren

Öffnen Sie in RcloneView Ihren Synchronisationsjob und wechseln Sie zu Schritt 2 (Übertragungsoptionen). Suchen Sie nach den Wiederholungseinstellungen:

- **Retry entire sync if fails**: Aktivieren Sie diese Option, um die gesamte Synchronisation automatisch erneut auszuführen, wenn Übertragungen fehlschlagen. Der Standardwert sind 3 Wiederholungen.
- **Low level retries**: Steuert, wie oft einzelne Dateiübertragungen wiederholt werden, bevor sie als fehlgeschlagen markiert werden (Standard: 10)
- **Retry on failure**: Stellt sicher, dass vorübergehende Fehler (einschließlich Netzwerk-Timeouts) automatische Wiederholungen mit Backoff auslösen

Für Synchronisationsjobs über instabile Verbindungen bietet das Setzen von **Retry entire sync** auf 5 bei gleichzeitigem Belassen von **Low level retries** auf 10 eine erhebliche Ausfallsicherheit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## Aus dem Job-Verlauf fortsetzen

Wenn ein Job trotz Wiederholungen fehlschlägt, gehen Sie zu **Job History** und suchen Sie den fehlgeschlagenen Lauf. Der Verlaufseintrag zeigt, wie viele Dateien übertragen wurden und wie viele fehlgeschlagen sind. Klicken Sie auf **Re-run** — RcloneView startet denselben Job erneut mit denselben Einstellungen. Da die Synchronisation den Zustand von Quelle und Ziel vergleicht, werden bereits übertragene Dateien übersprungen und nur die verbleibenden oder fehlgeschlagenen Dateien verarbeitet.

Das ist deutlich schneller als ein Neustart von vorn und vermeidet das erneute Hochladen von Daten, die bereits sicher am Ziel angekommen sind.

## Testlauf zur Überprüfung des Zustands verwenden

Nach einer Netzwerkunterbrechung sind Sie sich möglicherweise über den aktuellen Synchronisationszustand nicht sicher — besonders wenn der Fehler mitten in einer großen Datei aufgetreten ist. Aktivieren Sie **Dry Run** für den Job und führen Sie ihn erneut aus. Der Testlauf zeigt, was die nächste Ausführung übertragen würde, ohne tatsächlich etwas zu verschieben. So erhalten Sie ein klares Bild davon, wie viele Dateien noch übrig sind, bevor Sie sich auf die eigentliche Synchronisation festlegen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## Umgang mit Unterbrechungen bei großen Dateien

Bei Übertragungen sehr großer einzelner Dateien (mehrere GB) bedeutet ein Netzwerkabbruch mitten in der Datei, dass diese Datei beim nächsten Lauf vollständig erneut übertragen wird (es sei denn, der Cloud-Anbieter unterstützt fortsetzbare Uploads und den chunk-basierten Übertragungsmodus von rclone). Um den Aufwand für erneute Übertragungen bei großen Dateien zu minimieren, aktivieren Sie **chunked uploads** in den erweiterten Einstellungen des Jobs, sofern unterstützt (S3-kompatible Anbieter, Google Drive). Dadurch können teilweise hochgeladene Dateien ab dem letzten abgeschlossenen Chunk fortgesetzt werden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie die Einstellungen Ihres Synchronisationsjobs und aktivieren Sie **Retry entire sync if fails** mit 3–5 Wiederholungen.
3. Gehen Sie nach einem durch einen Netzwerkabbruch unterbrochenen Job zu **Job History** und verwenden Sie **Re-run**, um fortzusetzen.
4. Verwenden Sie **Dry Run**, um den verbleibenden Übertragungsumfang vor dem abschließenden erneuten Lauf zu überprüfen.

Mit korrekter Wiederholungskonfiguration und dem erneuten Ausführen aus dem Job-Verlauf werden Netzwerkunterbrechungen zu einer kleinen Unannehmlichkeit statt zu einem Synchronisationsfehler.

---

**Verwandte Anleitungen:**

- [Unterbrochene und fehlgeschlagene Übertragungen mit RcloneView wiederherstellen](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Job-Verlauf und Überwachung der Übertragungsprotokolle](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
