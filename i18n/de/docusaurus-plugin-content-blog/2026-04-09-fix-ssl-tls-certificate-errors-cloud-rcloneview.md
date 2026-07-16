---
slug: fix-ssl-tls-certificate-errors-cloud-rcloneview
title: "SSL/TLS-Zertifikatsfehler bei Cloud-Verbindungen in RcloneView beheben"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie SSL/TLS-Zertifikatsfehler beim Verbinden mit Cloud-Speicher in RcloneView. Lösen Sie Probleme mit abgelaufenen Zertifikaten, selbstsignierten Zertifikaten und Abfangen durch Unternehmens-Proxys."
keywords:
  - rcloneview
  - ssl certificate error
  - tls certificate error
  - cloud connection ssl fix
  - self-signed certificate rclone
  - certificate verify failed
  - x509 certificate error
  - corporate proxy ssl
  - rclone tls error
  - cloud storage connection fix
tags:
  - troubleshooting
  - security
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SSL/TLS-Zertifikatsfehler bei Cloud-Verbindungen in RcloneView beheben

> SSL/TLS-Zertifikatsfehler verhindern, dass RcloneView sichere Verbindungen zu Cloud-Anbietern aufbaut. Diese Fehler reichen von abgelaufenen Zertifikaten bis hin zum Abfangen durch Unternehmens-Proxys — hier erfahren Sie, wie Sie sie diagnostizieren und beheben.

Jede Verbindung, die RcloneView zu einem Cloud-Anbieter herstellt, verwendet HTTPS mit TLS-Verschlüsselung. Der TLS-Handshake überprüft die Identität des Servers anhand seines SSL-Zertifikats. Schlägt diese Überprüfung fehl, kann RcloneView keine Verbindung herstellen — kein Durchsuchen, keine Übertragungen, keine Synchronisation. Zertifikatsfehler treten besonders häufig in Unternehmensumgebungen mit SSL-inspizierenden Proxys, bei der Verbindung zu selbstgehostetem Speicher (MinIO, Nextcloud, Seafile) oder bei falscher Systemzeit auf.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Häufige Fehlermeldungen

- **„x509: certificate signed by unknown authority"**: Das Zertifikat des Servers wurde von einer Zertifizierungsstelle (CA) ausgestellt, der Ihr System nicht vertraut. Häufig bei selbstgehostetem Speicher und Unternehmens-Proxys.
- **„x509: certificate has expired or is not yet valid"**: Der Gültigkeitszeitraum des Zertifikats stimmt nicht mit der aktuellen Systemzeit überein. Entweder ist das Zertifikat tatsächlich abgelaufen, oder Ihre Systemuhr geht falsch.
- **„x509: certificate is valid for X, not Y"**: Der Common Name oder die Subject Alternative Names des Zertifikats stimmen nicht mit dem Hostnamen überein, mit dem Sie sich verbinden. Dies passiert, wenn die Endpunkt-URL nicht zum Zertifikat passt.
- **„tls: failed to verify certificate"**: Ein allgemeiner Fehler bei der TLS-Verifizierung. Prüfen Sie die vollständige Fehlermeldung für weitere Details.
- **„remote TLS connection closed unexpectedly"**: Der TLS-Handshake wurde unterbrochen, oft durch eine Firewall oder einen Proxy.

## Lösung 1: Systemuhr prüfen

Die einfachste und am häufigsten übersehene Ursache: Ihre Systemuhr geht falsch. TLS-Zertifikate haben ein Gültigkeitsfenster (Not Before / Not After). Liegt Ihre Uhrzeit außerhalb dieses Fensters, erscheint jedes Zertifikat als ungültig.

Prüfen Sie unter Windows in den Einstellungen unter Zeit & Sprache > Datum & Uhrzeit, ob „Zeit automatisch festlegen" aktiviert ist. Führen Sie unter Linux `timedatectl` aus und überprüfen Sie, ob die Zeit korrekt ist. Prüfen Sie unter macOS die Systemeinstellungen > Datum & Uhrzeit.

Eine Systemuhr, die auch nur um wenige Stunden abweicht, kann Zertifikatsfehler auslösen, insbesondere bei Zertifikaten, die kürzlich ausgestellt wurden oder deren Ablauf kurz bevorsteht.

## Lösung 2: Unternehmens-Proxy / SSL-Inspektion

Viele Unternehmensnetzwerke verwenden einen SSL-inspizierenden Proxy, der HTTPS-Verbindungen abfängt, zur Prüfung entschlüsselt und mit dem eigenen Zertifikat der Organisation neu verschlüsselt. Dies entspricht faktisch einem Man-in-the-Middle-Vorgang, dem von unternehmensverwalteten Rechnern vertraut wird (weil die Unternehmens-CA im System-Trust-Store installiert ist), dem rclones eingebettetes Zertifikatspaket jedoch möglicherweise nicht vertraut.

Um dies zu beheben, müssen Sie rclone anweisen, den Zertifikatsspeicher Ihres Systems zu verwenden, oder das CA-Zertifikat des Unternehmens explizit angeben:

- **Option A**: Setzen Sie das Flag `--ca-cert` in den benutzerdefinierten Flags von RcloneView, um auf die CA-Zertifikatsdatei des Unternehmens zu verweisen. Zum Beispiel: `--ca-cert /path/to/corporate-ca.pem`.
- **Option B**: Stellen Sie unter Linux sicher, dass das CA-Zertifikat des Unternehmens im System-Trust-Store installiert ist (`/etc/ssl/certs/` unter Debian/Ubuntu, `/etc/pki/tls/certs/` unter RHEL/CentOS). Führen Sie nach dem Hinzufügen des Zertifikats `update-ca-certificates` aus.
- **Option C**: Ist die Unternehmens-CA unter Windows im Windows-Zertifikatspeicher installiert, nutzt rclone diese möglicherweise nicht standardmäßig (es verwendet seine eigene Go-TLS-Implementierung). Exportieren Sie die Unternehmens-CA aus dem Windows-Zertifikatspeicher als PEM-Datei und verwenden Sie `--ca-cert`.

