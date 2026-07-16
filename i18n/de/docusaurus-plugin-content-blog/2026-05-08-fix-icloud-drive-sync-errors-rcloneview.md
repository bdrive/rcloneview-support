---
slug: fix-icloud-drive-sync-errors-rcloneview
title: "iCloud Drive Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView"
authors:
  - tayson
description: "Diagnostizieren und beheben Sie iCloud Drive Synchronisationsfehler in RcloneView — einschließlich Authentifizierungsproblemen, rclone-Versionsanforderungen und häufigen Verbindungsproblemen unter macOS."
keywords:
  - iCloud Drive sync errors RcloneView
  - fix iCloud Drive rclone errors
  - iCloud Drive authentication problem
  - RcloneView iCloud troubleshoot
  - iCloud Drive connection failed
  - rclone iCloud Drive setup
  - fix iCloud backup RcloneView
  - iCloud Drive macOS sync issues
tags:
  - RcloneView
  - macos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive Synchronisationsfehler beheben — So lösen Sie sie mit RcloneView

> Die iCloud Drive-Unterstützung in rclone erfordert eine spezielle Einrichtung. So diagnostizieren Sie Authentifizierungsfehler, Versionskonflikte und Verbindungsfehler bei der Nutzung von iCloud mit RcloneView.

iCloud Drive ist einer der komplexeren Cloud-Anbieter, die mit rclone konfiguriert werden müssen, da Apples Authentifizierung auf Apple-ID-Anmeldedaten basiert und Herausforderungen durch die Zwei-Faktor-Authentifizierung beinhalten kann. RcloneView übernimmt dies über das eingebettete rclone-Backend, aber damit iCloud korrekt funktioniert, müssen einige Voraussetzungen erfüllt sein. Dieser Leitfaden führt Sie durch die häufigsten Fehlerquellen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Voraussetzung: rclone v1.69 oder höher erforderlich

Die iCloud Drive-Unterstützung wurde in rclone v1.69 eingeführt. Wenn ein Fehler wie `unknown provider type: iclouddrive` oder `remote type not found` angezeigt wird, ist Ihre eingebettete rclone-Version zu alt. Überprüfen Sie in RcloneView die aktuelle rclone-Version in der **Fußleiste** am unteren Rand des Fensters. Falls eine Version älter als v1.69.1 angezeigt wird, verwenden Sie **Help-Tab → Check for Updates**, um auf das neueste eingebettete rclone zu aktualisieren.

RcloneView wird mit einer aktuellen eingebetteten rclone-Binärdatei ausgeliefert. Wenn Sie jedoch eine ältere Installation verwenden, löst ein Selbst-Update diese Fehlerklasse vollständig.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Authentifizierungsfehler und Apple-ID-2FA

Beim Hinzufügen von iCloud Drive über **Remote-Tab → New Remote** fragt RcloneView nach Ihrer Apple-ID (E-Mail) und Ihrem Passwort. Wenn Sie die Zwei-Faktor-Authentifizierung verwenden — die Apple mittlerweile für die meisten Konten voraussetzt — werden Sie zusätzlich nach dem 2FA-Code gefragt, der auf Ihrem vertrauenswürdigen Apple-Gerät angezeigt wird. Geben Sie diesen ein, wenn Sie im Assistenten zur Remote-Konfiguration dazu aufgefordert werden.

Häufige Fehler in dieser Phase sind `INVALID_EMAIL` (überprüfen Sie, ob Ihre Apple-ID-E-Mail-Adresse korrekt ist), `AUTHENTICATION_FAILED` (app-spezifische Passwörter können erforderlich sein, wenn Ihr Apple-Konto über erweiterte Sicherheitsfunktionen verfügt) sowie Zeitüberschreitungsfehler, falls die 2FA-Aufforderung nicht schnell genug beantwortet wird. Falls Apple app-spezifische Passwörter für Ihr Konto vorschreibt, erstellen Sie eines unter appleid.apple.com und verwenden Sie es anstelle Ihres regulären Passworts.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Testing iCloud Drive connection in RcloneView" class="img-large img-center" />

## Langsames Auflisten oder unvollständige Dateisichtbarkeit

iCloud Drive nutzt bedarfsgesteuerten Speicher, das heißt, Dateien können ausschließlich in iCloud gespeichert und nicht lokal heruntergeladen sein. Beim Durchsuchen über rclone können Dateien, die noch nicht lokal auf dem Mac zwischengespeichert sind, mit eingeschränkten Metadaten angezeigt werden oder länger zum Auflisten benötigen. Dies ist normales Verhalten — iCloud muss Dateimetadaten von Apples Servern abrufen.

Wenn Ordnerauflistungen unvollständig erscheinen, versuchen Sie, das Panel zu aktualisieren (F5 oder **Reload** im Rechtsklickmenü). Setzen Sie bei großen iCloud-Bibliotheken die **Anzahl der Gleichheitsprüfer** in den Auftragseinstellungen auf einen niedrigeren Wert (2–4), um die Rate zu reduzieren, mit der rclone die iCloud-API während Vergleichsvorgängen belastet.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="iCloud Drive transfer monitoring in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Überprüfen Sie über die Fußleiste, ob Ihre eingebettete rclone-Version v1.69.1 oder höher ist.
3. Verwenden Sie bei der Konfiguration des Remotes Ihre Apple-ID und den 2FA-Code (oder ein app-spezifisches Passwort).
4. Reduzieren Sie die Prüfer-Nebenläufigkeit, wenn Sie langsames Auflisten oder Zeitüberschreitungen feststellen.

Sobald es korrekt konfiguriert ist, lässt sich iCloud Drive nahtlos in Ihren RcloneView-Workflow für Backup und Cloud-übergreifende Übertragungen integrieren.

---

**Verwandte Leitfäden:**

- [iCloud Drive Cloud-Synchronisation mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [macOS-Fehler „Zu viele geöffnete Dateien" in RcloneView beheben](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView unter macOS Sonoma — Cloud-Synchronisation und Backup](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
