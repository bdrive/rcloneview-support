---
slug: free-vs-plus-license-rcloneview
title: "FREE vs. PLUS Lizenz — Funktionsvergleich in RcloneView"
authors:
  - alex
description: "Vergleichen Sie die Funktionen der RcloneView FREE- und PLUS-Lizenz nebeneinander — Zeitplanung, Multi-Window, automatisches Einbinden und gefilterter Vergleich — um den richtigen Plan zu wählen."
keywords:
  - RcloneView Lizenz
  - RcloneView FREE vs PLUS
  - RcloneView PLUS Funktionen
  - geplante Cloud-Synchronisation
  - Multi-Window-Dateimanager
  - automatisches Einbinden beim Start
  - Ordnervergleich mit Filter
  - RcloneView Lizenzvergleich
  - Cloud-Synchronisation-Automatisierung
  - plattformübergreifender Dateimanager
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FREE vs. PLUS Lizenz — Funktionsvergleich in RcloneView

> Wissen Sie genau, was jede RcloneView-Lizenz freischaltet, bevor Sie Ihren Cloud-Speicher-Workflow darauf aufbauen.

Die Wahl zwischen der FREE- und der PLUS-Lizenz sollte kein Rätselraten erfordern. RcloneView unterteilt seinen Funktionsumfang klar: Die FREE-Lizenz deckt bereits vollständige Dateiverwaltung, Synchronisation und Einbindung über 90+ Anbieter ab, während PLUS Automatisierung und Multi-Instanz-Fähigkeiten für Power-User und Teams hinzufügt. Dieser Leitfaden schlüsselt genau auf, was in jeder Stufe enthalten ist, damit Sie die Lizenz an Ihre tatsächliche Arbeitsweise anpassen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was die FREE-Lizenz bereits enthält

Die FREE-Lizenz ist kein abgespecktes Testangebot — sie ist ein vollständiges Werkzeugset für den täglichen Gebrauch. Einbinden und Trennen von Cloud-Laufwerken, vollständige Dateiexplorer-Vorgänge (Kopieren, Verschieben, Löschen, Umbenennen), grundlegender Folder Compare und das gesamte Sync & Job Management System sind allesamt kostenlos enthalten. Das bedeutet, dass 1:N-Synchronisation (eine Quelle wird auf mehrere Ziele gespiegelt), Job History mit detaillierten Protokollen, Dry-Run-Vorschauen vor der Ausführung einer Synchronisation sowie Export/Import von Job-Konfigurationen alle mit FREE funktionieren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

Anders als reine Mount-Tools synchronisiert und vergleicht RcloneView auch Ordner — bereits mit der FREE-Lizenz — über dieselben 90+ Cloud-Anbieter, verbunden über den Remote Manager mit OAuth oder, je nach Dienst, anmeldedatenbasierter Einrichtung.

## Was PLUS freischaltet

PLUS wurde für Anwender entwickelt, die RcloneView unbeaufsichtigt oder in mehreren Kontexten gleichzeitig laufen lassen müssen. Das Hauptmerkmal ist Schedule-Based Sync: crontab-artige Zeitplanung mit Feldern für Minute, Stunde, Wochentag, Monatstag und Monat, plus ein Zeitplan-Simulator, um die nächsten Ausführungszeiten vor dem Speichern zu prüfen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

Neben der Zeitplanung fügt PLUS Auto Mount on Startup hinzu (sodass eingebundene Laufwerke sofort beim Hochfahren des Rechners bereit sind), Auto Start Schedule on Startup, Multi-Window-Unterstützung zum Ausführen unabhängiger RcloneView-Instanzen mit jeweils eigenem Zustand sowie Folder Compare with Filter zur Einschränkung von Vergleichen nach Ordnername oder Dateityp.

## Die richtige Lizenz für Ihren Workflow wählen

Wenn Sie Übertragungen manuell auslösen, Cloud-Speicher wie in einem Dateimanager durchsuchen und gelegentlich einen Vergleich oder eine Synchronisation ausführen, deckt FREE den gesamten Workflow ab. Wenn Sie Sync-Jobs nach Zeitplan ausführen müssen, ohne die App zu öffnen, Laufwerke nach einem Neustart automatisch eingebunden werden sollen oder mehrere unabhängige RcloneView-Fenster für separate Projekte benötigen, nimmt Ihnen PLUS die manuellen Schritte ab.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Richten Sie Ihre Remotes ein und führen Sie eine manuelle Synchronisation oder Einbindung aus, um zu prüfen, ob der FREE-Funktionsumfang zu Ihrer täglichen Nutzung passt.
3. Wenn Sie feststellen, dass Sie dieselbe Übertragung täglich zur gleichen Zeit wiederholen, versuchen Sie, einen Zeitplan zu erstellen, um zu sehen, ob die PLUS-Zeitplanung passt.
4. Aktivieren Sie einen Lizenzschlüssel unter Help > Activate License, sobald Sie sich für die passende Stufe entschieden haben.

Die Lizenz an Ihre tatsächlichen Gewohnheiten anzupassen — und nicht umgekehrt — hält Ihre Cloud-Speicher-Einrichtung einfach und vorhersehbar.

---

**Verwandte Anleitungen:**

- [Best Practices für Zeitpläne — Cron und Wiederholung in RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Multi-Window Parallel Explorer in RcloneView](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [Folder Compare mit Filter in RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