Wenden Sie sich an Ihre IT-Abteilung, um das CA-Zertifikat des Unternehmens zu erhalten, falls Sie es nicht haben.

## Lösung 3: Selbstsignierte Zertifikate (selbstgehosteter Speicher)

Bei der Verbindung zu selbstgehostetem Speicher wie MinIO, Nextcloud über WebDAV oder einem privaten SFTP-Server mit einem selbstsignierten TLS-Zertifikat lehnt rclone die Verbindung ab, da das Zertifikat nicht von einer vertrauenswürdigen CA ausgestellt wurde.

Sie haben zwei Möglichkeiten:

- **Empfohlen**: Fügen Sie Ihr selbstsigniertes Zertifikat dem System-Trust-Store hinzu oder verwenden Sie `--ca-cert`, um auf die Zertifikatsdatei zu verweisen. Dadurch bleibt die TLS-Verifizierung erhalten, während Ihrem spezifischen Zertifikat vertraut wird.
- **Nicht empfohlen, aber manchmal notwendig**: Verwenden Sie `--no-check-certificate` in den benutzerdefinierten Flags. Dies deaktiviert die Zertifikatsverifizierung vollständig und macht die Verbindung anfällig für Man-in-the-Middle-Angriffe. Verwenden Sie dies nur zum Testen in vertrauenswürdigen Netzwerken, niemals in der Produktion.

Erwägen Sie für MinIO insbesondere, ein ordnungsgemäßes Zertifikat über Let's Encrypt (kostenlos) zu erzeugen, anstatt ein selbstsigniertes Zertifikat zu verwenden.

## Lösung 4: Abgelaufenes Server-Zertifikat

Ist das Zertifikat des Cloud-Anbieters tatsächlich abgelaufen, können Sie clientseitig nichts unternehmen — der Anbieter muss es erneuern. Dies ist bei großen Anbietern (AWS, Google, Microsoft, Dropbox) selten, kann aber bei kleineren Anbietern oder selbstgehosteten Lösungen vorkommen.

Überprüfen Sie dies, indem Sie das Zertifikat in einem Webbrowser prüfen: Navigieren Sie zur URL des Anbieters und klicken Sie auf das Schlosssymbol, um die Zertifikatsdetails anzuzeigen. Ist das Zertifikat abgelaufen, wenden Sie sich an den Anbieter. Erneuern Sie bei selbstgehostetem Speicher das Zertifikat über Ihre CA oder Let's Encrypt.

## Lösung 5: Hostname-Konflikt

Konflikte beim Zertifikats-Hostnamen treten auf, wenn die URL, mit der Sie sich verbinden, nicht mit dem Common Name oder den Subject Alternative Names des Zertifikats übereinstimmt. Dies kommt häufig vor, wenn:

- Sie sich mit einem S3-kompatiblen Endpunkt über eine IP-Adresse statt über den Hostnamen verbinden.
- Die Endpunkt-URL einen Tippfehler enthält oder eine andere Subdomain verwendet, als vom Zertifikat abgedeckt wird.
- Sie über einen Load Balancer oder Reverse-Proxy auf einen Dienst zugreifen, der ein anderes Zertifikat vorweist.

Beheben Sie dies, indem Sie genau den Hostnamen verwenden, für den das Zertifikat ausgestellt wurde. Prüfen Sie die Remote-Konfiguration im Remote-Manager von RcloneView und stellen Sie sicher, dass die Endpunkt-URL mit den Hostnamen des Zertifikats übereinstimmt.

## Lösung 6: rclone und RcloneView aktualisieren

Ältere Versionen von rclone verwenden möglicherweise ein veraltetes Zertifikatspaket, das neuere Zertifizierungsstellen nicht enthält. Aktualisieren Sie auf die neueste Version von RcloneView, die eine aktualisierte rclone-Binärdatei mit aktuellen CA-Zertifikaten enthält.

## Zertifikatsprobleme diagnostizieren

Sammeln Sie bei einem Zertifikatsfehler Details über das integrierte Terminal von RcloneView:

1. Führen Sie `rclone lsd remote:` mit `--verbose` aus, um die vollständige Fehlermeldung inklusive Zertifikatsdetails zu sehen.
2. Verwenden Sie `openssl s_client -connect endpoint:443` (falls verfügbar), um die Zertifikatskette des Servers zu untersuchen.
3. Prüfen Sie Aussteller, Ablaufdatum und Subject Alternative Names des Zertifikats, um das konkrete Problem zu identifizieren.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Falls Zertifikatsfehler auftreten, prüfen Sie zuerst Ihre Systemuhr.
3. Beschaffen und konfigurieren Sie in Unternehmensumgebungen das CA-Zertifikat des Unternehmens.
4. Fügen Sie bei selbstgehostetem Speicher das selbstsignierte Zertifikat Ihrem Trust-Store hinzu.

SSL/TLS-Zertifikatsfehler lassen sich immer beheben — die Lösung hängt davon ab, ob das Problem an Ihrer Systemuhr, einem Unternehmens-Proxy, einem selbstsignierten Zertifikat oder einem abgelaufenen Server-Zertifikat liegt. Die Ursache anhand der Fehlermeldung zu identifizieren, ist der Schlüssel zu einer schnellen Lösung.

---

**Verwandte Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [WebDAV hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

<CloudSupportGrid />
