---
slug: dry-run-preview-sync-before-transfer-rcloneview
title: "Sync-Änderungen mit Dry Run in RcloneView vorab prüfen"
authors:
  - tayson
description: "Nutzen Sie den Dry Run in RcloneView, um Sync-Änderungen vor der Übertragung zu prüfen. Erkennen Sie unerwartete Löschungen und Filterfehler, bevor sie Datenverlust verursachen."
keywords:
  - rcloneview
  - dry run
  - sync-vorschau
  - rclone dry run
  - sync preview
  - sichere cloud-synchronisation
  - datenverlust vermeiden
  - sync-simulation
  - vorschau der cloud-übertragung
  - vergleich vor sync
tags:
  - RcloneView
  - feature
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sync-Änderungen mit Dry Run in RcloneView vorab prüfen

> Eine falsch konfigurierte Synchronisation kann in Sekunden Tausende von Dateien löschen. **RcloneView** ermöglicht es Ihnen, jede Änderung mit einem Dry Run zu prüfen, bevor auch nur ein Byte übertragen wird – für vollständige Sicherheit, bevor Sie eine Synchronisation ausführen.

Die Sync-Operation ist eine der leistungsstärksten Funktionen von rclone. Sie gleicht das Ziel an die Quelle an, überträgt neue Dateien, aktualisiert geänderte Dateien und löscht Dateien, die an der Quelle nicht mehr existieren. Genau dieser letzte Teil, das Löschen, macht Sync sowohl mächtig als auch gefährlich.

Ein Dry Run simuliert die gesamte Sync-Operation, ohne tatsächlich etwas zu verschieben, zu kopieren oder zu löschen. Er zeigt Ihnen genau, was passieren würde: welche Dateien übertragen, welche gelöscht und welche übersprungen würden. Sie prüfen die Ausgabe, bestätigen, dass sie Ihren Erwartungen entspricht, und führen erst dann die eigentliche Synchronisation aus.

RcloneView integriert Dry Run direkt in seinen Sync-Workflow, sodass Sie Änderungen bequem über die GUI vorab prüfen können, bevor Sie sie übernehmen. Egal ob Sie zwei Cloud-Remotes synchronisieren oder lokale Dateien in die Cloud sichern – ein Dry Run sollte jedes Mal Ihr erster Schritt sein.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Was der Dry Run macht

Wenn Sie den Dry-Run-Modus aktivieren, führt rclone dieselbe Analyse durch wie bei einer echten Synchronisation: Es durchsucht Quelle und Ziel, vergleicht Dateien nach Größe, Zeitstempel oder Prüfsumme und erstellt eine Liste der auszuführenden Operationen. Der einzige Unterschied besteht darin, dass keine dieser Operationen tatsächlich ausgeführt wird.

Die Dry-Run-Ausgabe zeigt Ihnen:
- **Zu übertragende Dateien**: Neue oder geänderte Dateien, die von der Quelle zum Ziel kopiert würden.
- **Zu löschende Dateien**: Zieldateien, die an der Quelle nicht existieren und entfernt würden.
- **Übersprungene Dateien**: Dateien, die auf beiden Seiten identisch sind und keine Aktion erfordern.
- **Gesamtes Datenvolumen**: Wie viele Daten übertragen würden, was Ihnen hilft, Zeit- und Bandbreitenbedarf einzuschätzen.

Diese Simulation ist rein lesend. Keine Dateien werden verschoben, kopiert oder gelöscht. Ihre Quelle und Ihr Ziel bleiben vollständig unangetastet.

## Warum Dry Run bei destruktiven Operationen entscheidend ist

Der Befehl `sync` ist von Natur aus destruktiv, da er Dateien am Ziel löscht, die an der Quelle nicht vorhanden sind. Das ist beabsichtigt und unterscheidet Sync von Copy. Es bedeutet aber auch, dass Fehler Folgen haben:

- **Falsche Sync-Richtung**: Vertauschen Sie versehentlich Quelle und Ziel, löscht die Synchronisation Ihre Quelldateien, um sie an ein leeres oder veraltetes Ziel anzupassen.
- **Falscher Pfad**: Eine Synchronisation in das falsche Verzeichnis kann unbeteiligte Dateien überschreiben oder Massenlöschungen auslösen.
- **Fehlerhafte Filterkonfiguration**: Sind Ihre Include-/Exclude-Filter falsch, können Dateien, die Sie behalten wollten, vom Quell-Scan ausgeschlossen und somit am Ziel gelöscht werden.
- **Abgelaufene Authentifizierung**: Wenn das Quell-Remote abgelaufene Zugangsdaten hat, kann es leer erscheinen, wodurch die Synchronisation alles am Ziel löscht.

