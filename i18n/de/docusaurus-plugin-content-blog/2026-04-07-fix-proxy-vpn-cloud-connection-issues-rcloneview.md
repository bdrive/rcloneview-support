---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "Proxy- und VPN-Verbindungsprobleme mit der Cloud in RcloneView beheben"
authors:
  - tayson
description: "Beheben Sie Synchronisations- und Übertragungsfehler in RcloneView hinter Unternehmensproxys oder VPNs. Behandelt HTTP_PROXY-Einstellungen, SSL-Zertifikatsfehler, Split-Tunneling, DNS-Auflösungsprobleme und Techniken zur Umgehung von Firewalls."
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proxy- und VPN-Verbindungsprobleme mit der Cloud in RcloneView beheben

> Unternehmensproxys und VPNs unterbrechen häufig Cloud-Synchronisationsverbindungen mit kryptischen Timeout- und Zertifikatsfehlern. Dieser Leitfaden behandelt jedes gängige Szenario und zeigt, wie Sie RcloneView so konfigurieren, dass es auch hinter Netzwerkbeschränkungen zuverlässig funktioniert.

Viele Organisationen leiten ihren Internetverkehr über Proxyserver um oder verlangen VPN-Verbindungen für Remote-Mitarbeiter. Diese Maßnahmen erhöhen zwar die Sicherheit, stören aber häufig Cloud-Speicher-API-Aufrufe. Rclone und RcloneView benötigen direkten HTTPS-Zugriff auf die Endpunkte der Cloud-Anbieter, und alles, was sich zwischen Ihrem Rechner und diesen Endpunkten befindet – Proxys, Firewalls, VPN-Tunnel oder SSL-Inspektionsgeräte –, kann Verbindungsfehler verursachen. Die Fehler reichen von Timeouts und DNS-Fehlern bis hin zu TLS-Handshake-Fehlern und abgelehnten Zertifikaten. Dieser Leitfaden geht jedes einzelne Problem durch und liefert konkrete Lösungen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP_PROXY- und HTTPS_PROXY-Umgebungsvariablen konfigurieren

Rclone respektiert die von den meisten Netzwerktools verwendeten Standard-HTTP-Proxy-Umgebungsvariablen. Wenn Ihre Organisation für den Internetzugang einen Proxy erfordert, müssen Sie diese Variablen setzen, damit rclone weiß, wohin der Datenverkehr geleitet werden soll.

### Proxy-Variablen setzen

**Windows (Systemumgebungsvariablen):**

1. Öffnen Sie **Einstellungen > System > Info > Erweiterte Systemeinstellungen > Umgebungsvariablen**.
2. Fügen Sie unter Systemvariablen (oder Benutzervariablen) Folgendes hinzu:
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. Starten Sie RcloneView neu, damit die neuen Variablen übernommen werden.

**macOS / Linux (Shell-Profil):**

Fügen Sie Folgendes zu `~/.bashrc`, `~/.zshrc` oder `/etc/environment` hinzu:

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

Laden Sie die Datei neu ein oder starten Sie Ihre Terminal-Sitzung neu.

### Authentifizierte Proxys

Wenn Ihr Proxy einen Benutzernamen und ein Passwort erfordert, fügen Sie die Zugangsdaten in die URL ein:

```
http://username:password@proxy.company.com:8080
```

Sonderzeichen im Passwort müssen URL-kodiert werden (z. B. wird `@` zu `%40`, `#` zu `%23`).

### SOCKS5-Proxys

Für SOCKS5-Proxys (häufig bei SSH-Tunneln) verwenden Sie:

```
socks5://proxy.company.com:1080
```

Setzen Sie dies sowohl als `HTTP_PROXY` als auch als `HTTPS_PROXY`.

### Proxy-Konfiguration überprüfen

Testen Sie, ob rclone einen Cloud-Anbieter über den Proxy erreichen kann:

```bash
rclone lsd remote: --dump headers -v
```

Wenn die Verbindung erfolgreich ist, sehen Sie die Verzeichnisliste. Das Flag `--dump headers` zeigt die HTTP-Header an, mit denen bestätigt werden kann, dass der Proxy verwendet wird.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## SSL-Zertifikatsfehler beheben

SSL/TLS-Zertifikatsfehler sind das häufigste Problem hinter Unternehmensproxys. Viele Organisationen setzen SSL-Inspektion (auch HTTPS-Interception oder Man-in-the-Middle-Inspektion genannt) ein, bei der der Proxy den HTTPS-Verkehr mit der eigenen Zertifizierungsstelle (CA) der Organisation entschlüsselt und erneut verschlüsselt. Rclone vertraut dieser CA standardmäßig nicht, was zu Fehlern wie diesen führt:

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### Lösung: Unternehmens-CA-Zertifikat hinzufügen

