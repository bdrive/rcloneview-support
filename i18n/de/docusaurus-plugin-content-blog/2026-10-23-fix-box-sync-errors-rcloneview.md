---
slug: fix-box-sync-errors-rcloneview
title: "Box-Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView"
authors:
  - kai
description: "Box-Synchronisationsfehler mit RcloneView beheben: OAuth-, Box-for-Business-, Ratenlimit- und Dateinamenprobleme mit Dry Run, Logs und Job-Verlauf lösen."
keywords:
  - Box-Synchronisationsfehler beheben
  - Box-Synchronisation funktioniert nicht
  - Box-Ratenlimit-Fehler
  - Box-OAuth-Token abgelaufen
  - Box for Business rclone
  - RcloneView box
  - Box-Fehlerbehebung
  - Box-Übertragung fehlgeschlagen
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box-Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView

> Eine praktische Checkliste, um fehlgeschlagene Box-Übertragungen mit den in RcloneView bereits integrierten Werkzeugen zu diagnostizieren.

Box-Synchronisationsjobs scheitern meist aus wenigen, immer wiederkehrenden Gründen: eine abgelaufene Anmeldung, der falsche Kontotyp, gedrosselte API-Aufrufe oder Dateien, die Box anders behandelt als normale Dokumente. RcloneView bietet den Job-Verlauf, Logs und das integrierte Terminal, um diese Ursachen schnell voneinander zu unterscheiden. Zusätzlich kann RcloneView über 90 Anbieter in einem Fenster einbinden (mount) und synchronisieren, unter Windows, macOS und Linux – so können Sie dieselben Dateien auch mit einem anderen Remote testen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mit Job-Verlauf und Log-Tab beginnen

Öffnen Sie den Job-Verlauf (Job History) und sehen Sie sich den Status des fehlgeschlagenen Laufs an: Completed, Errored oder Canceled, dazu die Größe und die Anzahl der übertragenen Dateien. Eine teilweise Übertragung deutet auf ein Problem mit einzelnen Dateien hin. Ein Job, der sofort fehlschlägt, weist meist auf ein Authentifizierungs- oder Konfigurationsproblem hin.

Für Details wechseln Sie unten zum Log-Tab. Um mehr zu erfassen, aktivieren Sie in den Embedded-Rclone-Einstellungen das rclone-Logging, setzen die Stufe auf DEBUG, starten das eingebettete rclone neu und reproduzieren den Fehler.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Fehlgeschlagenen Job-Verlauf in RcloneView prüfen" class="img-large img-center" />

## Erneut authentifizieren und den Kontotyp prüfen

Wenn jede Anfrage fehlschlägt, ist das OAuth-Token möglicherweise abgelaufen oder widerrufen worden. Öffnen Sie den Remote-Manager (Remote Manager), bearbeiten Sie das Box-Remote und melden Sie sich erneut über den Browser an.

Wenn die Anmeldung klappt, aber Ordner fehlen oder Berechtigungsfehler auftreten, prüfen Sie den Kontotyp. Box for Business erfordert `box_sub_type = enterprise` im Remote. Eine Konfiguration für ein persönliches Konto bei einem Business-Konto ist eine häufige Ursache für verwirrende Ergebnisse.

<img src="/support/images/en/blog/new-remote.png" alt="Box-Remote-Konfiguration in RcloneView bearbeiten" class="img-large img-center" />

## Drosselung und große Jobs handhaben

Werden Tausende kleiner Dateien gleichzeitig verarbeitet, kann Box Anfragen drosseln. Verringern Sie in den erweiterten Einstellungen (Advanced Settings) des Jobs die Anzahl der Dateiübertragungen und der Equality-Checker (bei langsamen Backends werden 4 oder weniger empfohlen). Lassen Sie die Wiederholungen auf dem Standardwert 3, damit vorübergehende Fehler automatisch behoben werden.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Eine Übertragung im Tab Transferring überwachen" class="img-large img-center" />

## Problematische Dateien herausfiltern

Reine Online-Elemente wie Box Notes sind keine gewöhnlichen Dateien. Der vordefinierte Box-Docs-Filter im Filterschritt schließt sie aus, damit sie den Job nicht mehr scheitern lassen. Sie können auch eigene Regeln hinzufügen, eine maximale Dateigröße festlegen oder einen problematischen Ordner während der Untersuchung ausschließen. Führen Sie anschließend einen Dry Run aus, um zu bestätigen, was kopiert wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Ordner vergleichen, um nicht synchronisierte Dateien zu finden" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie Job-Verlauf und Log-Tab auf die genaue Fehlermeldung.
3. Authentifizieren Sie das Box-Remote erneut und bestätigen Sie ggf. die Box-for-Business-Einstellung.
4. Verringern Sie die Parallelität, wenden Sie den Box-Docs-Filter an, führen Sie dann einen Dry Run aus und starten Sie den Job erneut.

Die meisten Box-Fehler sind Konfigurationsprobleme, die ein paar Minuten mit den Logs aufdecken.

---

**Weiterführende Anleitungen:**

- [Box-Upload-Fehler beheben](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [Abgelaufenes OAuth-Token bei der Cloud-Synchronisation beheben](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Cloud-API-Ratenlimit-Fehler beheben](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
