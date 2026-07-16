---
slug: link-public-shared-links-cloud-rcloneview
title: "Öffentliche Freigabelinks für Cloud-Dateien mit RcloneView erstellen"
authors:
  - tayson
description: "Erstellen Sie öffentliche Download-Links für Cloud-Dateien mit dem link-Befehl von RcloneView. Teilen Sie Dateien aus Google Drive, OneDrive, Dropbox, S3 und mehr, ohne Kontozugriff zu gewähren."
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Öffentliche Freigabelinks für Cloud-Dateien mit RcloneView erstellen

> Eine Cloud-Datei zu teilen bedeutet normalerweise, die Weboberfläche des Anbieters aufzurufen, Berechtigungen anzupassen und einen Link zu kopieren. Die Link-Funktion von RcloneView erstellt freigebbare URLs direkt aus dem Datei-Explorer heraus — für jeden Anbieter, der dies unterstützt.

Wenn Sie eine in der Cloud gespeicherte Datei mit jemandem teilen müssen, der keinen Zugriff auf Ihr Konto hat, ist ein öffentlicher oder vorsignierter Link die Standardlösung. Google Drive erstellt freigebbare Links, S3 generiert vorsignierte URLs, und Dropbox bietet Freigabelinks — jeweils über unterschiedliche Oberflächen mit unterschiedlichen Arbeitsabläufen. RcloneView fasst dies in einer einzigen Aktion zusammen: Rechtsklick auf eine Datei, Link erstellen und teilen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie öffentliche Links bei verschiedenen Anbietern funktionieren

Verschiedene Cloud-Anbieter implementieren die Dateifreigabe unterschiedlich:

| Anbieter | Link-Typ | Standardablauf | Hinweise |
|---|---|---|---|
| Google Drive | Freigebbarer Link | Kein Ablauf | Ändert Dateiberechtigungen auf „Jeder mit dem Link" |
| OneDrive | Freigabelink | Konfigurierbar | Anonym oder organisationsbeschränkt |
| Dropbox | Freigabelink | Kein Ablauf | Schreibgeschützter Download-Link |
| AWS S3 | Vorsignierte URL | Konfigurierbar (max. 7 Tage) | Temporär, kryptografisch signiert |
| Backblaze B2 | Download-URL | Kein Ablauf | Erfordert öffentlichen Bucket oder verwendet Auth-Token |
| Cloudflare R2 | Vorsignierte URL | Konfigurierbar | S3-kompatible vorsignierte URLs |

RcloneView verwendet intern den `link`-Befehl von rclone, der automatisch den passenden Link-Typ für jeden Anbieter erstellt. Sie müssen den anbieterspezifischen Freigabemechanismus nicht kennen — RcloneView übernimmt das für Sie.

## Einen Link in RcloneView erstellen

So erstellen Sie einen öffentlichen Link für eine Datei:

1. Navigieren Sie im Explorer von RcloneView zur Datei.
2. Rechtsklicken Sie auf die Datei und wählen Sie die Link-/Freigabeoption.
3. RcloneView erstellt den Link und kopiert ihn in Ihre Zwischenablage (oder zeigt ihn zum manuellen Kopieren an).

Für Anbieter, die einen Ablauf unterstützen (wie vorsignierte S3-URLs), können Sie die Linkdauer mit dem Flag `--expire` in den benutzerdefinierten Optionen festlegen. Zum Beispiel erstellt `--expire 24h` einen Link, der nach 24 Stunden abläuft.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## Den link-Befehl über das Terminal verwenden

Für mehr Kontrolle verwenden Sie das integrierte Terminal von RcloneView, um den link-Befehl direkt auszuführen:

```
rclone link remote:path/to/file.pdf
```

Dies gibt die öffentliche URL aus. Für S3-kompatible Anbieter fügen Sie einen Ablauf hinzu:

```
rclone link remote:bucket/file.pdf --expire 48h
```

Der Terminal-Ansatz ist nützlich, wenn Sie Links für mehrere Dateien erstellen oder die Linkerstellung als Teil eines Workflows skripten.

## Anbieterspezifisches Verhalten

### Google Drive

Wenn Sie einen Link für eine Google Drive-Datei erstellen, ändert rclone die Freigabeeinstellungen der Datei auf „Jeder mit dem Link kann ansehen". Der Link läuft nicht ab, es sei denn, Sie widerrufen die Freigabe manuell. Beachten Sie, dass dies die Berechtigungen der Datei ändert — jeder mit der URL kann auf die Datei zugreifen.

Bei Google Workspace-Konten können Administratoren die Linkfreigabe auf Organisationsmitglieder beschränken. In diesem Fall funktioniert der erstellte Link nur für Personen innerhalb Ihrer Organisation.

