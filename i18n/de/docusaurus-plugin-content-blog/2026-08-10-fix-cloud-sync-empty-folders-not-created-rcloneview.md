---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "Leere Ordner nach der Synchronisation verschwunden — Lösung mit RcloneView"
authors:
  - robin
description: "Verschwinden leere Ordner nach einer Cloud-Synchronisation? Erfahren Sie, warum rclone sie standardmäßig überspringt und wie Sie das Problem in RcloneView mit einer Einstellung beheben."
keywords:
  - leere Ordner werden nicht synchronisiert
  - rclone leere Verzeichnisse
  - Cloud-Synchronisation fehlende Ordner
  - RcloneView Fehlerbehebung
  - Ordnerstruktur Synchronisation
  - leere Verzeichnisse erstellen rclone
  - Cloud-Synchronisationsfehler beheben
  - RcloneView Synchronisationseinstellungen
  - Cloud-Backup Ordnerstruktur
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leere Ordner nach der Synchronisation verschwunden — Lösung mit RcloneView

> Platzhalterordner und leere Projektverzeichnisse verschwinden nach einer Cloud-Synchronisation häufig — hier ist die Einstellung, die sie zurückbringt.

Ein Team migriert eine Ordnerstruktur in die Cloud und stellt fest, dass die Hälfte der leeren Platzhalterverzeichnisse — die für zukünftige Dateien, Kundenlieferungen oder Archivbereiche reserviert waren — am Ziel einfach nicht auftauchen. Dies ist das erwartete Standardverhalten von rclone: Synchronisationsvorgänge erstellen nur Verzeichnisse neu, die Dateien enthalten. RcloneView bietet die Einstellung, die für die Änderung dieses Verhaltens erforderlich ist, und zu wissen, wo man sie findet, erspart viel verwirrende Nacharbeit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum leere Ordner übersprungen werden

Die Synchronisations- und Kopier-Engine von rclone durchläuft den Quellbaum und überträgt Objekte — Dateien. Ein Verzeichnis ohne Dateien erzeugt keine Übertragungsoperation, sodass das Ziel standardmäßig nie erfährt, dass dieses Verzeichnis existieren sollte. Das ist kein Fehler; es liegt daran, wie die meisten Cloud-Speicher-APIs „Ordner" überhaupt darstellen — als Nebeneffekt von Objektschlüsseln und nicht als eigenständige Entitäten. Das praktische Ergebnis: Ein Quellbaum mit absichtlichen Platzhalterordnern (ein `03-invoices/`-Ordner, der auf die Dateien des nächsten Monats wartet, oder eine Kategoriestruktur, die ein Kunde erwartet) kann am Ziel unvollständig ankommen.

Das fällt besonders bei einem Ordnervergleich (Folder Compare) oder einer initialen Migration auf, bei der die Zielstruktur die Quelle bereits visuell widerspiegeln muss, bevor überhaupt Dateien dort ankommen.

## Die Lösung: Leere Verzeichnisse erstellen

Der Sync-Assistent von RcloneView enthält in Schritt 1 (Speicher konfigurieren) neben der Quell-/Ziel-Remote- und Ordnerauswahl einen Schalter **Leere Verzeichnisse erstellen**. Wird er aktiviert, weist er den zugrunde liegenden Synchronisationsvorgang an, auch Verzeichnisse ohne Dateien neu zu erstellen, sodass der Zielordnerbaum genau der Quellstruktur entspricht — nicht nur bei den Dateien selbst.

<img src="/support/images/en/blog/new-remote.png" alt="Schritt 1 des RcloneView-Sync-Assistenten mit der Option zum Erstellen leerer Verzeichnisse" class="img-large img-center" />

Führen Sie bei einer einmaligen strukturellen Migration zunächst einen Testlauf (Dry Run) mit aktivierter Option durch. Der Testlauf listet genau auf, welche Ordner und Dateien erstellt werden, ohne das Ziel zu berühren — der schnellste Weg, um zu bestätigen, dass das Problem mit den leeren Ordnern tatsächlich behoben ist, bevor die eigentliche Übertragung erfolgt.

## Ergebnis mit dem Ordnervergleich bestätigen

Prüfen Sie nach der Synchronisation mit dem Ordnervergleich (Folder Compare) von RcloneView beide Seiten Verzeichnis für Verzeichnis. RcloneView bindet über 90 Anbieter ein UND synchronisiert sie aus einem einzigen Fenster heraus, unter Windows, macOS und Linux, sodass Sie Quell- und Zielbaum visuell nebeneinander vergleichen können, ohne das Tool zu wechseln. Die Filter „Nur linke Dateien anzeigen" und „Nur rechte Dateien anzeigen" zeigen sofort, ob ein Ordner übertragen wurde.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Ordnervergleichsansicht mit übereinstimmender Ordnerstruktur zwischen Quelle und Ziel" class="img-large img-center" />

Wenn Sie die Struktur langfristig pflegen, statt nur eine einmalige Migration durchzuführen, speichern Sie den Job mit aktivierter Option für leere Verzeichnisse, damit jeder geplante Lauf die Platzhalterordner bei Bedarf weiter neu erstellt.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Planung eines wiederkehrenden RcloneView-Synchronisationsjobs zur Pflege der leeren Ordnerstruktur" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie den Sync-Assistenten und wählen Sie Ihre Quell- und Ziel-Remotes aus.
3. Aktivieren Sie in Schritt 1 **Leere Verzeichnisse erstellen**, bevor Sie Filter konfigurieren.
4. Führen Sie einen Testlauf durch, um die Ordnerstruktur zu bestätigen, und starten Sie dann die Synchronisation.

Eine auf beiden Seiten übereinstimmende Ordnerstruktur macht das Onboarding neuer Teammitglieder und die Speicherprüfung deutlich fehlerärmer.

---

**Verwandte Anleitungen:**

- [Leere Ordner und Berechtigungen unter macOS — Beheben mit RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [Leeren Papierkorb im Cloud-Speicher mit RcloneView bereinigen](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Fehlende Dateien nach der Übertragung bei der Cloud-Synchronisation beheben — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
