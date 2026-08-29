---
slug: rclone-self-update-rcloneview
title: "Rclone Self Update — Ihre eingebettete Engine in RcloneView aktuell halten"
authors:
  - casey
description: "Aktualisieren Sie die eingebettete rclone-Binärdatei in RcloneView mit einem einzigen Klick, damit neue Anbieter-Fixes und Funktionen ohne manuelle Neuinstallation ankommen."
keywords:
  - rclone self update
  - eingebettetes rclone aktualisieren
  - RcloneView rclone-Version
  - rclone aktuell halten
  - rclone Binär-Update GUI
  - RcloneView eingebettetes rclone
  - rclone rc api Version
  - Cloud-Speicher GUI-Updates
  - rclone Mindestversion
tags:
  - RcloneView
  - feature
  - automation
  - installation
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Self Update — Ihre eingebettete Engine in RcloneView aktuell halten

> RcloneView wird mit integriertem rclone ausgeliefert und kann diese eingebettete Binärdatei direkt aus der App heraus aktualisieren, statt Sie einen separaten Download verfolgen zu lassen.

RcloneView ruft nicht einfach irgendein rclone auf, das zufällig auf Ihrem System installiert ist — es wird mit einer eigenen eingebetteten rclone-Binärdatei ausgeliefert und kommuniziert über die lokale rclone RC API damit. Diese eingebettete Binärdatei führt tatsächlich jede Kopie, Synchronisation und jeden Mount aus, daher ist es wichtig, sie aktuell zu halten, um neue Anbieter-Fixes, Protokolländerungen und Leistungsverbesserungen zu erhalten. Statt bei jeder neuen rclone-Version eine vollständige App-Neuinstallation zu erfordern, bietet RcloneView eine In-App-Self-Update-Funktion für die eingebettete Engine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Version des eingebetteten Rclone wichtig ist

RcloneView benötigt mindestens die rclone-Version v1.69.1 oder neuer, da neuere App-Funktionen von RC-API-Fähigkeiten abhängen, die erst ab diesem Zeitpunkt verfügbar sind. Anbieter ändern gelegentlich ihre APIs, und rclone-Releases patchen diese Änderungen — eine veraltete eingebettete Binärdatei kann bedeuten, dass ein zuvor funktionierender Remote plötzlich Authentifizierungs- oder Listing-Fehler wirft, die nichts mit Ihrer RcloneView-Konfiguration zu tun haben.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView-Remote-Konfiguration, die auf der eingebetteten rclone-Engine basiert" class="img-large img-center" />

Da das eingebettete rclone über `http://127.0.0.1:5582` auf localhost kommuniziert, berührt eine Aktualisierung Ihre Remotes, Sync-Jobs oder gespeicherten Zugangsdaten nicht — diese leben in der eigenen Konfiguration von RcloneView, getrennt von der Binärversion.

## Ein Self-Update auslösen

Die Self-Update-Aktion befindet sich neben den rclone-Verbindungsdetails, wo RcloneView bereits die aktuell laufende rclone-Version, die lokale API-Adresse und das Host-Betriebssystem anzeigt. Das Ausführen des Updates von dort ruft den neuesten kompatiblen rclone-Build ab und tauscht ihn ein, ohne die App zu verlassen oder ein Terminal zu öffnen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Überprüfung der rclone-Version und des Job-Verlaufs nach einem Update des eingebetteten rclone in RcloneView" class="img-large img-center" />

Das lohnt sich zu prüfen, nachdem ein Support-Thread oder Release-Notes einen anbieterspezifischen Fix erwähnen — die eingebettete Binärdatei zuerst zu aktualisieren, ist ein schneller Weg, um Versions-Drift auszuschließen, bevor man einen Sync-Job weiter fehlersucht.

## Self Update mit Logging kombinieren

Wenn ein Job direkt nach einem Update zu scheitern beginnt, verschafft das Aktivieren von rclone-Logging (Einstellungen > Eingebettetes Rclone > rclone-Logging aktivieren) und das Setzen der Log-Stufe auf DEBUG einen klaren Vorher-Nachher-Vergleich. Starten Sie den eingebetteten rclone-Prozess neu, reproduzieren Sie den Job, und die Log-Datei zeigt genau, welche Version die Anfrage bearbeitet hat — nützlich beim Melden eines Problems oder beim Vergleichen des Verhaltens zwischen Versionen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ausführen eines Sync-Jobs nach der Aktualisierung der eingebetteten rclone-Engine in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie die Fußzeile oder die Verbindungseinstellungen, um die aktuell laufende eingebettete rclone-Version zu prüfen.
3. Führen Sie das In-App-Self-Update aus, um den neuesten kompatiblen rclone-Build abzurufen.
4. Führen Sie eine bestehende Synchronisation oder einen Mount erneut aus, um zu bestätigen, dass alles wie erwartet verbunden bleibt.

Die eingebettete Engine aktuell zu halten, ist eine kleine Gewohnheit, die einen überraschend großen Anteil an "hat gestern noch funktioniert"-Problemen bei der Cloud-Synchronisation verhindert.

---

**Verwandte Anleitungen:**

- [RcloneView-Verbindungsmanager — Eingebettetes und externes Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Rclone RC API — Fernsteuerung mit RcloneView](https://rcloneview.com/support/blog/rclone-rc-api-remote-control-rcloneview)
- [Benutzerdefinierte Rclone-Flags — Erweiterte Optionen in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
