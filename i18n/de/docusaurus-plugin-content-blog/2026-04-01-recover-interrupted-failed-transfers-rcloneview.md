---
slug: recover-interrupted-failed-transfers-rcloneview
title: "So stellen Sie unterbrochene oder fehlgeschlagene Cloud-Übertragungen mit RcloneView wieder her"
authors:
  - tayson
description: "Unterbrochene Cloud-Übertragungen fortsetzen, von teilweisen Uploads erholen und fehlgeschlagene Synchronisationsjobs in RcloneView beheben. Praktische Techniken für große Dateiübertragungen, die nicht abgeschlossen werden."
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# So stellen Sie unterbrochene oder fehlgeschlagene Cloud-Übertragungen mit RcloneView wieder her

> Netzwerkabbrüche, API-Timeouts, Laptop-Ruhezustände und Stromausfälle unterbrechen Cloud-Übertragungen. RcloneView und rclone verfügen über integrierte Mechanismen, um sicher fortzusetzen, ohne alles von Grund auf neu hochladen zu müssen.

Die Übertragung von Terabytes in die Cloud ist kein Fünf-Minuten-Vorgang. Bei lang laufenden Jobs sind Verbindungsunterbrechungen nahezu unvermeidlich. Die gute Nachricht: Die intelligente Übertragungs-Engine von rclone — die RcloneView im Hintergrund verwendet — ist genau für dieses Szenario ausgelegt. Kopier- und Synchronisationsvorgänge sind von Natur aus idempotent: Ein erneuter Lauf überspringt bereits übertragene Dateien und setzt dort fort, wo es unterbrochen wurde.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie rclone unterbrochene Übertragungen behandelt

Rclone vergleicht Quelle und Ziel, bevor jede Datei übertragen wird. Wenn Sie einen Kopier- oder Synchronisationsjob nach einer Unterbrechung erneut ausführen:

- **Bereits übertragene Dateien** werden übersprungen (nach Größe + Änderungsdatum oder Prüfsumme, falls aktiviert).
- **Teilweise übertragene Dateien** werden bereinigt und von Anfang an neu übertragen.
- **Noch nicht begonnene Dateien** werden in die Warteschlange gestellt und im fortgesetzten Lauf übertragen.

Das bedeutet, dass es in den meisten Fällen keine spezielle „Fortsetzen“-Schaltfläche gibt — führen Sie einfach denselben Job erneut aus.

## Schritt 1 — Denselben Job erneut ausführen

Öffnen Sie nach einer Unterbrechung **Jobs** in RcloneView und klicken Sie erneut auf **Ausführen** für denselben Job:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneView wird:
1. Die Quelle und das Ziel auflisten.
2. Bereits im Ziel vorhandene Dateien vergleichen.
3. Erfolgreich übertragene Dateien überspringen.
4. Nur fehlende oder geänderte Dateien übertragen.

Bei einem Job mit 10.000 Dateien, von denen 8.000 erfolgreich waren, dauert die erneute Ausführung nur einen Bruchteil der ursprünglichen Zeit.

## Schritt 2 — Auftragsverlauf auf fehlgeschlagene Dateien prüfen

Überprüfen Sie vor dem erneuten Ausführen den **Auftragsverlauf** in RcloneView, um zu verstehen, was fehlgeschlagen ist:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

Das Protokoll zeigt:
- Welche spezifischen Dateien fehlgeschlagen sind
- Die Fehlermeldung für jeden Fehler
- Ob die Fehler vorübergehend (Netzwerkfehler) oder dauerhaft (Berechtigungen, Pfad zu lang) waren

Dauerhafte Fehler benötigen eine Korrektur vor dem erneuten Ausführen — vorübergehende Fehler lösen sich bei einem erneuten Versuch von selbst.

## Schritt 3 — Umgang mit teilweise hochgeladenen großen Dateien

Bei sehr großen Dateien (mehrere GB) hinterlässt eine Unterbrechung mitten im Upload eine unvollständige Datei im Ziel. Das Verhalten von rclone hängt vom Anbieter ab:

