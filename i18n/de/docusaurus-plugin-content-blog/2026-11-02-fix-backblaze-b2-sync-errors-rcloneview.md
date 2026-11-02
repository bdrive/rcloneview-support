---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "Backblaze-B2-Synchronisierungsfehler beheben — Diagnose und Lösung mit RcloneView"
authors:
  - alex
description: "Backblaze-B2-Synchronisierungsfehler mit RcloneView beheben: Application-Key-Bereich prüfen, Logs lesen, Übertragungen und Wiederholungen anpassen und das Ergebnis mit Folder Compare verifizieren."
keywords:
  - Backblaze-B2-Synchronisierungsfehler beheben
  - Backblaze B2 401 unauthorized
  - B2 Application-Key-Berechtigungen
  - B2-Synchronisierung fehlgeschlagen
  - rclone B2 Fehlersuche
  - RcloneView Backblaze B2
  - B2-Upload-Fehler
  - Fehlersuche bei Cloud-Synchronisierung
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze-B2-Synchronisierungsfehler beheben — Diagnose und Lösung mit RcloneView

> Die meisten B2-Synchronisierungsfehler lassen sich auf wenige Ursachen zurückführen: Schlüsselbereich, Wiederholungen oder Logs, die Sie noch nicht angesehen haben.

Eine Backblaze-B2-Synchronisierung, die hängt oder Fehler meldet, lässt sich meist in wenigen Minuten beheben, sobald Sie sehen, was rclone tatsächlich meldet. RcloneView zeigt Job-Status, Logs und ein integriertes Terminal in einem Fenster, sodass Sie ohne Raten diagnostizieren können. Mit der FREE-Lizenz verbinden Sie S3, Azure oder Backblaze B2 mit vollem Lese- und Schreibzugriff.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zuerst den Application Key prüfen

B2-Remotes authentifizieren sich mit einer Application Key ID und einem Application Key. Schlägt ein Job sofort mit einem Autorisierungsfehler fehl, sind die üblichen Verdächtigen ein auf einen anderen Bucket beschränkter Schlüssel, ein Schlüssel ohne Schreibberechtigung oder ein Copy-and-paste-Fehler, bei dem Key ID und Key vertauscht wurden oder ein Leerzeichen am Ende steht.

Öffnen Sie den Remote Manager, bearbeiten Sie das B2-Remote und geben Sie beide Werte erneut ein. Wenn Sie auf der Backblaze-Seite zur Schlüsselverwaltung einen neuen Schlüssel erzeugen, denken Sie daran, dass der vollständige Application Key nur bei der Erstellung angezeigt wird. Durchsuchen Sie anschließend den Bucket im Explorer: Funktioniert das Auflisten, aber der Upload schlägt fehl, fehlt dem Schlüssel wahrscheinlich die Schreibberechtigung.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten eines Backblaze-B2-Remotes in RcloneView" class="img-large img-center" />

## Job History und Logs lesen

Öffnen Sie Job History, um Status (Completed, Errored oder Canceled), Dauer, Dateien und Geschwindigkeit jedes Laufs zu sehen. Ein Lauf, der nur bei einzelnen Dateien Fehler meldet, deutet auf dateibezogene Probleme hin; schlägt er gleich zu Beginn fehl, liegt es an Zugangsdaten oder Konnektivität.

Für Details aktivieren Sie das rclone-Logging unter Settings > Embedded Rclone, setzen die Log-Stufe auf DEBUG, starten das integrierte rclone neu und reproduzieren das Problem. Der Log-Tab und die Logdatei zeigen dann Einträge mit Zeitstempel, in denen Sie nach der fehlerhaften Datei oder Meldung suchen können.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mit fehlerhaften und abgeschlossenen Läufen in RcloneView" class="img-large img-center" />

## Übertragungen und Wiederholungen anpassen

Fehler bei großen Läufen entstehen oft durch zu hohe Parallelität. Verringern Sie in den Advanced Settings des Jobs die Anzahl der Dateiübertragungen und der Equality Checker (für langsame Backends werden höchstens 4 Checker empfohlen). Belassen Sie „Retry entire sync if fails“ bei seinem Standardwert 3, damit sich vorübergehende Netzwerkabbrüche von selbst erholen. Wenn ein Fotograf über Nacht Tausende RAW-Dateien synchronisiert, ist eine geringere Parallelität bei auftretenden Fehlern eine sinnvolle erste Anpassung.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live-Überwachung der Übertragungen im Transferring-Tab von RcloneView" class="img-large img-center" />

## Ergebnis prüfen und sicher erneut ausführen

Führen Sie nach den Änderungen einen Dry Run aus, um eine Vorschau der zu kopierenden oder zu löschenden Dateien zu sehen. Führen Sie dann den Job aus und nutzen Sie Folder Compare zwischen dem lokalen Ordner und dem B2-Bucket: Left-only-Dateien müssen noch hochgeladen werden, Different-Dateien zeigen Größenabweichungen. Füllen Sie Lücken mit Copy right und vergleichen Sie erneut, bis das Ergebnis sauber ist.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare bestätigt eine B2-Synchronisierung in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) **herunter**.
2. Geben Sie Ihre B2 Application Key ID und Ihren Key im Remote Manager erneut ein.
3. Aktivieren Sie DEBUG-Logging und führen Sie den fehlgeschlagenen Job erneut aus.
4. Verringern Sie die Parallelität, führen Sie einen Dry Run aus und verifizieren Sie mit Folder Compare.

Ein methodischer Durchgang durch Schlüssel, Logs und Einstellungen macht aus den meisten B2-Fehlern eine schnelle Korrektur.

---

**Verwandte Anleitungen:**

- [Backblaze B2 mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi-Synchronisierungsfehler beheben](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run: Synchronisierung vor der Übertragung in der Vorschau ansehen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
