---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "SFTP-Public-Key-Authentifizierungsfehler beheben — SSH-Probleme mit RcloneView lösen"
authors:
  - tayson
description: "Beheben Sie Fehler bei der SFTP-Public-Key-Authentifizierung in RcloneView. Diagnostizieren Sie falsche Schlüsselpfade, Berechtigungen, Passphrase-Probleme und Schlüsselformatprobleme."
keywords:
  - SFTP Public-Key-Fehler RcloneView
  - SFTP-Authentifizierungsfehler beheben
  - SSH-Schlüssel-Authentifizierung rclone SFTP
  - SFTP Permission Denied Public Key
  - RcloneView SFTP-Fehlerbehebung
  - SSH-Schlüsselformat rclone
  - SFTP-Schlüssel-Passphrase-Fehler
  - rclone SFTP-Verbindungsfehler beheben
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP-Public-Key-Authentifizierungsfehler beheben — SSH-Probleme mit RcloneView lösen

> Fehler bei der SFTP-Public-Key-Authentifizierung werden fast immer durch falsche Schlüsselpfade, Dateiberechtigungen oder Passphrase-Abweichungen verursacht — dieser Leitfaden geht systematisch jeden einzelnen Fall durch.

SFTP ist eine der gängigsten Methoden, um Remote-Linux-Server in RcloneView zu verbinden, und die Public-Key-Authentifizierung ist die bevorzugte Sicherheitsmethode gegenüber Passwörtern. Wenn die Schlüsselauthentifizierung fehlschlägt, können die Fehlermeldungen kryptisch sein: `ssh: handshake failed`, `permission denied (publickey)` oder `no supported methods remain`. Dieser Leitfaden behandelt die häufigsten Ursachen und zeigt, wie man jede einzelne diagnostiziert und behebt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP-Remote-Konfiguration in RcloneView

Wenn Sie einen SFTP-Remote in RcloneView erstellen, sind die relevanten Felder für die schlüsselbasierte Authentifizierung:

- **Host**: der Servername oder die IP-Adresse
- **User**: der SSH-Benutzername
- **Key file**: der Pfad zu Ihrer privaten Schlüsseldatei (z. B. `~/.ssh/id_rsa` oder `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase**: die Passphrase, die den Schlüssel entschlüsselt (falls gesetzt)

Passwort-Authentifizierung und Schlüssel-Authentifizierung schließen sich pro Remote gegenseitig aus. Wenn Sie eine Schlüsseldatei angeben, lassen Sie das Passwortfeld leer.

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## Häufiger Fehler 1: Falscher Schlüsseldateipfad

Die häufigste Ursache für einen Fehler bei der Schlüsselauthentifizierung ist ein falscher oder nicht erreichbarer Schlüsseldateipfad. Prüfen Sie:

- Der Pfad existiert und zeigt auf den **privaten** Schlüssel (nicht auf den öffentlichen `.pub`-Schlüssel)
- Verwenden Sie unter Windows den vollständigen absoluten Pfad (z. B. `C:\Users\username\.ssh\id_rsa`)
- Unter Linux/macOS wird `~/.ssh/id_rsa` korrekt aufgelöst — im Zweifelsfall verwenden Sie den vollständigen Pfad

Öffnen Sie in RcloneView die SFTP-Remote-Einstellungen und überprüfen Sie den Schlüsseldateipfad. Wenn die Datei an diesem Ort nicht existiert, schlägt die Authentifizierung stillschweigend oder mit einer nicht hilfreichen Fehlermeldung fehl.

## Häufiger Fehler 2: Schlüsseldateiberechtigungen zu offen

Unter Linux und macOS verweigert SSH die Verwendung von privaten Schlüsseldateien, die für alle lesbar sind. Wenn die Berechtigungen der Schlüsseldatei zu freizügig sind, sehen Sie `Permissions 0644 for '~/.ssh/id_rsa' are too open`. So beheben Sie das:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

Unter Windows werden die Berechtigungen der Schlüsseldatei über die Dateisicherheitseinstellungen verwaltet. Stellen Sie sicher, dass die Schlüsseldatei nur für Ihr Benutzerkonto zugänglich ist und nicht mit Everyone geteilt wird.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## Häufiger Fehler 3: Passphrase-Abweichung

Wenn Ihr privater Schlüssel passphrasegeschützt ist, muss das Passphrase-Feld in den SFTP-Remote-Einstellungen von RcloneView genau übereinstimmen. Ein leeres Passphrase-Feld, obwohl für den Schlüssel eine Passphrase gesetzt ist, führt zu einem Authentifizierungsfehler. Umgekehrt schlägt auch die Eingabe einer Passphrase für einen Schlüssel ohne Passphrase fehl.

Um zu testen, ob Ihre Schlüssel-Passphrase korrekt ist, öffnen Sie ein Terminal und führen Sie `ssh -i /path/to/key user@host` aus — wenn nach der Passphrase gefragt wird und diese akzeptiert wird, sind die Anmeldedaten korrekt. Aktualisieren Sie anschließend den RcloneView-Remote entsprechend.

## Häufiger Fehler 4: Schlüsselformat nicht unterstützt

Ältere private OpenSSH-Schlüssel (PEM-Format) werden weitgehend unterstützt, aber einige neuere ED25519-Schlüssel im nativen OpenSSH-Format können je nach der in rclone eingebetteten Version der Go-SSH-Bibliothek Probleme verursachen. Wenn Sie auf `ssh: no supported methods remain` stoßen:

- Konvertieren Sie den Schlüssel in das PEM-Format: `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- Oder erzeugen Sie einen RSA-Schlüssel: `ssh-keygen -t rsa -b 4096`

## Protokolle zur Diagnose lesen

Öffnen Sie nach einem fehlgeschlagenen SFTP-Verbindungsversuch den Tab **Log** in RcloneView. Das Protokoll zeigt den vollständigen SSH-Handshake-Fehler. Für zusätzliche Ausführlichkeit verwenden Sie den Tab **Terminal** in RcloneView, um einen rclone-Befehl direkt mit den Flags `-vv` auszuführen, was die vollständige SSH-Verhandlung ausgibt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie Ihre SFTP-Remote-Einstellungen und überprüfen Sie, ob der Schlüsseldateipfad auf den richtigen privaten Schlüssel zeigt.
3. Prüfen Sie unter Linux/macOS die Berechtigungen der Schlüsseldatei mit `ls -la ~/.ssh/` und beheben Sie sie mit `chmod 600`.
4. Bestätigen Sie, dass das Passphrase-Feld mit der Passphrase Ihres Schlüssels übereinstimmt, und testen Sie dann die Verbindung im Remote Manager.

Die systematische Überprüfung von Pfad, Berechtigungen und Passphrase löst die große Mehrheit der Fehler bei der SFTP-Public-Key-Authentifizierung.

---

**Verwandte Anleitungen:**

- [SFTP-Fehler „Connection Refused" und Timeout-Fehler beheben](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Durch Netzwerkfehler unterbrochene Cloud-Synchronisation beheben](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
