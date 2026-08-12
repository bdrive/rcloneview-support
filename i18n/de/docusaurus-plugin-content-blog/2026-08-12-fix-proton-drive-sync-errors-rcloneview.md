---
slug: fix-proton-drive-sync-errors-rcloneview
title: "Proton Drive Synchronisationsfehler beheben — Fehlerbehebungsleitfaden für RcloneView"
authors:
  - tayson
description: "Beheben Sie Proton Drive Authentifizierungs-, 2FA- und Synchronisationsfehler in RcloneView mit praktischen Lösungen und Protokollierungsschritten."
keywords:
  - Proton Drive Synchronisationsfehler
  - Proton Drive RcloneView beheben
  - Proton Drive Authentifizierung fehlgeschlagen
  - Proton Drive 2FA Anmeldung
  - Proton Drive Fehlerbehebung
  - RcloneView Synchronisationsfehler
  - Proton Drive Verbindungsprobleme
  - Proton Drive Backup Fehler beheben
  - rclone Protokollierung Debug
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive Synchronisationsfehler beheben — Fehlerbehebungsleitfaden für RcloneView

> Wenn eine Proton Drive-Synchronisation stockt oder die Authentifizierung fehlschlägt, liegt die Ursache meist in der Zugangsdaten-Einrichtung oder im Job-Protokoll — nicht in einem Fehler der Übertragung selbst.

Proton Drive verbindet sich mit RcloneView über E-Mail, Passwort und einen optionalen Zwei-Faktor-Code statt über einen Browser-OAuth-Ablauf. Die meisten Synchronisationsfehler lassen sich daher auf diesen Zugangsdaten-Handshake zurückführen oder auf einen Job, der seit einer Änderung Ihrer Proton-Kontoeinstellungen nicht erneut getestet wurde. RcloneView zeigt diese Fehler im Job History und im Log-Tab an, sodass sich die tatsächliche Ursache leicht eingrenzen lässt, sobald man weiß, wo man nachsehen muss.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Authentifizierungs- und 2FA-Fehler

Wenn ein Proton Drive Remote nicht verbindet, prüfen Sie zuerst die im Remote Manager eingetragene E-Mail-Adresse und das Passwort — anders als bei OAuth-Anbietern gibt es keine erneute Browser-Anmeldung als Rückfalloption, sodass ein geändertes Proton-Passwort den Remote stillschweigend unterbricht, bis Sie ihn bearbeiten. Ist die Zwei-Faktor-Authentifizierung für Ihr Proton-Konto aktiviert, geben Sie den Code zügig ein, da 2FA-Codes schnell ablaufen und ein abgelaufener Code denselben allgemeinen Authentifizierungsfehler wie ein falsches Passwort erzeugt.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten der Proton Drive Zugangsdaten im RcloneView Remote Manager" class="img-large img-center" />

RcloneView bindet Proton Drive auf Windows, macOS und Linux über dasselbe Fenster ein und synchronisiert es — eine Korrektur der Zugangsdaten wirkt sich also überall aus, wo Sie den Remote eingerichtet haben, ohne dass eine plattformspezifische Neukonfiguration nötig ist.

## Synchronisationsjobs bleiben hängen oder scheitern mitten in der Übertragung

Ein Job, der startet, aber nie abgeschlossen wird, deutet häufig auf eine Filterregel hin, die mehr ausschließt als beabsichtigt, oder auf eine für eine instabile Verbindung zu niedrig eingestellte Wiederholungsanzahl (Retry-Count). Öffnen Sie die Advanced Settings des Jobs und prüfen Sie den Retry-Count — der Standardwert von 3 Versuchen fängt kurze Netzwerkstörungen ab, aber eine Reduzierung auf 1 entfernt dieses Sicherheitsnetz vollständig. Führen Sie vor einem erneuten Start des Jobs einen Dry Run aus, um genau zu sehen, welche Dateien betroffen sind.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Dry Run vor dem erneuten Versuch eines Proton Drive Synchronisationsjobs" class="img-large img-center" />

## Job History lesen und Debug-Protokolle aktivieren

Job History erfasst, ob ein Lauf Completed, Errored oder Canceled war, zusammen mit dem genauen Zeitpunkt, an dem er gestoppt wurde — dieser Zeitstempel ist ein zuverlässiger Weg, um einen Fehler mit einer bestimmten Datei oder einem Netzwerkereignis in Verbindung zu bringen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Überprüfen des Proton Drive Job-History-Status in RcloneView" class="img-large img-center" />

Bei anhaltenden oder unklaren Fehlern aktivieren Sie das rclone-Logging in den Einstellungen, setzen die Log-Ebene auf DEBUG, starten den eingebetteten rclone-Prozess neu und reproduzieren die Synchronisation. Die resultierende Protokolldatei zeigt genau, welcher API-Aufruf fehlgeschlagen ist, was weit nützlicher ist, als nur anhand des Fehlerdialogs zu raten.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html), falls noch nicht geschehen.
2. Geben Sie Ihre Proton Drive E-Mail-Adresse und Ihr Passwort erneut im Remote Manager ein und schließen Sie bei Aufforderung die 2FA zügig ab.
3. Führen Sie einen Dry Run für den betroffenen Synchronisationsjob aus, um zu bestätigen, welche Dateien betroffen sind.
4. Aktivieren Sie das DEBUG-Logging und reproduzieren Sie das Problem, falls es sich nicht durch eine Aktualisierung der Zugangsdaten beheben lässt.

Die meisten Proton Drive Synchronisationsfehler klären sich, sobald Zugangsdaten und Wiederholungseinstellungen überprüft wurden — für den Rest gibt es die Protokolle.

---

**Verwandte Anleitungen:**

- [Proton Drive Dateien und Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Festplatte mit RcloneView verschlüsselt auf Proton Drive sichern](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive trifft auf Ihre Clouds — Backup & Synchronisation leicht gemacht mit RcloneView](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
