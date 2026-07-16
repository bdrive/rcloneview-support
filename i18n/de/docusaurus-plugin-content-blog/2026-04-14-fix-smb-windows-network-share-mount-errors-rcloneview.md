---
slug: fix-smb-windows-network-share-mount-errors-rcloneview
title: "SMB-Netzwerkfreigabe-Einbindungsfehler beheben — Verbindungsprobleme mit RcloneView lösen"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie SMB/CIFS-Netzwerkfreigabe-Verbindungs- und Einbindungsfehler in RcloneView. Lösen Sie Authentifizierungsfehler, Protokollkonflikte und Berechtigungsprobleme bei Windows-Freigaben."
keywords:
  - SMB-Einbindungsfehler RcloneView
  - SMB-Verbindungsfehler rclone beheben
  - CIFS-Netzwerkfreigabe-Fehlerbehebung
  - Windows-Netzwerkfreigabe-Einbindungsfehler
  - rclone SMB-Authentifizierungsfehler
  - SMB-Protokollkonflikt beheben
  - Netzlaufwerk-Verbindungsfehler RcloneView beheben
  - SMB-Freigabe-Berechtigungsfehler
tags:
  - RcloneView
  - troubleshooting
  - smb
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SMB-Netzwerkfreigabe-Einbindungsfehler beheben — Verbindungsprobleme mit RcloneView lösen

> SMB/CIFS-Netzwerkfreigabefehler in RcloneView entstehen meist durch Authentifizierungsprobleme, Protokollversionskonflikte oder blockierende Firewalls. So diagnostizieren und beheben Sie jeden Fall.

SMB (Server Message Block) / CIFS ist das Protokoll, das Windows für die Netzwerkdateifreigabe verwendet — NAS-Geräte, Windows-Dateiserver und Samba-Freigaben nutzen es alle. RcloneView verbindet sich mit SMB-Freigaben als Remote, sodass Sie zwischen SMB und Cloud-Speicher synchronisieren oder SMB-Freigaben zusammen mit anderen Cloud-Anbietern einbinden können. SMB-Verbindungen reagieren jedoch empfindlich auf die Netzwerkkonfiguration: Authentifizierungsmodus, Dialektversion und Firewall-Regeln beeinflussen alle, ob die Verbindung erfolgreich ist. Diese Anleitung führt durch die häufigsten SMB-Fehler und deren Lösungen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige SMB-Fehlermeldungen in RcloneView

Prüfen Sie den **Log-Tab** nach einem fehlgeschlagenen SMB-Verbindungsversuch. Häufige Fehlersignaturen sind:

- `NT_STATUS_LOGON_FAILURE` — Benutzername oder Passwort ist falsch
- `NT_STATUS_ACCESS_DENIED` — Anmeldedaten sind korrekt, aber die Freigabeberechtigungen verweigern den Zugriff
- `connection refused` oder `no route to host` — Firewall blockiert Port 445 (SMB)
- `SMB negotiation failed: Protocol negotiate error` — Protokollversionskonflikt zwischen Client und Server
- `NT_STATUS_IO_TIMEOUT` — SMB-Server ist nicht erreichbar oder reagiert nicht

Jeder Fehler weist auf eine andere Grundursache und Lösung hin.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring an SMB remote connection in RcloneView" class="img-large img-center" />

## Authentifizierungs- und Berechtigungsfehler beheben

Bei `NT_STATUS_LOGON_FAILURE` überprüfen Sie das Benutzernamensformat. Die SMB-Authentifizierung erfordert den Benutzernamen im richtigen Format für den Server:
- Domänenkonten: `DOMAIN\username` oder `username@domain.com`
- Lokale Konten auf einem NAS: nur `username` (kein Domänenpräfix)
- Gastzugriff: Benutzername und Passwort leer lassen oder `guest` verwenden

Bei `NT_STATUS_ACCESS_DENIED` sind die Anmeldedaten gültig, aber die ACL der Freigabe gewährt dem authentifizierten Benutzer keinen Zugriff. Melden Sie sich im Admin-Panel des NAS oder Windows-Servers an und überprüfen Sie, ob die Freigabeberechtigungen Lese- (oder Lese-/Schreib-)Zugriff für Ihr Konto enthalten.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Testing SMB share connection and browsing files in RcloneView" class="img-large img-center" />

## Protokollversionsprobleme beheben

Ältere NAS-Geräte und Samba-Server unterstützen möglicherweise nicht den neuesten SMB3-Dialekt, den rclone standardmäßig aushandelt. Bearbeiten Sie im Remote Manager von RcloneView den SMB-Remote und setzen Sie das Feld **SMB version** explizit: Versuchen Sie `SMB2` oder `SMB1` für ältere Hardware. Beachten Sie, dass SMB1 unter Windows 10/11 und Windows Server 2016+ aus Sicherheitsgründen standardmäßig deaktiviert ist — vermeiden Sie SMB1 nach Möglichkeit.

Bei Samba-Servern (Linux-NAS, Synology, QNAP mit Samba) prüfen Sie die Einstellungen `min protocol` und `max protocol` in der Datei `smb.conf`. Stellen Sie sicher, dass Samba so konfiguriert ist, dass mindestens SMB2 angeboten wird.

## Firewall- und Verbindungsprobleme beheben

SMB benötigt TCP-Port 445. Wenn RcloneView `connection refused` oder `no route to host` anzeigt, prüfen Sie:
- Ob die Server-Firewall (Windows-Firewall, NAS-Firewall) eingehenden TCP-Verkehr auf Port 445 von Ihrer Client-IP zulässt
- Ob Ihr Router oder Netzwerk-Switch inter-VLAN-Verkehr auf Port 445 nicht blockiert
- Bei entferntem SMB über das Internet: SMB sollte durch ein VPN getunnelt werden, nicht direkt exponiert

Verwenden Sie den Terminal-Tab von RcloneView, um nach der Behebung der Konfiguration `rclone about smb-remote:` auszuführen — eine erfolgreiche Antwort bestätigt, dass die Verbindung funktioniert.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an SMB share as a virtual drive through RcloneView Mount Manager" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie den Log-Tab nach dem spezifischen SMB-Fehlercode nach einer fehlgeschlagenen Verbindung.
3. Beheben Sie Authentifizierungs-, Protokollversions- oder Firewall-Probleme gemäß dem angezeigten Fehler.
4. Testen Sie die Verbindung im Remote Manager erneut, bevor Sie Synchronisations- oder Einbindungsaufgaben erstellen.

SMB-Fehler in RcloneView lassen sich fast immer beheben, ohne etwas neu zu installieren — die richtige Konfigurationsänderung sorgt dafür, dass Ihre Netzwerkfreigabe zuverlässig verbunden ist und synchronisiert.

---

**Weiterführende Anleitungen:**

- [SFTP und SMB als lokale Laufwerke mit RcloneView einbinden](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [SFTP-Verbindungsfehler und Timeout-Probleme mit RcloneView beheben](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
