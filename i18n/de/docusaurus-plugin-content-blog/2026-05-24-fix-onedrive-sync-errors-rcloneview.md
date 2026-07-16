---
slug: fix-onedrive-sync-errors-rcloneview
title: "OneDrive-Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie häufige Microsoft OneDrive-Synchronisationsfehler in RcloneView — von abgelaufenen OAuth-Tokens und Ratenlimits bis hin zu stockenden Übertragungen und Prüfsummenfehlern."
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - onedrive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive-Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView

> OneDrive-Synchronisationsfehler in RcloneView lassen sich in der Regel auf eine von drei Ursachen zurückführen — abgelaufene OAuth-Tokens, API-Ratenlimits oder falsch konfigurierte Übertragungseinstellungen — und für jede gibt es eine klare Lösung direkt in der App.

Microsoft OneDrive ist eine der am weitesten verbreiteten Cloud-Plattformen für Unternehmen, doch das Verhalten der API kann gelegentlich Synchronisationsfehler verursachen, durch die Übertragungen stocken, unvollständig bleiben oder stillschweigend fehlschlagen. RcloneView bietet Ihnen eine strukturierte Umgebung zur Diagnose dieser Probleme mithilfe von zeitgestempelten Protokollen, Echtzeit-Überwachung der Übertragung und detaillierten Job-Steuerungen — ganz ohne den Umweg über die Kommandozeile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zuerst den Tab „Log“ lesen

Bevor Sie Einstellungen ändern, öffnen Sie den Tab **Log** in der Info-Ansicht am unteren Rand von RcloneView. Jede Übertragung und jeder Synchronisationsvorgang schreibt hier zeitgestempelte Einträge, einschließlich der von der OneDrive-API zurückgegebenen Fehlercodes. Eine Meldung wie `AccessDenied` oder `InvalidAuthenticationToken` weist auf ein abgelaufenes OAuth-Token hin; eine Meldung `429 Too Many Requests` deutet auf ein Ratenlimit hin; und ein `EOF`- oder Verbindungsfehler signalisiert in der Regel eine Netzwerkunterbrechung und kein OneDrive-spezifisches Problem.

Die genaue Fehlerklasse zu identifizieren, bevor Sie Änderungen vornehmen, spart Zeit — die Lösung für ein Token-Problem unterscheidet sich grundlegend von der Lösung für ein Ratenlimit.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## Bei abgelaufenem OAuth-Token erneut authentifizieren

OneDrive-Verbindungen in RcloneView verwenden die OAuth-Browser-Authentifizierung. Das Zugriffstoken wird während aktiver Sitzungen automatisch aktualisiert, doch wenn ein Remote längere Zeit inaktiv war, kann das Token vollständig ablaufen — wodurch alle Synchronisationsjobs, die auf dieses OneDrive-Konto zielen, mit Authentifizierungsfehlern fehlschlagen.

Die Lösung ist unkompliziert: Gehen Sie zum Tab **Remote** > **Remote Manager**, suchen Sie das OneDrive-Remote und klicken Sie auf **Edit**. RcloneView öffnet ein Browserfenster, in dem Sie sich erneut anmelden und ein neues Token ausstellen lassen können. Nach dem Speichern führen Sie den fehlgeschlagenen Job erneut aus. Es sind keine Änderungen an der Job-Konfiguration nötig — lediglich die Anmeldedaten werden aktualisiert.

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## Gleichzeitige Übertragungen bei Ratenlimit-Fehlern reduzieren

OneDrive erzwingt API-Ratenlimits pro Benutzer, und Jobs, die mit einer hohen Anzahl gleichzeitiger Dateiübertragungen konfiguriert sind, können `429`-Antworten auslösen — was zu Teilfehlern oder Wiederholungsversuchen führt, die den gesamten Job erheblich verlangsamen. Die Standardanzahl an Wiederholungsversuchen (3 Versuche) verschleiert Ratenlimit-Probleme oft, sodass sie wie sporadische Fehler wirken.

Öffnen Sie den Job im **Job Manager** und klicken Sie auf **Edit**. Verringern Sie in Schritt 2 (Advanced Settings) die **Number of file transfers** vom Standardwert auf 2 bis 4. Falls der Job eine hohe Anzahl an Equality Checkern verwendet, reduzieren Sie auch diesen Wert — die offizielle Empfehlung liegt bei 4 oder weniger für Backends, die langsam auf Metadatenanfragen reagieren. Speichern Sie den Job und führen Sie ihn erneut aus.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## Vor dem erneuten Ausführen eines fehlgeschlagenen Jobs einen Dry Run nutzen

Eine unvollständige Synchronisation kann den Zielordner in einem inkonsistenten Zustand hinterlassen — manche Dateien wurden übertragen, andere nicht. Bevor Sie einen fehlgeschlagenen Job erneut ausführen, verwenden Sie den **Dry Run**-Modus, um genau zu sehen, welche Dateien kopiert oder gelöscht werden. Der Dry Run nimmt keine Änderungen vor; er erstellt eine vollständige Liste der geplanten Vorgänge, damit Sie überprüfen können, ob der Job sauber dort fortgesetzt wird, wo er unterbrochen wurde.

Wählen Sie im Job Manager den Job aus und wählen Sie **Dry Run** aus den Ausführungsoptionen. Prüfen Sie die Dateiliste sorgfältig, insbesondere wenn sich der Quellordner während der Ausführung des vorherigen Jobs geändert hat.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie nach einem fehlgeschlagenen Job den Tab **Log**, um die konkrete Fehlerklasse zu bestimmen, bevor Sie Änderungen vornehmen.
3. Bearbeiten Sie bei Authentifizierungsfehlern das OneDrive-Remote im Remote Manager und authentifizieren Sie sich erneut über den Browser.
4. Reduzieren Sie bei Ratenlimit-Fehlern die gleichzeitigen Dateiübertragungen in den Advanced Settings (Schritt 2) des Jobs auf 2–4 und führen Sie den Job anschließend zunächst mit einer Dry-Run-Vorschau aus.

Die meisten OneDrive-Synchronisationsfehler lassen sich innerhalb weniger Minuten beheben, sobald Sie die passende Lösung zur jeweiligen Ursache gefunden haben — der Job-Verlauf und die Protokollausgabe von RcloneView liefern Ihnen alles, was Sie dafür schnell benötigen.

---

**Weiterführende Anleitungen:**

- [Ins Stocken geratene Cloud-Übertragungen beheben — So lösen Sie sie mit RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [OneDrive zu Amazon S3 migrieren — Dateien übertragen mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Backblaze B2 mit OneDrive synchronisieren — Cloud-Backup mit RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />
