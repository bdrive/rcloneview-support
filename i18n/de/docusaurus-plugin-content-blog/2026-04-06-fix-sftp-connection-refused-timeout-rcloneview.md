---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "SFTP-Fehler „Connection Refused“ und Timeout in RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie SFTP-Fehler wie Connection Refused, Timeout und Authentifizierungsfehler in RcloneView. Behandelt Firewall-Regeln, SSH-Schlüssel, Port-Konfiguration und Timeout-Tuning."
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - troubleshooting
  - sftp
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP-Fehler „Connection Refused“ und Timeout in RcloneView beheben

> SFTP-Fehler in RcloneView lassen sich fast immer auf Netzwerkkonfiguration, Authentifizierungs-Setup oder serverseitige Einstellungen zurückführen. Dieser Leitfaden geht alle häufigen Ursachen und Lösungen durch.

SFTP (SSH File Transfer Protocol) ist eines der am häufigsten verwendeten Remotes in rclone und verbindet RcloneView mit jedem Server, der über SSH-Zugriff verfügt — NAS-Geräte, Linux-Server, Shared Hosting und selbst gehostete Infrastruktur. Im Gegensatz zu Cloud-Provider-APIs hängt SFTP von der Netzwerkerreichbarkeit, Firewall-Regeln und der SSH-Konfiguration ab, wodurch es mehr potenzielle Fehlerquellen gibt. Hier erfahren Sie, wie Sie die häufigsten SFTP-Probleme diagnostizieren und beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige SFTP-Fehlermeldungen

| Fehlermeldung | Wahrscheinliche Ursache |
|--------------|-------------|
| `connection refused` | SSH-Server läuft nicht, falscher Port oder Firewall-Blockade |
| `connection timed out` | Firewall verwirft Pakete, Server nicht erreichbar oder Netzwerkproblem |
| `ssh: handshake failed` | SSH-Schlüssel-Mismatch, inkompatible Algorithmen oder serverseitige Konfiguration |
| `permission denied (publickey)` | Falsche Schlüsseldatei, Schlüssel auf dem Server nicht autorisiert oder Passphrase-Problem |
| `permission denied (password)` | Falsches Passwort oder Passwort-Authentifizierung auf dem Server deaktiviert |
| `no supported methods remain` | Server erfordert eine Authentifizierungsmethode, für die rclone nicht konfiguriert ist |
| `ssh: unable to authenticate` | Anmeldedaten nicht angegeben oder abgelehnt |
| `too many authentication failures` | SSH-Agent bietet zu viele Schlüssel an, bevor der richtige verwendet wird |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## Lösung 1: Connection Refused

Ein „connection refused“-Fehler bedeutet, dass die TCP-Verbindung aktiv abgelehnt wurde. Der Netzwerk-Stack des Servers ist erreichbar, aber auf dem Zielport lauscht nichts.

### Prüfen, ob SSH läuft

Führen Sie auf dem Remote-Server `sudo systemctl status sshd` aus. Falls SSH nicht läuft, starten Sie es mit `sudo systemctl start sshd && sudo systemctl enable sshd`.

### Port überprüfen

Der Standard-SSH-Port ist 22, aber viele Server verwenden einen benutzerdefinierten Port. Prüfen Sie dies mit `grep -i "^Port" /etc/ssh/sshd_config`. Stellen Sie in RcloneView sicher, dass die Port-Einstellung des SFTP-Remotes damit übereinstimmt. Eine Diskrepanz zwischen Port 22 und einem benutzerdefinierten Port wie 2222 ist eine der häufigsten Ursachen.

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### Lokale Firewall-Blockaden prüfen

Überprüfen Sie auf dem Server, ob die Firewall eingehende Verbindungen auf dem SSH-Port zulässt. Verwenden Sie `sudo ufw status` (Ubuntu/Debian), `sudo firewall-cmd --list-ports` (RHEL/Fedora) oder `sudo iptables -L -n | grep 22`. Falls der Port blockiert ist, fügen Sie eine Regel hinzu, um ihn freizugeben.

## Lösung 2: Connection Timeout

Ein Timeout bedeutet, dass Pakete gesendet werden, aber keine Antwort empfangen wird. Dies ist in der Regel ein Problem auf Netzwerkebene und kein serverseitiges Konfigurationsproblem.

### Netzwerkerreichbarkeit

Testen Sie die grundlegende Konnektivität von Ihrem Rechner aus:

```bash
ping server-hostname
telnet server-hostname 22
```

Wenn `ping` erfolgreich ist, aber `telnet` auf Port 22 fehlschlägt, blockiert eine Firewall zwischen Ihnen und dem Server den SSH-Port.

### Router- und NAT-Firewalls

Falls sich der SFTP-Server hinter einem NAT-Router befindet, stellen Sie sicher, dass die Portweiterleitung so konfiguriert ist, dass externer Traffic auf dem SSH-Port an die interne Server-IP weitergeleitet wird. Ohne Portweiterleitung laufen Verbindungen von außerhalb des lokalen Netzwerks in einen Timeout.

### ISP- oder Firmen-Firewall-Blockaden

Manche ISPs und Firmennetzwerke blockieren ausgehende Verbindungen auf Port 22. Testen Sie mit einem alternativen Port oder verwenden Sie ein VPN, um die Einschränkung zu umgehen.

### Timeout-Tuning in Rclone

