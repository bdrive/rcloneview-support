---
slug: cloud-storage-libraries-archives-rcloneview
title: "Cloud-Speicher für Bibliotheken und Archive — Langfristige digitale Bewahrung mit RcloneView"
authors:
  - alex
description: "Wie Bibliotheken und Archive RcloneView nutzen, um digitalisierte Sammlungen über Cloud-Speicher hinweg mit verifizierten Backups und Zugriffskontrollen zu verwalten."
keywords:
  - Cloud-Speicher für Bibliotheken
  - Backup für digitale Archive
  - Cloud-Speicher für digitale Bewahrung
  - RcloneView Archive
  - Speicher für Bibliotheksdigitalisierung
  - Backup-Archiv mit Prüfsummenverifizierung
  - Digitale Bewahrung in mehreren Clouds
  - Cloud-Synchronisation für Archive
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
  - digital-preservation
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloud-Speicher für Bibliotheken und Archive — Langfristige digitale Bewahrung mit RcloneView

> Digitalisierte Handschriften, Mikrofilm-Scans und mündliche Zeitzeugenaufnahmen bleiben nur sicher, wenn sie an mehr als einem Ort existieren — RcloneView macht diese Redundanz auch ohne eigenes IT-Team beherrschbar.

Eine Bibliothek, die eine Sonderkollektion digitalisiert, oder ein Archiv, das jahrzehntelange institutionelle Aufzeichnungen bewahrt, sammelt am Ende Terabytes an hochauflösenden Scans, Audio- und Videomaterial an, das bei Verlust nie wieder rekonstruiert werden kann. Cloud-Speicher löst das Problem der Dauerhaftigkeit, doch die meisten Einrichtungen verlassen sich nicht auf nur einen Anbieter — Budgetbeschränkungen, Förderauflagen oder die Präferenz für geografisch getrennte Speicherorte führen häufig dazu, dass Sammlungen auf zwei oder mehr Clouds aufgeteilt oder gespiegelt werden. RcloneView bietet Archivar:innen ein einziges Fenster, um all das zu verwalten, mit Verbindung zu über 90 Cloud-Speicherdiensten, ohne dass das Bibliothekspersonal Kommandozeilenkenntnisse benötigt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Digitalisierte Sammlungen über mehrere Anbieter hinweg spiegeln

Bewährte Praxis in der digitalen Bewahrung verlangt mehrere unabhängige Kopien, idealerweise auf unterschiedlichen Speichersystemen. Mit der 1:N-Synchronisation von RcloneView kann ein Archiv einen Quellordner — etwa einen gerade abgeschlossenen Stapel digitalisierter Handschriften-Scans — gleichzeitig auf mehrere Cloud-Ziele richten, sodass ein einziger Synchronisationsjob redundante Kopien pflegt, ohne dass Mitarbeitende dieselbe Übertragung manuell zweimal ausführen müssen. Diese Funktion steht bereits mit der FREE-Lizenz zur Verfügung, was für Einrichtungen mit Fördermitteln oder knappen Budgets wichtig ist.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 1:N-Synchronisationskonfiguration, die ein digitalisiertes Archiv auf zwei Cloud-Ziele spiegelt" class="img-large img-center" />

S3, Azure oder Backblaze B2 lassen sich bereits mit der FREE-Lizenz mit vollem Lese-/Schreibzugriff verbinden — das eignet sich für Archive, die kostengünstigen Objektspeicher für selten genutzte, kalte Bewahrungsmaster verwenden und Arbeitskopien bei einem kollaborativeren Anbieter wie Google Drive oder Dropbox behalten.

## Fixity mit Prüfsummenvergleich verifizieren

Bewahrungsarbeit hängt davon ab, zu wissen, dass eine Datei bei der Übertragung oder über Jahre der Lagerung nicht unbemerkt beschädigt wurde — ein Konzept, das Archivar:innen als Fixity bezeichnen. Die Synchronisationsjobs von RcloneView unterstützen die Prüfsummenverifizierung, wobei Dateien anhand von Hash und Größe statt nur des Änderungsdatums verglichen werden, und die Option zur Aktivierung der Prüfsumme in Schritt 2 des Synchronisationsassistenten bestätigt, dass jedes Byte am Ziel übereinstimmt. Folder Compare fügt eine zweite Schutzebene hinzu und erlaubt es dem Personal, zwei Speicherorte visuell nebeneinander zu prüfen und fehlende oder abweichende Dateien sofort zu erkennen.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView Folder-Compare-Ansicht zur Prüfung prüfsummenverifizierter Kopien einer Archivsammlung" class="img-large img-center" />

Ein regelmäßiger Vergleich jeder gespiegelten Kopie ist eine praktische Routine zur Fixity-Prüfung, ohne dass rclone-Befehle im Terminal skriptgesteuert werden müssen.

## Ingest ohne Systemadministrator planen

Digitalisierungsworkflows erzeugen typischerweise fortlaufend neue Stapel — eine Scanstation schließt eine Kiste mit Dokumenten ab, und diese Dateien müssen vom lokalen Speicher in das dauerhafte Archiv verschoben werden. Mit einer PLUS-Lizenz automatisiert die Crontab-artige Zeitplanung von RcloneView diesen Ingest regelmäßig, und Job History liefert ein vollständiges Prüfprotokoll jedes Laufs: Startzeit, Dauer, übertragene Dateien und Status. Dieses Protokoll ist wichtig für Einrichtungen, die Förderstellen oder Aufsichtsgremien gegenüber die Einhaltung von Bewahrungsstandards nachweisen müssen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden Ingest-Jobs für ein digitales Archiv in RcloneView" class="img-large img-center" />

Mit Job Export kann ein Archiv seinen kompletten Satz an Synchronisationskonfigurationen als portable JSON-Datei speichern — nützlich, um den Bewahrungsworkflow selbst zu dokumentieren oder an eine neue Systembibliothekarin bzw. einen neuen Systembibliothekar zu übergeben.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verbinden Sie Ihr primäres Speicher-Remote und ein oder mehrere Ziele für Bewahrungskopien.
3. Richten Sie einen 1:N-Synchronisationsjob mit aktivierter Prüfsummenverifizierung ein.
4. Nutzen Sie Folder Compare regelmäßig, um die Fixity über alle gespiegelten Kopien hinweg zu prüfen.

Ein korrekt gespiegeltes, prüfsummenverifiziertes Archiv macht aus „wir hoffen, das Backup hat funktioniert" etwas, das eine Bibliothek oder ein Archiv tatsächlich nachweisen kann.

---

**Verwandte Anleitungen:**

- [Leitfaden zum Ordnervergleich — Unterschiede mit RcloneView erkennen](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Prüfsummenverifizierte Cloud-Migrationen mit RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [1:N-Synchronisation — Mehrere Ziele mit RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
