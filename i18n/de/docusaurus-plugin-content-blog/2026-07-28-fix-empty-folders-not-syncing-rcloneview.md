---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Leere Ordner werden nicht synchronisiert beheben — So löst du es mit RcloneView"
authors:
  - morgan
description: "Fehlen leere Ordner nach einer Synchronisierung? Erfahre, warum rclone sie standardmäßig überspringt und wie du das Problem mit der Option zum Erstellen leerer Verzeichnisse in RcloneView behebst."
keywords:
  - leere Ordner werden nicht synchronisiert
  - rclone leere Verzeichnisse fehlen
  - Cloud-Synchronisation leere Ordner beheben
  - RcloneView leere Verzeichnisse erstellen
  - fehlende Ordnerstruktur bei Synchronisation
  - Cloud-Backup leere Ordner
  - rclone Synchronisation Ordnerstruktur
  - RcloneView Fehlerbehebung Synchronisation
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leere Ordner werden nicht synchronisiert beheben — So löst du es mit RcloneView

> Wenn ein Synchronisationsjob leere Ordner stillschweigend aus dem Ziel entfernt, liegt die Lösung in einer einzigen Checkbox, die die meisten Nutzer bei der Einrichtung nie bemerken.

Ein Team, das ein Projektarchiv zwischen Clouds migriert, erwartet oft, dass das Ziel die Ordnerstruktur der Quelle exakt widerspiegelt — einschließlich Platzhalterordnern, die noch keine Dateien enthalten. Standardmäßig überspringt rclone (und damit auch RcloneView) das Erstellen leerer Verzeichnisse im Ziel, da die meisten Object-Storage-Backends kein echtes Ordnerkonzept kennen; sie verfolgen nur Datei-Keys. Wenn dein Synchronisationsjob erfolgreich abgeschlossen wird, aber eine Reihe leerer Unterordner im Ziel fehlt, ist das erwartetes Verhalten und kein Fehler — und RcloneView verfügt über eine integrierte Einstellung, um dies zu ändern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum leere Ordner wegfallen

Lokale Dateisysteme und einige Anbieter speichern Ordner als reale Objekte, aber viele Cloud-Backends — einschließlich S3-kompatiblem Speicher — stellen einen „Ordner" nur als gemeinsames Präfix dar, das sich Datei-Keys teilen. Enthält ein Verzeichnis keine Dateien, gibt es keinen Key, der erstellt werden müsste, sodass auf der anderen Seite nichts erscheint. Das Standardverhalten von rclone bei der Synchronisation spiegelt das wider: Es kopiert Dateien und lässt die Ordnerstruktur implizit aus den Dateipfaden entstehen, was Übertragungen schnell hält, aber tatsächlich leere Ordner zurücklässt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

Deshalb kann ein Synchronisationsjob als „Completed" mit null Fehlern gemeldet werden, obwohl der Ordnerbaum im Ziel dünner ist als in der Quelle. Es handelt sich nicht um eine fehlgeschlagene Übertragung — das Tool tut genau das, wozu es angewiesen wurde, nur fehlt ein Detail, das die meisten Nutzer für automatisch halten.

## Leere Verzeichnisse erstellen aktivieren

RcloneView macht dieses Verhalten direkt im Synchronisationsassistenten zugänglich. In Schritt 1 (Speicher konfigurieren) gibt es neben der Auswahl von Quelle und Ziel sowie dem Umschalten der Synchronisationsrichtung die Option **Leere Verzeichnisse erstellen (Create empty directories)**. Aktivierst du sie vor dem Ausführen des Jobs, weist das rclone an, im Ziel explizit Platzhaltereinträge für leere Ordner zu erstellen, sodass die kopierte Struktur Ordner für Ordner mit der Quelle übereinstimmt.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

Hast du bereits eine Synchronisation ohne aktivierte Option ausgeführt, bearbeite einfach den bestehenden Job, aktiviere die Einstellung und führe ihn erneut aus — RcloneView bindet ein und synchronisiert über 90 Anbieter aus einem einzigen Fenster, sodass ein erneuter Lauf mit derselben Quelle und demselben Ziel eine schnelle Korrektur ist und keine vollständige Neukonfiguration.

## Ordnerstruktur nach der Korrektur überprüfen

Bevor du eine große Migration einem einzigen Durchlauf anvertraust, nutze Dry Run, um eine Vorschau darauf zu erhalten, was der korrigierte Job tatsächlich tun wird — es listet jede Datei und jeden Ordner auf, der zur Erstellung vorgesehen ist, ohne das Ziel zu berühren, sodass du bestätigen kannst, dass die Lücke bei den leeren Ordnern geschlossen ist, bevor du dich festlegst. Für ein laufendes Projekt ist danach auch Folder Compare nützlich: Richte es auf beide Seiten und filtere nach „nur links" oder „nur rechts", um verbleibende strukturelle Abweichungen zu finden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## Erste Schritte

1. **Lade RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffne den Synchronisationsjob, dem leere Ordner fehlen, und klicke auf Edit.
3. Aktiviere in Schritt 1 die Checkbox **Leere Verzeichnisse erstellen (Create empty directories)**.
4. Führe einen Dry Run aus, um zu bestätigen, dass die Ordner erstellt werden, und führe dann die Synchronisation aus.

Sobald die Einstellung aktiviert ist, bleibt bei jedem zukünftigen Lauf dieses Jobs der vollständige Ordnerbaum erhalten — kein Suchen mehr nach fehlenden Platzhalterverzeichnissen nach einer Migration.

---

**Verwandte Anleitungen:**

- [Dry Run — Cloud-Synchronisation mit RcloneView vor der Übertragung in der Vorschau ansehen](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Filterregeln — Selektive Synchronisation mit RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Datenverlust durch falsche Synchronisationsrichtung mit RcloneView vermeiden](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