1. **Besorgen Sie sich das Unternehmens-Root-CA-Zertifikat** von Ihrer IT-Abteilung. Es handelt sich in der Regel um eine `.pem`- oder `.crt`-Datei.
2. **Weisen Sie rclone an, ihm zu vertrauen**, indem Sie das Flag `--ca-cert` verwenden:
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. **Machen Sie es dauerhaft**, indem Sie es in Ihrer rclone-Konfigurationsumgebung festlegen. Fügen Sie es zu Ihrem Shell-Profil hinzu:
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. Fügen Sie in RcloneView `--ca-cert /path/to/corporate-ca.pem` als benutzerdefiniertes Flag in Ihrer Remote- oder Job-Konfiguration hinzu.

### Lösung: CA zum System-Trust-Store hinzufügen

Alternativ können Sie die Unternehmens-CA zum Trust-Store Ihres Betriebssystems hinzufügen, sodass alle Anwendungen (einschließlich rclone) ihr automatisch vertrauen:

**Windows:**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux (Debian/Ubuntu):**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Letzter Ausweg: SSL-Prüfung deaktivieren

Wenn Sie das Unternehmens-CA-Zertifikat nicht beschaffen können, können Sie die SSL-Prüfung vollständig deaktivieren. Dies wird für den produktiven Einsatz **nicht empfohlen**, da dadurch der Schutz vor tatsächlichen Man-in-the-Middle-Angriffen entfällt:

```bash
rclone lsd remote: --no-check-certificate
```

Verwenden Sie dies nur zu Testzwecken, um zu bestätigen, dass das Zertifikat die Ursache ist, und suchen Sie anschließend nach einer geeigneten CA-Zertifikatslösung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## DNS-Probleme hinter VPNs beheben

VPN-Verbindungen überschreiben häufig die DNS-Einstellungen Ihres Systems, was dazu führen kann, dass Domains von Cloud-Anbietern nicht aufgelöst werden oder zu falschen Adressen aufgelöst werden.

### Symptome

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- Verbindungen, die vor der VPN-Verbindung funktioniert haben, schlagen jetzt fehl.

### Lösungen

**DNS-Auflösung prüfen:**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

Wenn diese Abfragen bei aktivem VPN fehlschlagen oder unerwartete IPs zurückgeben, liegt das Problem bei DNS.

**Einen bestimmten DNS-Server verwenden:**

Einige VPN-Clients erlauben die Konfiguration von DNS-Einstellungen. Stellen Sie sicher, dass Ihr VPN DNS-Server verwendet, die öffentliche Domains von Cloud-Anbietern auflösen können. Wenn Ihr VPN Sie zwingt, interne DNS-Server zu verwenden, die externe Domains nicht auflösen können, bitten Sie Ihr IT-Team, DNS-Weiterleitungsregeln für Domains von Cloud-Anbietern hinzuzufügen.

**Manuelle DNS-Überschreibung (vorübergehend):**

Fügen Sie Endpunkte von Cloud-Anbietern als vorübergehende Notlösung zu Ihrer Hosts-Datei hinzu:

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux: `/etc/hosts`

Dies ist fragil, da Cloud-Anbieter IP-Adressen rotieren lassen, kann Sie aber entblocken, während eine ordentliche DNS-Lösung eingerichtet wird.

**DNS-Cache leeren** nach vorgenommenen Änderungen:

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## Split-Tunneling konfigurieren

Split-Tunneling leitet nur den Unternehmensverkehr über das VPN, während der Cloud-Speicher-Verkehr direkt ins Internet geht. Dadurch werden sowohl der Proxy als auch das VPN für Verbindungen zu Cloud-Anbietern umgangen, was oft alle Probleme auf einmal löst.

### Einrichtung

Split-Tunneling wird in der Regel im VPN-Client oder von Ihrer IT-Abteilung konfiguriert. Sie müssen beantragen, dass die folgenden Domains oder IP-Bereiche vom VPN-Tunnel ausgeschlossen werden:

**Google Drive / Google Cloud:**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure:**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3:**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox:**
- `*.dropbox.com`
- `*.dropboxapi.com`

**Andere Anbieter:** Prüfen Sie die Dokumentation des jeweiligen Anbieters auf API-Endpunkt-Domains.

Wenn Ihre IT-Abteilung kein Split-Tunneling konfigurieren kann, sind die oben beschriebenen Proxy- und Zertifikatslösungen Ihre beste Alternative.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Unternehmens-Firewalls umgehen

Unternehmens-Firewalls können bestimmte Ports, Protokolle oder Domains blockieren, die rclone benötigt. Häufige firewallbezogene Probleme:

### Blockierte Ports

Rclone verwendet für die meisten Cloud-Anbieter HTTPS (Port 443). Wenn Port 443 für Nicht-Browser-Verkehr blockiert ist, laufen rclone-Verbindungen in einen Timeout. Prüfen Sie mit Ihrer IT-Abteilung, ob ausgehendes HTTPS für den rclone-Prozess zugelassen ist.

