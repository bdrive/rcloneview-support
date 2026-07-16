---
slug: batch-operations-rcloneview
title: "Stapelverarbeitung — Mehrstufige Cloud-Workflows in RcloneView automatisieren"
authors:
  - tayson
description: "Verwenden Sie die Stapelverarbeitungsfunktion von RcloneView, um mehrere Cloud-Aufgaben zu automatisierten Workflows zu verketten. Erstellen, kopieren, synchronisieren, verifizieren und bereinigen Sie Dateien in aufeinanderfolgenden Schritten."
keywords:
  - RcloneView Stapelverarbeitung
  - Cloud-Workflows automatisieren RcloneView
  - mehrstufige Cloud-Automatisierung
  - RcloneView Workflow-Automatisierung
  - Stapel-Cloud-Dateioperationen
  - rclone Stapelverarbeitung GUI
  - Cloud-Aufgabenautomatisierung RcloneView
  - sequentielle Cloud-Operationen
  - Cloud-Synchronisationsschritte automatisieren
  - RcloneView erweiterte Automatisierung
tags:
  - feature
  - automation
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Stapelverarbeitung — Mehrstufige Cloud-Workflows in RcloneView automatisieren

> Die Stapelverarbeitungsfunktion von RcloneView ermöglicht es Ihnen, Cloud-Aufgaben zu verketten — Ordner erstellen, Dateien kopieren, synchronisieren, verifizieren, verschieben und bereinigen — zu einem einzigen automatisierten Workflow, der von Anfang bis Ende durchläuft.

Die meisten Cloud-Verwaltungsaufgaben sind keine einstufigen Vorgänge. Ein typischer Dateiverarbeitungs-Workflow könnte das Erstellen eines Staging-Ordners, das Kopieren von Quelldateien hinein, das Ausführen einer Synchronisation zu einem Produktions-Bucket, die Verifizierung der Übertragung und das anschließende Entfernen der Staging-Inhalte umfassen. Jeden Schritt manuell nacheinander auszuführen ist mühsam und fehleranfällig. Die Stapelverarbeitungsfunktion (Beta) von RcloneView automatisiert genau diese Art von mehrstufigem Workflow, indem sie Operationen in einer definierten Reihenfolge mit Variablen-Weiterleitung zwischen den Schritten verkettet.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was ist die Stapelverarbeitung?

Die Stapelverarbeitung ist eine Automatisierungsfunktion in RcloneView, mit der Sie eine Abfolge von Cloud-Dateioperationen definieren können, die der Reihe nach ausgeführt werden. Jede Operation im Stapel wird als „Schritt" bezeichnet, und die Schritte werden sequentiell ausgeführt — jeder wird abgeschlossen, bevor der nächste beginnt. Unterstützte Schritttypen umfassen:

- **mkdir** — einen Ordner an einem angegebenen Cloud-Pfad erstellen
- **copyFolder / copyFile** — Ordner oder einzelne Dateien zwischen Remotes kopieren
- **sync** — Quelle mit Ziel synchronisieren
- **check** — überprüfen, ob die Ordnerinhalte zwischen Quelle und Ziel übereinstimmen
- **move** — Dateien oder Ordner zwischen Speicherorten verschieben
- **rename** — Dateien an einem Cloud-Pfad umbenennen
- **delete / deleteFile** — filterbasiertes Löschen oder Entfernen einzelner Dateien
- **purge** — einen gesamten Verzeichnisbaum entfernen
- **rmdirs** — leere Verzeichnisse entfernen
- **filelist** — eine Dateiliste erstellen
- **sleep** — die Ausführung für eine bestimmte Dauer pausieren

Diese Flexibilität unterstützt eine Vielzahl realer Automatisierungsszenarien, ohne dass Skripting erforderlich ist.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a multi-step batch operation workflow in RcloneView" class="img-large img-center" />

## Einen mehrstufigen Cloud-Workflow erstellen

Betrachten Sie ein Datenteam, das tägliche Berichtsdateien verarbeitet: Es muss eingehende Dateien in einen Verarbeitungsordner kopieren, verarbeitete Ergebnisse mit einem S3-Bucket synchronisieren, die Synchronisation mit einem Prüfsummenvergleich verifizieren und anschließend die lokalen Staging-Dateien entfernen. Als Stapeloperation in RcloneView:

1. **mkdir** — Ordner `processing/YYYY-MM-DD` im Staging-Remote erstellen
2. **copyFolder** — eingehende Dateien in den Verarbeitungsordner kopieren
3. **sync** — den Verarbeitungsordner mit dem S3-Produktions-Bucket synchronisieren
4. **check** — überprüfen, ob die Inhalte des S3-Buckets mit dem Verarbeitungsordner übereinstimmen
5. **purge** — den Staging-Ordner nach erfolgreicher Verifizierung entfernen

Die Variablen-Weiterleitung zwischen den Schritten ermöglicht es, die Ausgabe eines Schritts (z. B. einen dynamisch generierten Ordnerpfad) in den nächsten einzuspeisen, wodurch datumsbasierte Workflows unkompliziert zu konfigurieren sind.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-step batch workflow automating cloud-to-cloud data pipeline in RcloneView" class="img-large img-center" />

## Dry-Run-Vorschau vor der Ausführung

Wie einzelne Synchronisationsjobs unterstützt die Stapelverarbeitung einen Dry-Run-Vorschaumodus. Bevor Sie einen Stapel ausführen, der Cloud-Daten ändert oder löscht, führen Sie einen Dry-Run aus, um genau zu sehen, was jeder Schritt tun würde, ohne tatsächliche Änderungen vorzunehmen. Dies ist für Produktions-Workflows unerlässlich, bei denen Fehler teuer rückgängig zu machen sind.

Die schrittweise Fortschrittsverfolgung zeigt an, welcher Schritt gerade ausgeführt wird und welche Ergebnisse jeder abgeschlossene Schritt liefert — sodass Sie komplexe mehrstufige Operationen über die Benutzeroberfläche von RcloneView überwachen können.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Monitoring batch operation step-by-step progress in RcloneView" class="img-large img-center" />

## Wichtiger Hinweis: Beta-Status

Die Stapelverarbeitung ist eine Beta-Funktion in RcloneView. Während die Kernfunktionalität bestätigt und in der Anwendung verfügbar ist, kann die Stabilität bei komplexen mehrstufigen Workflows variieren. Testen Sie Stapel-Workflows gründlich in Nicht-Produktionsumgebungen, bevor Sie sie für kritische Datenpipelines einsetzen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Reviewing batch operation execution status in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Greifen Sie über die Job-Manager-Oberfläche auf die Stapelverarbeitungsfunktion zu.
3. Fügen Sie Ihrem Stapel Schritte in der gewünschten Ausführungsreihenfolge hinzu.
4. Führen Sie eine Dry-Run-Vorschau aus und starten Sie dann den vollständigen Stapel-Workflow.

Die Stapelverarbeitung in RcloneView schließt die Lücke zwischen manueller Cloud-Verwaltung und vollständigem Skripting — und bietet Ihnen leistungsstarke mehrstufige Automatisierung über eine visuelle Oberfläche, ohne dass Code erforderlich ist.

---

**Verwandte Anleitungen:**

- [Tägliche Cloud-Backups mit RcloneView automatisieren](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Filterregeln und selektive Synchronisation in RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Eins-zu-viele-Synchronisation — Mehrere Ziele in RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
