---
slug: job-export-import-portable-workflow-rcloneview
title: "Job-Export und -Import — Portable Synchronisations-Workflows in RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Synchronisations-Jobs in RcloneView exportieren und importieren, um Workflows zwischen Rechnern zu teilen, Team-Konfigurationen zu standardisieren und sich nach einer Systemmigration schnell wiederherzustellen."
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - feature
  - job-management
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Job-Export und -Import — Portable Synchronisations-Workflows in RcloneView

> Mit RcloneView können Sie alle Ihre Synchronisations-Jobs in eine JSON-Datei exportieren und auf jedem anderen Rechner importieren — das macht Ihre Workflows wirklich portabel und Ihre Team-Konfigurationen konsistent.

Das Einrichten komplexer Synchronisations-Jobs braucht Zeit: die Wahl der richtigen Quell- und Ziel-Remotes, das Konfigurieren von Filtern, das Festlegen von Bandbreitenlimits und das Feinabstimmen der Optionen für jeden Job. Das Letzte, was Sie wollen, ist diese Arbeit zu wiederholen, wenn Sie auf einen neuen Computer umsteigen, einen zweiten Arbeitsplatz hinzufügen oder ein neues Teammitglied einarbeiten. Die Job-Export- und -Import-Funktion von RcloneView löst dieses Problem, indem sie Ihre gesamte Job-Konfiguration in einer portablen JSON-Datei erfasst, die auf jeder RcloneView-Installation geladen werden kann.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ihre Synchronisations-Jobs exportieren

Um Ihre Jobs zu exportieren, öffnen Sie den **Job Manager** in RcloneView und suchen Sie in der Symbolleiste oder im Kontextmenü nach der Option **Export**. RcloneView exportiert alle konfigurierten Synchronisations-Jobs — einschließlich ihrer Quell-/Zielpfade, Filterregeln, rclone-Flags und Zeitplanungsinformationen — in eine einzige JSON-Datei. Sie legen fest, wo diese Datei gespeichert wird.

Es ist eine gute Praxis, Ihre Jobs regelmäßig als Teil Ihrer umfassenderen Backup-Strategie zu exportieren. Speichern Sie das exportierte JSON in einem Cloud-Ordner (zum Beispiel Ihrem Google Drive oder Ihrem Backblaze B2 Backup-Bucket), damit es unabhängig davon, was mit Ihrem lokalen Rechner passiert, immer zugänglich ist. Betrachten Sie es als Backup Ihrer Backup-Konfiguration.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## Jobs auf einem neuen Rechner importieren

Installieren Sie auf dem Zielrechner RcloneView von [rcloneview.com](https://rcloneview.com/src/download.html) und richten Sie die benötigten Cloud-Remotes ein (die gleichen Remote-Namen müssen vorhanden sein, damit die importierten Jobs korrekt funktionieren). Öffnen Sie dann den **Job Manager** und verwenden Sie die Funktion **Import**, um Ihre exportierte JSON-Datei zu laden. Alle Ihre Synchronisations-Jobs erscheinen sofort und sind einsatzbereit.

Dieser Workflow ist besonders wertvoll nach einer Computer-Migration. Anstatt ein Dutzend Synchronisations-Jobs manuell neu anzulegen, dauert der Import nur Sekunden. Der gleiche Prozess funktioniert auch für die Team-Standardisierung: Eine Teamleitung erstellt und exportiert eine verbindliche Job-Konfiguration und verteilt anschließend die JSON-Datei an alle Teammitglieder, die sie in ihre eigenen RcloneView-Installationen importieren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## Team-Standardisierung und Notfallwiederherstellung

Für Teams, die mehrere Cloud-Ziele verwalten, ist Konsistenz bei der Konfiguration von Synchronisations-Jobs entscheidend. Wenn jedes Teammitglied seine Jobs manuell konfiguriert, können Abweichungen bei Filterregeln oder Zielpfaden zu fehlenden Dateien oder unbeabsichtigten Überschreibungen führen. Indem Sie eine Master-Job-Exportdatei pflegen und sie auf allen Team-Rechnern importieren, stellen Sie sicher, dass alle mit identischen Workflows arbeiten.

Die Export-/Import-Funktion dient außerdem als leichtgewichtiger Mechanismus zur Notfallwiederherstellung Ihrer Synchronisationskonfiguration. Muss RcloneView neu installiert oder ein Rechner ersetzt werden, ist die Wiederherstellung Ihres gesamten Workflows ein zweistufiger Prozess: Importieren Sie die rclone-Remote-Konfiguration und importieren Sie das Job-JSON. Der Export/Import von RcloneView ist in der kostenlosen Version verfügbar — für diese Funktion ist keine PLUS-Lizenz erforderlich.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Richten Sie Ihre Synchronisations-Jobs im **Job Manager** auf Ihrem primären Rechner ein.
3. Verwenden Sie **Export** im Job Manager, um alle Jobs in einer JSON-Datei zu speichern.
4. Bewahren Sie die Export-Datei zur Sicherheit an einem Cloud-Backup-Speicherort auf.
5. Installieren Sie auf einem neuen Rechner RcloneView, richten Sie übereinstimmende Remote-Namen ein und **importieren** Sie das JSON, um alle Jobs wiederherzustellen.

Job-Export und -Import machen RcloneView zu einer wirklich portablen Synchronisationsplattform — einer, bei der Ihre Investition in Workflows nie an einen einzelnen Rechner gebunden ist.

---

**Weiterführende Anleitungen:**

- [Automatisierte tägliche Cloud-Backups mit RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Rclone-Konfiguration mit RcloneView sichern und migrieren](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Stapelverarbeitung in RcloneView](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
