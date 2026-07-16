---
slug: fix-macos-too-many-open-files-rcloneview
title: "macOS-Fehler „Zu viele geöffnete Dateien“ beheben — Lösung mit RcloneView"
authors:
  - tayson
description: "Beheben Sie den macOS-Fehler „zu viele geöffnete Dateien“ bei der Verwendung von RcloneView für Cloud-Mounts oder große Synchronisationen. Schritt-für-Schritt-Anleitung zur Erhöhung der Datei-Deskriptor-Limits unter macOS."
keywords:
  - macOS zu viele geöffnete Dateien
  - Datei-Deskriptor-Limit macOS beheben
  - RcloneView macOS Fehler
  - macOS Mount-Fehler
  - ulimit macOS RcloneView
  - LaunchDaemon maxfiles
  - macOS Cloud-Mount-Fix
  - RcloneView Fehlerbehebung macOS
  - Limit geöffneter Dateien macOS
  - rclone mount macOS beheben
tags:
  - RcloneView
  - macos
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# macOS-Fehler „Zu viele geöffnete Dateien" beheben — Lösung mit RcloneView

> Beheben Sie den Fehler „zu viele geöffnete Dateien" in RcloneView unter macOS, indem Sie das Systemlimit für Datei-Deskriptoren erhöhen — eine dokumentierte Lösung für Mount- und große Synchronisationsvorgänge.

macOS legt standardmäßig ein Limit für die Anzahl der Datei-Deskriptoren (geöffnete Dateien) fest, die ein Prozess verwenden kann — typischerweise zwischen 256 und 1024, abhängig von Ihrer macOS-Version. Wenn RcloneView ein Cloud-Laufwerk einbindet oder eine große Synchronisation mit vielen gleichzeitigen Dateivorgängen ausführt, kann dieses Limit ausgeschöpft werden, was zu Fehlern wie `too many open files` oder unerwarteten Mount-Fehlern führt. Dies ist eine dokumentierte macOS-Einschränkung, die eine Konfigurationsänderung auf Systemebene erfordert, um behoben zu werden.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum das passiert

Wenn Sie einen Cloud-Speicher mit RcloneView als virtuelles Laufwerk einbinden, verwaltet der rclone-Prozess geöffnete Datei-Handles für zwischengespeicherte Dateien und aktive Verzeichnislisten. Bei Remotes mit vielen Dateien — einem Google Drive mit 50.000 Dokumenten oder einem S3-Bucket mit Zehntausenden von Objekten — kann die Anzahl der gleichzeitigen Handles während intensiver Vorgänge die konservativen Standardwerte von macOS überschreiten.

Das empfohlene Limit für Datei-Handles für einen reibungslosen Mount-Betrieb liegt bei 524.288 (Soft- und Hard-Limit jeweils auf diesen Wert gesetzt). Dies ist der für RcloneView unter macOS dokumentierte Wert.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage in RcloneView on macOS" class="img-large img-center" />

## Erstellen der LaunchDaemon-Konfiguration

Um das Datei-Deskriptor-Limit unter macOS dauerhaft zu erhöhen, erstellen Sie eine LaunchDaemon-plist-Datei, die die Limits beim Systemstart festlegt. Öffnen Sie das Terminal und führen Sie die folgenden Schritte aus:

**1. Erstellen Sie die plist-Datei:**

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

**2. Fügen Sie diesen Inhalt ein:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>limit.maxfiles</string>
    <key>ProgramArguments</key>
    <array>
      <string>launchctl</string>
      <string>limit</string>
      <string>maxfiles</string>
      <string>524288</string>
      <string>524288</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>ServiceIPC</key>
    <false/>
  </dict>
</plist>
```

**3. Setzen Sie die richtigen Berechtigungen und laden Sie die Datei:**

```bash
sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
```

Nachdem Sie die Datei erstellt haben, **starten Sie Ihren Mac neu**, damit das neue Limit wirksam wird. Ein Neustart ist erforderlich — das Laden des Daemons ohne Neustart wendet die Limits möglicherweise nicht systemweit an.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Cloud drive mount working correctly after fixing file descriptor limit on macOS" class="img-large img-center" />

## Überprüfen, ob das Limit angewendet wurde

Öffnen Sie nach dem Neustart das Terminal und überprüfen Sie, ob die neuen Limits aktiv sind:

```bash
launchctl limit maxfiles
```

Die Ausgabe sollte `524288` sowohl für das Soft- als auch für das Hard-Limit anzeigen. Wenn niedrigere Werte angezeigt werden, enthält die plist-Datei möglicherweise einen Formatierungsfehler — überprüfen Sie sie erneut auf Tippfehler oder unsichtbare Zeichen.

## Weitere macOS-Probleme: Leere Ordner

Wenn Ihre Desktop-, Dokumente- oder Downloads-Ordner in RcloneView unter macOS Catalina und höher leer erscheinen, liegt die Ursache woanders: Die macOS-Datenschutzberechtigungen wurden RcloneView nicht erteilt. Gehen Sie zu Systemeinstellungen > Datenschutz & Sicherheit > Dateien & Ordner, suchen Sie RcloneView in der Liste und aktivieren Sie den Zugriff. Alternativ können Sie RcloneView für umfassendere Berechtigungen zum Vollzugriff auf die Festplatte hinzufügen. Starten Sie RcloneView nach Änderungen der Berechtigungen neu.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView macOS privacy permissions configuration" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Erstellen Sie `/Library/LaunchDaemons/limit.maxfiles.plist` mit Soft- und Hard-Limits von jeweils 524288.
3. Setzen Sie die richtigen Dateibesitzer und Berechtigungen und starten Sie Ihren Mac dann neu.
4. Überprüfen Sie die Limits nach dem Neustart mit `launchctl limit maxfiles`.

Das Erhöhen des Datei-Deskriptor-Limits ist eine einmalige Systemänderung, die Fehler bei geöffneten Dateien für alle zukünftigen Mount- und Synchronisationsvorgänge in RcloneView behebt.

---

**Verwandte Anleitungen:**

- [Bestes Cloud-Synchronisations- und Mount-Tool für macOS — RcloneView](https://rcloneview.com/support/blog/best-cloud-sync-mount-tool-macos-rcloneview)
- [Cloud-Speicher als lokales Laufwerk einbinden — Anleitung für RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Rclone-Fehler mit RcloneView beheben](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