Ein Dry Run erkennt jedes dieser Probleme, bevor ein Schaden entsteht. Die wenigen Sekunden, die die Prüfung der Ausgabe kostet, können Stunden an Wiederherstellungsarbeit sparen.

## Dry Run in RcloneView aktivieren

RcloneView bietet einen unkomplizierten Weg, Sync-Vorschauen auszuführen:

1. Öffnen Sie den **Job Manager** und wählen Sie den Sync-Job, den Sie vorab prüfen möchten.
2. Fügen Sie das Flag `--dry-run` im Bereich **Custom Flags** der Job-Konfiguration hinzu.
3. Führen Sie den Job aus. RcloneView simuliert die Synchronisation und zeigt die Ergebnisse an.
4. Prüfen Sie die Ausgabe im Übertragungsmonitor, um zu sehen, was passieren würde.
5. Sieht alles korrekt aus, entfernen Sie das Flag `--dry-run` und führen Sie den Job real aus.

Alternativ können Sie das integrierte Terminal nutzen, um einen Dry-Run-Befehl direkt auszuführen:
```
rclone sync source: dest: --dry-run
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Die Dry-Run-Ausgabe lesen

Die Dry-Run-Ausgabe verwendet dasselbe Format wie eine echte Synchronisation, es werden jedoch keine Operationen ausgeführt. Worauf Sie achten sollten:

**Übertragene Dateien** werden mit ihren Pfaden und Größen aufgelistet. Prüfen Sie, ob es sich um die Dateien handelt, die Sie aktualisiert oder hinzugefügt erwarten. Werden Dateien übertragen, die eigentlich bereits synchron sein sollten, kann dies auf eine abweichende Zeitstempel- oder Prüfsummen-Differenz hindeuten, die es zu untersuchen gilt.

**Gelöschte Dateien** sind die wichtigsten Einträge, die Sie prüfen sollten. Jede zum Löschen aufgeführte Datei wird bei einer echten Synchronisation dauerhaft vom Ziel entfernt. Sehen Sie hier Dateien, die Sie behalten möchten, müssen Sie eventuell Ihren Quellpfad, Ihre Filter oder die Sync-Richtung anpassen.

**Übersprungene Dateien** bestätigen, dass bereits synchrone Dateien korrekt erkannt werden. Eine gesunde Dry-Run-Ausgabe sollte überwiegend übersprungene Dateien zeigen, mit nur wenigen Übertragungen und Löschungen.

Die **zusammenfassenden Statistiken** am Ende geben Ihnen die Gesamtzahl der Übertragungen, Löschungen und das gesamte Datenvolumen an. Vergleichen Sie diese Zahlen mit Ihren Erwartungen. Synchronisieren Sie beispielsweise einen Ordner, in dem Sie eine Datei geändert haben, der Dry Run aber Tausende von Übertragungen zeigt, stimmt etwas mit der Konfiguration nicht.

## Häufige Überraschungen, die der Dry Run aufdeckt

Hier sind reale Szenarien, in denen ein Dry Run Datenverlust verhindert hat:

**Unerwartete Massenlöschung**: Sie richten eine Synchronisation von Google Drive nach S3 ein, aber das Google-Drive-Token ist abgelaufen. Rclone sieht eine leere Quelle und plant, alles am Ziel zu löschen. Der Dry Run zeigt Tausende von Löschungen und null Übertragungen, was das Problem sofort erkennbar macht.

**Filterfehler**: Sie haben einen Ausschlussfilter für `*.tmp`-Dateien hinzugefügt, aber versehentlich `*.tmpl` eingegeben, was auf Ihre Terraform-Vorlagendateien zutrifft. Der Dry Run zeigt, dass diese Vorlagendateien vom Ziel gelöscht würden, und macht Sie so auf den Tippfehler aufmerksam.

**Falsches Basisverzeichnis**: Sie wollten `remote:projects/2026` synchronisieren, haben aber `remote:projects` eingegeben. Der Dry Run zeigt, dass Dateien aus allen Projektjahren synchronisiert würden, was möglicherweise Dateien in Unterverzeichnissen überschreibt, die Sie gar nicht anfassen wollten.

**Probleme mit Groß-/Kleinschreibung**: Das Verschieben von Dateien zwischen einem Remote, das nicht zwischen Groß- und Kleinschreibung unterscheidet (wie OneDrive), und einem, das dies tut (wie S3), kann Duplikate erzeugen. Der Dry Run zeigt diese unerwarteten Übertragungen, sodass Sie Konflikte bei der Groß-/Kleinschreibung behandeln können, bevor sie sich vervielfachen.

## Dry Run als festen Bestandteil Ihres Workflows etablieren

Für maximale Sicherheit sollten Sie Dry Run in Ihren Standardablauf integrieren:

**Bei manuellen Synchronisationen**: Führen Sie immer zuerst einen Dry Run aus, bevor Sie eine Sync-Operation ausführen. Prüfen Sie die Ausgabe, entfernen Sie dann das Flag und führen Sie die echte Synchronisation aus. Die zusätzliche Minute lohnt sich für die Sicherheit.

**Bei neuen geplanten Jobs**: Wenn Sie eine neue geplante Synchronisation erstellen, führen Sie sie zuerst manuell mit `--dry-run` aus. Aktivieren Sie den Zeitplan erst, nachdem Sie überprüft haben, dass die Dry-Run-Ausgabe Ihren Erwartungen entspricht.

**Nach Konfigurationsänderungen**: Wann immer Sie Quelle, Ziel, Filter oder Flags eines Jobs ändern, führen Sie vor der nächsten Ausführung einen Dry Run aus. Konfigurationsänderungen können unerwartete Nebeneffekte haben, die ein Dry Run aufdeckt.

**Regelmäßig bei bestehenden Jobs**: Auch stabile, seit langem laufende geplante Jobs profitieren von einer gelegentlichen Dry-Run-Überprüfung. Änderungen an den Quelldaten, der Remote-Konfiguration oder dem Verhalten des Anbieters können das Sync-Verhalten im Laufe der Zeit verändern.

## Dry Run mit Vergleichsfunktionen kombinieren

Die Ordnervergleichsfunktion von RcloneView ergänzt den Dry Run, indem sie eine visuelle Gegenüberstellung von Quell- und Zielinhalten bietet. Zusammen verwendet, geben sie Ihnen umfassende Einblicke vor der Synchronisation:

1. Nutzen Sie die Funktion **Compare**, um Unterschiede zwischen Quelle und Ziel visuell zu prüfen.
2. Führen Sie einen **Dry Run** aus, um genau zu sehen, was die Sync-Operation mit diesen Unterschieden tun würde.
3. Prüfen Sie, ob die geplanten Operationen mit dem übereinstimmen, was Sie im Vergleich gesehen haben.
4. Führen Sie die Synchronisation mit Zuversicht aus.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

Die Vergleichsfunktion zeigt Ihnen den aktuellen Zustand, während der Dry Run Ihnen die geplanten Aktionen zeigt. Zusammen beseitigen sie Rätselraten und stellen sicher, dass Sie sowohl verstehen, was unterschiedlich ist, als auch, was damit geschehen wird.

## Fortgeschritten: --dry-run mit anderen Flags verwenden

Dry Run funktioniert mit allen anderen rclone-Flags, sodass Sie Ihre genaue Produktionskonfiguration simulieren können:

- `--dry-run --backup-dir remote:backup` zeigt vorab sowohl die Synchronisation als auch den Speicherort der Backup-Kopien.
- `--dry-run --filter-from filters.txt` prüft, ob Ihre Filterregeln die erwarteten Ergebnisse liefern.
- `--dry-run --max-age 24h` simuliert die Synchronisation nur der in den letzten 24 Stunden geänderten Dateien.
- `--dry-run -v` fügt eine ausführlichere Ausgabe mit mehr Details zu jeder geplanten Operation hinzu.

Diese Kombinierbarkeit bedeutet, dass Sie jede Konfiguration sicher testen können, bevor Sie sie produktiv einsetzen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie einen Sync-Job mit der gewünschten Quelle und dem gewünschten Ziel.
3. Fügen Sie `--dry-run` zu den Custom Flags hinzu und führen Sie den Job aus, um die Änderungen vorab zu prüfen.
4. Prüfen Sie die Ausgabe sorgfältig, entfernen Sie dann das Flag und führen Sie die echte Synchronisation aus.

Dry Run kostet nichts, dauert nur Sekunden und kann katastrophalen Datenverlust verhindern. Machen Sie es zum ersten Schritt jeder Sync-Operation, und Sie werden nie wieder überrascht sein, was eine Synchronisation mit Ihren Dateien anstellt.

---

**Weiterführende Anleitungen:**

- [Remote-Speicher sofort synchronisieren](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
