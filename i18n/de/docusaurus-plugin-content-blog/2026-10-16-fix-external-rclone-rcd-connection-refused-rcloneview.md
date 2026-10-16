---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "Verbindung zu externem Rclone verweigert beheben — rcd-Zugriff mit RcloneView prüfen"
authors:
  - casey
description: "RcloneView-Verbindungsfehler zu externem rclone beheben: rclone rcd, Port 5572, Zugangsdaten, Firewall und SSL-Einstellungen mit „Test Connection“ prüfen."
keywords:
  - rclone rcd Verbindung verweigert
  - RcloneView externer rclone
  - rclone Remote Control verbindet nicht
  - rclone rcd Port 5572
  - RcloneView Connect Manager
  - rclone rcd Authentifizierung fehlgeschlagen
  - rclone rc Verbindung beheben
  - rclone rcd Firewall
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Verbindung zu externem Rclone verweigert beheben — rcd-Zugriff mit RcloneView prüfen

> Wenn RcloneView Ihren externen rclone-Server nicht erreicht, liegt die Ursache fast immer in einem von fünf Punkten, die sich in wenigen Minuten prüfen lassen.

RcloneView wird mit einem eingebetteten rclone ausgeliefert, doch viele Nutzer verbinden es über den Connect Manager mit einem externen rclone auf einem NAS, VPS oder AWS-EC2-Instanz. Schlägt diese Verbindung mit „connection refused“, einem Timeout oder einem Authentifizierungsfehler fehl, führt eine kurze Checkliste zur Ursache.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prüfen, ob rclone rcd tatsächlich läuft

RcloneView kommuniziert mit einem externen rclone über dessen Remote-Control-API, die mit `rclone rcd` gestartet wird. Starten Sie sie auf dem Server mit expliziten Zugangsdaten und Adresse, zum Beispiel `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`. Der Standardport für externes rclone ist 5572, die eingebettete Instanz nutzt 5582 auf localhost.

Ein häufiger Fehler ist, an `127.0.0.1` zu binden und dann von einem anderen Rechner aus zu verbinden. Loopback akzeptiert nur lokalen Datenverkehr. Binden Sie bei einem entfernten Server an `0.0.0.0:5572` – und beschränken Sie den Zugriff per IP in der Firewall. Beachten Sie: RcloneView ist ein GUI-Werkzeug und wird nicht auf dem Server installiert; auf dem Server läuft nur rclone.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView mit einem externen rclone-Host verbinden" class="img-large img-center" />

## Netzwerkpfad und Zugangsdaten prüfen

Läuft rcd, die Verbindung wird aber dennoch verweigert, testen Sie den Netzwerkpfad. Auf dem Rechner mit RcloneView sollte ein Health-Check gegen `/rc/noop` mit Benutzername und Passwort eine Antwort liefern. Hängt die Anfrage, blockiert eine Firewall oder Cloud-Sicherheitsgruppe den Port 5572. Auf AWS EC2 benötigt die Sicherheitsgruppe neben dem eingeschränkten SSH eine benutzerdefinierte TCP-Regel für 5572.

Authentifizierungsfehler sind ein separates Thema: Benutzername und Passwort in RcloneView müssen exakt mit `--rc-user` und `--rc-pass` übereinstimmen, einschließlich Groß- und Kleinschreibung.

<img src="/support/images/en/blog/new-remote.png" alt="Details der externen Verbindung in RcloneView eingeben" class="img-large img-center" />

## Einstellungen im Connect Manager prüfen

Öffnen Sie Settings > Connect Manager > New Connection und tragen Sie Anzeigename, Adresse im Format `http://<host>:5572` und Ihre Zugangsdaten ein. Verwendet Ihr Server ein selbstsigniertes Zertifikat, lässt sich die Verbindung über die Option zum Deaktivieren der SSL-Zertifikatsprüfung herstellen. Klicken Sie vor dem Speichern auf Test Connection, um das Ergebnis sofort zu sehen.

Schlägt es weiterhin fehl, aktivieren Sie unter Settings > Embedded Rclone das rclone-Logging, setzen die Stufe auf DEBUG, starten neu und reproduzieren das Problem, um ein Log zu erhalten.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Logs und Verlauf in RcloneView ansehen" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Starten Sie `rclone rcd` auf dem Server mit Benutzer, Passwort und erreichbarer Adresse.
3. Öffnen Sie den Port in Ihrer Firewall oder Sicherheitsgruppe.
4. Fügen Sie die Verbindung im Connect Manager hinzu und klicken Sie auf Test Connection.

Ist die Verbindung stabil, können Sie den Cloud-Speicher eines entfernten Servers von Ihrem Desktop aus verwalten.

---

**Verwandte Anleitungen:**

- [RcloneView Connection Manager — eingebettet und extern](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [SSL/TLS-Zertifikatsfehler beheben](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [SFTP-Verbindung verweigert und Timeout beheben](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
