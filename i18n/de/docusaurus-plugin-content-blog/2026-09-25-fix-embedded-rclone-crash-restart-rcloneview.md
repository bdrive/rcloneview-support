---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "Abstürze der eingebetteten Rclone beheben — Neustart und Wiederherstellung mit RcloneView"
authors:
  - tayson
description: "Beheben Sie Verbindungsabbrüche der eingebetteten rclone in RcloneView mit Neustartschritten, Protokollierung und externen rclone-Ausweichoptionen."
keywords:
  - eingebettete rclone absturz
  - rclone verbindung verloren
  - RcloneView fehlerbehebung
  - eingebettete rclone neustarten
  - rclone rc api fehler
  - rclone protokolldatei
  - externe rclone verbindung
  - rcloneview verbindet nicht
  - rclone selbstaktualisierung
  - rclone fehler beheben
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Abstürze der eingebetteten Rclone beheben — Neustart und Wiederherstellung mit RcloneView

> Wenn in der Fußzeile statt einer Versionsnummer "getrennt" angezeigt wird, hat die eingebettete rclone-Engine aufgehört zu reagieren — so bringen Sie sie zurück, ohne Ihren Auftragsverlauf zu verlieren.

RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, die über eine lokale API-Adresse, standardmäßig `http://127.0.0.1:5582`, mit der App kommuniziert. Meistens ist diese Verbindung unsichtbar — man denkt nie darüber nach, weil sie einfach funktioniert. Wird der eingebettete Prozess jedoch durch ein Betriebssystem-Ressourcenlimit, eine widersprüchliche lokale Firewall-Regel oder eine beschädigte Konfigurationssperre beendet, meldet die Verbindungsinfo in der Fußzeile keine Version mehr, und jeder Remote in Ihren Explorer-Panels reagiert gleichzeitig nicht mehr. Das ist das Signal, dass Sie es mit einem Absturz der eingebetteten rclone zu tun haben, nicht mit einem Authentifizierungsproblem eines einzelnen Remotes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Feststellen, ob es die eingebettete Engine ist und nicht ein einzelner Remote

Der schnellste Weg, dies zu unterscheiden: Wenn nur ein Tab oder Remote nicht lädt, während der Rest Ihrer Panels normal funktioniert, ist das ein remote-spezifisches Problem — ungültiges OAuth-Token, falsche Zugangsdaten, Ausfall beim Anbieter. Wenn jeder Remote in jedem Panel gleichzeitig nicht mehr reagiert und die rclone-Version in der Fußzeile verschwindet, ist der eingebettete Prozess selbst gestoppt. Prüfen Sie den Reiter Settings > Embedded Rclone; wenn das Versionsfeld leer ist oder einen Fehler anzeigt, haben Sie das bestätigt.

RcloneView bindet und synchronisiert 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux, und all das läuft über diesen einen eingebetteten Prozess — genau deshalb wirkt ein Absturz hier wie ein Totalausfall statt wie ein anbieterspezifischer Fehler.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## Den eingebetteten Prozess neu starten

Gehen Sie zum Reiter Settings > Embedded Rclone und verwenden Sie dort die Neustart-Funktion — dadurch wird die mitgelieferte Binärdatei neu gestartet, ohne dass Sie RcloneView selbst beenden und wieder öffnen müssen. Aufträge, die zum Zeitpunkt des Absturzes gerade übertragen wurden, erscheinen in der Job History als Errored statt als Completed. Prüfen Sie diese also anschließend und wiederholen Sie alles Unvollständige; die Einstellung Retry entire sync if fails von RcloneView (im Schritt Advanced Settings jedes Auftrags zu finden) hilft, solche Unterbrechungen bei zukünftigen Läufen automatisch abzufangen.

Schlagen Neustarts weiterhin fehl, prüfen Sie den rclone-Binärpfad unter Settings > Embedded Rclone > Local Rclone location. Ein Pfad, der auf eine verschobene, gelöschte oder von einem Antivirenprogramm unter Quarantäne gestellte Binärdatei zeigt, verhindert den Start des Prozesses selbst nach einem Klick auf Neustart.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## Protokollierung bei wiederkehrenden Abstürzen aktivieren

Ein einmaliger Absturz erfordert selten eine gründliche Untersuchung, ein wiederkehrender jedoch schon. Aktivieren Sie Enable rclone Logging unter Settings > Embedded Rclone, setzen Sie Log level auf DEBUG und starten Sie den eingebetteten Prozess neu, um eine neue Protokolldatei zu beginnen. Reproduzieren Sie den Absturz und prüfen Sie anschließend den Reiter Log in der unteren Info View oder die Protokolldatei direkt unter dem in Log folder konfigurierten Pfad. Wenn Sie Hilfe bei der Interpretation benötigen, nimmt das RcloneView-Supportteam Protokolldateien unter rcloneview@bdrive.com entgegen — hängen Sie das DEBUG-Protokoll an, nicht nur eine Zusammenfassung, da die genaue Fehlerzeile entscheidend ist.

Prüfen Sie außerdem, ob das Feld Global Rclone Flags im selben Einstellungsbereich kein vereinzeltes oder inkompatibles Flag aus einer früheren Fehlerbehebungssitzung enthält — ein ungültiges Flag kann verhindern, dass der eingebettete Prozess jedes Mal sauber startet.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## Auf eine externe Rclone-Instanz ausweichen

Stürzt die eingebettete Engine auf einer bestimmten Maschine immer wieder ab — häufig bei ressourcenbeschränkter Hardware — können Sie RcloneView stattdessen auf eine externe rclone-Instanz verweisen. Führen Sie `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572` in einem Terminal aus und fügen Sie sie dann unter Settings > Connect Manager > New Connection mit dieser Adresse und diesen Zugangsdaten hinzu. Dadurch wird der Lebenszyklus des rclone-Prozesses vom RcloneView-App entkoppelt, sodass ein GUI-Problem Ihre Übertragungs-Engine nicht lahmlegen kann — und umgekehrt.

## Erste Schritte

1. Laden Sie **RcloneView** bei Bedarf für eine Neuinstallation von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Prüfen Sie unter Settings > Embedded Rclone, ob das Versionsfeld leer ist, um einen Absturz zu bestätigen.
3. Verwenden Sie die Neustart-Funktion und prüfen Sie anschließend die Job History auf mit Errored markierte Einträge.
4. Aktivieren Sie DEBUG-Protokollierung, falls der Absturz wiederkehrt, und wechseln Sie zu einer externen rclone-Verbindung, falls er weiterhin auftritt.

Ein abgestürzter eingebetteter Prozess wirkt alarmierend, weil jeder Remote gleichzeitig ausfällt, doch die Lösung ist fast immer nur einen Neustart entfernt — und die Protokollierung verwandelt ein Rätsel beim nächsten Mal in eine Diagnose mit nur einer Zeile.

---

**Verwandte Anleitungen:**

- [Rclone-Konfigurationspasswortfehler beheben — Verschlüsselte Konfigurationsprobleme mit RcloneView lösen](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [Hohen Arbeitsspeicher- und CPU-Verbrauch bei Rclone-Übertragungen mit RcloneView beheben](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Rclone-Selbstaktualisierung — Ihre eingebettete Engine in RcloneView aktuell halten](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
