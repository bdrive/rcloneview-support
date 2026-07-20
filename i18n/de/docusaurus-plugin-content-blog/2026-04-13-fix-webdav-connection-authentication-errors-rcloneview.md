---
slug: fix-webdav-connection-authentication-errors-rcloneview
title: "WebDAV-Verbindungs- und Authentifizierungsfehler beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Beheben Sie WebDAV-Verbindungsfehler und Authentifizierungsfehler in RcloneView. Schritt-für-Schritt-Lösungen für häufige WebDAV-Probleme, einschließlich SSL, Zugangsdaten und URL-Problemen."
keywords:
  - WebDAV-Verbindungsfehler
  - WebDAV-Authentifizierungsfehler
  - WebDAV-Synchronisation beheben
  - WebDAV RcloneView
  - WebDAV-Fehlerbehebung
  - WebDAV-SSL-Fehler
  - Nextcloud-WebDAV-Fix
  - WebDAV-Zugangsdaten
  - Cloud-Speicher WebDAV
  - RcloneView WebDAV
tags:
  - RcloneView
  - webdav
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# WebDAV-Verbindungs- und Authentifizierungsfehler beheben — Lösung mit RcloneView

> Diagnostizieren und beheben Sie WebDAV-Verbindungsfehler in RcloneView — von falschen URL-Formaten und Problemen mit Zugangsdaten bis hin zu SSL-Zertifikatfehlern und Kompatibilitätsproblemen mit dem Server.

WebDAV ist ein weit verbreitetes Protokoll für Cloud- und selbstgehosteten Speicher: Nextcloud, ownCloud, Seafile, SharePoint (Legacy) und viele NAS-Geräte stellen WebDAV-Endpunkte bereit. Wenn ein WebDAV-Remote in RcloneView keine Verbindung herstellen kann, reichen die Fehlermeldungen von vagen Netzwerk-Timeouts bis zu spezifischen HTTP-401- oder 403-Antworten. Dieser Leitfaden führt durch die häufigsten WebDAV-Probleme in RcloneView und zeigt, wie man jedes davon behebt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## WebDAV-URL-Format prüfen

Die häufigste Ursache für WebDAV-Verbindungsfehler ist eine falsche URL. WebDAV-Endpunkte haben spezifische Pfadanforderungen, die je nach Serversoftware unterschiedlich sind:

- **Nextcloud/ownCloud:** `https://your-server.com/remote.php/dav/files/USERNAME/`
- **Seafile:** `https://your-server.com/seafdav`
- **SharePoint (Legacy WebDAV):** `https://your-domain.sharepoint.com/sites/sitename/Documents`

Ein häufiger Fehler ist das Weglassen des abschließenden Schrägstrichs, die Verwendung des falschen Pfadsegments (z. B. `/dav` statt `/dav/files/username/` für Nextcloud) oder die Verwendung von HTTP statt HTTPS. Bearbeiten Sie in RcloneView den WebDAV-Remote über den Remote Manager und überprüfen Sie, ob die URL genau der Dokumentation Ihres Servers entspricht.

<img src="/support/images/en/blog/new-remote.png" alt="Editing WebDAV remote URL in RcloneView" class="img-large img-center" />

## Authentifizierungsfehler beheben (HTTP 401/403)

Eine 401-Unauthorized-Antwort bedeutet, dass der Server Ihre Zugangsdaten abgelehnt hat. Eine 403-Forbidden-Antwort bedeutet, dass die Zugangsdaten akzeptiert wurden, das Konto aber keine Berechtigung für den angeforderten Pfad hat. Schritte zur Behebung von Authentifizierungsfehlern:

**Bei 401-Fehlern:** Überprüfen Sie, ob Benutzername und Passwort korrekt sind. Manche Server (insbesondere Nextcloud) erfordern ein App-Passwort anstelle Ihres Hauptkontopassworts — generieren Sie eines in den Sicherheitseinstellungen Ihres Kontos. Stellen Sie sicher, dass in den Feldern für die Zugangsdaten keine Leerzeichen am Ende vorhanden sind.

**Bei 403-Fehlern:** Überprüfen Sie, ob das Konto Lese-/Schreibrechte für den Zielordner hat. Prüfen Sie bei Nextcloud die Freigabe- oder Ordnerzugriffseinstellungen. Bestätigen Sie bei Unternehmens-WebDAV-Servern, dass Ihrem Konto explizit WebDAV-Zugriff gewährt wurde — dieser kann standardmäßig deaktiviert sein.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Troubleshooting WebDAV authentication in RcloneView" class="img-large img-center" />

## SSL-Zertifikatfehler behandeln

Wenn Ihr WebDAV-Server ein selbstsigniertes Zertifikat oder eine interne CA verwendet, lehnt RcloneView die Verbindung standardmäßig mit einem SSL-Fehler ab. Zwei Ansätze lösen dieses Problem:

**Option 1 — Dem Zertifikat vertrauen:** Der bevorzugte Ansatz. Fügen Sie das CA-Zertifikat des Servers dem vertrauenswürdigen Zertifikatspeicher Ihres Systems hinzu und starten Sie RcloneView anschließend neu.

**Option 2 — Zertifikatprüfung deaktivieren:** Fügen Sie unter Einstellungen > Embedded Rclone > Global Rclone Flags in RcloneView `--no-check-certificate` hinzu. Dies deaktiviert die Zertifikatprüfung global. Verwenden Sie dies nur in vertrauenswürdigen internen Netzwerkumgebungen.

Zum Testen der Verbindung ermöglicht das integrierte rclone-Terminal von RcloneView (im Tab Terminal) die direkte Ausführung von `rclone ls webdavremote:`, um die rohe Fehlerausgabe zu sehen, die oft mehr diagnostische Details liefert als die Fehlermeldung der GUI.

## Ausführliches Logging für die Diagnose aktivieren

Wenn Fehler unklar sind, aktivieren Sie das detaillierte Logging in RcloneView. Gehen Sie zu Einstellungen > Embedded Rclone und aktivieren Sie Enable rclone Logging. Setzen Sie den Log Level auf DEBUG für die ausführlichste Ausgabe. Nach einem Neustart des eingebetteten rclone und der Reproduktion des Fehlers erfasst die Logdatei den vollständigen HTTP-Austausch — Anfrage-Header, Antwortcodes und Fehlertexte — und liefert Ihnen die genauen Informationen zur Diagnose des Problems.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing WebDAV error logs in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Überprüfen Sie, ob Ihr WebDAV-URL-Format dem dokumentierten Endpunktpfad Ihrer Serversoftware entspricht.
3. Stellen Sie sicher, dass Sie die richtigen Zugangsdaten verwenden (App-Passwort für Nextcloud, nicht Ihr Hauptpasswort).
4. Aktivieren Sie DEBUG-Logging, um detaillierte Fehlerinformationen zu erfassen, falls das Problem weiterhin besteht.

Die meisten WebDAV-Verbindungsfehler sind auf URL-Diskrepanzen oder Probleme mit den Zugangsdaten zurückzuführen — eine methodische Überprüfung dieser beiden Bereiche löst die meisten Fälle.

---

**Weiterführende Anleitungen:**

- [Einen WebDAV-Server verbinden und Cloud-Speicher mit RcloneView synchronisieren](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Nextcloud- und WebDAV-Speicher mit RcloneView sichern](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