| Anbieter | Verhalten bei unvollständigen Dateien |
|----------|-----------------------|
| Amazon S3 / S3-kompatibel | Multipart-Uploads: unvollständige Teile bleiben verwaist, rclone versucht es von vorne |
| Google Drive | Fortsetzbare Uploads: rclone kann mitten in der Datei fortsetzen, wenn die Sitzung noch gültig ist |
| OneDrive | Fortsetzbare Uploads: ähnlich wie Google Drive |
| Backblaze B2 | Große Dateiteile: unvollständige Uploads sind in der B2-Konsole sichtbar |

**Für verwaiste S3-Multipart-Uploads:** Diese sammeln sich an und verursachen Kosten. Bereinigen Sie sie mit:
- RcloneView Terminal: `rclone cleanup s3-remote:bucket-name`
- Oder über die AWS-Konsole unter S3 → Ihr Bucket → Multipart-Uploads

## Schritt 4 — `--retries` und `--low-level-retries` verwenden

Konfigurieren Sie bei Jobs, die aufgrund vorübergehender Fehler fehlschlagen, den RcloneView-Job für automatische Wiederholungsversuche:

Fügen Sie Folgendes in das Feld **Custom flags** ein:
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — den gesamten Job bei Fehlern bis zu 5 Mal wiederholen
- `--retries-sleep 10s` — 10 Sekunden zwischen den Wiederholungsversuchen warten
- `--low-level-retries 20` — einzelne Low-Level-Operationen (API-Aufrufe) bis zu 20 Mal wiederholen

## Schritt 5 — Prüfsummen-Abweichungen behandeln

Nach einer unterbrochenen Übertragung stellt ein erneuter Lauf mit Prüfsummenverifizierung die Datenintegrität sicher:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

Aktivieren Sie in RcloneView die **Prüfsummenverifizierung** in den Jobeinstellungen. Dadurch wird rclone gezwungen, die Dateiinhalte zu vergleichen (nicht nur Größe/Änderungsdatum) — langsamer, aber es wird garantiert, dass teilweise geschriebene Dateien erkannt und neu übertragen werden.

## Schritt 6 — Wiederherstellung nach einer Synchronisation, die Dateien gelöscht hat

Wenn ein Synchronisationsjob in die falsche Richtung lief — das Ziel wurde über die Quelle kopiert statt umgekehrt — müssen Sie sich über die Versionierung des Cloud-Anbieters erholen:

- **Google Drive**: Aus dem Papierkorb oder der Versionshistorie wiederherstellen (verfügbar für 30–180 Tage).
- **OneDrive**: Aus dem Papierkorb oder der Versionshistorie wiederherstellen.
- **S3 mit Versionierung**: Eine vorherige Version in der S3-Konsole wiederherstellen.
- **Backblaze B2**: Aus der Versionshistorie wiederherstellen, falls aktiviert.

Deshalb wird für erste große Übertragungen dringend empfohlen, den **Kopier**-Modus (nicht destruktiv) anstelle der Synchronisation zu verwenden.

## Prävention: Übertragungen für mehr Ausfallsicherheit konfigurieren

Bauen Sie Ausfallsicherheit von Anfang an in Ihre Übertragungsjobs ein:

| Einstellung | Empfehlung |
|---------|----------------|
| Job-Modus | Verwenden Sie **Kopieren** für erste Migrationen; Synchronisation für laufende Wartung |
| Wiederholungsversuche | Setzen Sie `--retries 5 --retries-sleep 10s` |
| Prüfsumme | Für kritische Daten aktivieren |
| Übertragungen | Anzahl gleichzeitiger Übertragungen bei instabilen Verbindungen verringern |
| Zeitplan | Während stabiler Netzwerkfenster ausführen (nachts, ohne VPN) |
| Bandbreite | Grenzen setzen, um Timeouts durch Netzwerküberlastung zu vermeiden |

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Auftragsverlauf prüfen**, um festzustellen, was fehlgeschlagen ist und warum.
3. **Den Job erneut ausführen** — rclone überspringt abgeschlossene Dateien automatisch.
4. **Wiederholungsversuche und Prüfsummenverifizierung konfigurieren** für zukünftige Ausfallsicherheit.

Die meisten unterbrochenen Übertragungen erfordern nichts weiter als einen erneuten Klick auf „Ausführen“. Rclone erledigt den Rest.

---

**Verwandte Anleitungen:**

- [Datenverlust durch falsche Synchronisationsrichtung vermeiden](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [Prüfsummenverifizierte Cloud-Migrationen](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Große Cloud-Übertragungen beschleunigen](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