Der Standard-Verbindungstimeout von Rclone kann für Verbindungen mit hoher Latenz zu kurz sein. Sie können ihn durch Hinzufügen des Flags `--contimeout` erhöhen. Für SFTP-spezifische Verzögerungen bei der Serverantwort sollten Sie erwägen, `--timeout` auf einen höheren Wert zu setzen (z. B. `5m` für langsame Server).

## Lösung 3: Fehler bei der SSH-Schlüssel-Authentifizierung

Die schlüsselbasierte Authentifizierung ist die sicherste und empfohlene Methode für SFTP-Verbindungen, aber Fehlkonfigurationen kommen häufig vor.

### Pfad der Schlüsseldatei überprüfen

In RcloneView enthält die SFTP-Remote-Konfiguration ein Feld für den Pfad der SSH-Schlüsseldatei. Stellen Sie sicher, dass:

- der Pfad auf den **privaten** Schlüssel zeigt (z. B. `~/.ssh/id_rsa` oder `~/.ssh/id_ed25519`), nicht auf den öffentlichen Schlüssel.
- die Datei existiert und von Ihrem Benutzerkonto lesbar ist.
- die Schlüsseldatei die richtigen Berechtigungen hat (`600` unter Linux/macOS).

### Den Schlüssel auf dem Server autorisieren

Der öffentliche Schlüssel muss in `~/.ssh/authorized_keys` auf dem Server eingetragen sein. Fügen Sie ihn mit `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys` hinzu und stellen Sie anschließend sicher, dass die Berechtigungen `600` für die Datei und `700` für das Verzeichnis `.ssh` betragen.

### Passphrase-geschützte Schlüssel

Wenn Ihr privater Schlüssel eine Passphrase hat, benötigt rclone diese, um den Schlüssel zu entschlüsseln. Geben Sie in der SFTP-Remote-Konfiguration von RcloneView die Passphrase im entsprechenden Feld ein. Wenn Sie es leer lassen, schlägt die Authentifizierung stillschweigend fehl.

### SSH-Agent-Konflikte

Wenn ein SSH-Agent mit vielen geladenen Schlüsseln läuft, kann der Server die Verbindung nach zu vielen fehlgeschlagenen Schlüsselversuchen ablehnen (das Standardlimit liegt in der Regel bei 6). Geben Sie entweder die genaue Schlüsseldatei in der rclone-Konfiguration an, um den Agent zu umgehen, oder reduzieren Sie die Anzahl der im Agent geladenen Schlüssel.

## Lösung 4: Probleme mit der Passwort-Authentifizierung

### Passwort-Authentifizierung auf dem Server deaktiviert

Viele Server deaktivieren aus Sicherheitsgründen die Passwort-Authentifizierung. Prüfen Sie dies mit `grep -i "PasswordAuthentication" /etc/ssh/sshd_config`. Steht der Wert auf `no`, müssen Sie stattdessen die schlüsselbasierte Authentifizierung verwenden.

### Falsches Passwort

Stellen Sie sicher, dass Sie das richtige Passwort in der SFTP-Remote-Konfiguration von RcloneView eingeben. Rclone speichert das Passwort in verschleierter Form in `rclone.conf` — wenn Sie die Konfiguration manuell bearbeiten, verwenden Sie `rclone obscure`, um das Passwort korrekt zu kodieren.

## Lösung 5: Limits für gleichzeitige Verbindungen

SFTP-Server begrenzen häufig die Anzahl gleichzeitiger Sitzungen. Rclone verwendet standardmäßig 4 gleichzeitige Übertragungen, aber manche Server erlauben nur 1 oder 2 Verbindungen.

Wenn bei großen Übertragungen zeitweise Verbindungsfehler auftreten, reduzieren Sie die Nebenläufigkeit:

- Setzen Sie `--transfers 1` oder `--transfers 2`, um parallele Verbindungen zu begrenzen.
- Setzen Sie `--checkers 1`, um die Anzahl gleichzeitiger Prüfvorgänge zu reduzieren.

Manche Shared-Hosting-Anbieter sind besonders restriktiv. Beginnen Sie mit niedriger Nebenläufigkeit und erhöhen Sie sie schrittweise.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## Lösung 6: Inkompatibilität der SSH-Algorithmen

Ältere Server unterstützen möglicherweise keine modernen SSH-Algorithmen, während gehärtete Server ältere Algorithmen ablehnen können. Wenn „handshake failed“-Fehler auftreten, aktualisieren Sie nach Möglichkeit die SSH-Server-Software oder prüfen Sie `/etc/ssh/sshd_config` auf Einschränkungen bei `KexAlgorithms`, `Ciphers` und `MACs`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ein SFTP-Remote hinzufügen** mit korrektem Host, Port und Authentifizierungseinstellungen.
3. **Die Verbindung testen**, indem Sie das Remote im Explorer durchsuchen.
4. **Die obige Checkliste durchgehen**, falls Fehler auftreten.

SFTP-Probleme sind fast immer Konfigurationsprobleme, keine Softwarefehler. Wer jede Ebene methodisch prüft — Netzwerk, Firewall, Authentifizierung und Servereinstellungen —, löst die überwiegende Mehrheit der Fälle.

---

**Weiterführende Leitfäden:**

- [Rclone-Fehler in RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Rclone-Konfigurationsbeschädigung beheben](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Unterbrochene Übertragungen wiederherstellen](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
