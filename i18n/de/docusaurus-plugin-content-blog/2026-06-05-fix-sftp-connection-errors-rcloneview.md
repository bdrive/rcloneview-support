---
slug: fix-sftp-connection-errors-rcloneview
title: "SFTP-Verbindungsfehler beheben — SSH-Dateiübertragungsprobleme mit RcloneView lösen"
authors:
  - alex
description: "Diagnostizieren und beheben Sie häufige SFTP-Verbindungsfehler in RcloneView — Authentifizierungsfehler, Host-Key-Konflikte und Timeouts — und bringen Sie SSH-Übertragungen zum Laufen."
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP-Verbindungsfehler beheben — SSH-Dateiübertragungsprobleme mit RcloneView lösen

> SFTP-Fehler in RcloneView lassen sich fast immer auf eine Handvoll Grundursachen zurückführen — falsche Authentifizierungseinstellungen, Firewall-Regeln oder fehlgeschlagene Host-Key-Überprüfungen — und für jede gibt es eine direkte Lösung.

SFTP (SSH File Transfer Protocol, Port 22) ist ein Standardverfahren zur Übertragung von Dateien zwischen lokalen Rechnern und Servern: Webhoster, lokale NAS-Geräte und Cloud-VMs bieten häufig eine SFTP-Schnittstelle an. Wenn RcloneView keinen SFTP-Remote erreichen kann, weist die Fehlermeldung im Log-Tab auf die Ursache hin, aber die Bandbreite möglicher Probleme — falsche Zugangsdaten, blockierte Ports, nicht übereinstimmende Host-Keys, eingeschränkte Pfade — kann die Diagnose zum Ratespiel machen. Diese Anleitung geht die häufigsten SFTP-Fehler durch und zeigt, wie Sie jeden davon systematisch beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Den SFTP-Remote korrekt einrichten

Die meisten Verbindungsfehler beginnen bereits bei der Einrichtung des Remotes. Öffnen Sie in RcloneView **Remote-Tab > Neuer Remote** und wählen Sie **SFTP** aus der Anbieterliste. Erforderlich sind der **Host** (reiner Hostname oder IP-Adresse — ohne `sftp://`), der **Port** (Standard 22), ein **Benutzername** sowie Ihre **Authentifizierungsmethode**, entweder ein Passwort oder der Pfad zu einer privaten SSH-Schlüsseldatei.

Ein häufiger Fehler ist die Eingabe von `sftp://hostname` im Host-Feld. RcloneView (über rclone) erwartet nur den reinen Hostnamen oder die IP-Adresse, und das Präfix `sftp://` führt zu einer sofortigen Verbindungsverweigerung. Wenn Ihr Server schlüsselbasierte Authentifizierung verwendet, stellen Sie sicher, dass der Pfad zur privaten Schlüsseldatei auf die richtige Datei auf Ihrem lokalen Rechner verweist. Unter Linux und macOS müssen die Berechtigungen der Schlüsseldatei `600` oder strenger sein — der SSH-Client verweigert die Verwendung von für alle lesbaren Schlüsseln.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## Authentifizierungsfehler diagnostizieren

Authentifizierungsfehler erscheinen im **Log-Tab** von RcloneView mit Meldungen wie `ssh: handshake failed` oder `Permission denied (publickey,password)`. Gehen Sie diese Prüfungen der Reihe nach durch:

1. **Benutzernamen überprüfen** — verbinden Sie sich einmal mit einem Terminal-SSH-Client, um den genauen Kontonamen zu bestätigen. RcloneView verwendet dieselben Zugangsdaten, und Groß-/Kleinschreibung ist relevant.
2. **Schlüssel- versus Passwortmodus prüfen** — wenn der Server schlüsselbasierte Anmeldung erzwingt, schlägt eine Passworteingabe in RcloneView fehl. Lassen Sie das Passwortfeld leer und geben Sie stattdessen den Pfad zum privaten Schlüssel an.
3. **DEBUG-Protokollierung aktivieren** — gehen Sie zu Einstellungen > Eingebettetes Rclone > Rclone-Protokollierung aktivieren, stellen Sie die Stufe auf DEBUG und reproduzieren Sie den Fehler. Die Protokolldatei erfasst den vollständigen SSH-Handshake und lokalisiert genau den Schritt der Ablehnung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## Host-Key-Konflikte beheben

