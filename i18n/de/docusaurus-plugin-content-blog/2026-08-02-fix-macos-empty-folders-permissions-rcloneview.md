---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "Leere Schreibtisch- und Dokumente-Ordner unter macOS beheben — Berechtigungsfix mit RcloneView"
authors:
  - robin
description: "Beheben Sie das Problem, dass RcloneView unter macOS leere Schreibtisch-, Dokumente- oder Downloads-Ordner anzeigt. Erteilen Sie die richtigen Datenschutzberechtigungen und stellen Sie den vollständigen Dateizugriff wieder her."
keywords:
  - macOS leere Ordner beheben
  - RcloneView macOS Berechtigungen
  - Schreibtisch-Ordner leer macOS
  - Dokumente-Ordner leer macOS
  - macOS Voller Festplattenzugriff
  - Datenschutz & Sicherheit Dateien und Ordner
  - macOS Cloud-Sync-Berechtigungen
  - RcloneView Fehlerbehebung
  - macOS Dateizugriff verweigert
  - RcloneView macOS beheben
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Leere Schreibtisch- und Dokumente-Ordner unter macOS beheben — Berechtigungsfix mit RcloneView

> Wenn RcloneView den Schreibtisch-, Dokumente- oder Downloads-Ordner Ihres Mac leer anzeigt, liegt es fast immer an einer macOS-Datenschutzberechtigung, die noch nicht erteilt wurde — nicht an einem Synchronisationsproblem.

Seit Catalina sperrt macOS die Ordner Schreibtisch, Dokumente und Downloads hinter Datenschutz-&-Sicherheitsberechtigungen, und jede App, die sie lesen möchte — einschließlich RcloneView, wenn es lokale Ordner als Synchronisationsquelle durchsucht — muss explizit genehmigt werden. Nutzer, die ihren ersten lokalen Cloud-Backup-Job einrichten, stoßen häufig darauf: Der Ordnerbaum lädt, aber die Dateiliste bleibt leer, obwohl die Dateien eindeutig auf der Festplatte vorhanden sind. RcloneView verbindet sich mit über 90 Cloud-Anbietern und synchronisiert diese, aber dieses spezielle Problem liegt vollständig auf der macOS-Seite und ist in zwei Minuten behoben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Ordner leer erscheinen

macOS behandelt Schreibtisch, Dokumente und Downloads als geschützte Speicherorte. Eine App erhält beim ersten Leseversuch eines dieser Ordner eine Berechtigungsabfrage, und wenn diese Abfrage — was während der Ersteinrichtung leicht versehentlich passieren kann — abgelehnt oder geschlossen wird, erhält die App still eine leere Liste anstelle eines Fehlers. Der Explorer-Bereich von RcloneView zeigt den Ordner selbst und in manchen Fällen sogar die korrekte Dateianzahl, aber die zugrunde liegende Dateiliste bleibt leer, da das Betriebssystem den Inhalt auf Dateisystemebene zurückhält.

Dies ist unabhängig von einem etwaigen Cloud-Remote-Problem. Wenn Ihr Google-Drive- oder Dropbox-Remote ebenfalls leer erscheint, handelt es sich um ein anderes Problem — dieser Fix gilt speziell für lokale macOS-Ordner, die als Synchronisationsquelle oder -ziel verwendet werden.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## Die richtigen Berechtigungen erteilen

Öffnen Sie Systemeinstellungen > Datenschutz & Sicherheit > Dateien und Ordner, suchen Sie RcloneView in der Liste und aktivieren Sie die Schalter für Schreibtisch-Ordner, Dokumente-Ordner und Downloads-Ordner einzeln. Falls RcloneView noch nicht in der Liste erscheint, lösen Sie die Berechtigungsabfrage aus, indem Sie zunächst in der App zu einem dieser Ordner navigieren — macOS listet nur Apps auf, die einen Zugriffsversuch unternommen haben.

Bei anhaltenden Problemen oder wenn Sie von Speicherorten außerhalb der drei geschützten Ordner synchronisieren (externe Laufwerke, Netzwerkfreigaben), ist die Erteilung von Vollem Festplattenzugriff im selben Datenschutz-&-Sicherheits-Bereich die gründlichere Lösung. Dies deckt Schreibtisch, Dokumente, Downloads und jeden anderen Ort ab, den das Betriebssystem sonst einschränken könnte.

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

RcloneView muss nach dem Ändern dieser Berechtigungen vollständig neu gestartet werden — nicht nur das Fenster geschlossen. macOS wertet den Dateizugriff einer App nur beim Start neu aus, sodass ein vollständiges Beenden und erneutes Öffnen erforderlich ist, bevor die Ordnerinhalte korrekt angezeigt werden.

## Den Fix überprüfen und Ihre Synchronisation aufbauen

Navigieren Sie nach dem Neustart zurück zum zuvor leeren Ordner — die Datei- und Ordneranzahl sollte nun normal in der Fußzeilenübersicht erscheinen. Bevor Sie einen echten Synchronisationsjob ausführen, verwenden Sie den Ordnervergleich (Folder Compare) gegen Ihr gewünschtes Cloud-Ziel, um zu bestätigen, dass RcloneView jetzt alles sehen kann, was es auf der lokalen Seite sehen sollte, und erkennen Sie so verbleibende Zugriffslücken, bevor sie zu einem unvollständigen Backup führen.

Sobald die Berechtigungen nachweislich funktionieren, erstellen Sie Ihren Synchronisationsjob wie gewohnt: lokaler Ordner als Quelle, Cloud-Remote als Ziel, mit zunächst aktiviertem Probelauf (Dry Run), um genau zu sehen, was übertragen wird.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView** von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie Systemeinstellungen > Datenschutz & Sicherheit > Dateien und Ordner.
3. Aktivieren Sie den Zugriff auf Schreibtisch, Dokumente und Downloads für RcloneView, oder erteilen Sie Vollen Festplattenzugriff.
4. Beenden Sie RcloneView vollständig und starten Sie es neu, überprüfen Sie dann, ob die Ordnerinhalte korrekt geladen werden.

Dieses Berechtigungsmodell dient dem Schutz der Nutzerdaten unter macOS, und sobald es einmal erteilt wurde, behält RcloneView den vollständigen, ununterbrochenen Zugriff auf Ihre lokalen Dateien für jeden zukünftigen Synchronisationsjob.

---

**Verwandte Anleitungen:**

- [macOS-Fehler „Zu viele geöffnete Dateien“ mit RcloneView beheben](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView unter macOS Sequoia — Cloud-Speicher-Synchronisation](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Fehlende Dateien nach der Übertragung bei der Cloud-Synchronisation beheben — mit RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
