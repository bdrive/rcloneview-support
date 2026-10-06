---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "DigitalOcean-Spaces-Verbindungsfehler beheben — Endpoint- und Schlüsselprobleme mit RcloneView analysieren"
authors:
  - jay
description: "Beheben Sie DigitalOcean-Spaces-Verbindungsfehler wie „Access Denied“ und Signaturabweichungen, indem Sie Endpoint, Region und Schlüssel in RcloneView prüfen."
keywords:
  - DigitalOcean-Spaces-Verbindungsfehler beheben
  - DigitalOcean Spaces Zugriff verweigert
  - Spaces SignatureDoesNotMatch
  - DigitalOcean Spaces Endpoint Region
  - S3-kompatible Fehlersuche
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - Spaces Access Key
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DigitalOcean-Spaces-Verbindungsfehler beheben — Endpoint- und Schlüsselprobleme mit RcloneView analysieren

> Die meisten Verbindungsfehler bei DigitalOcean Spaces lassen sich auf drei Einstellungen zurückführen: Endpoint, Region und Zugriffsschlüssel.

Sie haben ein Spaces-Remote hinzugefügt, aber die Bucket-Liste ist leer, oder jede Anfrage liefert „Access Denied“ oder einen Signaturfehler. Da Spaces ein S3-kompatibler Dienst ist, liegt die Ursache meist in einer kleinen Abweichung bei der Konfiguration des Remotes. Mit RcloneView können Sie das Remote prüfen und korrigieren und anschließend im selben Fenster erneut testen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zuerst Endpoint und Region prüfen

Spaces-Endpoints sind regionsspezifisch und haben die Form `<region>.digitaloceanspaces.com`, zum Beispiel `nyc3.digitaloceanspaces.com`. Weicht die Region des Endpoints von der Region ab, in der der Space erstellt wurde, schlagen Anfragen fehl, selbst wenn Ihre Schlüssel korrekt sind. Öffnen Sie den Remote Manager über den Tab Remote, bearbeiten Sie das Remote und vergleichen Sie den Endpoint mit der Region, die in Ihrer DigitalOcean-Systemsteuerung angezeigt wird.

Verwenden Sie den reinen regionalen Endpoint, nicht die Space-spezifische URL, die den Bucket-Namen enthält. Der Bucket-Name im Endpoint ist ein häufiger Grund für seltsame „bucket not found“-Ergebnisse.

<img src="/support/images/en/blog/new-remote.png" alt="Bearbeiten des Endpoints eines S3-kompatiblen Remotes in RcloneView" class="img-large img-center" />

## Access Key und Secret überprüfen

Spaces verwendet ein eigenes Access-Key-Paar, getrennt von Ihrem DigitalOcean-API-Token. Das Einfügen eines API-Tokens in das Schlüsselfeld ist ein häufiger Fehler. Wenn Sie unsicher sind, erzeugen Sie ein neues Spaces-Schlüsselpaar und fügen Sie beide Werte erneut ein. Achten Sie dabei auf führende oder nachgestellte Leerzeichen, die beim Kopieren hineingeraten.

Funktioniert das Auflisten, aber Uploads schlagen fehl, fehlt dem Schlüssel möglicherweise die Schreibberechtigung für diesen Space. Erstellen Sie einen Schlüssel mit den passenden Rechten und aktualisieren Sie das Remote.

## Im integrierten Terminal testen

RcloneView enthält im unteren Info View einen Tab Terminal. Führen Sie `rclone listremotes` aus, um zu bestätigen, dass das Remote existiert, und anschließend `rclone about "myspaces:"` oder eine einfache Auflistung, um den rohen Fehlertext zu sehen. Die genaue Meldung zeigt, ob das Problem bei der Authentifizierung, beim Endpoint oder im Netzwerk liegt.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView-Jobverlauf mit fehlerhaften Übertragungen" class="img-large img-center" />

Prüfen Sie im Tab Log und im Job History auf wiederholte Fehler. Treten Fehler nur bei großen Übertragungen auf, verringern Sie in den Advanced Settings des Jobs die Anzahl der parallelen Dateiübertragungen, um die Last zu senken.

## Netzwerk- und Zeitprobleme ausschließen

Ein Signaturfehler kann auch von einer stark abweichenden Systemuhr stammen, da signierte Anfragen von der aktuellen Zeit abhängen. Korrigieren Sie die Uhr und versuchen Sie es erneut. Auch Firmen-Proxys und Firewalls, die TLS prüfen, können Verbindungen stören. Testen Sie daher aus einem anderen Netzwerk, wenn Schlüssel und Endpoint korrekt aussehen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Ausführen einer Übertragung zu DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie den Remote Manager, bearbeiten Sie Ihr Spaces-Remote und bestätigen Sie den regionalen Endpoint.
3. Geben Sie Access Key und Secret von Spaces erneut ein.
4. Testen Sie mit dem Kopieren eines kleinen Ordners und führen Sie dann Ihren vollständigen Job erneut aus.

Ein korrekt konfigurierter Endpoint und ein gültiges Schlüsselpaar machen aus einem vagen Fehler einen zuverlässigen, wiederholbaren Workflow.

---

**Weiterführende Anleitungen:**

- [DigitalOcean Spaces verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [S3-Berechtigungsfehler „Access Denied“ mit RcloneView beheben](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [SSL/TLS-Zertifikatsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
