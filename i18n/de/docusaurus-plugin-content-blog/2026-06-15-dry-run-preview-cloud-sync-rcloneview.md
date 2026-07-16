---
slug: dry-run-preview-cloud-sync-rcloneview
title: "Testlauf-Vorschau — Cloud-Synchronisation in RcloneView testen, bevor Änderungen übernommen werden"
authors:
  - tayson
description: "Nutzen Sie den Testlauf-Modus (Dry Run) von RcloneView, um vorab zu sehen, welche Dateien bei einer Cloud-Synchronisation kopiert oder gelöscht werden — die essenzielle Sicherheitsprüfung für große oder sensible Übertragungen."
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Testlauf-Vorschau — Cloud-Synchronisation in RcloneView testen, bevor Änderungen übernommen werden

> Bevor Sie Terabytes an Daten synchronisieren oder Dateien vom Ziel löschen, nutzen Sie den Testlauf-Modus von RcloneView, um jede geplante Änderung vorab zu prüfen — ohne dass auch nur eine einzige Datei verschoben wird.

Einer der kostspieligsten Fehler bei Cloud-Sync-Workflows ist es, erst im Nachhinein festzustellen, dass ein Job wichtige Dateien gelöscht, neuere Versionen überschrieben oder tausende Dateien einbezogen hat, die eigentlich nicht enthalten sein sollten. Die integrierte Testlauf-Funktion von RcloneView beseitigt dieses Risiko vollständig. Durch die Simulation einer Synchronisation vor deren Ausführung können Sie genau prüfen, welche Dateien kopiert und welche gelöscht würden, und so vor jeder echten Übertragung vollständige Sicherheit über die Job-Konfiguration gewinnen. Das ist besonders wertvoll, wenn Sie einen neuen Job zum ersten Mal einrichten oder nach der Anpassung von Filterregeln bei einem bestehenden Job.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ein Testlauf Ihnen zeigt

Wenn Sie in RcloneView einen Testlauf ausführen, durchläuft die Job-Engine die vollständige Synchronisationslogik für Ihre konfigurierte Quelle und Ihr Ziel, führt jedoch keine tatsächlichen Dateioperationen aus. Das Ergebnis ist eine detaillierte Vorschau mit zwei wichtigen Kategorien: **Dateien, die kopiert würden** von der Quelle zum Ziel, und **Dateien, die gelöscht würden** vom Ziel, um es an die Quelle anzugleichen. Sie können die vollständige Liste der Operationen durchscrollen und jeden Eintrag prüfen, bevor Sie etwas bestätigen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

Das ist besonders wichtig bei Einweg-Synchronisationsjobs, bei denen das Ziel so verändert wird, dass es die Quelle exakt spiegelt. Wurde eine Datei kürzlich aus dem Quellordner entfernt, Sie benötigen sie aber weiterhin am Ziel, zeigt der Testlauf die geplante Löschung an, bevor sie tatsächlich erfolgt. Eine Anwaltskanzlei, die 500.000 Fallakten als Backup zu Amazon S3 sichert, profitiert beispielsweise enorm davon, jeden geplanten Batch vor der Ausführung zu überprüfen und so versehentlichen Datenverlust zu vermeiden.

## So führen Sie einen Testlauf in RcloneView durch

Die Nutzung des Testlauf-Modus in RcloneView ist unkompliziert. Erstellen oder öffnen Sie im **Job-Manager** einen Synchronisationsjob und konfigurieren Sie Quelle, Ziel sowie beliebige Filteroptionen wie Dateityp-Ausschlüsse, maximale Dateigröße oder Ordnertiefenbeschränkungen. Wählen Sie zum Testen die Option **Testlauf** anstelle einer regulären Ausführung. RcloneView führt die Simulation durch und zeigt die vollständige Liste der geplanten Operationen im Tab „Übertragung" an — es werden keine Daten verschoben, bis Sie bewusst eine echte Ausführung starten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

Nach der Prüfung der Testlauf-Ergebnisse können Sie Ihre Filtereinstellungen anpassen und die Simulation beliebig oft wiederholen. Erst wenn die geplante Operationsliste genau Ihren Erwartungen entspricht, sollten Sie die tatsächliche Synchronisation auslösen. Dieser iterative Ansatz ist besonders nützlich bei komplexen Filterregeln über große Verzeichnisstrukturen hinweg, die mehrere Cloud-Anbieter umfassen.

## Testlauf-Ergebnisse im Job-Verlauf prüfen

RcloneView protokolliert jeden Testlauf in der Ansicht **Job-Verlauf**, deutlich als Simulationsausführung neben den echten Job-Läufen gekennzeichnet. Sie können die simulierte Dateianzahl, die voraussichtliche Gesamtgröße, die verstrichene Zeit sowie alle aufgetretenen Warnungen oder Fehler einsehen — und erhalten so ein vollständiges Bild vom Verhalten des Jobs, bevor Sie sich festlegen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

Für Teams mit wiederkehrenden geplanten Backups ist ein Testlauf nach jeder Konfigurationsänderung ein unverzichtbarer Sicherheitsschritt. Er kostet nichts — es werden keine Daten übertragen, kein Speicherplatz verbraucht —, verhindert aber schwer rückgängig zu machende Fehler, die andernfalls erst nach Abschluss einer Synchronisation sichtbar würden.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Home-Tab > Sync** und konfigurieren Sie einen neuen Synchronisationsjob mit Quelle und Ziel.
3. Wählen Sie den **Testlauf**-Modus im Job-Manager, um alle geplanten Dateioperationen vorab anzuzeigen.
4. Prüfen Sie die Kopier- und Löschlisten, passen Sie bei Bedarf die Filter an und starten Sie dann die echte Synchronisation mit Zuversicht.

Der Testlauf ist die einfachste Gewohnheit, die vorsichtige, reversible Cloud-Operationen von kostspieligen Überraschungen unterscheidet.

---

**Verwandte Anleitungen:**

- [Filterregeln und selektive Synchronisation mit RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Checksummen-verifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