Beim ersten Verbindungsaufbau zu einem SFTP-Server speichert rclone dessen Host-Key. Ändert sich dieser Key später — etwa durch einen Serverneuaufbau, eine Betriebssystem-Neuinstallation oder eine Zertifikatsrotation — meldet rclone einen `host key mismatch`-Fehler und verweigert die Verbindung, um Man-in-the-Middle-Angriffe zu verhindern. Öffnen Sie zur Behebung den Tab **Rclone-Terminal** in RcloneView und führen Sie Folgendes aus:

```
rclone config show <remote-name>
```

Ermitteln Sie den in der Ausgabe angezeigten Pfad `known_hosts_file`, öffnen Sie diese Datei in einem Texteditor und löschen Sie den veralteten Eintrag für den betroffenen Host. Beim nächsten Verbindungsversuch werden Sie aufgefordert, dem neuen Key zu vertrauen, und dieser wird sauber gespeichert.

## Firewall- und Timeout-Probleme beheben

Wenn der Verbindungsversuch ohne Fehlermeldung hängen bleibt — oder `dial tcp: connection timed out` liefert — liegt das Problem wahrscheinlich an einer Firewall, die Port 22 entweder auf dem Server oder im Client-Netzwerk blockiert. Nutzen Sie den Terminal-Tab, um mit `rclone about <remote-name>:` zu testen, ob rclone den Server erreichen kann, und vergleichen Sie das Ergebnis mit einer direkten Terminal-SSH-Verbindung. Wenn der SSH-Client erfolgreich ist, rclone aber ein Timeout meldet, prüfen Sie, ob Ihr Rechner oder das Unternehmensnetzwerk ausgehende Firewall-Regeln anwendet, die Verbindungen außerhalb des Browsers betreffen. Für Netzwerke, die ausgehenden Port 22 blockieren, bitten Sie den Serveradministrator, SFTP auf einem alternativen Port bereitzustellen — ein gängiger Workaround ist Port 443 — und aktualisieren Sie das Port-Feld in Ihren RcloneView-Remote-Einstellungen entsprechend.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## Jobverlauf nach fehlgeschlagenen Übertragungen überprüfen

Sobald die Verbindung stabil ist, überprüfen Sie die Ansicht **Jobverlauf**, um sicherzustellen, dass frühere fehlgeschlagene Läufe keine unvollständigen Dateien am Ziel hinterlassen haben. RcloneView protokolliert für jeden Job Status, Anzahl der übertragenen Dateien, Geschwindigkeit und Fehlercodes. Ein kurzer Blick genügt, um unvollständige Synchronisationen zu erkennen, die erneut ausgeführt werden müssen, und mit der Dry-Run-Option können Sie genau vorab sehen, welche Dateien kopiert oder gelöscht werden, bevor Sie den Vorgang bestätigen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie **Remote-Tab > Neuer Remote > SFTP** und geben Sie den reinen Hostnamen (ohne `sftp://`-Präfix), Port, Benutzernamen und Authentifizierungsdaten ein.
3. Aktivieren Sie die DEBUG-Protokollierung in den Einstellungen, um den vollständigen SSH-Handshake bei Fehlern zu erfassen.
4. Prüfen Sie den **Jobverlauf** nach jeder fehlgeschlagenen Übertragung, um unvollständige Synchronisationen zu identifizieren, die erneut ausgeführt werden müssen.

Mit den richtigen Zugangsdaten und einem klaren Blick auf die rclone-Protokollausgabe lassen sich die meisten SFTP-Fehler schnell beheben — und RcloneView macht es einfach, Ergebnisse zu überprüfen und zu produktiven Dateiübertragungen zurückzukehren.

---

**Weiterführende Anleitungen:**

- [FTP-Serverdateien verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [SFTP und SMB als lokale Laufwerke mit RcloneView einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