### Blockierte Domains

Manche Firewalls blockieren den Zugriff auf bestimmte Domains von Cloud-Speicheranbietern. Wenn Ihre Organisation einen bestimmten Cloud-Anbieter nicht offiziell unterstützt, könnten dessen API-Endpunkte auf einer Sperrliste stehen. Sie sehen dann Timeout-Fehler oder Meldungen über verweigerte Verbindungen. Die einzige Lösung besteht darin, Ihr IT-Team zu bitten, die erforderlichen Domains zur Positivliste hinzuzufügen.

### Deep Packet Inspection

Einige Next-Generation-Firewalls untersuchen HTTPS-Verkehr über die Zertifikatsebene hinaus. Sie können Verbindungen blockieren, die nicht wie normaler Browser-Verkehr aussehen. Der User-Agent-Header von rclone identifiziert es als rclone, was manche DPI-Regeln als verdächtig einstufen können. Sie können einen benutzerdefinierten User-Agent festlegen:

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

Dies ist eine Notlösung und sollte nur verwendet werden, wenn sie sich als notwendig erwiesen hat und von Ihrem IT-Team genehmigt wurde.

### OAuth-Token-Aktualisierung über Proxys

Cloud-Anbieter, die OAuth verwenden (Google Drive, OneDrive, Dropbox), aktualisieren regelmäßig ihre Zugriffstoken. Wenn der Endpunkt zur Token-Aktualisierung blockiert ist oder der Proxy den OAuth-Ablauf stört, sehen Sie Authentifizierungsfehler, obwohl Ihre Zugangsdaten korrekt sind. Stellen Sie sicher, dass die folgenden OAuth-Endpunkte erreichbar sind:

- `oauth2.googleapis.com` (Google)
- `login.microsoftonline.com` (Microsoft)
- `api.dropbox.com/oauth2/token` (Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Verbindungs-Timeouts beheben

Wenn Verbindungen hinter einem Proxy oder VPN in einen Timeout laufen, verwenden Sie diese Schritte, um die Ursache einzugrenzen:

1. **Grundlegende Konnektivität testen:**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   Wenn curl funktioniert, rclone jedoch nicht, liegt das Problem wahrscheinlich daran, dass die Proxy-Umgebungsvariablen von rclone nicht übernommen werden.

2. **Mit ausführlicher Protokollierung testen:**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   Dies zeigt genau, was rclone sendet und empfängt.

3. **Auf Proxy-Interferenz prüfen:**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   Wenn dies funktioniert, der normale Befehl jedoch nicht, ist SSL-Inspektion die Ursache.

4. **Ohne VPN testen** (falls möglich), um zu bestätigen, dass das VPN beteiligt ist.

5. **Timeouts erhöhen** bei langsamen Proxy-Verbindungen:
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. **RcloneView-Protokolle prüfen** im Job-Verlauf für detaillierte Fehlermeldungen.

## Dauerhafte Konfiguration in RcloneView

Sobald Sie die richtige Kombination aus Proxy-Einstellungen, Zertifikatspfaden und Flags gefunden haben, speichern Sie diese, damit Sie sie nicht erneut herausfinden müssen:

- **Umgebungsvariablen** – Setzen Sie `HTTP_PROXY`, `HTTPS_PROXY` und `RCLONE_CA_CERT` in Ihrem Systemprofil, damit sie für alle rclone-Vorgänge gelten.
- **Benutzerdefinierte Flags in Jobs** – Fügen Sie in der Job-Konfiguration von RcloneView Flags wie `--ca-cert`, `--timeout` oder `--contimeout` als benutzerdefinierte Parameter hinzu.
- **Remote-spezifische Einstellungen** – manche Einstellungen können direkt zur Remote-Konfiguration in `rclone.conf` hinzugefügt werden.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Setzen Sie Proxy-Umgebungsvariablen**, falls Ihr Netzwerk einen Proxy erfordert.
3. **Installieren Sie Ihr Unternehmens-CA-Zertifikat**, falls SSL-Inspektion im Einsatz ist.
4. **Testen Sie die Konnektivität** mit einem einfachen Befehl `rclone lsd remote:`, bevor Sie Synchronisationsjobs einrichten.
5. **Speichern Sie funktionierende Konfigurationen** als RcloneView-Jobs für konsistente, wiederholbare Synchronisationen.

Netzwerkbeschränkungen müssen Sie nicht daran hindern, Cloud-Speicher effektiv zu verwalten. Mit den richtigen Proxy-Einstellungen und der passenden Zertifikatskonfiguration funktioniert RcloneView auch in den am strengsten abgeschotteten Unternehmensumgebungen zuverlässig.

---

**Weitere Anleitungen:**

- [Remote-Speicher hinzufügen](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [OAuth-Online-Login hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Jobs ausführen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
