---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "Ins Stocken geratene Cloud-Übertragung beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Beheben Sie ins Stocken geratene oder eingefrorene Cloud-Übertragungen in RcloneView — diagnostizieren Sie hängende Synchronisationsjobs, lösen Sie Timeouts und starten Sie Übertragungen ohne Datenverlust neu."
keywords:
  - cloud transfer stuck
  - sync stalled fix
  - RcloneView transfer freeze
  - cloud upload stuck
  - fix stalled sync
  - rclone transfer timeout
  - cloud backup not progressing
  - resolve frozen transfer
  - cloud transfer hang
  - rclone timeout recovery
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ins Stocken geratene Cloud-Übertragung beheben — Lösung mit RcloneView

> Eine Übertragung, die stundenlang bei 99 % steht, deutet auf ein konkretes zugrunde liegendes Problem hin — RcloneView bietet die Überwachungs- und Steuerungswerkzeuge, um den Stillstand zu diagnostizieren und die Übertragung ohne Datenverlust sauber neu zu starten.

Eine Cloud-Übertragung, die kurz vor dem Abschluss einfriert, oder ein Synchronisationsjob, der endlos läuft, ohne fertig zu werden, gehört zu den störendsten Problemen der Cloud-Verwaltung. Ins Stocken geratene Übertragungen resultieren typischerweise daraus, dass große Dateien an API-Timeout-Grenzen stoßen, aus Netzwerkunterbrechungen, von denen sich die Wiederholungslogik von rclone nicht erholt, oder aus anbieterseitigem Throttling, das Verbindungen hängen lässt. RcloneView zeigt an, was gerade passiert, und ermöglicht es Ihnen, gezielt einzugreifen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Den Stillstand diagnostizieren

Öffnen Sie den Tab **Transferring** von RcloneView in der unteren Info-Ansicht. Dieses Panel zeigt aktive Jobs mit Echtzeit-Fortschritt: Übertragungsgeschwindigkeit, Dateianzahl und die konkrete Datei, die gerade verarbeitet wird. Ein Stillstand ist hier sofort sichtbar — die Geschwindigkeit fällt auf 0 B/s, während eine bestimmte Datei keine Fortschrittsänderung zeigt.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

Wechseln Sie zum Tab **Log**, um Fehlermeldungen einzusehen. Häufige Ursachen für Stillstände erscheinen hier mit Zeitstempel:
- **„too many requests"** — API-Rate-Limiting drosselt die Übertragung
- **„connection reset by peer"** — eine Netzwerkunterbrechung hat die aktive Sitzung beendet
- **„EOF"** oder Timeout-Meldungen — der Anbieter hat die Verbindung während eines großen Datei-Uploads geschlossen

Bei sehr großen Dateien (mehrere GB große Videodateien, Datenbank-Dumps) liegt die Ursache oft in einem sitzungsseitigen Timeout beim Anbieter während des Zusammensetzens eines Multipart-Uploads. Der Upload wird abgeschlossen, doch die Sitzung des Anbieters läuft ab, bevor die vollständigen Teile bestätigt werden, sodass rclone unendlich lange wartet.

## Eine ins Stocken geratene Übertragung wiederherstellen

Brechen Sie den ins Stocken geratenen Job ab, indem Sie im Tab Transferring auf **Cancel** beim aktiven Job klicken. Die Synchronisations- und Kopierjobs von RcloneView sind für einen sicheren Neustart ausgelegt — wenn Sie denselben Job erneut ausführen, vergleicht rclone, was am Ziel bereits vorhanden ist, und überspringt Dateien, die bereits erfolgreich übertragen wurden. Nur die ins Stocken geratene Datei (und alles, was noch nicht begonnen hatte) wird erneut versucht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

Bei anhaltenden Stillständen bei bestimmten großen Dateien zu S3-kompatiblen Backends erhöhen Sie die Chunk-Größe in den globalen rclone-Flags von RcloneView (Settings > Embedded Rclone > Global Rclone Flags): Fügen Sie `--s3-chunk-size 256M` hinzu, um die Gesamtzahl der API-Aufrufe zu reduzieren, die für das Zusammensetzen großer Dateien erforderlich sind.

## Zukünftige Stillstände vermeiden

Setzen Sie die Wiederholungsanzahl in den Job-Einstellungen (Schritt 2: Advanced Settings > **Retry entire sync if fails**) auf 3 oder höher — so lösen vorübergehende Netzwerkprobleme automatische Wiederholungsversuche aus, anstatt zu einem sofortigen Job-Fehler zu führen. Bei Übertragungen über langsame oder instabile Verbindungen (VPN, mobiler Hotspot) reduziert das Verringern der **Number of file transfers** (gleichzeitige Übertragungen) die Auslastung der Verbindung.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

Der Tab **Job History** zeigt Muster im Zeitverlauf — wenn derselbe Job konsistent zu einer bestimmten Tageszeit ins Stocken gerät, liegt die Ursache wahrscheinlich in anbieterseitigem Rate-Limiting während der Spitzenzeiten. Eine Anpassung des Zeitplans auf verkehrsarme Zeiten löst dies ohne jegliche Konfigurationsänderungen.

## Erste Schritte

1. Überwachen Sie Übertragungen im Tab **Transferring** — achten Sie auf 0 B/s Geschwindigkeit bei einer bestimmten Datei.
2. Prüfen Sie den Tab **Log** auf Fehlermeldungen, die die Grundursache angeben (Timeout, Rate-Limit, Netzwerk-Reset).
3. Brechen Sie den Job ab und starten Sie ihn neu — rclone setzt dort fort, wo es aufgehört hat, und überspringt abgeschlossene Dateien.
4. Erhöhen Sie die Wiederholungsanzahl und passen Sie die Chunk-Größe in den Advanced Settings an, um künftige Stillstände zu vermeiden.

Ins Stocken geratene Übertragungen lassen sich fast immer wiederherstellen — entscheidend ist, herauszufinden, ob die Ursache anbieterseitig, netzwerkseitig oder konfigurationsbedingt ist, und dann die passende Lösung anzuwenden.

---

**Weiterführende Anleitungen:**

- [Unterbrochene oder fehlgeschlagene Cloud-Übertragungen mit RcloneView wiederherstellen](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Langsame Cloud-Uploads beheben — Geschwindigkeitsoptimierung mit RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Überwachung von Job-Verlauf und Übertragungsprotokollen mit RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