### OneDrive und SharePoint

OneDrive erstellt Freigabelinks über die Microsoft Graph API. Der Link-Typ hängt von den Freigaberichtlinien Ihrer Organisation ab — er kann anonym (für jeden zugänglich) oder auf Organisationsmitglieder beschränkt sein. Persönliche OneDrive-Konten können anonyme Links erstellen.

### AWS S3 und S3-kompatibel

Vorsignierte S3-URLs sind die sicherste Option. Die URL enthält eine kryptografische Signatur, die temporären Zugriff auf ein bestimmtes Objekt gewährt. Der Link läuft nach der angegebenen Dauer ab (Standard variiert, maximal 7 Tage für IAM-Benutzeranmeldeinformationen). An den Berechtigungen des Objekts werden keine Änderungen vorgenommen — die vorsignierte URL selbst trägt die Autorisierung.

Das macht vorsignierte S3-URLs ideal für die temporäre Freigabe von Dateien: Der Link funktioniert für die angegebene Dauer und wird danach ungültig, ohne dass eine Bereinigung erforderlich ist.

### Dropbox

Dropbox erstellt einen Freigabelink, der schreibgeschützten Zugriff auf die Datei bietet. Der Link läuft bei Dropbox Plus- und Professional-Plänen standardmäßig nicht ab. Bei Dropbox Business können Administratoren Ablaufrichtlinien durchsetzen.

## Anwendungsfälle

### Schnelle Dateifreigabe

Erstellen Sie einen Link für einen Bericht, eine Designdatei oder einen Datensatz, der in der Cloud gespeichert ist, und senden Sie ihn per E-Mail, Slack oder Chat. Der Empfänger lädt die Datei herunter, ohne ein Cloud-Konto oder Zugriff auf Ihren Speicher zu benötigen.

### Temporärer Zugriff für Kunden

Für Freelancer und Agenturen sind vorsignierte S3-URLs ideal für Kundenlieferungen. Laden Sie das Liefergut zu S3 hoch, erstellen Sie eine vorsignierte URL mit 7 Tagen Gültigkeit und senden Sie sie an den Kunden. Nach 7 Tagen läuft der Link automatisch ab — keine manuelle Bereinigung nötig.

### Öffentliche Inhaltsverteilung

Für Dateien, die für eine breite Verteilung bestimmt sind (Dokumentation, Releases, Medienkits), erstellen Sie einen dauerhaften Link von Google Drive oder Dropbox und betten ihn auf Ihrer Website oder in Ihrer Dokumentation ein. RcloneView erstellt den Link, ohne zur Weboberfläche des Anbieters wechseln zu müssen.

## Sicherheitsüberlegungen

- **Dauerhafte Links legen Dateien unbegrenzt offen**: Google Drive- und Dropbox-Links laufen standardmäßig nicht ab. Wenn Sie eine sensible Datei teilen, denken Sie daran, den Link zu widerrufen, wenn der Zugriff nicht mehr benötigt wird.
- **Vorsignierte URLs sind zeitlich begrenzt, aber teilbar**: Jeder mit der URL kann während des Gültigkeitszeitraums auf die Datei zugreifen. Teilen Sie vorsignierte URLs nicht in öffentlichen Kanälen, wenn die Datei vertraulich ist.
- **Die Linkerstellung ändert bei manchen Anbietern die Berechtigungen**: Google Drive-Links ändern die Freigabeeinstellungen der Datei. Dies ist für andere Benutzer sichtbar, die Zugriff auf die Datei haben.
- **Freigegebene Links regelmäßig überprüfen**: Überprüfen und widerrufen Sie alte Freigabelinks, insbesondere für sensible Dateien. Der Explorer von RcloneView macht es einfach, zu Dateien zu navigieren und ihren Freigabestatus zu prüfen.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie Ihre Cloud-Remotes im Remote-Manager hinzu.
3. Navigieren Sie im Explorer zu einer Datei und erstellen Sie einen öffentlichen Link.
4. Verwenden Sie für zeitlich begrenzte Links vorsignierte S3-URLs mit dem Flag `--expire`.

Das Erstellen freigebbarer Links aus RcloneView erspart Ihnen den Wechsel zur Weboberfläche jedes Anbieters. Ob Sie einen schnellen Freigabelink, eine temporäre URL für eine Kundenlieferung oder einen dauerhaften Download-Link benötigen — RcloneView erledigt dies direkt aus dem Datei-Explorer.

---

**Verwandte Anleitungen:**

- [Remote-Speicher durchsuchen und verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Remote über browserbasierte Anmeldung (OAuth) hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
